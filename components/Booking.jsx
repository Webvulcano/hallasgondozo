import OnlinePanel from './booking/OnlinePanel'
import CallbackPanel from './booking/CallbackPanel'
import Reveal from './Reveal'

// Server component — csak wrapper.
// OnlinePanel = server, CallbackPanel = client (form state).

export default function Booking() {
  return (
    <section className="block booking" id="idopont">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>Tegye meg az első lépést — 5 perc az egész</h2>
          <p>Ingyenes, kötelezettség nélküli hallásvizsgálat. Foglaljon online most, vagy hívja vissza kollégánkat.</p>
        </Reveal>
        <div className="book-grid">
          <OnlinePanel />
          <CallbackPanel />
        </div>
      </div>
    </section>
  )
}
