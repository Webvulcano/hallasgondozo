import { Icon } from '../icons'

// Termékoldali ikonsor - a szolgáltatás garanciái, márkától független.
const ITEMS = [
  { iconName: 'Calendar', label: '15 nap ingyenes próbahordás' },
  { iconName: 'Shield', label: 'Egészségpénztárral is elszámolható' },
  { iconName: 'Doctor', label: 'Szakorvos és audiológus egy helyen' },
  { iconName: 'EarAid', label: 'Ingyenes utánkövetés és beállítás' },
]

export default function TrustRow() {
  return (
    <section className="kp-trust" aria-label="Amit minden készülékhez adunk">
      <div className="wrap">
        <ul className="kp-trust-row">
          {ITEMS.map((it) => (
            <li key={it.label}>
              <span className="kp-trust-ic">
                <Icon name={it.iconName} size={22} />
              </span>
              {it.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
