// Faça um programa que mostre os 10 primeiros elementos da Sequência
// de Fibonacci:
// 1 1 2 3 5 8 13 21...
let anterior = 0;
let atual = 1;
for (let numero = 1;numero <= 10;numero++){
    console.log(atual)
    proximo = anterior + atual
    anterior = atual
    atual = proximo
}
