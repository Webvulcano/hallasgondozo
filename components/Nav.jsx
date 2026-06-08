// Server component — SSR HTML rendereli
import { BOOKING_URL, COMPANY } from '../lib/constants'
import Button from './Button'
import PhoneLink from './PhoneLink'
import ScrollEffect from './nav/ScrollEffect'

export default function Nav() {
  return (
    <>
      <header className="nav" id="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="logo" aria-label={`${COMPANY.brand} ${COMPANY.brandSub} főoldal`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/pic/logo.png" alt="" aria-hidden="true" className="logo-img" />
            <span className="logo-text">
              <b>{COMPANY.brand}</b>
              <span>{COMPANY.brandSub}</span>
            </span>
          </a>
          <div className="nav-right">
            <PhoneLink variant="nav" />
            <Button variant="gold" href={BOOKING_URL}>
              Ingyenes vizsgálatot foglalok
            </Button>
          </div>
        </div>
      </header>
      <ScrollEffect targetId="nav" />
    </>
  )
}
