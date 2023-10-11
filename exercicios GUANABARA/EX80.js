// Faça um algoritmo que preencha um vetor de 30 posições com números entre 1 e
// 15 sorteados pelo computador. Depois disso, peça para o usuário digitar um
// número (chave) e seu programa deve mostrar em que posições essa chave foi
// encontrada. Mostre também quantas vezes a chave foi sorteada.

let vetor = []
for (let contador = 1;contador<=30;contador++){
    let numero = Math.floor(Math.random()*15)+1
    vetor.push(numero)
}
for (contador = 0;contador<=vetor.length;contador++){
    console.log(vetor[contador])
}