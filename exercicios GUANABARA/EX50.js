// Desenvolva um programa que faça o sorteio de 20 números entre 0 e 10 e mostre na tela:
// a) Quais foram os números sorteados
// b) Quantos números estão acima de 5
// c) Quantos números são divisíveis por 3
console.log("Serão 20 números sorteados");
console.log("Será mostrando quantos números estão acima de 5");
console.log("Será mostrando quantos números são divisíveis por 3");
let acima5 = 0;
let divisivel3 = 0;
    function sortearNumero(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    for (let i = 0; i <= 20; i++) {
        const numeroSorteado = sortearNumero(0, 10);
        console.log(numeroSorteado);
        if (numeroSorteado % 3 === 0) {
            divisivel3 ++

        } if (numeroSorteado > 5) {
            acima5++
        }

    };
console.log("Existem",acima5,"números acima de 5");
console.log("Existem",divisivel3,"números divisíveis por 3");
