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

    var form = document.getElementById("inv-form");
    var troubleInput = document.getElementById("inv-trouble");
    var objectAInput = document.getElementById("inv-object-a");
    var objectBInput = document.getElementById("inv-object-b");
    var consentInput = document.getElementById("inv-consent");
    var count = document.getElementById("inv-count");
    var formStatus = document.getElementById("inv-form-status");
    var empty = document.getElementById("inv-result-empty");
    var patent = document.getElementById("inv-patent");
    var patentTitle = document.getElementById("inv-patent-title");
    var patentNumber = document.getElementById("inv-patent-number");
    var patentSeed = document.getElementById("inv-patent-seed");
    var patentState = document.getElementById("inv-patent-state");
    var abstractOutput = document.getElementById("inv-abstract");
    var processOutput = document.getElementById("inv-process");
    var claimsOutput = document.getElementById("inv-claims");
    var warningOutput = document.getElementById("inv-warning");
    var blueprint = document.getElementById("inv-blueprint");
    var blueprintContext = typeof blueprint.getContext === "function"
      ? blueprint.getContext("2d")
      : null;
    var stamp = document.getElementById("inv-issued-stamp");
    var regenerateButton = document.getElementById("inv-regenerate");
    var downloadButton = document.getElementById("inv-download");
    var issueButton = document.getElementById("inv-issue");
    var roomState = Elsewhere.getRoomData("inventions") || {};
    var variation = Number(roomState.variation || 0);
    var currentArtifact = null;

    var objects = {
      umbrella: {
        name: "一把总是湿的伞",
        short: "湿伞",
        component: "伞骨式迟疑捕集器",
        action: "收集尚未落下的雨",
        output: "一滴有编号的犹豫",
        shape: "radial"
      },
      alarm: {
        name: "一只慢三分钟的闹钟",
        short: "慢钟",
        component: "三分钟相位补偿轮",
        action: "把时间推迟到问题之后",
        output: "可重复使用的三分钟",
        shape: "circle"
      },
      ticket: {
        name: "一张过期车票",
        short: "旧票",
        component: "失效目的地读取槽",
        action: "读取没有抵达的方向",
        output: "一次不成立的换乘",
        shape: "card"
      },
      kettle: {
        name: "一只过分热心的水壶",
        short: "热心水壶",
        component: "沸腾建议发生腔",
        action: "对任何沉默发出沸腾建议",
        output: "一团带有主见的蒸汽",
        shape: "vessel"
      },
      chair: {
        name: "一把会叹气的椅子",
        short: "叹气椅",
        component: "坐姿遗憾承重架",
        action: "替使用者完成一次叹气",
        output: "一小段卸载后的重量",
        shape: "frame"
      },
      mirror: {
        name: "一面记性很好的镜子",
        short: "记忆镜",
        component: "昨日表情反射层",
        action: "保留使用者忘记的表情",
        output: "一帧未经同意的昨天",
        shape: "panel"
      },
      spoon: {
        name: "一把方向感很差的勺子",
        short: "迷路勺",
        component: "逆向搅拌导航臂",
        action: "在杯中寻找不存在的北方",
        output: "一圈方向不明的涟漪",
        shape: "arm"
      },
      cloud: {
        name: "一小团室内云",
        short: "室内云",
        component: "低空情绪凝结室",
        action: "在天花板以下形成局部天气",
        output: "一场只淋湿一个人的雨",
        shape: "cloud"
      },
      moth: {
        name: "一只吃票根的白蛾",
        short: "票蛾",
        component: "纤维路线消化单元",
        action: "咬掉所有多余的目的地",
        output: "一串可供逃生的孔洞",
        shape: "wing"
      },
      thermos: {
        name: "半瓶昨天的温水",
        short: "昨日温水",
        component: "低温昨日保留瓶",
        action: "保持一件事不冷也不热",
        output: "半瓶尚可接受的昨天",
        shape: "vessel"
      },
      button: {
        name: "一枚拒绝被按的按钮",
        short: "拒按按钮",
        component: "反向操作意见开关",
        action: "在被要求时提出程序异议",
        output: "一次获得批准的拒绝",
        shape: "circle"
      },
      ruler: {
        name: "一把测量沉默的尺",
        short: "沉默尺",
        component: "无声长度标定轨",
        action: "测量一句话没有发生的部分",
        output: "精确到毫米的空白",
        shape: "bar"
      },
      radio: {
        name: "一台只播天气的收音机",
        short: "天气电台",
        component: "88.0 低空接收盒",
        action: "把心情误报为局部天气",
        output: "一则无人负责的晴雨预报",
        shape: "box"
      },
      sock: {
        name: "一只失去同伴的袜子",
        short: "单只袜",
        component: "配对缺席感应套",
        action: "寻找一切成双出现的事物",
        output: "一份关于另一只的报告",
        shape: "soft"
      },
      lamp: {
        name: "一盏怕黑的台灯",
        short: "怕黑灯",
        component: "自我照明安抚灯罩",
        action: "在熄灭前请求另一盏灯陪同",
        output: "一小圈被安慰的黑暗",
        shape: "lamp"
      },
      envelope: {
        name: "一个没有地址的信封",
        short: "无址信封",
        component: "去向悬置封装袋",
        action: "投递所有没有收件人的句子",
        output: "一封持续在途的信",
        shape: "card"
      }
    };

    var titleEndings = [
      "联合延迟装置",
      "可逆式烦恼转运机",
      "非必要自动处理系统",
      "低效但郑重的补偿仪",
      "日常困扰旁路发生器",
      "微型不便保存设备"
    ];

    var connectors = [
      "经由一根只在周二导通的黄铜管",
      "借助逆时针旋转的审批齿轮",
      "通过低于耳语音量的气动回路",
      "在三次不成功的尝试之后",
      "按照先犹豫、再盖章的标准流程",
      "由一段无法追责的弹簧"
    ];

    var sideEffects = [
      "可能使附近的钟表产生轻微愧疚",
      "在潮湿天气会坚持认为自己已经成功",
      "偶尔把解决方案寄给另一个烦恼",
      "连续使用会让星期三显得格外漫长",
      "设备安静时不代表它停止了抱怨",
      "若意外有效，请立即停止并重新提交"
    ];

    function hashText(text) {
      var hash = 2166136261;
      for (var index = 0; index < text.length; index += 1) {
        hash ^= text.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
      }
      return hash >>> 0;
    }

    function createRandom(seed) {
      var state = seed >>> 0;
      return function () {
        state += 0x6d2b79f5;
        var value = state;
        value = Math.imul(value ^ (value >>> 15), value | 1);
        value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
        return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
      };
    }

    function pick(list, random) {
      return list[Math.floor(random() * list.length)];
    }

    function sanitizeTrouble(value) {
      return value.trim().replace(/[。！？!?；;]+$/g, "");
    }

    function updateCount() {
      count.textContent = Array.from(troubleInput.value).length + " / 96";
    }

    function makeArtifact() {
      var trouble = sanitizeTrouble(troubleInput.value);
      var objectAKey = objectAInput.value;
      var objectBKey = objectBInput.value;
      var objectA = objects[objectAKey];
      var objectB = objects[objectBKey];
      var dailySeed = Number(Elsewhere.seedFor("inventions")) >>> 0;
      var seed = (dailySeed ^ hashText(trouble + "|" + objectAKey + "|" + objectBKey + "|" + variation)) >>> 0;
      var random = createRandom(seed);
      var connector = pick(connectors, random);
      var title = objectA.short + "—" + objectB.short + "式" + pick(titleEndings, random);
      var seedLabel = seed.toString(36).toUpperCase().padStart(7, "0").slice(-7);
      var numberTail = String((seed % 9000) + 1000);
      var revision = String((variation % 90) + 10);
      var firstSideEffect = pick(sideEffects, random);
      var secondSideEffect = pick(sideEffects.filter(function (item) {
        return item !== firstSideEffect;
      }), random);

      return {
        version: 1,
        trouble: trouble,
        objectAKey: objectAKey,
        objectBKey: objectBKey,
        objectA: objectA,
        objectB: objectB,
        title: title,
        number: "ELW-E06-" + numberTail + "-" + revision,
        seed: seed,
        seedLabel: seedLabel,
        abstract: "本发明涉及日常不便与过度工程领域，尤其是一种用于应对“" + trouble + "”的装置。该装置以" + objectA.name + "作为主处理单元，" + connector + "与" + objectB.name + "连接，在不直接解决问题的前提下，将其转换为" + objectB.output + "，从而显著增加处理过程的仪式感。",
        process: [
          "启动" + objectA.component + "，使其" + objectA.action + "，直到指示窗出现一次不确定的闪烁。",
          connector + "，把上述结果缓慢移交至" + objectB.component + "。",
          "要求" + objectB.name + objectB.action + "，同时将原烦恼登记为“理论上已被注意”。",
          "收集最终产物——" + objectB.output + "；将其放在烦恼旁边，两者互不干涉即视为运行成功。"
        ],
        claims: [
          "一种处理“" + trouble + "”的系统，其特征在于：系统拒绝采用更简单的方法。",
          "根据权利要求 1 所述的系统，其中" + objectA.name + "与" + objectB.name + "之间保持至少一个礼貌但没有必要的机械距离。",
          "根据前述任一权利要求所述的系统，其运行结果不得明显优于什么也不做。"
        ],
        warning: firstSideEffect + "；" + secondSideEffect + "。",
        labels: [
          objectA.component,
          objectB.component,
          "烦恼入口",
          objectA.output,
          "未解决结果暂存口"
        ],
        generatedAt: new Date().toISOString(),
        variation: variation,
        issuedAt: null
      };
    }

    function makeList(target, items) {
      target.replaceChildren();
      items.forEach(function (item) {
        var listItem = document.createElement("li");
        listItem.textContent = item;
        target.appendChild(listItem);
      });
    }

    function roundedRect(context, x, y, width, height, radius) {
      var r = Math.min(radius, width / 2, height / 2);
      context.beginPath();
      context.moveTo(x + r, y);
      context.lineTo(x + width - r, y);
      context.quadraticCurveTo(x + width, y, x + width, y + r);
      context.lineTo(x + width, y + height - r);
      context.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
      context.lineTo(x + r, y + height);
      context.quadraticCurveTo(x, y + height, x, y + height - r);
      context.lineTo(x, y + r);
      context.quadraticCurveTo(x, y, x + r, y);
      context.closePath();
    }

    function drawArrow(context, fromX, fromY, toX, toY) {
      var angle = Math.atan2(toY - fromY, toX - fromX);
      context.beginPath();
      context.moveTo(fromX, fromY);
      context.lineTo(toX, toY);
      context.stroke();
      context.beginPath();
      context.moveTo(toX, toY);
      context.lineTo(toX - 14 * Math.cos(angle - Math.PI / 6), toY - 14 * Math.sin(angle - Math.PI / 6));
      context.lineTo(toX - 14 * Math.cos(angle + Math.PI / 6), toY - 14 * Math.sin(angle + Math.PI / 6));
      context.closePath();
      context.fill();
    }

    function drawComponent(context, x, y, radius, shape, label, index) {
      context.save();
      context.translate(x, y);
      context.strokeStyle = "rgba(212, 235, 226, 0.88)";
      context.fillStyle = "rgba(212, 235, 226, 0.06)";
      context.lineWidth = 2;

      if (shape === "circle" || shape === "radial" || shape === "wing" || shape === "cloud") {
        context.beginPath();
        context.arc(0, 0, radius, 0, Math.PI * 2);
        context.fill();
        context.stroke();
        if (shape === "radial" || shape === "wing") {
          for (var spoke = 0; spoke < 8; spoke += 1) {
            var angle = Math.PI * 2 / 8 * spoke;
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
            context.stroke();
          }
        }
      } else if (shape === "bar" || shape === "arm") {
        roundedRect(context, -radius * 1.25, -radius * 0.34, radius * 2.5, radius * 0.68, 10);
        context.fill();
        context.stroke();
        for (var tick = -4; tick <= 4; tick += 1) {
          context.beginPath();
          context.moveTo(tick * radius / 5, -radius * 0.34);
          context.lineTo(tick * radius / 5, -radius * (tick % 2 ? 0.12 : 0.02));
          context.stroke();
        }
      } else {
        roundedRect(context, -radius, -radius * 0.75, radius * 2, radius * 1.5, shape === "soft" ? 28 : 7);
        context.fill();
        context.stroke();
        context.beginPath();
        context.moveTo(-radius * 0.65, 0);
        context.lineTo(radius * 0.65, 0);
        context.stroke();
      }

      context.beginPath();
      context.arc(0, 0, 8, 0, Math.PI * 2);
      context.fillStyle = "#d8b06f";
      context.fill();
      context.restore();

      var labelY = y + radius + 42;
      context.fillStyle = "#d8b06f";
      context.font = "18px ui-monospace, Consolas, monospace";
      context.fillText("0" + index, x - radius, labelY);
      context.fillStyle = "#d7e7e1";
      context.font = "22px \"Songti SC\", \"STSong\", serif";
      context.fillText(label, x - radius + 34, labelY);
    }

    function wrapCanvasText(context, text, x, y, maxWidth, lineHeight, maxLines) {
      var characters = Array.from(text);
      var line = "";
      var lines = [];

      characters.forEach(function (character) {
        var testLine = line + character;
        if (context.measureText(testLine).width > maxWidth && line) {
          lines.push(line);
          line = character;
        } else {
          line = testLine;
        }
      });
      if (line) lines.push(line);

      lines.slice(0, maxLines).forEach(function (currentLine, index) {
        var output = currentLine;
        if (index === maxLines - 1 && lines.length > maxLines) {
          output = output.slice(0, -1) + "…";
        }
        context.fillText(output, x, y + index * lineHeight);
      });
    }

    function drawBlueprint(artifact) {
      if (!blueprintContext) {
        blueprint.setAttribute("aria-label", "当前设备无法绘制蓝图；完整发明说明仍可签发或下载为文字档案。");
        return;
      }
      var context = blueprintContext;
      var width = blueprint.width;
      var height = blueprint.height;
      var random = createRandom(artifact.seed);

      context.clearRect(0, 0, width, height);
      context.fillStyle = "#22424a";
      context.fillRect(0, 0, width, height);

      context.strokeStyle = "rgba(207, 233, 224, 0.105)";
      context.lineWidth = 1;
      for (var x = 0; x <= width; x += 32) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }
      for (var y = 0; y <= height; y += 32) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      context.strokeStyle = "rgba(216, 234, 226, 0.68)";
      context.lineWidth = 2;
      context.strokeRect(24, 24, width - 48, height - 48);
      context.strokeRect(35, 35, width - 70, height - 70);

      context.fillStyle = "#d7e7e1";
      context.font = "600 30px \"Songti SC\", \"STSong\", serif";
      context.fillText(artifact.title, 66, 82);
      context.fillStyle = "rgba(215, 231, 225, 0.7)";
      context.font = "17px ui-monospace, Consolas, monospace";
      context.fillText(artifact.number + "  /  FIG. 01  /  SEED " + artifact.seedLabel, 67, 112);

      var leftX = 330 + (random() - 0.5) * 55;
      var rightX = 850 + (random() - 0.5) * 55;
      var centerY = 365 + (random() - 0.5) * 25;
      var leftRadius = 105 + random() * 28;
      var rightRadius = 100 + random() * 30;

      context.strokeStyle = "rgba(215, 231, 225, 0.84)";
      context.fillStyle = "rgba(215, 231, 225, 0.84)";
      context.lineWidth = 3;
      drawArrow(context, leftX + leftRadius + 15, centerY, rightX - rightRadius - 22, centerY);
      context.setLineDash([8, 10]);
      context.beginPath();
      context.moveTo(leftX, centerY - leftRadius - 12);
      context.bezierCurveTo(470, 180, 720, 175, rightX, centerY - rightRadius - 12);
      context.stroke();
      context.setLineDash([]);

      drawComponent(context, leftX, centerY, leftRadius, artifact.objectA.shape, artifact.objectA.component, 1);
      drawComponent(context, rightX, centerY, rightRadius, artifact.objectB.shape, artifact.objectB.component, 2);

      var callouts = [
        { x: 68, y: 192, toX: leftX - 62, toY: centerY - 75, number: "03", label: "烦恼入口 / " + artifact.trouble },
        { x: 68, y: 590, toX: leftX - 30, toY: centerY + 88, number: "04", label: artifact.objectA.output },
        { x: 735, y: 610, toX: rightX + 45, toY: centerY + 72, number: "05", label: "未解决结果暂存口" }
      ];

      callouts.forEach(function (callout) {
        context.strokeStyle = "rgba(215, 231, 225, 0.52)";
        context.lineWidth = 1.5;
        context.beginPath();
        context.moveTo(callout.x + 10, callout.y - 22);
        context.lineTo(callout.toX, callout.toY);
        context.stroke();
        context.fillStyle = "#d8b06f";
        context.font = "17px ui-monospace, Consolas, monospace";
        context.fillText(callout.number, callout.x, callout.y);
        context.fillStyle = "#d7e7e1";
        context.font = "19px \"Songti SC\", \"STSong\", serif";
        wrapCanvasText(context, callout.label, callout.x + 35, callout.y, 330, 27, 2);
      });

      context.fillStyle = "rgba(215, 231, 225, 0.56)";
      context.font = "15px ui-monospace, Consolas, monospace";
      context.fillText("NOT TO SCALE · ALL DISTANCES ARE PROCEDURAL", 66, height - 64);

      if (artifact.issuedAt) {
        context.save();
        context.translate(width - 150, height - 135);
        context.rotate(-0.18);
        context.strokeStyle = "rgba(206, 101, 77, 0.86)";
        context.fillStyle = "rgba(206, 101, 77, 0.86)";
        context.lineWidth = 5;
        context.beginPath();
        context.arc(0, 0, 66, 0, Math.PI * 2);
        context.stroke();
        context.beginPath();
        context.arc(0, 0, 54, 0, Math.PI * 2);
        context.stroke();
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "700 24px \"Songti SC\", \"STSong\", serif";
        context.fillText("准予无用", 0, 0);
        context.restore();
      }
    }

    function renderArtifact(artifact, announce) {
      currentArtifact = artifact;
      empty.hidden = true;
      patent.hidden = false;
      patentTitle.textContent = artifact.title;
      patentNumber.textContent = artifact.number;
      patentSeed.textContent = artifact.seedLabel;
      patentState.textContent = artifact.issuedAt ? "正式签发" : "临时通过";
      abstractOutput.textContent = artifact.abstract;
      makeList(processOutput, artifact.process);
      makeList(claimsOutput, artifact.claims);
      warningOutput.textContent = artifact.warning;
      stamp.classList.toggle("is-issued", Boolean(artifact.issuedAt));
      issueButton.disabled = Boolean(artifact.issuedAt);
      issueButton.textContent = artifact.issuedAt ? "已正式签发" : "正式签发";
      drawBlueprint(artifact);
      if (announce) {
        formStatus.textContent = "审查完成：" + artifact.number + " 临时通过。";
        patent.scrollIntoView({
          behavior: (
            (Elsewhere.motion && Elsewhere.motion.reduced) ||
            document.documentElement.getAttribute("data-motion") === "reduced" ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ) ? "auto" : "smooth",
          block: "start"
        });
      }
    }

    function generate(shouldIncrement) {
      if (!form.reportValidity()) return;
      if (shouldIncrement) variation += 1;

      formStatus.textContent = "正在核对过度设计程度……";
      var artifact = makeArtifact();
      renderArtifact(artifact, true);
      Elsewhere.setRoomData("inventions", {
        variation: variation,
        draftNumber: artifact.number,
        lastGeneratedAt: artifact.generatedAt
      });
    }

    function finalizeArtifact(reason) {
      if (!currentArtifact) return false;
      if (!currentArtifact.issuedAt) {
        currentArtifact.issuedAt = new Date().toISOString();
      }

      patentState.textContent = "正式签发";
      stamp.classList.add("is-issued");
      issueButton.disabled = true;
      issueButton.textContent = "已正式签发";
      drawBlueprint(currentArtifact);
      Elsewhere.setArtifact("invention", currentArtifact);
      Elsewhere.setRoomData("inventions", {
        issuedNumber: currentArtifact.number,
        issuedAt: currentArtifact.issuedAt,
        troubleLength: Array.from(currentArtifact.trouble).length
      });

      var isNew = Elsewhere.awardStamp("inventions", {
        patentNumber: currentArtifact.number,
        seed: currentArtifact.seedLabel,
        reason: reason
      });
      Elsewhere.toast(isNew ? "E06 印章已签发，蓝图归你保管。" : "该发明已重新归档。");
      formStatus.textContent = "文件 " + currentArtifact.number + " 已正式签发。";
      return true;
    }

    function downloadBlueprint() {
      if (!currentArtifact) return;
      finalizeArtifact("download");
      var downloadedArtifact = currentArtifact;

      if (!blueprintContext || typeof blueprint.toBlob !== "function") {
        Elsewhere.downloadText(
          downloadedArtifact.number.toLowerCase() + "-patent.txt",
          [
            downloadedArtifact.title,
            "公开编号：" + downloadedArtifact.number,
            "世界种子：" + downloadedArtifact.seedLabel,
            "",
            downloadedArtifact.abstract,
            "",
            "运行程序：",
            downloadedArtifact.process.map(function (step, index) {
              return (index + 1) + ". " + step;
            }).join("\n"),
            "",
            "权利要求：",
            downloadedArtifact.claims.map(function (claim, index) {
              return (index + 1) + ". " + claim;
            }).join("\n"),
            "",
            "警示：" + downloadedArtifact.warning
          ].join("\n")
        );
        formStatus.textContent = "设备无法晒制图片，已改为下载文字专利并列入档案。";
        return;
      }

      downloadButton.disabled = true;
      formStatus.textContent = "正在晒制蓝图……";

      blueprint.toBlob(function (blob) {
        downloadButton.disabled = false;
        if (!blob) {
          formStatus.textContent = "晒图失败，请稍后再试。";
          return;
        }

        var url = URL.createObjectURL(blob);
        var link = document.createElement("a");
        link.href = url;
        link.download = downloadedArtifact.number.toLowerCase() + "-blueprint.png";
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.setTimeout(function () {
          URL.revokeObjectURL(url);
        }, 1000);
        formStatus.textContent = "蓝图已下载，并列入非常用途档案。";
      }, "image/png");
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      generate(false);
    });
    troubleInput.addEventListener("input", updateCount);
    troubleInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        generate(false);
      }
    });
    regenerateButton.addEventListener("click", function () {
      generate(true);
    });
    downloadButton.addEventListener("click", downloadBlueprint);
    issueButton.addEventListener("click", function () {
      if (finalizeArtifact("issue")) {
        stamp.setAttribute("aria-hidden", "false");
      }
    });

    updateCount();

    var saved = Elsewhere.getArtifact("invention");
    if (saved && typeof saved === "object" && saved.title && saved.objectAKey && saved.objectBKey) {
      saved.objectA = saved.objectA || objects[saved.objectAKey];
      saved.objectB = saved.objectB || objects[saved.objectBKey];
      troubleInput.value = saved.trouble || "";
      objectAInput.value = saved.objectAKey;
      objectBInput.value = saved.objectBKey;
      consentInput.checked = true;
      updateCount();
      renderArtifact(saved, false);
      formStatus.textContent = "已调出上次签发的文件：" + saved.number + "。";
    }
  }
})();
