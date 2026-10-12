import { fmt } from '../lib/i18n'
import { loadSite } from '../lib/site'
import { GOOGLE_REVIEWS_URL } from '../lib/constants'
import Button from './Button'
import TestiTicker from './TestiTicker'

// Egy vélemény-kártya (a rács és a mobil-ticker is ezt használja)
function QCard({ t, hidden, starsAria, a }) {
  return (
    <div className="qcard" {...(hidden ? { 'aria-hidden': true } : {})}>
      <div className="stars" aria-label={starsAria}>★★★★★</div>
      <blockquote {...a?.[t.id]?.quote}>{t.quote}</blockquote>
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
function dupCards(items, starsAria, a) {
  return [
    ...items.map((t) => <QCard key={`a-${t.id}`} t={t} starsAria={starsAria} a={a} />),
    ...items.map((t) => <QCard key={`b-${t.id}`} t={t} starsAria={starsAria} a={a} hidden />),
  ]
}

export default async function Testimonials({ locale }) {
  const { t: dict, c, site, a } = await loadSite(locale)
  const t = dict.testimonials
  const ta = a.dict.testimonials
  const { testimonials } = c
  // Két sorra osztva, de MINDEN vélemény szerepeljen (korábban a 7.-et,
  // "László Dénes"-t, kihagyta a fix slice(0,3)+slice(3,6)).
  const half = Math.ceil(testimonials.length / 2)
  const top = testimonials.slice(0, half)
  const bottom = testimonials.slice(half)
 
  return (
    <section className="block testi" id="velemenyek">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow" {...ta.eyebrow}>{t.eyebrow}</div>
          <h2 {...ta.title}>{t.title}</h2>
          <p {...ta.rating}>{fmt(t.rating, { count: site.rating.count, score: site.rating.score })}</p>
          {/* EN/DE: a magyar vélemények fordítását jelezzük (hitelesség); magyarul üres → nem renderel */}
          {t.translatedNote && <p className="testi-note" {...ta.translatedNote}>{t.translatedNote}</p>}
        </div>
        <div className="cards">
          {testimonials.map((r) => (
            <div key={r.id} className="qcard">
              <div className="stars" aria-label={t.starsAria}>★★★★★</div>
              <blockquote {...a.text.testimonials[r.id]?.quote}>{r.quote}</blockquote>
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
        <TestiTicker dir="left">{dupCards(top, t.starsAria, a.text.testimonials)}</TestiTicker>
        <TestiTicker dir="right">{dupCards(bottom, t.starsAria, a.text.testimonials)}</TestiTicker>
      </div>

      <div className="wrap">
        <div className="testi-cta">
          <Button variant="outline" href={GOOGLE_REVIEWS_URL}>
            <span {...ta.allReviews}>{t.allReviews}</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
