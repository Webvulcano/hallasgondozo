// Páciens-út — "Lépésről lépésre" timeline (Journey komponens)
// Az oldal végig "Ön"-formát használ — itt is.

export const journeySteps = [
  {
    n: 1,
    title: 'Időpontfoglalás',
    desc: 'Az első lépés az időpontfoglalás telefonon vagy online. Már ekkor érdemes röviden elmondania a panaszait — gyakran visszakérdez, nehezebben érti a beszédet zajban, hangosabban hallgatja a tévét —, így a vizsgálaton pontosabban tudunk az Ön helyzetére figyelni.',
  },
  {
    n: 2,
    title: 'Hallásvizsgálat és tanácsadás',
    desc: 'A személyes találkozó, ahol felmérjük a helyzetét és elvégezzük a hallásvizsgálatot. Négy lépésből áll:',
    sub: [
      {
        title: 'Panasz- és igényfelmérés',
        desc: 'Átbeszéljük a panaszokat, az életvitelét és azokat a helyzeteket, ahol a halláscsökkenés a legzavaróbb. Más megoldás kell annak, aki sokat beszélget társaságban, mint akinek a tévé vagy a telefonálás okoz nehézséget.',
      },
      {
        title: 'Műszeres hallásvizsgálat',
        desc: 'A vizsgálatot audiológus, hallásakusztikus szakember végzi kalibrált műszerekkel, csendes kabinban. Kiderül a halláscsökkenés mértéke és típusa, valamint az is, mennyire érintett a beszédértés.',
      },
      {
        title: 'Eredmények és személyre szabott javaslat',
        desc: 'Közérthetően elmagyarázzuk az eredményeket. Ha hallókészülék indokolt, több szempontot mérlegelünk: a halláscsökkenés mértékét, a fül adottságait, az Ön kényelmi igényeit, kommunikációs szokásait és anyagi lehetőségeit.',
      },
    ],
  },
  {
    n: 3,
    title: 'Szakorvosi konzultáció és javaslat',
    //desc: 'A készüléket valós élethelyzetekben próbálja ki: otthon, családi beszélgetésben, az utcán, üzletben, munkahelyen vagy zajosabb környezetben. Így nyugodtan, kockázat nélkül születhet meg a döntés.',
    desc: 'A hallásvizsgálati eredményeket és kezelési lehetőségeket megbeszéljük és kiválasztjuk a hallókészülék típusát.',
    highlight: 'Min. 15 nap, ingyenes',
  },
  {
    n: 4,
    title: 'Próbahordás és finomhangolás',
    sub: [
      {
        title: 'Hallókészülék kiválasztása és első beállítása',
        desc: 'A készüléket az Ön vizsgálati eredményei alapján állítjuk be — ez fontos, de még nem végleges. Megmutatjuk a behelyezést, tisztítást, töltést vagy elemcserét és az alapvető kezelést.',
      },
      {
        title: '',
        desc: 'A készüléket valós élethelyzetekben próbálja ki: otthon, családi beszélgetésben, az utcán, üzletben, munkahelyen vagy zajosabb környezetben. Így nyugodtan, kockázat nélkül születhet meg a döntés.',
      }
    ],
  },
  {
    n: 5,
    title: 'Véglegesítés és hosszú távú hallásgondozás',
    desc: 'A próbahordás után kontrollvizsgálaton átbeszéljük a tapasztalatokat. Ha egyes hangok túl erősek vagy a beszéd nem elég tiszta, finomítjuk a beállítást. A jó ellátás nem egyetlen alkalom, hanem gondozási folyamat.',
    sub: [
      {
        title: '',
        desc: 'A hallókészülék viselése tanulási folyamat. A rendszeres kontroll, a tisztítás, az illeszték ellenőrzése, a tartozékok és a beállítás-módosítások mind azt szolgálják, hogy a készülék hosszú távon is megbízhatóan működjön. Tartozék, tisztítószer kínálatunkkal és hallókészülék szervíz szolgáltatásunkkal támogatjuk a probléma mentes hallókészülék viselést.',
      }
    ]
    //desc: 'A hallókészülék viselése tanulási folyamat. A rendszeres kontroll, a tisztítás, az illeszték ellenőrzése, a tartozékok és a beállítás-módosítások mind azt szolgálják, hogy a készülék hosszú távon is megbízhatóan működjön. Szükség esetén egyéni fülilleszték és gyógyászati segédeszköz-ellátás is elérhető.',
  },
]
