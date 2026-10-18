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
{start: 12, end: 14}, //-> 5
{start: 15, end: 28}, //-> 6
{start: 18, end: 25},
{start: 19, end: 23}
]

Initialparenteses =[ [ ],
{start: 0, end: 8}, //-> 0
{start: 3, end: 7}, //-> 1
{start: 12, end: 20}, //-> 
{start: 15, end: 19}
]


expression = ['(', '10', '-', '(', '4', '-', '2', ')', ')', 'x', '5','+','(','6','-','(','5','-','2',')',')']
console.log('expression: ', expression)
parenteses_set = resolverParênteses()
console.log('parenteses_set: ', parenteses_set)
Initialparenteses = parenteses_set
Initialparenteses.unshift([])
console.log('Initialparenteses: ', Initialparenteses)

parenteses_grouped = new Group([...Initialparenteses])
console.log('degsexp group: ',parenteses_grouped)

function Group (parenteses) {

this.parenteses = parenteses
this.referobj = this.parenteses[1]
this.index_referobj = 1
this.arraygroup = [this.referobj]

//console.log('this.parenteses: ', this.parenteses)
if (this.parenteses.length >= 3) {
    contador = 0
for (this.obj = 2; this.obj < this.parenteses.length && contador < 10; this.obj++) {
    //console.log('')
    //console.log('objeto a ser analisado',this.obj, this.parenteses[this.obj])
    //console.log('comparar com this.referobj: ', this.referobj)
  if (this.parenteses[this.obj].start < this.referobj.end) {
  //o this.parenteses do objeto atual começa antes do paresentes em referência acabar, ou seja, o this.parenteses atual está contido no outro
    //console.log(this.parenteses[this.obj], 'está contido em', this.referobj)
    this.arraygroup.push(this.parenteses[this.obj])

    if (this.obj == this.parenteses.length - 1 && this.arraygroup.length != this.parenteses.length && this.arraygroup.length > 1) {
        //console.log('this.obj é o último e this.arraygroup não tem todos os objetos, então é preciso criar o array')
        //console.log('this.arraygroup', this.arraygroup)
    this.parenteses[this.index_referobj] = this.arraygroup

    this.parenteses.splice(this.index_referobj + 1, this.obj - this.index_referobj)
    //console.log('this.parenteses depois do splice', this.parenteses)

    this.obj = this.index_referobj 
    this.index_referobj = this.obj
// para ajustar o parâmetro com a diminuição do tamanho

// chamar a função de novo
//console.log('chamando a função de novo',this.index_referobj, this.parenteses[this.obj])
new Group(this.parenteses[this.obj])
    }

   }else if (this.arraygroup.length > 1) {
     //o this.parenteses atual não está contido no de referência
    //console.log(this.parenteses[this.obj], 'não está contido em', this.referobj)
    this.parenteses[this.index_referobj] = this.arraygroup

    //console.log('splice',this.index_referobj + 1, this.obj - this.index_referobj - 1)
    this.parenteses.splice(this.index_referobj + 1, this.obj - this.index_referobj - 1)
    //console.log('this.parenteses depois do splice', this.parenteses)

    this.obj = this.index_referobj + 1
// para ajustar o parâmetro com a diminuição do tamanho

    this.referobj = this.parenteses[this.obj]
    this.index_referobj = this.obj
    this.arraygroup = [this.referobj]

// chamar a função de novo
//console.log('chamando a função de novo',this.index_referobj, this.parenteses[this.obj - 1])
new Group(this.parenteses[this.obj - 1])
  }
contador++
}
}

return this.parenteses
//console.log('fim do programa')
//console.log('resultado final: ', this.parenteses)
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
N há this.parenteses[2] e não faz sentido começar o loop

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

function resolverParênteses() {
    let degs = []
    let parents = 0
        for (e = 0; e < expression.length; e++) {
            if (expression[e] == '(') {
                let continuar = false
                let stop = false
                let pares = 0
        
                degs.push({})
                degs[parents].start = e
                 
                for (n = e + 1; stop == false && n < expression.length; n++) {
                    if (expression[n] == '(') {
                        pares++
                        continuar = true
                        degs[parents].par = pares
        
                    }else if (continuar == true && expression[n] == ')'){
                          
                            if (pares == 1) {
                                continuar = false
                            }
                            pares--
        
                    }else if (continuar == false && expression[n] == ')') {
                        if (degs[parents].par == undefined) {
                            degs[parents].par = 0
                        }
                        stop = true
        
                        degs[parents].end = n
                    }
                }
                parents++
            }
        } 
                let falta = false
                if (degs.length > 0) {
                for (i = 0; i < degs.length && false == false; i++) {
                    if (degs[i].end == undefined) {
                        falta = true
                    }
                }
            }else if(expression.indexOf(')') != -1){
                 falta = true
            }
                
               if (expression.length != 0 && falta == false) {
                let txt = ''
                for (b = 0; b < expression.length; b++) {
                    txt+= ` ${expression[b]}`
                }
               }

               return degs
}