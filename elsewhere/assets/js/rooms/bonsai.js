(function () {
  "use strict";

  var ROOM_ID = "bonsai";
  var MAX_GROWTH = 20;
  var NOTE_META = [
    { name: "雨滴", key: "A", mark: "·", frequency: 220, color: "#7ca79c" },
    { name: "泥土", key: "S", mark: "—", frequency: 277.18, color: "#9a8062" },
    { name: "灯光", key: "D", mark: "✦", frequency: 329.63, color: "#d7c777" },
    { name: "夜风", key: "F", mark: "≈", frequency: 415.3, color: "#7799a8" }
  ];

  var app = null;
  var roomState = {
    growth: 0,
    stamped: false,
    bloomedAt: null,
    plantName: "",
    patternPosition: 0
  };
  var patterns = [];
  var currentPattern = [];
  var initialized = false;
  var soundEnabled = false;
  var audioContext = null;
  var micSession = null;
  var micTimer = null;
  var animationFrame = null;
  var lastDialogFocus = null;
  var plantSeed = 317;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var els = {};

  function safeCall(method, args, fallback) {
    if (!app || typeof app[method] !== "function") {
      return fallback;
    }
    try {
      var result = app[method].apply(app, args || []);
      return typeof result === "undefined" ? fallback : result;
    } catch (error) {
      console.warn("[Elsewhere:E08] " + method + " failed", error);
      return fallback;
    }
  }

  function hashString(input) {
    var value = String(input == null ? "" : input);
    var hash = 2166136261;
    for (var i = 0; i < value.length; i += 1) {
      hash ^= value.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function mulberry32(seed) {
    return function () {
      var t = seed += 0x6D2B79F5;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function motionIsReduced() {
    return reducedMotion ||
      Boolean(app && app.motion && app.motion.reduced) ||
      document.documentElement.getAttribute("data-motion") === "reduced";
  }

  function queryElements() {
    els.canvas = document.getElementById("bonsai-canvas");
    els.canvasWrap = document.getElementById("bonsai-canvas-wrap");
    els.echo = document.getElementById("bonsai-echo");
    els.stage = document.getElementById("bonsai-stage");
    els.plantName = document.getElementById("plant-name");
    els.plantCode = document.getElementById("plant-code");
    els.growthReadout = document.getElementById("growth-readout");
    els.growthTrack = document.getElementById("growth-track");
    els.measureNumber = document.getElementById("measure-number");
    els.rhythmScore = document.getElementById("rhythm-score");
    els.status = document.getElementById("bonsai-status");
    els.pads = Array.prototype.slice.call(document.querySelectorAll(".sound-pad"));
    els.soundToggle = document.getElementById("bonsai-sound-toggle");
    els.soundToggleCopy = els.soundToggle ? els.soundToggle.querySelector(".sound-toggle-copy") : null;
    els.replay = document.getElementById("replay-pattern");
    els.micButton = document.getElementById("mic-button");
    els.micLabel = document.getElementById("mic-button-label");
    els.micMeter = document.getElementById("mic-meter-fill");
    els.dialog = document.getElementById("bloom-dialog");
    els.dialogName = document.getElementById("bloom-plant-name");
    els.dialogClose = document.getElementById("bloom-close");
    els.dialogReturn = document.getElementById("bloom-return");
    els.live = document.getElementById("bonsai-live");
  }

  function extractArtifactText(value) {
    if (typeof value === "string" || typeof value === "number") {
      return String(value).trim();
    }
    if (!value || typeof value !== "object") {
      return "";
    }
    var candidates = [
      value.word,
      value.text,
      value.name,
      value.title,
      value.value,
      value.phrase,
      value.content
    ];
    for (var i = 0; i < candidates.length; i += 1) {
      if (typeof candidates[i] === "string" && candidates[i].trim()) {
        return candidates[i].trim();
      }
    }
    return "";
  }

  function choosePlantName() {
    var inherited = extractArtifactText(safeCall("getArtifact", ["typewriterWord"], null));
    if (inherited) {
      return inherited.slice(0, 18);
    }

    var prefixes = ["耳后", "小雨", "夜渡", "余白", "低声", "未眠", "回声", "灯影"];
    var suffixes = ["蕨", "铃", "枝", "苔", "芽", "兰", "穗", "叶"];
    var random = mulberry32(plantSeed);
    return prefixes[Math.floor(random() * prefixes.length)] +
      suffixes[Math.floor(random() * suffixes.length)];
  }

  function readState() {
    var saved = safeCall("getRoomData", [ROOM_ID], {});
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) {
      saved = {};
    }

    roomState.growth = clamp(Number(saved.growth) || 0, 0, MAX_GROWTH);
    roomState.stamped = Boolean(saved.stamped || saved.completed);
    roomState.bloomedAt = saved.bloomedAt || null;
    roomState.plantName = typeof saved.plantName === "string" && saved.plantName.trim()
      ? saved.plantName.trim().slice(0, 18)
      : choosePlantName();
    roomState.patternPosition = clamp(Number(saved.patternPosition) || 0, 0, 3);
  }

  function saveState() {
    safeCall("setRoomData", [ROOM_ID, {
      growth: roomState.growth,
      stamped: roomState.stamped,
      completed: roomState.growth >= MAX_GROWTH,
      bloomedAt: roomState.bloomedAt,
      plantName: roomState.plantName,
      patternPosition: roomState.patternPosition
    }]);
  }

  function buildPatterns() {
    var random = mulberry32(plantSeed ^ 0xE08317);
    var result = [];
    for (var measure = 0; measure < 5; measure += 1) {
      var phrase = [];
      for (var beat = 0; beat < 4; beat += 1) {
        var note = Math.floor(random() * NOTE_META.length);
        if (beat > 0 && note === phrase[beat - 1] && random() > 0.42) {
          note = (note + 1 + Math.floor(random() * 3)) % NOTE_META.length;
        }
        phrase.push(note);
      }
      result.push(phrase);
    }
    return result;
  }

  function currentMeasureIndex() {
    return Math.min(4, Math.floor(roomState.growth / 4));
  }

  function setStatus(message, assertive) {
    if (els.status) {
      els.status.textContent = message;
    }
    if (assertive && els.live) {
      els.live.textContent = "";
      window.setTimeout(function () {
        els.live.textContent = message;
      }, 20);
    }
  }

  function stageForGrowth(growth) {
    if (growth >= 20) return "已开花";
    if (growth >= 16) return "含苞";
    if (growth >= 12) return "展叶";
    if (growth >= 8) return "分枝";
    if (growth >= 4) return "破土";
    if (growth > 0) return "正在醒来";
    return "静默种子";
  }

  function renderPattern() {
    if (!els.rhythmScore) return;

    currentPattern = patterns[currentMeasureIndex()] || patterns[4] || [0, 1, 2, 3];
    els.rhythmScore.innerHTML = "";

    currentPattern.forEach(function (noteIndex, index) {
      var note = NOTE_META[noteIndex];
      var item = document.createElement("li");
      item.textContent = note.mark + " " + note.name;
      item.dataset.key = note.key;
      if (index < roomState.patternPosition || roomState.growth >= MAX_GROWTH) {
        item.classList.add("is-complete");
      } else if (index === roomState.patternPosition && roomState.growth < MAX_GROWTH) {
        item.classList.add("is-current");
        item.setAttribute("aria-current", "step");
      }
      els.rhythmScore.appendChild(item);
    });

    if (els.measureNumber) {
      els.measureNumber.textContent = String(currentMeasureIndex() + 1);
    }
  }

  function renderProgress() {
    var growth = roomState.growth;
    var percent = Math.round((growth / MAX_GROWTH) * 100);
    if (els.growthReadout) {
      els.growthReadout.textContent = growth + " / " + MAX_GROWTH;
    }
    if (els.growthTrack) {
      els.growthTrack.style.setProperty("--growth", percent + "%");
      els.growthTrack.dataset.level = String(Math.floor(growth / 4));
      els.growthTrack.setAttribute("aria-valuenow", String(growth));
    }
    if (els.stage) {
      els.stage.textContent = stageForGrowth(growth);
    }
    if (els.canvas) {
      els.canvas.setAttribute(
        "aria-label",
        roomState.plantName + "，当前阶段：" + stageForGrowth(growth) +
        "，生长进度 " + growth + "/" + MAX_GROWTH + "。"
      );
    }
    renderPattern();
    drawPlant();
  }

  function resizeCanvas() {
    if (!els.canvas || !els.canvasWrap) return;
    var rect = els.canvas.getBoundingClientRect();
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var width = Math.max(320, Math.round(rect.width));
    var height = Math.max(420, Math.round(rect.height));
    if (els.canvas.width !== Math.round(width * dpr) || els.canvas.height !== Math.round(height * dpr)) {
      els.canvas.width = Math.round(width * dpr);
      els.canvas.height = Math.round(height * dpr);
    }
    var context = els.canvas.getContext("2d");
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.__bonsaiWidth = width;
    context.__bonsaiHeight = height;
  }

  function roundedRect(context, x, y, width, height, radius) {
    var r = Math.min(radius, width / 2, height / 2);
    context.beginPath();
    context.moveTo(x + r, y);
    context.arcTo(x + width, y, x + width, y + height, r);
    context.arcTo(x + width, y + height, x, y + height, r);
    context.arcTo(x, y + height, x, y, r);
    context.arcTo(x, y, x + width, y, r);
    context.closePath();
  }

  function drawBranch(context, width, height, branch, progress, random) {
    if (progress < branch.at) return;
    var reveal = clamp(progress - branch.at + 1, 0, 1);
    var sx = branch.sx * width;
    var sy = branch.sy * height;
    var ex = (branch.sx + (branch.ex - branch.sx) * reveal) * width;
    var ey = (branch.sy + (branch.ey - branch.sy) * reveal) * height;
    var bend = (random() - 0.5) * width * 0.025;

    context.beginPath();
    context.moveTo(sx, sy);
    context.bezierCurveTo(
      sx + bend,
      sy - (sy - ey) * 0.35,
      ex - bend,
      ey + (sy - ey) * 0.3,
      ex,
      ey
    );
    context.strokeStyle = branch.trunk ? "#d7c6a1" : "#9eb58d";
    context.lineWidth = Math.max(1.3, width * (branch.trunk ? 0.012 : 0.0055) * (1 - branch.at / 34));
    context.lineCap = "round";
    context.stroke();

    if (!branch.trunk && progress >= branch.at + 0.45) {
      drawLeaf(context, ex, ey, branch.side || (ex < width / 2 ? -1 : 1), width, random, progress >= 16);
    }
  }

  function drawLeaf(context, x, y, side, width, random, isBud) {
    var size = Math.max(6, width * (0.014 + random() * 0.01));
    context.save();
    context.translate(x, y);
    context.rotate(side * (0.55 + random() * 0.8));
    context.beginPath();
    context.moveTo(0, 0);
    context.bezierCurveTo(size * 0.35, -size * 0.8, size * 1.45, -size * 0.45, size * 1.65, 0);
    context.bezierCurveTo(size * 1.25, size * 0.45, size * 0.35, size * 0.55, 0, 0);
    context.fillStyle = isBud ? "#9dbb83" : "#739c78";
    context.globalAlpha = 0.88;
    context.fill();
    context.restore();
  }

  function drawFlower(context, x, y, size, rotation) {
    context.save();
    context.translate(x, y);
    context.rotate(rotation);
    for (var petal = 0; petal < 6; petal += 1) {
      context.rotate(Math.PI / 3);
      context.beginPath();
      context.ellipse(0, -size * 0.7, size * 0.34, size * 0.72, 0, 0, Math.PI * 2);
      context.fillStyle = petal % 2 ? "#d96c54" : "#e9a07d";
      context.globalAlpha = 0.9;
      context.fill();
    }
    context.beginPath();
    context.arc(0, 0, size * 0.25, 0, Math.PI * 2);
    context.fillStyle = "#e5c66d";
    context.globalAlpha = 1;
    context.fill();
    context.restore();
  }

  function drawPlant() {
    if (!els.canvas) return;
    resizeCanvas();
    var context = els.canvas.getContext("2d");
    var width = context.__bonsaiWidth || els.canvas.clientWidth;
    var height = context.__bonsaiHeight || els.canvas.clientHeight;
    var progress = roomState.growth;
    var random = mulberry32(plantSeed ^ 0xB05A1);
    context.clearRect(0, 0, width, height);

    var glow = context.createRadialGradient(width * 0.5, height * 0.48, 10, width * 0.5, height * 0.5, width * 0.48);
    glow.addColorStop(0, progress >= MAX_GROWTH ? "rgba(225,194,108,0.14)" : "rgba(164,205,178,0.10)");
    glow.addColorStop(1, "rgba(7,28,27,0)");
    context.fillStyle = glow;
    context.fillRect(0, 0, width, height);

    context.strokeStyle = "rgba(214,231,215,0.08)";
    context.lineWidth = 1;
    for (var line = 1; line < 5; line += 1) {
      context.beginPath();
      context.moveTo((width / 5) * line, 0);
      context.lineTo((width / 5) * line, height);
      context.stroke();
    }

    var shadow = context.createRadialGradient(width * 0.5, height * 0.84, 5, width * 0.5, height * 0.84, width * 0.28);
    shadow.addColorStop(0, "rgba(0,7,6,0.42)");
    shadow.addColorStop(1, "rgba(0,7,6,0)");
    context.fillStyle = shadow;
    context.beginPath();
    context.ellipse(width * 0.5, height * 0.84, width * 0.28, height * 0.035, 0, 0, Math.PI * 2);
    context.fill();

    var potTopY = height * 0.73;
    context.fillStyle = "#c7b98f";
    roundedRect(context, width * 0.35, potTopY, width * 0.3, height * 0.045, 7);
    context.fill();

    context.beginPath();
    context.moveTo(width * 0.375, potTopY + height * 0.035);
    context.lineTo(width * 0.625, potTopY + height * 0.035);
    context.lineTo(width * 0.58, height * 0.84);
    context.quadraticCurveTo(width * 0.5, height * 0.87, width * 0.42, height * 0.84);
    context.closePath();
    var potGradient = context.createLinearGradient(width * 0.38, 0, width * 0.62, 0);
    potGradient.addColorStop(0, "#8d7659");
    potGradient.addColorStop(0.48, "#c1a77b");
    potGradient.addColorStop(1, "#745f49");
    context.fillStyle = potGradient;
    context.fill();

    context.fillStyle = "#263d32";
    context.beginPath();
    context.ellipse(width * 0.5, potTopY + height * 0.018, width * 0.14, height * 0.017, 0, 0, Math.PI * 2);
    context.fill();

    context.save();
    context.translate(width * 0.5, height * 0.805);
    context.rotate(-0.04);
    context.fillStyle = "rgba(235,224,195,0.75)";
    context.font = Math.max(9, width * 0.018) + "px ui-monospace, monospace";
    context.textAlign = "center";
    context.fillText("E08 · " + String(roomState.plantName).slice(0, 8), 0, 0);
    context.restore();

    if (progress === 0) {
      context.fillStyle = "#d5c17b";
      context.beginPath();
      context.ellipse(width * 0.5, potTopY - height * 0.005, width * 0.012, height * 0.008, -0.25, 0, Math.PI * 2);
      context.fill();
      return;
    }

    var branches = [
      { sx: .5, sy: .73, ex: .495, ey: .64, at: 1, trunk: true },
      { sx: .495, sy: .65, ex: .515, ey: .56, at: 2, trunk: true },
      { sx: .515, sy: .57, ex: .49, ey: .48, at: 3, trunk: true },
      { sx: .49, sy: .49, ex: .505, ey: .40, at: 4, trunk: true },
      { sx: .505, sy: .42, ex: .47, ey: .33, at: 5, trunk: true },
      { sx: .50, sy: .61, ex: .39, ey: .56, at: 6, side: -1 },
      { sx: .39, sy: .56, ex: .31, ey: .49, at: 7, side: -1 },
      { sx: .39, sy: .56, ex: .34, ey: .62, at: 8, side: -1 },
      { sx: .51, sy: .55, ex: .62, ey: .50, at: 9, side: 1 },
      { sx: .62, sy: .50, ex: .71, ey: .43, at: 10, side: 1 },
      { sx: .62, sy: .50, ex: .69, ey: .56, at: 11, side: 1 },
      { sx: .49, sy: .49, ex: .39, ey: .42, at: 12, side: -1 },
      { sx: .39, sy: .42, ex: .30, ey: .37, at: 13, side: -1 },
      { sx: .39, sy: .42, ex: .34, ey: .33, at: 14, side: -1 },
      { sx: .50, sy: .43, ex: .59, ey: .36, at: 15, side: 1 },
      { sx: .59, sy: .36, ex: .68, ey: .30, at: 16, side: 1 },
      { sx: .59, sy: .36, ex: .66, ey: .42, at: 17, side: 1 },
      { sx: .47, sy: .35, ex: .40, ey: .27, at: 18, side: -1 },
      { sx: .47, sy: .34, ex: .52, ey: .24, at: 19, side: 1 },
      { sx: .52, sy: .25, ex: .58, ey: .18, at: 20, side: 1 }
    ];

    branches.forEach(function (branch) {
      drawBranch(context, width, height, branch, progress, random);
    });

    if (progress >= MAX_GROWTH) {
      var flowers = [
        [.58, .18, 1],
        [.68, .30, -0.7],
        [.30, .37, 0.3],
        [.71, .43, 1.4],
        [.34, .33, -1.2]
      ];
      flowers.forEach(function (flower, index) {
        drawFlower(
          context,
          flower[0] * width,
          flower[1] * height,
          Math.max(8, width * (0.015 + (index % 2) * 0.003)),
          flower[2]
        );
      });
    }
  }

  function pulsePad(noteIndex) {
    var pad = els.pads[noteIndex];
    if (pad) {
      pad.classList.remove("is-playing");
      void pad.offsetWidth;
      pad.classList.add("is-playing");
      window.setTimeout(function () {
        pad.classList.remove("is-playing");
      }, 180);
    }
    if (els.echo && !motionIsReduced()) {
      els.echo.classList.remove("is-ringing");
      void els.echo.offsetWidth;
      els.echo.classList.add("is-ringing");
    }
  }

  function getAudioContext() {
    if (!audioContext) {
      var AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return null;
      audioContext = new AudioContextClass();
    }
    if (audioContext.state === "suspended") {
      audioContext.resume().catch(function () {});
    }
    return audioContext;
  }

  function playTone(noteIndex, duration) {
    if (!soundEnabled) return;
    var context = getAudioContext();
    if (!context) return;

    var now = context.currentTime;
    var oscillator = context.createOscillator();
    var filter = context.createBiquadFilter();
    var gain = context.createGain();
    oscillator.type = noteIndex === 3 ? "sine" : "triangle";
    oscillator.frequency.setValueAtTime(NOTE_META[noteIndex].frequency, now);
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(noteIndex === 2 ? 1800 : 1100, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.11, now + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + (duration || 0.32));
    oscillator.connect(filter);
    filter.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);
    oscillator.stop(now + (duration || 0.32) + 0.04);
  }

  function setSoundEnabled(next) {
    var requested = Boolean(next);
    soundEnabled = requested && Boolean(getAudioContext());
    if (els.soundToggle) {
      els.soundToggle.setAttribute("aria-pressed", String(soundEnabled));
    }
    if (els.soundToggleCopy) {
      els.soundToggleCopy.textContent = "试听：" + (soundEnabled ? "开" : "关");
    }
    return soundEnabled;
  }

  function replayPattern() {
    if (roomState.growth >= MAX_GROWTH) {
      setStatus("开花后的枝叶仍记得这四拍。");
    }
    setSoundEnabled(true);
    currentPattern.forEach(function (note, index) {
      window.setTimeout(function () {
        pulsePad(note);
        playTone(note, 0.27);
      }, index * 390);
    });
  }

  function awardBloom() {
    if (!roomState.stamped) {
      roomState.stamped = true;
      safeCall("awardStamp", [ROOM_ID]);
      safeCall("toast", ["耳后温室印章已落入护照。"]);
    }
    if (!roomState.bloomedAt) {
      roomState.bloomedAt = new Date().toISOString();
    }
    safeCall("setArtifact", ["soundPlant", {
      name: roomState.plantName,
      species: "节拍生声音植物",
      room: "E08",
      stage: "bloom",
      seed: plantSeed,
      bloomedAt: roomState.bloomedAt
    }]);
    saveState();
  }

  function openBloomDialog() {
    if (!els.dialog) return;
    stopMicrophone(false);
    lastDialogFocus = document.activeElement;
    els.dialog.hidden = false;
    if (els.dialogName) {
      els.dialogName.textContent = roomState.plantName;
    }
    document.body.style.overflow = "hidden";
    window.setTimeout(function () {
      if (els.dialogClose) els.dialogClose.focus();
    }, 10);
  }

  function closeBloomDialog() {
    if (!els.dialog) return;
    els.dialog.hidden = true;
    document.body.style.overflow = "";
    if (lastDialogFocus && typeof lastDialogFocus.focus === "function") {
      lastDialogFocus.focus();
    }
  }

  function completeGrowth() {
    roomState.growth = MAX_GROWTH;
    roomState.patternPosition = 4;
    awardBloom();
    renderProgress();
    setStatus(roomState.plantName + " 开花了。它把你的节拍留在了花瓣里。", true);
    openBloomDialog();
  }

  function handleNote(noteIndex, source) {
    if (roomState.growth >= MAX_GROWTH) {
      pulsePad(noteIndex);
      playTone(noteIndex);
      setStatus("它已经开花，但仍会认真听完每一枚音符。");
      return;
    }

    var expected = currentPattern[roomState.patternPosition];
    pulsePad(noteIndex);
    playTone(noteIndex);

    if (noteIndex !== expected) {
      var expectedNote = NOTE_META[expected];
      renderPattern();
      setStatus(
        "枝叶轻轻摇了摇：这一拍应当是“" + expectedNote.name + "”（" + expectedNote.key + "）。请重试这一拍。",
        true
      );
      return;
    }

    roomState.growth += 1;
    roomState.patternPosition += 1;
    var completedMeasure = roomState.patternPosition >= 4;

    if (roomState.growth >= MAX_GROWTH) {
      completeGrowth();
      return;
    }

    if (completedMeasure) {
      roomState.patternPosition = 0;
      saveState();
      renderProgress();
      setStatus(
        "第 " + currentMeasureIndex() + " 小节被根系记住了。新的四拍谱已经展开。" +
        (source === "microphone" ? " 环境声仍在本地聆听。" : ""),
        true
      );
    } else {
      saveState();
      renderProgress();
      setStatus("对了。枝条向声音的方向长出一小节。");
    }
  }

  function handlePadClick(event) {
    var button = event.target.closest(".sound-pad");
    if (!button) return;
    handleNote(Number(button.dataset.note), "pad");
  }

  function handleKeydown(event) {
    if (event.repeat || event.altKey || event.ctrlKey || event.metaKey) return;
    if (els.dialog && !els.dialog.hidden) return;
    var tagName = event.target && event.target.tagName;
    if (tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT") return;
    var keys = { a: 0, s: 1, d: 2, f: 3 };
    var noteIndex = keys[String(event.key).toLowerCase()];
    if (typeof noteIndex !== "number") return;
    event.preventDefault();
    handleNote(noteIndex, "keyboard");
  }

  function stopMicrophone(announce) {
    if (micTimer) {
      window.clearTimeout(micTimer);
      micTimer = null;
    }
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }
    if (micSession) {
      micSession.stream.getTracks().forEach(function (track) {
        track.stop();
      });
      if (micSession.context && micSession.context !== audioContext && micSession.context.state !== "closed") {
        micSession.context.close().catch(function () {});
      }
      micSession = null;
    }
    if (els.micMeter) els.micMeter.style.width = "0%";
    if (els.micButton) els.micButton.setAttribute("aria-pressed", "false");
    if (els.micLabel) els.micLabel.textContent = "开启 12 秒本地聆听";
    if (announce) {
      setStatus("本地聆听已经停止，没有留下录音。");
    }
  }

  function analyseMicrophone() {
    if (!micSession) return;
    var analyser = micSession.analyser;
    var data = micSession.data;
    analyser.getByteTimeDomainData(data);
    var sum = 0;
    for (var i = 0; i < data.length; i += 1) {
      var sample = (data[i] - 128) / 128;
      sum += sample * sample;
    }
    var rms = Math.sqrt(sum / data.length);
    var level = clamp((rms - 0.015) * 650, 0, 100);
    if (els.micMeter) els.micMeter.style.width = level + "%";

    var now = performance.now();
    if (rms > 0.075 && !micSession.aboveThreshold && now - micSession.lastPulse > 420) {
      micSession.aboveThreshold = true;
      micSession.lastPulse = now;
      var expected = currentPattern[roomState.patternPosition] || 0;
      handleNote(expected, "microphone");
    } else if (rms < 0.045) {
      micSession.aboveThreshold = false;
    }
    animationFrame = window.requestAnimationFrame(analyseMicrophone);
  }

  function startMicrophone() {
    if (!navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== "function") {
      setStatus("当前浏览器无法开启本地聆听。你仍可使用培育盘或 A、S、D、F 键。", true);
      if (els.micButton) els.micButton.disabled = true;
      return;
    }

    if (els.micLabel) els.micLabel.textContent = "正在请求麦克风权限……";
    navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true
      },
      video: false
    }).then(function (stream) {
      var AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) {
        stream.getTracks().forEach(function (track) { track.stop(); });
        throw new Error("Web Audio unavailable");
      }
      var context = new AudioContextClass();
      var source = context.createMediaStreamSource(stream);
      var analyser = context.createAnalyser();
      analyser.fftSize = 512;
      analyser.smoothingTimeConstant = 0.28;
      source.connect(analyser);
      micSession = {
        context: context,
        stream: stream,
        analyser: analyser,
        data: new Uint8Array(analyser.fftSize),
        lastPulse: 0,
        aboveThreshold: false
      };
      if (els.micButton) els.micButton.setAttribute("aria-pressed", "true");
      if (els.micLabel) els.micLabel.textContent = "停止本地聆听";
      setStatus("本地聆听已开启。一次清晰的声音脉冲会落下一拍，12 秒后自动停止。", true);
      analyseMicrophone();
      micTimer = window.setTimeout(function () {
        stopMicrophone(true);
      }, 12000);
    }).catch(function (error) {
      console.warn("[Elsewhere:E08] microphone permission unavailable", error);
      stopMicrophone(false);
      setStatus("没有取得麦克风权限。没关系，培育盘和 A、S、D、F 键同样能让它开花。", true);
    });
  }

  function toggleMicrophone() {
    if (micSession) {
      stopMicrophone(true);
    } else {
      startMicrophone();
    }
  }

  function handleDialogKeydown(event) {
    if (!els.dialog || els.dialog.hidden) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeBloomDialog();
      return;
    }
    if (event.key !== "Tab") return;
    var focusables = [els.dialogClose, els.dialogReturn].filter(Boolean);
    if (!focusables.length) return;
    var first = focusables[0];
    var last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function bindEvents() {
    var padGrid = document.getElementById("pad-grid");
    if (padGrid) padGrid.addEventListener("click", handlePadClick);
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("elsewhere:motion", function () {
      if (motionIsReduced() && els.echo) {
        els.echo.classList.remove("is-ringing");
      }
    });
    window.addEventListener("resize", drawPlant, { passive: true });
    window.addEventListener("pagehide", function () { stopMicrophone(false); });

    if (els.soundToggle) {
      els.soundToggle.addEventListener("click", function () {
        var requested = !soundEnabled;
        var enabled = setSoundEnabled(requested);
        setStatus(
          requested && !enabled
            ? "这台设备无法播放声音；视觉节拍与键盘培育仍可继续。"
            : (enabled ? "温室试听已开启。" : "温室试听已关闭，视觉节拍仍可继续。")
        );
      });
    }
    if (els.replay) els.replay.addEventListener("click", replayPattern);
    if (els.micButton) els.micButton.addEventListener("click", toggleMicrophone);
    if (els.dialogClose) els.dialogClose.addEventListener("click", closeBloomDialog);
    if (els.dialogReturn) els.dialogReturn.addEventListener("click", closeBloomDialog);
    if (els.dialog) {
      els.dialog.addEventListener("click", function (event) {
        if (event.target === els.dialog) closeBloomDialog();
      });
      els.dialog.addEventListener("keydown", handleDialogKeydown);
    }
  }

  function init(event) {
    if (initialized) return;
    if (!document.getElementById("bonsai-workbench")) return;

    app = window.Elsewhere ||
      (event && event.detail && (event.detail.Elsewhere || event.detail)) ||
      null;
    initialized = true;
    queryElements();

    var seedValue = safeCall("seedFor", [ROOM_ID], new Date().toISOString().slice(0, 10));
    plantSeed = hashString(seedValue);
    readState();
    patterns = buildPatterns();

    if (els.plantName) els.plantName.textContent = roomState.plantName;
    if (els.plantCode) {
      els.plantCode.textContent = "E08—" + String(plantSeed % 10000).padStart(4, "0");
    }

    bindEvents();
    setSoundEnabled(false);
    renderProgress();

    if (roomState.growth >= MAX_GROWTH) {
      setStatus(roomState.plantName + " 已经开花。你仍可继续敲击，让它记住新的声音。");
    } else {
      var inheritedWord = extractArtifactText(safeCall("getArtifact", ["typewriterWord"], null));
      if (inheritedWord) {
        setStatus("轻句室送来的词“" + roomState.plantName + "”已成为它的名字。请从第一拍开始。");
      }
    }
  }

  document.addEventListener("elsewhere:ready", init, { once: true });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      if (window.Elsewhere) init();
      window.setTimeout(function () {
        if (!initialized) init();
      }, 800);
    }, { once: true });
  } else if (window.Elsewhere) {
    init();
  } else {
    window.setTimeout(function () {
      if (!initialized) init();
    }, 800);
  }
})();
