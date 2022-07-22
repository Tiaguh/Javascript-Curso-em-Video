/*

Condições Aninhadas

Condições aninhadas são estruturas de decisão encadeadas, aninhadas 
dentro de outras condições, como blocos de verdadeiro ou falso.

if (condition1) {
    bloco1
} else {

    if (condition2) {
        bloco2
    } else {
        bloco3
    }
}

*/

//Exercicío:

let agora = new Date()
let hora = agora.getHours()

console.log(`Agora são ${hora} horas`);

if (hora >= 5 && hora <= 12) {
    console.log('Bom dia');
}
else if (hora >= 12 && hora <= 18) {
    console.log('Boa tarde');
}
else {
    console.log('Boa noite');
}

