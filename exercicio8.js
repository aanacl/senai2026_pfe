let numerousuario = Number(prompt("Digite um número de 1 a 10: "));
let aleatorio = Math.floor(Math.random() * 10) + 1;
console.log("Número gerado:", aleatorio);
if (numeroUsuario === aleatorio) {
    console.log("São iguais!");
} else {
    console.log("São diferentes!");
}