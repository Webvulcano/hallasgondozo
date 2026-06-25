'use client'
import { faqs } from '../lib/content/faq'
import { Accordion, AccordionItem } from './Accordion'

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
  return (
    <section className="block faq" id="gyik">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">GYIK</div>
          <h2>Gyakori kérdések</h2>
          <p>
            Ha úgy érzi, hogy Ön vagy hozzátartozója nehezebben hall, ne halogassa a kivizsgálást -
            tegye meg az első lépést a tisztább beszédértés és a magabiztosabb mindennapok felé.
          </p>
        </div>
        <Accordion defaultOpenIndex={0}>
          {({ isOpen, toggle }) => (
            <div className="faq-list">
              {faqs.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  id={`faq-a-${i}`}
                  open={isOpen(i)}
                  onToggle={() => toggle(i)}
                  title={<span>{item.q}</span>}
                >
                  <p>{item.a}</p>
                </AccordionItem>
              ))}
            </div>
          )}
        </Accordion>
      </div>
    </section>
  )
}
