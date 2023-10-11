// Faça um algoritmo que leia a nota de 10 alunos de uma turma e guarde-as em
// um vetor. No final, mostre:
// a) Qual é a média da turma
// b) Quantos alunos estão acima da média da turma
// c) Qual foi a maior nota digitada
// d) Em que posições a maior nota aparece

const prompt = require("prompt");
prompt.start();
let soma = 0;
let contador = 1;
let acimaDaMedia = 0;
let maior;
let posicaoMaior = [];
function lerNotas() {
    prompt.get(["nota"], function (err, result) {
        let nota = parseFloat(result.nota)
        soma = soma + nota
        let mediaTurma = soma / 10
        if(nota >=6) {
            acimaDaMedia++
        };
        if (nota > maior || maior == undefined){
            maior = nota
            posicaoMaior[contador]
            posicaoMaior.push(contador)
        };
        if (contador <= 10){
            contador++
            lerNotas()
        } else{
            console.log("A média da turma foi",mediaTurma)
            console.log("Existem",acimaDaMedia,"alunos acima da média")
            console.log("A maior nota foi:",maior)
            console.log("A maior nota esta na posição:",posicaoMaior)
        };
    });
};
lerNotas()