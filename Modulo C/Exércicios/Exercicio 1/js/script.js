//Eventos DOM são um sinal de que algo ocorreu ou está ocorrendo e podem ser acionados por interações do usuário ou pelo navegador.
//Função é um conjunto de linhas que só vão ser executadas quando o evento ocorrer

var a= document.getElementById('area')

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {

    a.innerText = 'Você clicou!'
    a.style.background = 'red'

}

function entrar(){

    a.innerText = 'Você entrou!'

}

function sair(){

    a.innerText = 'Você saiu'
    a.style.background = 'rgb(53, 141, 53)'

}