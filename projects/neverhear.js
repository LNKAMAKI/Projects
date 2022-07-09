
str = '-.30.x.l'

estado = ''
for (i in str) {
    console.log(str[i])
    if (str[i] == '.' && estado != '-') {
        console.log('OPA',estado)
    }
    estado+= str[i]
    if (i == str.length - 1) {
        console.log('OPA',estado)
    }
}


