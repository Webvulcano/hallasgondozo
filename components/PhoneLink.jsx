// Telefon link variánsok - Nav, Footer és inline használat

import { PHONE } from '../lib/constants'
import { Phone as PhoneIcon } from './icons'

/**
 * Variants:
 * - "nav"    - kerek ikon háttér + kis label ("Hívjon most") + szám
 * - "inline" - sima telefonszám szöveg (display)
 * - "plain"  - csak a megadott children-t rendereli href-fel
 */
export default function PhoneLink({
  variant = 'inline',
  prefix,
  className,
  iconStroke,
  children,
}) {
  if (variant === 'nav') {
    return (
      <a className={`nav-phone ${className || ''}`.trim()} href={PHONE.href}>
        <span className="ic" aria-hidden="true">
          <PhoneIcon size={17} stroke={iconStroke || '#79b944'} />
        </span>
        <span>
          <small>Hívjon most</small>
          <span className="num">{PHONE.display}</span>
        </span>
      </a>
    )
  }

  if (variant === 'plain') {
    return (
      <a className={className} href={PHONE.href}>
        {children ?? PHONE.display}
      </a>
    )
  }

  // inline
  return (
    <a className={className} href={PHONE.href}>
      {prefix ? `${prefix} ${PHONE.display}` : PHONE.display}
    </a>
  )
}
