# BPI — Building Plastics Inc.

Concept marketing site for **Building Plastics Inc.**, an employee-owned
wholesale surfacing & flooring distributor across the US Southeast (since 1963).

A New901 concept rebuild with a restrained, architectural design direction
(thin uppercase display type, warm near-black ground, red accent, full-bleed
material photography).

## Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS v4**
- **GSAP** — hero crossfade
- **React Router** — client-side routing

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build to dist/
npm run preview  # preview the production build
```

## Pages

Home · Products (+ 7 category pages) · About · Dealers · Become a Dealer ·
Resources · Events · SDS · Contact · Careers · Blog (+ posts) · 404.

## Notes

- Location data is real (13 branches, pulled from the BPI API).
- Contact and Become-a-Dealer forms are **demo-only** in this build — they
  validate and show a success state but do not submit anywhere. Wire to
  `bpi-api.new901.io/api/v1/core/` when ready.
- Display face is **Archivo** (self-hosted) standing in for a licensed thin
  grotesque — license a production face before launch.
- Hero imagery is real BPI category photography; confirm image rights before
  production.
