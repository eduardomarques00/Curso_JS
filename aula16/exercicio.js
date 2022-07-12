let num = [5,8,4]

num.sort()//o vetor ficara em ordem decrescente

num[3]=6

num.push(7) //acessa a ultima casa do vetor

console.log(`vetor: ${num}`)

var pos=num.indexOf(4)//busca qual posição esta o valor indicado, caso o valor nao tenha ele retorna -1

console.log(pos)