// Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
// média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
// não um bom aproveitamento (se ficou acima da média 7.0).
console.log("----------------------");
console.log("Informe as duas notas:");
console.log("----------------------");
const prompt = require('prompt');
prompt.start();
prompt.get(["nota1","nota2"], function (err, result) {
   const nota1 = parseFloat(result.nota1);
   const nota2 = parseFloat(result.nota2);
   const media = (nota1 + nota2) / 2;
   if (media >= 7) {
       console.log("Sua média foi",media,"parabéns você esta acima da média!!!");
   } else {
       console.log("Sua média foi",media,"você esta abaixo da média!!!");
   };
});