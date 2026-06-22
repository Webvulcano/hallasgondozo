'use client'
import { useState } from 'react'
import { faqs } from '../lib/content/faq'
import Reveal from './Reveal'

// FAQPage JSON-LD - ugyanabból a faqs tömbből, hogy ne csússzon szét a tartalom
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section className="block faq" id="gyik">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="wrap">
        <Reveal className="sec-head">
          <div className="eyebrow">GYIK</div>
          <h2>Gyakori kérdések</h2>
          <p>
            Ha úgy érzi, hogy Ön vagy hozzátartozója nehezebben hall, ne halogassa a kivizsgálást -
            tegye meg az első lépést a tisztább beszédértés és a magabiztosabb mindennapok felé.
          </p>
        </Reveal>
        <Reveal className="faq-list">
          {faqs.map((item, i) => {
            const open = openIdx === i
            return (
              <div className={`faq-item${open ? ' open' : ''}`} key={item.q}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={open}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpenIdx(open ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-ic" aria-hidden="true">+</span>
                </button>
                <div className="faq-a-wrap" id={`faq-a-${i}`} role="region">
                  <div className="faq-a">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
