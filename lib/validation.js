// Form validáció - kézi, zod nélkül (kis form, nincs szükség külön függőségre).
// Szöveg helyett HIBAKÓDOT ad vissza (pl. 'phone_invalid') → a kliens a saját nyelvén jeleníti meg
// (lib/i18n/dictionaries/<nyelv>.js → form.errors).

export function validateCallback(data) {
  const errors = {}

  const name = String(data.name || '').trim()
  const phone = String(data.phone || '').trim()
  const note = String(data.note || '').trim()
  const honeypot = String(data.website || '').trim()
  const consent = data.consent === 'on' || data.consent === true

  // Honeypot - ha kitöltötte, bot
  if (honeypot) {
    return { ok: false, errors: { _bot: true } }
  }

  if (name.length < 2) errors.name = 'name_short'
  if (name.length > 100) errors.name = 'name_long'

  // Telefonszám: 8-15 számjegy, +-, szóköz, kötőjel megengedett (külföldi szám is)
  const digits = phone.replace(/[^\d]/g, '')
  if (digits.length < 8 || digits.length > 15) {
    errors.phone = 'phone_invalid'
  }

  if (note.length > 500) errors.note = 'note_long'

  if (!consent) errors.consent = 'consent_required'

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors }
  }

  return { ok: true, data: { name, phone, note } }
}
