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