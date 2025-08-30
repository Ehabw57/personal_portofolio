// Theme toggle
(function () {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  const key = "pref-theme";
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  function applyTheme(mode) {
    if (mode === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }
  const saved = localStorage.getItem(key);
  applyTheme(saved || (prefersDark.matches ? "dark" : "light"));
  btn &&
    btn.addEventListener("click", () => {
      const isDark = root.getAttribute("data-theme") === "dark";
      const next = isDark ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem(key, next);
    });
  // keep in sync with system if user hasn't set preference
  prefersDark.addEventListener("change", (e) => {
    if (!localStorage.getItem(key)) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });
})();

// Mobile nav toggle
(function () {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  if (!nav || !toggle) return;
  function setExpanded(expanded) {
    nav.setAttribute("aria-expanded", String(expanded));
    toggle.setAttribute("aria-expanded", String(expanded));
  }
  setExpanded(false);
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    setExpanded(!expanded);
  });
  // close on link click (mobile)
  nav.addEventListener("click", (e) => {
    const target = e.target;
    if (target instanceof HTMLElement && target.tagName === "A") {
      setExpanded(false);
    }
  });
})();
