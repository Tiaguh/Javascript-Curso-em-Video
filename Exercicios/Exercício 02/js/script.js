function carregar() {

    let msg = document.getElementById('msg')
    let img = document.getElementById('img')

    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 6 && hora <= 12) {
        //BOM DIA
        img.src = 'img/dia.jpg'
        document.body.style.background = '#e2cd9f'

    }
    else if (hora >= 13 && hora <= 17) {
        //BOA TARDE
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#b9846f'
    }
    else if (hora >= 18 && hora <= 24){
        //BOA NOITE
        img.src = 'img/noite.jpg'
        document.body.style.background = '#515154'
    }
    else {
        //BOA MADRUGADA
        img.src = 'img/madrugada.jpg'
        document.body.style.background = '#000000'
    }

}