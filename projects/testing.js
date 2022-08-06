function fazerConta(anterior) {
    //Primeiro raizes e potências
    for (n = 0; n < anterior.length; n++) {
    if(anterior[n] == '^' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
        anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
        anterior.splice(n - 1, 2)
        n = n - 3 // n = n - 3
        if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
            anterior.splice(n + 3, 1)
            anterior.splice(n + 1, 1)
            n = n - 3
        }
    }else if(anterior[n] == '√' && anterior[n + 1] != '(' ) {
        anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
        anterior.splice(n, 1)
        n = n - 2
        if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
            anterior.splice(n + 3, 1)
            anterior.splice(n + 1, 1)
            n = n - 3
        }}}
    // Segundo multiplicações e divisões
    for (n = 0; n < anterior.length; n++) {
    if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\^') == -1 && String(anterior[n - 2]).search('\\^') == -1) {
    anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
    anterior.splice(n - 1, 2)
    n = n - 3
    if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
        anterior.splice(n + 3, 1)
        anterior.splice(n + 1, 1)
        n = n - 3
    }
    }else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\^') == -1 && String(anterior[n - 2]).search('\\^') == -1) {
    anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
    anterior.splice(n - 1, 2)
    n = n - 3
    if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
        anterior.splice(n + 3, 1)
        anterior.splice(n + 1, 1)
        n = n - 3
    }}}
    if (anterior.length > 1) {
        for (n = 0; n < anterior.length && anterior.length != 1; n++) {
            if (anterior[n] == '+' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[\\*\\/\\^]') == -1 && String(anterior[n - 2]).search('[\\*\\/\\^\\-]') == -1) {
                anterior[n + 1] = String(Number(anterior[n - 1]) + Number(anterior[n + 1]))
                anterior.splice(n - 1, 2)
                n = n - 3
                if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                    anterior.splice(n + 3, 1)
                    anterior.splice(n + 1, 1)
                    n = n - 3
                }
            }else if(anterior[n] == '-' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[\\*\\/\\^]') == -1 && String(anterior[n - 2]).search('[\\*\\/\\^\\-]') == -1) {
                anterior[n + 1] = String(Number(anterior[n - 1]) - Number(anterior[n + 1]))
                anterior.splice(n - 1, 2)
                n = n - 3
                if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                    anterior.splice(n + 3, 1)
                    anterior.splice(n + 1, 1)
                    n = n - 3
                }
            }else if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\^') == -1 && String(anterior[n - 2]).search('\\^') == -1) {
                anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
                anterior.splice(n - 1, 2)
                n = n - 3
                if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                    anterior.splice(n + 3, 1)
                    anterior.splice(n + 1, 1)
                    n = n - 3
                }
            }else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\^') == -1 && String(anterior[n - 2]).search('\\^') == -1) {
                anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
                anterior.splice(n - 1, 2)
                n = n - 3
                if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                    anterior.splice(n + 3, 1)
                    anterior.splice(n + 1, 1)
                    n = n - 3
                }
            }else if(anterior[n] == '^' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
                anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
                anterior.splice(n - 1, 2)
                n = n - 3
                if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                    anterior.splice(n + 3, 1)
                    anterior.splice(n + 1, 1)
                    n = n - 3
                }
            }else if(anterior[n] == '√' && anterior[n + 1] != '(') {
                anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
                anterior.splice(n, 1)
                n = n - 2
                if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                    anterior.splice(n + 3, 1)
                    anterior.splice(n + 1, 1)
                    n = n - 3
                }}}}
                return anterior
    }