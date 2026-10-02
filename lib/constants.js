// Központi adatok - minden komponens innen importál

export const BOOKING_URL =
  'https://medicall.cc/idopontfoglalas/drvasvari/doctors?specializationId=10006009&doctorId=145852'

export const BOOKING_URL_CHILD =
  'https://medicall.cc/idopontfoglalas/drvasvari/doctors?specializationId=10004156&doctorId=145852'

export const GOOGLE_REVIEWS_URL = 'https://share.google/o5M6kO0Ltcu31F99Z'

export const PHONE = {
  tel: '+3696800911',
  display: '+36 96 800 911',
  href: 'tel:+3696800911',
}

export const EMAIL = 'info@hallasgondozo.hu'

export const COMPANY = {
  brand: 'ÉRTED',
  brandSub: 'Hallásgondozó',
  fullName: 'ÉRTED Hallásgondozó és Hallókészülék Szaküzlet',
  legalName: 'OTOFIT Kft.',
  address: '9021 Győr, Bajcsy-Zsilinszky út 5. fsz.',
  city: 'Győr',
  postalCode: '9021',
  street: 'Bajcsy-Zsilinszky út 5. fsz.',
  hours: 'H–P 9:00–17:00',
  yearFounded: 2016,
}

// Napi bontás a footer nyitvatartás-listához (getDay(): 0=vasárnap..6=szombat)
export const WEEK_HOURS = [
  { day: 1, label: 'Hétfő', open: '9:00', close: '17:00' },
  { day: 2, label: 'Kedd', open: '9:00', close: '17:00' },
  { day: 3, label: 'Szerda', open: '9:00', close: '17:00' },
  { day: 4, label: 'Csütörtök', open: '9:00', close: '17:00' },
  { day: 5, label: 'Péntek', open: '9:00', close: '17:00' },
  { day: 6, label: 'Szombat', open: null, close: null },
  { day: 0, label: 'Vasárnap', open: null, close: null },
]

// Google Maps - a pontos címre kattintva nyíljon meg
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('ÉRTED Hallásgondozó, 9021 Győr, Bajcsy-Zsilinszky út 5.')

export const SOCIAL = {
  facebook: 'https://facebook.com/ertedgyor',
  facebookHandle: 'facebook.com/ertedgyor',
  instagram: 'https://instagram.com/ertedgyor',
  instagramHandle: 'instagram.com/ertedgyor',
}

// Kulcsszó-fókusz (Apify SERP + Ads Kulcsszótervező, 2026-10): fő = „hallókészülék Győr",
// másodlagos = „(ingyenes) hallásvizsgálat Győr" (100–1E keresés/hó). Title 57, meta 158 kar.
export const SITE = {
  url: 'https://hallasgondozo.hu',
  title: 'Hallókészülék és ingyenes hallásvizsgálat Győrben | ÉRTED',
  description:
    'Hallókészülék és ingyenes hallásvizsgálat Győrben, saját fül-orr-gégész szakorvossal. TB-támogatás, 15 napos próbahordás, 286 db 5 csillagos Google-értékelés.',
}

// Google Cégprofil - frissítsd, ha nő a szám (meta, vélemény-szekció)
export const GOOGLE_RATING = { count: 286, score: 5 }

// A szakorvos saját oldala - E-E-A-T kereszt-link (rangsorol „audiológus Győr"-re)
export const DOCTOR_URL = 'https://www.dr-vasvari.hu'

export const GEO = { lat: 47.6840462, lng: 17.6295734 }
