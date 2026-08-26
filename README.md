# Groove Kitchens Website

Angular website for Groove Kitchens, covering kitchen design, cabinetry, renovations, and installation across Auckland.

## Development

Install dependencies and start the local development server:

```bash
npm ci
npm start
```

The app runs at `http://localhost:4200/`.

## Checks

```bash
npm run build
npm run lint
npm run format:check
npm test -- --watch=false --browsers=ChromeHeadless
```

## Production

Netlify builds from the `master` branch using `npm run build` and publishes `dist/groove-kitchens-website/browser`.
