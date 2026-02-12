const prompt = require('prompt-sync')();
let nom = prompt("digite uma palavra :");
let primeira = nom.slice(0, 3);
let ultima = nom.slice(-3)
console.log("as 3 primeiras letras do seu nome são : " + primeira);
console.log("as 3 ultimas letras do seu nome são : " + ultima);
