letit = [{mind: ['a','.','c']},{mind: ['b','b']},{mind: ['3','*','x','*','3']}]// correto
miracle = ['3'] // eg2
goes = '3.x' // eg


console.log('')
conseguiu = false
older = 0
while (older < letit.length && conseguiu == false) {
console.log(DESFATORAR(letit[older].mind, miracle, goes))


// correto == ['2','*','10','x'] (NÚMERO QUE VAI SER COMPARADO)
// eg2 == ['10'] (NÚMERO QUE VAI MULTIPLICAR)
// eg == '2x' (NÚMERO QUE VAI SER MULTIPLICADO)

function DESFATORAR(correto, eg2, eg) {
eassim = []
solo = ''
for (ne in eg) {
    console.log(eg[ne])
    if (eg[ne] != '.') {
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
}

eg = eassim


whythat = [...eg]
console.log(correto)
for (ponto in eg2) {
    console.log(eg2[ponto])
    whythat.push(eg2[ponto])
}

console.log('MULTIPLICAR', eg2,'*',eg)
console.log(whythat)

numerinhos = []
for (decisao in correto) {
    if (correto[decisao] != '*' && correto[decisao] != '.' && correto[decisao] != '+' && correto[decisao] != '-') {
       numerinhos.push(correto[decisao])
        }
    console.log(correto[decisao], 'DONT BE GONE')
}
console.log(numerinhos)
thatway = [...numerinhos]


for (poder in whythat){
    if (whythat[poder] != '*' && whythat[poder] != '.' && whythat[poder] != '+' && whythat[poder] != '-' && numerinhos.indexOf(whythat[poder]) != -1) {
    console.log(whythat[poder], numerinhos)
    console.log(numerinhos.indexOf(whythat[poder]))
    numerinhos.splice(numerinhos.indexOf(whythat[poder]),1)

    }
}
console.log(numerinhos)
if (numerinhos.length == 0 && thatway.length == whythat.length) {
    console.log('ENTÃO', eg2,'*',eg,'=',correto)
    conseguiu = true
}
}
older++
}