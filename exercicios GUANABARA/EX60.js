// Desenvolva um algoritmo que leia o nome, a idade e o sexo de várias pessoas.
// O programa vai perguntar se o usuário quer ou não continuar. No final, mostre:
// a) O nome da pessoa mais velha
// b) O nome da mulher mais jovem
// c) A média de idade do grupo
// d) Quantos homens tem mais de 30 anos
// e) Quantas mulheres tem menos de 18 anos
console.log("-----------------------------------------")
console.log("Informe seu nome")
console.log("Informe seu sexo [ 1 ] MASCULINO [ 2 ] FEMININO")
console.log("Informe sua idade")
console.log("Digite 'S' para continuar o programa")
console.log("-----------------------------------------")
const prompt = require('prompt');
prompt.start();
let maisVelha,mulherJovem,nomeVelho,nomeJovem;
let contador = 0;
let totalIdade = 0;
let homemacima30anos = 0;
let mulherabaixo18anos = 0;
function lerDados () {
    prompt.get(["nome","sexo","idade","continuar"], function (err, result) {
        let nome = result.nome
        let sexo = result.sexo
        let idade = parseInt(result.idade)
        let continuar = result.continuar
        if (idade > maisVelha || maisVelha === undefined ) {
            maisVelha = idade;
            nomeVelho = nome
        } else if (sexo == 2 && idade < mulherJovem  || mulherJovem === undefined) {
            mulherJovem = idade;
            nomeJovem = nome
        }
        if (sexo == 1 && idade > 30 ){
            homemacima30anos++
        } else if (sexo == 2 && idade < 18) {
            mulherabaixo18anos++
        }
        totalIdade = totalIdade + idade
        contador++
        var mediaIdade = totalIdade / contador;
        if (continuar == "S" || continuar == "s"){
            lerDados()
        } else {
            console.log("A pessoa mais velha desse grupo se chama",nomeVelho)
            console.log("A mulher mais jovem desse grupo é a",nomeJovem)
            console.log("A média de idade do grupo é de",mediaIdade.toFixed(2),"anos")
            console.log("Nesse grupo existem",homemacima30anos,"homens com mais de 30 anos")
            console.log("Nesse grupo existem",mulherabaixo18anos,"mulheres com menos de 18 anos")
        };
    });
}
return lerDados()
