// Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o seu novo salário, com 15% de aumento.
const prompt = require('prompt');
prompt.start();
prompt.get(["salario"], function (err, result) {
    const salario = parseFloat(result.salario);
    const aumento = salario * 0.15;
    const total = salario + aumento;
    console.log("Você obteve um aumento de R$"+aumento," e seu novo sálario é R$"+total);
});