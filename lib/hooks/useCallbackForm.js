'use client'
import { useState } from 'react'
import { submitCallback } from '../../app/actions/submitCallback'

// Visszahívás form state — server action-höz kötve

export function useCallbackForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [fieldErrors, setFieldErrors] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!e.target.checkValidity()) {
      e.target.reportValidity()
      return
    }
    setSubmitting(true)
    setError(null)
    setFieldErrors({})

    try {
      const formData = new FormData(e.target)
      const result = await submitCallback(formData)

      if (result.ok) {
        setSubmitted(true)
        return
      }

      if (result.errors?._server) {
        setError(result.errors._server)
      } else if (result.errors) {
        setFieldErrors(result.errors)
        setError('Kérjük ellenőrizze a megadott adatokat.')
      } else {
        setError('Ismeretlen hiba. Kérjük próbálja újra.')
      }
    } catch (err) {
      setError(err.message || 'Sikertelen küldés. Kérjük próbálja újra.')
    } finally {
      setSubmitting(false)
    }
  }

  return { submitted, submitting, error, fieldErrors, handleSubmit }
}
