

splitUp('10.x')

function splitUp(str) {
estado = ''
for (i in str) {
    
    if (str[i] == '.' && estado != '-') {
        console.log('OPA',estado)
    }
    estado+= str[i]
    if (i == str.length - 1) {
        console.log('OPA',estado)
    }
}
}


