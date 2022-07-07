datas = [[2000, 5, 6], [2034,3,10],[2034,1,25]]

ordenado = []
positions = []
for (i in datas) {
  ordenado.push('-')
  positions.push(-1)
}

for (i in datas) {
  console.log('______________________________________________________________')
  console.log('')
  console.log(i,':',datas[i])
  console.log('')
  console.log('ver:')

  parar = false
  for (a = 0; a < ordenado.length && parar == false; a++) {
    console.log('')
    console.log('SENDO COMPARADO:', ordenado[a])
if (ordenado[a] != '-') {
  
    informação = []
   
    informação[0] = ordenado[a][0]
    informação[1] = ordenado[a][1]
    informação[2] = ordenado[a][2]

      informação2 = []
    informação2[0] = datas[i][0]
    informação2[1] = datas[i][1]
    informação2[2] = datas[i][2]

  stop = false
for (e = 0; e < informação.length && stop == false; e++) {
      console.log('comparar',informação[e],'com',informação2[e])
  if (informação[e] != informação2[e]) {
    stop = true
    if (informação2[e] > informação[e]) {
      console.log('trocar', a)
      for (inicio = ordenado.length - 1; inicio > a; inicio--){
        console.log(inicio, ordenado[inicio],
        ordenado[inicio - 1])
        
        ordenado[inicio] = ordenado[inicio - 1]
        positions[inicio] = positions[inicio - 1]
      }
      ordenado[a] = datas[i]
      positions[a] = i
      console.log(ordenado)
      parar = true
      
    }
  }
}
  
  }else{
  ordenado[a] = datas[i]
  positions[a] = i
  parar = true
  console.log('')
  console.log('FICA ASSIM:')
  console.log(ordenado)
  }
  
  }
}