import { loadSite } from '../lib/site'
import Reveal from './Reveal'
import TestiTicker from './TestiTicker'

// Egy partner-badge (az auto-görgő, dragolható sor ezt ismétli)
function PBadge({ name, hidden }) {
  return (
    <div className="pbadge" {...(hidden ? { 'aria-hidden': true } : {})}>
      <span className="pd" />
      {name}
    </div>
  )
}

export default async function Partners({ locale }) {
  const { t, c, a } = await loadSite(locale)
  const { partners } = c
  // A tartalmat duplázzuk a zökkenőmentes loophoz; a második fél aria-hidden.
  const allBadges = [
    ...partners.map((name) => <PBadge key={`a-${name}`} name={name} />),
    ...partners.map((name) => <PBadge key={`b-${name}`} name={name} hidden />),
  ]
  return (
    <Reveal as="div" className="partners">
      <div className="wrap">
        <h4 {...a.dict.partners.title}>{t.partners.title}</h4>
      </div>
      <div className="pmarquee-wrap">
        <TestiTicker cls="pmarquee">{allBadges}</TestiTicker>
      </div>
    </Reveal>
  )
}
