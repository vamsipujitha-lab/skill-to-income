#!/usr/bin/env bash
# Use this ONLY if the site is behind Cloudflare (orange cloud on). It tells nginx which addresses belong to
# Cloudflare, so the per-visitor limits and logs see the real visitor's address instead of Cloudflare's.
#   sudo bash deploy/cloudflare-realip.sh          (run again every few months; Cloudflare rarely changes the list)
set -euo pipefail
[ "$(id -u)" -eq 0 ] || { echo "Run with sudo"; exit 1; }
OUT=/etc/nginx/conf.d/00-cloudflare-realip.conf; TMP=$(mktemp)
{ echo "# Written by deploy/cloudflare-realip.sh on $(date -I). Cloudflare address list."
  for f in ips-v4 ips-v6; do
    curl -fsS --max-time 20 "https://www.cloudflare.com/$f" | tr -d '\r' | while read -r ip; do
      # Accept only well-formed address ranges
      if [[ "$ip" =~ ^[0-9.]+/[0-9]{1,2}$ || "$ip" =~ ^[0-9a-fA-F:]+/[0-9]{1,3}$ ]]; then echo "set_real_ip_from $ip;"; fi
    done
  done
  echo "real_ip_header CF-Connecting-IP;"; } > "$TMP"
n=$(grep -c set_real_ip_from "$TMP" || true)
[ "$n" -ge 10 ] || { echo "Could not download the Cloudflare list (got $n ranges). Nothing changed."; rm -f "$TMP"; exit 1; }
install -m 644 "$TMP" "$OUT"; rm -f "$TMP"
nginx -t && systemctl reload nginx && echo "Done: $n Cloudflare ranges trusted."
