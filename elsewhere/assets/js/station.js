(function () {
  "use strict";

  var API = null;
  var selectedArtifact = null;

  var DAILY_NOTICES = [
    "今天有三阵雨没有落下。它们被装进蓝色玻璃瓶，暂存于 E01。",
    "一封没有寄出的道歉信经过分拣时发出轻微海潮声。",
    "未眠商店收到七个多余的星期日下午，保质期未知。",
    "低空广播室截获一条消息：月亮申请延迟四分钟升起。",
    "档案馆新增一页空白网页。访问记录显示它曾被一千个人想起。",
    "票蛾今日啃坏两张返程票，并把孔洞排列成一条河。",
    "非常用途局批准了一个可以替窗户记住雨声的装置。"
  ];

  function byId(id) {
    return document.getElementById(id);
  }

  function narrativeFor(count) {
    if (count >= 10) {
      return "别把这里当成远方。请带一件未发生的事回到今天。";
    }
    if (count >= 8) {
      return "一个没有退出条件的系统，会把等待误认作永恒。";
    }
    if (count >= 6) {
      return "他方不是收容所，是周转站。";
    }
    if (count >= 4) {
      return "本站积压原因：旅客只进不出。";
    }
    if (count >= 2) {
      return "不是页面丢了，是去向没有登记。";
    }
    return "本证只证明你曾抵达，不保证那里存在。";
  }

  function dismissEntry(enableSound) {
    var finish = function () {
      API.state.meta.introSeen = true;
      API.saveState();
      byId("stationEntry").setAttribute("data-dismissed", "true");
      claimStationStamp();
      window.setTimeout(function () {
        byId("claimTicket").focus();
      }, 60);
    };

    if (enableSound) {
      API.audio.ensure().then(finish).catch(function () {
        API.toast("广播没有接通。你仍可安静进入。");
        finish();
      });
    } else {
      finish();
    }
  }

  function claimStationStamp() {
    var first = API.awardStamp("station", {
      ticket: API.state.identity.ticketNo,
      arrival: "without-appointment"
    });
    byId("claimTicket").textContent = first ? "旅客证已签发" : "打开临时旅客证";
    if (!first) {
      API.openPassport();
    }
    renderAll();
  }

  function renderDepartures() {
    var board = byId("departureBoard");
    var destinations = API.rooms.slice(1);
    var recommendedIndex = API.seedFor("recommended-departure") % destinations.length;
    var rows = destinations.map(function (room, index) {
      var stamped = Boolean(API.state.passport.stamps[room.id]);
      var recommended = index === recommendedIndex;
      var status = stamped ? "已抵达" : (recommended ? "今夜推荐" : "准点");
      var time = "03:" + String(18 + index * 3).padStart(2, "0");
      return [
        '<a class="departure-row" href="', room.path, '" data-recommended="', String(recommended), '">',
        '<span class="departure-row__code">', room.code, '</span>',
        '<span class="departure-row__name">', room.name, '</span>',
        '<span class="departure-row__status">', status, '</span>',
        '<time class="departure-row__time">', time, '</time>',
        '<span class="departure-row__arrow" aria-hidden="true">→</span>',
        '</a>'
      ].join("");
    });
    board.innerHTML = rows.join("");
  }

  function artifactName(value, fallback) {
    if (!value) {
      return fallback;
    }
    if (typeof value === "string") {
      return value;
    }
    return value.name || value.title || value.label || value.word || fallback;
  }

  function buildArtifacts() {
    var candidates = [
      {
        id: "word",
        type: "一个失重的词",
        name: artifactName(API.getArtifact("typewriterWord"), "没有落地的停顿")
      },
      {
        id: "invention",
        type: "一件无用发明",
        name: artifactName(API.getArtifact("invention"), "替窗户保存雨声的装置")
      },
      {
        id: "plant",
        type: "一株声音植物",
        name: artifactName(API.getArtifact("soundPlant") || API.getArtifact("bonsai"), "静音天气一号")
      },
      {
        id: "universe",
        type: "一幅宇宙星图",
        name: artifactName(API.getArtifact("universeSignature"), "EW-60 秒星图")
      },
      {
        id: "mart",
        type: "一件商店商品",
        name: artifactName(API.getArtifact("martItem"), "一小罐没有用完的下午")
      }
    ];

    var container = byId("returnArtifacts");
    container.innerHTML = "";
    candidates.forEach(function (candidate, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "return-artifact";
      button.setAttribute("aria-pressed", String(index === 0));

      var strong = document.createElement("strong");
      strong.textContent = candidate.type;
      var small = document.createElement("span");
      small.textContent = candidate.name;
      button.appendChild(strong);
      button.appendChild(small);

      button.addEventListener("click", function () {
        selectedArtifact = candidate;
        container.querySelectorAll(".return-artifact").forEach(function (node) {
          node.setAttribute("aria-pressed", String(node === button));
        });
      });
      container.appendChild(button);
    });
    selectedArtifact = candidates[0];
  }

  function renderFinale() {
    var count = API.getStampCount();
    var unlocked = count >= API.rooms.length;
    var returned = Boolean(API.state.meta.returnedAt);
    var platform = byId("finalPlatform");
    platform.setAttribute("data-unlocked", String(unlocked));
    platform.querySelector(".final-progress").setAttribute("aria-valuenow", String(count));
    byId("finalProgressBar").style.width = Math.min(100, count * 10) + "%";
    byId("finalProgressLabel").textContent = count + " / " + API.rooms.length + " 枚印章";

    if (returned) {
      byId("finalTitle").textContent = "03:18 · 回程手续完成";
      byId("finalCopy").textContent = "此处曾有一位旅客，成功离开。车站仍然开放，只是它不再把等待误认作永恒。";
      byId("returnArtifacts").hidden = true;
      byId("bringToday").hidden = false;
      byId("bringToday").textContent = "查看回程凭条";
      return;
    }

    if (unlocked) {
      byId("finalTitle").textContent = "03:18 · 回程闸门";
      byId("finalCopy").textContent = "请从这趟旅程中选一件未发生的东西，带回仍然来得及的今天。";
      byId("returnArtifacts").hidden = false;
      byId("bringToday").hidden = false;
      buildArtifacts();
    } else {
      byId("finalTitle").textContent = "尚未开放的回程闸门";
      byId("finalCopy").textContent = "十枚印章会把同一句话重新拼好。在那以前，闸门只把等待误认作永恒。";
      byId("returnArtifacts").hidden = true;
      byId("bringToday").hidden = true;
    }
  }

  function receiptTail() {
    var creative = API.getArtifact("typewriterWord") || API.getArtifact("invention");
    var observant = API.state.passport.stamps.window && API.state.passport.stamps.archive;
    if (creative) {
      return "你带回了一件世界还没学会需要的工具。";
    }
    if (observant) {
      return "你带回了一双肯多看一会儿的眼睛。";
    }
    return "你带回了一条允许自己改变主意的规则。";
  }

  function openReceipt(completeJourney) {
    if (completeJourney && !API.state.meta.returnedAt) {
      API.state.meta.returnedAt = new Date().toISOString();
      API.state.meta.returnArtifact = selectedArtifact;
      API.saveState();
    }

    var artifact = API.state.meta.returnArtifact || selectedArtifact || {
      type: "一张空白车票",
      name: "它仍然可以去任何地方"
    };
    byId("receiptTicket").textContent = API.state.identity.ticketNo;
    byId("receiptArtifact").textContent = artifact.type + "｜" + artifact.name;
    byId("receiptTail").textContent = receiptTail();

    var dialog = byId("returnDialog");
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
    renderAll();
  }

  function closeReceipt() {
    var dialog = byId("returnDialog");
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
  }

  function downloadReceipt() {
    var artifact = API.state.meta.returnArtifact || selectedArtifact || {
      type: "一张空白车票",
      name: "它仍然可以去任何地方"
    };
    var text = [
      "ELSEWHERE MUNICIPAL TRANSIT / 他方线",
      "回程凭条 · 03:18",
      "",
      "恭喜，你没有找到另一个世界。",
      "你只是替这个世界取回了一小块可能。",
      "",
      "车票编号：" + API.state.identity.ticketNo,
      "回程物：" + artifact.type + "｜" + artifact.name,
      "目的地：你原来所在的地方",
      "",
      receiptTail(),
      "",
      "他方线不负责带人逃走。",
      "它只负责把那些差一点发生的事，送回仍然来得及的今天。"
    ].join("\n");
    API.downloadText("elsewhere-return-0318.txt", text);
    API.toast("回程凭条已保存。");
  }

  function renderClock() {
    var returned = Boolean(API.state.meta.returnedAt);
    var clock = byId("stationClock");
    clock.textContent = returned ? "03:18" : "03:17";
    clock.setAttribute("datetime", returned ? "03:18" : "03:17");
    byId("clockStatus").textContent = returned ? "本次列车已经抵达" : "所有班次正在等待";
  }

  function renderAll() {
    var count = API.getStampCount();
    byId("ticketNumber").textContent = API.state.identity.ticketNo;
    byId("ticketProgress").textContent = count + " / " + API.rooms.length;
    byId("narrativeNotice").textContent = narrativeFor(count);
    byId("dailyDate").textContent = API.state.daily.date + " / 今日种子";
    byId("dailyNotice").textContent = DAILY_NOTICES[API.seedFor("daily-notice") % DAILY_NOTICES.length];
    byId("claimTicket").textContent = API.state.passport.stamps.station ? "打开临时旅客证" : "领取临时旅客证";
    renderClock();
    renderDepartures();
    renderFinale();
    API.refresh();
  }

  function init(event) {
    API = event.detail || window.Elsewhere;
    if (!API) {
      return;
    }

    if (API.state.meta.introSeen) {
      byId("stationEntry").setAttribute("data-dismissed", "true");
    }

    byId("enterQuietly").addEventListener("click", function () {
      dismissEntry(false);
    });
    byId("enterWithSound").addEventListener("click", function () {
      dismissEntry(true);
    });
    byId("claimTicket").addEventListener("click", claimStationStamp);
    byId("openNetwork").addEventListener("click", API.openMap);
    byId("bringToday").addEventListener("click", function () {
      openReceipt(!API.state.meta.returnedAt);
    });
    byId("downloadReceipt").addEventListener("click", downloadReceipt);
    byId("closeReceipt").addEventListener("click", closeReceipt);
    byId("returnDialog").addEventListener("click", function (clickEvent) {
      if (clickEvent.target === byId("returnDialog")) {
        closeReceipt();
      }
    });

    document.addEventListener("elsewhere:stamp", renderAll);
    document.addEventListener("elsewhere:state-sync", renderAll);
    document.addEventListener("elsewhere:reset", function () {
      byId("stationEntry").removeAttribute("data-dismissed");
      renderAll();
    });
    renderAll();
  }

  document.addEventListener("elsewhere:ready", init, { once: true });
})();
