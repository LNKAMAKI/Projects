loop = false
                pokebolas[rb].r = 88
                pokebolas[ra].r = 88
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
                    for (ba = 0; ba < posibin; ba++) {
                        console.log('precisa refazer essa colisão aqui:')
                        console.log(realposibsx[ba])
                        if (realposibsx[ba].colide == true) {
                        re = detectCollision(realposibsx[ba].a,realposibsx[ba].b,pokebolas[realposibsx[ba].a].fstx,pokebolas[realposibsx[ba].a].fsty,pokebolas[realposibsx[ba].b].x,pokebolas[realposibsx[ba].b].y,true,false)
                        
                        if (re != undefined) {
                        pokebolas[realposibsx[ba].a].x = re.x2
                        pokebolas[realposibsx[ba].a].y = re.y2
                        }
                        }else{
                            console.log('epa, n se colidem, porém pode ter coisa aí')
                            re = detectCollision(realposibsx[ba].a,realposibsx[ba].b,pokebolas[realposibsx[ba].a].fstx,pokebolas[realposibsx[ba].a].fsty,pokebolas[realposibsx[ba].b].x,pokebolas[realposibsx[ba].b].y,true,false)
                            console.log(re)
                            if (re != undefined) {
                                if (pokebolas[realposibsx[ba].a].x == pokebolas[realposibsx[ba].a].fstx) {
                                if (pokebolas[realposibsx[ba].a].velx > 0 && realposibsx[ba].x2 > re.x2 || pokebolas[realposibsx[ba].a].velx < 0 && realposibsx[ba].x2 < re.x2) {
                                    pokebolas[realposibsx[ba].a].x = re.x2
                                    pokebolas[realposibsx[ba].a].y = re.y2
                                    loop = false
                                }
                            }else{
                                if (pokebolas[realposibsx[ba].a].velx > 0 && pokebolas[realposibsx[ba].a].x > re.x2 || pokebolas[realposibsx[ba].a].velx < 0 && pokebolas[realposibsx[ba].a].x < re.x2) {
                                    pokebolas[realposibsx[ba].a].x = re.x2
                                    pokebolas[realposibsx[ba].a].y = re.y2
                                    loop = false
                                }
                            }
                                // WORK MORE ON THIS
                            }
                        }
                    } 
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
                        pokebolas[ra].x = re.x1
                        pokebolas[ra].y = re.y1
                    }
                }