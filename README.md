# Skill to Income Academy

Free, job-oriented learning roadmaps: 12 job programs (1–2 years) built from 34 A–Z courses, with checked English + Hindi videos, capstone projects on GitHub repos, and certification guides.

## Open it

Double-click `index.html`. It opens in your browser; no server or install needed. Fonts are included,
so internet is needed only for the video and course links.

**Put it online:** follow `DEPLOY-GITHUB.md`. GitHub keeps the code, hosts the free website (GitHub Pages), checks
every change and runs the weekly link check. Nothing else is needed. (`deploy/ORACLE-CLOUD.md` is an optional
extra for running your own server later.)

**Help it grow:** pick a task from `GOOD-FIRST-ISSUES.md` and read `CONTRIBUTING.md`.

**Licence:** website code under the MIT licence (`LICENSE`); roadmap content under CC BY 4.0
(`LICENSE-CONTENT`); fonts under the SIL Open Font License (`fonts/OFL.txt`). Linked videos and sites belong to
their creators. **Want to help?** See `CONTRIBUTING.md`.

## Folder structure

```
SkillToIncome/
├── index.html              Page shell: header, course picker, footer; loads CSS and JS
├── css/
│   └── styles.css          All styles, light + dark theme, phone layout
├── js/
│   ├── app.js              App logic: course/program pages, search, progress ticks, routing (#hash)
│   └── data/               All content (edit these to change the courses)
│       ├── ORDER.txt       Load order of the data files (keep in sync with index.html)
│       ├── syllabus.js     SYL: trading, testing, ai, claude, tools courses
│       ├── videos.js       Trading videos (VIDEOS per topic, MODV per module)
│       ├── extra.js        Data, DevOps, Cyber courses; CAP (capstones); IDEAS
│       ├── courses.js      C, C++, Java, Python, SQL, Frontend, Full Stack, Android, iOS + testing videos
│       ├── certs.js        CERTS: certifications, study material, practice papers
│       ├── dsa.js          Data Structures & Algorithms course
│       ├── programs.js     Placement Preparation course + PROGRAMS (job roadmaps)
│       ├── module-videos.js  Module videos (EN + HI) for AI, Claude, AI Tools, DevOps, Cyber, Data and gaps elsewhere
│       ├── topic-videos.js   Topic-by-topic videos (EN and/or HI) for all 18 remaining courses
│       ├── more-courses.js   AI Video and Animation, Git and GitHub, SAP Career Starter (roadmap, projects, certs)
│       ├── more-videos.js    Module and topic videos for those three courses
│       ├── practice.js       Practice and interview hub, links for every program task, practice sites per course
│       ├── dsa300.js         The 300 DSA problems (12 patterns), all free on LeetCode
│       ├── branch-courses.js Cloud Computing + 11 core-branch courses (ECE, EEE, Mechanical, Civil)
│       ├── branch-programs.js 4 core-branch job programs, branch tags for every program, core interview questions
│       └── link-status.js  Broken links found by the weekly check (written by the server; ships empty)
├── robots.txt              Lets search engines index the site (server adds the sitemap line)
├── fonts/                  The three fonts (served from the site, no Google request) + OFL.txt licence
├── .github/                GitHub: data check on every change, weekly link check, broken-link issue form
├── LICENSE, LICENSE-CONTENT, CONTRIBUTING.md, SECURITY.md, DEPLOY-GITHUB.md
├── tools/
│   ├── build.py            Makes dist/skill-to-income.html (one self-contained file)
│   ├── check.js            Checks all data: counts, links between courses/videos/programs, timelines
│   └── links.js            Lists every web link; --check tests them; --report is the weekly server job
├── deploy/                 Oracle Cloud hosting + weekly link-check scheduler (see deploy/ORACLE-CLOUD.md)
│   ├── setup.sh            One-time server setup (nginx, Node.js, firewall, scheduler)
│   ├── update.sh           Publish a new version (keeps link-check results)
│   ├── run-linkcheck.sh    What the scheduler runs
│   ├── notify.py           Optional email when a link breaks
│   ├── linkcheck.env.example  Email settings template
│   ├── nginx/skilltoincome.conf
│   └── systemd/            skilltoincome-linkcheck.service + .timer (Sunday 02:30 IST)
└── dist/
    └── skill-to-income.html   Single-file build, used for publishing and sharing
```

## How content is shaped

- **Course** (`SYL.<key>`): name, days, levels → modules → topics. A topic is `"Topic name|One-line simple explanation"`.
- **Module video** (`MODV["<course>::<module>"]`): `{en: ..., hi: ...}` shown on every topic in that module.
- **Topic video** (`VIDEOS["<course>::<topic name>"]`): overrides the module video for that topic.
- **Capstones** (`CAP.<course>`), **Certifications** (`CERTS.<course>`), **Job programs** (`PROGRAMS.<key>`, phases list course keys).

## Timeline rule (version 9)

A course's days come from the time its topics really need, **including practice**:
days = topics × hours per topic ÷ hours per day (rounded to 5). Level day ranges keep each level's share.

| Kind of course | Hours per topic | Courses |
|---|---|---|
| Quick tool skills | 0.5 | AI Tools Hub |
| Concepts and short how-tos | 0.5–1.5 | Claude, Trading, SQL |
| Mixed manual + automation | 1.75 | Manual Tester to Automation + AI |
| Programming languages and placement prep | 2–3 | Placement, C, Python, C++, Java |
| Problem solving and front end | 2.5–3.5 | AI with Projects, Data Analyst, DSA, Frontend |
| Project-heavy stacks | 4.5–5.5 | Full Stack, Android, iOS, DevOps, Cyber Security |

Job programs: the 2-year plan follows college semesters (6 months each, at most about 2.5 hr a day);
the 1-year fast track splits 12 months by workload (about 2.5–3.5 hr a day).
Course names do not include a day count, so they never go out of date.
`tools/check.js` warns when level days have gaps, do not end on the course's last day, program months
do not add up to 12 / 24, or hours per topic look wrong (under 0.4 or over 6.5).

## After editing

```
node tools/check.js        # must say "No issues found."
python tools/build.py      # rebuilds dist/skill-to-income.html
node tools/links.js --check   # optional: tests every link from your computer (1–3 minutes)
```

## Hosting and the automatic link check

This is a **static website**: no login and no database; anyone can open it. To put it on Oracle Cloud with the weekly
link checker, follow **`DEPLOY-GITHUB.md`** and then **`deploy/ORACLE-CLOUD.md`** (clone from GitHub, run
`sudo bash deploy/setup.sh` once). The GitHub Pages copy gets the same weekly check from GitHub Actions.
Every Sunday the server tests all links; broken ones are marked on the site automatically
("link not working", or "Video removed · search for this topic"), and you can get an email.

## Watermark, copy protection, search engines

- **Watermark**: faint repeating "Vamsi Pujitha" over every page (`.wm` layer in `index.html`, styled in `css/styles.css`;
  strength = `--wm-ink`). It never blocks clicks or reading. Change the name inside the SVG in `.wm` to rename it.
- **Copy protection** (`js/app.js`): no text selection, right-click, copy/cut, drag, or Ctrl+S / Ctrl+P / Ctrl+U / Ctrl+A;
  printing or "Save as PDF" shows a notice instead of the content. Search box and other fields still work normally.
  This stops casual copying only. Anyone can still take screenshots or read the page source; no public website can prevent that.
- **Search engines**: the page has a description, `robots` meta set to index, a `<noscript>` summary, and `robots.txt`.
  When setup is run with a domain, the server also writes `sitemap.xml` and adds it to `robots.txt`.
  After going live, add the site in Google Search Console and Bing Webmaster Tools to get indexed faster.

## Page layout (version 10)

- Picker: two tabs, **Job Programs** (8) and **Courses** (19, Placement Preparation first).
- Course page: section tabs **Roadmap · Projects · Certificates · What next** (plus **AI tools** on the AI Tools Hub; "Get paid to test" sits in What next). At most 4 tabs so they fit a 360 px phone.
- Each module shows its free course and its English + Hindi video **once** at the top; a topic shows only its own extra video. A module with no chosen video yet shows a YouTube search link.
- Placement Preparation (9 Nov 2026): every topic checked against its videos; a topic can list several videos per language (`en:[...]`). Spoken language confirmed from YouTube auto-captions. Other courses still use one module video for all topics.
- Capstone steps fold under "How to build it".
- **Free and flexible** note (English, Hindi behind a toggle) at the top of every course Roadmap tab and every job program (`FREE_NOTE` in `js/app.js`). The full "How to use this roadmap" text is under the intro and in the footer (`index.html`). Never name a paid course or institute here.

## Notes

- Progress ticks are saved in each learner's own browser (localStorage).
- Trading content is education only (SEBI rules: no tips, price data at least 30 days old).
- Do not copy roadmap.sh content; their licence allows personal use only. Linking to them is fine.
- Video and certification details were checked on 8 Nov 2026; re-check links before publishing widely.
- This folder is also the **Learn → Roadmap** tab of the SKIT Quiz site (`v2/SkillToIncome`). After editing here,
  copy the whole folder into `v2` and run `bash deploy/update.sh` on the server. The server checks every link on
  the 1st of each month (using `tools/links.js`) and emails the admin only when a link is broken.

## Progress, video coverage and the server (10 Nov 2026)

- **Save progress / Load progress** (top of the page): ticks live in the visitor's browser. "Save" downloads a
  small `skill-to-income-progress.json`; "Load" on another phone or browser adds those ticks. Nothing is sent to
  any server. Loading only adds ticks for topics that still exist and never removes any.
- **Video coverage line** on each course ("42 of 51 topics have their own video ..."), worked out from the data,
  so the remaining gaps are visible while courses are checked topic by topic.
- **Links**: every outside address is written through `U()` in `js/app.js` (only http/https, escaped).
- **Server** (`deploy/nginx/skilltoincome.conf`): Content-Security-Policy (scripts only from this site), no
  server version, hidden files blocked. `deploy/update.sh` adds `?v=<version>` to every CSS/JS link, so browsers
  can cache them for 30 days and still get a new version at once; the page itself is never cached.

## Module videos for every course (9 Nov 2026)

- `js/data/module-videos.js` gives every module an English and a Hindi video where a good free one exists
  (only Claude API has none yet; a few modules have one language). Each video plays, has 30k+ views, and its
  spoken language was confirmed from YouTube's auto-captions. It only fills gaps; it never replaces a video
  set in an earlier file. Load order: after `programs.js` (see `ORDER.txt` and `index.html`).
- Fixed free-course links: Testing Level 1 (was GitHub Skills), AI "Data tools", "Maths you need", "ML basics",
  "Deploy your app".
- Roadmap shows one module open at a time (all closed when a course opens).

## Topic videos for every course (9 Nov 2026)

- `js/data/topic-videos.js` (loads after `module-videos.js`) gives a topic its own video when a good free one exists. It never replaces a video that is already set.
- 630 of the 795 topics that had no video now have one. All 911 topics: 736 have their own video; the rest show the module video plus a YouTube search link.
- How the videos were picked: YouTube search per topic, title must match the topic, at least 20k views, 3 to 240 minutes long, no hype or "tips" channels, video still online (oEmbed check), language taken from channels already checked as English or Hindi. Then each pick was reviewed by hand.
- To change one: edit its line in `topic-videos.js`, then run `node tools/check.js` and `python tools/build.py`.

## Three new courses (22 Nov 2026)

- **AI Video and Animation** (45 days, group "Earn and AI tools"): images, Veo/Kling/Runway clips, consistent characters, animation and avatars, voice and music, CapCut and DaVinci editing, ComfyUI with open models, earning from AI video.
- **Git and GitHub** (30 days, group "Programming languages"): Git basics, branches, GitHub, open source, Actions, Copilot, GitHub certifications.
- **SAP Career Starter (S/4HANA)** (90 days, group "Careers"): ERP basics, S/4HANA core, FICO / MM / SD, ABAP and BTP, SAP Activate, certification and interviews.
- Data lives in `js/data/more-courses.js` (loaded after `programs.js`) and `js/data/more-videos.js` (loaded last). Colours `--l-aivideo`, `--l-git`, `--l-sap` are in `css/styles.css`.
- Videos: YouTube search per topic, 15k+ views, 3–240 minutes, no hype titles, reviewed by hand. Every Hindi video was checked from YouTube's auto-captions; videos whose caption language did not match were left out, so some topics show English only.
- All 3 courses also appear in the Courses tab; they are not yet part of any Job Program.

## Practice links, progress line and roadmap download (version 11, 22 Nov 2026)

- **Task links.** Every "Also do in this phase" task in every job program has links under it (`TASKLINKS` in `js/data/practice.js`, matched by the task's exact text). Solid chips (→) open a part of this site; dashed chips (↗) are outside sites. The checkbox still ticks the task.
- **Leave-site warning.** Every outside practice link (`data-ext`) opens a small warning first: the site is not ours, never share passwords/OTPs/bank details, paying is optional. "Don't warn me again on this visit" lasts until the page is closed. New tabs open with `noopener noreferrer`.
- **Practice and interview hub** (`#practice`): the 300-problem DSA plan, a weekly mock-test routine, system design concepts + 15 classic questions, CS core revision, SDET framework questions, data-analyst case questions, HR questions, each with free outside sites.
- **Addresses that jump inside the site:** `#course`, `#course:L` (level L), `#course:L:M` (module M of level L), `#course:projects|certs|next`, `#practice:section`. Anything else falls back to the SDE program.
- **Progress line.** Course pages show levels as a line: filled = done, half = started, ring + "You are here" = the first unfinished level. "Continue where you left off" opens the next unticked topic. Program pages show the same line for phases (topics of the phase's courses + its tasks).
- **Download roadmap (.txt)** on every course and program: the roadmap only (levels, modules, topics, tasks, milestones) with [x] for what is ticked on this device. Inside the claude.ai preview it uses the viewer's download prompt.
- **Choose one course:** a phase can list alternatives (`alt:[["java","python"]]`, `pick:"..."`). Totals count only the alternative with more progress. The SDE program's "Development skill" phase now offers Java or Python; SDE and Full Stack phase 1 include the Git and GitHub course.
- **Free practice sites** per course (`COURSE_PRACTICE`) appear on each course's Projects tab.
- `node tools/check.js` now also fails if a task has no link, an internal link goes nowhere, an outside link is not https, or a roadmap text cannot be built. `tools/links.js` includes all new outside links in the weekly check.
- **300 DSA problems** (`js/data/dsa300.js`): each pattern row on the Practice hub opens its problem list (easy → medium → hard) with a tick box, the LeetCode link (after the leave-site warning) and a "▶ Solution" YouTube search. 87 easy, 180 medium, 33 hard; all checked against a current public LeetCode index and none needs Premium. Ticks are saved as `dsa300::<slug>` and move with Save/Load progress. `check.js` fails if a pattern's count stops matching the plan table.

## Core branches, Cloud, DSA practice and GitHub (version 12, 22 Nov 2026)

- **Branch filter.** The Job Programs tab has branch chips: All, CSE / IT, ECE, EEE, Mechanical, Civil (`PROGRAMS[x].branch`; remembered in the browser). Choosing a branch opens that branch's own program first. Every program must have a branch list (`check.js`).
- **4 core-branch programs** (`js/data/branch-programs.js`): Electronics Engineer (Embedded / VLSI), Electrical Engineer (Power / EV / Automation), Mechanical Design Engineer (CAD / CAE), Civil Engineer (Structural / BIM / Site). Each has phases, linked tasks, milestones and interview rounds.
- **12 new courses** (`js/data/branch-courses.js`): Cloud Computing; ECE: Embedded Systems and IoT, PCB Design (KiCad), VLSI Design; EEE: Power Systems, Power Electronics and EV, PLC/SCADA and Industrial Automation; Mechanical: CAD and GD&T, CAE (FEA, CFD, optimisation), Manufacturing (CNC, CAM, 3D printing, quality); Civil: Civil CAD and Estimation, Structural Analysis and Design, BIM and Project Planning. Free sources first: NPTEL, MATLAB Onramps, Autodesk Learning, Ansys Innovation Courses, HDLBits, EDA Playground, KiCad, OpenPLC, AWS/Microsoft/Google training. Every capstone starts from a checked GitHub repo.
- **Module videos** for the 12 courses are in `more-videos.js` (EN + HI per module where a good free one exists; Hindi only when YouTube's captions confirm Hindi). Topic-by-topic videos come in the next pass.
- **Practice hub** has a new "Core engineering interview questions" section (8 questions each for ECE, EEE, Mechanical, Civil).
- **DSA course** has a "300 problems" tab; each DSA module shows "Practise" links to its patterns (`DSA_MODPAT`), and the practice topics (daily plan, contests, mock interviews, company lists) have links (`TOPICLINKS`).
- **GitHub on every course:** a tip on the Roadmap tab and a 5-step "Put your work on GitHub" guide on the Projects tab (not on the Git and GitHub course itself).

## 3-step picker (version 13, 22 Nov 2026)

The top bar now works in three steps:

1. **Your branch**: a dropdown (All, CSE/IT, ECE, EEE, Mechanical, Civil). It starts on "All branches" and is remembered in `localStorage` under `sti-branch`. Only known values are accepted.
2. **Job Programs / Courses**: two tabs. Each tab shows how many items fit the branch.
3. **The list**: shows only what fits the branch. Courses are split into "For &lt;branch&gt;" and "Useful for every branch".

- Each course's branches are set in `CBR` in `js/data/branch-programs.js`. `any` means every branch. A course can belong to several branches, e.g. PLC is in both EEE and Mechanical.
- If a link opens something outside the chosen branch, the page still opens, with a note and a "Show all branches" button.
- `tools/check.js` checks that every course has a valid branch list, and that each branch has its own program and at least 3 courses of its own.

## Branch fix, aligned picker, traffic and auto-replaced videos (version 14, 22 Nov 2026)

- **Branch filter:** with a branch chosen, the tab badges count only what is **made for** that branch
  (Mechanical: 1 program, 4 courses). The list shows those first ("Mechanical courses (4)"), then
  "For every branch (14)". Changing the branch always opens something made for it.
- **Picker layout:** "1 · Your branch", "2 · Show", "3 · Choose" sit on one line, all 48 px tall (44 px on phone).
  On phones under 400 px the tab reads "Programs".
- **Traffic:** the nginx config has ready-compressed files (`gzip_static`), caching, per-visitor limits
  and GET/HEAD only. `deploy/cloudflare-realip.sh` is for running behind Cloudflare. Load test results are in
  `deploy/ORACLE-CLOUD.md` ("Lots of visitors").
- **Removed videos:** with `YT_API_KEY` in `/etc/skilltoincome/linkcheck.env`, the weekly check replaces a removed
  YouTube video with the best working one on the same topic and language. Students see "New video · earlier
  one removed". The original comes back automatically when it works again. State is kept in
  `status/replacements.json`, and the email lists replaced, restored and still-broken links.
  Try the search by hand: `YT_API_KEY=... node tools/links.js --find "Python loops" en`.

## Full audit, security and GitHub setup (version 15, 22 Nov 2026)

- **Links:** all 1,820 links checked.
  - 1,469 YouTube videos and playlists play.
  - All 110 GitHub repositories exist.
  - 177 other websites respond.
  - Moved and fixed: the Claude prompt-engineering guide (now on platform.claude.com) and the Edube Python course page.
- **Redundancy:**
  - 57 topics showed the same video as their module. The copy under the topic is now hidden, and the video counts are corrected.
  - Removed an unused style and an old helper script.
- **Security:**
  - The page carries its own Content-Security-Policy (works on GitHub Pages too).
  - Fonts are served from the site (no Google request).
  - nginx sends HSTS, COOP and CORP headers.
  - `setup.sh` accepts only a valid domain name.
  - The weekly job runs with memory and CPU limits.
  - Router fix: `#constructor` and similar built-in names no longer cause an error.
  - The saved plan value is whitelisted.
- **Validator (`tools/check.js`):**
  - rejects HTML and `javascript:` addresses anywhere in the data (only course notes may use simple bold text and https links)
  - checks every video for an https address, a title and a channel
  - catches repeated modules and topics, and topics without a description
- **Accessibility:** colour contrast fixed in light and dark mode, and heading order fixed. The axe check shows 0 problems on 6 pages.
- **GitHub:**
  - MIT + CC BY 4.0 licences, `.gitignore` (keeps secrets out), `.nojekyll`
  - workflows: data check on every change, and the weekly link check (with video replacement via the `YT_API_KEY` secret)
  - broken-link issue form, `CONTRIBUTING.md`, `SECURITY.md`
- **Guides:** `DEPLOY-GITHUB.md` (new) and `deploy/ORACLE-CLOUD.md` (rewritten step by step). Oracle's free Arm limit is
  now 2 OCPU / 12 GB; the guide uses 1 OCPU / 6 GB and explains idle-server reclaim.

## Topic videos (version 16, 22 Nov 2026)

- 450 topics (all 251 in the 12 branch and Cloud courses, plus 199 elsewhere) had nothing to click except the module
  video. `js/data/extra-topic-videos.js` now adds **375 picked videos (215 English, 160 Hindi) for 243 of them**.
- How the videos were picked:
  - YouTube search, with topic words required in the title.
  - Length 2–75 minutes, and enough views.
  - No Shorts, news, hype or exam-coaching videos.
  - The spoken language was confirmed from YouTube's auto-captions.
  - Every pick was then reviewed by hand, and 124 off-topic ones were rejected.
- **Every topic now has something to click.** A topic without its own video shows "Search YouTube" buttons
  (English + हिन्दी) for that exact topic. Topics with their own videos: 803 → 1,046 of 1,258.
- Still to do: own videos for the rest of the Power & EV, PLC, CAD, CAE, Manufacturing, Civil CAD, Structural
  and BIM topics. YouTube limited the automatic checks partway through, so those topics use the search buttons for now.

## Practice and interview questions for every course (version 17, 22 Nov 2026)

- **Every topic** in all 34 courses now has a "Practice questions" list under it (2,601 questions). Tap it to open. No answers on purpose: learners try first.
- **New "Interview" tab** in every course, with three lists and jump buttons:
  - **Common interview programs** (504 in all): the programs interviewers ask you to write. Coding courses get classic programs (reverse a string, LRU cache, SQL second-highest salary, Verilog FSM); other courses get the scripts their jobs use (AutoLISP, ABAP, Pine Script, Dynamo, G-code, ladder logic).
  - **Practical tasks asked in interviews** (342 in all): debug this, design that, explain your work.
  - **Interview questions for the whole course** (670 in all), plus the course's free practice sites.
- Some programs also appear in topic lists on purpose: topic lists are for learning, the Interview tab is for revising before an interview.
- **551 questions and programs link to the real problem** on a free practice site (LeetCode free problems, Exercism, HDLBits, Learn Git Branching, SauceDemo, the-internet, OverTheWire, PortSwigger, DataLemur), where learners write and run their code. Links open after the leave-site warning.
- Data: `js/data/questions.js` (`QBANK`). A question is text, or `[text, link]`.
- `node tools/check.js` now checks: every course has at least 15 questions, 8 programs and 8 tasks, every topic has questions, nothing repeats between the three lists, no unknown topics, no repeats, no HTML, links only https and only to the sites above. `tools/links.js` checks these links every week too.
- Course tabs: at most 4 on a phone. "What next" joins "Certificates"; for DSA and AI Tools, "Certificates" joins "Projects". Old links like `#dsa:certs` open the tab that now holds it.

## Job programs follow the right course levels (version 19, 22 Nov 2026)

- A phase can now use **only some levels** of a course: `parts:{testing:[1,2]}` means levels 1 to 2. The card shows "Levels 1–2 of 9", counts only those topics and opens level 1 directly. The roadmap download lists only those levels. `tools/check.js` checks the ranges and that no level is planned twice in one program.
- **QA Automation / SDET** now follows the Testing course level by level: phase 1 testing basics + Java (levels 1–3) + SQL (levels 1–2); phase 2 Playwright and Selenium; phase 3 API, Appium and framework design; phase 4 CI/CD, AI and MCP, career, DSA basics and Placement. DevOps & Cloud and AI with Projects are no longer in it (the Testing course already teaches CI/CD and AI/MCP for testers).
- Other programs cleaned the same way:
  - SDE and Full Stack: only DevOps levels 1–3 (Linux, CI/CD, Docker).
  - Data Analyst: AI levels 2–3 (data skills, ML) plus Claude levels 1–3, not deep learning and agents.
  - AI/ML: DSA levels 1–3 (100 problems); DevOps levels 1–4.
  - Mobile: Java levels 1–3; choose Android **or** iOS; Full Stack levels 2–4 (backend, database, auth); DSA levels 1–4.
  - Cloud/DevOps: GitHub and Linux first, Cloud course added, Full Stack removed, Cyber levels 2–3 only.
  - Cyber Security: Linux and networking first, Cloud course for cloud security, Full Stack levels 2–4, no DSA phase.
  - Electrical: Cloud course removed; Power/EV split across phases 1 and 3 with embedded basics.
  - Mechanical and Civil: Git/GitHub course removed (not used in those jobs; portfolio is in Placement).
- Program hours now handle courses timed in minutes per day.

## Only what each job needs (version 20, 22 Nov 2026)

- A phase can now list several level ranges of one course: `parts:{placement:[[1,1],[3,5]]}` = levels 1 and 3–5.
- **Data structures only where the job asks for them:**
  - SDE: full DSA course
  - Full Stack, AI/ML, Mobile: DSA levels 1–3 (75–100 problems)
  - SDET: DSA levels 1–2 plus the Testing course's interview programs ("50 easy coding problems", for product-company rounds)
  - ECE: "50 easy coding problems" for IT company tests, no DSA course
  - Data, DevOps, Cyber, EEE, Mechanical, Civil: no DSA. DevOps gets "Scripting programs in Python and Bash" instead.
- **No repeated levels:**
  - SDE uses C++ or C (choose one) without their DSA levels, and Java without its DSA level, because the DSA course covers it.
  - Data Analyst skips the Data course's SQL level (the SQL course covers it).
  - AI/ML skips the AI course's Python and data levels and the Data course's Excel and dashboards.
  - Full Stack drops Python (JavaScript is its language).
- **Placement without CS core subjects** (OS, DBMS, networks) for Data, Cyber (it gets OS and networks in phase 1), EEE, Mechanical and Civil.
- Lighter phases: ECE phase 1 (Python levels 1–2, Git levels 1–3); Cyber phase 1 (Python levels 1–3) and the Security core phase now get 3 months; Mobile phase 1 is Java basics and OOP only.
- The C, C++ and Java courses keep their own data-structures levels for people who study those courses on their own; programs skip those levels.

## Clearer course and program list (version 21, 22 Nov 2026)

- In Chrome and Edge (version 135 and later), the "Choose a course / program" list is now easy to scan:
  - group names are small grey CAPITALS with a line above each group
  - each course is a row with its colour dot, its name in the easy-to-read Atkinson Hyperlegible font, and its days on the right
  - the open course is highlighted with a ✓
- It is still a normal `<select>`: keyboard, screen readers and phones work as before. Firefox and Safari show their usual list with the same text ("Name · 75 days").
- The closed box shows the name on one line, clear of the arrow.

## Built to grow on GitHub (version 22, 22 Nov 2026)

- **GitHub only:** the code, the free website (GitHub Pages), the check on every pull request and the weekly link check
  all run on GitHub. The Oracle server is now an optional extra.
- **`GOOD-FIRST-ISSUES.md`:** about 2,400 small tasks made from the data (topics that need an English or Hindi video,
  topics with fewer than 3 practice questions, interview programs without a free practice link). `tools/todo.js`
  makes it; the weekly job refreshes it.
- **Issue forms:** add or improve a video, add questions, wrong or outdated content, broken link. Also a pull request
  checklist and `CODE_OF_CONDUCT.md`, so GitHub's "Community standards" page is all green.
- **`js/data/questions.js` has one question per line** (it was one very long line), so pull requests are easy to
  review and rarely clash. Same data; the checker and tests are unchanged.

## Visitor count and name in header/footer (version 23, 23 Nov 2026)

- **Visitor count:** `js/stats.js` sends one hit per course or program page to GoatCounter (free, open source, no
  cookies, no personal data, so no cookie banner is needed). It counts only on `vamsipujitha-lab.github.io`, never on
  a laptop copy, in tests, or for automated browsers. The footer shows the total ("1,234 visits") once "Allow adding
  visitor counts on your website" is ticked in GoatCounter. Dashboard: https://skilltoincome.goatcounter.com
- To stop counting your own visits on a browser, open the site once with `#toggle-goatcounter` at the end of the
  address (do it again to undo).
- The page's security policy allows only `https://skilltoincome.goatcounter.com` for the count (no outside scripts).
- **"Vamsi Pujitha"** now appears once under the title and in the footer bar, instead of the faint watermark across the page.
