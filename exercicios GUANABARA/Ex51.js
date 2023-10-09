// Faça um aplicativo que leia o preço de 8 produtos. No final, mostre na tela
// qual foi o maior e qual foi o menor preço digitados.

const prompt = require('prompt');
prompt.start();
let contador = 1
let menor,maior;

function lerpreco() {
    prompt.get(["preco"], function (err, result) {
       let preco = parseFloat(result.preco);
        console.log("R$"+preco)
        if (preco > maior || maior === undefined) {
            maior = preco;
        };
        if (preco < menor || menor === undefined) {
            menor = preco;
        };
        contador++
        if (contador <= 8) {
            lerpreco()
        } else {
            mostrarResultado()
        };
    })
}
function mostrarResultado() {
    console.log("O maior preço foi R$"+maior);
    console.log("O menor preço foi R$"+menor);
}
lerpreco()

