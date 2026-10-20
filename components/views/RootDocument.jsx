// A három nyelvi root layout (app/(hu|en|de)/layout.jsx) közös váza: <html lang>, fontok,
// MedicalBusiness JSON-LD, scroll-reset, CmsBridge (Ügyfél Admin vizuális szerkesztő - csak az admin
// iframe-jében aktív). Nyelvenként külön root layout → helyes <html lang> statikusan, proxy/middleware nélkül.
import { Analytics } from '@vercel/analytics/next'
import { fontVars } from '../../lib/fonts'
import { LOCALE_META } from '../../lib/i18n/config'
import { businessJsonLd } from '../../lib/seo'
import ScrollReset from '../ScrollReset'
import CmsBridge from '../cms/CmsBridge'
import JsonLd from '../cms/JsonLd'

export default async function RootDocument({ locale, children }) {
  const business = await businessJsonLd(locale)
  return (
    <html lang={LOCALE_META[locale].htmlLang} style={fontVars}>
      <body>
        <JsonLd data={business} />
        <ScrollReset />
        {children}
        <CmsBridge />
        {/* Vercel Web Analytics - sütimentes látogatottság-mérés (adatkezelési tájékoztató 4. pont) */}
        <Analytics />
      </body>
    </html>
  )
}
