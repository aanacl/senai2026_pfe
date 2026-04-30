class Pessoa{
    nome; //atributo publico
    #cpf = '54527118803'; //atributo privado

//metodos getter e setter
setCpf(valor){
    this.#cpf = valor;
} 
getCpf(){
    return this.#cpf;
}
}
const estudante = new Pessoa();
estudante.nome = 'livia'; //acesso ao atributo publico
estudante.setCpf(54527118803);//acesso ao atributo privado
console.log('o cpf é ' + estudante.getCpf());//privado
console.log(estudante.nome);//publico