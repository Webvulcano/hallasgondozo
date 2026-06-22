import { team } from '../lib/content/team'

export default function Team() {
  return (
    <section className="block team" id="csapat">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Akikre rábízhatja magát</div>
          <h2>Orvos, audiológus, hallásakusztikus - egy csapatban</h2>
          <p>
            Nem kell előre tudnia semmit a hallásról. Minden kérdésre türelmesen, érthetően -
            orvosi szakzsargon nélkül - kapja meg a választ.
          </p>
        </div>
        <div className="cards">
          {team.map((m) => (
            <div key={m.name} className="tcard">
              <div className="ph">
                <span className="ph-label">[ KÉP: {m.imgAlt} ]</span>
              </div>
              <div className="body">
                <h3>{m.name}</h3>
                <div className="role">{m.role}</div>
                <p>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
