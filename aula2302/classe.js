class Carro{
//atributos
modelo= 's10';
marca= 'chevrolet';
ano= 2025;
preco= 200000;

//metodos,funçao
 mover(){
    console.log('estou me movendo');
}
mostrar(){
    console.log('o carro é: ' + this.modelo + ' ' + this.marca + ' ' + this.ano + ' ' + this.preco);
}
}
const caminhonete = new Carro();
caminhonete.mover();
caminhonete.mostrar();