// CMS manifest az Ügyfél Adminhoz (projektek/analytics-site): mit szerkeszthet az ügyfél.
// A szerkezet és az alapértékek forrása a lib/cms-schema.js (ott bővíts / ott olvasd a szabályokat).
// Sync (az admin repóból):
//   npx tsx scripts/sync-manifest.mjs <ez a fájl> [--print-payload] [--print-secret]
//
// site.url: az éles domain (2026-10-21-től https://hallasgondozo.hu; előtte a Vercel production deploy).
// previewUrl: a Vercel teszt-deploy (a preview admin ezt mutatja).
// Helyi fejlesztés: NEM itt — az admin .env.local CMS_DEV_SITE_URLS (hallasgondozo=http://localhost:3700).

import { CMS_LOCALES, CMS_PAGES, sourceValue, imageDefault } from './lib/cms-schema.js'

const TRANSLATIONS = CMS_LOCALES.slice(1).map((l) => l.code)

function field({ src, ids, ...f }) {
  const out = { ...f, default: sourceValue({ src, ids, ...f }, 'hu') }
  if (f.translatable !== false) {
    out.translations = Object.fromEntries(
      TRANSLATIONS.map((code) => [code, sourceValue({ src, ids, ...f }, code)]).filter(([, v]) => v !== undefined)
    )
  }
  return out
}

function imageSlot({ ref, ...img }) {
  return { ...img, default: imageDefault(ref) }
}

const manifest = {
  site: {
    slug: 'hallasgondozo',
    name: 'ÉRTED Hallásgondozó',
    url: 'https://hallasgondozo.hu',
    // Vercel preview (teszt) deploy (az éles domain 2026-10-21 óta a hallasgondozo.hu).
    previewUrl: 'https://hallasgondozo.vercel.app',
    revalidatePath: '/api/revalidate',
  },
  locales: CMS_LOCALES,
  // Az ügyfél Google-fiókjai (belépés az adminba): a gitignore-olt cms.members.local.json-ban
  // (email nem kerül gitbe), a sync-manifest.mjs onnan tölti. A superadmin ezen felül mindent lát.
  members: [],
  // Vercel Web Analytics → admin Analitika oldal (a token az admin szerverén van, nem itt).
  analytics: {
    vercel: {
      projectId: 'prj_Tf9DeJtf9XPzRgyk7S7TJTmSsWHw',
      teamId: 'team_3e4PonEWGDktxZ3jN5cVjuN8',
      // Valódi konverziók (lib/analytics.js eseménynevei); a többi esemény = érdeklődés.
      conversions: ['Időpontfoglalás', 'Időpontfoglalás (gyermek)', 'Telefonhívás', 'Email', 'Visszahívás-kérés'],
      // Admin SEO-oldal „Melyik gomb hoz megkeresést?” előnézete. Egy sor = egy esemény (lib/analytics.js) egy
      // helyen: place = a mérés `hely` értéke(i) (lib/analytics.js linkPlace; az első a kiemelés kulcsa, a többi
      // rokon / régi név). A data-cta="<esemény>@<hely>" jelölést az admin-keretben a ClickTracker teszi fel;
      // kézzel jelölt: visszahívás-form (hely nélkül), Dr. Vasvári „Bővebben” gombja.
      // path = melyik oldalt mutassa az előnézet (a főoldalon a menüsor a tetején rejtett → termékoldal).
      // Az aloldalankénti bontást az admin kéri le (melyik oldalon nyomták). „Szakorvos oldala” kimaradt:
      // a link (Team.jsx) ki van kommentelve. Régi, nem besorolható hely: „egyéb” (nem jelenik meg).
      ctaButtons: [
        // Megkeresés
        { event: 'Időpontfoglalás', place: 'hero', label: 'Foglalás – főoldal teteje', path: '/', kind: 'quote' },
        { event: 'Időpontfoglalás', place: ['időpontfoglalás blokk', 'idopont'], label: 'Foglalás – időpont blokk (felnőtt)', path: '/', kind: 'quote' },
        { event: 'Időpontfoglalás (gyermek)', place: ['időpontfoglalás blokk', 'idopont'], label: 'Foglalás – időpont blokk (gyermek)', path: '/', kind: 'quote' },
        { event: 'Időpontfoglalás', place: 'csapat', label: 'Foglalás – Dr. Vasvári bemutatkozása', path: '/', kind: 'quote' },
        { event: 'Időpontfoglalás', place: ['fejléc', 'mobil menü'], label: 'Foglalás – menüsor', path: '/hallokeszulekek', kind: 'quote' },
        { event: 'Időpontfoglalás', place: 'termékek alsó CTA', label: 'Foglalás – Hallókészülékek oldal alja', path: '/hallokeszulekek', kind: 'quote' },
        { event: 'Időpontfoglalás', place: ['márkaoldal alsó CTA', 'alsó CTA'], label: 'Foglalás – márkaoldalak alja', path: '/hallokeszulekek/phonak-hallokeszulekek', kind: 'quote' },
        { event: 'Időpontfoglalás', place: 'cikk alja CTA', label: 'Foglalás – blogcikkek alja', path: '/blog/oticon-zeal', kind: 'quote' },
        { event: 'Időpontfoglalás', place: 'lábléc', label: 'Foglalás – lábléc', path: '/', kind: 'quote' },
        { event: 'Telefonhívás', place: 'hero', label: 'Telefon – főoldal teteje', path: '/', kind: 'phone' },
        { event: 'Telefonhívás', place: ['időpontfoglalás blokk', 'idopont'], label: 'Telefon – időpont blokk', path: '/', kind: 'phone' },
        { event: 'Telefonhívás', place: 'cikk alja CTA', label: 'Telefon – blogcikkek alja', path: '/blog/oticon-zeal', kind: 'phone' },
        { event: 'Telefonhívás', place: 'lábléc', label: 'Telefon – lábléc', path: '/', kind: 'phone' },
        { event: 'Email', place: 'lábléc', label: 'E-mail – lábléc', path: '/', kind: 'email' },
        { event: 'Visszahívás-kérés', label: 'Visszahívás-kérő űrlap', path: '/', kind: 'form' },
        // Érdeklődés (nincs a conversions-ben)
        { event: 'Google-vélemények', place: 'vélemények', label: 'Google-vélemények – főoldal', path: '/', kind: 'other' },
        { event: 'Google-vélemények', place: 'termék-fejléc', label: 'Google-vélemények – márkaoldalak', path: '/hallokeszulekek/phonak-hallokeszulekek', kind: 'other' },
        { event: 'Útvonaltervezés', place: 'lábléc', label: 'Útvonaltervezés – lábléc', path: '/', kind: 'other' },
        { event: 'Közösségi média', place: 'lábléc', label: 'Facebook / Instagram – lábléc', path: '/', kind: 'social' },
      ],
    },
  },
  // Blog-modul (admin → Blog menü). EN/DE-n nincs blog (Lehel, 2026-10-12) → csak magyar.
  blog: {
    label: 'Blog',
    locales: ['hu'],
    path: { hu: '/blog' },
    postPath: { hu: '/blog/{slug}' },
    author: 'ÉRTED Hallásgondozó szakmai csapata',
  },
  pages: CMS_PAGES.map((page) => ({
    ...page,
    sections: page.sections.map((s) => ({ ...s, fields: s.fields.map(field), images: (s.images ?? []).map(imageSlot) })),
  })),
}

export default manifest
