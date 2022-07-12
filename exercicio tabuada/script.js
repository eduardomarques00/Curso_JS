function gerar(){

    var tabuada = document.getElementById('num')
    var tab = document.getElementById('seltab')
   
   var x = 0
   var calc = Number(tabuada.value)
   tab.innerHTML = ''
   do {
    var item = document.createElement('option')
    item.text = `${x} x ${calc} = ${x*calc}`
    tab.appendChild(item)
    x++
    
   
   
   }while(x<=10)

  
    
}
