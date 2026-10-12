import Link from 'next/link'
import { PHONE, EMAIL, COMPANY, SOCIAL, MAPS_URL, WEEK_HOURS, bookingUrls } from '../lib/constants'
import { getDictionary } from '../lib/i18n'
import { routePath } from '../lib/i18n/routes'
import Button from './Button'
import LangSwitcher from './LangSwitcher'
import { Phone, Email, Facebook, Instagram, MapPin } from './icons'

const contactLinks = [
  { icon: <MapPin size={17} />, href: MAPS_URL, label: COMPANY.address, external: true },
  { icon: <Phone size={17} />, href: PHONE.href, label: PHONE.display, external: false },
  { icon: <Email size={17} />, href: `mailto:${EMAIL}`, label: EMAIL, external: false },
  { icon: <Facebook size={17} />, href: SOCIAL.facebook, label: SOCIAL.facebookHandle, external: true },
  { icon: <Instagram size={17} />, href: SOCIAL.instagram, label: SOCIAL.instagramHandle, external: true },
]

// Props: locale, alternates (getAlternates() - a footer nyelvi linkjeihez)
export default function Footer({ locale, alternates }) {
  const dict = getDictionary(locale)
  const t = dict.footer
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
                width="480"
                height="157"
                loading="lazy"
              />
            </div>
            <p className="foot-address">
              {COMPANY.fullName}<br />
              {COMPANY.legalName}
            </p>
          </div>

          {/* Col 2 - Contact */}
          <div className="foot-col-contact">
            <h5>{t.contact}</h5>
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
            <h5>{t.hours}</h5>
            <ul className="foot-hours-list">
              {WEEK_HOURS.map((d) => {
                const isToday = d.day === today
                return (
                  <li key={d.day} className={isToday ? 'is-today' : undefined}>
                    <span>{isToday ? t.today : t.days[d.day]}</span>
                    <span>{d.open ? `${d.open} - ${d.close}` : t.closed}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Col 4 - CTA */}
          <div className="foot-col-cta">
            <h5>{t.book}</h5>
            <div className="foot-cta">
              <Button variant="gold" href={bookingUrls(locale).adult}>
                {dict.cta.bookExam}
              </Button>
              <Button variant="ghost-light" href={PHONE.href}>
                {PHONE.display}
              </Button>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {year} {COMPANY.legalName} - {t.rights}</span>
          <span className="foot-bottom-links">
            <LangSwitcher links={alternates?.links} current={locale} label={dict.langSwitch.aria} variant="footer" />
            <Link href={routePath('privacy', locale)}>{t.privacy}</Link>
            <span>
              {t.madeBy}{' '}
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
