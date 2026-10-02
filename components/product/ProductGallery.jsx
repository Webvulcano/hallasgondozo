'use client'

import { useState } from 'react'
import SkeletonImage from '../SkeletonImage'

// Termékoldali galéria: nagy fő kép + mellette függőleges thumbnail-oszlop
// (mobilon a fő kép alá kerül, vízszintes sorba). Thumb kattintás → fő kép csere.
export default function ProductGallery({ images }) {
  const [active, setActive] = useState(0)
  const main = images[active]

  return (
    <div className="kp-gallery">
      <div className="kp-gallery-main">
        {/* key → kép-cserénél újra lefut a skeleton + fade-in */}
        <SkeletonImage key={main.src} src={main.src} alt={main.alt} className="kp-gallery-img" />
      </div>
      {images.length > 1 && (
        <div className="kp-thumbs" role="list">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              role="listitem"
              className={`kp-thumb${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Kép megjelenítése: ${img.alt}`}
              aria-current={i === active}
            >
              <SkeletonImage src={img.src} alt="" className="kp-thumb-img" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
