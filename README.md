# Z Home Interiors

A production-ready interior design studio website built with Next.js 15,
React 19, TypeScript, and Tailwind CSS. Fully data-driven: every service,
project, review, and piece of business content lives in `/data` and can be
edited without touching component code.

## Project Overview

- **Homepage** — hero, about preview, services, featured projects, why
  choose us, process, testimonials (once added), FAQ, contact preview
- **About** — company story, mission/vision/values, why choose us,
  expertise pillars
- **Services** — a listing page plus 9 individually data-driven service
  pages (`/services/[slug]`), each with its own description, features,
  benefits, process, and FAQ
- **Our Projects** — a simple, filterable image gallery. No project detail
  pages — see "Adding Project Images" below
- **Reviews** — rating summary, featured + full review grid, customer
  photo gallery, and `AggregateRating` structured data (only emitted once
  real reviews exist)
- **Contact** — a full validated contact form, business info, map, hours,
  and FAQ
- **Privacy Policy & Terms & Conditions** — professional legal template
  pages; have them reviewed by counsel before launch

Every page ships with dynamic metadata, Open Graph tags, canonical URLs,
and JSON-LD structured data.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, TypeScript (strict mode)
- **Styling:** Tailwind CSS 3, custom forest-green/gold design tokens
  (see `tailwind.config.ts` and `app/globals.css`)
- **Animation:** Framer Motion (kept subtle throughout)
- **Icons:** lucide-react

No external UI kit, no state-management library, no database, no backend —
the entire project is static content plus client-side interactivity.

## Adding / Replacing Images

**See `docs/ASSET_GUIDE.md` for the full guide.** In short: every image
lives directly inside `public/images/` — one flat folder, no subfolders.

Project images are the easiest part to maintain: drop a file named
`project-01.jpg`, `project-02.jpg`, etc. (or `project-modern-kitchen.jpg`)
into `public/images/` and it automatically appears on the Our Projects page
— no data file to edit.

## Folder Structure

```
app/                    Next.js App Router — one folder per route
  about/                /about
  services/
    [slug]/              /services/[slug]  (9 static params)
    page.tsx             /services
  projects/              /projects  (simple gallery, no detail pages)
  contact/               /contact
  reviews/               /reviews
  privacy/, terms/        legal pages
  layout.tsx             Root layout: fonts, Navbar, Footer, floating buttons
  page.tsx                /  (homepage)
  robots.ts, sitemap.ts   Generated from the data layer

components/
  ui/                    Generic, page-agnostic primitives
  layout/                Navbar, Footer
  cards/                 Data-driven cards (ServiceCard, ProjectCard, ReviewCard, FeatureCard)
  sections/              Reusable sections used across multiple pages
  home/                  Homepage-only sections (Hero, AboutPreview, ContactPreview)
  about/, services/, projects/, contact/, reviews/, legal/
                         Page-specific sections

data/                    All content — services, projects, reviews, company
                         info, navigation, FAQ, SEO config, etc.
types/                   Shared TypeScript interfaces
lib/                     utils.ts, seo.ts (metadata/JSON-LD builders),
                         animations.ts, icons.ts, project-images.ts
                         (scans public/images/ for project-*.jpg files)
hooks/                   Small reusable hooks
config/                  site.ts (routes/site config), theme.ts
public/                  Static assets — see docs/ASSET_GUIDE.md
docs/                    Deployment, asset-replacement, Google-setup, and
                         production-checklist guides
```

## Installation

Requires Node.js 18.18+ and npm.

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens at `http://localhost:3000` with hot reload.

## Build

```bash
npm run build
```

Produces an optimized production build. All static pages (including the 9
service detail pages) are prerendered at build time.

```bash
npm run start
```

Serves the production build locally.

```bash
npm run lint
```

Runs ESLint.

## Deployment

See **`docs/DEPLOYMENT.md`** for the full deployment guide.

## Environment Variables

No required environment variables — see **`.env.example`**. The one
recommended variable is `NEXT_PUBLIC_SITE_URL` (affects canonical URLs and
the sitemap).

## Before Launch — Client To-Do List

1. **Replace placeholder contact details** in `data/company.ts` (phone,
   WhatsApp number, email, address) — every one is currently a clearly
   marked placeholder (see the `TODO` comments in that file).
2. **Add real images** to `public/images/` per `docs/ASSET_GUIDE.md`.
3. **Add real client reviews** to `data/reviews.ts` once available — the
   Reviews page currently shows a "coming soon" message because no
   fabricated reviews are shipped with this build.
4. **Wire the contact form to a real backend** — `components/contact/ContactForm.tsx`
   currently simulates a submission. Connect it to an email service, form
   API (e.g. Formspree, Resend), or CRM before launch.
5. **Have Privacy Policy / Terms & Conditions reviewed by counsel** for
   your jurisdiction.

## SEO Notes

- Every page exports real metadata with a unique title, description,
  canonical URL, and Open Graph tags (`lib/seo.ts` → `buildMetadata`)
- `WebPage` and `BreadcrumbList` JSON-LD on every page; `FAQPage` wherever
  an FAQ section renders; `AggregateRating` only once real reviews exist;
  a site-wide `InteriorDesignFirm` organization schema in the root layout
- `app/sitemap.ts` and `app/robots.ts` are generated from the data layer —
  adding a service automatically produces a sitemap entry, and the sitemap
  only ever lists routes that actually exist (no project detail routes,
  since there are none)
- See `docs/GOOGLE_SETUP.md` for Search Console/sitemap submission steps

## Accessibility Notes

- Every interactive section has `aria-labelledby` wired to a real heading
- Exactly one `h1` per page; consistent heading hierarchy throughout
- `Modal` and `Lightbox` implement a full dialog pattern: initial focus on
  open, a Tab focus trap, and focus restoration on close
- Animations respect `prefers-reduced-motion`
- Every form field has an associated `<label>`, `aria-invalid`, and
  `aria-describedby` wiring to its error message

## Performance Notes

- Every image goes through `next/image` (via the shared `ImageWrapper`
  component, which also handles a graceful fallback if an image is
  missing — never a broken-image icon)
- `Lightbox` is dynamically imported (`ssr: false`) — never loaded until
  the user actually opens an image
- Fonts are loaded via `next/font/google` (self-hosted at build time — no
  runtime request to Google Fonts once built)
