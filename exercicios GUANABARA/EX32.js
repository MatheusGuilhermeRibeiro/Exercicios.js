// [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
// jogador vai tentar descobrir qual foi o valor sorteado.

console.log("-----------------");
console.log("Jogo: ADIVINHAÇÃO");
console.log("Tente adivinhar o número que o computador vai escolher de 1 à 5")
console.log("---------------------------------------------------------------")
const prompt = require('prompt');
prompt.start();
prompt.get(["numero"], function (err, result) {
    const numero = (result.numero);
    const computador = Math.floor(Math.random() * (5 - 1) + 1);
    if (numero == computador){
        console.log("Número sorteado foi :",computador,"Acertou");
    } else {
        console.log("Número sorteado foi :",computador,"Errou");
    };
});

