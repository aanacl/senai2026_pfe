const prompt = require('prompt-sync')()
let nascimento = Number(prompt(" ano de nascimento "));
let atual = new Date().getFullYear();

let idade = atual - nascimento;

console.log("você tem", idade, "anos.");