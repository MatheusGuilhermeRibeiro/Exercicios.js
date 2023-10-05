// Faça um algoritmo que pergunte ao usuário um número inteiro e positivo
// qualquer e mostre uma contagem até esse valor:
// Ex: Digite um valor: 35
// Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!
console.log("Informe um valor para mostrar uma contagem ate ele:")

const prompt = require('prompt');
prompt.start();
prompt.get(["numero"], function (err, result) {
    const numero = parseInt(result.numero);
    var contagem = 1
    while (contagem <= numero ){
        console.log(contagem)
        contagem ++;
    }
});