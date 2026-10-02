// Gyakori kérdések - UI + FAQPage JSON-LD ugyanebből épül.
// Sorrend számít: az első FAQ_VISIBLE db látszik alapból, a többi a „További kérdések" gomb mögött
// (CSS-sel rejtve, a HTML-ben + schemában bent marad → a Google mindet indexeli).

export const faqs = [
  {
    q: 'Honnan tudhatom, hogy szükségem van-e hallókészülékre?',
    a: 'Hallókészülékre akkor lehet szükség, ha gyakran visszakérdez, nehezebben érti a beszédet társaságban vagy zajos környezetben, hangosabban hallgatja a televíziót, esetleg családtagjai jelzik, hogy romlott a hallása. A pontos választ minden esetben hallásvizsgálat adja meg, mert ennek alapján derül ki, milyen mértékű a halláscsökkenés, és milyen megoldás javasolt.',
  },
  {
    q: 'Milyen állami támogatás igényelhető hallókészülékre?',
    a: 'Hallókészülékre TB-támogatás (NEAK) igényelhető, amelyhez fül-orr-gégész vagy audiológus szakorvos rendelvénye szükséges. Az ÉRTED Hallásgondozó TB-szerződött gyógyászatisegédeszköz-ellátóhely, és saját szakorvossal dolgozik, így a vizsgálat, a rendelvény és a készülék kiválasztása Győrben egy helyen intézhető. A fennmaradó összeg egészségpénztárral is elszámolható.',
  },
  {
    q: 'Van-e ingyenes hallókészülék nyugdíjasoknak?',
    a: 'A nyugdíjas kor önmagában nem jogosít ingyenes hallókészülékre, de a TB szakorvosi rendelvény alapján - korhatártól függetlenül - támogatja a hallókészülék árát. A támogatás mértéke és a fizetendő önrész a választott készüléktől függ; a fennmaradó összeg egészségpénztárral is fizethető. A pontos összeget a hallásvizsgálat után, személyre szabottan megmondjuk.',
  },
  {
    q: 'Kipróbálhatom a hallókészüléket vásárlás előtt?',
    a: 'Igen. Az ÉRTED Hallásgondozó szolgáltatásai között szerepel az ingyenes, minimum 15 napos próbahordás. Ez azért hasznos, mert a hallókészülékről csak a mindennapi élethelyzetekben kipróbálva lehet döntést hozni.',
  },
  {
    q: 'Hogyan zajlik a hallásvizsgálat?',
    a: 'A hallásvizsgálat fájdalommentes. Hangszigetelt kabinban, kalibrált műszerekkel, fejhallgatón keresztül különböző hangmagasságú hangokat hall, és jelzi, amikor érzékeli őket - ezt beszédértési vizsgálat egészíti ki. Az eredményt fül-orr-gégész, audiológus szakorvos értékeli, így a vizsgálat, a diagnózis és a javasolt megoldás egyetlen látogatással megvan.',
  },
  {
    q: 'Mennyi idő alatt szokható meg egy hallókészülék?',
    a: 'Ez egyénenként eltérő. Van, aki néhány nap alatt komfortosnak érzi, másoknak több hétre is szükségük lehet. Fontos tudni, hogy az agynak újra hozzá kell szoknia bizonyos hangokhoz, amelyeket korábban már kevésbé érzékelt. A fokozatos viselés, a kontroll és a finomhangolás sokat segít a megszokásban.',
  },
  {
    q: 'Meddig tart egy hallásvizsgálat?',
    a: 'Egy hallásvizsgálat nagyjából 30 percig tart. Az eredményt azonnal megkapja, és szakemberünk még ugyanazon az alkalmon elmagyarázza, mit jelent, illetve milyen megoldás javasolt. Az ÉRTED Hallásgondozóban Győrben a hallásvizsgálat ingyenes, beutaló és vásárlási kötelezettség nélkül.',
  },
  {
    q: 'Milyen hallókészülék lesz számomra a legjobb?',
    a: 'A legjobb hallókészülék mindig személyre szabott választás eredménye. Nemcsak a halláscsökkenés mértéke számít, hanem az is, milyen környezetben szeretne jobban hallani, mennyire fontos a diszkrét megjelenés, használ-e telefont vagy Bluetooth-kapcsolatot, illetve milyen kezelhetőséget szeretne. A hallókészülék-választási tanácsadás célja, hogy ezek alapján találják meg az Ön számára megfelelő megoldást.',
  },
  {
    q: 'Melyik a legkisebb hallókészülék?',
    a: 'A legkisebbek a hallójáratba helyezhető hallókészülékek, amelyek viselés közben szinte láthatatlanok. Hogy Önnek megfelelő-e, az a halláscsökkenés mértékétől és a hallójárat alakjától függ - erősebb halláscsökkenésnél gyakran a fül mögötti, diszkrét modellek a jobb választás. A hallásvizsgálat után megmutatjuk, melyik típus jöhet szóba az Ön esetében.',
  },
  {
    q: 'Elég egyszer beállítani a hallókészüléket?',
    a: 'Az első beállítás után a mindennapi használat során derül ki, hogy szükség van-e finomhangolásra. A kontroll alkalmakon a szakember az Ön tapasztalatai alapján szükség esetén módosíthatja a beállításokat, hogy a készülék kényelmesebb, és természetesebb hangzású legyen.',
  },
  {
    q: 'Hol lehet Győrben gyermek hallásvizsgálatot végeztetni?',
    a: 'Az ÉRTED Hallásgondozóban (9021 Győr, Bajcsy-Zsilinszky út 5.) 0-tól 99 éves korig végzünk hallásvizsgálatot, gyermekeknek is. A vizsgálatot fül-orr-gégész, audiológus szakorvos felügyeli, gyermek audiológiára külön online időpont foglalható. A korai diagnózis meghatározó a beszéd- és nyelvi fejlődés szempontjából.',
  },
]

export const FAQ_VISIBLE = 6
