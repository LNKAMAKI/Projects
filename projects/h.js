for(anchor in segs) {
    console.log('i feel the light betrayed me', segs[anchor].mons, int[0][anchor].car)
    scarecrow.push({divididos: [], poss: [...segs[anchor].mons]})

    army = []
    lpisthebest = ''
        for (fall in segs[anchor].car) {
        if (lpisthebest.length == 0) {
          //  console.log('LISTA VAZIA - ADD')
            lpisthebest = segs[anchor].car[fall]
            console.log(lpisthebest)
        }else if(lpisthebest.search('[0-9]') != -1 && segs[anchor].car[fall].search('[0-9]') != -1) {
           // console.log('VAI - ADD')
            lpisthebest += segs[anchor].car[fall]
        }else{
           // console.log('NÃO VAI NÃO')
            army.push(lpisthebest)
            if(segs[anchor].car[fall] != '.') {
            lpisthebest = segs[anchor].car[fall]
            }else{
                if (segs[anchor].car[Number(fall) + 1].search('[0-9]') != -1) {
                lpisthebest = '*'
                }else{
                    lpisthebest = ''
                }
            }
            console.log('LPISTHEBEST', lpisthebest)
        }
        if (fall == segs[anchor].car.length - 1) {
            army.push(lpisthebest)
        }
    }
    bell = [...army]
    console.log('OAHAHA', army)
    for (high in segs[anchor].mons) {
        
       
        army = [...bell]
 
        console.log(monomios[segs[anchor].mons[high]].numero,army)

        pain = DIVIDIR(army,monomios[segs[anchor].mons[high]].numero)
        
        if (pain.length == 0 || pain.search('([0-9]|[a-z)])') == -1) {
          //  console.log('É 1')
            pain = '1'
            console.log('É ESSE:', pain)
            scarecrow[anchor].divididos.push(pain)
        }else{

            right = ''
            for (feet in pain) {
              //  console.log(pain[feet])
                if (pain[feet] != '+') {
                    right+= pain[feet]
                }
            }
            console.log('É ESSE:', right)
            scarecrow[anchor].divididos.push(right)
        }
       
    }
}