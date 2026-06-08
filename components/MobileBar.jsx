import { BOOKING_URL, PHONE } from '../lib/constants'
import { Phone, Calendar } from './icons'

export default function MobileBar() {
  return (
    <nav className="mobile-bar" aria-label="Gyors elérés">
      <a className="m-call" href={PHONE.href}>
        <Phone size={18} />
        Hívás
      </a>
      <a className="m-book" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
        <Calendar size={18} stroke="#3a1c00" />
        Időpont
      </a>
    </nav>
  )
}
