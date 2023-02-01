import Juros from "./Juros.js";

const app1 = new Juros(10000, 0.07, 24);
const app2 = new Juros(10000, 0.15, 10);

console.log('Aplicação 1:');
const jsApp1 = app1.calcularJurosSimples();
console.log('Juros Simples: ' + jsApp1);
const jcApp1 = app1.caluclarJurosCompostos();
console.log('Juros Compostos: ' + jcApp1);

console.log('Aplicação 2:');
const jsApp2 = app2.calcularJurosSimples();
console.log('Juros Simples: ' + jsApp2);
const jcApp2 = app2.caluclarJurosCompostos();
console.log('Juros Compostos: ' + jcApp2);