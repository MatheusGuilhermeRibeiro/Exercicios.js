// Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No
// final, mostre uma listagem com todos os nomes informados, na ordem inversa
// daquela em que eles foram informados.

let nomes = [];
let contador = 1;
const prompt = require('prompt');
prompt.start();
function lerNomes() {
    prompt.get(["nome"], function (err, result) {
        let nome = result.nome;
        nomes.push(nome);
        if (contador <= 6) {
            contador++;
            lerNomes();
        } else {
            exibirNomesInverso();
        }
    });
}
function exibirNomesInverso() {
    console.log("Nomes informados (ordem inversa):");
    for (let i = nomes.length - 1; i >= 0; i--) {
        console.log(nomes[i]);
    }
}
lerNomes();


