'use client'
import { useState } from 'react'
import { journeySteps } from '../lib/content/journey'
import Button from './Button'

// HowTo JSON-LD — AEO / AI-keresők (seo-geo-aeo-fokusz.md 🟡).
// A fő lépéseket adjuk meg; a desc + al-lépések szövege a text mezőbe fűzve.
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Így jut el a megfelelő hallókészülékig',
  description:
    'Lépésről lépésre az ÉRTED Hallásgondozónál: időpontfoglalás, konzultáció és hallásvizsgálat, ingyenes próbahordás, kontroll és hosszú távú gondozás.',
  step: journeySteps.map((s) => ({
    '@type': 'HowToStep',
    position: s.n,
    name: s.title,
    text: s.sub ? `${s.desc} ${s.sub.map((x) => x.title).join('; ')}.` : s.desc,
  })),
}

export default function Journey() {
  // Lenyitható lépések — egyszerre egy nyitva (mint a GYIK); alapból mind csukva.
  const [openIdx, setOpenIdx] = useState(-1)

  return (
    <section className="block journey" id="folyamat">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Lépésről lépésre</div>
          <h2>Így jut el a megfelelő hallókészülékig</h2>
          <p>
            A hallásgondozás nálunk nem egyetlen alkalom, hanem egy átlátható, végigkísért út —
            az időpontfoglalástól a hosszú távú gondozásig.
          </p>
        </div>

        <ol className="journey-timeline">
          {journeySteps.map((s, i) => {
            const open = openIdx === i
            return (
              <li key={s.n} className="jstep">
                <div className="jstep-rail" aria-hidden="true">
                  <div className="jstep-node">{s.n}</div>
                </div>
                <div className={`jstep-body${open ? ' open' : ''}`}>
                  <button
                    type="button"
                    className="jstep-q"
                    aria-expanded={open}
                    aria-controls={`jstep-a-${i}`}
                    onClick={() => setOpenIdx(open ? -1 : i)}
                  >
                    <span className="jstep-title">
                      <span>{s.title}</span>
                      {s.highlight && <span className="jstep-badge">{s.highlight}</span>}
                    </span>
                    <span className="jstep-ic" aria-hidden="true">+</span>
                  </button>
                  <div className="jstep-a-wrap" id={`jstep-a-${i}`} role="region">
                    <div className="jstep-a">
                      <p>{s.desc}</p>
                      {s.sub && (
                        <ul className="jsub">
                          {s.sub.map((x) => (
                            <li key={x.title}>
                              <b>{x.title}</b>
                              <span>{x.desc}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>

        <div className="journey-cta">
          <Button variant="gold" href="#idopont">
            Foglaljon ingyenes hallásvizsgálatot
          </Button>
        </div>
      </div>
    </section>
  )
}
