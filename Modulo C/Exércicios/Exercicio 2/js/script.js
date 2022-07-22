// let somar = document.getElementById('Somar')
// somar.addEventListener('click', click)

var n1 = document.getElementById('num1')
var n2 = document.getElementById('num2')
var res = document.getElementById('res')

function somar() {

    let x1 = Number(n1.value)
    let x2 = Number(n2.value)

    s = (x1 + x2)


    res.innerHTML = `A soma entre ${x1} e ${x2} é <strong>${s}</strong>`
}