expression = ['a','^','2','-','5','a','+','a','-','5']
//expression = ['100','+','80']

//FAZENDO AS CONTAS COM NÚMEROS

fazerConta(expression)
function fazerConta(anterior) {

    if(0 == 0) {// falta == false
//Primeiro raizes e potências
for (n = 0; n < expression.length; n++) {
if(expression[n] == '^' && String(expression[n - 1]) != '(' && String(expression[n - 1]) != ')' && String(expression[n + 1]) != '(' && String(expression[n + 1]) != ')' && String(expression[n + 1]) != '√' && String(expression[n - 1]).search('[0-9]') != -1 && String(expression[n + 1]).search('[0-9]') != -1 & String(expression[n + 2]).search('[a-z]') == -1) {
    console.log('POTENCIALIZAÇÃO')
    String(expression[n + 1]) = String(Number(String(expression[n - 1])) ** Number(String(expression[n + 1])))
    expression.splice(n - 1, 2)
    
    n = n - 3 // n = n - 3
    console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, expression[n])
    if (String(expression[n + 1]) == '(' && expression[n + 3] == ')') {
        console.log('TIRAR')
        expression.splice(n + 3, 1)
        expression.splice(n + 1, 1)
        n = n - 3

        console.log(expression)
    }else{
        console.log(expression)
    }
}else if(expression[n] == '√' && String(expression[n + 1]) != '(' && String(expression[n + 1]).search('[0-9]') != -1) {
    console.log('RAIZ')
    String(expression[n + 1]) = String(Number(String(expression[n + 1])) ** (1/2))
    expression.splice(n, 1)
    console.log(n)
    n = n - 2
    console.log(n)
    if (String(expression[n + 1]) == '(' && expression[n + 3] == ')') {
        console.log('TIRAR')
        expression.splice(n + 3, 1)
        expression.splice(n + 1, 1)
        n = n - 3

        console.log(expression)
    }else{
        console.log(expression)
    }
}
}

// Segundo multiplicações e divisões
for (n = 0; n < expression.length; n++) {
if(expression[n] == '*' && String(expression[n - 1]) != '(' && String(expression[n - 1]) != ')' && String(expression[n - 1]).search('[0-9]') != -1 && String(expression[n + 1]).search('[0-9]') != -1 && String(expression[n + 2]).search('[a-z]') == -1 && String(expression[n + 1]) != '(' && String(expression[n + 1]) != ')' && String(expression[n + 1]) != '√' && String(String(expression[n + 2])).search('\\^') == -1 && String(String(expression[n - 2])).search('\\^') == -1) {
console.log('MULTIPLICAÇÃO')
String(expression[n + 1]) = String(Number(String(expression[n - 1])) * Number(String(expression[n + 1])))
expression.splice(n - 1, 2)

n = n - 3
console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, expression[n])

if (String(expression[n + 1]) == '(' && expression[n + 3] == ')') {
    console.log('TIRAR')
    expression.splice(n + 3, 1)
    expression.splice(n + 1, 1)
    n = n - 3

    console.log(expression)
}else{
    console.log(expression)
}
}else if(expression[n] == '/' && String(expression[n - 1]) != '(' && String(expression[n - 1]) != ')' && String(expression[n - 1]).search('[0-9]') != -1 && String(expression[n + 1]).search('[0-9]') != -1 && String(expression[n + 2]).search('[a-z]') == -1 && String(expression[n + 1]) != '(' && String(expression[n + 1]) != ')' && String(expression[n + 1]) != '√' && String(String(expression[n + 2])).search('\\^') == -1 && String(String(expression[n - 2])).search('\\^') == -1) {
console.log('DIVISÃO')
String(expression[n + 1]) = String(Number(String(expression[n - 1])) / Number(String(expression[n + 1])))
expression.splice(n - 1, 2)

n = n - 3
console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, expression[n])
if (String(expression[n + 1]) == '(' && expression[n + 3] == ')') {
    console.log('TIRAR')
    expression.splice(n + 3, 1)
    expression.splice(n + 1, 1)
    n = n - 3

    console.log(expression)
}else{
    console.log(expression)
}
}
}


if (expression.length > 1) {

// while(expression.length != 1 && expression.indexOf('NaN') == -1) {
    for (n = 0; n < expression.length && expression.length != 1; n++) {
       // console.log(expression[n])
        if (expression[n] == '+' && String(expression[n - 1]) != '(' && String(expression[n - 1]) != ')' && String(expression[n - 1]).search('[0-9]') != -1 && String(expression[n + 1]).search('[0-9]') != -1 && String(expression[n + 2]).search('[a-z]') == -1 && String(expression[n + 1]) != '(' && String(expression[n + 1]) != ')' && String(expression[n + 1]) != '√' && String(String(expression[n + 2])).search('[x\\/\\^]') == -1 && String(String(expression[n - 2])).search('[x\\/\\^\\-]') == -1) {
            console.log('ADIÇÃO')
            String(expression[n + 1]) = String(Number(String(expression[n - 1])) + Number(String(expression[n + 1])))
            expression.splice(n - 1, 2)
          
            n = n - 3
            console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, expression[n])
            if (String(expression[n + 1]) == '(' && expression[n + 3] == ')') {
                console.log('TIRAR')
                expression.splice(n + 3, 1)
                expression.splice(n + 1, 1)
                n = n - 3

                console.log(expression)
            }else{
                console.log(expression)
            }
        }else if(expression[n] == '-' && String(expression[n - 1]) != '(' && String(expression[n - 1]) != ')' && String(expression[n - 1]).search('[0-9]') != -1 && String(expression[n + 1]).search('[0-9]') != -1 & String(expression[n + 2]).search('[a-z]') == -1 && String(expression[n + 1]) != '(' && String(expression[n + 1]) != ')' && String(expression[n + 1]) != '√' && String(String(expression[n + 2])).search('[x\\/\\^]') == -1 && String(String(expression[n - 2])).search('[x\\/\\^\\-]') == -1) {
            console.log('SUBTRAÇÃO') 
            String(expression[n + 1]) = String(Number(String(expression[n - 1])) - Number(String(expression[n + 1])))
            expression.splice(n - 1, 2)
            
            n = n - 3
            console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, expression[n])
            if (String(expression[n + 1]) == '(' && expression[n + 3] == ')') {
                console.log('TIRAR')
                expression.splice(n + 3, 1)
                expression.splice(n + 1, 1)
                n = n - 3

                console.log(expression)
            }else{
                console.log(expression)
            }
        }else if(expression[n] == '*' && String(expression[n - 1]).search('[0-9]') != -1 && String(expression[n + 1]).search('[0-9]') != -1 & String(expression[n + 2]).search('[a-z]') == -1 && String(expression[n + 1]) != '(' && String(expression[n + 1]) != ')' && String(expression[n + 1]) != '√' && String(String(expression[n + 2])).search('\\^') == -1 && String(String(expression[n - 2])).search('\\^') == -1) {
            console.log('MULTIPLICAÇÃO')
            String(expression[n + 1]) = String(Number(String(expression[n - 1])) * Number(String(expression[n + 1])))
            expression.splice(n - 1, 2)
            
            n = n - 3
            console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, expression[n])
            if (String(expression[n + 1]) == '(' && expression[n + 3] == ')') {
                console.log('TIRAR')
                expression.splice(n + 3, 1)
                expression.splice(n + 1, 1)
                n = n - 3

                console.log(expression)
            }else{
                console.log(expression)
            }
        }else if(expression[n] == '/' && String(expression[n + 1]) != '(' && String(expression[n + 1]) != ')' && String(expression[n + 1]) != '√' && String(String(expression[n + 2])).search('\\^') == -1 && String(String(expression[n - 2])).search('\\^') == -1 && String(expression[n - 1]).search('[0-9]') != -1 && String(expression[n + 1]).search('[0-9]') != -1 & String(expression[n + 2]).search('[a-z]') == -1) {
            console.log('DIVISÃO')
            String(expression[n + 1]) = String(Number(String(expression[n - 1])) / Number(String(expression[n + 1])))
            expression.splice(n - 1, 2)
            
            n = n - 3
            console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, expression[n])
            if (String(expression[n + 1]) == '(' && expression[n + 3] == ')') {
                console.log('TIRAR')
                expression.splice(n + 3, 1)
                expression.splice(n + 1, 1)
                n = n - 3

                console.log(expression)
            }else{
                console.log(expression)
            }
        }else if(expression[n] == '^' && String(expression[n - 1]) != '(' && String(expression[n - 1]) != ')' && String(expression[n - 1]).search('[0-9]') != -1 && String(expression[n + 1]).search('[0-9]') != -1 & String(expression[n + 2]).search('[a-z]') == -1 && String(expression[n + 1]) != '(' && String(expression[n + 1]) != ')' && String(expression[n + 1]) != '√') {
            console.log('DIVISÃO')
            String(expression[n + 1]) = String(Number(String(expression[n - 1])) ** Number(String(expression[n + 1])))
            expression.splice(n - 1, 2)
            
            n = n - 3
            console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, expression[n])
            if (String(expression[n + 1]) == '(' && expression[n + 3] == ')') {
                console.log('TIRAR')
                expression.splice(n + 3, 1)
                expression.splice(n + 1, 1)
                n = n - 3

                console.log(expression)
            }else{
                console.log(expression)
            }
        }else if(expression[n] == '√' && String(expression[n + 1]) != '(' && String(expression[n + 1]).search('[0-9]') != -1) {
            console.log('RAIZ')
            String(expression[n + 1]) = String(Number(String(expression[n + 1])) ** (1/2))
            expression.splice(n, 1)
            
            n = n - 2
            console.log(n)
            if (String(expression[n + 1]) == '(' && expression[n + 3] == ')') {
                console.log('TIRAR')
                expression.splice(n + 3, 1)
                expression.splice(n + 1, 1)
                n = n - 3
        
                console.log(expression)
            }else{
                console.log(expression)
            }
        }
    }
// }
}
    
}
console.log(expression)
}
// FATORANDO OS NÚMEROS 

for (n = 0; n < expression.length; n++) {
    if (ehprimo(expression[n]) == false && String(expression[n]).search('[0-9]') != -1) {
    fatorado = ''

    first = 1

    div = 0
    //console.log(exp[n], div)

    stop = false
    fator = 1
    
    for (e = 2; stop == false; e++) {
        //console.log('')
        //console.log(e)
        //console.log('')
    
        sob = Number(expression[n])
      
           if (ehprimo(e) == true) {
            while (sob%e == 0) {
            if (sob%e == 0) {
                //console.log(sob + '/' + e + ': ' + sob/e)
                
                
            }

            sob = sob/e
            
            console.log('SIM')
            console.log(fator + ' x ' + e + ': ' + fator*e)

            fator = fator*e

            st = false
            
            if (fator == expression[n]) {
            stop = true
            fatorado += `${e}`
            }else{
                fatorado += `${e}*`
            }
           }
        }
    }
    expression[n] = fatorado
}
}
console.log(expression)


// FAZENDO AS POTÊNCIAS COM LETRAS 

console.log('FAZENDO AS POTÊNCIAS COM LETRAS')
for (y in expression) {
  //  console.log(expression[y])

    if (expression[y] == '^') {
        console.log('expression[y - 1]: ' + expression[Number(y) - 1])
        console.log('expression[y]: ' + expression[y])
        console.log('expression[y + 1]: ' + expression[Number(y) + 1])

       ad =  expression[Number(y) - 1] 
        for (h = 0; h < Number(expression[Number(y) + 1]) - 1; h++) {
            console.log(h)
            expression[Number(y) - 1]+= ad
        }

        expression.splice(Number(y) + 1, 1)
        expression.splice(y, 1)
        console.log(expression[Number(y) - 1])
        console.log(expression)
    }
}

// SEPARANDO OS MONÔMIOS

monomios = [{numero: ''}]
obnum = 0
for (n = 0; n < expression.length; n++) {
console.log(expression[n], monomios[obnum])

if (String(expression[n]).search('[\\-\\+]') != -1 && n != 0) {
console.log('DEVTOOLS EU TE ODEIOoooooooooooooooooo')
monomios.push({numero: ''})
obnum++
}

monomios[obnum].numero += expression[n]
}

console.log('--------------------------------------------MONOMIOS--------------------------------------')
reps = []
segs = []

for (m = 0; m < monomios.length; m++) { // CADA MONÔMIO
    repetido = []
    
    col = false
    repetido = []

   numerosrep = []
    console.log('BURRO')
 console.log('--------------------')
    console.log(monomios[m].numero)
    
 
    for (oc = 0; oc < monomios[m].numero.length; oc++) { // CADA LETRA DE CADA MONÔMIO
        

        if (monomios[m].numero[oc].search('[\\*\\+\\/]') == -1) {
        console.log('LETRA OU NÚMERO ISOLADO: ' + monomios[m].numero[oc])

       // console.log('NUMEROS REPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP', numerosrep.indexOf(monomios[m].numero[oc])
        if (numerosrep.indexOf(monomios[m].numero[oc]) == -1) {
        numerosrep.push(monomios[m].numero[oc])

        for (u = 0; u < monomios.length; u++) { // OUTROS MONÔMIOS
            ocs2 = []

            if(u != m) {
          console.log(`monomio ${u}: `)
          console.log(monomios[u])   
            

          // OCAS
          if(ocs2.find(function(ocs2) {
            return ocs2.ed == monomios[m].numero[oc]
            }) == undefined) {
                console.log('====================')
                ocs2.push({ed: monomios[m].numero[oc], el: 0})

                ocs = 0
          for (ao = 0; ao < monomios[m].numero.length; ao++) {
            console.log('AAAAAAAAAA' + monomios[m].numero[ao])
            if (monomios[m].numero[ao] == monomios[m].numero[oc]) {
                ocs++
            }
          }
        }
          console.log('OOOOOOOOOOOOOOCS-------!!!!!!', ocs)
          
          for (e = 0; e < monomios[u].numero.length; e++) { // CADA LETRA DE CADA MONÔMIO
            console.log(monomios[u].numero[e])
            
            if (monomios[u].numero[e] == monomios[m].numero[oc]) {
                console.log(monomios[m].numero[oc] + ' é igual a ' + monomios[u].numero[e])

                if (repetido.find(function(repetido) {
                    return repetido.monum == u
                    }) === undefined) {

                        ocs2.find(function(ocs2) {
                            return ocs2.ed == monomios[m].numero[oc]
                            }).el++

                    console.log(u, 'UUUUUUUU', ocs2.find(function(ocs2) {
                        return ocs2.ed == monomios[m].numero[oc]
                        }),ocs2.find(function(ocs2) {
                        return ocs2.ed == monomios[m].numero[oc]
                        }).el, ocs)

                        console.log('QUAL É O MAIORRRRRRRRRRRRRRRRRR??????????', ocs2.find(function(ocs2) {
                            return ocs2.ed == monomios[m].numero[oc]
                            }).el <= ocs)

                            if (ocs2.find(function(ocs2) {
                                return ocs2.ed == monomios[m].numero[oc]
                                }).el <= ocs) {

                repetido.push({monum: u, wc: [m], letr: monomios[u].numero[e]})

               

                            }

                //reps.push({mns: [u, m],alg: monomios[u].numero[e])
               // reps.push(monomios[u].numero[e])
                    }else{
                        console.log('OOOOOBABAOBABEI')
                       // if (repetido.find(function(repetido) {
                           // return repetido.monum == u
                           // }).letr.indexOf(monomios[u].numero[e]) == -1) {

                                ocs2.find(function(ocs2) {
                                    return ocs2.ed == monomios[m].numero[oc]
                                    }).el++

                                console.log('ADD**************************************************************************************', ocs2.find(function(ocs2) {
                                    return ocs2.ed == monomios[m].numero[oc]
                                    }), ocs2.find(function(ocs2) {
                                    return ocs2.ed == monomios[m].numero[oc]
                                    }).el, ocs)

                                    console.log('QUAL É O MAIORRRRRRRRRRRRRRRRRR??????????', ocs2.find(function(ocs2) {
                                        return ocs2.ed == monomios[m].numero[oc]
                                        }).el <= ocs)

                                        if (ocs2.find(function(ocs2) {
                                            return ocs2.ed == monomios[m].numero[oc]
                                            }).el <= ocs) {
                                   
                                repetido.find(function(repetido) {
                                    return repetido.monum == u
                                    }).letr += `.${monomios[u].numero[e]}`
                                   
                                }
                                    //reps.push(monomios[u].numero[e])
    
              
                           // }else{
                                //console.log('DO NOT ADD')
                          // }
                    }
                
                console.log('REPETIDO: ', repetido)
                console.log('OCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS34246352645263546345:', ocs2)
            }else{
                
            }
            console.log('')
          }
        }
        }
        console.log('------------------------------------------------------------------------------------------')
    }
    }
    }
   
    reps.push(repetido)

    console.log('OALAALODLOALDAODLADOLADAOLAODLaaaaaaaaaaaa000000000000000OOOOOOooooooooooooooooooooIIIIIIIIIIIIIIAODALDLAOLDAO')
        for (moe in repetido) {
            console.log(repetido[moe])
            if (segs.find(function(segs) {
                return segs.car == repetido[moe].letr
                }) == undefined) {

                segs.push({car: repetido[moe].letr, mons: [m]})
            }else if(segs.find(function(segs) {
                return segs.car == repetido[moe].letr
                }).mons.indexOf(m) == -1){
                console.log('IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIISSSSSSSSSSSSSSSSSSHHHHHHHHHHH', segs.find(function(segs) {
                    return segs.car == repetido[moe].letr
                    }).mons)

                    segs.find(function(segs) {
                        return segs.car == repetido[moe].letr
                        }).mons.push(m)
            }
        }
}


console.log('RELAÇÃO ENTRE OS MONÔMIOS')
console.log(segs)

for (nl = 0; nl < segs.length; nl++) {
    console.log('-----------------------------------------------------------------------------------------')
    
    console.log(segs[nl])

    console.log('ANALISAR CADA ITEM')
    console.log('NUMERO: ', segs[nl].car)
    for (n = 0; n < segs.length; n++) {

        console.log('---------------------------------------------------------------------')
        if (n != nl) {
        console.log(`${segs[n].car}.search('${segs[nl].car}')`)
        if (String(segs[n].car).search(String(segs[nl].car)) != -1) {
           
            console.log(`${segs[n].car}: ${segs[n].mons}`)
            console.log(`${segs[nl].car}: ${segs[nl].mons}`)

            for (u in segs[n].mons) {
                console.log(segs[n].mons[u])
                if (segs[nl].mons.indexOf(segs[n].mons[u]) != -1) {
                    console.log('TEM')
                }else{
                    console.log('NÃO TEM')
                    segs[nl].mons.push(segs[n].mons[u])
                }
            }
        }
        }
    
    }

}


ml = monomios.length
console.log(ml)

divs = ehprimo2(ml)
console.log(divs)

for (n in divs) {
    console.log(divs[n])
    
}

numapars = []
for (m in monomios) {
    aparic = 0
    console.log(m)
    for (t in segs) {
        console.log(segs[t].mons)
        console.log(segs[t].mons.indexOf(Number(m)))
        if (segs[t].mons.indexOf(Number(m)) != -1) {
            aparic++
        }
    }
    console.log('aparic',m, aparic)
    numapars.push({num: Number(m), vezes: aparic})
    }

    console.log(numapars)

    console.log('----------------------------------------------AGRUPANDO---------------------------------------')
for (n in divs) {

    quanto = Number(monomios.length)/Number(divs[n])
    
    console.log(`${divs[n]} grupos com ${quanto} monômios`)

    groups = []
  for (m in segs) {
    console.log(segs[m])
   
      
        groups.push({par: []})
        if (segs[m].mons.length > quanto) {

            qrs = 0
        for (o = 0; o < segs[m].mons.length && qrs < quanto; o++) {
            console.log('-----------------------------------------------------')
           console.log(segs[m].mons[o])
           
           if (segs[m].mons.length > quanto) {
            console.log('HEY')
            console.log('aparicoes: ' + numapars.find(function(numapars) {
                return numapars.num == segs[m].mons[o]
                }).vezes)

                console.log(numapars.find(function(numapars) {
                    return numapars.num == segs[m].mons[o]
                    }).vezes == 1)

                if (numapars.find(function(numapars) {
                    return numapars.num == segs[m].mons[o]
                    }).vezes == 1) {
                        console.log('APARECE SÓ UMA VEZ')
                        console.log(groups[m], segs[m].mons[o])
                        groups[m].par.push(segs[m].mons[o])
                        console.log(groups[m])
                        qrs++
                }
           }else{
           // o++
           }
           
        }
        console.log(qrs)
    }

  }
}



// Vendo se o número é primo
function ehprimo(number) {
    parar = false
    for (t = 2; t < number && parar == false; t++) {
    
        if (number%t == 0) {
            parar = true
        }
    }
    if (parar) 
    return false
    else
    return true
}

// Achando todos os divisores da quantidade de monômios
// Ex: 12: 4, 3, 2, 6
function ehprimo2(number) {
    divisores = []
    for (t = 2; t < number && parar == false; t++) {
    
        if (number%t == 0) {
           divisores.push(t)
        }
    }
   return divisores
}
