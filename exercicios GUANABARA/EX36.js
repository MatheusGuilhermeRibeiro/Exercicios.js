// Um programa de vida saudável quer dar pontos atividades físicas que podem ser trocados por dinheiro. O sistema funciona assim:
// - Cada hora de atividade física no mês vale pontos
// - até 10h de atividade no mês: ganha 2 pontos por hora
// - de 10h até 20h de atividade no mês: ganha 5 pontos por hora
// - acima de 20h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$0,05 (5 centavos)
console.log("---------------------------------------------------------");
console.log("Ganhe pontos com atividades fisicas e troque por dinheiro");
console.log("---------------------------------------------------------");
const prompt = require('prompt');
prompt.start();
prompt.get(["atividadeHora"], function (err, result) {
    const atividadeHora = result.atividadeHora;
    if (atividadeHora < 10) {
        const pontos = atividadeHora * 2;
        const dinheiro = pontos * 0.05;
        console.log("Você fez exercicios esse mês por",atividadeHora,"horas e acumulou",pontos," pontos. O total que você receberá vai ser R$"+dinheiro);
    }else if (atividadeHora >= 10 && atividadeHora <=20){
        const pontos = atividadeHora * 5;
        const dinheiro = pontos * 0.05;
        console.log("Você fez exercicios esse mês por",atividadeHora,"horas e acumulou",pontos," pontos. O total que você receberá vai ser R$"+dinheiro);
    } else {
        const pontos = atividadeHora * 10;
        const dinheiro = pontos * 0.05;
        console.log("Você fez exercicios esse mês por",atividadeHora,"horas e acumulou",pontos," pontos. O total que você receberá vai ser R$"+dinheiro);
    };
});

