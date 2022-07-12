var amigo={nome:'jose',sexo:'masc',peso:85.5, idade:18,
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)

