import Animal from "./Animal.js";

export class Gato extends Animal {
    constructor(nome, idade) {
        super(nome, idade, 'miado');
    }
}