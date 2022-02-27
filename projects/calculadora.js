numero = '1'
expression = []
/*
window.addEventListener('keydown', (event)=> {
    if (event.key == 'Backspace' && expression.length > 0) {
        console.log('APAGAR')
        if (expression[expression.length - 1].length == 1) {
            expression.push(numero)
            console.log('VAI')
            expression.splice(expression.length - 1, 1)
            document.getElementById('put').innerHTML = expression
        }
    }
    if (event.key != 'Shift'){
    console.log(event.key)
    
    if (String(event.key).search('[0-9]') != -1 || event.key.search('[\\.\\(\\)\\+\\-\\x\\/r**=]') != -1) {
        if (event.key != '=') {
            document.getElementById('put').innerText += event.key

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
    }else{
        console.log('IR')
        expression.push(numero)
        numero = ''
        fazerConta()
    }
    }
    
}
})
*/
position = 0
function inserir(n) {
    console.log('DIGITO: ' + n)
    if (expression.length > 0) {

    if (String(n).search('[0-9]') != -1 || String(n) == '.') {
        console.log('NUMERO OU PONTO')

       if (String(expression[expression.length - 1]).search('[0-9]') != -1 || String(expression[expression.length - 1]) == '.') {
        console.log(expression[expression.length - 1] + ' é um número ou ponto')
        expression[position] += String(n)
       }else{
           console.log(expression[expression.length - 1] + ' não é um número ou ponto')
           position++
        expression[position] = String(n)
       }
    }else{
        position++
        expression[position] = String(n)
    }
  
}else{
    console.log('LISTA VAZIA')
    expression.push(String(n))
  
}
console.log(expression)
console.log('POSITION: ' + position)
console.log(' ')
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
}else if(expression[n] == '**' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
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
            }else if(expression[n] == '**' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
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
document.getElementById('put').innerText = expression
}