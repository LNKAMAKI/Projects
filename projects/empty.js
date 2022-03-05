expression = ['4','-','2','x','+','x']

fazerConta(expression)
function fazerConta(anterior) {

    if(0 == 0) {// falta == false
//Primeiro raizes e potências
for (n = 0; n < expression.length; n++) {
if(expression[n] == '^' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√') {
    console.log('POTENCIALIZAÇÃO')
    expression[n + 1] = String(Number(expression[n - 1]) ** Number(expression[n + 1]))
    expression.splice(n - 1, 2)
    
    n = n - 3 // n = n - 3
    console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, expression[n])
    if (expression[n + 1] == '(' && expression[n + 3] == ')') {
        console.log('TIRAR')
        expression.splice(n + 3, 1)
        expression.splice(n + 1, 1)
        n = n - 3

        console.log(expression)
    }else{
        console.log(expression)
    }
}else if(expression[n] == '√' && expression[n + 1] != '(' ) {
    console.log('RAIZ')
    expression[n + 1] = String(Number(expression[n + 1]) ** (1/2))
    expression.splice(n, 1)
    console.log(n)
    n = n - 2
    console.log(n)
    if (expression[n + 1] == '(' && expression[n + 3] == ')') {
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
if(expression[n] == '*' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n - 1].search('[0-9]') != -1 && expression[n + 1].search('[0-9]') != -1 && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√' && String(expression[n + 2]).search('\\^') == -1 && String(expression[n - 2]).search('\\^') == -1) {
console.log('MULTIPLICAÇÃO')
expression[n + 1] = String(Number(expression[n - 1]) * Number(expression[n + 1]))
expression.splice(n - 1, 2)

n = n - 3
console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, expression[n])

if (expression[n + 1] == '(' && expression[n + 3] == ')') {
    console.log('TIRAR')
    expression.splice(n + 3, 1)
    expression.splice(n + 1, 1)
    n = n - 3

    console.log(expression)
}else{
    console.log(expression)
}
}else if(expression[n] == '/' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n - 1].search('[0-9]') != -1 && expression[n + 1].search('[0-9]') != -1 && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√' && String(expression[n + 2]).search('\\^') == -1 && String(expression[n - 2]).search('\\^') == -1) {
console.log('DIVISÃO')
expression[n + 1] = String(Number(expression[n - 1]) / Number(expression[n + 1]))
expression.splice(n - 1, 2)

n = n - 3
console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, expression[n])
if (expression[n + 1] == '(' && expression[n + 3] == ')') {
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
        if (expression[n] == '+' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n - 1].search('[0-9]') != -1 && expression[n + 1].search('[0-9]') != -1 && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√' && String(expression[n + 2]).search('[x\\/\\^]') == -1 && String(expression[n - 2]).search('[x\\/\\^\\-]') == -1) {
            console.log('ADIÇÃO')
            expression[n + 1] = String(Number(expression[n - 1]) + Number(expression[n + 1]))
            expression.splice(n - 1, 2)
          
            n = n - 3
            console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, expression[n])
            if (expression[n + 1] == '(' && expression[n + 3] == ')') {
                console.log('TIRAR')
                expression.splice(n + 3, 1)
                expression.splice(n + 1, 1)
                n = n - 3

                console.log(expression)
            }else{
                console.log(expression)
            }
        }else if(expression[n] == '-' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n - 1].search('[0-9]') != -1 && expression[n + 1].search('[0-9]') != -1 && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√' && String(expression[n + 2]).search('[x\\/\\^]') == -1 && String(expression[n - 2]).search('[x\\/\\^\\-]') == -1) {
            console.log('SUBTRAÇÃO') 
            expression[n + 1] = String(Number(expression[n - 1]) - Number(expression[n + 1]))
            expression.splice(n - 1, 2)
            
            n = n - 3
            console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, expression[n])
            if (expression[n + 1] == '(' && expression[n + 3] == ')') {
                console.log('TIRAR')
                expression.splice(n + 3, 1)
                expression.splice(n + 1, 1)
                n = n - 3

                console.log(expression)
            }else{
                console.log(expression)
            }
        }else if(expression[n] == '*' && expression[n - 1].search('[0-9]') != -1 && expression[n + 1].search('[0-9]') != -1 && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√' && String(expression[n + 2]).search('\\^') == -1 && String(expression[n - 2]).search('\\^') == -1) {
            console.log('MULTIPLICAÇÃO')
            expression[n + 1] = String(Number(expression[n - 1]) * Number(expression[n + 1]))
            expression.splice(n - 1, 2)
            
            n = n - 3
            console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, expression[n])
            if (expression[n + 1] == '(' && expression[n + 3] == ')') {
                console.log('TIRAR')
                expression.splice(n + 3, 1)
                expression.splice(n + 1, 1)
                n = n - 3

                console.log(expression)
            }else{
                console.log(expression)
            }
        }else if(expression[n] == '/' && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√' && String(expression[n + 2]).search('\\^') == -1 && String(expression[n - 2]).search('\\^') == -1) {
            console.log('DIVISÃO')
            expression[n + 1] = String(Number(expression[n - 1]) / Number(expression[n + 1]))
            expression.splice(n - 1, 2)
            
            n = n - 3
            console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, expression[n])
            if (expression[n + 1] == '(' && expression[n + 3] == ')') {
                console.log('TIRAR')
                expression.splice(n + 3, 1)
                expression.splice(n + 1, 1)
                n = n - 3

                console.log(expression)
            }else{
                console.log(expression)
            }
        }else if(expression[n] == '^' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n - 1].search('[0-9]') != -1 && expression[n + 1].search('[0-9]') != -1 && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√') {
            console.log('DIVISÃO')
            expression[n + 1] = String(Number(expression[n - 1]) ** Number(expression[n + 1]))
            expression.splice(n - 1, 2)
            
            n = n - 3
            console.log('ENEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, expression[n])
            if (expression[n + 1] == '(' && expression[n + 3] == ')') {
                console.log('TIRAR')
                expression.splice(n + 3, 1)
                expression.splice(n + 1, 1)
                n = n - 3

                console.log(expression)
            }else{
                console.log(expression)
            }
        }else if(expression[n] == '√' && expression[n + 1] != '(') {
            console.log('RAIZ')
            expression[n + 1] = String(Number(expression[n + 1]) ** (1/2))
            expression.splice(n, 1)
            
            n = n - 2
            console.log(n)
            if (expression[n + 1] == '(' && expression[n + 3] == ')') {
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


monomios = [{numero: ''}]
obnum = 0
for (n = 0; n < expression.length; n++) {
console.log(expression[n], monomios[obnum])

if (expression[n].search('[-+]') != -1) {
console.log('DEVTOOLS EU TE ODEIO')
monomios.push({numero: ''})
obnum++
}

monomios[obnum].numero += expression[n]
}

console.log('--------------------------------------------MONOMIOS--------------------------------------')
for (m = 0; m < 1; m++) {
    
    console.log('BURRO')
 console.log('--------------------')
    console.log(monomios[m].numero)
    repetido = []

    for (oc = 0; oc < monomios[m].numero.length; oc++) {
        console.log('LETRA OU NÚMERO ISOLADO: ' + monomios[m].numero[oc])

        for (u = 0; u < monomios.length; u++) {
            if(u != m) {
          console.log(`monomio ${u}: `)
          console.log(monomios[u])   
                
          for (e = 0; e < monomios[u].numero.length; e++) {
            console.log(monomios[u].numero[e])
            if (monomios[u].numero[e] == monomios[m].numero[oc]) {
                console.log(monomios[m].numero[oc] + ' é igual a ' + monomios[u].numero[e])

                repetido.push({monum: u, letr: []})
                console.log('REPETIDO: ', repetido)
            }
            console.log('')
          }
        }
        }
        console.log('------------------------------------------------------------------------------------------')
    }
}

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
