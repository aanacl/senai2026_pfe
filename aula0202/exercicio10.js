const prompt = require('prompt-sync')();
let peso = Number(prompt("Digite o peso (kg):"));
let altura = Number(prompt("Digite a altura (m):"));

let imc = peso / (altura ** 2);

console.log("IMC:", imc.toFixed(2));

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc < 25) {
    console.log("Normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}

