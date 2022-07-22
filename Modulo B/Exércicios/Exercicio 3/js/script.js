//Fomatação de Strings

let nome = window.prompt('Qual o seu nome?')
document.writeln(`Olá <strong>${nome}</strong>, seu nome tem ${nome.length} letras`)
document.write("<br>")
document.writeln(`Seu nome em maísculas é ${nome.toUpperCase()} `)
document.write("<br>")
document.writeln(`Seu nome em maísculas é ${nome.toLocaleLowerCase()} `)

//----------------------------------------------------------------------------------------------

//Formatação de Numbers

let número = 1545.5

número.toFixed(2)

número.toFixed(2).replace('.',',')

//Encontrar a moeda de um determinado país =

// num.toLocaleString('pt-BR', {style: 'currency',  currency: 'BRL'})