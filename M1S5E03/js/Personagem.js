export default class Personagem {
    constructor(nome){
        this.nome = nome;
        this.percentualVida = 100;
    }

    sofreuDano(percentualDano) {
        const tempPercentualVida = this.percentualVida - percentualDano;
        if(tempPercentualVida <= 0) {
            this.percentualVida = 0;
        }else{
            this.percentualVida = tempPercentualVida;
        }
    }

    usouKitMedico(){
        const tempPercentualVida = this.percentualVida + 10;
        if(tempPercentualVida >= 100) {
            this.percentualVida = 100;
        }else{
            this.percentualVida = tempPercentualVida;
        }
    }
}