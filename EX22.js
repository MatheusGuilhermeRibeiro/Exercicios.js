// Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua situação em relação ao alistamento militar.
// - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o alistamento.
// - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do alistamento.
console.log("--------------------------------------------------");
console.log("Informe o ano que você nasceu")
console.log("--------------------------------------------------");
const prompt = require('prompt');
prompt.start();
prompt.get(["anoNascimento"], function (err, result) {
    const anoNascimento = parseInt(result.anoNascimento);
    const maioridade = 2023 - anoNascimento;
    if (maioridade < 18 ) {
        console.log("Você tem",maioridade,"anos, com essa idade não pode se alistar ainda!");
        const idadeRestante = 18 - maioridade;
        console.log("Ainda falta",idadeRestante,"anos para poder se alistar!");
    } else {
        const idadePassada = maioridade - 18;
        console.log("Você ja tem idade para se alistar.")
        console.log("E ja passaram", idadePassada, "anos do seu ano de alistamento!!");
    };
});