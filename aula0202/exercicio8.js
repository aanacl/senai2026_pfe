const prompt = require('prompt-sync')();
let nota = Number(prompt("Digite a nota (0 a 100):"));

if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else {
    console.log("F");
}