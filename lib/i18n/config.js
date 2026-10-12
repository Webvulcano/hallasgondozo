// Nyelvi alapbeállítások - minden i18n-logika innen indul.
// Tiszta adat + függvények, import nélkül → a scripts/i18n-check.mjs közvetlenül betölti.

export const LOCALES = ['hu', 'en', 'de']
export const DEFAULT_LOCALE = 'hu'

export const LOCALE_META = {
  hu: { htmlLang: 'hu', hreflang: 'hu', og: 'hu_HU', intl: 'hu-HU', label: 'Magyar', short: 'HU' },
  en: { htmlLang: 'en', hreflang: 'en', og: 'en_GB', intl: 'en-GB', label: 'English', short: 'EN' },
  de: { htmlLang: 'de', hreflang: 'de', og: 'de_DE', intl: 'de-DE', label: 'Deutsch', short: 'DE' },
}

// ÉLESÍTÉSI KAPU - mely nyelvek publikusak. Szerveroldali env, BUILD-időben olvasva (a lapok statikusak →
// változtatás után újra kell deployolni). Alapérték: csak 'hu' (fail-safe: elfelejtett env = nincs
// félkész nyelv élesben). A magyar mindig él.
//   .env.local / Vercel Preview:  LIVE_LOCALES=hu,en,de
//   Vercel Production:            nincs beállítva (→ hu), amíg a fordítás nincs jóváhagyva
// Nem élő nyelv: oldalai 404, nincs sitemapben, nincs hreflang, nincs a nyelvválasztóban.
// ⚠️ A next.config.mjs ugyanezt a változót külön olvassa (/de átirányítás) - ott is ugyanígy kezeld.
const requested = (process.env.LIVE_LOCALES || DEFAULT_LOCALE).split(',').map((s) => s.trim())
export const LIVE_LOCALES = LOCALES.filter((l) => l === DEFAULT_LOCALE || requested.includes(l))

export const isLocale = (l) => LOCALES.includes(l)
export const isLive = (l) => LIVE_LOCALES.includes(l)
