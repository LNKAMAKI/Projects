numero = ''
expression = []
window.addEventListener('keydown', (event)=> {
    if (event.key != 'Shift'){
    console.log(event.key)
    
    if (String(event.key).search('[0-9]') != -1 || event.key.search('[\\.\\(\\)\\+\\-\\x\\/r**=]') != -1) {
        if (numero.length > 0) {
            if (String(event.key).search('\\.') != -1 || String(event.key).search('[0-9]') != -1) {
                if (String(numero[numero.length - 1]).search('\\.') != -1 || String(numero[numero.length - 1]).search('[0-9]') != -1) {
                    console.log('AAAAAAAAAAAAAAAAAAAA' + numero[numero.length - 1].search('[0-9]'))
                    console.log('DO IT')
                    numero += String(event.key)
                } else {
                    console.log('TIRAR')
                    expression.push(numero)
                    console.log(expression)
                    numero = String(event.key)
                }
            } else {
                console.log('AAAAAAAAAAAAAAAAAAAA' + numero[numero.length - 1].search('\\.'))
                console.log('RETIRAR')
                expression.push(numero)
                console.log(expression)
                numero = String(event.key)
            }
    
        } else {
            console.log('NUMERO VAZIO')
            numero += String(event.key)
        }
        console.log(numero)
    
    }
    
}
})
function inserir(n) {
    console.log(n)
    if (String(n).search('[0-9]') != -1 || n.search('[\\.\\(\\)\\+\\-\\x\\/r**=]') != -1) {
        if (numero.length > 0) {
            if (String(n).search('\\.') != -1 || String(n).search('[0-9]') != -1) {
                if (String(numero[numero.length - 1]).search('\\.') != -1 || String(numero[numero.length - 1]).search('[0-9]') != -1) {
                    console.log('AAAAAAAAAAAAAAAAAAAA' + numero[numero.length - 1].search('[0-9]'))
                    console.log('DO IT')
                    numero += String(n)
                } else {
                    console.log('TIRAR')
                    expression.push(numero)
                    console.log(expression)
                    numero = String(n)
                }
            } else {
                console.log('AAAAAAAAAAAAAAAAAAAA' + numero[numero.length - 1].search('\\.'))
                console.log('RETIRAR')
                expression.push(numero)
                console.log(expression)
                numero = String(n)
            }

        } else {
            console.log('NUMERO VAZIO')
            numero += String(n)
        }
        console.log(numero)

    }
}


function fazerConta() {
for (n = 0; n < expression.length; n++) {
if(expression[n] == 'x' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
    console.log('MULTIPLICAÇÃO')
    expression[n + 1] = Number(expression[n - 1]) * Number(expression[n + 1])
    expression.splice(n - 1, 2)
    
    n--
  
    if (expression[n - 1] == '(' && expression[n + 1] == ')') {
        console.log('TIRAR')
        expression.splice(n + 1, 1)
        expression.splice(n - 1, 1)
        n = n - 3

        console.log(expression)
    }else{
        console.log(expression)
    }
}else if(expression[n] == '/' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
    console.log('DIVISÃO')
    expression[n + 1] = Number(expression[n - 1]) / Number(expression[n + 1])
    expression.splice(n - 1, 2)
    
    n--
   
    if (expression[n - 1] == '(' && expression[n + 1] == ')') {
        console.log('TIRAR')
        expression.splice(n + 1, 1)
        expression.splice(n - 1, 1)
        n = n - 3

        console.log(expression)
    }else{
        console.log(expression)
    }
}else if(expression[n] == '^' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
    console.log('DIVISÃO')
    expression[n + 1] = Number(expression[n - 1]) ** Number(expression[n + 1])
    expression.splice(n - 1, 2)
    
    n--
    
    if (expression[n - 1] == '(' && expression[n + 1] == ')') {
        console.log('TIRAR')
        expression.splice(n + 1, 1)
        expression.splice(n - 1, 1)
        n = n - 3

        console.log(expression)
    }else{
        console.log(expression)
    }
}else if(expression[n] == 'r' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
    console.log('RAIZ')
    expression[n + 1] = Number(expression[n - 1]) ** (1/ Number(expression[n + 1]))
    expression.splice(n - 1, 2)
    
    n--
    
    if (expression[n - 1] == '(' && expression[n + 1] == ')') {
        console.log('TIRAR')
        expression.splice(n + 1, 1)
        expression.splice(n - 1, 1)
        n = n - 3

        console.log(expression)
    }else{
        console.log(expression)
    }
}
}


if (expression.length > 1) {

        for (n = 0; n < expression.length; n++) {
            console.log(expression[n])
            if (expression[n] == '+' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
                console.log('ADIÇÃO')
                expression[n + 1] = Number(expression[n - 1]) + Number(expression[n + 1])
                expression.splice(n - 1, 2)
              
                n--
               
                if (expression[n - 1] == '(' && expression[n + 1] == ')') {
                    console.log('TIRAR')
                    expression.splice(n + 1, 1)
                    expression.splice(n - 1, 1)
                    n = n - 3

                    console.log(expression)
                }else{
                    console.log(expression)
                }
            }else if(expression[n] == '-' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
                console.log('SUBTRAÇÃO')
                expression[n + 1] = Number(expression[n - 1]) - Number(expression[n + 1])
                expression.splice(n - 1, 2)
                
                n--
                
                if (expression[n - 1] == '(' && expression[n + 1] == ')') {
                    console.log('TIRAR')
                    expression.splice(n + 1, 1)
                    expression.splice(n - 1, 1)
                    n = n - 3

                    console.log(expression)
                }else{
                    console.log(expression)
                }
            }else if(expression[n] == 'x' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
                console.log('MULTIPLICAÇÃO')
                expression[n + 1] = Number(expression[n - 1]) * Number(expression[n + 1])
                expression.splice(n - 1, 2)
                
                n--
                
                if (expression[n - 1] == '(' && expression[n + 1] == ')') {
                    console.log('TIRAR')
                    expression.splice(n + 1, 1)
                    expression.splice(n - 1, 1)
                    n = n - 3

                    console.log(expression)
                }else{
                    console.log(expression)
                }
            }else if(expression[n] == '/' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
                console.log('DIVISÃO')
                expression[n + 1] = Number(expression[n - 1]) / Number(expression[n + 1])
                expression.splice(n - 1, 2)
                
                n--
                
                if (expression[n - 1] == '(' && expression[n + 1] == ')') {
                    console.log('TIRAR')
                    expression.splice(n + 1, 1)
                    expression.splice(n - 1, 1)
                    n = n - 3

                    console.log(expression)
                }else{
                    console.log(expression)
                }
            }else if(expression[n] == '^' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
                console.log('DIVISÃO')
                expression[n + 1] = Number(expression[n - 1]) ** Number(expression[n + 1])
                expression.splice(n - 1, 2)
                
                n--
            
                if (expression[n - 1] == '(' && expression[n + 1] == ')') {
                    console.log('TIRAR')
                    expression.splice(n + 1, 1)
                    expression.splice(n - 1, 1)
                    n = n - 3

                    console.log(expression)
                }else{
                    console.log(expression)
                }
            }
        }
}
}