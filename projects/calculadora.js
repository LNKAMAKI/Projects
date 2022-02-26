
expression = ['(','(','10', '+', '(','50', '+', '100', '+', '(','(','200', '+', '(','(','20', '+', '50', ')', '+', '(', '90', '+', '10', ')',')',')', '+', 
'(', '30', '+', '(', '150', '+', '(', '20', '+', '(', '110', '+', '50',')', '+', '(','40', '+', '2',')',
')',')',')',')',')', '+', '60', '+', '6', '+', '(', '10', '+', '7', ')', ')', '+', '100', ')', '+','500']

expression = ['64','r','3']

console.log(expression, expression.length) 
stop = false

n = 0

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
 