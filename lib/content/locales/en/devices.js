// LIVE 2026-10-13 (Lehel jóváhagyta, anyanyelvi lektorálás nélkül) - ENGLISH hearing aid categories + brand pages (/en/hearing-aids, /en/hearing-aids/[slug]).
// Claude translation of the Hungarian text (2026-10-12), NOT yet reviewed by a native speaker.
// Key = id in the base file (lib/content/devices.js: icon, images). Slugs are final (URLs) - do not change.
// The 5-year warranty ONLY applies to Phonak. metaDescription ≤158 characters. galleryAlts = alt texts of the
// gallery images in order. Plain data, no imports.
export const categories = {
  'hearing-aids': {
    title: 'Hearing aids',
    desc: 'From discreet in-ear models to high-power devices - matched to your hearing profile.',
    descShort: 'From discreet to high-power',
  },
  power: {
    title: 'Battery or rechargeable',
    desc: 'Classic battery-powered or rechargeable - charge it in the morning and forget about it all day.',
    descShort: 'Whichever suits you best',
  },
  care: {
    title: 'Cleaning and care products',
    desc: 'Cleaning solutions, sprays and care products for everyday hearing aid maintenance.',
    descShort: 'For everyday care',
  },
  earmoulds: {
    title: 'Custom earmoulds',
    desc: 'Swimming, noise protection and musician earmoulds - made from a custom ear impression.',
    descShort: 'Swimming, noise, music',
  },
  accessories: {
    title: 'Batteries, accessories, extras',
    desc: 'Batteries, chargers and spare parts - all in one place.',
    descShort: 'All in one place',
  },
}

export const brands = {
  phonak: {
    slug: 'phonak-hearing-aids',
    productName: 'Phonak hearing aids',
    title: 'Phonak - Swiss premium technology',
    desc: 'Swiss premium technology since 1947 - artificial intelligence for clear speech understanding, even in noise.',
    features: [
      'Artificial intelligence and AutoSense OS',
      'Bluetooth for iOS and Android',
      'Up to 56 hours of use (Audéo Sphere Infinio)',
    ],
    lead: 'Swiss manufacturer Phonak has been developing hearing aids since 1947. Its smart devices adapt to your surroundings without you noticing and deliver outstanding speech understanding even in the noisiest situations - true to the brand’s motto: “Life is on”.',
    benefits: [
      'Artificial intelligence (AutoSense OS): automatically switches to the right programme for your surroundings - at the theatre, on a busy street, at a family dinner',
      'Spheric Speech Clarity 2.0 (Audéo Sphere Infinio): lifts speech out of background noise, no app needed',
      'Up to 56 hours of use on a single charge (Audéo Sphere Infinio)',
      'Bluetooth: phone calls and music directly in the hearing aid - with iPhone and Android',
      'Rechargeable lithium-ion battery - no more battery changes',
      'Up to 5-year full warranty - 2 years more than the usual 3 years',
      'Roger™ wireless microphones: better speech understanding in restaurants, at lectures and in loud places',
    ],
    description: [
      'Founded in Switzerland, Phonak has been working since 1947 to give people back the freedom of hearing with the latest technology. It offers more than amplification: its smart systems adapt to your surroundings without you noticing and provide outstanding speech understanding in noisy situations.',
      'RIC (receiver-in-canal) hearing aids - Audéo: the most popular product family. Thanks to their tiny size they are almost invisible behind the ear, and their sound is remarkably natural.',
      'BTE (behind-the-ear) hearing aids - Naída: high-power models for severe to profound hearing loss, with maximum reliability.',
      'ITE (in-the-ear) hearing aids - Virto: made entirely to the shape of your ear. Discreet, elegant and an exact anatomical fit.',
      'Sky hearing aids for children: robust, colourful and safe devices designed for the needs of babies and children.',
      'We choose the right Phonak hearing aid for your hearing and lifestyle based on your hearing test in Győr, and fine-tune it during the 15-day trial.',
    ],
    forWhom: [],
    faq: [
      {
        q: 'Which Phonak hearing aids can I choose from?',
        a: 'The most popular is the Audéo family (worn behind the ear, with the receiver in the ear canal, almost invisible). For severe hearing loss there is the high-power Naída, for a custom fit the in-the-ear Virto, and for children the Sky family. After the hearing test we show you which one suits you.',
      },
      {
        q: 'What can the Phonak Audéo Sphere Infinio do?',
        a: 'Spheric Speech Clarity 2.0 uses a neural network trained on millions of sound samples to automatically recognise speech and lift it out of background noise - without using an app. It runs for up to 56 hours on a single charge.',
      },
      {
        q: 'Can a Phonak hearing aid be paired with my phone?',
        a: 'Yes. Phonak hearing aids pair directly via Bluetooth with iPhones and Android phones, and even with laptops and TVs. Calls and music play directly in the hearing aid.',
      },
      {
        q: 'Can I try it before buying?',
        a: 'Yes. After the hearing test and fitting you can wear it free of charge in your everyday life for 15 days. If you don’t like it, you pay nothing.',
      },
      {
        q: 'What warranty comes with a Phonak hearing aid?',
        a: 'The hearing aid comes with up to a 5-year full warranty - 2 years more than the usual 3 years.',
      },
    ],
    metaDescription: 'Phonak hearing aids in Győr: artificial intelligence for speech in noise, Bluetooth, 5-year warranty. Free hearing test, 15-day trial.',
    imageAlt: 'Black in-the-ear Phonak hearing aid, product photo',
    galleryAlts: [
      'Phonak hearing aid worn in the ear, close-up of a man with glasses',
      'In-the-ear Phonak hearing aid with an open charging case',
      'Tiny Phonak hearing aid in the palm of a hand, next to a coin',
      'Pair of behind-the-ear Phonak hearing aids in a charging case',
    ],
  },
  signia: {
    slug: 'signia-hearing-aids',
    productName: 'Signia hearing aids',
    title: 'Signia - innovation and style',
    desc: 'Innovation with German roots (formerly Siemens): follows several speakers in noise, natural own voice, award-winning design.',
    features: [
      'Highlights several speakers in noise (IX platform)',
      'Natural own voice (Own Voice Processing)',
      'Jewellery-like Styletto design',
    ],
    lead: 'With its German roots, Signia (formerly Siemens) combines cutting-edge technology with modern, award-winning design. Its hearing aids deliver excellent sound and look good enough to wear as a stylish accessory.',
    benefits: [
      'Integrated Xperience (IX) and AX platform: follows and highlights the voices of several speakers in real time, even in strong background noise',
      'Own Voice Processing: recognises the wearer’s own voice and makes it sound more natural',
      'Styletto models: extremely slim, jewellery-like, discreet and elegant',
      'Signia Assistant: an AI assistant in the phone app - fine-tune your hearing aid at any time',
      'Pocket-sized charging case that provides power for several days without a cable',
    ],
    description: [
      'With its German roots, Signia (formerly Siemens) is one of the most innovative hearing aid manufacturers in the world. Its mission is to help wearers experience hearing loss not as a limitation but as a new opportunity.',
      'According to the manufacturer, the Integrated Xperience (IX) and AX platform is the first in the world able to follow and highlight the voices of several speakers at the same time in real time - making it easier to follow a conversation in company and in loud background noise.',
      'One of the most common complaints of hearing aid wearers is that their own voice sounds strange or echoey. Signia’s Own Voice Processing (OVP) technology recognises the wearer’s own voice and makes it sound more natural.',
      'The Styletto models break with traditional shapes: slim and jewellery-like, they stand for discretion and elegance. With the Signia Assistant app, your hearing aid can be adjusted to your needs instantly, at any time.',
      'Visit our shop in Győr and try Signia’s latest AI-supported models - after the hearing test you can wear them free of charge for 15 days.',
    ],
    forWhom: [],
    faq: [
      {
        q: 'How is Signia different from other hearing aids?',
        a: 'The Integrated Xperience (IX) platform follows and highlights the voices of several speakers at once in real time, and Own Voice Processing (OVP) makes the wearer’s own voice sound more natural. The design of the Styletto models is also unique.',
      },
      {
        q: 'Why does my own voice sound strange with a hearing aid?',
        a: 'Many hearing aids amplify your own voice just like your surroundings - that is what makes it sound echoey. Signia’s Own Voice Processing technology recognises your voice and processes it separately, so it sounds more natural.',
      },
      {
        q: 'Are Signia hearing aids rechargeable?',
        a: 'Yes, the rechargeable models come with a pocket-sized charging case that provides power for several days, even without a cable.',
      },
      {
        q: 'Can I try it before buying?',
        a: 'Yes, after the hearing test and fitting you can wear it free of charge for 15 days. If you don’t like it, you pay nothing.',
      },
    ],
    metaDescription: 'Signia hearing aids in Győr: highlights several speakers in noise, natural own voice. Free hearing test and 15-day trial.',
    imageAlt: 'Blue behind-the-ear Signia hearing aid, product photo',
    galleryAlts: [
      'Pair of behind-the-ear Signia hearing aids, smiling man with glasses',
      'In-the-ear Signia hearing aid being worn, with the pair next to it',
      'Pair of tiny Signia hearing aids that fit in the ear canal, older woman',
      'Pair of skin-coloured in-the-canal Signia hearing aids',
    ],
  },
  oticon: {
    slug: 'oticon-hearing-aids',
    productName: 'Oticon hearing aids',
    title: 'Oticon - natural sound',
    desc: 'A Danish manufacturer for more than a hundred years: BrainHearing™ technology supports the brain’s natural sound processing.',
    features: [
      'BrainHearing™ - less listening effort',
      'Outstanding speech understanding in noise',
      'Invisible-in-canal (IIC) models too',
    ],
    lead: 'Danish manufacturer Oticon has been a pioneer in hearing care for more than a century. It does not just amplify sounds: its BrainHearing™ technology supports the brain’s natural way of working, so hearing takes less effort, even in noise.',
    benefits: [
      'BrainHearing™ technology: helps the brain process sounds faster and more accurately, and reduces listening fatigue',
      'Outstanding speech understanding: the latest models analyse the surroundings hundreds of times per second, suppress noise and highlight speech',
      'Invisible, comfortable design: tiny behind-the-ear and completely in-canal (IIC) models',
      'Bluetooth: direct streaming from your smartphone (iOS and Android), TV and other devices',
      'Rechargeable battery: a quick charge lasts all day',
    ],
    description: [
      'Danish manufacturer Oticon is one of the world’s leading hearing aid makers and has played a pioneering role in hearing care for more than a century.',
      'The brand’s philosophy is different: it does not just make sounds louder, its BrainHearing™ technology supports the brain’s natural way of working. This means hearing takes less effort and speech is easier to understand in noisy places.',
      'The latest models analyse the surroundings hundreds of times per second, suppress disturbing noise and highlight speech. The tiny behind-the-ear and the completely in-canal (IIC) models offer maximum discretion.',
      'Discover Oticon’s latest smart product families in our shop in Győr - after the hearing test we find the solution that fits your lifestyle together, and you can try it free of charge for 15 days.',
    ],
    forWhom: [],
    faq: [
      {
        q: 'What is BrainHearing™ technology?',
        a: 'Oticon’s approach that does not just amplify sounds but supports the brain’s natural sound processing. This means hearing takes less effort and you get less tired after a long conversation or a noisy day.',
      },
      {
        q: 'Is there an invisible Oticon hearing aid?',
        a: 'Yes, the completely in-canal (IIC) models are practically invisible when worn. Whether they suit you depends on your degree of hearing loss and the shape of your ear canal.',
      },
      {
        q: 'Can Oticon be paired with my phone?',
        a: 'Yes, it pairs directly via Bluetooth with iPhones and Android phones, and even with your TV - the sound plays straight in the hearing aid.',
      },
      {
        q: 'Can I try it before buying?',
        a: 'Yes, after the hearing test and fitting you can wear it free of charge for 15 days. If you don’t like it, you pay nothing.',
      },
    ],
    metaDescription: 'Oticon hearing aids in Győr: BrainHearing™ technology for easier speech understanding, even in noise. Free hearing test and 15-day trial.',
    imageAlt: 'Champagne-coloured behind-the-ear Oticon hearing aid, product photo',
    galleryAlts: [
      'Oticon hearing aid worn behind the ear, barely noticeable',
      'Black Oticon hearing aid with the receiver in the ear canal',
      'Discreetly worn Oticon hearing aid, close-up of a woman’s ear',
      'Champagne-coloured Oticon hearing aid with the receiver in the ear canal',
    ],
  },
  starkey: {
    slug: 'starkey-hearing-aids',
    productName: 'Starkey hearing aids',
    title: 'Starkey - custom-made for your ear',
    desc: 'American manufacturer, in Hungary since 1990: in-canal hearing aids made from a custom ear impression, AI-powered models.',
    features: [
      'In-canal hearing aids made from a custom ear impression',
      'Almost invisible digital models',
      'Evolv AI: automatic noise reduction, fall detection',
    ],
    lead: 'Starkey Hearing Technologies is one of the world’s largest American-owned hearing aid manufacturers and has been present in Hungary since 1990. Its main speciality is in-canal hearing aids made from an individual ear impression.',
    benefits: [
      'Custom-made: in-canal hearing aids made from your own ear impression',
      'Almost invisible digital in-canal models',
      'Evolv AI and the product families that followed: built-in sensors and automatic noise reduction',
      'Fall detection thanks to the built-in sensors',
      'American manufacturer, in Hungary since 1990',
    ],
    description: [
      'Starkey Hearing Technologies is one of the world’s largest American-owned hearing aid manufacturers. It founded its Hungarian subsidiary, Budapest-based Starkey Hungary, in 1990, and was among the first to bring high-tech hearing devices to the Hungarian market.',
      'In Hungary, too, the company’s main speciality became the manufacture and fine-tuning of in-canal hearing aids made from individual ear impressions. Alongside the Budapest laboratory, a nationwide network of specialist shops was built up - in Budapest, Gödöllő, Érd and other towns, including Győr.',
      'The Hungarian branch closely followed the innovations of the American parent company: from the 2000s almost invisible digital in-canal models appeared, and by the 2020s Evolv AI and the product families that followed, with built-in sensors, automatic noise reduction and fall detection.',
      'In Győr, we choose and fit Starkey hearing aids based on your hearing test results - and you can try them free of charge for 15 days.',
    ],
    forWhom: [],
    faq: [
      {
        q: 'What is special about Starkey hearing aids?',
        a: 'One of Starkey’s main specialities is the in-canal hearing aid made from an individual ear impression, which fits precisely and is almost invisible. Modern AI-supported models also offer automatic noise reduction and fall detection.',
      },
      {
        q: 'What does fall detection mean?',
        a: 'The built-in sensors of Evolv AI and the Starkey product families that followed detect if the wearer falls. This gives extra security, especially to older people or those who live alone.',
      },
      {
        q: 'How long has Starkey been in Hungary?',
        a: 'Since 1990: that is when Starkey Hearing Technologies founded its Budapest-based Hungarian subsidiary, Starkey Hungary.',
      },
      {
        q: 'Can I try it before buying?',
        a: 'Yes, after the hearing test and fitting you can wear it free of charge for 15 days. If you don’t like it, you pay nothing.',
      },
    ],
    metaDescription: 'Starkey hearing aids in Győr: almost invisible models made from a custom ear impression. Free hearing test and 15-day trial.',
    imageAlt: 'Black invisible-in-canal Starkey hearing aid, product photo',
    galleryAlts: [
      'In-the-canal (ITC) Starkey hearing aid being worn',
      'Invisible-in-canal (IIC) Starkey hearing aid',
      'Skin-coloured completely-in-canal (CIC) Starkey hearing aid',
      'Behind-the-ear receiver-in-canal (RIC) Starkey hearing aid',
    ],
  },
}
