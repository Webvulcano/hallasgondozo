// DRAFT - UI-Texte, DEUTSCH. Claude-Entwurf (2026-10-05, aktualisiert 2026-10-12), NICHT muttersprachlich geprüft.
// Zweck: realistischer Layout-Test (deutsche Wortlängen!). Endgültiger Text: nach Kunden-/Lektoratsprüfung.
// Schlüssel 1:1 wie hu.js (scripts/i18n-check.mjs). Hinweis: TB-Zuschuss (ungarische Krankenversicherung)
// gilt nur für in Ungarn Versicherte - inhaltlich anpassen, nicht wörtlich übersetzen.
// Lange Komposita: weiches Trennzeichen ­ erlaubt (z. B. 'Hör­geräte'), CSS :lang(de) hyphens:auto.

const de = {
  meta: {
    siteTitle: 'Hörgeräte & kostenloser Hörtest in Győr | ÉRTED',
    siteDescription:
      'Hörgeräte und kostenloser Hörtest in Győr (Ungarn) mit eigenem HNO-Facharzt. 15 Tage kostenlos testen, {count} Fünf-Sterne-Bewertungen bei Google.',
    keywords: ['Hörgeräte Győr', 'Hörtest Győr', 'kostenloser Hörtest', 'Hörakustiker Ungarn', 'HNO-Arzt Győr', 'Hörgeräte Ungarn', 'Phonak', 'Signia', 'Oticon', 'Starkey'],
    devicesTitle: 'Hörgeräte in Győr: Phonak, Signia, Oticon, Starkey | ÉRTED',
    devicesDescription:
      'Hörgeräte in Győr: Phonak, Signia, Oticon, Starkey, wiederaufladbare und wasserfeste Modelle, individuelle Otoplastiken. Kostenloser Hörtest.',
    brandTitle: '{name} in Győr',
    brandOgTitle: '{name} | ÉRTED Hörakustik Győr',
    blogTitle: 'Blog — Hören, Hörgeräte, Hörversorgung | ÉRTED Győr',
    blogDescription:
      'Hilfreiche Artikel rund ums Hören, Hörgeräte und Hörversorgung von den Fachleuten von ÉRTED Hallásgondozó in Győr. Tipps, Antworten, Entscheidungshilfe.',
    blogOgTitle: 'Blog — Hören und Hörgeräte | ÉRTED Hörakustik Győr',
    blogOgDescription: 'Hilfreiche Artikel rund ums Hören, Hörgeräte und Hörversorgung aus Győr.',
    privacyTitle: 'Datenschutzerklärung | ÉRTED Hallásgondozó',
    privacyDescription: 'Datenschutzerklärung und Cookie-Hinweise von ÉRTED Hallásgondozó.',
    notFoundTitle: '404 - Seite nicht gefunden | ÉRTED Hallásgondozó',
  },

  schema: {
    knowsAbout: ['Hörgeräte', 'Hörtest', 'Kinderhörtest', 'Audiologie', 'Hals-Nasen-Ohren-Heilkunde'],
    serviceHearingTest: 'Kostenloser Hörtest',
    serviceChildTest: 'Hörtest für Kinder',
    serviceFitting: 'Hörgeräteversorgung und -anpassung',
    doctorJobTitle: 'Facharzt für HNO-Heilkunde und Audiologie',
    crumbHome: 'Startseite',
    crumbDevices: 'Hörgeräte',
    crumbBlog: 'Blog',
    blogName: '{brand} — Blog',
  },

  nav: {
    home: 'Startseite',
    products: 'Produkte',
    prices: 'Preise',
    contact: 'Kontakt',
    blog: 'Blog',
    logoAria: '{brand} Startseite',
    mainAria: 'Hauptmenü',
    mobileAria: 'Mobiles Menü',
    menuOpen: 'Menü',
    menuClose: 'Menü schließen',
    ctaFull: 'Kostenlosen Hörtest buchen',
    ctaShort: 'Termin buchen',
  },

  cta: {
    bookExam: 'Kostenlosen Hörtest buchen',
    bookHearingTest: 'Kostenlosen Hörtest buchen',
    bookAppointment: 'Kostenlosen Termin buchen',
  },

  hero: {
    title: 'Hörgeräte und Hörtest in Győr',
  },

  services: {
    eyebrow: 'Alles an einem Ort',
    title: 'Hörtest, Facharzt, Hörgerät',
    lead: 'In Győr müssen Sie nicht getrennt zum Audiologen, zum HNO-Arzt und ins Hörgerätefachgeschäft. Bei uns finden Sie alles an einem Ort.',
  },

  team: {
    eyebrow: 'Menschen, denen Sie vertrauen können',
    title: 'Arzt, Audiologin, Hörakustikerin - ein Team',
  },

  partners: {
    title: 'Auch über ungarische Gesundheitskassen abrechenbar:',
  },

  journey: {
    eyebrow: 'Schritt für Schritt',
    title: 'Ihr Weg zum passenden Hörgerät',
    lead: 'Der Hörgerätekauf ist bei uns kein einmaliger Termin, sondern ein transparenter, begleiteter Weg — von der Terminbuchung bis zur langfristigen Hörbetreuung.',
    cta: 'Kostenlosen Hörtest buchen',
    howToDescription:
      'Schritt für Schritt bei ÉRTED Hallásgondozó: Terminbuchung, Beratung und Hörtest, kostenloses Probetragen, Kontrolle und langfristige Betreuung.',
  },

  testimonials: {
    eyebrow: 'Bewertungen',
    title: 'Was unsere Patienten sagen',
    rating: '{count} Google-Bewertungen mit {score} Sternen - einer der bestbewerteten Hörakustiker in Győr.',
    starsAria: '5-Sterne-Bewertung',
    allReviews: 'Alle Bewertungen auf Google ansehen',
    source: 'Google-Bewertung',
    translatedNote: 'Bewertungen aus dem Ungarischen übersetzt.',
  },

  booking: {
    title: 'Machen Sie den ersten Schritt - es dauert nur 5 Minuten',
    lead: 'Kostenloser, unverbindlicher Hörtest. Buchen Sie jetzt online oder lassen Sie sich zurückrufen.',
    onlineTitle: 'Termin online wählen',
    onlineLead: 'Sie sehen freie Termine sofort - unverbindlich.',
    adult: 'Hörtest für Erwachsene',
    child: 'Hörtest für Kinder',
    or: 'ODER',
    phonePrefix: 'Lieber anrufen:',
  },

  form: {
    title: 'Wir rufen Sie an',
    lead: 'Hinterlassen Sie Ihre Telefonnummer - wir rufen Sie während der Öffnungszeiten zurück.',
    success: 'Vielen Dank! Wir rufen Sie während der Öffnungszeiten an.',
    nameLabel: 'Ihr Name',
    namePlaceholder: 'z. B. Maria Huber',
    phoneLabel: 'Telefonnummer',
    phonePlaceholder: '+43 660 123 4567',
    noteLabel: 'Anmerkung (optional)',
    notePlaceholder: 'z. B. wann können wir Sie am besten erreichen?',
    consentBefore: 'Ich habe die',
    consentLink: 'Datenschutzerklärung',
    consentAfter:
      ' gelesen und akzeptiere sie, einschließlich der Verarbeitung etwaiger Gesundheitsangaben im Anmerkungsfeld.',
    submit: 'Rückruf anfordern',
    submitting: 'Wird gesendet…',
    errors: {
      name_short: 'Bitte geben Sie Ihren Namen ein.',
      name_long: 'Der Name ist zu lang.',
      phone_invalid: 'Bitte geben Sie eine gültige Telefonnummer ein.',
      note_long: 'Die Anmerkung ist zu lang (max. 500 Zeichen).',
      consent_required: 'Bitte akzeptieren Sie die Datenschutzerklärung.',
      send_failed: 'Senden fehlgeschlagen. Bitte rufen Sie uns an.',
      check_fields: 'Bitte überprüfen Sie Ihre Angaben.',
      unknown: 'Unbekannter Fehler. Bitte versuchen Sie es erneut.',
      network: 'Senden fehlgeschlagen. Bitte versuchen Sie es erneut.',
    },
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Häufige Fragen zu Hörtest und Hörgeräten',
    lead: 'Wenn Sie das Gefühl haben, dass Sie oder ein Angehöriger schlechter hören, schieben Sie die Untersuchung nicht auf - machen Sie den ersten Schritt zu besserem Sprachverstehen und mehr Sicherheit im Alltag.',
    more: 'Weitere Fragen ({n})',
    productTitle: 'Häufige Fragen - {name}',
  },

  footer: {
    contact: 'Kontakt',
    hours: 'Öffnungszeiten',
    book: 'Termin vereinbaren',
    today: 'Heute',
    closed: 'Geschlossen',
    days: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    rights: 'Alle Rechte vorbehalten.',
    privacy: 'Datenschutzerklärung',
    madeBy: 'Website:',
  },

  devices: {
    eyebrow: 'Unsere Produkte',
    title: 'Hörgeräte in Győr',
    more: 'Ansehen →',
    imagePlaceholder: 'BILD',
    catEyebrow: 'Sortiment',
    catTitle: 'Alles, was Sie für klares Hören brauchen',
    catLead: 'Vom Hörtest bis zur fertigen Lösung - Geräte, Otoplastiken und Zubehör an einem Ort, fachgerecht angepasst.',
    ctaTitle: 'Sie wissen nicht, welches Hörgerät zu Ihnen passt?',
    ctaLead:
      'Beginnen Sie mit einem kostenlosen, unverbindlichen Hörtest. In 30 Minuten wissen Sie, wo Sie stehen - und welche Lösung am besten zu Ihnen passt.',
  },

  product: {
    back: '← Zurück zu den Produkten',
    nextLabel: 'Das könnte Sie auch interessieren',
    details: 'Details →',
    relatedEyebrow: 'Weitere Marken',
    relatedTitle: 'Vergleichen Sie die Möglichkeiten',
    ctaTitle: 'Ist das die richtige Lösung für Sie?',
    ctaLead: 'Buchen Sie einen kostenlosen Hörtest und testen Sie das Gerät 15 Tage unverbindlich.',
    tabsAria: 'Produktinformationen',
    tabBenefits: 'Vorteile',
    tabDescription: 'Beschreibung',
    galleryShow: 'Bild anzeigen: {alt}',
    reviewsRole: 'Bewertungs-Karussell',
    reviewPrev: 'Vorherige Bewertung',
    reviewNext: 'Nächste Bewertung',
    trustAria: 'Bei jedem Hörgerät inklusive',
    trust: [
      '15 Tage kostenlos testen',
      'Über Gesundheitskassen abrechenbar',
      'Facharzt und Audiologin an einem Ort',
      'Kostenlose Nachbetreuung und Anpassung',
    ],
  },

  blog: {
    title: 'Blog',
    lead: 'Hilfreiche Artikel rund ums Hören, Hörgeräte und Hörversorgung — von unseren Fachleuten in Győr, leicht verständlich.',
    readMore: 'Weiterlesen →',
    crumbAria: 'Brotkrümelnavigation',
    faqTitle: 'Häufige Fragen',
    ctaTitle: 'Machen Sie den ersten Schritt zu besserem Hören',
    ctaLead: 'Kostenloser, unverbindlicher Hörtest in Győr — etwa 30 Minuten, ohne Überweisung.',
  },

  privacy: {
    back: '← Zurück zur Startseite',
  },

  notFound: {
    text: 'Die gesuchte Seite wurde nicht gefunden.',
    back: 'Zur Startseite',
  },

  promo: {
    close: 'Schließen',
  },

  langSwitch: {
    aria: 'Sprache',
    suggest: 'Diese Seite gibt es auch auf Deutsch.',
    suggestCta: 'Zur deutschen Version',
    suggestDismiss: 'Schließen',
  },
}

export default de
