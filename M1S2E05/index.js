var numero = prompt('Digite um numero: ');
let pares = 0;
let impares = 0;

for (let i = 0; i <= parseInt(numero); i++) {
  if (i % 2 == 0) {
    pares++;
  } else {
    impares++;
  }
}

alert('Pares: ' + pares + '\nImpares: ' + impares);
