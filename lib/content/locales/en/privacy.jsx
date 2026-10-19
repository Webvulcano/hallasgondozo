// LIVE 2026-10-13 (Lehel jóváhagyta, anyanyelvi lektorálás nélkül) - ENGLISH Privacy Policy. Claude translation of the Hungarian version (2026-10-12).
// Legal text → must be approved by the client / a lawyer before go-live. The Hungarian version is legally
// binding (clause at the bottom - keep it).
// PrivacyView (components/views) provides the frame and the back link.
import { COMPANY, EMAIL, PHONE } from '../../../constants'

export default function PrivacyBody() {
  return (
    <>
      <h1 style={{ fontSize: 'var(--fs-section)', marginBottom: '20px' }}>Privacy Policy</h1>
      <p style={{ color: 'var(--ink-soft)', marginBottom: '32px' }}>
        Effective from 1 January {new Date().getFullYear()}
      </p>

      <h2 style={{ fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }}>1. Data controller</h2>
      <p>
        {COMPANY.fullName} ({COMPANY.legalName})<br />
        Address: {COMPANY.address}, Hungary<br />
        Phone: {PHONE.display}<br />
        Email: {EMAIL}
      </p>

      <h2 style={{ fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }}>2. Data we process</h2>
      <p>
        The name, phone number and optional comment you enter in the call-back form on this website.
        We use this data solely to call you back.
      </p>

      <h2 style={{ fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }}>3. Purpose and legal basis</h2>
      <p>
        Calling you back and arranging an appointment. The legal basis for processing is your
        voluntary consent (Article 6(1)(a) GDPR), which you give by ticking the checkbox and
        submitting the form.
      </p>

      <h2 style={{ fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }}>4. Data processors</h2>
      <p>
        We process the data entered in the form with the help of the following data processors:
      </p>
      <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
        <li>
          <strong>SimplyForms</strong> (operated by Adam Todt, Czech Republic, simplyforms.app) —
          to receive the data entered in the form and forward it to us by email. The service’s
          servers are located in the European Union (Germany), and the data is not transferred
          outside the EU. SimplyForms does not store the content of the form (name, phone number,
          comment): it deletes it after the email has been delivered. Technical data related to the
          submission (IP address, browser type, referring page) is kept for no more than 90 days.
        </li>
        <li>
          <strong>Google Ireland Limited</strong> (Gordon House, Barrow Street, Dublin 4, Ireland; Gmail) —
          e-mail service: receiving and storing the messages forwarded from the form. Data may also be
          transferred to the United States; the transfer is based on the EU-US Data Privacy Framework,
          under which Google is certified.
        </li>
      </ul>

      <h2 style={{ fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }}>5. Retention period</h2>
      <p>
        The data entered in the form (name, phone number, comment) reaches us by email. We keep it
        for no more than 1 year from receipt, so that we can contact you if we could not reach you
        or if you are interested later; after that we delete it. You can withdraw your consent at
        any time, in which case we delete your data without delay. The technical data processed by
        SimplyForms is kept for no more than 90 days (see section 4).
      </p>

      <h2 style={{ fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }}>6. Your rights</h2>
      <p>
        You can request the correction or deletion of your data, or the restriction of its
        processing, at any time at the email address above. You can also lodge a complaint with the
        Hungarian National Authority for Data Protection and Freedom of Information (NAIH, naih.hu).
      </p>

      <p style={{ marginTop: '40px', color: 'var(--ink-soft)' }}>
        This is a translation. The Hungarian version of this privacy policy is legally binding.
      </p>
    </>
  )
}
