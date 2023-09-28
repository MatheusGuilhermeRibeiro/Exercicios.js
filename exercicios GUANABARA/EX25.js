// [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
// Analise seus comprimentos e diga se é possível formar um triângulo com essas
// retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
// de cada lado deve ser menor que a soma dos outros dois.
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
        console.log("Forma um triângulo");
    } else {
        console.log("NÃO forma um triângulo");
    };
});