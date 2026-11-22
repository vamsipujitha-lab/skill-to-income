# Put Skill to Income Academy on GitHub (free website + weekly link check)

GitHub keeps the code safe. It also gives a free website (GitHub Pages), checks every change, and runs the
weekly link check for free. **This is all you need**: no server. (A server on Oracle Cloud is an optional extra later;
see `deploy/ORACLE-CLOUD.md`.)

Time: about 30 minutes the first time.

---

## Part 1 – One-time setup on your laptop

1. **Make a GitHub account** at github.com (free). Turn on two-factor sign-in: profile picture → **Settings → Password and
   authentication → Enable two-factor authentication**.
2. **Install Git for Windows** from git-scm.com → Download → run the installer and keep every default.
3. **Tell Git who you are.** Open **PowerShell** (Start menu → type `PowerShell`) and run, with your details:
   ```
   git config --global user.name "Vamsi Pujitha"
   git config --global user.email "the-email-you-used-on-github@example.com"
   ```

## Part 2 – Create the repository and upload the site

1. On github.com click **+** (top right) → **New repository**.
   - Repository name: `skill-to-income`
   - **Public** (free websites and the free Claude program need a public repository)
   - Do **not** tick "Add a README", ".gitignore" or "license" (the project already has them)
   - Click **Create repository**.
2. In PowerShell, run these one at a time (replace `<your-username>`):
   ```
   cd C:\Users\Admin\Documents\SkillToIncome
   if (Test-Path github-folder) { Rename-Item github-folder .github }
   git init
   git add .
   git commit -m "Skill to Income Academy first upload"
   git branch -M main
   git remote add origin https://github.com/<your-username>/skill-to-income.git
   git push -u origin main
   ```
   The first `git push` opens a browser window: click **Sign in with your browser** and approve.
3. Refresh the repository page: you should see the folders, `README.md`, `LICENSE` and `LICENSE-CONTENT`.
   Check that **no** `linkcheck.env` file (passwords) is listed. `.gitignore` keeps it out.

## Part 3 – Turn on the free website (GitHub Pages)

1. In the repository: **Settings → Pages**.
2. **Source:** "Deploy from a branch". **Branch:** `main`, folder `/ (root)` → **Save**.
3. Wait 1–2 minutes and refresh. The address appears at the top:
   `https://<your-username>.github.io/skill-to-income/`
4. Open it on your phone and laptop. Try `.../skill-to-income/#dsa` too.

## Part 4 – Turn on the automatic checks

The repository has two automatic jobs in `.github/workflows/`:

| Job | When | What it does |
|---|---|---|
| **Check roadmap data** | Every upload and every pull request | Runs `tools/check.js`. A red ✗ means something is wrong; it shows exactly what. |
| **Weekly link check** | Every Sunday 02:30 IST, or by hand | Tests all ~2,500 links, marks broken ones on the website, replaces removed YouTube videos (with a key), brings originals back |

1. **Settings → Actions → General → Workflow permissions:** choose **Read and write permissions** → **Save**
   (the weekly job saves its results back to the repository).
2. **Optional, for automatic video replacement:** get a free YouTube Data API key (steps in `deploy/ORACLE-CLOUD.md`,
   Step 10), then **Settings → Secrets and variables → Actions → New repository secret**:
   Name `YT_API_KEY`, Secret = your key → **Add secret**. The key stays hidden; nobody can read it back.
3. **Run the link check once now:** **Actions** tab → **Weekly link check** → **Run workflow** → **Run workflow**.
   It takes 5–10 minutes. When it shows a green ✓, open `status/link-report.json` in the repository to see the results.
   This is the full check with real status codes for every website.

## Part 5 – Protect the main branch (recommended once others contribute)

**Settings → Branches → Add branch ruleset** (or "Add rule"):
- Target: `main`
- Tick **Require a pull request before merging**
- Tick **Require status checks to pass** → add **check**
- **Create**.
Now nobody (including you by mistake) can put broken data on the live site.
If you prefer to keep pushing directly yourself, skip this part.

## Part 6 – Updating the site later

After you change files on your laptop:
```
cd C:\Users\Admin\Documents\SkillToIncome
node tools/check.js
git pull
git add .
git commit -m "Short note of what changed"
git push
```
- Run `git pull` first: the weekly job saves its results to GitHub every week, so get them before you push.
- The website updates by itself 1–2 minutes after `git push`.
- That is all. (Only if you also run the optional Oracle server: update it as in `deploy/ORACLE-CLOUD.md`.)

## Part 7 – Getting real contributors (for the free Claude for Open Source program)

The program wants proof that other people use and improve your project, for example **20+ outside contributors with
merged pull requests in 12 months**. Your GitHub account must also be at least 2 years old. To get there:
1. **Settings → General → Features:** keep **Issues** ticked. Under **About** (repository front page, ⚙):
   add a description, the website link and topics such as `roadmap`, `free-courses`, `placement`, `engineering`, `india`.
2. Turn tasks from `GOOD-FIRST-ISSUES.md` into GitHub issues (e.g. "Add a Hindi video for C++ → Templates"), 5–10 at a
   time, with the **good first issue** label. Sites like goodfirstissue.dev list them for new contributors.
   **Issues → Labels → New label:** add `video`, `questions` and `content` (the issue forms use them).
   The weekly job refreshes `GOOD-FIRST-ISSUES.md` by itself after pull requests are merged.
3. **Settings → General → Features:** tick **Discussions**, so learners can ask questions without opening issues.
4. In the repository's **Insights → Community standards**, every item should now be green (description, README,
   code of conduct, contributing, licence, security policy, issue templates, pull request template).
5. Share the repository with students, teachers and college groups; `CONTRIBUTING.md` tells them exactly how to help.
6. Review pull requests: the **Check roadmap data** job tells you if their change is safe before you merge.
7. Apply when you meet the rules: https://claude.com/contact-sales/claude-for-oss (acceptance is decided by Anthropic).

## Optional – Your own domain on GitHub Pages
**Settings → Pages → Custom domain** → type `learn.yoursite.in` → Save. At your domain seller, add a `CNAME` record
`learn` → `<your-username>.github.io`. Tick **Enforce HTTPS** when it becomes available.


## Limits to know
- GitHub Pages: site up to 1 GB (this site is about 1.5 MB), about 100 GB of downloads a month (a soft limit, roughly
  250,000 first visits). For more traffic later, add the optional Oracle server with Cloudflare, or Cloudflare Pages (free, connects to this same repository).
- GitHub Pages cannot send custom security headers. The page carries its own security policy (a `<meta>` tag in `index.html`).
