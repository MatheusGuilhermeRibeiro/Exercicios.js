// Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor.
// No final, mostre quais são os números pares que foram digitados e em que
// posições eles estão armazenados.
let numeros = [];
let contador = 1;
const prompt = require("prompt");
prompt.start();
function lerNumeros() {
    prompt.get(["numero"], function (err, result) {
        let numero = parseInt(result.numero);
        numeros.push(numero);
        if (numero % 2 == 0) {
            console.log("Número PAR encontrado na posição: " + (numeros.length - 1));
        }
        if (contador <= 10) {
            contador++;
            lerNumeros();
        } else {
            console.log("Vetor completo:", numeros);
        }
    });
}
lerNumeros();