// Crie um programa que leia o preço de um produto, calcule e mostre o seu PREÇO PROMOCIONAL, com 5% de desconto.
const prompt = require('prompt');
prompt.start();
prompt.get(["valor"], function (err, result) {
    const valor = parseFloat(result.valor);
    const desc = valor * 0.05;
    const total = valor - desc;
    ///imprimir o desconto e o valor inicial
    console.log("Você obteve um desconto de R$"+desc," e seu novo total foi R$"+total);
});