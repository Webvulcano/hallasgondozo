// '{name} Győrben' + { name: 'Phonak' } → 'Phonak Győrben'. Külön fájl, import nélkül → kliens-komponens
// is használhatja anélkül, hogy a szótárak a bundle-be kerülnének.
export function fmt(str, vars = {}) {
  return str.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m))
}
