// Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
// ÍMPAR.
console.log("----------------------------------------------");
console.log("Informe um número para saber se é IMPAR ou PAR");
console.log("----------------------------------------------");
const prompt = require('prompt');
prompt.start();
prompt.get(["numero"], function (err, result) {
    const numero = parseFloat(result.numero);
    const resultado = numero % 2;
    if (resultado == 0 ) {
        console.log("PAR");
    } else {
        console.log("IMPAR");
    };

});