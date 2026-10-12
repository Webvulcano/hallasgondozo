import { Icon } from '../icons'

// Termékoldali ikonsor - a szolgáltatás garanciái, márkától független.
// Ikonok itt; a feliratok a szótárban / CMS-ben (product.trust), ugyanebben a sorrendben.
// t = szótár product-blokkja, a = szerkesztő-jelölések (lib/site.js). Több sor, mint ikon → az utolsó ikon ismétlődik.
const ICONS = ['Calendar', 'Shield', 'Doctor', 'EarAid']

export default function TrustRow({ t, a = {} }) {
  const ITEMS = t.trust.map((label, i) => ({ iconName: ICONS[Math.min(i, ICONS.length - 1)], label }))
  return (
    <section className="kp-trust" aria-label={t.trustAria}>
      <div className="wrap">
        <ul className="kp-trust-row" {...a.trust}>
          {ITEMS.map((it) => (
            <li key={it.label}>
              <span className="kp-trust-ic">
                <Icon name={it.iconName} size={22} />
              </span>
              <span>{it.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
