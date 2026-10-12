'use client'
import { useState } from 'react'
import { submitCallback } from '../../app/actions/submitCallback'

// Visszahívás form state - server action-höz kötve.
// messages: a nyelvi szótár form.errors objektuma (hibakód → szöveg), a CallbackPanel adja.

export function useCallbackForm(messages) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [fieldErrors, setFieldErrors] = useState({})

  const msg = (code) => messages[code] || messages.unknown

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
        setError(msg(result.errors._server))
      } else if (result.errors) {
        setFieldErrors(Object.fromEntries(Object.entries(result.errors).map(([k, code]) => [k, msg(code)])))
        setError(messages.check_fields)
      } else {
        setError(messages.unknown)
      }
    } catch {
      setError(messages.network)
    } finally {
      setSubmitting(false)
    }
  }

  return { submitted, submitting, error, fieldErrors, handleSubmit }
}
