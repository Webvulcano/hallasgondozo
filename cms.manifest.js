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
