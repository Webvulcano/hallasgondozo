'use server'

import { validateCallback } from '../../lib/validation'
import { DEFAULT_LOCALE, LOCALE_META, isLocale } from '../../lib/i18n/config'

// Visszahívás form server action
// Az adatokat SimplyForms fogadja, ő küldi az értesítő emailt.
// Hibát KÓDDAL ad vissza (pl. 'send_failed'); a szöveget a kliens a saját nyelvén mutatja.
// Nem magyar űrlapnál (locale mező) az email tárgya elé [DE]/[EN] kerül + „Nyelv" mező →
// a recepció tudja, milyen nyelven kell visszahívni. Az email mezőnevei magyarok (a személyzet olvassa).

export async function submitCallback(formData) {
  // FormData → object
  const data = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    note: formData.get('note'),
    website: formData.get('website'), // honeypot
    consent: formData.get('consent'),
  }
  const rawLocale = formData.get('locale')
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE

  const result = validateCallback(data)

  if (!result.ok) {
    if (result.errors._bot) {
      // Csendben sikert szimulálunk - bot ne kapjon visszajelzést
      return { ok: true }
    }
    return { ok: false, errors: result.errors }
  }

  const { name, phone, note } = result.data

  const saved = await sendToSimplyForms({ name, phone, note, locale })

  if (!saved) {
    return { ok: false, errors: { _server: 'send_failed' } }
  }

  return { ok: true }
}

// SimplyForms - a form ID publikus, API key nem kell (SIMPLYFORMS_FORM_ID env var)
async function sendToSimplyForms({ name, phone, note, locale }) {
  const formId = process.env.SIMPLYFORMS_FORM_ID
  if (!formId) {
    console.error('[submitCallback] Hiányzó SIMPLYFORMS_FORM_ID')
    return false
  }

  // A kulcsok nevei jelennek meg az értesítő emailben
  const foreign = locale !== DEFAULT_LOCALE
  const tag = foreign ? `[${LOCALE_META[locale].short}] ` : ''
  const body = new FormData()
  body.append('subject', `${tag}ŰRLAPKITÖLTÉS - visszahívást kér: ${name}`) // email tárgya
  body.append('Név', name)
  body.append('Telefonszám', phone)
  body.append('Megjegyzés', note || '')
  if (foreign) body.append('Nyelv', `${LOCALE_META[locale].label} - ezen a nyelven kell visszahívni`)

  try {
    const res = await fetch(`https://api.simplyforms.app/v1/forms/${formId}`, { method: 'POST', body })

    if (!res.ok) {
      const errText = await res.text()
      console.error('[submitCallback] SimplyForms hiba:', res.status, errText)
      return false
    }

    return true
  } catch (err) {
    console.error('[submitCallback] SimplyForms hiba:', err)
    return false
  }
}
