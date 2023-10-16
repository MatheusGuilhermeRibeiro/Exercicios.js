// Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
// dela e depois mostre se ela pode ou não votar.
console.log("--------------------------------");
console.log("Informe o ano do seu nascimento:");
console.log("--------------------------------");
const prompt = require('prompt');
prompt.start();
prompt.get(["dataImput"], function (err, result) {
    const anoNascimento = 2023 - parseInt(result.dataImput) ;
    if (anoNascimento < 18) {
        console.log("Você tem",anoNascimento,"anos, com essa idade não pode votar ainda!");
        const idadeRestante = 18 - anoNascimento;
        console.log("Ainda falta",idadeRestante,"anos para poder votar!");
    } else {
        console.log("Você tem",anoNascimento,"anos, com essa idade já pode votar!");
    };
});