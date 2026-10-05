import './globals.css'
import localFont from 'next/font/local'
import { SITE, COMPANY, PHONE, EMAIL, SOCIAL, MAPS_URL, DOCTOR_URL, GEO } from '../lib/constants'
import ScrollReset from '../components/ScrollReset'

// Betűtípusok — SAJÁT, magyar karakterkészletre szűkített változó fontok (app/fonts/).
// Teljesítmény (PageSpeed mobil): a Google latin + latin-ext fájljai 143 KB voltak, és az
// első kirajzolás előtt letöltődtek (LCP +0,9 mp). A szűkítés: latin-hu = alap latin +
// Latin-1 (áéíóöúü…) + a használt írásjelek; hu-ext = csak Ő ő Ű ű — ez külön, kis fájl,
// unicode-range-dzsel, így csak akkor töltődik, ha ilyen betű van az oldalon. Összesen 55 KB.
// Forrás: Google Fonts (OFL), pyftsubset. Új karakter (pl. ő/ű-n túli ékezet) → újra-szűkítés.
const playfairLatin = localFont({
  src: './fonts/playfair-display-latin-hu.woff2',
  weight: '400 900',
  display: 'swap',
  preload: false, // csak címek — swap-pel érkezik, ne versenyezzen az LCP-poszterrel
  adjustFontFallback: 'Times New Roman',
})
const playfairExt = localFont({
  src: './fonts/playfair-display-hu-ext.woff2',
  weight: '400 900',
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
  declarations: [{ prop: 'unicode-range', value: 'U+0150-0151, U+0170-0171' }],
})
const sourceSansLatin = localFont({
  src: './fonts/source-sans-3-latin-hu.woff2',
  weight: '200 900',
  display: 'swap',
  preload: true,
  adjustFontFallback: 'Arial',
})
const sourceSansExt = localFont({
  src: './fonts/source-sans-3-hu-ext.woff2',
  weight: '200 900',
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
  declarations: [{ prop: 'unicode-range', value: 'U+0150-0151, U+0170-0171' }],
})

// A CSS mindenhol var(--font-playfair) / var(--font-source-sans)-t használ. Az ext család
// áll ELÖL: a unicode-range miatt csak az Ő ő Ű ű-re vonatkozik, minden más betű a latin
// fájlból (illetve annak méretre igazított tartalék-betűjéből) jön.
const fontVars = {
  '--font-playfair': `${playfairExt.style.fontFamily}, ${playfairLatin.style.fontFamily}`,
  '--font-source-sans': `${sourceSansExt.style.fontFamily}, ${sourceSansLatin.style.fontFamily}`,
}

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${COMPANY.brand} ${COMPANY.brandSub}`,
  },
  description: SITE.description,
  keywords: ['hallókészülék Győr', 'hallásvizsgálat Győr', 'ingyenes hallásvizsgálat', 'audiológus Győr', 'fül-orr-gégész', 'gyermek hallásvizsgálat', 'TB-támogatás', 'Phonak', 'Signia', 'Oticon', 'Starkey'],
  authors: [{ name: COMPANY.legalName }],
  creator: COMPANY.legalName,
  publisher: COMPANY.legalName,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: SITE.url,
    siteName: `${COMPANY.brand} ${COMPANY.brandSub}`,
    title: SITE.title,
    description: SITE.description,
    images: [{ url: '/pic/logo/logo.png', width: 435, height: 434, alt: COMPANY.brand }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
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

// LocalBusiness JSON-LD schema for Google Maps / rich results
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: COMPANY.fullName,
  legalName: COMPANY.legalName,
  url: SITE.url,
  logo: `${SITE.url}/pic/logo/logo.png`,
  image: `${SITE.url}/pic/logo/logo.png`,
  telephone: PHONE.display,
  email: EMAIL,
  foundingDate: String(COMPANY.yearFounded),
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.street,
    addressLocality: COMPANY.city,
    postalCode: COMPANY.postalCode,
    addressCountry: 'HU',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  geo: { '@type': 'GeoCoordinates', latitude: GEO.lat, longitude: GEO.lng },
  hasMap: MAPS_URL,
  areaServed: { '@type': 'City', name: 'Győr' },
  sameAs: [SOCIAL.facebook, SOCIAL.instagram],
  priceRange: '$$',
  medicalSpecialty: ['Otolaryngology', 'Audiology'],
  knowsAbout: ['hallókészülék', 'hallásvizsgálat', 'gyermek hallásvizsgálat', 'audiológia', 'fül-orr-gégészet'],
  availableService: [
    { '@type': 'MedicalTest', name: 'Ingyenes hallásvizsgálat' },
    { '@type': 'MedicalTest', name: 'Gyermek hallásvizsgálat' },
    { '@type': 'MedicalTherapy', name: 'Hallókészülék-ellátás és -beállítás' },
  ],
  // E-E-A-T: a hallókészülék-ellátást végző szakorvos, a saját oldalára mutatva
  employee: {
    '@type': 'Person',
    name: 'Dr. Vasvári Gergely Pál',
    jobTitle: 'Fül-orr-gégész, audiológus szakorvos',
    url: DOCTOR_URL,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="hu" style={fontVars}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollReset />
        {children}
      </body>
    </html>
  )
}
