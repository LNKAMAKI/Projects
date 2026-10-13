console.log('parentesis on')

Initialparenteses =[ [ ],
{start: 0, end: 10}, //-> 0
{start: 3, end: 9}, //-> 1
{start: 5, end: 7}, //-> 2
{start: 11, end: 15}, //-> 3
{start: 12, end: 14}, //-> 4
{start: 16, end: 20}, //-> 5
{start: 17, end: 19}
]

/*
Initialparenteses =[
{start: 0, end: 10}, //-> 0
{start: 3, end: 9}, //-> 1
{start: 5, end: 7} //-> 2
]

Initialparenteses =[ [ ],
{start: 0, end: 10}, //-> 0
{start: 3, end: 9}, //-> 1
{start: 5, end: 7}, //-> 2
{start: 11, end: 15}, //-> 3
{start: 12, end: 14}, //-> 4
]

Initialparenteses =[ [ ],
{start: 0, end: 10}, //-> 0
{start: 3, end: 9}, //-> 1
]
*/

Initialparenteses =[ [ ],
{start: 0, end: 10}, //-> 0
{start: 3, end: 9}, //-> 1
{start: 5, end: 7}, //-> 
{start: 8, end: 9},
{start: 11, end: 15}, //-> 4
{start: 12, end: 14} //-> 5
]




new Group(Initialparenteses)

function Group (parenteses) {

this.referobj = parenteses[1]
this.index_referobj = 1
this.arraygroup = [this.referobj]

console.log('parenteses: ', parenteses)
if (parenteses.length >= 3) {
    contador = 0
for (this.obj = 2; this.obj < parenteses.length && contador < 10; this.obj++) {
    console.log('')
    console.log('objeto a ser analisado',this.obj, parenteses[this.obj])
    console.log('comparar com this.referobj: ', this.referobj)
    if (Array.isArray(parenteses[this.obj - 1]) == false) {
  if (parenteses[this.obj].start < this.referobj.end) {
  //o parenteses do objeto atual começa antes do paresentes em referência acabar, ou seja, o parenteses atual está contido no outro
    console.log(parenteses[this.obj], 'está contido em', this.referobj)
    this.arraygroup.push(parenteses[this.obj])

    if (this.obj == parenteses.length - 1 && this.arraygroup.length != parenteses.length) {
        console.log('this.obj é o último e this.arraygroup não tem todos os objetos, então é preciso criar o array')
        console.log('this.arraygroup', this.arraygroup)
    parenteses[this.index_referobj] = this.arraygroup

    parenteses.splice(this.index_referobj + 1, this.obj - this.index_referobj)
    console.log('parenteses depois do splice', parenteses)

    this.obj = this.index_referobj 
    this.index_referobj = this.obj
// para ajustar o parâmetro com a diminuição do tamanho

// chamar a função de novo
console.log('chamando a função de novo',this.index_referobj, parenteses[this.obj])
new Group(parenteses[this.obj])
    }

   }else{
     //o parenteses atual não está contido no de referência
    console.log(parenteses[this.obj], 'não está contido em', this.referobj)
    parenteses[this.index_referobj] = this.arraygroup

    console.log('splice',this.index_referobj + 1, this.obj - this.index_referobj - 1)
    parenteses.splice(this.index_referobj + 1, this.obj - this.index_referobj - 1)
    console.log('parenteses depois do splice', parenteses)

    this.obj = this.index_referobj + 1
// para ajustar o parâmetro com a diminuição do tamanho

    this.referobj = parenteses[this.obj]
    this.index_referobj = this.obj
    this.arraygroup = [this.referobj]

// chamar a função de novo
console.log('chamando a função de novo',this.index_referobj, parenteses[this.obj - 1])
new Group(parenteses[this.obj - 1])
  }
}else{
    console.log(this.obj,'tem q parar aqui')
}
contador++
}
}
console.log('fim do programa')
console.log('resultado final: ', parenteses)
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
Não tem this.obj que leve a criação do novo array, porém, é preciso criá-lo independente: 
[ {start: 0, end: 10},
[{start: 3, end: 9}, {start: 5, end: 7}]
]

*/