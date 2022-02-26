
expression = ['(','(','10', '+', '(','50', '+', '100', '+', '(','(','200', '+', '(','(','20', '+', '50', ')', '+', '(', '90', '+', '10', ')',')',')', '+', 
'(', '30', '+', '(', '150', '+', '(', '20', '+', '(', '110', '+', '50',')', '+', '(','40', '+', '2',')',
')',')',')',')',')', '+', '60', '+', '6', '+', '(', '10', '+', '7', ')', ')', '+', '100', ')', '+','500']

expression = [ '100', '/' ,'(' ,'(' ,'212' ,'-', '32', ')', '/', '(', '122', '-', '32', ')', ')']
expression = ['9', '-', '5', '+', '3', 'x', '5', '/', '2', 'x', '4']
//expression = ['2', '-', '(','5', '+', '110',')']
console.log(expression, expression.length) 
stop = false

n = 0

console.log('--------------------------PRIMEIRO PASSO--------------------------')

for (n = 0; n < expression.length; n++) {
if(expression[n] == 'x' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
    console.log('MULTIPLICAÇÃO')
    expression[n + 1] = Number(expression[n - 1]) * Number(expression[n + 1])
    expression.splice(n - 1, 2)
    
    n--
    console.log(n, expression)
    if (expression[n - 1] == '(' && expression[n + 1] == ')') {
        console.log('TIRAR')
        expression.splice(n + 1, 1)
        expression.splice(n - 1, 1)
        n = n - 3
    }
}else if(expression[n] == '/' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
    console.log('DIVISÃO')
    expression[n + 1] = Number(expression[n - 1]) / Number(expression[n + 1])
    expression.splice(n - 1, 2)
    
    n--
    console.log(n, expression)
    if (expression[n - 1] == '(' && expression[n + 1] == ')') {
        console.log('TIRAR')
        expression.splice(n + 1, 1)
        expression.splice(n - 1, 1)
        n = n - 3
    }
}
}
console.log('--------------------------SEGUNDO PASSO--------------------------')

console.log(expression)

if (expression.length > 1) {

        for (n = 0; n < expression.length; n++) {
            console.log(expression[n])
            if (expression[n] == '+' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
                console.log('ADIÇÃO')
                expression[n + 1] = Number(expression[n - 1]) + Number(expression[n + 1])
                expression.splice(n - 1, 2)
              
                n--
                console.log(n, expression)
                if (expression[n - 1] == '(' && expression[n + 1] == ')') {
                    console.log('TIRAR')
                    expression.splice(n + 1, 1)
                    expression.splice(n - 1, 1)
                    n = n - 3
                }
            }else if(expression[n] == '-' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
                console.log('SUBTRAÇÃO')
                expression[n + 1] = Number(expression[n - 1]) - Number(expression[n + 1])
                expression.splice(n - 1, 2)
                
                n--
                console.log(n, expression)
                if (expression[n - 1] == '(' && expression[n + 1] == ')') {
                    console.log('TIRAR')
                    expression.splice(n + 1, 1)
                    expression.splice(n - 1, 1)
                    n = n - 3
                }
            }else if(expression[n] == 'x' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
                console.log('MULTIPLICAÇÃO')
                expression[n + 1] = Number(expression[n - 1]) * Number(expression[n + 1])
                expression.splice(n - 1, 2)
                
                n--
                console.log(n, expression)
                if (expression[n - 1] == '(' && expression[n + 1] == ')') {
                    console.log('TIRAR')
                    expression.splice(n + 1, 1)
                    expression.splice(n - 1, 1)
                    n = n - 3
                }
            }else if(expression[n] == '/' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
                console.log('DIVISÃO')
                expression[n + 1] = Number(expression[n - 1]) / Number(expression[n + 1])
                expression.splice(n - 1, 2)
                
                n--
                console.log(n, expression)
                if (expression[n - 1] == '(' && expression[n + 1] == ')') {
                    console.log('TIRAR')
                    expression.splice(n + 1, 1)
                    expression.splice(n - 1, 1)
                    n = n - 3
                }
            }
        }
   // }

}
 