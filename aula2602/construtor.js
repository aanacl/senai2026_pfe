class Estudante {
    nome;
    #ra;
    #cpf;

    constructor(nome, ra, cpf){
this.nome = nome;
this.#cpf = cpf;
this.#ra = ra;
    }
}
const noemi = new Estudante('noemi da silva', 2944, 54527118803);
console.log(noemi);