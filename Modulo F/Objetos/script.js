let amigo = {
    nome: 'José',
    sexo: 'Masculino',
    peso: 85.4,
    engordar(p = 0) {
        console.log('Engordou');
        this.peso += p
    }
}

// amigo.engordar(5)
console.log(amigo.peso);