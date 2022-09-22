function calcular(){

    var valor1 = document.getElementById('n1')

    var valor2 = document.getElementById('n2')

    var resultado = document.getElementById('resultado')

    var operador = document.getElementsByName('radcalc')

    var res=''

    if(operador[0].checked){
        res= Number(valor1.value) + Number(valor2.value)

    }else if(operador[1].checked){
        res= Number(valor1.value) - Number(valor2.value)
    }else if(operador[2].checked){
        res= Number(valor1.value) / Number(valor2.value)
    }else if(operador[3].checked){
        res= Number(valor1.value) * Number(valor2.value)
    }
    

    resultado.innerHTML = `o resultado da operação é :${res}`
}