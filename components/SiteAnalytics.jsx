'use client'
// Vercel Web Analytics oldalmegtekintés-mérés. Az Ügyfél Admin az éles oldalt iframe-ben tölti be
// (Szerkesztés, CTA-előnézet) → keretben nem mérünk, különben minden admin-megnyitás látogatásnak számítana.
// (A függvény-prop miatt kell külön kliens-komponens; az egyedi eseményeket a lib/analytics.js szűri.)
import { Analytics } from '@vercel/analytics/next'

const skipFramed = (event) => (window.self !== window.top ? null : event)

export default function SiteAnalytics() {
  return <Analytics beforeSend={skipFramed} />
}
