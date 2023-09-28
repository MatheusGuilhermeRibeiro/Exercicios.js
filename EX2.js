// Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boasvindas para ela:
const prompt = require('prompt');
prompt.start();
prompt.get(["nome"], function (err, result) {
    const Nome = result.nome;
    console.log("Olá " + Nome + " Seja Bem Vindo!!");


});
    // const prompt = require('prompt');
    // prompt.start();
    //
    // prompt.get(['variavel1', 'variavel2'], function (err, result) {
    //     const var1 = parseInt(result.variavel1);
    //     const var2 = parseInt(result.variavel2);
    //     const calculo = var1 + var2
    //     console.log(calculo, "primeiraNota")
    //
    // });

