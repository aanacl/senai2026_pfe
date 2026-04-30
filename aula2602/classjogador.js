
class Jogador {
    #nome;
    #numero;

constructor(nome, numero) {
    this.#nome = nome;
    this.#numero = numero;
}

    treinar() {
        return '3 vezes na semana';
    };
    getNome(){
        return this.#nome;
    };
    getNumero(){
        return this.#numero;
    };
}
class JogadorFutebol extends Jogador{
    #peDominante;
    #totalGols;

    constructor(peDominante, totalGols, nome, numero) {
        super(nome,numero);
        this.#peDominante = peDominante;
        this.#totalGols = totalGols;
    };
    driblar(){
        return 'Tomou uma caneta';
    };
    fazerGol(qtdGols){
        return this.#totalGols += qtdGols
    };
    mostrar(){
        return 'O jogador ' + super.getNome() + ' número ' + super.getNumero() + ' pé dominante ' + this.#peDominante + ' tem ' + this.#totalGols + ' gols.';

    }
}
const jogador = new JogadorFutebol ('Esquerdo',20,'Gustavo Nogueira',7);
jogador.fazerGol(2);
console.log(jogador.mostrar());