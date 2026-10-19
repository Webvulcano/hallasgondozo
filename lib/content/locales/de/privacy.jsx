// LIVE 2026-10-13 (Lehel jóváhagyta, anyanyelvi lektorálás nélkül) - DEUTSCH, Datenschutzerklärung. Claude-Übersetzung der ungarischen Fassung (2026-10-12).
// Rechtstext → vor dem Livegang vom Kunden / einem Juristen freigeben lassen. Maßgeblich ist die ungarische
// Fassung (Klausel unten - beibehalten).
// PrivacyView (components/views) liefert Rahmen und Zurück-Link.
import { COMPANY, EMAIL, PHONE } from '../../../constants'

export default function PrivacyBody() {
  return (
    <>
      <h1 style={{ fontSize: 'var(--fs-section)', marginBottom: '20px' }}>Datenschutzerklärung</h1>
      <p style={{ color: 'var(--ink-soft)', marginBottom: '32px' }}>
        Gültig ab 1. Januar {new Date().getFullYear()}
      </p>

      <h2 style={{ fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }}>1. Verantwortlicher</h2>
      <p>
        {COMPANY.fullName} ({COMPANY.legalName})<br />
        Adresse: {COMPANY.address}, Ungarn<br />
        Telefon: {PHONE.display}<br />
        E-Mail: {EMAIL}
      </p>

      <h2 style={{ fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }}>2. Verarbeitete Daten</h2>
      <p>
        Name, Telefonnummer und optionale Anmerkung, die Sie im Rückruf-Formular dieser Website angeben.
        Wir verwenden diese Daten ausschließlich, um Sie zurückzurufen.
      </p>

      <h2 style={{ fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }}>3. Zweck und Rechtsgrundlage</h2>
      <p>
        Rückruf und Terminabstimmung. Rechtsgrundlage der Verarbeitung ist Ihre freiwillige
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie durch Ankreuzen des Kontrollkästchens
        und Absenden des Formulars erteilen.
      </p>

      <h2 style={{ fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }}>4. Auftragsverarbeiter</h2>
      <p>
        Die im Formular angegebenen Daten verarbeiten wir unter Mitwirkung der folgenden Auftragsverarbeiter:
      </p>
      <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
        <li>
          <strong>SimplyForms</strong> (Betreiber: Adam Todt, Tschechien, simplyforms.app) —
          zum Empfang der im Formular angegebenen Daten und zu deren Weiterleitung per E-Mail an uns.
          Die Server des Dienstes befinden sich in der Europäischen Union (Deutschland); die Daten
          werden nicht außerhalb der EU übermittelt. Den Inhalt des Formulars (Name, Telefonnummer,
          Anmerkung) speichert SimplyForms nicht, sondern löscht ihn nach Zustellung der E-Mail.
          Technische Daten zur Übermittlung (IP-Adresse, Browsertyp, verweisende Seite) werden
          höchstens 90 Tage aufbewahrt.
        </li>
        <li>
          <strong>Google Ireland Limited</strong> (Gordon House, Barrow Street, Dublin 4, Irland; Gmail) —
          E-Mail-Dienst: Empfang und Speicherung der aus dem Formular weitergeleiteten Nachrichten.
          Daten können auch in die USA übermittelt werden; Grundlage ist das EU-US Data Privacy
          Framework, unter dem Google zertifiziert ist.
        </li>
      </ul>

      <h2 style={{ fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }}>5. Speicherdauer</h2>
      <p>
        Die im Formular angegebenen Daten (Name, Telefonnummer, Anmerkung) erreichen uns per E-Mail.
        Wir bewahren sie ab Eingang höchstens 1 Jahr auf, damit wir Sie kontaktieren können, falls
        wir Sie nicht erreicht haben oder Sie später Interesse haben; danach löschen wir sie. Sie
        können Ihre Einwilligung jederzeit widerrufen; in diesem Fall löschen wir Ihre Daten
        unverzüglich. Die von SimplyForms verarbeiteten technischen Daten werden höchstens 90 Tage
        aufbewahrt (siehe Punkt 4).
      </p>

      <h2 style={{ fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }}>6. Ihre Rechte</h2>
      <p>
        Sie können jederzeit unter der oben genannten E-Mail-Adresse die Berichtigung oder Löschung
        Ihrer Daten oder die Einschränkung der Verarbeitung verlangen. Zudem können Sie Beschwerde bei
        der ungarischen Nationalen Behörde für Datenschutz und Informationsfreiheit (NAIH, naih.hu)
        einlegen.
      </p>

      <p style={{ marginTop: '40px', color: 'var(--ink-soft)' }}>
        Dies ist eine Übersetzung. Maßgeblich ist die ungarische Fassung dieser Datenschutzerklärung.
      </p>
    </>
  )
}
