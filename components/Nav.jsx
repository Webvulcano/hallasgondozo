// Server component — SSR HTML rendereli
import Link from 'next/link'
import { BOOKING_URL, COMPANY } from '../lib/constants'
import Button from './Button'
import PhoneLink from './PhoneLink'
import ScrollEffect from './nav/ScrollEffect'
import MobileMenu from './nav/MobileMenu'

export default function Nav() {
  return (
    <>
      <header className="nav" id="nav">
        <div className="wrap nav-inner">
          <Link href="/" className="logo" aria-label={`${COMPANY.brand} ${COMPANY.brandSub} főoldal`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/pic/logo.png" alt="" aria-hidden="true" className="logo-img" />
            <span className="logo-text">
              <b>{COMPANY.brand}</b>
              <span>{COMPANY.brandSub}</span>
            </span>
          </Link>
          <nav className="nav-menu" aria-label="Fő menü">
            <Link href="/" className="nav-link">Főoldal</Link>
            <Link href="/keszulekek" className="nav-link">Termékek</Link>
          </nav>
          <div className="nav-right">
            <PhoneLink variant="nav" />
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
