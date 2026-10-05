import { getContent } from '../lib/content'
import { getDictionary } from '../lib/i18n'
import { Icon, Check } from './icons'

export default function Services({ locale }) {
  const t = getDictionary(locale).services
  const { services, servicesTrust } = getContent(locale)
  return (
    <section className="block services" id="szolgaltatasok">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">{t.eyebrow}</div>
          <h2>{t.title}</h2>
          <p>{t.lead}</p>
        </div>
        <div className="cards">
          {services.map((s) => (
            <div key={s.id} className="card">
              <div className="ic-badge">
                <Icon name={s.iconName} size={24} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="trust-row">
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
