// Desenvolva uma lógica que leia os valores de A, B e C de uma equação do
// segundo grau e mostre o valor de Delta.
const prompt = require('prompt');
prompt.start();
prompt.get(["valor1","valor2","valor3"], function (err, result) {
    const valor1 = parseFloat(result.valor1);
    const valor2 = parseFloat(result.valor2);
    const valor3 = parseFloat(result.valor3);
    const total = valor2 ** 2 - 4*(valor1)*(valor3);
    console.log("O valor de delta é:",total);
});