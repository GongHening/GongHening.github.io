(function () {
  "use strict";

  var initialized = false;
  var ROOM_ID = "window";
  var ERA_ORDER = ["past", "present", "future"];
  var ERA_YEARS = {
    past: 1986,
    present: 2026,
    future: 2126
  };
  var ERA_CONTENT = {
    past: {
      code: "观察记录 1986-R",
      title: "烟囱还比楼群更高的时候",
      copy: "旧厂房在河对岸换班，桥面只有两盏灯。有人把一把蓝伞忘在长椅上，雨替它等了一夜。",
      label: "1986 年，旧厂房、低桥与雨夜河岸"
    },
    present: {
      code: "观察记录 2026-R",
      title: "仍在练习抵达的城市",
      copy: "河堤新铺了灯，末班车从桥下经过。有人撑着一把蓝伞，走得比雨慢一点。",
      label: "2026 年，雨夜河岸与亮灯的城市"
    },
    future: {
      code: "观察记录 2126-R",
      title: "河流获得自己的门牌以后",
      copy: "建筑学会绕开候鸟，桥梁只在有人靠近时发光。那把蓝伞被做成星座，提醒城市保留一点未完成。",
      label: "2126 年，生态高塔、光桥与伞形星座"
    }
  };
  var NIGHT_NOTES = [
    "玻璃内侧无雨，请勿擦去窗外的年份。",
    "若在三个时代看见同一把伞，属于正常折射。",
    "河流没有倒着走，是观测室暂时朝向了昨天。",
    "远景中出现自己时，请先确认那不是路灯。",
    "本室不保证未来准确，只保证它仍有空位。"
  ];

  function init(event) {
    if (initialized) {
      return;
    }

    var api = event && event.detail ? event.detail : window.Elsewhere;
    if (!api) {
      return;
    }
    initialized = true;

    var scene = document.getElementById("window-scene");
    var slider = document.getElementById("window-time");
    var yearOutput = document.getElementById("window-year");
    var countOutput = document.getElementById("window-seen-count");
    var status = document.getElementById("window-progress-status");
    var recordCode = document.getElementById("window-record-code");
    var recordTitle = document.getElementById("window-record-title");
    var recordCopy = document.getElementById("window-record-copy");
    var eraButtons = Array.prototype.slice.call(document.querySelectorAll("[data-era-target]"));
    var progressItems = Array.prototype.slice.call(document.querySelectorAll("[data-progress-era]"));
    var roomData = api.getRoomData(ROOM_ID) || {};
    var storedEras = Array.isArray(roomData.seenEras) ? roomData.seenEras : [];
    var seen = new Set(storedEras.filter(function (era) {
      return ERA_ORDER.indexOf(era) !== -1;
    }));
    var lastYear = Number(roomData.lastYear);

    if (!Number.isFinite(lastYear) || lastYear < 1986 || lastYear > 2126) {
      lastYear = 2026;
    }

    slider.value = String(Math.round(lastYear));
    document.getElementById("window-night-note").textContent =
      NIGHT_NOTES[api.seedFor("window-night-note") % NIGHT_NOTES.length];

    function eraForYear(year) {
      if (year <= 2005) {
        return "past";
      }
      if (year >= 2075) {
        return "future";
      }
      return "present";
    }

    function updateProgress(announce) {
      countOutput.textContent = String(seen.size);
      progressItems.forEach(function (item) {
        var isSeen = seen.has(item.getAttribute("data-progress-era"));
        item.classList.toggle("is-seen", isSeen);
      });

      if (announce) {
        if (seen.size < 3) {
          status.textContent = "已观察 " + seen.size + " 个时代，还需 " + (3 - seen.size) + " 个。";
        } else {
          status.textContent = "三个时代均已观察，远景观察室印章已登记。";
        }
      }
    }

    function awardIfComplete() {
      if (seen.size !== 3) {
        return;
      }

      var isNew = api.awardStamp(ROOM_ID, {
        eras: ERA_ORDER.join(","),
        lastYear: Number(slider.value),
        observation: "same-riverside-three-times"
      });
      if (isNew) {
        api.toast("E01 观察完成：远景观察室已在护照留下「把」。");
      }
    }

    function observe(era, shouldAnnounce) {
      if (!seen.has(era)) {
        seen.add(era);
        api.setRoomData(ROOM_ID, {
          seenEras: ERA_ORDER.filter(function (candidate) {
            return seen.has(candidate);
          }),
          lastYear: Number(slider.value)
        });
        updateProgress(shouldAnnounce);
        awardIfComplete();
      } else {
        updateProgress(false);
      }
    }

    function renderYear(year, shouldObserve) {
      var era = eraForYear(year);
      var content = ERA_CONTENT[era];
      yearOutput.value = String(year);
      yearOutput.textContent = String(year);
      scene.setAttribute("data-era", era);
      scene.setAttribute("aria-label", content.label);
      recordCode.textContent = content.code.replace(ERA_YEARS[era], year);
      recordTitle.textContent = content.title;
      recordCopy.textContent = content.copy;

      eraButtons.forEach(function (button) {
        var active = button.getAttribute("data-era-target") === era;
        button.setAttribute("aria-pressed", active ? "true" : "false");
      });

      api.setRoomData(ROOM_ID, { lastYear: year });
      if (shouldObserve) {
        observe(era, true);
      }
    }

    slider.addEventListener("input", function () {
      renderYear(Number(slider.value), true);
    });

    slider.addEventListener("change", function () {
      var year = Number(slider.value);
      var era = eraForYear(year);
      status.textContent = year + " 年观测稳定，已归入" +
        (era === "past" ? "昨日河岸。" : era === "future" ? "远日河岸。" : "今夜河岸。");
    });

    eraButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var era = button.getAttribute("data-era-target");
        var year = ERA_YEARS[era];
        slider.value = String(year);
        renderYear(year, true);
      });
    });

    updateProgress(false);
    renderYear(lastYear, true);
  }

  document.addEventListener("elsewhere:ready", init, { once: true });
  if (window.Elsewhere && document.readyState !== "loading") {
    window.setTimeout(function () {
      init({ detail: window.Elsewhere });
    }, 0);
  }
}());
