// [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo de triângulo será formado:
// - EQUILÁTERO: todos os lados iguais
// - ISÓSCELES: dois lados iguais
// - ESCALENO: todos os lados diferentes

console.log("-------------------------------------------");
console.log("Condicões se é possivel formar um triângulo");
console.log("-------------------------------------------");
const prompt = require('prompt');
prompt.start();
prompt.get(["reta1","reta2","reta3"], function (err, result) {
    const reta1 = parseFloat(result.reta1);
    const reta2 = parseFloat(result.reta2);
    const reta3 = parseFloat(result.reta3);
    if (reta1 < reta2 + reta3 && reta2 < reta1 + reta3 && reta3 < reta1 + reta2) {
        console.log("Forma um triângulo:");
    } if (reta1 == reta2 == reta3) {
        console.log("EQUILÁTERO");
    }else if (reta1 == reta2 || reta1 == reta3 || reta2 == reta3) {
        console.log("ISÓCELES")
    } else {
        console.log("ESCALENO")
    };
});