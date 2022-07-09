

function splitUp(str) {
comp = ''
for (i in str) {
    
    if (str[i] == '.' && comp != '-') {
        console.log('OPA',comp)
    }
    comp+= str[i]
    if (i == str.length - 1) {
        console.log('OPA',comp)
    }
}
}



splitUp('11.x')

function versetem(comp) {
podeir = true
qual = -1
for (meow in segs) {
      array1 = []
      for (d in segs[meow].car) {
          array1.push(segs[meow].car[d])
      }
      array2 = []
      for (d in comp) {
          array2.push(comp[d])
      }
      if (segs[meow].car.length < comp.length) {

          divisao =  DIVIDIR(VAI(segs[meow].car), VAI(comp))
       }else{
           divisao = DIVIDIR(VAI(comp),VAI(segs[meow].car))
       }
       if (divisao == '' || divisao == '-') {
         // 
          podeir = false
          qual = meow
       }
}
return podeir
}