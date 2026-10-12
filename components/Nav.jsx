// Server component - SSR HTML rendereli
// Props: locale, current (route-kulcs: 'home' | 'devices' | 'brand' | 'prices' | 'blog' | 'post'),
// alternates (lib/i18n/alternates.js → getAlternates()), overlay.
import Link from 'next/link'
import { COMPANY, bookingUrls } from '../lib/constants'
import { getDictionary, fmt } from '../lib/i18n'
import { LIVE_LOCALES } from '../lib/i18n/config'
import { routePath, contactPath } from '../lib/i18n/routes'
import { getPosts } from '../lib/content/posts'
import Button from './Button'
import ScrollEffect from './nav/ScrollEffect'
import MobileMenu from './nav/MobileMenu'
import NavLinks from './nav/NavLinks'
import LangSwitcher from './LangSwitcher'
import LangSuggest from './LangSuggest'

export default function Nav({ locale, current, alternates, overlay = false }) {
  const t = getDictionary(locale)
  const home = routePath('home', locale)
  const booking = bookingUrls(locale)
  const links = alternates?.links || {}

  const items = [
    { key: 'home', href: home, label: t.nav.home },
    { key: 'devices', href: routePath('devices', locale), label: t.nav.products },
    // ár-oldal kikapcsolva (2026-10-04): { key: 'prices', href: routePath('prices', locale), label: t.nav.prices },
    { key: 'contact', href: contactPath(locale), label: t.nav.contact },
    // Blog csak ha az adott nyelven van cikk
    ...(getPosts(locale).length ? [{ key: 'blog', href: routePath('blog', locale), label: t.nav.blog }] : []),
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
              <span className="cta-full">{t.nav.ctaFull}</span>
              <span className="cta-short">{t.nav.ctaShort}</span>
            </Button>
          </div>
          <MobileMenu
            items={items}
            current={current}
            labels={{ aria: t.nav.mobileAria, open: t.nav.menuOpen, close: t.nav.menuClose }}
            cta={{ href: booking.adult, label: t.cta.bookExam }}
            langSwitch={<LangSwitcher links={links} current={locale} label={t.langSwitch.aria} variant="menu" />}
          />
        </div>
      </header>
      <ScrollEffect targetId="nav" />
      {Object.keys(offers).length > 0 && <LangSuggest current={locale} offers={offers} />}
    </>
  )
}
