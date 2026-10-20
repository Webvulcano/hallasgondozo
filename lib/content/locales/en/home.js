// LIVE 2026-10-13 (Lehel jóváhagyta, anyanyelvi lektorálás nélkül) - ENGLISH. Claude translation of the Hungarian text (2026-10-12), NOT yet reviewed by a native speaker.
// Keys and order mirror locales/hu (scripts/i18n-check.mjs checks parity). Healthcare (YMYL) text → native review.
// Hungarian state health insurance (TB / NEAK) only applies to people insured in Hungary → adapted, not literal.
// The client can correct any text in the Ügyfél Admin (EN tab); a saved CMS value overrides this file.
// Native-speaker review still recommended.
// Plain data, no imports.
export const services = {
  'hearing-test': {
    title: 'Professional hearing test',
    desc: 'Painless test, 30 minutes, instant results. We also test children’s hearing.',
  },
  consultation: {
    title: 'Specialist consultation',
    desc: 'Dr Gergely Pál Vasvári personally reviews your results.',
  },
  advice: {
    title: 'Hearing aid advice',
    desc: 'A solution that suits your hearing and your lifestyle.',
  },
  'child-test': {
    title: 'Children’s hearing test',
    desc: 'Hearing tests for children, with early diagnosis.',
  },
}

export const servicesTrust = [
  '15-day free trial',
  'Contracted with the Hungarian health insurance (NEAK)',
  'Accredited hearing test',
]

export const team = {
  'vajai-krisztina': {
    role: 'Audiologist, Hearing Aid Acoustician',
    desc: 'With more than 20 years of experience, she helps patients find a solution they are truly happy with - not just one that is “good enough”.',
    imgAlt: 'Krisztina Vajai',
  },
  'dr-vasvari': {
    role: 'Specialist in ENT, Phoniatrics and Audiology',
    desc: 'He personally oversees and checks every hearing aid fitting. He explains your results and options clearly, without medical jargon.',
    imgAlt: 'Dr Gergely Pál Vasvári',
    urlLabel: 'His specialist practice: dr-vasvari.hu',
    // Bővebb bemutatkozás: fordításig üres → nincs gomb (hu/home.js-ben a magyar)
    bioRole: '',
    bio: '',
  },
  'tibold-gabriella': {
    role: 'Hearing Aid Acoustician',
    desc: 'A hearing aid fitting only works when it is tailored to your ears and your habits. Gabriella helps you with this - in Hungarian and in German.',
    imgAlt: 'Gabriella Tibold',
  },
}

export const journey = {
  1: {
    title: 'Booking an appointment',
    desc: 'The first step is to book an appointment by phone or online. It helps to briefly describe your concerns when booking - for example, if you often ask people to repeat themselves, struggle to follow conversations in noise or turn the TV up loud - so we can focus on your situation during the test.',
  },
  2: {
    title: 'Hearing test and advice',
    desc: 'A personal appointment where we assess your situation and carry out the hearing test. It consists of the following steps:',
    sub: [
      {
        title: 'Understanding your concerns and needs',
        desc: 'We talk about your concerns, your daily life and the situations where hearing loss bothers you most. Someone who often chats in a group needs a different solution from someone who mainly struggles with the TV or the phone.',
      },
      {
        title: 'Professional hearing test',
        desc: 'The test is carried out by an audiologist or hearing aid acoustician, using calibrated equipment in a quiet booth. It shows the degree and type of hearing loss and how much your speech understanding is affected.',
      },
      {
        title: 'Results and a personal recommendation',
        desc: 'We explain the results in plain language. If a hearing aid is recommended, we consider several factors: the degree of hearing loss, the shape of your ear, your comfort preferences, how you communicate and your budget.',
      },
    ],
  },
  3: {
    title: 'Specialist consultation and recommendation',
    desc: 'We discuss your hearing test results and the treatment options, and choose the right type of hearing aid together.',
  },
  4: {
    title: 'Trial period and fine-tuning',
    highlight: 'Min. 15 days, free',
    sub: [
      {
        title: 'Choosing and first fitting of your hearing aid',
        desc: 'We set up the hearing aid based on your test results — this is an important step, but not the final one. We show you how to insert, clean and charge it (or change the battery) and how to use it.',
      },
      {
        title: '',
        desc: 'You try the hearing aid in real-life situations: at home, in family conversations, on the street, in shops, at work or in noisier places. This way you can decide calmly and without any risk.',
      },
    ],
  },
  5: {
    title: 'Finalising and long-term hearing care',
    desc: 'After the trial period, we talk through your experience at a follow-up appointment. If some sounds are too loud or speech is not clear enough, we fine-tune the settings. Good care is not a one-off visit, it is an ongoing process.',
    sub: [
      {
        title: '',
        desc: 'Wearing a hearing aid is a learning process. Regular check-ups, cleaning, checking the fit, accessories and adjustments all help your hearing aid work reliably in the long term. Our accessories, cleaning products and hearing aid repair service help you wear your hearing aid without problems.',
      },
    ],
  },
}

// Real Google reviews, translated from Hungarian (marked on the page: dictionary testimonials.translatedNote).
export const testimonials = {
  'fendt-kitti': {
    quote: 'We visited Dr Vasvári. As always, he was thorough and kind. He explains everything clearly and he speaks children’s language too. A professional practice with professional equipment, so we always get an immediate and accurate diagnosis.',
  },
  'papai-gabor': {
    quote: 'I have been coming here for hearing tests and “maintenance” for years. I have always received very polite service and treatment that is professional both medically and personally. It was easy and quick to book an appointment, and then, with almost no waiting, I got the best possible medical help. I can only say thank you!',
  },
  'lenart-laszlo': {
    quote: 'I can only recommend them to everyone. Excellent staff, a professional doctor, professional care and a clean, tidy, well-equipped practice. I went there on a friend’s recommendation - after a 5-minute examination and treatment I felt incredible relief, and the pain was gone.',
  },
  'kovary-zsuzsanna': {
    quote: 'Dr Gergely Pál Vasvári and his assistant were both very kind and extremely helpful during the very thorough examination. We experienced such an understanding, patient and supportive attitude that it was a really pleasant surprise. It was also lovely how the doctor said goodbye: “We are glad when we can help.” Thank you for this care.',
  },
  'borzsei-gyula': {
    quote: 'I received very thorough and effective help with my hearing problem. Both the doctor and the assistant were friendly and very helpful. I warmly recommend ÉRTED Hallásgondozó to anyone who has problems with their hearing.',
  },
  'magyar-imrene': {
    quote: 'We are completely satisfied with the hearing care centre. My husband had a hearing test and got a hearing aid. Booking is quick and flexible. Excellent expertise and a kind, helpful attitude towards clients.',
  },
  'laszlo-denes': {
    quote: 'Today we were clients of ÉRTED Hallásgondozó with our son Marcell’s hearing aid. The care met our expectations in every respect. We experienced kind, polite medical care that took the child’s interests and needs into account, and precise administration.',
  },
}

export const promo = {
  tag: 'Our current offer',
  title: 'Try it free for 15 days!',
  text: 'Phonak Sphere hearing aid: it automatically filters background noise so you can hear your loved ones clearly, even in noisy places.',
  features: [
    'Free hearing test',
    '15-day free trial',
    'No obligation',
  ],
  imageAlt: 'Phonak Audéo Sphere hearing aid',
  cta: 'I’d like a free 15-day trial',
  dismiss: 'Not now, thank you',
}

export const offer = {
  tag: 'Summer special · For a limited time',
  title: 'Phonak Sphere at a summer price',
  lead: 'It automatically filters background noise so you can hear speech clearly, even in noisy places. Now {price} each when you buy 2.',
  priceLabel: '325,000 Ft each',
  priceListLabel: 'Instead of the list price',
  price: '325,000 Ft',
  unit: '/ unit, when buying 2',
  cta: 'I’d like a free 15-day trial',
  ctaSecondary: 'More hearing aids',
  ctaSecondaryNote: 'Not the right one for you? See our full range.',
  note: 'Please mention the Sphere offer when booking.',
  imageAlt: 'Phonak Audéo Sphere hearing aid',
}

export const offerFeatures = [
  {
    plain: 'Hear clearly, even in noisy places',
  },
  {
    plain: 'Lasts all week on one charge',
  },
  {
    bold: 'Up to 5-year full warranty',
  },
  {
    plain: '15-day free trial',
  },
]
