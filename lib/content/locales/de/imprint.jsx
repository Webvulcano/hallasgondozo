// DEUTSCH, Impressum - Claude-Übersetzung der ungarischen Fassung (2026-10-16). Maßgeblich ist die
// ungarische Fassung (Klausel unten - beibehalten). ImprintView (components/views) liefert den Rahmen.
import { COMPANY, LEGAL, HOSTING, EMAIL, PHONE } from '../../../constants'

const h2 = { fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }

export default function ImprintBody() {
  return (
    <>
      <h1 style={{ fontSize: 'var(--fs-section)', marginBottom: '32px' }}>Impressum</h1>

      <h2 style={h2}>Anbieter</h2>
      <p>
        <strong>{LEGAL.fullName}</strong> ({LEGAL.shortName})<br />
        Geschäftsbezeichnung: {COMPANY.fullName}<br />
        Sitz: {LEGAL.seat}<br />
        Geschäft und Praxis: {COMPANY.address}<br />
        Firmenbuchnummer: {LEGAL.regNumber}<br />
        Registergericht: Registergericht des Landgerichts Győr<br />
        Steuernummer: {LEGAL.taxId}<br />
        Telefon: {PHONE.display}<br />
        E-Mail: {EMAIL}
      </p>

      <h2 style={h2}>Gesundheitliche Tätigkeit</h2>
      <p>
        Gesundheitsdienstleistungen sind genehmigungspflichtig (Betriebsgenehmigung).<br />
        Kennnummer als Gesundheitsdienstleister: {LEGAL.healthProviderId}<br />
        Genehmigte Fachgebiete: Hals-Nasen-Ohren-Heilkunde, Audiologie, Vertrieb von Hilfsmitteln
        (im eigenen Geschäft).
        {LEGAL.permitNumber && (
          <>
            <br />
            Betriebsgenehmigung Nr.: {LEGAL.permitNumber}
          </>
        )}
      </p>
      <p>
        Genehmigungs- und Aufsichtsbehörde: {LEGAL.authority.name}<br />
        Kontakt: {LEGAL.authority.contact}, Tel.: {LEGAL.authority.phone}, E-Mail: {LEGAL.authority.email}
      </p>
      <p>
        Reglementierter Beruf: Arzt - Dr. Gergely Pál Vasvári, Facharzt für HNO und Audiologie.
        Berufskammer: Ungarische Ärztekammer (mok.hu). Berufsrechtliche Regelungen: ungarisches
        Gesundheitsgesetz (Gesetz Nr. CLIV von 1997) und der Ethikkodex der Ungarischen Ärztekammer.
      </p>

      <h2 style={h2}>Hosting-Anbieter</h2>
      <p>
        {HOSTING.name}<br />
        {HOSTING.address}<br />
        E-Mail: {HOSTING.email} · {HOSTING.web}
      </p>

      <h2 style={h2}>Beschwerden</h2>
      <p>
        Beschwerden können Sie telefonisch, per E-Mail oder persönlich in unserem Geschäft einreichen.
        Wir prüfen jede Beschwerde und antworten spätestens innerhalb von 30 Tagen schriftlich.
      </p>
      <p>
        Lässt sich eine Verbraucherbeschwerde nicht beilegen, können Sie sich an die für Ihren Wohnort
        zuständige Schlichtungsstelle wenden. Für unseren Sitz zuständig: Schlichtungsstelle des
        Komitats Győr-Moson-Sopron, 9021 Győr, Szent István út 10/a., Tel.: +36 96 520 217, E-Mail:
        bekelteto.testulet@gymsmkik.hu, bekeltetesgyor.hu.
      </p>
      <p>
        Bei Beschwerden zur Gesundheitsversorgung können Sie sich auch an einen Patientenrechtsvertreter
        wenden (Integrierter Rechtsschutzdienst, ijsz.hu).
      </p>

      <h2 style={h2}>Bewertungen</h2>
      <p>
        Die auf dieser Website gezeigten Patientenbewertungen sind eine Auswahl der Bewertungen auf
        unserem Google-Unternehmensprofil. Wir verändern ihren Inhalt nicht (auf der deutschen Seite
        sind sie aus dem Ungarischen übersetzt) und kürzen die Namen ab. Ob ein Bewertender unsere
        Leistungen tatsächlich in Anspruch genommen hat, prüfen wir nicht gesondert. Alle Bewertungen
        sind auf Google einsehbar.
      </p>

      <h2 style={h2}>Urheberrecht</h2>
      <p>
        Texte, Fotos und Logo dieser Website sind urheberrechtlich geschützt; jede Nutzung ohne
        Genehmigung ist untersagt. Die genannten Hörgerätemarken sind Marken ihrer Hersteller.
      </p>

      <p style={{ marginTop: '40px', color: 'var(--ink-soft)' }}>
        Dies ist eine Übersetzung. Maßgeblich ist die ungarische Fassung dieses Impressums.
      </p>
    </>
  )
}
