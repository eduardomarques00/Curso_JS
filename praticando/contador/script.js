function clique(){
    var inicio = document.getElementById('txtinicio')

    var fim= document.getElementById('txtfim')

    var passo= document.getElementById('txtpasso')

    var res= document.getElementById('resultado')

    if(inicio.value.length ==0 || fim.value.length==0 || passo.value.length==0){
        window.alert("Dados inválidos! Tente novamente.")
    }else {
      res.innerHTML = `contando...`
      var i = Number(inicio.value)
      var f = Number(fim.value)
      var p = Number(passo.value)

      if(i<f){
        for(var c=i; c<=f; c+= p){
            res.innerHTML += `${c}.`
        }
    }else{
        for(var c=i; c>=f; c-=p){
         res.innerHTML += `${c}.`
        }
         
    }
   
}
}