// Faça um programa que leia um número inteiro e mostre o seu antecessor e seu sucessor.
const prompt = require('prompt');
prompt.start();
prompt.get(["num1"], function (err, result) {
    const num1 = parseInt(result.num1);
    const antecessor = num1 - 1;
    const sucessor = num1 + 1;
    console.log("Seu antecessor é:",antecessor);
    console.log("Seu sucessor é:",sucessor);
});