#!/usr/bin/env bash
# Run by systemd (skilltoincome-linkcheck.service) as user s2i. Checks every link, updates the page
# status, then emails the admin if a link newly broke (only when email is set up in linkcheck.env).
set -uo pipefail
SITE="${SITE:-/var/www/skilltoincome}"
node "$SITE/tools/links.js" --report "$SITE"
code=$?
python3 /opt/skilltoincome/notify.py "$SITE/status/link-report.json" || echo "Email not sent (see message above)"
exit $code
