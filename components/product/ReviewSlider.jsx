'use client'

import { useState } from 'react'
import { GOOGLE_REVIEWS_URL } from '../../lib/constants'

// Lapozható valódi Google-vélemények a termékoldali infó-oszlopban
// (a referencia "96% recommend" dobozának helyén).
// Props (a BrandView adja, nyelvenként): testimonials, source ('Google értékelés'), labels { role, prev, next }.
export default function ReviewSlider({ testimonials, source, labels }) {
  const [i, setI] = useState(0)
  const t = testimonials[i]
  const go = (dir) => setI((cur) => (cur + dir + testimonials.length) % testimonials.length)

  return (
    <div className="kp-review" aria-roledescription={labels.role}>
      <span className="kp-review-mark" aria-hidden="true">“</span>
      <figure className="kp-review-body" aria-live="polite">
        <blockquote>{t.quote}</blockquote>
        <figcaption>
          {t.name} ·{' '}
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
            {source}
          </a>
        </figcaption>
      </figure>
      <div className="kp-review-nav">
        <button type="button" onClick={() => go(-1)} aria-label={labels.prev}>‹</button>
        <button type="button" onClick={() => go(1)} aria-label={labels.next}>›</button>
      </div>
    </div>
  )
}
