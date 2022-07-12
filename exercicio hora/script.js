function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML =`Agora são ${hora} horas.`

    if(hora>=6 && hora<12){
            img.src = 'dia.png'
            document.body.style.background = 'rgb(255,255,151)'
    }else if(hora>=12 && hora<18){
            img.src = 'tarde.png'
            document.body.style.background = 'rgb(255,141,28)'
    }else{
            img.src = 'noite.png'
            document.body.style.background = 'rgb(0,0,0)'
    }


}