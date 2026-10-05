import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import Reveal from '../../../components/Reveal'
import Button from '../../../components/Button'
import SkeletonImage from '../../../components/SkeletonImage'
import { partners } from '../../../lib/content/partners'
import ProductFaq from '../../../components/product/ProductFaq'
import { pricePage, priceFaq } from '../../../lib/content/prices'
import { formatHuDate } from '../../../lib/content/posts'
import { BOOKING_URL, SITE } from '../../../lib/constants'

// Statikus szegmens → elsőbbséget élvez a /hallokeszulekek/[slug] dinamikus útvonallal szemben.
const PATH = '/hallokeszulekek/arak'

export const metadata = {
  title: { absolute: 'Hallókészülék árak és TB-támogatás Győrben | ÉRTED' },
  description:
    'Mennyibe kerül egy hallókészülék? Mitől függ az ár, hogyan működik a TB-támogatás és az egészségpénztári elszámolás. Ingyenes hallásvizsgálat és ajánlat Győrben.',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Hallókészülék árak és TB-támogatás Győrben',
    url: `${SITE.url}${PATH}`,
    locale: 'hu_HU',
    type: 'website',
    images: [{ url: '/pic/arak/hallokeszulek-tenyerben.webp', width: 1600, height: 900 }],
  },
  robots: { index: true, follow: true },
}

export default function PricesPage() {
  // ⛔ KIKAPCSOLVA (Lehel, 2026-10-04): az ár-oldal egyelőre NEM élő → 404.
  // Visszakapcsolás: töröld a notFound() sort + vedd vissza a sitemap- és menü-bejegyzést
  // (app/sitemap.js, components/nav/NavLinks.jsx, components/nav/MobileMenu.jsx).
  notFound()

  const url = `${SITE.url}${PATH}`

  // SEO/AEO: Breadcrumb + FAQPage (az Amplifon ár-oldalán nincs FAQPage - itt előny)
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Főoldal', item: SITE.url },
        { '@type': 'ListItem', position: 2, name: 'Hallókészülékek', item: `${SITE.url}/hallokeszulekek` },
        { '@type': 'ListItem', position: 3, name: 'Árak és TB-támogatás', item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: priceFaq.map((f) => ({
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
      <main className="article kprice-page">
        <div className="wrap article-wrap">
          <nav className="article-crumb" aria-label="Útvonal">
            <Link href="/">Főoldal</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/hallokeszulekek">Hallókészülékek</Link>
          </nav>

          <header className="article-head">
            <h1>{pricePage.title}</h1>
            <p className="article-meta">
              Frissítve: <time dateTime={pricePage.dateModified}>{formatHuDate(pricePage.dateModified)}</time>
            </p>
          </header>

          <div className="article-media">
            <SkeletonImage src={pricePage.images.hero.src} alt={pricePage.images.hero.alt} fetchPriority="high" />
          </div>

          <article className="prose">
            <p>{pricePage.intro}</p>

            <h2>Mitől függ a hallókészülék ára?</h2>
            <div className="kprice-split">
              <div className="kprice-split-media">
                <SkeletonImage src={pricePage.images.factors.src} alt={pricePage.images.factors.alt} loading="lazy" />
              </div>
              <ul>
                {pricePage.factors.map((f) => (
                  <li key={f.title}>{f.title}</li>
                ))}
              </ul>
            </div>
            {pricePage.factors.map((f) => (
              <div key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}

            <h2>Hogyan működik a TB-támogatás hallókészülékre?</h2>
            <p>
              Az ÉRTED Hallásgondozó TB-szerződött gyógyászatisegédeszköz-ellátóhely, és saját
              fül-orr-gégész, audiológus szakorvossal dolgozik - így Győrben a vizsgálat, a rendelvény
              és a készülék kiválasztása egy helyen intézhető:
            </p>
            <div className="article-media">
              <SkeletonImage src={pricePage.images.tb.src} alt={pricePage.images.tb.alt} loading="lazy" />
            </div>
            <ol>
              {pricePage.tbSteps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>

            <h2>Egészségpénztárral is fizethető</h2>
            <p>
              A TB-támogatás utáni önrész egészségpénztári számláról is kiegyenlíthető. Partnereink:
              {' '}{partners.join(', ')}.
            </p>

            <h2>Próbálja ki, mielőtt dönt</h2>
            <div className="article-media">
              <SkeletonImage src={pricePage.images.trial.src} alt={pricePage.images.trial.alt} loading="lazy" />
            </div>
            <p>
              A hallókészüléket legalább 15 napig ingyen, a saját mindennapjaiban próbálhatja ki - csak
              akkor dönt, ha valóban jobban hall vele. <Link href="/hallokeszulekek">Forgalmazott
              márkáink</Link>: Phonak, Signia, Oticon, Starkey.
            </p>
          </article>

        </div>

        <ProductFaq productName="hallókészülék árak és támogatás" items={priceFaq} />

        <section className="block kcta">
          <div className="wrap">
            <Reveal>
              <h2>Pontos árat a vizsgálat után adunk</h2>
              <p>
                30 perc alatt kiderül, milyen készülék illik az Ön hallásához - és mennyi lesz a
                TB-támogatás utáni önrész. Ingyenes, kötelezettség nélkül.
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
