exp= ['16']

for (n = 0; n < exp.length; n++) {
    if (ehprimo(exp[n]) == false) {
    fatorado = ''

    first = 1

    div = 0
    console.log(exp[n], div)

    stop = false
    fator = 1
    
    for (e = 2; stop == false; e++) {
        console.log('')
        console.log(e)
        console.log('')
    
        sob = Number(exp[n])
      
           if (ehprimo(e) == true) {
            while (sob%e == 0) {
            if (sob%e == 0) {
                console.log(sob + '/' + e + ': ' + sob/e)
                
                
            }

            sob = sob/e
            
            console.log('SIM')
            console.log(fator + ' x ' + e + ': ' + fator*e)

            fator = fator*e

            st = false
            
            if (fator == exp[n]) {
            stop = true
            fatorado += `${e}`
            }else{
                fatorado += `${e} x `
            }
           }
        }
    }
}
}


function ehprimo(number) {
    parar = false
    for (t = 2; t < number && parar == false; t++) {
    
        if (number%t == 0) {
            parar = true
        }
    }
    if (parar) 
    return false
    else
    return true
}