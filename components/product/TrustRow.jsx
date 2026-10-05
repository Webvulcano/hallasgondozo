import { getDictionary } from '../../lib/i18n'
import { Icon } from '../icons'

// Termékoldali ikonsor - a szolgáltatás garanciái, márkától független.
// Ikonok itt; a feliratok a szótárban (product.trust), ugyanebben a sorrendben.
const ICONS = ['Calendar', 'Shield', 'Doctor', 'EarAid']

export default function TrustRow({ locale }) {
  const t = getDictionary(locale).product
  const ITEMS = ICONS.map((iconName, i) => ({ iconName, label: t.trust[i] }))
  return (
    <section className="kp-trust" aria-label={t.trustAria}>
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
