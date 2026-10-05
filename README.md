# ÉRTED Hallásgondozó - Next.js

Az ÉRTED Hallásgondozó (Győr) weboldala - Next.js App Router, statikus generálás (SSG), Vercel deploy.

## Setup

```bash
npm install
echo "SIMPLYFORMS_FORM_ID=<form-id>" > .env.local   # visszahívás-form (ld. Form backend)
npm run dev
```

Megnyitás: http://localhost:3000

## Scripts

- `npm run dev` - fejlesztői szerver
- `npm run build` - production build
- `npm run start` - production szerver
- `npm run lint` - ESLint

## Struktúra

```
app/
├── layout.jsx             - root layout, metadata, fontok, MedicalBusiness JSON-LD
├── page.jsx               - főoldal
├── globals.css            - csak @import-ok (styles/* sorrendben; responsive.css UTOLSÓ)
├── styles/                - szekciónkénti CSS (tokens, base, buttons, nav, hero, services,
│                            team, journey, testimonials, booking, faq, footer, keszulekek,
│                            product, blog, promo, offer, partners, reveal, skeleton, splash…)
├── hallokeszulekek/       - márkák (page.jsx), [slug] márkaoldalak, arak/ ár-oldal
├── blog/                  - lista + [slug] cikk (MDX)
├── adatvedelem/           - adatvédelmi szabályzat
├── actions/submitCallback.js - visszahívás form (SimplyForms)
├── sitemap.js, robots.js, not-found.jsx

components/
├── Button, PhoneLink, Reveal, SkeletonImage, Accordion - primitívek
├── Nav (+ nav/: NavLinks, MobileMenu, ScrollEffect), Footer, Splash, PromoPopup
├── HeroVideo (aktív) / Hero (régi, kikommentezve), Services, Team, Partners,
│   Journey, Testimonials, TestiTicker, Booking (+ booking/), Faq, Offer (kikapcsolva)
├── product/               - márkaoldal: galéria, tabok, vélemény-slider, GYIK, ikonsor
├── blog/                  - PostCard
└── icons/                 - SVG ikonok (Icon = név szerinti lookup)

lib/
├── constants.js           - BOOKING_URL, PHONE, EMAIL, COMPANY, SITE, GOOGLE_RATING, GEO…
├── content/               - minden szöveg adatként (faq, services, team, devices, prices,
│                            posts, journey, testimonials, partners, offer, promo…)
├── validation.js, hooks/useCallbackForm.js

content/blog/*.mdx         - blogcikkek
public/pic/                - képek (arak/, hallokeszulekek/, munkatarsak/, lepesrol_lepesre/, blog/, hero/)
```

## Architektúra elvek

- **Egy adat - egy hely.** Üzleti adat (telefonszám, URL, cím) `lib/constants.js`-ben.
- **Szöveg = adat.** Minden szekció tartalma `lib/content/*` fájlokban - copy-edit nem érinti JSX-et.
- **Komponens primitívek.** `Button`, `PhoneLink`, `Reveal`, `Icon` - duplikáció helyett.
- **Server-first.** Csak az tölt JS-t kliensoldalra, ami interakciót igényel.

## Form backend

A visszahívás form Server Action-t használ (`app/actions/submitCallback.js`), az adatokat
a [SimplyForms](https://simplyforms.app) fogadja és küldi tovább értesítő emailként.
Env: `SIMPLYFORMS_FORM_ID` (`.env.local` + Vercel projektbeállítás). Ha hiányzik, a form hibát logol és nem küld.

Honeypot mező a botok kiszűrésére.

## Oldalak

| Útvonal | Tartalom |
|---|---|
| `/` | főoldal (szolgáltatások, csapat, folyamat, vélemények, időpont, GYIK) |
| `/hallokeszulekek` | márkák + termékkategóriák |
| `/hallokeszulekek/[slug]` | márkaoldalak (Phonak, Signia, Oticon, Starkey) - adat: `lib/content/devices.js` |
| `/hallokeszulekek/arak` | árak és TB-támogatás - adat: `lib/content/prices.js` |
| `/blog`, `/blog/[slug]` | MDX cikkek (`content/blog/`) |
| `/adatvedelem` | adatvédelmi szabályzat |

Régi (Apache-os) hallasgondozo.hu URL-ek → 308 átirányítás a `next.config.mjs`-ben.

## SEO

- Title/meta a `lib/constants.js` (`SITE`) + oldalankénti `metadata`
- MedicalBusiness (layout), FAQPage, HowTo, BreadcrumbList, Product JSON-LD
- Automatikus `sitemap.xml` és `robots.txt`
- Saját canonical minden aloldalon (a layout `/` canonical-ját NEM szabad örökölni)
- Kulcsszó-háttér és checklist: `../../seo-geo-aeo-fokusz.md`

## Deployment

Vercel ajánlott (zero-config Next.js).
Env változókat a Vercel projektbeállításnál add meg.
