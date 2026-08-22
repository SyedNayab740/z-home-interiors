# Production Checklist

A pre-launch checklist covering content, legal, and technical readiness.
For the Vercel-specific deployment steps, see `docs/DEPLOYMENT.md`.

## Content

- [ ] Add real images directly to `public/images/` (see
      `docs/ASSET_GUIDE.md` for exact filenames) — the site currently ships
      with only the logo; every other image path shows a clean gradient
      fallback until the real file is added, so nothing is broken, but
      nothing is "finished" either
- [ ] Review every service description in `data/services.ts` for accuracy
- [ ] Add real project photos as `project-01.jpg`, `project-02.jpg`, etc.
      directly in `public/images/` — the Our Projects gallery is empty
      until real photos are added (no sample/placeholder projects ship
      with this build)
- [ ] Add real client reviews to `data/reviews.ts` once available (with
      permission) — the array ships empty and the Reviews page shows a
      "coming soon" message rather than fabricated testimonials
- [ ] Replace the placeholder values in `data/company.ts` (phone,
      WhatsApp, email, address, hours) with the real, confirmed business
      details — every field is currently marked with a `TODO` comment

## Legal

- [ ] `/privacy` and `/terms` are built and linked from the footer, using
      realistic, professional template content covering the sections a
      business like this needs. **They are templates, not legal advice** —
      have them reviewed by qualified legal counsel for your specific
      jurisdiction before relying on them in production.
- [ ] Confirm the Contact form (once connected to a real backend — see
      below) has an appropriate privacy notice for the data it collects

## Contact Form Backend

- [ ] `app/api/contact/route.ts` is a real API route, but it only sends
      email if `EMAIL_API_KEY` (and related `CONTACT_*` variables — see
      `.env.example`) are configured on the server. Until those are set,
      submitting the form returns a clear "not yet configured" message —
      it never pretends to send a message it didn't actually send. Set
      the environment variables for your chosen email provider (Resend by
      default) before launch.
- [ ] No secrets are committed to the repository — confirm the real
      values are only ever set as environment variables in your hosting
      provider's dashboard (e.g. Vercel Project Settings → Environment
      Variables), never in code.

## SEO

- [ ] `NEXT_PUBLIC_SITE_URL` set correctly for production (see
      `.env.example`)
- [ ] Google Search Console property verified and sitemap submitted (see
      `docs/GOOGLE_SETUP.md`)
- [ ] Default OG image at `public/images/hero.jpg` exists once the real
      hero photo is added (referenced as the fallback OG image by
      `data/seo.ts`)
- [ ] Spot-check structured data with
      [Rich Results Test](https://search.google.com/test/rich-results) —
      note that `AggregateRating` structured data is only emitted once
      real reviews exist in `data/reviews.ts`, so this will show nothing
      to test until then, by design
- [ ] Once the studio address is confirmed, replace `mapUrl` in
      `data/company.ts` and consider embedding a real Google Map on the
      Contact page

## Technical

- [ ] `npm run build` passes with zero errors locally
- [ ] `npm run lint` passes with zero warnings
- [ ] `npx tsc --noEmit` passes with zero errors
- [ ] All environment variables set for the Production environment (see
      `.env.example`)
- [ ] Domain connected and SSL active (automatic on Vercel)
- [ ] `robots.txt` and `sitemap.xml` verified on the live domain

## Post-Launch

- [ ] Run Lighthouse against the live production URL (not just local
      builds — real CDN latency and image delivery affect Core Web Vitals)
- [ ] Set up Google Analytics if desired (see `docs/GOOGLE_SETUP.md`)
- [ ] Claim/verify Google Business Profile with matching NAP (name,
      address, phone) data
- [ ] Monitor Search Console for crawl errors in the first few weeks
