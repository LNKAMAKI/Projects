function fazerConta(anterior) {
//Primeiro raizes e potências
for (n = 0; n < expression.length; n++) {
if(expression[n] == '*' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√') {
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
    }}}
// Segundo multiplicações e divisões
for (n = 0; n < expression.length; n++) {
if(expression[n] == 'x' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√' && String(expression[n + 2]).search('\\*') == -1 && String(expression[n - 2]).search('\\*') == -1) {
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
}else if(expression[n] == '/' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√' && String(expression[n + 2]).search('\\*') == -1 && String(expression[n - 2]).search('\\*') == -1) {
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
}}}
if (expression.length > 1) {
    for (n = 0; n < expression.length && expression.length != 1; n++) {
        console.log(expression[n])
        if (expression[n] == '+' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√' && String(expression[n + 2]).search('[x\\/\\*]') == -1 && String(expression[n - 2]).search('[x\\/\\*\\-]') == -1) {
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
        }else if(expression[n] == '-' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√' && String(expression[n + 2]).search('[x\\/\\*]') == -1 && String(expression[n - 2]).search('[x\\/\\*\\-]') == -1) {
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
        }else if(expression[n] == 'x' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√' && String(expression[n + 2]).search('\\*') == -1 && String(expression[n - 2]).search('\\*') == -1) {
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
        }else if(expression[n] == '/' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√' && String(expression[n + 2]).search('\\*') == -1 && String(expression[n - 2]).search('\\*') == -1) {
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
        }else if(expression[n] == '*' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√') {
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
            }}}}
}