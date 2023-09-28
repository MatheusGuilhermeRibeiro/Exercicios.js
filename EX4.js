const prompt = require('prompt');
prompt.start();

prompt.get(["variavel1", "variavel2"], function (err, result) {
    const barbara = parseInt(result.variavel1);
    const matheus = parseInt(result.variavel2);
    const calculo = barbara + matheus
    console.log(`O resultado é ${calculo}`);
});
