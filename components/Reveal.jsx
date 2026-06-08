'use client'
import { useEffect, useRef } from 'react'

// Scroll reveal wrapper — minden komponens explicit használja.
// Direction: 'up' (default) | 'left' | 'right'

const CLASS_MAP = {
  up: 'reveal',
  left: 'reveal-l',
  right: 'reveal-r',
}

export default function Reveal({
  direction = 'up',
  as: As = 'div',
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold, rootMargin }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin])

  const cls = `${CLASS_MAP[direction]} ${className}`.trim()

  return (
    <As ref={ref} className={cls} {...rest}>
      {children}
    </As>
  )
}
