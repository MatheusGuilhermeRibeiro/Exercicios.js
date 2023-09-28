// Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
// para todos, mas especialmente para mulheres. Faça um programa que leia nome,
// sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo que:
// - Homens ganham 5% de desconto
// - Mulheres ganham 13% de desconto
console.log("--------------------------------------------------");
console.log("Informe seu gênero com [1] MASCULINO [2] FEMININO:");
console.log("--------------------------------------------------");
const prompt = require('prompt');
prompt.start();
prompt.get(["genero","valor"], function (err, result) {
   const genero = result.genero;
   const valor = parseFloat(result.valor);
   if (genero == 1) {
       const desconto = valor * 0.05;
       const total = valor - desconto;
       console.log("Você recebeu um desconto de R$"+desconto,"o novo total da sua compra é R$"+total);
   } if (genero == 2) {
        const desconto = valor * 0.13;
        const total = valor - desconto;
        console.log("Você recebeu um desconto de R$"+desconto,"o novo total da sua compra é R$"+total);
    };
});