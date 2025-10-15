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
