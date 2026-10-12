'use client'
import { useState } from 'react'
import { fmt } from '../lib/i18n/fmt'
import { Accordion, AccordionItem } from './Accordion'
import Button from './Button'

// Props (a HomeView adja, nyelvenként): faqs = [{ q, a }], visible = alapból látszó db,
// schema = FAQPage JSON-LD (szerveren, ugyanabból a tömbből → nem csúszik szét), t = szekció-szövegek.
export default function Faq({ faqs, visible, schema, t }) {
  // A rejtett kérdések a DOM-ban maradnak (csak CSS rejti) → SEO-ban indexelhetők.
  const [expanded, setExpanded] = useState(false)
  const hiddenCount = faqs.length - visible

  return (
    <section className="block faq" id="gyik">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">{t.eyebrow}</div>
          <h2>{t.title}</h2>
          <p>{t.lead}</p>
        </div>
        <Accordion defaultOpenIndex={0}>
          {({ isOpen, toggle }) => (
            <div className={`faq-list${expanded ? ' is-expanded' : ''}`} id="faq-list">
              {faqs.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  id={`faq-a-${i}`}
                  open={isOpen(i)}
                  onToggle={() => toggle(i)}
                  title={<span>{item.q}</span>}
                  className={i >= visible ? 'faq-extra' : ''}
                >
                  <p>{item.a}</p>
                </AccordionItem>
              ))}
            </div>
          )}
        </Accordion>
        {!expanded && hiddenCount > 0 && (
          <div className="faq-more">
            <Button
              variant="outline"
              onClick={() => setExpanded(true)}
              aria-expanded={expanded}
              aria-controls="faq-list"
            >
              {fmt(t.more, { n: hiddenCount })}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
