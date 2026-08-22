# Deployment Guide (Vercel)

This project is a standard Next.js 15 App Router site with no database and
no server-only runtime requirements — every page is statically prerendered
at build time (`generateStaticParams` for the 9 service and 6 project
detail pages). Vercel is the natural deployment target, but any host that
supports Next.js's Node runtime or static export will work.

## 1. Push to a Git repository

Vercel deploys from GitHub, GitLab, or Bitbucket. Push this project to a
repository if it isn't already in one.

## 2. Import the project into Vercel

1. [vercel.com/new](https://vercel.com/new) → import the repository.
2. Framework preset: Vercel auto-detects **Next.js** — no changes needed.
3. **Build Command:** `next build` (default, already set in
   `package.json`'s `build` script).
4. **Output:** Vercel handles this automatically for Next.js — no manual
   output directory configuration needed (this is not a static export;
   `next export` is not used, since `generateMetadata`/dynamic routes need
   the Next.js runtime).
5. **Install Command:** `npm install` (default).

## 3. Environment Variables

Set these under **Project Settings → Environment Variables** before your
first production deploy. See `.env.example` for the full list and
explanations.

| Variable | Required? | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Set per-environment (Production/Preview) so canonical URLs and the sitemap are correct. Falls back to the hardcoded production domain if unset. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Only needed if you implement Google Analytics (see `docs/GOOGLE_SETUP.md`) — has no effect until that code is added. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | Only needed for Search Console HTML-tag verification — has no effect until wired into `app/layout.tsx`. |

Vercel lets you set different values per environment (Production, Preview,
Development) — set `NEXT_PUBLIC_SITE_URL` to your real domain for
Production, and leave it unset (or set to the preview URL) for Preview
deployments.

## 4. Domain Connection

1. **Project Settings → Domains** → add `zhomeinteriors.com` (and
   `www.zhomeinteriors.com` if you want both).
2. Vercel gives you DNS records to add at your registrar:
   - For an apex domain: an `A` record to Vercel's IP, or ALIAS/ANAME if
     your DNS provider supports it.
   - For a subdomain (`www`): a `CNAME` to `cname.vercel-dns.com`.
3. Decide on a canonical host (`www` vs. apex) and set the other as a
   redirect in Vercel's domain settings — keep this consistent with
   `siteConfig.url` in `config/site.ts` / `NEXT_PUBLIC_SITE_URL`.

## 5. SSL

Automatic. Vercel provisions and renews a Let's Encrypt certificate for
every domain you add — no configuration required.

## 6. Production Checklist

Run through this before pointing the real domain at the deployment:

- [ ] `NEXT_PUBLIC_SITE_URL` set correctly for the Production environment
- [ ] All placeholder images/videos in `/public` replaced with real assets
      (see `docs/ASSET_GUIDE.md`) — the site currently references paths
      like `/images/hero/hero-poster.jpg` that don't have real files yet
- [ ] `data/company.ts` reviewed for accurate phone/email/address/hours
- [ ] Contact form's placeholder submission logic
      (`components/contact/ContactForm.tsx`) replaced with a real endpoint
      before launch — currently it simulates success without sending
      anything anywhere (clearly commented in the code)
- [ ] `npm run build` succeeds locally with zero errors
- [ ] Spot-check `/robots.txt` and `/sitemap.xml` on the deployed URL
- [ ] Validate a few pages with
      [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Run Lighthouse against the deployed URL (build-time bundle sizes were
      verified during development — see the Final Report — but real-world
      Core Web Vitals depend on your CDN/region and should be checked
      post-deploy)
- [ ] Decide on `www` vs. apex as the canonical domain and confirm the
      redirect is in place
- [ ] Search Console property added and sitemap submitted (see
      `docs/GOOGLE_SETUP.md`)

## Local Production Testing

Before deploying, you can test a production build locally:

```bash
npm run build
npm run start
```

This serves the exact optimized build Vercel would run, at
`http://localhost:3000`.
