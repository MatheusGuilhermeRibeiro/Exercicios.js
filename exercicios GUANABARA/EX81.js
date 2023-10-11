// Crie um programa que leia a idade de 8 pessoas e guarde-as em um vetor. No final, mostre:
// a) Qual é a média de idade das pessoas cadastradas
// b) Em quais posições temos pessoas com mais de 25 anos
// c) Qual foi a maior idade digitada (podem haver repetições)
// d) Em que posições digitamos a maior idade

const prompt = require("prompt");
prompt.start();
let maiorIdade;
let idades = [];
let soma = 0;
let contador = 1;
let posicaoMais25 = [];
function lerIdade(){
    prompt.get(["idade"], function (err, result) {
        let idade = parseInt(result.idade)
        idades.push(idade);
        if (idade > maiorIdade || maiorIdade == undefined){
            maiorIdade = idade
        }
        if (idade > 25){
            console.log("Mais que 25 anos encontrado na posição: " + (idades.length - 1))
            posicaoMais25[contador]
            posicaoMais25.push(contador)
        }
        soma = soma + idade
        let  mediaIdade = soma / 8
        if (contador <= 8 ) {
            lerIdade()
            contador++
        }else {
            console.log("A média de idade das pessoas é",mediaIdade,"anos")
            console.log("A maior idade foi de",maiorIdade,"anos")
            console.log("A maior idade informada está na posição:",posicaoMais25.length)
        }
    });
}
lerIdade()



