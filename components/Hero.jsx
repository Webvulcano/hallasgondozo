import { BOOKING_URL, PHONE } from '../lib/constants'
import { trustItems } from '../lib/content/trustItems'
import Button from './Button'
import Reveal from './Reveal'
import { Check, Calendar, Phone } from './icons'

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <Reveal direction="left">
          <h1>„Hallja újra tisztán szerettei hangját"</h1>
          <p className="sub">
            Derítse ki 30 perc alatt, mi akadályozza a tiszta hallásban — és kapjon személyre szabott
            megoldást, kötelezettség nélkül.
          </p>
          <div className="reassure">
            <span className="dot" aria-hidden="true" />
            Az első hallásvizsgálat ingyenes — beutaló és kötelezettség nélkül.
          </div>
          <div className="hero-cta">
            <Button variant="gold" href={BOOKING_URL} icon={<Calendar size={20} stroke="#3a1c00" />}>
              Ingyenes vizsgálatot foglalok
            </Button>
            <Button variant="outline" href={PHONE.href} icon={<Phone size={19} />}>
              Felhívom: {PHONE.display}
            </Button>
          </div>
          <div className="trust-row">
            {trustItems.map((item) => (
              <div key={item} className="trust-item">
                <span className="check"><Check size={14} stroke="#fff" /></span>
                {item}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal direction="right">
          <div className="hero-img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pic/hero.jpg"
              alt="Boldog idős pár, aki újra önfeledten kommunikál"
              className="hero-img"
            />
            <div className="hero-badge">
              <span className="big">15</span>
              <span className="lbl">napos ingyenes<br />próbahordás</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
