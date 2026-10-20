// Az oldal tartalma az Ügyfél Adminból (CMS): a szótár (t) és a tartalom (c) ugyanabban az alakban,
// mint a fájlokból (lib/i18n, lib/content), csak a CMS-ben szerkeszthető mezők értéke jön a CMS-ből.
// Melyik mező hova kerül: lib/cms-schema.js (src útvonal) - a manifest is onnan épül.
// CSAK szerver-komponensből; kliens-komponens propként kapja a neki kellő részt (szöveg + jelölés).
//
//   const { t, c, site, a } = await loadSite(locale)
//   t     szótár (lib/i18n/dictionaries alakú)
//   c     tartalom (getContent alakú)
//   site  alapadatok: phone {display, tel, href}, email, booking {adult, child}, hours, rating,
//         blogLocales (nyelvek, ahol van közzétett cikk - menü, hreflang)
//   a     szerkesztő-jelölések a forrás szerkezetében: <h2 {...a.dict.services.title}>
//         lista: a.text.faqs[i].q, id-s lista: a.text.team[id].role, egész lista: a.text.faqs_list
//         képek: a.img.team[id].img, a.img.journey[n].img, a.img.promo.image, a.img.brands[id].image,
//         a.img.brands[id].gallery[i] - a kép befoglaló elemére (az admin abban cseréli az <img>-et)
//         - látogatónál ártalmatlan data-attribútumok
import { cache } from 'react'
import { getCms } from './cms'
import { CMS_PAGES, getAt, sourceValue, imageHolder, imageAttrPath } from './cms-schema'
import { getDictionary } from './i18n'
import { TEXT, buildContent } from './content'
import { GOOGLE_RATING, WEEK_HOURS } from './constants'

const FIELDS = CMS_PAGES.flatMap((page) =>
  page.sections.flatMap((section) =>
    section.fields.map((f) => ({ ...f, key: `${page.key}.${section.key}.${f.key}`, path: f.src.split('.') }))
  )
)
const IMAGES = CMS_PAGES.flatMap((page) =>
  page.sections.flatMap((section) => (section.images ?? []).map((img) => ({ ...img, key: `${page.key}.${section.key}.${img.key}` })))
)

function setAt(obj, path, value) {
  const last = path.length - 1
  path.slice(0, last).reduce((o, k) => (o[k] ??= {}), obj)[path[last]] = value
}

const cmsAttr = (key, i, f) => ({
  'data-cms': key,
  ...(i != null ? { 'data-cms-i': String(i) } : {}),
  ...(f ? { 'data-cms-f': f } : {}),
})

// Lista-elem CMS-alakból (itemField kulcsok) forrás-alakba (from kulcsok). A CMS-ben még nem létező
// kulcs (új mező, manifest-sync előtt) kimarad → a fájlbeli alapérték marad, nem írja felül üressel.
const toSource = (field, item) =>
  Object.fromEntries(
    field.itemFields.filter((d) => item && d.key in item).map((d) => [d.from ?? d.key, item[d.key] ?? ''])
  )

// Jelölés-fa: nyelvfüggetlen, egyszer épül.
const ATTRS = {}
for (const f of FIELDS) {
  if (f.type !== 'list') {
    setAt(ATTRS, f.path, cmsAttr(f.key))
    continue
  }
  const itemAttrs = (i) => Object.fromEntries(f.itemFields.map((d) => [d.from ?? d.key, cmsAttr(f.key, i, d.key)]))
  setAt(ATTRS, [...f.path.slice(0, -1), `${f.path.at(-1)}_list`], cmsAttr(f.key))
  setAt(
    ATTRS,
    f.path,
    f.ids
      ? Object.fromEntries(f.ids.map((id, i) => [id, itemAttrs(i)]))
      : Array.from({ length: sourceValue(f, 'hu')?.length ?? 0 }, (_, i) => itemAttrs(i))
  )
}

for (const img of IMAGES) setAt(ATTRS, imageAttrPath(img.ref), cmsAttr(img.key))

function readField(cms, f) {
  if (f.type === 'list') return cms.list(f.key)
  return f.lines ? cms.lines(f.key) : cms.text(f.key)
}

// „+36 96 800 911" → tel:+3696800911 (06-os belföldi alakot is elfogad)
function phoneData(display) {
  const digits = display.replace(/[^\d+]/g, '')
  const tel = digits.startsWith('+') ? digits : digits.startsWith('06') ? `+36${digits.slice(2)}` : digits
  return { display, tel, href: `tel:${tel}` }
}

function siteData(k) {
  return {
    phone: phoneData(k.phone),
    email: k.email,
    booking: { adult: k.bookingAdult, child: k.bookingChild },
    // WEEK_HOURS alakban (getDay() szerinti day); zárt nap: open/close = null
    hours: WEEK_HOURS.map((h, i) => {
      const open = k.hours?.[i]?.open?.trim()
      const close = k.hours?.[i]?.close?.trim()
      return { day: h.day, open: open && close ? open : null, close: open && close ? close : null }
    }),
    rating: { count: k.googleCount?.trim() || String(GOOGLE_RATING.count), score: GOOGLE_RATING.score },
  }
}

export const loadSite = cache(async (locale) => {
  const cms = await getCms(locale)
  const roots = { dict: structuredClone(getDictionary(locale)), text: structuredClone(TEXT[locale]), const: {} }

  for (const f of FIELDS) {
    const value = readField(cms, f)
    const [root, ...path] = f.path
    if (f.type !== 'list') {
      setAt(roots[root], path, value)
    } else if (f.ids) {
      const obj = getAt(roots[root], path.join('.')) ?? {}
      f.ids.forEach((id, i) => {
        if (value[i]) obj[id] = { ...obj[id], ...toSource(f, value[i]) }
      })
      setAt(roots[root], path, obj)
    } else {
      const base = getAt(roots[root], path.join('.')) ?? []
      setAt(roots[root], path, value.map((item, i) => ({ ...base[i], ...toSource(f, item) })))
    }
  }

  const c = buildContent(roots.text, locale)
  // Képek: feltöltött (Supabase, WebP) vagy az alap /pic/... kép, alt a nyelv szerint
  for (const img of IMAGES) {
    const value = cms.image(img.key)
    const h = imageHolder(c, img.ref)
    if (!value || !h.obj) continue
    h.obj[h.src] = value.src
    h.obj[h.alt] = value.alt
  }

  const blogLocales = cms.locales.filter((l) => (cms.postCount(l) ?? 0) > 0)
  return { t: roots.dict, c, site: { ...siteData(roots.const), blogLocales }, a: ATTRS }
})
