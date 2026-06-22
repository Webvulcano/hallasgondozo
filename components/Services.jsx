import { services } from '../lib/content/services'
import { Icon } from './icons'

export default function Services() {
  return (
    <section className="block services" id="szolgaltatasok">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Minden egy helyen</div>
          <h2>Vizsgálat, diagnózis, megoldás - egyetlen látogatással</h2>
          <p>
            Nem kell audiológushoz, fül-orr-gégészhez és hallókészülék-szaküzletbe külön-külön
            menni. Nálunk mindez egyetlen időpontban megoldódik.
          </p>
        </div>
        <div className="cards">
          {services.map((s) => (
            <div key={s.title} className={`card${s.featured ? ' featured' : ''}`}>
              {s.pill && <span className="pill">{s.pill}</span>}
              <div className="ic-badge">
                <Icon name={s.iconName} size={32} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
