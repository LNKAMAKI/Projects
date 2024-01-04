for (ba = 0; ba < posibin; ba++) {
    console.log('precisa refazer essa colisão aqui:')
    console.log(realposibsx[ba])
    if (realposibsx[ba].colide == true) {
    re = detectCollision(realposibsx[ba].a,realposibsx[ba].b,pokebolas[realposibsx[ba].a].fstx,pokebolas[realposibsx[ba].a].fsty,pokebolas[realposibsx[ba].b].x,pokebolas[realposibsx[ba].b].y,true,false)
    
    if (re != undefined) {
    pokebolas[realposibsx[ba].a].x = re.x1
    pokebolas[realposibsx[ba].a].y = re.y1
    }
    }
    // DON'T FORGET TO IMPLEMENT THE CODE HERE TOO
}