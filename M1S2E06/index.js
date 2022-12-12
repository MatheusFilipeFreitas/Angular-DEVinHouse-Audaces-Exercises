var operacao = prompt('Digite a operação (+,-,*,/): ');
var primeiroNumero = prompt('Digite o primeiro valor: ');
primeiroNumero = parseInt(primeiroNumero);
var segundoNumero = prompt('Digite o segundo valor: ');
segundoNumero = parseInt(segundoNumero);
let resultado = 0;

switch (operacao) {
  case '+':
    resultado = primeiroNumero + segundoNumero;
    break;

  case '-':
    resultado = primeiroNumero - segundoNumero;
    break;

  case '*':
    resultado = primeiroNumero * segundoNumero;
    break;

  case '/':
    resultado = primeiroNumero / segundoNumero;
    break;
}

alert(resultado);
