// Crie um algoritmo que leia a idade de 10 pessoas, mostrando no final:
// a) Qual é a média de idade do grupo
// b) Quantas pessoas tem mais de 18 anos
// c) Quantas pessoas tem menos de 5 anos
// d) Qual foi a maior idade lida

const prompt = require('prompt');
prompt.start();
let contador = 1;
let menor5 = 0;
let mais18 = 0;
let total = 0;
let maiorIdade;
function lerIdade() {
    prompt.get(["idade"], function (err, result) {
        let idade = parseFloat(result.idade);

        if (idade > 18 ) {
            mais18 ++ ;
        };
        if (idade < 5 ) {
           menor5 ++;
        };
        if (idade > maiorIdade || maiorIdade === undefined){
            maiorIdade = idade;
        }
        contador++
        total = total + idade
        const media = total / 10;
        if (contador <= 10) {
            lerIdade()
        }
        else {
            console.log("---------------------------------------")
            console.log("A média de idade das pessoas foi",media,"anos")
            console.log("A pessoa mais velha tem",maiorIdade,"anos")
            console.log("Há",menor5,"pessoas com menos de 5 anos")
            console.log("Há",mais18,"pessoas com mais de 18 anos")
        };
    });
};
lerIdade()
