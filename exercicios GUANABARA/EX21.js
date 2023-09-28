// Faça um algoritmo que leia um determinado ano e mostre se ele é ou não BISSEXTO.
console.log("---------------------------------------");
console.log("Informe um ano para saber se é BISSEXTO")
console.log("---------------------------------------");
const prompt = require('prompt');
prompt.start();
prompt.get(["ano"], function (err, result) {
    const ano = parseFloat(result.ano);
    const bissexto = ano % 4;
    if (bissexto === 0) {
        console.log("O ano de",ano,"é Bissexto");
    } else {
        console.log("O ano de",ano,"não é Bissexto");
    }
});