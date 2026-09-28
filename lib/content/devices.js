// /keszulekek - termékkategóriák és márka-boxok
import { BOOKING_URL } from '../constants'

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

// ⚠️ TODO - ÁTÍRANDÓ SZÖVEG: a termék-/márkakártyák szövege (title, desc, features)
// placeholder, NEM végleges. Az ügyféltől (ÉRTED Hallásgondozó) kell javaslatokat kérni
// a tényleges márka-pozicionálásra, és aszerint átírni. NE menjen élesbe ellenőrzés nélkül.
//
// Márka-boxok - a Phonak a kiemelt (nyári ajánlat, vissza a főoldali szekcióra),
// a többi márka booking CTA-val. Márka-szintű, valós pozicionálás.
export const brandBoxes = [
  {
    name: 'Phonak',
    tag: 'Kiemelt - nyári ajánlat',
    title: 'Phonak Audéo Sphere',
    desc: 'A legzajosabb helyen is érthetően hall: dedikált AI chip választja szét a beszédet a háttérzajtól.',
    features: [
      'Spheric Speech Clarity - tiszta beszéd zajban is',
      '5 év teljes körű garancia - 2 évvel több az átlagnál',
      'Akár 56 óra üzemidő egyetlen töltéssel',
    ],
    cta: { label: 'Részletek és nyári ár', href: '/#ajanlat' },
    imageAlt: 'Phonak Audéo Sphere hallókészülék',
    image: '/pic/hallokeszulekek/phonak_sphere2.JPG',
  },
  {
    name: 'Signia',
    title: 'Signia - természetes saját hang',
    desc: 'Német prémium márka, amely a saját hangját is természetesen szólaltatja meg - a beszélgetés végig kényelmes és fárasztásmentes marad.',
    features: [
      'A saját hang külön feldolgozása - nem visszhangzik, nem fáraszt',
      'Mozgásérzékelős zajszűrés a forgalmas helyeken is',
      'Diszkrét, kényelmes tölthető kivitel',
    ],
    cta: { label: 'Időpontot foglalok', href: BOOKING_URL },
    imageAlt: 'Tölthető hallókészülék pár töltőtokban',
    image: '/pic/hallokeszulekek/toltheto_par.JPG',
  },
  {
    name: 'Oticon',
    title: 'Oticon - az agy természetes hallása',
    desc: 'Dán márka, amely a teljes hangképet adja vissza, hogy az agy úgy dolgozhasson, ahogy megszokta - kevesebb erőfeszítés, jobb megértés.',
    features: [
      'Mély neurális háló, valós hangokon tanítva',
      'Teljes, 360°-os hangtér - nem csak a szemből jövő beszéd',
      'BrainHearing - kevésbé fárasztó odafigyelés',
    ],
    cta: { label: 'Időpontot foglalok', href: BOOKING_URL },
    imageAlt: 'Fül mögött viselt, diszkrét hallókészülék közelről',
    image: '/pic/hallokeszulekek/bte_keszulek.JPG',
  },
  {
    name: 'Starkey',
    title: 'Starkey - hallás és egészség egyben',
    desc: 'Amerikai márka, amely a tiszta halláson túl az egészségét is figyeli - mozgás, esés és aktivitás, egyetlen készülékben.',
    features: [
      'Beépített mesterséges intelligencia és egészség-érzékelők',
      'Esésérzékelés és aktivitás-követés',
      'Kényelmi extrák, például élő fordítás',
    ],
    cta: { label: 'Időpontot foglalok', href: BOOKING_URL },
    imageAlt: 'Starkey fülbe helyezhető hallókészülék viselés közben',
    image: '/pic/hallokeszulekek/starkey_fulben.JPG',
  },
]
