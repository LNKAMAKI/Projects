function fazerConta(anterior) {
    //Primeiro raizes e potências
    for (n = 0; n < expression.length; n++) {
    if(expression[n] == '^' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√') {
        expression[n + 1] = String(Number(expression[n - 1]) ** Number(expression[n + 1]))
        expression.splice(n - 1, 2)
        n = n - 3 // n = n - 3
        if (expression[n + 1] == '(' && expression[n + 3] == ')') {
            expression.splice(n + 3, 1)
            expression.splice(n + 1, 1)
            n = n - 3
        }
    }else if(expression[n] == '√' && expression[n + 1] != '(' ) {
        expression[n + 1] = String(Number(expression[n + 1]) ** (1/2))
        expression.splice(n, 1)
        n = n - 2
        if (expression[n + 1] == '(' && expression[n + 3] == ')') {
            expression.splice(n + 3, 1)
            expression.splice(n + 1, 1)
            n = n - 3
        }}}
    // Segundo multiplicações e divisões
    for (n = 0; n < expression.length; n++) {
    if(expression[n] == '*' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√' && String(expression[n + 2]).search('\\^') == -1 && String(expression[n - 2]).search('\\^') == -1) {
    expression[n + 1] = String(Number(expression[n - 1]) * Number(expression[n + 1]))
    expression.splice(n - 1, 2)
    n = n - 3
    if (expression[n + 1] == '(' && expression[n + 3] == ')') {
        expression.splice(n + 3, 1)
        expression.splice(n + 1, 1)
        n = n - 3
    }
    }else if(expression[n] == '/' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√' && String(expression[n + 2]).search('\\^') == -1 && String(expression[n - 2]).search('\\^') == -1) {
    expression[n + 1] = String(Number(expression[n - 1]) / Number(expression[n + 1]))
    expression.splice(n - 1, 2)
    n = n - 3
    if (expression[n + 1] == '(' && expression[n + 3] == ')') {
        expression.splice(n + 3, 1)
        expression.splice(n + 1, 1)
        n = n - 3
    }}}
    if (expression.length > 1) {
        for (n = 0; n < expression.length && expression.length != 1; n++) {
            if (expression[n] == '+' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√' && String(expression[n + 2]).search('[*\\/\\^]') == -1 && String(expression[n - 2]).search('[*\\/\\^\\-]') == -1) {
                expression[n + 1] = String(Number(expression[n - 1]) + Number(expression[n + 1]))
                expression.splice(n - 1, 2)
                n = n - 3
                if (expression[n + 1] == '(' && expression[n + 3] == ')') {
                    expression.splice(n + 3, 1)
                    expression.splice(n + 1, 1)
                    n = n - 3
                }
            }else if(expression[n] == '-' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√' && String(expression[n + 2]).search('[*\\/\\^]') == -1 && String(expression[n - 2]).search('[*\\/\\^\\-]') == -1) {
                expression[n + 1] = String(Number(expression[n - 1]) - Number(expression[n + 1]))
                expression.splice(n - 1, 2)
                n = n - 3
                if (expression[n + 1] == '(' && expression[n + 3] == ')') {
                    expression.splice(n + 3, 1)
                    expression.splice(n + 1, 1)
                    n = n - 3
                }
            }else if(expression[n] == '*' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√' && String(expression[n + 2]).search('\\^') == -1 && String(expression[n - 2]).search('\\^') == -1) {
                expression[n + 1] = String(Number(expression[n - 1]) * Number(expression[n + 1]))
                expression.splice(n - 1, 2)
                n = n - 3
                if (expression[n + 1] == '(' && expression[n + 3] == ')') {
                    expression.splice(n + 3, 1)
                    expression.splice(n + 1, 1)
                    n = n - 3
                }
            }else if(expression[n] == '/' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√' && String(expression[n + 2]).search('\\^') == -1 && String(expression[n - 2]).search('\\^') == -1) {
                expression[n + 1] = String(Number(expression[n - 1]) / Number(expression[n + 1]))
                expression.splice(n - 1, 2)
                n = n - 3
                if (expression[n + 1] == '(' && expression[n + 3] == ')') {
                    expression.splice(n + 3, 1)
                    expression.splice(n + 1, 1)
                    n = n - 3
                }
            }else if(expression[n] == '^' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')' && expression[n + 1] != '√') {
                expression[n + 1] = String(Number(expression[n - 1]) ** Number(expression[n + 1]))
                expression.splice(n - 1, 2)
                n = n - 3
                if (expression[n + 1] == '(' && expression[n + 3] == ')') {
                    expression.splice(n + 3, 1)
                    expression.splice(n + 1, 1)
                    n = n - 3
                }
            }else if(expression[n] == '√' && expression[n + 1] != '(') {
                expression[n + 1] = String(Number(expression[n + 1]) ** (1/2))
                expression.splice(n, 1)
                n = n - 2
                if (expression[n + 1] == '(' && expression[n + 3] == ')') {
                    expression.splice(n + 3, 1)
                    expression.splice(n + 1, 1)
                    n = n - 3
                }}}}
                return expression
    }