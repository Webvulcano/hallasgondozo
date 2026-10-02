'use client'

import { useRef, useState } from 'react'
import { Check } from '../icons'

// Termék-infó tabok (Előnyök / Leírás; a „Kinek ajánljuk" Lehel kérésére kivéve) - pill-szegmens fejléc.
// ARIA tablist minta, ← → billentyűvel is váltható.
function CheckList({ items }) {
  return (
    <ul className="kp-checklist">
      {items.map((t) => (
        <li key={t}>
          <span className="check">
            <Check size={14} stroke="#fff" />
          </span>
          {t}
        </li>
      ))}
    </ul>
  )
}

export default function ProductTabs({ product }) {
  const tabs = [
    { id: 'elonyok', label: 'Előnyök', body: <CheckList items={product.benefits} /> },
    {
      id: 'leiras',
      label: 'Leírás',
      body: (
        <div className="kp-desc">
          {product.description.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      ),
    },
  ]
  const [active, setActive] = useState(0)
  const btnRefs = useRef([])

  const onKeyDown = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const dir = e.key === 'ArrowRight' ? 1 : -1
    const next = (active + dir + tabs.length) % tabs.length
    setActive(next)
    btnRefs.current[next]?.focus()
  }

  return (
    <div className="kp-tabs">
      <div className="kp-tablist" role="tablist" aria-label="Termékinformációk" onKeyDown={onKeyDown}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => (btnRefs.current[i] = el)}
            type="button"
            role="tab"
            id={`kp-tab-${t.id}`}
            aria-selected={i === active}
            aria-controls={`kp-panel-${t.id}`}
            tabIndex={i === active ? 0 : -1}
            className={`kp-tab${i === active ? ' is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`kp-panel-${t.id}`}
          aria-labelledby={`kp-tab-${t.id}`}
          hidden={i !== active}
          className="kp-panel"
        >
          {t.body}
        </div>
      ))}
    </div>
  )
}
