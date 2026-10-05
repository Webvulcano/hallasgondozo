import Link from 'next/link'
import { BOOKING_URL, PHONE, EMAIL, COMPANY, SOCIAL, MAPS_URL, WEEK_HOURS } from '../lib/constants'
import Button from './Button'
import { Phone, Email, Facebook, Instagram, MapPin } from './icons'

const contactLinks = [
  { icon: <MapPin size={17} />, href: MAPS_URL, label: COMPANY.address, external: true },
  { icon: <Phone size={17} />, href: PHONE.href, label: PHONE.display, external: false },
  { icon: <Email size={17} />, href: `mailto:${EMAIL}`, label: EMAIL, external: false },
  { icon: <Facebook size={17} />, href: SOCIAL.facebook, label: SOCIAL.facebookHandle, external: true },
  { icon: <Instagram size={17} />, href: SOCIAL.instagram, label: SOCIAL.instagramHandle, external: true },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const today = new Date().getDay()

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          {/* Col 1 - Brand */}
          <div className="foot-col-brand">
            {/* Ugyanaz a fehér feliratos logó, mint a hero sarkában */}
            <div className="foot-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/pic/logo/logo_felirattal_black.webp"
                alt={`${COMPANY.brand} ${COMPANY.brandSub}`}
                className="foot-logo-img"
                width="1600"
                height="523"
              />
            </div>
            <p className="foot-address">
              {COMPANY.fullName}<br />
              {COMPANY.legalName}
            </p>
          </div>

          {/* Col 2 - Contact */}
          <div className="foot-col-contact">
            <h5>Elérhetőség</h5>
            <ul className="foot-list">
              {contactLinks.map((l) => (
                <li key={l.label}>
                  <span className="ic">{l.icon}</span>
                  <a
                    href={l.href}
                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Nyitvatartás */}
          <div className="foot-col-hours">
            <h5>Nyitvatartás</h5>
            <ul className="foot-hours-list">
              {WEEK_HOURS.map((d) => {
                const isToday = d.day === today
                return (
                  <li key={d.day} className={isToday ? 'is-today' : undefined}>
                    <span>{isToday ? 'Ma' : d.label}</span>
                    <span>{d.open ? `${d.open} - ${d.close}` : 'Zárva'}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Col 4 - CTA */}
          <div className="foot-col-cta">
            <h5>Foglaljon időpontot</h5>
            <div className="foot-cta">
              <Button variant="gold" href={BOOKING_URL}>
                Ingyenes vizsgálatot foglalok
              </Button>
              <Button variant="ghost-light" href={PHONE.href}>
                {PHONE.display}
              </Button>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {year} {COMPANY.legalName} - Minden jog fenntartva.</span>
          <span className="foot-bottom-links">
            <Link href="/adatvedelem">Adatvédelmi Szabályzat</Link>
            <span>
              Készítette:{' '}
              <a href="https://webvulcano.hu" target="_blank" rel="noopener">
                webvulcano.hu
              </a>
            </span>
          </span>
        </div>
      </div>
    </footer>
  )
}
