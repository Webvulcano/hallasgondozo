'use client'

import { useState } from 'react'

// Kép skeleton-vázzal: amíg a kép async betölt, pulzáló váz látszik a helyén,
// majd a kép finoman fade-inel. A wrapper display:contents, így a meglévő
// kép-CSS (object-fit, aspect-ratio stb.) változatlanul érvényesül.
// A skeleton abszolút pozícionált, ezért a befoglaló konténernek
// position:relative + overflow:hidden kell (ezt a megfelelő .css-ek adják).
export default function SkeletonImage({ src, alt = '', className = '', ...rest }) {
  const [loaded, setLoaded] = useState(false)
  const markLoaded = () => setLoaded(true)

  return (
    <span className={`skimg ${loaded ? 'is-loaded' : ''}`.trim()}>
      {!loaded && <span className="skimg-shimmer" aria-hidden="true" />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={markLoaded}
        onError={markLoaded}
        ref={(el) => { if (el && el.complete) markLoaded() }}
        {...rest}
      />
    </span>
  )
}
