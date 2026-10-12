// CMS manifest az Ügyfél Adminhoz (projektek/analytics-site): mit szerkeszthet az ügyfél.
// A szerkezet és az alapértékek forrása a lib/cms-schema.js (ott bővíts / ott olvasd a szabályokat).
// Sync (az admin repóból):
//   npx tsx scripts/sync-manifest.mjs <ez a fájl> [--print-payload] [--print-secret]
//
// site.url: amíg az oldal nincs bekötve élesben, a helyi dev szerver (npm run dev → 3100).
// Élesítéskor: url = https://hallasgondozo.hu, previewUrl = a nem élő nyelveket mutató előnézeti deploy.

import { CMS_LOCALES, CMS_PAGES, sourceValue } from './lib/cms-schema.js'

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

const manifest = {
  site: {
    slug: 'hallasgondozo',
    name: 'ÉRTED Hallásgondozó',
    url: 'http://localhost:3100',
    revalidatePath: '/api/revalidate',
  },
  locales: CMS_LOCALES,
  // Az ügyfél Google-fiókja(i) - egyelőre üres (belépés módja nyitott kérdés), a superadmin mindent lát.
  members: [],
  analytics: {},
  pages: CMS_PAGES.map((page) => ({
    ...page,
    sections: page.sections.map((s) => ({ ...s, fields: s.fields.map(field) })),
  })),
}

export default manifest
