function calcular() {
    let txtv = document.getElementById('txtvel')
    let res = document.getElementById('res')
    let res2 = document.getElementById('res2')
    let velocidade = Number(txtv.value)

    if (velocidade <= 60) {
        res.innerHTML = `Sua velocidade é de <strong>${velocidade}</strong> Km/h`
        res.innerHTML += `<br>Dirija sempre com cinto de segurança!`
    }

    else {
        res.innerHTML = `Sua velocidade é de <strong>${velocidade}</strong> Km/h`
        res.innerHTML += '<br>Você foi <strong>MULTADO</strong> por excesso de velocidade'
    }
}


// function calcular() {
//     let txtv = window.document.getElementById('txtvel')
//     let res = window.document.getElementById('res')
//     let vel = Number(txtv.value)

//     if (vel > 60) {
//         res.innerHTML = 'Você está MULTADO por excesso de velocidade!'
//     }

//     res.innerHTML = `<p>Sua velocidade atual é de <strong> ${vel} Km/h </strong></p>`
//     res.innerHTML += `Dirija sempre com cinto de segurança!`
// }