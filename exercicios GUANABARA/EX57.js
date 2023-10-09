// Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários.
// No final, mostre o total de salários pagos aos homens e o total pago às mulheres.
// O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.
console.log("Informe seu sálario e seu sexo [ 1 ] MASCULINO [ 2 ] FEMININO");
console.log("Digite 'S' para continuar!!!!")
const prompt = require('prompt');
prompt.start();
let salarioHomens = 0;
let salarioMulher = 0;
function lerDados () {
    prompt.get(["salario", "sexo","continuar"], function (err, result) {
        let salario = parseFloat(result.salario);
        let sexo = result.sexo;
        let continuar = result.continuar;
        if (sexo == 1){
            salarioHomens = salarioHomens + salario
        } else if (sexo == 2) {
            salarioMulher = salarioMulher + salario
        }
        if (continuar == "S" || continuar == "s"){
            lerDados()
        }else {
            console.log("O sálario total de todos os homens foi R$"+salarioHomens)
            console.log("O sálario total de todas as mulheres foi R$"+salarioMulher)
        };
    });
}
return lerDados()