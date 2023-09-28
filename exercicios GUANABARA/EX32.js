// Escreva um programa para aprovar ou não o empréstimo bancário para a compra
// de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e
// em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que
// ela não pode exceder 30% do salário ou então o empréstimo será negado.
console.log("---------------------------------------------------");
console.log("Verificação da possibilidade de empréstimo bancário");
console.log("---------------------------------------------------");
const prompt = require('prompt');
prompt.start();
prompt.get(["valorCasa","salario","anosPagamento"], function (err, result) {
    const valorCasa = parseFloat(result.valorCasa);
    const salario = parseFloat(result.salario);
    const anosPagamento = parseInt(result.anosPagamento);
    const mensal = anosPagamento * 12 ;
    const prestacao  = valorCasa / mensal;
    const total =  salario * 0.30 + salario;
    if (total > prestacao){
        console.log("A prestação da sua casa irá ficar mensalmente em R$"+prestacao+".\n" +
        "Com isso não irá exceder 30% do seu salário então seu empréstimo esta APROVADO")
    } else {
        console.log("A prestação da sua casa irá ficar mensalmente em R$"+prestacao+".\n" +
       "Com isso irá exceder 30% do seu salário então o Empréstimo NEGADO");
    };
});