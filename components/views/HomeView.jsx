// Főoldal (/, /en, /de). Metadata: a nyelvi root layoutból (lib/seo.js → rootMetadata).
// Nyitó logó-animáció KIKAPCSOLVA (2026-10-05): a fehér takaróréteg miatt az LCP 4,2 mp volt
// (PageSpeed mobil). Visszakapcsoláshoz: import + <Splash /> vissza, és hero.css .hero-logo-corner opacity:0.
// import Splash from '../Splash'
import { notFound } from 'next/navigation'
import Nav from '../Nav'
import HeroVideo from '../HeroVideo'
import Partners from '../Partners'
import Services from '../Services'
import Offer from '../Offer'
import Team from '../Team'
import Testimonials from '../Testimonials'
import Journey from '../Journey'
import Booking from '../Booking'
import Faq from '../Faq'
import Footer from '../Footer'
import PromoPopup from '../PromoPopup'
import { isLive } from '../../lib/i18n/config'
import { getDictionary } from '../../lib/i18n'
import { getAlternates } from '../../lib/i18n/alternates'
import { getContent } from '../../lib/content'
import { bookingUrls } from '../../lib/constants'
import { faqJsonLd } from '../../lib/seo'

export default function HomeView({ locale }) {
  if (!isLive(locale)) notFound()
  const t = getDictionary(locale)
  const c = getContent(locale)
  const alternates = getAlternates('home')

  // HowTo JSON-LD — AEO / AI-keresők (seo-geo-aeo-fokusz.md 🟡).
  // A fő lépéseket adjuk meg; a desc + al-lépések szövege a text mezőbe fűzve.
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: t.journey.title,
    description: t.journey.howToDescription,
    step: c.journey.map((s) => ({
      '@type': 'HowToStep',
      position: s.n,
      name: s.title,
      text: s.sub ? `${s.desc} ${s.sub.map((x) => x.title).join('; ')}.` : s.desc,
    })),
  }

  return (
    <>
      {/* <Splash /> — kikapcsolva, ld. fent */}
      <Nav locale={locale} current="home" alternates={alternates} overlay />
      <span id="top" />
      <HeroVideo locale={locale} />
      <Services locale={locale} />
      {/* <Offer locale={locale} /> — nyári ajánlat kikommentezve */}
      <Team locale={locale} />
      <Partners locale={locale} />
      <Journey steps={c.journey} t={t.journey} schema={howToSchema} />
      <Testimonials locale={locale} />
      <Booking locale={locale} />
      <Faq faqs={c.faqs} visible={c.faqVisible} schema={faqJsonLd(c.faqs)} t={t.faq} />
      <Footer locale={locale} alternates={alternates} />
      <PromoPopup promo={c.promo} ctaHref={bookingUrls(locale).adult} closeLabel={t.promo.close} />
    </>
  )
}
