import localFont from 'next/font/local'

// Betűtípusok — SAJÁT, magyar karakterkészletre szűkített változó fontok (app/fonts/).
// Mindhárom nyelvi root layout (app/(hu|en|de)/layout.jsx) ezt használja.
// Teljesítmény (PageSpeed mobil): a Google latin + latin-ext fájljai 143 KB voltak, és az
// első kirajzolás előtt letöltődtek (LCP +0,9 mp). A szűkítés: latin-hu = alap latin +
// Latin-1 (áéíóöúü… + a német äöüß) + a használt írásjelek; hu-ext = csak Ő ő Ű ű — ez külön, kis fájl,
// unicode-range-dzsel, így csak akkor töltődik, ha ilyen betű van az oldalon. Összesen 55 KB.
// Forrás: Google Fonts (OFL), pyftsubset. Új karakter → újra-szűkítés + scripts/font-charset.json frissítése
// (az i18n-check ez alapján jelzi, ha egy nyelvi szöveg a fontban nem létező karaktert használ).
const playfairLatin = localFont({
  src: '../app/fonts/playfair-display-latin-hu.woff2',
  weight: '400 900',
  display: 'swap',
  preload: false, // csak címek — swap-pel érkezik, ne versenyezzen az LCP-poszterrel
  adjustFontFallback: 'Times New Roman',
})
const playfairExt = localFont({
  src: '../app/fonts/playfair-display-hu-ext.woff2',
  weight: '400 900',
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
  declarations: [{ prop: 'unicode-range', value: 'U+0150-0151, U+0170-0171' }],
})
const sourceSansLatin = localFont({
  src: '../app/fonts/source-sans-3-latin-hu.woff2',
  weight: '200 900',
  display: 'swap',
  preload: true,
  adjustFontFallback: 'Arial',
})
const sourceSansExt = localFont({
  src: '../app/fonts/source-sans-3-hu-ext.woff2',
  weight: '200 900',
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
  declarations: [{ prop: 'unicode-range', value: 'U+0150-0151, U+0170-0171' }],
})

// A CSS mindenhol var(--font-playfair) / var(--font-source-sans)-t használ. Az ext család
// áll ELÖL: a unicode-range miatt csak az Ő ő Ű ű-re vonatkozik, minden más betű a latin
// fájlból (illetve annak méretre igazított tartalék-betűjéből) jön.
export const fontVars = {
  '--font-playfair': `${playfairExt.style.fontFamily}, ${playfairLatin.style.fontFamily}`,
  '--font-source-sans': `${sourceSansExt.style.fontFamily}, ${sourceSansLatin.style.fontFamily}`,
}
