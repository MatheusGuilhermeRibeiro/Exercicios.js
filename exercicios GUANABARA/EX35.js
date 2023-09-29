//  Uma empresa de aluguel de carros precisa cobrar pelos seus serviços.
// O aluguel de um carro custa R$90 por dia para carro popular e R$150 por dia para
// carro de luxo. Além disso, o cliente paga por Km percorrido. Faça um programa
// que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e
// quantos Km foram percorridos. No final mostre o preço a ser pago de acordo com a
// tabela a seguir:
//  - Carros populares (aluguel de R$90 por dia)
//  - Até 100Km percorridos: R$0,20 por Km
//  - Acima de 100Km percorridos: R$0,10 por Km
//  - Carros de luxo (aluguel de R$150 por dia)
//  - Até 200Km percorridos: R$0,30 por Km
//  - Acima de 200Km percorridos: R$0,25 por Km
console.log("------------------");
console.log("Alugueis de carros");
console.log("Informe se o carro é [1]Popular ou [2]Luxo");
console.log("------------------");
const prompt = require('prompt');
prompt.start();
prompt.get(["carro","kmpercorrido","dias"], function (err, result) {
    const carro = parseFloat(result.carro);
    const kmpercorrido = parseFloat(result.kmpercorrido);
    const dias = parseInt(result.dias);
    if (carro == 1 && kmpercorrido < 100) {
        const diasPopular = dias * 90;
        const kmPoupular = kmpercorrido * 0.20;
        const total = kmPoupular + diasPopular;
        console.log("Você ficou com o carro",dias,"dias, com isso o valor em dias ficou R$",diasPopular,".\n" +
            "Percorreu ao todo",kmpercorrido+"Km, com isso seu valor ficou em R$",kmPopular,".\n" +
            "O valor total ficou em R$",total);
    } else if (carro == 1 && kmpercorrido > 100) {
        const diasPopular = dias * 90;
        const kmPopular = kmpercorrido * 0.10;
        const total = kmPopular + diasPopular;
        console.log("Você ficou com o carro",dias,"dias, com isso o valor em dias ficou R$",diasPopular,".\n" +
            "Percorreu ao todo",kmpercorrido+"Km, com isso seu valor ficou em R$",kmPopular,".\n" +
            "O valor total ficou em R$",total);
    } else if (carro == 2 && kmpercorrido < 200) {
        const diasLuxo = dias * 150;
        const kmLuxo = kmpercorrido * 0.30;
        const total = diasLuxo + kmLuxo;
        console.log("Você ficou com o carro",dias,"dias, com isso o valor em dias ficou R$",diasLuxo,".\n" +
            "Percorreu ao todo",kmpercorrido+"Km, com isso seu valor ficou em R$",kmLuxo,".\n" +
            "O valor total ficou em R$",total);
    } else if (carro == 2 && kmpercorrido > 200) {
        const diasLuxo = dias * 150;
        const kmLuxo = kmpercorrido * 0.25;
        const total = diasLuxo + kmLuxo;
        console.log("Você ficou com o carro",dias,"dias, com isso o valor em dias ficou R$",diasLuxo,".\n" +
            "Percorreu ao todo",kmpercorrido+"Km, com isso seu valor ficou em R$",kmLuxo,".\n" +
            "O valor total ficou em R$",total);
    } else {
        console.log("Opção Invalida")
    };
});