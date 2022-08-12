       fat1_2 = FATORAR(FATORE(naonao_2),false)
       fat2_2 = FATORAR(FATORE(tobreak_2),false)
       console.log(fat1_2,fat2_2)
     
       daprafat1_2 = false
       
       if (fat1_2[1] == 1 && fat1_2[2] == 0) { // IF PANS EQUALS TO 1 AND TODOSOSNUMEROS EQUALS TO ZERO(WHICH MEANS THERE IS NO MONOMIO LEFT)
       naonao_2 = fat1_2[0]
       daprafat1_2 = true
       }
       if (fat1_2[5] == 1) {
        naonao_2 = fat1_2[0]
        daprafat1_2 = true
        console.log('DaPRAFATTTT',daprafat1_2)
       }

       daprafat2_2 = false
       if (fat2_2[1] == 1 && fat2_2[2] == 0) {
       tobreak_2 = fat1_2[0]
       daprafat2_2 = true
       }
       if (fat2_2[5] == 1) {
        tobreak_2 = fat1_2[0]
        daprafat2_2 = true
       }