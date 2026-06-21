import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'
import Button from '../../components/Button'
import { Icon, Check } from '../../components/icons'
import { categories, brandBoxes } from '../../lib/content/devices'
import { BOOKING_URL } from '../../lib/constants'

export const metadata = {
  title: 'Hallókészülékek és termékek | ÉRTED Hallásgondozó Győr',
  description:
    'Teljes hallókészülék- és termékkínálat Győrben: Phonak, Signia, Oticon, Starkey. Hallókészülékek minden fokú halláscsökkenésre, vízálló és tölthető kivitel, egyedi fülillesztékek. Ingyenes hallásvizsgálat.',
  robots: { index: true, follow: true },
}

export default function DevicesPage() {
  return (
    <>
      <Nav />
      <span id="top" />
      <main>
        {/* Page-hero */}
        <section className="block kpage-hero">
          <div className="wrap">
            <Reveal>
              <h1>Hallókészülékek és termékek</h1>
            </Reveal>
          </div>
        </section>

        {/* Forgalmazott márkák — termék-boxok */}
        <section className="block kbrands" id="markak" style={{ paddingTop: 0 }}>
          <div className="wrap">
            {brandBoxes.map((b, idx) => {
              const alt = idx % 2 === 1
              return (
                <div className={`ksphere kbrandbox${alt ? ' kbrandbox--alt' : ''}`} key={b.name}>
                  <div className="ksphere-grid">
                    <Reveal direction={alt ? 'right' : 'left'} className="ksphere-text">
                      {b.tag && <span className="tag">{b.tag}</span>}
                      <h3>{b.title}</h3>
                      <p>{b.desc}</p>
                      <ul className="ksphere-list">
                        {b.features.map((f, i) => (
                          <li key={i}>
                            <span className="check"><Check size={14} stroke="#3a1c00" /></span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                    <Reveal direction={alt ? 'left' : 'right'} className="ksphere-media">
                      <div className="ph">
                        <span className="ph-label">[ KÉP: {b.imageAlt} ]</span>
                      </div>
                    </Reveal>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Termékkínálat — kategóriák */}
        <section className="block services" id="kategoriak">
          <div className="wrap">
            <div className="sec-head">
              <div className="eyebrow">Termékkínálat</div>
              <h2>Minden, amire a tiszta halláshoz szükség lehet</h2>
              <p>
                A vizsgálattól a kész megoldásig — készülékek, illesztékek és tartozékok egy helyen,
                szakértői beállítással.
              </p>
            </div>
            <div className="cards">
              {categories.map((c) => (
                <Reveal key={c.title} className="card">
                  <div className="ic-badge">
                    <Icon name={c.iconName} size={32} />
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Záró CTA */}
        <section className="block kcta">
          <div className="wrap">
            <Reveal>
              <h2>Nem tudja, melyik készülék való Önnek?</h2>
              <p>
                Kezdje egy ingyenes, kötelezettségmentes hallásvizsgálattal. 30 perc alatt kiderül,
                mi a helyzet — és melyik megoldás illik Önhöz a legjobban.
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
