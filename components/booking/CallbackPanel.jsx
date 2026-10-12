'use client'
import Link from 'next/link'
import { useCallbackForm } from '../../lib/hooks/useCallbackForm'
import Button from '../Button'
import Reveal from '../Reveal'
import { Check } from '../icons'

// t: a nyelvi szótár form-objektuma (címkék, placeholderek, hibaszövegek) - a Booking adja.
// a: a szerkesztő-jelölések ugyanehhez (lib/site.js; látogatónál ártalmatlan data-attribútumok).
// locale: rejtett mezőként megy a server actionnek (nem magyarnál [DE]/[EN] az értesítő email tárgyában).
export default function CallbackPanel({ t, a = {}, locale, privacyHref }) {
  const { submitted, submitting, error, fieldErrors, handleSubmit } = useCallbackForm(t.errors)

  return (
    <Reveal direction="right" className="book-panel">
      <h3 {...a.title}>{t.title}</h3>
      <p className="small" {...a.lead}>{t.lead}</p>

      {submitted ? (
        <div className="form-success show" role="status" aria-live="polite">
          <span className="check"><Check size={22} stroke="#fff" /></span>
          <span {...a.success}>{t.success}</span>
        </div>
      ) : (
        <form noValidate onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="cf-name">{t.nameLabel}</label>
            <input
              id="cf-name"
              name="name"
              type="text"
              placeholder={t.namePlaceholder}
              required
              autoComplete="name"
              aria-invalid={!!fieldErrors.name}
            />
            {fieldErrors.name && <p className="field-error">{fieldErrors.name}</p>}
          </div>
          <div className="field">
            <label htmlFor="cf-phone">{t.phoneLabel}</label>
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              placeholder={t.phonePlaceholder}
              required
              autoComplete="tel"
              aria-invalid={!!fieldErrors.phone}
            />
            {fieldErrors.phone && <p className="field-error">{fieldErrors.phone}</p>}
          </div>
          <div className="field">
            <label htmlFor="cf-note">{t.noteLabel}</label>
            <textarea
              id="cf-note"
              name="note"
              placeholder={t.notePlaceholder}
              aria-invalid={!!fieldErrors.note}
            />
            {fieldErrors.note && <p className="field-error">{fieldErrors.note}</p>}
          </div>
          {/* Nyelv: a magyar az alapértelmezés, csak nem magyar űrlapnál küldjük */}
          {locale !== 'hu' && <input type="hidden" name="locale" value={locale} />}
          {/* Honeypot anti-spam */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="honeypot"
            aria-hidden="true"
          />
          <div className="field field-checkbox">
            <label htmlFor="cf-consent" className="checkbox-label">
              <input
                id="cf-consent"
                name="consent"
                type="checkbox"
                required
                aria-invalid={!!fieldErrors.consent}
              />
              <span>
                {t.consentBefore}{' '}
                <Link href={privacyHref} target="_blank" rel="noopener noreferrer">
                  {t.consentLink}
                </Link>
                {t.consentAfter}
              </span>
            </label>
            {fieldErrors.consent && <p className="field-error">{fieldErrors.consent}</p>}
          </div>
          {error && <p className="form-error" role="alert">{error}</p>}
          <Button variant="gold" type="submit" fullWidth disabled={submitting}>
            {submitting ? t.submitting : <span {...a.submit}>{t.submit}</span>}
          </Button>
        </form>
      )}
    </Reveal>
  )
}
