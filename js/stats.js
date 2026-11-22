// Visitor count with GoatCounter (free, open source, no cookies, no personal data, no cookie banner needed).
// It counts only on the real website (HOSTS), never when the file is opened on a laptop or in tests.
// Dashboard: https://skilltoincome.goatcounter.com  (only the owner can sign in)
// To stop counting your own visits on one browser, open the site once with  #toggle-goatcounter  at the end of the address.
(function () {
  "use strict";
  const CODE = "skilltoincome", HOSTS = ["vamsipujitha-lab.github.io"];
  const BASE = "https://" + CODE + ".goatcounter.com";
  const own = (o, k) => !!o && Object.prototype.hasOwnProperty.call(o, k);
  let skip = false, toggled = false, live = false;
  function readToggle() {
    try {
      if (location.hash === "#toggle-goatcounter") {
        if (localStorage.getItem("skipgc") === "t") localStorage.removeItem("skipgc"); else localStorage.setItem("skipgc", "t");
        toggled = true; history.replaceState(null, "", location.pathname + location.search);
      }
      skip = localStorage.getItem("skipgc") === "t";
    } catch (e) { /* private mode: just count normally */ }
    live = HOSTS.includes(location.hostname) && !skip && !navigator.webdriver;
  }
  readToggle();

  // One page per course or program ("/dsa", "/job-sdet"), not per level, so the numbers stay easy to read.
  function page() {
    const k = (location.hash || "").slice(1).split(":")[0];
    if (!k) return ["/", "Home"];
    if (!/^[a-z0-9-]{1,40}$/.test(k)) return ["/", "Home"];
    if (k === "practice") return ["/practice", "Practice and interview hub"];
    if (k.startsWith("job-") && typeof PROGRAMS !== "undefined" && own(PROGRAMS, k.slice(4))) return ["/" + k, "Program: " + PROGRAMS[k.slice(4)].name];
    if (typeof SYL !== "undefined" && own(SYL, k)) return ["/" + k, "Course: " + SYL[k].name];
    return ["/", "Home"];
  }
  let last = "";
  function count(first) {
    if (!live) return;
    const [p, t] = page();
    if (p === last) return;
    last = p;
    const q = new URLSearchParams({ p, t, s: [screen.width, screen.height, window.devicePixelRatio || 1].join(","), rnd: Math.random().toString(36).slice(2) });
    try { if (first && document.referrer && new URL(document.referrer).origin !== location.origin) q.set("r", document.referrer); } catch (e) {}
    const img = new Image();
    img.src = BASE + "/count?" + q.toString();
  }
  count(true);
  addEventListener("hashchange", () => {
    if (location.hash === "#toggle-goatcounter") { readToggle(); last = ""; note(); return; }
    count(false);
  });

  function note() {
    const el = document.getElementById("visits");
    if (el && (toggled || skip)) { el.textContent = skip ? "Your visits are not counted on this browser." : "Your visits are counted again on this browser."; el.hidden = false; }
  }
  // Footer: total visits (needs "Allow adding visitor counts on your website" ticked in GoatCounter settings).
  function footer() {
    const el = document.getElementById("visits");
    if (!el) return;
    note();
    if (!HOSTS.includes(location.hostname) || typeof fetch !== "function") return;
    fetch(BASE + "/counter/TOTAL.json", { credentials: "omit", referrerPolicy: "no-referrer" })
      .then(r => r.ok ? r.json() : null)
      .then(j => {
        const n = j && typeof j.count === "string" ? j.count.trim() : "";
        if (/^[0-9][0-9,.  ]{0,14}$/.test(n) && !(toggled || skip)) { el.textContent = n + " visits"; el.hidden = false; }
      })
      .catch(() => {});
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", footer); else footer();
})();
