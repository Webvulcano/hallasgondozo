'use client'

import { Accordion, AccordionItem } from '../Accordion'

// Termék-specifikus GYIK - a főoldali Faq vizuálja (.faq / .faq-list) és a közös Accordion.
// A FAQPage JSON-LD a view-ban készül ugyanebből a tömbből. eyebrow/title: nyelvi szöveg (a hívó adja).
export default function ProductFaq({ eyebrow, title, items }) {
  return (
    <section className="block faq kp-faq" id="gyik">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">{eyebrow}</div>
          <h2>{title}</h2>
        </div>
        <Accordion defaultOpenIndex={0}>
          {({ isOpen, toggle }) => (
            <div className="faq-list">
              {items.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  id={`kp-faq-a-${i}`}
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
