// ENGLISH Privacy Notice - translation of the Hungarian version (lib/content/locales/hu/privacy.jsx, 2026-10-20).
// The Hungarian version is legally binding (clause at the bottom - keep it). Covers the WEBSITE only.
// Keep EFFECTIVE in sync with the Hungarian file.
// PrivacyView (components/views) provides the frame and the back link.
import { COMPANY, EMAIL, PHONE, LEGAL } from '../../../constants'

const EFFECTIVE = '20 October 2026'

const h2 = { fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }
const ul = { paddingLeft: '20px', marginBottom: '12px' }
const H2 = ({ children }) => <h2 style={h2}>{children}</h2>

export default function PrivacyBody() {
  return (
    <>
      <h1 style={{ fontSize: 'var(--fs-section)', marginBottom: '20px' }}>Privacy Notice</h1>
      <p style={{ color: 'var(--ink-soft)', marginBottom: '32px' }}>Effective from {EFFECTIVE}</p>

      <p>
        This notice explains how we process personal data when you use our website (call-back form, operation
        of the website, external links). Data processing in our practice - during examinations and hearing
        aid care - is covered by a separate notice available at the practice.
      </p>

      <H2>1. Data controller</H2>
      <p>
        {LEGAL.fullName} ({LEGAL.shortName})<br />
        Registered office: {LEGAL.seat}<br />
        Company reg. no.: {LEGAL.regNumber} · Tax no.: {LEGAL.taxId}<br />
        Shop: {COMPANY.fullName}, {COMPANY.address}<br />
        Phone: {PHONE.display} · Email: {EMAIL}
      </p>
      <p>For data protection questions, please contact us at the email address or phone number above.</p>

      <H2>2. Call-back form</H2>
      <ul style={ul}>
        <li><strong>Data:</strong> name, phone number, comment (optional).</li>
        <li><strong>Purpose:</strong> calling you back, arranging an appointment, answering your question.</li>
        <li>
          <strong>Legal basis:</strong> your consent (GDPR Art. 6(1)(a)), given by ticking the checkbox when
          submitting the form. You may withdraw your consent at any time; this does not affect the
          lawfulness of processing before the withdrawal.
        </li>
        <li>
          <strong>Retention:</strong> as long as needed to call you back and handle your enquiry, or until
          you withdraw your consent; after that we delete it.
        </li>
        <li>
          <strong>Providing data</strong> is voluntary, but without a name and phone number we cannot call
          you back.
        </li>
      </ul>
      <p>
        <strong>Please do not enter health data in the comment field</strong> (e.g. a diagnosis or detailed
        symptoms). We discuss these during the personal examination.
      </p>

      <H2>3. Operation of the website (hosting, logs)</H2>
      <p>
        When you open the website, the hosting provider's system automatically records the technical data
        needed for operation: IP address, time of the request, address of the page, browser and device type.
        We process this data to keep the website secure and to detect errors and abuse, based on our
        legitimate interest (GDPR Art. 6(1)(f)). The hosting provider's system keeps logs for as long as
        technically necessary and then deletes them automatically. We do not use this data to
        identify visitors or to build profiles.
      </p>
      <p>
        Some images on the website (e.g. blog images) are loaded by your browser from the storage of our
        content management system; in this case your IP address and browser data also reach this provider
        (see section 5).
      </p>

      <H2>4. Cookies and browser storage</H2>
      <p>
        The website <strong>does not use</strong> tracking, analytics or advertising cookies. We measure
        traffic with cookie-free, aggregated statistics (Vercel Web Analytics): the page visited, the
        referring page, the country, and the browser, operating system and device type are recorded.
        Visitors are not identified: IP addresses are not stored, visits within one day are linked only by
        an irreversible identifier that is renewed daily, and the statistics are available only in
        aggregate. The purpose is to improve the website; the legal basis is our legitimate interest (GDPR
        Art. 6(1)(f)). For convenience features we use your browser's own storage; it contains no personal
        data and is never sent to us:
      </p>
      <ul style={ul}>
        <li><code>erted-promo-seen</code> (until the session ends) - the offer window appears only once per visit.</li>
        <li><code>erted-splash-seen</code> (until the session ends) - the intro animation appears only once.</li>
        <li><code>erted-lang-suggest</code> (until deleted) - if you dismissed the language suggestion, we do not ask again.</li>
      </ul>
      <p>
        You can delete these in your browser settings at any time. Staff who edit the website content
        receive a technical cookie for editing; this does not affect visitors.
      </p>

      <H2>5. Processors and recipients</H2>
      <p>We process data with the help of the following providers, acting on our behalf:</p>
      <ul style={ul}>
        <li>
          <strong>Vercel Inc.</strong> (440 N Barranca Ave #4133, Covina, CA 91723, USA) - website hosting
          and the traffic statistics described in section 4;
          the log data described in section 3, and the submitted form data pass through its systems. Data may
          be transferred to the United States; the transfer is based on the standard contractual clauses
          adopted by the European Commission (GDPR Art. 46).
        </li>
        <li>
          <strong>Supabase Inc.</strong> (supabase.com) - content management system and image storage of the
          website; data is stored in the European Union (Frankfurt). It processes the visitor's IP address
          and browser data when images are loaded.
        </li>
        <li>
          <strong>SimplyForms</strong> (operator: Adam Todt, Czech Republic, simplyforms.app) - receiving the
          form data and forwarding it to us by email. Its servers are in the European Union (Germany). It
          processes technical data of the submission (IP address, browser, referring page) under its own
          privacy rules.
        </li>
        <li>
          <strong>Google Ireland Limited</strong> (Gordon House, Barrow Street, Dublin 4, Ireland; Gmail) -
          email service: receiving and storing messages from the form. Data may be transferred to the United
          States; the transfer is based on the EU-US Data Privacy Framework, under which Google is certified.
        </li>
        <li>
          <strong>The website's developer and maintainer</strong> (Lehel Bognár) - may access the hosting log
          data while operating and troubleshooting the website.
        </li>
      </ul>
      <p>We do not pass data to other third parties, do not sell it and do not use it for advertising.</p>

      <H2>6. External services and links</H2>
      <p>
        <strong>Online booking</strong> takes place in the Medicall (MyMedio) booking system (Medio MedTech
        Zrt.). Data entered when booking is processed by the operator of the booking system and by our
        practice; the notice available on the booking page provides details. Our website only links to the
        booking page and transfers no data to it.
      </p>
      <p>
        The website contains <strong>links</strong> to Facebook, Instagram and Google Maps (no embedded
        content). When you open them, the respective provider's own privacy rules apply.
      </p>

      <H2>7. Your rights</H2>
      <p>Regarding the processing of your data, you have the right to:</p>
      <ul style={ul}>
        <li>request information and access your data (GDPR Art. 15),</li>
        <li>request correction of your data (Art. 16),</li>
        <li>request erasure of your data (Art. 17),</li>
        <li>request restriction of processing (Art. 18),</li>
        <li>receive your data in a machine-readable format or have it transmitted (data portability, Art. 20),</li>
        <li>object to processing based on legitimate interest (Art. 21),</li>
        <li>withdraw your consent at any time (Art. 7(3)).</li>
      </ul>
      <p>
        You can send your request to {EMAIL} or call {PHONE.display}; we reply within one month at the latest.
        No automated decision-making or profiling takes place.
      </p>

      <H2>8. Remedies</H2>
      <p>
        If you feel that our processing infringes your rights, please contact us first - we will try to
        resolve it quickly. You may also lodge a complaint with the supervisory authority:
      </p>
      <p>
        <strong>Hungarian National Authority for Data Protection and Freedom of Information (NAIH)</strong><br />
        H-1055 Budapest, Falk Miksa utca 9-11. · Postal address: H-1363 Budapest, Pf. 9.<br />
        Phone: +36 1 391 1400 · Email: ugyfelszolgalat@naih.hu · naih.hu
      </p>
      <p>
        You may also go to court; at your choice, proceedings may be brought before the regional court
        (törvényszék) of your place of residence or stay. If you live in another EU country, you may also
        contact the data protection authority there.
      </p>

      <H2>9. Data security, changes</H2>
      <p>
        The website is only available over an encrypted (HTTPS) connection, and only authorised staff and
        processors have access to the data. We update this notice when the website or the law changes; the
        current version is always available on this page with its effective date.
      </p>

      <p style={{ marginTop: '40px', color: 'var(--ink-soft)' }}>
        This is a translation. The Hungarian version of this privacy notice is legally binding.
      </p>
    </>
  )
}
