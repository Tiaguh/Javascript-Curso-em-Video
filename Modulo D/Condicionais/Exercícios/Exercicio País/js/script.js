function verificar() {

    let pais = document.getElementById('from')
    let res = document.getElementById('resposta')

    if ((pais.value) == 'Brasil' || (pais.value) == 'brasil' || (pais.value) == 'BR' || (pais.value) == 'br') {
        res.innerHTML = `Você é Brasileiro`
    }
    
    else if((pais.value) == 'Estados Unidos' || (pais.value) == 'EUA' || (pais.value) == eua){
        res.innerHTML = 'Você é Americano'
    }

    else {
        res.innerHTML = `Você é Estrangeiro`
    }

}
