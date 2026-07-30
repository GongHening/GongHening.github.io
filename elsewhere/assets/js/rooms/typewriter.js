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

    var canvas = document.getElementById("tw-canvas");
    if (!canvas) return;
    var context = typeof canvas.getContext === "function" ? canvas.getContext("2d") : null;
    var visualAvailable = Boolean(context);
    if (!context) {
      context = makeNullContext();
      canvas.setAttribute("aria-label", "当前设备无法显示文字物理画布；仍可输入并保存文字记录。");
    }

    var input = document.getElementById("tw-input");
    var releaseButton = document.getElementById("tw-release");
    var resetButton = document.getElementById("tw-reset");
    var exportButton = document.getElementById("tw-export");
    var suggestionButton = document.getElementById("tw-suggestion");
    var gravityInput = document.getElementById("tw-gravity");
    var windInput = document.getElementById("tw-wind");
    var gravityValue = document.getElementById("tw-gravity-value");
    var windValue = document.getElementById("tw-wind-value");
    var counter = document.getElementById("tw-count");
    var status = document.getElementById("tw-status");
    var empty = document.getElementById("tw-empty");
    var stage = canvas.parentElement;
    var cursor = document.getElementById("tw-magnet-cursor");
    var pressure = document.getElementById("tw-pressure");
    var helpButton = document.getElementById("tw-help");
    var instructions = document.getElementById("tw-instructions");
    var magnetButtons = Array.prototype.slice.call(document.querySelectorAll("[data-magnet]"));
    var reduceMotion = isMotionReduced();
    var graphemeSegmenter = typeof Intl !== "undefined" && Intl.Segmenter
      ? new Intl.Segmenter("zh-CN", { granularity: "grapheme" })
      : null;

    var roomState = Elsewhere.getRoomData("typewriter") || {};
    var width = 0;
    var height = 0;
    var pixelRatio = 1;
    var particles = [];
    var lastPhrase = "";
    var lastFrame = performance.now();
    var lastReducedFrame = 0;
    var suggestionIndex = Number(roomState.suggestionIndex || 0);
    var palette = ["#f1ead7", "#d7caaa", "#9dc3b5", "#d47b5c", "#c0a36e"];
    var magnet = {
      x: 0,
      y: 0,
      mode: "attract",
      active: false,
      expires: 0,
      pointerId: null
    };

    var suggestions = [
      "明天也许会有一阵好风",
      "我把没说完的话放在这里",
      "请允许黄昏晚到五分钟",
      "不是所有迟到都需要道歉",
      "河岸还记得今天的脚步",
      "这一页暂时不必有答案",
      "愿你在普通的清晨抵达",
      "有些可能，只是走得很慢"
    ];

    canvas.tabIndex = 0;
    canvas.setAttribute("aria-describedby", "tw-stage-hint");

    function makeNullContext() {
      var gradient = { addColorStop: function () {} };
      return {
        beginPath: function () {},
        clearRect: function () {},
        createRadialGradient: function () { return gradient; },
        fillRect: function () {},
        fillText: function () {},
        lineTo: function () {},
        moveTo: function () {},
        restore: function () {},
        rotate: function () {},
        save: function () {},
        setTransform: function () {},
        stroke: function () {},
        strokeRect: function () {},
        translate: function () {}
      };
    }

    function isMotionReduced() {
      return Boolean(
        (Elsewhere.motion && Elsewhere.motion.reduced) ||
        document.documentElement.getAttribute("data-motion") === "reduced" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }

    function splitGraphemes(text) {
      if (!graphemeSegmenter) return Array.from(text);
      return Array.from(graphemeSegmenter.segment(text), function (part) {
        return part.segment;
      });
    }

    function updateCount() {
      counter.textContent = splitGraphemes(input.value).length + " / 42";
    }

    function updateForces() {
      var gravity = Number(gravityInput.value);
      var wind = Number(windInput.value);

      if (gravity === 0) {
        gravityValue.textContent = "失重";
      } else {
        gravityValue.textContent = (gravity > 0 ? "向下 " : "向上 ") + Math.abs(gravity) + "%";
      }

      if (wind === 0) {
        windValue.textContent = "静止";
      } else {
        windValue.textContent = (wind > 0 ? "向右 " : "向左 ") + Math.abs(wind) + "%";
      }

      pressure.textContent = "室压稳定 · " + (0.82 + Math.abs(wind) / 1000).toFixed(2);
    }

    function seededUnit(scope) {
      var value = Number(Elsewhere.seedFor(scope)) >>> 0;
      value += 0x6d2b79f5;
      value = Math.imul(value ^ (value >>> 15), value | 1);
      value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
      return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    }

    function resizeCanvas() {
      var rect = canvas.getBoundingClientRect();
      var oldWidth = width || rect.width;
      var oldHeight = height || rect.height;
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);

      particles.forEach(function (particle) {
        particle.x = particle.x / oldWidth * width;
        particle.y = particle.y / oldHeight * height;
      });

      if (!magnet.x && !magnet.y) {
        magnet.x = width / 2;
        magnet.y = height / 2;
      } else {
        magnet.x = magnet.x / oldWidth * width;
        magnet.y = magnet.y / oldHeight * height;
      }

      draw();
    }

    function newParticle(character, index, count) {
      var spread = Math.min(width * 0.62, Math.max(110, count * 28));
      var step = count > 1 ? spread / (count - 1) : 0;
      var x = width / 2 - spread / 2 + step * index;
      var jitter = seededUnit("typewriter:" + lastPhrase + ":" + index);
      var size = Math.max(24, Math.min(48, width / Math.max(count + 5, 12)));

      return {
        char: character,
        x: x,
        y: height * 0.5 + (jitter - 0.5) * 22,
        vx: (jitter - 0.5) * 65,
        vy: -65 - seededUnit("typewriter:rise:" + index + ":" + lastPhrase) * 115,
        angle: (jitter - 0.5) * 0.26,
        angularVelocity: (seededUnit("typewriter:spin:" + index + ":" + lastPhrase) - 0.5) * 1.1,
        radius: size * 0.53,
        size: size,
        color: palette[index % palette.length],
        asleep: false
      };
    }

    function releasePhrase() {
      var phrase = input.value.trim();
      if (!phrase) {
        status.textContent = "请先写下一句需要减重的话。";
        input.focus();
        return;
      }

      var letters = splitGraphemes(phrase).filter(function (character) {
        return character.trim().length > 0;
      });

      if (!letters.length) {
        status.textContent = "空白很轻，不需要再减重。";
        return;
      }

      lastPhrase = phrase;
      if (particles.length + letters.length > 110) {
        particles.splice(0, particles.length + letters.length - 110);
      }

      letters.forEach(function (character, index) {
        particles.push(newParticle(character, index, letters.length));
      });

      empty.classList.add("is-hidden");
      exportButton.disabled = false;
      status.textContent = "已放走 " + letters.length + " 个字。现在可以移动磁场。";
      Elsewhere.setRoomData("typewriter", {
        releasedCount: Number(roomState.releasedCount || 0) + 1,
        lastReleaseLength: letters.length,
        lastVisitedAt: new Date().toISOString()
      });
      roomState.releasedCount = Number(roomState.releasedCount || 0) + 1;
      canvas.focus({ preventScroll: true });
    }

    function resetRoom() {
      particles.length = 0;
      lastPhrase = "";
      magnet.active = false;
      empty.classList.remove("is-hidden");
      exportButton.disabled = true;
      cursor.classList.remove("is-active");
      status.textContent = "房间已恢复标准重量。";
      draw();
    }

    function resolveParticleCollisions() {
      for (var i = 0; i < particles.length; i += 1) {
        var first = particles[i];
        for (var j = i + 1; j < particles.length; j += 1) {
          var second = particles[j];
          var dx = second.x - first.x;
          var dy = second.y - first.y;
          var distanceSquared = dx * dx + dy * dy;
          var minimum = (first.radius + second.radius) * 0.72;

          if (distanceSquared <= 0 || distanceSquared >= minimum * minimum) continue;

          var distance = Math.sqrt(distanceSquared);
          var nx = dx / distance;
          var ny = dy / distance;
          var overlap = minimum - distance;
          first.x -= nx * overlap * 0.5;
          first.y -= ny * overlap * 0.5;
          second.x += nx * overlap * 0.5;
          second.y += ny * overlap * 0.5;

          var relativeVelocity = (second.vx - first.vx) * nx + (second.vy - first.vy) * ny;
          if (relativeVelocity < 0) {
            var impulse = relativeVelocity * 0.72;
            first.vx += impulse * nx;
            first.vy += impulse * ny;
            second.vx -= impulse * nx;
            second.vy -= impulse * ny;
          }
        }
      }
    }

    function simulate(delta, now) {
      var gravity = Number(gravityInput.value) / 100 * 245;
      var wind = Number(windInput.value) / 100 * 58;
      var magnetEnabled = magnet.mode !== "off" && (magnet.active || now < magnet.expires);
      var substeps = reduceMotion ? 1 : 2;
      var step = delta / substeps;

      for (var s = 0; s < substeps; s += 1) {
        particles.forEach(function (particle) {
          var ax = wind;
          var ay = gravity;

          if (magnetEnabled) {
            var dx = magnet.x - particle.x;
            var dy = magnet.y - particle.y;
            var distanceSquared = Math.max(dx * dx + dy * dy, 900);
            var distance = Math.sqrt(distanceSquared);
            var direction = magnet.mode === "repel" ? -1 : 1;
            var force = Math.min(680, 380000 / distanceSquared) * direction;
            ax += dx / distance * force;
            ay += dy / distance * force;
          }

          particle.vx += ax * step;
          particle.vy += ay * step;
          particle.vx *= Math.pow(0.993, step * 60);
          particle.vy *= Math.pow(0.994, step * 60);
          particle.angularVelocity *= Math.pow(0.99, step * 60);
          particle.x += particle.vx * step;
          particle.y += particle.vy * step;
          particle.angle += particle.angularVelocity * step;

          var radius = particle.radius * 0.78;
          if (particle.x < radius) {
            particle.x = radius;
            particle.vx = Math.abs(particle.vx) * 0.68;
            particle.angularVelocity -= particle.vy * 0.002;
          } else if (particle.x > width - radius) {
            particle.x = width - radius;
            particle.vx = -Math.abs(particle.vx) * 0.68;
            particle.angularVelocity += particle.vy * 0.002;
          }

          if (particle.y < radius) {
            particle.y = radius;
            particle.vy = Math.abs(particle.vy) * 0.68;
          } else if (particle.y > height - radius) {
            particle.y = height - radius;
            particle.vy = -Math.abs(particle.vy) * 0.62;
            particle.vx *= 0.88;
            if (Math.abs(particle.vy) < 5 && Math.abs(gravity) > 2) particle.vy = 0;
          }
        });

        resolveParticleCollisions();
      }
    }

    function paintParticles(targetContext, scaleX, scaleY, includeShadow) {
      particles.forEach(function (particle) {
        targetContext.save();
        targetContext.translate(particle.x * scaleX, particle.y * scaleY);
        targetContext.rotate(particle.angle);
        if (includeShadow) {
          targetContext.shadowColor = "rgba(111, 177, 166, 0.28)";
          targetContext.shadowBlur = 18 * Math.min(scaleX, scaleY);
        }
        targetContext.fillStyle = particle.color;
        targetContext.textAlign = "center";
        targetContext.textBaseline = "middle";
        targetContext.font = "400 " + Math.round(particle.size * Math.min(scaleX, scaleY)) + "px \"Songti SC\", \"STSong\", serif";
        targetContext.fillText(particle.char, 0, 0);
        targetContext.restore();
      });
    }

    function draw() {
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);
      paintParticles(context, 1, 1, true);
    }

    function animate(now) {
      window.requestAnimationFrame(animate);
      if (reduceMotion && now - lastReducedFrame < 80) return;
      var delta = Math.min((now - lastFrame) / 1000, 0.04);
      lastFrame = now;
      lastReducedFrame = now;
      if (!magnet.active && now >= magnet.expires) {
        cursor.classList.remove("is-active");
      }
      if (particles.length) simulate(delta, now);
      draw();
    }

    function pointerPosition(event) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: Math.max(0, Math.min(width, event.clientX - rect.left)),
        y: Math.max(0, Math.min(height, event.clientY - rect.top))
      };
    }

    function showMagnetAt(point, persistent) {
      magnet.x = point.x;
      magnet.y = point.y;
      magnet.active = persistent;
      magnet.expires = performance.now() + 1600;
      cursor.style.left = point.x + "px";
      cursor.style.top = point.y + "px";
      cursor.classList.toggle("is-active", magnet.mode !== "off");
    }

    function onPointerDown(event) {
      if (magnet.mode === "off") return;
      event.preventDefault();
      magnet.pointerId = event.pointerId;
      canvas.setPointerCapture(event.pointerId);
      showMagnetAt(pointerPosition(event), true);
      status.textContent = magnet.mode === "attract" ? "磁场正在聚拢文字。" : "磁场正在推开文字。";
    }

    function onPointerMove(event) {
      if (magnet.pointerId !== event.pointerId) return;
      showMagnetAt(pointerPosition(event), true);
    }

    function onPointerUp(event) {
      if (magnet.pointerId !== event.pointerId) return;
      magnet.pointerId = null;
      magnet.active = false;
      magnet.expires = performance.now() + 1000;
      window.setTimeout(function () {
        if (!magnet.active && performance.now() >= magnet.expires) {
          cursor.classList.remove("is-active");
        }
      }, 1050);
    }

    function onCanvasKeydown(event) {
      var amount = event.shiftKey ? 36 : 14;
      var handled = true;

      if (event.key === "ArrowLeft") magnet.x -= amount;
      else if (event.key === "ArrowRight") magnet.x += amount;
      else if (event.key === "ArrowUp") magnet.y -= amount;
      else if (event.key === "ArrowDown") magnet.y += amount;
      else if (event.key === " " || event.key === "Enter") magnet.active = !magnet.active;
      else handled = false;

      if (!handled) return;
      event.preventDefault();
      magnet.x = Math.max(0, Math.min(width, magnet.x));
      magnet.y = Math.max(0, Math.min(height, magnet.y));
      showMagnetAt({ x: magnet.x, y: magnet.y }, magnet.active);
      status.textContent = "键盘磁场位于画布 " + Math.round(magnet.x / width * 100) + "%，" + Math.round(magnet.y / height * 100) + "%。";
    }

    function setMagnetMode(mode) {
      magnet.mode = mode;
      magnetButtons.forEach(function (button) {
        button.setAttribute("aria-pressed", String(button.dataset.magnet === mode));
      });
      cursor.classList.toggle("is-active", mode !== "off" && (magnet.active || performance.now() < magnet.expires));
      status.textContent = mode === "off" ? "磁场已关闭。" : "磁场已切换为“" + (mode === "attract" ? "聚拢" : "推开") + "”。";
    }

    function drawExportPoster(exportCanvas) {
      var exportContext = exportCanvas.getContext("2d");
      var exportWidth = exportCanvas.width;
      var exportHeight = exportCanvas.height;
      var gradient = exportContext.createRadialGradient(exportWidth * 0.5, exportHeight * 0.45, 30, exportWidth * 0.5, exportHeight * 0.45, exportWidth * 0.75);
      gradient.addColorStop(0, "#18313c");
      gradient.addColorStop(0.55, "#0c1c26");
      gradient.addColorStop(1, "#061016");
      exportContext.fillStyle = gradient;
      exportContext.fillRect(0, 0, exportWidth, exportHeight);

      exportContext.strokeStyle = "rgba(158, 193, 181, 0.09)";
      exportContext.lineWidth = 1;
      for (var x = 80; x < exportWidth; x += 80) {
        exportContext.beginPath();
        exportContext.moveTo(x, 0);
        exportContext.lineTo(x, exportHeight);
        exportContext.stroke();
      }
      for (var y = 80; y < exportHeight; y += 80) {
        exportContext.beginPath();
        exportContext.moveTo(0, y);
        exportContext.lineTo(exportWidth, y);
        exportContext.stroke();
      }

      exportContext.strokeStyle = "rgba(216, 193, 147, 0.48)";
      exportContext.lineWidth = 2;
      exportContext.strokeRect(42, 42, exportWidth - 84, exportHeight - 84);
      exportContext.fillStyle = "#9dc3b5";
      exportContext.font = "22px ui-monospace, Consolas, monospace";
      exportContext.letterSpacing = "3px";
      exportContext.fillText("ELSEWHERE / LIGHT SENTENCE OFFICE / E05", 76, 94);
      exportContext.textAlign = "right";
      exportContext.fillStyle = "rgba(239, 232, 214, 0.52)";
      exportContext.font = "18px ui-monospace, Consolas, monospace";
      exportContext.fillText(new Date().toLocaleDateString("zh-CN"), exportWidth - 76, 94);
      exportContext.textAlign = "left";

      var artTop = 125;
      var artHeight = exportHeight - 235;
      exportContext.save();
      exportContext.translate(0, artTop);
      paintParticles(exportContext, exportWidth / width, artHeight / height, true);
      exportContext.restore();

      exportContext.fillStyle = "#eee8d8";
      exportContext.font = "400 28px \"Songti SC\", \"STSong\", serif";
      exportContext.fillText("“轻”不是消失。只是换一种方式，占据空间。", 76, exportHeight - 86);
    }

    function saveArtifactAndStamp() {
      Elsewhere.setArtifact("typewriterWord", lastPhrase);
      Elsewhere.setRoomData("typewriter", {
        exportedAt: new Date().toISOString(),
        exportedWordLength: splitGraphemes(lastPhrase).length
      });
      var isNew = Elsewhere.awardStamp("typewriter", {
        word: lastPhrase,
        exportedAt: new Date().toISOString()
      });
      Elsewhere.toast(isNew ? "E05 印章已落入护照。" : "减重海报已保存。");
    }

    function exportPoster() {
      if (!particles.length || !lastPhrase) return;
      if (!visualAvailable) {
        Elsewhere.downloadText(
          "elsewhere-e05-light-sentence.txt",
          [
            "ELSEWHERE / LIGHT SENTENCE OFFICE / E05",
            "",
            lastPhrase,
            "",
            "“轻”不是消失。只是换一种方式，占据空间。"
          ].join("\n")
        );
        saveArtifactAndStamp();
        status.textContent = "设备无法绘制海报，已改为保存文字记录并完成登记。";
        return;
      }
      exportButton.disabled = true;
      status.textContent = "正在把房间折叠成一张海报……";

      var exportCanvas = document.createElement("canvas");
      exportCanvas.width = 1600;
      exportCanvas.height = 1200;
      drawExportPoster(exportCanvas);

      exportCanvas.toBlob(function (blob) {
        exportButton.disabled = false;
        if (!blob) {
          status.textContent = "海报折叠失败，请稍后再试。";
          return;
        }

        var url = URL.createObjectURL(blob);
        var link = document.createElement("a");
        link.href = url;
        link.download = "elsewhere-e05-light-sentence.png";
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.setTimeout(function () {
          URL.revokeObjectURL(url);
        }, 1000);

        saveArtifactAndStamp();
        status.textContent = "海报已保存；这句话也被登记为可带回之物。";
      }, "image/png");
    }

    input.addEventListener("input", updateCount);
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        releasePhrase();
      }
    });
    releaseButton.addEventListener("click", releasePhrase);
    resetButton.addEventListener("click", resetRoom);
    exportButton.addEventListener("click", exportPoster);
    suggestionButton.addEventListener("click", function () {
      var dailyOffset = Math.floor(seededUnit("typewriter:suggestion") * suggestions.length);
      var phrase = suggestions[(dailyOffset + suggestionIndex) % suggestions.length];
      suggestionIndex += 1;
      input.value = phrase;
      updateCount();
      input.focus();
      Elsewhere.setRoomData("typewriter", { suggestionIndex: suggestionIndex });
      status.textContent = "借来了一句临时的话。你仍可修改它。";
    });
    gravityInput.addEventListener("input", updateForces);
    windInput.addEventListener("input", updateForces);
    magnetButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        setMagnetMode(button.dataset.magnet);
      });
    });
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);
    canvas.addEventListener("keydown", onCanvasKeydown);
    helpButton.addEventListener("click", function () {
      var willOpen = instructions.hidden;
      instructions.hidden = !willOpen;
      helpButton.setAttribute("aria-expanded", String(willOpen));
    });
    document.addEventListener("elsewhere:motion", function (event) {
      reduceMotion = event.detail && typeof event.detail.reduced === "boolean"
        ? event.detail.reduced
        : isMotionReduced();
      status.textContent = reduceMotion ? "已切换为减少动态模式。" : "标准动态效果已恢复。";
    });

    if (typeof ResizeObserver !== "undefined") {
      new ResizeObserver(resizeCanvas).observe(stage);
    } else {
      window.addEventListener("resize", resizeCanvas);
    }

    updateCount();
    updateForces();
    resizeCanvas();
    window.requestAnimationFrame(animate);
  }
})();
