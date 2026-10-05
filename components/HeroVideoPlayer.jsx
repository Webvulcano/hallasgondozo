'use client'
import { useEffect, useRef, useState } from 'react'

// Késleltetett hero-videó: a forrásokat csak az oldal teljes betöltése (window "load") UTÁN
// kapja meg. Így lassú mobilneten a 1,6–2,6 MB-os videó nem veszi el a sávszélességet a
// CSS / JS / betűtípusok elől (ezek kellenek az első kirajzoláshoz → LCP).
// Addig a mögötte lévő poszter-kép látszik (HeroVideo.jsx); a videó az első lejátszott
// kockánál finoman ráúszik (.is-playing). Adatkímélő módban (Save-Data) nem tölt videót.
//
// Források — a böngésző az első lejátszhatót választja:
//   1) HEVC (hvc1, 1,6 MB) — Safari, és a HEVC-t ismerő Chrome/Edge
//   2) H.264 tartalék (2,6 MB) — Firefox és minden más
export default function HeroVideoPlayer() {
  const ref = useRef(null)
  const [load, setLoad] = useState(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    try {
      if (navigator.connection?.saveData) return
    } catch { /* noop */ }
    const start = () => setLoad(true)
    if (document.readyState === 'complete') {
      start()
      return
    }
    window.addEventListener('load', start, { once: true })
    return () => window.removeEventListener('load', start)
  }, [])

  // Források renderelése után: betöltés + lejátszás (a muted autoplay mindenhol engedett)
  useEffect(() => {
    const v = ref.current
    if (!load || !v) return
    v.load()
    v.play().catch(() => { /* pl. energiatakarékos mód: marad a poszter */ })
  }, [load])

  return (
    <video
      ref={ref}
      className={`hero-video-el${playing ? ' is-playing' : ''}`}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      onPlaying={() => setPlaying(true)}
    >
      {load && <source src="/pic/hero/hero.mp4" type='video/mp4; codecs="hvc1"' />}
      {load && <source src="/pic/hero/hero_h264.mp4" type="video/mp4" />}
    </video>
  )
}
