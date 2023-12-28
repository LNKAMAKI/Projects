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
        //pokebolas[a].x = cx + velx1*raiz2
        newx1 =  cx + velx1*raiz2
    }else{
        //pokebolas[a].x = cx + velx1
        newx1 =  cx + velx1
    }
    if (xvelx2 == 'x') {
        //pokebolas[b].x = cx2 + velx2*raiz2
        newx2 =  cx2 + velx2*raiz2
    }else{
        //pokebolas[b].x = cx2 + velx2
        newx2 =  cx2 + velx2
    }
    if (xvely1 == 'x') {
        //pokebolas[a].y = cy + vely1*raiz2
        newy1 =  cy + vely1*raiz2
    }else{
        //pokebolas[a].y = cy + vely1
        newy1 =  cy + vely1
    }
    if (xvely2 == 'x') {
        //pokebolas[b].y = cy2 + vely2*raiz2
        newy2 =  cy2 + vely2*raiz2
    }else{
        //pokebolas[b].y = cy2 + vely2
        newy2 =  cy2 + vely2
    }
    
    //res = (life + velx1*raiz2 - velx2*raiz2)**2 + (time + vely1*raiz2 - vely2*raiz2)**2
    //console.log('conferir:',res)
    
    pokebolas[a].r = raiz2
    pokebolas[b].r = raiz2
    console.log('now',diffx**2 + diffy**2)
    console.log('next',newdiffx**2 + newdiffy**2)
    for (o in pokebolas) {
        //console.log(pokebolas[o].r)
    }
    //window.alert('COLISÃO')
    return {x1: newx1,x2: newx2, y1: newy1, y2: newy2}
    

}