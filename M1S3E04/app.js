function mesclaObjetos(objeto1, objeto2) {
  return Object.assign(objeto1, objeto2);
}
const novoObjeto = mesclaObjetos({ a: 1, b: 2 }, { c: 3, d: 4 });
console.log(novoObjeto);
