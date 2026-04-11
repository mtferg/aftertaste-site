# Aftertaste Website

The official website for Aftertaste - Your Ultimate Movie and TV Hub.

## Features

- Responsive design optimized for all devices
- Horizontal scrolling feature showcase
- Auto-advancing chef recommendation carousel
- Modern dark theme with cinema-inspired aesthetics
- Mobile-optimized navigation and content

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at `https://[your-username].github.io/aftertaste-site`

## Local Development

To run this site locally:

1. Clone the repository
2. Open `index.html` in a web browser
3. Or use a local server like Live Server in VS Code

## File Structure

```
aftertaste-site/
├── index.html          # Main website file
├── assets/            # Images and static assets
│   ├── features/      # Feature screenshots
│   ├── chef/          # Chef recommendation images
│   └── ...            # Other assets
├── .github/
│   └── workflows/
│       └── deploy.yml # GitHub Pages deployment
└── README.md          # This file
```

## Technologies Used

- HTML5
- CSS3 (Tailwind CSS)
- Vanilla JavaScript
- GitHub Pages for hosting

## Universal Links

This site hosts the Apple App Site Association file (and an Android `assetlinks.json` placeholder) used to register `aftertaste.com` as a Universal Links / App Links host for the Aftertaste mobile app:

- `.well-known/apple-app-site-association` — JSON (no extension, served as `application/json`) listing the iOS app bundle ID and the path patterns that should open in the app instead of Safari. The path patterns must stay in lockstep with the `<universal-links>` block in `aftertaste-ui/src-cordova/config.xml`.
- `.well-known/assetlinks.json` — Android App Links manifest. Currently a placeholder; the SHA-256 cert fingerprint will be filled in once Android signing is set up.
- `.nojekyll` — disables Jekyll on GitHub Pages so the `.well-known` directory (a dotfile) is published verbatim.

The Apple Developer Team ID prefix in `apple-app-site-association` is currently the literal string `TEAMID` and **must be replaced with the real Team ID** before this is deployed to production. After deploy, validate with `curl -i https://aftertaste.com/.well-known/apple-app-site-association` and Apple's [App Search API Validation Tool](https://search.developer.apple.com/appsearch-validation-tool/).
