//Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a sua terça parte.
const prompt = require('prompt');
prompt.start();

prompt.get(["num1"], function (err, result) {
    const num1 = parseFloat(result.num1);
    const dobro = num1 * 2;
    const terco = num1 / 3;
    console.log(dobro);
    console.log(terco);
});