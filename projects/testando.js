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

   for (eep in miss_2) {
    varib = []
    for (kel in miss_2[eep].aparicoes) {
        pos = miss_2[eep].aparicoes[kel]
        varib.push(scarecrow_2[pos].positions[scarecrow_2[pos].divididos.indexOf(miss_2[eep].dividido)])
    }
      for (quad in miss_2) {
        if (quad != eep) {
            compar = []
          varib2 = []
          for (kel in miss_2[quad].aparicoes) {
            pos = miss_2[quad].aparicoes[kel]
            varib2.push(scarecrow_2[pos].positions[scarecrow_2[pos].divididos.indexOf(miss_2[quad].dividido)])
        }
          repeated = [];
          repwri = "";
          for (vespa in miss_2[eep].aparicoes) {
            if (compar.indexOf(varib[vespa]) == -1) {
            compar.push(varib[vespa])

            if (miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa]) != -1 && compar.indexOf(varib2[miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa])]) == -1) {
              compar.push(varib2[miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa])])
                
                repeated.push(miss_2[eep].aparicoes[vespa]);
              repwri += "," + miss_2[eep].aparicoes[vespa];
              //console.log('COMPARAR:',compar,repwri)

              mons1 = []

              pos1 = eep
              pi = 0
              for (photo = 0; photo < Number(repwri.length)/2;photo+=1) {
                  //console.log(pi)
                  mons1.push(compar[pi])
                  pi+= 2
              } 
              //console.log('mons1',mons1)

              pos2 = quad
              //console.log('monomios:')

              mons2 = []
              pi = 1
              for (photo = 0; photo < Number(repwri.length)/2;photo+=1) {
                  //console.log(pi)
                  mons2.push(compar[pi])
                  pi+= 2
              } 

              if (roller_2.find(function (roller_2) { return roller_2.rept == repwri;}) == undefined) {
                   roller_2.push({
                  rept: repwri,
                  opl: [...repeated],
                  position: [eep, quad],
                  monomios: [...compar]
                });
              }else{
                func = roller_2.find(function (roller_2) { return roller_2.rept == repwri;})
                perm = true
                for (sept in mons1) {
                    if (func.monomios.indexOf(mons1[sept]) != -1) {
                       perm = false 
                    }}

                if (perm == true) {
                    func.position.push(pos1)
                    for (wake in mons1) {
                    func.monomios.push(mons1[wake])
                    } }

                perm = true
                for (sept in mons2) {
                    if (func.monomios.indexOf(mons2[sept]) != -1) {
                       perm = false 
                    }}
                    
                if (perm == true) {
                    func.position.push(pos2)
                    for (wake in mons2) {
                    func.monomios.push(mons2[wake])
                    }}}
            }else{
                    compar.splice(compar.length - 1,1)
                   //console.log(compar)
                }
             }}}}}