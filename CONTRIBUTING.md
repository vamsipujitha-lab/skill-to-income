# Contributing to Skill to Income Academy

Thank you for helping students. Small fixes are welcome: a broken link, a better video, a missing topic.

## Start here
- **Pick a task:** [GOOD-FIRST-ISSUES.md](GOOD-FIRST-ISSUES.md) lists hundreds of small tasks made from the data:
  topics that need an English or Hindi video, topics that need more practice questions, and interview programs that
  need a free practice link.
- **No coding?** Open an issue with one of the forms: "Broken link or wrong video", "Add or improve a video",
  "Add practice or interview questions" or "Wrong or outdated content".
- Please be kind: see [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Change the content
1. Fork the repository and create a branch.
2. Edit the data in `js/data/` (courses in `syllabus.js` / `courses.js` / `more-courses.js` / `branch-courses.js`,
   videos in `topic-videos.js` / `module-videos.js` / `more-videos.js`, programs in `programs.js` / `branch-programs.js`).
3. Run the checker. It must say **No issues found**:
   ```
   node tools/check.js
   ```
4. Open `index.html` in your browser and look at the page you changed.
5. Open a pull request saying what you changed and why.

## Add practice or interview questions
All questions are in `js/data/questions.js`, one per line. Each course has four lists:
- `"full"`: interview questions for the whole course
- `"prog"`: programs interviewers ask you to write
- `"tasks"`: practical tasks (debug this, design that)
- `"topics"`: questions for one roadmap topic; the topic name must match the course exactly

A question is plain text, or `["text", "https://..."]` when a free practice site has the same problem.
Rules: **questions only, never answers**; links only to free practice sites (the checker lists the allowed sites);
no repeats. Then run `node tools/check.js`.

The task list `GOOD-FIRST-ISSUES.md` refreshes itself every week after changes are merged.

## Rules for videos and links
- Free, public and playable in India. YouTube links look like `https://www.youtube.com/watch?v=XXXXXXXXXXX`.
- English videos must be in English, Hindi videos must actually be spoken in Hindi.
- About the topic, from a real teacher; no reaction videos, no Shorts, no paid-course adverts.
- Every video needs a title (`t`) and channel (`ch`). No HTML in any text (the checker refuses it).

## Licence
By contributing you agree that your code is released under the MIT licence and your content under CC BY 4.0
(see `LICENSE` and `LICENSE-CONTENT`).
