export default class Fatura {
    constructor(id,descricao, quantia, preco) {
        this.id = id;
        this.descricao = descricao;
        this.quantia = this.#checkInitialValues(quantia);
        this.preco = this.#checkInitialValues(preco);
    }

    #checkInitialValues(value) {
        if(value < 0) {
            return 0;
        }
        return value;
    }

    obterValorTotal() {
        return (this.quantia * this.preco);
    }

    get valorTotal() {
        return (this.quantia * this.preco);
    }


}