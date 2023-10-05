// Desenvolva um aplicativo que mostre na tela o resultado da expressão:
// 500 + 450 + 400 + 350 + 300 + ... + 50 + 0

var valorInicial = 500;
var soma = 0
while (valorInicial >= 0) {
    console.log(valorInicial,"\n+")
    soma = soma + valorInicial;
    valorInicial -= 50;
};
console.log("=",soma)