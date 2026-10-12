// Route-térkép: route-kulcs → URL nyelvenként. A magyar a gyökérben (prefix nélkül), EN/DE prefixszel,
// lokalizált (ASCII, ö→oe) útvonalakkal. A fájlrendszer tükrözi: app/(en)/en/hearing-aids/... stb.
// Új oldal / új nyelvi útvonal: itt + a megfelelő app/(<nyelv>)/... wrapper (az i18n-check összeveti).
// Import nélkül → a scripts/i18n-check.mjs közvetlenül betölti.

export const ROUTES = {
  home: { hu: '/', en: '/en', de: '/de' },
  devices: { hu: '/hallokeszulekek', en: '/en/hearing-aids', de: '/de/hoergeraete' },
  brand: { hu: '/hallokeszulekek/[slug]', en: '/en/hearing-aids/[slug]', de: '/de/hoergeraete/[slug]' },
  // ár-oldal: csak magyar (és jelenleg kikapcsolva, ld. app/(hu)/hallokeszulekek/arak)
  prices: { hu: '/hallokeszulekek/arak' },
  blog: { hu: '/blog', en: '/en/blog', de: '/de/blog' },
  post: { hu: '/blog/[slug]', en: '/en/blog/[slug]', de: '/de/blog/[slug]' },
  privacy: { hu: '/adatvedelem', en: '/en/privacy-policy', de: '/de/datenschutz' },
}

// Ha egy oldalnak nincs párja a másik nyelven (pl. lefordítatlan cikk), a nyelvválasztó ide esik vissza.
export const PARENT = { brand: 'devices', post: 'blog', prices: 'devices' }

// Útvonal egy route-kulcshoz; dinamikus route-nál a slugot a hívó adja. null, ha a nyelven nincs ilyen oldal.
export function routePath(route, locale, slug) {
  const pattern = ROUTES[route]?.[locale]
  if (!pattern) return null
  return slug ? pattern.replace('[slug]', slug) : pattern
}

// A főoldali időpont-szekció horgonya (HU: '/#idopont', EN: '/en#idopont')
export const contactPath = (locale) => `${routePath('home', locale)}#idopont`
