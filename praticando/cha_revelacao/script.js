function verificar(){

    var nome = document.querySelector("#txtnome")

    var texto = nome.value


    

    var res = document.getElementById('resultado')

    var sexo= document.getElementsByName('seusex')

    var sexobb = document.getElementsByName('bbsex')

    var genero = ''

    var generobb = ''

    var imagem = document.createElement('img')
    imagem.setAttribute('id','foto')

    if(sexo[0].checked){
    genero = "Pai"
    }else if(sexo[1].checked){
    genero = "Mãe"    
    }

    if(sexobb[0].checked){
    generobb = 'menino'
    imagem.setAttribute('src','menino2_rev.gif.crdownload')
    }else if(sexobb[1].checked){
    generobb = 'menina'
    imagem.setAttribute('src','menina_rev.gif')    
    }
    
    res.innerHTML = ` ${texto}, você é ${genero} de um(a) ${generobb}!`
   
    res.appendChild(imagem)
    
}