// DRAFT - DEUTSCH, Hörgeräte-Kategorien + Markenseiten (/de/hoergeraete, /de/hoergeraete/[slug]).
// Claude-Übersetzung des ungarischen Textes (2026-10-12), noch NICHT muttersprachlich geprüft.
// Schlüssel = id in der Basisdatei (lib/content/devices.js: Icon, Bilder). Slugs sind final (URLs) - nicht ändern.
// Die 5-Jahres-Garantie gilt NUR für Phonak. metaDescription ≤158 Zeichen. galleryAlts = Alt-Texte der
// Galeriebilder in Reihenfolge. DRAFT-Markierung nach Freigabe entfernen. Reine Daten, keine Imports.
export const categories = {
  'hearing-aids': {
    title: 'Hör­geräte',
    desc: 'Von unauffälligen Im-Ohr-Modellen bis zu leistungsstarken Geräten - abgestimmt auf Ihr Hörprofil.',
    descShort: 'Von unauffällig bis leistungsstark',
  },
  power: {
    title: 'Batterie oder Akku',
    desc: 'Klassisch mit Batterie oder wiederaufladbar - morgens laden und den ganzen Tag nicht mehr daran denken.',
    descShort: 'Wie es für Sie bequemer ist',
  },
  care: {
    title: 'Reinigungs- und Pflegemittel',
    desc: 'Reinigungsflüssigkeiten, Sprays und Pflegemittel für die tägliche Pflege Ihres Hörgeräts.',
    descShort: 'Für die tägliche Pflege',
  },
  earmoulds: {
    title: 'Individuelle Ohrpassstücke',
    desc: 'Schwimm-, Gehörschutz- und Musiker-Ohrpassstücke - nach individuellem Ohrabdruck gefertigt.',
    descShort: 'Schwimmen, Lärmschutz, Musik',
  },
  accessories: {
    title: 'Batterien, Zubehör, Extras',
    desc: 'Batterien, Ladegeräte, Ersatzteile - alles an einem Ort.',
    descShort: 'Alles an einem Ort',
  },
}

export const brands = {
  phonak: {
    slug: 'phonak-hoergeraete',
    productName: 'Phonak Hörgeräte',
    title: 'Phonak - Schweizer Premium-Technologie',
    desc: 'Schweizer Premium-Technologie seit 1947 - künstliche Intelligenz für klares Sprachverstehen, auch im Lärm.',
    features: [
      'Künstliche Intelligenz und AutoSense OS',
      'Bluetooth für iOS und Android',
      'Bis zu 56 Stunden Laufzeit (Audéo Sphere Infinio)',
    ],
    lead: 'Der Schweizer Hersteller Phonak entwickelt seit 1947 Hörgeräte. Seine intelligenten Geräte passen sich unbemerkt der Umgebung an und ermöglichen selbst in den lautesten Situationen ein hervorragendes Sprachverstehen - ganz nach dem Motto der Marke: „Life is on".',
    benefits: [
      'Künstliche Intelligenz (AutoSense OS): wechselt automatisch ins passende Programm - im Theater, auf der belebten Straße, beim Familienessen',
      'Spheric Speech Clarity 2.0 (Audéo Sphere Infinio): hebt Sprache aus Hintergrundgeräuschen hervor, ganz ohne App',
      'Bis zu 56 Stunden Laufzeit mit einer einzigen Ladung (Audéo Sphere Infinio)',
      'Bluetooth: Telefonate und Musik direkt im Hörgerät - mit iPhone und Android',
      'Wiederaufladbarer Lithium-Ionen-Akku - kein Batteriewechsel',
      'Bis zu 5 Jahre volle Garantie - 2 Jahre mehr als die üblichen 3 Jahre',
      'Roger™ Funkmikrofone: besseres Sprachverstehen im Restaurant, bei Vorträgen und in großem Lärm',
    ],
    description: [
      'Das in der Schweiz gegründete Unternehmen Phonak arbeitet seit 1947 daran, Menschen mit modernster Technologie die Freiheit des Hörens zurückzugeben. Es bietet mehr als Verstärkung: Seine intelligenten Systeme passen sich unbemerkt der Umgebung an und sorgen auch in lauten Situationen für hervorragendes Sprachverstehen.',
      'RIC-Hörgeräte (Hörer im Gehörgang) - Audéo: die beliebteste Produktfamilie. Dank ihrer winzigen Größe sind sie hinter dem Ohr kaum sichtbar, und ihr Klang ist besonders natürlich.',
      'HdO-Hörgeräte (hinter dem Ohr) - Naída: leistungsstarke Modelle für schwere bis hochgradige Hörminderung, mit maximaler Zuverlässigkeit.',
      'IdO-Hörgeräte (im Ohr) - Virto: ganz individuell nach der Form Ihres Ohres gefertigt. Unauffällig, elegant und anatomisch exakt passend.',
      'Sky Kinderhörgeräte: robuste, farbenfrohe und sichere Geräte, entwickelt für die Bedürfnisse von Babys und Kindern.',
      'Das passende Phonak-Hörgerät wählen wir anhand Ihres Hörtests in Győr passend zu Ihrem Gehör und Alltag aus und stimmen es während der 15-tägigen Probezeit fein ab.',
    ],
    forWhom: [],
    faq: [
      {
        q: 'Welche Phonak-Hörgeräte stehen zur Auswahl?',
        a: 'Am beliebtesten ist die Audéo-Familie (hinter dem Ohr getragen, mit Hörer im Gehörgang, nahezu unsichtbar). Für schwere Hörminderung gibt es das leistungsstarke Naída, für eine individuelle Anpassung das Im-Ohr-Gerät Virto und für Kinder die Sky-Familie. Nach dem Hörtest zeigen wir Ihnen, welches zu Ihnen passt.',
      },
      {
        q: 'Was kann das Phonak Audéo Sphere Infinio?',
        a: 'Spheric Speech Clarity 2.0 erkennt mit einem an Millionen von Klangbeispielen trainierten neuronalen Netz automatisch Sprache und hebt sie aus Hintergrundgeräuschen hervor - ganz ohne App. Mit einer Ladung läuft es bis zu 56 Stunden.',
      },
      {
        q: 'Lässt sich ein Phonak-Hörgerät mit meinem Telefon koppeln?',
        a: 'Ja. Phonak-Hörgeräte lassen sich per Bluetooth direkt mit iPhone und Android-Telefonen koppeln, sogar mit Laptop und Fernseher. Anrufe und Musik klingen direkt im Hörgerät.',
      },
      {
        q: 'Kann ich es vor dem Kauf ausprobieren?',
        a: 'Ja. Nach Hörtest und Einstellung können Sie es 15 Tage kostenlos in Ihrem Alltag tragen. Wenn es Ihnen nicht gefällt, zahlen Sie nichts.',
      },
      {
        q: 'Welche Garantie gibt es auf Phonak-Hörgeräte?',
        a: 'Auf das Hörgerät gibt es bis zu 5 Jahre volle Garantie - 2 Jahre mehr als die üblichen 3 Jahre.',
      },
    ],
    metaDescription: 'Phonak Hörgeräte in Győr: künstliche Intelligenz für Sprachverstehen im Lärm, Bluetooth, 5 Jahre Garantie. Kostenloser Hörtest, 15 Tage Probe.',
    imageAlt: 'Schwarzes Im-Ohr-Hörgerät von Phonak, Produktfoto',
    galleryAlts: [
      'Phonak-Hörgerät im Ohr getragen, Nahaufnahme eines Mannes mit Brille',
      'Im-Ohr-Hörgerät von Phonak mit geöffnetem Ladeetui',
      'Winziges Phonak-Hörgerät in der Handfläche neben einer Münze',
      'Paar Hinter-dem-Ohr-Hörgeräte von Phonak im Ladeetui',
    ],
  },
  signia: {
    slug: 'signia-hoergeraete',
    productName: 'Signia Hörgeräte',
    title: 'Signia - Innovation und Stil',
    desc: 'Innovation mit deutschen Wurzeln (früher Siemens): folgt mehreren Gesprächspartnern im Lärm, natürliche eigene Stimme, preisgekröntes Design.',
    features: [
      'Hebt mehrere Gesprächspartner im Lärm hervor (IX-Plattform)',
      'Natürliche eigene Stimme (Own Voice Processing)',
      'Schmuckartiges Styletto-Design',
    ],
    lead: 'Signia (früher Siemens) mit deutschen Wurzeln verbindet Spitzentechnologie mit modernem, preisgekröntem Design. Die Geräte bieten einen hervorragenden Klang und machen auch als stilvolles Accessoire eine gute Figur.',
    benefits: [
      'Integrated Xperience (IX) und AX-Plattform: verfolgt und hebt die Stimmen mehrerer Gesprächspartner in Echtzeit hervor, auch bei starkem Hintergrundlärm',
      'Own Voice Processing: erkennt die eigene Stimme des Trägers und lässt sie natürlicher klingen',
      'Styletto-Modelle: extrem schlank, schmuckartig, unauffällig und elegant',
      'Signia Assistant: KI-Assistent in der Smartphone-App - das Hörgerät lässt sich jederzeit feinabstimmen',
      'Ladeetui im Taschenformat, das ohne Kabel Energie für mehrere Tage liefert',
    ],
    description: [
      'Signia (früher Siemens) mit deutschen Wurzeln ist einer der innovativsten Hörgerätehersteller der Welt. Ziel ist es, dass Träger eine Hörminderung nicht als Einschränkung, sondern als neue Möglichkeit erleben.',
      'Nach Angaben des Herstellers kann die Integrated Xperience (IX) und AX-Plattform als weltweit erste die Stimmen mehrerer Gesprächspartner gleichzeitig in Echtzeit verfolgen und hervorheben - so lassen sich Gespräche in Gesellschaft und bei starkem Hintergrundlärm leichter verfolgen.',
      'Eine der häufigsten Beschwerden von Hörgeräteträgern ist, dass die eigene Stimme fremd oder hallig klingt. Die Own Voice Processing (OVP) Technologie von Signia erkennt die eigene Stimme des Trägers und lässt sie natürlicher klingen.',
      'Die Styletto-Modelle brechen mit herkömmlichen Formen: Schlank und schmuckartig stehen sie für Diskretion und Eleganz. Mit der Signia Assistant App lässt sich das Hörgerät jederzeit sofort an die eigenen Bedürfnisse anpassen.',
      'Besuchen Sie unser Fachgeschäft in Győr und testen Sie die neuesten KI-gestützten Modelle von Signia - nach dem Hörtest können Sie sie 15 Tage kostenlos tragen.',
    ],
    forWhom: [],
    faq: [
      {
        q: 'Was unterscheidet Signia von anderen Hörgeräten?',
        a: 'Die Integrated Xperience (IX) Plattform verfolgt und hebt die Stimmen mehrerer Gesprächspartner gleichzeitig in Echtzeit hervor, und Own Voice Processing (OVP) lässt die eigene Stimme natürlicher klingen. Auch das Design der Styletto-Modelle ist einzigartig.',
      },
      {
        q: 'Warum klingt meine eigene Stimme mit Hörgerät seltsam?',
        a: 'Viele Geräte verstärken die eigene Stimme genauso wie die Umgebung - dadurch klingt sie hallig. Die Own Voice Processing Technologie von Signia erkennt die Stimme des Trägers und verarbeitet sie getrennt, sodass sie natürlicher klingt.',
      },
      {
        q: 'Sind Signia-Hörgeräte wiederaufladbar?',
        a: 'Ja, zu den wiederaufladbaren Modellen gehört ein Ladeetui im Taschenformat, das auch ohne Kabel Energie für mehrere Tage liefert.',
      },
      {
        q: 'Kann ich es vor dem Kauf ausprobieren?',
        a: 'Ja, nach Hörtest und Einstellung können Sie es 15 Tage kostenlos tragen. Wenn es Ihnen nicht gefällt, zahlen Sie nichts.',
      },
    ],
    metaDescription: 'Signia Hörgeräte in Győr: hebt mehrere Gesprächspartner im Lärm hervor, natürliche eigene Stimme. Kostenloser Hörtest und 15 Tage Probe.',
    imageAlt: 'Blaues Hinter-dem-Ohr-Hörgerät von Signia, Produktfoto',
    galleryAlts: [
      'Paar Hinter-dem-Ohr-Hörgeräte von Signia, lächelnder Mann mit Brille',
      'Im-Ohr-Hörgerät von Signia beim Tragen, daneben das Gerätepaar',
      'Paar winziger Signia-Hörgeräte für den Gehörgang, ältere Dame',
      'Paar hautfarbener Gehörgangs-Hörgeräte von Signia',
    ],
  },
  oticon: {
    slug: 'oticon-hoergeraete',
    productName: 'Oticon Hörgeräte',
    title: 'Oticon - natürlicher Klang',
    desc: 'Dänischer Hersteller seit über hundert Jahren: Die BrainHearing™ Technologie unterstützt die natürliche Klangverarbeitung des Gehirns.',
    features: [
      'BrainHearing™ - weniger Höranstrengung',
      'Hervorragendes Sprachverstehen im Lärm',
      'Auch unsichtbare Im-Gehörgang-Modelle (IIC)',
    ],
    lead: 'Der dänische Hersteller Oticon ist seit über einem Jahrhundert Vorreiter in der Hörversorgung. Er verstärkt nicht nur Töne: Seine BrainHearing™ Technologie unterstützt die natürliche Arbeitsweise des Gehirns, sodass Hören weniger Anstrengung kostet, auch im Lärm.',
    benefits: [
      'BrainHearing™ Technologie: hilft dem Gehirn, Töne schneller und genauer zu verarbeiten, und verringert die Höranstrengung',
      'Hervorragendes Sprachverstehen: Die neuesten Modelle analysieren die Umgebung hunderte Male pro Sekunde, unterdrücken Lärm und heben Sprache hervor',
      'Unsichtbares, bequemes Design: winzige Hinter-dem-Ohr- und vollständig im Gehörgang sitzende (IIC) Modelle',
      'Bluetooth: direkte Übertragung vom Smartphone (iOS und Android), Fernseher und anderen Geräten',
      'Wiederaufladbarer Akku: eine schnelle Ladung reicht für den ganzen Tag',
    ],
    description: [
      'Der dänische Hersteller Oticon gehört zu den weltweit führenden Hörgeräteherstellern und spielt seit über einem Jahrhundert eine Vorreiterrolle in der Hörversorgung.',
      'Die Philosophie der Marke ist besonders: Sie macht Töne nicht nur lauter, sondern unterstützt mit der BrainHearing™ Technologie die natürliche Arbeitsweise des Gehirns. So kostet Hören weniger Anstrengung, und Sprache ist auch in lauter Umgebung besser zu verstehen.',
      'Die neuesten Modelle analysieren die Umgebung hunderte Male pro Sekunde, unterdrücken störende Geräusche und heben Sprache hervor. Die winzigen Hinter-dem-Ohr- und die vollständig im Gehörgang sitzenden (IIC) Modelle bieten maximale Diskretion.',
      'Entdecken Sie die neuesten intelligenten Produktfamilien von Oticon in unserem Fachgeschäft in Győr - nach dem Hörtest finden wir gemeinsam die Lösung, die zu Ihrem Alltag passt, und Sie können sie 15 Tage kostenlos testen.',
    ],
    forWhom: [],
    faq: [
      {
        q: 'Was ist die BrainHearing™ Technologie?',
        a: 'Der Ansatz von Oticon, der Töne nicht nur verstärkt, sondern die natürliche Klangverarbeitung des Gehirns unterstützt. So kostet Hören weniger Anstrengung, und Sie ermüden nach einem langen Gespräch oder einem lauten Tag weniger.',
      },
      {
        q: 'Gibt es ein unsichtbares Oticon-Hörgerät?',
        a: 'Ja, die vollständig im Gehörgang sitzenden (IIC) Modelle sind beim Tragen praktisch nicht zu sehen. Ob sie für Sie geeignet sind, hängt vom Grad der Hörminderung und der Form Ihres Gehörgangs ab.',
      },
      {
        q: 'Lässt sich Oticon mit meinem Telefon koppeln?',
        a: 'Ja, per Bluetooth direkt mit iPhone und Android-Telefonen, sogar mit dem Fernseher - der Ton klingt direkt im Hörgerät.',
      },
      {
        q: 'Kann ich es vor dem Kauf ausprobieren?',
        a: 'Ja, nach Hörtest und Einstellung können Sie es 15 Tage kostenlos tragen. Wenn es Ihnen nicht gefällt, zahlen Sie nichts.',
      },
    ],
    metaDescription: 'Oticon Hörgeräte in Győr: BrainHearing™ Technologie für leichteres Sprachverstehen, auch im Lärm. Kostenloser Hörtest und 15 Tage Probe.',
    imageAlt: 'Champagnerfarbenes Hinter-dem-Ohr-Hörgerät von Oticon, Produktfoto',
    galleryAlts: [
      'Hinter dem Ohr getragenes, kaum sichtbares Oticon-Hörgerät',
      'Schwarzes Oticon-Hörgerät mit Hörer im Gehörgang',
      'Unauffällig getragenes Oticon-Hörgerät, Nahaufnahme eines Frauenohrs',
      'Champagnerfarbenes Oticon-Hörgerät mit Hörer im Gehörgang',
    ],
  },
  starkey: {
    slug: 'starkey-hoergeraete',
    productName: 'Starkey Hörgeräte',
    title: 'Starkey - individuell für Ihr Ohr gefertigt',
    desc: 'Amerikanischer Hersteller, seit 1990 in Ungarn: Gehörgangs-Hörgeräte nach individuellem Ohrabdruck, KI-gestützte Modelle.',
    features: [
      'Gehörgangs-Hörgeräte nach individuellem Ohrabdruck',
      'Nahezu unsichtbare digitale Modelle',
      'Evolv AI: automatische Lärmunterdrückung, Sturzerkennung',
    ],
    lead: 'Starkey Hearing Technologies ist einer der größten Hörgerätehersteller der Welt in amerikanischem Besitz und seit 1990 in Ungarn vertreten. Spezialgebiet sind Gehörgangs-Hörgeräte, die nach einem individuellen Ohrabdruck gefertigt werden.',
    benefits: [
      'Individuelle Fertigung: Gehörgangs-Hörgeräte nach Ihrem eigenen Ohrabdruck',
      'Nahezu unsichtbare digitale Gehörgangs-Modelle',
      'Evolv AI und die nachfolgenden Produktfamilien: eingebaute Sensoren und automatische Lärmunterdrückung',
      'Sturzerkennung dank der eingebauten Sensoren',
      'Amerikanischer Hersteller, seit 1990 in Ungarn',
    ],
    description: [
      'Starkey Hearing Technologies ist einer der größten Hörgerätehersteller der Welt in amerikanischem Besitz. 1990 gründete das Unternehmen seine ungarische Tochter, die Starkey Hungary mit Sitz in Budapest, und brachte als einer der Ersten Hightech-Hörsysteme auf den ungarischen Markt.',
      'Auch in Ungarn wurden Herstellung und Feinabstimmung von Gehörgangs-Hörgeräten nach individuellem Ohrabdruck zum Hauptgebiet des Unternehmens. Neben dem Budapester Labor entstand ein landesweites Netz von Fachgeschäften - in Budapest, Gödöllő, Érd und weiteren Städten, darunter auch Győr.',
      'Die ungarische Vertretung folgte eng den Innovationen der amerikanischen Muttergesellschaft: Ab den 2000er-Jahren erschienen nahezu unsichtbare digitale Gehörgangs-Modelle, in den 2020er-Jahren Evolv AI und die nachfolgenden Produktfamilien mit eingebauten Sensoren, automatischer Lärmunterdrückung und Sturzerkennung.',
      'In Győr wählen wir Starkey-Hörgeräte anhand Ihres Hörtests aus und stellen sie ein - Sie können sie 15 Tage kostenlos testen.',
    ],
    forWhom: [],
    faq: [
      {
        q: 'Was ist das Besondere an Starkey-Hörgeräten?',
        a: 'Ein Spezialgebiet von Starkey ist das Gehörgangs-Hörgerät nach individuellem Ohrabdruck, das genau passt und nahezu unsichtbar ist. Moderne KI-gestützte Modelle bieten zudem automatische Lärmunterdrückung und Sturzerkennung.',
      },
      {
        q: 'Was bedeutet Sturzerkennung?',
        a: 'Die eingebauten Sensoren von Evolv AI und den nachfolgenden Starkey-Produktfamilien erkennen, wenn der Träger stürzt. Das gibt besonders älteren oder allein lebenden Menschen mehr Sicherheit.',
      },
      {
        q: 'Seit wann ist Starkey in Ungarn vertreten?',
        a: 'Seit 1990: Damals gründete Starkey Hearing Technologies seine ungarische Tochter mit Sitz in Budapest, die Starkey Hungary.',
      },
      {
        q: 'Kann ich es vor dem Kauf ausprobieren?',
        a: 'Ja, nach Hörtest und Einstellung können Sie es 15 Tage kostenlos tragen. Wenn es Ihnen nicht gefällt, zahlen Sie nichts.',
      },
    ],
    metaDescription: 'Starkey Hörgeräte in Győr: nahezu unsichtbare Modelle nach individuellem Ohrabdruck. Kostenloser Hörtest und 15 Tage Probe.',
    imageAlt: 'Schwarzes, unsichtbares Gehörgangs-Hörgerät von Starkey, Produktfoto',
    galleryAlts: [
      'Gehörgangs-Hörgerät (ITC) von Starkey beim Tragen',
      'Unsichtbares Im-Gehörgang-Hörgerät (IIC) von Starkey',
      'Hautfarbenes, tief im Gehörgang sitzendes Hörgerät (CIC) von Starkey',
      'Hinter-dem-Ohr-Hörgerät mit Hörer im Gehörgang (RIC) von Starkey',
    ],
  },
}
