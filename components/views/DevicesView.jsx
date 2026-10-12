// Termékek / márkák listaoldal (/hallokeszulekek, /en/hearing-aids, /de/hoergeraete)
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '../Nav'
import Footer from '../Footer'
import Reveal from '../Reveal'
import Button from '../Button'
import { Icon } from '../icons'
import SkeletonImage from '../SkeletonImage'
import { isLive } from '../../lib/i18n/config'
import { getDictionary } from '../../lib/i18n'
import { routePath } from '../../lib/i18n/routes'
import { getAlternates } from '../../lib/i18n/alternates'
import { getContent } from '../../lib/content'
import { bookingUrls } from '../../lib/constants'
import { metaAlternates } from '../../lib/seo'

export function devicesMetadata(locale) {
  const t = getDictionary(locale).meta
  return {
    // absolute: a layout template („%s | ÉRTED Hallásgondozó") ne fűzze hozzá még egyszer
    title: { absolute: t.devicesTitle },
    description: t.devicesDescription,
    // saját canonical - különben a layout főoldali canonical-ját örökölné (főoldalnak hinné a Google)
    alternates: metaAlternates(routePath('devices', locale), getAlternates('devices').hreflang),
    robots: { index: true, follow: true },
  }
}

export default function DevicesView({ locale }) {
  if (!isLive(locale)) notFound()
  const t = getDictionary(locale)
  const { categories, brands } = getContent(locale)
  const alternates = getAlternates('devices')

  return (
    <>
      <Nav locale={locale} current="devices" alternates={alternates} />
      <span id="top" />
      <main>
        {/* Page-hero */}
        <section className="block kpage-hero">
          <div className="wrap">
            <Reveal>
              <div className="eyebrow">{t.devices.eyebrow}</div>
              <h1>{t.devices.title}</h1>
            </Reveal>
          </div>
        </section>

        {/* Forgalmazott márkák - egy sorban, kép + név */}
        <section className="block kbrands" id="markak" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="kbrand-row">
              {brands.map((b) => {
                const card = (
                  <>
                    <div className="kbrand-card-name">{b.name}</div>
                    <div className="kbrand-card-ph">
                      {b.image ? (
                        <SkeletonImage src={b.image} alt={b.imageAlt} className="kbrand-card-img" />
                      ) : (
                        <span className="ph-label">[ {t.devices.imagePlaceholder}: {b.imageAlt} ]</span>
                      )}
                    </div>
                    {b.slug && (
                      <div className="kbrand-card-foot">
                        <span className="btn btn-outline btn-sm btn-full kbrand-card-btn">{t.devices.more}</span>
                      </div>
                    )}
                  </>
                )
                return (
                  <Reveal key={b.id} className="kbrand-card-wrap">
                    {b.slug ? (
                      <Link href={routePath('brand', locale, b.slug)} className="kbrand-card kbrand-card--link">
                        {card}
                      </Link>
                    ) : (
                      <div className="kbrand-card">{card}</div>
                    )}
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* Termékkínálat - kategóriák */}
        <section className="block services" id="kategoriak">
          <div className="wrap">
            <div className="sec-head">
              <div className="eyebrow">{t.devices.catEyebrow}</div>
              <h2>{t.devices.catTitle}</h2>
              <p>{t.devices.catLead}</p>
            </div>
            <div className="cards">
              {categories.map((c) => (
                <Reveal key={c.id} className="card">
                  <div className="ic-badge">
                    <Icon name={c.iconName} size={32} />
                  </div>
                  <h3>{c.title}</h3>
                  <p className="card-desc">{c.desc}</p>
                  <p className="card-desc-short">{c.descShort}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Záró CTA */}
        <section className="block kcta">
          <div className="wrap">
            <Reveal>
              <h2>{t.devices.ctaTitle}</h2>
              <p>{t.devices.ctaLead}</p>
              <Button variant="gold" href={bookingUrls(locale).adult}>
                {t.cta.bookHearingTest}
              </Button>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer locale={locale} alternates={alternates} />
    </>
  )
}
