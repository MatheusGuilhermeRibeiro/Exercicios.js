// O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no
// peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o indivíduo dentro de certas faixas.
//  - abaixo de 18.5: Abaixo do peso
//  - entre 18.5 e 25: Peso ideal
//  - entre 25 e 30: Sobrepeso
//  - entre 30 e 40: Obesidade
//  - acima de 40: Obesidade mórbida
console.log("-------------");
console.log("Calculo de IMC")
console.log("Tabela IMC : " +
    "- abaixo de 18.5: Abaixo do peso\n" +
    " - entre 18.5 e 25: Peso ideal\n" +
    " - entre 25 e 30: Sobrepeso\n" +
    " - entre 30 e 40: Obesidade\n" +
    " - acima de 40: Obesidade mórbida")
console.log("-------------------------")
const prompt = require('prompt');
prompt.start();
prompt.get(["altura","peso"], function (err, result) {
    const altura = parseFloat(result.altura)
    const peso = parseFloat(result.peso)
    const imc = peso / (altura * altura)
    if (imc < 18.5) {
        console.log("Seu imc é de",imc ,"você esta  ABAIXO DO PESO ideal!");
    } else if (imc >= 18.5 && imc < 25) {
        console.log("Seu imc é de",imc ,"você esta com o PESO IDEAL!");
    } else if (imc >= 25 && imc < 30) {
        console.log("Seu imc é de",imc ,"você esta SOBREPESO!");
    } else if (imc >= 30 && imc < 40) {
        console.log("Seu imc é de",imc ,"você esta com OBESIDADE!");
    } else {
        console.log("Seu imc é de",imc ,"você esta com OBESIDADE MÓRBIDA!");
    };
});