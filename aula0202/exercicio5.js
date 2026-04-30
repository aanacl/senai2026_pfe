const prompt = require('prompt-sync')();

let numero1 = Number(prompt('Digite um numero: '));
let numero2 = Number(prompt('Digite um segundo numero: '));

if (numero1 === numero2) {
    console.log(`Os números são iguais (${numero1}).`);
} else if (numero1 === 0 || numero2 === 0) {
    console.log("Pelo menos um dos números é igual a zero.");
} else if (numero1 > numero2) {
    console.log(`O primeiro número (${numero1}) é maior que o segundo (${numero2}).`);
} else {
    console.log(`O segundo número (${numero2}) é maior que o primeiro (${numero1}).`);
}
