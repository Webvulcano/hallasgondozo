// Server component - SSR HTML rendereli
// Props: locale, current (route-kulcs: 'home' | 'devices' | 'brand' | 'prices' | 'blog' | 'post'),
// alternates (lib/i18n/alternates.js → getAlternates()), overlay.
import Link from 'next/link'
import { COMPANY } from '../lib/constants'
import { getDictionary, fmt } from '../lib/i18n'
import { loadSite } from '../lib/site'
import { LIVE_LOCALES } from '../lib/i18n/config'
import { routePath, contactPath } from '../lib/i18n/routes'
import Button from './Button'
import ScrollEffect from './nav/ScrollEffect'
import MobileMenu from './nav/MobileMenu'
import NavLinks from './nav/NavLinks'
import LangSwitcher from './LangSwitcher'
import LangSuggest from './LangSuggest'

export default async function Nav({ locale, current, alternates, overlay = false }) {
  const { t, site, a } = await loadSite(locale)
  const ta = a.dict.nav
  const home = routePath('home', locale)
  const booking = site.booking
  const links = alternates?.links || {}

  // attr: szerkesztő-jelölés (Ügyfél Admin), látogatónál ártalmatlan data-attribútum
  const items = [
    { key: 'home', href: home, label: t.nav.home, attr: ta.home },
    { key: 'devices', href: routePath('devices', locale), label: t.nav.products, attr: ta.products },
    // ár-oldal kikapcsolva (2026-10-04): { key: 'prices', href: routePath('prices', locale), label: t.nav.prices },
    { key: 'contact', href: contactPath(locale), label: t.nav.contact, attr: ta.contact },
    // Blog csak ha az adott nyelven van közzétett cikk (CMS)
    ...(site.blogLocales.includes(locale) ? [{ key: 'blog', href: routePath('blog', locale), label: t.nav.blog, attr: ta.blog }] : []),
  ]

  // Nyelvjavaslat-sáv: a többi élő nyelv szövege a SAJÁT nyelvén (pl. „Diese Seite gibt es auch auf Deutsch")
  const offers = Object.fromEntries(
    LIVE_LOCALES.filter((l) => l !== locale && links[l]).map((l) => {
      const s = getDictionary(l).langSwitch
      return [l, { href: links[l], text: s.suggest, cta: s.suggestCta, dismiss: s.suggestDismiss }]
    })
  )

  return (
    <>
      <header className={`nav${overlay ? ' nav-overlay' : ''}`} id="nav">
        <div className="wrap nav-inner">
          <Link href={home} className="logo" aria-label={fmt(t.nav.logoAria, { brand: `${COMPANY.brand} ${COMPANY.brandSub}` })}>
            {/* Feliratos logó (ikon + „ÉRTED Hallásgondozó") — a link aria-labelje adja a nevet */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pic/logo/logo-atlatszo-felirattal.webp"
              alt=""
              aria-hidden="true"
              className="logo-img logo-img--wordmark"
              width="420"
              height="127"
            />
          </Link>
          <NavLinks items={items} current={current} ariaLabel={t.nav.mainAria} />
          <div className="nav-right">
            <LangSwitcher links={links} current={locale} label={t.langSwitch.aria} variant="nav" />
            <Button variant="gold" href={booking.adult}>
              <span className="cta-full" {...ta.ctaFull}>{t.nav.ctaFull}</span>
              <span className="cta-short" {...ta.ctaShort}>{t.nav.ctaShort}</span>
            </Button>
          </div>
          <MobileMenu
            items={items}
            current={current}
            labels={{ aria: t.nav.mobileAria, open: t.nav.menuOpen, close: t.nav.menuClose }}
            cta={{ href: booking.adult, label: t.cta.bookExam, attr: a.dict.cta.bookExam }}
            contact={{ phone: site.phone, email: site.email, phoneAttr: a.const.phone, emailAttr: a.const.email }}
            langSwitch={<LangSwitcher links={links} current={locale} label={t.langSwitch.aria} variant="menu" />}
          />
        </div>
      </header>
      <ScrollEffect targetId="nav" />
      {Object.keys(offers).length > 0 && <LangSuggest current={locale} offers={offers} />}
    </>
  )
}
