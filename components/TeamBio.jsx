'use client'
import { useRef, useState } from 'react'
import { useScrollLock } from '../lib/hooks/useScrollLock'
import Button from './Button'
import SkeletonImage from './SkeletonImage'

// Csapattag bővebb bemutatkozása popupban (natív <dialog>: fókusz-csapda, Esc, top-layer).
// A tartalom SSR-rel a HTML-ben van (rejtve) → a keresők / AI-crawlerek is olvassák (E-E-A-T).
// Props (Team.jsx adja): m = csapattag (bio: bekezdések üres sorral elválasztva), labels {open, close, cta},
// ctaHref = foglalás, a = szerkesztő-jelölések (a.text.team[id]).
export default function TeamBio({ m, labels, ctaHref, a = {} }) {
  const ref = useRef(null)
  const titleId = `bio-${m.id}-title`
  const paragraphs = m.bio.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)

  const [isOpen, setOpen] = useState(false)
  useScrollLock(isOpen)

  const open = () => { ref.current?.showModal(); setOpen(true) }
  const close = () => ref.current?.close() // → onClose (Esc is ide fut)

  return (
    <>
      <button type="button" className="tcard-link tcard-bio-btn" onClick={open} aria-haspopup="dialog">
        {labels.open}&nbsp;→
      </button>
      <dialog
        ref={ref}
        className="bio-dialog"
        aria-labelledby={titleId}
        onClose={() => setOpen(false)}
        onClick={(e) => { if (e.target === e.currentTarget) close() }}
      >
        {/* × a görgethető kártyán KÍVÜL → görgetéskor is a jobb felső sarokban marad */}
        <button type="button" className="promo-close bio-close" onClick={close} aria-label={labels.close}>
          ×
        </button>
        <div className="bio-card">
          <aside className="bio-side">
            <div className="bio-photo">
              <SkeletonImage src={m.img} alt={m.imgAlt} className="bio-img" loading="lazy" />
            </div>
            <div className="bio-id">
              <h2 id={titleId}>{m.name}</h2>
              <div className="bio-role" {...a.bioRole}>{m.bioRole || m.role}</div>
              {m.bioHighlights?.length > 0 && (
                <ul className="bio-chips">
                  {m.bioHighlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
              )}
            </div>
          </aside>
          <div className="bio-main">
            <div className="bio-text" {...a.bio}>
              {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <p className="bio-sign">{m.name}</p>
            <Button variant="gold" href={ctaHref} fullWidth onClick={close}>
              {labels.cta}
            </Button>
          </div>
        </div>
      </dialog>
    </>
  )
}
