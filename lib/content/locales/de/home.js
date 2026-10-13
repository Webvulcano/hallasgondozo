// LIVE 2026-10-13 (Lehel jóváhagyta, anyanyelvi lektorálás nélkül) - DEUTSCH. Claude-Übersetzung des ungarischen Textes (2026-10-12), noch NICHT muttersprachlich geprüft.
// Schlüssel und Reihenfolge wie locales/hu (scripts/i18n-check.mjs prüft das). Gesundheitstext (YMYL) → Lektorat.
// Ungarische Krankenversicherung (TB / NEAK) gilt nur für in Ungarn Versicherte → angepasst, nicht wörtlich.
// Der Kunde kann jeden Text im Ügyfél Admin (DE-Tab) korrigieren; ein gespeicherter CMS-Wert überschreibt diese Datei.
// Muttersprachliche Prüfung weiterhin empfohlen.
// Reine Daten, keine Imports.
export const services = {
  'hearing-test': {
    title: 'Professioneller Hörtest',
    desc: 'Schmerzfrei, 30 Minuten, sofortiges Ergebnis. Wir testen auch das Gehör von Kindern.',
  },
  consultation: {
    title: 'Fachärztliche Beratung',
    desc: 'Dr. Gergely Pál Vasvári bewertet Ihr Ergebnis persönlich.',
  },
  advice: {
    title: 'Hörgeräteberatung',
    desc: 'Eine Lösung, die zu Ihrem Gehör und Ihrem Alltag passt.',
  },
  'child-test': {
    title: 'Hörtest für Kinder',
    desc: 'Hörtests für Kinder, mit früher Diagnose.',
  },
}

export const servicesTrust = [
  '15 Tage kostenlos testen',
  'Vertragspartner der ungarischen Krankenkasse (NEAK)',
  'Akkreditierter Hörtest',
]

export const team = {
  'vajai-krisztina': {
    role: 'Audiologin, Hörakustikerin',
    desc: 'Mit mehr als 20 Jahren Erfahrung hilft sie Patienten, eine Lösung zu finden, mit der sie wirklich zufrieden sind - nicht nur eine, die „gut genug" ist.',
    imgAlt: 'Krisztina Vajai',
  },
  'dr-vasvari': {
    role: 'Facharzt für HNO, Phoniatrie und Audiologie',
    desc: 'Er begleitet und kontrolliert jede Hörgeräteversorgung persönlich. Ihr Hörergebnis und die möglichen Lösungen erklärt er verständlich, ohne Fachjargon.',
    imgAlt: 'Dr. Gergely Pál Vasvári',
    urlLabel: 'Seine Facharztpraxis: dr-vasvari.hu',
  },
  'tibold-gabriella': {
    role: 'Hörakustikerin',
    desc: 'Eine Hörgeräteeinstellung gelingt nur, wenn sie individuell auf Ihr Ohr und Ihre Gewohnheiten abgestimmt ist. Gabriella hilft Ihnen dabei - auf Ungarisch und auf Deutsch.',
    imgAlt: 'Gabriella Tibold',
  },
}

export const journey = {
  1: {
    title: 'Terminvereinbarung',
    desc: 'Der erste Schritt ist ein Termin - telefonisch oder online. Schildern Sie dabei am besten kurz Ihre Beschwerden - etwa, wenn Sie oft nachfragen, Gespräche in lauter Umgebung schwer verstehen oder den Fernseher lauter stellen -, damit wir uns beim Test gezielt auf Ihre Situation konzentrieren können.',
  },
  2: {
    title: 'Hörtest und Beratung',
    desc: 'Ein persönlicher Termin, bei dem wir Ihre Situation erfassen und den Hörtest durchführen. Er besteht aus folgenden Schritten:',
    sub: [
      {
        title: 'Beschwerden und Bedürfnisse erfassen',
        desc: 'Wir sprechen über Ihre Beschwerden, Ihren Alltag und die Situationen, in denen Sie die Hörminderung am meisten stört. Wer sich oft in Gesellschaft unterhält, braucht eine andere Lösung als jemand, dem vor allem Fernsehen oder Telefonieren schwerfällt.',
      },
      {
        title: 'Professioneller Hörtest',
        desc: 'Der Test wird von einer Audiologin bzw. Hörakustikerin mit kalibrierten Geräten in einer ruhigen Kabine durchgeführt. Er zeigt Grad und Art der Hörminderung und wie stark das Sprachverstehen betroffen ist.',
      },
      {
        title: 'Ergebnisse und persönliche Empfehlung',
        desc: 'Wir erklären Ihnen die Ergebnisse verständlich. Ist ein Hörgerät sinnvoll, berücksichtigen wir mehrere Aspekte: den Grad der Hörminderung, die Form Ihres Ohres, Ihre Komfortwünsche, Ihre Kommunikationsgewohnheiten und Ihr Budget.',
      },
    ],
  },
  3: {
    title: 'Fachärztliche Beratung und Empfehlung',
    desc: 'Wir besprechen Ihre Hörtestergebnisse und die Behandlungsmöglichkeiten und wählen gemeinsam den passenden Hörgerätetyp aus.',
    highlight: 'Mind. 15 Tage, kostenlos',
  },
  4: {
    title: 'Probetragen und Feinabstimmung',
    sub: [
      {
        title: 'Auswahl und erste Einstellung Ihres Hörgeräts',
        desc: 'Wir stellen das Hörgerät anhand Ihrer Testergebnisse ein — ein wichtiger Schritt, aber noch nicht der endgültige. Wir zeigen Ihnen, wie Sie es einsetzen, reinigen, aufladen (bzw. die Batterie wechseln) und bedienen.',
      },
      {
        title: '',
        desc: 'Sie testen das Hörgerät in echten Alltagssituationen: zu Hause, im Familiengespräch, auf der Straße, beim Einkaufen, bei der Arbeit oder in lauterer Umgebung. So können Sie in Ruhe und ohne Risiko entscheiden.',
      },
    ],
  },
  5: {
    title: 'Abschluss und langfristige Hörbetreuung',
    desc: 'Nach dem Probetragen besprechen wir Ihre Erfahrungen bei einem Kontrolltermin. Sind manche Töne zu laut oder ist die Sprache nicht klar genug, passen wir die Einstellung an. Gute Versorgung ist kein einmaliger Termin, sondern ein fortlaufender Prozess.',
    sub: [
      {
        title: '',
        desc: 'Das Tragen eines Hörgeräts ist ein Lernprozess. Regelmäßige Kontrollen, Reinigung, die Prüfung des Ohrpassstücks, Zubehör und Anpassungen sorgen dafür, dass Ihr Hörgerät langfristig zuverlässig funktioniert. Mit unserem Zubehör, unseren Reinigungsmitteln und unserem Hörgeräteservice unterstützen wir Sie dabei.',
      },
    ],
  },
}

// Echte Google-Bewertungen, aus dem Ungarischen übersetzt (auf der Seite gekennzeichnet: testimonials.translatedNote).
export const testimonials = {
  'fendt-kitti': {
    quote: 'Wir waren bei Dr. Vasvári. Wie immer war er gründlich und freundlich. Er erklärt alles verständlich und spricht auch die Sprache der Kinder. Eine professionelle Praxis mit professioneller Ausstattung, so bekommen wir immer eine sofortige und genaue Diagnose.',
  },
  'papai-gabor': {
    quote: 'Ich komme seit Jahren zum Hörtest und zur „Wartung" hierher. Ich wurde immer sehr höflich und fachlich wie menschlich professionell betreut. Der Termin war einfach und schnell gebucht, und danach bekam ich fast ohne Wartezeit die bestmögliche ärztliche Hilfe. Ich kann nur danke sagen!',
  },
  'lenart-laszlo': {
    quote: 'Ich kann sie jedem nur empfehlen. Ausgezeichnetes Personal, ein kompetenter Arzt, professionelle Versorgung und eine saubere, ordentliche, gut ausgestattete Praxis. Ich kam auf Empfehlung eines Bekannten - nach einer 5-minütigen Untersuchung und Behandlung spürte ich eine unglaubliche Erleichterung, die Schmerzen waren weg.',
  },
  'kovary-zsuzsanna': {
    quote: 'Dr. Gergely Pál Vasvári und seine Assistentin waren während der sehr gründlichen Untersuchung beide sehr freundlich und äußerst hilfsbereit. Wir haben so viel Verständnis, Geduld und Unterstützung erlebt, dass es eine wirklich angenehme Überraschung war. Schön war auch, wie sich der Doktor verabschiedete: „Wir freuen uns, wenn wir helfen können." Danke für diese Fürsorge.',
  },
  'borzsei-gyula': {
    quote: 'Ich habe sehr gründliche und wirksame Hilfe bei meinem Hörproblem bekommen. Der Arzt und die Assistentin waren freundlich und sehr hilfsbereit. Ich empfehle ÉRTED Hallásgondozó von Herzen jedem, der Probleme mit dem Hören hat.',
  },
  'magyar-imrene': {
    quote: 'Wir sind mit dem Hörzentrum rundum zufrieden. Mein Mann hat einen Hörtest und ein Hörgerät bekommen. Die Terminvergabe ist schnell und flexibel. Hervorragende Fachkenntnis und eine freundliche, hilfsbereite Haltung gegenüber den Kunden.',
  },
  'laszlo-denes': {
    quote: 'Heute waren wir wegen des Hörgeräts unseres Sohnes Marcell bei ÉRTED Hallásgondozó. Die Versorgung hat unsere Erwartungen in jeder Hinsicht erfüllt. Wir haben eine freundliche, höfliche ärztliche Betreuung erlebt, die die Interessen und Bedürfnisse des Kindes berücksichtigt, und eine präzise Verwaltung.',
  },
}

export const promo = {
  tag: 'Unser aktuelles Angebot',
  title: '15 Tage kostenlos testen!',
  text: 'Phonak Sphere Hörgerät: Es filtert Hintergrundgeräusche automatisch, damit Sie die Stimmen Ihrer Liebsten auch in lauter Umgebung klar hören.',
  features: [
    'Kostenloser Hörtest',
    '15 Tage kostenlos probetragen',
    'Unverbindlich',
  ],
  imageAlt: 'Phonak Audéo Sphere Hörgerät',
  cta: 'Ich möchte es 15 Tage kostenlos testen',
  dismiss: 'Jetzt nicht, danke',
}

export const offer = {
  tag: 'Sommerangebot · Nur für begrenzte Zeit',
  title: 'Phonak Sphere zum Sommerpreis',
  lead: 'Es filtert Hintergrundgeräusche automatisch, damit Sie Sprache auch in lauter Umgebung klar hören. Jetzt für {price} pro Stück beim Kauf von 2 Geräten.',
  priceLabel: '325.000 Ft/Stück',
  priceListLabel: 'Statt Listenpreis',
  price: '325.000 Ft',
  unit: '/ Stück, beim Kauf von 2 Geräten',
  cta: 'Ich möchte es 15 Tage kostenlos testen',
  ctaSecondary: 'Weitere Hörgeräte',
  ctaSecondaryNote: 'Nicht das Richtige für Sie? Sehen Sie sich unser gesamtes Angebot an.',
  note: 'Bitte erwähnen Sie bei der Buchung das Sphere-Angebot.',
  imageAlt: 'Phonak Audéo Sphere Hörgerät',
}

export const offerFeatures = [
  {
    plain: 'Klar hören, auch in lauter Umgebung',
  },
  {
    plain: 'Eine Ladung reicht die ganze Woche',
  },
  {
    bold: 'Bis zu 5 Jahre volle Garantie',
  },
  {
    plain: '15 Tage kostenlos probetragen',
  },
]
