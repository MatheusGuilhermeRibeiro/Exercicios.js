// Desenvolva um aplicativo que leia o peso e a altura de 7 pessoas, mostrando
// no final:
// a) Qual foi a média de altura do grupo
// b) Quantas pessoas pesam mais de 90Kg
// c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m
// d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg.
console.log("-----------------------------")
console.log("Informe seu peso e sua altura")
console.log("-----------------------------")
const prompt = require('prompt');
prompt.start();
console.log("")
let contador = 1;
let peso90 = 0;
let peso50 = 0;
let peso100 = 0;
let totalAltura = 0;
function lerDados () {
    prompt.get(["peso","altura"], function (err, result) {
        let peso =  parseFloat(result.peso);
        let altura = parseFloat(result.altura);
        if (peso > 90) {
            peso90++
        } else if (peso < 50 && altura < 1.60) {
            peso50++;
        }
        if (peso > 100  && altura > 1.90) {
            peso100++
        }
        contador++
        totalAltura = totalAltura  + altura
        const mediaAltura = totalAltura / 7;
        if (contador <= 7) {
            lerDados()
        } else {
            console.log("A média de altura do grupo é",mediaAltura.toFixed(2)+"m");
            console.log("Existem",peso90,"com mais de 90KG");
            console.log("Existem",peso50,"com menos de 50KG e tem menos de 1.60m");
            console.log("Existem",peso100,"com mais de 100KG e tem mais de 1.90m");
        }
    });
}
return lerDados()