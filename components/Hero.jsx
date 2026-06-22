import { BOOKING_URL, GOOGLE_REVIEWS_URL } from '../lib/constants'
import { trustItems } from '../lib/content/trustItems'
import Button from './Button'
import Reveal from './Reveal'
import { Check, Calendar, Google } from './icons'

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <Reveal direction="left">
          <h1>„Hallja újra tisztán szerettei hangját"</h1>
          <p className="sub">
            Derítse ki 30 perc alatt, mi akadályozza a tiszta hallásban - és kapjon személyre szabott
            megoldást, kötelezettség nélkül.
          </p>
          <div className="reassure">
            <span className="dot" aria-hidden="true" />
            Az első hallásvizsgálat ingyenes - beutaló és kötelezettség nélkül.
          </div>
          <div className="hero-cta">
            <Button variant="gold" href={BOOKING_URL} icon={<Calendar size={20} stroke="#3a1c00" />}>
              Ingyenes vizsgálatot foglalok
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
        <Reveal direction="right" className="hero-right">
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
          <a
            className="hero-google"
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="250+ ötcsillagos Google értékelés - megnézem a Google-ön"
          >
            <Google size={22} className="hero-google-logo" />
            <span className="hero-google-stars" aria-hidden="true">★★★★★</span>
            <span className="hero-google-meta"><b>250+</b> értékelés</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
