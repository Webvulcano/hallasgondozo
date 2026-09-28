'use server'

import { validateCallback } from '../../lib/validation'

// Visszahívás form server action
// Az adatok Airtable-be mentődnek; az értesítő emailt Airtable automation küldi Gmailen keresztül.

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

  const saved = await saveToAirtable({ name, phone, note })

  if (!saved) {
    return { ok: false, errors: { _server: 'Sikertelen küldés. Kérjük hívjon minket telefonon.' } }
  }

  return { ok: true }
}

// Airtable - "Hallasgondozó" base, "űrlap - weboldal" tábla
const AIRTABLE_BASE_ID = 'appyWkgf1zGGSUCGa'
const AIRTABLE_TABLE_ID = 'tbla3a7TBqiEHzxun'

async function saveToAirtable({ name, phone, note }) {
  const apiKey = process.env.AIRTABLE_API_KEY
  if (!apiKey) {
    console.warn('[submitCallback] Hiányzó AIRTABLE_API_KEY - Airtable mentés kihagyva')
    console.log('[submitCallback] Új visszahívás kérés:', { name, phone, note })
    return true
  }

  try {
    const res = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            Név: name,
            Telefonszám: phone,
            Megjegyzés: note || '',
          },
        }),
      }
    )

    if (!res.ok) {
      const errText = await res.text()
      console.error('[submitCallback] Airtable hiba:', res.status, errText)
      return false
    }

    return true
  } catch (err) {
    console.error('[submitCallback] Airtable hiba:', err)
    return false
  }
}
