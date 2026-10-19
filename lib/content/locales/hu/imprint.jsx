// Impresszum - MAGYAR (ez a jogilag irányadó változat). Ekertv. (2001. évi CVIII. tv.) 4. §.
// Az ImprintView (components/views) adja köré a keretet és a vissza-linket.
// Cégadatok: lib/constants.js → LEGAL, HOSTING (egy helyen, a tájékoztató is onnan olvas).
import { COMPANY, LEGAL, HOSTING, EMAIL, PHONE } from '../../../constants'

const h2 = { fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }

export default function ImprintBody() {
  return (
    <>
      <h1 style={{ fontSize: 'var(--fs-section)', marginBottom: '32px' }}>Impresszum</h1>

      <h2 style={h2}>Szolgáltató</h2>
      <p>
        <strong>{LEGAL.fullName}</strong> ({LEGAL.shortName})<br />
        Üzletnév: {COMPANY.fullName}<br />
        Székhely: {LEGAL.seat}<br />
        Üzlet és rendelő: {COMPANY.address}<br />
        Cégjegyzékszám: {LEGAL.regNumber}<br />
        Nyilvántartó cégbíróság: Győri Törvényszék Cégbírósága<br />
        Adószám: {LEGAL.taxId}<br />
        Telefon: {PHONE.display}<br />
        E-mail: {EMAIL}
      </p>

      <h2 style={h2}>Egészségügyi tevékenység</h2>
      <p>
        Az egészségügyi szolgáltatás működési engedélyhez kötött tevékenység.<br />
        Egészségügyi szolgáltatói azonosító: {LEGAL.healthProviderId}<br />
        Engedélyezett szakmák: fül-orr-gégegyógyászat, audiológia, gyógyászati segédeszköz-forgalmazás
        (önálló üzletben).
        {LEGAL.permitNumber && (
          <>
            <br />
            Működési engedély száma: {LEGAL.permitNumber}
          </>
        )}
      </p>
      <p>
        Engedélyező és felügyeleti hatóság: {LEGAL.authority.name}<br />
        Elérhetőség: {LEGAL.authority.contact}, tel.: {LEGAL.authority.phone}, e-mail: {LEGAL.authority.email}
      </p>
      <p>
        Szabályozott szakma: orvos - Dr. Vasvári Gergely Pál fül-orr-gégész, audiológus szakorvos.
        Szakmai kamara: Magyar Orvosi Kamara (mok.hu). Irányadó szakmai szabályok: az egészségügyről
        szóló 1997. évi CLIV. törvény és a Magyar Orvosi Kamara Etikai Kódexe.
      </p>

      <h2 style={h2}>Tárhelyszolgáltató</h2>
      <p>
        {HOSTING.name}<br />
        {HOSTING.address}<br />
        E-mail: {HOSTING.email} · {HOSTING.web}
      </p>

      <h2 style={h2}>Panaszkezelés</h2>
      <p>
        Panaszát a fenti telefonszámon, e-mail címen vagy személyesen az üzletben jelezheti. A panaszt
        kivizsgáljuk, és legkésőbb 30 napon belül írásban válaszolunk.
      </p>
      <p>
        Ha a fogyasztói panasz rendezése nem sikerül, a lakóhelye szerint illetékes békéltető testülethez
        fordulhat. Székhelyünk szerint illetékes: Győr-Moson-Sopron Vármegyei Békéltető Testület,
        9021 Győr, Szent István út 10/a., tel.: +36 96 520 217, e-mail: bekelteto.testulet@gymsmkik.hu,
        bekeltetesgyor.hu.
      </p>
      <p>
        Az egészségügyi ellátással kapcsolatos panasz esetén betegjogi képviselőhöz is fordulhat
        (Integrált Jogvédelmi Szolgálat, ijsz.hu).
      </p>

      <h2 style={h2}>Vélemények</h2>
      <p>
        A weboldalon megjelenő páciens-vélemények a Google-cégprofilunkon kapott értékelésekből
        származó válogatás. A szövegeket nem módosítjuk (az angol és német változaton fordításban
        közöljük), a szerzők nevét rövidítve tüntetjük fel. Azt, hogy az értékelő igénybe vette-e
        szolgáltatásunkat, külön nem ellenőrizzük. Az összes értékelés a Google-ön olvasható.
      </p>

      <h2 style={h2}>Szerzői jog</h2>
      <p>
        A weboldal szövegei, fotói és logója szerzői jogi védelem alatt állnak; engedély nélküli
        felhasználásuk tilos. A feltüntetett hallókészülék-márkák a gyártók védjegyei.
      </p>
    </>
  )
}
