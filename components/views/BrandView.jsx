// Márkaoldal (/hallokeszulekek/[slug], /en/hearing-aids/[slug], /de/hoergeraete/[slug]).
// Minden márka (lib/content: brandBase + nyelvi szöveg) egy statikus oldal; a slug nyelvenként eltér,
// a nyelvi párokat a márka id-je köti össze.
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '../Nav'
import Footer from '../Footer'
import Reveal from '../Reveal'
import Button from '../Button'
import SkeletonImage from '../SkeletonImage'
import ProductGallery from '../product/ProductGallery'
import ProductTabs from '../product/ProductTabs'
import ReviewSlider from '../product/ReviewSlider'
import TrustRow from '../product/TrustRow'
import ProductFaq from '../product/ProductFaq'
import { isLive } from '../../lib/i18n/config'
import { fmt } from '../../lib/i18n'
import { routePath } from '../../lib/i18n/routes'
import { getAlternates } from '../../lib/i18n/alternates'
import { getContent } from '../../lib/content'
import { loadSite } from '../../lib/site'
import { SITE } from '../../lib/constants'
import { metaAlternates, absUrl, breadcrumbJsonLd, faqJsonLd, socialMeta } from '../../lib/seo'
import JsonLd from '../cms/JsonLd'

export function brandStaticParams(locale) {
  if (!isLive(locale)) return []
  return getContent(locale).brands.map((b) => ({ slug: b.slug }))
}

export async function brandMetadata(locale, { params }) {
  const { slug } = await params
  const { t: dict, c } = await loadSite(locale)
  const p = c.brands.find((b) => b.slug === slug)
  if (!p) return {}
  const t = dict.meta
  const { hreflang } = getAlternates('brand', p.id)
  const path = routePath('brand', locale, p.slug)
  return {
    title: fmt(t.brandTitle, { name: p.productName }),
    description: p.metaDescription,
    alternates: metaAlternates(path, hreflang),
    // saját twitter is (különben a főoldaliét örökli); kép: a márka első galériaképe
    ...socialMeta(locale, {
      path,
      title: fmt(t.brandOgTitle, { name: p.productName }),
      description: p.metaDescription,
      hreflang,
      image: { url: p.gallery[0].src.startsWith('http') ? p.gallery[0].src : `${SITE.url}${p.gallery[0].src}` },
    }),
    robots: { index: true, follow: true },
  }
}

export default async function BrandView({ locale, params }) {
  if (!isLive(locale)) notFound()
  const { slug } = await params
  const { t, c, site, a } = await loadSite(locale)
  const { brands, testimonials } = c
  const p = brands.find((b) => b.slug === slug)
  if (!p) notFound()
  const pa = a.text.brands[p.id]
  const ta = a.dict.product
  const idx = brands.indexOf(p)
  const next = brands[(idx + 1) % brands.length]
  const related = brands.filter((b) => b.slug !== p.slug)
  const url = absUrl(routePath('brand', locale, p.slug))
  const alternates = getAlternates('brand', p.id)
  const brandHref = (b) => routePath('brand', locale, b.slug)

  // SEO/AEO: Breadcrumb + FAQPage. Product schema szándékosan NINCS: ár (offers) és
  // értékelés nélkül a Google érvénytelen termékként jelezné (Search Console hiba).
  const schema = [
    breadcrumbJsonLd([
      [t.schema.crumbHome, absUrl(routePath('home', locale))],
      [t.schema.crumbDevices, absUrl(routePath('devices', locale))],
      [p.productName, url],
    ]),
    faqJsonLd(p.faq),
  ]

  return (
    <>
      <JsonLd data={schema} />
      <Nav locale={locale} current="brand" alternates={alternates} />
      <span id="top" />
      <main>
        {/* Hero: galéria + infó-oszlop */}
        <section className="block kp-hero">
          <div className="wrap">
            <Link href={routePath('devices', locale)} className="kdetail-back" {...ta.back}>
              {t.product.back}
            </Link>
            <div className="kp-hero-grid">
              <div className="kp-hero-media">
                <ProductGallery images={p.gallery} showLabel={t.product.galleryShow} attrs={a.img.brands[p.id]?.gallery} />
                {/* Vélemények a képnézegető alatt (sticky oszloppal együtt mozog) */}
                <ReviewSlider
                  testimonials={testimonials}
                  source={t.testimonials.source}
                  labels={{ role: t.product.reviewsRole, prev: t.product.reviewPrev, next: t.product.reviewNext }}
                />
              </div>

              <div className="kp-info">
                <h1 {...pa.productName}>{p.productName}</h1>
                <p className="kp-lead" {...pa.lead}>{p.lead}</p>


                <ProductTabs
                  product={p}
                  labels={{ aria: t.product.tabsAria, benefits: t.product.tabBenefits, description: t.product.tabDescription }}
                  a={{ benefits: pa.benefits, description: pa.description, tabBenefits: ta.tabBenefits, tabDescription: ta.tabDescription }}
                />

                <div className="kp-next">
                  <div className="kp-next-label" {...ta.nextLabel}>{t.product.nextLabel}</div>
                  <Link href={brandHref(next)} className="kp-next-card">
                    <span className="kp-next-img" {...a.img.brands[next.id]?.gallery?.[0]}>
                      <SkeletonImage src={next.gallery[0].src} alt="" loading="lazy" />
                    </span>
                    <span className="kp-next-text">
                      <strong {...a.text.brands[next.id].productName}>{next.productName}</strong>
                      <small {...a.text.brands[next.id].desc}>{next.desc}</small>
                    </span>
                    <span className="kp-next-more" aria-hidden="true">{t.product.details}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustRow t={t.product} a={ta} />

        {/* Kapcsolódó termékek - a márkalista kártyái */}
        <section className="block kp-related">
          <div className="wrap">
            <div className="sec-head">
              <div className="eyebrow" {...ta.relatedEyebrow}>{t.product.relatedEyebrow}</div>
              <h2 {...ta.relatedTitle}>{t.product.relatedTitle}</h2>
            </div>
            <div className="kbrand-row kp-related-row">
              {related.map((b) => (
                <Reveal key={b.id} className="kbrand-card-wrap">
                  <Link href={brandHref(b)} className="kbrand-card kbrand-card--link">
                    <div className="kbrand-card-name" {...a.text.brands[b.id].productName}>{b.productName}</div>
                    <div className="kbrand-card-ph" {...a.img.brands[b.id]?.image}>
                      <SkeletonImage src={b.image} alt={b.imageAlt} className="kbrand-card-img" loading="lazy" />
                    </div>
                    <div className="kbrand-card-foot">
                      <span className="btn btn-outline btn-sm btn-full kbrand-card-btn" {...a.dict.devices.more}>{t.devices.more}</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ProductFaq
          eyebrow={t.faq.eyebrow}
          title={fmt(t.faq.productTitle, { name: p.productName })}
          items={p.faq}
          a={{ items: pa.faq }}
        />

        <section className="block kcta">
          <div className="wrap">
            <Reveal>
              <h2 {...ta.ctaTitle}>{t.product.ctaTitle}</h2>
              <p {...ta.ctaLead}>{t.product.ctaLead}</p>
              <Button variant="gold" href={site.booking.adult}>
                <span {...a.dict.cta.bookHearingTest}>{t.cta.bookHearingTest}</span>
              </Button>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
