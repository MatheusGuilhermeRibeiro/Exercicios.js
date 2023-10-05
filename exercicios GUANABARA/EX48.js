// Faça um programa que leia 7 números inteiros e no final mostre o somatório entre eles.

console.log("Informe 7 valores para ser somado entre eles:")
let n = 1;
let soma = 0;
const prompt = require("prompt");
prompt.start();
function getNumero() {
    prompt.get(["numero"], function (err, result) {
        const numero = parseInt(result.numero);
        soma += numero;
        console.log(numero);
        if (n < 7) {
            n++;
            getNumero();
        } else {
            console.log("A soma entre os números:", soma);
        }
    });
}
getNumero();