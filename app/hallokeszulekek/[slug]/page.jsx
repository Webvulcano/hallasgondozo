import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import Reveal from '../../../components/Reveal'
import Button from '../../../components/Button'
import SkeletonImage from '../../../components/SkeletonImage'
import ProductGallery from '../../../components/product/ProductGallery'
import ProductTabs from '../../../components/product/ProductTabs'
import ReviewSlider from '../../../components/product/ReviewSlider'
import TrustRow from '../../../components/product/TrustRow'
import ProductFaq from '../../../components/product/ProductFaq'
import { brandBoxes, getBrandBySlug } from '../../../lib/content/devices'
import { BOOKING_URL, SITE } from '../../../lib/constants'

// Egyedi termékoldal - minden brandBoxes elem (slug) egy statikus oldal.
export function generateStaticParams() {
  return brandBoxes.map((b) => ({ slug: b.slug }))
}
export const dynamicParams = false

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = getBrandBySlug(slug)
  if (!p) return {}
  const url = `${SITE.url}/hallokeszulekek/${p.slug}`
  return {
    title: `${p.productName} Győrben`,
    description: p.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${p.productName} | ÉRTED Hallásgondozó Győr`,
      description: p.metaDescription,
      url,
      images: [{ url: `${SITE.url}${p.gallery[0].src}` }],
      locale: 'hu_HU',
      type: 'website',
    },
    robots: { index: true, follow: true },
  }
}

export default async function ProductPage({ params }) {
  const { slug } = await params
  const p = getBrandBySlug(slug)
  if (!p) notFound()

  const idx = brandBoxes.indexOf(p)
  const next = brandBoxes[(idx + 1) % brandBoxes.length]
  const related = brandBoxes.filter((b) => b.slug !== p.slug)
  const url = `${SITE.url}/hallokeszulekek/${p.slug}`

  // SEO/AEO: Breadcrumb + FAQPage. Product schema szándékosan NINCS: ár (offers) és
  // értékelés nélkül a Google érvénytelen termékként jelezné (Search Console hiba).
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Főoldal', item: SITE.url },
        { '@type': 'ListItem', position: 2, name: 'Hallókészülékek', item: `${SITE.url}/hallokeszulekek` },
        { '@type': 'ListItem', position: 3, name: p.productName, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: p.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />
      <span id="top" />
      <main>
        {/* Hero: galéria + infó-oszlop */}
        <section className="block kp-hero">
          <div className="wrap">
            <Link href="/hallokeszulekek" className="kdetail-back">
              ← Vissza a termékekhez
            </Link>
            <div className="kp-hero-grid">
              <div className="kp-hero-media">
                <ProductGallery images={p.gallery} />
                {/* Vélemények a képnézegető alatt (sticky oszloppal együtt mozog) */}
                <ReviewSlider />
              </div>

              <div className="kp-info">
                <h1>{p.productName}</h1>
                <p className="kp-lead">{p.lead}</p>


                <ProductTabs product={p} />

                <div className="kp-next">
                  <div className="kp-next-label">Ezt is érdemes megnézni</div>
                  <Link href={`/hallokeszulekek/${next.slug}`} className="kp-next-card">
                    <span className="kp-next-img">
                      <SkeletonImage src={next.gallery[0].src} alt="" loading="lazy" />
                    </span>
                    <span className="kp-next-text">
                      <strong>{next.productName}</strong>
                      <small>{next.desc}</small>
                    </span>
                    <span className="kp-next-more" aria-hidden="true">Részletek →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustRow />

        {/* Kapcsolódó termékek - a /hallokeszulekek márkakártyái */}
        <section className="block kp-related">
          <div className="wrap">
            <div className="sec-head">
              <div className="eyebrow">További márkák</div>
              <h2>Hasonlítsa össze a lehetőségeket</h2>
            </div>
            <div className="kbrand-row kp-related-row">
              {related.map((b) => (
                <Reveal key={b.slug} className="kbrand-card-wrap">
                  <Link href={`/hallokeszulekek/${b.slug}`} className="kbrand-card kbrand-card--link">
                    <div className="kbrand-card-name">{b.productName}</div>
                    <div className="kbrand-card-ph">
                      <SkeletonImage src={b.image} alt={b.imageAlt} className="kbrand-card-img" loading="lazy" />
                    </div>
                    <div className="kbrand-card-foot">
                      <span className="btn btn-outline btn-sm btn-full kbrand-card-btn">Megnézem →</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ProductFaq productName={p.productName} items={p.faq} />

        <section className="block kcta">
          <div className="wrap">
            <Reveal>
              <h2>Kíváncsi, Önnek is ez a megoldás való?</h2>
              <p>
                Foglaljon ingyenes hallásvizsgálatot, és próbálja ki 15 napig kötelezettség nélkül.
              </p>
              <Button variant="gold" href={BOOKING_URL}>
                Ingyenes hallásvizsgálatot foglalok
              </Button>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
