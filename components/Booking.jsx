import { getDictionary } from '../lib/i18n'
import { routePath } from '../lib/i18n/routes'
import OnlinePanel from './booking/OnlinePanel'
import CallbackPanel from './booking/CallbackPanel'
import Reveal from './Reveal'

// Server component - csak wrapper.
// OnlinePanel = server, CallbackPanel = client (form state).

export default function Booking({ locale }) {
  const t = getDictionary(locale)
  return (
    <section className="block booking" id="idopont">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>{t.booking.title}</h2>
          <p>{t.booking.lead}</p>
        </Reveal>
        <div className="book-grid">
          <OnlinePanel locale={locale} />
          <CallbackPanel t={t.form} locale={locale} privacyHref={routePath('privacy', locale)} />
        </div>
      </div>
    </section>
  )
}
