while(java < miss_2.length && deucerto == false) {
    podeser_2 = []
    for (outro in miss_2) {
        if (outro != java ) {
            presentes = []
            for (quecoisa in miss_2[outro].aparicoes) {
                fatorzinho = miss_2[outro].aparicoes[quecoisa]
                if (miss_2[java].aparicoes.indexOf(fatorzinho) != -1) {
                    presentes.push(fatorzinho)
                }}

            adicionou = false
            for (idk in podeser_2) {
                esigual = true
                for (denovo in podeser_2[idk].opl) {
                    if (podeser_2[idk].opl[denovo] == presentes[denovo]) {
                    }else{
                        esigual = false
                    }
                }
                if (esigual == true) {
                    podeser_2[idk].position.push(outro)
                    adicionou = true
                }}
            if (presentes.length > 0 && presentes.length > 0 && adicionou == false) {
                podeser_2.push({opl: presentes, position: [outro]})
            } }}

       for (belief in podeser_2) {
           if (podeser_2[belief].position.indexOf(java) == -1) {
           podeser_2[belief].position.push(String(java))
           }

        shot = ''
        for (gun in podeser_2[belief].opl) {
            shot+= podeser_2[belief].opl[gun] + ','
        }

        if (roll_2.length == 0) {
        }else if(roll_2.find(function(roll_2){return roll_2.way == shot}) != undefined) { // SE JÁ TIVER NA LSITA
           
            for (capital in podeser_2[belief].position) {
            if (roll_2.find(function(roll_2){return roll_2.way == shot}).posições.indexOf(podeser_2[belief].position[capital])== -1) {
               roll_2.find(function(roll_2){return roll_2.way == shot}).posições.push(podeser_2[belief].position[capital])
            } } }}

       whyis = java
       if (podeser_2.length > 0) {
           for(cold in podeser_2) {
       if (podeser_2[cold].position.length == quantosfatores && podeser_2[cold].opl.length == quantasposições && miss_2[whyis].aparicoes.length == quantasposições) {
        deucerto = true

        ficaassim = ''
        podeser_2[cold].position.push(whyis)

        for (yehaa in podeser_2[cold].position) {
            if (miss_2[podeser_2[cold].position[yehaa]].dividido[0] == '-') {
                fi = ''
                for (ohjesus in miss_2[podeser_2[cold].position[yehaa]].dividido) {
                    if (miss_2[podeser_2[cold].position[yehaa]].dividido[ohjesus] != '-') {
                        fi+= miss_2[podeser_2[cold].position[yehaa]].dividido[ohjesus]
                    }}
                if (yehaa != 0) {
                     ficaassim += ` - ${fi}`
                }else{
                    ficaassim += `-${fi}`
                }
            }else if(yehaa != 0){
                ficaassim += ' + '
                ficaassim+= miss_2[podeser_2[cold].position[yehaa]].dividido
            }else{
                ficaassim+= miss_2[podeser_2[cold].position[yehaa]].dividido 
            }}
       for (ruin in podeser_2[cold].opl) {
        emotion = ''
        for (scream in scarecrow_2[podeser_2[cold].opl[ruin]].divisor ) {
            emotion+= scarecrow_2[podeser_2[cold].opl[ruin]].divisor[scream]
        }
      }}}}
       java++
   }

   for (eep in miss_2) { // miss_2[eep] = *Eg.: {dividido: '2*3x', aparicoes: [1,2], divisor: ['2','.','2']}
    varib = []
    for (kel in miss_2[eep].aparicoes) { // miss_2[eep].aparicoes = *[1,2], miss_2[eep].aparicoes[kel] = *1
        pos = miss_2[eep].aparicoes[kel] // *1
        varib.push(scarecrow_2[pos].positions[scarecrow_2[pos].divididos.indexOf(miss_2[eep].dividido)]) // *scarecrow_2[1].positions[scarecrow_2[1].divididos.indexOf('2*3x')]
    }
      for (quad in miss_2) { // miss_2[quad] = *Eg.: {dividido: '5y', aparicoes: [1,2], divisor: ['3','.','x']}
        if (quad != eep) { // Se o miss[quad] for diferente do miss[eep]
            compar = []
          varib2 = []
          for (kel in miss_2[quad].aparicoes) { // *miss_2[quad].aparicoes = [1,2], *miss_2[quad].aparicoes[0] = 1
            pos = miss_2[quad].aparicoes[kel] //*1
            varib2.push(scarecrow_2[pos].positions[scarecrow_2[pos].divididos.indexOf(miss_2[quad].dividido)]) // *scarecrow_2[1].positions[scarecrow_2[1].divididos.indexOf('5y')]
        }
          repeated = [];
          repwri = "";
          for (vespa in miss_2[eep].aparicoes) { // *miss_2[eep].aparicoes = [1,2], *miss_2[eep].aparicoes[0] = 1
            if (compar.indexOf(varib[vespa]) == -1) { // *compar.indexOf(varib[0]/1)
            compar.push(varib[vespa]) // *varib[0] = 1
            if (miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa]) != -1 && compar.indexOf(varib2[miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa])]) == -1) { // *[1,2].indexOf(1) != -1 && compar.indexOf(varib_2[0]/2) == -1
              compar.push(varib2[miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa])]) // compar.push(varib2[0]/2)
                
                repeated.push(miss_2[eep].aparicoes[vespa]); // *repeated.push(miss_2[eep].aparicoes[0]) (1)
              repwri += "," + miss_2[eep].aparicoes[vespa]; // *,1

              mons1 = []

              pos1 = eep
              pi = 0
              for (photo = 0; photo < Number(repwri.length)/2;photo+=1) { // *,1,2,3,4
                  mons1.push(compar[pi])
                  pi+= 2
              } 
              // *mons1 = [1,3]

              pos2 = quad

              mons2 = []
              pi = 1
              for (photo = 0; photo < Number(repwri.length)/2;photo+=1) { // *,1,2,3,4
                  mons2.push(compar[pi])
                  pi+= 2
              } 
              // *mons2 = [2,4]

              if (roller_2.find(function (roller_2) { return roller_2.rept == repwri;}) == undefined) { // Se não tiver no roller_2
                   roller_2.push({
                  rept: repwri, // *,1,2
                  opl: [...repeated], // *[1,2]
                  position: [eep, quad], // 0,1
                  monomios: [...compar] // [1,2,3,4]
                });
              }else{ // Se já tiver no roller_2
                func = roller_2.find(function (roller_2) { return roller_2.rept == repwri;})
                perm = true
                for (sept in mons1) { // *mons1 = [1,3], *mons1[0] = 1
                    if (func.monomios.indexOf(mons1[sept]) != -1) { //*[0,1,2].indexOf(1) != -1
                       perm = false 
                    }}
                if (perm == true) {
                    func.position.push(pos1) // pos1 = eep
                    for (wake in mons1) { // *mons1[0] = 1
                    func.monomios.push(mons1[wake])
                    } }
                perm = true
                for (sept in mons2) { // *mons2 = [2,4], *mons1[0] = 2
                    if (func.monomios.indexOf(mons2[sept]) != -1) { //*[0,1,2].indexOf(2) != -1
                       perm = false 
                    }}
                if (perm == true) {
                    func.position.push(pos2) // pos2 = quad
                    for (wake in mons2) { // *mons1[0] = 1
                    func.monomios.push(mons2[wake])
                    }}}
            }else{ // miss_2[quad].aparicoes.indexOf(1) == -1 || compar.indexOf(varib2[0]) != -1
                    compar.splice(compar.length - 1,1)
                } }}}}}