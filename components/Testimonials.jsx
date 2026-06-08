import { testimonials } from '../lib/content/testimonials'
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
                  <span>{t.location}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
