// CMS-séma: mit szerkeszthet az ügyfél az Ügyfél Adminban (projektek/analytics-site), és melyik
// meglévő szövegből jön az alapértéke. EGY forrás:
//   - cms.manifest.js ebből építi a manifestet (alapérték = a nyelvi fájlok mostani szövege),
//   - futásidőben (F3) ugyanezzel a térképpel kerülnek vissza a CMS-értékek a szótárba / tartalomba.
//
// Mező: { key, label, type, src, ... }. src = útvonal a forrásban:
//   dict.*   → lib/i18n/dictionaries/<nyelv>.js
//   text.*   → lib/content/locales/<nyelv>/* (TEXT, lib/content/index.js)
//   const.*  → nyelvfüggetlen alapadat (lib/constants.js) - translatable: false
// ids: az objektum (id → elem) listaként, az alap-fájl sorrendjében (pl. csapat, szolgáltatások).
// Lista-elem mezőnél from: a forrás-kulcs, ha eltér (CMS-kulcs csak a-z0-9_ lehet).
//
// ⚠️ A CMS-kulcsok (oldal.szekció.mező) VÉGLEGESEK: átnevezés = új mező, a régi archiválódik
// (a benne mentett ügyfél-szöveg nem jön át). Új mező / szekció hozzáadása bármikor OK.
// Relatív importok: a manifestet az admin sync-scriptje (tsx) is betölti, ott nincs @/ alias.

import hu from './i18n/dictionaries/hu.js'
import en from './i18n/dictionaries/en.js'
import de from './i18n/dictionaries/de.js'
import { TEXT, getContent } from './content/index.js'
import { serviceBase } from './content/services.js'
import { teamBase } from './content/team.js'
import { testimonialBase } from './content/testimonials.js'
import { categoryBase, brandBase } from './content/devices.js'
import { journeyBase } from './content/journey.js'
import { routePath } from './i18n/routes.js'
import { PHONE, EMAIL, BOOKING_URL, BOOKING_URL_CHILD, GOOGLE_RATING, WEEK_HOURS } from './constants.js'

export const CMS_LOCALES = [
  { code: 'hu', label: 'Magyar' },
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
]

const DICTS = { hu, en, de }

// Nyelvfüggetlen alapadatok (a CMS-ben „minden nyelven ugyanaz").
const CONST = {
  phone: PHONE.display,
  email: EMAIL,
  bookingAdult: BOOKING_URL,
  bookingChild: BOOKING_URL_CHILD,
  googleCount: String(GOOGLE_RATING.count),
  // Hétfőtől vasárnapig (WEEK_HOURS sorrendje); zárt nap = üres.
  hours: WEEK_HOURS.map((h) => ({ open: h.open ?? '', close: h.close ?? '' })),
}

const sources = (locale) => ({ dict: DICTS[locale], text: TEXT[locale], const: CONST })

export function getAt(obj, path) {
  return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj)
}

// ---- Mező-segédek ----------------------------------------------------------------------------
const text = (key, label, src, o = {}) => ({ key, label, type: 'text', src, ...o })
const area = (key, label, src, o = {}) => ({ key, label, type: 'textarea', src, ...o })
const lines = (key, label, src, o = {}) => ({ key, label, type: 'textarea', lines: true, src, ...o })
const url = (key, label, src, o = {}) => ({ key, label, type: 'url', src, ...o })
const list = (key, label, src, itemFields, o = {}) => ({ key, label, type: 'list', src, itemFields, ...o })
const item = (key, label, type = 'text', o = {}) => ({ key, label, type, ...o })
const fixed = { translatable: false }
const seo = { hidden: true } // csak az „Összes mező" fülön (nem kattintható az oldalon)

// Szekció-fejléc (felirat a cím felett / cím / bevezető) a szótár egy blokkjából.
const heading = (dictKey, { eyebrow = true, lead = true } = {}) => [
  ...(eyebrow ? [text('felirat', 'Felirat a cím felett', `dict.${dictKey}.eyebrow`, { maxLength: 60 })] : []),
  text('cim', 'Cím', `dict.${dictKey}.title`, { maxLength: 120 }),
  ...(lead ? [area('bevezeto', 'Bevezető szöveg', `dict.${dictKey}.lead`, { maxLength: 400 })] : []),
]

// ---- Képhelyek ------------------------------------------------------------------------------
// ref: hol van a kép a tartalomban (getContent alak). coll = gyűjtemény (tömb: id / idKey szerint,
// objektum: pl. promo), src / alt = mezőnevek; gallery = galéria-index (gallery[i].src / .alt).
// A kép minden nyelven ugyanaz, az alt szöveg nyelvenként. Méret-keret = a mostani képeké (900×1600).
const image = (key, label, ref, o = {}) => ({ key, label, ref, maxWidth: 900, maxHeight: 1600, ...o })

export function imageHolder(content, ref) {
  const coll = content[ref.coll]
  const item = Array.isArray(coll) ? coll.find((x) => x[ref.idKey ?? 'id'] === ref.id) : coll
  if (ref.gallery != null) return { obj: item?.gallery?.[ref.gallery], src: 'src', alt: 'alt' }
  return { obj: item, src: ref.src, alt: ref.alt }
}

// Szerkesztő-jelölés helye: a.img.<coll>[.<id>].<mező> (galéria: a.img.brands.<id>.gallery[i])
export const imageAttrPath = (ref) => [
  'img',
  ref.coll,
  ...(ref.id != null ? [String(ref.id)] : []),
  ...(ref.gallery != null ? ['gallery', String(ref.gallery)] : [ref.src]),
]

// Alapérték a manifesthez: a mostani kép + alt nyelvenként (alt nélkül a címe, pl. lépés-kép).
export function imageDefault(ref) {
  const pick = (code) => {
    const h = imageHolder(getContent(code), ref)
    return h.obj?.[h.alt] || h.obj?.title || ''
  }
  const h = imageHolder(getContent('hu'), ref)
  return { src: h.obj?.[h.src], alt: Object.fromEntries(CMS_LOCALES.map(({ code }) => [code, pick(code)])) }
}

const PLACEHOLDER_HELP = 'A {kapcsos} részeket hagyd benne: oda automatikusan kerül az érték.'

// „Lépésről lépésre": lépésenként cím, (ha van) leírás, kiemelés és al-lépések - a magyar szerkezet szerint.
function journeyFields() {
  return journeyBase.flatMap(({ n }) => {
    const step = TEXT.hu.journey[n]
    const src = `text.journey.${n}`
    return [
      text(`l${n}_cim`, `${n}. lépés - cím`, `${src}.title`, { maxLength: 80 }),
      ...(step.desc ? [area(`l${n}_leiras`, `${n}. lépés - leírás`, `${src}.desc`, { maxLength: 600 })] : []),
      ...(step.highlight ? [text(`l${n}_kiemeles`, `${n}. lépés - kiemelés (címke)`, `${src}.highlight`, { maxLength: 40 })] : []),
      ...(step.sub
        ? [
            list(`l${n}_reszek`, `${n}. lépés - részletek`, `${src}.sub`, [
              item('title', 'Cím (lehet üres)', 'text', { maxLength: 80 }),
              item('desc', 'Leírás', 'textarea', { maxLength: 600 }),
            ]),
          ]
        : []),
    ]
  })
}

// Márkaoldal (Phonak, Signia, Oticon, Starkey) - útvonal nyelvenként a lokalizált sluggal.
function brandPage({ id, name }) {
  const src = `text.brands.${id}`
  return {
    key: id,
    label: `${name} márkaoldal`,
    path: Object.fromEntries(CMS_LOCALES.map(({ code }) => [code, routePath('brand', code, TEXT[code].brands[id].slug)])),
    sections: [
      {
        key: 'seo',
        label: 'Google-megjelenés',
        fields: [area('leiras', 'Leírás a Google-találatban (max ~155 karakter)', `${src}.metaDescription`, { maxLength: 160, ...seo })],
      },
      {
        key: 'fejlec',
        label: 'Oldal teteje',
        fields: [
          text('nev', 'Főcím (termékcsalád neve)', `${src}.productName`, { maxLength: 60 }),
          area('bevezeto', 'Bevezető', `${src}.lead`, { maxLength: 600 }),
          area('rovid', 'Rövid leírás (a „Ezt is érdemes megnézni" kártyán)', `${src}.desc`, { maxLength: 240 }),
        ],
      },
      {
        key: 'reszletek',
        label: 'Előnyök és leírás',
        fields: [
          lines('elonyok', 'Előnyök (soronként egy)', `${src}.benefits`, { maxLength: 2000 }),
          lines('leiras', 'Leírás (soronként egy bekezdés)', `${src}.description`, { maxLength: 4000 }),
        ],
      },
      {
        key: 'kepek',
        label: 'Képek',
        fields: [],
        images: [
          image('kartya', 'Termékfotó a márkakártyán', { coll: 'brands', id, src: 'image', alt: 'imageAlt' }, { maxWidth: 800, maxHeight: 800 }),
          ...[0, 1, 2, 3].map((i) =>
            image(`galeria_${i + 1}`, `Galéria ${i + 1}. kép${i === 0 ? ' (fő kép - megosztáskor is ez látszik)' : ''}`, { coll: 'brands', id, gallery: i })
          ),
        ],
      },
      {
        key: 'gyik',
        label: 'Gyakori kérdések',
        fields: [
          list('kerdesek', 'Kérdések és válaszok', `${src}.faq`, [
            item('q', 'Kérdés', 'text', { maxLength: 160 }),
            item('a', 'Válasz', 'textarea', { maxLength: 800 }),
          ]),
        ],
      },
    ],
  }
}

const localePaths = (route) => Object.fromEntries(CMS_LOCALES.map(({ code }) => [code, routePath(route, code)]))

export const CMS_PAGES = [
  {
    key: 'kozos',
    label: 'Közös elemek (fejléc, lábléc, alapadatok)',
    path: localePaths('home'),
    sections: [
      {
        key: 'alapadatok',
        label: 'Alapadatok (minden nyelven ugyanaz)',
        fields: [
          text('telefon', 'Telefonszám', 'const.phone', { ...fixed, maxLength: 30, help: 'Így jelenik meg az oldalon; a hívható szám ebből készül.' }),
          text('email', 'E-mail cím', 'const.email', { ...fixed, maxLength: 80 }),
          url('foglalas_felnott', 'Online foglalás link - felnőtt (medicall)', 'const.bookingAdult', fixed),
          url('foglalas_gyerek', 'Online foglalás link - gyermek (medicall)', 'const.bookingChild', fixed),
          text('google_ertekelesek', 'Google-értékelések száma', 'const.googleCount', { ...fixed, maxLength: 6 }),
          list(
            'nyitvatartas',
            'Nyitvatartás (hétfőtől vasárnapig)',
            'const.hours',
            [item('open', 'Nyitás (pl. 8:00)', 'text', { maxLength: 5 }), item('close', 'Zárás (pl. 16:00)', 'text', { maxLength: 5 })],
            { ...fixed, help: 'Zárt napon hagyd üresen mindkettőt. A Google-nek szóló adat is ebből frissül.' }
          ),
        ],
      },
      {
        key: 'menu',
        label: 'Fejléc (menü)',
        fields: [
          text('fooldal', 'Menüpont: Főoldal', 'dict.nav.home', { maxLength: 24 }),
          text('termekek', 'Menüpont: Termékek', 'dict.nav.products', { maxLength: 24 }),
          text('kapcsolat', 'Menüpont: Kapcsolat', 'dict.nav.contact', { maxLength: 24 }),
          text('blog', 'Menüpont: Blog', 'dict.nav.blog', { maxLength: 24 }),
          text('gomb', 'Foglalás gomb (asztali)', 'dict.nav.ctaFull', { maxLength: 40 }),
          text('gomb_rovid', 'Foglalás gomb (mobil, rövid)', 'dict.nav.ctaShort', { maxLength: 24 }),
        ],
      },
      {
        key: 'gombok',
        label: 'Foglalás gombok feliratai',
        fields: [
          text('vizsgalat', 'Gomb: vizsgálat foglalása', 'dict.cta.bookExam', { maxLength: 50 }),
          text('hallasvizsgalat', 'Gomb: hallásvizsgálat foglalása', 'dict.cta.bookHearingTest', { maxLength: 50 }),
          text('idopont', 'Gomb: időpont foglalása', 'dict.cta.bookAppointment', { maxLength: 50 }),
        ],
      },
      {
        key: 'idopont',
        label: 'Időpontfoglalás és visszahívás',
        fields: [
          text('cim', 'Cím', 'dict.booking.title', { maxLength: 120 }),
          area('bevezeto', 'Bevezető', 'dict.booking.lead', { maxLength: 300 }),
          text('online_cim', 'Online foglalás - cím', 'dict.booking.onlineTitle', { maxLength: 80 }),
          area('online_szoveg', 'Online foglalás - szöveg', 'dict.booking.onlineLead', { maxLength: 200 }),
          text('felnott', 'Gomb: felnőtt vizsgálat', 'dict.booking.adult', { maxLength: 40 }),
          text('gyerek', 'Gomb: gyermek vizsgálat', 'dict.booking.child', { maxLength: 40 }),
          text('telefon_elotag', 'Telefonszám előtti szöveg', 'dict.booking.phonePrefix', { maxLength: 40 }),
          text('urlap_cim', 'Visszahívás - cím', 'dict.form.title', { maxLength: 80 }),
          area('urlap_szoveg', 'Visszahívás - szöveg', 'dict.form.lead', { maxLength: 200 }),
          text('urlap_gomb', 'Visszahívás - gomb', 'dict.form.submit', { maxLength: 40 }),
          area('urlap_koszono', 'Visszahívás - köszönő üzenet', 'dict.form.success', { maxLength: 200 }),
        ],
      },
      {
        key: 'lablec',
        label: 'Lábléc',
        fields: [
          text('elerhetoseg', 'Oszlopcím: elérhetőség', 'dict.footer.contact', { maxLength: 40 }),
          text('nyitvatartas', 'Oszlopcím: nyitvatartás', 'dict.footer.hours', { maxLength: 40 }),
          text('foglalas', 'Foglalás gomb', 'dict.footer.book', { maxLength: 40 }),
        ],
      },
      {
        key: 'markaoldal',
        label: 'Márkaoldalak közös szövegei',
        fields: [
          text('vissza', 'Vissza link', 'dict.product.back', { maxLength: 50 }),
          text('kovetkezo', '„Következő márka" felirat', 'dict.product.nextLabel', { maxLength: 50 }),
          text('ful_elonyok', 'Fül: Előnyök', 'dict.product.tabBenefits', { maxLength: 30 }),
          text('ful_leiras', 'Fül: Leírás', 'dict.product.tabDescription', { maxLength: 30 }),
          text('tobbi_felirat', 'További márkák - felirat', 'dict.product.relatedEyebrow', { maxLength: 60 }),
          text('tobbi_cim', 'További márkák - cím', 'dict.product.relatedTitle', { maxLength: 100 }),
          text('cta_cim', 'Alsó felhívás - cím', 'dict.product.ctaTitle', { maxLength: 100 }),
          area('cta_szoveg', 'Alsó felhívás - szöveg', 'dict.product.ctaLead', { maxLength: 300 }),
          lines('bizalom', 'Bizalmi sor (soronként egy)', 'dict.product.trust', { maxLength: 400 }),
        ],
      },
    ],
  },
  {
    key: 'fooldal',
    label: 'Főoldal',
    path: localePaths('home'),
    sections: [
      {
        key: 'seo',
        label: 'Google-megjelenés',
        fields: [
          text('cim', 'Oldal címe (Google, böngészőfül)', 'dict.meta.siteTitle', { maxLength: 70, ...seo }),
          area('leiras', 'Leírás a Google-találatban', 'dict.meta.siteDescription', { maxLength: 170, ...seo, help: `${PLACEHOLDER_HELP} ({count} = értékelések száma)` }),
        ],
      },
      { key: 'nyito', label: 'Nyitó rész', fields: [text('cim', 'Főcím', 'dict.hero.title', { maxLength: 90 })] },
      {
        key: 'szolgaltatasok',
        label: 'Szolgáltatások',
        fields: [
          ...heading('services'),
          list('kartyak', 'Kártyák', 'text.services', [item('title', 'Cím', 'text', { maxLength: 60 }), item('desc', 'Szöveg', 'textarea', { maxLength: 200 })], {
            ids: serviceBase.map((s) => s.id),
          }),
          lines('bizalom', 'Pipás sor (soronként egy)', 'text.servicesTrust', { maxLength: 300 }),
        ],
      },
      {
        key: 'csapat',
        label: 'Csapat',
        fields: [
          ...heading('team', { lead: false }),
          list('tagok', 'Csapattagok (a név nem fordul)', 'text.team', [item('role', 'Szerepkör', 'text', { maxLength: 90 }), item('desc', 'Bemutatkozás', 'textarea', { maxLength: 300 })], {
            ids: teamBase.map((m) => m.id),
          }),
        ],
        images: teamBase.map((m) =>
          image(`foto_${m.id.replace(/-/g, '_')}`, `Portré - ${m.name}`, { coll: 'team', id: m.id, src: 'img', alt: 'imgAlt' })
        ),
      },
      { key: 'partnerek', label: 'Egészségpénztárak', fields: [text('cim', 'Cím', 'dict.partners.title', { maxLength: 80 })] },
      {
        key: 'folyamat',
        label: 'Lépésről lépésre',
        fields: [
          ...heading('journey'),
          text('gomb', 'Gomb', 'dict.journey.cta', { maxLength: 50 }),
          area('google_leiras', 'Összefoglaló a Google-nek (HowTo)', 'dict.journey.howToDescription', { maxLength: 300, ...seo }),
          ...journeyFields(),
        ],
        images: journeyBase.map(({ n }) =>
          image(`l${n}_kep`, `${n}. lépés - kép`, { coll: 'journey', id: n, idKey: 'n', src: 'img', alt: 'imgAlt' })
        ),
      },
      {
        key: 'velemenyek',
        label: 'Vélemények',
        fields: [
          ...heading('testimonials', { lead: false }),
          text('ertekeles', 'Értékelés-sor', 'dict.testimonials.rating', { maxLength: 160, help: `${PLACEHOLDER_HELP} ({count} = értékelések száma, {score} = csillag)` }),
          text('forditas_jelzes', 'Jelzés, hogy a vélemények fordítások (csak EN/DE)', 'dict.testimonials.translatedNote', { maxLength: 160 }),
          text('osszes', 'Gomb: összes értékelés', 'dict.testimonials.allReviews', { maxLength: 60 }),
          list('idezetek', 'Vélemények (a név nem fordul)', 'text.testimonials', [item('quote', 'Vélemény', 'textarea', { maxLength: 800 })], {
            ids: testimonialBase.map((r) => r.id),
          }),
        ],
      },
      {
        key: 'gyik',
        label: 'Gyakori kérdések',
        fields: [
          ...heading('faq'),
          list('kerdesek', 'Kérdések és válaszok (az első 6 látszik alapból)', 'text.faqs', [
            item('q', 'Kérdés', 'text', { maxLength: 160 }),
            item('a', 'Válasz', 'textarea', { maxLength: 1000 }),
          ]),
        ],
      },
      {
        key: 'promo',
        label: 'Felugró ajánlat',
        fields: [
          text('cimke', 'Címke', 'text.promo.tag', { maxLength: 40 }),
          text('cim', 'Cím', 'text.promo.title', { maxLength: 80 }),
          area('szoveg', 'Szöveg', 'text.promo.text', { maxLength: 300 }),
          lines('pontok', 'Pipás pontok (soronként egy)', 'text.promo.features', { maxLength: 300 }),
          text('gomb', 'Gomb', 'text.promo.cta', { maxLength: 50 }),
          text('elutasitas', 'Elutasító link', 'text.promo.dismiss', { maxLength: 50 }),
        ],
        images: [image('kep', 'Kép', { coll: 'promo', src: 'image', alt: 'imageAlt' })],
      },
    ],
  },
  {
    key: 'keszulekek',
    label: 'Hallókészülékek',
    path: localePaths('devices'),
    sections: [
      {
        key: 'seo',
        label: 'Google-megjelenés',
        fields: [
          text('cim', 'Oldal címe (Google, böngészőfül)', 'dict.meta.devicesTitle', { maxLength: 70, ...seo }),
          area('leiras', 'Leírás a Google-találatban', 'dict.meta.devicesDescription', { maxLength: 170, ...seo }),
        ],
      },
      {
        key: 'fejlec',
        label: 'Oldal teteje',
        fields: [
          text('felirat', 'Felirat a cím felett', 'dict.devices.eyebrow', { maxLength: 60 }),
          text('cim', 'Főcím', 'dict.devices.title', { maxLength: 90 }),
          text('kartya_link', 'Márkakártya link', 'dict.devices.more', { maxLength: 30 }),
        ],
      },
      {
        key: 'kategoriak',
        label: 'Termékkínálat',
        fields: [
          text('felirat', 'Felirat a cím felett', 'dict.devices.catEyebrow', { maxLength: 60 }),
          text('cim', 'Cím', 'dict.devices.catTitle', { maxLength: 120 }),
          area('bevezeto', 'Bevezető', 'dict.devices.catLead', { maxLength: 300 }),
          list(
            'kartyak',
            'Kategóriák',
            'text.categories',
            [
              item('title', 'Cím', 'text', { maxLength: 60 }),
              item('desc', 'Szöveg (asztali)', 'textarea', { maxLength: 200 }),
              item('desc_short', 'Rövid szöveg (mobil)', 'text', { maxLength: 60, from: 'descShort' }),
            ],
            { ids: categoryBase.map((c) => c.id) }
          ),
        ],
      },
      {
        key: 'felhivas',
        label: 'Alsó felhívás',
        fields: [
          text('cim', 'Cím', 'dict.devices.ctaTitle', { maxLength: 100 }),
          area('szoveg', 'Szöveg', 'dict.devices.ctaLead', { maxLength: 300 }),
        ],
      },
    ],
  },
  ...brandBase.map(brandPage),
  {
    key: 'blog',
    label: 'Blog',
    path: localePaths('blog'),
    sections: [
      {
        key: 'seo',
        label: 'Google-megjelenés',
        fields: [
          text('cim', 'Oldal címe (Google, böngészőfül)', 'dict.meta.blogTitle', { maxLength: 70, ...seo }),
          area('leiras', 'Leírás a Google-találatban', 'dict.meta.blogDescription', { maxLength: 170, ...seo }),
        ],
      },
      {
        key: 'fejlec',
        label: 'Oldal teteje',
        fields: [text('cim', 'Főcím', 'dict.blog.title', { maxLength: 60 }), area('bevezeto', 'Bevezető', 'dict.blog.lead', { maxLength: 300 })],
      },
      {
        key: 'cikk_alja',
        label: 'Felhívás a cikkek alján',
        fields: [text('cim', 'Cím', 'dict.blog.ctaTitle', { maxLength: 100 }), area('szoveg', 'Szöveg', 'dict.blog.ctaLead', { maxLength: 300 })],
      },
    ],
  },
]

// Egy mező alapértéke a forrásból, a CMS-nek megfelelő alakban (lista: tömb; ids: id-sorrendben).
export function sourceValue(field, locale) {
  const raw = getAt(sources(locale), field.src)
  if (raw == null) return undefined
  if (field.type !== 'list') return raw
  const items = field.ids ? field.ids.map((id) => raw[id] ?? {}) : raw
  return items.map((it) => Object.fromEntries(field.itemFields.map((f) => [f.key, it?.[f.from ?? f.key] ?? ''])))
}
