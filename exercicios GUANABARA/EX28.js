// Faça um programa que leia a largura e o comprimento de um terreno retangular, calculando e mostrando a sua área em m². O programa também
// devemostrar a classificação desse terreno, de acordo com a lista abaixo:
// - Abaixo de 100m² = TERRENO POPULAR
// - Entre 100m² e 500m² = TERRENO MASTER
// - Acima de 500m² = TERRENO VIP
console.log("-----------------------------------------------------------");
console.log("Será informado a classificação do seu terreno sabendo que: ");
console.log("Abaixo de 100m² = TERRENO POPULAR");
console.log("Entre 100m² e 500m² = TERRENO MASTER");
console.log("Acima de 500m² = TERRENO VIP");
console.log("-----------------------------------------------------------");
const prompt = require('prompt');
prompt.start();
prompt.get(["largura","comprimento"], function (err, result) {
    const largura = parseFloat(result.largura);
    const comprimento = parseFloat(result.comprimento);
    const terreno = largura * comprimento;
    if (terreno < 100) {
        console.log("Seu terreno tem",terreno+"m² de acordo com a nossa tabela seu terreno é POPULAR")
    } if (terreno >= 100 && terreno <= 500) {
        console.log("Seu terreno tem",terreno+"m² de acordo com a nossa tabela seu terreno é MASTER")
    }if (terreno > 500) {
        console.log("Seu terreno tem",terreno+"m² de acordo com a nossa tabela seu terreno é VIP")
    };
});