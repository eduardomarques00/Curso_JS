function checar(){
   var data= new Date()
   var ano= data.getFullYear()
   

   var anonascimento = document.getElementById('txtano')

   var resultado = document.getElementById('resultado')

   if(anonascimento.value.length==0 || anonascimento.value.length > ano){
    window.alert('Dados incorretos ! Verifique e tente novamente.')
   }else{
     var sexo = document.getElementsByName('radsex')

   var  idade = ano-Number(anonascimento.value)

   

   var genero = ''

   var imagem = document.createElement('img')
   imagem.setAttribute('id','foto')

   if(sexo[0].checked) {
    genero= "Masculino"

    if(idade>=0 && idade<=12){
      imagem.setAttribute('src', 'menino.png')
    }else if(idade>=13 && idade<=17){
      imagem.setAttribute('src', 'adolescenteM.png')
    }else if(idade>=18 && idade<=59){
      imagem.setAttribute('src', 'homem.png')
    }else {
      imagem.setAttribute('src', 'idoso.png')
    }
  }else if(sexo[1].checked){
    genero= "Feminino"
   

   if(idade>=0 && idade<=12){
    imagem.setAttribute('src', 'menina.png')
  }else if(idade>=13 && idade<=17){
    imagem.setAttribute('src', 'adolescenteF.png')
  }else if(idade>=18 && idade<=59){
    imagem.setAttribute('src', 'mulher.png')
  }else {
    imagem.setAttribute('src', 'idosa.png')
  }
}




   

    resultado.innerHTML= `Você possui ${idade} anos e é do genero ${genero}`
    resultado.appendChild(imagem)
   }

}