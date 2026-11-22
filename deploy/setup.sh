#!/usr/bin/env bash
# One-time setup of the Skill to Income Academy static site on an Oracle Cloud VM.
# Works on Oracle Linux 8/9 and Ubuntu 22.04/24.04 (Always Free shapes are fine).
#
#   sudo bash deploy/setup.sh                 # site answers on the server's public IP
#   sudo bash deploy/setup.sh learn.example.com   # site answers on that domain/sub-domain
#
# What it does: installs nginx + Node.js 20, copies the site to /var/www/skilltoincome,
# opens port 80 in the VM firewall, and turns on the weekly link-check scheduler.
set -euo pipefail
[ "$(id -u)" -eq 0 ] || { echo "Run with sudo: sudo bash deploy/setup.sh"; exit 1; }
DOMAIN="${1:-_}"
# Only a plain domain name (letters, digits, dots, dashes) is accepted: it goes into the nginx config.
if [ "$DOMAIN" != "_" ] && ! [[ "$DOMAIN" =~ ^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$ ]]; then
  echo "\"$DOMAIN\" is not a valid domain name (example: learn.example.com). Nothing changed."; exit 1; fi
SRC="$(cd "$(dirname "$0")/.." && pwd)"
SITE=/var/www/skilltoincome
node_ok() { command -v node >/dev/null && node -e 'process.exit(+process.versions.node.split(".")[0]>=18?0:1)'; }

echo "== 1/5 Packages"
if command -v dnf >/dev/null; then
  dnf install -y nginx rsync python3 git policycoreutils-python-utils || dnf install -y nginx rsync python3 git
  if ! node_ok; then dnf module reset -y nodejs || true; dnf module enable -y nodejs:20 || true; dnf install -y nodejs; fi
elif command -v apt-get >/dev/null; then
  export DEBIAN_FRONTEND=noninteractive
  apt-get update -y && apt-get install -y nginx rsync python3 git curl ca-certificates
  if ! node_ok; then curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && apt-get install -y nodejs; fi
else echo "Unsupported OS (need dnf or apt-get)"; exit 1; fi
node_ok || { echo "Node.js 18+ is required and could not be installed"; exit 1; }

echo "== 2/5 Service user and site files"
id s2i >/dev/null 2>&1 || useradd --system --no-create-home --shell "$(command -v nologin || echo /sbin/nologin)" s2i
mkdir -p /etc/skilltoincome; if [ "$DOMAIN" != "_" ]; then echo "$DOMAIN" > /etc/skilltoincome/domain; fi
bash "$SRC/deploy/update.sh" --no-reload

echo "== 3/5 nginx"
DEF=""; if [ "$DOMAIN" = "_" ]; then DEF=" default_server"
  rm -f /etc/nginx/sites-enabled/default
  grep -q "default_server" /etc/nginx/nginx.conf && sed -i.bak 's/ default_server//g' /etc/nginx/nginx.conf
fi
# More visitors at the same time (distro default is 768-1024 connections per worker)
sed -i -E 's/worker_connections [0-9]+;/worker_connections 4096;/' /etc/nginx/nginx.conf
grep -q "worker_rlimit_nofile" /etc/nginx/nginx.conf || sed -i '0,/^worker_processes/s//worker_rlimit_nofile 16384;\nworker_processes/' /etc/nginx/nginx.conf
sed -e "s/__DOMAIN__/$DOMAIN/" -e "s/__DEFAULT__/$DEF/g" "$SRC/deploy/nginx/skilltoincome.conf" > /etc/nginx/conf.d/skilltoincome.conf
nginx -t
systemctl enable --now nginx && systemctl reload nginx

echo "== 4/5 Firewall (port 80 and 443 inside the VM)"
if command -v firewall-cmd >/dev/null && systemctl is-active --quiet firewalld; then
  firewall-cmd --permanent --add-service=http --add-service=https && firewall-cmd --reload
elif command -v iptables >/dev/null; then   # Oracle's Ubuntu images use iptables with a final REJECT rule
  for p in 80 443; do
    iptables -C INPUT -p tcp --dport $p -m state --state NEW -j ACCEPT 2>/dev/null || {
      pos=$(iptables -L INPUT --line-numbers | awk '/REJECT/{print $1; exit}'); pos=${pos:-1}
      iptables -I INPUT "$pos" -p tcp --dport $p -m state --state NEW -j ACCEPT; }
  done
  command -v netfilter-persistent >/dev/null && netfilter-persistent save || true
fi
command -v setsebool >/dev/null && setsebool -P httpd_can_network_connect 0 2>/dev/null || true

echo "== 5/5 Weekly link-check scheduler"
mkdir -p /etc/skilltoincome
[ -f /etc/skilltoincome/linkcheck.env ] || install -m 600 "$SRC/deploy/linkcheck.env.example" /etc/skilltoincome/linkcheck.env
systemctl daemon-reload
systemctl enable --now skilltoincome-linkcheck.timer
systemctl start --no-block skilltoincome-linkcheck.service   # first check now, in the background

IP=$(curl -s -m 5 https://ifconfig.me || echo "<public IP>")
echo
echo "Done. Open http://${DOMAIN/_/$IP}/"
echo "Remember: in the Oracle Cloud console, the VCN Security List must allow TCP 80 (and 443) from 0.0.0.0/0."
echo "Link check: runs every Sunday 02:30 IST. Status: systemctl list-timers skilltoincome-linkcheck.timer"
echo "Email alerts (optional): edit /etc/skilltoincome/linkcheck.env"
