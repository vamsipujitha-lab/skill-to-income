#!/usr/bin/env bash
# Copy a new version of the site to the server folder. Run after uploading the updated project:
#   sudo bash deploy/update.sh
# Keeps the link-check results (js/data/link-status.js and status/) that the scheduler wrote.
set -euo pipefail
[ "$(id -u)" -eq 0 ] || { echo "Run with sudo: sudo bash deploy/update.sh"; exit 1; }
SRC="$(cd "$(dirname "$0")/.." && pwd)"
SITE=/var/www/skilltoincome
cd "$SRC" && node tools/check.js | tail -1 | grep -q "No issues found" || { node tools/check.js; echo "Fix the issues above first."; exit 1; }
mkdir -p "$SITE"
rsync -a --delete --exclude ".git" --exclude ".github" --exclude "deploy/" --exclude "dist/" \
  --exclude "js/data/link-status.js" --exclude "status/" "$SRC"/ "$SITE"/
[ -f "$SITE/js/data/link-status.js" ] || cp "$SRC/js/data/link-status.js" "$SITE/js/data/link-status.js"
mkdir -p "$SITE/status"
# Cache-busting: CSS/JS are cached for 30 days, so each version gets its own address (?v=<hash of the files>).
V=$(cat "$SITE"/css/*.css "$SITE"/js/app.js $(ls "$SITE"/js/data/*.js | grep -v link-status) | sha1sum | cut -c1-10)
sed -i -E "s#(href=\"css/[^\"?]+\.css|src=\"js/[^\"?]+\.js)\"#\1?v=$V\"#g" "$SITE/index.html"
# Speed: a ready-compressed copy of every page file (nginx "gzip_static" sends it as-is). Old copies are removed first.
find "$SITE" -name "*.gz" -delete
find "$SITE" -type f \( -name "*.js" -o -name "*.css" -o -name "*.html" -o -name "*.svg" -o -name "*.xml" \) ! -path "*/status/*" ! -name "link-status.js" -exec gzip -9 -k -f {} \;
# Search engines: add a sitemap when the site has a domain (saved by setup.sh)
if [ -s /etc/skilltoincome/domain ]; then
  D=$(cat /etc/skilltoincome/domain); SCHEME=http; [ -d "/etc/letsencrypt/live/$D" ] && SCHEME=https
  printf '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n<url><loc>%s://%s/</loc><changefreq>weekly</changefreq></url>\n</urlset>\n' "$SCHEME" "$D" > "$SITE/sitemap.xml"
  printf 'Sitemap: %s://%s/sitemap.xml\n' "$SCHEME" "$D" >> "$SITE/robots.txt"
fi
chown -R root:root "$SITE" && chmod -R a+rX "$SITE"
chown s2i:s2i "$SITE/js/data/link-status.js" "$SITE/status"
command -v restorecon >/dev/null && restorecon -R "$SITE" || true
install -d /opt/skilltoincome
install -m 755 "$SRC/deploy/run-linkcheck.sh" /opt/skilltoincome/run-linkcheck.sh
install -m 644 "$SRC/deploy/notify.py" /opt/skilltoincome/notify.py
install -m 644 "$SRC/deploy/systemd/skilltoincome-linkcheck.service" "$SRC/deploy/systemd/skilltoincome-linkcheck.timer" /etc/systemd/system/
systemctl daemon-reload
[ "${1:-}" = "--no-reload" ] || systemctl reload nginx
echo "Site updated in $SITE"
