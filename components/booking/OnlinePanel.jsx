import { PHONE, bookingUrls } from '../../lib/constants'
import { getDictionary } from '../../lib/i18n'
import Button from '../Button'
import Reveal from '../Reveal'
import { Calendar, Child, Phone } from '../icons'

export default function OnlinePanel({ locale }) {
  const t = getDictionary(locale).booking
  const booking = bookingUrls(locale)
  return (
    <Reveal direction="left" className="book-panel">
      <h3>{t.onlineTitle}</h3>
      <p className="small">{t.onlineLead}</p>
      <div className="book-btns">
        <Button variant="gold" href={booking.adult} icon={<Calendar size={20} stroke="#3a1c00" />}>
          {t.adult}
        </Button>
        <Button variant="white" href={booking.child} icon={<Child size={20} stroke="#2d5e12" />}>
          {t.child}
        </Button>
      </div>
      <div className="or-split">{t.or}</div>
      <Button variant="ghost-light" href={PHONE.href} fullWidth icon={<Phone size={19} />}>
        {t.phonePrefix} <span style={{ whiteSpace: 'nowrap' }}>{PHONE.display}</span>
      </Button>
    </Reveal>
  )
}
