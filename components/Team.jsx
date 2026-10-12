import { loadSite } from '../lib/site'
import SkeletonImage from './SkeletonImage'

export default async function Team({ locale }) {
  const { t: dict, c, a } = await loadSite(locale)
  const t = dict.team
  const { team } = c
  return (
    <section className="block team" id="csapat">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow" {...a.dict.team.eyebrow}>{t.eyebrow}</div>
          <h2 {...a.dict.team.title}>{t.title}</h2>
          {/*<p>
            Nem kell előre tudnia semmit a hallásról. Minden kérdésre türelmesen, érthetően -
            orvosi szakzsargon nélkül - kapja meg a választ.
          </p>*/}
        </div>
        <div className="cards">
          {team.map((m) => (
            <div key={m.id} className="tcard">
              <div className="ph">
                <SkeletonImage src={m.img} alt={m.imgAlt} className="tcard-img" loading="lazy" />
              </div>
              <div className="body">
                <h3>{m.name}</h3>
                <div className="role" {...a.text.team[m.id]?.role}>{m.role}</div>
                <p {...a.text.team[m.id]?.desc}>{m.desc}</p>
                {/*m.url && (
                  <a href={m.url} className="tcard-link" target="_blank" rel="noopener">
                    {m.urlLabel}&nbsp;→
                  </a>
                )*/}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
