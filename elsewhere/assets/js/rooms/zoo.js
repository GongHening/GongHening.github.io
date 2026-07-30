(function () {
  "use strict";

  var ROOM_ID = "zoo";
  var EXHIBITS = ["cache", "packet", "deadlock"];
  var ROUTES = {
    tower: { name: "塔顶线", capacity: 1, delay: 1 },
    tunnel: { name: "隧道线", capacity: 2, delay: 2 },
    river: { name: "河湾线", capacity: 3, delay: 3 }
  };

  var app = null;
  var initialized = false;
  var zooSeed = 317;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var roomState = {
    completedExhibits: [],
    stamped: false,
    firstCompletedAt: null
  };
  var cacheState = null;
  var packetState = null;
  var deadlockState = null;
  var cacheSequence = [];
  var packets = [];
  var els = {};

  function safeCall(method, args, fallback) {
    if (!app || typeof app[method] !== "function") {
      return fallback;
    }
    try {
      var result = app[method].apply(app, args || []);
      return typeof result === "undefined" ? fallback : result;
    } catch (error) {
      console.warn("[Elsewhere:E09] " + method + " failed", error);
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

  function motionIsReduced() {
    return reducedMotion ||
      Boolean(app && app.motion && app.motion.reduced) ||
      document.documentElement.getAttribute("data-motion") === "reduced";
  }

  function queryElements() {
    els.rosterList = document.getElementById("roster-list");
    els.rosterCount = document.getElementById("roster-count");
    els.rosterStamp = document.getElementById("roster-stamp");
    els.passport = document.getElementById("zoo-passport");
    els.passportTitle = document.getElementById("passport-title");
    els.passportCopy = document.getElementById("passport-copy");
    els.live = document.getElementById("zoo-live");

    els.facility = document.getElementById("enrichment-facility");
    els.facilityTitle = document.getElementById("facility-title");
    els.facilityDescription = document.getElementById("facility-description");
    els.facilityCode = document.getElementById("facility-code");
    els.facilityCore = els.facility ? els.facility.querySelector(".facility-core") : null;

    els.cacheCurrent = document.getElementById("cache-current");
    els.cacheGuidance = document.getElementById("cache-guidance");
    els.cacheQueue = document.getElementById("cache-request-queue");
    els.cacheSlots = Array.prototype.slice.call(document.querySelectorAll(".cache-slot"));
    els.cacheHits = document.getElementById("cache-hits");
    els.cacheMisses = document.getElementById("cache-misses");
    els.cacheStatus = document.getElementById("cache-status");
    els.cacheReset = document.getElementById("cache-reset");

    els.packetBoard = document.getElementById("packet-board");
    els.packetBird = document.getElementById("packet-bird");
    els.packetName = document.getElementById("packet-name");
    els.packetSize = document.getElementById("packet-size");
    els.packetTtl = document.getElementById("packet-ttl");
    els.routeButtons = Array.prototype.slice.call(document.querySelectorAll(".route-button"));
    els.packetProgress = document.getElementById("packet-progress");
    els.packetStatus = document.getElementById("packet-status");
    els.packetReset = document.getElementById("packet-reset");

    els.deadlockPool = document.getElementById("deadlock-pool");
    els.crabs = Array.prototype.slice.call(document.querySelectorAll(".crab"));
    els.ringMessage = document.getElementById("ring-message");
    els.deadlockState = document.getElementById("deadlock-state");
    els.deadlockStatus = document.getElementById("deadlock-status");
    els.deadlockReset = document.getElementById("deadlock-reset");
  }

  function announce(message) {
    if (!els.live) return;
    els.live.textContent = "";
    window.setTimeout(function () {
      els.live.textContent = message;
    }, 20);
  }

  function readRoomState() {
    var saved = safeCall("getRoomData", [ROOM_ID], {});
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) {
      saved = {};
    }
    var completed = Array.isArray(saved.completedExhibits)
      ? saved.completedExhibits.filter(function (id) { return EXHIBITS.indexOf(id) >= 0; })
      : [];
    roomState.completedExhibits = completed.filter(function (id, index) {
      return completed.indexOf(id) === index;
    });
    roomState.stamped = Boolean(saved.stamped || saved.completed || roomState.completedExhibits.length);
    roomState.firstCompletedAt = saved.firstCompletedAt || null;
  }

  function saveRoomState() {
    safeCall("setRoomData", [ROOM_ID, {
      completedExhibits: roomState.completedExhibits.slice(),
      stamped: roomState.stamped,
      completed: roomState.completedExhibits.length > 0,
      allExhibitsComplete: roomState.completedExhibits.length === EXHIBITS.length,
      firstCompletedAt: roomState.firstCompletedAt
    }]);
  }

  function isComplete(exhibitId) {
    return roomState.completedExhibits.indexOf(exhibitId) >= 0;
  }

  function renderOverallProgress() {
    var count = roomState.completedExhibits.length;
    EXHIBITS.forEach(function (id) {
      var done = isComplete(id);
      var rosterItem = document.querySelector('[data-exhibit-status="' + id + '"]');
      var stateBadge = document.querySelector('[data-state-badge="' + id + '"]');
      if (rosterItem) {
        rosterItem.classList.toggle("is-complete", done);
        var rosterText = rosterItem.querySelector("strong");
        if (rosterText) rosterText.textContent = done ? "巡检完成" : "待巡检";
      }
      if (stateBadge) {
        stateBadge.classList.toggle("is-complete", done);
        stateBadge.textContent = done ? "巡检完成" : "待巡检";
      }
    });

    if (els.rosterCount) els.rosterCount.textContent = count + "/3";
    if (els.rosterStamp) els.rosterStamp.classList.toggle("is-earned", roomState.stamped);
    if (els.passport) els.passport.classList.toggle("is-earned", roomState.stamped);

    if (els.passportTitle && els.passportCopy) {
      if (count === 0) {
        els.passportTitle.textContent = "巡检记录尚未完成";
        els.passportCopy.textContent = "完成上方任意一项挑战，系统动物园会把“今天”盖进你的护照。";
      } else if (count < EXHIBITS.length) {
        els.passportTitle.textContent = "E09 巡检资格已确认";
        els.passportCopy.textContent =
          "你已完成 " + count + " 处展区，并取得循规园印章。其余动物仍愿意接受额外巡检。";
      } else {
        els.passportTitle.textContent = "今夜所有系统运转正常";
        els.passportCopy.textContent =
          "三处展区均已完成巡检：记忆得到整理，迁徙准点抵达，漫长的等待也终于有人先放手。";
      }
    }
  }

  function completeExhibit(exhibitId) {
    if (isComplete(exhibitId)) {
      renderOverallProgress();
      return;
    }

    var wasStamped = roomState.stamped;
    roomState.completedExhibits.push(exhibitId);
    if (!roomState.firstCompletedAt) {
      roomState.firstCompletedAt = new Date().toISOString();
    }

    if (!roomState.stamped) {
      safeCall("awardStamp", [ROOM_ID, { exhibit: exhibitId }], false);
      roomState.stamped = true;
    }

    safeCall("setArtifact", ["zooVisit", {
      room: "E09",
      completedExhibits: roomState.completedExhibits.slice(),
      keeperLevel: roomState.completedExhibits.length === EXHIBITS.length ? "night-keeper" : "visitor",
      firstCompletedAt: roomState.firstCompletedAt,
      updatedAt: new Date().toISOString()
    }]);
    saveRoomState();
    renderOverallProgress();

    if (!wasStamped) {
      safeCall("toast", ["E09 循规园印章已落入护照。"]);
      announce("挑战完成。你取得了 E09 循规园印章。");
    } else {
      safeCall("toast", ["额外巡检记录已写入护照。"]);
      announce("额外展区巡检完成。");
    }
  }

  function artifactText(value, keys) {
    if (typeof value === "string" || typeof value === "number") {
      return String(value).trim();
    }
    if (!value || typeof value !== "object") return "";
    for (var i = 0; i < keys.length; i += 1) {
      var candidate = value[keys[i]];
      if (typeof candidate === "string" && candidate.trim()) {
        return candidate.trim();
      }
    }
    return "";
  }

  function renderEnrichmentFacility() {
    var invention = safeCall("getArtifact", ["invention"], null);
    var name = artifactText(invention, ["name", "title", "invention", "label", "patentName"]);
    if (!name && invention && invention.blueprint) {
      name = artifactText(invention.blueprint, ["name", "title", "label"]);
    }

    if (!name) {
      if (els.facilityCode) els.facilityCode.textContent = "E06→E09";
      return;
    }

    var description = artifactText(invention, [
      "purpose",
      "description",
      "abstract",
      "function",
      "summary",
      "effect"
    ]);
    if (els.facility) els.facility.classList.add("has-invention");
    if (els.facilityTitle) els.facilityTitle.textContent = "「" + name.slice(0, 32) + "」已作为丰容设施入园";
    if (els.facilityDescription) {
      els.facilityDescription.textContent = description
        ? description.slice(0, 110) + "。保育员暂不理解其用途，动物们似乎已经有了自己的答案。"
        : "非常用途局已完成跨部门移交。保育员暂不理解它的用途，动物们似乎已经有了自己的答案。";
    }
    if (els.facilityCode) {
      els.facilityCode.textContent = "E06-" + String(hashString(name) % 10000).padStart(4, "0");
    }
    if (els.facilityCore) {
      els.facilityCore.textContent = name.slice(0, 1);
      els.facilityCore.setAttribute("title", name);
    }
  }

  function rotateArray(array, amount) {
    if (!array.length) return [];
    var index = ((amount % array.length) + array.length) % array.length;
    return array.slice(index).concat(array.slice(0, index));
  }

  function buildCacheSequence() {
    var assets = rotateArray(["月票", "雨声", "星图", "蓝伞", "回执"], zooSeed % 5);
    var pattern = [0, 1, 2, 0, 3, 1, 0, 4, 0, 1];
    return pattern.map(function (index) { return assets[index]; });
  }

  function resetCache() {
    cacheState = {
      slots: [null, null, null],
      turn: 0,
      hits: 0,
      misses: 0,
      finished: false
    };
    renderCache();
    setCacheStatus("笼门重新打开。第一件请求正从传送带上滑来。");
  }

  function setCacheStatus(message, shouldAnnounce) {
    if (els.cacheStatus) els.cacheStatus.textContent = message;
    if (shouldAnnounce) announce(message);
  }

  function cacheRequest() {
    return cacheSequence[cacheState.turn] || null;
  }

  function renderCacheQueue() {
    if (!els.cacheQueue) return;
    els.cacheQueue.innerHTML = "";
    cacheSequence.forEach(function (item, index) {
      var li = document.createElement("li");
      li.textContent = item.slice(0, 1);
      li.title = item;
      li.setAttribute("aria-label", "第 " + (index + 1) + " 个请求：" + item);
      if (index < cacheState.turn) li.classList.add("is-done");
      if (index === cacheState.turn && !cacheState.finished) {
        li.classList.add("is-current");
        li.setAttribute("aria-current", "step");
      }
      els.cacheQueue.appendChild(li);
    });
  }

  function renderCache() {
    if (!cacheState) return;
    var request = cacheRequest();
    var cachedIndex = request ? cacheState.slots.indexOf(request) : -1;

    if (els.cacheCurrent) {
      els.cacheCurrent.textContent = cacheState.finished ? "本轮巡检完成" : request;
    }
    if (els.cacheGuidance) {
      if (cacheState.finished) {
        els.cacheGuidance.textContent = "所有请求都已处理，可重新开笼观察另一种替换策略。";
      } else if (cachedIndex >= 0) {
        els.cacheGuidance.textContent = "它记得这件东西。请点中颊囊 " + (cachedIndex + 1) + "，完成一次命中。";
      } else {
        els.cacheGuidance.textContent = "缓存里没有它。请选择一个颊囊装入，可覆盖旧物。";
      }
    }
    if (els.cacheHits) els.cacheHits.textContent = String(cacheState.hits);
    if (els.cacheMisses) els.cacheMisses.textContent = String(cacheState.misses);

    els.cacheSlots.forEach(function (button, index) {
      var value = cacheState.slots[index];
      var valueEl = button.querySelector(".slot-value");
      var actionEl = button.querySelector(".slot-action");
      if (valueEl) valueEl.textContent = value || "空";
      if (actionEl) {
        actionEl.textContent = cacheState.finished
          ? "巡检完成"
          : cachedIndex === index
            ? "从这里取出"
            : value
              ? "替换此物"
              : "装入这里";
      }
      button.disabled = cacheState.finished;
      button.setAttribute(
        "aria-label",
        "颊囊 " + (index + 1) + "，当前" + (value ? "装有" + value : "为空") +
        (cacheState.finished ? "，巡检完成" : cachedIndex === index ? "，点击完成缓存命中" : "，点击装入当前请求")
      );
    });
    renderCacheQueue();
  }

  function animateCacheSlot(index, className) {
    var slot = els.cacheSlots[index];
    if (!slot) return;
    slot.classList.remove(className);
    void slot.offsetWidth;
    slot.classList.add(className);
    window.setTimeout(function () {
      slot.classList.remove(className);
    }, 420);
  }

  function handleCacheSlot(event) {
    var button = event.target.closest(".cache-slot");
    if (!button || cacheState.finished) return;
    var slotIndex = Number(button.dataset.slot);
    var request = cacheRequest();
    var cachedIndex = cacheState.slots.indexOf(request);
    var message;

    if (cachedIndex >= 0) {
      if (slotIndex !== cachedIndex) {
        setCacheStatus(
          "仓鼠指了指颊囊 " + (cachedIndex + 1) + "：请求的“" + request + "”已经在那里，不必覆盖别的记忆。",
          true
        );
        animateCacheSlot(cachedIndex, "is-hit");
        return;
      }
      cacheState.hits += 1;
      animateCacheSlot(slotIndex, "is-hit");
      message = "命中：“" + request + "”不必重新搬运。";
    } else {
      var previous = cacheState.slots[slotIndex];
      cacheState.slots[slotIndex] = request;
      cacheState.misses += 1;
      animateCacheSlot(slotIndex, "is-replaced");
      message = previous
        ? "未命中：“" + previous + "”让出颊囊，换成了“" + request + "”。"
        : "未命中：“" + request + "”被装进了空颊囊。";
    }

    cacheState.turn += 1;
    if (cacheState.turn >= cacheSequence.length) {
      cacheState.finished = true;
      renderCache();
      setCacheStatus(
        "请求列处理完毕：命中 " + cacheState.hits + " 次，未命中 " + cacheState.misses +
        " 次。你亲手决定了这份短期记忆。",
        true
      );
      completeExhibit("cache");
    } else {
      renderCache();
      setCacheStatus(message + " 下一件请求已经抵达。");
    }
  }

  function buildPackets() {
    var packetTypes = [
      { route: "tower", name: "紧急灯报码", size: 1, ttl: 1 },
      { route: "tunnel", name: "路灯状态包", size: 2, ttl: 2 },
      { route: "river", name: "潮汐相册包", size: 3, ttl: 3 },
      { route: "tower", name: "零点校时包", size: 1, ttl: 1 },
      { route: "tunnel", name: "两页天气包", size: 2, ttl: 2 },
      { route: "river", name: "百年窗景包", size: 3, ttl: 3 }
    ];
    return rotateArray(packetTypes, zooSeed % packetTypes.length);
  }

  function resetPackets() {
    packetState = {
      index: 0,
      finished: false,
      locked: false
    };
    if (els.packetBird) {
      els.packetBird.classList.remove("is-flying", "is-returning");
    }
    renderPacket();
    setPacketStatus("鸟群重新列队。请检查第一只候鸟的包裹和剩余时间。");
  }

  function setPacketStatus(message, shouldAnnounce) {
    if (els.packetStatus) els.packetStatus.textContent = message;
    if (shouldAnnounce) announce(message);
  }

  function renderPacketProgress() {
    if (!els.packetProgress) return;
    els.packetProgress.innerHTML = "";
    packets.forEach(function (packet, index) {
      var li = document.createElement("li");
      li.setAttribute("aria-label", "第 " + (index + 1) + " 个数据包：" +
        (index < packetState.index ? "已送达" : index === packetState.index ? "正在等待" : "尚未出发"));
      if (index < packetState.index) li.classList.add("is-done");
      if (index === packetState.index && !packetState.finished) {
        li.classList.add("is-current");
        li.setAttribute("aria-current", "step");
      }
      els.packetProgress.appendChild(li);
    });
  }

  function renderPacket() {
    if (!packetState) return;
    var packet = packets[packetState.index] || packets[packets.length - 1];
    if (els.packetName) els.packetName.textContent = packetState.finished ? "全部准点抵达" : packet.name;
    if (els.packetSize) els.packetSize.textContent = packetState.finished ? "—" : String(packet.size);
    if (els.packetTtl) els.packetTtl.textContent = packetState.finished ? "—" : String(packet.ttl);
    els.routeButtons.forEach(function (button) {
      button.disabled = packetState.finished || packetState.locked;
    });
    renderPacketProgress();
  }

  function animateBirdReturn() {
    if (!els.packetBird) return;
    els.packetBird.classList.remove("is-returning");
    void els.packetBird.offsetWidth;
    els.packetBird.classList.add("is-returning");
    window.setTimeout(function () {
      if (els.packetBird) els.packetBird.classList.remove("is-returning");
    }, 460);
  }

  function handleRoute(event) {
    var button = event.target.closest(".route-button");
    if (!button || packetState.finished || packetState.locked) return;

    var routeId = button.dataset.route;
    var route = ROUTES[routeId];
    var packet = packets[packetState.index];
    var fits = route.capacity >= packet.size;
    var arrives = route.delay <= packet.ttl;

    if (!fits || !arrives) {
      var reason = !fits
        ? "容量只有 " + route.capacity + "，装不下大小为 " + packet.size + " 的包裹"
        : "需要 " + route.delay + " 个时间单位，但候鸟只剩 " + packet.ttl;
      setPacketStatus(route.name + "未获放行：" + reason + "。候鸟绕了一圈，回到起点。", true);
      animateBirdReturn();
      return;
    }

    packetState.locked = true;
    renderPacket();
    if (els.packetBird) els.packetBird.classList.add("is-flying");
    setPacketStatus(packet.name + " 正沿" + route.name + "迁徙。容量与时间都刚好合适。");

    window.setTimeout(function () {
      packetState.index += 1;
      packetState.locked = false;
      if (els.packetBird) els.packetBird.classList.remove("is-flying");

      if (packetState.index >= packets.length) {
        packetState.finished = true;
        renderPacket();
        setPacketStatus("六只数据包候鸟全部准点抵达。迁徙图上没有留下丢失的虚线。", true);
        completeExhibit("packet");
      } else {
        renderPacket();
        setPacketStatus("投递成功。下一只候鸟已经背好包裹。");
      }
    }, motionIsReduced() ? 30 : 620);
  }

  function resetDeadlock() {
    deadlockState = {
      solved: false,
      locked: false,
      yieldedCrab: null
    };
    renderDeadlock();
    setDeadlockStatus("打破循环不需要更多资源，只需要其中一位先放手。");
  }

  function setDeadlockStatus(message, shouldAnnounce) {
    if (els.deadlockStatus) els.deadlockStatus.textContent = message;
    if (shouldAnnounce) announce(message);
  }

  function renderDeadlock() {
    if (!deadlockState) return;
    if (els.deadlockPool) {
      els.deadlockPool.classList.toggle("is-resolved", deadlockState.solved);
    }
    if (els.ringMessage) els.ringMessage.textContent = deadlockState.solved ? "循环已断" : "循环等待";
    if (els.deadlockState) {
      els.deadlockState.textContent = deadlockState.solved ? "资源开始依次流动" : "没有任何进展";
    }
    els.crabs.forEach(function (crab) {
      var id = crab.dataset.crab;
      var yielded = id === deadlockState.yieldedCrab;
      crab.classList.toggle("is-yielding", yielded);
      crab.disabled = deadlockState.locked || deadlockState.solved;
      var action = crab.querySelector("b");
      if (action) {
        action.textContent = yielded && deadlockState.solved ? "已先放手" : deadlockState.solved ? "可以继续" : "请它礼让";
      }
    });
  }

  function handleCrab(event) {
    var crab = event.target.closest(".crab");
    if (!crab || deadlockState.locked || deadlockState.solved) return;
    var names = { a: "甲", b: "乙", c: "丙" };
    var resources = { a: "钥匙", b: "灯", c: "茶杯" };
    var id = crab.dataset.crab;
    deadlockState.locked = true;
    deadlockState.yieldedCrab = id;
    renderDeadlock();
    setDeadlockStatus(names[id] + "螃蟹正在松开“" + resources[id] + "”。等待环出现了一道缺口……");

    window.setTimeout(function () {
      deadlockState.locked = false;
      deadlockState.solved = true;
      renderDeadlock();
      setDeadlockStatus(
        names[id] + "先放手后，其余资源依次流动。没有新增任何东西，系统却重新开始运行。",
        true
      );
      completeExhibit("deadlock");
    }, motionIsReduced() ? 30 : 720);
  }

  function bindEvents() {
    var cacheSlots = document.getElementById("cache-slots");
    var routeButtons = document.getElementById("route-buttons");
    if (cacheSlots) cacheSlots.addEventListener("click", handleCacheSlot);
    if (routeButtons) routeButtons.addEventListener("click", handleRoute);
    if (els.deadlockPool) els.deadlockPool.addEventListener("click", handleCrab);
    if (els.cacheReset) els.cacheReset.addEventListener("click", resetCache);
    if (els.packetReset) els.packetReset.addEventListener("click", resetPackets);
    if (els.deadlockReset) els.deadlockReset.addEventListener("click", resetDeadlock);
  }

  function init(event) {
    if (initialized) return;
    if (!document.getElementById("zoo-exhibits")) return;

    app = window.Elsewhere || (event && event.detail) || null;
    initialized = true;
    queryElements();

    var seedValue = safeCall("seedFor", [ROOM_ID], new Date().toISOString().slice(0, 10));
    zooSeed = typeof seedValue === "number" ? seedValue >>> 0 : hashString(seedValue);
    readRoomState();
    cacheSequence = buildCacheSequence();
    packets = buildPackets();
    renderEnrichmentFacility();
    renderOverallProgress();
    resetCache();
    resetPackets();
    resetDeadlock();
    bindEvents();
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
