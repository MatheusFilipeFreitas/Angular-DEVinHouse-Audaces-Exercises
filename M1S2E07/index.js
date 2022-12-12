function primeNumber(numero) {
  for (let d = 2; d < numero; d++) if (numero % d == 0) return false;
  return true;
}

let result = '';

for (let i = 0; i < 1000; i++) {
  if (primeNumber(i)) {
    result = result + ', ' + i;
  }
}

alert(result);
