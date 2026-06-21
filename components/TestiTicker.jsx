'use client'
import { useEffect, useRef } from 'react'

// Auto-görgő, megfogható (drag) vélemény-sor. dir: 'left' | 'right'.
// A tartalom duplázott (a hívó adja), így a felezőpontnál loopol.
export default function TestiTicker({ dir = 'left', children }) {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const s = { offset: 0, dragging: false, startX: 0, startOffset: 0, half: 0, raf: 0, moved: false }
    const speed = 0.5
    const sign = dir === 'left' ? -1 : 1
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const measure = () => {
      s.half = track.scrollWidth / 2
    }
    const wrap = () => {
      if (s.half <= 0) return
      while (s.offset <= -s.half) s.offset += s.half
      while (s.offset > 0) s.offset -= s.half
    }
    const apply = () => {
      track.style.transform = `translateX(${s.offset}px)`
    }

    measure()
    s.offset = dir === 'right' ? -s.half : 0
    apply()

    const tick = () => {
      if (!s.dragging && !reduce) {
        s.offset += speed * sign
        wrap()
        apply()
      }
      s.raf = requestAnimationFrame(tick)
    }
    s.raf = requestAnimationFrame(tick)

    const onDown = (e) => {
      s.dragging = true
      s.moved = false
      s.startX = e.clientX
      s.startOffset = s.offset
      track.setPointerCapture?.(e.pointerId)
      track.style.cursor = 'grabbing'
    }
    const onMove = (e) => {
      if (!s.dragging) return
      const dx = e.clientX - s.startX
      if (Math.abs(dx) > 3) s.moved = true
      s.offset = s.startOffset + dx
      wrap()
      apply()
    }
    const onUp = (e) => {
      s.dragging = false
      track.releasePointerCapture?.(e.pointerId)
      track.style.cursor = 'grab'
    }

    track.addEventListener('pointerdown', onDown)
    track.addEventListener('pointermove', onMove)
    track.addEventListener('pointerup', onUp)
    track.addEventListener('pointercancel', onUp)
    window.addEventListener('resize', measure)

    return () => {
      cancelAnimationFrame(s.raf)
      track.removeEventListener('pointerdown', onDown)
      track.removeEventListener('pointermove', onMove)
      track.removeEventListener('pointerup', onUp)
      track.removeEventListener('pointercancel', onUp)
      window.removeEventListener('resize', measure)
    }
  }, [dir])

  return (
    <div className={`testi-row testi-row--${dir}`}>
      <div className="testi-track" ref={trackRef}>
        {children}
      </div>
    </div>
  )
}
