// Crie um programa que leia o nome e o salário de um funcionário, mostrando no final uma mensagem:
const prompt = require('prompt');
prompt.start();
prompt.get(["nome","salario"], function (err, result) {
    const nome = result.nome;
    const sal = result.salario;

    console.log("A funcionária",nome,"recebe um salário de R$",sal);
});

