'use server'

import { validateCallback } from '../../lib/validation'
import { COMPANY } from '../../lib/constants'

// Visszahívás form server action
// Resend API-t használ az email küldéshez (https://resend.com)
// Setup: töltsd ki .env.local-t a .env.example alapján

export async function submitCallback(formData) {
  // FormData → object
  const data = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    note: formData.get('note'),
    website: formData.get('website'), // honeypot
  }

  const result = validateCallback(data)

  if (!result.ok) {
    if (result.errors._bot) {
      // Csendben sikert szimulálunk — bot ne kapjon visszajelzést
      return { ok: true }
    }
    return { ok: false, errors: result.errors }
  }

  const { name, phone, note } = result.data

  // Email küldés — fejlesztés alatt csak log
  const apiKey = process.env.RESEND_API_KEY
  const notifyEmail = process.env.NOTIFY_EMAIL
  const fromEmail = process.env.FROM_EMAIL

  if (!apiKey || !notifyEmail || !fromEmail) {
    console.warn('[submitCallback] Hiányzó env változó — email küldés kihagyva')
    console.log('[submitCallback] Új visszahívás kérés:', { name, phone, note })
    return { ok: true }
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: notifyEmail,
        subject: `Új visszahívás kérés — ${name}`,
        html: `
          <h2>Új visszahívás kérés</h2>
          <p><strong>Név:</strong> ${escapeHtml(name)}</p>
          <p><strong>Telefon:</strong> <a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></p>
          ${note ? `<p><strong>Megjegyzés:</strong><br>${escapeHtml(note).replace(/\n/g, '<br>')}</p>` : ''}
          <hr>
          <p style="font-size:12px;color:#666;">Küldve: ${COMPANY.brand} ${COMPANY.brandSub} weboldalról</p>
        `,
      }),
    })

    if (!res.ok) {
      const errText = await res.text()
      console.error('[submitCallback] Resend hiba:', res.status, errText)
      return { ok: false, errors: { _server: 'Sikertelen küldés. Kérjük hívjon minket telefonon.' } }
    }

    return { ok: true }
  } catch (err) {
    console.error('[submitCallback] Hiba:', err)
    return { ok: false, errors: { _server: 'Sikertelen küldés. Kérjük hívjon minket telefonon.' } }
  }
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
