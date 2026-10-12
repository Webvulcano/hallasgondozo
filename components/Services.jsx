import { loadSite } from '../lib/site'
import { Icon, Check } from './icons'

export default async function Services({ locale }) {
  const { t: dict, c, a } = await loadSite(locale)
  const t = dict.services
  const ta = a.dict.services
  const { services, servicesTrust } = c
  return (
    <section className="block services" id="szolgaltatasok">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow" {...ta.eyebrow}>{t.eyebrow}</div>
          <h2 {...ta.title}>{t.title}</h2>
          <p {...ta.lead}>{t.lead}</p>
        </div>
        <div className="cards">
          {services.map((s) => (
            <div key={s.id} className="card">
              <div className="ic-badge">
                <Icon name={s.iconName} size={24} />
              </div>
              <h3 {...a.text.services[s.id]?.title}>{s.title}</h3>
              <p {...a.text.services[s.id]?.desc}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="trust-row" {...a.text.servicesTrust}>
          {servicesTrust.map((item) => (
            <div key={item} className="trust-item">
              <span className="check"><Check size={14} stroke="#fff" /></span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
