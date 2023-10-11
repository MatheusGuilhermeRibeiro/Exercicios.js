// Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura
// “para”. No final, mostre na tela:
// a) Quantas mulheres foram cadastradas
// b) Quantos homens pesam mais de 100Kg
// c) A média de peso entre as mulheres
// d) O maior peso entre os homens
console.log("-----------------------------------------------------")
console.log("Informe seu sexo [ 1 ] MASCULINO [ 2 ] FEMININO")
console.log("e informe seu peso")
console.log("-----------------------------------------------------")
const prompt = require('prompt');
prompt.start();
let mulher = 0;
let totalPesoMulher = 0;
let  pesoHomemMaisde100kg = 0;
let maior;
let contador = 1;
function lerDados() {
    prompt.get(["sexo", "peso"], function (err, result) {
        let sexo = parseInt(result.sexo)
        let peso = parseInt(result.peso)
            if (sexo == 2) {
                mulher++
                totalPesoMulher = totalPesoMulher + peso
            };
            var mediaPesoMulher = totalPesoMulher / mulher
            if (sexo == 1 && peso > 100) {
                pesoHomemMaisde100kg++
            }
            ;
            if (sexo == 1 && peso > maior || maior == undefined) {
                maior = peso
            }
            if (contador <= 8){
                contador++
                lerDados()
            } else {
                console.log("Foram cadastradas",mulher,"mulheres")
                console.log("Foram cadastrados",pesoHomemMaisde100kg,"homens acima de 100KG")
                console.log("A média de peso das mulheres é",mediaPesoMulher+"KG")
                console.log("O maior peso registrado entre os homens é de",maior+"KG")
            };
        });
    };
lerDados()