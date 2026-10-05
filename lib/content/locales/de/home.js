// TODO fordítás - DEUTSCH. Jelenleg a MAGYAR szöveg másolata (placeholder), csak a szerkezet + a slugok németek.
// A fordítás ide jön, kulcsonként (a kulcsokat/sorrendet ne változtasd). Egészségügyi (YMYL) szöveg →
// anyanyelvi lektor. TB-állítások: csak magyar biztosítottra igazak → átírni, nem szó szerint fordítani.
// Kész fordítás után ezt a fejlécet töröld (az i18n-check a 'TODO fordítás' jelölést figyeli).
export const services = {
  'hearing-test': {
    title: 'Műszeres hallásvizsgálat',
    desc: 'Fájdalommentes vizsgálat, 30 perc, azonnali eredmény.',
  },
  consultation: {
    title: 'Szakorvosi konzultáció',
    desc: 'Dr. Vasvári Gergely Pál személyesen értékeli az eredményt.',
  },
  advice: {
    title: 'Hallókészülék-tanácsadás',
    desc: 'Az Ön hallásához és életmódjához illő megoldás.',
  },
  'child-test': {
    title: 'Gyermek hallásvizsgálat',
    desc: 'Gyermekek hallásvizsgálata, korai diagnózissal.',
  },
}

export const servicesTrust = [
  '15 napos ingyenes próbahordás',
  'TB-szerződött ellátóhely',
]

export const team = {
  'vajai-krisztina': {
    role: 'Audiológus, Hallásakusztikus',
    desc: 'Több mint tíz éve segít győri pácienseknek megtalálni azt a megoldást, amellyel valóban elégedetek lesznek - nem azt, ami „elég jó".',
    imgAlt: 'Vajai Krisztina',
  },
  'dr-vasvari': {
    role: 'Szakorvos - Fül-orr-gégészet, Foniátria, Audiológia',
    desc: 'Minden hallókészülék-ellátást személyesen végez. Az eredményt és a lehetőségeket érthetően, orvosi zsargon nélkül magyarázza el.',
    imgAlt: 'Dr. Vasvári Gergely Pál',
    urlLabel: 'Szakorvosi rendelése: dr-vasvari.hu',
  },
  'tibold-gabriella': {
    role: 'Hallásakusztikus',
    desc: 'A hallókészülék csak akkor hasznos, ha az Ön fülére és szokásaira van pontosan beállítva. Gabriella addig finomít, amíg Ön valóban jól hall.',
    imgAlt: 'Tibold Gabriella',
  },
}

export const journey = {
  1: {
    title: 'Időpontfoglalás',
    desc: 'Az első lépés az időpontfoglalás telefonon vagy online. Már ekkor érdemes röviden elmondania a panaszait — gyakran visszakérdez, nehezebben érti a beszédet zajban, hangosabban hallgatja a tévét —, így a vizsgálaton pontosabban tudunk az Ön helyzetére figyelni.',
  },
  2: {
    title: 'Első konzultáció',
    desc: 'A személyes találkozó, ahol felmérjük a helyzetét és elvégezzük a hallásvizsgálatot. Négy lépésből áll:',
    sub: [
      {
        title: 'Panasz- és igényfelmérés',
        desc: 'Átbeszéljük a panaszokat, az életvitelét és azokat a helyzeteket, ahol a halláscsökkenés a legzavaróbb. Más megoldás kell annak, aki sokat beszélget társaságban, mint akinek a tévé vagy a telefonálás okoz nehézséget.',
      },
      {
        title: 'Műszeres hallásvizsgálat',
        desc: 'A vizsgálatot audiológus, hallásakusztikus szakember végzi kalibrált műszerekkel, csendes kabinban. Kiderül a halláscsökkenés mértéke és típusa, valamint az is, mennyire érintett a beszédértés.',
      },
      {
        title: 'Eredmények és személyre szabott javaslat',
        desc: 'Közérthetően elmagyarázzuk az eredményeket. Ha hallókészülék indokolt, több szempontot mérlegelünk: a halláscsökkenés mértékét, a fül adottságait, az Ön kényelmi igényeit, kommunikációs szokásait és anyagi lehetőségeit.',
      },
      {
        title: 'Hallókészülék kiválasztása és első beállítása',
        desc: 'A készüléket az Ön vizsgálati eredményei alapján állítjuk be — ez fontos, de még nem végleges. Megmutatjuk a behelyezést, tisztítást, töltést vagy elemcserét és az alapvető kezelést.',
      },
    ],
  },
  3: {
    title: 'Próbahordás a mindennapokban',
    desc: 'A készüléket valós élethelyzetekben próbálja ki: otthon, családi beszélgetésben, az utcán, üzletben, munkahelyen vagy zajosabb környezetben. Így nyugodtan, kockázat nélkül születhet meg a döntés.',
    highlight: 'Min. 15 nap, ingyenes',
  },
  4: {
    title: 'Kontroll, finomhangolás és véglegesítés',
    desc: 'A próbahordás után kontrollvizsgálaton átbeszéljük a tapasztalatokat. Ha egyes hangok túl erősek vagy a beszéd nem elég tiszta, finomítjuk a beállítást. A jó ellátás nem egyetlen alkalom, hanem gondozási folyamat.',
  },
  5: {
    title: 'Hosszú távú gondozás és utánkövetés',
    desc: 'A hallókészülék viselése tanulási folyamat. A rendszeres kontroll, a tisztítás, az illeszték ellenőrzése, a tartozékok és a beállítás-módosítások mind azt szolgálják, hogy a készülék hosszú távon is megbízhatóan működjön. Szükség esetén egyéni fülilleszték és gyógyászati segédeszköz-ellátás is elérhető.',
  },
}

export const testimonials = {
  'fendt-kitti': {
    quote: 'Vasvári doktor úrnál jártunk. Mint mindig, most is alapos volt és kedves. Mindent érthetően elmagyaráz. Ért a gyerekek nyelvén is. Profi rendelő, profi eszközökkel, így azonnali és pontos diagnózist kapunk mindig.',
  },
  'papai-gabor': {
    quote: 'Évek óta járok ide hallásvizsgálatra, „karbantartásra”. Mindig nagyon udvarias, szakmailag és emberileg is profi szolgáltatásban, gyógyításban volt részem. Könnyen, gyorsan tudtam időpontot foglalni, ami után szinte nulla várakozással megkaptam a maximális orvosi segítséget. Csak megköszönni tudom!',
  },
  'lenart-laszlo': {
    quote: 'Mindenkinek csak ajánlani tudom Őket. Kiváló személyzet, profi orvos, profi ellátás, tiszta rendezett, profin felszerelt rendelő. Ismerős javaslatára felkerestem Őket, 5 perces vizsgálat, kezelés után hihetetlen megkönnyebbülés, a fájdalom megszűnt.',
  },
  'kovary-zsuzsanna': {
    quote: 'Vasvári Gergely Pál doktor úr, akárcsak az asszisztense egyaránt nagyon kedvesek, maximálisan segítőkészek voltak a nagyon alapos vizsgálat során. Annyira megértő, türelmes, támogató hozzáállást tapasztaltunk, ami igazán kellemes meglepetés volt. És az is jó érzés volt, ahogy a doktor úr elköszönt tőlünk: „örülünk, ha segíthetünk.” Köszönjük ezt a gondoskodást.',
  },
  'borzsei-gyula': {
    quote: 'Nagyon alapos és hathatós segítséget kaptam hallás problémám megoldásában. A doktor úr is, és az asszisztens hölgy is barátságos és nagyon segítőkész volt. Jó szívvel ajánlom mindenkinek az Érted Hallásgondozót, akinek a hallásával probléma van.',
  },
  'magyar-imrene': {
    quote: 'Teljesen meg vagyunk elégedve a Hallásgondozóval. Férjem számára készült hallásvizsgálat és hallókészülék. Gyors és rugalmas az időpontfoglalás. Kiváló szakértelem és kedves, készséges hozzáállás az ügyfélhez.',
  },
  'laszlo-denes': {
    quote: 'A mai napon voltunk az ÉRTED Halllásgondozó ügyfelei, kisfiunk Marcell hallókészülékével kapcsolatban. Az ellátás minden szempontból megfelelt az elvárásunknak. Kedves, udvarias, a gyermek érdekeit és szükségletét figyelembe vevő orvosi ellátást és precíz adminisztrációt tapasztaltunk.',
  },
}

export const promo = {
  tag: 'Aktuális ajánlatunk',
  title: 'Próbálja ki 15 napig ingyen!',
  text: 'Phonak Sphere hallókészülék: automatikusan szűri a háttérzajt, hogy zajos helyen is tisztán hallja szerettei hangját.',
  features: [
    'Ingyenes hallásvizsgálat',
    '15 napos ingyenes próbahordás',
    'Kötelezettség nélkül',
  ],
  imageAlt: 'Phonak Audéo Sphere hallókészülék',
  cta: 'Kipróbálnám ingyen 15 napig',
  dismiss: 'Most nem, köszönöm',
}

export const offer = {
  tag: 'Nyári különajánlat · Korlátozott ideig',
  title: 'Phonak Sphere nyári áron',
  lead: 'Automatikusan szűri a háttérzajt, hogy zajos helyen is tisztán hallja a beszédet. Most {price} áron, 2 db vásárlásakor.',
  priceLabel: '325.000 Ft/db',
  priceListLabel: 'Listaár helyett',
  price: '325.000 Ft',
  unit: '/ db, 2 db vásárlásakor',
  cta: 'Kipróbálnám ingyen 15 napig',
  ctaSecondary: 'További készülékek',
  ctaSecondaryNote: 'Nem ez a megfelelő? Nézze meg a teljes kínálatunkat.',
  note: 'Jelezze foglaláskor, hogy a Sphere ajánlat érdekli.',
  imageAlt: 'Phonak Audéo Sphere hallókészülék',
}

export const offerFeatures = [
  {
    plain: 'Zajos helyen is tisztán hall',
  },
  {
    plain: 'Egy töltéssel egész héten működik',
  },
  {
    bold: '5 év teljes körű garancia',
  },
  {
    plain: '15 napos ingyenes próbahordás',
  },
]
