// [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
// fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
// já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
// quantos dias de vida um fumante perderá e exiba o total em dias.

const prompt = require('prompt');
prompt.start();
prompt.get(["cigarroDia","anos"], function (err, result) {
    const cigarroDia = parseInt(result.cigarroDia);
    const anos = parseInt(result.anos);
    const dia = anos * 365;
    const totalCigarro= dia * cigarroDia;
    const  minutos = totalCigarro * 10;
    const vidaPerdida = minutos / 1440
    console.log("Você fuma",cigarroDia,"cigarros por dia");
    console.log("Você ja fumou",totalCigarro," cigarros durante toda sua vida");
    console.log("Ao total você ja perdeu",vidaPerdida,"dias da sua vida");
});
