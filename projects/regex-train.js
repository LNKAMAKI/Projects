expression = ['1', '+', '2', 'x', '3', '+', '9']
console.log(expression, expression.length) 

for (n = 0; n < expression.length; n++) {
    console.log(expression[n])
    if (expression[n] == 'x') {
        console.log('Multiplicar')
        console.log(expression[n - 1]*expression[n + 1])
        expression[n + 1] = expression[n - 1]*expression[n + 1]

    }
}


console.log(expression)