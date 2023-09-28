// Crie um programa que leia duas notas de um aluno e calcule a sua média, mostrando uma mensagem no final, de acordo com a média atingida:
// - Média até 4.9: REPROVADO
// - Média entre 5.0 e 6.9: RECUPERAÇÃO
// - Média 7.0 ou superior: APROVADO
console.log("------------------------------------------------");
console.log("Será informado sua média e sua situação escolar ");
console.log("------------------------------------------------");

const prompt = require('prompt');
prompt.start();
prompt.get(["nota1","nota2"], function (err, result) {
    const nota1 = parseFloat(result.nota1);
    const nota2 = parseFloat(result.nota2);
    const media = (nota1 + nota2) / 2 ;
    if (media < 5) {
        console.log("Sua média foi de",media,"pontos você esta REPROVADO!!!!");
    } if (media >=5 && media < 7) {
        console.log("Sua média foi de",media,"pontos você esta de RECUPERAÇÃO!!!!");
    } if (media >= 7 ){
        console.log("Sua média foi de",media,"pontos você esta APROVADO!!!!");
    };
});