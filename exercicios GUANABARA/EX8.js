//Desenvolva um programa que leia uma distância em metros e mostre os valores relativos em outras medidas.
const prompt = require('prompt');
prompt.start();

prompt.get(["num1"], function (err, result) {
    const num1 = parseFloat(result.num1);
    const Km = num1 / 1000;
    const Hm = num1 / 100;
    const Dam = num1 / 10;
    const dm = num1 * 10;
    const cm = num1 * 100;
    const mm = num1 * 1000;
    console.log(Km+"Km");
    console.log(Hm+"Hm");
    console.log(Dam+"Dam");
    console.log(dm+"dm");
    console.log(cm+"cm");
    console.log(mm+"mm");
});