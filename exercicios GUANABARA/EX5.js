//Faça um programa que leia as duas notas de um aluno em uma matéria e mostre na tela a sua média na disciplina.
const prompt = require('prompt');
prompt.start();

prompt.get(['nota1', 'nota2'], function (err, result) {
    const nota1 = parseFloat(result.nota1);
    const nota2 = parseFloat(result.nota2);
    const calculo = (nota1 + nota2) / 2;
    console.log(calculo);
});