# Put Skill to Income Academy on Oracle Cloud (free server)

The site is plain files served by nginx: no login and no database. Each visitor's progress stays in their own browser.
A scheduler on the same server checks every link once a week. It marks broken links on the site and, with a YouTube
key, swaps removed videos for good ones.

**Do `DEPLOY-GITHUB.md` first.** The server copies the site from your GitHub repository, so later updates are one command.

Time: about 45 minutes the first time. Cost: ₹0 within Oracle's Always Free limits.

---

## Step 1 – Create the Oracle Cloud account (one time)

1. Go to **oracle.com/cloud/free** → **Start for free**.
2. Fill in your details. **Home region: choose an Indian region (Mumbai or Hyderabad)**. It can never be changed later,
   and free servers can only be made in the home region.
3. Add a debit/credit card for identity verification. Oracle places a small temporary hold; it is not charged.
4. Wait for the "account is ready" email, then sign in at **cloud.oracle.com**.

### Recommended: upgrade to Pay As You Go (still ₹0)
Oracle can **reclaim (take back) free servers that look idle**: under 20% CPU, network and memory for 7 days.
A quiet website can look idle. Oracle's docs say Always Free resources are not charged after an upgrade to a paid
account, and users widely report that upgraded accounts are not reclaimed.
- **Billing & Cost Management → Upgrade and Manage Payment → Pay As You Go**.
- Then protect yourself: **Billing → Budgets → Create Budget**, amount **₹100** a month, alert at 1% to your email.
  You hear immediately if anything ever starts to cost money.
- Even if you skip this, your site is safe: the code is on GitHub (and GitHub Pages keeps serving it), and a new
  server takes about 20 minutes with this guide.

## Step 2 – Create the server (VM)

1. Menu ☰ → **Compute → Instances → Create instance**.
2. **Name:** `skilltoincome`.
3. **Image and shape → Edit:**
   - **Image:** Canonical **Ubuntu 24.04** (this guide uses Ubuntu; Oracle Linux also works with the same scripts).
   - **Shape:** Ampere → **VM.Standard.A1.Flex**, **1 OCPU, 6 GB memory**. That is plenty for this site and leaves free
     room (the free limit is 2 OCPU / 12 GB in total).
   - If Ampere says **"Out of capacity"**, try another *Availability domain*, try again later, or choose
     **VM.Standard.E2.1.Micro** (AMD, always free, 1 GB). It is smaller but still fine for this site.
4. **Networking:** "Create new virtual cloud network" and "Create new public subnet". Tick **Assign a public IPv4 address**.
5. **Add SSH keys:** choose **Generate a key pair for me** → **Save private key**. Keep the downloaded `.key` file safe;
   it is the only way into the server. Move it to e.g. `C:\Users\Admin\.ssh\oracle-skilltoincome.key`.
6. **Boot volume:** leave the default (about 50 GB, free).
7. Click **Create**. After 1–2 minutes the status is **Running**. Copy the **Public IP address** (e.g. `140.238.x.x`).

## Step 3 – Open the web ports (one time)

On the instance page: **Primary VNIC → Subnet → Security Lists → Default Security List → Add Ingress Rules**.
Add two rules:

| Source CIDR | IP protocol | Destination port range |
|---|---|---|
| `0.0.0.0/0` | TCP | `80` |
| `0.0.0.0/0` | TCP | `443` |

(The setup script opens the same ports in the server's own firewall.)

## Step 4 – Connect to the server from Windows

1. Open **PowerShell**. Windows refuses keys that other users can read, so lock the key file first (one time):
   ```
   icacls C:\Users\Admin\.ssh\oracle-skilltoincome.key /inheritance:r
   icacls C:\Users\Admin\.ssh\oracle-skilltoincome.key /grant:r "$($env:USERNAME):(R)"
   ```
2. Connect (user is `ubuntu` on Ubuntu, `opc` on Oracle Linux):
   ```
   ssh -i C:\Users\Admin\.ssh\oracle-skilltoincome.key ubuntu@<PUBLIC-IP>
   ```
   Type `yes` the first time. You are now on the server; the prompt looks like `ubuntu@skilltoincome:~$`.
3. Update the server once:
   ```
   sudo apt update && sudo apt upgrade -y
   ```
   If it asks to restart services, press Enter. If it says a reboot is needed: `sudo reboot`, wait a minute, connect again.

## Step 5 – Get the site and install it

On the server:
```
git clone https://github.com/<your-username>/skill-to-income.git
cd skill-to-income
sudo bash deploy/setup.sh
```
With your own domain, use `sudo bash deploy/setup.sh learn.yoursite.in` instead (see Step 7).

`setup.sh` does everything:
- installs nginx and Node.js 20, and copies the site to `/var/www/skilltoincome`
- sets up compressed files, caching, security headers and the per-visitor limits
- opens ports 80/443 in the server firewall
- turns on the weekly link check and runs the first one in the background

At the end it prints the address. **Open `http://<PUBLIC-IP>/`** on your phone and laptop.

> Same server as the SKIT Quiz site? Use a sub-domain (`sudo bash deploy/setup.sh learn.yoursite.in`) so the two
> sites do not fight over the plain IP address.

## Step 6 – Check that everything runs

```
systemctl status nginx --no-pager                       # should say "active (running)"
systemctl list-timers skilltoincome-linkcheck.timer      # next weekly check time
journalctl -u skilltoincome-linkcheck -n 20 --no-pager   # result of the first link check (after ~5 min)
curl -sI http://localhost/ | head -5                     # "200 OK" and security headers
```

## Step 7 – Optional: your own domain and HTTPS (recommended)

1. Buy a domain (any seller), e.g. `yoursite.in`.
2. In its DNS settings add an **A record**: name `learn`, value `<PUBLIC-IP>`. Wait 5–30 minutes.
3. On the server:
   ```
   cd ~/skill-to-income && sudo bash deploy/setup.sh learn.yoursite.in
   sudo apt install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d learn.yoursite.in      # enter your email, agree, choose redirect to HTTPS
   sudo certbot renew --dry-run                   # checks that automatic renewal works
   ```
   (Oracle Linux: `sudo dnf install -y oracle-epel-release-el$(rpm -E %rhel) && sudo dnf install -y certbot python3-certbot-nginx`.)
4. Open `https://learn.yoursite.in`. The certificate renews by itself every few months.
5. Search engines: `setup.sh` writes `sitemap.xml` for your domain. Add the site in **Google Search Console** and
   submit `https://learn.yoursite.in/sitemap.xml`.

## Step 8 – Optional: Cloudflare in front (free; for big traffic spikes and attack protection)

1. Add your domain at cloudflare.com (Free plan) and change the domain's name servers to the two Cloudflare gives you.
2. In Cloudflare DNS, the `learn` A record → `<PUBLIC-IP>` with the **orange cloud ON**. SSL/TLS mode: **Full (strict)**
   (after Step 7).
3. On the server, so the per-visitor limit sees real visitors and not Cloudflare's servers:
   ```
   sudo bash ~/skill-to-income/deploy/cloudflare-realip.sh
   ```
   Run it again every few months.

## Step 9 – Optional: email when links break or videos are replaced

```
sudo nano /etc/skilltoincome/linkcheck.env      # fill SMTP_*, MAIL_FROM, MAIL_TO, SITE_URL; Ctrl+O Enter, Ctrl+X
sudo systemctl start skilltoincome-linkcheck    # run a check now to test
```
Oracle **Email Delivery** is free (create SMTP credentials and an approved sender), or use Gmail with an App Password.
You get an email only when something changed: a link broke, a video was replaced, an original came back, or a check
could not run properly.

## Step 10 – Optional: replace removed YouTube videos automatically (free)

When a video is removed from YouTube, the weekly check puts the best working video on the same topic and language in
its place. Students see **"New video · earlier one removed"**. If the old video comes back, it is shown again.
1. console.cloud.google.com → create a project.
2. **APIs & Services → Library** → enable **YouTube Data API v3**.
3. **Credentials → Create credentials → API key** → **Restrict key** → API restrictions: YouTube Data API v3 → Save.
4. On the server:
   ```
   sudo nano /etc/skilltoincome/linkcheck.env     # set YT_API_KEY=your-key   (MAX_SEARCHES=40 is fine)
   cd ~/skill-to-income && YT_API_KEY=your-key node tools/links.js --find "Python loops" en   # shows its pick
   sudo systemctl start skilltoincome-linkcheck
   ```
How it picks a video:
- It must be public, playable in India, not age-restricted and 4–180 minutes long (no Shorts).
- It must be in the right language, with topic words in its title.
- It needs at least 10,000 views (5,000 for Hindi), must not already be used on the site, and must actually play.
- Among the videos that pass, it prefers the same teacher as before, then more views and likes.
- A video that broke once is never picked again.

Free quota: 10,000 units a day. One weekly run uses at most about 4,000, so the same key can also be used by the GitHub job.

## Updating the site

On your laptop: change files → `node tools/check.js` → `git push` (see `DEPLOY-GITHUB.md`). Then on the server:
```
ssh -i C:\Users\Admin\.ssh\oracle-skilltoincome.key ubuntu@<PUBLIC-IP>
cd ~/skill-to-income && git pull && sudo bash deploy/update.sh
```
`update.sh` refuses to publish if `tools/check.js` finds problems. It keeps the link-check results and gives every
new version fresh file addresses, so visitors never see a mix of old and new files.

## Keeping the server healthy

| What | How often | Command |
|---|---|---|
| Security updates | Ubuntu installs these by itself daily. Do a full update monthly | `sudo apt update && sudo apt upgrade -y` |
| Is the site up? | Always | Free uptime monitor (e.g. UptimeRobot, every 5 minutes, email alert) |
| Disk space | Monthly | `df -h /` (the site uses about 5 MB; the disk is ~45 GB) |
| Link-check log | After the email | `journalctl -u skilltoincome-linkcheck -n 50 --no-pager` |
| Backup | Nothing to do | Code is on GitHub; link results rebuild on the next weekly run |

Keep the `.key` file private, never share it, and never paste passwords into files that go to GitHub.

## When something goes wrong

| Problem | Fix |
|---|---|
| Browser can't reach the site | Step 3 rules missing; or run `sudo bash deploy/setup.sh` again (re-opens the firewall) |
| `ssh: Permission denied (publickey)` | Wrong user (`ubuntu` vs `opc`) or wrong key file; redo Step 4.1 |
| `UNPROTECTED PRIVATE KEY FILE` | Run the two `icacls` commands in Step 4.1 |
| Page shows old version | `cd ~/skill-to-income && git pull && sudo bash deploy/update.sh` |
| `update.sh` says "Fix the issues above first" | Fix what `node tools/check.js` lists, push, pull again |
| certbot fails | DNS A record not pointing at the server yet; wait and retry |
| "Out of capacity" creating the VM | Other availability domain, later, or the AMD Micro shape |

## Lots of visitors

The site is plain files, so one small free server handles a lot. Tested with this nginx setup on a 2-CPU machine:

| Test | Result |
|---|---|
| 1,000 people at once on the home page | about 23,000 requests a second, 43 ms average wait |
| 100 at once on the largest file (questions, 80 KB compressed) | about 700 a second (limited by network, not CPU) |
| Memory in the browser after 600 page switches | flat (no leak) |
| One address sending a flood | stopped with "429 Too Many Requests"; everyone else unaffected |

A first visit downloads about 390 KB (compressed, including the fonts and every practice question). Later visits reuse
cached files and download about 5 KB. Oracle's free tier includes 10 TB of outgoing data a month: roughly 25 million
first visits.
Already set up:
- ready-compressed files
- long browser caching (new file addresses for each update)
- 4,096 connections per worker
- a per-visitor limit of 30 requests a second (bursts up to 120)
- only GET/HEAD requests accepted
- security headers, including a strict content policy and HTTPS-only once certbot has run

For bigger spikes, add Cloudflare (Step 8).
