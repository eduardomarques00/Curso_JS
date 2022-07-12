function gerar(){

    var tabuada = document.getElementById('num')
    var res = document.getElementById('res')
   var resultado='0'
   var x = 0
   var calc = Number(tabuada.value)
   do {
    res.innerHTML +=` ${x}x${calc}=${ resultado} |`
    x++
    resultado = x*calc
   
   
   }while(x<=10)

  
    
}