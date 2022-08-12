
       fat1 = FATORAR(FATORE(naonao_2),false)
       fat2 = FATORAR(FATORE(tobreak_2),false)
       
       daprafat1 = false
       
       console.log('na',naonao_2,'to',tobreak_2)
       console.log(fat1,'||',fat2)
       if (fat1[1] == 1 && fat1[2] == 0) { // IF PANS EQUALS TO 1 AND TODOSOSNUMEROS EQUALS TO ZERO(WHICH MEANS THERE IS NO MONOMIO LEFT)
       naonao_2 = fat1[0]
       daprafat1 = true
       }
       if (fat1[5] == 1) {
        deprafat1 = true
        console.log('DEPRAFATTTT',deprafat1)
       }
       
       daprafat2 = false
       
       if (fat2[1] == 1 && fat2[2] == 0) {
       daprafat2 = true
       }
       if (fat2[5] == 1) {
        deprafat2 = true
       }

       console.log(daprafat1, daprafat2)
       if (edge_2.length > 1) {
        if (daprafat1 == false && daprafat2 == false) { // OS DOIS NÃO DÃO PARA FATORAR
        concatenar_2 += `(${naonao_2})(${tobreak_2})`;
       }else if(daprafat1 == true && daprafat2 == true){ // OS DOIS DÃO PARA FATORAR
          concatenar_2 += `${naonao_2}${tobreak_2}`;
        }else if(daprafat1 == true && daprafat2 == false) { // SOMENTE O PRIMEIRO DÁ PARA FATORAR
          concatenar_2 += `${naonao_2}(${tobreak_2})`;
        }else{ // SOMENTE O SEGUNDO DÁ PARA FATORAR
          concatenar_2 += `(${naonao_2})${tobreak_2}`;
        }
       } else {
        if (daprafat2 == false) { // SE O SEGUNDO NÃO DER PARA FATORAR
        concatenar_2 += `${naonao_2}(${tobreak_2})`;
        }else{ // SE O SEGUNDO DER PARA FATORAR
          concatenar_2 += `${naonao_2}${tobreak_2}`;
        }
       }
