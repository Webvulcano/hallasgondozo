'use client'

import { useEffect, useRef, useState } from 'react'

// Kép skeleton-vázzal: amíg a kép async betölt, pulzáló váz látszik a helyén,
// majd a kép finoman fade-inel. A wrapper display:contents, így a meglévő
// kép-CSS (object-fit, aspect-ratio stb.) változatlanul érvényesül.
// A skeleton abszolút pozícionált, ezért a befoglaló konténernek
// position:relative + overflow:hidden kell (ezt a megfelelő .css-ek adják).
//
// loading="lazy" → SAJÁT késleltetett betöltés: a kép csak akkor kap src-t, amikor
// 300px-en belül a képernyőhöz ér (IntersectionObserver). A böngésző natív lazy-je
// mobilon 1250–2500px-ről már az első kirajzolás ELŐTT elindítja a letöltést, ami lassú
// mobilneten elveszi a sávszélességet a hero-posztertől (LCP — PageSpeed mobil).
// JS nélkül (és robotoknak) a <noscript>-es kép marad.
const LAZY_MARGIN = '300px 0px'

export default function SkeletonImage({ src, alt = '', className = '', loading, ...rest }) {
  const deferred = loading === 'lazy'
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(!deferred)
  const imgRef = useRef(null)
  const markLoaded = () => setLoaded(true)

  useEffect(() => {
    if (!deferred || inView) return
    const el = imgRef.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin: LAZY_MARGIN }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [deferred, inView])

  const activeSrc = inView ? src : undefined

  return (
    <span className={`skimg ${loaded ? 'is-loaded' : ''}`.trim()}>
      {!loaded && <span className="skimg-shimmer" aria-hidden="true" />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={(el) => {
          imgRef.current = el
          // src nélküli <img>.complete is true → csak valódi forrásnál jelöljük betöltöttnek
          if (el && activeSrc && el.complete) markLoaded()
        }}
        src={activeSrc}
        alt={alt}
        className={className}
        onLoad={markLoaded}
        onError={markLoaded}
        {...(deferred ? { loading: 'lazy', decoding: 'async' } : {})}
        {...rest}
      />
      {deferred && (
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className={className} loading="lazy" />
        </noscript>
      )}
    </span>
  )
}
