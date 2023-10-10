// Faça um programa usando a estrutura “para” que leia um número inteiro
// positivo e mostre na tela uma contagem de 0 até o valor digitado:
// Ex: Digite um valor: 9
// Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!
console.log("-----------------------------------------------------")
console.log("Informe um número para contagem de 0 até o seu número")
console.log("-----------------------------------------------------")
const prompt = require('prompt');
prompt.start();
prompt.get(["numero"], function (err, result) {
    let numero = parseInt(result.numero)
    for (let contador = 0; contador <=numero;contador++){
        console.log("Contagem:",contador);
    }
console.log("FIM")
});