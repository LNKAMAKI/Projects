

close = [{followed:['10','*','5']},{followed:['b','b']},{followed:['3','*','x']}]

console.log(DESFATORAR(close,'b', ['c'], 'followed'))

function DESFATORAR(boulder, eg, oka, mon) {

/*
loco = []
solo = ''
for (ne in eg) {
    //console.log(eg[ne])
if (loco.length == 0) {
    //console.log('LISTA VAZIA')
    solo+= eg[ne]
}else if(String(solo.search('[0-9]')) != -1 && String(eg[ne]).search('[0-9]') != -1){
    //console.log('É UM nÚMERO')
    solo+= eg[ne]
}else{
    eg.push(solo)
    solo = ''
    solo += eg[ne]
    
}
if (ne == eg.length - 1) {
    loco.push(solo)
}
}



pieces = 0 

eassim = []
toyou = false
while(pieces < boulder.length && toyou == false){
console.log(boulder[pieces][mon])

for (ponto in oka) {
    console.log(oka[ponto])
   eassim.push(oka[ponto])
}

console.log('MULTIPLICAR', oka,'*',eg)
console.log(eg)

numerinhos = []
for (decisao in boulder[pieces][mon]) {
    if (boulder[pieces][mon][decisao] != '*' && boulder[pieces][mon][decisao] != '.' && boulder[pieces][mon][decisao] != '+' && boulder[pieces][mon][decisao] != '-') {
       numerinhos.push(boulder[pieces][mon][decisao])
        }
    console.log(boulder[pieces][mon][decisao])
}
console.log(numerinhos)


for (poder in eg){
    if (eg[poder] != '*' && eg[poder] != '.' && eg[poder] != '+' && eg[poder] != '-' && numerinhos.indexOf(eg[poder]) != -1) {
    console.log(eg[poder], numerinhos)
    console.log(numerinhos.indexOf(eg[poder]))
    numerinhos.splice(numerinhos.indexOf(eg[poder]),1)

    }
}
console.log(numerinhos)
if (numerinhos.length == 0) {
    console.log('ENTÃO', oka,'*',eg,'=',boulder[pieces][mon])
    toyou = true
    return pieces
}else{
    console.log('ESSE NÃO É O CERTO')
}

pieces++
}
*/

eassim = []
solo = ''
for (ne in eg) {
    console.log(eg[ne])
if (solo.length == 0) {
    console.log('LISTA VAZIA')
    solo+= eg[ne]
}else if(String(solo.search('[0-9]')) != -1 && String(eg[ne]).search('[0-9]') != -1){
    console.log('É UM nÚMERO')
    solo+= eg[ne]
}else{
    eassim.push(solo)
    solo = ''
    solo += eg[ne]
    
}
if (ne == eg.length - 1) {
    eassim.push(solo)
}
}

eg = eassim


console.log(correto)
for (ponto in eg2) {
    console.log(eg2[ponto])
    eg.push(eg2[ponto])
}

console.log('MULTIPLICAR', eg2,'*',eg)
console.log(eg)

numerinhos = []
for (decisao in correto) {
    if (correto[decisao] != '*' && correto[decisao] != '.' && correto[decisao] != '+' && correto[decisao] != '-') {
       numerinhos.push(correto[decisao])
        }
    console.log(correto[decisao])
}
console.log(numerinhos)


for (poder in eg){
    if (eg[poder] != '*' && eg[poder] != '.' && eg[poder] != '+' && eg[poder] != '-' && numerinhos.indexOf(eg[poder]) != -1) {
    console.log(eg[poder], numerinhos)
    console.log(numerinhos.indexOf(eg[poder]))
    numerinhos.splice(numerinhos.indexOf(eg[poder]),1)

    }
}
console.log(numerinhos)
if (numerinhos.length == 0) {
    console.log('ENTÃO', eg2,'*',eg,'=',correto)
}
}
