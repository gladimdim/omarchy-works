# Omarchy Works

The website for my open-source work for [Omarchy](https://omarchy.org) Linux:
SUPER DESKTOP, Omakey, the Omarchy AI Watch face, Omarchy plugins and the
Loca Deserta themes.

Live at **https://omarchy.dmytrogladkyi.com**.

## How it is built

Plain HTML, CSS and a little JavaScript. There is no build step: GitHub Pages
serves the `master` branch as it is.

- `index.html`: the page.
- `assets/site.css`: styles. The colors come from the Loca Deserta Omarchy
  themes, dark or light depending on your system setting.
- `assets/site.js`: copy buttons, scroll reveals, and the video, which plays
  only while it is on screen.
- `assets/img/`, `assets/media/`: screenshots and the clip, all from the
  projects themselves.
- `assets/social-card.jpg`: the link preview image for X, Bluesky, Mastodon,
  LinkedIn, Slack and others. Its source is `tools/social-card.html`;
  re-render it with `tools/render-social-card.sh` (needs Chromium and
  ImageMagick).

## Run it locally

```bash
python3 -m http.server 8742
```

Then open http://localhost:8742.

## Custom domain

`CNAME` sets `omarchy.dmytrogladkyi.com`. Point a DNS `CNAME` record for
`omarchy` at `gladimdim.github.io`, then turn on **Enforce HTTPS** in the
repository's Pages settings once the certificate is issued.
