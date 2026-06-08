'use client'
import { useCallbackForm } from '../../lib/hooks/useCallbackForm'
import Button from '../Button'
import Reveal from '../Reveal'
import { Check } from '../icons'

export default function CallbackPanel() {
  const { submitted, submitting, error, fieldErrors, handleSubmit } = useCallbackForm()

  return (
    <Reveal direction="right" className="book-panel">
      <h3>Inkább felhívjuk Önt</h3>
      <p className="small">Adja meg telefonszámát — kollégánk munkaidőben 2 órán belül visszahívja.</p>

      {submitted ? (
        <div className="form-success show" role="status" aria-live="polite">
          <span className="check"><Check size={22} stroke="#fff" /></span>
          Köszönjük! Kollégánk munkaidőben 2 órán belül hívja Önt.
        </div>
      ) : (
        <form noValidate onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="cf-name">Az Ön neve</label>
            <input
              id="cf-name"
              name="name"
              type="text"
              placeholder="Pl. Kovács Mária"
              required
              autoComplete="name"
              aria-invalid={!!fieldErrors.name}
            />
            {fieldErrors.name && <p className="field-error">{fieldErrors.name}</p>}
          </div>
          <div className="field">
            <label htmlFor="cf-phone">Telefonszám</label>
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              placeholder="+36 30 123 4567"
              required
              autoComplete="tel"
              aria-invalid={!!fieldErrors.phone}
            />
            {fieldErrors.phone && <p className="field-error">{fieldErrors.phone}</p>}
          </div>
          <div className="field">
            <label htmlFor="cf-note">Megjegyzés (opcionális)</label>
            <textarea
              id="cf-note"
              name="note"
              placeholder="Pl. mikor hívjuk legszívesebben?"
              aria-invalid={!!fieldErrors.note}
            />
            {fieldErrors.note && <p className="field-error">{fieldErrors.note}</p>}
          </div>
          {/* Honeypot anti-spam */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="honeypot"
            aria-hidden="true"
          />
          {error && <p className="form-error" role="alert">{error}</p>}
          <Button variant="gold" type="submit" fullWidth disabled={submitting}>
            {submitting ? 'Küldés…' : 'Visszahívást kérek'}
          </Button>
        </form>
      )}
    </Reveal>
  )
}
