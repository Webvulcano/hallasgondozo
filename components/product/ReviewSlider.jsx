'use client'

import { useState } from 'react'
import { testimonials } from '../../lib/content/testimonials'
import { GOOGLE_REVIEWS_URL } from '../../lib/constants'

// Lapozható valódi Google-vélemények a termékoldali infó-oszlopban
// (a referencia "96% recommend" dobozának helyén).
export default function ReviewSlider() {
  const [i, setI] = useState(0)
  const t = testimonials[i]
  const go = (dir) => setI((cur) => (cur + dir + testimonials.length) % testimonials.length)

  return (
    <div className="kp-review" aria-roledescription="vélemény-lapozó">
      <span className="kp-review-mark" aria-hidden="true">“</span>
      <figure className="kp-review-body" aria-live="polite">
        <blockquote>{t.quote}</blockquote>
        <figcaption>
          {t.name} ·{' '}
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
            {t.location}
          </a>
        </figcaption>
      </figure>
      <div className="kp-review-nav">
        <button type="button" onClick={() => go(-1)} aria-label="Előző vélemény">‹</button>
        <button type="button" onClick={() => go(1)} aria-label="Következő vélemény">›</button>
      </div>
    </div>
  )
}
