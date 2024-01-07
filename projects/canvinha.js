for (posibin in realposibsx) {
    // loop = false
   console.log(realposibsx[posibin])
    ra = realposibsx[posibin].a
    rb = realposibsx[posibin].b
    console.log(pokebolas[ra].color + ' com ' + pokebolas[rb].color)
    console.log('velocidades:')
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
    console.log(`${pokebolas[ra].color}.velx: ${velx1s}`)
    console.log(`${pokebolas[ra].color}.vely: ${vely1s}`)
    console.log(`${pokebolas[rb].color}.velx: ${velx2s}`)
    console.log(`${pokebolas[rb].color}.vely: ${vely2s}`)
    console.log(`as coordenadas iniciais das bolas são:`)
    console.log(pokebolas[ra].fstx)
    console.log(pokebolas[ra].fsty)
    console.log(pokebolas[rb].fstx)
    console.log(pokebolas[rb].fsty)
    console.log(`as coordenadas da colisão normal entre as bolas são:`)
    console.log(realposibsx[posibin].x1)
    console.log(realposibsx[posibin].y1)
    console.log(realposibsx[posibin].x2)
    console.log(realposibsx[posibin].y2)
    console.log('se as pokebolas não colidissem suas posições seriam:')
    console.log(Number(pokebolas[ra].fstx) + Number(pokebolas[ra].velx))
    console.log(Number(pokebolas[ra].fsty) + Number(pokebolas[ra].vely))
    console.log(Number(pokebolas[rb].fstx) + Number(pokebolas[rb].velx))
    console.log(Number(pokebolas[rb].fsty) + Number(pokebolas[rb].vely))

    if (pokebolas[ra].velx > 0 && pokebolas[ra].fstx < realposibsx[posibin].x1 || pokebolas[ra].velx < 0 && pokebolas[ra].fstx > realposibsx[posibin].x1) {
        console.log('tá certo')
    }
    if (pokebolas[ra].vely > 0 && pokebolas[ra].fsty < realposibsx[posibin].y1 || pokebolas[ra].vely < 0 && pokebolas[ra].fsty > realposibsx[posibin].y1) {
         //console.log('tá certo')
     }
     if (pokebolas[rb].velx > 0 && pokebolas[rb].fstx < realposibsx[posibin].x2 || pokebolas[rb].velx < 0 && pokebolas[rb].fstx > realposibsx[posibin].x2) {
        console.log('tá certo')
    }
    if (pokebolas[rb].vely > 0 && pokebolas[rb].fsty < realposibsx[posibin].y2 || pokebolas[rb].vely < 0 && pokebolas[rb].fsty > realposibsx[posibin].y2) {
    console.log('tá certo')
    }
   if (realposibsx[posibin].colide == true) {
   if (pokebolas[ra].x == pokebolas[ra].fstx && pokebolas[rb].x == pokebolas[rb].fstx) {
    //loop = false
    console.log(`${pokebolas[ra].color} sem r e ${pokebolas[rb].color} sem r`)
       // POKEBOLA[0] SEM R E POKEBOLA[1] SEM R
      pokebolas[ra].x = realposibsx[posibin].x1
      pokebolas[ra].y = realposibsx[posibin].y1
      pokebolas[rb].x = realposibsx[posibin].x2
      pokebolas[rb].y = realposibsx[posibin].y2

      redoCollisions()
    }else if(pokebolas[ra].x != pokebolas[ra].fstx && pokebolas[rb].x == pokebolas[rb].fstx) {
        //loop = false
        console.log(`${pokebolas[ra].color} com r e ${pokebolas[rb].color} sem r`)
      // POKEBOLA[0] COM R E POKEBOLA[1] SEM R
        console.log(`fazendo a colisão: x= ${realposibsx[posibin].x1}, y= ${realposibsx[posibin].y1}`)
        console.log(`coordenadas atuais: x= ${pokebolas[ra].x}, y= ${pokebolas[ra].y}`)
        if (pokebolas[ra].velx > 0 && pokebolas[ra].x > realposibsx[posibin].x1 || pokebolas[ra].velx < 0 && pokebolas[ra].x < realposibsx[posibin].x1) {
            // COLISÃO ATUAL VENCE => realposibsx[posibin].x1
            console.log('colisão atual vence',pokebolas[ra].color,pokebolas[rb].color)
            // POKEBOLA[0] MUDA DE COORDENADAS (PARA COLISÃO ATUAL)
            // POKEBOLA[1] MUDA DE COORDENADAS (PARA COLISÃO ATUAL)
            
            pokebolas[ra].x = realposibsx[posibin].x1
            pokebolas[ra].y = realposibsx[posibin].y1
            console.log(pokebolas[ra].color,pokebolas[ra].x,pokebolas[ra].y)
            pokebolas[rb].x = realposibsx[posibin].x2
            pokebolas[rb].y = realposibsx[posibin].y2
            
            // REFAZER AS ANTERIORES
            redoCollisions()
        }else{
            // COLISÃO ANTERIOR VENCE => pokebola[0].x
            console.log('colisão anterior vence')
            // POKEBOLA[0] CONTINUA COM AS MESMA COORDENADAS
            // POKEBOLA[1] PRECISA READAPTAR SUAS COORDENADAS DE ACORDO COM A POKEBOLA[0]
            re = detectCollision(ra,rb,pokebolas[ra].x,pokebolas[ra].y,pokebolas[rb].fstx,pokebolas[rb].fsty,false,true)
            // as coordenadas da pokebola[0] se mantêm
            // pokebolas[rb].fstx = pokebolas[rb].x
            console.log(re)
            if (re != undefined) {
                console.log(`a pokebola ${pokebolas[rb].color} deve ficar com as seguintes coordenadas: x= ${re.x2}, y= ${re.y2}`)
                pokebolas[rb].x = re.x2
                pokebolas[rb].y = re.y2
            }
        }
    }else if (pokebolas[ra].x == pokebolas[ra].fstx && pokebolas[rb].x != pokebolas[rb].fstx) {
        //loop = false
        // POKEBOLA[0] COM R E POKEBOLA[1] SEM R
        console.log(`${pokebolas[rb].color} com r e ${pokebolas[ra].color} sem r`)
        
        console.log(`${pokebolas[rb].color} com r e ${pokebolas[ra].color} sem r`)
      // POKEBOLA[0] COM R E POKEBOLA[1] SEM R
        console.log(`fazendo a colisão: x= ${realposibsx[posibin].x2}, y= ${realposibsx[posibin].y2}`)
        console.log(`coordenadas atuais: x= ${pokebolas[rb].x}, y= ${pokebolas[rb].y}`)
        if (pokebolas[rb].velx > 0 && pokebolas[rb].x > realposibsx[posibin].x2 || pokebolas[rb].velx < 0 && pokebolas[rb].x < realposibsx[posibin].x2) {
            // COLISÃO ATUAL VENCE => realposibsx[posibin].x2
            console.log('colisão atual vence',pokebolas[rb].color,pokebolas[ra].color)
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
            console.log('colisão anterior vence')
            // POKEBOLA[0] CONTINUA COM AS MESMA COORDENADAS
            // POKEBOLA[1] PRECISA READAPTAR SUAS COORDENADAS DE ACORDO COM A POKEBOLA[0]
            re = detectCollision(rb,ra,pokebolas[rb].x,pokebolas[rb].y,pokebolas[ra].fstx,pokebolas[ra].fsty,false,true)
            // as coordenadas da pokebola[0] se mantêm
            // pokebolas[ra].fstx = pokebolas[ra].x
            console.log(re)
            if (re != undefined) {
                console.log(`a pokebola ${pokebolas[ra].color} deve ficar com as seguintes coordenadas: x= ${re.x1}, y= ${re.y1}`)
                pokebolas[ra].x = re.x2
                pokebolas[ra].y = re.y2
            }
        }

    }else if (pokebolas[ra].x != pokebolas[ra].fstx && pokebolas[rb].x != pokebolas[rb].fstx){
        //loop = false
        console.log(`${pokebolas[rb].color} com r e ${pokebolas[ra].color} com r`)
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
            console.log('pode mudar para colisão atual')
            pokebolas[ra].x = realposibsx[posibin].x1
            pokebolas[ra].y = realposibsx[posibin].y1
            pokebolas[rb].x = realposibsx[posibin].x2
            pokebolas[rb].y = realposibsx[posibin].y2
            console.log('precisa refazer as colisões anteriores')
            
           redoCollisions() 
        }else{
            console.log('contiuar como estava')
        }
    }
}else{
    console.log(`${pokebolas[ra].color} e ${pokebolas[rb].color} n se colidem`)
    console.log('no entanto, deve-se checar a pokebola com menor x, nesse caso,',pokebolas[ra].color)
    re = detectCollision(ra,rb,pokebolas[ra].x,pokebolas[ra].y,pokebolas[rb].fstx,pokebolas[rb].fsty,false,true)
    console.log(re)
    if (re != undefined) {
        if (pokebolas[rb].x == pokebolas[rb].fstx) {
        if (pokebolas[rb].velx > 0 && realposibsx[posibin].x2 > re.x2 || pokebolas[rb].velx < 0 && realposibsx[posibin].x2 < re.x2) {
            pokebolas[rb].x = re.x2
            pokebolas[rb].y = re.y2
            //loop = false
        }
    }else{
        if (pokebolas[rb].velx > 0 && pokebolas[rb].x > re.x2 || pokebolas[rb].velx < 0 && pokebolas[rb].x < re.x2) {
            pokebolas[rb].x = re.x2
            pokebolas[rb].y = re.y2
            //loop = false
        }
    }
    }
}

/*
for (p in posibs) {
    console.log(coll)
    console.log('adadwdwdwwdwd')
// ! a verificação de colisão deve ser feita sempre com os valores iniciais das posições x e y, isso porque se os dados posteriores estiverem incorretos, haverá interferência nessa etapa
// primeiro passo: ver se irá ocorrer a colisão entre as pokebolas(result != undefined) - check
// segundo passo: ver se, ocorrendo a colisão, alguma pokebola já tem r
// terceiro passo: se nenhuma pokebola tiver r, mudar as suas coornedas para os valores no result/se alguma pokebola já tiver r, realizar o próximo passo - check
// quarto passo: para cada pokebola que tiver r, realizar o procedimento de comparação entre as coordenadas atuais(da colisão passada) com as coordenadas da colisão atual, baseadas nas coordenadas iniciais do sistema:                                             range
// se pokebola[number].velx > 0: considerar a menor posição no eixo x      0 - 300 →
// se pokebola[number].velx < 0: considerar a maior posição no eixo x      0 - 300 →
// se pokebola[number].vely < 0: considerar a maior posição no eixo y      0 - 150 ↑
// se pokebola[number].vely > 0: considerar a menor posição no eixo y      0 - 150 ↑
   
    pri = pokebolas[posibs[p].a]
    seg = pokebolas[posibs[p].b]
    prir = `${pokebolas[posibs[p].a].r}`
    segr = `${pokebolas[posibs[p].b].r}`
    console.log(pokebolas[posibs[p].a].r, pokebolas[posibs[p].b].r)
    result = detectCollision(posibs[p].a,posibs[p].b,Number(pri.fstx),Number(pri.fsty),Number(seg.fstx),Number(seg.fsty))
    console.log(result)
    
    if (result != undefined) {
        console.log('OPA, colisão',prir,segr)
        console.log(prir == 'undefined')
        if (prir === '' || prir == 'undefined' && segr === '' || segr == 'undefined') {
          console.log('pode adicionar')
          pri.x = result.x1
          pri.y = result.y1
          seg.x = result.x2
          seg.y = result.y2
        }else{
            if (prir != 'undefined' && prir != '') {
                //comparar as coordenadas da colisão passada com as da colisão atual
                if (pri.velx > 0) {                    
                    if (result.x1 < pri.x) {       
                    // (-o-)=>  (-o-)    (-o-)
                    // fstx   result.x1  pri.x
                    }else{                                                
                    // (-o-)=>  (-o-)    (-o-)
                    // fstx     pri.x  result.x1
                    }
                }else{
                    if (result.x1 > pri.x) {    
                    // (-o-)    (-o-)   <=(-o-)
                    // pri.x  result.x1   fstx
                    }else{  
                   // (-o-)    (-o-)   <=(-o-)
                 //result.x1   pri.x     fstx
                    }
                }
                if (pri.vely < 0) {
                    if (result.y1 > pri.y) {  
                    //                                (-o-) pri.y
                    //                                
                    //                                (-o-) result.y1
                    //                                
                    //                                  ↑
                    //                                (-o-) fstx
                }else{
                    //                                (-o-) result.y1
                    //                                
                    //                                (-o-) pri.y
                    //                                
                    //                                  ↑
                    //                                (-o-) fstx
                }
            }else{
                if (result.y1 < pri.y) {
                   //                                 (-o-) fstx
                   //                                   ↓ 
                   // 
                   //                                 (-o-) result.y1
                   //
                   //                                 (-o-) pri.y
            }else{
                   //                                 (-o-) fstx
                   //                                   ↓ 
                   // 
                   //                                 (-o-) pri.y
                   //
                   //                                 (-o-) result.y1
           
    */
    
if (0 == 1) {
for (a in pokebolas) {//for (a = 0; a < 1;a++) {//for (a in pokebolas) {
//console.log('a',a)
cx = pokebolas[a].x
cy = pokebolas[a].y
velx1 = pokebolas[a].velx
vely1 = pokebolas[a].vely

for (b = 0; b < pokebolas.length; b++) {
    if (b != a) {
        //console.log('b',b)
cx2 = pokebolas[b].x
cy2 = pokebolas[b].y
velx2 = pokebolas[b].velx
vely2 = pokebolas[b].vely

diffx = cx - cx2
diffy = cy - cy2
if (diffx < 0) {
    diffx = -diffx
}
if (diffy < 0) {
    diffy = -diffy
}


if (pokebolas[a].x > 300 - pokebolas[a].width && pokebolas[a].velx > 0 || pokebolas[a].x < pokebolas[a].width && pokebolas[a].velx < 0) {
    velx1 = -pokebolas[a].velx
    pokebolas[a].velx = -pokebolas[a].velx
}
if (pokebolas[a].y > 150 - pokebolas[a].width && pokebolas[a].vely > 0|| pokebolas[a].y < pokebolas[a].width && pokebolas[a].vely < 0) {
    vely1 = -pokebolas[a].vely
    pokebolas[a].vely = -pokebolas[a].vely
}
if (pokebolas[b].x > 300 - pokebolas[b].width && pokebolas[b].velx > 0 || pokebolas[b].x < pokebolas[b].width && pokebolas[b].velx < 0 ) {
    velx2 = -pokebolas[b].velx
    pokebolas[b].velx = -pokebolas[b].velx
}
if (pokebolas[b].y > 150 - pokebolas[b].width && pokebolas[b].vely > 0|| pokebolas[b].y < pokebolas[b].width && pokebolas[b].vely < 0) {
    vely2 = -pokebolas[b].vely
    pokebolas[b].vely = -pokebolas[b].vely
}


if (Math.round(diffx**2 + diffy**2) < (pokebolas[a].width + pokebolas[b].width)**2) {
    console.log('PAROU!')
    console.log(`a distância entre as pokebolas é de ${diffx**2 + diffy**2}`)
    window.alert('PAROU')
    //loop = false
}

velx1 = pokebolas[a].velx
vely1 = pokebolas[a].vely
velx2 = pokebolas[b].velx
vely2 = pokebolas[b].vely
/*
if (pokebolas[a].r != '' && pokebolas[a].r != undefined) {
    newcx = cx
    newcy = cy
}else{
    newcx = cx + velx1
    newcy = cy + vely1
}
if (pokebolas[b].r != '' && pokebolas[b].r != undefined) {
    newcx2 = cx2
    newcy2 = cy2
}else{
    newcx2 = cx2 + velx2
    newcy2 = cy2 + vely2
}
*/
newcx = cx + velx1
newcy = cy + vely1
newcx2 = cx2 + velx2
newcy2 = cy2 + vely2

newdiffx = newcx - newcx2
newdiffy = newcy - newcy2
if (newdiffx**2 + newdiffy**2 <= 676 || diffx**2 + diffy**2 <= 676) {//if (diffx**2 + diffy**2 < 1000 || newdiffx**2 + newdiffy**2 < 1000) {
    console.log('')
    //console.log('NOW',diffx**2 + diffy**2)
    //console.log('NEXT',newdiffx**2 + newdiffy**2)
    }

// código para antecipar a colisão, impedindo que a pokebola passe por cima da outra
if (Math.round(newdiffx**2 + newdiffy**2) < (pokebolas[a].width + pokebolas[b].width)**2) {
    console.log('')
    console.log('round',coll)
    console.log('no, you wont')
    console.log(`bola ${pokebolas[a].color} com bola ${pokebolas[b].color}`)
    //loop = false
    dx = cx - cx2
    dy = cy,cy2

    //determinar a posição da bola para saber tipo de colisão(frontal ou não frontal)
    if (cy < cy2) {
        //console.log(`bola ${a} é a de cima`)
        upball = Number(a)
        downball = Number(b)
    }else{
        //console.log(`bola ${b} é a de cima`)
        upball = Number(b)
        downball = Number(a)
    }

    if (cx > cx2) {
        //console.log(`bola ${a} está na direita`)
        rightball = Number(a)
        leftball = Number(b)
    }else{
        //console.log(`bola ${b} está na direita`)
        rightball = Number(b)
        leftball = Number(a)
    }
    /*
    console.log('leftball',leftball,'rightball',rightball,'upball',upball,'downball',downball)
    console.log('velx1',velx1,'vely1',vely1)
    console.log('velx2',velx2,'vely2',vely2)
    */
    xvelx1 = ''
    xvely1 = ''
    xvelx2 = ''
    xvely2 = ''
    if (rightball == b && velx2 > 0 || leftball == b && velx2 < 0) {
        console.log(`a bola ${pokebolas[b].color} n irá bater de frente horizontalmente`)
    }else{
        xvelx2 = 'x'
    }
    if (rightball == a && velx1 > 0 || leftball == a && velx1 < 0) {
        console.log(`a bola ${pokebolas[a].color} n irá bater de frente horizontalmente`)
    }else{
        xvelx1 = 'x'
    }
    if (upball == b && vely2 < 0 || downball == b && vely2 > 0) {
        console.log(`a bola ${pokebolas[b].color} n irá bater de frente verticalmente`)
    }else{
        xvely2 = 'x'
    }
    if (upball == a && vely1 < 0 || downball == a && vely1 > 0) {
        console.log(`a bola ${pokebolas[a].color} n irá bater de frente verticalmente`)
    }else{
        xvely1 = 'x'
    }
    
    /*
    console.log('xvelx1:',xvelx1)
    console.log('xvely1:',xvely1)
    console.log('xvelx2:',xvelx2)
    */
    //console.log('xvely2:',xvely2)
    //console.log('cx:',cx,'cx2:',cx2)
    //console.log('cy:',cy,'cy2;',cy2)

    //[(cx + vx) - (cx2 + vx2)]**2 + [(cy + vy) - (cy2 + vy2)]**2
    //[cx - cx2 + vx - vx2]**2 + [cy - cy2 + vy - vy2]**2
    //[life + difvex]**2 + [time + difvey]**2
    //life**2 + 2*life*difvex + difvex**2 + time**2 + 2*time*difvey + difvey**2
    //life**2 + time**2 - 676 + 2(life*difvex + time*difvey) + difvex**2 + difvey**2
    //           (c)                        (b)                       (a)

     //[(cx + vx) - (cx2 + vx2)]**2 + [(cy + vy) - (cy2 + vy2)]**2
    //[cx - cx2 + vx - vx2]**2 + [cy - cy2 + vy - vy2]**2
    //(life + vx - vx2)**2 + (time + vy - vy2)**2
    //(life + vx - vx2)*(life + vx - vx2)
    //life**2 + life*vx(x) - life*vx2(x) + vx*life(x) + vx**2(x^2) - vx*vx2(x^2) -vx2*life(x) - vx2*vx(x^2) + vx2**2(x^2)
    // +
    // time**2 + time*vy - time*vy2 + vy*time + vy**2 - vy*vy2 -vy2*time - vy2*vy + vy2**2
    //x(life*vx - life*vx2 + vx*life - vx2*life) => 2*life(vx - vx2)
    //x^2(vx**2 - vx*vx2 - vx2*vx + vx2**2) => vx**2 + vx2**2 - 2*vx*vx2 => (vx - vx2)**2
    //2*life*vx - 2*life*vx2 + vx**2 + vx2**2 - 2*vx*vx2 + life**2
   //  b ou c       b ou c    a ou c   a ou c  a, b ou c      c
   //2*time*vy - 2*time*vy2 + vy**2 + vy2**2 - 2*vy*vy2 + time**2
   //  b ou c      b ou c    a ou c   a ou c  a, b ou c      c
   /*
   if(pokebolas[b].r !== '' && pokebolas[b].r!= undefined) { 
    velx2 = 0
    vely2 = 0
}*/
    life = cx - cx2
    time = cy - cy2
    difvex = velx1 - velx2
    difvey = vely1 - vely2
    aex = 0
    bex = 0
    cex = life**2 + time**2 - 676
    if (xvelx1 == 'x') {
        bex+= 2*life*velx1
        aex+= velx1**2
    }else{
        cex+= 2*life*velx1
        cex+= velx1**2
    }
    if (xvelx2 == 'x') {
        bex+= -2*life*velx2
        aex+= velx2**2
    }else{
        cex+= -2*life*velx2
        cex+= velx2**2
    }
    if (xvelx1 == 'x' && xvelx2 == '' || xvelx2 == 'x' && xvelx1 == '') {
        bex+= -2*velx1*velx2
    }else if(xvelx1 == 'x' && xvelx2 == 'x') {
        aex+= -2*velx1*velx2
    }else{
        cex+= -2*velx1*velx2
    }

    if (xvely1 == 'x') {
        bex+= 2*time*vely1
        aex+= vely1**2
    }else{
        cex+= 2*time*vely1
        cex+= vely1**2
    }
    if (xvely2 == 'x') {
        bex+= -2*time*vely2
        aex+= vely2**2
    }else{
        cex+= -2*time*vely2
        cex+= vely2**2
    }
    if (xvely1 == 'x' && xvely2 == '' || xvely2 == 'x' && xvely1 == '') {
        bex+= -2*vely1*vely2
    }else if(xvely1 == 'x' && xvely2 == 'x') {
        aex+= -2*vely1*vely2
    }else{
        cex+= -2*vely1*vely2
    }
    delta = bex**2 - 4*aex*cex
    raiz1 = (-bex + delta**(1/2))/(2*aex)
    raiz2 = (-bex - delta**(1/2))/(2*aex)
    /*
    console.log(`aex: ${aex}`)
    console.log(`bex: ${bex}`)
    console.log(`cex: ${cex}`)
    console.log('IN THE LIGHTS YOU MAKE',raiz2)
    
    console.log('x1:',pokebolas[a].x)
    console.log('y1:',pokebolas[a].y)
    console.log('x2:',pokebolas[b].x)
    console.log('y2:',pokebolas[b].y)
    */
    pokebolas[a].fstx = `${pokebolas[a].x}`
    pokebolas[a].fsty = `${pokebolas[a].y}`
    pokebolas[b].fstx = `${pokebolas[b].x}`
    pokebolas[b].fsty = `${pokebolas[b].y}`

    if (xvelx1 == 'x') {
        pokebolas[a].x = cx + velx1*raiz2
    }else{
        pokebolas[a].x = cx + velx1
    }
    if (xvelx2 == 'x') {
        pokebolas[b].x = cx2 + velx2*raiz2
    }else{
        pokebolas[b].x = cx2 + velx2
    }
    if (xvely1 == 'x') {
        pokebolas[a].y = cy + vely1*raiz2
    }else{
        pokebolas[a].y = cy + vely1
    }
    if (xvely2 == 'x') {
        pokebolas[b].y = cy2 + vely2*raiz2
    }else{
        pokebolas[b].y = cy2 + vely2
    }
    /*
    console.log('x1:',pokebolas[a].x)
    console.log('y1:',pokebolas[a].y)
    console.log('x2:',pokebolas[b].x)
    console.log('y2:',pokebolas[b].y)

    console.log('x1:',pokebolas[a].fstx)
    console.log('y1:',pokebolas[a].fsty)
    console.log('x2:',pokebolas[b].fstx)
    console.log('y2:',pokebolas[b].fsty)
    */
    
    
    //console.log('difx:',life)
    //console.log('dify',time)
    //console.log('vx1',velx1)
    //console.log('vy1',vely1)
    //console.log('vx2',velx2)
    //console.log('vy2',vely2)
    
    /*
    aex = difvex**2 + difvey**2
    bex = 2*(life*difvex + time*difvey)
    cex = life**2 + time**2 - 676
    console.log('a',aex)
    console.log('b',bex)
    console.log('c',cex)
    delta = bex**2 - 4*aex*cex
    raiz1 = (-bex + delta**(1/2))/(2*aex)
    raiz2 = (-bex - delta**(1/2))/(2*aex)
    */
    
    
    //console.log('delta',delta)
    //console.log('raiz1',raiz1)
    //console.log('raiz2',raiz2)
    res = (life + velx1*raiz2 - velx2*raiz2)**2 + (time + vely1*raiz2 - vely2*raiz2)**2
    //console.log('conferir:',res)

    
    //raiz2 = 0.001
    
    /*
    pokebolas[a].velx = velx1*raiz2
    pokebolas[a].vely = vely1*raiz2
    pokebolas[b].velx = velx2*raiz2
    pokebolas[b].vely = vely2*raiz2
    */
    /*
   if(pokebolas[a].r !== '' && pokebolas[a].r!= undefined) {
    console.log(`AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApokebolas[${a}] já tem r`)
    if (pokebolas[a].velx > 0) {
        if (pokebolas[a].x > cx + velx1*raiz2) {
            pokebolas[a].x = cx + velx1*raiz2
        }
    }else{
        if (pokebolas[a].x < cx + velx1*raiz2) {
            pokebolas[a].x = cx + velx1*raiz2
        }
    }
    if (pokebolas[a].vely > 0) {
        if (pokebolas[a].y > cy + vely1*raiz2) {
            pokebolas[a].y = cy + vely1*raiz2
        }
    }else{
        if (pokebolas[a].y < cy + vely1*raiz2) {
            pokebolas[a].y = cy + vely1*raiz2
        }
    }
   }else{
     pokebolas[a].x = cx + velx1*raiz2
     pokebolas[a].y = cy + vely1*raiz2
   }
   if(pokebolas[b].r !== '' && pokebolas[b].r!= undefined) {
    console.log(`AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApokebolas[${b}] já tem r`)
    if (pokebolas[b].velx > 0) {
        if (pokebolas[b].x > cx2 + velx2*raiz2) {
            pokebolas[b].x = cx2 + velx2*raiz2
        }
    }else{
        if (pokebolas[b].x < cx2 + velx2*raiz2) {
            pokebolas[b].x = cx2 + velx2*raiz2
        }
    }
    if (pokebolas[b].vely > 0) {
        if (pokebolas[b].y > cy2 + vely2*raiz2) {
            pokebolas[b].y = cy2 + vely2*raiz2
        }
    }else{
        if (pokebolas[b].y < cy2 + vely2*raiz2) {
            pokebolas[b].y = cy2 + vely2*raiz2
        }
    }
   }else{
    pokebolas[b].x = cx2 + velx2*raiz2
   pokebolas[b].y = cy2 + vely2*raiz2
   }*/
   //pokebolas[a].x = cx + velx1*raiz2
   //pokebolas[a].y = cy + vely1*raiz2
   //pokebolas[b].x = cx2 + velx2*raiz2
   //pokebolas[b].y = cy2 + vely2*raiz2
   
    
    pokebolas[a].r = raiz2
    pokebolas[b].r = raiz2
    console.log('now',diffx**2 + diffy**2)
    console.log('next',newdiffx**2 + newdiffy**2)
    for (o in pokebolas) {
        //console.log(pokebolas[o].r)
    }
    //window.alert('COLISÃO')

}
}
}
}
}
coll++
}