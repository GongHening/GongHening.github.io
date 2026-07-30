(function () {
  "use strict";

  var initialized = false;
  var ROOM_ID = "mart";
  var PRODUCTS = {
    "after-rain": {
      code: "ITEM 0317-A",
      name: "雨停以后",
      price: "¥ 3.17",
      description: "打开时会听见屋檐最后一滴水落下。适合在漫长的雨天里确认，天气确实有下一句。",
      origin: "一场在凌晨 03:16 结束、但无人抬头确认的阵雨。",
      use: "沿虚线拉开罐盖，放在窗边三分钟。",
      warning: "请勿在真正晴朗时囤积；会让下午产生轻微潮气。"
    },
    "spare-sunday": {
      code: "ITEM 0317-B",
      name: "备用星期日",
      price: "¥ 8.80",
      description: "一块没有安排、没有提醒、也不需要证明被好好度过的时间。冷藏柜里的日期永远写着“下次”。",
      origin: "从过满的日历边缘修剪下来的空白。",
      use: "关掉一个闹钟，再拆封。建议什么也不完成。",
      warning: "不能用于替代星期一；与截止日期同时食用会失去风味。"
    },
    "blue-umbrella": {
      code: "ITEM 404-U",
      name: "蓝伞",
      price: "押金 一次回头",
      description: "它在不同年份的同一段河岸被登记过三次。伞面略旧，向左倾斜时会接住一些还没落下的雨。",
      origin: "无址物档案馆，保修单 404-087；原持有人一栏为空。",
      use: "借走即可。若雨停，请把伞留在下一盏路灯下。",
      warning: "本品只借不售。回头寻找时，可能已经属于另一个年份。"
    },
    "unsent-sorry": {
      code: "ITEM 410-S",
      name: "无人认领的道歉",
      price: "¥ 0.00",
      description: "包装里没有措辞，只有说出第一句话所需的那一点点勇气。重量会随拖延缓慢增加。",
      origin: "草稿箱、喉咙口和已经关闭的聊天窗口。",
      use: "拆封后请换成自己的话，并亲自送达。",
      warning: "不能撤销已经发生的事；可以改变下一件发生的事。"
    },
    "minute-battery": {
      code: "ITEM 0318-M",
      name: "03:18 刻度电池",
      price: "¥ 4.04",
      description: "只能让停止的钟向前走一分钟。管理处认为一分钟很少，值夜员并不赞同。",
      origin: "零号月台报废时钟的黄铜后盖。",
      use: "确认真的准备离开以后，正极朝向今天。",
      warning: "不可充电。使用后所有出口都会暂时看起来很普通。"
    },
    "river-breeze": {
      code: "ITEM RIV-09",
      name: "一小袋河风",
      price: "时价",
      description: "袋子看起来是空的，贴近耳边能听见自行车铃、芦苇和很远的船。适合带进没有窗的房间。",
      origin: "东岸步道第九盏路灯与水面之间。",
      use: "开袋处不在正面。先散步，入口会自己出现。",
      warning: "重量低于柜台秤的误差；请用心情而不是克数验收。"
    }
  };
  var PRODUCT_ORDER = Object.keys(PRODUCTS);
  var WEATHER_NOTES = [
    "河风从北侧货架经过",
    "玻璃门每 17 分钟起雾一次",
    "蓝伞借出概率：偏高",
    "天亮前不会转为大雨",
    "收银台附近有局部晴朗"
  ];

  function firstText(value, keys, fallback) {
    if (typeof value === "string") {
      return value.trim() || fallback;
    }
    if (!value || typeof value !== "object") {
      return fallback;
    }

    for (var i = 0; i < keys.length; i += 1) {
      if (typeof value[keys[i]] === "string" && value[keys[i]].trim()) {
        return value[keys[i]].trim();
      }
    }
    return fallback;
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

    var dialog = document.getElementById("mart-product-dialog");
    var productButtons = Array.prototype.slice.call(document.querySelectorAll(".mart-product"));
    var roomData = api.getRoomData(ROOM_ID) || {};
    var storedProducts = Array.isArray(roomData.viewedProducts) ? roomData.viewedProducts : [];
    var viewed = new Set(storedProducts.filter(function (id) {
      return Boolean(PRODUCTS[id]);
    }));
    var viewedOrder = storedProducts.filter(function (id, index, list) {
      return Boolean(PRODUCTS[id]) && list.indexOf(id) === index;
    });

    var seed = api.seedFor("mart-night-stock");
    document.getElementById("mart-receipt-number").textContent =
      String(100 + (seed % 900)).padStart(3, "0");
    document.getElementById("mart-weather-note").textContent =
      WEATHER_NOTES[seed % WEATHER_NOTES.length];

    function renderInvention() {
      var shelf = document.getElementById("mart-invention-shelf");
      var invention = api.getArtifact("invention");
      if (!invention) {
        return;
      }

      var name = firstText(invention, ["name", "title", "inventionName", "label"], "未命名的非常用途发明");
      var description = firstText(
        invention,
        ["description", "summary", "abstract", "effect", "function", "pitch", "trouble"],
        "用途已获批准，但说明书在转运途中被风吹走。"
      );
      var badge = document.createElement("span");
      var copy = document.createElement("div");
      var source = document.createElement("span");
      var title = document.createElement("h3");
      var detail = document.createElement("p");

      shelf.replaceChildren();
      shelf.classList.add("has-invention");
      badge.className = "mart-invention-badge";
      badge.setAttribute("aria-hidden", "true");
      badge.textContent = "审";
      copy.className = "mart-invention-copy";
      source.textContent = "E06 第七审查室 · 今夜寄售";
      title.textContent = name;
      detail.textContent = description;
      copy.append(source, title, detail);
      shelf.append(badge, copy);
    }

    function updateReceipt(announce) {
      var list = document.getElementById("mart-receipt-list");
      var count = Math.min(viewed.size, 3);
      list.replaceChildren();

      if (!viewedOrder.length) {
        var empty = document.createElement("li");
        empty.className = "mart-receipt-empty";
        empty.textContent = "尚未拿起商品";
        list.appendChild(empty);
      } else {
        viewedOrder.forEach(function (id) {
          var item = document.createElement("li");
          var name = document.createElement("span");
          var price = document.createElement("span");
          name.textContent = PRODUCTS[id].name;
          price.textContent = PRODUCTS[id].price;
          item.append(name, price);
          list.appendChild(item);
        });
      }

      document.getElementById("mart-viewed-count").textContent = String(count);
      Array.prototype.forEach.call(document.querySelectorAll(".mart-receipt-dots i"), function (dot, index) {
        dot.classList.toggle("is-filled", index < count);
      });

      productButtons.forEach(function (button) {
        var isViewed = viewed.has(button.getAttribute("data-product"));
        button.classList.toggle("is-viewed", isViewed);
        if (isViewed) {
          button.setAttribute("data-inspected", "true");
        }
      });

      var status = document.getElementById("mart-progress-status");
      if (!viewed.size) {
        status.textContent = "收据正在等待第一件商品。";
      } else if (viewed.size < 3) {
        status.textContent = "还需查看 " + (3 - viewed.size) + " 件商品，夜班查验即可完成。";
      } else {
        status.textContent = "三件商品查验完毕。收据背面浮出一枚「这里」字样的印章。";
      }

      if (announce && viewed.size >= 3) {
        var isNew = api.awardStamp(ROOM_ID, {
          inspected: viewedOrder.slice(0, 3).join(","),
          receipt: "0317-" + document.getElementById("mart-receipt-number").textContent
        });
        if (isNew) {
          api.toast("E02 夜班查验完成：未眠商店已在护照留下「这里」。");
        }
      }
    }

    function openProduct(id) {
      var product = PRODUCTS[id];
      if (!product) {
        return;
      }

      if (!viewed.has(id)) {
        viewed.add(id);
        viewedOrder.push(id);
        api.setRoomData(ROOM_ID, { viewedProducts: viewedOrder.slice() });
      }

      document.getElementById("mart-dialog-code").textContent = product.code;
      document.getElementById("mart-dialog-title").textContent = product.name;
      document.getElementById("mart-dialog-description").textContent = product.description;
      document.getElementById("mart-dialog-origin").textContent = product.origin;
      document.getElementById("mart-dialog-use").textContent = product.use;
      document.getElementById("mart-dialog-warning").textContent = product.warning;
      api.setArtifact("martItem", {
        name: product.name,
        code: product.code,
        description: product.description
      });
      updateReceipt(true);

      if (typeof dialog.showModal === "function") {
        if (!dialog.open) {
          dialog.showModal();
        }
      } else {
        dialog.setAttribute("open", "");
      }
    }

    productButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        openProduct(button.getAttribute("data-product"));
      });
    });

    dialog.addEventListener("click", function (eventObject) {
      if (eventObject.target === dialog && typeof dialog.close === "function") {
        dialog.close();
      }
    });

    dialog.addEventListener("close", function () {
      var currentId = document.activeElement && document.activeElement.getAttribute("data-product");
      if (currentId) {
        document.activeElement.focus();
      }
    });

    renderInvention();
    updateReceipt(viewed.size >= 3);

    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) {
        renderInvention();
      }
    });
  }

  document.addEventListener("elsewhere:ready", init, { once: true });
  if (window.Elsewhere && document.readyState !== "loading") {
    window.setTimeout(function () {
      init({ detail: window.Elsewhere });
    }, 0);
  }
}());
