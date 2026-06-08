import { partners } from '../lib/content/partners'
import Reveal from './Reveal'

// Duplicate for seamless infinite scroll
const allPartners = [...partners, ...partners]

export default function Partners() {
  return (
    <Reveal as="div" className="partners">
      <div className="wrap">
        <h4>Egészségpénztárral is elszámolható — ezekkel is:</h4>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {allPartners.map((name, i) => (
            <div key={i} className="pbadge">
              <span className="pd" />
              {name}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
