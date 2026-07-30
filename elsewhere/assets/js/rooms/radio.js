(function () {
  "use strict";

  var initialized = false;
  var ROOM_ID = "radio";
  var CHANNELS = [
    {
      id: "river",
      value: 804,
      frequency: "80.4",
      title: "河面交通台",
      copy: "03:17，东岸步道无拥堵。第九盏路灯下有一阵河风等待认领，请经过的行人稍微走慢一点。"
    },
    {
      id: "elsewhere",
      value: 880,
      frequency: "88.0",
      title: "他方线低空广播",
      copy: "这里是八十八点零。提醒旅客：他方线不负责带人逃走，只负责把差一点发生的事送回今天。"
    },
    {
      id: "messages",
      value: 1013,
      frequency: "101.3",
      title: "凌晨留言频率",
      copy: "以下是一则无人领取的回声。它曾从一台失重打字机上飘走，正在等待原来的句子。"
    }
  ];
  var CHANNEL_BY_ID = CHANNELS.reduce(function (result, channel) {
    result[channel.id] = channel;
    return result;
  }, {});
  var NOISE_LINES = [
    "雨声覆盖了大部分内容，只听见远处有人翻动一张车票。",
    "信号从两栋建筑之间滑过。请缓慢移动指针。",
    "这一段频率只有风，没有节目表。",
    "接收到不完整的报时：现在是三点……",
    "载波很弱，像一句话还在考虑要不要说出口。"
  ];

  function artifactWord(artifact) {
    if (typeof artifact === "string") {
      return artifact.trim().slice(0, 36);
    }
    if (!artifact || typeof artifact !== "object") {
      return "";
    }

    var keys = ["word", "text", "value", "title", "name"];
    for (var i = 0; i < keys.length; i += 1) {
      if (typeof artifact[keys[i]] === "string" && artifact[keys[i]].trim()) {
        return artifact[keys[i]].trim().slice(0, 36);
      }
    }
    return "";
  }

  function init(event) {
    if (initialized) {
      return;
    }

    var api = event && event.detail ? event.detail : window.Elsewhere;
    if (!api) {
      return;
    }
    initialized = true;

    var powerButton = document.getElementById("radio-power");
    var tuner = document.getElementById("radio-tuner");
    var stepDown = document.getElementById("radio-step-down");
    var stepUp = document.getElementById("radio-step-up");
    var frequencyOutput = document.getElementById("radio-frequency");
    var clarityOutput = document.getElementById("radio-clarity");
    var meterFill = document.getElementById("radio-meter-fill");
    var signalLabel = document.getElementById("radio-signal-label");
    var transcriptTitle = document.getElementById("radio-transcript-title");
    var transcriptCopy = document.getElementById("radio-transcript-copy");
    var echo = document.getElementById("radio-echo");
    var status = document.getElementById("radio-progress-status");
    var canvas = document.getElementById("radio-scope");
    var context2d = canvas.getContext("2d");
    var motionQuery = typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : null;
    var roomData = api.getRoomData(ROOM_ID) || {};
    var storedChannels = Array.isArray(roomData.foundChannels) ? roomData.foundChannels : [];
    var found = new Set(storedChannels.filter(function (id) {
      return Boolean(CHANNEL_BY_ID[id]);
    }));
    var powered = false;
    var clarity = 0;
    var activeChannel = null;
    var candidateChannel = null;
    var candidateTimer = 0;
    var audioContext = null;
    var noiseSource = null;
    var noiseGain = null;
    var toneOscillator = null;
    var toneGain = null;
    var masterGain = null;
    var animationFrame = 0;
    var scopePhase = 0;
    var word = artifactWord(api.getArtifact("typewriterWord"));

    if (Number.isFinite(Number(roomData.lastFrequency))) {
      tuner.value = String(Math.max(760, Math.min(1080, Number(roomData.lastFrequency))));
    }

    function nearestChannel(value) {
      return CHANNELS.reduce(function (nearest, channel) {
        var distance = Math.abs(value - channel.value);
        if (!nearest || distance < nearest.distance) {
          return { channel: channel, distance: distance };
        }
        return nearest;
      }, null);
    }

    function renderLogs() {
      CHANNELS.forEach(function (channel) {
        var item = document.querySelector('[data-channel-log="' + channel.id + '"]');
        var isFound = found.has(channel.id);
        item.classList.toggle("is-found", isFound);
        if (isFound) {
          item.querySelector("strong").textContent = channel.frequency + " MHz";
          item.querySelector("small").textContent = channel.title;
        }
      });
      document.getElementById("radio-found-count").textContent = String(found.size);
    }

    function awardIfComplete() {
      if (found.size !== CHANNELS.length) {
        return;
      }
      var isNew = api.awardStamp(ROOM_ID, {
        channels: CHANNELS.map(function (channel) {
          return channel.frequency;
        }).join(","),
        receiver: "RX-0317"
      });
      if (isNew) {
        api.toast("E03 接收完成：低空广播室已在护照留下「当成」。");
      }
    }

    function registerChannel(channel) {
      candidateTimer = 0;
      candidateChannel = null;
      if (found.has(channel.id)) {
        return;
      }

      found.add(channel.id);
      api.setRoomData(ROOM_ID, {
        foundChannels: CHANNELS.filter(function (candidate) {
          return found.has(candidate.id);
        }).map(function (candidate) {
          return candidate.id;
        }),
        lastFrequency: Number(tuner.value)
      });
      renderLogs();
      status.textContent = channel.frequency + " 兆赫已清晰登记。共找到 " + found.size + " 个频道。";
      api.toast("已登记 " + channel.frequency + " MHz · " + channel.title);
      awardIfComplete();
    }

    function setCandidate(channel) {
      if (candidateChannel === channel.id || found.has(channel.id)) {
        return;
      }
      window.clearTimeout(candidateTimer);
      candidateChannel = channel.id;
      candidateTimer = window.setTimeout(function () {
        if (powered && activeChannel && activeChannel.id === channel.id && clarity >= 0.9) {
          registerChannel(channel);
        } else {
          candidateTimer = 0;
          candidateChannel = null;
        }
      }, 700);
    }

    function clearCandidate() {
      window.clearTimeout(candidateTimer);
      candidateTimer = 0;
      candidateChannel = null;
    }

    function updateAudio() {
      if (!audioContext || !noiseGain || !toneGain || !masterGain) {
        return;
      }
      var now = audioContext.currentTime;
      noiseGain.gain.cancelScheduledValues(now);
      toneGain.gain.cancelScheduledValues(now);
      noiseGain.gain.linearRampToValueAtTime(0.72 - (clarity * 0.58), now + 0.08);
      toneGain.gain.linearRampToValueAtTime(clarity * 0.34, now + 0.08);
      toneOscillator.frequency.linearRampToValueAtTime(185 + (Number(tuner.value) % 17) * 7, now + 0.08);
    }

    function renderTranscript(nearest) {
      echo.hidden = true;
      echo.textContent = "";

      if (!powered) {
        transcriptTitle.textContent = "接收机尚未通电";
        transcriptCopy.textContent = "启用接收机后，沿刻度寻找微弱的金色标记。";
        signalLabel.textContent = "NO CARRIER";
        return;
      }

      if (clarity >= 0.5) {
        var channel = nearest.channel;
        transcriptTitle.textContent = clarity >= 0.9 ? channel.title + " · 清晰接收" : channel.title + " · 信号断续";
        transcriptCopy.textContent = channel.copy;
        signalLabel.textContent = clarity >= 0.9 ? "LOCKED " + channel.frequency : "CARRIER " + channel.frequency;

        if (channel.id === "messages") {
          echo.hidden = false;
          echo.textContent = word
            ? "失重打字间回声：「" + word + "」"
            : "失重打字间回声：一枚尚未被打出的词。";
        }
      } else {
        var noiseIndex = Math.floor(Number(tuner.value) / 7 + api.seedFor("radio-static")) % NOISE_LINES.length;
        transcriptTitle.textContent = "频率之间";
        transcriptCopy.textContent = NOISE_LINES[noiseIndex];
        signalLabel.textContent = "SEARCHING";
      }
    }

    function updateTuning(allowRegistration) {
      var value = Number(tuner.value);
      var nearest = nearestChannel(value);
      frequencyOutput.value = (value / 10).toFixed(1);
      frequencyOutput.textContent = (value / 10).toFixed(1);

      clarity = powered ? Math.max(0, 1 - (nearest.distance / 13)) : 0;
      if (clarity < 0.05) {
        clarity = 0;
      }
      activeChannel = clarity >= 0.5 ? nearest.channel : null;
      var percent = Math.round(clarity * 100);
      clarityOutput.value = String(percent);
      clarityOutput.textContent = percent + "%";
      meterFill.style.width = percent + "%";
      renderTranscript(nearest);
      updateAudio();
      drawScope();

      api.setRoomData(ROOM_ID, { lastFrequency: value });
      if (allowRegistration && powered && nearest.distance <= 1 && !found.has(nearest.channel.id)) {
        setCandidate(nearest.channel);
      } else {
        clearCandidate();
      }
    }

    function buildAudio() {
      var AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) {
        throw new Error("Web Audio is not supported");
      }

      audioContext = new AudioContextClass();
      masterGain = audioContext.createGain();
      masterGain.gain.value = 0.035;

      var buffer = audioContext.createBuffer(1, audioContext.sampleRate * 2, audioContext.sampleRate);
      var samples = buffer.getChannelData(0);
      for (var i = 0; i < samples.length; i += 1) {
        samples[i] = (Math.random() * 2) - 1;
      }

      noiseSource = audioContext.createBufferSource();
      noiseSource.buffer = buffer;
      noiseSource.loop = true;
      noiseGain = audioContext.createGain();
      noiseGain.gain.value = 0.72;

      toneOscillator = audioContext.createOscillator();
      toneOscillator.type = "sine";
      toneOscillator.frequency.value = 220;
      toneGain = audioContext.createGain();
      toneGain.gain.value = 0;

      noiseSource.connect(noiseGain);
      noiseGain.connect(masterGain);
      toneOscillator.connect(toneGain);
      toneGain.connect(masterGain);
      masterGain.connect(audioContext.destination);
      noiseSource.start();
      toneOscillator.start();
    }

    function stopAudio() {
      if (audioContext) {
        audioContext.close().catch(function () {
          return undefined;
        });
      }
      audioContext = null;
      noiseSource = null;
      noiseGain = null;
      toneOscillator = null;
      toneGain = null;
      masterGain = null;
    }

    function setPower(nextPowered) {
      powered = nextPowered;
      document.body.classList.toggle("is-radio-powered", powered);
      powerButton.setAttribute("aria-pressed", powered ? "true" : "false");
      tuner.disabled = !powered;
      stepDown.disabled = !powered;
      stepUp.disabled = !powered;
      document.querySelector(".radio-on-air").lastChild.textContent = powered ? " ON AIR" : " OFF AIR";
      powerButton.querySelector("strong").textContent = powered ? "关闭接收机" : "启用接收机";
      powerButton.querySelector("small").textContent = powered ? "当前声音已开启" : "声音将在点击后开启";

      if (!powered) {
        clearCandidate();
        stopAudio();
      }
      updateTuning(powered);
    }

    powerButton.addEventListener("click", function () {
      if (powered) {
        setPower(false);
        return;
      }

      try {
        buildAudio();
        if (audioContext.state === "suspended") {
          audioContext.resume();
        }
        setPower(true);
        status.textContent = "接收机已启用。使用滑块或方向键寻找频道。";
      } catch (error) {
        setPower(true);
        powerButton.querySelector("small").textContent = "设备静音 · 文字调谐可用";
        api.toast("接收机未能发声，文字调谐仍可使用。");
      }
    });

    tuner.addEventListener("input", function () {
      updateTuning(true);
    });

    tuner.addEventListener("change", function () {
      updateTuning(true);
    });

    function stepFrequency(amount) {
      var next = Math.max(760, Math.min(1080, Number(tuner.value) + amount));
      tuner.value = String(next);
      updateTuning(true);
    }

    stepDown.addEventListener("click", function () {
      stepFrequency(-1);
    });
    stepUp.addEventListener("click", function () {
      stepFrequency(1);
    });

    function resizeCanvas() {
      var rect = canvas.getBoundingClientRect();
      var pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * pixelRatio));
      canvas.height = Math.max(1, Math.round(rect.height * pixelRatio));
      drawScope();
    }

    function drawScope() {
      if (!context2d) {
        return;
      }
      var width = canvas.width;
      var height = canvas.height;
      context2d.clearRect(0, 0, width, height);
      context2d.beginPath();
      context2d.lineWidth = Math.max(1, width / 500);
      context2d.strokeStyle = powered ? "rgba(143, 211, 176, .78)" : "rgba(83, 115, 98, .45)";
      context2d.shadowColor = "rgba(126, 179, 155, .45)";
      context2d.shadowBlur = powered ? 8 : 0;

      var center = height / 2;
      var amplitude = powered ? height * (0.11 + (1 - clarity) * 0.2) : 0;
      for (var x = 0; x <= width; x += Math.max(1, width / 260)) {
        var normalized = x / width;
        var carrier = Math.sin((normalized * Math.PI * (10 + clarity * 9)) + scopePhase);
        var noise = Math.sin((normalized * Math.PI * 41) + scopePhase * 1.7) * (1 - clarity) * 0.55;
        var y = center + (carrier + noise) * amplitude;
        if (x === 0) {
          context2d.moveTo(x, y);
        } else {
          context2d.lineTo(x, y);
        }
      }
      context2d.stroke();
      context2d.shadowBlur = 0;
    }

    function animateScope() {
      if (isMotionReduced()) {
        animationFrame = 0;
        drawScope();
        return;
      }
      scopePhase += powered ? 0.075 : 0.015;
      drawScope();
      animationFrame = window.requestAnimationFrame(animateScope);
    }

    function isMotionReduced() {
      if (api.motion && typeof api.motion.reduced === "boolean") {
        return api.motion.reduced;
      }
      return document.documentElement.getAttribute("data-motion") === "reduced" ||
        Boolean(motionQuery && motionQuery.matches);
    }

    function syncScopeMotion(eventObject) {
      var reduced = eventObject && eventObject.detail &&
        typeof eventObject.detail.reduced === "boolean"
        ? eventObject.detail.reduced
        : isMotionReduced();
      if (reduced) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
        drawScope();
      } else if (!animationFrame) {
        animateScope();
      }
    }

    renderLogs();
    updateTuning(false);
    resizeCanvas();
    if (!isMotionReduced()) {
      animateScope();
    }
    document.addEventListener("elsewhere:motion", syncScopeMotion);
    if (motionQuery) {
      if (typeof motionQuery.addEventListener === "function") {
        motionQuery.addEventListener("change", syncScopeMotion);
      } else if (typeof motionQuery.addListener === "function") {
        motionQuery.addListener(syncScopeMotion);
      }
    }

    if (typeof ResizeObserver === "function") {
      new ResizeObserver(resizeCanvas).observe(canvas);
    } else {
      window.addEventListener("resize", resizeCanvas);
    }

    window.addEventListener("pagehide", function () {
      window.cancelAnimationFrame(animationFrame);
      document.removeEventListener("elsewhere:motion", syncScopeMotion);
      if (motionQuery) {
        if (typeof motionQuery.removeEventListener === "function") {
          motionQuery.removeEventListener("change", syncScopeMotion);
        } else if (typeof motionQuery.removeListener === "function") {
          motionQuery.removeListener(syncScopeMotion);
        }
      }
      stopAudio();
    }, { once: true });

    awardIfComplete();
  }

  document.addEventListener("elsewhere:ready", init, { once: true });
  if (window.Elsewhere && document.readyState !== "loading") {
    window.setTimeout(function () {
      init({ detail: window.Elsewhere });
    }, 0);
  }
}());
