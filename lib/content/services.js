// Services szekció - 3 szolgáltatás-kártya (alap: id + ikon). Szöveg: locales/<nyelv>/home.js → services, servicesTrust

export const serviceBase = [
  { id: 'hearing-test', iconName: 'EarAid' },
  { id: 'consultation', iconName: 'Child' },
  { id: 'advice', iconName: 'Ear' },
  // { id: 'child-test', iconName: 'Child' }, // kikapcsolva (ügyfél, 2026-10-12) - szöveg a locales-ben marad
]
