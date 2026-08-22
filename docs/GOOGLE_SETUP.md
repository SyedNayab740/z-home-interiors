# Google Setup Guide

This is documentation only — none of the integrations below are implemented
in code yet. Each section notes exactly what would need to change if/when
you do wire it up.

## Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
   and add a property for your production domain.
2. Verify ownership. The simplest method for this project is **HTML tag
   verification**: Google gives you a `<meta name="google-site-verification"
   content="...">` tag.
   - Add the value to `.env.local` / your host's env vars as
     `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (already scaffolded in
     `.env.example`).
   - In `app/layout.tsx`, add to the `metadata` object:
     ```ts
     verification: {
       google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
     },
     ```
3. Once verified, submit your sitemap (see below).

## Sitemap Submission

The sitemap is already live and correct at `/sitemap.xml`
(`app/sitemap.ts`) — it's generated from the data layer, so it stays in
sync automatically as services/projects are added.

In Search Console: **Sitemaps** → enter `sitemap.xml` → Submit.

## Robots Verification

`robots.ts` (`app/robots.ts`) already generates a correct `robots.txt` that
allows all crawling and points to the sitemap. After deploying, verify it at
`https://yourdomain.com/robots.txt` and confirm Search Console's
**Settings → Crawling → robots.txt** shows no errors.

## Google Analytics 4

Not implemented. To add it:
1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
   and get your Measurement ID (`G-XXXXXXXXXX`).
2. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in your environment (scaffolded in
   `.env.example`).
3. Install `@next/third-parties` (`npm install @next/third-parties`) and add
   to `app/layout.tsx`:
   ```tsx
   import { GoogleAnalytics } from "@next/third-parties/google";
   // inside the <body>, alongside the other providers:
   <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
   ```

Consider whether you need a cookie-consent banner for your target markets
before enabling analytics — this project doesn't currently include one.

## Google Business Profile

Not a code integration — this is managed entirely on Google's side at
[business.google.com](https://business.google.com). Once claimed and
verified:
- Ensure the **name, address, and phone number (NAP)** you enter there
  exactly match `data/company.ts` — inconsistent NAP data across the web
  hurts local SEO.
- The `InteriorDesignFirm` JSON-LD already emitted site-wide
  (`lib/seo.ts` → `buildOrganizationSchema`, rendered in `app/layout.tsx`)
  reinforces the same business identity to Google — keeping both in sync is
  what matters, not a code change.
- Consider linking your Google Business Profile in `data/social.ts` once a
  profile URL exists, the same way Instagram/Facebook are linked.

## Rich Results Testing

Before submitting to Search Console, validate the structured data using
Google's [Rich Results Test](https://search.google.com/test/rich-results)
against a few live URLs once deployed:
- `/` — `Organization`/`WebPage`
- `/services/modular-kitchen` — `WebPage`, `BreadcrumbList`, `FAQPage`
- `/projects` — `WebPage`, `BreadcrumbList`, `CreativeWork`
- `/reviews` — `AggregateRating`, individual `Review` entities

All of this structured data is already implemented and was verified against
the actual built HTML output during development (see `lib/seo.ts` for every
schema builder in use).
