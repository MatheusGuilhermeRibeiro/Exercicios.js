// Faça um algoritmo que leia a largura e altura de uma parede, calcule e
// mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
// sabendo que cada litro de tinta, pinta uma área de 2 metros quadrados.
const prompt = require('prompt');
prompt.start();
prompt.get(["largura","altura", "tamanhoDaLataDeTinta"], function (err, result) {
    const largura = parseFloat(result.largura);
    const altura = parseFloat(result.altura);
    let tamanhoDaLataDeTinta = parseInt(result.tamanhoDaLataDeTinta)
    const lataTinta = tamanhoDaLataDeTinta * 6
    const tinta = (largura * altura) / lataTinta ;
    console.log(tinta);
});