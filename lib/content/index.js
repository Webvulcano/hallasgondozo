// Tartalom-összefésülő: nyelvfüggetlen alap (lib/content/*.js: id, ikon, kép) + nyelvi szöveg
// (lib/content/locales/<nyelv>/*.js, id-kulccsal). Egy képcsere = 1 fájl, nem 3.
// CSAK szerver-komponensből importáld; kliens-komponens propként kapja a neki kellő részt.
import { categoryBase, brandBase } from './devices'
import { serviceBase } from './services'
import { teamBase } from './team'
import { journeyBase } from './journey'
import { testimonialBase } from './testimonials'
import { promoBase } from './promo'
import { offerBase } from './offer'
import { FAQ_VISIBLE } from './faq'
import { partners } from './partners'

import * as huHome from './locales/hu/home'
import * as huDevices from './locales/hu/devices'
import * as huFaq from './locales/hu/faq'
import * as enHome from './locales/en/home'
import * as enDevices from './locales/en/devices'
import * as enFaq from './locales/en/faq'
import * as deHome from './locales/de/home'
import * as deDevices from './locales/de/devices'
import * as deFaq from './locales/de/faq'

// Nyelvenkénti szöveg-forrás. A CMS-manifest (lib/cms-schema.js) is innen veszi az alapértékeket.
export const TEXT = {
  hu: { ...huHome, ...huDevices, ...huFaq },
  en: { ...enHome, ...enDevices, ...enFaq },
  de: { ...deHome, ...deDevices, ...deFaq },
}

// Alap-elemek + az id-jükhöz tartozó szöveg. Hiányzó szöveg → build-hiba (ne menjen ki üres kártya).
function merge(base, texts, what, locale, key = 'id') {
  return base.map((b) => {
    const t = texts?.[b[key]]
    if (!t) throw new Error(`[content] Hiányzó szöveg: ${locale} / ${what} / ${b[key]}`)
    return { ...b, ...t }
  })
}

// Tartalom egy nyelvi szöveg-objektumból (TEXT alakú). A CMS-es változat (lib/site.js) a CMS-értékekkel
// felülírt szöveggel hívja; a getContent a fájlokban lévő alapszöveggel.
export function buildContent(t, locale) {
  const brands = merge(brandBase, t.brands, 'brands', locale).map(({ galleryAlts, ...b }) => ({
    ...b,
    gallery: b.gallery.map((src, i) => ({ src, alt: galleryAlts?.[i] ?? '' })),
  }))

  return {
    categories: merge(categoryBase, t.categories, 'categories', locale),
    brands,
    services: merge(serviceBase, t.services, 'services', locale),
    servicesTrust: t.servicesTrust,
    team: merge(teamBase, t.team, 'team', locale),
    journey: merge(journeyBase, t.journey, 'journey', locale, 'n'),
    testimonials: merge(testimonialBase, t.testimonials, 'testimonials', locale),
    promo: { ...promoBase, ...t.promo },
    offer: { ...offerBase, ...t.offer },
    offerFeatures: t.offerFeatures,
    faqs: t.faqs,
    faqVisible: FAQ_VISIBLE,
    partners, // egészségpénztár-nevek: tulajdonnevek, nem fordulnak
  }
}

const cache = {}

// Alapszöveg (fájlokból, CMS nélkül): slugok, statikus paraméterek, sitemap, alternates.
// Oldal-rendereléshez a lib/site.js loadSite()-ját használd (az a CMS-ből olvas).
export function getContent(locale) {
  if (cache[locale]) return cache[locale]
  const t = TEXT[locale]
  if (!t) throw new Error(`[content] Ismeretlen nyelv: ${locale}`)
  return (cache[locale] = buildContent(t, locale))
}

export const getBrandBySlug = (locale, slug) => getContent(locale).brands.find((b) => b.slug === slug) || null
export const getBrandById = (locale, id) => getContent(locale).brands.find((b) => b.id === id) || null
