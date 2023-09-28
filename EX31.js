// [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)
console.log("-------------");
console.log("Jogo: JoKenPo");
console.log("-------------");
console.log("Como jogar: Informe [1] PEDRA [2] PAPEL [3] TESOURA");
console.log("---------------------------------------------------");
const prompt = require('prompt');
prompt.start();
prompt.get(["jogador1","jogador2"], function (err, result) {
   const jogador1 = parseInt(result.jogador1);
   const jogador2 = parseInt(result.jogador2);
   if (jogador1 == 1 && jogador2 == 3 ||jogador1 == 2 && jogador2 == 1 || jogador1 == 3 && jogador2 == 2) {
      console.log("Jogador 1 venceu");
   } else if (jogador2 == 1 && jogador1 == 3 ||jogador2 == 2 && jogador1 == 1 || jogador2 == 3 && jogador1 == 2) {
      console.log("Jogador 2 venceu");
   } else if (jogador1 > 3 || jogador2 > 3){
      console.log("Jogada INVALIDA");
   }else{
      console.log("EMPATE");
   }
// 1 > 3
// 2 > 1
// 3 > 2
});
