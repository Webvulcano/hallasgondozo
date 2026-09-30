'use client'
import { useEffect, useRef, useState } from 'react'
import { promo } from '../lib/content/promo'
import Button from './Button'
import { Check } from './icons'
import SkeletonImage from './SkeletonImage'

// Akció popup: promo.delayMs után felugrik, session-enként egyszer.
// Teszteléshez: ?promo=1 → azonnal megnyílik, a seen-flaget figyelmen kívül hagyja.
const SESSION_KEY = 'erted-promo-seen'

// sessionStorage egyes mobil böngészőkben SecurityError-t dobhat (lásd Splash.jsx)
function safeSessionGet(key) {
  try { return sessionStorage.getItem(key) } catch { return null }
}
function safeSessionSet(key, value) {
  try { sessionStorage.setItem(key, value) } catch { /* noop */ }
}

export default function PromoPopup() {
  const [open, setOpen] = useState(false)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!promo.enabled) return
    const force = new URLSearchParams(window.location.search).get('promo') === '1'
    if (!force && safeSessionGet(SESSION_KEY)) return
    const t = setTimeout(() => setOpen(true), force ? 300 : promo.delayMs)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!open) return
    safeSessionSet(SESSION_KEY, '1')
    closeRef.current?.focus()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  if (!open) return null

  const close = () => setOpen(false)

  return (
    <div className="promo-overlay" onClick={close}>
      <div
        className="promo-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="promo-close" onClick={close} aria-label="Bezárás">
          ×
        </button>
        <div className="promo-media">
          <SkeletonImage src={promo.image} alt={promo.imageAlt} className="promo-img" />
        </div>
        <div className="promo-body">
          <span className="promo-tag">{promo.tag}</span>
          <h2 id="promo-title">{promo.title}</h2>
          <p className="promo-text">{promo.text}</p>
          <ul className="promo-list">
            {promo.features.map((f) => (
              <li key={f}>
                <span className="check"><Check size={14} stroke="#3a1c00" /></span>
                {f}
              </li>
            ))}
          </ul>
          <Button variant="gold" href={promo.ctaHref} fullWidth onClick={close}>
            {promo.cta}
          </Button>
          <button type="button" className="promo-dismiss" onClick={close}>
            {promo.dismiss}
          </button>
        </div>
      </div>
    </div>
  )
}
