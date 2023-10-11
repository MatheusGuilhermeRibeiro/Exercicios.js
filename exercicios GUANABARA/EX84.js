// Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses
// valores em dois vetores, em posições relacionadas. No final, mostre uma listagem
// contendo apenas os dados das pessoas menores de idade.

console.log("Informe seu nome e sua idade")
const prompt = require("prompt");
prompt.start();
let nomes = [];
let idades = [];
function lerDados() {
    prompt.get(["nome", "idade"], function (err, result) {
        let nome = result.nome;
        let idade = parseInt(result.idade);
        nomes.push(nome);
        idades.push(idade);
        if (nomes.length < 9) {
            lerDados();
        } else {
            mostrarMenoresDeIdade();
        }
    });
}
function mostrarMenoresDeIdade() {
    console.log("Pessoas menores de idade:");
    for (let contador = 0; contador < idades.length; contador++) {
        if (idades[contador] < 18) {
            console.log(nomes[contador], idades[contador],"anos");
        }
    }
}
lerDados();