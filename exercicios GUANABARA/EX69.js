// Desenvolva um programa que leia o primeiro termo e a razão de uma
// PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e
// a soma entre todos os valores da sequência.
console.log("Digite o primeiro termo da Progressão Aritmética: ")
const prompt = require('prompt');
prompt.start();
let soma = 0
function getNumeros () {
    prompt.get(["primeiroTermo","razao"], function (err, result) {
        let primeiroTermo = parseInt(result.primeiroTermo)
        let razao = parseInt(result.razao)
        let elemento = primeiroTermo
        for (contador = 1;contador <=10;contador++){
            console.log(elemento)
            soma = soma + elemento
            elemento = elemento + razao

        }
    });
}
getNumeros()


