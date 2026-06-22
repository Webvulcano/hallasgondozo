# ÉRTED Hallásgondozó - Next.js

Győri hallásgondozó landing page Next.js App Router-rel.

## Setup

```bash
npm install
cp .env.example .env.local   # töltsd ki Resend API kulccsal
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
├── globals.css            - csak @import-ok (styles/* fájlokat fűzi össze)
├── styles/                - szétbontott CSS modulok
│   ├── tokens.css         - :root változók (színek, árnyékok)
│   ├── base.css           - reset, typo, layout primitives
│   ├── buttons.css        - .btn, .btn-*
│   ├── nav.css            - sticky fejléc
│   ├── hero.css           - főszekció
│   ├── partners.css       - egészségpénztár marquee
│   ├── services.css       - szolgáltatás kártyák
│   ├── offer.css          - Phonak Sphere ajánlat
│   ├── team.css           - csapat kártyák
│   ├── testimonials.css   - vélemények
│   ├── booking.css        - időpont + form
│   ├── footer.css
│   ├── mobile-bar.css     - mobil sticky bar
│   ├── reveal.css         - scroll reveal animációk
│   └── responsive.css     - media query-k (UTOLSÓ az import sorrendben)
├── layout.jsx             - root layout, metadata, fontok, JSON-LD
├── page.jsx               - főoldal
├── adatvedelem/page.jsx   - adatvédelmi szabályzat
├── not-found.jsx          - 404
├── sitemap.js             - sitemap.xml generálás
├── robots.js              - robots.txt
└── actions/
    └── submitCallback.js  - visszahívás form server action

components/
├── Button.jsx             - központi CTA komponens (variant)
├── PhoneLink.jsx          - telefon link variánsok
├── Reveal.jsx             - scroll reveal wrapper
├── Nav.jsx                - server komponens
├── nav/
│   └── ScrollEffect.jsx   - client: scroll listener
├── Hero.jsx
├── Partners.jsx
├── Services.jsx
├── Offer.jsx
├── Team.jsx
├── Testimonials.jsx
├── Booking.jsx            - server wrapper
├── booking/
│   ├── OnlinePanel.jsx
│   └── CallbackPanel.jsx  - client: form state
├── Footer.jsx
├── MobileBar.jsx
└── icons/                 - SVG ikon komponensek
    ├── _base.jsx          - közös SVG wrapper
    ├── Icon.jsx           - name szerinti dinamikus lookup
    └── Check, Phone, Calendar, Email, Facebook, Instagram,
        Ear, Doctor, EarAid, Shield, Home, Child

lib/
├── constants.js           - BOOKING_URL, PHONE, EMAIL, COMPANY, SOCIAL, SITE
├── validation.js          - form validátor
├── content/               - szekciók adatai (szöveg)
│   ├── services.js
│   ├── team.js
│   ├── testimonials.js
│   ├── partners.js
│   ├── trustItems.js
│   └── offer.js
└── hooks/
    └── useCallbackForm.js - form state hook

public/
└── pic/
    └── logo.png
```

## Architektúra elvek

- **Egy adat - egy hely.** Üzleti adat (telefonszám, URL, cím) `lib/constants.js`-ben.
- **Szöveg = adat.** Minden szekció tartalma `lib/content/*` fájlokban - copy-edit nem érinti JSX-et.
- **Komponens primitívek.** `Button`, `PhoneLink`, `Reveal`, `Icon` - duplikáció helyett.
- **Server-first.** Csak az tölt JS-t kliensoldalra, ami interakciót igényel.

## Form backend

A visszahívás form Server Action-t használ ([Resend](https://resend.com)-en keresztül).
Beállításhoz töltsd ki `.env.local`-t. Ha hiányzik, form csak `console.log`-ol (fejlesztés).

Honeypot mező a botok kiszűrésére.

## SEO

- Open Graph + Twitter Card meta a `layout.jsx`-ben
- LocalBusiness + MedicalBusiness JSON-LD schema (Google rich results)
- Automatikus `sitemap.xml` és `robots.txt`
- Canonical URL minden oldalon

## Deployment

Vercel ajánlott (zero-config Next.js).
Env változókat a Vercel projektbeállításnál add meg.
