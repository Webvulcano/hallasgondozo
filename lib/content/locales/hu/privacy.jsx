// Adatkezelési tájékoztató - MAGYAR (ez a jogilag irányadó változat). CSAK a weboldalra vonatkozik
// (űrlap, tárhely-napló, böngésző-tárhely, külső linkek); a rendelői adatkezelés külön, helyszíni tájékoztatóban.
// Hatálydátum FIX (ne legyen automatikus): tartalmi változáskor itt és az EN/DE fájlban is frissítsd.
// A PrivacyView (components/views) adja köré a keretet és a vissza-linket.
import { COMPANY, EMAIL, PHONE, LEGAL } from '../../../constants'

const EFFECTIVE = '2026. október 20-ától'

const h2 = { fontSize: 'var(--fs-subsection)', marginTop: '32px', marginBottom: '12px' }
const ul = { paddingLeft: '20px', marginBottom: '12px' }
const H2 = ({ children }) => <h2 style={h2}>{children}</h2>

export default function PrivacyBody() {
  return (
    <>
      <h1 style={{ fontSize: 'var(--fs-section)', marginBottom: '20px' }}>Adatkezelési tájékoztató</h1>
      <p style={{ color: 'var(--ink-soft)', marginBottom: '32px' }}>Hatályos: {EFFECTIVE}</p>

      <p>
        Ez a tájékoztató azt írja le, hogyan kezeljük a személyes adatokat a weboldalunk használata során
        (visszahívás-kérő űrlap, a weboldal működése, külső hivatkozások). A rendelőben, a vizsgálatok és a
        hallókészülék-ellátás során végzett adatkezelésről külön tájékoztatót adunk, amely a rendelőben
        érhető el.
      </p>

      <H2>1. Az adatkezelő</H2>
      <p>
        {LEGAL.fullName} ({LEGAL.shortName})<br />
        Székhely: {LEGAL.seat}<br />
        Cégjegyzékszám: {LEGAL.regNumber} · Adószám: {LEGAL.taxId}<br />
        Üzlet: {COMPANY.fullName}, {COMPANY.address}<br />
        Telefon: {PHONE.display} · E-mail: {EMAIL}
      </p>
      <p>Adatvédelmi kérdésekben a fenti e-mail címen és telefonszámon érhet el minket.</p>

      <H2>2. Visszahívás-kérő űrlap</H2>
      <ul style={ul}>
        <li><strong>Kezelt adatok:</strong> név, telefonszám, megjegyzés (nem kötelező).</li>
        <li><strong>Cél:</strong> visszahívás, időpont-egyeztetés, a kérdés megválaszolása.</li>
        <li>
          <strong>Jogalap:</strong> az Ön hozzájárulása (GDPR 6. cikk (1) a) pont), amelyet az űrlap
          elküldésekor a jelölőnégyzet bejelölésével ad meg. A hozzájárulását bármikor visszavonhatja; ez
          nem érinti a visszavonás előtti adatkezelés jogszerűségét.
        </li>
        <li>
          <strong>Időtartam:</strong> addig kezeljük, amíg a visszahíváshoz, illetve az érdeklődésének
          kezeléséhez szükséges, vagy amíg hozzájárulását vissza nem vonja; ezt követően töröljük.
        </li>
        <li>
          <strong>Az adatszolgáltatás</strong> önkéntes; név és telefonszám nélkül azonban nem tudjuk
          visszahívni.
        </li>
      </ul>
      <p>
        <strong>Kérjük, a megjegyzés mezőbe ne írjon egészségügyi adatot</strong> (pl. diagnózist, panaszt
        részletesen). Ezeket a személyes vizsgálaton beszéljük meg.
      </p>

      <H2>3. A weboldal működése (tárhely, naplózás)</H2>
      <p>
        A weboldal megnyitásakor a tárhelyszolgáltató rendszere automatikusan rögzíti a működéshez szükséges
        technikai adatokat: IP-cím, a kérés időpontja, a megnyitott oldal címe, a böngésző és az eszköz
        típusa. Ezeket a weboldal biztonságos működése, a hibák és visszaélések felderítése céljából
        kezeljük, jogos érdekünk alapján (GDPR 6. cikk (1) f) pont). A naplókat a tárhelyszolgáltató
        rendszere a műszaki működéshez szükséges ideig őrzi, majd automatikusan törli. Az adatokból nem azonosítjuk a látogatókat, és nem készítünk róluk profilt.
      </p>
      <p>
        A weboldal egyes képeit (pl. blogcikkek képei) a böngésző a tartalomkezelő rendszer tárhelyéről
        tölti be; ilyenkor az IP-cím és a böngésző adatai ehhez a szolgáltatóhoz is eljutnak (lásd 5. pont).
      </p>

      <H2>4. Sütik és böngésző-tárhely</H2>
      <p>
        A weboldal <strong>nem használ</strong> követő, statisztikai vagy hirdetési sütit. A látogatottságot
        sütimentes, összesített statisztikával mérjük (Vercel Web Analytics): a megnyitott oldal, a
        hivatkozó oldal, az ország, valamint a böngésző, az operációs rendszer és az eszköz típusa kerül
        rögzítésre. A látogatót nem azonosítjuk: az IP-címet nem tároljuk, az egy napon belüli
        látogatásokat csak egy naponta megújuló, visszafejthetetlen azonosító köti össze, és a statisztika
        csak összesítve érhető el. Célja a weboldal fejlesztése, jogalapja jogos érdekünk (GDPR 6. cikk (1)
        f) pont). A kényelmi funkciókhoz a böngésző saját tárhelyét használjuk, személyes adatot
        nem tárolunk benne, és nem jut el hozzánk:
      </p>
      <ul style={ul}>
        <li><code>erted-promo-seen</code> (munkamenet végéig) - az akciós ablak egy látogatás alatt csak egyszer jelenjen meg.</li>
        <li><code>erted-splash-seen</code> (munkamenet végéig) - a nyitóanimáció csak egyszer jelenjen meg.</li>
        <li><code>erted-lang-suggest</code> (törlésig) - ha elutasította a nyelvváltási javaslatot, ne kérdezzük újra.</li>
      </ul>
      <p>
        Ezeket a böngésző beállításaiban bármikor törölheti. A weboldal tartalmát szerkesztő munkatársaink
        a szerkesztéshez technikai sütit kapnak; ez a látogatókat nem érinti.
      </p>

      <H2>5. Adatfeldolgozók és címzettek</H2>
      <p>Az adatokat az alábbi szolgáltatók közreműködésével kezeljük, a megbízásunk alapján:</p>
      <ul style={ul}>
        <li>
          <strong>Vercel Inc.</strong> (440 N Barranca Ave #4133, Covina, CA 91723, USA) - a weboldal
          tárhelye és a 4. pontban írt látogatottsági statisztika; a 3. pontban írt naplóadatok, és az űrlap elküldésekor a beküldött adatok áthaladnak a
          rendszerén. Az adatok az Egyesült Államokba is kerülhetnek; a továbbítás alapja az Európai
          Bizottság által elfogadott általános szerződési feltételek (GDPR 46. cikk).
        </li>
        <li>
          <strong>Supabase Inc.</strong> (supabase.com) -a weboldal
          tartalomkezelő rendszere és képtárhelye; az adatok az Európai Unióban (Frankfurt) vannak. A
          képek betöltésekor a látogató IP-címét és böngészőadatait kezeli.
        </li>
        <li>
          <strong>SimplyForms</strong> (üzemeltető: Adam Todt, Csehország, simplyforms.app) - az űrlap
          adatainak fogadása és e-mailben történő továbbítása részünkre. Szerverei az Európai Unióban
          (Németország) vannak. A beküldés technikai adatait (IP-cím, böngésző, hivatkozó oldal) a
          saját adatkezelési szabályai szerint kezeli.
        </li>
        <li>
          <strong>Google Ireland Limited</strong> (Gordon House, Barrow Street, Dublin 4, Írország; Gmail) -
          e-mail szolgáltatás: az űrlapról érkező üzenetek fogadása és tárolása. Az adatok az Egyesült
          Államokba is kerülhetnek; a továbbítás alapja az EU-USA adatvédelmi keretrendszer (Data Privacy
          Framework), amelyben a Google tanúsított.
        </li>
        <li>
          <strong>A weboldal fejlesztője és karbantartója</strong> (Bognár Lehel) - a weboldal üzemeltetése
          és hibaelhárítása során hozzáférhet a tárhely naplóadataihoz.
        </li>
      </ul>
      <p>Az adatokat más harmadik félnek nem adjuk át, nem értékesítjük, és hirdetési célra nem használjuk.</p>

      <H2>6. Külső szolgáltatások, hivatkozások</H2>
      <p>
        Az <strong>online időpontfoglalás</strong> a Medicall (MyMedio) foglalási rendszerében történik
        (Medio MedTech Zrt.). A foglaláskor megadott adatokat a foglalási rendszer üzemeltetője és rendelőnk
        kezeli; erről a foglalási oldalon elérhető tájékoztató ad részletes információt. A weboldalunk a
        foglalási oldalra csak hivatkozik, oda adatot nem továbbít.
      </p>
      <p>
        A weboldalon a Facebook, az Instagram és a Google Térkép oldalaira mutató <strong>hivatkozások </strong>
        vannak (beágyazott tartalom nincs). Ezek megnyitásakor az adott szolgáltató saját adatkezelési
        szabályai érvényesek.
      </p>

      <H2>7. Az Ön jogai</H2>
      <p>Az adatkezeléssel kapcsolatban Ön jogosult:</p>
      <ul style={ul}>
        <li>tájékoztatást kérni és az adataihoz hozzáférni (GDPR 15. cikk),</li>
        <li>adatai helyesbítését kérni (16. cikk),</li>
        <li>adatai törlését kérni (17. cikk),</li>
        <li>az adatkezelés korlátozását kérni (18. cikk),</li>
        <li>adatait géppel olvasható formában megkapni, illetve továbbíttatni (adathordozhatóság, 20. cikk),</li>
        <li>a jogos érdeken alapuló adatkezelés ellen tiltakozni (21. cikk),</li>
        <li>hozzájárulását bármikor visszavonni (7. cikk (3) bekezdés).</li>
      </ul>
      <p>
        Kérelmét a {EMAIL} címre vagy a {PHONE.display} telefonszámon jelezheti; legfeljebb egy hónapon belül
        válaszolunk. Automatizált döntéshozatal, profilalkotás nem történik.
      </p>

      <H2>8. Jogorvoslat</H2>
      <p>
        Ha úgy érzi, hogy adatkezelésünk sérti a jogait, kérjük, először keressen minket - igyekszünk
        gyorsan rendezni. Panasszal fordulhat a felügyeleti hatósághoz is:
      </p>
      <p>
        <strong>Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)</strong><br />
        1055 Budapest, Falk Miksa utca 9-11. · Postacím: 1363 Budapest, Pf. 9.<br />
        Telefon: +36 1 391 1400 · E-mail: ugyfelszolgalat@naih.hu · naih.hu
      </p>
      <p>
        Jogai megsértése esetén bírósághoz is fordulhat; a pert - választása szerint - a lakóhelye vagy
        tartózkodási helye szerinti törvényszék előtt is megindíthatja.
      </p>

      <H2>9. Adatbiztonság, módosítás</H2>
      <p>
        A weboldal kizárólag titkosított (HTTPS) kapcsolaton érhető el, az adatokhoz csak az arra jogosult
        munkatársaink és adatfeldolgozóink férnek hozzá. A tájékoztatót a weboldal vagy a jogszabályok
        változásakor frissítjük; a mindenkori változat ezen az oldalon érhető el, a hatálybalépés dátumával.
      </p>
    </>
  )
}
