// Sanity check: loads all data + app in Node with a fake DOM and reports counts and broken references.
// Run from the project folder:  node tools/check.js
const fs = require("fs"), path = require("path");
const root = path.resolve(__dirname, "..");
// A "do-nothing" page: every property and call returns another do-nothing object, so app.js runs without a browser.
const fake = () => new Proxy(function () {}, { get: (t, p) => p === Symbol.toPrimitive ? () => "" : p === "then" ? undefined : fake(), set: () => true, apply: () => fake() });
global.document = fake();
global.localStorage = { getItem: () => null, setItem() {} }; global.location = { hash: "" };
global.addEventListener = () => {}; global.matchMedia = () => ({ matches: false });
const order = fs.readFileSync(path.join(root, "js/data/ORDER.txt"), "utf8").trim().split(/\s+/);
let src = order.map(n => fs.readFileSync(path.join(root, "js/data", n + ".js"), "utf8")).join("\n");
src += "\n" + fs.readFileSync(path.join(root, "js/app.js"), "utf8");
const { SYL, MODV, VIDEOS, CAP, CERTS, PROGRAMS, PORDER, ORDER, PRACTICE, TASKLINKS, COURSE_PRACTICE, validTarget, courseText, programText, DSA300, TOPICLINKS, DSA_MODPAT, QBANK } = eval("(function(){" + src + ";return {SYL,MODV,VIDEOS,CAP,CERTS,PROGRAMS,PORDER,ORDER,PRACTICE,TASKLINKS,COURSE_PRACTICE,validTarget,courseText,programText,DSA300,TOPICLINKS,DSA_MODPAT,QBANK:typeof QBANK!=='undefined'?QBANK:null};})()");
let total = 0; const issues = []; const mods = new Set();
for (const k of ORDER) {
  const s = SYL[k]; let n = 0, en = 0, hi = 0; const names = new Set();
  s.levels.forEach(L => L.modules.forEach(m => { mods.add(k + "::" + m.name); const mv = MODV[k + "::" + m.name] || {};
    m.topics.forEach(t => { const a = t.split("|")[0]; if (!t.includes("|")) issues.push(k + " missing | in " + t); if (names.has(a)) issues.push(k + " duplicate topic " + a); names.add(a); n++;
      const v = VIDEOS[k + "::" + a] || {}; if (v.en || mv.en) en++; if (v.hi || (mv.hi && !mv.hi.chan)) hi++; }); }));
  total += n;
  console.log(k.padEnd(10), String(n).padStart(3), "topics | EN", String(en).padStart(3), "| HI", String(hi).padStart(3), "| capstones", (CAP[k] || []).length, "| certs", (CERTS[k] || []).length);
}
Object.keys(MODV).forEach(k => { if (!mods.has(k)) issues.push("video for unknown module " + k); });
Object.keys(VIDEOS).forEach(k => { const [c, t] = k.split("::"); if (!SYL[c] || !SYL[c].levels.some(L => L.modules.some(m => m.topics.some(x => x.split("|")[0] === t)))) issues.push("video for unknown topic " + k); });
PORDER.forEach(p => PROGRAMS[p].phases.forEach((ph, i) => { ph.courses.forEach(c => { if (!SYL[c]) issues.push("program " + p + " uses unknown course " + c); });
  if (new Set(ph.courses).size !== ph.courses.length) issues.push(`program ${p} phase ${i + 1}: a course is listed twice`);
  // parts:{course:[from,to]} = only levels from..to (1-based) of that course in this phase
  Object.entries(ph.parts || {}).forEach(([c, r]) => { const n = SYL[c] ? SYL[c].levels.length : 0;
    if (!ph.courses.includes(c)) return issues.push(`program ${p} phase ${i + 1}: part for ${c}, which is not in the phase`);
    const rs = Array.isArray(r) && Array.isArray(r[0]) ? r : [r]; let prev = 0;
    rs.forEach(x => { if (!Array.isArray(x) || x.length !== 2 || !Number.isInteger(x[0]) || !Number.isInteger(x[1]) || x[0] < 1 || x[1] > n || x[0] > x[1] || x[0] <= prev) issues.push(`program ${p} phase ${i + 1}: levels ${JSON.stringify(r)} of ${c} are not valid (it has ${n} levels; ranges go up in order)`); else prev = x[1]; });
    if (rs.length === 1 && Array.isArray(rs[0]) && rs[0][0] === 1 && rs[0][1] === n) issues.push(`program ${p} phase ${i + 1}: part for ${c} is the whole course; remove it`); }); }));
// The same level of a course must not be planned in two phases of one program.
PORDER.forEach(p => { const seen = {}; PROGRAMS[p].phases.forEach((ph, i) => ph.courses.forEach(c => { const n = SYL[c] ? SYL[c].levels.length : 0, r = (ph.parts || {})[c] || [1, n], rs = Array.isArray(r[0]) ? r : [r];
  rs.forEach(([a, b]) => { for (let l = a; l <= b; l++) { const k = c + ":" + l; if (seen[k]) issues.push(`program ${p}: ${c} level ${l} is in phase ${seen[k]} and phase ${i + 1}`); seen[k] = i + 1; } }); })); });

// Timelines: level days run 1..course days with no gap or overlap; program months run 1..12 and 1..24.
const range = (s) => { const m = /^Days? (\d+)(?:–(\d+))?$/.exec(s || ""); return m ? [+m[1], +(m[2] || m[1])] : null; };
const span = (s) => { const m = /Months? (\d+)(?:–(\d+))?\)?$/.exec(s || ""); return m ? [+m[1], +(m[2] || m[1])] : null; };
for (const k of ORDER) {
  const S = SYL[k]; let next = 1;
  S.levels.forEach((L, i) => {
    const r = range(L.days);
    if (!r) return issues.push(`${k} level ${i + 1}: days "${L.days}" should look like "Days 1–10" or "Day 5"`);
    if (r[0] !== next || r[1] < r[0]) issues.push(`${k} level ${i + 1}: "${L.days}" should start on day ${next}`);
    next = r[1] + 1;
  });
  if (next - 1 !== S.days) issues.push(`${k}: levels end on day ${next - 1} but the course says ${S.days} days`);
  const topics = S.levels.reduce((a, L) => a + L.modules.reduce((b, m) => b + m.topics.length, 0), 0);
  const perTopic = S.days * parseFloat(S.perDay) * (/min/.test(S.perDay) ? 1 / 60 : 1) / topics;
  if (perTopic < 0.4 || perTopic > 6.5) issues.push(`${k}: ${perTopic.toFixed(1)} hours per topic looks wrong (see README, Timeline rule)`);
}
for (const p of PORDER) for (const [plan, total] of [["two", 24], ["one", 12]]) {
  let next = 1;
  PROGRAMS[p].phases.forEach((ph, i) => {
    const r = span(ph[plan]);
    if (!r || r[0] !== next || r[1] < r[0]) issues.push(`program ${p} phase ${i + 1} (${plan === "two" ? "2-year" : "1-year"}): "${ph[plan]}" should start in month ${next}`);
    if (r) next = r[1] + 1;
  });
  if (next - 1 !== total) issues.push(`program ${p} (${plan === "two" ? "2-year" : "1-year"}): phases end in month ${next - 1}, not ${total}`);
}
// Every outside link must be a full http(s) address (the page shows anything else as a dead "#" link).
const web = (u) => /^https?:\/\//.test(u || "");
for (const k of ORDER) SYL[k].levels.forEach(L => L.modules.forEach(m => { if (!m.course || !web(m.course[1])) issues.push(`${k} › ${m.name}: free course link is missing or not http(s)`); }));
for (const [key, v] of [...Object.entries(MODV), ...Object.entries(VIDEOS)]) ["en", "hi"].forEach(l => [].concat(v[l] || []).forEach(x => { if (!x || !web(x.u)) issues.push(`video ${key} (${l}) has no http(s) address`); }));
// Practice links (v11): every program task has at least one link; internal links point at a real
// course/level/module/tab or practice section; outside links are https; alternatives are in the phase.
const https = (u) => /^https:\/\//.test(u || "");
const checkLink = (where, [label, t]) => { if (!label) issues.push(`${where}: link without a label`);
  if (/^#/.test(t)) { if (!validTarget(t)) issues.push(`${where}: internal link ${t} goes nowhere`); }
  else if (!https(t)) issues.push(`${where}: outside link ${t} is not https`); };
const usedTasks = new Set();
PORDER.forEach(p => PROGRAMS[p].phases.forEach((ph, i) => {
  ph.tasks.forEach(t => { usedTasks.add(t); if (!(TASKLINKS[t] || []).length) issues.push(`program ${p} phase ${i + 1}: task "${t}" has no practice link`); });
  (ph.alt || []).forEach(g => g.forEach(c => { if (!ph.courses.includes(c)) issues.push(`program ${p} phase ${i + 1}: alternative ${c} is not in the phase`); }));
}));
Object.entries(TASKLINKS).forEach(([t, ls]) => { if (!usedTasks.has(t)) issues.push(`task link for "${t}" matches no task (text changed?)`); ls.forEach(l => checkLink(`task "${t}"`, l)); });
const secIds = new Set();
PRACTICE.sections.forEach(sct => { if (secIds.has(sct.id)) issues.push(`practice section ${sct.id} repeated`); secIds.add(sct.id);
  (sct.inside || []).forEach(l => checkLink(`practice ${sct.id}`, l)); (sct.outside || []).forEach(([n, u]) => checkLink(`practice ${sct.id}`, [n, u])); });
Object.entries(COURSE_PRACTICE).forEach(([k, ls]) => { if (!SYL[k]) issues.push(`practice sites for unknown course ${k}`); ls.forEach(([n, u]) => checkLink(`course ${k} practice`, [n, u])); });
// Practice and interview questions: every course has them, topics must exist, links go only to known practice sites.
const QHOSTS = /^(leetcode\.com|exercism\.org|hdlbits\.01xz\.net|learngitbranching\.js\.org|www\.saucedemo\.com|the-internet\.herokuapp\.com|overthewire\.org|portswigger\.net|datalemur\.com)$/;
if (!QBANK || typeof QBANK !== "object") issues.push("questions: QBANK is missing (js/data/questions.js not loaded?)");
else {
  Object.keys(QBANK).forEach(k => { if (!SYL[k]) issues.push(`questions for unknown course ${k}`); });
  ORDER.forEach(k => { const c = QBANK[k]; if (!c) { issues.push(`course ${k}: no practice questions`); return; }
    const names = new Set(); SYL[k].levels.forEach(L => L.modules.forEach(m => m.topics.forEach(t => names.add(t.split("|")[0]))));
    if (!Array.isArray(c.full) || c.full.length < 15) issues.push(`course ${k}: fewer than 15 whole-course questions`);
    if (!Array.isArray(c.prog) || c.prog.length < 8) issues.push(`course ${k}: fewer than 8 interview programs`);
    if (!Array.isArray(c.tasks) || c.tasks.length < 8) issues.push(`course ${k}: fewer than 8 practical tasks`);
    { const n = q => (Array.isArray(q) ? q[0] : q).toLowerCase().replace(/[^a-z0-9]/g, ""), seenAll = new Map(); [["whole course", c.full || []], ["programs", c.prog || []], ["practical tasks", c.tasks || []]].forEach(([w, L]) => L.forEach(q => { const x = n(q); if (seenAll.has(x) && seenAll.get(x) !== w) issues.push(`course ${k}: same question in ${seenAll.get(x)} and ${w}`); seenAll.set(x, w); })); }
    const tp = c.topics || {}; Object.keys(tp).forEach(t => { if (!names.has(t)) issues.push(`course ${k}: questions for unknown topic "${t}"`); if (!Array.isArray(tp[t]) || tp[t].length < 2) issues.push(`course ${k} topic "${t}": fewer than 2 questions`); });
    names.forEach(t => { if (!tp[t]) issues.push(`course ${k}: topic "${t}" has no practice questions`); });
    const seen = new Set();
    [["whole course", c.full || []], ["programs", c.prog || []], ["practical tasks", c.tasks || []], ...Object.entries(tp)].forEach(([w, L]) => (L || []).forEach(q => {
      const [text, u] = Array.isArray(q) ? q : [q];
      if (typeof text !== "string" || text.trim().length < (Array.isArray(q) ? 3 : 8)) issues.push(`course ${k} ${w}: empty or too short question`);
      else if (/javascript:|data:text|vbscript:/i.test(text) || /<\/?(script|style|iframe|frame|object|embed|img|svg|math|a|link|meta|base|form|input|button|textarea|select|video|audio|source|body|html|head|div|span|p|br|b|i|u)(\s|>|\/)|\son[a-z]+\s*=/i.test(text)) issues.push(`course ${k} ${w}: HTML is not allowed in a question: ${text.slice(0, 60)}`);
      else { const key = w + "|" + text.toLowerCase(); if (seen.has(key)) issues.push(`course ${k} ${w}: repeated question "${text.slice(0, 50)}"`); seen.add(key); }
      if (Array.isArray(q)) { if (q.length !== 2 || !https(u)) issues.push(`course ${k} ${w}: question link ${u} is not https`);
        else { let h = ""; try { h = new URL(u).hostname } catch (e) {} if (!QHOSTS.test(h)) issues.push(`course ${k} ${w}: question link to unknown site ${h}`); } }
    }));
  });
}
// 300-problem plan: every pattern in the plan has exactly that many problems, no repeats, valid slugs and difficulty.
const plan300 = (PRACTICE.sections.find(x => x.plan) || {}).plan || [], slugs = new Set();
plan300.forEach(([pat, n]) => { const L = DSA300[pat] || []; if (L.length !== n) issues.push(`300 plan: ${pat} has ${L.length} problems, plan says ${n}`);
  L.forEach(([slug, num, title, dif]) => { if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) issues.push(`300 plan: bad slug ${slug}`); if (slugs.has(slug)) issues.push(`300 plan: ${slug} repeated`); slugs.add(slug);
    if (!["Easy", "Medium", "Hard"].includes(dif) || !(num > 0) || !title) issues.push(`300 plan: ${slug} has missing details`); }); });
Object.keys(DSA300).forEach(p => { if (!plan300.some(x => x[0] === p)) issues.push(`300 plan: pattern ${p} is not in the plan table`); });
// Topic links point at real topics; DSA modules point at real problem patterns.
Object.entries(TOPICLINKS).forEach(([key, ls]) => { const [c, t] = key.split("::"); if (!SYL[c] || !SYL[c].levels.some(L => L.modules.some(m => m.topics.some(x => x.split("|")[0] === t)))) issues.push(`topic links for unknown topic ${key}`); ls.forEach(l => checkLink(`topic ${key}`, l)); });
Object.entries(DSA_MODPAT).forEach(([m, ps]) => { if (!SYL.dsa.levels.some(L => L.modules.some(x => x.name === m))) issues.push(`DSA practise links for unknown module ${m}`); ps.forEach(p => { if (!DSA300[p]) issues.push(`DSA module ${m}: unknown pattern ${p}`); }); });
const BRANCH_IDS = ["cse", "ece", "eee", "mech", "civil"];
PORDER.forEach(p => { const b = PROGRAMS[p].branch; if (!Array.isArray(b) || !b.length || b.some(x => !BRANCH_IDS.includes(x))) issues.push(`program ${p}: branch list missing or wrong`); });
// Every course belongs to known branches; every branch has a program and at least 3 courses of its own.
ORDER.forEach(k => { const b = SYL[k].branch; if (!Array.isArray(b) || !b.length || b.some(x => x !== "any" && !BRANCH_IDS.includes(x)) || (b.includes("any") && b.length > 1)) issues.push(`course ${k}: branch list missing or wrong`); });
BRANCH_IDS.forEach(id => { if (!PORDER.some(p => PROGRAMS[p].branch[0] === id)) issues.push(`branch ${id}: no program of its own`);
  const n = ORDER.filter(k => (SYL[k].branch || []).includes(id)).length; if (n < 3) issues.push(`branch ${id}: only ${n} courses of its own`); });
// Videos: valid https address, a title and a channel;
// no repeated module or topic names inside a course; every topic has "name|description".
const tkeys = new Set(), mkeys = new Set();
ORDER.forEach(k => { const mods = new Set(), tops = new Set(); SYL[k].levels.forEach(L => L.modules.forEach(m => {
  if (mods.has(m.name)) issues.push(`course ${k}: module "${m.name}" repeated`); mods.add(m.name); mkeys.add(k + "::" + m.name);
  m.topics.forEach(t => { const n = t.split("|")[0]; if (!t.includes("|")) issues.push(`course ${k}: topic "${n}" has no description`);
    if (tops.has(n)) issues.push(`course ${k}: topic "${n}" repeated`); tops.add(n); tkeys.add(k + "::" + n); }); })); });
const vcheck = (where, x) => { if (!x || !/^https:\/\/[^\s"<>]+$/.test(x.u || "")) issues.push(`${where}: video address missing or not https`); else if (!x.t || !x.ch) issues.push(`${where}: video needs a title and channel`); };
Object.entries(VIDEOS).forEach(([key, v]) => { ["en", "hi"].forEach(l => [].concat(v[l] || []).forEach(x => vcheck(`topic ${key} ${l}`, x))); });
Object.entries(MODV).forEach(([key, v]) => { ["en", "hi"].forEach(l => v[l] && vcheck(`module ${key} ${l}`, v[l])); });
// Safety for contributions: no HTML or script addresses anywhere in the data. Only course notes may use
// <strong>, <b>, <i>, <em>, <br> and plain https links. (The page escapes text, but this stops mistakes early.)
const NOTE_OK = /^(?:[^<]|<\/?(?:strong|b|i|em)>|<br\s*\/?>|<a href="https:\/\/[^"<>\s]+"(?: target="_blank" rel="noopener noreferrer")?>|<\/a>)*$/;
const walk = (v, where, key) => {
  if (typeof v === "string") {
    if (/javascript:|data:text|vbscript:/i.test(v)) issues.push(`${where}: script-like address in text`);
    else if (/<[a-zA-Z!\/?]/.test(v) && !(key === "note" && NOTE_OK.test(v.replace(/<<|<=|< /g, "")))) issues.push(`${where}: HTML is not allowed here: ${v.slice(0, 60)}`);
  } else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) walk(x, `${where}.${k}`, Array.isArray(v) ? key : k);
};
Object.entries({ SYL, PROGRAMS, CAP, CERTS, PRACTICE, TASKLINKS, TOPICLINKS, COURSE_PRACTICE, VIDEOS, MODV, DSA300 }).forEach(([n, v]) => walk(v, n, n));
// The roadmap text files build for every course and program.
ORDER.forEach(k => { try { if (courseText(k).length < 200) issues.push(`course ${k}: roadmap text too short`); } catch (e) { issues.push(`course ${k}: roadmap text failed: ${e.message}`); } });
PORDER.forEach(p => { try { if (programText(p).length < 200) issues.push(`program ${p}: roadmap text too short`); } catch (e) { issues.push(`program ${p}: roadmap text failed: ${e.message}`); } });
console.log("total topics", total, "| courses", ORDER.length, "| programs", PORDER.length);
console.log(issues.length ? "ISSUES:\n" + issues.join("\n") : "No issues found.");
