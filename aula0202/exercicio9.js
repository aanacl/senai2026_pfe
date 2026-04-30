const prompt = require('prompt-sync')();
let preco = Number(prompt("Digite o preço:"));
let cupom = prompt("Digite o cupom (BRONZE, PRATA, OURO):").toUpperCase();

let desconto = 0;

if (cupom === "BRONZE") {
    desconto = 0.05;
} else if (cupom === "PRATA") {
    desconto = 0.10;
} else if (cupom === "OURO") {
    desconto = 0.15;
} else {
    desconto = 0; // sem desconto
}

let precoFinal = preco - (preco * desconto);

console.log("Preço final:", precoFinal);
