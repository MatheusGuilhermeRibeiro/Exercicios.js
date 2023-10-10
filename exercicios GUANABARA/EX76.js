// Crie um programa que preencha automaticamente um vetor numérico com 7
// números gerados aleatoriamente pelo computador e depois mostre os valores
// gerados na tela.

let vetor = []
for (let contador = 1;contador<=7;contador++){
    let numero = Math.floor(Math.random()*10)+1
    vetor.push(numero)
}
for (contador = 0;contador<=vetor.length;contador++){
console.log(vetor[contador])
    }