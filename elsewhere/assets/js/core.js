(function () {
  "use strict";

  var STORAGE_KEY = "elsewhere.state.v1";
  var STATE_VERSION = 1;

  var ROOMS = [
    {
      id: "station",
      code: "E00",
      name: "零号月台",
      fullName: "零号月台·余白换乘厅",
      path: "/elsewhere/",
      word: "别",
      description: "领取一张只证明抵达、不证明存在的车票。"
    },
    {
      id: "window",
      code: "E01",
      name: "窗外一百年",
      fullName: "《窗外一百年》远景观察室",
      path: "/elsewhere/window/",
      word: "把",
      description: "观察同一扇窗没有等到的三个时代。"
    },
    {
      id: "mart",
      code: "E02",
      name: "未眠商店",
      fullName: "未眠商店·凌晨 3:17",
      path: "/elsewhere/mart-0317/",
      word: "这里",
      description: "本店只售你当时差一点带走的东西。"
    },
    {
      id: "radio",
      code: "E03",
      name: "八十八点零",
      fullName: "八十八点零·低空广播室",
      path: "/elsewhere/radio-880/",
      word: "当成",
      description: "收听差一点成为新闻的事情。"
    },
    {
      id: "archive",
      code: "E04",
      name: "无址物档案馆",
      fullName: "无址物档案馆·404 库",
      path: "/elsewhere/archive-404/",
      word: "远方",
      description: "不存在不是状态，是一种保管方式。"
    },
    {
      id: "typewriter",
      code: "E05",
      name: "轻句室",
      fullName: "轻句室·失重打字间",
      path: "/elsewhere/typewriter/",
      word: "请",
      description: "沉默并非没有重量，它只是不曾落地。"
    },
    {
      id: "inventions",
      code: "E06",
      name: "非常用途局",
      fullName: "非常用途局·第七审查室",
      path: "/elsewhere/inventions/",
      word: "带一件",
      description: "批准不会改善效率、却可能改善下午的发明。"
    },
    {
      id: "universe",
      code: "E07",
      name: "六十秒天文台",
      fullName: "六十秒天文台",
      path: "/elsewhere/universe/",
      word: "未发生的事",
      description: "六十秒足够让尘埃学会仰望。"
    },
    {
      id: "bonsai",
      code: "E08",
      name: "耳后温室",
      fullName: "耳后温室·声音盆栽科",
      path: "/elsewhere/sound-bonsai/",
      word: "回到",
      description: "有些植物一生只开一次耳朵。"
    },
    {
      id: "zoo",
      code: "E09",
      name: "循规园",
      fullName: "循规园·可玩系统动物园",
      path: "/elsewhere/systems-zoo/",
      word: "今天",
      description: "规则执行得足够久，也会长出脾气。"
    }
  ];

  var NARRATIVE = [
    { count: 0, text: "本证只证明你曾抵达，不保证那里存在。" },
    { count: 2, text: "不是页面丢了，是去向没有登记。" },
    { count: 4, text: "本站积压原因：旅客只进不出。" },
    { count: 6, text: "他方不是收容所，是周转站。" },
    { count: 8, text: "一个没有退出条件的系统，会把等待误认作永恒。" },
    { count: 10, text: "别把这里当成远方。请带一件未发生的事回到今天。" }
  ];

  var shell = {
    mapDialog: null,
    passportDialog: null,
    settingsDialog: null,
    progressNodes: [],
    soundNodes: [],
    toastStack: null
  };

  var storageAvailable = true;
  var booted = false;
  var audioContext = null;
  var audioMaster = null;
  var ambientNodes = [];
  var audioActive = false;

  function shanghaiDate() {
    try {
      var parts = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Shanghai",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }).formatToParts(new Date());
      var values = {};
      parts.forEach(function (part) {
        if (part.type !== "literal") {
          values[part.type] = part.value;
        }
      });
      return values.year + "-" + values.month + "-" + values.day;
    } catch (error) {
      return new Date().toISOString().slice(0, 10);
    }
  }

  function hashString(input) {
    var hash = 2166136261;
    for (var index = 0; index < input.length; index += 1) {
      hash ^= input.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function randomToken() {
    var bytes = new Uint32Array(2);
    if (window.crypto && window.crypto.getRandomValues) {
      window.crypto.getRandomValues(bytes);
      return bytes[0].toString(36) + bytes[1].toString(36);
    }
    return Math.floor(Math.random() * 0xffffffff).toString(36) + Date.now().toString(36);
  }

  function makeTicket(date) {
    var token = randomToken().slice(0, 6).toUpperCase();
    return "EW-" + date.replace(/-/g, "").slice(2) + "-" + token;
  }

  function createState() {
    var date = shanghaiDate();
    return {
      version: STATE_VERSION,
      identity: {
        id: randomToken(),
        ticketNo: makeTicket(date),
        issuedAt: new Date().toISOString()
      },
      meta: {
        firstSeen: new Date().toISOString(),
        lastSeen: new Date().toISOString(),
        lastRoom: "station",
        visitCount: 0,
        returnedAt: null,
        returnArtifact: null,
        introSeen: false
      },
      daily: {
        date: date,
        worldSeed: hashString("elsewhere|" + date + "|world-v1")
      },
      passport: {
        stamps: {},
        platformZeroUnlocked: false
      },
      rooms: {},
      artifacts: {},
      preferences: {
        sound: "off",
        motion: "system",
        quality: "auto",
        contrast: "system"
      }
    };
  }

  function normalizeState(candidate) {
    var fresh = createState();
    if (!candidate || typeof candidate !== "object") {
      return fresh;
    }

    fresh.version = STATE_VERSION;
    fresh.identity = Object.assign(fresh.identity, candidate.identity || {});
    fresh.meta = Object.assign(fresh.meta, candidate.meta || {});
    fresh.daily = Object.assign(fresh.daily, candidate.daily || {});
    fresh.passport = Object.assign(fresh.passport, candidate.passport || {});
    fresh.passport.stamps = Object.assign({}, (candidate.passport && candidate.passport.stamps) || {});
    fresh.rooms = Object.assign({}, candidate.rooms || {});
    fresh.artifacts = Object.assign({}, candidate.artifacts || {});
    fresh.preferences = Object.assign(fresh.preferences, candidate.preferences || {});

    var today = shanghaiDate();
    if (fresh.daily.date !== today) {
      fresh.daily.date = today;
      fresh.daily.worldSeed = hashString("elsewhere|" + today + "|world-v1");
    }

    return fresh;
  }

  function readState() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return createState();
      }
      return normalizeState(JSON.parse(raw));
    } catch (error) {
      storageAvailable = false;
      return createState();
    }
  }

  var state = readState();

  function saveState() {
    state.meta.lastSeen = new Date().toISOString();
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      storageAvailable = true;
      return true;
    } catch (error) {
      storageAvailable = false;
      return false;
    }
  }

  function getCurrentRoom() {
    var id = document.body ? document.body.getAttribute("data-room") : "station";
    return ROOMS.find(function (room) {
      return room.id === id;
    }) || ROOMS[0];
  }

  function getStampCount() {
    return ROOMS.reduce(function (count, room) {
      return count + (state.passport.stamps[room.id] ? 1 : 0);
    }, 0);
  }

  function getNarrative(count) {
    var result = NARRATIVE[0].text;
    NARRATIVE.forEach(function (entry) {
      if (count >= entry.count) {
        result = entry.text;
      }
    });
    return result;
  }

  function safeProof(proof) {
    if (!proof || typeof proof !== "object") {
      return {};
    }
    var output = {};
    Object.keys(proof).slice(0, 12).forEach(function (key) {
      var value = proof[key];
      if (typeof value === "string") {
        output[key] = value.slice(0, 240);
      } else if (typeof value === "number" || typeof value === "boolean" || value === null) {
        output[key] = value;
      }
    });
    return output;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function awardStamp(roomId, proof) {
    var room = ROOMS.find(function (item) {
      return item.id === roomId;
    });
    if (!room || state.passport.stamps[roomId]) {
      return false;
    }

    state.passport.stamps[roomId] = {
      earnedAt: new Date().toISOString(),
      proofVersion: 1,
      proof: safeProof(proof)
    };

    var count = getStampCount();
    if (count >= ROOMS.length) {
      state.passport.platformZeroUnlocked = true;
    }
    saveState();
    refreshShell();
    toast(room.code + " 已检票｜护照暗字：“" + room.word + "”");

    document.dispatchEvent(new CustomEvent("elsewhere:stamp", {
      detail: {
        room: room,
        count: count,
        unlocked: state.passport.platformZeroUnlocked
      }
    }));

    if (count === 2 || count === 4 || count === 6 || count === 8) {
      window.setTimeout(function () {
        toast("站内播报｜" + getNarrative(count));
      }, 900);
    }

    if (count === ROOMS.length) {
      window.setTimeout(function () {
        toast("零号月台的时钟，刚刚走动了一分钟。");
        document.dispatchEvent(new CustomEvent("elsewhere:platform-ready", {
          detail: { count: count }
        }));
      }, 1100);
    }

    return true;
  }

  function getRoomData(roomId) {
    return Object.assign({}, state.rooms[roomId] || {});
  }

  function setRoomData(roomId, patch) {
    if (!roomId || !patch || typeof patch !== "object") {
      return getRoomData(roomId);
    }
    state.rooms[roomId] = Object.assign({}, state.rooms[roomId] || {}, patch);
    saveState();
    return getRoomData(roomId);
  }

  function getArtifact(key) {
    return state.artifacts[key];
  }

  function setArtifact(key, value) {
    if (!key) {
      return;
    }
    state.artifacts[key] = value;
    saveState();
    document.dispatchEvent(new CustomEvent("elsewhere:artifact", {
      detail: { key: key, value: value }
    }));
  }

  function seedFor(scope) {
    return hashString([
      state.daily.worldSeed,
      state.identity.ticketNo,
      scope || "room"
    ].join("|"));
  }

  function rngFor(scope) {
    var seed = seedFor(scope) || 1;
    return function () {
      seed ^= seed << 13;
      seed ^= seed >>> 17;
      seed ^= seed << 5;
      return (seed >>> 0) / 4294967296;
    };
  }

  function toast(message) {
    if (!shell.toastStack) {
      return;
    }
    var node = document.createElement("div");
    node.className = "ew-toast";
    node.textContent = String(message);
    shell.toastStack.appendChild(node);
    window.setTimeout(function () {
      node.setAttribute("data-leaving", "true");
      window.setTimeout(function () {
        node.remove();
      }, 280);
    }, 4200);
  }

  function buildMapMarkup() {
    var current = getCurrentRoom();
    return '<div class="ew-map-grid">' + ROOMS.map(function (room) {
      var stamped = Boolean(state.passport.stamps[room.id]);
      var currentAttr = current.id === room.id ? ' aria-current="page"' : "";
      return [
        '<a class="ew-map-card" href="', room.path, '" data-stamped="', String(stamped), '"', currentAttr, '>',
        '<span class="ew-map-card__code">', room.code, '</span>',
        '<span class="ew-map-card__name">', room.name, '</span>',
        '<span class="ew-map-card__desc">', room.description, '</span>',
        '</a>'
      ].join("");
    }).join("") + "</div>";
  }

  function buildPassportMarkup() {
    var count = getStampCount();
    var tilt = (seedFor("passport") % 13) - 6;
    var stamps = ROOMS.map(function (room, index) {
      var earned = Boolean(state.passport.stamps[room.id]);
      var word = earned ? room.word : "待检";
      var stampTilt = ((seedFor("stamp-" + room.id) % 13) - 6) + "deg";
      return [
        '<div class="ew-stamp" data-earned="', String(earned), '" style="--stamp-tilt:', stampTilt, '">',
        '<span class="ew-stamp__code">', room.code, '</span>',
        '<span class="ew-stamp__word">', word, '</span>',
        '</div>'
      ].join("");
    }).join("");

    return [
      '<section class="ew-passport" style="--passport-shift:', tilt, 'deg">',
      '<div class="ew-passport__top">',
      '<div><p class="ew-passport__label">Elsewhere temporary transit permit</p>',
      '<h3 class="ew-passport__title">他方线临时旅客证</h3>',
      '<p class="ew-passport__number">持证人：一个刚好迷路的人</p></div>',
      '<div><p class="ew-passport__label">Ticket no.</p>',
      '<p class="ew-passport__number">', escapeHtml(state.identity.ticketNo), '</p>',
      '<p class="ew-passport__number">回程手续：', count, ' / ', ROOMS.length, '</p></div>',
      '</div>',
      '<div class="ew-stamp-grid">', stamps, '</div>',
      '<p class="ew-passport__message">', getNarrative(count), '</p>',
      '</section>',
      '<div class="room-actions">',
      '<button class="ew-btn ew-btn--ghost" type="button" data-copy-ticket>复制车票编号</button>',
      '<button class="ew-btn ew-btn--danger" type="button" data-reset-elsewhere>删除本机旅程</button>',
      '</div>',
      storageAvailable ? "" : '<p class="room-note">本次旅行不会留档：浏览器拒绝了本地存储。</p>'
    ].join("");
  }

  function dialogMarkup(id, eyebrow, title) {
    return [
      '<dialog class="ew-dialog" id="', id, '" aria-labelledby="', id, '-title">',
      '<div class="ew-dialog__head">',
      '<div><p class="ew-dialog__eyebrow">', eyebrow, '</p><h2 class="ew-dialog__title" id="', id, '-title">', title, '</h2></div>',
      '<button class="ew-dialog__close" type="button" data-close-dialog aria-label="关闭">×</button>',
      '</div>',
      '<div class="ew-dialog__body"></div>',
      '</dialog>'
    ].join("");
  }

  function buildShell() {
    var current = getCurrentRoom();
    var main = document.querySelector("main");
    if (main && !main.id) {
      main.id = "main";
    }

    var skip = document.querySelector('body > a[href^="#"]');
    if (!skip) {
      skip = document.createElement("a");
      skip.href = "#main";
      skip.textContent = "跳到主要内容";
    }
    skip.classList.add("ew-skip-link");
    document.body.insertBefore(skip, document.body.firstChild);

    var header = document.createElement("header");
    header.className = "ew-shell";
    header.innerHTML = [
      '<a class="ew-brand" href="/elsewhere/" aria-label="返回他方线零号月台">',
      '<span class="ew-brand__roundel" aria-hidden="true">0½</span>',
      '<span class="ew-brand__text"><span class="ew-brand__title">Elsewhere / 他方线</span>',
      '<span class="ew-brand__room">', current.code, " · ", current.fullName, '</span></span>',
      '</a>',
      '<nav class="ew-shell__actions" aria-label="他方线工具">',
      '<button class="ew-shell__btn" type="button" data-open-dialog="ew-map"><span class="ew-shell__icon">⌘</span><span class="ew-shell__label">地图</span></button>',
      '<button class="ew-shell__btn ew-progress" type="button" data-open-dialog="ew-passport"><span class="ew-shell__icon">', getStampCount(), '/', ROOMS.length, '</span><span class="ew-shell__label">护照</span></button>',
      '<button class="ew-shell__btn" type="button" data-sound-toggle><span class="ew-shell__icon">◌</span><span class="ew-shell__label" data-sound-label>声音</span></button>',
      '<button class="ew-shell__btn" type="button" data-open-dialog="ew-settings"><span class="ew-shell__icon">Aa</span><span class="ew-shell__label">辅助</span></button>',
      '<a class="ew-shell__link" href="/"><span class="ew-shell__icon">↗</span><span class="ew-shell__label">返回地面</span></a>',
      '</nav>'
    ].join("");
    document.body.insertBefore(header, skip.nextSibling);

    var mobile = document.createElement("nav");
    mobile.className = "ew-mobile-nav";
    mobile.setAttribute("aria-label", "他方线移动导航");
    mobile.innerHTML = [
      '<button type="button" data-open-dialog="ew-map"><b>⌘</b>地图</button>',
      '<button type="button" data-open-dialog="ew-passport"><b data-mobile-progress>', getStampCount(), '/', ROOMS.length, '</b>护照</button>',
      '<button type="button" data-sound-toggle><b>◌</b><span data-sound-label>声音</span></button>',
      '<a href="/"><b>↗</b>地面</a>'
    ].join("");
    document.body.appendChild(mobile);

    var dialogs = document.createElement("div");
    dialogs.innerHTML = [
      dialogMarkup("ew-map", "Network map / E00—E09", "今夜路线图"),
      dialogMarkup("ew-passport", "Proof of arrival", "他方线临时旅客证"),
      dialogMarkup("ew-settings", "Quiet carriage", "辅助与隐私设置")
    ].join("");
    while (dialogs.firstChild) {
      document.body.appendChild(dialogs.firstChild);
    }

    shell.mapDialog = document.getElementById("ew-map");
    shell.passportDialog = document.getElementById("ew-passport");
    shell.settingsDialog = document.getElementById("ew-settings");

    var toastStack = document.createElement("div");
    toastStack.className = "ew-toast-stack";
    toastStack.setAttribute("aria-live", "polite");
    toastStack.setAttribute("aria-atomic", "false");
    document.body.appendChild(toastStack);
    shell.toastStack = toastStack;

    shell.progressNodes = Array.prototype.slice.call(document.querySelectorAll(".ew-progress .ew-shell__icon, [data-mobile-progress]"));
    shell.soundNodes = Array.prototype.slice.call(document.querySelectorAll("[data-sound-toggle]"));

    bindShellEvents();
    refreshShell();
  }

  function openDialog(dialog) {
    if (!dialog) {
      return;
    }
    if (typeof dialog.showModal === "function") {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      dialog.setAttribute("open", "");
    }
  }

  function closeDialog(dialog) {
    if (!dialog) {
      return;
    }
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
  }

  function buildSettingsMarkup() {
    var motionLabel = state.preferences.motion === "reduced" ? "减少动态" : "跟随系统";
    var soundLabel = audioActive ? "广播已开启" : (state.preferences.sound === "on" ? "等待点击恢复" : "保持安静");
    return [
      '<div class="ew-settings">',
      '<div class="ew-setting-row"><div><strong>车站广播</strong><small>声音默认关闭；不会上传任何录音。</small></div>',
      '<button class="ew-btn ew-btn--ghost" type="button" data-sound-toggle>', soundLabel, '</button></div>',
      '<div class="ew-setting-row"><div><strong>动态效果</strong><small>减少持续动画、粒子与闪动。</small></div>',
      '<button class="ew-btn ew-btn--ghost" type="button" data-motion-toggle>', motionLabel, '</button></div>',
      '<div class="ew-setting-row"><div><strong>本机旅程</strong><small>护照仅保存在这个浏览器，不会同步或上传。</small></div>',
      '<button class="ew-btn ew-btn--danger" type="button" data-reset-elsewhere>删除数据</button></div>',
      '</div>'
    ].join("");
  }

  function refreshShell() {
    var count = getStampCount();
    shell.progressNodes.forEach(function (node) {
      node.textContent = count + "/" + ROOMS.length;
    });

    if (shell.mapDialog) {
      shell.mapDialog.querySelector(".ew-dialog__body").innerHTML = buildMapMarkup();
    }
    if (shell.passportDialog) {
      shell.passportDialog.querySelector(".ew-dialog__body").innerHTML = buildPassportMarkup();
    }
    if (shell.settingsDialog) {
      shell.settingsDialog.querySelector(".ew-dialog__body").innerHTML = buildSettingsMarkup();
    }

    updateSoundLabels();
    document.documentElement.setAttribute("data-stamps", String(count));
    document.body && document.body.setAttribute("data-platform-ready", String(state.passport.platformZeroUnlocked));
  }

  function updateSoundLabels() {
    var label = audioActive ? "静音" : (state.preferences.sound === "on" ? "恢复" : "声音");
    document.querySelectorAll("[data-sound-label]").forEach(function (node) {
      node.textContent = label;
    });
    shell.soundNodes = Array.prototype.slice.call(document.querySelectorAll("[data-sound-toggle]"));
    shell.soundNodes.forEach(function (node) {
      node.setAttribute("aria-pressed", String(audioActive));
    });
  }

  function bindShellEvents() {
    document.addEventListener("click", function (event) {
      var openButton = event.target.closest("[data-open-dialog]");
      if (openButton) {
        openDialog(document.getElementById(openButton.getAttribute("data-open-dialog")));
        return;
      }

      var closeButton = event.target.closest("[data-close-dialog]");
      if (closeButton) {
        closeDialog(closeButton.closest("dialog"));
        return;
      }

      if (event.target.closest("[data-sound-toggle]")) {
        toggleSound();
        return;
      }

      if (event.target.closest("[data-motion-toggle]")) {
        toggleMotion();
        return;
      }

      if (event.target.closest("[data-copy-ticket]")) {
        copyTicket();
        return;
      }

      if (event.target.closest("[data-reset-elsewhere]")) {
        resetJourney();
      }
    });

    [shell.mapDialog, shell.passportDialog, shell.settingsDialog].forEach(function (dialog) {
      if (!dialog) {
        return;
      }
      dialog.addEventListener("click", function (event) {
        if (event.target === dialog) {
          closeDialog(dialog);
        }
      });
    });
  }

  function applyMotionPreference() {
    if (state.preferences.motion === "reduced") {
      document.documentElement.setAttribute("data-motion", "reduced");
    } else {
      document.documentElement.removeAttribute("data-motion");
    }
  }

  function isMotionReduced() {
    if (state.preferences.motion === "reduced") {
      return true;
    }
    return Boolean(
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function toggleMotion() {
    state.preferences.motion = state.preferences.motion === "reduced" ? "system" : "reduced";
    saveState();
    applyMotionPreference();
    refreshShell();
    document.dispatchEvent(new CustomEvent("elsewhere:motion", {
      detail: { reduced: isMotionReduced() }
    }));
    toast(state.preferences.motion === "reduced" ? "已减少动态效果。" : "动态效果改为跟随系统。");
  }

  function ensureAudio() {
    var AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      toast("这台设备无法播放车站广播。");
      return Promise.reject(new Error("Web Audio unavailable"));
    }

    if (!audioContext) {
      audioContext = new AudioContextClass();
      audioMaster = audioContext.createGain();
      audioMaster.gain.value = 0.16;
      audioMaster.connect(audioContext.destination);
    }

    return audioContext.resume().then(function () {
      if (!audioActive) {
        startAmbient();
      }
      audioActive = true;
      state.preferences.sound = "on";
      saveState();
      updateSoundLabels();
      refreshShell();
      document.dispatchEvent(new CustomEvent("elsewhere:audio", {
        detail: { active: true, context: audioContext, master: audioMaster }
      }));
      return { context: audioContext, master: audioMaster };
    });
  }

  function startAmbient() {
    if (!audioContext || !audioMaster || ambientNodes.length) {
      return;
    }

    var low = audioContext.createOscillator();
    var lowGain = audioContext.createGain();
    low.type = "sine";
    low.frequency.value = 48;
    lowGain.gain.value = 0.018;
    low.connect(lowGain).connect(audioMaster);

    var high = audioContext.createOscillator();
    var highGain = audioContext.createGain();
    high.type = "triangle";
    high.frequency.value = 96.4;
    highGain.gain.value = 0.004;
    high.connect(highGain).connect(audioMaster);

    low.start();
    high.start();
    ambientNodes = [low, high, lowGain, highGain];
  }

  function stopAudio() {
    ambientNodes.forEach(function (node) {
      try {
        if (typeof node.stop === "function") {
          node.stop();
        }
        if (typeof node.disconnect === "function") {
          node.disconnect();
        }
      } catch (error) {
        // An already stopped oscillator is harmless.
      }
    });
    ambientNodes = [];
    audioActive = false;
    state.preferences.sound = "off";
    saveState();
    updateSoundLabels();
    refreshShell();
    document.dispatchEvent(new CustomEvent("elsewhere:audio", {
      detail: { active: false, context: audioContext, master: audioMaster }
    }));
  }

  function toggleSound() {
    if (audioActive) {
      stopAudio();
      toast("车站广播已静音。");
      return;
    }
    ensureAudio().then(function () {
      toast("车站广播已开启。");
    }).catch(function () {
      state.preferences.sound = "off";
      saveState();
      updateSoundLabels();
    });
  }

  function copyTicket() {
    var value = state.identity.ticketNo;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(function () {
        toast("车票编号已复制。");
      }).catch(function () {
        window.prompt("复制车票编号：", value);
      });
    } else {
      window.prompt("复制车票编号：", value);
    }
  }

  function resetJourney() {
    var confirmed = window.confirm("删除这台设备上的 Elsewhere 护照、印章和作品记录？此操作无法撤销。");
    if (!confirmed) {
      return;
    }
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      // The in-memory reset below still works.
    }
    state = createState();
    Elsewhere.state = state;
    saveState();
    stopAudio();
    refreshShell();
    document.dispatchEvent(new CustomEvent("elsewhere:reset", { detail: { state: state } }));
    toast("本机旅程已删除。车站给了你一张新票。");
  }

  function setQuality() {
    var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    var lowPower = Boolean(
      (connection && connection.saveData) ||
      (navigator.deviceMemory && navigator.deviceMemory <= 4) ||
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)
    );
    var quality = state.preferences.quality === "auto" ? (lowPower ? "low" : "standard") : state.preferences.quality;
    document.documentElement.setAttribute("data-quality", quality);
  }

  function downloadText(filename, text) {
    var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 1000);
  }

  function boot() {
    if (booted || !document.body) {
      return;
    }
    booted = true;

    var room = getCurrentRoom();
    state.meta.lastRoom = room.id;
    state.meta.visitCount = Number(state.meta.visitCount || 0) + 1;
    saveState();
    applyMotionPreference();
    setQuality();
    buildShell();
    document.body.classList.add("ew-ready");

    if (!storageAvailable) {
      window.setTimeout(function () {
        toast("本次旅行不会留档：浏览器拒绝了本地存储。");
      }, 500);
    }

    document.dispatchEvent(new CustomEvent("elsewhere:ready", {
      detail: Elsewhere
    }));
  }

  var Elsewhere = {
    version: STATE_VERSION,
    rooms: ROOMS,
    state: state,
    awardStamp: awardStamp,
    getStampCount: getStampCount,
    getRoomData: getRoomData,
    setRoomData: setRoomData,
    getArtifact: getArtifact,
    setArtifact: setArtifact,
    seedFor: seedFor,
    rngFor: rngFor,
    toast: toast,
    refresh: refreshShell,
    saveState: saveState,
    downloadText: downloadText,
    openMap: function () { openDialog(shell.mapDialog); },
    openPassport: function () { openDialog(shell.passportDialog); },
    motion: {
      get reduced() { return isMotionReduced(); }
    },
    audio: {
      ensure: ensureAudio,
      stop: stopAudio,
      toggle: toggleSound,
      get active() { return audioActive; },
      get context() { return audioContext; },
      get master() { return audioMaster; }
    }
  };

  window.Elsewhere = Elsewhere;

  window.addEventListener("storage", function (event) {
    if (event.key !== STORAGE_KEY || !event.newValue) {
      return;
    }
    try {
      state = normalizeState(JSON.parse(event.newValue));
      Elsewhere.state = state;
      refreshShell();
      document.dispatchEvent(new CustomEvent("elsewhere:state-sync", {
        detail: { state: state }
      }));
    } catch (error) {
      // Ignore malformed data from another tab.
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    window.setTimeout(boot, 0);
  }
})();
