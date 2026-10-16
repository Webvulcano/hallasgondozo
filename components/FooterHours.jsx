'use client'
import { useSyncExternalStore } from 'react'

// A footer „Ma" jelölése és évszáma a látogató böngészőjében, budapesti idő szerint.
// Az oldal statikus és napokig a cache-ből megy ki: a szerver a build napját / évét látná.
// A szerver-HTML-ben nincs kiemelés (az évszám a build éve), a böngésző a betöltés után
// írja be a valódit → nincs hydration-eltérés.

const WEEKDAY = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }
const dayFmt = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Budapest', weekday: 'short' })
const yearFmt = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Budapest', year: 'numeric' })
const budapestDay = () => WEEKDAY[dayFmt.format(new Date())]
const budapestYear = () => Number(yearFmt.format(new Date()))
const noSubscribe = () => () => {}
const onServer = () => null

// Props: hours = [{ day, open, close }] (getDay() szerinti day), days = napnevek, todayLabel, closed,
// attr = szerkesztő-jelölés a listára
export default function FooterHours({ hours, days, todayLabel, closed, attr }) {
  const today = useSyncExternalStore(noSubscribe, budapestDay, onServer)
  return (
    <ul className="foot-hours-list" {...attr}>
      {hours.map((d) => {
        const isToday = d.day === today
        return (
          <li key={d.day} className={isToday ? 'is-today' : undefined}>
            <span>{isToday ? todayLabel : days[d.day]}</span>
            <span>{d.open ? `${d.open} - ${d.close}` : closed}</span>
          </li>
        )
      })}
    </ul>
  )
}

// Props: fallback = a szerver (build) éve, amíg a böngésző át nem veszi
export function CurrentYear({ fallback }) {
  return useSyncExternalStore(noSubscribe, budapestYear, onServer) ?? fallback
}
