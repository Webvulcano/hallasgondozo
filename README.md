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
- `npm run build` - production build (előtte automatikusan: `i18n:check`)
- `npm run i18n:check` - nyelvi minőségkapu (ld. Többnyelvűség)
- `npm run start` - production szerver
- `npm run lint` - ESLint

## Struktúra

```
app/
├── (hu)/                  - MAGYAR route group: saját root layout (<html lang="hu">), prefix nélkül
│   ├── layout.jsx, page.jsx, not-found.jsx, [...missing]/ (nyelvhelyes 404)
│   ├── hallokeszulekek/   - márkák, [slug] márkaoldalak, arak/ ár-oldal (csak magyar, kikapcsolva)
│   ├── blog/, adatvedelem/
├── (en)/en/…, (de)/de/…   - angol / német route group (hearing-aids, hoergeraete, privacy-policy, datenschutz…)
│                            A route-fájlok 5-10 soros wrapperek → törzs: components/views/
├── globals.css            - csak @import-ok (styles/* sorrendben; responsive.css UTOLSÓ)
├── styles/                - szekciónkénti CSS (… + i18n.css: nyelvválasztó, javaslat-sáv)
├── actions/submitCallback.js - visszahívás form (SimplyForms)
├── sitemap.js, robots.js, fonts/

components/
├── views/                 - oldaltörzsek nyelvfüggetlenül (HomeView, DevicesView, BrandView,
│                            BlogIndexView, PostView, PrivacyView, NotFoundView, RootDocument)
├── LangSwitcher (0 JS), LangSuggest (nyelvjavaslat-sáv)
├── Button, PhoneLink, Reveal, SkeletonImage, Accordion - primitívek
├── Nav (+ nav/: NavLinks, MobileMenu, ScrollEffect), Footer, Splash, PromoPopup
├── HeroVideo (aktív) / Hero (régi, kikommentezve), Services, Team, Partners,
│   Journey, Testimonials, TestiTicker, Booking (+ booking/), Faq, Offer (kikapcsolva)
├── product/               - márkaoldal: galéria, tabok, vélemény-slider, GYIK, ikonsor
├── blog/                  - PostCard
└── icons/                 - SVG ikonok (Icon = név szerinti lookup)

lib/
├── constants.js           - bookingUrls(locale), PHONE, EMAIL, COMPANY, SITE, GOOGLE_RATING, GEO…
├── i18n/                  - config (nyelvek, LIVE_LOCALES), routes (URL-térkép), alternates
│                            (nyelvi párok), dictionaries/{hu,en,de}.js (UI-szövegek), fmt
├── seo.js, fonts.js       - metadata/hreflang/JSON-LD builderek; közös fontok
├── content/               - *.js = nyelvfüggetlen alap (id, ikon, kép);
│                            locales/<nyelv>/ = szövegek (home, devices, faq, privacy.jsx);
│                            index.js → getContent(locale); posts.js; prices.js (csak magyar)
├── validation.js (hibakódok), hooks/useCallbackForm.js

content/blog/<nyelv>/*.mdx - blogcikkek (nyelvi párok: meta.translationKey)
scripts/i18n-check.mjs     - nyelvi minőségkapu (+ font-charset.json)
public/pic/                - képek (arak/, hallokeszulekek/, munkatarsak/, lepesrol_lepesre/, blog/, hero/)
```

## Architektúra elvek

- **Egy adat - egy hely.** Üzleti adat (telefonszám, URL, cím) `lib/constants.js`-ben.
- **Szöveg = adat.** Minden szöveg szótárban (`lib/i18n/dictionaries`) vagy `lib/content/locales/*` fájlokban - copy-edit / fordítás nem érinti JSX-et.
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
| Magyar | Angol | Német | Tartalom |
|---|---|---|---|
| `/` | `/en` | `/de` | főoldal (szolgáltatások, csapat, folyamat, vélemények, időpont, GYIK) |
| `/hallokeszulekek` | `/en/hearing-aids` | `/de/hoergeraete` | márkák + termékkategóriák |
| `/hallokeszulekek/[slug]` | `/en/hearing-aids/[slug]` | `/de/hoergeraete/[slug]` | márkaoldalak - alap: `lib/content/devices.js`, szöveg: `locales/<nyelv>/devices.js` |
| `/hallokeszulekek/arak` | - | - | árak és TB-támogatás (kikapcsolva) - `lib/content/prices.js` |
| `/blog`, `/blog/[slug]` | `/en/blog/…` | `/de/blog/…` | MDX cikkek (`content/blog/<nyelv>/`) |
| `/adatvedelem` | `/en/privacy-policy` | `/de/datenschutz` | adatvédelmi szabályzat (a magyar az irányadó) |

Régi (Apache-os) hallasgondozo.hu URL-ek → 308 átirányítás a `next.config.mjs`-ben.

## SEO

- Title/meta: szótár (`meta.*`) + oldalankénti metadata a view-kban (`lib/seo.js` builderek)
- Minden nyelvi oldal saját canonical + `hreflang` (hu/en/de + `x-default` → magyar), sitemap xhtml:link-ekkel
- MedicalBusiness (layout), FAQPage, HowTo, BreadcrumbList, Product JSON-LD
- Automatikus `sitemap.xml` és `robots.txt`
- Saját canonical minden aloldalon (a layout `/` canonical-ját NEM szabad örökölni)
- Kulcsszó-háttér és checklist: `../../seo-geo-aeo-fokusz.md`

## Többnyelvűség (HU / EN / DE)

- **URL:** a magyar a gyökérben (változatlan URL-ek), EN/DE prefixszel és lokalizált slugokkal.
  Forrás: `lib/i18n/routes.js` (+ a megfelelő `app/(nyelv)/…/page.jsx` wrapper).
- **Nyelvenként külön root layout** (route group) → statikusan helyes `<html lang>`, nincs proxy/middleware.
- **Élesítési kapu: `LIVE_LOCALES`** (build-időben olvasva). Alapérték: csak `hu`.
  Nem élő nyelv: oldalai 404, nincs sitemapben / hreflang-ben / nyelvválasztóban; `/de` → 307 a főoldalra.
  Lokálisan és Vercel **Preview**-n: `LIVE_LOCALES=hu,en,de`. **Production**: nincs beállítva, amíg a fordítás nincs jóváhagyva.
- **Nyelvi párok egy helyen:** `lib/i18n/alternates.js` → nyelvválasztó, `<link rel="alternate">`, sitemap.
  Márkák: közös `id`; cikkek: `meta.translationKey`. Ha nincs pár, a váltó a szülő-oldalra esik vissza (hreflang nélkül).
- **Nyelvválasztó:** desktop navban `HU · EN · DE`, mobil menüben + footerben teljes névvel; valódi `<a hreflang>` linkek.
  **Nyelvjavaslat-sáv:** ha a böngésző nyelve egy másik élő nyelv - automatikus átirányítás NINCS.
- **Form:** nem magyar űrlapnál az értesítő email tárgya `[DE]` / `[EN]` + „Nyelv" mező.

### Fordítás beemelése (amikor megjön)

1. UI-szövegek: `lib/i18n/dictionaries/en.js`, `de.js` (most Claude-vázlat, `DRAFT` jelöléssel).
2. Tartalom: `lib/content/locales/en|de/home.js`, `devices.js` (slug is!), `faq.js`, `privacy.jsx` - most a magyar másolata, `TODO fordítás` fejléccel. Kulcsonként cserélj, a kulcsokat ne változtasd.
3. Blog: `content/blog/en|de/*.mdx` - lokalizált `slug`, a `translationKey` marad.
4. A kész fájlokból töröld a `TODO fordítás` / `DRAFT` jelölést → `npm run i18n:check` (Productionön ezek nélkül nem megy át a build élő nyelvvel).
5. Vercel Production env: `LIVE_LOCALES=hu,en,de` → redeploy → Search Console: sitemap újraküldése, hreflang-riport.

Új UI-szöveg: kulcs mindhárom szótárba (az `i18n-check` hibát ad, ha hiányzik). Új nyelv: `LOCALES` + szótár + `locales/<nyelv>/` + `app/(<nyelv>)/` wrapperek + `routes.js`.
Font: a saját fontok Latin-1-et fednek (ä ö ü ß OK); más írás → újra-szűkítés + `scripts/font-charset.json`.

## Tartalomkezelés (Ügyfél Admin / CMS)
Az ügyfél a szövegeket a közös Ügyfél Adminban szerkeszti (`projektek/analytics-site`), kattintással az oldal előnézetén.
- **Mi szerkeszthető:** `lib/cms-schema.js` - egyetlen térkép: admin-mező ↔ meglévő szövegforrás (`lib/i18n/dictionaries`, `lib/content/locales`, alapadatok a `lib/constants`-ból). A `cms.manifest.js` ebből épül; a fájlokban lévő szöveg az **alapérték**, a CMS-ben mentett érték felülírja.
- **Renderelés:** `const { t, c, site, a } = await loadSite(locale)` (`lib/site.js`) - ugyanaz az alak, mint a szótár / `getContent`, + `site` (telefon, e-mail, foglalási linkek, nyitvatartás, értékelésszám) + `a` (szerkesztő-jelölések: `<h2 {...a.dict.services.title}>`). Kliens-komponens propként kapja a szöveget és a jelölést.
- `getDictionary` / `getContent` = a fájlok alapszövege CMS nélkül (slugok, statikus paraméterek, sitemap, alternates).
- **Kulcsok véglegesek** (`oldal.szekció.mező`): átnevezés = új mező, a régi archiválódik a benne mentett ügyfél-szöveggel együtt.
- **Új mező / szöveg-változás a fájlban** → sync az admin repóból: `npx tsx scripts/sync-manifest.mjs <ez a repo>/cms.manifest.js`. A sync az alapértékeket frissíti, az ügyfél mentett szövegét soha nem írja felül.
- **Frissítés:** mentéskor az admin POST-ol a `/api/revalidate`-re (Bearer `CMS_REVALIDATE_SECRET`) → az oldalak pár másodpercen belül frissek (stale-while-revalidate: ha a CMS nem elérhető, a legutóbbi jó oldal marad).
- **Env:** `CMS_SITE_SLUG`, `CMS_SUPABASE_URL`, `CMS_SUPABASE_PUBLISHABLE_KEY`, `CMS_REVALIDATE_SECRET`, `NEXT_PUBLIC_CMS_ADMIN_ORIGIN` (csak ezek framelhetik az oldalt: `frame-ancestors`). Build közben a CMS-nek elérhetőnek kell lennie; CMS nélküli helyi fejlesztés: `CMS_OFFLINE=1`.
- A client-kit fájlokat (`lib/cms*.js`, `components/cms/*`, `app/api/revalidate`) az admin repó `scripts/copy-client-kit.mjs`-e másolja - ne itt javítsd őket.

## Deployment

Vercel ajánlott (zero-config Next.js).
Env változókat a Vercel projektbeállításnál add meg: `SIMPLYFORMS_FORM_ID`, és Preview-ra `LIVE_LOCALES=hu,en,de`.
