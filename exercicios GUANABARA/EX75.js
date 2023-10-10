// Crie um programa que preencha automaticamente (usando lógica, não apenas
// atribuindo diretamente) um vetor numérico com 15 posições com os primeiros
// elementos da sequência de Fibonacci:
// 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
function fibonacci(n) {
    const sequencia = [1, 1];

    for (let contador = 2; contador < n; contador++) {
        sequencia.push(sequencia[contador - 1] + sequencia[contador - 2]);
    }
    return sequencia;
}

const vetorFibonacci = fibonacci(16);
console.log(vetorFibonacci);

