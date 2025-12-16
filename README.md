# marc.q1x.xyz

Static one-page profile card for Marc built with Quoralinex (Q1X) branding tokens. Deployable on Cloudflare Pages without a build step.

## Structure
- `index.html` – one-page profile using group theme tokens.
- `assets/group-theme.css` – vendored Quoralinex design tokens (light/dark).
- `assets/styles.css` – layout and component styles referencing only tokens.
- `assets/app.js` – sets the current year in the footer.
- `robots.txt` and `sitemap.xml` – basic discoverability assets.
- `_headers` – security headers for Cloudflare Pages.

## Deployment (Cloudflare Pages)
- Framework preset: **None**
- Build command: *(leave blank)*
- Output directory: `.`

## Notes
- Favicon is intentionally omitted; add manually later if desired.
