console.log('parentesis on')

Initialparenteses =[ [ ],
{start: 0, end: 10}, //-> 0
{start: 3, end: 9}, //-> 1
{start: 5, end: 7}, //-> 2
{start: 11, end: 15}, //-> 3
{start: 12, end: 14} // -> 4
]

group(Initialparenteses)

function group (parenteses) {

referobj = parenteses[1]
index_referobj = 1
arraygroup = [referobj]

console.log('parenteses: ', parenteses)
if (parenteses.length >= 2) {
    contador = 0
for (obj = 2; obj < parenteses.length && contador < 10; obj++) {
    console.log('objeto a ser analisado',obj, parenteses[obj])
    console.log('comparar com referobj: ', referobj)
    if (Array.isArray(parenteses[obj - 1]) == false) {
  if (parenteses[obj].start < referobj.end) {
  //o parenteses do objeto atual começa antes do paresentes em referência acabar, ou seja, o parenteses atual está contido no outro
    console.log(parenteses[obj], 'está contido em', referobj)
    arraygroup.push(parenteses[obj])

    if (obj == parenteses.length - 1 && arraygroup.length != parenteses.length) {
        console.log('obj é o último e arraygroup não tem todos os objetos, então é preciso criar o array')
    parenteses[index_referobj] = arraygroup

    parenteses.splice(index_referobj + 1, obj - index_referobj)

    obj = index_referobj 
// para ajustar o parâmetro com a diminuição do tamanho

// chamar a função de novo
//group(parenteses[index_referobj])
    }

   }else{
     //o parenteses atual não está contido no de referência
    console.log(parenteses[obj], 'não está contido em', referobj)
    parenteses[index_referobj] = arraygroup

    console.log('splice',index_referobj + 1, obj - index_referobj - 1)
    parenteses.splice(index_referobj + 1, obj - index_referobj - 1)
    console.log('parenteses depois do splice', parenteses)

    obj = index_referobj + 1
// para ajustar o parâmetro com a diminuição do tamanho

    referobj = parenteses[obj]
    index_referobj = obj
    arraygroup = [referobj]

// chamar a função de novo

//group(parenteses[index_referobj])
  }
}else{
    console.log(obj,'tem q parar aqui')
}
contador++
}
}
}

/*
Resultado, 1 passo: 
[ [{start: 0, end: 10}, {start: 3, end: 9}, {start: 5, end: 7}], 
{start: 8, end: 12}
]

Resultado, 2 passo: 
[ {start: 0, end: 10},
{start: 3, end: 9}, {start: 5, end: 7}
]

Casos q precisa resolver: 
1.Quando há somente dois objetos dentro do array
Ex: 
[Resultado, 1 passo: 
 [{start: 0, end: 10}, {start: 3, end: 9}]
N há parenteses[2] e não faz sentido começar o loop

2. Quando termina em um array que deve estar dentro do anterior, portanto é preciso criar o array.
Ex: 
[ {start: 0, end: 10},
{start: 3, end: 9}, {start: 5, end: 7}
]
Não tem obj que leve a criação do novo array, porém, é preciso criá-lo independente: 
[ {start: 0, end: 10},
[{start: 3, end: 9}, {start: 5, end: 7}]
]

*/