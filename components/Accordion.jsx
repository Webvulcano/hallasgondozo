'use client'
import { useState } from 'react'

// Közös lenyíló (accordion) komponens — a Journey és a GYIK is ezt használja.
// Csak a mechanika közös (single-open állapot + magasság-animáció + alap kártya-look);
// a szekció-specifikus vizuál (timeline sín, badge, al-lépések) a children-ben él.

// Konténer: birtokolja az állapotot. defaultOpenIndex a "kapcsoló":
//   -1 = mind csukva (Journey), 0 = első nyitva (GYIK).
// A gyerek render-prop, hogy a szekció szabadon építse a saját külső markupját.
export function Accordion({ defaultOpenIndex = -1, children }) {
  const [openIdx, setOpenIdx] = useState(defaultOpenIndex)
  const isOpen = (i) => openIdx === i
  const toggle = (i) => setOpenIdx((cur) => (cur === i ? -1 : i))
  return children({ isOpen, toggle })
}

// A tényleges közös lenyíló kártya (button-fejléc + animált törzs).
// title: ReactNode (fejléc-slot), children: a lenyíló tartalom.
// className: opcionális szekció-specifikus kártya-osztály (pl. "jstep-body").
export function AccordionItem({ open, onToggle, id, title, className = '', children }) {
  return (
    <div className={`acc-item${open ? ' open' : ''}${className ? ' ' + className : ''}`}>
      <button
        type="button"
        className="acc-q"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
      >
        {title}
        <span className="acc-ic" aria-hidden="true">+</span>
      </button>
      <div className="acc-a-wrap" id={id} role="region">
        <div className="acc-a">{children}</div>
      </div>
    </div>
  )
}
