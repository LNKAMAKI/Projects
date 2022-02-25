expression = ['(','(','(',')',')', ')']

console.log(expression, expression.length) 

stop = false

n = 0

console.log('--------------------------PRIMEIRO PASSO--------------------------')
while(n < expression.length) {
    console.log('index: ' + n)
    console.log('number: ' + expression[n])
   // console.log('TAMANHOOOO: ' + expression.length)
    if (expression[n] == 'x' &&  expression[n + 1] != '(' &&  expression[n + 1] != ')' &&  expression[n - 1] != '(' &&  expression[n - 1] != ')') {
        console.log('Multiplicar')
       // console.log(expression[n - 1]*expression[n + 1])
        expression[n + 1] = expression[n - 1]*expression[n + 1]
        expression.splice(n - 1, 2)
        console.log(expression)

    }else if(expression[n] == '/' && expression[n] == 'x' &&  expression[n + 1] != '(' &&  expression[n + 1] != ')' &&  expression[n - 1] != '(' &&  expression[n - 1] != ')'){
        console.log('Dividir')
       // console.log(expression[n - 1]*expression[n + 1])
        expression[n + 1] = expression[n - 1]/expression[n + 1]
        expression.splice(n - 1, 2)
        console.log(expression)

    }else{
        n++
    }
} 

console.log('--------------------------SEGUNDO PASSO--------------------------')

degs = []
for (e = 0; e < expression.length; e++) {

    console.log('NUMBER: ' + expression[e])
    
    continuar = false
    stop2 = false
    pares = 0

    if (expression[e] == '(') {
        console.log('--------PARÊNTESES--------')
        degs.push({})

        for (n = e + 1; stop2 == false; n++) {
            console.log(continuar)
            console.log(continuar == true)
            console.log(expression[n])
            if (expression[n] == '(') {
                console.log('Oh no')
                pares++
                continuar = true
                degs[e].par = pares
            }else if (continuar == true && expression[n] == ')'){ 
                    console.log('TRUE')
                  
                    if (pares == 1) {
                        continuar = false
                    }
                    pares--
                    console.log('PARES: ' + pares)

            }else if (continuar == false && expression[n] == ')') {

                console.log(degs[e].par)
                if (degs[e].par == undefined) {
                    console.log('TEM ALGO DE ERRADO')
                    degs[e].par = 0
                }
                console.log('MAIS')
                console.log('PARES: ' + pares)
                console.log('stop2: ' + stop2)
                stop2 = true
                console.log('stop2: ' + stop2)
                console.log('abre parenteses: ' + e + '    fecha parenteses: ' + n )
                degs[e].start = e
                degs[e].end = n
            }
             
        }
        console.log('STOP2: ' + stop2)
        console.log('PARES: ', pares)
        
    }
}
