// Crie um programa que leia o número de dias trabalhados em um mês e mostre o
// salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada sabendo-se que, o mes tem 31 dias e trabalhamos 8 horas por dia não considerando finais de semana.
const prompt = require('prompt');
prompt.start();
prompt.get(["dias"], function (err, result) {
    const dias = parseInt(result.dias);
    const horas= (dias * 8);
    const total = horas * 25;
    console.log("Você trabalhou no mês",dias,"dias ou seja",horas,"horas mensais. Com isso seu sálario será R$",total);
});