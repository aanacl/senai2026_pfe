//1

nome = 'ana'
console.log('ola, ' + nome)

//2
const somar = function(numA, numB){
    console.log('a soma dos numeros é: ' + (numA + numB));
}
somar(15, 25);

//3
let n1 = 6;
let n2 = 5;
let n3 = 8;

console.log('a media aritmetica é :', ( n1 + n2 + n3) / 3);

//4

const prompt = require('prompt-sync')();

let numero = Number(prompt('Digite um numero: '));

if (numero % 2 === 0) {
    console.log(`O número ${numero} é PAR.`);
} else {
    console.log(`O número ${numero} é ÍMPAR.`);
}



