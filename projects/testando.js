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