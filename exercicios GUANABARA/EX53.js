// Faça um programa que leia a idade e o sexo de 5 pessoas, mostrando no final:
// a) Quantos homens foram cadastrados
// b) Quantas mulheres foram cadastradas
// c) A média de idade do grupo
// d) A média de idade dos homens
// e) Quantas mulheres tem mais de 20 anos

const prompt = require('prompt');
prompt.start();
console.log("Informe o sexo da pessoa [ 1 ] MASCULINO [ 2 ] FEMININO");
console.log("Logo após informe sua idade");
let contador = 1
let homem = 0;
let mulher = 0;
let totalGrupo= 0 ;
let totalHomens = 0;
let acima20 = 0;
function lerDados () {
    prompt.get(["sexo","idade"], function (err, result) {
        let sexo = parseInt(result.sexo);
        let idade = parseInt(result.idade);
        if (sexo == 1) {
            homem++
            totalHomens = totalHomens + idade
        } else if (sexo == 2) {
            mulher++;
        }
        if (sexo == 2 && idade > 20) {
            acima20++
        }
        contador++
        var mediaHomens = totalHomens / homem;
        totalGrupo = totalGrupo + idade
        const mediaGrupo = totalGrupo / 5;
        if (contador <= 5) {
            lerDados()
        } else {
            console.log("Foram cadastrados",homem,"HOMENS");
            console.log("Foram cadastrados",mulher,"MULHERES");
            console.log("A média de idade do grupo é",mediaGrupo.toFixed(2),"anos")
            console.log("A média de idade dos homens  é",mediaHomens.toFixed(2),"anos")
            console.log("Existem no grupo",acima20,"mulheres com mais de 20 anos")
        }
    });
}
return lerDados()