import { testimonials } from '../lib/content/testimonials'
import { GOOGLE_REVIEWS_URL } from '../lib/constants'
import Button from './Button'
import TestiTicker from './TestiTicker'

// Egy vélemény-kártya (a rács és a mobil-ticker is ezt használja)
function QCard({ t, hidden }) {
  return (
    <div className="qcard" {...(hidden ? { 'aria-hidden': true } : {})}>
      <div className="stars" aria-label="5 csillagos értékelés">★★★★★</div>
      <blockquote>{t.quote}</blockquote>
      <div className="qmeta">
        <span className="av">{t.initials}</span>
        <span>
          <b>{t.name}</b>
        </span>
      </div>
    </div>
  )
}

// A tartalmat duplázzuk a zökkenőmentes loophoz; a második (duplikált) fél aria-hidden.
function dupCards(items) {
  return [
    ...items.map((t) => <QCard key={`a-${t.name}`} t={t} />),
    ...items.map((t) => <QCard key={`b-${t.name}`} t={t} hidden />),
  ]
}

export default function Testimonials() {
  const top = testimonials.slice(0, 3)
  const bottom = testimonials.slice(3, 6)

  return (
    <section className="block testi" id="velemenyek">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Győri páciensek - valódi tapasztalatok</div>
          <h2>Valódi életek, tisztább hangokkal</h2>
        </div>
        <div className="cards">
          {testimonials.map((t) => (
            <div key={t.name} className="qcard">
              <div className="stars" aria-label="5 csillagos értékelés">★★★★★</div>
              <blockquote>{t.quote}</blockquote>
              <div className="qmeta">
                <span className="av">{t.initials}</span>
                <span>
                  <b>{t.name}</b>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobil-ticker - csak ≤560px-en látszik (CSS); auto-görgő + dragolható */}
      <div className="testi-marquees">
        <TestiTicker dir="left">{dupCards(top)}</TestiTicker>
        <TestiTicker dir="right">{dupCards(bottom)}</TestiTicker>
      </div>

      <div className="wrap">
        <div className="testi-cta">
          <Button variant="outline" href={GOOGLE_REVIEWS_URL}>
            Nézze meg az összes értékelést a Google-ön
          </Button>
        </div>
      </div>
    </section>
  )
}
