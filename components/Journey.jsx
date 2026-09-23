'use client'
import { useState, useRef } from 'react'
import { journeySteps } from '../lib/content/journey'
import Button from './Button'
import SkeletonImage from './SkeletonImage'
// Régi verzió (accordion-timeline, kép nélkül) lent kikommentezve — ld. fájl vége.
// import { Accordion, AccordionItem } from './Accordion'

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

// 2-nek nincs "A" verziója, marad a sima számozott fájl.
const STEP_IMG_FILE = { 1: '1', 2: '2', 3: '3A', 4: '4A', 5: '5' }
const stepImg = (n) => `/pic/lepesrol_lepesre/${STEP_IMG_FILE[n]}.JPG`

export default function Journey() {
  // 1. lépés alapból nyitva; a sorrend 1→5 (fent 1, lent 5).
  const [openStep, setOpenStep] = useState(1)
  const isOpen = (n) => openStep === n
  const cardRefs = useRef({})
  const toggle = (n) => {
    const willOpen = openStep !== n
    setOpenStep((cur) => (cur === n ? -1 : n))
    if (willOpen) {
      // A korábban nyitott kártya UGYANEBBEN a pillanatban csukódik be, ami
      // 0.35s alatt elmozdítja a lapot — ha rögtön scrollozunk, ez a mozgó
      // célpont túllövést okoz. Megvárjuk míg a nyit/csuk animáció lezajlik.
      setTimeout(() => {
        cardRefs.current[n]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 370)
    }
  }
  const stepsDesc = journeySteps

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

        <ol className="jdeck">
          {stepsDesc.map((s) => {
            const open = isOpen(s.n)
            return (
              <li
                key={s.n}
                ref={(el) => { cardRefs.current[s.n] = el }}
                className={`jcard jcard-${s.n}${open ? ' is-open' : ''}`}
              >
                <button
                  type="button"
                  className="jcard-band"
                  aria-expanded={open}
                  aria-controls={`jpanel-${s.n}`}
                  onClick={() => toggle(s.n)}
                >
                  <span className="jcard-num">{s.n}</span>
                  <span className="jcard-title">{s.title}</span>
                  {s.highlight && (
                    <>
                      {/* Mobilon kényszerített sortörés a badge elé — ld. journey.css .jcard-break */}
                      <span className="jcard-break" aria-hidden="true" />
                      <span className="jcard-badge">{s.highlight}</span>
                    </>
                  )}
                  <span className="jcard-plus" aria-hidden="true">{open ? '−' : '+'}</span>
                </button>

                <div className="jcard-panel-wrap" id={`jpanel-${s.n}`} role="region">
                  <div className="jcard-panel">
                    <div className="jcard-text">
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
                    <div className="jcard-media">
                      <div className="ph">
                        <SkeletonImage src={stepImg(s.n)} alt={s.title} className="jcard-img" />
                      </div>
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

/* ============================================================
   RÉGI VERZIÓ (accordion-timeline, kép nélkül) — megőrizve,
   ha vissza kéne állítani. A hozzá tartozó CSS (.jstep* stb.)
   is kikommentezve megvan a journey.css alján.
   ============================================================

'use client'
import { journeySteps } from '../lib/content/journey'
import Button from './Button'
import { Accordion, AccordionItem } from './Accordion'

const howToSchema = { ... — ld. fent, változatlan }

export default function Journey() {
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

        <Accordion defaultOpenIndex={-1}>
          {({ isOpen, toggle }) => (
            <ol className="journey-timeline">
              {journeySteps.map((s, i) => (
                <li key={s.n} className="jstep">
                  <div className="jstep-rail" aria-hidden="true">
                    <div className="jstep-node">{s.n}</div>
                  </div>
                  <AccordionItem
                    className="jstep-body"
                    id={`jstep-a-${i}`}
                    open={isOpen(i)}
                    onToggle={() => toggle(i)}
                    title={
                      <span className="jstep-title">
                        <span>{s.title}</span>
                        {s.highlight && <span className="jstep-badge">{s.highlight}</span>}
                      </span>
                    }
                  >
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
                  </AccordionItem>
                </li>
              ))}
            </ol>
          )}
        </Accordion>

        <div className="journey-cta">
          <Button variant="gold" href="#idopont">
            Foglaljon ingyenes hallásvizsgálatot
          </Button>
        </div>
      </div>
    </section>
  )
}

============================================================ */
