expression = [ '(', '5', '+', '1', ')', 'x', '(','10', '-' ,'(', '4', '+', '2', ')', ')']
/// (5 + 1)*(10 - (4 + 2))

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
parents = 0
for (e = 0; e < expression.length; e++) {

    console.log('NUMBER: ' + expression[e])
    

    if (expression[e] == '(') {
        continuar = false
        stop2 = false
        pares = 0

        console.log('--------PARÊNTESES--------')
        degs.push({})
        console.log('DEEEEEEGS[E] = ' + degs[parents])

        for (n = e + 1; stop2 == false && n < expression.length; n++) {
            console.log(continuar)
            console.log(continuar == true)
            console.log(expression[n])
            if (expression[n] == '(') {
                console.log('Oh no')
                pares++
                continuar = true
                degs[parents].par = pares
                console.log('DEGS PARES---------: ' + degs[parents].par)

            }else if (continuar == true && expression[n] == ')'){ 
                    console.log('TRUE')
                  
                    if (pares == 1) {
                        continuar = false
                    }
                    pares--
                    console.log('PARES: ' + pares)

            }else if (continuar == false && expression[n] == ')') {

                console.log(degs[parents])
                if (degs[parents].par == undefined) {
                   console.log('TEM ALGO DE ERRADO')
                    degs[parents].par = 0
                }
                console.log('MAIS')
                console.log('PARES: ' + pares)
                console.log('stop2: ' + stop2)
                stop2 = true
                console.log('stop2: ' + stop2)
                console.log('abre parenteses: ' + e + '    fecha parenteses: ' + n )
                degs[parents].start = e
                degs[parents].end = n
            }
             
        }
        console.log('STOP2: ' + stop2)
        console.log('PARES: ', pares)
        
        parents++
    }
}
