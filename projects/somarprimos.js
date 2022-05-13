

somarprimos(100)
function somarprimos(atequenumero) {
    soma = 0
    console.log(atequenumero)
    for (n = 1; n < atequenumero - 1; n++) {
        console.log(n)
        if (ehprimo(n) == true) {
            console.log('é primo')
            soma += n
        }
    }
console.log(soma)
}

function ehprimo(Number) {
    parar = false
    for (t = 2; t < Number && parar == false; t++) {
    
        if (Number%t == 0) {
            parar = true
        }
    }
    if (parar) 
    return false
    else
    return true
}