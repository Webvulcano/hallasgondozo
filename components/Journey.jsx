'use client'
import { journeySteps } from '../lib/content/journey'
import Button from './Button'
import { Accordion, AccordionItem } from './Accordion'

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
