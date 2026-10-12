import { loadSite } from '../lib/site'
import { routePath } from '../lib/i18n/routes'
import OnlinePanel from './booking/OnlinePanel'
import CallbackPanel from './booking/CallbackPanel'
import Reveal from './Reveal'

// Server component - csak wrapper.
// OnlinePanel = server, CallbackPanel = client (form state).

export default async function Booking({ locale }) {
  const { t, a } = await loadSite(locale)
  return (
    <section className="block booking" id="idopont">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2 {...a.dict.booking.title}>{t.booking.title}</h2>
          <p {...a.dict.booking.lead}>{t.booking.lead}</p>
        </Reveal>
        <div className="book-grid">
          <OnlinePanel locale={locale} />
          <CallbackPanel t={t.form} a={a.dict.form} locale={locale} privacyHref={routePath('privacy', locale)} />
        </div>
      </div>
    </section>
  )
}
