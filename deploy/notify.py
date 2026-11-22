"""Email the admin after the link check, only when something needs attention or changed:
new broken links, videos replaced automatically, original videos that came back, or a run where too many
links failed at once (likely a network problem).
Settings come from /etc/skilltoincome/linkcheck.env (loaded by systemd). No settings = no email."""
import json, os, smtplib, ssl, sys
from email.message import EmailMessage

env = os.environ.get
if not (env("SMTP_HOST") and env("MAIL_TO") and env("MAIL_FROM")):
    print("Email not configured; skipping."); sys.exit(0)
rep = json.load(open(sys.argv[1], encoding="utf-8"))
new = rep.get("newlyBroken", [])
replaced, restored = rep.get("replacedNow", []), rep.get("restored", [])
newset = set(new)
stuck = [x for x in rep.get("noReplacement", []) if x.get("url") in newset]
if not (new or replaced or restored or rep.get("suspicious")):
    print("Nothing new to report."); sys.exit(0)

site = env("SITE_URL", "")
lines = [f"Link check on {rep['checkedIST']}: {rep['total']} links, {rep['brokenCount']} broken, "
         f"{rep['unreachableCount']} could not be reached, {rep.get('replacementsInUse', 0)} replacement videos in use.", ""]
if rep.get("suspicious"):
    lines += ["WARNING: too many links failed at once. This is usually the server's internet, not the links.",
              "The website was NOT changed. Check the server, then run: sudo systemctl start skilltoincome-linkcheck", ""]
if replaced:
    lines += ["VIDEOS REPLACED AUTOMATICALLY (students see 'New video - earlier one removed'):"]
    for r in replaced:
        lines += [f"- {r.get('label', '')}", f"  old: {r['url']}", f"  new: {r['by']}  ({r.get('title', '')})", ""]
if restored:
    lines += ["ORIGINAL VIDEOS BACK (replacement removed, original shown again):"]
    for r in restored:
        lines += [f"- {r.get('label') or r['url']}", f"  {r['url']}", ""]
broken_links = [u for u in new if u not in {r["url"] for r in replaced}]
if broken_links:
    lines += ["NEWLY BROKEN, NOT REPLACED:"]
    why = {x["url"]: x.get("why", "") for x in stuck}
    for u in broken_links:
        b = rep["seenBroken"].get(u, {})
        lines += [f"- {b.get('label') or u}", f"  {u}", f"  Problem: {b.get('detail', '')}" + (f" | {why[u]}" if why.get(u) else ""),
                  f"  Used in: {'; '.join(b.get('where', [])[:3])}", ""]
    lines += ["Students see 'link not working' (or a YouTube search for videos).",
              "Fix: replace the link in js/data/*.js, run node tools/check.js, upload, then sudo bash deploy/update.sh.", ""]
if site: lines.append(f"Full report: {site.rstrip('/')}/status/link-report.json")

parts = [f"{len(replaced)} video(s) replaced"] if replaced else []
if restored: parts.append(f"{len(restored)} original(s) back")
if broken_links: parts.append(f"{len(broken_links)} link(s) broke")
msg = EmailMessage()
msg["Subject"] = "[Skill to Income] " + (", ".join(parts) if parts else "link check could not run properly")
msg["From"], msg["To"] = env("MAIL_FROM"), env("MAIL_TO")
msg.set_content("\n".join(lines))
port = int(env("SMTP_PORT", "587"))
with smtplib.SMTP(env("SMTP_HOST"), port, timeout=30) as s:
    s.starttls(context=ssl.create_default_context())
    if env("SMTP_USER"): s.login(env("SMTP_USER"), env("SMTP_PASS", ""))
    s.send_message(msg)
print(f"Email sent to {env('MAIL_TO')}.")
