import './globals.css'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import { SITE, COMPANY, PHONE, EMAIL, SOCIAL, MAPS_URL, DOCTOR_URL, GEO } from '../lib/constants'
import ScrollReset from '../components/ScrollReset'

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
}) 

const sourceSans = Source_Sans_3({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-source-sans',
  display: 'swap',
})

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
    <html lang="hu" className={`${playfair.variable} ${sourceSans.variable}`}>
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
