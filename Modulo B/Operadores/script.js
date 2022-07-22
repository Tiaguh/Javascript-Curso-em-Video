//Parte  1

//Operadores Aritimeticos 

// +, -, *, /, %, **

// 5 + 2 = 7 (adição)
// 5 - 2 = 3 (subtração)
// 5 * 2 = 10 (multiplicação)
// 5 / 2 = 2.5 (divisão)
// 5 % 2 = 1 (resto da divisão inteira)
// 5 ** 2 = 25 (potenciação)

//Precedência (ordem de precedência dos operadores aritimeticos)

//  ()
//  **
//  *, /, %
//  +, -

let a = 5 + 3   
let b = a % 5
let c = 5 * b **2
let d = 10 -  a/2
let e = 6 * 2 / d
let f = b % e + 4/e

//-------------------------------------------

// Auto Atribuições

let n = 3
n = n + 4
n = n - 5
n = n * 4
n = n / 2
n = n ** 2
n = n % 5

//Simplificando com operadores de atribuição

n += 4
n -= 5
n *= 4
n /= 2
n **= 2
n %= 5  

//Incremento
 
x ++
x --

//Parte 2

//Operadores Relacionais

//  5 > 2 = true    (maior que)
//  7 < 4 = false   (menor que)
//  8 >= 8 = false  (maior ou igual)
//  9 <= 7 = false  (menor ou igual)
//   5 == 5 true   (igual)
//  4 != 4 false (diferente)

//Operadores de Identidade

// 5 == 5 true 
// 5 == '5' true 
// 5 === '5' false 
// 5 === 5 true 

//  === comparador identico (compara valor e tipo)
// !== desigual restrito 

//Operadores Lógicos

// ! negação 
//(true = false) / (false = true)

// && conjunção 
// (true && true = true) / (true && false = false) / (false && true = false) / (false && false = false)

// || disjunção
// (true || true = true) / (true || false = true) / (false || true = true) / (false || false = false)

//Precedência (Ordem de prioridade de excussão de operadores)

// (), **, / ....
// >, <, >= ....
// !
// &&
// ||

//Operador Ternário

//  Teste ? true : false
//  Média >= 7.0 ? "Aprovado" : "Reprovado"