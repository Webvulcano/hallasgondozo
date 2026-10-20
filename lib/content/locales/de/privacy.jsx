// DEUTSCH, Datenschutzerklärung - Übersetzung der ungarischen Fassung (lib/content/locales/hu/privacy.jsx, 2026-10-20).
// Maßgeblich ist die ungarische Fassung (Klausel unten - beibehalten). Gilt NUR für die Website.
// EFFECTIVE mit der ungarischen Datei synchron halten.
// PrivacyView (components/views) liefert Rahmen und Zurück-Link.
import { COMPANY, EMAIL, PHONE, LEGAL } from '../../../constants'

const EFFECTIVE = '20. Oktober 2026'

const h2 = { fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }
const ul = { paddingLeft: '20px', marginBottom: '12px' }
const H2 = ({ children }) => <h2 style={h2}>{children}</h2>

export default function PrivacyBody() {
  return (
    <>
      <h1 style={{ fontSize: 'var(--fs-section)', marginBottom: '20px' }}>Datenschutzerklärung</h1>
      <p style={{ color: 'var(--ink-soft)', marginBottom: '32px' }}>Gültig ab {EFFECTIVE}</p>

      <p>
        Diese Erklärung beschreibt, wie wir personenbezogene Daten bei der Nutzung unserer Website verarbeiten
        (Rückruf-Formular, Betrieb der Website, externe Links). Für die Datenverarbeitung in unserer Praxis -
        bei Untersuchungen und der Hörgeräteversorgung - gibt es eine gesonderte Information, die in der
        Praxis erhältlich ist.
      </p>

      <H2>1. Verantwortlicher</H2>
      <p>
        {LEGAL.fullName} ({LEGAL.shortName})<br />
        Sitz: {LEGAL.seat}<br />
        Firmenbuchnummer: {LEGAL.regNumber} · Steuernummer: {LEGAL.taxId}<br />
        Geschäft: {COMPANY.fullName}, {COMPANY.address}<br />
        Telefon: {PHONE.display} · E-Mail: {EMAIL}
      </p>
      <p>Bei Fragen zum Datenschutz erreichen Sie uns unter der obigen E-Mail-Adresse und Telefonnummer.</p>

      <H2>2. Rückruf-Formular</H2>
      <ul style={ul}>
        <li><strong>Daten:</strong> Name, Telefonnummer, Anmerkung (freiwillig).</li>
        <li><strong>Zweck:</strong> Rückruf, Terminvereinbarung, Beantwortung Ihrer Frage.</li>
        <li>
          <strong>Rechtsgrundlage:</strong> Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie beim
          Absenden des Formulars durch Ankreuzen des Kästchens erteilen. Sie können Ihre Einwilligung
          jederzeit widerrufen; die Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt unberührt.
        </li>
        <li>
          <strong>Speicherdauer:</strong> so lange, wie es für den Rückruf und die Bearbeitung Ihrer Anfrage
          erforderlich ist, bzw. bis zum Widerruf Ihrer Einwilligung; danach löschen wir die Daten.
        </li>
        <li>
          <strong>Die Angabe der Daten</strong> ist freiwillig; ohne Name und Telefonnummer können wir Sie
          jedoch nicht zurückrufen.
        </li>
      </ul>
      <p>
        <strong>Bitte tragen Sie keine Gesundheitsdaten in das Anmerkungsfeld ein</strong> (z. B. eine
        Diagnose oder ausführliche Beschwerden). Diese besprechen wir bei der persönlichen Untersuchung.
      </p>

      <H2>3. Betrieb der Website (Hosting, Protokolle)</H2>
      <p>
        Beim Aufruf der Website erfasst das System des Hosting-Anbieters automatisch die für den Betrieb
        erforderlichen technischen Daten: IP-Adresse, Zeitpunkt der Anfrage, Adresse der Seite, Browser- und
        Gerätetyp. Wir verarbeiten diese Daten zum sicheren Betrieb der Website und zur Erkennung von Fehlern
        und Missbrauch auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO). Das
        System des Hosting-Anbieters speichert die Protokolle so lange, wie es technisch erforderlich ist,
        und löscht sie dann automatisch. Wir identifizieren daraus keine Besucher und
        erstellen keine Profile.
      </p>
      <p>
        Einige Bilder der Website (z. B. Blogbilder) lädt Ihr Browser aus dem Speicher unseres
        Content-Management-Systems; dabei gelangen Ihre IP-Adresse und Browserdaten auch zu diesem Anbieter
        (siehe Punkt 5).
      </p>

      <H2>4. Cookies und Browser-Speicher</H2>
      <p>
        Die Website verwendet <strong>keine</strong> Tracking-, Statistik- oder Werbe-Cookies. Die
        Besucherzahlen messen wir mit einer cookiefreien, aggregierten Statistik (Vercel Web Analytics):
        Erfasst werden die aufgerufene Seite, die verweisende Seite, das Land sowie Browser, Betriebssystem
        und Gerätetyp. Besucher werden nicht identifiziert: IP-Adressen werden nicht gespeichert, Besuche
        innerhalb eines Tages werden nur über eine täglich erneuerte, nicht umkehrbare Kennung verknüpft,
        und die Statistik ist nur zusammengefasst einsehbar. Zweck ist die Verbesserung der Website,
        Rechtsgrundlage unser berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO). Für Komfortfunktionen nutzen wir den Speicher Ihres Browsers; er enthält keine
        personenbezogenen Daten und wird nicht an uns übermittelt:
      </p>
      <ul style={ul}>
        <li><code>erted-promo-seen</code> (bis Sitzungsende) - das Angebotsfenster erscheint nur einmal pro Besuch.</li>
        <li><code>erted-splash-seen</code> (bis Sitzungsende) - die Startanimation erscheint nur einmal.</li>
        <li><code>erted-lang-suggest</code> (bis zur Löschung) - wenn Sie den Sprachvorschlag abgelehnt haben, fragen wir nicht erneut.</li>
      </ul>
      <p>
        Sie können diese jederzeit in den Browsereinstellungen löschen. Mitarbeiter, die die Inhalte der
        Website bearbeiten, erhalten dafür ein technisches Cookie; Besucher sind davon nicht betroffen.
      </p>

      <H2>5. Auftragsverarbeiter und Empfänger</H2>
      <p>Wir verarbeiten die Daten mit Unterstützung folgender Anbieter in unserem Auftrag:</p>
      <ul style={ul}>
        <li>
          <strong>Vercel Inc.</strong> (440 N Barranca Ave #4133, Covina, CA 91723, USA) - Hosting der
          Website und die unter Punkt 4 beschriebene Besucherstatistik; die unter Punkt 3 beschriebenen Protokolldaten sowie die abgesendeten Formulardaten
          durchlaufen seine Systeme. Daten können in die USA übermittelt werden; Grundlage sind die von der
          Europäischen Kommission erlassenen Standardvertragsklauseln (Art. 46 DSGVO).
        </li>
        <li>
          <strong>Supabase Inc.</strong> (supabase.com) - Content-Management-System und Bildspeicher der
          Website; die Daten liegen in der Europäischen Union (Frankfurt). Beim Laden der Bilder verarbeitet
          es die IP-Adresse und Browserdaten der Besucher.
        </li>
        <li>
          <strong>SimplyForms</strong> (Betreiber: Adam Todt, Tschechien, simplyforms.app) - Empfang der
          Formulardaten und Weiterleitung an uns per E-Mail. Die Server stehen in der Europäischen Union
          (Deutschland). Technische Daten der Übermittlung (IP-Adresse, Browser, verweisende Seite)
          verarbeitet er nach seinen eigenen Datenschutzbestimmungen.
        </li>
        <li>
          <strong>Google Ireland Limited</strong> (Gordon House, Barrow Street, Dublin 4, Irland; Gmail) -
          E-Mail-Dienst: Empfang und Speicherung der Nachrichten aus dem Formular. Daten können in die USA
          übermittelt werden; Grundlage ist das EU-US Data Privacy Framework, unter dem Google zertifiziert
          ist.
        </li>
        <li>
          <strong>Entwickler und Betreuer der Website</strong> (Lehel Bognár) - kann beim Betrieb und bei der
          Fehlerbehebung auf die Protokolldaten des Hostings zugreifen.
        </li>
      </ul>
      <p>
        Wir geben die Daten an keine weiteren Dritten weiter, verkaufen sie nicht und nutzen sie nicht für
        Werbung.
      </p>

      <H2>6. Externe Dienste und Links</H2>
      <p>
        Die <strong>Online-Terminbuchung</strong> erfolgt im Buchungssystem Medicall (MyMedio) (Medio
        MedTech Zrt.). Die bei der Buchung angegebenen Daten verarbeiten der Betreiber des Buchungssystems und
        unsere Praxis; Einzelheiten enthält die Information auf der Buchungsseite. Unsere Website verlinkt
        nur auf die Buchungsseite und übermittelt keine Daten dorthin.
      </p>
      <p>
        Die Website enthält <strong>Links</strong> zu Facebook, Instagram und Google Maps (keine
        eingebetteten Inhalte). Beim Öffnen gelten die Datenschutzbestimmungen des jeweiligen Anbieters.
      </p>

      <H2>7. Ihre Rechte</H2>
      <p>Im Zusammenhang mit der Verarbeitung Ihrer Daten haben Sie das Recht,</p>
      <ul style={ul}>
        <li>Auskunft zu verlangen und auf Ihre Daten zuzugreifen (Art. 15 DSGVO),</li>
        <li>die Berichtigung Ihrer Daten zu verlangen (Art. 16),</li>
        <li>die Löschung Ihrer Daten zu verlangen (Art. 17),</li>
        <li>die Einschränkung der Verarbeitung zu verlangen (Art. 18),</li>
        <li>Ihre Daten in maschinenlesbarem Format zu erhalten oder übermitteln zu lassen (Datenübertragbarkeit, Art. 20),</li>
        <li>der auf berechtigtem Interesse beruhenden Verarbeitung zu widersprechen (Art. 21),</li>
        <li>Ihre Einwilligung jederzeit zu widerrufen (Art. 7 Abs. 3).</li>
      </ul>
      <p>
        Ihre Anfrage richten Sie bitte an {EMAIL} oder telefonisch an {PHONE.display}; wir antworten
        spätestens innerhalb eines Monats. Eine automatisierte Entscheidungsfindung oder Profilbildung
        findet nicht statt.
      </p>

      <H2>8. Rechtsbehelfe</H2>
      <p>
        Wenn Sie der Ansicht sind, dass unsere Verarbeitung Ihre Rechte verletzt, wenden Sie sich bitte
        zuerst an uns - wir bemühen uns um eine schnelle Lösung. Sie können sich auch bei der
        Aufsichtsbehörde beschweren:
      </p>
      <p>
        <strong>Ungarische Behörde für Datenschutz und Informationsfreiheit (NAIH)</strong><br />
        H-1055 Budapest, Falk Miksa utca 9-11. · Postanschrift: H-1363 Budapest, Pf. 9.<br />
        Telefon: +36 1 391 1400 · E-Mail: ugyfelszolgalat@naih.hu · naih.hu
      </p>
      <p>
        Sie können sich auch an ein Gericht wenden; nach Ihrer Wahl auch an den Gerichtshof (törvényszék)
        Ihres Wohn- oder Aufenthaltsorts. Wenn Sie in einem anderen EU-Land leben (z. B. Österreich), können
        Sie sich auch an die dortige Datenschutzbehörde wenden.
      </p>

      <H2>9. Datensicherheit, Änderungen</H2>
      <p>
        Die Website ist nur über eine verschlüsselte (HTTPS-)Verbindung erreichbar; Zugriff auf die Daten
        haben nur befugte Mitarbeiter und Auftragsverarbeiter. Wir aktualisieren diese Erklärung bei
        Änderungen der Website oder der Rechtslage; die jeweils gültige Fassung finden Sie mit Gültigkeitsdatum
        auf dieser Seite.
      </p>

      <p style={{ marginTop: '40px', color: 'var(--ink-soft)' }}>
        Dies ist eine Übersetzung. Maßgeblich ist die ungarische Fassung dieser Datenschutzerklärung.
      </p>
    </>
  )
}
