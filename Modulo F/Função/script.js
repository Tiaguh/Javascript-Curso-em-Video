/* 

Funções:

Funções são ações executadas assim que são chamadas ou em decorrência de algum evento.

Uma função pode receber parâmetros e retornar um resultado.

*/

//EX 01:

// function parimp(n) {
//     if (n % 2 == 0) {
//         return 'par'
//     } else {
//         return 'ímpar'
//     }
// }

// let res = parimp(11)

// console.log(res);

//EX 02:

// function soma(n1 = 0, n2 = 0) {
//     return n1 + n2
// }

// res = soma(6, 4)

// console.log(res);

//EX 03:

let v = function(x){
    return x*2
}

console.log(v(7));