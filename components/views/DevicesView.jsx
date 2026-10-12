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
import { routePath } from '../../lib/i18n/routes'
import { getAlternates } from '../../lib/i18n/alternates'
import { loadSite } from '../../lib/site'
import { metaAlternates } from '../../lib/seo'

export async function devicesMetadata(locale) {
  const t = (await loadSite(locale)).t.meta
  return {
    // absolute: a layout template („%s | ÉRTED Hallásgondozó") ne fűzze hozzá még egyszer
    title: { absolute: t.devicesTitle },
    description: t.devicesDescription,
    // saját canonical - különben a layout főoldali canonical-ját örökölné (főoldalnak hinné a Google)
    alternates: metaAlternates(routePath('devices', locale), getAlternates('devices').hreflang),
    robots: { index: true, follow: true },
  }
}

export default async function DevicesView({ locale }) {
  if (!isLive(locale)) notFound()
  const { t, c, site, a } = await loadSite(locale)
  const ta = a.dict.devices
  const { categories, brands } = c
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
              <div className="eyebrow" {...ta.eyebrow}>{t.devices.eyebrow}</div>
              <h1 {...ta.title}>{t.devices.title}</h1>
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
                        <span className="btn btn-outline btn-sm btn-full kbrand-card-btn" {...ta.more}>{t.devices.more}</span>
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
              <div className="eyebrow" {...ta.catEyebrow}>{t.devices.catEyebrow}</div>
              <h2 {...ta.catTitle}>{t.devices.catTitle}</h2>
              <p {...ta.catLead}>{t.devices.catLead}</p>
            </div>
            <div className="cards">
              {categories.map((c) => (
                <Reveal key={c.id} className="card">
                  <div className="ic-badge">
                    <Icon name={c.iconName} size={32} />
                  </div>
                  <h3 {...a.text.categories[c.id]?.title}>{c.title}</h3>
                  <p className="card-desc" {...a.text.categories[c.id]?.desc}>{c.desc}</p>
                  <p className="card-desc-short" {...a.text.categories[c.id]?.descShort}>{c.descShort}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Záró CTA */}
        <section className="block kcta">
          <div className="wrap">
            <Reveal>
              <h2 {...ta.ctaTitle}>{t.devices.ctaTitle}</h2>
              <p {...ta.ctaLead}>{t.devices.ctaLead}</p>
              <Button variant="gold" href={site.booking.adult}>
                <span {...a.dict.cta.bookHearingTest}>{t.cta.bookHearingTest}</span>
              </Button>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer locale={locale} alternates={alternates} />
    </>
  )
}
