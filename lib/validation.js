// Form validáció — kézi, zod nélkül (kis form, nincs szükség külön függőségre)

export function validateCallback(data) {
  const errors = {}

  const name = String(data.name || '').trim()
  const phone = String(data.phone || '').trim()
  const note = String(data.note || '').trim()
  const honeypot = String(data.website || '').trim()

  // Honeypot — ha kitöltötte, bot
  if (honeypot) {
    return { ok: false, errors: { _bot: true } }
  }

  if (name.length < 2) errors.name = 'Adja meg a nevét.'
  if (name.length > 100) errors.name = 'A név túl hosszú.'

  // HU phone: legalább 8 számjegy, +-, szóköz, kötőjel megengedett
  const digits = phone.replace(/[^\d]/g, '')
  if (digits.length < 8 || digits.length > 15) {
    errors.phone = 'Adjon meg egy érvényes telefonszámot.'
  }

  if (note.length > 500) errors.note = 'A megjegyzés túl hosszú (max 500 karakter).'

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors }
  }

  return { ok: true, data: { name, phone, note } }
}
