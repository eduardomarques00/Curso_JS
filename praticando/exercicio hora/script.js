function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora =data.getHours()

msg.innerHTML= `agora são ${hora} horas`
}