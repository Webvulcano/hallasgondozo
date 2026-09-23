'use client'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

// Splash logó → hero sarok-logó FLIP animáció (csak főoldal).
const REPLAY_EVERY_LOAD = false
const SESSION_KEY = 'erted-splash-seen'
const HOLD_MS = 900
const MOVE_MS = 600
const FALLBACK_MS = HOLD_MS + MOVE_MS + 400

// sessionStorage néhány mobil böngészőben (pl. Safari szigorú beállítással,
// vagy sima http:// IP-címen elérve) SecurityError-t dobhat - ez ne akassza meg a hydrationt.
function safeSessionGet(key) {
  try { return sessionStorage.getItem(key) } catch { return null }
}
function safeSessionSet(key, value) {
  try { sessionStorage.setItem(key, value) } catch { /* noop */ }
}

export default function Splash() {
  const [phase, setPhase] = useState('hold') // 'hold' | 'moving' | 'done' | 'skip'
  const logoRef = useRef(null)

  useLayoutEffect(() => {
    if (!REPLAY_EVERY_LOAD && safeSessionGet(SESSION_KEY)) {
      setPhase('skip')
      document.getElementById('hero-logo-target')?.classList.add('is-visible')
    }
  }, [])

  useEffect(() => {
    if (phase === 'skip' || phase === 'done') return
    let cancelled = false

    function finish() {
      if (cancelled) return
      cancelled = true
      clearTimeout(fallback)
      document.getElementById('hero-logo-target')?.classList.add('is-visible')
      if (!REPLAY_EVERY_LOAD) safeSessionSet(SESSION_KEY, '1')
      setPhase('done')
    }

    const fallback = setTimeout(finish, FALLBACK_MS)

    let reduceMotion = false
    try { reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false } catch { /* noop */ }

    function runMoveAnimation() {
      const el = logoRef.current
      const target = document.getElementById('hero-logo-target')
      if (!el || !target) { finish(); return }

      const startRect = el.getBoundingClientRect()
      const endRect = target.getBoundingClientRect()
      const dx = endRect.left - startRect.left
      const dy = endRect.top - startRect.top
      const scale = endRect.width / startRect.width

      setPhase('moving')

      if (reduceMotion) { finish(); return }

      el.style.transition = 'none'
      el.style.left = `${startRect.left}px`
      el.style.top = `${startRect.top}px`
      el.style.transform = 'translate(0,0) scale(1)'
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.transition = `transform ${MOVE_MS}ms cubic-bezier(.4,0,.2,1)`
          el.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`
        })
      })
      el.addEventListener('transitionend', finish, { once: true })
    }

    const holdTimer = setTimeout(() => {
      if (cancelled) return
      try {
        runMoveAnimation()
      } catch {
        finish()
      }
    }, HOLD_MS)

    return () => { cancelled = true; clearTimeout(holdTimer); clearTimeout(fallback) }
  }, [phase])

  if (phase === 'skip' || phase === 'done') return null

  return (
    <>
      <div id="splash" className={`splash${phase === 'moving' ? ' splash-fade' : ''}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={logoRef} src="/pic/logo_felirattal.webp" alt="" aria-hidden="true" className="splash-logo" />
      </div>
      <noscript>
        <style>{`#splash{display:none!important}#hero-logo-target{opacity:1!important}`}</style>
      </noscript>
    </>
  )
}
