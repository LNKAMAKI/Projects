exp = []
   
for (bye in agruparsoma) {
    console.log(agruparsoma[bye])

    for (misery in agruparsoma[bye].quais) { 
        console.log(particles[agruparsoma[bye].quais[misery]].numero)

        ground = ''

        comofica = []
        for (b in particles[agruparsoma[bye].quais[misery]].numero) {

           carac =  particles[agruparsoma[bye].quais[misery]].numero[b]
           console.log(carac)
            
            if (ground.length == 0) {
                console.log('LISTA VAZIA')
                ground+= carac
            }else if(String(ground.search('[0-9]')) != -1 && String(carac).search('[0-9]') != -1){
                console.log('É UM nÚMERO')
                ground+= carac
            }else{
                comofica.push(ground)
                ground = ''
                ground += carac
                if (b == particles[agruparsoma[bye].quais[misery]].numero.length - 1) {
                    comofica.push(ground)
                }
            }
        }
        console.log('EITANÓIS',comofica)
        particles[agruparsoma[bye].quais[misery]].numero = comofica
    }
}




for (chuva in agruparsoma) {
    //console.log('')
   // console.log('')
    //console.log('')

    conta = []
for (da in agruparsoma[chuva].quais) {



divisor = []
for (flowers in agruparsoma[chuva].que) {

divisor.push(agruparsoma[chuva].que[flowers])
}

console.log(particles[agruparsoma[chuva].quais[da]].numero, '/',divisor)
tu = [...divisor]
resultadoDaDivisão = DIVIDIR( divisor, particles[agruparsoma[chuva].quais[da]].numero)

console.log('A DIVISÃ É IGUAL DE',particles[agruparsoma[chuva].quais[da]].numero,'por',tu, resultadoDaDivisão)

plan = []
add = ''

for (past in resultadoDaDivisão) {
   
 console.log(resultadoDaDivisão[past])

 if (resultadoDaDivisão[past].search('\\*') != -1 || resultadoDaDivisão[past].search('[0-9]') != -1) {
console.log('ADICIOnAR')

if (add.length == 0) {
    if (resultadoDaDivisão[past - 1] != '-') {
    add+= resultadoDaDivisão[past]
    }

}else if (resultadoDaDivisão[past].search('[0-9]') != -1 && add.search('[0-9]') != -1) {
    console.log('OK')
add+= resultadoDaDivisão[past]
}else{
    plan.push(add)
    add = ''
    console.log('AASADWHDUWHDU',resultadoDaDivisão[past - 1])
   
    add+= resultadoDaDivisão[past]
    
    
}
// console.log('ADD', add)
//console.log('PLAn É:', plan)

if (plan.length == 3) {
//console.log('É TRÊEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEIS')
//console.log('___________________number1:', Number(plan[0]), 'number2:', Number(plan[2]),'__________________')
//console.log(Number(plan[0])*Number(plan[2]))
plan = [String(Number(plan[0])*Number(plan[2]))]
}
 }

}

//console.log(agruparsoma[chuva].quais.length, '---------')
if (add == '' && agruparsoma[chuva].quais.length > 1) {
    add = '1'
   console.log('VAIIIIIIIIIIIIIII')
}
plan.push(add)
//console.log('PLAn', plan)

if (plan.length == 3) {
    console.log('É TRÊEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEIS')
    console.log(Number(plan[0])*Number(plan[2]))
    plan = [String(Number(plan[0])*Number(plan[2]))]
    console.log('É ISSO!!', plan)
    }

    if (particles[agruparsoma[chuva].quais[da]].numero[0] == '+' || particles[agruparsoma[chuva].quais[da]].numero[0] == '-') {
   console.log('O SInAL É: ', particles[agruparsoma[chuva].quais[da]].numero[0])

    sinal = particles[agruparsoma[chuva].quais[da]].numero[0]

    if (conta.length != 0) {
    conta.push(particles[agruparsoma[chuva].quais[da]].numero[0])
    }
    }

    if (conta.length == 0 && particles[agruparsoma[chuva].quais[da]].numero[0] == '-') {

 entao = '-'
 entao+= plan[0]
 console.log(entao)
 conta.push(entao)
    }else{
       
        conta.push(plan[0])
    }
   
    
}


//console.log('OK, FICOU ASSIM:', conta)

comehome = fazerConta(conta)
//console.log('E RESOLVEnDO FICA ASSIM:', comehome)



if (comehome[0][0] == '-') {
    t = ''
   for (b in comehome[0]) {
   if (comehome[0][b] != '-') {
     t+= comehome[0][b]
   }
   }
  // console.log(t)
   //console.log(typeof t)
   at = t
   if (ehprimo(t) == false) {
      //console.log(at)
   fat = FATORARSInGULAR(at)
  // console.log(String(fat))
   }else{
     // console.log('É PRIMOOOOOOOOOOOOOOOOO')
    fat = at
   }
   oop = '-'
   oop+= String(fat)
//console.log(oop)

exp.push('-')
fat += agruparsoma[chuva].que
exp.push(fat)

}else{
    if (ehprimo(comehome) == false) {
fat = FATORARSInGULAR(comehome)
    }else{
        fat = comehome
    }
//console.log(fat)

if (exp.length == 0) {
    fat += agruparsoma[chuva].que
    exp.push(fat)
    //console.log('PARTE LETRAL:', agruparsoma[chuva].que)
   
    }else {
        exp.push('+')
        fat += agruparsoma[chuva].que
        exp.push(fat)
      //  console.log('PARTE LETRAL:', agruparsoma[chuva].que)
    }
}




}



// SEPARAnDO OS MOnÔMIOS DEnOVO

particles = [{numero: ''}]
obnum = 0


for (n = 0; n < exp.length; n++) {
//console.log(exp[n], particles[obnum])

if (String(exp[n]).search('[\\-\\+]') != -1 && n != 0) {
//console.log('DEVTOOLS EU TE ODEIOoooooooooooooooooo')
particles.push({numero: ''})
obnum++
}

particles[obnum].numero += exp[n]
}