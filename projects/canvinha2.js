for (posibin in realposibsx) {
    // loop = false
    //console.log(realposibsx[posibin])
     ra = realposibsx[posibin].a
     rb = realposibsx[posibin].b
     //console.log(pokebolas[ra].color + ' com ' + pokebolas[rb].color)
     //console.log('velocidades:')
     if (pokebolas[ra].velx > 0) {
         velx1s = 'positivo'
     }else{
         velx1s = 'negativo'
     }
     if (pokebolas[ra].vely > 0) {
         vely1s = 'positivo'
     }else{
         vely1s = 'negativo'
     }
     if (pokebolas[rb].velx > 0) {
         velx2s = 'positivo'
     }else{
         velx2s = 'negativo'
     }
     if (pokebolas[rb].vely > 0) {
         vely2s = 'positivo'
     }else{
         vely2s = 'negativo'
     }
     //console.log(`${pokebolas[ra].color}.velx: ${velx1s}`)
     //console.log(`${pokebolas[ra].color}.vely: ${vely1s}`)
     //console.log(`${pokebolas[rb].color}.velx: ${velx2s}`)
     //console.log(`${pokebolas[rb].color}.vely: ${vely2s}`)
     //console.log(`as coordenadas iniciais das bolas são:`)
     //console.log(pokebolas[ra].fstx)
     //console.log(pokebolas[ra].fsty)
     //console.log(pokebolas[rb].fstx)
     //console.log(pokebolas[rb].fsty)
     //console.log(`as coordenadas da colisão normal entre as bolas são:`)
     //console.log(realposibsx[posibin].x1)
     //console.log(realposibsx[posibin].y1)
     //console.log(realposibsx[posibin].x2)
     //console.log(realposibsx[posibin].y2)
     //console.log('se as pokebolas não colidissem suas posições seriam:')
     //console.log(Number(pokebolas[ra].fstx) + Number(pokebolas[ra].velx))
     //console.log(Number(pokebolas[ra].fsty) + Number(pokebolas[ra].vely))
     //console.log(Number(pokebolas[rb].fstx) + Number(pokebolas[rb].velx))
     //console.log(Number(pokebolas[rb].fsty) + Number(pokebolas[rb].vely))

     if (pokebolas[ra].velx > 0 && pokebolas[ra].fstx < realposibsx[posibin].x1 || pokebolas[ra].velx < 0 && pokebolas[ra].fstx > realposibsx[posibin].x1) {
         //console.log('tá certo')
     }
     if (pokebolas[ra].vely > 0 && pokebolas[ra].fsty < realposibsx[posibin].y1 || pokebolas[ra].vely < 0 && pokebolas[ra].fsty > realposibsx[posibin].y1) {
         //console.log('tá certo')
     }
     if (pokebolas[rb].velx > 0 && pokebolas[rb].fstx < realposibsx[posibin].x2 || pokebolas[rb].velx < 0 && pokebolas[rb].fstx > realposibsx[posibin].x2) {
         //console.log('tá certo')
     }
     if (pokebolas[rb].vely > 0 && pokebolas[rb].fsty < realposibsx[posibin].y2 || pokebolas[rb].vely < 0 && pokebolas[rb].fsty > realposibsx[posibin].y2) {
     //console.log('tá certo')
     }
    if (realposibsx[posibin].colide == true) {
    if (pokebolas[ra].x == pokebolas[ra].fstx && pokebolas[rb].x == pokebolas[rb].fstx) {
     
     //console.log(`${pokebolas[ra].color} sem r e ${pokebolas[rb].color} sem r`)
        // POKEBOLA[0] SEM R E POKEBOLA[1] SEM R
       pokebolas[ra].x = realposibsx[posibin].x1
       pokebolas[ra].y = realposibsx[posibin].y1
       pokebolas[rb].x = realposibsx[posibin].x2
       pokebolas[rb].y = realposibsx[posibin].y2

       redoCollisions()
     }else if(pokebolas[ra].x != pokebolas[ra].fstx && pokebolas[rb].x == pokebolas[rb].fstx) {
         
         //console.log(`${pokebolas[ra].color} com r e ${pokebolas[rb].color} sem r`)
       // POKEBOLA[0] COM R E POKEBOLA[1] SEM R
         //console.log(`fazendo a colisão: x= ${realposibsx[posibin].x1}, y= ${realposibsx[posibin].y1}`)
         //console.log(`coordenadas atuais: x= ${pokebolas[ra].x}, y= ${pokebolas[ra].y}`)
         if (pokebolas[ra].velx > 0 && pokebolas[ra].x > realposibsx[posibin].x1 || pokebolas[ra].velx < 0 && pokebolas[ra].x < realposibsx[posibin].x1) {
             // COLISÃO ATUAL VENCE => realposibsx[posibin].x1
             //console.log('colisão atual vence',pokebolas[ra].color,pokebolas[rb].color)
             // POKEBOLA[0] MUDA DE COORDENADAS (PARA COLISÃO ATUAL)
             // POKEBOLA[1] MUDA DE COORDENADAS (PARA COLISÃO ATUAL)
             
             pokebolas[ra].x = realposibsx[posibin].x1
             pokebolas[ra].y = realposibsx[posibin].y1
             pokebolas[rb].x = realposibsx[posibin].x2
             pokebolas[rb].y = realposibsx[posibin].y2
             
             // REFAZER AS ANTERIORES
             redoCollisions()
         }else{
             // COLISÃO ANTERIOR VENCE => pokebola[0].x
             //console.log('colisão anterior vence')
             // POKEBOLA[0] CONTINUA COM AS MESMA COORDENADAS
             // POKEBOLA[1] PRECISA READAPTAR SUAS COORDENADAS DE ACORDO COM A POKEBOLA[0]
             re = detectCollision(ra,rb,pokebolas[ra].x,pokebolas[ra].y,pokebolas[rb].fstx,pokebolas[rb].fsty,false,true)
             // as coordenadas da pokebola[0] se mantêm
             // pokebolas[rb].fstx = pokebolas[rb].x
             //console.log(re)
             if (re != undefined) {
                 //console.log(`a pokebola ${pokebolas[rb].color} deve ficar com as seguintes coordenadas: x= ${re.x2}, y= ${re.y2}`)
                 pokebolas[rb].x = re.x2
                 pokebolas[rb].y = re.y2
             }
         }
     }else if (pokebolas[ra].x == pokebolas[ra].fstx && pokebolas[rb].x != pokebolas[rb].fstx) {
         // POKEBOLA[0] COM R E POKEBOLA[1] SEM R
         //console.log(`${pokebolas[rb].color} com r e ${pokebolas[ra].color} sem r`)
         
         //console.log(`${pokebolas[rb].color} com r e ${pokebolas[ra].color} sem r`)
       // POKEBOLA[0] COM R E POKEBOLA[1] SEM R
         //console.log(`fazendo a colisão: x= ${realposibsx[posibin].x2}, y= ${realposibsx[posibin].y2}`)
         //console.log(`coordenadas atuais: x= ${pokebolas[rb].x}, y= ${pokebolas[rb].y}`)
         if (pokebolas[rb].velx > 0 && pokebolas[rb].x > realposibsx[posibin].x2 || pokebolas[rb].velx < 0 && pokebolas[rb].x < realposibsx[posibin].x2) {
             // COLISÃO ATUAL VENCE => realposibsx[posibin].x2
             //console.log('colisão atual vence',pokebolas[rb].color,pokebolas[ra].color)
             // POKEBOLA[0] MUDA DE COORDENADAS (PARA COLISÃO ATUAL)
             // POKEBOLA[1] MUDA DE COORDENADAS (PARA COLISÃO ATUAL)
             
             pokebolas[rb].x = realposibsx[posibin].x2
             pokebolas[rb].y = realposibsx[posibin].y2
             pokebolas[ra].x = realposibsx[posibin].x1
             pokebolas[ra].y = realposibsx[posibin].y1
             
             // REFAZER AS ANTERIORES
             redoCollisions() 
         }else{
             // COLISÃO ANTERIOR VENCE => pokebola[0].x
             //console.log('colisão anterior vence')
             // POKEBOLA[0] CONTINUA COM AS MESMA COORDENADAS
             // POKEBOLA[1] PRECISA READAPTAR SUAS COORDENADAS DE ACORDO COM A POKEBOLA[0]
             re = detectCollision(rb,ra,pokebolas[rb].x,pokebolas[rb].y,pokebolas[ra].fstx,pokebolas[ra].fsty,false,true)
             // as coordenadas da pokebola[0] se mantêm
             // pokebolas[ra].fstx = pokebolas[ra].x
             //console.log(re)
             if (re != undefined) {
                 //console.log(`a pokebola ${pokebolas[ra].color} deve ficar com as seguintes coordenadas: x= ${re.x1}, y= ${re.y1}`)
                 pokebolas[ra].x = re.x2
                 pokebolas[ra].y = re.y2
             }
         }

     }else if (pokebolas[ra].x != pokebolas[ra].fstx && pokebolas[rb].x != pokebolas[rb].fstx){
         //console.log(`${pokebolas[rb].color} com r e ${pokebolas[ra].color} com r`)
         if (pokebolas[ra].velx > 0 && pokebolas[ra].x >= realposibsx[posibin].x1 || pokebolas[ra].velx < 0 && pokebolas[ra].x < realposibsx[posibin].x1) {
             atual1 = true
         }else{
             atual1 = false
         }
         if (pokebolas[rb].velx > 0 && pokebolas[rb].x >= realposibsx[posibin].x2 || pokebolas[rb].velx < 0 && pokebolas[rb].x < realposibsx[posibin].x2) {
             atual2 = true
         }else{
             atual2 = false
         }
         if (atual1 == true && atual2 == true) {
             //console.log('pode mudar para colisão atual')
             pokebolas[ra].x = realposibsx[posibin].x1
             pokebolas[ra].y = realposibsx[posibin].y1
             pokebolas[rb].x = realposibsx[posibin].x2
             pokebolas[rb].y = realposibsx[posibin].y2
             //console.log('precisa refazer as colisões anteriores')
             
            redoCollisions() 
         }else{
             //console.log('contiuar como estava')
         }
     }
 }else{
     //console.log(`${pokebolas[ra].color} e ${pokebolas[rb].color} n se colidem`)
     //console.log('no entanto, deve-se checar a pokebola com menor x, nesse caso,',pokebolas[ra].color)
     re = detectCollision(ra,rb,pokebolas[ra].x,pokebolas[ra].y,pokebolas[rb].fstx,pokebolas[rb].fsty,false,true)
     //console.log(re)
     if (re != undefined) {
         if (pokebolas[rb].x == pokebolas[rb].fstx) {
         if (pokebolas[rb].velx > 0 && realposibsx[posibin].x2 > re.x2 || pokebolas[rb].velx < 0 && realposibsx[posibin].x2 < re.x2) {
             pokebolas[rb].x = re.x2
             pokebolas[rb].y = re.y2
         }
     }else{
         if (pokebolas[rb].velx > 0 && pokebolas[rb].x > re.x2 || pokebolas[rb].velx < 0 && pokebolas[rb].x < re.x2) {
             pokebolas[rb].x = re.x2
             pokebolas[rb].y = re.y2
         }
     }
     }
 }
 }

 