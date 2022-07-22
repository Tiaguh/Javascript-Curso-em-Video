// DOM = Document Object Model

//O que é uma Árvore DOM?

// O DOM é uma interface de programação para documentos HTML, XML e SVG . 
// Ele fornece uma representação estruturada do documento como uma árvore. 
//O DOM define métodos que permitem acesso à árvore, para que eles possam alterar a estrutura, estilo e conteúdo do documento.

//window.document.write(window.document.charset) Verifica o SET de caracteres
//window.document.write(window.navigator.appName) Verificar o nome do navegador
// window.document.write(window.document.URL) Verificar a URL que estou acessando

//Método de acesso aos elementos da Árvore DOM

// Por marca

document.getElementsByTagName()

// let p1 = document.getElementsByTagName('p')[0]
// document.write("Está escrito assim:" + p1.innerText)

// Por ID

document.getElementById()

// let d = document.getElementById('msg')
// d.innerText = 'Olá'


// Por nome

document.getElementsByName()

// Por Classe

document.getElementsByClassName()

// Por Seletor

document.querySelector()