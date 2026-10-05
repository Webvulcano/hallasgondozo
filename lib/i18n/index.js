// i18n belépési pont: szótár + formázó segédek. CSAK szerver-komponensből importáld
// (kliens-komponens propként kapja a neki kellő al-objektumot → nem kerül minden nyelv a bundle-be).
import hu from './dictionaries/hu'
import en from './dictionaries/en'
import de from './dictionaries/de'
import { LOCALE_META } from './config'

export { fmt } from './fmt'

const DICTIONARIES = { hu, en, de }

export function getDictionary(locale) {
  const dict = DICTIONARIES[locale]
  if (!dict) throw new Error(`[i18n] Ismeretlen nyelv: ${locale}`)
  return dict
}

// Dátum a nyelv formátumában (hu: „2026. április 22.", de: „22. April 2026")
export function formatDate(iso, locale) {
  return new Date(iso).toLocaleDateString(LOCALE_META[locale].intl, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
