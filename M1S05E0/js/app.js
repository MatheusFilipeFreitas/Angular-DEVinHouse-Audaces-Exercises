import Funcionario from "./Funcionario.js";

// const vetor = [2,4,6];

// const mensagem = document.getElementById("mensagem");

// if(Array.isArray(vetor)){
//     mensagem.innerHTML = 'É um vetor!';
// }else{
//     mensagem.innerHTM = console.log('Não eh um vetor!');
// }

// vetor.forEach((n) => console.log(n))

// class Retangulo {
//     #base
//     #altura

//     constructor(base, altura) {
//         this.#base = base;
//         this.#altura = altura;
//     }

//     getBase() { return this.#base; }

//     setBase(base) { this.#base = base; }

//     calcularArea(){
//         return ((this.#base * this.#altura)/2);
//     }

// }

// const ret = new Retangulo(4, 5);

// console.log(ret);
// console.log(ret.getBase());
// console.log(ret.calcularArea());

// class Funcionario {
//     cpf
//     nomeCompleto
//     salario
//     constructor(cpf, nomeCompleto, salario){
//         this.cpf = cpf;
//         this.nomeCompleto = nomeCompleto;
//         this.salario = salario;
//     }

//     promover(percentual){
//         this.salario *= (percentual/100+1);
//     }
// }

const ada = new Funcionario("528.442.040-31", "Ada Lovelace", 1000);

console.log(ada.salario); // 1000

ada.promover(50);

console.log(ada.salario);