//CASO VC QUISER TIRAR DEPOIS, TÁ AQUI:
fat1 = FATORAR(FATORE(naonao_2),false)
fat2 = FATORAR(FATORE(tobreak_2),false)

daprafat1 = false

if (fat1[1] == 1 && fat1[2] == 0) { // IF PANS EQUALS TO 1 AND TODOSOSNUMEROS EQUALS TO ZERO(WHICH MEANS THERE IS NO MONOMIO LEFT)
naonao_2 = fat1[0]
daprafat1 = true
}

daprafat2 = false

if (fat2[1] == 1 && fat2[2] == 0) {
daprafat2 = true
}

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

    fat1 = FATORAR2(FATORE(naonao))
    fat2 = FATORAR2(FATORE(tobreak))

    daprafat1 = false
    
    if (fat1[1] == 1 && fat1[2] == 0) { // IF PANS EQUALS TO 1 AND TODOSOSNUMEROS EQUALS TO ZERO(WHICH MEANS THERE IS NO MONOMIO LEFT)
    naonao = fat1[0]
    daprafat1 = true
    }
    
    daprafat2 = false
    
    if (fat2[1] == 1 && fat2[2] == 0) {
    daprafat2 = true
    }

    console.log('edge',edge)
    
    if (edge.length > 1) {
     if (daprafat1 == false && daprafat2 == false) { // OS DOIS NÃO DÃO PARA FATORAR
     concatenar += `(${naonao})(${tobreak})`;
    }else if(daprafat1 == true && daprafat2 == true){ // OS DOIS DÃO PARA FATORAR
       concatenar += `${naonao}${tobreak}`;
     }else if(daprafat1 == true && daprafat2 == false) { // SOMENTE O PRIMEIRO DÁ PARA FATORAR
       concatenar += `${naonao}(${tobreak})`;
     }else{ // SOMENTE O SEGUNDO DÁ PARA FATORAR
       concatenar += `(${naonao})${tobreak}`;
     }
   } else {
     if (daprafat2 == false) { // SE O SEGUNDO NÃO DER PARA FATORAR
     concatenar += `${naonao}(${tobreak})`;
     }else{ // SE O SEGUNDO DER PARA FATORAR
       concatenar += `${naonao}${tobreak}`;
     }
    }
