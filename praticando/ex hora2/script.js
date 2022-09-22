function carregar(){
    var msg = window.document.getElementById('msg')
    var img= window.document.getElementById('foto')
    var data= new Date()
    var hora = data.getHours()
    
    msg.innerHTML= `Agora são ${hora} horas.`

    if(hora>=6 && hora<=15){
        img.src = 'trabalho.png'
        document.body.style.background = 'rgb(255,255,151)'
        msg.innerHTML= `agora são ${hora} horas. Você esta trabalhando`
        
       }else if(hora>15 && hora<=20){
        img.src = 'treino.jpg'
        document.body.style.background = 'rgb(255,255,70)'
        msg.innerHTML= `agora são ${hora} horas.Você esta treinando`

       }else {
        img.src = 'descanso.png'
        document.body.style.background = 'rgb(31,31,31)'
        msg.innerHTML= `agora são ${hora} horas.Hora de dormir`
       }
        
       
    
}