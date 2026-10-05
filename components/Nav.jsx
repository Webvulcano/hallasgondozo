// Server component - SSR HTML rendereli
import Link from 'next/link'
import { BOOKING_URL, COMPANY } from '../lib/constants'
import Button from './Button'
import ScrollEffect from './nav/ScrollEffect'
import MobileMenu from './nav/MobileMenu'
import NavLinks from './nav/NavLinks'

export default function Nav({ overlay = false }) {
  return (
    <>
      <header className={`nav${overlay ? ' nav-overlay' : ''}`} id="nav">
        <div className="wrap nav-inner">
          <Link href="/" className="logo" aria-label={`${COMPANY.brand} ${COMPANY.brandSub} főoldal`}>
            {/* Feliratos logó (ikon + „ÉRTED Hallásgondozó") — a link aria-labelje adja a nevet */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pic/logo/logo-atlatszo-felirattal.webp"
              alt=""
              aria-hidden="true"
              className="logo-img logo-img--wordmark"
              width="597"
              height="180"
            />
          </Link>
          <NavLinks />
          <div className="nav-right">
            <Button variant="gold" href={BOOKING_URL}>
              <span className="cta-full">Ingyenes vizsgálatot foglalok</span>
              <span className="cta-short">Időpont foglalás</span>
            </Button>
          </div>
          <MobileMenu />
        </div>
      </header>
      <ScrollEffect targetId="nav" />
    </>
  )
}
