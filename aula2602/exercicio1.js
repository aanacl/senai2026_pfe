class Caneta {
    //atributos
    cor = 'rosa';
    marca = 'stabilo';
    ponta = 'fina';
    qtdTinta = 5;
    tampa = true;

    //mátodo tem parenteses
    escrever(){
        return 'Começou a escrever';
    }
    sublinhar(valor){
        if(valor>5){
            console.log('Não é possível subtrair !')
        }else{
             this.qtdTinta -= valor
        return "Quantidade restante de tinta " + this.qtdTinta;
        }
       
    }
}
const canetaFina = new Caneta();
console.log(canetaFina.escrever());
console.log(canetaFina.sublinhar(4));