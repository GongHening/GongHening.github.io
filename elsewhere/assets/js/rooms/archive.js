(function () {
  "use strict";

  var initialized = false;
  var ROOM_ID = "archive";
  var FILES = {
    riverwalk: {
      code: "404-001 / BROKEN",
      date: "1999-08-17",
      name: "riverwalk-1999.html",
      description: "一份从未上线的河岸个人主页。访问计数器停在零，但背景音乐的文件名仍然存在。",
      blocks: [
        { type: "code", text: "<title>今晚沿河走一会儿</title>\n<body bgcolor=\"midnightblue\">\n  <p>这里以后会放很多照片。</p>\n  <!-- under construction forever -->\n</body>" },
        { type: "text", text: "最后修改者在备注里写道：“等扫描仪修好就更新。”档案馆没有找到扫描仪，也没有找到那些照片。" }
      ],
      status: "状态：服务器不存在；散步可能仍然有效。"
    },
    umbrella: {
      code: "404-087 / UNFILED",
      date: "2008-03-17",
      name: "blue-umbrella.warranty",
      description: "蓝色折伞的跨年份保修凭证。购买地点被雨水晕开，序列号仍可辨认。",
      blocks: [
        { type: "text", text: "品名：河岸用蓝伞\n序列号：03-17-404\n故障描述：总在下一场雨之前失踪\n处理意见：不得报废，转交下一位需要回头的人。" },
        { type: "letter", text: "附注：若在不同年份看见同一把伞，请不要追赶。它只是比持有人更熟悉回程路线。" }
      ],
      status: "状态：已转送 E02 未眠商店，采用只借不售方式。"
    },
    forum: {
      code: "404-203 / BROKEN",
      date: "2013-11-02",
      name: "forum-last-post.txt",
      description: "一座关闭论坛的最后一帖。页面显示 0 条回复，数据库备份里却多出一个未发布草稿。",
      blocks: [
        { type: "code", text: "[03:16] user_lasttrain\n还有人在吗？我好像坐过站了。\n\n回复 (0)" },
        { type: "letter", text: "未发布草稿 / user_riverside：\n“在。下一站不要下车，等时钟走到 03:18。”" }
      ],
      status: "状态：主题已锁定；回复仍在发送队列中。"
    },
    apology: {
      code: "410-019 / WITHDRAWN",
      date: "2021-06-04",
      name: "apology-unsent.eml",
      description: "保存了十七次、发送了零次的邮件草稿。收件地址完整，正文每次都停在称呼之后。",
      blocks: [
        { type: "letter", text: "主题：关于那天\n\n你好，\n\n我想了很久，不知道怎样开始才不显得太迟。\n\n[草稿在此结束]" },
        { type: "text", text: "附件清单显示曾有一张名为“explanation-final-final-2.pdf”的文件，未随草稿入库。" }
      ],
      status: "状态：未投递；副本已移交未眠商店零元货架。"
    },
    robots: {
      code: "404-404 / SYSTEM",
      date: "2026-03-17",
      name: "robots.txt",
      description: "档案馆夜间爬取规则。馆员用铅笔在最后一行补写了一条机器看不懂的指示。",
      blocks: [
        { type: "code", text: "User-agent: *\nDisallow: /platform-zero/\nDisallow: /records/0317/\n\n# 第四行与第五行之间有一条被空白覆盖的编号\n# 纸张记得：0317" },
        { type: "text", text: "系统校验：登记目录应有 6 项，当前可读编号只有 5 项。请检查目录中的压痕。" }
      ],
      status: "状态：规则仍生效；空白行不在禁止访问名单内。"
    },
    hidden: {
      code: "E04-½ / UNREGISTERED",
      date: "DATE NOT FOUND",
      name: "platform-zero.dossier",
      description: "这份文件从来没有地址，因此也从来没有真正丢失。它被夹在两个连续编号之间，厚度恰好是半页。",
      blocks: [
        { type: "hidden", text: "零号月台不是地图上的起点。\n它是所有“差点出发”的念头，在凌晨 03:17 临时共用的候车室。" },
        { type: "letter", text: "馆员的回形针下压着一张便笺：\n“如果有人读到这里，请替档案馆承认一件事——不存在的地方，也可以留下真实的回程票。”" }
      ],
      status: "状态：隐藏记录已显影；档案总数恢复为 6。"
    }
  };

  function init(event) {
    if (initialized) {
      return;
    }

    var api = event && event.detail ? event.detail : window.Elsewhere;
    if (!api) {
      return;
    }
    initialized = true;

    var records = Array.prototype.slice.call(document.querySelectorAll(".archive-record"));
    var filterButtons = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
    var searchForm = document.getElementById("archive-search-form");
    var searchInput = document.getElementById("archive-search");
    var searchStatus = document.getElementById("archive-search-status");
    var viewerEmpty = document.getElementById("archive-viewer-empty");
    var viewerContent = document.getElementById("archive-file-content");
    var hiddenRow = document.getElementById("archive-hidden-row");
    var roomData = api.getRoomData(ROOM_ID) || {};
    var hiddenFound = roomData.hiddenFound === true;
    var activeFilter = "all";

    function isMotionReduced() {
      if (api.motion && typeof api.motion.reduced === "boolean") {
        return api.motion.reduced;
      }
      return document.documentElement.getAttribute("data-motion") === "reduced" ||
        Boolean(
          typeof window.matchMedia === "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
        );
    }

    function markHiddenFound() {
      hiddenRow.classList.add("is-found");
      hiddenRow.querySelector(".archive-file-icon").textContent = "½";
      var label = hiddenRow.querySelector("span:nth-child(2)");
      label.removeAttribute("aria-hidden");
      label.querySelector("strong").textContent = "platform-zero.dossier";
      label.querySelector("small").textContent = "E04-½ · 未登记档案";
      hiddenRow.querySelector("time").textContent = "----";
      hiddenRow.setAttribute("aria-label", "隐藏档案 platform-zero.dossier，已显影");
      document.getElementById("archive-discovery-status").textContent = "隐藏档案 E04-½ 已显影。";
    }

    function discoverHidden(method) {
      if (!hiddenFound) {
        hiddenFound = true;
        api.setRoomData(ROOM_ID, {
          hiddenFound: true,
          discoveryMethod: method,
          lastFile: "hidden"
        });
        markHiddenFound();
        var isNew = api.awardStamp(ROOM_ID, {
          file: "E04-½",
          discoveryMethod: method,
          catalogCount: 6
        });
        if (isNew) {
          api.toast("E04 隐藏档案已显影：404 库在护照留下「远方」。");
        }
      } else {
        markHiddenFound();
      }
    }

    function appendBlock(container, block) {
      var element = document.createElement("p");
      if (block.type === "code") {
        element.className = "archive-code";
      } else if (block.type === "letter") {
        element.className = "archive-letter";
      } else if (block.type === "hidden") {
        element.className = "archive-hidden-message";
      }
      element.textContent = block.text;
      container.appendChild(element);
    }

    function openFile(fileId, method) {
      var file = FILES[fileId];
      if (!file) {
        return;
      }

      if (fileId === "hidden") {
        discoverHidden(method || "catalog-gap");
      }

      records.forEach(function (record) {
        record.classList.toggle("is-selected", record.getAttribute("data-file") === fileId);
      });
      viewerEmpty.hidden = true;
      viewerContent.hidden = false;
      document.getElementById("archive-file-code").textContent = file.code;
      document.getElementById("archive-file-date").textContent = file.date;
      document.getElementById("archive-file-name").textContent = file.name;
      document.getElementById("archive-file-description").textContent = file.description;
      document.getElementById("archive-file-status").textContent = file.status;

      var body = document.getElementById("archive-file-body");
      body.replaceChildren();
      file.blocks.forEach(function (block) {
        appendBlock(body, block);
      });

      api.setRoomData(ROOM_ID, { lastFile: fileId });
      if (window.innerWidth < 760) {
        viewerContent.scrollIntoView({
          behavior: isMotionReduced() ? "auto" : "smooth",
          block: "nearest"
        });
      }
    }

    function applyFilter() {
      var query = searchInput.value.trim().toLowerCase();
      var visibleCount = 0;
      var gapVisible = false;

      records.forEach(function (record) {
        var fileId = record.getAttribute("data-file");
        var categoryMatch = activeFilter === "all" || record.getAttribute("data-category") === activeFilter;
        var file = FILES[fileId];
        var searchText = [
          fileId,
          file ? file.name : "",
          file ? file.code : "",
          file ? file.description : "",
          record.textContent
        ].join(" ").toLowerCase();
        var queryMatch = !query || searchText.indexOf(query) !== -1;

        if (fileId === "hidden" && query) {
          queryMatch = /0317|03:17|压痕|空白|半页/.test(query);
        }

        record.hidden = !(categoryMatch && queryMatch);
        if (!record.hidden) {
          if (fileId === "hidden" && !hiddenFound) {
            gapVisible = true;
          } else {
            visibleCount += 1;
          }
        }
      });

      if (visibleCount) {
        searchStatus.textContent = "找到 " + visibleCount + " 条登记记录。" +
          (gapVisible ? "另有 1 处无法计数的间隙。" : "");
      } else {
        searchStatus.textContent = gapVisible
          ? "没有编号匹配，但目录里有一处空白压痕。"
          : "没有登记记录匹配；也许答案没有编号。";
      }
    }

    records.forEach(function (record) {
      record.addEventListener("click", function () {
        var fileId = record.getAttribute("data-file");
        openFile(fileId, fileId === "hidden" ? "catalog-gap" : "catalog");
      });
    });

    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        activeFilter = button.getAttribute("data-filter");
        filterButtons.forEach(function (candidate) {
          var active = candidate === button;
          candidate.classList.toggle("is-active", active);
          candidate.setAttribute("aria-pressed", active ? "true" : "false");
        });
        applyFilter();
      });
    });

    searchForm.addEventListener("submit", function (eventObject) {
      eventObject.preventDefault();
      var query = searchInput.value.trim().toLowerCase();
      if (/0317|03:17|压痕|空白|半页/.test(query)) {
        discoverHidden("catalog-search");
        activeFilter = "all";
        filterButtons.forEach(function (button) {
          var active = button.getAttribute("data-filter") === "all";
          button.classList.toggle("is-active", active);
          button.setAttribute("aria-pressed", active ? "true" : "false");
        });
        applyFilter();
        openFile("hidden", "catalog-search");
        return;
      }
      applyFilter();
      var firstVisible = records.find(function (record) {
        return !record.hidden;
      });
      if (firstVisible) {
        openFile(firstVisible.getAttribute("data-file"), "catalog-search");
      }
    });

    searchInput.addEventListener("input", applyFilter);

    if (hiddenFound) {
      markHiddenFound();
    }
    applyFilter();

    if (roomData.lastFile && FILES[roomData.lastFile] && (roomData.lastFile !== "hidden" || hiddenFound)) {
      openFile(roomData.lastFile, "return-visit");
    }
  }

  document.addEventListener("elsewhere:ready", init, { once: true });
  if (window.Elsewhere && document.readyState !== "loading") {
    window.setTimeout(function () {
      init({ detail: window.Elsewhere });
    }, 0);
  }
}());
