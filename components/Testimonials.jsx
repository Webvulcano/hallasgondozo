import { testimonials } from '../lib/content/testimonials'
import { GOOGLE_REVIEWS_URL } from '../lib/constants'
import Button from './Button'
import Reveal from './Reveal'

export default function Testimonials() {
  return (
    <section className="block testi" id="velemenyek">
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="eyebrow">Győri páciensek — valódi tapasztalatok</div>
          <h2>Valódi életek, tisztább hangokkal</h2>
        </Reveal>
        <div className="cards">
          {testimonials.map((t) => (
            <Reveal key={t.name} className="qcard">
              <div className="stars" aria-label="5 csillagos értékelés">★★★★★</div>
              <blockquote>{t.quote}</blockquote>
              <div className="qmeta">
                <span className="av">{t.initials}</span>
                <span>
                  <b>{t.name}</b>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="testi-cta">
          <Button variant="outline" href={GOOGLE_REVIEWS_URL}>
            Nézze meg az összes értékelést a Google-ön
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
