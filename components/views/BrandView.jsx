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
import { getDictionary, fmt } from '../../lib/i18n'
import { routePath } from '../../lib/i18n/routes'
import { getAlternates } from '../../lib/i18n/alternates'
import { getContent, getBrandBySlug } from '../../lib/content'
import { SITE, bookingUrls } from '../../lib/constants'
import { metaAlternates, ogLocale, absUrl, breadcrumbJsonLd, faqJsonLd } from '../../lib/seo'

export function brandStaticParams(locale) {
  if (!isLive(locale)) return []
  return getContent(locale).brands.map((b) => ({ slug: b.slug }))
}

export async function brandMetadata(locale, { params }) {
  const { slug } = await params
  const p = getBrandBySlug(locale, slug)
  if (!p) return {}
  const t = getDictionary(locale).meta
  const { hreflang } = getAlternates('brand', p.id)
  const path = routePath('brand', locale, p.slug)
  return {
    title: fmt(t.brandTitle, { name: p.productName }),
    description: p.metaDescription,
    alternates: metaAlternates(path, hreflang),
    openGraph: {
      title: fmt(t.brandOgTitle, { name: p.productName }),
      description: p.metaDescription,
      url: absUrl(path),
      images: [{ url: `${SITE.url}${p.gallery[0].src}` }],
      ...ogLocale(locale, hreflang),
      type: 'website',
    },
    robots: { index: true, follow: true },
  }
}

export default async function BrandView({ locale, params }) {
  if (!isLive(locale)) notFound()
  const { slug } = await params
  const p = getBrandBySlug(locale, slug)
  if (!p) notFound()

  const t = getDictionary(locale)
  const { brands, testimonials } = getContent(locale)
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav locale={locale} current="brand" alternates={alternates} />
      <span id="top" />
      <main>
        {/* Hero: galéria + infó-oszlop */}
        <section className="block kp-hero">
          <div className="wrap">
            <Link href={routePath('devices', locale)} className="kdetail-back">
              {t.product.back}
            </Link>
            <div className="kp-hero-grid">
              <div className="kp-hero-media">
                <ProductGallery images={p.gallery} showLabel={t.product.galleryShow} />
                {/* Vélemények a képnézegető alatt (sticky oszloppal együtt mozog) */}
                <ReviewSlider
                  testimonials={testimonials}
                  source={t.testimonials.source}
                  labels={{ role: t.product.reviewsRole, prev: t.product.reviewPrev, next: t.product.reviewNext }}
                />
              </div>

              <div className="kp-info">
                <h1>{p.productName}</h1>
                <p className="kp-lead">{p.lead}</p>


                <ProductTabs
                  product={p}
                  labels={{ aria: t.product.tabsAria, benefits: t.product.tabBenefits, description: t.product.tabDescription }}
                />

                <div className="kp-next">
                  <div className="kp-next-label">{t.product.nextLabel}</div>
                  <Link href={brandHref(next)} className="kp-next-card">
                    <span className="kp-next-img">
                      <SkeletonImage src={next.gallery[0].src} alt="" loading="lazy" />
                    </span>
                    <span className="kp-next-text">
                      <strong>{next.productName}</strong>
                      <small>{next.desc}</small>
                    </span>
                    <span className="kp-next-more" aria-hidden="true">{t.product.details}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustRow locale={locale} />

        {/* Kapcsolódó termékek - a márkalista kártyái */}
        <section className="block kp-related">
          <div className="wrap">
            <div className="sec-head">
              <div className="eyebrow">{t.product.relatedEyebrow}</div>
              <h2>{t.product.relatedTitle}</h2>
            </div>
            <div className="kbrand-row kp-related-row">
              {related.map((b) => (
                <Reveal key={b.id} className="kbrand-card-wrap">
                  <Link href={brandHref(b)} className="kbrand-card kbrand-card--link">
                    <div className="kbrand-card-name">{b.productName}</div>
                    <div className="kbrand-card-ph">
                      <SkeletonImage src={b.image} alt={b.imageAlt} className="kbrand-card-img" loading="lazy" />
                    </div>
                    <div className="kbrand-card-foot">
                      <span className="btn btn-outline btn-sm btn-full kbrand-card-btn">{t.devices.more}</span>
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
        />

        <section className="block kcta">
          <div className="wrap">
            <Reveal>
              <h2>{t.product.ctaTitle}</h2>
              <p>{t.product.ctaLead}</p>
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
