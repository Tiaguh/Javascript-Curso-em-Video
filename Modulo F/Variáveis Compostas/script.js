/*

// Variáveis simples são capazes de armazenar apenas um valor por vez.

// Variáveis compostas são capazes de armazenar vários valores dentro de uma mesma estrutura.

*/

let num = [5, 8, 4]

num.push(7)
// Push cria um novo espaço na memoria e adiciona o valor a esse elemento.

console.log(`O vetor tem ${num.length} posições`);
// Length informa quantos valores estão armazenados dentro do elemento.

console.log(`Em ordem crescente o vetor fica ${num.sort()}`); 
// Sort ordena os valores em ordem crescente

//--------------------------------------------

//Ex 01 (com For): 

// for (let pos = 0; pos < num.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`); 
// }

//Ex 02 (com While):

// var pos = 0

// while (pos < num.length) {
//     console.log(num[pos]); 
//     pos ++
// }

//Ex 03 (com For In): 

// for (let pos in num) { 
//     console.log(num[pos]);
// }

//Para cada posição na variavel composta...

//------------------------------------------

// Buscar valores dentro de uma array:

// let pos = num.indexOf(4)

// console.log(pos);

//------------------------------------------

//Tentativa prática:

let list = [7, 8, 9, 10]
var soma = 0

for (let c = 0; c < list.length; c++) {

    let valor = list[c]

    soma = soma + valor

    console.log(soma);

}