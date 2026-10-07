#!/usr/bin/env bash
# Render tools/social-card.html to assets/social-card.jpg (1200x630) with headless Chromium.
set -euo pipefail
cd "$(dirname "$0")/.."
tmp="$(mktemp -d)"; trap 'rm -rf "$tmp"' EXIT
chromium --headless=new --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 \
  --virtual-time-budget=4000 --user-data-dir="$tmp/profile" \
  --screenshot="$tmp/card.png" "file://$PWD/tools/social-card.html" >/dev/null 2>&1
magick "$tmp/card.png" -crop 1200x630+0+0 +repage -strip -quality 86 assets/social-card.jpg
magick identify assets/social-card.jpg
