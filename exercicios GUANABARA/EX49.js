// Crie um programa que leia 6 números inteiros e no final mostre quantos deles
// são pares e quantos são ímpares.

console.log("Informe 6 valores. Será mostrado quais são PARES e quais são IMPARES:")
let incremento = 1;
let numerosPares = [];
let numerosImpares = [];
const prompt = require("prompt");
prompt.start();
function getNumero() {
        prompt.get(["numero"], function (err, result) {
                const numero = parseInt(result.numero);
                console.log(numero);
                if (numero % 2 == 0){
                        numerosPares.push(numero);

                } else {
                        numerosImpares.push(numero);
                }
                incremento++;
                if (incremento < 7) {
                        getNumero();
                } else {
                        console.log("Números PARES:", numerosPares);
                        console.log("Números IMPARES:",numerosImpares);
                }
        });
}
getNumero();
