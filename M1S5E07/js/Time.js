import Partida from "./Partida.js";

export default class Time {
    constructor(nome, sigla, vitorias, derrotas, empates, golsMarcados, golsSofridos) {
        this.nome = nome;
        this.sigla = sigla;
        this.vitorias = vitorias;
        this.derrotas = derrotas;
        this.empates = empates;
        this.golsMarcados = golsMarcados;
        this.golsSofridos = golsSofridos;
    }

    get numeroDeJogos() {
        return (this.vitorias + this.derrotas + this.empates);
    }

    get numeroDePontos() {
        return ((3 * this.vitorias) + this.empates);
    }

    computarPartida(partida) {
        if(partida.siglaTimeA === this.sigla){
            this.golsMarcados += partida.golsTimeA;
            this.golsSofridos += partida.golsTimeB;
            if(partida.golsTimeA > partida.golsTimeB) {
                this.vitorias++;
            }else if(partida.golsTimeA < partida.golsTimeB) {
                this.derrotas++;
            }else{
                this.empates++;
            }
        }else if(partida.siglaTimeB === this.sigla) {
            this.golsMarcados += partida.golsTimeB;
            this.golsSofridos += partida.golsTimeA;
            if(partida.golsTimeB > partida.golsTimeA) {
                this.vitorias++;
            }else if(partida.golsTimeB < partida.golsTimeA) {
                this.derrotas++;
            }else{
                this.empates++;
            }
        }else{
            console.log('Time ' + this.nome +' não encontrado nessa partida!');
        }
    }

    exibirSituação() {
        console.log(`${this.nome} - ${this.sigla}: `);
        console.log(`Numero de jogos: ${this.numeroDeJogos}`);
        console.log(`Numero de pontos: ${this.numeroDePontos}`);
        console.log(`Jogos ganhos: ${this.vitorias}`);
        console.log(`Jogos perdidos: ${this.derrotas}`);
        console.log(`Jogos empatados: ${this.empates}`);
        console.log(`Total de gols marcados: ${this.golsMarcados}`);
        console.log(`Total de gols sofridos: ${this.golsSofridos}`);
    }
}