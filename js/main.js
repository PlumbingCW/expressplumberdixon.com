(function () {
  "use strict";
  // Mobile drawer (breakpoint 768 matches the CSS)
  var t = document.getElementById("mob-toggle");
  var d = document.getElementById("mob-drawer");
  var o = document.getElementById("mob-overlay");
  var c = document.getElementById("drawer-close");
  function openDrawer() {
    d.removeAttribute("hidden");
    o.classList.add("visible");
    t.setAttribute("aria-expanded", "true");
    t.setAttribute("aria-label", "Close navigation menu");
    document.documentElement.style.overflow = "hidden";
  }
  function closeDrawer() {
    d.setAttribute("hidden", "");
    o.classList.remove("visible");
    t.setAttribute("aria-expanded", "false");
    t.setAttribute("aria-label", "Open navigation menu");
    document.documentElement.style.overflow = "";
  }
  if (t && d && o) {
    t.addEventListener("click", function () {
      if (t.getAttribute("aria-expanded") === "true") { closeDrawer(); } else { openDrawer(); }
    });
    if (c) { c.addEventListener("click", closeDrawer); }
    o.addEventListener("click", closeDrawer);
    var links = d.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) { links[i].addEventListener("click", closeDrawer); }
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeDrawer(); } });
    window.addEventListener("resize", function () { if (window.innerWidth > 768) { closeDrawer(); } });
  }

  // FAQ accordion, max-height toggle
  var items = document.querySelectorAll(".faq-item");
  function setOpen(item, open) {
    var btn = item.querySelector(".faq-q");
    var ans = item.querySelector(".faq-answer");
    if (!btn || !ans) { return; }
    if (open) {
      item.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
      ans.style.maxHeight = ans.scrollHeight + "px";
    } else {
      item.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      ans.style.maxHeight = "0px";
    }
  }
  for (var j = 0; j < items.length; j++) {
    (function (item) {
      var btn = item.querySelector(".faq-q");
      if (!btn) { return; }
      btn.addEventListener("click", function () { setOpen(item, !item.classList.contains("open")); });
    })(items[j]);
  }
  window.addEventListener("resize", function () {
    var openItems = document.querySelectorAll(".faq-item.open .faq-answer");
    for (var k = 0; k < openItems.length; k++) { openItems[k].style.maxHeight = openItems[k].scrollHeight + "px"; }
  });
})();
