console.log(`${pokebolas[ra].color} SEM R e ${pokebolas[rb].color} COM R`)
// POKEBOLA[0] COM R E POKEBOLA[1] COM R
  if (pokebolas[rb].velx > 0 && pokebolas[rb].x > realposibsx[posibin].x1 || pokebolas[rb].velx < 0 && pokebolas[rb].x < realposibsx[posibin].x1) {
      // COLISÃO ATUAL VENCE => realposibsx[posibin].x1
      console.log('colisão atual vence',pokebolas[ra].color,pokebolas[rb].color)
      // POKEBOLA[0] MUDA DE COORDENADAS (PARA COLISÃO ATUAL)
      // POKEBOLA[1] MUDA DE COORDENADAS (PARA COLISÃO ATUAL)
      pokebolas[ra].x = realposibsx[posibin].x1
      pokebolas[ra].y = realposibsx[posibin].y1
      pokebolas[rb].x = realposibsx[posibin].x2
      pokebolas[rb].y = realposibsx[posibin].y2
      // REFAZER AS ANTERIORES
      for (ba = 0; ba < posibin; ba++) {
          console.log('precisa refazer essa colisão aqui:')
          console.log(realposibsx[ba])
          re = detectCollision(realposibsx[ba].a,realposibsx[ba].b,pokebolas[realposibsx[ba].a].fstx,pokebolas[realposibsx[ba].a].fsty,pokebolas[realposibsx[ba].b].x,pokebolas[realposibsx[ba].b].y,true,false)
          console.log(re)
         // if (re != undefined) {
          pokebolas[realposibsx[ba].a].x = re.x1
          pokebolas[realposibsx[ba].a].y = re.y1
          //}
      }
  }else{
      // COLISÃO ANTERIOR VENCE => pokebola[0].x
      console.log('colisão anterior vence')
      // POKEBOLA[1] CONTINUA COM AS MESMA COORDENADAS
      // POKEBOLA[0] PRECISA READAPTAR SUAS COORDENADAS DE ACORDO COM A POKEBOLA[1]
      re = detectCollision(ra,rb,pokebolas[ra].fstx,pokebolas[ra].fsty,pokebolas[rb].x,pokebolas[rb].y,true,false)
      // as coordenadas da pokebola[0] se mantêm
      // pokebolas[rb].fstx = pokebolas[rb].x
      if (re != undefined) {
          pokebolas[0].x = re.x1
          pokebolas[0].y = re.y1
      }
  }