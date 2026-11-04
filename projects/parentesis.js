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


expression_text = "(100x - ( 4 - ( 20 * 5 ) + ( 4 - 6 * 9 + (  8 - 4 )  ) - 6 )  ) * 4 + (  5 + (  6 - (5 - 2) + (6 + 8) )  )"
//expression_text = "(100x - (4 - (20 * 5) - 6)) * 5 + (6 - (5 - 2))"
//expression_text = "100x  (5x + 3x) + (10 * 5) - (6 - (5 - 2))"
//expression_text = "(100x - ( 4 + 9 ) ) +  (  5  *  ( 9  +  5   )  )"
    //             0 1   2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17  18
expression_text = "(100x - ( 4 + ( 9 * 5 + (6 + 5) ) + 102 ) ) +  (  5  *  ( 9  +  5   )  ) + 91"
//expression_text = "(100x -  4 + (    (9 * 5)   + ((6 + 5))    ) )"
//expression_text = "(100x - ((4 + 5))) +  ( 9  +  5  )"
// não vai ter o caso de triplo par de parênteses, tipo [[[Array]]], no  máximo vai ter [[Array], {...}], que só vai acontecer quando currentArray = parenteses_grouped2
//expression_text = "(100 - ( 5 + 6 + (2 - 3) ) + (89 * 7) )"
//expression_text = "( 100 - ( (5 + 6 + (2 - 3)) + (4 * 5) + 8 * 6) ) + (89 * 7))"
// [[Array],{...}]
//expression_text = "100 - (5x * 8) + 3"

expression = Str_toArray(expression_text)
function Str_toArray(str) {
    str = str.replaceAll(' ','')
    console.log('string',str)
    str_array = []
    str_element = ''
    for (e in str) {
        console.log(e,str[e])
        if (str_element.search('[a-z]|[0-9]') != -1 && str[e].search('[a-z]|[0-9]') != -1) {
            str_element += str[e]
        }else if (e != 0){  // if (str_element.search('[a-z]|[0-9]') == -1 && str[e].search('[a-z]|[0-9]') != -1) {
            str_array.push(str_element)
            str_element = str[e]
        }else{
            str_element = str[e]
        }
    }
    str_array.push(str_element)
    console.log(str_array)
    return str_array
}

//expression = ['10']//['(', '10', '-', '(', '4', '-', '2', ')', ')', '*', '5','+','(','6','-','(','5','-','2',')',')']
console.log('expression: ', expression)
parenteses_set = resolverParênteses()
console.log('parenteses_set: ', parenteses_set)
Initialparenteses = parenteses_set
Initialparenteses.unshift([])
console.log('Initialparenteses: ', Initialparenteses)

const parenteses_grouped = new Group([...Initialparenteses], [])
console.log('parenteses grouped: ',parenteses_grouped)
//console.log('group array: ',parenteses_grouped[1])

group_text = []
function Group (parenteses,grouparray = []) {

this.grouparray = grouparray
this.parenteses = parenteses
this.referobj = this.parenteses[1]
this.index_referobj = 1
this.arraygroup = [this.referobj]

//console.log('this.parenteses: ', this.parenteses)
if (this.parenteses.length >= 3) {
    contador = 0
for (this.obj = 2; this.obj < this.parenteses.length && contador < 10; this.obj++) {
    //console.log('')
    console.log('objeto a ser analisado',this.obj, this.parenteses[this.obj])
    console.log('comparar com this.referobj: ', this.referobj)
    console.log(' ')
  if (this.parenteses[this.obj].start < this.referobj.end) {
  //o this.parenteses do objeto atual começa antes do paresentes em referência acabar, ou seja, o this.parenteses atual está contido no outro
    //console.log(this.parenteses[this.obj], 'está contido em', this.referobj)
    this.arraygroup.push(this.parenteses[this.obj])

    if (this.obj == this.parenteses.length - 1 && this.arraygroup.length != this.parenteses.length && this.arraygroup.length > 1) {
        //console.log('this.obj é o último e this.arraygroup não tem todos os objetos, então é preciso criar o array')
        console.log('this.arraygroup', this.arraygroup)
        console.log(this.referobj.start,this.referobj.end)
         console.log('adicionar o array')
    this.parenteses[this.index_referobj] = this.arraygroup

    this.parenteses.splice(this.index_referobj + 1, this.obj - this.index_referobj)
    //console.log('this.parenteses depois do splice', this.parenteses)

    this.obj = this.index_referobj 
    this.index_referobj = this.obj
    this.grouparray.push([this.referobj.start + ':' + this.referobj.end])
// para ajustar o parâmetro com a diminuição do tamanho

// chamar a função de novo
console.warn('chamando a função de novo',this.index_referobj, this.parenteses[this.obj])
new Group(this.parenteses[this.obj], this.grouparray[this.grouparray.length - 1])
    }

   }else if (this.arraygroup.length > 1) {
   
     //o this.parenteses atual não está contido no de referência
    //console.log(this.parenteses[this.obj], 'não está contido em', this.referobj)
    console.log('this.arraygroup', this.arraygroup)
    console.log(this.referobj.start,this.referobj.end)
    console.log('adicionar o array')
    this.parenteses[this.index_referobj] = this.arraygroup

    //console.log('splice',this.index_referobj + 1, this.obj - this.index_referobj - 1)
    this.parenteses.splice(this.index_referobj + 1, this.obj - this.index_referobj - 1)
    //console.log('this.parenteses depois do splice', this.parenteses)

    this.obj = this.index_referobj + 1
// para ajustar o parâmetro com a diminuição do tamanho
    this.grouparray.push([this.referobj.start + ':' + this.referobj.end])
    this.referobj = this.parenteses[this.obj]
    this.index_referobj = this.obj
    this.arraygroup = [this.referobj]
// chamar a função de novo
console.warn('chamando a função de novo',this.index_referobj, this.parenteses[this.obj - 1])
new Group(this.parenteses[this.obj - 1],this.grouparray[this.grouparray.length - 1])
  }else{
    console.log('objeto adjacente')
    /*
    if (this.index_referobj == 1) {
        console.log('ADDD')
        this.grouparray.push(['a'])
    }*/
    this.referobj = this.parenteses[this.obj]
    this.index_referobj = this.obj
    this.arraygroup = [this.referobj]
    this.grouparray.push([this.referobj.start + ':' + this.referobj.end])
  }
contador++
}
}

return this.parenteses // [this.parenteses,this.grouparray]
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

parenteses_grouped2 = [...parenteses_grouped]
expression2 = [...expression]
DoGroup(parenteses_grouped2,-1,expression2.length)
function DoGroup(currentArray,initial_index,final_index) {
    this.final_index = final_index
    this.currentArray = currentArray
    this.initial_index = initial_index
    this.ends = [this.initial_index] // somente para quando currentArray = parenteses_grouped()
    this.groups = []
    if (Array.isArray(this.currentArray[0]) && this.currentArray[0].length == 0) {
        console.log('shift')
    this.currentArray.shift()
    }
    // hora de fazer a recursividade
    for (this.index_group = 0; this.index_group < this.currentArray.length; this.index_group++) {
        console.log('ends',this.ends)
        this.group = this.currentArray[this.index_group]
        console.log(this.index_group)
        console.log('-------------------------------------------------',[...this.currentArray])
       
        this.groupsup = this.currentArray
         if (Array.isArray(this.group) && this.group.length > 0) {
            console.log('group[0]')
            this.groupsup = this.group // array do qual group faz parte
            this.group = this.group[0]
            console.log(Array.isArray(this.group))
        }

        console.log('GROUP',this.index_group,this.group)
        
            console.log(this.group.start,':',this.group.end)
            //console.log(expression.slice(this.ends[this.ends.length - 1] + 1, group.start))
            console.log('de ',this.ends[this.ends.length - 1] + 1,' a ',this.group.start, ' : ', expression2.slice(this.ends[this.ends.length - 1] + 1, this.group.start))
            if (this.ends[this.ends.length - 1] + 1 < this.group.start) {
            this.groups.push(expression2.slice(this.ends[this.ends.length - 1] + 1, this.group.start)) // adicionar o que está entre os grupos
            }
            this.ends.push(this.group.end)
            console.log('groupsup',this.groupsup)
            console.log('O INDEX_GROUP NÃO É 0?',this.index_group == 0)
            console.log(this.currentArray,this.groupsup)
            if (this.groupsup != this.currentArray) {
            //if (this.index_group == 0 || this.currentArray == parenteses_grouped2) {
                console.log('SSSSSSSSSSSSSS')
            if (this.groupsup.length > 1) { // se houver mais de um grupo dentro do array, ou seja, há recursividade
                console.log('adicionando array ao this.groups')
                this.groups.push('(')
                /*
                if (Array.isArray(this.groupsup.slice(1,this.groupsup.length)[0])) { // se for array
                   this.groups.push(this.groupsup.slice(1,this.groupsup.length)[0])
                }else{ // se não for array, ou seja, é um objeto
                   this.groups.push(this.groupsup.slice(1,this.groupsup.length))
                }*/
                
                   this.groups.push(this.groupsup.slice(1,this.groupsup.length))
                console.log(this.groupsup.slice(1,this.groupsup.length)[0])
                this.groups.push(')')
                console.log(':0',this.groups[this.groups.length - 2])
                //console.log('this.groups',[...this.groups])
                // RECURSIVIDADE
                //this.groups[this.groups.length - 3] = '777'
                //new DoGroup(this.groupsup.slice(1,this.groupsup.length),this.group.start)
                //console.log('new construct',[...this.groups[this.groups.length - 2]])
                new DoGroup(this.groups[this.groups.length - 2],this.group.start,this.group.end)
            }else if (this.groupsup == this.currentArray) {
                console.log('adicionando texto ao this.groups')
                this.groups.push('(')
                 this.groups.push(expression2.slice(this.group.start + 1, this.group.end))
                  this.groups.push(')')
            }
       // }
    }else{
        console.log('ADJACENTEEEE')
        this.groups.push('(')
                 this.groups.push(expression2.slice(this.group.start + 1, this.group.end))
                  this.groups.push(')')
    }

    if (this.index_group == this.currentArray.length - 1 && this.group.end + 1 < this.final_index) {
        console.warn('falta adicionar o que está depois do último grupo')
        this.groups.push(expression2.slice(this.group.end + 1, this.final_index))
    }
            console.log('this.groups',[...this.groups])
}
//console.log('CURRENT ARRAY',currentArray)
currentArray.length = 0
currentArray.push(this.groups)
  // modificar o array original (currentArray) para groups
}


/*

{...},
[

[

[
  {...}, {...}
]

  {...}
],
 {...}

]


*/