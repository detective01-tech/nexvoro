# Hi Tech Global Solutions — React Site

A responsive, multi-page React rebuild of the Hi Tech Global Solutions site (Home, About, Contact, FAQ,
Privacy Policy, Terms of Service), built with Vite + React Router. Colors, type scale, radii, and
spacing come from `DESIGN.md`.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

`npm run build` outputs static files to `dist/`, which you can deploy to any static host
(Vercel, Netlify, Cloudflare Pages, S3, etc.).

## Structure

```
src/
  components/   Header, Footer, ScrollToTop, shared icon set
  pages/        Home, About, Contact, FAQ, PrivacyPolicy, TermsOfService, NotFound
  constants.js  Phone numbers + nav links used across pages
  index.css     Design tokens (colors, type, spacing, radius) + global styles
```

Routing is handled by `react-router-dom`. All internal links (nav, footer, in-page CTAs) point to
real routes, so the pages are linked together.

## Notes

- The two placeholder photos on the About page are from Unsplash — swap in your own team/store
  photography before shipping.
- The Contact form is front-end only (no backend wired up); `onSubmit` currently just shows a
  confirmation message. Point it at your form endpoint or API of choice.
- The homepage footer includes the "independent, not affiliated with carriers" disclosure copy
  from the original design; keep this visible if the business relationship it describes is
  accurate for your use.
