import { BOOKING_URL, BOOKING_URL_CHILD, PHONE } from '../../lib/constants'
import Button from '../Button'
import Reveal from '../Reveal'
import { Calendar, Child, Phone } from '../icons'

export default function OnlinePanel() {
  return (
    <Reveal direction="left" className="book-panel">
      <h3>Válasszon időpontot online</h3>
      <p className="small">Azonnal visszajelzést kap a szabad időpontokról — kötelezettség nélkül.</p>
      <div className="book-btns">
        <Button variant="gold" href={BOOKING_URL} icon={<Calendar size={20} stroke="#3a1c00" />}>
          Felnőtt hallásvizsgálat
        </Button>
        <Button variant="white" href={BOOKING_URL_CHILD} icon={<Child size={20} stroke="#2d5e12" />}>
          Gyermek audiológia
        </Button>
      </div>
      <div className="or-split">VAGY</div>
      <Button variant="ghost-light" href={PHONE.href} fullWidth icon={<Phone size={19} />}>
        Inkább telefonálok: {PHONE.display}
      </Button>
    </Reveal>
  )
}
