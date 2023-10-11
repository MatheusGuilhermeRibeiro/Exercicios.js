// [DESAFIO] Crie uma lógica que preencha um vetor de 20 posições com números
// aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os
// números gerados e depois coloque o vetor em ordem crescente, mostrando no final
// os valores ordenados.

let vetor = [];
for (let contador = 1; contador <= 20; contador++) {
    let numero = Math.floor(Math.random() * 99) + 1;
    vetor.push(numero);
}
console.log("Números gerados:");
for (let contador = 0; contador < vetor.length; contador++) {
    console.log(vetor[contador]);
}
vetor.sort((a, b) => a - b);

console.log("Números ordenados:");
for (let contador = 0; contador < vetor.length; contador++) {
    console.log(vetor[contador]);
}