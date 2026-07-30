(function () {
  "use strict";

  var booted = false;

  document.addEventListener("elsewhere:ready", function (event) {
    boot(event.detail);
  });

  if (window.Elsewhere) {
    window.queueMicrotask(function () {
      boot(window.Elsewhere);
    });
  }

  function boot(Elsewhere) {
    if (booted || !Elsewhere) return;
    booted = true;

    var canvas = document.getElementById("uni-canvas");
    if (!canvas) return;
    var context = typeof canvas.getContext === "function" ? canvas.getContext("2d") : null;
    if (!context) {
      context = makeNullContext();
      canvas.setAttribute("aria-label", "当前设备无法显示宇宙画布；参数、事件记录与六十秒演算仍可完整运行。");
    }

    var viewport = canvas.parentElement;
    var expansionInput = document.getElementById("uni-expansion");
    var matterInput = document.getElementById("uni-matter");
    var fluctuationInput = document.getElementById("uni-fluctuation");
    var expansionValue = document.getElementById("uni-expansion-value");
    var matterValue = document.getElementById("uni-matter-value");
    var fluctuationValue = document.getElementById("uni-fluctuation-value");
    var parameterFieldset = document.getElementById("uni-parameters");
    var startButton = document.getElementById("uni-start");
    var startLabel = document.getElementById("uni-start-label");
    var pauseButton = document.getElementById("uni-pause");
    var againButton = document.getElementById("uni-again");
    var speedButtons = Array.prototype.slice.call(document.querySelectorAll("[data-speed]"));
    var secondsOutput = document.getElementById("uni-seconds");
    var progress = document.getElementById("uni-progress");
    var scaleFactorOutput = document.getElementById("uni-scale-factor");
    var phaseCard = document.getElementById("uni-phase-card");
    var phaseIndexOutput = document.getElementById("uni-phase-index");
    var phaseNameOutput = document.getElementById("uni-phase-name");
    var phaseNoteOutput = document.getElementById("uni-phase-note");
    var logList = document.getElementById("uni-log-list");
    var status = document.getElementById("uni-status");
    var seedOutput = document.getElementById("uni-seed");
    var localTimeOutput = document.getElementById("uni-local-time");
    var finishCard = document.getElementById("uni-finish-card");
    var endingTitle = document.getElementById("uni-ending-title");
    var endingCopy = document.getElementById("uni-ending-copy");
    var signatureOutput = document.getElementById("uni-signature");
    var lastPhotonOutput = document.getElementById("uni-last-photon");
    var reduceMotion = isMotionReduced();
    var roomState = Elsewhere.getRoomData("universe") || {};
    var fixedStep = 0.05;
    var totalSteps = Math.round(60 / fixedStep);
    var width = 0;
    var height = 0;
    var pixelRatio = 1;
    var lastReducedDraw = 0;
    var speed = 1;
    var stars = [];
    var dust = [];
    var state = makeIdleState();

    var phases = [
      {
        at: 0,
        name: "奇点松开",
        note: "空间第一次拥有“外面”的概念。",
        log: "时空开始，不接受退回"
      },
      {
        at: 1.4,
        name: "暴涨",
        note: "一个几乎没有尺寸的差异，被放大成未来的结构。",
        log: "尺度急剧膨胀"
      },
      {
        at: 5.8,
        name: "第一批原子",
        note: "光终于可以独自走远，黑暗第一次变得透明。",
        log: "光与物质解除临时同行"
      },
      {
        at: 12.2,
        name: "恒星点火",
        note: "引力把散乱的气体说服到一起，第一盏灯亮了。",
        log: "首颗恒星获得点火许可"
      },
      {
        at: 21.0,
        name: "星系成群",
        note: "旋转把遥远的光组织成岛屿，也组织出岛屿之间的空白。",
        log: "大尺度结构完成编目"
      },
      {
        at: 31.5,
        name: "行星冷却",
        note: "某些尘埃不再发光，开始有机会保存雨和脚印。",
        log: "固态表面首次通过验收"
      },
      {
        at: 40.0,
        name: "微小生命",
        note: "物质学会复制一个并不完美的自己。",
        log: "检测到自我延续的偏差"
      },
      {
        at: 48.0,
        name: "文明睁眼",
        note: "一小片物质开始询问其余物质为什么存在。",
        log: "窄带信号越过本地恒星"
      },
      {
        at: 55.0,
        name: "最后的消息",
        note: "距离继续增长。回答越来越晚，问题却仍在路上。",
        log: "可通信邻域持续缩小"
      },
      {
        at: 59.2,
        name: "余晖",
        note: "没有真正的黑屏，只有最后一束光还没抵达。",
        log: "进入最终观测窗口"
      }
    ];

    function makeNullContext() {
      var gradient = { addColorStop: function () {} };
      return {
        arc: function () {},
        beginPath: function () {},
        clearRect: function () {},
        createRadialGradient: function () { return gradient; },
        fill: function () {},
        fillRect: function () {},
        setTransform: function () {},
        stroke: function () {}
      };
    }

    canvas.tabIndex = 0;
    canvas.setAttribute("aria-describedby", "uni-status");

    function isMotionReduced() {
      return Boolean(
        (Elsewhere.motion && Elsewhere.motion.reduced) ||
        document.documentElement.getAttribute("data-motion") === "reduced" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }

    function makeIdleState() {
      return {
        mode: "idle",
        running: false,
        paused: false,
        stepIndex: 0,
        simTime: 0,
        accumulator: 0,
        lastFrame: performance.now(),
        phaseIndex: 0,
        checksum: 2166136261,
        structure: 0,
        energy: 1,
        observers: 0,
        seed: 0,
        seedLabel: "——————",
        params: {
          expansion: 62,
          matter: 58,
          fluctuation: 42
        }
      };
    }

    function hashText(text) {
      var hash = 2166136261;
      for (var index = 0; index < text.length; index += 1) {
        hash ^= text.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
      }
      return hash >>> 0;
    }

    function createRandom(seed) {
      var randomState = seed >>> 0;
      return function () {
        randomState += 0x6d2b79f5;
        var value = randomState;
        value = Math.imul(value ^ (value >>> 15), value | 1);
        value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
        return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
      };
    }

    function clamp(value, minimum, maximum) {
      return Math.max(minimum, Math.min(maximum, value));
    }

    function smoothstep(edge0, edge1, value) {
      var amount = clamp((value - edge0) / (edge1 - edge0), 0, 1);
      return amount * amount * (3 - 2 * amount);
    }

    function currentParameters() {
      return {
        expansion: Number(expansionInput.value),
        matter: Number(matterInput.value),
        fluctuation: Number(fluctuationInput.value)
      };
    }

    function computeSeed(parameters) {
      var dailySeed = Number(Elsewhere.seedFor("universe")) >>> 0;
      return (dailySeed ^ hashText(parameters.expansion + "|" + parameters.matter + "|" + parameters.fluctuation)) >>> 0;
    }

    function updateParameterLabels() {
      expansionValue.textContent = expansionInput.value;
      matterValue.textContent = matterInput.value;
      fluctuationValue.textContent = fluctuationInput.value;
      var parameters = currentParameters();
      var previewSeed = computeSeed(parameters);
      seedOutput.textContent = "SEED " + previewSeed.toString(36).toUpperCase().padStart(7, "0").slice(-7);
      if (state.mode === "idle") {
        state.params = parameters;
        state.seed = previewSeed;
        state.seedLabel = previewSeed.toString(36).toUpperCase().padStart(7, "0").slice(-7);
        createCosmos();
        draw();
      }
    }

    function resizeCanvas() {
      var rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      draw();
    }

    function createCosmos() {
      var random = createRandom(state.seed || 1);
      var requestedStars = 90 + Math.round(state.params.matter * 2.4);
      var starCount = reduceMotion ? Math.round(requestedStars * 0.55) : requestedStars;
      stars = [];
      dust = [];

      for (var index = 0; index < starCount; index += 1) {
        var galaxy = index % Math.max(3, Math.round(state.params.fluctuation / 12));
        var armAngle = random() * Math.PI * 2 + galaxy * 0.9;
        var radius = Math.pow(random(), 0.62);
        stars.push({
          angle: armAngle,
          radius: radius,
          squash: 0.46 + random() * 0.44,
          drift: (random() - 0.5) * 0.24,
          size: 0.55 + random() * 1.75,
          birth: 10.5 + random() * 20,
          death: 47 + random() * 18,
          warmth: random(),
          galaxy: galaxy,
          twinkle: random() * Math.PI * 2,
          habitable: random() < state.params.fluctuation / 720
        });
      }

      var dustCount = reduceMotion ? 45 : 110;
      for (var dustIndex = 0; dustIndex < dustCount; dustIndex += 1) {
        dust.push({
          angle: random() * Math.PI * 2,
          radius: Math.pow(random(), 0.8),
          size: 0.5 + random() * 1.2,
          opacity: 0.08 + random() * 0.18
        });
      }
    }

    function addLog(time, text, current) {
      Array.prototype.forEach.call(logList.children, function (item) {
        item.classList.remove("is-current");
      });
      var item = document.createElement("li");
      if (current) item.classList.add("is-current");
      var timestamp = document.createElement("time");
      timestamp.textContent = Number(time).toFixed(1).padStart(4, "0");
      var copy = document.createElement("span");
      copy.textContent = text;
      item.appendChild(timestamp);
      item.appendChild(copy);
      logList.appendChild(item);
      while (logList.children.length > 10) {
        logList.firstElementChild.remove();
      }
      logList.scrollTop = logList.scrollHeight;
    }

    function setPhase(index, shouldLog) {
      var phase = phases[index];
      state.phaseIndex = index;
      phaseIndexOutput.textContent = "阶段 " + String(index + 1).padStart(2, "0");
      phaseNameOutput.textContent = phase.name;
      phaseNoteOutput.textContent = phase.note;
      status.textContent = Number(phase.at).toFixed(1) + " 秒：" + phase.name + "。";
      if (shouldLog) addLog(phase.at, phase.log, true);
    }

    function resetLog() {
      logList.replaceChildren();
      addLog(0, phases[0].log, true);
    }

    function setParameterLock(locked) {
      parameterFieldset.disabled = locked;
    }

    function startSimulation() {
      var parameters = currentParameters();
      state = makeIdleState();
      state.mode = "running";
      state.running = true;
      state.params = parameters;
      state.seed = computeSeed(parameters);
      state.seedLabel = state.seed.toString(36).toUpperCase().padStart(7, "0").slice(-7);
      state.lastFrame = performance.now();
      seedOutput.textContent = "SEED " + state.seedLabel;
      createCosmos();
      resetLog();
      setPhase(0, false);
      setParameterLock(true);
      finishCard.hidden = true;
      phaseCard.hidden = false;
      viewport.classList.add("is-running");
      startButton.disabled = true;
      startLabel.textContent = "观测进行中";
      pauseButton.disabled = false;
      pauseButton.textContent = "暂停观测";
      secondsOutput.textContent = "00.0";
      progress.value = 0;
      localTimeOutput.textContent = "台站时 03:17 · T+00";
      status.textContent = "观测已启动。所有 1200 个演化步将依次执行。";
      draw();
    }

    function togglePause(forcePause) {
      if (state.mode !== "running") return;
      var shouldPause = typeof forcePause === "boolean" ? forcePause : !state.paused;
      if (state.paused === shouldPause) return;
      state.paused = shouldPause;
      state.lastFrame = performance.now();
      pauseButton.textContent = shouldPause ? "继续观测" : "暂停观测";
      startLabel.textContent = shouldPause ? "观测已暂停" : "观测进行中";
      status.textContent = shouldPause ? "观测已暂停；宇宙的钟没有偷偷前进。" : "观测继续。";
    }

    function simulateFixedStep() {
      if (state.stepIndex >= totalSteps) return;

      state.stepIndex += 1;
      state.simTime = Math.min(60, state.stepIndex * fixedStep);
      var t = state.simTime;
      var matterRatio = state.params.matter / 100;
      var fluctuationRatio = state.params.fluctuation / 100;
      var expansionRatio = state.params.expansion / 100;

      var starFormation = smoothstep(9, 31, t) * matterRatio * (0.55 + fluctuationRatio);
      var cooling = smoothstep(46, 60, t);
      state.structure += (starFormation * (1 - cooling * 0.72) - expansionRatio * 0.006) * fixedStep;
      state.energy = Math.max(0.00001, Math.exp(-t * (0.058 + expansionRatio * 0.028)));

      if (t > 39) {
        var lifeWindow = smoothstep(39, 49, t) * (1 - smoothstep(55, 60, t));
        state.observers += lifeWindow * fluctuationRatio * matterRatio * fixedStep * 0.09;
      }

      var metric = Math.floor((state.structure + state.energy + state.observers) * 100000);
      state.checksum ^= metric + state.stepIndex + Math.floor(expansionRatio * 997);
      state.checksum = Math.imul(state.checksum, 16777619) >>> 0;

      while (state.phaseIndex + 1 < phases.length && t >= phases[state.phaseIndex + 1].at) {
        setPhase(state.phaseIndex + 1, true);
      }
    }

    function universeScale(time) {
      var expansion = state.params.expansion / 62;
      var matterDominance = (state.params.matter - state.params.expansion) / 100;
      var scale = 0.018 + Math.pow(time / 60, 0.72) * (0.9 + expansion * 0.55);
      if (matterDominance > 0.2 && time > 49) {
        scale *= 1 - smoothstep(49, 60, time) * Math.min(0.72, matterDominance * 2.2);
      }
      return Math.max(0.006, scale);
    }

    function endingForState() {
      var expansion = state.params.expansion;
      var matter = state.params.matter;
      var fluctuation = state.params.fluctuation;
      var difference = matter - expansion;

      if (difference >= 22) {
        return {
          code: "RETURN",
          title: "回落之钟",
          copy: "物质最终说服空间停止远离。所有星系沿旧路返回，最后一束光照见的，是宇宙再次变成一个没有方向的点。",
          photon: "在回程途中被重新收拢"
        };
      }
      if (difference <= -22) {
        return {
          code: "ISLAND",
          title: "孤岛长夜",
          copy: "膨胀把每一座星系送出彼此的视野。很久以后，每个文明都会误以为自己的光，是黑暗里唯一发生过的事。",
          photon: "仍在穿越一段无人测量的距离"
        };
      }
      if (fluctuation >= 68) {
        return {
          code: "GARDEN",
          title: "分岔花园",
          copy: "最初那些极小的不均匀没有被抚平。繁星沿无数分支生长，宇宙直到变暗，也没有重复过同一种天空。",
          photon: "携带一幅无法复刻的星图"
        };
      }
      if (matter >= 60 && fluctuation >= 44) {
        return {
          code: "CHOIR",
          title: "微光合唱",
          copy: "距离足够远，物质也足够多。许多短暂的文明没能相遇，却在不同年代问出了相似的问题。",
          photon: "记录了最后一次彼此回答"
        };
      }
      return {
        code: "AFTERGLOW",
        title: "安静余晖",
        copy: "宇宙没有戏剧性地终止。恒星一盏盏熄灭，留下漫长而温和的余温，像一间终于无人值班的观察室。",
        photon: "比任何见证者多停留了一会儿"
      };
    }

    function finishSimulation() {
      if (state.mode === "finished") return;
      state.mode = "finished";
      state.running = false;
      state.paused = false;
      state.simTime = 60;
      state.stepIndex = totalSteps;
      var ending = endingForState();
      var checksum = (state.checksum >>> 0).toString(16).toUpperCase().padStart(8, "0").slice(-6);
      var signature = "Ω-" + ending.code + "-" + state.seedLabel + "-" + checksum;

      secondsOutput.textContent = "60.0";
      progress.value = 60;
      scaleFactorOutput.textContent = universeScale(60).toFixed(3);
      localTimeOutput.textContent = "台站时 03:17 · 观测完毕";
      pauseButton.disabled = true;
      startLabel.textContent = "完整观测结束";
      viewport.classList.remove("is-running");
      phaseCard.hidden = true;
      endingTitle.textContent = ending.title;
      endingCopy.textContent = ending.copy;
      signatureOutput.textContent = signature;
      lastPhotonOutput.textContent = ending.photon;
      finishCard.hidden = false;
      addLog(60, "完成全部 " + totalSteps + " 个演化步", true);
      status.textContent = "六十秒完整观测结束。宇宙签名：" + signature + "。";

      Elsewhere.setArtifact("universeSignature", signature);
      Elsewhere.setRoomData("universe", {
        completedCount: Number(roomState.completedCount || 0) + 1,
        completedAt: new Date().toISOString(),
        signature: signature,
        ending: ending.title,
        parameters: state.params,
        simulatedSteps: state.stepIndex
      });
      roomState.completedCount = Number(roomState.completedCount || 0) + 1;
      var isNew = Elsewhere.awardStamp("universe", {
        signature: signature,
        ending: ending.title,
        simulatedSteps: state.stepIndex
      });
      Elsewhere.toast(isNew ? "E07 印章已记录这一次宇宙。" : "新的宇宙签名已归档。");
      draw();
    }

    function resetForAnotherUniverse() {
      state = makeIdleState();
      state.params = currentParameters();
      state.seed = computeSeed(state.params);
      state.seedLabel = state.seed.toString(36).toUpperCase().padStart(7, "0").slice(-7);
      createCosmos();
      setParameterLock(false);
      startButton.disabled = false;
      startLabel.textContent = "启动六十秒";
      pauseButton.disabled = true;
      pauseButton.textContent = "暂停观测";
      finishCard.hidden = true;
      phaseCard.hidden = false;
      phaseIndexOutput.textContent = "阶段 00";
      phaseNameOutput.textContent = "等待一次起点";
      phaseNoteOutput.textContent = "参数已开放。宇宙尚未发生。";
      secondsOutput.textContent = "00.0";
      progress.value = 0;
      scaleFactorOutput.textContent = "0.000";
      localTimeOutput.textContent = "台站时 03:17 · T+00";
      logList.replaceChildren();
      addLog(0, "等待初始条件确认", true);
      status.textContent = "参数已重新开放。";
      draw();
    }

    function drawBackground(time) {
      var earlyGlow = 1 - smoothstep(0, 13, time);
      var gradient = context.createRadialGradient(
        width * 0.5,
        height * 0.5,
        0,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.72
      );
      gradient.addColorStop(0, "rgba(" + Math.round(35 + earlyGlow * 90) + ", " + Math.round(37 + earlyGlow * 46) + ", " + Math.round(57 + earlyGlow * 18) + ", 1)");
      gradient.addColorStop(0.36, time < 8 ? "#221825" : "#0a101b");
      gradient.addColorStop(1, "#02040a");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      if (time < 8 && state.mode !== "idle") {
        var flash = 1 - time / 8;
        var flashGradient = context.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height) * (0.08 + time / 24));
        flashGradient.addColorStop(0, "rgba(255, 244, 211, " + (0.78 * flash) + ")");
        flashGradient.addColorStop(0.18, "rgba(219, 153, 116, " + (0.55 * flash) + ")");
        flashGradient.addColorStop(1, "rgba(49, 36, 70, 0)");
        context.fillStyle = flashGradient;
        context.fillRect(0, 0, width, height);
      }
    }

    function drawCosmicDust(time, scale) {
      if (time < 3) return;
      var centerX = width / 2;
      var centerY = height / 2;
      var radiusBase = Math.min(width, height) * 0.47 * scale;
      context.fillStyle = "rgba(151, 181, 184, 0.12)";

      dust.forEach(function (particle) {
        var angle = particle.angle + time * 0.002;
        var radius = particle.radius * radiusBase;
        var x = centerX + Math.cos(angle) * radius;
        var y = centerY + Math.sin(angle) * radius * 0.72;
        context.globalAlpha = particle.opacity * smoothstep(3, 15, time);
        context.beginPath();
        context.arc(x, y, particle.size, 0, Math.PI * 2);
        context.fill();
      });
      context.globalAlpha = 1;
    }

    function starPosition(star, time, scale) {
      var rotation = time * (0.0015 + state.params.fluctuation / 40000) * (star.galaxy % 2 ? -1 : 1);
      var angle = star.angle + rotation + star.drift * smoothstep(10, 55, time);
      var expansionDistance = Math.min(width, height) * 0.46 * scale * star.radius;
      return {
        x: width / 2 + Math.cos(angle) * expansionDistance,
        y: height / 2 + Math.sin(angle) * expansionDistance * star.squash
      };
    }

    function drawStars(time, scale) {
      var cooling = smoothstep(53, 60, time);
      var visibleStars = [];

      stars.forEach(function (star) {
        if (time < star.birth) return;
        var born = smoothstep(star.birth, star.birth + 2.2, time);
        var death = 1 - smoothstep(star.death, Math.min(64, star.death + 5), time);
        var opacity = born * death * (1 - cooling * 0.42);
        if (opacity <= 0.01) return;

        var point = starPosition(star, time, scale);
        visibleStars.push({ star: star, point: point, opacity: opacity });
        var twinkle = reduceMotion ? 1 : 0.82 + Math.sin(time * 2.1 + star.twinkle) * 0.18;
        var radius = star.size * (0.75 + scale * 0.3);
        context.globalAlpha = opacity * twinkle;
        context.fillStyle = star.warmth > 0.7 ? "#e3b78a" : star.warmth < 0.25 ? "#a9c9d1" : "#e9e4d5";
        context.beginPath();
        context.arc(point.x, point.y, radius, 0, Math.PI * 2);
        context.fill();

        if (radius > 1.45 && !reduceMotion) {
          context.globalAlpha = opacity * 0.18;
          context.beginPath();
          context.arc(point.x, point.y, radius * 4, 0, Math.PI * 2);
          context.fill();
        }
      });
      context.globalAlpha = 1;

      if (time > 40) drawObservers(time, visibleStars);
    }

    function drawObservers(time, visibleStars) {
      var candidateStars = visibleStars.filter(function (entry) {
        return entry.star.habitable && entry.opacity > 0.4;
      }).slice(0, reduceMotion ? 2 : 5);
      var lifeVisibility = smoothstep(40, 47, time) * (1 - smoothstep(56, 60, time) * 0.7);

      candidateStars.forEach(function (entry, index) {
        context.strokeStyle = "rgba(134, 207, 186, " + (0.34 * lifeVisibility) + ")";
        context.lineWidth = 1;
        context.beginPath();
        context.arc(entry.point.x, entry.point.y, 7 + index * 2, 0, Math.PI * 2);
        context.stroke();

        if (time > 48 && !reduceMotion) {
          var signalRadius = ((time - 48) * (12 + index * 2)) % 95;
          context.strokeStyle = "rgba(208, 168, 106, " + (0.22 * (1 - signalRadius / 95)) + ")";
          context.beginPath();
          context.arc(entry.point.x, entry.point.y, signalRadius, 0, Math.PI * 2);
          context.stroke();
        }
      });
    }

    function drawEndingLight(time) {
      if (time < 54) return;
      var ending = endingForState();
      var progressToEnd = smoothstep(54, 60, time);
      if (ending.code === "RETURN") {
        var radius = Math.max(4, (1 - progressToEnd) * Math.min(width, height) * 0.2);
        var collapse = context.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, radius * 3);
        collapse.addColorStop(0, "rgba(255, 218, 169, " + (0.3 + progressToEnd * 0.55) + ")");
        collapse.addColorStop(1, "rgba(154, 66, 54, 0)");
        context.fillStyle = collapse;
        context.fillRect(0, 0, width, height);
      } else {
        context.fillStyle = "rgba(2, 5, 11, " + (progressToEnd * 0.28) + ")";
        context.fillRect(0, 0, width, height);
      }
    }

    function draw() {
      if (!width || !height) return;
      var time = state.simTime;
      var scale = universeScale(time);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);
      drawBackground(time);

      if (state.mode === "idle") {
        context.fillStyle = "rgba(230, 218, 188, 0.75)";
        context.beginPath();
        context.arc(width / 2, height / 2, 2.2, 0, Math.PI * 2);
        context.fill();
        context.strokeStyle = "rgba(230, 218, 188, 0.12)";
        context.beginPath();
        context.arc(width / 2, height / 2, 24, 0, Math.PI * 2);
        context.stroke();
        return;
      }

      drawCosmicDust(time, scale);
      drawStars(time, scale);
      drawEndingLight(time);
    }

    function updateReadouts() {
      secondsOutput.textContent = state.simTime.toFixed(1).padStart(4, "0");
      progress.value = state.simTime;
      scaleFactorOutput.textContent = universeScale(state.simTime).toFixed(3);
      var stationSeconds = Math.min(60, Math.floor(state.simTime));
      localTimeOutput.textContent = "台站时 03:17 · T+" + String(stationSeconds).padStart(2, "0");
    }

    function animate(now) {
      window.requestAnimationFrame(animate);
      var realDelta = Math.min((now - state.lastFrame) / 1000, 0.75);
      state.lastFrame = now;

      if (state.mode === "running" && !state.paused) {
        state.accumulator += realDelta * speed;
        var safety = 0;
        while (state.accumulator >= fixedStep && state.stepIndex < totalSteps && safety < 500) {
          simulateFixedStep();
          state.accumulator -= fixedStep;
          safety += 1;
        }
        updateReadouts();
        if (!reduceMotion || now - lastReducedDraw >= 125) {
          draw();
          lastReducedDraw = now;
        }
        if (state.stepIndex >= totalSteps) finishSimulation();
      }
    }

    [expansionInput, matterInput, fluctuationInput].forEach(function (input) {
      input.addEventListener("input", updateParameterLabels);
    });

    speedButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        speed = Number(button.dataset.speed);
        speedButtons.forEach(function (candidate) {
          candidate.setAttribute("aria-pressed", String(candidate === button));
        });
        status.textContent = speed === 1
          ? "观测倍率为 1×：完整六十秒。"
          : "观测倍率为 " + speed + "×：等待被压缩，1200 个演化步仍会全部执行。";
      });
    });

    startButton.addEventListener("click", startSimulation);
    pauseButton.addEventListener("click", function () {
      togglePause();
    });
    againButton.addEventListener("click", resetForAnotherUniverse);
    canvas.addEventListener("keydown", function (event) {
      if (event.key !== " " && event.key !== "Enter") return;
      event.preventDefault();
      if (state.mode === "idle") startSimulation();
      else if (state.mode === "running") togglePause();
    });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden && state.mode === "running" && !state.paused) {
        togglePause(true);
        status.textContent = "页面离开视野，观测已自动暂停。返回后可继续。";
      }
    });
    document.addEventListener("elsewhere:motion", function (event) {
      reduceMotion = event.detail && typeof event.detail.reduced === "boolean"
        ? event.detail.reduced
        : isMotionReduced();
      createCosmos();
      draw();
      status.textContent = reduceMotion
        ? "已切换为减少动态模式：粒子数量与刷新频率已降低。"
        : "标准宇宙动态效果已恢复。";
    });

    if (typeof ResizeObserver !== "undefined") {
      new ResizeObserver(resizeCanvas).observe(viewport);
    } else {
      window.addEventListener("resize", resizeCanvas);
    }

    if (roomState.parameters && typeof roomState.parameters === "object") {
      if (roomState.parameters.expansion) expansionInput.value = roomState.parameters.expansion;
      if (roomState.parameters.matter) matterInput.value = roomState.parameters.matter;
      if (roomState.parameters.fluctuation) fluctuationInput.value = roomState.parameters.fluctuation;
    }

    updateParameterLabels();
    resizeCanvas();
    window.requestAnimationFrame(animate);
  }
})();
