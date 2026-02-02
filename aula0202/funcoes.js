//funcao padrao
function cumprimento(nome){
console.log('seja bem vindo!' + nome)
}

cumprimento('amorim');

//funçao anonima
const somar = function(num1, num2){
    console.log('a soma dos numeros é' + (num1 + num2));
}
somar(15, 25);

const subtrair = () => {
     console.log('a subtraçao dos numeros é' + (num1 - num2));
}

subtrair(30, 20);