// Nyelvválasztó - szerver-komponens, 0 JS. Valódi <a href hreflang lang> linkek → crawlolható,
// JS nélkül is működik. Szándékosan <a> és nem next/link: a nyelvek külön root layoutban vannak,
// a váltás úgyis teljes oldalbetöltés. Zászló: inline SVG (az emoji-zászló Windowson nem jelenik meg),
// csak a mobil menüben ('menu'), dekoráció (aria-hidden) - a nyelv nevét a szöveg adja.
// links: getAlternates().links - nyelvenként a cél (a pár-oldal, ha nincs: a szülő-oldal).
// variant: 'nav' (HU · EN · DE kódok, desktop) | 'menu' (mobil menü, ugyanazok a kódok).
// 1 élő nyelvnél nem renderel semmit.
import { LOCALES, LOCALE_META } from '../lib/i18n/config'

// 4:3 arányú, egyszerűsített zászlók (viewBox 0 0 20 15)
const FLAGS = {
  hu: (
    <>
      <rect width="20" height="5" fill="#CE2939" />
      <rect y="5" width="20" height="5" fill="#fff" />
      <rect y="10" width="20" height="5" fill="#477050" />
    </>
  ),
  en: (
    <>
      <rect width="20" height="15" fill="#012169" />
      <path d="M0 0L20 15M20 0L0 15" stroke="#fff" strokeWidth="3" />
      <path d="M0 0L20 15M20 0L0 15" stroke="#C8102E" strokeWidth="1" />
      <path d="M10 0V15M0 7.5H20" stroke="#fff" strokeWidth="5" />
      <path d="M10 0V15M0 7.5H20" stroke="#C8102E" strokeWidth="3" />
    </>
  ),
  de: (
    <>
      <rect width="20" height="5" fill="#000" />
      <rect y="5" width="20" height="5" fill="#DD0000" />
      <rect y="10" width="20" height="5" fill="#FFCE00" />
    </>
  ),
}

const Flag = ({ locale }) => (
  <svg className="lang-flag" viewBox="0 0 20 15" width="20" height="15" aria-hidden="true" focusable="false">
    {FLAGS[locale]}
  </svg>
)

export default function LangSwitcher({ links = {}, current, label, variant = 'nav' }) {
  const locales = LOCALES.filter((l) => links[l])
  if (locales.length < 2) return null

  return (
    <nav className={`lang-switch lang-switch--${variant}`} aria-label={label}>
      {locales.map((l) => {
        const m = LOCALE_META[l]
        const active = l === current
        return (
          <a
            key={l}
            href={links[l]}
            hrefLang={m.hreflang}
            lang={m.htmlLang}
            className={`lang-switch-link${active ? ' is-active' : ''}`}
            aria-current={active ? 'true' : undefined}
          >
            {variant === 'menu' && <Flag locale={l} />}
            <span aria-hidden="true">{m.short}</span>
            <span className="sr-only">{m.label}</span>
          </a>
        )
      })}
    </nav>
  )
}
