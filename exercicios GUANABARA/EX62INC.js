// Faça um programa usando a estrutura “faça enquanto” que leia a idade de
// várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou
// não continuar a digitar dados. No final, quando o usuário decidir parar, mostre na tela:
// a) Quantas idades foram digitadas
// b) Qual é a média entre as idades digitadas
// c) Quantas pessoas tem 21 anos ou mais.

console.log("------------------------------------")
console.log("Informe sua idade")
console.log("Digite 'S' para continuar o programa")
console.log("------------------------------------")
const prompt = require('prompt');
prompt.start();
let contador = 0;
let totalIdade = 0;
let idadeAcima21 = 0;
function lerDados () {
    prompt.get(["idade","continuar"], function (err, result) {
        let idade = parseInt(result.idade)
        let continuar = result.continuar
        if (idade >= 21) {
            idadeAcima21++
        }
        totalIdade = totalIdade + idade
        contador++
        var mediaIdade = totalIdade / contador;
        if (continuar == "S" || continuar == "s") {
            lerDados()
        } else {
            console.log("Foram digitadas", contador, "idades")
            console.log("A média de idade foi", mediaIdade, "anos")
            console.log("Tem", idadeAcima21, "pessoas com mais de 21 anos")
        }

    });
}
return lerDados()
