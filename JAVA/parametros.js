//parâmetros de função
// };
// function nomeIdade(nome,idade){
//     return `meu nome é ${nome} e minha idade é ${idade}`
// }
// console.log(nomeIdade("Matheus",25))
function soma(numero1, numero2) {
    return numero1 + numero2;
}
function multiplica(numero1 = 1 ,numero2 = 1){
    return numero1 * numero2;
}
// console.log(soma(2, 2));
// console.log(soma(245, 20));
// console.log(soma(-500, 60));
console.log(multiplica(soma(4,5)))
