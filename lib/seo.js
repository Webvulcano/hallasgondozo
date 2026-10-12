// SEO / GEO réteg nyelvenként: metadata-alternates (canonical + hreflang), root-metadata, JSON-LD.
// A hreflang-párok forrása a lib/i18n/alternates.js (ugyanaz, mint a nyelvválasztóé és a sitemapé).
import { SITE, COMPANY, SOCIAL, MAPS_URL, DOCTOR_URL, GEO } from './constants'
import { DEFAULT_LOCALE, LOCALE_META } from './i18n/config'
import { routePath } from './i18n/routes'
import { getAlternates } from './i18n/alternates'
import { fmt } from './i18n'
import { loadSite } from './site'

const SCHEMA_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export const absUrl = (path) => (path === '/' ? SITE.url : `${SITE.url}${path}`)

// metadata.alternates: saját canonical (minden nyelv ÖNMAGÁRA mutat) + hreflang, ha van nyelvi pár.
// x-default → a magyar (gyökér) változat.
export function metaAlternates(canonical, hreflang = {}) {
  const out = { canonical }
  const locales = Object.keys(hreflang)
  if (locales.length > 1) {
    out.languages = Object.fromEntries(locales.map((l) => [LOCALE_META[l].hreflang, hreflang[l]]))
    if (hreflang[DEFAULT_LOCALE]) out.languages['x-default'] = hreflang[DEFAULT_LOCALE]
  }
  return out
}

// openGraph.locale (+ alternateLocale, ha van nyelvi pár)
export function ogLocale(locale, hreflang = {}) {
  const others = Object.keys(hreflang).filter((l) => l !== locale)
  return {
    locale: LOCALE_META[locale].og,
    ...(others.length ? { alternateLocale: others.map((l) => LOCALE_META[l].og) } : {}),
  }
}

// Root layout metadata (a főoldal is ezt használja - nincs saját metadata-ja). Cím/leírás: CMS.
export async function rootMetadata(locale) {
  const { t, site } = await loadSite(locale)
  const home = routePath('home', locale)
  const { hreflang } = getAlternates('home')
  const description = fmt(t.meta.siteDescription, { count: site.rating.count })
  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: t.meta.siteTitle,
      template: `%s | ${COMPANY.brand} ${COMPANY.brandSub}`,
    },
    description,
    keywords: t.meta.keywords,
    authors: [{ name: COMPANY.legalName }],
    creator: COMPANY.legalName,
    publisher: COMPANY.legalName,
    alternates: metaAlternates(home, hreflang),
    openGraph: {
      type: 'website',
      ...ogLocale(locale, hreflang),
      url: absUrl(home),
      siteName: `${COMPANY.brand} ${COMPANY.brandSub}`,
      title: t.meta.siteTitle,
      description,
      images: [{ url: '/pic/logo/logo.png', width: 435, height: 434, alt: COMPANY.brand }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.siteTitle,
      description,
      images: ['/pic/logo/logo.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    icons: {
      icon: '/pic/logo/tiny_logo.png',
      apple: '/pic/logo/tiny_logo.png',
    },
  }
}

// MedicalBusiness JSON-LD (Google Maps / rich results). A NAP (név, cím, telefon) NEM fordul -
// minden nyelven ugyanaz az entitás. availableLanguage: csak ha az ügyfél megerősíti, hogy a
// csapat beszél németül/angolul (forras/atirando-szovegek.md).
export async function businessJsonLd(locale) {
  const { t, site } = await loadSite(locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    // Stabil entitás-azonosító: minden nyelvi változat UGYANARRA a vállalkozásra hivatkozik (GEO / Knowledge Graph)
    '@id': `${SITE.url}/#business`,
    name: COMPANY.fullName,
    legalName: COMPANY.legalName,
    url: SITE.url,
    logo: `${SITE.url}/pic/logo/logo.png`,
    image: `${SITE.url}/pic/logo/logo.png`,
    telephone: site.phone.display,
    email: site.email,
    foundingDate: String(COMPANY.yearFounded),
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.street,
      addressLocality: COMPANY.city,
      postalCode: COMPANY.postalCode,
      addressCountry: 'HU',
    },
    // A footerrel közös forrás (CMS alapadatok → site.hours) → nem csúszhat szét a kettő.
    openingHoursSpecification: site.hours.filter((h) => h.open).map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: SCHEMA_DAYS[h.day],
      opens: h.open.padStart(5, '0'),
      closes: h.close.padStart(5, '0'),
    })),
    geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lng },
    hasMap: MAPS_URL,
    areaServed: { '@type': 'City', name: 'Győr' },
    sameAs: [SOCIAL.facebook, SOCIAL.instagram],
    priceRange: '$$',
    medicalSpecialty: ['Otolaryngology', 'Audiology'],
    knowsAbout: t.schema.knowsAbout,
    availableService: [
      { '@type': 'MedicalTest', name: t.schema.serviceHearingTest },
      { '@type': 'MedicalTest', name: t.schema.serviceChildTest },
      { '@type': 'MedicalTherapy', name: t.schema.serviceFitting },
    ],
    // E-E-A-T: a hallókészülék-ellátást végző szakorvos, a saját oldalára mutatva
    employee: {
      '@type': 'Person',
      name: 'Dr. Vasvári Gergely Pál',
      jobTitle: t.schema.doctorJobTitle,
      url: DOCTOR_URL,
    },
  }
}

// BreadcrumbList JSON-LD: [[név, abszolút URL], …]
export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, item], i) => ({ '@type': 'ListItem', position: i + 1, name, item })),
  }
}

// FAQPage JSON-LD: [{ q, a }]
export function faqJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}
