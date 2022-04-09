exp = ['3','x','+','7','x','-','2','x','+','10','y']


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



//console.log(DIVIDIR(['y', 'y'],'30xy'))


// DIVIDINDO MONÔMIOS
function DIVIDIR(T, qual) {
    
    Tfix = []
for (h in T) {
    Tfix.push(T[h])
}
eg = qual

takeout = []

console.log(T)
console.log(eg)
for (n in eg) {
console.log(eg[n],'---')
if (T.indexOf(eg[n]) != -1) {
console.log('tem')


T.splice(T.lastIndexOf(eg[n]), 1)
console.log(T, Number(n))
takeout.push(Number(n))
}
}
console.log(takeout)
console.log(eg)

depois = ''
for (n in eg) {
    console.log(eg[n], n)
    if (takeout.indexOf(Number(n)) == -1) {
        console.log('ADICIONAR')
        depois += String(eg[n])
    }
}

console.log(`TIRAR ` + Tfix + ' DE ' + eg + ` : ` + depois)
return depois


}
//


console.log('OK, VAMOS DAR UMA PARADINHA')

// FATORAR SÓ UM NÚMERO
console.log(FATORARSINGULAR('20'))

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