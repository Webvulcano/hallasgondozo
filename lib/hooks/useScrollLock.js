'use client'
import { useEffect } from 'react'

// Háttér-görgetés tiltása popup alatt. A sima body{overflow:hidden} iOS Safarin érintéssel átgörgethető,
// ezért a body-t position:fixed-del rögzítjük az aktuális scroll-pozícióban, záráskor visszaállítjuk.
// Számlálós: egymásba nyíló popupoknál csak az utolsó zárás oldja fel.
let locks = 0
let saved = null

function lock() {
  if (locks++ > 0) return
  const y = window.scrollY
  const body = document.body.style
  const scrollbar = window.innerWidth - document.documentElement.clientWidth
  saved = { y, position: body.position, top: body.top, left: body.left, right: body.right, width: body.width, overflow: body.overflow, paddingRight: body.paddingRight }
  Object.assign(body, {
    position: 'fixed', top: `-${y}px`, left: '0', right: '0', width: '100%', overflow: 'hidden',
    // a desktop-görgetősáv eltűnése ne ugrassza el a tartalmat
    ...(scrollbar > 0 ? { paddingRight: `${scrollbar}px` } : {}),
  })
}

function unlock() {
  if (--locks > 0 || !saved) return
  const { y, ...prev } = saved
  Object.assign(document.body.style, prev)
  saved = null
  // html{scroll-behavior:smooth} ellenére azonnal ugorjon vissza
  window.scrollTo({ top: y, behavior: 'instant' })
}

export function useScrollLock(active) {
  useEffect(() => {
    if (!active) return
    lock()
    return unlock
  }, [active])
}
