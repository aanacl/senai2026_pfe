const prompt = require('prompt-sync')();
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));
let op = prompt("Digite a operação (+, -, *, /):");

let resultado;

if (op === "+") {
    resultado = num1 + num2;
} else if (op === "-") {
    resultado = num1 - num2;
} else if (op === "*") {
    resultado = num1 * num2;
} else if (op === "/") {
    resultado = num1 / num2;
} else {
    console.log("Operação inválida");
}

if (resultado !== undefined) {
    console.log("Resultado:", resultado);
}