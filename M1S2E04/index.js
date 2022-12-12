var numero;
let soma = 0;
while (true) {
  numero = prompt('Digite um numero: ');
  if (parseInt(numero) == -1) {
    break;
  } else {
    soma += parseInt(numero);
  }
}
alert('Resultado da soma: ' + soma);
