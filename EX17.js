// Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
// 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
// o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

const prompt = require('prompt');
prompt.start();
prompt.get(["velocidade"], function (err, result) {
    const velocidade = parseInt(result.velocidade);
    if (velocidade > 80) {
        const multa = velocidade - 80;
        const total = multa * 5;
        console.log("Você estava à",multa+"Km acima da velocidade permitida. Sua multa será de R$"+total);
    } else {
        console.log("Você não estava acima da velocidade");
    };
});