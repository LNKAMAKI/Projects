for (ba = 0; ba < posibin; ba++) {
    console.log('precisa refazer essa colisão aqui:')
    console.log(realposibsx[ba])
    if (realposibsx[ba].colide == true) {
    re = detectCollision(realposibsx[ba].a,realposibsx[ba].b,pokebolas[realposibsx[ba].a].fstx,pokebolas[realposibsx[ba].a].fsty,pokebolas[realposibsx[ba].b].x,pokebolas[realposibsx[ba].b].y,true,false)
    
    if (re != undefined) {
    pokebolas[realposibsx[ba].a].x = re.x1
    pokebolas[realposibsx[ba].a].y = re.y1
    }
    }else{
        console.log('epa, n se colidem, porém pode ter coisa aí')
        re = detectCollision(realposibsx[ba].a,realposibsx[ba].b,pokebolas[realposibsx[ba].a].fstx,pokebolas[realposibsx[ba].a].fsty,pokebolas[realposibsx[ba].b].x,pokebolas[realposibsx[ba].b].y,true,false)
        console.log(re)
        if (re != undefined) {
            if (pokebolas[realposibsx[ba].a].x == pokebolas[realposibsx[ba].a].fstx) {
            if (pokebolas[realposibsx[ba].a].velx > 0 && realposibsx[ba].x1 > re.x1 || pokebolas[realposibsx[ba].a].velx < 0 && realposibsx[ba].x1 < re.x1) {
                pokebolas[realposibsx[ba].a].x = re.x1
                pokebolas[realposibsx[ba].a].y = re.y1
                loop = false
            }
        }else{
            if (pokebolas[realposibsx[ba].a].velx > 0 && pokebolas[realposibsx[ba].a].x > re.x1 || pokebolas[realposibsx[ba].a].velx < 0 && pokebolas[realposibsx[ba].a].x < re.x1) {
                pokebolas[realposibsx[ba].a].x = re.x1
                pokebolas[realposibsx[ba].a].y = re.y1
                loop = false
            }
        }
            // WORK MORE ON THIS
        }
    }
} 