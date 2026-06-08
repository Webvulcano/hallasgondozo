import { BOOKING_URL, PHONE, EMAIL, COMPANY, SOCIAL } from '../lib/constants'
import Button from './Button'
import { Phone, Email, Facebook, Instagram } from './icons'

const contactLinks = [
  { icon: <Phone size={17} />, href: PHONE.href, label: PHONE.display, external: false },
  { icon: <Email size={17} />, href: `mailto:${EMAIL}`, label: EMAIL, external: false },
  { icon: <Facebook size={17} />, href: SOCIAL.facebook, label: SOCIAL.facebookHandle, external: true },
  { icon: <Instagram size={17} />, href: SOCIAL.instagram, label: SOCIAL.instagramHandle, external: true },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          {/* Col 1 — Brand */}
          <div>
            <div className="logo foot-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/pic/logo.png"
                alt=""
                aria-hidden="true"
                className="logo-img logo-img--inverted"
              />
              <span className="logo-text">
                <b>{COMPANY.brand}</b>
                <span>{COMPANY.brandSub}</span>
              </span>
            </div>
            <p className="foot-address">
              {COMPANY.fullName}<br />
              {COMPANY.legalName}<br />
              {COMPANY.address}
            </p>
          </div>

          {/* Col 2 — Contact */}
          <div>
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
            <p className="foot-hours foot-hours-mt">Nyitvatartás: {COMPANY.hours}</p>
          </div>

          {/* Col 3 — CTA */}
          <div>
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
          <span>© {year} {COMPANY.legalName} — Minden jog fenntartva.</span>
          {/* TEMP: Adatvédelmi Szabályzat gomb ideiglenesen elrejtve */}
          {/* <a href="/adatvedelem">Adatvédelmi Szabályzat</a> */}
        </div>
      </div>
    </footer>
  )
}
