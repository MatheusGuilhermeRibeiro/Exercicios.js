// Crie um programa que leia vários números pelo teclado e mostre no final o somatório entre eles.
// Obs: O programa será interrompido quando o número 1111 for digitado

console.log("--------------------------------------")
console.log("Informe um número");
console.log("Digite '1111' para parar o programa!!!!")
console.log("--------------------------------------")

const prompt = require('prompt');
prompt.start();
let totalNumeros = 0;

function lerIdade () {
    prompt.get(["numero"], function (err, result) {
        let numeros = parseInt(result.numero);
        var soma = totalNumeros
        if (numeros != 1111){
            lerIdade()
        }else {
            console.log("A soma de todos os números digitados foi:",soma)
        }
        totalNumeros = totalNumeros + numeros

    });
};
return lerIdade()