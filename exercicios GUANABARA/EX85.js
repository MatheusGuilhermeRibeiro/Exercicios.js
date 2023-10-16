// Faça um algoritmo que leia o nome, o sexo e o salário de 5 funcionários e
// guarde esses dados em três vetores. No final, mostre uma listagem contendo
// apenas os dados das funcionárias mulheres que ganham mais de R$5 mil.
console.log("Informe seu nome, sexo e salário")
console.log("Para informar seu sexo [ 1 ] MASCULINO [ 2 ] FEMININO");
const prompt = require("prompt");
prompt.start();
let nomes = [];
let sexos = [];
let salarios = [];
function lerDados() {
    prompt.get(["nome","sexo","salario"], function (err, result) {
        let nome = result.nome;
        let sexo = parseInt(result.sexo);
        let salario = parseFloat(result.salario);
        nomes.push(nome);
        sexos.push(sexo);
        salarios.push(salario);
        if (nomes.length < 5) {
            lerDados();
        } else {
            mostrarMaior5Mil();
        }
    });
}
function mostrarMaior5Mil() {
    console.log("Mulheres que recebem mais que R$5.000,00:");
    for (let contador = 0; contador < salarios.length; contador++) {
        if (sexos[contador] == 2 && salarios[contador] > 5000) {
            console.log("Nome:",nomes[contador],"Sexo: Feminino","Salário: R$"+salarios[contador]);
        }
    }
}
lerDados();