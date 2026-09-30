'use server'

import { validateCallback } from '../../lib/validation'

// Visszahívás form server action
// Az adatokat SimplyForms fogadja, ő küldi az értesítő emailt.

export async function submitCallback(formData) {
  // FormData → object
  const data = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    note: formData.get('note'),
    website: formData.get('website'), // honeypot
    consent: formData.get('consent'),
  }

  const result = validateCallback(data)

  if (!result.ok) {
    if (result.errors._bot) {
      // Csendben sikert szimulálunk - bot ne kapjon visszajelzést
      return { ok: true }
    }
    return { ok: false, errors: result.errors }
  }

  const { name, phone, note } = result.data

  const saved = await sendToSimplyForms({ name, phone, note })

  if (!saved) {
    return { ok: false, errors: { _server: 'Sikertelen küldés. Kérjük hívjon minket telefonon.' } }
  }

  return { ok: true }
}

// SimplyForms - a form ID publikus, API key nem kell (SIMPLYFORMS_FORM_ID env var)
async function sendToSimplyForms({ name, phone, note }) {
  const formId = process.env.SIMPLYFORMS_FORM_ID
  if (!formId) {
    console.error('[submitCallback] Hiányzó SIMPLYFORMS_FORM_ID')
    return false
  }

  // A kulcsok nevei jelennek meg az értesítő emailben
  const body = new FormData()
  body.append('subject', `ŰRLAPKITÖLTÉS - vissza kell hívni: ${name}`) // email tárgya
  body.append('Név', name)
  body.append('Telefonszám', phone)
  body.append('Megjegyzés', note || '')

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
