import { getContent } from '../lib/content'
import { getDictionary, fmt } from '../lib/i18n'
import { GOOGLE_REVIEWS_URL, GOOGLE_RATING } from '../lib/constants'
import Button from './Button'
import TestiTicker from './TestiTicker'

// Egy vélemény-kártya (a rács és a mobil-ticker is ezt használja)
function QCard({ t, hidden, starsAria }) {
  return (
    <div className="qcard" {...(hidden ? { 'aria-hidden': true } : {})}>
      <div className="stars" aria-label={starsAria}>★★★★★</div>
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
function dupCards(items, starsAria) {
  return [
    ...items.map((t) => <QCard key={`a-${t.id}`} t={t} starsAria={starsAria} />),
    ...items.map((t) => <QCard key={`b-${t.id}`} t={t} starsAria={starsAria} hidden />),
  ]
}

export default function Testimonials({ locale }) {
  const t = getDictionary(locale).testimonials
  const { testimonials } = getContent(locale)
  // Két sorra osztva, de MINDEN vélemény szerepeljen (korábban a 7.-et,
  // "László Dénes"-t, kihagyta a fix slice(0,3)+slice(3,6)).
  const half = Math.ceil(testimonials.length / 2)
  const top = testimonials.slice(0, half)
  const bottom = testimonials.slice(half)

  return (
    <section className="block testi" id="velemenyek">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">{t.eyebrow}</div>
          <h2>{t.title}</h2>
          <p>{fmt(t.rating, { count: GOOGLE_RATING.count, score: GOOGLE_RATING.score })}</p>
          {/* EN/DE: a magyar vélemények fordítását jelezzük (hitelesség); magyarul üres → nem renderel */}
          {t.translatedNote && <p className="testi-note">{t.translatedNote}</p>}
        </div>
        <div className="cards">
          {testimonials.map((r) => (
            <div key={r.id} className="qcard">
              <div className="stars" aria-label={t.starsAria}>★★★★★</div>
              <blockquote>{r.quote}</blockquote>
              <div className="qmeta">
                <span className="av">{r.initials}</span>
                <span>
                  <b>{r.name}</b>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobil-ticker - csak ≤1000px-en látszik (CSS); auto-görgő + dragolható */}
      <div className="testi-marquees">
        <TestiTicker dir="left">{dupCards(top, t.starsAria)}</TestiTicker>
        <TestiTicker dir="right">{dupCards(bottom, t.starsAria)}</TestiTicker>
      </div>

      <div className="wrap">
        <div className="testi-cta">
          <Button variant="outline" href={GOOGLE_REVIEWS_URL}>
            {t.allReviews}
          </Button>
        </div>
      </div>
    </section>
  )
}
