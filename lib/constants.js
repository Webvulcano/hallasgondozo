// Központi adatok - minden komponens innen importál

export const BOOKING_URL =
  'https://medicall.cc/idopontfoglalas/drvasvari/doctors?specializationId=10006009&doctorId=145852'

export const BOOKING_URL_CHILD =
  'https://medicall.cc/idopontfoglalas/drvasvari/doctors?specializationId=10004156&doctorId=145852'

// Foglalási linkek nyelvenként. A medicall.cc felülete magyar - ha az ügyfél válasza szerint EN/DE-n
// más legyen a fő CTA (pl. visszahívás-form / telefon), itt kell átállítani (minden CTA innen olvas).
const BOOKING = {
  hu: { adult: BOOKING_URL, child: BOOKING_URL_CHILD },
  en: { adult: BOOKING_URL, child: BOOKING_URL_CHILD },
  de: { adult: BOOKING_URL, child: BOOKING_URL_CHILD },
}
export const bookingUrls = (locale) => BOOKING[locale] || BOOKING.hu

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
  yearFounded: 2016,
}

// Napi bontás a footer nyitvatartás-listához (getDay(): 0=vasárnap..6=szombat).
// A napnevek nyelvenként a szótárban: footer.days
export const WEEK_HOURS = [
  { day: 1, open: '8:00', close: '16:00' },
  { day: 2, open: '8:00', close: '16:00' },
  { day: 3, open: '8:00', close: '16:00' },
  { day: 4, open: '8:00', close: '16:00' },
  { day: 5, open: '8:00', close: '14:00' },
  { day: 6, open: null, close: null },
  { day: 0, open: null, close: null },
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
// másodlagos = „(ingyenes) hallásvizsgálat Győr" (100–1E keresés/hó). A <title> és a meta description
// nyelvenként a szótárban: lib/i18n/dictionaries/<nyelv>.js → meta.siteTitle / meta.siteDescription.
export const SITE = {
  url: 'https://hallasgondozo.hu',
}

// Google Cégprofil - frissítsd, ha nő a szám (meta description + vélemény-szekció, minden nyelven)
export const GOOGLE_RATING = { count: 286, score: 5 }

// A szakorvos saját oldala - E-E-A-T kereszt-link (rangsorol „audiológus Győr"-re)
export const DOCTOR_URL = 'https://www.dr-vasvari.hu'

export const GEO = { lat: 47.6840462, lng: 17.6295734 }
