exp = ['3', 'x', 'y', '-', '8','x', '+', '4','x','y', '-','6','x','+','2','x','y', '-','4','x','+','8','-','2']


// FATORANDO OS NÚMEROS
for (n = 0; n < exp.length; n++) {
    if (ehprimo(exp[n]) == false && String(exp[n]).search('[0-9]') != -1) {
    fatorado = ''

    first = 1

    div = 0
    ////console.log(exp[n], div)

    stop = false
    fator = 1
    
    for (e = 2; stop == false; e++) {
        ////console.log('')
        ////console.log(e)
        ////console.log('')
    
        sob = Number(exp[n])
      
           if (ehprimo(e) == true) {
            while (sob%e == 0) {
            if (sob%e == 0) {
                ////console.log(sob + '/' + e + ': ' + sob/e)
                
                
            }

            sob = sob/e
            
            //console.log('SIM')
            //console.log(fator + ' x ' + e + ': ' + fator*e)

            fator = fator*e

            st = false
            
            if (fator == exp[n]) {
            stop = true
            fatorado += `${e}`
            }else{
                fatorado += `${e}*`
            }
           }
        }
    }
    exp[n] = fatorado
}
}
//


// FAZENDO AS POTENCIAÇÕES COM NÚMEROS
for (y in exp) {
    //  //console.log(exp[y])
  
      if (exp[y] == '^') {
          //console.log('exp[y - 1]: ' + exp[Number(y) - 1])
          //console.log('exp[y]: ' + exp[y])
          //console.log('exp[y + 1]: ' + exp[Number(y) + 1])
  
         ad =  exp[Number(y) - 1] 
          for (h = 0; h < Number(exp[Number(y) + 1]) - 1; h++) {
              //console.log(h)
              exp[Number(y) - 1]+= ad
          }
  
          exp.splice(Number(y) + 1, 1)
          exp.splice(y, 1)
          //console.log(exp[Number(y) - 1])
          //console.log(exp)
      }
  }
//


  // SEPARANDO OS MONÔMIOS
monomios = [{numero: ''}]
obnum = 0


for (n = 0; n < exp.length; n++) {
//console.log(exp[n], monomios[obnum])

if (String(exp[n]).search('[\\-\\+]') != -1 && n != 0) {
//console.log('DEVTOOLS EU TE ODEIOoooooooooooooooooo')
monomios.push({numero: ''})
obnum++
}

monomios[obnum].numero += exp[n]
}
//


// VENDO OS QUE PODEM SER SOMADOS
for (huh in monomios) {
    console.log(monomios[huh].numero)

    partlet = ''
    for (y in monomios[huh].numero) {
     console.log(monomios[huh].numero[y])
     if (String(monomios[huh].numero[y]).search('[a-z]') != -1) {
        console.log('EEEEEE')
        partlet+= String(monomios[huh].numero[y])
     }
    }
    monomios[huh].partletral = partlet
}


ji = []
for (huh in monomios) {
    console.log(monomios[huh], monomios[huh].partletral)
    
    if (ji.find(function (ji) {
        return ji.que == monomios[huh].partletral
       }) == undefined) {
           console.log('ARRRRRROZ')
    ji.push({quais: [Number(huh)], que:  monomios[huh].partletral})
       }else{
        ji.find(function (ji) {
            return ji.que == monomios[huh].partletral
           }).quais.push(Number(huh))
       }
    
}
//

//ji = oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
/*
for (bye in monomios) {
    console.log(monomios[bye])

    comofica = []
    ground = ''

    for (misery in monomios[bye].numero) { 
        console.log(monomios[bye].numero[misery])
        
        carac = monomios[bye].numero[misery]
        console.log('CARACTER' + carac)
        console.log(ground.length)

        console.log('OH COME ON',ground, String(ground.search('[0-9]')))
            if (ground.length == 0) {
                console.log('LISTA VAZIA')
                ground+= carac
            }else if(String(ground.search('[0-9]')) != -1 && String(carac).search('[0-9]') != -1){
                console.log('É UM NÚMERO')
                ground+= carac
            }else{
                comofica.push(ground)
                ground = ''
                ground += carac
                         
                }
            }
    }

    console.log('COMOFICA', comofica)
   // monomios[bye].numero = comofica
*/


// SEPARANDO/JUNTANDO OS NÚMEROS
for (bye in ji) {
    console.log(ji[bye])

    for (misery in ji[bye].quais) { 
        console.log(monomios[ji[bye].quais[misery]].numero)

        ground = ''

        comofica = []
        for (b in monomios[ji[bye].quais[misery]].numero) {

           carac =  monomios[ji[bye].quais[misery]].numero[b]
           console.log(carac)
            
            if (ground.length == 0) {
                console.log('LISTA VAZIA')
                ground+= carac
            }else if(String(ground.search('[0-9]')) != -1 && String(carac).search('[0-9]') != -1){
                console.log('É UM NÚMERO')
                ground+= carac
            }else{
                comofica.push(ground)
                ground = ''
                ground += carac
                if (b == monomios[ji[bye].quais[misery]].numero.length - 1) {
                    comofica.push(ground)
                }
            }
        }
        console.log(comofica)
        monomios[ji[bye].quais[misery]].numero = comofica
    }
}


console.log('COMEÇAR A DIVIDIR')
// COMEÇAR A DIVIDIR
for (chuva in ji) {
    console.log('')
    console.log('')
    console.log('')

    conta = []
for (da in ji[chuva].quais) {



divisor = []
for (flowers in ji[chuva].que) {

divisor.push(ji[chuva].que[flowers])
}

//console.log(monomios[ji[chuva].quais[da]].numero, '/',divisor)

resultadoDaDivisão = DIVIDIR( divisor, monomios[ji[chuva].quais[da]].numero)
//console.log('A DIVISÃ É IGUAL A ', resultadoDaDivisão)

plan = []
add = ''

for (past in resultadoDaDivisão) {
   
 //console.log(resultadoDaDivisão[past])

 if (resultadoDaDivisão[past].search('\\*') != -1 || resultadoDaDivisão[past].search('[0-9]') != -1) {
//console.log('ADICIONAR')

if (add.length == 0) {
    add+= resultadoDaDivisão[past]

}else if (resultadoDaDivisão[past].search('[0-9]') != -1 && add.search('[0-9]') != -1) {
    console.log('OK')
add+= resultadoDaDivisão[past]
}else{
    plan.push(add)
    add = ''
    add+= resultadoDaDivisão[past]
    
}
//console.log('ADD', add)
//console.log('PLAN É:', plan)

if (plan.length == 3) {
//console.log('É TRÊEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEIS')
//console.log(Number(plan[0])*Number(plan[2]))
plan = [String(Number(plan[0])*Number(plan[2]))]
}
 }

}
plan.push(add)
//console.log('PLAN', plan)

if (plan.length == 3) {
    //console.log('É TRÊEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEIS')
    //console.log(Number(plan[0])*Number(plan[2]))
    plan = [String(Number(plan[0])*Number(plan[2]))]
   // console.log('É ISSO!!', plan)
    }

    if (monomios[ji[chuva].quais[da]].numero[0] == '+' || monomios[ji[chuva].quais[da]].numero[0] == '-') {
   // console.log('O SINAL É: ', monomios[ji[chuva].quais[da]].numero[0])

    sinal = monomios[ji[chuva].quais[da]].numero[0]

    if (conta.length != 0) {
    conta.push(monomios[ji[chuva].quais[da]].numero[0])
    }
    }

    if (conta.length == 0 && monomios[ji[chuva].quais[da]].numero[0] == '-') {

 entao = '-'
 entao+= plan[0]
 //console.log(entao)
 conta.push(entao)
    }else{
       
        conta.push(plan[0])
    }
   
    
}


console.log('OK, FICOU ASSIM:', conta)

comehome = fazerConta(conta)
console.log('E RESOLVENDO FICA ASSIM:', comehome)



if (comehome[0][0] == '-') {
    t = ''
   for (b in comehome[0]) {
   if (comehome[0][b] != '-') {
     t+= comehome[0][b]
   }
   }
   console.log(t)
   fat = FATORARSINGULAR(t)
   oop = '-'
   oop+= fat
console.log(oop)

}else{
fat = FATORARSINGULAR(comehome)
console.log(fat)
}


}

console.log('--------------------------------------------------')
//console.log(DIVIDIR(['11','x'],['11','11','x','y']))


// DIVIDINDO MONÔMIOS
function DIVIDIR(T, qual) {
    
    Tfix = []
for (h in T) {
    Tfix.push(T[h])
}
eg = qual

takeout = []

for (n in eg) {

if (T.indexOf(eg[n]) != -1) {



T.splice(T.lastIndexOf(eg[n]), 1)
takeout.push(Number(n))
}
}



depois = ''
for (n in eg) {
    if (takeout.indexOf(Number(n)) == -1) {
        depois += String(eg[n])
    }
}

return depois


}
//


//console.log('OK, VAMOS DAR UMA PARADINHA')

// FATORAR SÓ UM NÚMERO
//console.log(FATORARSINGULAR('20'))

function FATORARSINGULAR(potn) {
if (ehprimo(potn) == false && String(potn).search('[0-9]') != -1) {
    fatorado = ''

    first = 1

    div = 0

    stop = false
    fator = 1
    
    for (e = 2; stop == false; e++) {
        ////console.log('')
        ////console.log(e)
        ////console.log('')
    
        sob = Number(potn)
      
           if (ehprimo(e) == true) {
            while (sob%e == 0) {
            if (sob%e == 0) {
                ////console.log(sob + '/' + e + ': ' + sob/e)
                
                
            }

            sob = sob/e
            
            //console.log('SIM')
            //console.log(fator + ' x ' + e + ': ' + fator*e)

            fator = fator*e

            st = false
            
            if (fator == potn) {
            stop = true
            fatorado += `${e}`
            }else{
                fatorado += `${e}*`
            }
           }
        }
    }
    return fatorado
}
}
//



// FAZER CONTA COM NÚMEROS
function fazerConta(anterior) {

    if(0 == 0) {// falta == false
//Primeiro raizes e potências
for (n = 0; n < anterior.length; n++) {
if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
    //console.log('POTENCIALIZAÇÃO')
    anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
    anterior.splice(n - 1, 2)
    
    n = n - 3 // n = n - 3
    //console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
    if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
        //console.log('TIRAR')
        anterior.splice(n + 3, 1)
        anterior.splice(n + 1, 1)
        n = n - 3

        //console.log(anterior)
    }else{
        //console.log(anterior)
    }
}else if(anterior[n] == '√' && anterior[n + 1] != '(' ) {
    //console.log('RAIZ')
    anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
    anterior.splice(n, 1)
    //console.log(n)
    n = n - 2
    //console.log(n)
    if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
        //console.log('TIRAR')
        anterior.splice(n + 3, 1)
        anterior.splice(n + 1, 1)
        n = n - 3

        //console.log(anterior)
    }else{
        //console.log(anterior)
    }
}
}

// Segundo multiplicações e divisões
for (n = 0; n < anterior.length; n++) {
if(anterior[n] == 'x' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
//console.log('MULTIPLICAÇÃO')
anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
anterior.splice(n - 1, 2)

n = n - 3
//console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])

if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
    //console.log('TIRAR')
    anterior.splice(n + 3, 1)
    anterior.splice(n + 1, 1)
    n = n - 3

    //console.log(anterior)
}else{
    //console.log(anterior)
}
}else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
//console.log('DIVISÃO')
anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
anterior.splice(n - 1, 2)

n = n - 3
//console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
    //console.log('TIRAR')
    anterior.splice(n + 3, 1)
    anterior.splice(n + 1, 1)
    n = n - 3

    //console.log(anterior)
}else{
    //console.log(anterior)
}
}
}


if (anterior.length > 1) {

// while(anterior.length != 1 && anterior.indexOf('NaN') == -1) {
    for (n = 0; n < anterior.length && anterior.length != 1; n++) {
        //console.log(anterior[n])
        if (anterior[n] == '+' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[x\\/\\*]') == -1 && String(anterior[n - 2]).search('[x\\/\\*\\-]') == -1) {
            //console.log('ADIÇÃO')
            anterior[n + 1] = String(Number(anterior[n - 1]) + Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
          
            n = n - 3
            //console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //console.log('TIRAR')
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //console.log(anterior)
            }else{
                //console.log(anterior)
            }
        }else if(anterior[n] == '-' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[x\\/\\*]') == -1 && String(anterior[n - 2]).search('[x\\/\\*\\-]') == -1) {
            //console.log('SUBTRAÇÃO') 
            anterior[n + 1] = String(Number(anterior[n - 1]) - Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
            
            n = n - 3
            //console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //console.log('TIRAR')
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //console.log(anterior)
            }else{
                //console.log(anterior)
            }
        }else if(anterior[n] == 'x' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
            //console.log('MULTIPLICAÇÃO')
            anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
            
            n = n - 3
            //console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //console.log('TIRAR')
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //console.log(anterior)
            }else{
                //console.log(anterior)
            }
        }else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
            //console.log('DIVISÃO')
            anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
            
            n = n - 3
            //console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //console.log('TIRAR')
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //console.log(anterior)
            }else{
                //console.log(anterior)
            }
        }else if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
            //console.log('DIVISÃO')
            anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
            
            n = n - 3
            //console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //console.log('TIRAR')
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //console.log(anterior)
            }else{
                //console.log(anterior)
            }
        }else if(anterior[n] == '√' && anterior[n + 1] != '(') {
            //console.log('RAIZ')
            anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
            anterior.splice(n, 1)
            
            n = n - 2
            //console.log(n)
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //console.log('TIRAR')
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3
        
                //console.log(anterior)
            }else{
                //console.log(anterior)
            }
        }
    }
// }
}

    
}
return anterior
}
//


// É PRIMO?
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
//