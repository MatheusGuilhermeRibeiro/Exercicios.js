// Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando na tela uma das mensagens abaixo:
// - O primeiro valor é o maior
// - O segundo valor é o maior
// - Não existe valor maior, os dois são iguais
console.log("-----------------------------");
console.log("Informando qual valor é maior");
console.log("-----------------------------");
const prompt = require('prompt');
prompt.start();
prompt.get(["valor1","valor2"], function (err, result) {
    const valor1 = parseFloat(result.valor1);
    const valor2 = parseFloat(result.valor2);
    if (valor1 > valor2) {
        console.log(valor1,"é maior que",valor2);
    } if (valor2 > valor1) {
        console.log(valor2,"é maior que",valor1);
    } if (valor1 == valor2) {
        console.log("Os dois valores são iguais")
    };
});