var numero = prompt('Digite um numero: ');
var raiz = prompt('Digite outro numero: ');

let resultado = '';

for (let i = 0; i < 9; i++) {
  if (i == 0) {
    resultado = parseInt(numero);
  }
  numero = parseInt(numero) + parseInt(raiz);
  resultado = resultado + ', ' + numero;
}

alert(resultado);
