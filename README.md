# Aftertaste Website

The official marketing site for Aftertaste — Your Ultimate Movie and TV Hub.
A single static page served from GitHub Pages at
[aftertaste.com](https://aftertaste.com/), plus two standalone legal pages.

## What's on the page

- **Noir one-sheet hero** — searchlights, drifting dust, a cherry neon "Now Showing" sign
- **The Feature Presentation** — a scroll-driven story built from live replicas of
  real in-app elements (feed card, score rings, taste-profile marquee, swipe deck),
  choreographed with GSAP + ScrollTrigger
- **Reviews marquee**, web-app CTA, contact, footer
- Easter eggs: type `noir` for noir mode, Konami code (or the footer link) for an intermission

Every animated section degrades to a static layout when JavaScript is unavailable,
GSAP fails to load, or the visitor prefers reduced motion.

## File structure

```
aftertaste-site/
├── index.html              # The whole marketing page (markup, JSON-LD, page JS)
├── privacy.html            # Legal page, self-contained styles
├── terms.html              # Legal page, self-contained styles
├── 404.html                # Forwards retired deep links to aftertaste.app
├── src/
│   ├── input.css           # Tailwind entry -> assets/tailwind.css
│   └── site.css            # Site styles (EDIT HERE) -> assets/site.css
├── scripts/build-site.js   # Stamps src/site.css into assets/site.css
├── assets/                 # Images, icons, built CSS
│   ├── app/                # Avatar + reaction art mirrored from the app
│   ├── icons/              # Favicons
│   └── og-card-source.html # Source for og-card.png; see the file header
└── .github/workflows/      # Pages deploy + CSS drift check
```

## Local development

There is no dev server — open `index.html` in a browser, or serve the directory
with anything static (`python3 -m http.server`, VS Code Live Server, etc.).

### Editing styles

`assets/site.css` and `assets/tailwind.css` are **generated**. Edit `src/site.css`
(or `src/input.css`) and rebuild:

```bash
npm run build
```

CI fails the PR if `assets/site.css` doesn't match a fresh build of `src/site.css`,
because GitHub Pages serves the committed file as-is and never runs a build.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which uploads the repo
verbatim to GitHub Pages. There is no build step in the deploy — commit the built
CSS.

## Universal Links (moved to aftertaste.app)

Universal / deep links no longer route through `aftertaste.com`. The web app host
`aftertaste.app` (the `aftertaste-ui` repo's Express server) now serves the
`apple-app-site-association` and `assetlinks.json` manifests and handles all
deep-link paths — links there render the real page in a browser and open the
native app when installed.

This repo keeps two related artifacts:

- `.nojekyll` — retained so any future dotfile directories publish verbatim on GitHub Pages.
- `404.html` — forwards old `aftertaste.com` deep-link paths (`/posts/*`, `/content/*`,
  `/lists/*`, `/users/*`, `/actor/*`, `/feed`, `/notifications`, `/chef`) to the same
  path on `https://aftertaste.app`, so stale shared links still work for humans. All
  other unknown paths render a simple not-found page.
