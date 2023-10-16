// Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
// ÍMPAR.
console.log("----------------------------------------------");
console.log("Informe um número para saber se é IMPAR ou PAR");
console.log("----------------------------------------------");
const prompt = require('prompt');
prompt.start();
prompt.get(["numero"], function (err, result) {
    if (parseFloat(result.numero) % 2 === 0 ) {
        console.log("PAR");
    } else {
        console.log("IMPAR");
    };

});