// /hallokeszulekek/arak - „Hallókészülék árak és TB-támogatás Győrben"
// Kulcsszó: „hallókészülék ár" (1E–10E keresés/hó) + „TB-támogatás", „egészségpénztár".
// Minta: amplifon.com/hu/hallokeszulekek/arak (konkrét Ft nélkül is #2) - nálunk + lokális + FAQPage.
//
// ⚠️ TODO - ÜGYFÉLLEL ELLENŐRIZENDŐ: a TB-ről szóló állítások általános NEAK-szabály alapján
// íródtak (rendelvény, önrész, teljes árú ellátás feltételei). Ársávok (alap/közép/prémium -tól)
// ügyféladat után kerülnek be. Gyűjtő-jegyzet: forras/atirando-szovegek.md

export const pricePage = {
  title: 'Hallókészülék árak és TB-támogatás Győrben',
  dateModified: '2026-10-02',
  // Saját fotózás (forras/pic/kepek es videok/kep) → public/pic/arak, 1600px WebP
  images: {
    hero: {
      src: '/pic/arak/hallokeszulek-tenyerben.webp',
      alt: 'Apró, fül mögötti hallókészülék tenyérben, egy pénzérme mellett - méretösszehasonlítás',
    },
    factors: {
      src: '/pic/arak/hallokeszulek-kivitelek.webp',
      alt: 'Különböző színű és kivitelű Phonak hallókészülékek egymás mellett',
    },
    tb: {
      src: '/pic/arak/szakorvosi-vizsgalat.webp',
      alt: 'Dr. Vasvári Gergely Pál fül-orr-gégész szakorvos vizsgálja egy páciens fülét Győrben',
    },
    trial: {
      src: '/pic/arak/elegedett-paciens.webp',
      alt: 'Mosolygó idős páciens az ÉRTED Hallásgondozó győri várójában',
    },
  },
  // Közvetlen válasz az oldal elején (AEO / AI-idézés)
  intro:
    'A hallókészülék ára elsősorban a készülék kategóriájától, kialakításától és funkcióitól függ, valamint attól, mekkora TB-támogatás vehető igénybe. Pontos, személyre szabott ajánlatot az ingyenes hallásvizsgálat után adunk Győrben - beutaló és vásárlási kötelezettség nélkül.',
  factors: [
    {
      title: 'A halláscsökkenés mértéke',
      text: 'Enyhébb halláscsökkenésre egyszerűbb, súlyosabbra nagyobb teljesítményű készülék kell - ezt a hallásvizsgálat dönti el.',
    },
    {
      title: 'A készülék kialakítása',
      text: 'A fül mögötti modellek a legelterjedtebbek; a kisebb, hallójáratba helyezhető, szinte láthatatlan kivitel jellemzően drágább.',
    },
    {
      title: 'A technológiai funkciók',
      text: 'Zajszűrés, Bluetooth, tölthető akkumulátor - minél több prémium funkció kell, annál magasabb az ár.',
    },
    {
      title: 'A beállítás és az utógondozás',
      text: 'Nálunk a kiválasztást, a beállítást és a kontroll alkalmakat ugyanaz a csapat végzi, szakorvosi háttérrel.',
    },
  ],
  tbSteps: [
    'Ingyenes hallásvizsgálat és szakorvosi vizsgálat - nálunk egy időpontban.',
    'Ha hallókészülék szükséges, a szakorvos rendelvényt állít ki.',
    'Kiválasztjuk az Ön hallásához és igényeihez illő készüléket.',
    'A TB-támogatás összegét az árból levonjuk, Ön csak a fennmaradó önrészt fizeti.',
  ],
}

export const priceFaq = [
  {
    q: 'Mennyibe kerül egy hallókészülék?',
    a: 'A hallókészülék ára a kategóriától, a kialakítástól és a funkcióktól függ: egy alap kategóriás készülék és egy tölthető, Bluetooth-os prémium modell ára között jelentős a különbség. A TB-támogatás és az egészségpénztári elszámolás csökkenti a fizetendő összeget. Pontos árat a győri ingyenes hallásvizsgálat után, személyre szabottan adunk.',
  },
  {
    q: 'Minden hallókészülékre jár TB-támogatás?',
    a: 'A TB-támogatás szakorvosi rendelvényhez kötött, és a támogatás összege a készülék típusától függ - a drágább, prémium készülékeknél a támogatás az árnak csak egy részét fedezi. Az ÉRTED Hallásgondozó TB-szerződött gyógyászatisegédeszköz-ellátóhely, így a támogatást helyben, az árból levonva érvényesítjük.',
  },
  {
    q: 'Kinek fizeti ki a TB a hallókészülék teljes árát?',
    a: 'Teljes árú, térítésmentes ellátásra csak meghatározott jogosultság (például közgyógyellátás) és a NEAK feltételeinek teljesülése esetén van lehetőség, a legtöbb esetben a TB az ár egy részét támogatja. Hogy az Ön esetében milyen támogatás érvényesíthető, azt a hallásvizsgálat és a szakorvosi vizsgálat után megmondjuk.',
  },
]
