// Crie um programa usando a estrutura “faça enquanto” que leia vários números.
// A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores
// b) Qual foi o menor valor digitado
// c) A média entre todos os valores
// d) Quantos valores são pares
console.log("------------------------------------")
console.log("Informe um número")
console.log("Digite 'S' para continuar o programa")
console.log("------------------------------------")
const prompt = require('prompt');
prompt.start();
let menor;
let contador = 0;
let soma = 0;
let par = 0;
function getNumeros () {
    prompt.get(["numero","continuar"], function (err, result) {
        let numero = parseInt(result.numero)
        let continuar = result.continuar
        if (numero < menor || menor == undefined){
            menor = numero
        }
        if (numero % 2 ==  0){
            par++
        }
        contador++
        soma = soma + numero
        let mediaNumeros = soma / numero
        if (continuar =="S" || continuar == "s"){
            getNumeros()
        } else {
            console.log("A resultado da soma de todos os números foi:",soma)
            console.log("O menor número foi",menor)
            console.log("A média entre os números foi",mediaNumeros)
            console.log("Existem",par,"valores PARES")
        }
        });
}
return getNumeros()
