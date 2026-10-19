// LIVE 2026-10-13 (Lehel jóváhagyta, anyanyelvi lektorálás nélkül) - UI texts, ENGLISH. Claude draft translation (2026-10-05, updated 2026-10-12), NOT reviewed by a native speaker.
// Purpose: realistic layout testing (word lengths). Final text: after client / native review.
// Keys mirror hu.js 1:1 (scripts/i18n-check.mjs). Note: TB (Hungarian state health insurance) subsidy only
// applies to people insured in Hungary - adapt, don't translate literally.

const en = {
  meta: {
    siteTitle: 'Hearing Aids & Free Hearing Test in Győr | ÉRTED',
    siteDescription:
      'Hearing aids and free hearing tests in Győr, Hungary, with our own ENT specialist. 15-day free trial, {count} five-star Google reviews.',
    keywords: ['hearing aids Győr', 'hearing test Győr', 'free hearing test', 'audiologist Győr', 'ENT specialist Győr', 'hearing aids Hungary', 'Phonak', 'Signia', 'Oticon', 'Starkey'],
    devicesTitle: 'Hearing Aids in Győr: Phonak, Signia, Oticon, Starkey | ÉRTED',
    devicesDescription:
      'Full range of hearing aids in Győr: Phonak, Signia, Oticon, Starkey, rechargeable and water-resistant models, custom earmoulds. Free hearing test.',
    brandTitle: '{name} in Győr',
    brandOgTitle: '{name} | ÉRTED Hearing Care Győr',
    blogTitle: 'Blog — hearing, hearing aids, hearing care | ÉRTED Győr',
    blogDescription:
      'Helpful articles about hearing, hearing aids and hearing care from the specialists of ÉRTED Hallásgondozó in Győr. Tips, answers, guidance.',
    blogOgTitle: 'Blog — hearing and hearing aids | ÉRTED Hearing Care Győr',
    blogOgDescription: 'Helpful articles about hearing, hearing aids and hearing care from Győr.',
    privacyTitle: 'Privacy Policy | ÉRTED Hallásgondozó',
    privacyDescription: 'Privacy policy and cookie information of ÉRTED Hallásgondozó.',
    imprintTitle: 'Legal Notice | ÉRTED Hallásgondozó',
    imprintDescription:
      'Company details of the operator of ÉRTED Hallásgondozó (OtoFit Kft.), contact details, hosting provider and complaints.',
    notFoundTitle: '404 - Page not found | ÉRTED Hallásgondozó',
  },

  schema: {
    knowsAbout: ['hearing aids', 'hearing test', 'paediatric hearing test', 'audiology', 'otorhinolaryngology'],
    serviceHearingTest: 'Free hearing test',
    serviceChildTest: 'Paediatric hearing test',
    serviceFitting: 'Hearing aid fitting and adjustment',
    doctorJobTitle: 'ENT specialist and audiologist',
    crumbHome: 'Home',
    crumbDevices: 'Hearing aids',
    crumbBlog: 'Blog',
    blogName: '{brand} — Blog',
  },

  nav: {
    home: 'Home',
    products: 'Products',
    prices: 'Prices',
    contact: 'Contact',
    blog: 'Blog',
    logoAria: '{brand} home',
    mainAria: 'Main menu',
    mobileAria: 'Mobile menu',
    menuOpen: 'Menu',
    menuClose: 'Close menu',
    ctaFull: 'Book a free hearing test',
    ctaShort: 'Book now',
  },

  cta: {
    bookExam: 'Book a free hearing test',
    bookHearingTest: 'Book a free hearing test',
    bookAppointment: 'Book a free appointment',
  },

  hero: {
    title: 'Hearing aids and hearing tests in Győr',
  },

  services: {
    eyebrow: 'All in one place',
    title: 'Hearing test, specialist, hearing aid',
    lead: 'In Győr you don’t need separate visits to an audiologist, an ENT doctor and a hearing aid shop. With us, it is all available in one place.',
  },

  team: {
    eyebrow: 'People you can trust',
    title: 'Doctor, audiologist, hearing aid specialist - one team',
  },

  partners: {
    title: 'Can also be paid via Hungarian health funds:',
  },

  journey: {
    eyebrow: 'Step by step',
    title: 'Your path to the right hearing aid',
    lead: 'With us, buying a hearing aid is not a one-off visit but a transparent, guided journey — from booking an appointment to long-term hearing care.',
    cta: 'Book a free hearing test',
    howToDescription:
      'Step by step at ÉRTED Hallásgondozó: booking, consultation and hearing test, free trial period, follow-up and long-term care.',
  },

  testimonials: {
    eyebrow: 'Reviews',
    title: 'What our patients say',
    rating: '{count} {score}-star reviews on Google.',
    starsAria: '5-star review',
    allReviews: 'See all reviews on Google',
    source: 'Google review',
    translatedNote: 'A selection of our Google reviews, translated from Hungarian; reviewer names are abbreviated.',
  },

  booking: {
    title: 'Take the first step - it only takes 5 minutes',
    lead: 'Free hearing test with no obligation. Book online now or request a call back.',
    onlineTitle: 'Choose an appointment online',
    onlineLead: 'See available appointments instantly - no obligation.',
    adult: 'Adult hearing test',
    child: 'Child hearing test',
    or: 'OR',
    phonePrefix: 'I’d rather call:',
  },

  form: {
    title: 'We’ll call you',
    lead: 'Leave your phone number - a colleague will call you back during opening hours.',
    success: 'Thank you! A colleague will call you during opening hours.',
    nameLabel: 'Your name',
    namePlaceholder: 'e.g. Mary Smith',
    phoneLabel: 'Phone number',
    phonePlaceholder: '+36 30 123 4567',
    noteLabel: 'Comment (optional)',
    notePlaceholder: 'e.g. when is the best time to call you?',
    consentBefore: 'I have read and accept the',
    consentLink: 'Privacy Policy',
    consentAfter: ', including the processing of any health-related information entered in the comment field.',
    submit: 'Request a call back',
    submitting: 'Sending…',
    errors: {
      name_short: 'Please enter your name.',
      name_long: 'The name is too long.',
      phone_invalid: 'Please enter a valid phone number.',
      note_long: 'The comment is too long (max. 500 characters).',
      consent_required: 'You must accept the privacy policy.',
      send_failed: 'Sending failed. Please call us by phone.',
      check_fields: 'Please check the details you entered.',
      unknown: 'Unknown error. Please try again.',
      network: 'Sending failed. Please try again.',
    },
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently asked questions about hearing tests and hearing aids',
    lead: 'If you feel that you or a family member is hearing less well, don’t put off getting checked - take the first step towards clearer speech understanding and more confident everyday life.',
    more: 'More questions ({n})',
    productTitle: 'Frequently asked questions - {name}',
  },

  footer: {
    contact: 'Contact',
    hours: 'Opening hours',
    book: 'Book an appointment',
    today: 'Today',
    closed: 'Closed',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy',
    imprint: 'Legal notice',
    madeBy: 'Website by',
  },

  devices: {
    eyebrow: 'Our products',
    title: 'Hearing aids in Győr',
    more: 'View →',
    imagePlaceholder: 'IMAGE',
    catEyebrow: 'Product range',
    catTitle: 'Everything you may need for clear hearing',
    catLead: 'From the hearing test to the finished solution - devices, earmoulds and accessories in one place, expertly fitted.',
    ctaTitle: 'Not sure which hearing aid is right for you?',
    ctaLead:
      'Start with a free hearing test with no obligation. In 30 minutes you’ll know where you stand - and which solution suits you best.',
  },

  product: {
    back: '← Back to products',
    nextLabel: 'You may also like',
    details: 'Details →',
    relatedEyebrow: 'More brands',
    relatedTitle: 'Compare your options',
    ctaTitle: 'Wondering if this is the right solution for you?',
    ctaLead: 'Book a free hearing test and try it for 15 days with no obligation.',
    tabsAria: 'Product information',
    tabBenefits: 'Benefits',
    tabDescription: 'Description',
    galleryShow: 'Show image: {alt}',
    reviewsRole: 'review carousel',
    reviewPrev: 'Previous review',
    reviewNext: 'Next review',
    trustAria: 'Included with every hearing aid',
    trust: [
      '15-day free trial',
      'Payable via health funds',
      'Specialist doctor and audiologist in one place',
      'Free follow-up and adjustment',
    ],
  },

  blog: {
    title: 'Blog',
    lead: 'Helpful articles about hearing, hearing aids and hearing care — from our specialists in Győr, in plain language.',
    readMore: 'Read more →',
    crumbAria: 'Breadcrumb',
    faqTitle: 'Frequently asked questions',
    ctaTitle: 'Take the first step towards clearer hearing',
    ctaLead: 'Free hearing test with no obligation in Győr — about 30 minutes, no referral needed.',
  },

  privacy: {
    back: '← Back to home',
  },

  notFound: {
    text: 'The page you are looking for could not be found.',
    back: 'Back to home',
  },

  promo: {
    close: 'Close',
  },

  langSwitch: {
    aria: 'Language',
    suggest: 'This page is also available in English.',
    suggestCta: 'English version',
    suggestDismiss: 'Close',
  },
}

export default en
