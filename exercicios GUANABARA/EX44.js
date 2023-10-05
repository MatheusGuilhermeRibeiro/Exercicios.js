// Crie um algoritmo que leia o valor inicial da contagem, o valor final e o
// incremento, mostrando em seguida todos os valores no intervalo:
// Ex: Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!
console.log("-------------------------------");
console.log("Informe um valor inicial:")
console.log("Informe um valor final:")
console.log("Informe um valor de incremento:");
console.log("-------------------------------");
const prompt = require('prompt');
prompt.start();
prompt.get(["valorInicial","valorFinal","incremento"], function (err, result) {
    const valorInicial = parseInt(result.valorInicial);
    const valorFinal = parseInt(result.valorFinal);
    const incremento = parseInt(result.incremento);
    var contagem = valorInicial;
    while (contagem <= valorFinal) {
        console.log(contagem);
        contagem += incremento;
    }
    console.log("Acabou!");
});

