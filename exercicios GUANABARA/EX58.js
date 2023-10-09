// Faça um algoritmo que leia a idade de vários alunos de uma turma. O programa
// vai parar quando for digitada a idade 999. No final, mostre quantos alunos
// existem na turma e qual é a média de idade do grupo.
console.log("---------------------------------------")
console.log("Informe sua idade");
console.log("Digite '999' para parar o programa!!!!")
console.log("---------------------------------------")

const prompt = require('prompt');
prompt.start();

let totalIdade = 0;
let contador = 0;
function lerIdade () {
    prompt.get(["idade"], function (err, result) {
        let idade = parseInt(result.idade);
        var mediaIdade = totalIdade / contador
        if (idade != 999){
            lerIdade()
        }else {
            console.log("Existem na sala", contador, "alunos na sala");
            console.log("A média de idade da turma é",mediaIdade.toFixed(2),"anos");
        }
        totalIdade = totalIdade + idade
        contador++
    });
};
return lerIdade()