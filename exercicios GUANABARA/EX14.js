//A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
// quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.
const prompt = require('prompt');
prompt.start();
prompt.get(["kmpercorrido","dias"], function (err, result) {
    const kmpercorrido = parseFloat(result.kmpercorrido);
    const dias = parseInt(result.dias);
    const km = kmpercorrido * 0.20;
    const quantDias = dias * 90;
    const total = km + quantDias;
    console.log("Você percorreu",kmpercorrido+"km, com isso terá que pagar R$"+km);
    console.log("Como o carro ficou alugado por",dias,"o total em dias ficará R$"+quantDias);
    console.log("Com todas as informações ja passadas o total do aluguel do carro irá ficar R$"+total);

});