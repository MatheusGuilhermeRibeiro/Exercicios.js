// Escreva um programa que leia um número qualquer e mostre a tabuada desse
// número, usando a estrutura “para”.
// Ex: Digite um valor: 5
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15 ...
console.log("------------------------------------------")
console.log("Informe um número para mostrar sua tabuada")
console.log("------------------------------------------")
const prompt = require('prompt');
prompt.start();
prompt.get(["numero"], function (err, result) {
    let numero = parseFloat(result.numero)
    for (let contador = 0; contador <=10;contador++){
        console.log(numero,"x",contador,"=",numero * contador);
    }

});