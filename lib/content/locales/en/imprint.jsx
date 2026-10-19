// ENGLISH Legal Notice - Claude translation of the Hungarian version (2026-10-16). The Hungarian version
// is legally binding (clause at the bottom - keep it). ImprintView (components/views) provides the frame.
import { COMPANY, LEGAL, HOSTING, EMAIL, PHONE } from '../../../constants'

const h2 = { fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }

export default function ImprintBody() {
  return (
    <>
      <h1 style={{ fontSize: 'var(--fs-section)', marginBottom: '32px' }}>Legal notice</h1>

      <h2 style={h2}>Service provider</h2>
      <p>
        <strong>{LEGAL.fullName}</strong> ({LEGAL.shortName})<br />
        Trading name: {COMPANY.fullName}<br />
        Registered office: {LEGAL.seat}<br />
        Shop and practice: {COMPANY.address}<br />
        Company registration number: {LEGAL.regNumber}<br />
        Registry court: Court of Registration of the Győr Regional Court<br />
        Tax number: {LEGAL.taxId}<br />
        Phone: {PHONE.display}<br />
        E-mail: {EMAIL}
      </p>

      <h2 style={h2}>Healthcare activity</h2>
      <p>
        Healthcare services are subject to an operating licence.<br />
        Healthcare provider ID: {LEGAL.healthProviderId}<br />
        Licensed specialties: otorhinolaryngology (ENT), audiology, sale of medical aids (in a dedicated shop).
        {LEGAL.permitNumber && (
          <>
            <br />
            Operating licence no.: {LEGAL.permitNumber}
          </>
        )}
      </p>
      <p>
        Licensing and supervisory authority: {LEGAL.authority.name}<br />
        Contact: {LEGAL.authority.contact}, phone: {LEGAL.authority.phone}, e-mail: {LEGAL.authority.email}
      </p>
      <p>
        Regulated profession: medical doctor - Dr. Gergely Pál Vasvári, ENT and audiology specialist.
        Professional chamber: Hungarian Medical Chamber (mok.hu). Applicable professional rules: Act CLIV
        of 1997 on Health Care and the Code of Ethics of the Hungarian Medical Chamber.
      </p>

      <h2 style={h2}>Hosting provider</h2>
      <p>
        {HOSTING.name}<br />
        {HOSTING.address}<br />
        E-mail: {HOSTING.email} · {HOSTING.web}
      </p>

      <h2 style={h2}>Complaints</h2>
      <p>
        You can submit a complaint by phone, by e-mail or in person at our shop. We investigate every
        complaint and reply in writing within 30 days at the latest.
      </p>
      <p>
        If a consumer complaint cannot be resolved, you may turn to the conciliation board competent for
        your place of residence. The board competent for our registered office: Győr-Moson-Sopron County
        Conciliation Board, 9021 Győr, Szent István út 10/a., phone: +36 96 520 217, e-mail:
        bekelteto.testulet@gymsmkik.hu, bekeltetesgyor.hu.
      </p>
      <p>
        For complaints about healthcare services you may also contact a patients&apos; rights
        representative (Integrated Legal Protection Service, ijsz.hu).
      </p>

      <h2 style={h2}>Reviews</h2>
      <p>
        The patient reviews shown on this website are a selection of the reviews posted on our Google
        business profile. We do not change their content (on the English version they are translated
        from Hungarian) and we abbreviate the reviewers&apos; names. We do not separately verify whether
        a reviewer has used our services. All reviews can be read on Google.
      </p>

      <h2 style={h2}>Copyright</h2>
      <p>
        The texts, photos and logo of this website are protected by copyright; any use without
        permission is prohibited. The hearing aid brands shown are trademarks of their manufacturers.
      </p>

      <p style={{ marginTop: '40px', color: 'var(--ink-soft)' }}>
        This is a translation. The Hungarian version of this legal notice is legally binding.
      </p>
    </>
  )
}
