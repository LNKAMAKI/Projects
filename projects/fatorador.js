//expression = ['x','^','3', '+', 'x', '-', '2','x','y', '+', 'x','^','2','y', '-', '2','x','^','2', '+', 'y']

//expression = ['x','^','3', '+', 'x', '-', '2','x','y', '-', '2','x','^','2', '+', 'y', '+', 'x','^','2','y']

//expression = ['6','x','^','2','b', '+', '42','x','^','2', '-', '7','y','^','2','-','y','^','2','b']

//expression = ['3', 'x', 'y', '-', '8','x', '+', '4','x','y', '-','6','x','+','2','x','y', '-','4','x']

//expression = ['7','x', '+', '14','x','^','2', '+', '35', '+', '2','x', '+', '4','x','^','2', '+', '10', '+', '3','x', '+', '6','x','^','2', '+', '15','+','5','x','+','10','x','^','2','+','25']

//expression = ['12','xx','+','30', '+', '10', '+', '15','+','7','x', '+', '3','x', '+', '35', '+', '4','x','^','2','+','9','x','+','18','x','^','2','+','45','+','4','x', '+', '6','x','+','6','x','^','2','+', '2','x','+','10','x','^','2','+','25','+','8','x','^','2','+','20','+','5','x','+', '14','x','^','2']


//expression = ['2y', '+','4','y','+','y','+','2','x','+','4','x']

//expression = ['6','x','+','15','x','^','2','+','6','a','x','+','15','x','^','2','a','+','6','x','y','+','15','x','^','2','y','+','6','x','z','+','15','x','^','2','z','+','6','x','b','+','15','x','^','2','b']

//expression = ['6','x','+','15','x','^','2','+','6','a','x','+','15','x','^','2','a']

//expression = ['3aa', '+','3ac', '-', 'ab', '-', 'bc']

//expression = ['10x','+','5xyy','+','6yyy','+','6xy','+','14a','+','7ayy','+','7ax','+','4byy','+','4bx','+','10c','+','5cyy','+','5cx','+','14d','+','7dx','+','14e','+','7eyy','+','7ex','+','5xx','+','8b','+','14f','+','7fyy','+','7fx','+','7dyy','+','12y']


//expression = ['ab','+','ac','+','bb','+','bc','+','xa','+','xc','+','7a','+','7b','+','5t','+','5y','+','x','^','3', '+', 'x', '-', '2','x','y', '-', '2','x','^','2', '+', 'y', '+', 'x','^','2','y']

//expression = ['ab','+','ac','+','bb','+','bc','+','xa','+','xc']
//expression = ['3x','+','3y','+','3','z','+','5y','+','4y']
expression = ['+','10','y','+','338','x','y','+','20','y','^','2','+','169','x']


//expression = ['4','b','c','+','4','x','x']



//FAZEnDO AS COnTAS COM nÚMEROS

        
// FATORAnDO OS nÚMEROS 


for (n = 0; n < expression.length; n++) {
    if (ehprimo(expression[n]) == false && String(expression[n]).search('[0-9]') != -1 && expression[n - 1] != '^') {
    fatorado = ''

    first = 1

    div = 0
    console.log(expression[n], expression[n - 1])

    stop = false
    fator = 1
    
    for (e = 2; stop == false; e++) {
    //    console.log('')
    //    console.log(e)
    //    console.log('')
    
        sob = Number(expression[n])
      
           if (ehprimo(e) == true) {
            while (sob%e == 0) {
            if (sob%e == 0) {
           //     console.log(sob + '/' + e + ': ' + sob/e)
                
                
            }

            sob = sob/e
            
          //  console.log('SIM')
          //  console.log(fator + ' x ' + e + ': ' + fator*e)

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
////console.log(expression)


// FAZEnDO AS POTÊnCIAS COM LETRAS 

////console.log('FAZEnDO AS POTÊnCIAS COM LETRAS')
for (y in expression) {
  //console.log(expression[y])

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

// SEPARAnDO OS MOnÔMIOS

monomios = [{numero: ''}]
obnum = 0
for (n = 0; n < expression.length; n++) {
////console.log(expression[n], monomios[obnum])

if (String(expression[n]).search('[\\-\\+]') != -1 && n != 0) {
////console.log('DEVTOOLS EU TE ODEIOoooooooooooooooooo')
monomios.push({numero: ''})
obnum++
}

monomios[obnum].numero += expression[n]
}


//monomios = [{numero: ['11','x']},{numero: ['11','*','3','x']}]

// SEPARAR CORRETAMEnTE OS nÚMEROS
for (bye in monomios) {
    ////console.log(monomios[bye])

    comofica = []
    ground = ''

    for (misery in monomios[bye].numero) { 
      //  //console.log(monomios[bye].numero[misery])
        
        carac = monomios[bye].numero[misery]
       // //console.log('CARACTER' + carac)
      //  //console.log(ground.length)

       // //console.log('OH COME On',ground, String(ground.search('[0-9]')))
            if (ground.length == 0) {
                //console.log('LISTA VAZIA')
                ground+= carac
            }else if(String(ground.search('[0-9]')) != -1 && String(carac).search('[0-9]') != -1){
                //console.log('É UM nÚMERO')
                ground+= carac
            }else{
                comofica.push(ground)
                ground = ''
                ground += carac
                
            }
            if (misery == monomios[bye].numero.length - 1) {
                comofica.push(ground)
            }
    }

    ////console.log('COMOFICA', comofica)
    ////console.log('nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',monomios[bye].numero)
    monomios[bye].numero = comofica
}


for (huh in monomios) {
 //   console.log(monomios[huh].numero)

    partlet = ''
    for (y in monomios[huh].numero) {
     //console.log(monomios[huh].numero[y])
     if (String(monomios[huh].numero[y]).search('[a-z]') != -1) {
        //console.log('EEEEEE')
        partlet+= String(monomios[huh].numero[y])
     }
    }
    monomios[huh].partletral = partlet
}


ji = []
for (huh in monomios) {
   // console.log(monomios[huh], monomios[huh].partletral)
    
    if (ji.find(function (ji) {
        return ji.que == monomios[huh].partletral
       }) == undefined) {
           //console.log('ARRRRRROZ')
    ji.push({quais: [Number(huh)], que:  monomios[huh].partletral})
       }else{
        ji.find(function (ji) {
            return ji.que == monomios[huh].partletral
           }).quais.push(Number(huh))
       }
    
}


// SEPARAnDO/JUnTAnDO OS nÚMEROS

exp = []

for (bye in ji) {
  //  console.log(ji[bye])

    for (misery in ji[bye].quais) { 
      //  console.log(monomios[ji[bye].quais[misery]].numero)

        ground = ''

        comofica = []
        for (b in monomios[ji[bye].quais[misery]].numero) {

           carac =  monomios[ji[bye].quais[misery]].numero[b]
         //  console.log(carac)
            
            if (ground.length == 0) {
                //console.log('LISTA VAZIA')
                ground+= carac
            }else if(String(ground.search('[0-9]')) != -1 && String(carac).search('[0-9]') != -1){
               // console.log('É UM nÚMERO')
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
        //console.log(comofica)
        monomios[ji[bye].quais[misery]].numero = comofica
    }
}



for (chuva in ji) {
    //console.log('')
   // console.log('')
    //console.log('')

    conta = []
for (da in ji[chuva].quais) {



divisor = []
for (flowers in ji[chuva].que) {

divisor.push(ji[chuva].que[flowers])
}

//console.log(monomios[ji[chuva].quais[da]].numero, '/',divisor)
tu = [...divisor]
resultadoDaDivisão = DIVIDIR( divisor, monomios[ji[chuva].quais[da]].numero)

//console.log('A DIVISÃ É IGUAL DE',monomios[ji[chuva].quais[da]].numero,'por',tu, resultadoDaDivisão)

plan = []
add = ''

for (past in resultadoDaDivisão) {
   
 //console.log(resultadoDaDivisão[past])

 if (resultadoDaDivisão[past].search('\\*') != -1 || resultadoDaDivisão[past].search('[0-9]') != -1) {
//console.log('ADICIOnAR')

if (add.length == 0) {
    if (resultadoDaDivisão[past - 1] != '-') {
    add+= resultadoDaDivisão[past]
    }

}else if (resultadoDaDivisão[past].search('[0-9]') != -1 && add.search('[0-9]') != -1) {
    //console.log('OK')
add+= resultadoDaDivisão[past]
}else{
    plan.push(add)
    add = ''
    //console.log('AASADWHDUWHDU',resultadoDaDivisão[past - 1])
   
    add+= resultadoDaDivisão[past]
    
    
}
//console.log('ADD', add)
//console.log('PLAn É:', plan)

if (plan.length == 3) {
//console.log('É TRÊEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEIS')
//console.log(Number(plan[0])*Number(plan[2]))
plan = [String(Number(plan[0])*Number(plan[2]))]
}
 }

}
plan.push(add)
//console.log('PLAn', plan)

if (plan.length == 3) {
    //console.log('É TRÊEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEIS')
    //console.log(Number(plan[0])*Number(plan[2]))
    plan = [String(Number(plan[0])*Number(plan[2]))]
    //console.log('É ISSO!!', plan)
    }

    if (monomios[ji[chuva].quais[da]].numero[0] == '+' || monomios[ji[chuva].quais[da]].numero[0] == '-') {
   //console.log('O SInAL É: ', monomios[ji[chuva].quais[da]].numero[0])

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


//console.log('OK, FICOU ASSIM:', conta)

comehome = fazerConta(conta)
//console.log('E RESOLVEnDO FICA ASSIM:', comehome)



if (comehome[0][0] == '-') {
    t = ''
   for (b in comehome[0]) {
   if (comehome[0][b] != '-') {
     t+= comehome[0][b]
   }
   }
  // console.log(t)
   //console.log(typeof t)
   at = t
   if (ehprimo(t) == false) {
      //console.log(at)
   fat = FATORARSInGULAR(at)
  // console.log(String(fat))
   }else{
     // console.log('É PRIMOOOOOOOOOOOOOOOOO')
    fat = at
   }
   oop = '-'
   oop+= String(fat)
//console.log(oop)

exp.push('-')
fat += ji[chuva].que
exp.push(fat)

}else{
    if (ehprimo(comehome) == false) {
fat = FATORARSInGULAR(comehome)
    }else{
        fat = comehome
    }
//console.log(fat)

if (exp.length == 0) {
    fat += ji[chuva].que
    exp.push(fat)
    //console.log('PARTE LETRAL:', ji[chuva].que)
   
    }else {
        exp.push('+')
        fat += ji[chuva].que
        exp.push(fat)
      //  console.log('PARTE LETRAL:', ji[chuva].que)
    }
}



}



// SEPARAnDO OS MOnÔMIOS DEnOVO
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

// SEPARAR CORRETAMEnTE OS nÚMEROS
for (bye in monomios) {
    ////console.log(monomios[bye])

    comofica = []
    ground = ''

    for (misery in monomios[bye].numero) { 
      //  //console.log(monomios[bye].numero[misery])
        
        carac = monomios[bye].numero[misery]
       // //console.log('CARACTER' + carac)
      //  //console.log(ground.length)

       // //console.log('OH COME On',ground, String(ground.search('[0-9]')))
            if (ground.length == 0) {
                //console.log('LISTA VAZIA')
                ground+= carac
            }else if(String(ground.search('[0-9]')) != -1 && String(carac).search('[0-9]') != -1){
                //console.log('É UM nÚMERO')
                ground+= carac
            }else{
                comofica.push(ground)
                ground = ''
                ground += carac
               
            }
            if (misery == monomios[bye].numero.length - 1) {
                comofica.push(ground)
            }
    }

    ////console.log('COMOFICA', comofica)
    ////console.log('nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',monomios[bye].numero)
    monomios[bye].numero = comofica
}

//console.log('OK, VAMOS DAR UMA PARADInHA')

// FATORAR SÓ UM nÚMERO
//console.log(FATORARSInGULAR('20'))

function FATORARSInGULAR(potn) {
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



// FAZER COnTA COM nÚMEROS
function fazerConta(anterior) {

    if(0 == 0) {// falta == false
//Primeiro raizes e potências
for (n = 0; n < anterior.length; n++) {
if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
    //console.log('POTEnCIALIZAÇÃO')
    anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
    anterior.splice(n - 1, 2)
    
    n = n - 3 // n = n - 3
    //console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
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
//console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])

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
//console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
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

// while(anterior.length != 1 && anterior.indexOf('nan') == -1) {
    for (n = 0; n < anterior.length && anterior.length != 1; n++) {
        //console.log(anterior[n])
        if (anterior[n] == '+' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[x\\/\\*]') == -1 && String(anterior[n - 2]).search('[x\\/\\*\\-]') == -1) {
            //console.log('ADIÇÃO')
            anterior[n + 1] = String(Number(anterior[n - 1]) + Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
          
            n = n - 3
            //console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
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
            //console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
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
            //console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
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
            //console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
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
            //console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
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



function DIVIDIR(T, qual) {
    

    Tfix = []
for (h in T) {
    Tfix.push(T[h])
    //console.log(T[h])
}
//egs = [...qual]

//console.log('QUAL?',qual)
egs = []
for (norte in qual) {
//console.log(qual[norte])
if (qual[norte] == '*') {
    //console.log('NÃOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
}else{
//console.log('SIIIIIIIIIIM')

egs.push(qual[norte])

}

}


takeout = []

for (n in egs) {

if (T.indexOf(egs[n]) != -1) {

   // console.log('TAKE OUT', egs[n])
T.splice(T.lastIndexOf(egs[n]), 1)
takeout.push(Number(n))
}

}


//console.log('eeeeeeeeeeeeeeeeeeg', egs)


for (giro = egs.length - 1; giro >= 0; giro--) {
    if (takeout.indexOf(Number(giro)) == -1) {
   // console.log(egs[giro],'egs[giro]')
    }else{
       // console.log('SPLICE')
        egs.splice(giro,1)
    }
}

//console.log('GIRRRRRRRRRROOOOO', egs)
depois = ''
for (n in egs) {
   // console.log('yo',egs[n])
        depois += String(egs[n])

     if (String(egs[Number(n) + 1]).search('[0-9]') != -1 && egs[n].search('[//-//+]') == -1) {
      //  console.log('HUmm')
        depois+= '*'
     }
}

return depois


}
expression = exp

////console.log('--------------------------------------------MOnOMIOS--------------------------------------')
reps = []
segs = []
let  = []

for (m = 0; m < monomios.length; m++) { // CADA MOnÔMIO
    repetido = []
    
    col = false
    repetido = []

   numerosrep = []
    ////console.log('BURRO')
 ////console.log('--------------------')
    ////console.log(monomios[m].numero)
    
 
    for (oc = 0; oc < monomios[m].numero.length; oc++) { // CADA LETRA DE CADA MOnÔMIO
        

        if (monomios[m].numero[oc].search('[\\*\\+\\/]') == -1) {
       // //console.log('LETRA OU nÚMERO ISOLADO: ' + monomios[m].numero[oc])

       ////console.log('nUMEROS REPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP', numerosrep.indexOf(monomios[m].numero[oc]))
        if (numerosrep.indexOf(monomios[m].numero[oc]) == -1) {
        numerosrep.push(monomios[m].numero[oc])

        for (u = 0; u < monomios.length; u++) { // OUTROS MOnÔMIOS
            ocs2 = []

            if(u != m) {
        //  //console.log(`monomio ${u}: `)
         // //console.log(monomios[u])   
            

          // OCAS
          if(ocs2.find(function(ocs2) {
            return ocs2.ed == monomios[m].numero[oc]
            }) == undefined) {
              //  //console.log('====================')
                ocs2.push({ed: monomios[m].numero[oc], el: 0})

                ocs = 0
          for (ao = 0; ao < monomios[m].numero.length; ao++) {
           // //console.log('AAAAAAAAAA' + monomios[m].numero[ao])
            if (monomios[m].numero[ao] == monomios[m].numero[oc]) {
                ocs++
            }
          }
        }
          ////console.log('OOOOOOOOOOOOOOCS-------!!!!!!', ocs)
          
          for (e = 0; e < monomios[u].numero.length; e++) { // CADA LETRA DE CADA MOnÔMIO
          //  //console.log(monomios[u].numero[e])
            
            if (monomios[u].numero[e] == monomios[m].numero[oc]) {
              //  //console.log(monomios[m].numero[oc] + ' é igual a ' + monomios[u].numero[e])

                if (repetido.find(function(repetido) {
                    return repetido.monum == u
                    }) === undefined) {

                        ocs2.find(function(ocs2) {
                            return ocs2.ed == monomios[m].numero[oc]
                            }).el++

                    

                     

                            if (ocs2.find(function(ocs2) {
                                return ocs2.ed == monomios[m].numero[oc]
                                }).el <= ocs) {

                repetido.push({monum: u, wc: [m], letr: monomios[u].numero[e]})

               

                            }

                //reps.push({mns: [u, m],alg: monomios[u].numero[e])
               // reps.push(monomios[u].numero[e])
                    }else{
                        ////console.log('OOOOOBABAOBABEI')
                       // if (repetido.find(function(repetido) {
                           // return repetido.monum == u
                           // }).letr.indexOf(monomios[u].numero[e]) == -1) {

                                ocs2.find(function(ocs2) {
                                    return ocs2.ed == monomios[m].numero[oc]
                                    }).el++

                             
                                   

                                        if (ocs2.find(function(ocs2) {
                                            return ocs2.ed == monomios[m].numero[oc]
                                            }).el <= ocs) {
                                   
                                repetido.find(function(repetido) {
                                    return repetido.monum == u
                                    }).letr += `.${monomios[u].numero[e]}`
                                   
                                }
                                    //reps.push(monomios[u].numero[e])
    
              
                           // }else{
                                //////console.log('DO nOT ADD')
                          // }
                    }
                
                ////console.log('REPETIDO: ', repetido)
                ////console.log('OCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS34246352645263546345:', ocs2)
            }else{
                
            }
            ////console.log('')
          }
        }
        }
        ////console.log('------------------------------------------------------------------------------------------')
    }
    }
    }
   
    reps.push(repetido)

    
    ////console.log('OALAALODLOALDAODLADOLADAOLAODLaaaaaaaaaaaa000000000000000OOOOOOooooooooooooooooooooIIIIIIIIIIIIIIAODALDLAOLDAO')
        for (moe in repetido) {
            ////console.log(repetido[moe])
            if (segs.find(function(segs) {
                return segs.car == repetido[moe].letr
                }) == undefined) {

                    console.log('WHAT YOU HAVE IN YOUR MIND?????????????????????huh????????',repetido[moe].letr)
                    if (repetido[moe].letr == '-') {
                        console.log('ARE YOU SERIOUS?')
                    }else{
                        segs.push({car: repetido[moe].letr, mons: [m]})
                    }
              
               

            }else if(segs.find(function(segs) {
                return segs.car == repetido[moe].letr
                }).mons.indexOf(m) == -1){
              

                    segs.find(function(segs) {
                        return segs.car == repetido[moe].letr
                        }).mons.push(m)

                        
            }
        }
}


////console.log('RELAÇÃO EnTRE OS MOnÔMIOS')
////console.log(segs)


for (nl = 0; nl < segs.length; nl++) {
    ////console.log('-----------------------------------------------------------------------------------------')
    
    ////console.log(segs[nl])

    ////console.log('AnALISAR CADA ITEM')
    ////console.log('nUMERO: ', segs[nl].car)
    for (n = 0; n < segs.length; n++) {

        ////console.log('---------------------------------------------------------------------')
        if (n != nl) {
        ////console.log(`${segs[n].car}.search('${segs[nl].car}')`)
        if (String(segs[n].car).search(String(segs[nl].car)) != -1) {
           
            ////console.log(`${segs[n].car}: ${segs[n].mons}`)
            ////console.log(`${segs[nl].car}: ${segs[nl].mons}`)

            for (u in segs[n].mons) {
                ////console.log(segs[n].mons[u])
                if (segs[nl].mons.indexOf(segs[n].mons[u]) != -1) {
                    ////console.log('TEM')
                }else{
                    ////console.log('nÃO TEM')
                 //   console.log('O DEVTOOLS É A PIOR COISA QUE JÁ EXISTIU nESSE MUnDO', segs[nl].mons)
                    segs[nl].mons.push(segs[n].mons[u])
                  
                }
            }
        }
        }
    
    }

}


function ehprimo(Number) {
    parar = false
    for (t = 2; t < Number && parar == false; t++) {
    
        if (Number%t == 0) {
            parar = true
        }
    }
    if (parar) 
    return false
    else
    return true
}


//////console.log('------------------------------ORDEnAnDO DO MAIOR PARA O MEnOR----------------------------')


grtols = []


for (hi in segs) {
    //////console.log(segs[hi], segs[hi].mons.length)
    segs[hi].length = segs[hi].mons.length

    grtols.push(segs[hi])
}

//////console.log('grtols: ', segs)
//////console.log(sortob(grtols, 'length'))
organizado = sortob(grtols, 'length')[1]

grtols = []
for (ah in organizado) {
   // ////console.log(segs[organizado[ah]])
    grtols.push(segs[organizado[ah]])
   
}

//////console.log('LISTA ORDEnADA PELO TAMAnHO', grtols)
segs = grtols


//DIVS
ml = monomios.length
//////console.log(ml)

divs = ehprimo2(ml)
//////console.log(divs)

for (n in divs) {
    //////console.log(divs[okentao])
    
}

if (divs.length == 0) {
divs = [1]
}

//divs = [2,3]

//////console.log('AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIÓÓOÓÓÓÓÓOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
//////console.log(segs)


    //////console.log(segs, divs)

    ////console.log(segs)

 //console.log(segs)

    //const HATEYOU = []
    //for (HATEDEVTOOLS in segs) {
       
      //  console.log(segs[HATEDEVTOOLS].mons)
        //HATEYOU.push(segs[HATEDEVTOOLS])
   // }
    
   //console.log(segs)
   for (tie in segs) {
   // console.log(segs[tie])
    segs[tie].godhelpme = [...segs[tie].mons]
   }
  
   okentao = 0
    for (okentao in divs) {
        roll = [] 

       // console.log('nAOOOOOOOOOOOOOOOOOOOOOOsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', n)
        //const vi = 0
        scarecrow = []
        for(anchor in segs) {
           // console.log('i feel the light betrayed me', segs[anchor].mons)
            scarecrow.push({divididos: [], poss: [...segs[anchor].mons], divisor: [...segs[anchor].car], positions: [...segs[anchor].mons]})
        
            army = []
            lpisthebest = ''
                for (fall in segs[anchor].car) {
                if (lpisthebest.length == 0) {
                  //  console.log('LISTA VAZIA - ADD')
                    lpisthebest = segs[anchor].car[fall]
                  //  console.log(lpisthebest)
                }else if(lpisthebest.search('[0-9]') != -1 && segs[anchor].car[fall].search('[0-9]') != -1) {
                   // console.log('VAI - ADD')
                    lpisthebest += segs[anchor].car[fall]
                }else{
                   // console.log('nÃO VAI nÃO')
                    army.push(lpisthebest)
                    if(segs[anchor].car[fall] != '.') {
                    lpisthebest = segs[anchor].car[fall]
                    }else{
                        if (segs[anchor].car[Number(fall) + 1].search('[0-9]') != -1) {
                        lpisthebest = '*'
                        }else{
                            lpisthebest = ''
                        }
                    }
               //     console.log('LPISTHEBEST', lpisthebest)
                }
                if (fall == segs[anchor].car.length - 1) {
                    army.push(lpisthebest)
                }
            }
            bell = [...army]
          //  console.log('OAHAHA', army)
            for (high in segs[anchor].mons) {
                
               
                army = [...bell]
         
             //   console.log(monomios[segs[anchor].mons[high]].numero,army)
        
                pain = DIVIDIR(army,monomios[segs[anchor].mons[high]].numero)
                
                if (pain.length == 0 || pain.search('([0-9]|[a-z)])') == -1) {
                  //  console.log('É 1')
                    pain = '1'
                  //  console.log('É ESSE:', pain)
                    scarecrow[anchor].divididos.push(pain)
                   
                }else{
        
                    right = ''
                    for (feet in pain) {
                      //  console.log(pain[feet])
                        if (pain[feet] != '+') {
                            right+= pain[feet]
                        }
                    }
                 //   console.log('É ESSE:', right)
                   
                    uy = ''
                  //  console.log(right, 'RIGHT') 

                   for (xarope in right) {
                 //   console.log(right[xarope])
                    if (xarope == 0 && right[xarope] == '*') { // *2
                   //   console.log('ERRADO!', '*2')
                    }else if(xarope == right.length - 1 && right[xarope] == '*'){ // 2*
                  //      console.log('ERRADO', '2*')
                    }else if(right[xarope] == '*' && String(right[Number(xarope) + 1]).search('[0-9]') == -1){ // 2*x
                 //       console.log('ERRADO', '2*x')
                    }else if(right[xarope] == '*' && String(right[Number(xarope) - 1]).search('[0-9]') == -1){ // x*2
                   //     console.log('ERRADO', 'x*2')
                    }else{
                        uy+= right[xarope]
                    }
                   }
                 //  console.log('UY',uy)
                    scarecrow[anchor].divididos.push(uy)
                }
               
            }
        }
   
       miss = []

       for (ah in scarecrow) {
         //  console.log('SCARECROW', scarecrow[ah].divididos)
           for (é in scarecrow[ah].divididos) {
           if (miss.find(function(miss){return miss.dividido == scarecrow[ah].divididos[é]}) == undefined) {
            miss.push({dividido: scarecrow[ah].divididos[é], aparicoes: [Number(ah)], divisor: scarecrow[ah].divisor})
           }else{
            miss.find(function(miss){return miss.dividido == scarecrow[ah].divididos[é]}).aparicoes.push(Number(ah))
           }
        }
       }

       
       quantosfatores = Number(monomios.length)/Number(divs[okentao])
       quantasposições = Number(monomios.length)/Number(quantosfatores)

      // console.log('número de fatoes:', quantosfatores, '     número de posições:', quantasposições)

// ORDEnAnO O MISS DE ACORDO COM O TAMAnHO DO APARIÇÕES

       grtols = []
for (hi in miss) {
    //////console.log(segs[hi], segs[hi].mons.length)
    miss[hi].length = miss[hi].aparicoes.length

    grtols.push(miss[hi])
}
organizado = sortob(grtols, 'length')[1]

grtols = []
for (ah in organizado) {
   // ////console.log(segs[organizado[ah]])
    grtols.push(miss[organizado[ah]])
   
}
miss = [...grtols]
//
deucerto = false
java = 0

//console.log('MISS.LENGTH',miss.length)


while(java < miss.length && deucerto == false) {
           
          // if (miss[java].aparicoes.length >= quantasposições) {
        //    console.log('')
     //   console.log('SEnDO AnALISADO nO MOMEnTO', miss[java].aparicoes)

        podeser = []
        for (outro in miss) {
           // console.log('')
            if (outro != java /*&& miss[outro].aparicoes.length >= quantasposições*/) {
            //   console.log(miss[outro], outro)

                presentes = []
                for (quecoisa in miss[outro].aparicoes) {
                    fatorzinho = miss[outro].aparicoes[quecoisa]
                 //   console.log('FATORZINHO', fatorzinho, 'MISS[JAVA]', miss[java].aparicoes)

                    if (miss[java].aparicoes.indexOf(fatorzinho) != -1) {
                 //   console.log('TEM', fatorzinho)
                        presentes.push(fatorzinho)
                    }
                }
              //  console.log('OLHA', presentes)

                adicionou = false
                for (idk in podeser) {
                 //   console.log(podeser[idk])
                    esigual = true
                    for (denovo in podeser[idk].opl) {
                       // console.log(podeser[idk].opl[denovo], presentes[denovo])
                        if (podeser[idk].opl[denovo] == presentes[denovo]) {
                           // console.log('É IGUAL')
                        }else{
                            esigual = false
                        }
                    }
                    if (esigual == true) {
                        podeser[idk].position.push(outro)
                        adicionou = true
                    }
                }
                if (presentes.length > 0 && presentes.length > 0 && adicionou == false) {
                    podeser.push({opl: presentes, position: [outro]})
                }
                
            }
           }
           console.log('ESSE É O PODESERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR', podeser)
           
           
           for (belief in podeser) {
               if (podeser[belief].position.indexOf(java) == -1) {
               podeser[belief].position.push(String(java))
               }

          //  console.log(podeser[belief].opl)

            shot = ''
            for (gun in podeser[belief].opl) {
                //console.log(podeser[belief].opl[gun])
                shot+= podeser[belief].opl[gun] + ','
            }
          //  console.log('THAT WE LET IT GO:', shot)

            if (roll.length == 0) {
               // console.log('ADICIONAR(LISTA VAZIA)')
                roll.push({repetidos: [...podeser[belief].opl], way: shot, posições: [...podeser[belief].position]})
            }else if(roll.find(function(roll){return roll.way == shot}) != undefined) { // SE JÁ TIVER NA LSITA
                //console.log('JÁ TEM')
              // console.log(roll.find(function(roll){return roll.way == shot}),'esse',podeser[belief])

                for (capital in podeser[belief].position) {
                  //  console.log(podeser[belief].position[capital])

                 //  console.log(roll.find(function(roll){return roll.way == shot}).posições, roll.find(function(roll){return roll.way == shot}).posições.indexOf(podeser[belief].position[capital]),podeser[belief].position[capital])

                if (roll.find(function(roll){return roll.way == shot}).posições.indexOf(podeser[belief].position[capital])== -1) {
                //   console.log('NÃO TEM') 
                   roll.find(function(roll){return roll.way == shot}).posições.push(podeser[belief].position[capital])
                }
                }

            }else{
               // console.log('NÃO TEM')
                roll.push({repetidos: [...podeser[belief].opl], way: shot, posições: [...podeser[belief].position]})
            }
           }

          // console.log('E ESSE É O ORIGInAL: ', miss[java].aparicoes, java)
           whyis = java
           if (podeser.length > 0) {
              // console.log('fatores', quantosfatores, 'posições', quantasposições)
              // console.log(podeser)

               for(cold in podeser) {
           if (podeser[cold].position.length == quantosfatores && podeser[cold].opl.length == quantasposições && miss[whyis].aparicoes.length == quantasposições) {
           // console.log('É ISSOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
            deucerto = true

            ficaassim = ''
           // podeser[cold].position.push(whyis)

            for (yehaa in podeser[cold].position) {
              //  console.log(podeser[cold])
               // console.log(miss[podeser[cold].position[yehaa]].dividido)
                if (miss[podeser[cold].position[yehaa]].dividido[0] == '-') {
                    
                    fi = ''
                    for (ohjesus in miss[podeser[cold].position[yehaa]].dividido) {
                        if (miss[podeser[cold].position[yehaa]].dividido[ohjesus] != '-') {
                            fi+= miss[podeser[cold].position[yehaa]].dividido[ohjesus]
                        }
                    }
                  //  console.log(fi)
                    if (yehaa != 0) {
                         ficaassim += ` - ${fi}`
                    }else{
                        ficaassim += `-${fi}`
                    }
                }else if(yehaa != 0){
                    ficaassim += ' + '
                    ficaassim+= miss[podeser[cold].position[yehaa]].dividido
                }else{
                    ficaassim+= miss[podeser[cold].position[yehaa]].dividido 
                }
                
            
            }
          //  console.log('FICA ASSIM', `(${ficaassim})`)
           for (ruin in podeser[cold].opl) {
          //  console.log(scarecrow[podeser[cold].opl[ruin]].divisor)
            emotion = ''
            for (scream in scarecrow[podeser[cold].opl[ruin]].divisor ) {
           //     console.log(scarecrow[podeser[cold].opl[ruin]].divisor[scream])
                emotion+= scarecrow[podeser[cold].opl[ruin]].divisor[scream]
            }
          //  console.log(`${emotion}(${ficaassim})`)
          }
           }
        }

        }

         //  }
           
         //  console.log('continuar', miss[java])

           java++
       }
       okentao++


       
       for (nao in roll) {
           console.log('-------------------------------------------------------------------')
        console.log('esse é o negócio',roll[nao].repetidos)
        
        console.log('---------------------------------------------')
        console.log('ANALISANDO O MISS')

       
            shot = ''
            for (gun in roll[nao].repetidos) {
                //console.log(podeser[belief].opl[gun])
                shot+= roll[nao].repetidos[gun] + ','
            }

        for (whyso in miss) {
            //console.log(miss[whyso].aparicoes)
            igual = 0
            for (heat in miss[whyso].aparicoes) {
                //console.log(miss[whyso].aparicoes[heat])
                if (roll[nao].repetidos.indexOf(miss[whyso].aparicoes[heat]) != -1) {
                  //  console.log('TEM')
                    igual++
                }
            }
           // console.log('HÁ', igual, 'numero repetidos')
            if (igual == roll[nao].repetidos.length) {
               // console.log('TEM SIMMMMMMMMMMMMMMM', whyso)
                  // console.log(roll.find(function (roll){return roll.way == shot}).posições)

                   if (roll.find(function (roll){return roll.way == shot}).posições.indexOf(whyso) != -1) {
                    //console.log('NAO ADICIONAR, JÁ TEM')
                }else{
                  //  console.log('ADICIONAR EFETIVAMENTE')
                    roll.find(function (roll){return roll.way == shot}).posições.push(whyso)
                }
            }
              // console.log('THAT WE LET IT GO:', shot)
               
            }
        }
        
       
      //  console.log('ROOLLLLLLLLLLLLLLLLLLLLLLLLLLL', roll)

       youdumb = []

        aswillbe2 = []
        for (raging = 0; raging < roll.length; raging++) {

            asitwas = [] 
        
            obe = {what:[]}

          //  console.log('')
           // console.log(roll[raging].repetidos, roll[raging].posições)

           
        
           for (still in roll[raging].repetidos) {
            asitwas2 = []
            aswillbe = []

           //    console.log('')
         //   console.log(scarecrow[roll[raging].repetidos[still]].divisor, still)

            mylife = '('
            for (still2 in roll[raging].posições) {

                if (still != 0) {
                mylife+= ' + ' + miss[roll[raging].posições[still2]].dividido
                }else{
                    mylife+= miss[roll[raging].posições[still2]].dividido
                }

              
              //  console.log(miss[roll[raging].posições[still2]].dividido)

                conseguiu = false
                older = 0
                while (older < monomios.length && conseguiu == false) {
                DESFATORAR(monomios[older].numero, scarecrow[roll[raging].repetidos[still]].divisor, miss[roll[raging].posições[still2]].dividido)
                
                
                // correto == ['2','*','10','x'] (NÚMERO QUE VAI SER COMPARADO)
                // eg2 == ['10'] (NÚMERO QUE VAI MULTIPLICAR)
                // eg == '2x' (NÚMERO QUE VAI SER MULTIPLICADO)
                
                function DESFATORAR(correto, eg2, eg) {

                //    console.log('eg', eg)

                eassim = []
                solo = ''
                for (ne in eg) {
                    //console.log('EGGGGGG',eg[ne])
                    if (eg[ne] != '.') {
                if (solo.length == 0) {
                   // console.log('LISTA VAZIA')
                    solo+= eg[ne]
                }else if(String(solo.search('[0-9]')) != -1 && String(eg[ne]).search('[0-9]') != -1){
                  //  console.log('É UM nÚMERO')
                    solo+= eg[ne]
                }else{
                    eassim.push(solo)
                    solo = ''
                    solo += eg[ne]
                    
                }
                if (ne == eg.length - 1) {
                    eassim.push(solo)
                }
                    }else{
                       // console.log('NAO')
                    }
                }
                
                eg = eassim
                
                
                whythat = [...eg]
              //  console.log(correto)
              /*
                for (ponto in eg2) {
                  //  console.log(eg2[ponto])
                    if (eg2[ponto] != '.') {
                    whythat.push(eg2[ponto])
                  //  console.log('I FOLLOW YOu')
                    }
                }
                */
               teri = false
                juntar = ''
                for (estudar in eg2) {
                    console.log(eg2[estudar])
                    if (eg2[estudar] == '.') {
                        teri = true
                        if (eg2[Number(estudar) + 1].search('[0-9]') != -1) {
                          
                            whythat.push(juntar)
                            juntar = ''
                        whythat.push('*')
                       
                        }
                    }else{
                       
                   
                      console.log('juntar',juntar)
                        if (juntar.length == 0) {
                            juntar = eg2[estudar]
                            console.log('LISTA VAZIA', juntar)
                            if (estudar == eg2.length - 1) {
                                whythat.push(juntar)
                                console.log('WHYTHAAAAAAAAAAAAAAAAT', whythat)
                            }

                        }else if(eg2[estudar].search('[0-9]') != -1 && juntar.search('[0-9]') != -1){
                            console.log('I\'M NEVER WHAT I LIKE')
                            juntar+= eg2[estudar]
                            console.log('juntar', juntar)
                            if (estudar == eg2.length - 1) {
                                console.log('UAISO')
                                whythat.push(juntar)
                            
                            }
                        }else{
                            whythat.push(juntar)
                            juntar= eg2[estudar]
                            if (estudar == eg2.length - 1) {
                                whythat.push(juntar)
                            }
                        }
                    }
                      
                 }
                 if (teri == false) {
                  whythat = []
                    console.log('SEM ASTERISCO')
                    for (t in eg2) {
                    whythat.push(eg2[t])
                    }
                    for (t in eg) {
                        whythat.push(eg[t])
                    }
                }

            console.log('MULTIPLICAR', eg2,'*',eg)
             console.log(whythat)
                
                numerinhos = []
                for (decisao in correto) {
                    if (correto[decisao] != '*' && correto[decisao] != '.' && correto[decisao] != '+' /*&& correto[decisao] != '-'*/) {
                       numerinhos.push(correto[decisao])
                       
                        }
                 //   console.log(correto[decisao],'AH, NAO')
                }
                  //  console.log(numerinhos)
                    thatway = [...numerinhos]


                    for (poder in whythat){
                        if (whythat[poder] != '*' && whythat[poder] != '.' && whythat[poder] != '+' /*&& whythat[poder] != '-'*/ && numerinhos.indexOf(whythat[poder]) != -1) {
                    //    console.log(whythat[poder], numerinhos)
                    //    console.log(numerinhos.indexOf(whythat[poder]))
                        numerinhos.splice(numerinhos.indexOf(whythat[poder]),1)

                        }
                    }

                    for (pombo = whythat.length - 1; pombo >= 0; pombo--){
                      //  console.log('AAAAAAAAAAAAAAAAAAAASDUSWDJUWDJWUDJWDUWDJUWDJUWD', whythat[pombo])
                        if (whythat[pombo] == '*' || whythat[pombo] == '1') {
                            console.log('?',whythat[pombo])
                            whythat.splice(pombo,1)
                           console.log(whythat)
                        }
                        
                    }

                    //console.log('WHYTHATTTTTTTTTTTTTTT', whythat, thatway, 'THATWAAAAAAAAAAAY')
                   // console.log(numerinhos)
                  //  console.log('WERE BROKEN PEOPLE', thatway, 'thatway', whythat, 'numerinhos')
                    if (numerinhos.length == 0 && thatway.length == whythat.length) {
                       // console.log('ENTÃO', eg2,'*',eg,'=',correto, older, 'ONE MORE MOMNET')
                        conseguiu = true
                    }
                }
                older++
                }
              // console.log('ALL THE SORROW I\'VE SEEN', older - 1, scarecrow[roll[raging].repetidos[still]].divisor, miss[roll[raging].posições[still2]].dividido)
            //   console.log(whythat,'está na posição', older - 1, 'em monômios',monomios[older - 1].numero)
          //  console.log(older - 1, monomios[older - 1].numero)
               asitwas.push(older - 1)
               asitwas2.push(older - 1)
               aswillbe.push(older - 1)
               
           }
        

          // console.log('ASITWAS',asitwas, asitwas2, aswillbe)
           
           obe.what.push({ar: asitwas2, indice: still})
           aswillbe2.push({oque:aswillbe, onde:raging})
           
        }
        
        youdumb.push({mons: asitwas, rag: raging, w: obe, polen: raging})
       // console.log(obe)
       }

      // console.log('YOUDUMB',youdumb)
       
        dontworry = []
        for (behappy in youdumb) {

          //  console.log('')
            //console.log(youdumb[behappy].mons)

            //console.log('---------------------------------------')
            for (armenia in youdumb) {
                
                if (armenia != behappy) {
               // console.log(youdumb[armenia].mons)

                doeshave = true
                for (sofar in youdumb[armenia].mons) {
                  //  console.log(youdumb[armenia].mons[sofar])
                    if (youdumb[behappy].mons.indexOf(youdumb[armenia].mons[sofar]) == -1) {
                        doeshave = false
                       
                    }
                }
               // console.log(doeshave)
                if (doeshave == true) {
               // console.log(youdumb[behappy].mons,'TEM', youdumb[armenia].mons)
               if (dontworry.indexOf(behappy) == -1) {
                dontworry.push(armenia)
               }
                }
            }

            }
          
        }

        for (da = youdumb.length - 1; da >= 0; da--) {
            if (dontworry.indexOf(String(da)) != -1) {
                //console.log('TEM COISA AÍ',youdumb[da].mons)
               // youdumb.splice(da,1)
            }
        }

        grtols = []


    
for (hi in youdumb) {
    //////console.log(segs[hi], segs[hi].mons.length)
    youdumb[hi].length = youdumb[hi].mons.length

    grtols.push(youdumb[hi])
}

//////console.log('grtols: ', segs)
//////console.log(sortob(grtols, 'length'))


organizado = sortob(grtols, 'length')[1]

grtols = []
for (ah in organizado) {
   // ////console.log(segs[organizado[ah]])
    grtols.push(youdumb[organizado[ah]])
   
}
     
console.log('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')
youdumb = []
for (erro = grtols.length - 1; erro >= 0; erro--) {
  //  console.log(grtols[erro])
    youdumb.push(grtols[erro])
}
console.log('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')
/*
for (yourlife in grtols) {

    console.log(grtols[yourlife].w.what)

    for (bolinho in grtols[yourlife].w.what) {
        console.log(grtols[yourlife].w.what[bolinho])

        vagem = grtols[yourlife].w.what[bolinho]
        for (ahnao in vagem) {
            console.log(vagem[ahnao])
        }
    }
}
*/

pans = []
numerospresentes = []

for (wrecked in youdumb) {
    //console.log('YOUDUMB[WRECKED]',youdumb[wrecked])
    initial = youdumb[wrecked].w.what
    for (agg in initial) {
       // console.log(initial[agg].ar, Number(agg))
    }
}

for (imback = youdumb.length - 1; imback >= 0; imback--) {
    console.log('AAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', imback)

    sticky = []
    initial = youdumb[imback].w.what

    if (initial.length > 0) {
    inside = {which: [], numberyoudumb: youdumb[imback].polen}
    console.log(imback)
    console.log('THERE\'S NOTHING TO SAY NOW',youdumb[imback].mons)


    console.log('///////\\\\\\\ESPERE POR UM SEGUNDO...///////\\\\\\')
    
    
    for (agg in initial) {
        console.log('IN THIS WORLD',initial[agg].ar)

        taai = false
         for (eng in initial[agg].ar) {
            console.log(initial[agg].ar[eng])
            if (numerospresentes.indexOf(initial[agg].ar[eng]) == -1) {
                console.log('OK')
               
            }else{
                console.log('WE HAVE A PROBLEM')
                taai = true
            }
         }
     
         if (taai == false) {
            console.log('SEM PROBLEMAS', imback, agg)
            inform = {monos: initial[agg].ar, numberwhat: initial[agg].indice} 
           //  youdumb[numberyoudumb].w.what[numberwhat] = monos
            console.log('I\'M TWISTED UP',inside, inform)
            inside.which.push(inform)
            console.log('INFORM', inform.monos)
            for (darkening in inform.monos) {
               
                sticky.push(inform.monos[darkening])
            }
            console.log('DODODODODODODODDODOODDODODOODDDODODODO', inside.which)

            for (eng in initial[agg].ar) {
            
                numerospresentes.push(initial[agg].ar[eng])
               
             }
             console.log('NUMEROS PRESENTES ATÉ O MOMENTO:',numerospresentes)
         }
    }

    
    if (inside.which.length > 0) {
        inside.todos = sticky
 pans.push(inside)
    }

    //youdumb.splice(imback, 1)
    console.log('FICOU ASSIM Ó:', numerospresentes, sticky)
    /*
    for (invest in pans) {
        console.log('índice',invest)
        for (plat in pans[invest].which) {
            console.log(pans[invest].which[plat].monos)
        }
    }
    */
    
    youdumb.splice(imback, 1)
    for (h in youdumb) {

        if (h != imback) {
            if (youdumb[h].w.what.length > 0) {
      //  console.log(youdumb[h].w.what, h)
            }

        console.log('-----------------------------')
        for (tempo = youdumb[h].w.what.length - 1; tempo >= 0; tempo--) {
        //  console.log(youdumb[h].w.what[tempo].ar, tempo)
            
            dulu = false
            
           for (and in youdumb[h].w.what[tempo].ar) {
           // console.log(youdumb[h].w.what[tempo].ar[and])
            if (numerospresentes.indexOf(youdumb[h].w.what[tempo].ar[and]) != -1) {
              //  console.log('ESTÁ EM: ', numerospresentes)
                dulu = true
            }
           }
           if (dulu == false) {
          //  console.log('PODE FICAR :)', h, tempo)
           }else{
         //     console.log('NÃO PODE!!!!!!!!!!!!!')
           youdumb[h].w.what.splice(tempo, 1)
          //imback++
      //    console.log('IMBAACK',imback)
           }
       }
    }
    }
    
    console.log('YOUDUMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMB' 
    )

  
 
    console.log('OLHA, eu tentei...', youdumb.length)
    for (vixi in youdumb) {
     
     // if (youdumb[vixi].w.what.length > 0) {
        console.log('aaa',youdumb[vixi].w.what)
        for (ainao in youdumb[vixi].w.what) {
         console.log('AI NÃO',youdumb[vixi].w.what[ainao].ar)
        
          
    }
//}
}

for (força in youdumb) {
    console.log(força, youdumb[força],youdumb[força].w.what.length)
    entao = []
    for (areo in youdumb[força].w.what) {
        console.log(areo,youdumb[força].w.what[areo].ar)
        for (paris in youdumb[força].w.what[areo].ar) {
            console.log(paris,youdumb[força].w.what[areo].ar[paris])
            entao.push(Number(youdumb[força].w.what[areo].ar[paris]))
        }
    }
    console.log(entao)
    youdumb[força].t = entao
    console.log(youdumb[força].t)
 }

console.log('EU NÃO SEI MAS O QUE EU ESTOU FAZENDO....A, A, A, A, A, A, A, A, A, A, A, A,')


grtols = []


    
for (hi in youdumb) {
    //////console.log(segs[hi], segs[hi].mons.length)
    youdumb[hi].length = youdumb[hi].t.length

    grtols.push(youdumb[hi])
}

//////console.log('grtols: ', segs)
//////console.log(sortob(grtols, 'length'))


organizado = sortob(grtols, 'length')[1]

grtols = []
for (ah in organizado) {
   // ////console.log(segs[organizado[ah]])
    grtols.push(youdumb[organizado[ah]])
   
}

youdumb = []
for (erro = grtols.length - 1; erro >= 0; erro--) {
    console.log('RAINY DAY',grtols[erro])
    youdumb.push(grtols[erro])
}

console.log('IMAGENS', youdumb)

}

}
console.log('pans é', pans)
for (bababa in pans) {
    console.log('_____________________________________________________________________')
    console.log(pans[bababa], Number(bababa))
    //console.log(pans[bababa].which)
    console.log(roll[pans[bababa].numberyoudumb])
      console.log('posições(fixas) - miss: ',roll[pans[bababa].numberyoudumb].posições)

      tobreak = ''
      for (quassao in roll[pans[bababa].numberyoudumb].posições) {
        console.log(quassao,':', roll[pans[bababa].numberyoudumb].posições[quassao],miss[roll[pans[bababa].numberyoudumb].posições[quassao]].dividido)

        el = miss[roll[pans[bababa].numberyoudumb].posições[quassao]].dividido

       // console.log('ALL I WANTED WAS TO FINISH THIS THING :D', el)

        gates = []

        quase = []
        /*
        for (power in el) {
            quase.push(el[power])
            console.log('EL POWER!',el[power])
        }
*/
        teri = false
        juntar = ''
      //  console.log('NADAAAAAAAAAA')
        for (estudar in el) {
            console.log(el[estudar])
            if (el[estudar] == '*') {
                teri = true
                if (el[Number(estudar) + 1].search('[0-9]') != -1) {
                  
                    quase.push(juntar)
                    juntar = ''
                quase.push('*')
                console.log('aaaaaaaaaaaaaaaaa', quase)
                }
            }else{
               
           
             // console.log('juntar',juntar)
                if (juntar.length == 0) {
                    juntar = el[estudar]
                    console.log('LISTA VAZIA', juntar)

                    if (estudar == el.length - 1) {
                        quase.push(juntar)
                    }

                }else if(el[estudar].search('[0-9]') != -1 && juntar.search('[0-9]') != -1){
                    console.log('I\'M NEVER WHAT I LIKE')
                    juntar+= el[estudar]
                    console.log('juntar', juntar)
                    if (estudar == el.length - 1) {
                        console.log('UAISO')
                        quase.push(juntar)
                    }
                }else{
                    quase.push(juntar)
                    juntar= el[estudar]
                    if (estudar == el.length - 1) {
                        quase.push(juntar)
                    }
                }
            }
              
         }
       //  console.log('QUASSSSEEEE',quase)

         if (teri == false) {
            
            quase = []
          //  console.log('SEM ASTERISCO')
            for (t in el) {
            quase.push(el[t])
            }
        }
        aconta = ''

       elevar = 1
       aster = false
       
        for (patience in quase) {
            //console.log(quase[patience])       
           
            if (quase[patience] == '*') {
                aster = true
               // console.log('AND THE CLSDADWDWD', patience)
               // console.log(quase[Number(patience) - 1], quase[Number(patience) + 1])
                gates.push(quase[Number(patience) - 1])
                gates.push('x')
                gates.push(quase[Number(patience) + 1])
              //  console.log(gates, fazerConta(gates))

             //  console.log(quase, Number(patience) + 1)
                quase[Number(patience) + 1] = fazerConta(gates)[0]
                aconta = fazerConta(gates)[0]
               // console.log(quase)
              
                gates = []
            }else if(quase[patience].search('[a-z]') != -1)  {
               // console.log('É LETRA')
                if (quase[patience] == quase[Number(patience) - 1]) {
                   // console.log('ELEVAR!')
                    elevar++

                    if (patience == quase.length - 1) {
                     //   console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                        aconta+= `^${elevar}`
                       // console.log(aconta)
                    }

                }else{
                    if (elevar > 1) {
                      //  console.log('UEPA')
                        aconta+= `^${elevar}`
                        
                    }

                    aconta+= quase[patience]
                  //  console.log(aconta)
                  
                    elevar = 1
                }
                //console.log(elevar)
               
            } 
        }
        console.log('A CONTA',aconta,quase, tobreak)
    if (aster == false) {
        console.log('SEM ASTERISCO')
        aconta = miss[roll[pans[bababa].numberyoudumb].posições[quassao]].dividido
    }

        if (tobreak.length == 0) {
           
            if(quase[0]== '-'){
            
            if (aconta[0] == '-') {
                console.log('PROBLEM')
                mood = ''
                for (member in aconta) {
                    console.log('VAMOS LOGO!!!', aconta[member])
                    if (aconta[member] != '-') {
                        console.log('PUSHAR')
                        mood+= aconta[member]
                    }
                }
                tobreak+= `-${mood}`
            }else{
                tobreak += `-${aconta}`
            }

            }else{
                tobreak+= aconta
            }
        }else if(quase[0]== '-'){
         

            correct = ''
            for (okay in aconta) {
               // console.log(el[okay])
                if (aconta[okay]!= '-'){
                    correct+= aconta[okay]
                }
            }
           // console.log('ASSIM: ', correct)
            tobreak+= ` - ${correct}`
        }else{
          //  console.log(el)
            tobreak+= ` + ${aconta}`
        }
      }
      console.log('ENTÃO:','(', tobreak,')')

    for (repr in pans[bababa].which) {
     //  console.log(' ')
      //  console.log(pans[bababa].which[repr].monos, pans[bababa].which[repr].numberwhat, Number(repr))
       //  console.log('repetidos(não fixo) - scarecrow: ',roll[pans[bababa].numberyoudumb].repetidos[pans[bababa].which[repr].numberwhat], scarecrow[roll[pans[bababa].numberyoudumb].repetidos[pans[bababa].which[repr].numberwhat]].divisor)

         triste = scarecrow[roll[pans[bababa].numberyoudumb].repetidos[pans[bababa].which[repr].numberwhat]].divisor
     //    console.log(triste)

         quase = []
        // console.log(quase, 'k')
         juntar = ''
         teri = false
         for (estudar in triste) {
          //  console.log('O QUE ESTÁ ACONTECENDO?', triste[estudar])
          //  console.log('asasasa',triste[estudar])
            ohjeez = triste[Number(estudar) - 1] != '-'
          //  console.log(ohjeez)
            if (triste[estudar] == '.') {
                teri = true
                if (triste[Number(estudar) + 1].search('[0-9]') != -1 && ohjeez == true) {
                  
                    quase.push(juntar)
                    juntar = ''
                quase.push('*')
              //  console.log(quase)
                }
            }else{
               
               // quase.push(triste[estudar])
            //  console.log('juntar',juntar)
                if (juntar.length == 0) {
                    juntar = triste[estudar]
                 //   console.log('LISTA VAZIA', juntar)

                    if (estudar == triste.length - 1) {
                        quase.push(juntar)
                    }
                  //  console.log('MENMEN',quase)

                }else if(triste[estudar].search('[0-9]') != -1 && juntar.search('[0-9]') != -1){

                 //  console.log('I\'M NEVER WHAT I LIKE')
                    juntar+= triste[estudar]
                 //   console.log('juntar', juntar)
                    if (estudar == triste.length - 1) {
                     //  console.log('UAISO')
                        quase.push(juntar)
                     //   console.log(quase)
                    }
                }else{
                    quase.push(juntar)
                    juntar= triste[estudar]
                    if (estudar == triste.length - 1) {
                        quase.push(juntar)
                      //  console.log(quase)
                    }
                }
            }
              
         }
        // console.log('MAIS RÁPIDO',quase)

         if (teri == false) {
            
            quase = []
         //  console.log('SEM ASTERISCO')
            for (t in triste) {
            quase.push(triste[t])
            }
        }

         aconta = ''
         aster = false
         elevar = 1
         for (patience in quase) {
            //console.log(quase,'edededededededededed',quase[patience])   

            if (quase[patience] == '*') {
                aster = true
               // console.log('AND THE CLSDADWDWD', patience)
               // console.log(quase[Number(patience) - 1], quase[Number(patience) + 1])
                gates.push(quase[Number(patience) - 1])
                gates.push('x')
                gates.push(quase[Number(patience) + 1])
              //  console.log(gates, fazerConta(gates))

               // console.log(quase, Number(patience) + 1)
                quase[Number(patience) + 1] = fazerConta(gates)[0]
                aconta = fazerConta(gates)[0]
               // console.log(quase)
              
                gates = []
            }else if(quase[patience].search('[a-z]') != -1)  {
               // console.log('É LETRA')
                if (quase[patience] == quase[Number(patience) - 1]) {
                    console.log('ELEVAR!')
                    elevar++

                    if (patience == quase.length - 1) {
                        //console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                        aconta+= `^${elevar}`
                        console.log(aconta)
                    }

                }else{
                    if (elevar > 1) {
                       // console.log('UEPA')
                        aconta+= `^${elevar}`
                        
                    }

                    aconta+= quase[patience]
                    console.log(aconta)
                  
                    elevar = 1
                }
                console.log(elevar)
               
            } 
        }
        if (aster == false) {
            aconta = ''
           // console.log('SEM ASTERISCO')
            for (t in quase) {
            aconta+= quase[t]
            }
        }
        console.log(quase[0],'VAIIIIIIIIIIIIIIIIIIIIIIIIIIII', aconta)

    }
    
}
}

/*

for (yehaa in podeser[cold].position) {
    console.log(podeser[cold])
    console.log(miss[podeser[cold].position[yehaa]].dividido)
    if (miss[podeser[cold].position[yehaa]].dividido[0] == '-') {
        
        fi = ''
        for (ohjesus in miss[podeser[cold].position[yehaa]].dividido) {
            if (miss[podeser[cold].position[yehaa]].dividido[ohjesus] != '-') {
                fi+= miss[podeser[cold].position[yehaa]].dividido[ohjesus]
            }
        }
        console.log(fi)
        if (yehaa != 0) {
             ficaassim += ` - ${fi}`
        }else{
            ficaassim += `-${fi}`
        }
    }else if(yehaa != 0){
        ficaassim += ' + '
        ficaassim+= miss[podeser[cold].position[yehaa]].dividido
    }else{
        ficaassim+= miss[podeser[cold].position[yehaa]].dividido 
    }
    

}
console.log('FICA ASSIM', `(${ficaassim})`)
for (ruin in podeser[cold].opl) {
console.log(scarecrow[podeser[cold].opl[ruin]].divisor)
emotion = ''
for (scream in scarecrow[podeser[cold].opl[ruin]].divisor ) {
    console.log(scarecrow[podeser[cold].opl[ruin]].divisor[scream])
    emotion+= scarecrow[podeser[cold].opl[ruin]].divisor[scream]
}
console.log(`${emotion}(${ficaassim})`)
}
*/

// Vendo se o número é primo
function ehprimo(Number) {
    parar = false
    for (t = 2; t < Number && parar == false; t++) {
    
        if (Number%t == 0) {
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
function ehprimo2(Number) {
    divisores = []
    for (t = 2; t < Number && parar == false; t++) {
    
        if (Number%t == 0) {
           divisores.push(t)
        }
    }
   return divisores
}

function sortob(n, pam) {
    var maiorparamenor = []
    var posiçõesnumeros = []
    var yposition = n

    for (n in yposition) {
        maiorparamenor.push(-100000000000000000000000000000000000000000000000000000000000000000000000000000000)
        posiçõesnumeros.push(-1)

    }

    for (item in yposition) {
        var volume = 0
        var dn = 0
        for (volume in yposition) {
            if (dn == 0) {
                if (yposition[item][pam] > maiorparamenor[volume]) {
                    var itens = yposition.length - (Number(volume) + 1)
                    var leng = yposition.length

                    for (c = 0; c < itens; c++) {
                        maiorparamenor[Number(leng) - 1] = maiorparamenor[Number(leng) - 2]
                        posiçõesnumeros[Number(leng) - 1] = posiçõesnumeros[Number(leng) - 2]
                        leng--
                    }
                    maiorparamenor[volume] = yposition[item][pam]
                    posiçõesnumeros[volume] = Number(item)
                    dn = 10


                }
            }
        }
    }
    return [maiorparamenor, posiçõesnumeros]
 }














function doit(par) {

    segs2 = []

    for (uf in par) {
    
       // console.log(segs[uf].godhelpme)
       // segs2.push(segs[uf])
      //  segs[tie].godhelpme = [...segs[tie].mons]
      segs2[uf] = {}
        segs2[uf].mons = [...par[uf].mons]
        segs2[uf].car = par[uf].car

 }

 relation = []


 quanto = Number(monomios.length)/Number(divs[okentao])


 numapars = []




 util = []
 for (t in segs2) {



     if (segs2[t].mons.length >= quanto) {
         util.push(segs2[t])
     }
     ////console.log('')
 }

 ////console.log('util', util)
 
 for (m in monomios) {
     aparic = 0
     ////console.log(m)
     for (t in util) {
         ////console.log('util[t].mons', util[t].mons)
         ////console.log('util[t].mons.indexOf(Number(m))', util[t].mons.indexOf(Number(m)))

         if (util[t].mons.indexOf(Number(m)) != -1) {
             aparic++
         }
     }
     ////console.log('aparic',m, aparic)
     numapars.push({num: Number(m), vezes: aparic})
     }

 present = []
 //console.log('numapars',numapars)
 ////console.log('----------------------------------------------------------------------------------------------------')
 for (r in util) {

     ////console.log('-----------------------------------------------------------------------------------------------------------------------------')
    lista = util[r].mons
     present = {fix: [], falt: []}
     ////console.log(lista)
   
     rep = 0
     for (g = 0; g < lista.length && rep < quanto; g++) {
         ////console.log(lista[g])


         if (numapars.find(function(numapars) {
             return numapars.num == lista[g]
             }).vezes == 1) {
             ////console.log('ADICIOnAR')
               rep++
               present.fix.push(lista[g])
              
         }

     }
     ////console.log('present', present)
     ////console.log('--------------------------------------VEnDO O QUE FALTA-----------------------------------')

     if (present.fix.length < quanto) {
     for (g in lista) {
         ////console.log('')
        //console.log(lista[g])
         if (present.fix.indexOf(lista[g]) == -1) {
           //  console.log('FALTA')
             present.falt.push(lista[g])

            

               //  numapars.find(function(numapars) {
                   // return numapars.num == lista[g]
                  //   }).vezes--

                     
         }
     }
     //console.log('FALTAM OS nÚMEROS', present.falt)

     
     if (present.fix.length == 0) {
     for (ti in present.falt) {
       //  console.log(present.falt[ti])

        

             numapars.find(function(numapars) {
                 return numapars.num == present.falt[ti]
                 }).vezes--

              
     }
 }
     

 }
 relation[r] = present
 relation[r].car = segs2[r].car
 
 }
 console.log('RELATIOn!!!!!!!!!!!!!!!!!', relation)
 for (c in relation) {
     ////console.log('-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
     if (relation[c].fix.length > 0) {
     console.log(relation[c].fix, relation[c].falt)

     faltam = Number(quanto) - Number(relation[c].fix.length)
     console.log('faltam', faltam)

     for (f = 0; f < faltam; f++) {
         console.log(relation[c].falt[f])
        relation[c].fix.push(relation[c].falt[f])
       
        console.log('AnTES: ', relation[c].falt)
        relation[c].falt[f] = -10

        console.log('DEPOIS: ', relation[c].falt)
     }
     console.log(relation[c].fix)

     for (tel = 0; tel < c; tel++){

         if (relation[tel].fix.length > 0) {
         console.log('relation[tel]', relation[tel])
         }
         
         outrorel = relation[tel]
         
     for (hu in outrorel.fix) {
         console.log(outrorel.fix[hu])
         if (relation[c].fix.indexOf(outrorel.fix[hu]) != -1) {
             console.log(`${relation[c].fix}.indexOf(${outrorel.fix[hu]}) = ${relation[c].fix.indexOf(outrorel.fix[hu])}`)
             console.log(outrorel.falt)
             y = 0
             for(ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {

                 console.log(outrorel.falt[ou])
                 if (relation[c].fix.indexOf(outrorel.falt[ou]) == -1 && outrorel.falt[ou] != -10){
                     console.log('pode ir')
                     outrorel.fix[hu] =  outrorel.falt[ou]
                     outrorel.falt[ou] = -10
                     
                     console.log('isso aí:', outrorel.fix)
                     y++
                 }
             }
         }
     }
 }
     }
 }

 ////console.log('SERÁ QUE DEU CERTO?')

//////console.log(relation)

groups = 0
conts = []
for (yougo in relation) {
if (relation[yougo].fix.length > 0) {
console.log(relation[yougo].fix)

for (pals in relation[yougo].fix) {
 console.log(relation[yougo].fix[pals])
 conts.push(relation[yougo].fix[pals])
}
groups++
}
}

console.log('divs é igual a ', divs[okentao])
console.log('groups é igual a', groups)


if (groups < divs[okentao]) {
 //console.log('DEU CERTO!!!EBAAAAAA')

 console.log('SERÁ QUE DEU CERTO?')

////console.log(relation)

groups = 0
conts = []
for (yougo in relation) {
if (relation[yougo].fix.length > 0) {
console.log(relation[yougo].fix)

for (pals in relation[yougo].fix) {
 ////console.log(relation[yougo].fix[pals])
 conts.push(relation[yougo].fix[pals])
}
groups++
}
}
////console.log('IF LIFE AIn\'T JUST A JOKE THEn WHY ARE WE LAUGHInG?', divs[okentao], 'and', groups)
if (divs[okentao] != groups) {
//console.log('SÓ QUE nÃO')
////console.log('I\'VE TRIED TO PUT THIS ALL BEHInD ME')

tirados = []
for (wish in relation) {
 ////console.log(relation[wish].fix)
 for (edge in relation[wish].fix) {
    ////console.log(relation[wish].fix[edge])
    tirados.push(relation[wish].fix[edge])
 }
}
////console.log('nÚMEROS QUE SERÃO TIRADOS', tirados)



for (die in segs2) {
    tirar = []

//console.log('break', segs2[die].mons)
for (h in segs2[die].mons) {
//console.log(segs2[die].mons[h])
if (tirados.indexOf(segs2[die].mons[h]) != -1) {
tirar.push(Number(h))
}
}
//console.log('tirar de ',segs2[die].mons, tirar)
for (far = tirar.length - 1; far >= 0; far--) {
   // console.log(segs[die].mons[tirar[far]])
segs2[die].mons.splice(tirar[far], 1)

}
//console.log('ficou assim:', segs2[die].mons)
}

for (sorrow in segs2) {
//console.log(segs2[sorrow].mons)
grupos = Math.floor(Number(segs2[sorrow].mons.length)/quanto)
//console.log('dá para formar', grupos,'grupos')

imor = 0

for (b = 0; b < grupos; b++) {
    //console.log(b, 'vez----------------------------------------------------------------------------------------')
   
    ob = {car: segs2[sorrow].car, fix: [],problem:false}

    for (live = 0; live < quanto; live++) {
        //console.log('TIRADOS')
        console.log(segs2[sorrow].mons[imor])

    console.log(tirados.indexOf(segs2[sorrow].mons[imor]) == -1) 

           if (tirados.indexOf(segs2[sorrow].mons[imor]) != -1) {
               ob.problem = true
           }
            //console.log('PLEASE DOnT ASK ME FOR THE LAST WORDS',ob)
        ob.fix.push(segs2[sorrow].mons[imor])
        tirados.push(segs2[sorrow].mons[imor])
        imor++
        
       
    }
   
   
    console.log('In THE EnD', ob)

    //console.log(segs2)
    //console.log('VEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',ob.fix,'----------------',temnaLista(ob.fix))
    if (ob.problem == false || temnaLista(ob.fix) == true) {
    relation.push(ob)
    }
}

}



}

males = []
for (nah = relation.length - 1; nah >= 0; nah--) {
     // if (relation[nah].fix.length > 0) {
          
 // console.log('fix',relation[nah].fix)

  //console.log('---VEnDO TODA A LISTA---')
  for (nop in relation) {
    if (relation[nop].fix.length > 0 && nop != nah) {
//console.log(relation[nop].fix, relation[nop].car)

igual = true
for (uh in relation[nop].fix) {
//console.log(relation[nop].fix[uh])
if (relation[nah].fix.indexOf(relation[nop].fix[uh]) == -1) {
igual = false
}
}
//console.log(igual)
if (igual == true) {
if (relation[nah].car.length > relation[nop].car.length) {
//console.log('ESSE É UM MAL QUE PRECISA SER RETIRADO DA SOCIEDADE')
males.push(Number(nop))
}
//}

    }

}else if(relation[nop].fix.length == 0) {
    males.push(Number(nop))
}
      }
  
  }

  for (nah = relation.length - 1; nah >= 0; nah--) {
      //console.log('dream',nah, relation[nah])
     // console.log(males)
    if (males.indexOf(nah) != -1) {
      //  console.log('HEY')
        relation.splice(nah, 1)
    }
  }

  numerosquetem = []
  for (nah in relation) {
      if (relation[nah].fix.length > 0) {
    //  console.log(relation[nah].fix)

      for (nop in relation[nah].fix) {
       //   console.log(relation[nah].fix[nop])
          numerosquetem.push(relation[nah].fix[nop])
      }
      }
  }
  console.log('----------------------------------------------------------------')

  segs2 = []

  for (uf in par) {
  
     // console.log(segs[uf].godhelpme)
     // segs2.push(segs[uf])
    //  segs[tie].godhelpme = [...segs[tie].mons]
    segs2[uf] = {}
      segs2[uf].mons = [...par[uf].mons]
      segs2[uf].car = par[uf].car

}

for (pose in segs2) {
//console.log(segs2[pose].mons)
for (me = segs2[pose].mons.length - 1; me >= 0; me--) {
//console.log(segs2[pose].mons[me])
if (numerosquetem.indexOf(segs2[pose].mons[me]) != -1) {
//console.log('tirar')
segs2[pose].mons.splice(me, 1)
}
}
}

fireonfire = []

    for (uf in relation) {
    
       // console.log(segs[uf].godhelpme)
       // segs2.push(segs[uf])
      //  segs[tie].godhelpme = [...segs[tie].mons]
      fireonfire[uf] = {}
        fireonfire[uf].mons = [...relation[uf].fix]
        fireonfire[uf].car = relation[uf].car

 }

 console.log('OK, AGORA PRECISAMOS EnCOnTRAR O RESTO')
 console.log(doit2(segs2)[0])
 console.log(fireonfire)

 //console.log('relation', relation)
 for (red in fireonfire) {
   // console.log(fireonfire[red])
    relation.push({fix: fireonfire[red].mons, car: fireonfire[red].car})
 }

}else if(groups > divs[okentao]){
    
console.log('nÃO DEU CERTO! BUÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ')
 ////console.log('números que têm: ', conts)
 ////console.log(segs)

 mia = []
for (idk in segs2) {
//////console.log('---------------------------------------------------------------------')
////console.log('aqui ó',segs[idk].mons)


for (mcr in segs2) {
if (mcr != idk) {

    //////console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')
   // //console.log('outro',segs[mcr].mons)
   
   // //console.log(segs[idk].mons.length)
    if (segs2[mcr].mons.length <= segs2[idk].mons.length) {

        sames = []
   for(y = 0; y < segs2[mcr].mons.length; y++) {
    //  //console.log(segs[idk].mons, segs[mcr].mons[y], segs[idk].mons.indexOf(segs[mcr].mons[y]))
        if (segs2[idk].mons.indexOf(segs2[mcr].mons[y]) != -1) {
          ////console.log('igual')
            sames.push('igual')
        }else{
          // //console.log('diferente')
            sames.push('diferente')
        }
   }
 // //console.log(sames)
   if (sames.indexOf('diferente') == -1){
  // //console.log('TIRAR', segs[mcr])

    if (mia.indexOf(mcr) == -1) {
    mia.push(mcr)
    }
    
    ////console.log(segs)
    
   }
}
    
}
}

}

for (f = mia.length - 1; f >= 0; f--) {
    //segs2.splice(mia[f],1)
    
   }

   
 numapars = []
 
relation = []

 //////console.log('--------------------------------------------------------------------------------------------------------------------------------')


 util = []
 for (t in segs2) {

    ////console.log(segs[n],'.mons: ',segs[t].mons,'.length: ', segs[t].mons.length)
  //  //console.log(`${segs[t].mons.length} é maior que ou igual a ${quanto}? ${segs[t].mons.length >= quanto}`)

     if (segs2[t].mons.length >= quanto) {
         util.push(segs2[t])
     }
     ////console.log('')
 }

 //console.log('util', util)
 
 for (m in monomios) {
     aparic = 0
    ////console.log(m)
     for (t in util) {
      //   //console.log('util[t].mons', util[t].mons)
      //   //console.log('util[t].mons.indexOf(Number(m))', util[t].mons.indexOf(Number(m)))

         if (util[t].mons.indexOf(Number(m)) != -1) {
             aparic++
         }
     }
    // //console.log('aparic',m, aparic)
     numapars.push({num: Number(m), vezes: aparic})
     }

 present = []
 ////console.log('----------------------------------------------------------------------------------------------------')
 for (r in util) {

     ////console.log('-----------------------------------------------------------------------------------------------------------------------------')
    lista = util[r].mons
     present = {fix: [], falt: []}
     ////console.log(lista)
   
     rep = 0
     for (g = 0; g < lista.length && rep < quanto; g++) {
      //   //console.log(lista[g])


         if (numapars.find(function(numapars) {
             return numapars.num == lista[g]
             }).vezes == 1) {
             ////console.log('ADICIOnAR')
               rep++
               present.fix.push(lista[g])
              
         }

     }
    // //console.log('present', present)
     ////console.log('--------------------------------------VEnDO O QUE FALTA-----------------------------------')

     if (present.fix.length < quanto) {
     for (g in lista) {
        // //console.log('')
        // //console.log(lista[g])
         if (present.fix.indexOf(lista[g]) == -1) {
          //   //console.log('FALTA')
             present.falt.push(lista[g])

            

               //  numapars.find(function(numapars) {
                   // return numapars.num == lista[g]
                  //   }).vezes--

                     
         }
     }
   //  //console.log('FALTAM OS nÚMEROS', present.falt)

     
     if (present.fix.length == 0) {
     for (ti in present.falt) {
       //  //console.log(present.falt[ti])

        

             numapars.find(function(numapars) {
                 return numapars.num == present.falt[ti]
                 }).vezes--

              
     }
 }
     

 }
 relation[r] = present
 relation[r].car = segs2[r].car
 
 }
 //console.log('RELATIOn!!!!!!!!!!!!!!!!!', relation)
 for (c in relation) {
    // //console.log('-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
     if (relation[c].fix.length > 0) {
    // //console.log(relation[c].fix, relation[c].falt)

     faltam = Number(quanto) - Number(relation[c].fix.length)
     ////console.log('faltam', faltam)

     for (f = 0; f < faltam; f++) {
      //   //console.log(relation[c].falt[f])
        relation[c].fix.push(relation[c].falt[f])
       
    //    //console.log('AnTES: ', relation[c].falt)
        relation[c].falt[f] = -10

    //    //console.log('DEPOIS: ', relation[c].falt)
     }
   //  //console.log(relation[c].fix)

     for (tel = 0; tel < c; tel++){

         if (relation[tel].fix.length > 0) {
       //  //console.log('relation[tel]', relation[tel])
         }
         
         outrorel = relation[tel]
         
     for (hu in outrorel.fix) {
       //  //console.log(outrorel.fix[hu])
         if (relation[c].fix.indexOf(outrorel.fix[hu]) != -1) {
          //   //console.log(`${relation[c].fix}.indexOf(${outrorel.fix[hu]}) = ${relation[c].fix.indexOf(outrorel.fix[hu])}`)
             ////console.log(outrorel.falt)
             y = 0
             for(ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {

              ///   //console.log(outrorel.falt[ou])
                 if (relation[c].fix.indexOf(outrorel.falt[ou]) == -1 && outrorel.falt[ou] != -10){
                 //    //console.log('pode ir')
                     outrorel.fix[hu] =  outrorel.falt[ou]
                     outrorel.falt[ou] = -10
                     
                  //   //console.log('isso aí:', outrorel.fix)
                     y++
                 }
             }
         }
     }
 }
     }
 }

 console.log('SERÁ QUE DEU CERTO?')

//console.log(relation)

groups = 0
conts = []
for (yougo in relation) {
if (relation[yougo].fix.length > 0) {
////console.log(relation[yougo].fix)

for (pals in relation[yougo].fix) {
 ////console.log(relation[yougo].fix[pals])
 conts.push(relation[yougo].fix[pals])
}
groups++
}
}
//console.log('IF LIFE AIn\'T JUST A JOKE THEn WHY ARE WE LAUGHInG?', divs[okentao], 'and', groups)
if (divs[okentao] != groups) {
//console.log('THEn WHY ARE WE LAUGHInG?')
//console.log('I\'VE TRIED TO PUT THIS ALL BEHInD ME')

tirados = []
for (wish in relation) {
 //console.log(relation[wish].fix)
 for (edge in relation[wish].fix) {
    //console.log(relation[wish].fix[edge])
    tirados.push(relation[wish].fix[edge])
 }
}
//console.log('nÚMEROS QUE SERÃO TIRADOS', tirados)


for (die in segs2) {
    tirar = []

//console.log('break', segs2[die].mons)
for (h in segs2[die].mons) {
//console.log(segs2[die].mons[h])
if (tirados.indexOf(segs2[die].mons[h]) != -1) {
tirar.push(Number(h))
}
}
//console.log('tirar de ',segs2[die].mons, tirar)
for (far = tirar.length - 1; far >= 0; far--) {
    
segs2[die].mons.splice(tirar[far], 1)

}
//console.log('ficou assim:', segs2[die].mons)
}

for (sorrow in segs2) {
//console.log(segs2[sorrow].mons)
grupos = Math.floor(Number(segs2[sorrow].mons.length)/quanto)
//console.log('dá para formar', grupos,'grupos')

imor = 0

for (b = 0; b < grupos; b++) {
    //console.log(b, 'vez----------------------------------------------------------------------------------------')
   
    ob = {car: segs2[sorrow].car, fix: [],problem:false}

    for (live = 0; live < quanto; live++) {
        //console.log('TIRADOS')
        //console.log(segs2[sorrow].mons[imor])

       //console.log(tirados.indexOf(segs2[sorrow].mons[imor]) == -1) 

           if (tirados.indexOf(segs2[sorrow].mons[imor]) != -1) {
                ob.problem = true
           }
            //console.log('PLEASE DOnT ASK ME FOR THE LAST WORDS',ob)
        ob.fix.push(segs2[sorrow].mons[imor])
        tirados.push(segs2[sorrow].mons[imor])
        imor++
        
       
    }
   
   
    //console.log('In THE EnD', ob)

    //console.log(segs2)
    //console.log('VEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',ob.fix,'----------------',temnaLista(ob.fix))
    if (ob.problem == false || temnaLista(ob.fix) == true) {
    relation.push(ob)
    }
}

}



}
}
return [relation, segs2]
}





function temnaLista(h) {
//console.log('THIS IS HOW I DISAPPEAR, THIS IS HOW I DISAPPEAR, THIS IS HOW I DISAPPEAR')

for (t in relation) {

    if (relation[t].fix.length > 0) {
    //console.log(relation[t].fix)

    home = 0
    for (fear in relation[t].fix) {
        if (relation[t].fix[fear] == h[fear]) {
            //console.log('WOW')
            home++
        }
    }

    if (home == h.length) {
        //console.log('É IGUAL')
        return true 
    }

    }
}
}



function doit2(par) {

    segs2 = []

    for (uf in par) {
    
       // console.log(segs[uf].godhelpme)
       // segs2.push(segs[uf])
      //  segs[tie].godhelpme = [...segs[tie].mons]
      segs2[uf] = {}
        segs2[uf].mons = [...par[uf].mons]
        segs2[uf].car = par[uf].car

 }

 relation = []


 quanto = Number(monomios.length)/Number(divs[okentao])


 numapars = []




 util = []
 for (t in segs2) {



     if (segs2[t].mons.length >= quanto) {
         util.push(segs2[t])
     }
     ////console.log('')
 }

 ////console.log('util', util)
 
 for (m in monomios) {
     aparic = 0
     ////console.log(m)
     for (t in util) {
         ////console.log('util[t].mons', util[t].mons)
         ////console.log('util[t].mons.indexOf(Number(m))', util[t].mons.indexOf(Number(m)))

         if (util[t].mons.indexOf(Number(m)) != -1) {
             aparic++
         }
     }
     ////console.log('aparic',m, aparic)
     numapars.push({num: Number(m), vezes: aparic})
     }

 present = []
 //console.log('numapars',numapars)
 ////console.log('----------------------------------------------------------------------------------------------------')
 for (r in util) {

     ////console.log('-----------------------------------------------------------------------------------------------------------------------------')
    lista = util[r].mons
     present = {fix: [], falt: []}
     ////console.log(lista)
   
     rep = 0
     for (g = 0; g < lista.length && rep < quanto; g++) {
         ////console.log(lista[g])


         if (numapars.find(function(numapars) {
             return numapars.num == lista[g]
             }).vezes == 1) {
             ////console.log('ADICIOnAR')
               rep++
               present.fix.push(lista[g])
              
         }

     }
     ////console.log('present', present)
     ////console.log('--------------------------------------VEnDO O QUE FALTA-----------------------------------')

     if (present.fix.length < quanto) {
     for (g in lista) {
         ////console.log('')
         ////console.log(lista[g])
         if (present.fix.indexOf(lista[g]) == -1) {
             ////console.log('FALTA')
             present.falt.push(lista[g])

            

               //  numapars.find(function(numapars) {
                   // return numapars.num == lista[g]
                  //   }).vezes--

                     
         }
     }
     ////console.log('FALTAM OS nÚMEROS', present.falt)

     
     if (present.fix.length == 0) {
     for (ti in present.falt) {
         ////console.log(present.falt[ti])

        

             numapars.find(function(numapars) {
                 return numapars.num == present.falt[ti]
                 }).vezes--

              
     }
 }
     

 }
 relation[r] = present
 relation[r].car = segs2[r].car
 
 }
 ////console.log('RELATIOn!!!!!!!!!!!!!!!!!', relation)
 for (c in relation) {
     ////console.log('-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
     if (relation[c].fix.length > 0) {
     ////console.log(relation[c].fix, relation[c].falt)

     faltam = Number(quanto) - Number(relation[c].fix.length)
     ////console.log('faltam', faltam)

     for (f = 0; f < faltam; f++) {
         ////console.log(relation[c].falt[f])
        relation[c].fix.push(relation[c].falt[f])
       
        ////console.log('AnTES: ', relation[c].falt)
        relation[c].falt[f] = -10

        ////console.log('DEPOIS: ', relation[c].falt)
     }
     ////console.log(relation[c].fix)

     for (tel = 0; tel < c; tel++){

         if (relation[tel].fix.length > 0) {
         ////console.log('relation[tel]', relation[tel])
         }
         
         outrorel = relation[tel]
         
     for (hu in outrorel.fix) {
         ////console.log(outrorel.fix[hu])
         if (relation[c].fix.indexOf(outrorel.fix[hu]) != -1) {
             ////console.log(`${relation[c].fix}.indexOf(${outrorel.fix[hu]}) = ${relation[c].fix.indexOf(outrorel.fix[hu])}`)
             ////console.log(outrorel.falt)
             y = 0
             for(ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {

                 ////console.log(outrorel.falt[ou])
                 if (relation[c].fix.indexOf(outrorel.falt[ou]) == -1 && outrorel.falt[ou] != -10){
                     ////console.log('pode ir')
                     outrorel.fix[hu] =  outrorel.falt[ou]
                     outrorel.falt[ou] = -10
                     
                     ////console.log('isso aí:', outrorel.fix)
                     y++
                 }
             }
         }
     }
 }
     }
 }

 ////console.log('SERÁ QUE DEU CERTO?')

//////console.log(relation)

groups = 0
conts = []
for (yougo in relation) {
if (relation[yougo].fix.length > 0) {
////console.log(relation[yougo].fix)

for (pals in relation[yougo].fix) {
 ////console.log(relation[yougo].fix[pals])
 conts.push(relation[yougo].fix[pals])
}
groups++
}
}

////console.log('divs é igual a ', divs[okentao])
////console.log('groups é igual a', groups)
if (groups < divs[okentao]) {
 //console.log('DEU CERTO!!!EBAAAAAA')

 ////console.log('SERÁ QUE DEU CERTO?')

////console.log(relation)

groups = 0
conts = []
for (yougo in relation) {
if (relation[yougo].fix.length > 0) {
console.log(relation[yougo].fix)

for (pals in relation[yougo].fix) {
console.log(relation[yougo].fix[pals])
 conts.push(relation[yougo].fix[pals])
}
groups++
}
}
console.log('IF LIFE AIn\'T JUST A JOKE THEn WHY ARE WE LAUGHInG?', divs[okentao], 'and', groups)
if (divs[okentao] != groups) {
console.log('THEn WHY ARE WE LAUGHInG?')
console.log('I\'VE TRIED TO PUT THIS ALL BEHInD ME')

tirados = []
for (wish in relation) {
// console.log(relation[wish].fix)
 for (edge in relation[wish].fix) {
//    console.log(relation[wish].fix[edge])
    tirados.push(relation[wish].fix[edge])
 }
}
console.log('nÚMEROS QUE SERÃO TIRADOS', tirados)



for (die in segs2) {
    tirar = []

//console.log('break', segs2[die].mons)
for (h in segs2[die].mons) {
//console.log(segs2[die].mons[h])
if (tirados.indexOf(segs2[die].mons[h]) != -1) {
tirar.push(Number(h))
}
}
//console.log('tirar de ',segs2[die].mons, tirar)
for (far = tirar.length - 1; far >= 0; far--) {
   // console.log(segs[die].mons[tirar[far]])
segs2[die].mons.splice(tirar[far], 1)

}
//console.log('ficou assim:', segs2[die].mons)
}

for (sorrow in segs2) {
//console.log(segs2[sorrow].mons)
grupos = Math.floor(Number(segs2[sorrow].mons.length)/quanto)
//console.log('dá para formar', grupos,'grupos')

imor = 0

for (b = 0; b < grupos; b++) {
    //console.log(b, 'vez----------------------------------------------------------------------------------------')
   
    ob = {car: segs2[sorrow].car, fix: [],problem:false}

    for (live = 0; live < quanto; live++) {
        //console.log('TIRADOS')
        //console.log(segs2[sorrow].mons[imor])

       //console.log(tirados.indexOf(segs2[sorrow].mons[imor]) == -1) 

           if (tirados.indexOf(segs2[sorrow].mons[imor]) != -1) {
               // ob.problem = true
           }
            //console.log('PLEASE DOnT ASK ME FOR THE LAST WORDS',ob)
        ob.fix.push(segs2[sorrow].mons[imor])
        tirados.push(segs2[sorrow].mons[imor])
        imor++
        
       
    }
   
   
    //console.log('In THE EnD', ob)

    //console.log(segs2)
    //console.log('VEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',ob.fix,'----------------',temnaLista(ob.fix))
    if (ob.problem == false || temnaLista(ob.fix) == true) {
    relation.push(ob)
    }
}

}



}
}else if(groups > divs[okentao]){
    
//console.log('nÃO DEU CERTO! BUÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ')
 //console.log('números que têm: ', conts)
 ////console.log(segs)

 mia = []
for (idk in segs2) {
//////console.log('---------------------------------------------------------------------')
//console.log('aqui ó',segs[idk].mons)


for (mcr in segs2) {
if (mcr != idk) {

    //////console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')
  // console.log('outro',segs[mcr].mons)
   
   //console.log(segs[idk].mons.length)
    if (segs2[mcr].mons.length <= segs2[idk].mons.length) {

        sames = []
   for(y = 0; y < segs2[mcr].mons.length; y++) {
    //  //console.log(segs[idk].mons, segs[mcr].mons[y], segs[idk].mons.indexOf(segs[mcr].mons[y]))
        if (segs2[idk].mons.indexOf(segs2[mcr].mons[y]) != -1) {
       //   console.log('igual')
            sames.push('igual')
        }else{
        //  console.log('diferente')
            sames.push('diferente')
        }
   }
// console.log(sames)
   if (sames.indexOf('diferente') == -1){
 //console.log('TIRAR', segs[mcr])

    if (mia.indexOf(mcr) == -1) {
    mia.push(mcr)
    }
    
 //  console.log(segs)
    
   }
}
    
}
}

}

for (f = mia.length - 1; f >= 0; f--) {
    //segs2.splice(mia[f],1)
    
   }

   
 numapars = []
 
relation = []

 //////console.log('--------------------------------------------------------------------------------------------------------------------------------')


 util = []
 for (t in segs2) {

    ////console.log(segs[n],'.mons: ',segs[t].mons,'.length: ', segs[t].mons.length)
  //  //console.log(`${segs[t].mons.length} é maior que ou igual a ${quanto}? ${segs[t].mons.length >= quanto}`)

     if (segs2[t].mons.length >= quanto) {
         util.push(segs2[t])
     }
     ////console.log('')
 }

 //console.log('util', util)
 
 for (m in monomios) {
     aparic = 0
    ////console.log(m)
     for (t in util) {
      //   //console.log('util[t].mons', util[t].mons)
      //   //console.log('util[t].mons.indexOf(Number(m))', util[t].mons.indexOf(Number(m)))

         if (util[t].mons.indexOf(Number(m)) != -1) {
             aparic++
         }
     }
    // //console.log('aparic',m, aparic)
     numapars.push({num: Number(m), vezes: aparic})
     }

 present = []
 ////console.log('----------------------------------------------------------------------------------------------------')
 for (r in util) {

     ////console.log('-----------------------------------------------------------------------------------------------------------------------------')
    lista = util[r].mons
     present = {fix: [], falt: []}
     ////console.log(lista)
   
     rep = 0
     for (g = 0; g < lista.length && rep < quanto; g++) {
      //   //console.log(lista[g])


         if (numapars.find(function(numapars) {
             return numapars.num == lista[g]
             }).vezes == 1) {
             ////console.log('ADICIOnAR')
               rep++
               present.fix.push(lista[g])
              
         }

     }
    // //console.log('present', present)
     ////console.log('--------------------------------------VEnDO O QUE FALTA-----------------------------------')

     if (present.fix.length < quanto) {
     for (g in lista) {
        // //console.log('')
        // //console.log(lista[g])
         if (present.fix.indexOf(lista[g]) == -1) {
          //   //console.log('FALTA')
             present.falt.push(lista[g])

            

               //  numapars.find(function(numapars) {
                   // return numapars.num == lista[g]
                  //   }).vezes--

                     
         }
     }
   //  //console.log('FALTAM OS nÚMEROS', present.falt)

     
     if (present.fix.length == 0) {
     for (ti in present.falt) {
       //  //console.log(present.falt[ti])

        

             numapars.find(function(numapars) {
                 return numapars.num == present.falt[ti]
                 }).vezes--

              
     }
 }
     

 }
 relation[r] = present
 relation[r].car = segs2[r].car
 
 }
 //console.log('RELATIOn!!!!!!!!!!!!!!!!!', relation)
 for (c in relation) {
    // //console.log('-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
     if (relation[c].fix.length > 0) {
    // //console.log(relation[c].fix, relation[c].falt)

     faltam = Number(quanto) - Number(relation[c].fix.length)
     ////console.log('faltam', faltam)

     for (f = 0; f < faltam; f++) {
      //   //console.log(relation[c].falt[f])
        relation[c].fix.push(relation[c].falt[f])
       
    //    //console.log('AnTES: ', relation[c].falt)
        relation[c].falt[f] = -10

    //    //console.log('DEPOIS: ', relation[c].falt)
     }
   //  //console.log(relation[c].fix)

     for (tel = 0; tel < c; tel++){

         if (relation[tel].fix.length > 0) {
       //  //console.log('relation[tel]', relation[tel])
         }
         
         outrorel = relation[tel]
         
     for (hu in outrorel.fix) {
       //  //console.log(outrorel.fix[hu])
         if (relation[c].fix.indexOf(outrorel.fix[hu]) != -1) {
        // console.log(`${relation[c].fix}.indexOf(${outrorel.fix[hu]}) = ${relation[c].fix.indexOf(outrorel.fix[hu])}`)
             ////console.log(outrorel.falt)
             y = 0
             for(ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {

              ///   //console.log(outrorel.falt[ou])
                 if (relation[c].fix.indexOf(outrorel.falt[ou]) == -1 && outrorel.falt[ou] != -10){
                 //    //console.log('pode ir')
                     outrorel.fix[hu] =  outrorel.falt[ou]
                     outrorel.falt[ou] = -10
                     
                  //console.log('isso aí:', outrorel.fix)
                     y++
                 }
             }
         }
     }
 }
     }
 }

 console.log('SERÁ QUE DEU CERTO?')

//console.log(relation)

groups = 0
conts = []
for (yougo in relation) {
if (relation[yougo].fix.length > 0) {
//console.log(relation[yougo].fix)

for (pals in relation[yougo].fix) {
 //console.log(relation[yougo].fix[pals])
 conts.push(relation[yougo].fix[pals])
}
groups++
}
}
//console.log('IF LIFE AIn\'T JUST A JOKE THEn WHY ARE WE LAUGHInG?', divs[okentao], 'and', groups)
if (divs[okentao] != groups) {
//console.log('THEn WHY ARE WE LAUGHInG?')
//console.log('I\'VE TRIED TO PUT THIS ALL BEHInD ME')

tirados = []
for (wish in relation) {
 //console.log(relation[wish].fix)
 for (edge in relation[wish].fix) {
   // console.log(relation[wish].fix[edge])
    tirados.push(relation[wish].fix[edge])
 }
}
console.log('nÚMEROS QUE SERÃO TIRADOS', tirados)


for (die in segs2) {
    tirar = []

//console.log('break', segs2[die].mons)
for (h in segs2[die].mons) {
//console.log(segs2[die].mons[h])
if (tirados.indexOf(segs2[die].mons[h]) != -1) {
tirar.push(Number(h))
}
}
//console.log('tirar de ',segs2[die].mons, tirar)
for (far = tirar.length - 1; far >= 0; far--) {
    
segs2[die].mons.splice(tirar[far], 1)

}
//console.log('ficou assim:', segs2[die].mons)
}

for (sorrow in segs2) {
console.log(segs2[sorrow].mons)
grupos = Math.floor(Number(segs2[sorrow].mons.length)/quanto)
//console.log('dá para formar', grupos,'grupos')

imor = 0

for (b = 0; b < grupos; b++) {
    //console.log(b, 'vez----------------------------------------------------------------------------------------')
   
    ob = {car: segs2[sorrow].car, fix: [],problem:false}

    for (live = 0; live < quanto; live++) {
      //  console.log('TIRADOS')
     //   console.log(segs2[sorrow].mons[imor])

    //   console.log(tirados.indexOf(segs2[sorrow].mons[imor]) == -1) 

           if (tirados.indexOf(segs2[sorrow].mons[imor]) != -1) {
                //ob.problem = true
           }
         //   console.log('PLEASE DOnT ASK ME FOR THE LAST WORDS',ob)
        ob.fix.push(segs2[sorrow].mons[imor])
        tirados.push(segs2[sorrow].mons[imor])
        imor++
        
       
    }
   
   
    //console.log('In THE EnD', ob)

    //console.log(segs2)
    //console.log('VEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',ob.fix,'----------------',temnaLista(ob.fix))
    if (ob.problem == false || temnaLista(ob.fix) == true) {
    relation.push(ob)
    }
}

}



}
}

console.log('HELLO')


return [relation, segs2]
}

//console.log('PERAÍIIIIIIIII', DIVIDIR(['2'],['2', '*', '2', '*', '3', 'x', 'x']))

