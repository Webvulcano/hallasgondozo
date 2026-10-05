// /hallokeszulekek - termékkategóriák és márka-boxok

export const categories = [
  {
    iconName: 'EarAid',
    title: 'Hallókészülékek',
    desc: 'A diszkrét, fülbe rejtett modellektől a nagy teljesítményűig - az Ön hallástérképéhez illesztve.',
  },
  {
    iconName: 'Battery',
    title: 'Elemes vagy tölthető',
    desc: 'Megszokott elemes, vagy tölthető kivitel - reggel egy töltés, és egész nap nem kell vele foglalkozni.',
  },
  {
    iconName: 'Droplet',
    title: 'Tisztító- és ápolószerek',
    desc: 'Tisztítófolyadék, spray és ápolószerek a hallókészülék mindennapi karbantartásához.',
  },
  {
    iconName: 'Ear',
    title: 'Egyedi fülillesztékek',
    desc: 'Uszodai, zajvédő és zenész-fülillesztékek - egyedi fülnyomat alapján.',
  },
  {
    iconName: 'Accessory',
    title: 'Elemek, tartozékok, kiegészítők',
    desc: 'Elemek, töltők, pótalkatrészek - minden egy helyen.',
  },
]

// Márkaoldal-szövegek: mind a 4 márka az ügyfél (ÉRTED) anyaga alapján, szerkesztve (2026-10-02).
// Abszolút ígéretek tompítva (egészségügy / E-E-A-T). Gyűjtő-jegyzet: forras/atirando-szovegek.md
//
// Márka-boxok - a /hallokeszulekek kártyák ÉS a /hallokeszulekek/[slug] termékoldalak egyetlen forrása.
// gallery[0] = fő kép (a kártyán is ez látszik), a többi a termékoldali galéria thumbjai.
export const brandBoxes = [
  {
    name: 'Phonak',
    // Szöveg: ügyféltől (ÉRTED, 2026-10-02) - márkaszintű leírás, szerkesztve (abszolút ígéretek tompítva)
    slug: 'phonak-hallokeszulekek',
    productName: 'Phonak hallókészülékek',
    title: 'Phonak - svájci prémium technológia',
    desc: 'Svájci prémium technológia 1947 óta - mesterséges intelligencia a tiszta beszédértésért zajban is.',
    features: [
      'Mesterséges intelligencia és AutoSense OS',
      'Bluetooth iOS-re és Androidra',
      'Akár 56 óra üzemidő (Audéo Sphere Infinio)',
    ],
    lead: 'A svájci Phonak 1947 óta fejleszt hallókészülékeket. Intelligens készülékei észrevétlenül alkalmazkodnak a környezethez, és a legzajosabb helyzetekben is kiemelkedő beszédértést adnak - a márka jelmondata szerint: „Life is on".',
    benefits: [
      'Mesterséges intelligencia (AutoSense OS): automatikusan vált a környezethez illő programra - színházban, forgalmas utcán, családi vacsorán',
      'Spheric Speech Clarity 2.0 (Audéo Sphere Infinio): kiemeli a beszédet a háttérzajból, alkalmazás nélkül',
      'Akár 56 óra üzemidő egyetlen töltéssel (Audéo Sphere Infinio)',
      'Bluetooth: telefonhívás és zene közvetlenül a készülékben - iPhone-nal és Androiddal is',
      'Tölthető lítiumion-akkumulátor - nincs elemcsere',
      '5 év teljes körű garancia - 2 évvel több az általános 3 évnél',
      'Roger™ vezeték nélküli mikrofonok: jobb beszédértés étteremben, előadáson, nagy zajban',
    ],
    description: [
      'A svájci alapítású Phonak 1947 óta azon dolgozik, hogy a legmodernebb technológiával adja vissza az embereknek a hallás szabadságát. Nem csupán hangerősítést kínál: intelligens rendszerei észrevétlenül alkalmazkodnak a környezethez, és zajos helyzetekben is kiemelkedő beszédértést biztosítanak.',
      'RIC (hallójárati hangszórós) készülékek - Audéo: a legnépszerűbb termékcsalád. Apró méretük miatt szinte láthatatlanok a fül mögött, a hangzásuk rendkívül természetes.',
      'BTE (fül mögötti) készülékek - Naída: nagy teljesítményű modellek súlyos vagy mély fokú halláscsökkenésre, maximális megbízhatósággal.',
      'ITE (fülbe helyezhető) készülékek - Virto: teljesen egyedileg, a fül formájára szabva készülnek. Diszkrétek, elegánsak, anatómiailag pontosan illeszkednek.',
      'Sky gyermek-hallókészülékek: csecsemők és gyermekek igényeire tervezett, strapabíró, színes és biztonságos eszközök.',
      'A megfelelő Phonak készüléket a győri hallásvizsgálat alapján, az Ön hallásához és életmódjához választjuk ki, és a 15 napos próbahordás alatt finomhangoljuk.',
    ],
    forWhom: [],
    faq: [
      {
        q: 'Milyen Phonak hallókészülékek közül választhatok?',
        a: 'A legnépszerűbb az Audéo család (fül mögött viselt, hallójárati hangszórós, szinte láthatatlan). Súlyos halláscsökkenésre a nagy teljesítményű Naída, egyedi illesztésre a fülbe helyezhető Virto, gyermekeknek a Sky termékcsalád készül. A hallásvizsgálat után megmutatjuk, melyik illik Önhöz.',
      },
      {
        q: 'Mit tud a Phonak Audéo Sphere Infinio?',
        a: 'A Spheric Speech Clarity 2.0 technológia egy több millió hangmintán tanított neurális hálózattal automatikusan felismeri és kiemeli a beszédet a háttérzajból - alkalmazás használata nélkül. Egy töltéssel akár 56 órát működik.',
      },
      {
        q: 'Párosítható a Phonak hallókészülék a telefonommal?',
        a: 'Igen. A Phonak készülékek Bluetooth-on közvetlenül párosíthatók iPhone-nal és Androidos telefonnal is, sőt laptoppal és tévével. A hívások és a zene közvetlenül a hallókészülékben szólnak.',
      },
      {
        q: 'Kipróbálhatom vásárlás előtt?',
        a: 'Igen. A hallásvizsgálat és a beállítás után 15 napig ingyen hordhatja a mindennapjaiban. Ha nem tetszik, semmit sem fizet.',
      },
      {
        q: 'Mennyi a garancia a Phonak hallókészülékre?',
        a: '5 év teljes körű garancia jár a készülékre - 2 évvel több, mint az általánosan megszokott 3 év.',
      },
    ],
    imageAlt: 'Fülben viselt Phonak hallókészülék közelről, szemüveges férfi fülében',
    image: '/pic/hallokeszulekek/phonak/phonak-termek.webp',
    gallery: [
      { src: '/pic/hallokeszulekek/phonak/phonak-termek.webp', alt: 'Phonak hallókészülék termékfotó' },
      { src: '/pic/hallokeszulekek/phonak/phonak.webp', alt: 'Fülben viselt Phonak hallókészülék közelről, szemüveges férfi fülében' },
      { src: '/pic/hallokeszulekek/phonak_sphere1.JPG', alt: 'Fülbe helyezett Phonak hallókészülék közelről' },
      { src: '/pic/hallokeszulekek/toltheto_par.JPG', alt: 'Tölthető hallókészülék pár töltőtokban' },
      { src: '/pic/lepesrol_lepesre/3A.JPG', alt: 'Hallókészülék próbahordás közben' },
    ],
  },
  {
    name: 'Signia',
    // Szöveg: ügyféltől (ÉRTED, 2026-10-02), szerkesztve (abszolút ígéretek tompítva)
    slug: 'signia-hallokeszulekek',
    productName: 'Signia hallókészülékek',
    title: 'Signia - innováció és stílus',
    desc: 'Német gyökerű innováció (korábban Siemens): több beszélgetőpartner követése zajban, természetes saját hang, díjnyertes dizájn.',
    features: [
      'Több beszélgetőpartner kiemelése zajban (IX platform)',
      'Természetes saját hang (Own Voice Processing)',
      'Ékszerszerű Styletto dizájn',
    ],
    lead: 'A német gyökerű Signia (korábban Siemens) a csúcstechnológiát modern, díjnyertes dizájnnal ötvözi. Készülékei kiváló hangzást adnak, és megjelenésükkel divatos kiegészítőként is megállják a helyüket.',
    benefits: [
      'Integrated Xperience (IX) és AX platform: valós időben követi és kiemeli több beszélgetőpartner hangját, erős háttérzajban is',
      'Saját hang kezelése (Own Voice Processing): felismeri a viselő saját hangját, és természetesebbé teszi',
      'Styletto modellek: rendkívül vékony, ékszerszerű, diszkrét és elegáns kivitel',
      'Signia Assistant: mesterséges intelligenciás asszisztens a telefonos alkalmazásban - a készülék bármikor finomhangolható',
      'Zsebméretű töltőtok, amely akár több napra elegendő energiát ad kábel nélkül',
    ],
    description: [
      'A német gyökerekkel rendelkező Signia (korábban Siemens) a világ egyik leginnovatívabb hallókészülék-gyártója. Küldetése, hogy a halláscsökkenést ne korlátként, hanem új lehetőségként élje meg a viselő.',
      'Az Integrated Xperience (IX) és AX platform a gyártó szerint a világon elsőként képes egyszerre több beszélgetőpartner hangját valós időben követni és kiemelni - így társaságban, intenzív háttérzajban is könnyebb követni a beszélgetést.',
      'A hallókészülék-viselők egyik leggyakoribb panasza, hogy a saját hangjuk furcsán, visszhangosan szól. A Signia Own Voice Processing (OVP) technológiája felismeri a viselő saját hangját, és természetesebbé teszi.',
      'A Styletto modellek szakítanak a hagyományos formákkal: vékony, ékszerszerű megjelenésükkel a diszkréció és az elegancia képviselői. A Signia Assistant alkalmazással a készülék bármikor, azonnal a saját igényeihez hangolható.',
      'Látogasson el győri szaküzletünkbe, próbálja ki a Signia legújabb, mesterséges intelligenciával támogatott modelljeit - a hallásvizsgálat után 15 napig ingyen hordhatja.',
    ],
    forWhom: [],
    faq: [
      {
        q: 'Miben más a Signia, mint más hallókészülékek?',
        a: 'Az Integrated Xperience (IX) platform egyszerre több beszélgetőpartner hangját követi és emeli ki valós időben, a saját hang kezelése (OVP) pedig természetesebbé teszi a viselő saját hangját. Emellett a Styletto modellek dizájnja is egyedi.',
      },
      {
        q: 'Miért szól furcsán a saját hangom hallókészülékkel?',
        a: 'Sok készülék a saját hangot is ugyanúgy felerősíti, mint a környezetet - ettől lesz visszhangos. A Signia Own Voice Processing technológiája felismeri és külön kezeli a viselő hangját, így az természetesebben szól.',
      },
      {
        q: 'Tölthető a Signia hallókészülék?',
        a: 'Igen, a tölthető modellekhez zsebméretű töltőtok tartozik, amely akár több napra elegendő energiát ad kábel nélkül is.',
      },
      {
        q: 'Kipróbálhatom vásárlás előtt?',
        a: 'Igen, a hallásvizsgálat és a beállítás után 15 napig ingyen hordhatja. Ha nem tetszik, semmit sem fizet.',
      },
    ],
    imageAlt: 'Fül mögött viselt, diszkrét Signia hallókészülék',
    image: '/pic/hallokeszulekek/signia/signia-termek.webp',
    gallery: [
      { src: '/pic/hallokeszulekek/signia/signia-termek.webp', alt: 'Signia hallókészülék termékfotó' },
      { src: '/pic/hallokeszulekek/bte_keszulek.JPG', alt: 'Fül mögött viselt, diszkrét hallókészülék közelről' },
      { src: '/pic/lepesrol_lepesre/2.JPG', alt: 'Hallókészülék beállítása a rendelőben' },
      { src: '/pic/lepesrol_lepesre/5.JPG', alt: 'Elégedett hallókészülék-viselő' },
    ],
  },
  {
    name: 'Oticon',
    // Szöveg: ügyféltől (ÉRTED, 2026-10-02), szerkesztve (abszolút ígéretek tompítva)
    slug: 'oticon-hallokeszulekek',
    productName: 'Oticon hallókészülékek',
    title: 'Oticon - természetes hangzás',
    desc: 'Dán gyártó több mint száz éve: a BrainHearing™ technológia az agy természetes hangfeldolgozását támogatja.',
    features: [
      'BrainHearing™ - kevesebb mentális fáradtság',
      'Kiemelkedő beszédértés zajban',
      'Láthatatlan, hallójáratba rejtett (IIC) modellek is',
    ],
    lead: 'A dán Oticon több mint egy évszázada úttörő a hallásgondozásban. Nem csupán felerősíti a hangokat: BrainHearing™ technológiája az agy természetes működését támogatja, így a hallás kevesebb erőfeszítéssel jár, zajban is.',
    benefits: [
      'BrainHearing™ technológia: segít az agynak gyorsabban és pontosabban feldolgozni a hangokat, csökkenti a mentális fáradtságot',
      'Kiemelkedő beszédértés: a legújabb modellek másodpercenként több százszor elemzik a környezetet, elnyomják a zajt, kiemelik a beszédet',
      'Láthatatlan, kényelmes dizájn: parányi fül mögötti és teljesen a hallójáratba rejtett (IIC) modellek',
      'Bluetooth: közvetlen hangátvitel okostelefonról (iOS és Android), tévéről és más eszközökről',
      'Újratölthető akkumulátor: egy gyors töltéssel egész napos működés',
    ],
    description: [
      'A dán Oticon a világ egyik vezető hallókészülék-gyártója, amely több mint egy évszázada úttörő szerepet játszik a hallásgondozásban.',
      'A márka alapfilozófiája rendhagyó: nem csupán a hangokat hangosítja fel, hanem a BrainHearing™ technológiával az agy természetes működését támogatja. Ezáltal a hallás kevesebb erőfeszítéssel jár, a beszédértés pedig zajos környezetben is jobb.',
      'A legújabb modellek másodpercenként több százszor elemzik a környezetet, elnyomják a zavaró zajokat és kiemelik a beszédet. A parányi fül mögötti és a teljesen a hallójáratba rejtett (IIC) modellek maximális diszkréciót adnak.',
      'Fedezze fel győri szaküzletünkben az Oticon legújabb intelligens termékcsaládjait - a hallásvizsgálat után együtt megtaláljuk az Ön életmódjához illő megoldást, és 15 napig ingyen kipróbálhatja.',
    ],
    forWhom: [],
    faq: [
      {
        q: 'Mi az a BrainHearing™ technológia?',
        a: 'Az Oticon szemlélete, amely nem csak felerősíti a hangokat, hanem az agy természetes hangfeldolgozását támogatja. Így a hallás kevesebb erőfeszítéssel jár, és kevésbé fárad el egy hosszabb beszélgetés vagy zajos nap után.',
      },
      {
        q: 'Van láthatatlan Oticon hallókészülék?',
        a: 'Igen, a teljesen a hallójáratba rejtett (IIC) modellek viselés közben gyakorlatilag nem látszanak. Hogy Önnek megfelelő-e, az a halláscsökkenés mértékétől és a hallójárat alakjától függ.',
      },
      {
        q: 'Párosítható az Oticon a telefonommal?',
        a: 'Igen, Bluetooth-on közvetlenül párosítható iPhone-nal és Androidos telefonnal, sőt tévével is - a hang egyenesen a hallókészülékben szól.',
      },
      {
        q: 'Kipróbálhatom vásárlás előtt?',
        a: 'Igen, a hallásvizsgálat és a beállítás után 15 napig ingyen hordhatja. Ha nem tetszik, semmit sem fizet.',
      },
    ],
    imageAlt: 'Fül mögött viselt, szinte észrevehetetlen Oticon hallókészülék',
    image: '/pic/hallokeszulekek/oticon/oticon-termek.webp',
    gallery: [
      { src: '/pic/hallokeszulekek/oticon/oticon-termek.webp', alt: 'Oticon hallókészülék termékfotó' },
      { src: '/pic/hallokeszulekek/oticon/oticon-1.webp', alt: 'Fül mögött viselt, szinte észrevehetetlen Oticon hallókészülék' },
      { src: '/pic/hallokeszulekek/starkey_fulben.JPG', alt: 'Fülbe helyezett hallókészülék viselés közben' },
      { src: '/pic/lepesrol_lepesre/4A.JPG', alt: 'Hallókészülék finomhangolása' },
      { src: '/pic/lepesrol_lepesre/1.JPG', alt: 'Hallásvizsgálat a rendelőben' },
    ],
  },
  {
    name: 'Starkey',
    // Szöveg: ügyféltől (ÉRTED, 2026-10-02) - cégtörténeti anyag; előnyök ebből kiemelve, szerkesztve
    slug: 'starkey-hallokeszulekek',
    productName: 'Starkey hallókészülékek',
    title: 'Starkey - egyedi, fülre szabott készülékek',
    desc: 'Amerikai gyártó, 1990 óta Magyarországon: egyedi fül-lenyomat alapján készülő hallójárati készülékek, MI-alapú modellek.',
    features: [
      'Egyedi fül-lenyomat alapján készülő hallójárati készülékek',
      'Szinte láthatatlan digitális modellek',
      'Evolv AI: automatikus zajszűrés, elesés-érzékelés',
    ],
    lead: 'A Starkey Hearing Technologies a világ egyik legnagyobb, amerikai tulajdonú hallókészülék-gyártója, 1990 óta van jelen Magyarországon. Fő szakterülete az egyéni fül-lenyomat alapján készülő, hallójárati hallókészülék.',
    benefits: [
      'Egyedi gyártás: az Ön fül-lenyomata alapján készülő hallójárati hallókészülékek',
      'Szinte láthatatlan digitális hallójárati modellek',
      'Evolv AI és az azt követő termékcsaládok: beépített szenzorok és automatikus zajszűrés',
      'Elesés-érzékelés a beépített szenzoroknak köszönhetően',
      'Amerikai gyártói háttér, 1990 óta Magyarországon',
    ],
    description: [
      'A Starkey Hearing Technologies a világ egyik legnagyobb, amerikai tulajdonban lévő hallókészülék-gyártója. Magyarországi leányvállalatát, a budapesti központú Starkey Hungary-t 1990-ben alapította, és az elsők között hozott csúcstechnológiás hallásjavító eszközöket a hazai piacra.',
      'A vállalat fő szakterülete Magyarországon is az egyéni fül-lenyomat alapján készülő hallójárati hallókészülékek gyártása és finomhangolása lett. A budapesti laboratórium mellett országos szaküzlet-hálózat épült ki - Budapesten, Gödöllőn, Érden és más vidéki városokban, így Győrben is.',
      'A magyarországi képviselet szorosan követte az amerikai anyacég innovációit: a 2000-es évektől megjelentek a szinte láthatatlan digitális hallójárati modellek, a 2020-as évekre pedig az Evolv AI és az azt követő termékcsaládok, beépített szenzorokkal, automatikus zajszűréssel és elesés-érzékeléssel.',
      'A Starkey készülékeket Győrben, a hallásvizsgálat eredménye alapján választjuk ki és állítjuk be - 15 napig ingyen kipróbálhatja.',
    ],
    forWhom: [],
    faq: [
      {
        q: 'Mi a különleges a Starkey hallókészülékekben?',
        a: 'A Starkey egyik fő szakterülete az egyéni fül-lenyomat alapján készülő hallójárati készülék, amely pontosan illeszkedik és szinte láthatatlan. A modern, mesterséges intelligenciával támogatott modellek automatikus zajszűrést és elesés-érzékelést is kínálnak.',
      },
      {
        q: 'Mit jelent az elesés-érzékelés?',
        a: 'Az Evolv AI és az azt követő Starkey termékcsaládok beépített szenzorai érzékelik, ha a viselő elesik. Ez különösen idősebb vagy egyedül élő viselőknek ad nagyobb biztonságot.',
      },
      {
        q: 'Mióta van jelen a Starkey Magyarországon?',
        a: '1990 óta: ekkor alapította a Starkey Hearing Technologies budapesti központú magyarországi leányvállalatát, a Starkey Hungary-t.',
      },
      {
        q: 'Kipróbálhatom vásárlás előtt?',
        a: 'Igen, a hallásvizsgálat és a beállítás után 15 napig ingyen hordhatja. Ha nem tetszik, semmit sem fizet.',
      },
    ],
    imageAlt: 'Hallójáratba helyezett, diszkrét Starkey hallókészülék',
    image: '/pic/hallokeszulekek/starkey/starkey-termek.webp',
    gallery: [
      { src: '/pic/hallokeszulekek/starkey/starkey-termek.webp', alt: 'Starkey hallókészülék termékfotó' },
      { src: '/pic/hallokeszulekek/starkey/starkey.webp', alt: 'Hallójáratba helyezett, diszkrét Starkey hallókészülék' },
      { src: '/pic/hallokeszulekek/bte_keszulek.JPG', alt: 'Fül mögött viselt, diszkrét hallókészülék közelről' },
      { src: '/pic/lepesrol_lepesre/2.JPG', alt: 'Hallókészülék beállítása a rendelőben' },
      { src: '/pic/lepesrol_lepesre/3A.JPG', alt: 'Hallókészülék próbahordás közben' },
    ],
  },
]

export const getBrandBySlug = (slug) => brandBoxes.find((b) => b.slug === slug)
