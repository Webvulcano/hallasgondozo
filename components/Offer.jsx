import { BOOKING_URL } from '../lib/constants'
import { offer, offerFeatures } from '../lib/content/offer'
import Button from './Button'
import Reveal from './Reveal'
import { Check } from './icons'

export default function Offer() {
  const leadParts = offer.lead.split('{price}')

  return (
    <section className="block offer" id="ajanlat">
      <div className="wrap offer-grid">
        <Reveal direction="left">
          <span className="tag">{offer.tag}</span>
          <h2>{offer.title}</h2>
          <p className="lead">
            {leadParts[0]}
            <span className="price">{offer.priceLabel}</span>
            {leadParts[1]}
          </p>
          <ul className="offer-list">
            {offerFeatures.map((f, i) => (
              <li key={i}>
                <span className="check"><Check size={14} stroke="#3a1c00" /></span>
                {f.bold ? (
                  <span>
                    <strong>{f.bold}</strong>
                    {f.plain}
                  </span>
                ) : (
                  f.plain
                )}
              </li>
            ))}
          </ul>
          <div className="offer-note">{offer.note}</div>
        </Reveal>
        <Reveal direction="right">
          <div className="offer-card">
            <div className="ph">
              <span className="ph-label">[ KÉP: {offer.imageAlt} ]</span>
            </div>
            <div className="was">{offer.priceListLabel}</div>
            <div className="now">{offer.price}</div>
            <div className="unit">{offer.unit}</div>
            <Button variant="gold" href={BOOKING_URL} fullWidth>
              {offer.cta}
            </Button>
            {/* Másodlagos — a teljes készülék-/termékkínálat aloldala */}
            <Button variant="outline" fullWidth className="offer-secondary" href="/keszulekek">
              {offer.ctaSecondary}
            </Button>
            <p className="offer-secondary-note">{offer.ctaSecondaryNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
