// Faça um algoritmo que pergunte a distância que um passageiro deseja
// percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
// viagens até 200Km e R$0.45 para viagens mais longas.
console.log("--------------");
console.log("PREÇO PASSAGEM");
console.log("--------------");
const prompt = require('prompt');
prompt.start();
prompt.get(["distancia"], function (err, result) {
    const distancia = parseFloat(result.distancia);
    if (distancia <= 200 ) {
        const total = distancia * 0.50;
        console.log("Sua viagem é de",distancia+"Km sua viagem irá ficar no valor total de R$"+total);
    } else {
        const total = distancia * 0.45;
        console.log("Sua viagem é de",distancia+"Km sua viagem irá ficar no valor total de R$"+total);
    };
});
