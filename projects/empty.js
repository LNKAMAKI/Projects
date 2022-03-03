
expression = ['(','(','3', '-', '(', '7', '+', '5',')',')',')','+','9']
console.log(expression)
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
        console.log(degs)
        degs[parents].start = e
       
        console.log('DEEEEEEGS[E] = ' + degs[parents])

        calcular = ''
        for (n = e + 1; stop2 == false && n < expression.length; n++) {
            //console.log(continuar)
            //console.log(continuar == true)
            console.log(expression[n])
            if (expression[n] == '(') {
                console.log('Oh no')
                console.log(pares)
                pares++
                console.log('PARES: ' + pares)
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

                degs[parents].end = n
            }else{
                
            } 
        }
        console.log('STOP2: ' + stop2)
        console.log('PARES: ', pares)
        
        console.log('EXPRESSION!!!!!!!!!!!!: ' + expression)
        parents++
    }
}

falta = false
console.log('EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE')
for (i = 0; i < degs.length && false == false; i++) {
    console.log(degs[i].end)
    if (degs[i].end == undefined) {
        console.log('TEM ALGO DE ERRADO AQUI')
        falta = true
    }
}