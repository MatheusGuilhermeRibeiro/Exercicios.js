// Desenvolva um programa que leia o nome de um funcionário, seu salário, quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
// acordo com a tabela a seguir:
// - Até 3 anos de empresa: aumento de 3%
// - entre 3 e 10 anos: aumento de 12.5%
// - 10 anos ou mais: aumento de 20%
console.log("-----------------------------------------------------------");
console.log("Será informado o seu aumento salarial: ");
console.log("-----------------------------------------------------------");
const prompt = require('prompt');
prompt.start();
prompt.get(["nome","salario","anosTrabalhados"], function (err, result) {
    const nome = result.nome;
    const salario = parseFloat(result.salario);
    const  anosTrabalhados = parseFloat(result.anosTrabalhados);
    if (anosTrabalhados < 3) {
        const aumento = salario * 0.03;
        const novoSalario = salario + aumento;
        console.log("O funcionario:",nome,"terá um aumento de R$"+aumento," seu novo sálario será de R$"+novoSalario);
    } if (anosTrabalhados >= 3 && anosTrabalhados < 10) {
        const aumento = salario * 0.125;
        const novoSalario = salario + aumento;
        console.log("O funcionario:",nome,"terá um aumento de R$"+aumento," seu novo sálario será de R$"+novoSalario);
    } if (anosTrabalhados >=10) {
        const aumento = salario * 0.20;
        const novoSalario = salario + aumento;
        console.log("O funcionario:",nome, "terá um aumento de R$"+ aumento,"seu novo sálario será de R$"+novoSalario);
    };
});