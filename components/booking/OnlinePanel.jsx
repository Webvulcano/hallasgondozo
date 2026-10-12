import { loadSite } from '../../lib/site'
import Button from '../Button'
import Reveal from '../Reveal'
import { Calendar, Child, Phone } from '../icons'

export default async function OnlinePanel({ locale }) {
  const { t: dict, site, a } = await loadSite(locale)
  const t = dict.booking
  const ta = a.dict.booking
  const booking = site.booking
  return (
    <Reveal direction="left" className="book-panel">
      <h3 {...ta.onlineTitle}>{t.onlineTitle}</h3>
      <p className="small" {...ta.onlineLead}>{t.onlineLead}</p>
      <div className="book-btns">
        <Button variant="gold" href={booking.adult} icon={<Calendar size={20} stroke="#3a1c00" />}>
          <span {...ta.adult}>{t.adult}</span>
        </Button>
        <Button variant="white" href={booking.child} icon={<Child size={20} stroke="#2d5e12" />}>
          <span {...ta.child}>{t.child}</span>
        </Button>
      </div>
      <div className="or-split">{t.or}</div>
      <Button variant="ghost-light" href={site.phone.href} fullWidth icon={<Phone size={19} />}>
        <span {...ta.phonePrefix}>{t.phonePrefix}</span> <span style={{ whiteSpace: 'nowrap' }} {...a.const.phone}>{site.phone.display}</span>
      </Button>
    </Reveal>
  )
}
