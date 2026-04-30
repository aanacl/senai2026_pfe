class Caneta{
    cor ='amarelo';
    marca ='faber castel';
    ponta = 'fina';
    qtdtinta = 5
    tampa = false;

    //metodo tem parenteses
    escrever(){
        return 'começou a escrever';
    }
    sublinhar(qtdtinta){
        this.qtdtinta -= qtdtinta; //subtraiovalordaqtddetinta
        return 'quantidade restante de tinta' + this.qtdtinta;
    }
}
const canetaFina = new Caneta();
console.log(canetaFina.escrever());
console.log(canetaFina.sublinhar(2));