import Link from 'next/link'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import Reveal from '../../../components/Reveal'
import Button from '../../../components/Button'
import { Check } from '../../../components/icons'
import SkeletonImage from '../../../components/SkeletonImage'
import { brandBoxes } from '../../../lib/content/devices'
import { BOOKING_URL } from '../../../lib/constants'

const product = brandBoxes.find((b) => b.slug === 'phonak-audeo-sphere')

export const metadata = {
  title: `${product.title} | ÉRTED Hallásgondozó Győr`,
  description: product.desc,
  robots: { index: true, follow: true },
}

export default function PhonakAudeoSpherePage() {
  return (
    <>
      <Nav />
      <span id="top" />
      <main>
        <section className="block kpage-hero" style={{ paddingBottom: 0 }}>
          <div className="wrap">
            <Link href="/keszulekek" className="kdetail-back">
              ← Vissza a termékekhez
            </Link>
          </div>
        </section>

        <section className="block" id="termek">
          <div className="wrap">
            <Reveal direction="left" className="ksphere">
              <div className="ksphere-grid">
                <div className="ksphere-text">
                  {product.tag && <span className="tag">{product.tag}</span>}
                  <h1>{product.title}</h1>
                  <p>{product.desc}</p>
                  <ul className="ksphere-list">
                    {product.features.map((f, i) => (
                      <li key={i}>
                        <span className="check">
                          <Check size={14} stroke="#3a1c00" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant="gold" href={product.cta.href}>
                    {product.cta.label}
                  </Button>
                </div>
                <div className="ksphere-media">
                  <div className="ph">
                    <SkeletonImage
                      src={product.image}
                      alt={product.imageAlt}
                      className="ksphere-img kdetail-img"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="block kcta">
          <div className="wrap">
            <Reveal>
              <h2>Kipróbálná a Phonak Audéo Sphere-t?</h2>
              <p>
                Foglaljon ingyenes hallásvizsgálatot, és tudja meg, Önnek is ez a megoldás
                a legjobb.
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
