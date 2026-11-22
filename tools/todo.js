// Makes GOOD-FIRST-ISSUES.md: small, real tasks a new contributor can pick, read straight from the data.
// Run from the project folder:  node tools/todo.js > GOOD-FIRST-ISSUES.md
const fs = require("fs"), path = require("path");
const root = path.resolve(__dirname, "..");
const fake = () => new Proxy(function () {}, { get: (t, p) => p === Symbol.toPrimitive ? () => "" : p === "then" ? undefined : fake(), set: () => true, apply: () => fake() });
global.document = fake(); global.localStorage = { getItem: () => null, setItem() {} }; global.location = { hash: "" };
global.addEventListener = () => {}; global.matchMedia = () => ({ matches: false });
const order = fs.readFileSync(path.join(root, "js/data/ORDER.txt"), "utf8").trim().split(/\s+/);
let src = order.map(n => fs.readFileSync(path.join(root, "js/data", n + ".js"), "utf8")).join("\n");
src += "\n" + fs.readFileSync(path.join(root, "js/app.js"), "utf8");
const { SYL, ORDER, ownVids, QBANK } = eval("(function(){" + src + ";return {SYL,ORDER,ownVids,QBANK:typeof QBANK!=='undefined'?QBANK:{}};})()");

const out = [], noEn = {}, noHi = {}, fewQ = {}, noLink = {};
let nEn = 0, nHi = 0, nQ = 0, nL = 0;
for (const k of ORDER) {
  const S = SYL[k];
  S.levels.forEach((L, i) => L.modules.forEach((m, j) => m.topics.forEach(t => {
    const name = t.split("|")[0], v = ownVids(k, name, m.name), at = `${name} – level ${i + 1}, ${m.name} (page \`#${k}:${i}:${j}\`)`;
    if (!v.en) { (noEn[k] = noEn[k] || []).push(at); nEn++; }
    if (!v.hi) { (noHi[k] = noHi[k] || []).push(at); nHi++; }
    const q = ((QBANK[k] || {}).topics || {})[name] || [];
    if (q.length < 3) { (fewQ[k] = fewQ[k] || []).push(`${name} (${q.length} questions)`); nQ++; }
  })));
  const P = (QBANK[k] || {}).prog || [];
  P.forEach(q => { if (!Array.isArray(q)) { (noLink[k] = noLink[k] || []).push(q); nL++; } });
}
const block = (title, how, map, fmt) => {
  out.push(`## ${title}`, "", how, "");
  for (const k of ORDER) if (map[k]) {
    out.push(`<details><summary><b>${SYL[k].name}</b> (${map[k].length})</summary>`, "");
    map[k].forEach(x => out.push(`- [ ] ${fmt(x)}`));
    out.push("", "</details>", "");
  }
};
out.push("# Good first issues", "",
  "Small, real tasks that help students straight away. Pick one, say in an issue that you are working on it,",
  "then follow [CONTRIBUTING.md](CONTRIBUTING.md). Every pull request is checked automatically.", "",
  "This list is made from the data by `node tools/todo.js > GOOD-FIRST-ISSUES.md`, so it is always up to date after a merge.", "",
  "| Task | How many are open |", "|---|---|",
  `| Add an English video for a topic | ${nEn} |`, `| Add a Hindi video for a topic | ${nHi} |`,
  `| Add practice questions to a topic (it has fewer than 3) | ${nQ} |`, `| Find a free practice page for an interview program | ${nL} |`, "");
block("1. Add an English video for a topic",
  "These topics only show the module's video or a YouTube search. Add one good free video in `js/data/topic-videos.js` (rules in CONTRIBUTING.md).",
  noEn, x => x);
block("2. Add a Hindi video for a topic",
  "Same as above, but the video must be spoken in Hindi.", noHi, x => x);
block("3. Add practice questions to a topic",
  "Add questions in `js/data/questions.js` under the course's `topics`. Questions only, no answers. A link is optional and must go to a free practice site.",
  fewQ, x => x);
block("4. Find a free practice page for an interview program",
  "These programs in a course's Interview tab have no link yet. If a free site (LeetCode free problems, Exercism, HDLBits and others) has the same problem, turn the text into `[\"text\", \"https://...\"]` in `js/data/questions.js`.",
  noLink, x => x);
process.stdout.write(out.join("\n") + "\n");
