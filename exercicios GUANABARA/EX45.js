// O programa anterior vai ter um problema quando digitarmos o primeiro valor
// maior que o último. Resolva esse problema com um código que funcione em qualquer
// situação.

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
    if (valorInicial >= valorFinal) {
        console.log("O valor inicial deve ser menor ou igaul ao valor final");
    } else {
        var contagem = valorInicial;
        console.log(contagem)
    }
    if (incremento <= 0) ;{
        console.log("O incremento deve ser maior que zero")
    }
    while (contagem <= valorFinal) {
        console.log(contagem);
        contagem += incremento;
    }
    console.log("Acabou!");
});