// Every link in the roadmap, with where it is used. Runs the data files the same way the page
// does, so links built in code (a base address + a page name) come out exactly as students see them.
//
//   node tools/links.js            -> JSON list of {url, label, where} (used by the SKIT Quiz monthly check)
//   node tools/links.js --check    -> tests every link from this computer and lists the broken ones
//                                     (needs Node.js 18 or newer and an internet connection)
//   node tools/links.js --report [site folder]
//                                  -> scheduled server job: tests every link, writes status/link-report.json
//                                     and js/data/link-status.js so the page marks dead links automatically.
//                                     With YT_API_KEY set, a removed video is swapped for the best working
//                                     video on the same topic and language; the original comes back by itself
//                                     as soon as it works again (state kept in status/replacements.json).
const fs = require("fs"), path = require("path");

function listLinks(root = path.resolve(__dirname, "..")) {
  const fake = () => new Proxy(function () {}, { get: (t, p) => p === Symbol.toPrimitive ? () => "" : p === "then" ? undefined : fake(), set: () => true, apply: () => fake() });
  global.document = fake();
  global.localStorage = { getItem: () => null, setItem() {} };
  global.location = { hash: "" };
  global.addEventListener = () => {};
  global.matchMedia = () => ({ matches: false });
  const order = fs.readFileSync(path.join(root, "js/data/ORDER.txt"), "utf8").trim().split(/\s+/);
  let src = order.map((n) => fs.readFileSync(path.join(root, "js/data", n + ".js"), "utf8")).join("\n");
  src += "\n" + fs.readFileSync(path.join(root, "js/app.js"), "utf8");
  const D = eval("(function(){" + src + ";return {SYL,ORDER,CAP,CERTS,MODV,VIDEOS," +
    "EARN:typeof EARN!=='undefined'?EARN:[],TOOLS:typeof TOOLS!=='undefined'?TOOLS:[],IDEAS:typeof IDEAS!=='undefined'?IDEAS:[]," +
    "PRACTICE:typeof PRACTICE!=='undefined'?PRACTICE:{sections:[]},TASKLINKS:typeof TASKLINKS!=='undefined'?TASKLINKS:{},COURSE_PRACTICE:typeof COURSE_PRACTICE!=='undefined'?COURSE_PRACTICE:{},TOPICLINKS:typeof TOPICLINKS!=='undefined'?TOPICLINKS:{},QBANK:typeof QBANK!=='undefined'?QBANK:{}};})()");

  const links = new Map();
  // video = what is needed to find a replacement: language, topic words, search words, channel, title
  const add = (url, where, label, video) => {
    if (!url || !/^https?:\/\//.test(url)) return;
    if (!links.has(url)) links.set(url, { url, label: label || "", where: [], ...(video ? { video } : {}) });
    const e = links.get(url);
    if (e.where.length < 5 && !e.where.includes(where)) e.where.push(where);
  };
  for (const k of D.ORDER) {
    const S = D.SYL[k], C = S.name;
    (S.repos || []).forEach((r) => add(r[1], C + " › GitHub repos", r[0]));
    for (const m of (S.note || "").matchAll(/href="([^"]+)"/g)) add(m[1], C + " › note", "");
    S.levels.forEach((L, i) => L.modules.forEach((m) => {
      const where = `${C} › Level ${i + 1} › ${m.name}`;
      if (m.course) add(m.course[1], where, "Free course: " + m.course[0]);
      const mv = D.MODV[k + "::" + m.name] || {};
      const vid = (x, l, topic) => ({ lang: l, topic, q: `${topic} ${S.short || C} ${l === "hi" ? "in Hindi" : "tutorial"}`, ch: x.ch || "", t: x.t || "" });
      ["en", "hi"].forEach((l) => mv[l] && add(mv[l].u, where, `${l.toUpperCase()} video: ${mv[l].t}`, vid(mv[l], l, m.name)));
      m.topics.forEach((t) => {
        const name = t.split("|")[0], v = D.VIDEOS[k + "::" + name] || {};
        ["en", "hi"].forEach((l) => [].concat(v[l] || []).forEach((x) => add(x.u, `${where} › ${name}`, `${l.toUpperCase()} video: ${x.t}`, vid(x, l, name))));
      });
    }));
    (D.CAP[k] || []).forEach((c) => [c.r, c.r2].forEach((r) => r && add(r[1], C + " › Capstone: " + c.t, r[0])));
    (D.CERTS[k] || []).forEach((x) => {
      add(x.link, C + " › Certification", x.name);
      if (x.m) add(x.m[1], C + " › Certification: " + x.name, "Study material: " + x.m[0]);
      if (x.p) add(x.p[1], C + " › Certification: " + x.name, "Practice papers: " + x.p[0]);
    });
  }
  D.EARN.forEach((e) => add(e[3], "Manual Tester course › Get paid to test", e[0]));
  D.TOOLS.forEach((t) => add(t[3], "AI Tools Hub › Open any AI tool", t[0]));
  D.IDEAS.forEach((r) => add(r[1], "Every course › More project ideas", r[0]));
  D.PRACTICE.sections.forEach((sc) => (sc.outside || []).forEach((x) => add(x[1], "Practice hub › " + sc.title, x[0])));
  Object.entries(D.TASKLINKS).forEach(([t, ls]) => ls.forEach((x) => add(x[1], "Job program task › " + t, x[0])));
  Object.entries(D.TOPICLINKS).forEach(([t, ls]) => ls.forEach((x) => add(x[1], "Topic › " + t, x[0])));
  Object.entries(D.COURSE_PRACTICE).forEach(([k, ls]) => ls.forEach((x) => add(x[1], (D.SYL[k] ? D.SYL[k].name : k) + " › Practice sites", x[0])));
  Object.entries(D.QBANK).forEach(([k, c]) => { const nm = D.SYL[k] ? D.SYL[k].name : k;
    (c.full || []).forEach((q) => { if (Array.isArray(q)) add(q[1], nm + " › Interview questions", q[0]); });
    (c.prog || []).forEach((q) => { if (Array.isArray(q)) add(q[1], nm + " › Interview programs", q[0]); });
    (c.tasks || []).forEach((q) => { if (Array.isArray(q)) add(q[1], nm + " › Practical tasks", q[0]); });
    Object.entries(c.topics || {}).forEach(([t, L]) => L.forEach((q) => { if (Array.isArray(q)) add(q[1], nm + " › " + t + " › Practice question", q[0]); })); });
  return [...links.values()];
}

// Rules: 404/410 = broken; sites that block robots (401/403/429) are not reported.
// YouTube: oEmbed 200 = fine; 400/404 = removed. oEmbed ALSO answers 401 for videos whose owner only
// turned off embedding (they still play), so for 401/403 the watch page decides:
// playabilityStatus OK = fine; ERROR / UNPLAYABLE / private = broken; anything else = "could not reach".
const UA = "Mozilla/5.0 (compatible; SkillToIncomeLinkCheck/1.1)";
async function ask(u, method, wantText) {
  const ctl = new AbortController(), timer = setTimeout(() => ctl.abort(), 20000);
  try {
    const r = await fetch(u, { method, redirect: "follow", signal: ctl.signal, headers: { "User-Agent": UA, "Accept-Language": "en" } });
    return wantText ? [r.status, await r.text()] : r.status;
  } finally { clearTimeout(timer); }
}
async function youtubeWatchStatus(url) {
  const [code, html] = await ask(url, "GET", true);
  if (code === 404) return ["broken", "page not found (404)"];
  const m = /"playabilityStatus":\{"status":"([A-Z_]+)"(?:,"reason":"([^"]*)")?/.exec(html);
  if (!m) return null;                                   // consent or robot page: cannot tell
  if (m[1] === "OK") return ["ok", "plays (embedding turned off by owner)"];
  if (m[1] === "ERROR" || m[1] === "UNPLAYABLE") return ["broken", "video unavailable" + (m[2] ? `: ${m[2]}` : "")];
  if (m[1] === "LOGIN_REQUIRED" && /private/i.test(m[2] || "")) return ["broken", "video is private"];
  return null;
}
async function checkOne(url) {
  const yt = /^https?:\/\/(www\.)?(youtube\.com\/(watch|playlist|shorts)|youtu\.be\/)/.test(url);
  const isVideo = yt && !/\/playlist\?/.test(url);
  let detail = "";
  if (yt) await new Promise((r) => setTimeout(r, 500));   // 1,000+ YouTube links: go gently so YouTube does not limit the check
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      let code;
      if (yt) {
        code = await ask("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent(url), "GET");
        if (code === 200) return ["ok", "200"];
        if (code === 400 || code === 404) return ["broken", isVideo ? "video removed" : "playlist removed or private"];
        if ((code === 401 || code === 403) && isVideo) {
          const w = await youtubeWatchStatus(url);
          if (w) return w;
          detail = "YouTube did not confirm the video status";
        } else detail = `YouTube answered ${code}`;
        await new Promise((r) => setTimeout(r, 3000));
        continue;
      } else {
        code = await ask(url, "HEAD");
        if ([400, 403, 405, 406, 429, 501].includes(code) || code >= 500) code = await ask(url, "GET");
        if (code === 404 || code === 410) return ["broken", `page not found (${code})`];
      }
      if (code < 400 || [401, 403, 429].includes(code)) return ["ok", String(code)];
      detail = `site error (${code})`;
    } catch (e) { detail = e.name || "error"; }
    await new Promise((r) => setTimeout(r, 3000));
  }
  return ["could not reach", detail];
}

async function checkAll(links, checker = checkOne, workers = 6) {
  const results = new Array(links.length); let i = 0;
  await Promise.all(Array.from({ length: workers }, async () => { while (i < links.length) { const n = i++; results[n] = await checker(links[n].url); } }));
  return results;
}

// ---------- Replacement videos (YouTube Data API v3, free key, 10,000 units a day) ----------
// One search costs 101 units, so at most MAX_SEARCHES (default 40) searches run per check.
const WATCH = /^https:\/\/www\.youtube\.com\/watch\?v=[\w-]{11}$/;
const ytId = (u) => (/[?&]v=([\w-]{11})/.exec(u) || [])[1];
const isoMin = (d) => { const m = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/.exec(d || ""); return m ? (+(m[1] || 0)) * 60 + (+(m[2] || 0)) + (+(m[3] || 0)) / 60 : 0; };
const fmtLen = (min) => { const h = Math.floor(min / 60), m = Math.round(min % 60); return h ? `${h}h ${m}m` : `${m} min`; };
const DEVA = /[ऀ-ॿ]/;
const STOP = new Set("and or the of in to for a an with on by vs using basics introduction intro part what how".split(" "));
const words = (t) => String(t).toLowerCase().replace(/[^a-z0-9+#. ]/g, " ").split(/\s+/).filter((w) => w.length > 1 && !STOP.has(w));
const clean = (t, n = 140) => String(t || "").replace(/[\u0000-\u001f<>]/g, " ").replace(/\s+/g, " ").trim().slice(0, n);

// Pick the best candidate from YouTube's answer. Pure function, so it is tested without the internet.
function pickBest(items, want, exclude) {
  const need = words(want.topic);
  const scored = [];
  for (const it of items) {
    const id = it.id, sn = it.snippet || {}, st = it.statistics || {}, cd = it.contentDetails || {}, ss = it.status || {};
    const u = "https://www.youtube.com/watch?v=" + id, title = sn.title || "", low = title.toLowerCase();
    if (!/^[\w-]{11}$/.test(id || "") || exclude.has(u)) continue;
    if (ss.privacyStatus !== "public" || ss.uploadStatus && ss.uploadStatus !== "processed" || (sn.liveBroadcastContent || "none") !== "none") continue;
    if (cd.contentRating && cd.contentRating.ytRating === "ytAgeRestricted") continue;
    if (cd.regionRestriction && ((cd.regionRestriction.blocked || []).includes("IN") || (cd.regionRestriction.allowed && !cd.regionRestriction.allowed.includes("IN")))) continue;
    const min = isoMin(cd.duration), views = +st.viewCount || 0, likes = +st.likeCount || 0;
    if (min < 4 || min > 180) continue;                                  // no Shorts, no 10-hour streams
    if (/#shorts|\breaction\b|\bmeme\b|\bprank\b/i.test(title)) continue;
    if (views < (want.lang === "hi" ? 5000 : 10000)) continue;          // proven, watched videos only
    const audio = (sn.defaultAudioLanguage || sn.defaultLanguage || "").toLowerCase();
    if (want.lang === "hi" ? !(audio.startsWith("hi") || DEVA.test(title) || /\bhindi\b/i.test(title))
                           : (audio && !audio.startsWith("en")) || DEVA.test(title) || /\bhindi\b/i.test(title)) continue;
    const hit = need.filter((w) => low.includes(w)).length;            // the title must be about the topic
    if (need.length && hit < Math.min(need.length, need.length > 2 ? 2 : 1)) continue;
    let score = Math.log10(views + 1) + Math.min(likes / Math.max(views, 1) * 40, 2) + hit / Math.max(need.length, 1) * 2;
    if (want.ch && (sn.channelTitle || "").toLowerCase() === want.ch.toLowerCase()) score += 1.5;   // same teacher as before
    scored.push({ score, v: { u, t: clean(title), ch: clean(sn.channelTitle, 60), len: fmtLen(min) } });
  }
  scored.sort((x, y) => y.score - x.score);
  return scored.map((x) => x.v);
}

function youtubeFinder(key, budget) {
  let searches = 0;
  const api = async (pathq) => {
    const ctl = new AbortController(), timer = setTimeout(() => ctl.abort(), 20000);
    try {
      const r = await fetch("https://www.googleapis.com/youtube/v3/" + pathq + "&key=" + encodeURIComponent(key), { signal: ctl.signal });
      if (!r.ok) throw new Error("YouTube API answered " + r.status);   // never print the address: it holds the key
      return await r.json();
    } finally { clearTimeout(timer); }
  };
  const find = async (want, exclude) => {
    if (searches >= budget) return { list: [], note: "search limit for this run reached" };
    searches++;
    const q = encodeURIComponent(want.q);
    const s = await api(`search?part=snippet&type=video&maxResults=15&safeSearch=strict&regionCode=IN&relevanceLanguage=${want.lang}&q=${q}`);
    const ids = (s.items || []).map((i) => i.id && i.id.videoId).filter((id) => /^[\w-]{11}$/.test(id || ""));
    if (!ids.length) return { list: [] };
    const d = await api(`videos?part=snippet,contentDetails,statistics,status&id=${ids.join(",")}`);
    return { list: pickBest(d.items || [], want, exclude) };
  };
  find.used = () => searches;
  return find;
}

// --report: used by the scheduled job on the server. Writes
//   <site>/status/link-report.json    full report (for the admin email and for you)
//   <site>/status/replacements.json   the replacement videos in use (kept between runs)
//   <site>/js/data/link-status.js     what the page reads: broken links, and replacement videos with a notice
// Safety: if more than MAX_BROKEN_SHARE of links look broken at once, the server's internet is the likely
// problem, so NOTHING on the page changes (the report still records what happened).
const MAX_BROKEN_SHARE = 0.25;
const readJson = (f, d) => { try { return JSON.parse(fs.readFileSync(f, "utf8")); } catch (e) { return d; } };
const writeAtomic = (f, text) => { fs.writeFileSync(f + ".tmp", text); fs.renameSync(f + ".tmp", f); };
async function report(site, checker = checkOne, finder = null) {
  const links = listLinks(site);
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
  const statusDir = path.join(site, "status"), reportFile = path.join(statusDir, "link-report.json"), replFile = path.join(statusDir, "replacements.json");
  const prev = readJson(reportFile, { broken: {} }); prev.broken = prev.broken || {};
  const prevRepl = readJson(replFile, {});
  const results = await checkAll(links, checker);
  const broken = {}, unreachable = [];
  links.forEach((l, n) => {
    const [verdict, detail] = results[n];
    if (verdict === "broken") broken[l.url] = { since: (prev.broken[l.url] || {}).since || today, detail, label: l.label, where: l.where };
    else if (verdict !== "ok") unreachable.push({ url: l.url, detail, label: l.label, where: l.where });
  });
  const suspicious = Object.keys(broken).length > links.length * MAX_BROKEN_SHARE;

  // Replacement videos. Kept only for originals that are still broken (or that could not be checked this time).
  const verdictOf = new Map(links.map((l, n) => [l.url, results[n][0]]));
  const repl = {}, restored = [], replacedNow = [], noReplacement = [];
  if (suspicious) Object.assign(repl, prevRepl);
  else {
    const inUse = new Set(links.map((l) => l.url));
    for (const [orig, r] of Object.entries(prevRepl)) {
      const v = verdictOf.get(orig);
      if (v === undefined) continue;                                    // the video was taken out of the course: drop
      if (v === "ok") { restored.push({ url: orig, label: r.was || "", removed: r.u }); continue; }   // original is back
      repl[orig] = r;
      if (r.u) inUse.add(r.u);
    }
    for (const l of links) {
      if (!l.video || !broken[l.url] || !WATCH.test(l.url)) continue;
      const cur = repl[l.url];
      if (cur && cur.u) {                                               // keep the replacement if it still plays
        const [v] = await checker(cur.u);
        if (v !== "broken") continue;
        cur.tried = [...new Set([...(cur.tried || []), cur.u])].slice(-20); delete cur.u;
      }
      if (!finder) { noReplacement.push({ url: l.url, why: "no YouTube API key (YT_API_KEY) set" }); continue; }
      const tried = new Set([l.url, ...((cur && cur.tried) || [])]);
      let found = null, why = "no good video found";
      try {
        const { list, note } = await finder(l.video, new Set([...inUse, ...tried]));
        if (note) why = note;
        for (const c of list.slice(0, 5)) {                            // first candidate that really plays
          if (!WATCH.test(c.u)) continue;
          const [v] = await checker(c.u);
          if (v === "ok") { found = c; break; }
          tried.add(c.u);
        }
      } catch (e) { why = "search failed: " + (e.message || e.name); }
      const entry = { since: (cur && cur.since) || today, was: l.video.t, wasCh: l.video.ch, lang: l.video.lang, tried: [...tried].filter((u) => u !== l.url).slice(-20) };
      if (found) { repl[l.url] = { ...entry, ...found, on: today }; inUse.add(found.u); replacedNow.push({ url: l.url, label: l.label, by: found.u, title: found.t }); }
      else { repl[l.url] = entry; noReplacement.push({ url: l.url, label: l.label, why }); }
    }
  }

  // "New" and "fixed" only on a normal run; a suspicious run keeps the previous list for next time.
  const newlyBroken = suspicious ? [] : Object.keys(broken).filter((u) => !prev.broken[u]);
  const fixed = suspicious ? [] : Object.keys(prev.broken).filter((u) => !broken[u]);
  const rep = { checked: new Date().toISOString(), checkedIST: today, total: links.length,
    brokenCount: Object.keys(broken).length, unreachableCount: unreachable.length,
    newlyBroken, fixed, suspicious, broken: suspicious ? prev.broken : broken, seenBroken: broken, unreachable,
    replacedNow, restored, noReplacement, replacementsInUse: Object.values(repl).filter((r) => r.u).length,
    searchesUsed: finder && finder.used ? finder.used() : 0 };
  fs.mkdirSync(statusDir, { recursive: true });
  writeAtomic(reportFile, JSON.stringify(rep, null, 1));
  if (!suspicious) {
    writeAtomic(replFile, JSON.stringify(repl, null, 1));
    const shown = {};
    for (const [orig, r] of Object.entries(repl)) if (r.u && WATCH.test(r.u)) shown[orig] = { u: r.u, t: r.t, ch: r.ch, len: r.len, was: r.was, on: r.on };
    const page = { checked: today, broken: Object.fromEntries(Object.entries(broken).map(([u, b]) => [u, { since: b.since }])), replaced: shown };
    // "<" is written as < so no text from YouTube can ever close a <script> tag when the file is inlined.
    // Written in place: on the server only this file (not its folder) is writable by the checker.
    fs.writeFileSync(path.join(site, "js/data/link-status.js"),
      "// Written automatically by tools/links.js --report (scheduled link check). Do not edit by hand.\n" +
      "const LINK_STATUS=" + JSON.stringify(page).replace(/</g, "\\u003c") + ";\n");
  }
  console.log(`${today}: ${links.length} links, ${rep.brokenCount} broken (${newlyBroken.length} new, ${fixed.length} fixed), ` +
    `${unreachable.length} could not be reached; ${replacedNow.length} videos replaced, ${restored.length} originals back, ` +
    `${rep.replacementsInUse} replacements in use.` + (suspicious ? " Too many failures at once: page status NOT changed." : ""));
  return rep;
}

async function main() {
  // Try the video search by hand (needs YT_API_KEY):  YT_API_KEY=... node tools/links.js --find "Python loops" en
  const f = process.argv.indexOf("--find");
  if (f !== -1) {
    const topic = process.argv[f + 1] || "", lang = process.argv[f + 2] === "hi" ? "hi" : "en", key = (process.env.YT_API_KEY || "").trim();
    if (!topic || !key) { console.log('Usage: YT_API_KEY=<key> node tools/links.js --find "topic words" [en|hi]'); process.exitCode = 1; return; }
    const { list } = await youtubeFinder(key, 1)({ lang, topic, q: `${topic} ${lang === "hi" ? "in Hindi" : "tutorial"}` }, new Set());
    console.log(list.length ? list.slice(0, 5).map((v, i) => `${i + 1}. ${v.t} | ${v.ch} | ${v.len}\n   ${v.u}`).join("\n") : "No video passed the quality rules.");
    return;
  }
  const r = process.argv.indexOf("--report");
  if (r !== -1) {
    const site = path.resolve(process.argv[r + 1] && !process.argv[r + 1].startsWith("--") ? process.argv[r + 1] : path.join(__dirname, ".."));
    const key = (process.env.YT_API_KEY || "").trim();
    const rep = await report(site, checkOne, key ? youtubeFinder(key, +process.env.MAX_SEARCHES || 40) : null);
    process.exitCode = rep.suspicious ? 2 : 0;
    return;
  }
  const links = listLinks();
  if (!process.argv.includes("--check")) { process.stdout.write(JSON.stringify(links)); return; }
  console.log(`Checking ${links.length} links (about 1–3 minutes)…`);
  const results = await checkAll(links, checkOne, 8);
  const bad = links.map((l, n) => [l, ...results[n]]).filter((x) => x[1] !== "ok");
  for (const [l, verdict, detail] of bad) console.log(`\n${verdict.toUpperCase()} (${detail}): ${l.label || l.url}\n  ${l.url}\n  Used in: ${l.where.slice(0, 2).join("; ")}`);
  const broken = bad.filter((x) => x[1] === "broken").length;
  console.log(`\n${links.length} links checked: ${broken} broken, ${bad.length - broken} could not be reached.`);
  process.exitCode = broken ? 1 : 0;
}

if (require.main === module) main();
module.exports = { listLinks, checkOne, report, pickBest, youtubeFinder };
