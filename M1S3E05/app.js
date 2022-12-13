const somaTudo = (...args) => {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
};

const resultado = somaTudo(1, 2, 3, 4);

console.log(resultado);
