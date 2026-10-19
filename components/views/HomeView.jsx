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
import { getAlternates } from '../../lib/i18n/alternates'
import { loadSite } from '../../lib/site'
import { faqJsonLd } from '../../lib/seo'

// HowTo lépés-szöveg: desc (ha van) + al-lépések (cím, vagy cím nélkülinél a leírás). Üres részek kimaradnak.
function howToText(s) {
  const sub = (s.sub || []).map((x) => x.title || x.desc.replace(/\.$/, '')).filter(Boolean)
  return [s.desc, sub.length ? `${sub.join('; ')}.` : null].filter(Boolean).join(' ')
}

export default async function HomeView({ locale }) {
  if (!isLive(locale)) notFound()
  const { t, c, site, a } = await loadSite(locale)
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
      text: howToText(s),
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
      <Journey steps={c.journey} t={t.journey} schema={howToSchema} a={{ steps: a.text.journey, images: a.img.journey, ...a.dict.journey }} />
      <Testimonials locale={locale} />
      <Booking locale={locale} />
      <Faq faqs={c.faqs} visible={c.faqVisible} schema={faqJsonLd(c.faqs)} t={t.faq} a={{ items: a.text.faqs, ...a.dict.faq }} />
      <Footer locale={locale} />
      <PromoPopup promo={c.promo} ctaHref={site.booking.adult} closeLabel={t.promo.close} a={{ ...a.text.promo, image: a.img.promo.image }} />
    </>
  )
}
