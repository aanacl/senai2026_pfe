class bicleta{
//atributos
#modelo= 'explorer pro';
#marca= 'caloi';
#cor= 'roxa';
#velocidademax= '35km';
//metodos getter e setter
setModelo(valor){
    this.#modelo = valor;
} 
getModelo(){
    return this.#modelo;
}
setMarca(valor){
    this.#marca = valor;
} 
getMarca(){
    return this.#marca;
}
setCor(valor){
    this.#cor = valor;
} 
getCor(){
    return this.#cor;
}
setVelocidademax(valor){
    if(valor > 35){
        console.log('nao é possivel inserir acima de 35');
    }
    this.#velocidademax = valor;
} 
getVelocidademax(){
    return this.#velocidademax;
}
}
const caloi = new bicleta();
caloi.setMarca('caloi')
console.log(caloi.getMarca());
caloi.setCor('roxa')
console.log(caloi.getCor());
caloi.setModelo('explorer pro')
console.log(caloi.getModelo());
caloi.setVelocidademax(36)
console.log(caloi.getVelocidademax());