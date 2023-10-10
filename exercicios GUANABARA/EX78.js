// Escreva um programa que leia 15 números e guarde-os em um vetor. No final,
// mostre o vetor inteiro na tela e em seguida mostre em que posições foram
// digitados valores que são múltiplos de 10.
let numeros = [];
let contador = 1;
const prompt = require('prompt');
prompt.start();
function lerNumeros() {
    prompt.get(["numero"], function (err, result) {
        let numero = parseInt(result.numero);
        numeros.push(numero);
        if (numero % 10 == 0) {
            console.log("Número múltiplo de 10 encontrado na posição: " + (numeros.length - 1));
        }
        if (contador <= 15) {
            contador++;
            lerNumeros();
        } else {
            console.log("Vetor completo:", numeros);
        }
    });
}
lerNumeros();

