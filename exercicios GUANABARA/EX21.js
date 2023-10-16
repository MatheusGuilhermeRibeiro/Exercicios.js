// Faça um algoritmo que leia um determinado ano e mostre se ele é ou não BISSEXTO.
console.log("---------------------------------------");
console.log("Informe um ano para saber se é BISSEXTO")
console.log("---------------------------------------");
const prompt = require('prompt');
prompt.start();
prompt.get(["ano"], function (err, result) {
    if (parseFloat(result.ano) % 4 === 0) {
        console.log("O ano de",parseFloat(result.ano),"é Bissexto");
    } else {
        console.log("O ano de",parseFloat(result.ano),"não é Bissexto");
    }
});