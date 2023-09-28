//Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$4,98.
const prompt = require('prompt');
prompt.start();

prompt.get(["num1"], function (err, result) {
    const num1 = parseFloat(result.num1);
    const dolar = num1 * 0.24;
    console.log(dolar);
});
