const calcular = function(numero1,numero2,operacao){
    if (operacao == '+') {
  console.log(numero1 + numero2)
} else if (operacao == '-') {
  console.log(numero1 - numero2)
} else if (operacao == '*') {
  console.log(numero1 * numero2)
} else if (operacao == '/') {
   console.log(numero1 / numero2)
} else {
  console.log('Operação inválida!')
}

}

calcular(10,26, '*')

