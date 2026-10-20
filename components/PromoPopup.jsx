'use client'
import { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { Check } from './icons'
import SkeletonImage from './SkeletonImage'
import { useScrollLock } from '../lib/hooks/useScrollLock'

// Akció popup: promo.delayMs után felugrik, session-enként egyszer.
// Props (a HomeView adja, nyelvenként): promo = alap + szöveg (lib/content), ctaHref, closeLabel.
// Teszteléshez: ?promo=1 → azonnal megnyílik, a seen-flaget figyelmen kívül hagyja.
const SESSION_KEY = 'erted-promo-seen'

// sessionStorage egyes mobil böngészőkben SecurityError-t dobhat (lásd Splash.jsx)
function safeSessionGet(key) {
  try { return sessionStorage.getItem(key) } catch { return null }
}
function safeSessionSet(key, value) {
  try { sessionStorage.setItem(key, value) } catch { /* noop */ }
}

// a = szerkesztő-jelölések (lib/site.js → a.text.promo).
export default function PromoPopup({ promo, ctaHref, closeLabel, a = {} }) {
  const [open, setOpen] = useState(false)
  const closeRef = useRef(null)
  useScrollLock(open)

  useEffect(() => {
    if (!promo.enabled) return
    const force = new URLSearchParams(window.location.search).get('promo') === '1'
    if (!force && safeSessionGet(SESSION_KEY)) return
    const t = setTimeout(() => setOpen(true), force ? 300 : promo.delayMs)
    return () => clearTimeout(t)
  }, [promo.enabled, promo.delayMs])

  useEffect(() => {
    if (!open) return
    safeSessionSet(SESSION_KEY, '1')
    closeRef.current?.focus()
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!open) return null

  const close = () => setOpen(false)

  return (
    <div className="promo-overlay" onClick={close}>
      <div
        className="promo-frame"
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* × a görgethető kártyán KÍVÜL → görgetéskor is a jobb felső sarokban marad */}
        <button ref={closeRef} type="button" className="promo-close" onClick={close} aria-label={closeLabel}>
          ×
        </button>
        <div className="promo-card">
          <div className="promo-media" {...a.image}>
            <SkeletonImage src={promo.image} alt={promo.imageAlt} className="promo-img" loading="lazy" />
          </div>
          <div className="promo-body">
            <span className="promo-tag" {...a.tag}>{promo.tag}</span>
            <h2 id="promo-title" {...a.title}>{promo.title}</h2>
            <p className="promo-text" {...a.text}>{promo.text}</p>
            <ul className="promo-list" {...a.features}>
              {promo.features.map((f) => (
                <li key={f}>
                  <span className="check"><Check size={14} stroke="#3a1c00" /></span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button variant="gold" href={ctaHref} fullWidth onClick={close}>
              <span {...a.cta}>{promo.cta}</span>
            </Button>
            <button type="button" className="promo-dismiss" onClick={close}>
              <span {...a.dismiss}>{promo.dismiss}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
