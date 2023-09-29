//Uma empresa precisa reajustar o salário dos seus funcionários, dando um aumento de acordo com alguns fatores. Faça um programa que leia o salário atual,
// o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa.
// No final, mostre o seu novo salário, baseado na tabela a seguir:
// - Mulheres
//  - menos de 15 anos de empresa: +5%
//  - de 15 até 20 anos de empresa: +12%
//  - mais de 20 anos de empresa: +23%
// - Homens
//  - menos de 20 anos de empresa: +3%
//  - de 20 até 30 anos de empresa: +13%
//  - mais de 30 anos de empresa: +25%
console.log("--------------------------------------");
console.log("Informe seu sálario");
console.log("Informe seu gênero [1]HOMEM [2]MULHER");
console.log("Informe a quantos anos esta na empresa");
console.log("--------------------------------------");
const prompt = require('prompt');
prompt.start();
prompt.get(["salario","genero","anos"], function (err, result) {
    const salario = parseFloat(result.salario);
    const genero = result.genero;
    const anos = result.anos;
    if (genero == 1 && anos < 20) {
        const aumento = salario + (salario * 0.03);
        console.log(aumento);
    } else if (genero ==1 && anos <=30) {
        const aumento = salario + (salario * 0.13);
        console.log(aumento);
    } else if (genero == 1 && anos > 30) {
        const aumento = salario + (salario * 0.25);
        console.log(aumento);
    } else if (genero == 2 && anos < 15) {
        const aumento = salario + (salario * 0.05);
        console.log(aumento);
    } else if (genero ==2 && anos <=20) {
        const aumento = salario + (salario * 0.12);
        console.log(aumento);
    } else if (genero == 2 && anos > 20) {
        const aumento = salario + (salario * 0.23);
        console.log(aumento);
    } else if (genero > 2) {
        console.log("Opção Inválida");
    };
});