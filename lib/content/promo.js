// Akció popup - promoBase.delayMs után felugró ajánlat (főoldal, session-enként 1x).
// Új akciónál: kép/időzítés itt, a szöveg a locales/<nyelv>/home.js → promo-ban (mindhárom nyelven).
// layout: 'card' = image + szöveg + pipás pontok; 'poster' = kész plakát (posterImage, a szöveg a képen van),
//   kattintásra a #idopont szekcióra ugrik. locales: mely nyelveken jelenjen meg (plakát csak HU).
// until: utolsó nap (YYYY-MM-DD) - utána magától nem jelenik meg.
// A két kép külön CMS-mező (Felugró ajánlat → Kép / Plakát), így a plakát a kártya képét nem írja felül.

export const promoBase = {
  enabled: true,
  delayMs: 15000,
  layout: 'poster',
  locales: ['hu'],
  until: '2026-12-27',
  image: '/pic/hallokeszulekek/phonak_sphere1.webp',
  posterImage: '/pic/promo/karacsony-2026.webp',
  target: '#idopont',
}
