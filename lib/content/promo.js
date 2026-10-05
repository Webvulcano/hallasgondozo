// Akció popup - 15 mp után felugró ajánlat (főoldal, session-enként 1x).
// Új akciónál csak ezt a fájlt kell cserélni.
import { BOOKING_URL } from '../constants'

export const promo = {
  enabled: true,
  delayMs: 15000,
  tag: 'Aktuális ajánlatunk',
  title: 'Próbálja ki 15 napig ingyen!',
  text: 'Phonak Sphere hallókészülék: automatikusan szűri a háttérzajt, hogy zajos helyen is tisztán hallja szerettei hangját.',
  features: [
    'Ingyenes hallásvizsgálat',
    '15 napos ingyenes próbahordás',
    'Kötelezettség nélkül',
  ],
  image: '/pic/hallokeszulekek/phonak_sphere1.webp',
  imageAlt: 'Phonak Audéo Sphere hallókészülék',
  cta: 'Kipróbálnám ingyen 15 napig',
  ctaHref: BOOKING_URL,
  dismiss: 'Most nem, köszönöm',
}
