tudocerto = true
formula = []
function resolverFuncao() {
    form = document.getElementById('formula').value
    console.log(form)
    
    numero = '1'
    expression = []
    ansd = false
    position = 0
    juntar = false
    anstxt = ''
    error = false
    
    console.log(form.search('x'))
    if (form.search('x') != -1) {

    for (qualq in form) {
        if (String(form[qualq]).search('([0-9]|x)') != -1 || form[qualq].search('[\\.\\(\\)\\+\\-\\x\\/\\^\\*r=Backspace]') != -1) {
            if (String(form[qualq]).search('[=Backspace]') == -1) {
            if (ansd == false) {
            if (expression.length > 0) {
            if (String(form[qualq]).search('([0-9]|x)') != -1 ||String(form[qualq]) == '.') {
                if (ansd == true) {
                    ansd = false
                }
               if (String(expression[expression.length - 1]).search('([0-9]|x)') != -1 || String(expression[expression.length - 1]) == '.' || juntar == true) {
                expression[position] +=String(form[qualq])
                juntar = false
               }else{
                   position++
                expression[position] =String(form[qualq])
               }
            }else{
                if (String(form[qualq]) == '-' && String(expression[expression.length - 1]).search('[\\x\\^\\+\\(\\/\\*]') != -1 ||String(form[qualq]) == '-' && expression[expression.length - 1] == '-') {
                    juntar = true
                    console.log(form[qualq])
                }
                if (expression.length > 0) {
                position++
                }
                expression[position] =String(form[qualq])
            }
        }else{
            if (String(form[qualq]).search('([0-9]|x)') != -1 ||String(form[qualq]) == '.' ||String(form[qualq]) == '(' ||String(form[qualq]) == '-' ||String(form[qualq]) == '√')  {
           expression.push(String(form[qualq]))
            }
           if (form[qualq] == '-') {
            juntar = true
            console.log(form[qualq])
           }}
            }else{
                if (String(form[qualq]).search('([0-9]|x)') != -1 ||String(form[qualq]) == '.' ||String(form[qualq]) == '(' ||String(form[qualq]) == '√') {
                    expression[0] =form[qualq]
                    ansd = false
                    error = false
                }else if (error == false &&String(form[qualq]) != ')'){
               position++
                expression[position] =form[qualq]
                ansd = false
            }else if(error == true){
                ansd = false
                error = false
                if (String(form[qualq]) == '-') {
                    expression[0] =form[qualq]
                    juntar = true
                    console.log(form[qualq])
                }}}}}} 
    degs = []
    parents = 0
    for (e = 0; e < expression.length; e++) {
        if (expression[e] == '(') {
            continuar = false
            stop2 = false
            pares = 0
            degs.push({})
            degs[parents].start = e
            calcular = ''
            for (n = e + 1; stop2 == false && n < expression.length; n++) {
                if (expression[n] == '(') {
                    pares++
                    continuar = true
                    degs[parents].par = pares
                }else if (continuar == true && expression[n] == ')'){ 
                        if (pares == 1) {
                            continuar = false
                        }
                        pares--
                }else if (continuar == false && expression[n] == ')') {
                    if (degs[parents].par == undefined) {
                        degs[parents].par = 0
                    }
                    stop2 = true
                    degs[parents].end =form[qualq]
                }}
            parents++
        }} 
    stop = false
   for (h = 0; h < degs.length && stop == false; h++){
    if (degs[h].end == undefined) {stop = true}}
   if (stop == true) {
    tudocerto = false
   }else{tudocerto = true}
   degs = []
    parents = 0
    for (e = expression.length - 1; e >= 0; e--) {
      console.log(expression[e])
        if (expression[e] == ')') {
            continuar = false
            stop2 = false
            pares = 0
            degs.push({})
            degs[parents].start = e
            calcular = ''
            for (n = e - 1; stop2 == false && n >= 0; n--) {
              console.log(n, expression[n])
                if (expression[n] == ')') {
                    pares++
                    continuar = true
                    degs[parents].par = pares
                }else if (continuar == true && expression[n] == '('){ 
                        if (pares == 1) { continuar = false}
                        pares--
                }else if (continuar == false && expression[n] == '(') {
                    if (degs[parents].par == undefined) {degs[parents].par = 0}
                    stop2 = true
                  console.log(e)
                    degs[parents].end = expression[n]
                }}
            parents++
        }} 
        stop = false
   for (h = 0; h < degs.length && stop == false; h++){
    if (degs[h].end == undefined) {
        stop = true
    }}
   if (stop == true) {
    tudocerto = false
   }

   if (tudocerto == true) {
    formula = expression
    document.getElementById('p2').innerText = 'fórmula atual: ' + formula
    document.getElementById('p').innerText = expression
   }else{
    document.getElementById('p').innerText = 'Há erro de parênteses'
   }
}else{
    document.getElementById('p').innerText = 'Não há x!'
}
}

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