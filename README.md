# Alpha Music Academy

A single-page, premium marketing site for a music education academy, built with React, Vite, Tailwind CSS, Framer Motion and Lucide React.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

This is now a multi-page app using React Router — each section from the original one-pager lives on its own route, wrapped in a shared layout.

| Route | Page |
|---|---|
| `/` | Home (Hero) |
| `/about` | About |
| `/courses` | Courses |
| `/statistics` | Statistics |
| `/why-us` | Why Choose Us |
| `/gallery` | Gallery |
| `/testimonials` | Testimonials |
| `/admission` | Admission CTA |
| `/contact` | Contact |
| anything else | 404 page |

- `src/App.jsx` — sets up the router and routes
- `src/layouts/Layout.jsx` — the shared Navbar + Footer wrapper every page renders inside, plus scroll-to-top on navigation and a fade transition between pages
- `src/pages/` — one thin file per route, each just rendering the matching component from `src/components/`
- `src/components/` — the actual section content (Navbar, Hero, About, Courses, Statistics, WhyChooseUs, Gallery, Testimonials, AdmissionCTA, Contact, Footer), plus a reusable `StaffLines` musical-staff motif
- `src/hooks/useCountUp.js` — animated count-up used by the Statistics page
- `tailwind.config.js` — the design tokens (ink black, deep blue, gold, ivory)

## Notes

- All copy, testimonials and events are placeholder content — swap in the academy's real details before launch.
- Images are hotlinked from Unsplash for placeholder purposes; replace with the academy's own photography before production use.
- The contact form is front-end only (no backend/API), as scoped — it shows a confirmation state on submit.
