// [DESAFIO] Vamos melhorar o jogo que fizemos no exercício 32. A partir de
// agora, o computador vai sortear um número entre 1 e 10 e o jogador vai ter 4
// tentativas para tentar acertar.

console.log("-----------------");
console.log("Jogo: ADIVINHAÇÃO");
console.log("Tente adivinhar o número que o computador vai escolher de 1 à 10")
console.log("Você terá 4 tentativas. BOA SORTE !!!")
console.log("---------------------------------------------------------------")
const prompt = require('prompt');
const {get} = require("prompt");
prompt.start();
var contador = 1;
function getTentativas() {
    prompt.get(["numero"], function (err, result) {
        const numero = (result.numero);
        const computador = Math.floor(Math.random() * (10 - 1) + 1);

        if (numero == computador) {
            console.log("Número sorteado foi :", computador, "Acertou");
        } else {
            console.log("Número sorteado foi :", computador, "Errou");
        };
        if (contador < 4) {
            getTentativas()
        } else {
            console.log("Suas tentativas acabaram");
        };
        contador++
    });
};
return getTentativas();