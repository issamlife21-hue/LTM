# Liberia Traffic Management — Website

The official website for **Liberia Traffic Management (LTM)**, the only entity authorized by the Government of Liberia to provide vehicle registration, driver licensing, vehicle inspection, license plate, and traffic violation services.

This Next.js application exposes everything a citizen needs to know before walking into the LTM service center on SKD Boulevard, Monrovia: the full price list, FAQs, a road-signs reference, an interactive 45-question driver's license practice test, per-service detail pages, and contact information.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with custom LTM design tokens
- **shadcn/ui** primitives (button, card, accordion, tabs, sheet, table, input, badge, separator, label, textarea)
- **lucide-react** icons
- **Public Sans** loaded via `next/font/google`
- Statically rendered — every route is prerendered at build time

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the dev server hot-reloads on save.

## Production build

```bash
npm run build
npm start
```

`npm run build` produces a fully static export-friendly bundle and prints a per-route size table. `npm start` serves the production output on port 3000.

```bash
npm run lint   # ESLint via next lint
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx                # root layout (FlagStripe / Header / main / Footer / MobileBottomNav / ScrollToTop) + global metadata
│   ├── page.tsx                  # homepage (hero, trust, services, how-it-works, info, gallery, FAQ teaser, CTA, JSON-LD)
│   ├── loading.tsx               # global loading spinner
│   ├── error.tsx                 # client error boundary
│   ├── not-found.tsx             # 404 page
│   ├── icon.svg                  # favicon
│   ├── sitemap.ts                # sitemap.xml generator
│   ├── globals.css               # Tailwind + base/print styles
│   ├── services/                 # /services overview + 4 detail routes
│   ├── pricing/                  # /pricing (server wrapper + client tabs)
│   ├── faq/                      # /faq (server wrapper + client search/accordion)
│   ├── road-signs/               # /road-signs (server wrapper + client tabs/sidebar)
│   ├── practice-test/            # /practice-test (intro/quiz/review) + /practice-test/study
│   └── contact/                  # /contact page with info cards, map, form
│
├── components/
│   ├── layout/                   # FlagStripe, Header, Footer, CTABanner, MobileBottomNav
│   ├── ui/                       # shadcn primitives
│   ├── PageHeader.tsx            # dark page header used by content pages
│   ├── PriceTable.tsx            # responsive table → mobile cards
│   ├── ServiceCard.tsx           # homepage service tile
│   ├── ServiceDetailLayout.tsx   # shared 2-column layout for /services/* detail pages
│   ├── SignImage.tsx, SignCard.tsx # road-sign image + card rendering
│   └── HeroCarousel.tsx          # homepage hero slideshow
│
├── data/                         # typed source-of-truth content
│   ├── pricing.ts                # all USD rates (registration, license, towing, etc.)
│   ├── faqs.ts                   # categorized FAQs
│   ├── road-signs.ts             # signs reference + Liberia-specific rules
│   └── practice-test.ts          # 45 quiz questions + study sheet
│
└── lib/
    ├── utils.ts                  # cn() class-name helper
    └── format.ts                 # formatUsd, highlightMatch
```

## Routes

| Path | Description |
| --- | --- |
| `/` | Homepage |
| `/services` | Services overview |
| `/services/driver-license` | Driver license detail |
| `/services/vehicle-registration` | Vehicle registration detail |
| `/services/vehicle-inspection` | Vehicle inspection detail |
| `/services/license-plates` | License plates detail |
| `/pricing` | Full price list with searchable tabs |
| `/road-signs` | Road signs and signals reference |
| `/practice-test` | Interactive 45-question practice test |
| `/practice-test/study` | All 45 questions with answers |
| `/faq` | Questions & Answers |
| `/contact` | Contact information, map, and form |

## Deployment

The project is built static-export-friendly and is recommended to host on **Netlify**:

1. Connect the GitHub repository to Netlify.
2. Build command: `npm run build`.
3. Publish directory: `.next` (Netlify's Next.js plugin handles the rest).
4. Add a custom domain (`www.liberiatraffic.com`) and configure HTTPS.

Vercel is also a one-click drop-in if preferred.

## TODO — future work

- **Replace placeholder gallery photos** on the homepage with actual photos of the LTM compound.
- **Add online services** to the services pages once LTM enables digital applications and renewals.
- **Translate** to additional languages spoken in Liberia.
- **Branch locator** for when LTM opens additional service centers and authorized delegates.
- **Replace `app/icon.svg`** with the official LTM brand mark.
