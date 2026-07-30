(function () {
  "use strict";

  function init() {
    var root = document.querySelector(".not-found");
    var signal = document.getElementById("elsewhereSignal");
    var ticket = document.getElementById("elsewhereTicket");
    var close = document.getElementById("closeElsewhereTicket");
    var code = document.getElementById("notFoundCode");

    if (!root || !signal || !ticket || !close) {
      return;
    }

    var reveal = function () {
      root.classList.add("not-found--signal-visible");
    };

    window.setTimeout(reveal, 4040);

    signal.addEventListener("click", function (event) {
      event.preventDefault();
      ticket.hidden = false;
      root.classList.add("not-found--ticket-open");
      signal.setAttribute("aria-expanded", "true");
      if (code) {
        code.textContent = "404½";
      }
      close.focus();
    });

    var closeTicket = function () {
      ticket.hidden = true;
      root.classList.remove("not-found--ticket-open");
      signal.setAttribute("aria-expanded", "false");
      if (code) {
        code.textContent = "404";
      }
      signal.focus();
    };

    close.addEventListener("click", closeTicket);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !ticket.hidden) {
        closeTicket();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
