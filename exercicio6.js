let hj = new Date(2026, 1, 5);
let fimdoano = new Date(2026, 11, 31);
let diferenca = fimdoano - hj;
let dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));
console.log("faltam", dias, "dias para o fim do ano.");

