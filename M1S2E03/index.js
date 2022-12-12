var numero = prompt('Digite um numero: ');
let result = '';

numero = parseInt(numero);
for (let i = 0; i <= 10; i++) {
  let string = numero + ' x ' + i + ' = ' + numero * i + '\n';
  result += string;
}

alert(result);
