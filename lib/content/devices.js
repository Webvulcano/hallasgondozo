// Hallókészülék-kategóriák és márkák - NYELVFÜGGETLEN alap: azonosító, ikon, képek.
// A szövegek nyelvenként: lib/content/locales/<nyelv>/devices.js (ugyanezzel az id-vel).
// Összefésülés: lib/content/index.js → getContent(locale).categories / .brands
// Új márka = új elem itt + szöveg mindhárom nyelvi fájlban.

// categories: a /hallokeszulekek kategória-kártyái (szöveg: title, desc = desktop, descShort = mobilon ≤640px)
export const categoryBase = [
  { id: 'hearing-aids', iconName: 'EarAid' },
  { id: 'power', iconName: 'Battery' },
  { id: 'care', iconName: 'Droplet' },
  { id: 'earmoulds', iconName: 'Ear' },
  { id: 'accessories', iconName: 'Accessory' },
]

// Márkák - a /hallokeszulekek kártyák ÉS a márkaoldalak egyetlen forrása.
// image = a kártyán látszó termékfotó; gallery = a márkaoldali galéria (gallery[0] a fő kép + OG-kép),
// az alt szövegek a nyelvi fájl galleryAlts tömbjében, ugyanebben a sorrendben.
export const brandBase = [
  {
    id: 'phonak',
    name: 'Phonak',
    image: '/pic/hallokeszulekek/phonak/phonak1.webp',
    gallery: [
      '/pic/hallokeszulekek/phonak/phonak2.webp',
      '/pic/hallokeszulekek/phonak/phonak3.webp',
      '/pic/hallokeszulekek/phonak/phonak4.webp',
      '/pic/hallokeszulekek/phonak/phonak5.webp',
    ],
  },
  {
    id: 'signia',
    name: 'Signia',
    image: '/pic/hallokeszulekek/signia/signia1.webp',
    gallery: [
      '/pic/hallokeszulekek/signia/signia2.webp',
      '/pic/hallokeszulekek/signia/signia3.webp',
      '/pic/hallokeszulekek/signia/signia4.webp',
      '/pic/hallokeszulekek/signia/signia5.webp',
    ],
  },
  {
    id: 'oticon',
    name: 'Oticon',
    image: '/pic/hallokeszulekek/oticon/oticon1.webp',
    gallery: [
      '/pic/hallokeszulekek/oticon/oticon2.webp',
      '/pic/hallokeszulekek/oticon/oticon3.webp',
      '/pic/hallokeszulekek/oticon/oticon4.webp',
      '/pic/hallokeszulekek/oticon/oticon5.webp',
    ],
  },
  {
    id: 'starkey',
    name: 'Starkey',
    image: '/pic/hallokeszulekek/starkey/starkey1.webp',
    gallery: [
      '/pic/hallokeszulekek/starkey/starkey2.webp',
      '/pic/hallokeszulekek/starkey/starkey3.webp',
      '/pic/hallokeszulekek/starkey/starkey4.webp',
      '/pic/hallokeszulekek/starkey/starkey5.webp',
    ],
  },
]
