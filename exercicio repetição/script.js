function ver() {

    var start =document.getElementById('inicio')
    var finish = document.getElementById('fim')
    var jump = document.getElementById('passo')
    var res = document.getElementById('res')

   if(start.value.length ==0 || finish.value.length ==0 || jump.value.length ==0){
       window.alert("ERROR FALTAM DADOS!!!!!!!!!")

   }else{
       res.innerHTML = `contando:...`
       var i = Number(start.value)
       var f = Number(finish.value)
       var j = Number(jump.value)
       if(i<f){
        for(var c = i; c<= f; c+= j){
               res.innerHTML += `${c} \u{1F449}`
        }
       
       } else{
           for(var c = i; c >= f; c -= j){
               res.innerHTML += `${c} \u{1F449}`

           }
       }
              res.innerHTML += `\u{1F3C1}`
        
       
       
   }
}


