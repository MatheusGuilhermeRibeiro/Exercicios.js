// Crie um programa que leia o sexo e a idade de várias pessoas. O programa vai
// perguntar se o usuário quer continuar ou não a cada pessoa. No final, mostre:
// a) qual é a maior idade lida
// b) quantos homens foram cadastrados
// c) qual é a idade da mulher mais jovem
// d) qual é a média de idade entre os homens
console.log("Informe seu sexo [ 1 ] MASCULINO [ 2 ] FEMININO")
console.log("Informe sua idade")
console.log("Digite 'S' para continuar o programa")
const prompt = require('prompt');
prompt.start();

let homem = 0;
let maisVelha,mulherJovem;
let totalHomens = 0;
function lerDados () {
    prompt.get(["sexo","idade","continuar"], function (err, result) {
        let sexo = result.sexo
        let idade = parseInt(result.idade)
        let continuar = result.continuar
        if (idade> maisVelha || maisVelha === undefined) {
            maisVelha = idade;
        }
        if (sexo == 1) {
            homem++
            totalHomens = totalHomens + idade
        } else if (sexo == 2 && idade < mulherJovem  || mulherJovem === undefined) {
                mulherJovem = idade
        }
        var mediaHomens = totalHomens / homem;
        if (continuar == "S" || continuar == "s"){
            lerDados()
        } else {
            console.log("A pessoa mais velha tem",maisVelha,"anos");
            console.log("Foram cadastrados",homem,"homens");
            console.log("A mulher mais jovem tem",mulherJovem,"anos");
            console.log("A média de idade dos homens é",mediaHomens.toFixed(2),"anos");
        };
    });
};
return lerDados()