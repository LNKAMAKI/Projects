correto = ['+', '2', '*', '2', 'x', 'x']
eg = '2xx'
eg2 = ['2']

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
