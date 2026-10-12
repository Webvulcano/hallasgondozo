// Nyelvválasztó - szerver-komponens, 0 JS. Valódi <a href hreflang lang> linkek → crawlolható,
// JS nélkül is működik. Szándékosan <a> és nem next/link: a nyelvek külön root layoutban vannak,
// a váltás úgyis teljes oldalbetöltés. Zászló nincs (a nyelv ≠ ország; a DE osztrákoknak is szól).
// links: getAlternates().links - nyelvenként a cél (a pár-oldal, ha nincs: a szülő-oldal).
// variant: 'nav' (HU · EN · DE kódok, desktop) | 'menu' (mobil menü) | 'footer' - a 'menu'/'footer' teljes nevet ír.
// 1 élő nyelvnél nem renderel semmit.
import { LOCALES, LOCALE_META } from '../lib/i18n/config'

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
            {variant === 'nav' ? (
              <>
                <span aria-hidden="true">{m.short}</span>
                <span className="sr-only">{m.label}</span>
              </>
            ) : (
              m.label
            )}
          </a>
        )
      })}
    </nav>
  )
}
