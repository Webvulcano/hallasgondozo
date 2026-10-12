// UI-szövegek - MAGYAR (forrásnyelv). A hosszabb tartalom (márkaoldalak, GYIK, csapat, vélemények…)
// a lib/content/locales/<nyelv>/ alatt van; itt a felület rövid szövegei + meta + aria-címkék.
// Szabály: minden kulcs mindhárom nyelvi fájlban szerepel (scripts/i18n-check.mjs ellenőrzi).
// Helyettesítés: {név} → fmt() (lib/i18n/index.js). Tiszta adat, import nélkül.

const hu = {
  meta: {
    siteTitle: 'Hallókészülék és ingyenes hallásvizsgálat Győrben | ÉRTED',
    // {count} = GOOGLE_RATING.count (lib/constants.js)
    siteDescription:
      'Hallókészülék és ingyenes hallásvizsgálat Győrben, saját fül-orr-gégész szakorvossal. TB-támogatás, 15 napos próbahordás, {count} db 5 csillagos Google-értékelés.',
    keywords: ['hallókészülék Győr', 'hallásvizsgálat Győr', 'ingyenes hallásvizsgálat', 'audiológus Győr', 'fül-orr-gégész', 'gyermek hallásvizsgálat', 'TB-támogatás', 'Phonak', 'Signia', 'Oticon', 'Starkey'],
    devicesTitle: 'Hallókészülék Győr: Phonak, Signia, Oticon, Starkey | ÉRTED',
    devicesDescription:
      'Teljes hallókészülék-kínálat Győrben: Phonak, Signia, Oticon, Starkey, tölthető és vízálló kivitel, egyedi fülillesztékek. Ingyenes hallásvizsgálat.',
    brandTitle: '{name} Győrben',
    brandOgTitle: '{name} | ÉRTED Hallásgondozó Győr',
    blogTitle: 'Blog — hallás, hallókészülék, hallásgondozás | ÉRTED Győr',
    blogDescription:
      'Hasznos cikkek a hallásról, hallókészülékekről és a hallásgondozásról az ÉRTED Hallásgondozó győri szakembereitől. Tippek, válaszok, döntéstámogatás.',
    blogOgTitle: 'Blog — hallás és hallókészülék | ÉRTED Hallásgondozó Győr',
    blogOgDescription: 'Hasznos cikkek a hallásról, hallókészülékekről és a hallásgondozásról Győrből.',
    privacyTitle: 'Adatvédelmi Szabályzat | ÉRTED Hallásgondozó',
    privacyDescription: 'ÉRTED Hallásgondozó adatvédelmi szabályzata és cookie tájékoztatója.',
    notFoundTitle: '404 - Oldal nem található | ÉRTED Hallásgondozó',
  },

  // Strukturált adat (JSON-LD) szövegei
  schema: {
    knowsAbout: ['hallókészülék', 'hallásvizsgálat', 'gyermek hallásvizsgálat', 'audiológia', 'fül-orr-gégészet'],
    serviceHearingTest: 'Ingyenes hallásvizsgálat',
    serviceChildTest: 'Gyermek hallásvizsgálat',
    serviceFitting: 'Hallókészülék-ellátás és -beállítás',
    doctorJobTitle: 'Fül-orr-gégész, audiológus szakorvos',
    crumbHome: 'Főoldal',
    crumbDevices: 'Hallókészülékek',
    crumbBlog: 'Blog',
    blogName: '{brand} — Blog',
  },

  nav: {
    home: 'Főoldal',
    products: 'Termékek',
    prices: 'Árak',
    contact: 'Kapcsolat',
    blog: 'Blog',
    logoAria: '{brand} főoldal',
    mainAria: 'Fő menü',
    mobileAria: 'Mobil menü',
    menuOpen: 'Menü',
    menuClose: 'Menü bezárása',
    ctaFull: 'Ingyenes vizsgálatot foglalok',
    ctaShort: 'Időpont foglalás',
  },

  cta: {
    bookExam: 'Ingyenes vizsgálatot foglalok',
    bookHearingTest: 'Ingyenes hallásvizsgálatot foglalok',
    bookAppointment: 'Ingyenes időpontot foglalok',
  },

  hero: {
    title: 'Hallókészülékek és hallásvizsgálat Győrben',
  },

  services: {
    eyebrow: 'Minden egy helyen',
    title: 'Hallásvizsgálat, szakorvos, hallókészülék',
    lead: 'Győrben nem kell audiológushoz, fül-orr-gégészhez és hallókészülék-szaküzletbe külön-külön menni. Nálunk mindez egy helyen elérhető.',
  },

  team: {
    eyebrow: 'Akikre rábízhatja magát',
    title: 'Orvos, audiológus, hallásakusztikus - egy csapatban',
  },

  partners: {
    title: 'Egészségpénztárral is elszámolható:',
  },

  journey: {
    eyebrow: 'Lépésről lépésre',
    title: 'Így jut el a megfelelő hallókészülékig',
    lead: 'A hallókészülék vásárlás nálunk nem egyetlen alkalom, hanem egy átlátható, végigkísért út — az időpontfoglalástól a hosszú távú hallásgondozásig.',
    cta: 'Foglaljon ingyenes hallásvizsgálatot',
    howToDescription:
      'Lépésről lépésre az ÉRTED Hallásgondozónál: időpontfoglalás, konzultáció és hallásvizsgálat, ingyenes próbahordás, kontroll és hosszú távú gondozás.',
  },

  testimonials: {
    eyebrow: 'Vélemények',
    title: 'Amit a pácienseink mondanak',
    // {count}, {score} = GOOGLE_RATING (lib/constants.js)
    rating: '{count} db {score} csillagos Google-értékelés - Győr egyik legjobban értékelt hallásgondozója.',
    starsAria: '5 csillagos értékelés',
    allReviews: 'Nézze meg az összes értékelést a Google-ön',
    source: 'Google értékelés',
    // EN/DE: a magyar vélemények fordítását jelölni kell (hitelesség); magyarul üres
    translatedNote: '',
  },

  booking: {
    title: 'Tegye meg az első lépést - 5 perc az egész',
    lead: 'Ingyenes, kötelezettség nélküli hallásvizsgálat. Foglaljon online most, vagy hívja vissza kollégánkat.',
    onlineTitle: 'Válasszon időpontot online',
    onlineLead: 'Azonnal visszajelzést kap a szabad időpontokról - kötelezettség nélkül.',
    adult: 'Felnőtt hallásvizsgálat',
    child: 'Gyermek hallásvizsgálat',
    or: 'VAGY',
    phonePrefix: 'Inkább telefonálok:',
  },

  form: {
    title: 'Inkább felhívjuk Önt',
    lead: 'Adja meg telefonszámát - kollégánk munkaidőben hamarosan visszahívja.',
    success: 'Köszönjük! Kollégánk munkaidőben hamarosan hívja Önt.',
    nameLabel: 'Az Ön neve',
    namePlaceholder: 'Pl. Kovács Mária',
    phoneLabel: 'Telefonszám',
    phonePlaceholder: '+36 30 123 4567',
    noteLabel: 'Megjegyzés (opcionális)',
    notePlaceholder: 'Pl. mikor hívjuk legszívesebben?',
    consentBefore: 'Elolvastam és elfogadom az',
    consentLink: 'Adatvédelmi Szabályzatot',
    consentAfter:
      ', beleértve hogy a megjegyzés mezőben esetlegesen megadott egészségügyi jellegű adatot is kezelhetjük.',
    submit: 'Visszahívást kérek',
    submitting: 'Küldés…',
    // Hibakódok (lib/validation.js, app/actions/submitCallback.js) → szöveg
    errors: {
      name_short: 'Adja meg a nevét.',
      name_long: 'A név túl hosszú.',
      phone_invalid: 'Adjon meg egy érvényes telefonszámot.',
      note_long: 'A megjegyzés túl hosszú (max 500 karakter).',
      consent_required: 'Az adatvédelmi tájékoztató elfogadása kötelező.',
      send_failed: 'Sikertelen küldés. Kérjük hívjon minket telefonon.',
      check_fields: 'Kérjük ellenőrizze a megadott adatokat.',
      unknown: 'Ismeretlen hiba. Kérjük próbálja újra.',
      network: 'Sikertelen küldés. Kérjük próbálja újra.',
    },
  },

  faq: {
    eyebrow: 'GYIK',
    title: 'Gyakori kérdések a hallásvizsgálatról és a hallókészülékekről',
    lead: 'Ha úgy érzi, hogy Ön vagy hozzátartozója nehezebben hall, ne halogassa a kivizsgálást - tegye meg az első lépést a tisztább beszédértés és a magabiztosabb mindennapok felé.',
    more: 'További kérdések ({n})',
    productTitle: 'Gyakori kérdések - {name}',
  },

  footer: {
    contact: 'Elérhetőség',
    hours: 'Nyitvatartás',
    book: 'Foglaljon időpontot',
    today: 'Ma',
    closed: 'Zárva',
    // getDay(): 0 = vasárnap … 6 = szombat
    days: ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'],
    rights: 'Minden jog fenntartva.',
    privacy: 'Adatvédelmi Szabályzat',
    madeBy: 'Készítette:',
  },

  devices: {
    eyebrow: 'Forgalmazott termékeink',
    title: 'Hallókészülékek Győrben',
    more: 'Megnézem →',
    imagePlaceholder: 'KÉP',
    catEyebrow: 'Termékkínálat',
    catTitle: 'Minden, amire a tiszta halláshoz szükség lehet',
    catLead: 'A vizsgálattól a kész megoldásig - készülékek, illesztékek és tartozékok egy helyen, szakértői beállítással.',
    ctaTitle: 'Nem tudja, melyik készülék való Önnek?',
    ctaLead:
      'Kezdje egy ingyenes, kötelezettségmentes hallásvizsgálattal. 30 perc alatt kiderül, mi a helyzet - és melyik megoldás illik Önhöz a legjobban.',
  },

  product: {
    back: '← Vissza a termékekhez',
    nextLabel: 'Ezt is érdemes megnézni',
    details: 'Részletek →',
    relatedEyebrow: 'További márkák',
    relatedTitle: 'Hasonlítsa össze a lehetőségeket',
    ctaTitle: 'Kíváncsi, Önnek is ez a megoldás való?',
    ctaLead: 'Foglaljon ingyenes hallásvizsgálatot, és próbálja ki 15 napig kötelezettség nélkül.',
    tabsAria: 'Termékinformációk',
    tabBenefits: 'Előnyök',
    tabDescription: 'Leírás',
    galleryShow: 'Kép megjelenítése: {alt}',
    reviewsRole: 'vélemény-lapozó',
    reviewPrev: 'Előző vélemény',
    reviewNext: 'Következő vélemény',
    trustAria: 'Amit minden készülékhez adunk',
    trust: [
      '15 nap ingyenes próbahordás',
      'Egészségpénztárral is elszámolható',
      'Szakorvos és audiológus egy helyen',
      'Ingyenes utánkövetés és beállítás',
    ],
  },

  blog: {
    title: 'Blog',
    lead: 'Hasznos cikkek a hallásról, a hallókészülékekről és a hallásgondozásról — győri szakembereinktől, közérthetően.',
    readMore: 'Tovább olvasom →',
    crumbAria: 'Útvonal',
    faqTitle: 'Gyakori kérdések',
    ctaTitle: 'Tegye meg az első lépést a tisztább hallásért',
    ctaLead: 'Ingyenes, kötelezettségmentes hallásvizsgálat Győrben — körülbelül 30 perc, beutaló nélkül.',
  },

  privacy: {
    back: '← Vissza a főoldalra',
  },

  notFound: {
    text: 'A keresett oldal nem található.',
    back: 'Vissza a főoldalra',
  },

  promo: {
    close: 'Bezárás',
  },

  // Nyelvválasztó + nyelvjavaslat-sáv. A suggest* szövegek a CÉLnyelven jelennek meg
  // (pl. német böngészőnél a magyar oldalon a de.js suggest-szövege látszik).
  langSwitch: {
    aria: 'Nyelv',
    suggest: 'Ez az oldal magyarul is elérhető.',
    suggestCta: 'Magyar változat',
    suggestDismiss: 'Bezárás',
  },
}

export default hu
