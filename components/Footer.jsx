import Link from 'next/link'
import { COMPANY, SOCIAL, MAPS_URL } from '../lib/constants'
import { loadSite } from '../lib/site'
import { routePath } from '../lib/i18n/routes'
import Button from './Button'
import LangSwitcher from './LangSwitcher'
import FooterHours, { CurrentYear } from './FooterHours'
import { Phone, Email, Facebook, Instagram, MapPin } from './icons'

// Props: locale, alternates (getAlternates() - a footer nyelvi linkjeihez)
export default async function Footer({ locale, alternates }) {
  const { t: dict, site, a } = await loadSite(locale)
  const t = dict.footer
  const ta = a.dict.footer
  const contactLinks = [
    { icon: <MapPin size={17} />, href: MAPS_URL, label: COMPANY.address, external: true },
    { icon: <Phone size={17} />, href: site.phone.href, label: site.phone.display, external: false, attr: a.const.phone },
    { icon: <Email size={17} />, href: `mailto:${site.email}`, label: site.email, external: false, attr: a.const.email },
    { icon: <Facebook size={17} />, href: SOCIAL.facebook, label: SOCIAL.facebookHandle, external: true },
    { icon: <Instagram size={17} />, href: SOCIAL.instagram, label: SOCIAL.instagramHandle, external: true },
  ]
  // Build éve: csak tartalék, a böngésző a valódit írja be (CurrentYear)
  const year = new Date().getFullYear()

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
            <h5 {...ta.contact}>{t.contact}</h5>
            <ul className="foot-list">
              {contactLinks.map((l) => (
                <li key={l.label}>
                  <span className="ic">{l.icon}</span>
                  <a
                    href={l.href}
                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    {...l.attr}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Nyitvatartás */}
          <div className="foot-col-hours">
            <h5 {...ta.hours}>{t.hours}</h5>
            <FooterHours hours={site.hours} days={t.days} todayLabel={t.today} closed={t.closed} attr={a.const.hours_list} />
          </div>

          {/* Col 4 - CTA */}
          <div className="foot-col-cta">
            <h5 {...ta.book}>{t.book}</h5>
            <div className="foot-cta">
              <Button variant="gold" href={site.booking.adult}>
                <span {...a.dict.cta.bookExam}>{dict.cta.bookExam}</span>
              </Button>
              <Button variant="ghost-light" href={site.phone.href}>
                <span {...a.const.phone}>{site.phone.display}</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© <CurrentYear fallback={year} /> {COMPANY.legalName} - {t.rights}</span>
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
