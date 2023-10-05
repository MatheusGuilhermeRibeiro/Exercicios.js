// Crie um programa que calcule e mostre na tela o resultado da soma entre 6 +
// 8 + 10 + 12 + 14 + ... + 98 + 100.


var valorInicial = 6;
var soma = 0
while (valorInicial <= 100) {
    console.log(valorInicial,"\n+")
    soma = soma + valorInicial;
    valorInicial += 2;
};
console.log("=",soma)

