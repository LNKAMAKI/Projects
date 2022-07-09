

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


podeir = true
qual = -1
for (meow in segs) {
    
  
 // 
 
      array1 = []
      for (d in segs[meow].car) {
          array1.push(segs[meow].car[d])
      }

      array2 = []
      for (d in estado) {
          array2.push(estado[d])
      }

      if (segs[meow].car.length < estado.length) {

          divisao =  DIVIDIR(VAI(segs[meow].car), VAI(estado))
      
       }else{
           divisao = DIVIDIR(VAI(estado),VAI(segs[meow].car))
      
       }

       if (divisao == '' || divisao == '-') {
         // 
          podeir = false
          qual = meow
       }
    
}