function collision() {
    for (a in pokebolas) {
        //cx,cy = pokeball a
        //cx2,cy2 = pokeball a
        cx = pokebolas[a].x
        //velx1, vely1 = pokebola a
        //velx2, vely2 = pokebola b
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
                // tirar o sinal para senx e cosx
                if (diffx < 0) {
                    diffx = -diffx
                }
                if (diffy < 0) {
                    diffy = -diffy
                }
                
                // inverter o sinal caso a pokebola esteja na borda
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
                
                // código para a colisão
                
                if (Math.round(diffx**2 + diffy**2) == 676 && pokebolas[a].r != '') {//|| newdiffx**2 + newdiffy**2 < 676) {
                    //window.alert('')
                    console.log('cx,cx2',cx,cx2)
                    console.log(cy,cy2)
                    console.log(`calcular a colisão com ${pokebolas[a].color} e ${pokebolas[b].color}`)
                    console.log(pokebolas[a].velx)
                    console.log(pokebolas[a].r)
                    //loop = false
                    if (pokebolas[a].r == '' || pokebolas[a].r == undefined) {
                        pokebolas[a].r = 1
                        pokebolas[b].r = 1
                    }
                    //vx1 = pokebolas[a].velx/pokebolas[a].r
                    //vy1 = -pokebolas[a].vely/pokebolas[a].r // sinal de menos para definir + pra cima e - pra baixo
                    vx1 = pokebolas[a].velx
                    vy1 = -pokebolas[a].vely
                   
                
                    //vx2 = pokebolas[b].velx/pokebolas[b].r
                    //vy2 = -pokebolas[b].vely/pokebolas[b].r // sinal de menos para definir + pra cima e - pra baixo
                    vx2 = pokebolas[b].velx
                    vy2 = -pokebolas[b].vely

                    console.log(pokebolas[a].color,vx1,vy1)
                    console.log(pokebolas[b].color,vx2,vy2)
                
                    //console.log('vx1: ',vx1)
                    //console.log('vy1: ',vy1)
                    //console.log('vx2: ',vx2)
                    //console.log('vy2: ',vy2)
                
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
                
                    //console.log('triangulo:',diffx,diffy,(diffx**2 + diffy**2)**(1/2))
                    senx = diffx/(diffx**2 + diffy**2)**(1/2)
                    senx = diffx/26
                    cosx = diffy/(diffx**2 + diffy**2)**(1/2)
                    cosx = diffy/26
                    //senx = 3**(1/2)/2
                    //cosx = 1/2
                    //console.log(`senx:${senx.toFixed(2)}, cosx:${cosx.toFixed(2)}, ${(senx**2 + cosx**2).toFixed(0)}`)
                
                    //pokebola 1
                    //console.log('pokebola 0')
                    //console.log(`bola ${a}: vx:${vx1}, vy:${vy1}`)
                    vperx1 = vx1*senx // decomposição de vx1 na direção perpendicular(vel relativa)
                    vparx1 = vx1*cosx // decomposição de vx1 na direção paralela(vel conservativa)
                    vpery1 = vy1*cosx // decomposição de vy1 na direção perpendicular(vel relativa)
                    vpary1 = vy1*senx // decomposição de vy1 na direção paralela(vel conservativa)
                    vperx1hor = vperx1*senx
                    vperx1ver = vperx1*cosx
                    vparx1hor = vparx1*cosx
                    vparx1ver = vparx1*senx
                    vpery1hor = vpery1*senx
                    vpery1ver = vpery1*cosx
                    vpary1hor = vpary1*cosx
                    vpary1ver = vpary1*senx
                
                    if (vx1 > 0) { // a pokebola está se movendo para a direita
                        if (leftball == a && downball == a || rightball == a && upball == a) {
                         // decomposição de velperx1 = pra cima e pra direita
                         if (vperx1ver < 0) {
                            vperx1ver = -vperx1ver
                         }
                         if (vperx1hor < 0) {
                            vperx1hor = -vperx1hor
                         }
                         // decomposição de velparx1 = pra baixo e pra direita
                         if (vparx1ver > 0) {
                            vparx1ver = -vparx1ver
                         }
                         if (vparx1hor < 0) {
                            vparx1hor = -vparx1hor
                         }
                        }else{
                        // decomposição de velperx1 = pra baixo e pra direita
                        if (vperx1ver > 0) {
                            vperx1ver = -vperx1ver
                         }
                         if (vperx1hor < 0) {
                            vperx1hor = -vperx1hor
                         }
                         // decomposição de velparx1 = pra cima e pra direita
                         if (vparx1ver < 0) {
                            vparx1ver = -vparx1ver
                         }
                         if (vparx1hor < 0) {
                            vparx1hor = -vparx1hor
                         }
                        }
                    }else{ // a pokebola está se movendo para a esquerda
                        if (leftball == a && downball == a || rightball == a && upball == a) {
                            // decomposição de velperx1 = pra baixo e pra esquerda
                            if (vperx1ver > 0) {
                                vperx1ver = -vperx1ver
                             }
                             if (vperx1hor > 0) {
                                vperx1hor = -vperx1hor
                             }
                              // decomposição de velparx1 = pra cima e pra esquerda
                              if (vparx1ver < 0) {
                                vparx1ver = -vparx1ver
                             }
                             if (vparx1hor > 0) {
                                vparx1hor = -vparx1hor
                             }
                        }else{
                           // decomposição de velperx1 = pra cima e pra esquerda
                           if (vperx1ver < 0) {
                            vperx1ver = -vperx1ver
                         }
                         if (vperx1hor > 0) {
                            vperx1hor = -vperx1hor
                         }
                         // decomposição de velparx1 = pra baixo e pra esquerda
                         if (vparx1ver > 0) {
                            vparx1ver = -vparx1ver
                         }
                         if (vparx1hor > 0) {
                            vparx1hor = -vparx1hor
                         }
                        }
                    }
                
                    if (downball == a) {
                        if (vy1 > 0) {
                            if (leftball == a) { // bola de baixo para a esquerda com velx positiva
                                // vely perpendicular positiva
                                if (vpery1 < 0) {
                                    vpery1 = -vpery1
                                }
                                if (vpary1 > 0) {
                                    vpary1 = -vpary1
                                }
                                // decomposição de velpery1 = pra cima e pra direita
                                if (vpery1ver < 0) {
                                    vpery1ver = -vpery1ver
                                }
                                if (vpery1hor < 0) {
                                    vpery1hor = -vpery1hor
                                }
                                //decomposição de velpary1 = pra cima e pra esquerda
                                if (vpary1ver < 0) {
                                    vpary1ver = -vpary1ver
                                }
                                if (vpary1hor > 0) {
                                    vpary1hor = -vpary1hor
                                }
                            }else{ // bola de baixo para a direita com velx positiva
                                // vely perpendicular negativa
                                if (vpery1 > 0) {
                                    vpery1 = -vpery1
                                }
                                if (vpary1 < 0) {
                                    vpary1 = -vpary1
                                }
                                // decomposição de velpery1 = pra cima e pra esquerda
                                if (vpery1ver < 0) {
                                    vpery1ver = -vpery1ver
                                }
                                if (vpery1hor > 0) {
                                    vpery1hor = -vpery1hor
                                }
                                 //decomposição de velpary1 = pra cima e pra direita
                                 if (vpary1ver < 0) {
                                    vpary1ver = -vpary1ver
                                }
                                if (vpary1hor < 0) {
                                    vpary1hor = -vpary1hor
                                }
                            }
                        }else{
                            if (leftball == a) { // bola de baixo para a esquerda com velx negativa
                                // vely perpendicular negativa
                                if (vpery1 > 0) {
                                    vpery1 = -vpery1
                                }
                                if (vpary1 < 0) {
                                    vpary1 = -vpary1
                                }
                                // decomposição de velpery1 = pra baixo e pra esquerda
                                if (vpery1ver > 0) {
                                    vpery1ver = -vpery1ver
                                }
                                if (vpery1hor > 0) {
                                    vpery1hor = -vpery1hor
                                }
                                 //decomposição de velpary1 = pra baixo e pra direita
                                 if (vpary1ver > 0) {
                                    vpary1ver = -vpary1ver
                                }
                                if (vpary1hor < 0) {
                                    vpary1hor = -vpary1hor
                                }
                            }else{ // bola de baixo para a direita com velx negativa
                                // vely perpendicular positiva
                                if (vpery1 < 0) {
                                    vpery1 = -vpery1
                                }
                                if (vpary1 > 0) {
                                    vpary1 = -vpary1
                                }
                                // decomposição de velpery1 = pra baixo e pra direita
                                if (vpery1ver > 0) {
                                    vpery1ver = -vpery1ver
                                }
                                if (vpery1hor < 0) {
                                    vpery1hor = -vpery1hor
                                }
                                 //decomposição de velpary1 = pra baixo e pra esquerda
                                 if (vpary1ver > 0) {
                                    vpary1ver = -vpary1ver
                                }
                                if (vpary1hor > 0) {
                                    vpary1hor = -vpary1hor
                                }
                            }
                        }
                    }else{
                        if (vy1 > 0) {
                            if (rightball == a) { // bola de cima para a direita com velx positiva
                                // vely perpendicular positiva
                                if (vpery1 < 0) {
                                    vpery1 = -vpery1
                                }
                                if (vpary1 > 0) {
                                    vpary1 = -vpary1
                                }
                                // decomposição de velpery1 = pra cima e pra direita
                                if (vpery1ver < 0) {
                                    vpery1ver = -vpery1ver
                                }
                                if (vpery1hor < 0) {
                                    vpery1hor = -vpery1hor
                                }
                                //decomposição de velpary1 = pra cima e pra esquerda
                                if (vpary1ver < 0) {
                                    vpary1ver = -vpary1ver
                                }
                                if (vpary1hor > 0) {
                                    vpary1hor = -vpary1hor
                                }
                            }else{ // bola de cima para a esquerda com velx positiva
                                // vely perpendicular negativa
                                if (vpery1 > 0) {
                                    vpery1 = -vpery1
                                }
                                if (vpary1 < 0) {
                                    vpary1 = -vpary1
                                }
                                // decomposição de velpery1 = pra cima e pra esquerda
                            if (vpery1ver < 0) {
                                vpery1ver = -vpery1ver
                            }
                            if (vpery1hor > 0) {
                                vpery1hor = -vpery1hor
                            }
                            //decomposição de velpary1 = pra cima e pra direita
                            if (vpary1ver < 0) {
                                vpary1ver = -vpary1ver
                            }
                            if (vpary1hor < 0) {
                                vpary1hor = -vpary1hor
                            }
                            }
                        }else{
                            if (rightball == a) { // bola de cima para a direita com velx negativa
                                  // vely perpendicular negativa
                                  if (vpery1 > 0) {
                                    vpery1 = -vpery1
                                }
                                if (vpary1 < 0) {
                                    vpary1 = -vpary1
                                }
                                // decomposição de velpery1 = pra baixo e pra esquerda
                                if (vpery1ver > 0) {
                                    vpery1ver = -vpery1ver
                                }
                                if (vpery1hor > 0) {
                                    vpery1hor = -vpery1hor
                                }
                                //decomposição de velpary1 = pra baixo e pra direita
                                if (vpary1ver > 0) {
                                    vpary1ver = -vpary1ver
                                }
                                if (vpary1hor < 0) {
                                    vpary1hor = -vpary1hor
                                }
                            }else{ // bola de cima para a esquerda com velx negativa
                                // vely perpendicular positiva
                                if (vpery1 < 0) {
                                    vpery1 = -vpery1
                                }
                                if (vpary1 > 0) {
                                    vpary1 = -vpary1
                                }
                                // decomposição de velpery1 = pra baixo e para direita
                                if (vpery1ver > 0) {
                                    vpery1ver = -vpery1ver
                                }
                                if (vpery1hor < 0) {
                                    vpery1hor = -vpery1hor
                                }
                                 //decomposição de velpary1 = pra baixo e pra esquerda
                                 if (vpary1ver > 0) {
                                    vpary1ver = -vpary1ver
                                }
                                if (vpary1hor > 0) {
                                    vpary1hor = -vpary1hor
                                }
                            }
                        }
                    }
                    sumper1 = vperx1 + vpery1
                    sumpar1 = vparx1 + vpary1
                
                    //console.log(`vperx1(vx1*senx):${vperx1.toFixed(2)},vparx1(vx1*cosx):${vparx1.toFixed(2)}`)
                    //console.log(`vpery1(vy1*cosx):${vpery1.toFixed(2)},vpary1(vx1*senx):${vpary1.toFixed(2)}`)
                
                    //console.log(`soma dos vetores na perpendicular: ${sumper1}`)
                    //console.log(`soma dos vetores na paralela: ${sumpar1}`)
                    //console.log('verificar:',sumper1**2 + sumpar1**2,vx1**2 + vy1**2)
                    
                    //console.log('vperx1hor(vperx1*senx):',vperx1hor,'vperx1ver(vperx1*cosx):',vperx1ver)
                    //console.log('vparx1hor(vparx1*cosx):',vparx1hor,'vparx1ver(vperx1*senx):',vparx1ver)
                    //console.log('vpery1hor(vpery1*senx):',vpery1hor,'vpery1ver(vpery1*cosx):',vpery1ver)
                    //console.log('vpary1hor(vpary1*cosx):',vpary1hor,'vpary1ver(vpary1*senx):',vpary1ver)
                    //console.log('soma horizontal na perpendicular: ',vperx1hor + vpery1hor)
                    //console.log('soma vertical na perpendicular: ',vperx1ver + vpery1ver)
                    if (vperx1hor + vpery1hor > 0) {
                        //console.log('a resultante perpendicular está pra direita')
                        dirahor = 'right'
                    }else{
                        //console.log('a resultante perpendicular está pra esquerda')
                        dirahor = 'left'
                    }
                    if (vperx1ver + vpery1ver > 0) {
                        //console.log('a resultante perpendicular está pra cima')
                        diraver = 'up'
                    }else{
                        //console.log('a resultante perpendicular está pra baixo')
                        diraver = 'down'
                    }
                    //console.log('soma(verificação)',vperx1hor + vparx1hor + vpery1hor + vpary1hor,vx1)
                    //console.log('soma(verificação)',vperx1ver + vparx1ver + vpery1ver + vpary1ver,vy1)
                    //console.log('verificar velocidade perpendicular',((vpery1hor + vperx1hor)**2 + (vpery1ver + vperx1ver)**2)**(1/2))
                //console.log('verificar velocidade paralela',((vpary1hor + vparx1hor)**2 + (vpary1ver + vparx1ver)**2)**(1/2))
                
                
                    //console.log('')
                //pokebola 2
                //console.log('pokebola 1')
                //console.log(`bola ${b}: vx:${vx2}, vy:${vy2}`)
                vperx2 = vx2*senx // decomposição de vx2 na direção perpendicular(vel relativa)
                vparx2 = vx2*cosx // decomposição de vx2 na direção paralela(vel conservativa)
                vpery2 = vy2*cosx // decomposição de vy2 na direção perpendicular(vel relativa)
                vpary2 = vy2*senx // decomposição de vy2 na direção paralela(vel conservativa)
                vperx2hor = vperx2*senx
                vperx2ver = vperx2*cosx
                vparx2hor = vparx2*cosx
                vparx2ver = vparx2*senx
                vpery2hor = vpery2*senx
                vpery2ver = vpery2*cosx
                vpary2hor = vpary2*cosx
                vpary2ver = vpary2*senx
                
                if (vx2 > 0) {
                    if (leftball == b && downball == b || rightball == b && upball == b) {
                    // decomposição de velperx2 = pra cima e pra direita
                    if (vperx2ver < 0) {
                        vperx2ver = -vperx2ver
                    }
                    if (vperx2hor < 0) {
                        vperx2hor = -vperx2hor
                    }
                    // decomposição de velparx2 = pra baixo e pra direita
                    if (vparx2ver > 0) {
                        vparx2ver = -vparx2ver
                    }
                    if (vparx2hor < 0) {
                        vparx2hor = -vparx2hor
                    }
                    }else{
                    // decomposição de velperx2 = pra baixo e pra direita
                    if (vperx2ver > 0) {
                        vperx2ver = -vperx2ver
                    }
                    if (vperx2hor < 0) {
                        vperx2hor = -vperx2hor
                    }
                    // decomposição de velparx2 = pra cima e pra direita
                    if (vparx2ver < 0) {
                        vparx2ver = -vparx2ver
                    }
                    if (vparx2hor < 0) {
                        vparx2hor = -vparx2hor
                    }
                    }
                }else{
                    if (leftball == b && downball == b || rightball == b && upball == b) {
                        // decomposição de velperx2 = pra baixo e pra esquerda
                        if (vperx2ver > 0) {
                            vperx2ver = -vperx2ver
                        }
                        if (vperx2hor > 0) {
                            vperx2hor = -vperx2hor
                        }
                        // decomposição de velparx2 = pra cima e pra esquerda
                        if (vparx2ver < 0) {
                            vparx2ver = -vparx2ver
                        }
                        if (vparx2hor > 0) {
                            vparx2hor = -vparx2hor
                        }
                    }else{
                    // decomposição de velperx2 = pra cima e pra esquerda
                    if (vperx2ver < 0) {
                        vperx2ver = -vperx2ver
                    }
                    if (vperx2hor > 0) {
                        vperx2hor = -vperx2hor
                    }
                    // decomposição de velparx2 = pra baixo e pra esquerda
                    if (vparx2ver > 0) {
                        vparx2ver = -vparx2ver
                    }
                    if (vparx2hor > 0) {
                        vparx2hor = -vparx2hor
                    }
                    }
                }
                
                //console.log('downball',downball)
                //console.log('upball',upball)
                //console.log('leftball',leftball)
                //console.log('rightball',rightball)
                //console.log(b)
                //console.log(rightball == b)
                if (downball == b) { 
                    console.log('b é de baixo')
                    if (vy2 > 0) {
                        //console.log('velocidade positiva')
                        if (leftball == b) { // bola de baixo para a esquerda com velx positiva
                            //console.log('bola esquerda')
                            // vely perpendicular positiva
                            if (vpery2 < 0) {
                                vpery2 = -vpery2
                            }
                            if (vpary2 > 0) {
                                vpary2 = -vpary2
                            }
                            // decomposição de velpery2 = pra cima e pra direita
                            if (vpery2ver < 0) {
                                vpery2ver = -vpery2ver
                            }
                            if (vpery2hor < 0) {
                                vpery2hor = -vpery2hor
                            }
                            //decomposição de velpary2 = pra cima e pra esquerda
                            if (vpary2ver < 0) {
                                vpary2ver = -vpary2ver
                            }
                            if (vpary2hor > 0) {
                                vpary2hor = -vpary2hor
                            }
                        }else{ // bola de baixo para a direita com velx positiva
                            // vely perpendicular negativa
                            //console.log('bola direita')
                            if (vpery2 > 0) {
                                vpery2 = -vpery2
                            }
                            if (vpary2 < 0) {
                                vpary2 = -vpary2
                            }
                            // decomposição de velpery2 = pra cima e pra esquerda
                            if (vpery2ver < 0) {
                                vpery2ver = -vpery2ver
                            }
                            if (vpery2hor > 0) {
                                vpery2hor = -vpery2hor
                            }
                            //decomposição de velpary2 = pra cima e pra direita
                            if (vpary2ver < 0) {
                                vpary2ver = -vpary2ver
                            }
                            if (vpary2hor < 0) {
                                vpary2hor = -vpary2hor
                            }
                        }
                    }else{
                        //console.log('velocidade negativa')
                        if (leftball == b) { // bola de baixo para a esquerda com velx negativa
                            // vely perpendicular negativa
                            //console.log('bola esquerda')
                            if (vpery2 > 0) {
                                vpery2 = -vpery2
                            }
                            if (vpary2 < 0) {
                                vpary2 = -vpary2
                            }
                            // decomposição de velpery2 = pra baixo e pra esquerda
                            if (vpery2ver > 0) {
                                vpery2ver = -vpery2ver
                            }
                            if (vpery2hor > 0) {
                                vpery2hor = -vpery2hor
                            }
                            //decomposição de velpary2 = pra baixo e pra direita
                            if (vpary2ver > 0) {
                                vpary2ver = -vpary2ver
                            }
                            if (vpary2hor < 0) {
                                vpary2hor = -vpary2hor
                            }
                        }else{ // bola de baixo para a direita com velx negativa
                            // vely perpendicular positiva
                            //console.log('bola direita')
                            if (vpery2 < 0) {
                                vpery2 = -vpery2
                            }
                            if (vpary2 > 0) {
                                vpary2 = -vpary2
                            }
                            // decomposição de velpery2 = pra baixo e pra direita
                            if (vpery2ver > 0) {
                                vpery2ver = -vpery2ver
                            }
                            if (vpery2hor < 0) {
                                vpery2hor = -vpery2hor
                            }
                            //decomposição de velpary2 = pra baixo e pra esquerda
                            if (vpary2ver > 0) {
                                vpary2ver = -vpary2ver
                            }
                            if (vpary2hor > 0) {
                                vpary2hor = -vpary2hor
                            }
                        }
                    }
                }else{
                    console.log('b é de cima')
                    if (vy2 > 0) {
                        //console.log('velocidade positiva')
                        if (rightball == b) { // bola de cima para a direita com velx positiva
                            // vely perpendicular positiva
                            //console.log('bola direita')
                            if (vpery2 < 0) {
                                vpery2 = -vpery2
                            }
                            if (vpary2 > 0) {
                                vpary2 = -vpary2
                            }
                            // decomposição de velpery2 = pra cima e pra direita
                            if (vpery2ver < 0) {
                                vpery2ver = -vpery2ver
                            }
                            //console.log(vpery2hor)
                            if (vpery2hor < 0) {
                                vpery2hor = -vpery2hor
                            }
                            //console.log(vpery2hor < 0)
                            //decomposição de velpary2 = pra cima e pra esquerda
                            if (vpary2ver < 0) {
                                vpary2ver = -vpary2ver
                            }
                            if (vpary2hor > 0) {
                                vpary2hor = -vpary2hor
                            }
                        }else{ // bola de cima para a esquerda com velx positiva
                            // vely perpendicular negativa
                            //console.log('bola esquerda')
                            if (vpery2 > 0) {
                                vpery2 = -vpery2
                            }
                            if (vpary2 < 0) {
                                vpary2 = -vpary2
                            }
                            // decomposição de velpery2 = pra cima e pra esquerda
                        if (vpery2ver < 0) {
                            vpery2ver = -vpery2ver
                        }
                        if (vpery2hor > 0) {
                            vpery2hor = -vpery2hor
                        }
                        //decomposição de velpary2 = pra cima e pra direita
                        if (vpary2ver < 0) {
                            vpary2ver = -vpary2ver
                        }
                        if (vpary2hor < 0) {
                            vpary2hor = -vpary2hor
                        }
                        }
                    }else{
                        //console.log('velocidade negativa')
                        if (rightball == b) { // bola de cima para a direita com velx negativa
                            // vely perpendicular negativa
                            //console.log('bola direita')
                            if (vpery2 > 0) {
                                vpery2 = -vpery2
                            }
                            if (vpary2 < 0) {
                                vpary2 = -vpary2
                            }
                            // decomposição de velpery2 = pra baixo e pra esquerda
                            if (vpery2ver > 0) {
                                vpery2ver = -vpery2ver
                            }
                            if (vpery2hor > 0) {
                                vpery2hor = -vpery2hor
                            }
                            //decomposição de velpary2 = pra baixo e pra direita
                            if (vpary2ver > 0) {
                                vpary2ver = -vpary2ver
                            }
                            if (vpary2hor < 0) {
                                vpary2hor = -vpary2hor
                            }
                        }else{ // bola de cima para a esquerda com velx negativa
                            // vely perpendicular positiva
                            //console.log('bola esquerda')
                            if (vpery2 < 0) {
                                vpery2 = -vpery2
                            }
                            if (vpary2 > 0) {
                                vpary2 = -vpary2
                            }
                            // decomposição de velpery2 = pra baixo e para direita
                            if (vpery2ver > 0) {
                                vpery2ver = -vpery2ver
                            }
                            if (vpery2hor < 0) {
                                vpery2hor = -vpery2hor
                            }
                            //decomposição de velpary2 = pra baixo e pra esquerda
                            if (vpary2ver > 0) {
                                vpary2ver = -vpary2ver
                            }
                            if (vpary2hor > 0) {
                                vpary2hor = -vpary2hor
                            }
                        }
                    }
                }
                sumper2 = vperx2 + vpery2
                sumpar2 = vparx2 + vpary2
                
                //console.log(`vperx2:${vperx2.toFixed(2)},vparx2:${vparx2.toFixed(2)}`)
                //console.log(`vpery2:${vpery2.toFixed(2)},vpary2:${vpary2.toFixed(2)}`)
                
                //console.log(`soma dos vetores na perpendicular: ${sumper2}`)
                //console.log(`soma dos vetores na paralela: ${sumpar2}`)
                //console.log('verificar:',sumper2**2 + sumpar2**2,vx2**2 + vy2**2)
                
                //console.log('vperx2hor(vperx2*senx):',vperx2hor,'vperx2ver(vperx2*cosx):',vperx2ver)
                    //console.log('vparx2hor(vparx2*cosx):',vparx2hor,'vparx2ver(vperx2*senx):',vparx2ver)
                    //console.log('vpery2hor(vpery2*senx):',vpery2hor,'vpery2ver(vpery2*cosx):',vpery2ver)
                    //console.log('vpary2hor(vpary2*cosx):',vpary2hor,'vpary2ver(vpary2*senx):',vpary2ver)
                if (vperx2hor + vpery2hor > 0) {
                    //console.log('a resultante perpendicular está pra direita')
                    dirbhor = 'right'
                }else{
                    //console.log('a resultante perpendicular está pra esquerda')
                    dirbhor = 'left'
                }
                if (vperx2ver + vpery2ver > 0) {
                    //console.log('a resultante perpendicular está pra cima')
                    dirbver = 'up'
                }else{
                    //console.log('a resultante perpendicular está pra baixo')
                    dirbver = 'down'
                }
                //console.log('soma(verificação)',vperx2hor + vparx2hor + vpery2hor + vpary2hor,vx2)
                //console.log('soma(verificação)',vperx2ver + vparx2ver + vpery2ver + vpary2ver,vy2)
                //console.log('verificar velocidade perpendicular',((vpery2hor + vperx2hor)**2 + (vpery2ver + vperx2ver)**2)**(1/2))
                //console.log('verificar velocidade paralela',((vpary2hor + vparx2hor)**2 + (vpary2ver + vparx2ver)**2)**(1/2))
                
                //console.log('')
                // checar se efetivamente está ocorrendo uma colisão e definir o caso correspondente
                collidea = 0
                collideb = 0
                if (leftball == a && dirahor == 'right' || rightball == a && dirahor == 'left') {
                    //console.log('a bola a está para colidir')
                    collidea++
                }
                if (leftball == b && dirbhor == 'right' || rightball == b && dirbhor == 'left') {
                    //console.log('a bola b está para colidir')
                    collideb++
                }
                if (collidea == 1 && collideb == 1) {
                    console.log('as pokebolas vão bater de frente')
                    //console.log('as pokebolas vão bater de frente')
                    //console.log('a bola a ficará com a velocidade na perpendicular de:',sumper2, dirbhor, dirbver)
                    sumparhor1 = vpary1hor + vparx1hor
                    sumparver1 = vpary1ver + vparx1ver
                    //console.log(sumparhor1, sumparver1)
                    sumper2hor = sumper2*senx
                    sumper2ver = sumper2*cosx
                    if (dirbhor == 'left') {
                        if (sumper2hor > 0) {
                            sumper2hor = -sumper2hor
                        }
                    }else{
                        if (sumper2hor < 0) {
                            sumper2hor = -sumper2hor
                        }
                    }
                
                    if (dirbver == 'down') {
                        if (sumper2ver > 0) {
                            sumper2ver = -sumper2ver
                        }
                    }else{
                        if (sumper2ver < 0) {
                            sumper2ver = -sumper2ver
                        }
                    }
                    //console.log('a velocidade horizontal da bola a é:', sumparhor1 + sumper2hor)
                    //console.log('a velocidade vertical da bola a é:', sumparver1 + sumper2ver)
                    //console.log('verificar',sumpar1**2 + sumper2**2, (sumparhor1 + sumper2hor)**2 + (sumparver1 + sumper2ver)**2)
                    pokebolas[a].velx = sumparhor1 + sumper2hor
                    pokebolas[a].vely = (sumparver1 + sumper2ver)*-1
                    console.log('a bola b ficará com a velocidade na perpendicular de:',sumper1,dirahor,diraver)
                    sumparhor2 = vpary2hor + vparx2hor
                    sumparver2 = vpary2ver + vparx2ver
                    //console.log(sumparhor2, sumparver2)
                    sumper1hor = sumper1*senx
                    sumper1ver = sumper1*cosx
                    if (dirahor == 'left') {
                        if (sumper1hor > 0) {
                            sumper1hor = -sumper1hor
                        }
                    }else{
                        if (sumper1hor < 0) {
                            sumper1hor = -sumper1hor
                        }
                    }
                
                    if (diraver == 'down') {
                        if (sumper1ver > 0) {
                            sumper1ver = -sumper1ver
                        }
                    }else{
                        if (sumper1ver < 0) {
                            sumper1ver = -sumper1ver
                        }
                    }
                    console.log('a velocidade horizontal da bola b é:', sumparhor2 + sumper1hor)
                    console.log('a velocidade vertical da bola b é:', sumparver2 + sumper1ver)
                    console.log('verificar',sumpar2**2 + sumper1**2, (sumparhor2 + sumper1hor)**2 + (sumparver2 + sumper1ver)**2)
                    pokebolas[b].velx = sumparhor2 + sumper1hor
                    pokebolas[b].vely = (sumparver2 + sumper1ver)*-1
                }else if (collidea == 1 || collideb == 1) {
                    console.log('uma pokebola vai se chocar na outra')
                    if (collidea == 1) {
                    console.log('a bola a irá se chocar com a b')
                    }else{
                        console.log('a bola b irá se chocar com a a')
                        console.log('a:',pokebolas[a].color, 'b:', pokebolas[b].color)
                        console.log(vx1,vy1,vx2,vy2)
                    }
                        modsum1 = sumper1
                        if (sumper1 < 0) {
                            modsum1 = -sumper1
                        }
                        
                        modsum2 = sumper2
                        if (sumper2 < 0) {
                            modsum2 = -sumper2
                        }
                
                        cango = false
                        if (collidea == 1) {
                        if (modsum1 > modsum2) {
                            cango = true
                            console.log('ok, realmente irá ocorrer a colisão')
                            console.log('a bola a terá sua velocidade reduzida, mantendo a direção')
                        }else{
                            console.log('não ocorrerá a colisão')
                        }
                    }else{
                        if (modsum2 > modsum1) {
                            cango = true
                            console.log('ok, realmente irá ocorrer a colisão')
                            console.log('a bola b terá sua velocidade reduzida, mantendo a direção')
                        }else{
                            console.log('não ocorrerá a colisão')
                        }
                    }
                    if (cango == true) {
                    console.log('a bola a ficará com a velocidade na perpendicular de:',sumper2, dirahor, diraver)
                    sumparhor1 = vpary1hor + vparx1hor
                    sumparver1 = vpary1ver + vparx1ver
                    //console.log(sumparhor1, sumparver1)
                    sumper2hor = sumper2*senx
                    sumper2ver = sumper2*cosx
                    if (dirahor == 'left') {
                        if (sumper2hor > 0) {
                            sumper2hor = -sumper2hor
                        }
                    }else{
                        if (sumper2hor < 0) {
                            sumper2hor = -sumper2hor
                        }
                    }
                
                    if (diraver == 'down') {
                        if (sumper2ver > 0) {
                            sumper2ver = -sumper2ver
                        }
                    }else{
                        if (sumper2ver < 0) {
                            sumper2ver = -sumper2ver
                        }
                    }
                    console.log('a velocidade horizontal da bola a é:', sumparhor1 + sumper2hor)
                    console.log('a velocidade vertical da bola a é:', sumparver1 + sumper2ver)
                    console.log('verificar',sumpar1**2 + sumper2**2, (sumparhor1 + sumper2hor)**2 + (sumparver1 + sumper2ver)**2)
                    pokebolas[a].velx = sumparhor1 + sumper2hor
                    pokebolas[a].vely = (sumparver1 + sumper2ver)*-1
                
                    console.log('a bola b ficará com a velocidade na perpendicular de:',sumper1,dirbhor,dirbver)
                    sumparhor2 = vpary2hor + vparx2hor
                    sumparver2 = vpary2ver + vparx2ver
                    //console.log(sumparhor2, sumparver2)
                    sumper1hor = sumper1*senx
                    sumper1ver = sumper1*cosx
                    if (dirbhor == 'left') {
                        if (sumper1hor > 0) {
                            sumper1hor = -sumper1hor
                        }
                    }else{
                        if (sumper1hor < 0) {
                            sumper1hor = -sumper1hor
                        }
                    }
                
                    if (dirbver == 'down') {
                        if (sumper1ver > 0) {
                            sumper1ver = -sumper1ver
                        }
                    }else{
                        if (sumper1ver < 0) {
                            sumper1ver = -sumper1ver
                        }
                    }
                    console.log('a velocidade horizontal da bola b é:', sumparhor2 + sumper1hor)
                    console.log('a velocidade vertical da bola b é:', sumparver2 + sumper1ver)
                    console.log('verificar',sumpar2**2 + sumper1**2, (sumparhor2 + sumper1hor)**2 + (sumparver2 + sumper1ver)**2)
                    pokebolas[b].velx = sumparhor2 + sumper1hor
                    pokebolas[b].vely = (sumparver2 + sumper1ver)*-1
                }
                    }else{
                    console.log('ixi, aí acontece nada')
                }
                //console.log('velocidade 1: ',sumpar1**2 + sumper1**2,vx1**2 + vy1**2)
                //console.log('velocidade 2: ',sumpar2**2 + sumper2**2,vx2**2 + vy2**2)
                //console.log('vx1:',vx1,'vy1:',vy1)
                //console.log('resultante das velocidades vx1 e vy1:',(vx1**2 + vy1**2)**(1/2))
                //console.log('resultante das velocidades // e ⟂:',(sumpar1**2 + sumper1**2)**(1/2))
                //console.log('resultante sumpar1 e sumper2:',(sumpar1**2 + sumper2**2)**2)
                //console.log('vx2:',vx2,'vy2:',vy2)
                //console.log('resultante das velocidades vx2 e vy2:',(vx2**2 + vy2**2)**(1/2))
                //console.log('resultante das velocidades // e ⟂:',(sumpar2**2 + sumper2**2)**(1/2))
                pokebolas[a].r = ''
                pokebolas[b].r = ''

                console.log('COLISÃO ENTRE',pokebolas[a].color,' e ', pokebolas[b].color)
                console.log('a:',pokebolas[a].color, 'b:', pokebolas[b].color)
                console.log(pokebolas[a].color,vx1,vy1)
                console.log(pokebolas[b].color,vx2,vy2)
                //loop = false
                /*
                pokebolas[a].velx = 0
                pokebolas[a].vely = 0
                pokebolas[b].velx = 0
                pokebolas[b].vely = 0
                */
                
                //window.alert('short stop')
                }
                
            }
        }
        }
    
        for (t in pokebolas) {
            pokebolas[t].fstx = Number(`${pokebolas[t].x}`)
            pokebolas[t].fsty = Number(`${pokebolas[t].y}`)
            pokebolas[t].stat = undefined
        }
        col = 0
    }

    for (v = 0; v < 4; v++) {
        if (v == 0) {
            color = 'pink'
            x = 100
            y = 90
            velx = 2
            vely = 1
        }else  if (v == 1){
            color = 'red'
            x = 100
            y = 40
            velx = 2
            vely = 2
        }else if(v == 2){
            color = 'yellow'
            x = 140
            y = 30
        }else if (v == 3){
            color = 'lime'
            x = 270
            y = 20
        }else if(v == 4){
            color = 'cyan'
            x = 80
            y = 60
        }else if (v == 5){
            color = 'orange'
            x = 20
            y = 110
        }else{
            color = 'purple'
            x = 270
            y = 130
        }
        velx = 0
        vely = 0
        
        rangex = [x - width,x + width]
        rangey = [y - width,y + width]
        createPokebola(x,y,width,color,velx,vely,true,rangex,rangey)

        if (v != onpoke) {
        console.log(color,x,y)
        // indo para o referencial da pokebola fixada
        //console.log(pokebolas[onpoke].color,pokex,pokey)
        relx = x - pokex
        rely = pokey - y // lembre-se que o y cresce de cima para baixo 
        console.log('x rel:',relx,'y rel:',rely)

        ac = tgx**2 + 1
         bc = -2*tgx*rely - 2*relx
         cc = relx**2 + rely**2 - 13**2
         delt = bc**2 - 4*ac*cc
         console.log(ac,bc,cc)
         if (delt > 0) {
        r1 = (-bc + delt**(1/2))/(2*ac)
        r2 = (-bc - delt**(1/2))/(2*ac)
        console.log('SOLUÇÕES',r1,r2)
        console.log('pokebola',color,'tá encostando no taco')
        touch = false
        if (caso == 1) {
            console.log('menor que',alvo - pokex,'maior que',origem - pokex)
            console.log('o x precisa ser menor que o ponto alvo e maior que a origem')
            if (r1 <= alvo - pokex && r1 >= origem - pokex) {
                console.log('certo r1')
                touch = true
            }
            if (r2 <= alvo - pokex && r2 >= origem - pokex) {
                console.log('certo r2')
                touch = true
            }
        }else{
            console.log('menor que',origem - pokex,'maior que',alvo - pokex)
            console.log('o x precisa ser menor que a origem e maior que o ponto alvo')
            if (r1 >= alvo - pokex && r1 <= origem - pokex) {
                console.log('certo r1')
                touch = true
            }
            if (r2 >= alvo - pokex && r2 <= origem - pokex) {
                console.log('certo r2')
                touch = true
            }
        }
        if (touch == true) {
            console.log('TUDO CERTO, A POKEBOLA ENCOSTA')
            drawcue = false
        }else{
            console.log('A POKEBOLA NÃO ENCOSTA')
        }

         }else{
            console.log('NÃO TEM SOLUÇÃO')
         }
        }
    }



    function poke() {
        for (a in pokebolas) {
            for (b in pokebolas) {
                if (b != a) {
        if (Math.round(diffx**2 + diffy**2) == (2*radius)**2) {//|| newdiffx**2 + newdiffy**2 < (2*radius)**2) {
            //window.alert('')
            //console.log(cx,cx2)
           // console.log(cy,cy2)
            console.log(`calcular a colisão com ${pokebolas[a].color} e ${pokebolas[b].color}`)
            //console.log(pokebolas[a].velx)
            //console.log(pokebolas[a].r)
            //loop = false
            if (pokebolas[a].r == '' || pokebolas[a].r == undefined) {
                pokebolas[a].r = 1
                pokebolas[b].r = 1
            }
            //vx1 = pokebolas[a].velx/pokebolas[a].r
            //vy1 = -pokebolas[a].vely/pokebolas[a].r // sinal de menos para definir + pra cima e - pra baixo
            vx1 = pokebolas[a].ivelx
            vy1 = -pokebolas[a].ively
        
            //vx2 = pokebolas[b].velx/pokebolas[b].r
            //vy2 = -pokebolas[b].vely/pokebolas[b].r // sinal de menos para definir + pra cima e - pra baixo
            vx2 = pokebolas[b].ivelx
            vy2 = -pokebolas[b].ively
        
            //console.log('vx1: ',vx1)
            //console.log('vy1: ',vy1)
            //console.log('vx2: ',vx2)
            //console.log('vy2: ',vy2)
        
            if (cy < cy2) {
                console.log(`bola ${a} é a de cima`)
                upball = Number(a)
                downball = Number(b)
            }else{
                console.log(`bola ${b} é a de cima`)
                upball = Number(b)
                downball = Number(a)
            }
        
            if (cx > cx2) {
                console.log(`bola ${a} está na direita`)
                rightball = Number(a)
                leftball = Number(b)
            }else{
                console.log(`bola ${b} está na direita`)
                rightball = Number(b)
                leftball = Number(a)
            }
        
            //console.log('triangulo:',diffx,diffy,(diffx**2 + diffy**2)**(1/2))
            senx = diffx/(diffx**2 + diffy**2)**(1/2)
            senx = diffx/(radius*2)
            cosx = diffy/(diffx**2 + diffy**2)**(1/2)
            cosx = diffy/(radius*2)
            //senx = 3**(1/2)/2
            //cosx = 1/2
            //console.log(`senx:${senx.toFixed(2)}, cosx:${cosx.toFixed(2)}, ${(senx**2 + cosx**2).toFixed(0)}`)
        
            //pokebola 1
            //console.log('pokebola 0')
            //console.log(`bola ${a}: vx:${vx1}, vy:${vy1}`)
            vperx1 = vx1*senx // decomposição de vx1 na direção perpendicular(vel relativa)
            vparx1 = vx1*cosx // decomposição de vx1 na direção paralela(vel conservativa)
            vpery1 = vy1*cosx // decomposição de vy1 na direção perpendicular(vel relativa)
            vpary1 = vy1*senx // decomposição de vy1 na direção paralela(vel conservativa)
            vperx1hor = vperx1*senx
            vperx1ver = vperx1*cosx
            vparx1hor = vparx1*cosx
            vparx1ver = vparx1*senx
            vpery1hor = vpery1*senx
            vpery1ver = vpery1*cosx
            vpary1hor = vpary1*cosx
            vpary1ver = vpary1*senx
        
            if (vx1 > 0) {
                if (leftball == a && downball == a || rightball == a && upball == a) {
                 // decomposição de velperx1 = pra cima e pra direita
                 if (vperx1ver < 0) {
                    vperx1ver = -vperx1ver
                 }
                 if (vperx1hor < 0) {
                    vperx1hor = -vperx1hor
                 }
                 // decomposição de velparx1 = pra baixo e pra direita
                 if (vparx1ver > 0) {
                    vparx1ver = -vparx1ver
                 }
                 if (vparx1hor < 0) {
                    vparx1hor = -vparx1hor
                 }
                }else{
                // decomposição de velperx1 = pra baixo e pra direita
                if (vperx1ver > 0) {
                    vperx1ver = -vperx1ver
                 }
                 if (vperx1hor < 0) {
                    vperx1hor = -vperx1hor
                 }
                 // decomposição de velparx1 = pra cima e pra direita
                 if (vparx1ver < 0) {
                    vparx1ver = -vparx1ver
                 }
                 if (vparx1hor < 0) {
                    vparx1hor = -vparx1hor
                 }
                }
            }else{
                if (leftball == a && downball == a || rightball == a && upball == a) {
                    // decomposição de velperx1 = pra baixo e pra esquerda
                    if (vperx1ver > 0) {
                        vperx1ver = -vperx1ver
                     }
                     if (vperx1hor > 0) {
                        vperx1hor = -vperx1hor
                     }
                      // decomposição de velparx1 = pra cima e pra esquerda
                      if (vparx1ver < 0) {
                        vparx1ver = -vparx1ver
                     }
                     if (vparx1hor > 0) {
                        vparx1hor = -vparx1hor
                     }
                }else{
                   // decomposição de velperx1 = pra cima e pra esquerda
                   if (vperx1ver < 0) {
                    vperx1ver = -vperx1ver
                 }
                 if (vperx1hor > 0) {
                    vperx1hor = -vperx1hor
                 }
                 // decomposição de velparx1 = pra baixo e pra esquerda
                 if (vparx1ver > 0) {
                    vparx1ver = -vparx1ver
                 }
                 if (vparx1hor > 0) {
                    vparx1hor = -vparx1hor
                 }
                }
            }
        
            if (downball == a) {
                if (vy1 > 0) {
                    if (leftball == a) { // bola de baixo para a esquerda com velx positiva
                        // vely perpendicular positiva
                        if (vpery1 < 0) {
                            vpery1 = -vpery1
                        }
                        if (vpary1 > 0) {
                            vpary1 = -vpary1
                        }
                        // decomposição de velpery1 = pra cima e pra direita
                        if (vpery1ver < 0) {
                            vpery1ver = -vpery1ver
                        }
                        if (vpery1hor < 0) {
                            vpery1hor = -vpery1hor
                        }
                        //decomposição de velpary1 = pra cima e pra esquerda
                        if (vpary1ver < 0) {
                            vpary1ver = -vpary1ver
                        }
                        if (vpary1hor > 0) {
                            vpary1hor = -vpary1hor
                        }
                    }else{ // bola de baixo para a direita com velx positiva
                        // vely perpendicular negativa
                        if (vpery1 > 0) {
                            vpery1 = -vpery1
                        }
                        if (vpary1 < 0) {
                            vpary1 = -vpary1
                        }
                        // decomposição de velpery1 = pra cima e pra esquerda
                        if (vpery1ver < 0) {
                            vpery1ver = -vpery1ver
                        }
                        if (vpery1hor > 0) {
                            vpery1hor = -vpery1hor
                        }
                         //decomposição de velpary1 = pra cima e pra direita
                         if (vpary1ver < 0) {
                            vpary1ver = -vpary1ver
                        }
                        if (vpary1hor < 0) {
                            vpary1hor = -vpary1hor
                        }
                    }
                }else{
                    if (leftball == a) { // bola de baixo para a esquerda com velx negativa
                        // vely perpendicular negativa
                        if (vpery1 > 0) {
                            vpery1 = -vpery1
                        }
                        if (vpary1 < 0) {
                            vpary1 = -vpary1
                        }
                        // decomposição de velpery1 = pra baixo e pra esquerda
                        if (vpery1ver > 0) {
                            vpery1ver = -vpery1ver
                        }
                        if (vpery1hor > 0) {
                            vpery1hor = -vpery1hor
                        }
                         //decomposição de velpary1 = pra baixo e pra direita
                         if (vpary1ver > 0) {
                            vpary1ver = -vpary1ver
                        }
                        if (vpary1hor < 0) {
                            vpary1hor = -vpary1hor
                        }
                    }else{ // bola de baixo para a direita com velx negativa
                        // vely perpendicular positiva
                        if (vpery1 < 0) {
                            vpery1 = -vpery1
                        }
                        if (vpary1 > 0) {
                            vpary1 = -vpary1
                        }
                        // decomposição de velpery1 = pra baixo e pra direita
                        if (vpery1ver > 0) {
                            vpery1ver = -vpery1ver
                        }
                        if (vpery1hor < 0) {
                            vpery1hor = -vpery1hor
                        }
                         //decomposição de velpary1 = pra baixo e pra esquerda
                         if (vpary1ver > 0) {
                            vpary1ver = -vpary1ver
                        }
                        if (vpary1hor > 0) {
                            vpary1hor = -vpary1hor
                        }
                    }
                }
            }else{
                if (vy1 > 0) {
                    if (rightball == a) { // bola de cima para a direita com velx positiva
                        // vely perpendicular positiva
                        if (vpery1 < 0) {
                            vpery1 = -vpery1
                        }
                        if (vpary1 > 0) {
                            vpary1 = -vpary1
                        }
                        // decomposição de velpery1 = pra cima e pra direita
                        if (vpery1ver < 0) {
                            vpery1ver = -vpery1ver
                        }
                        if (vpery1hor < 0) {
                            vpery1hor = -vpery1hor
                        }
                        //decomposição de velpary1 = pra cima e pra esquerda
                        if (vpary1ver < 0) {
                            vpary1ver = -vpary1ver
                        }
                        if (vpary1hor > 0) {
                            vpary1hor = -vpary1hor
                        }
                    }else{ // bola de cima para a esquerda com velx positiva
                        // vely perpendicular negativa
                        if (vpery1 > 0) {
                            vpery1 = -vpery1
                        }
                        if (vpary1 < 0) {
                            vpary1 = -vpary1
                        }
                        // decomposição de velpery1 = pra cima e pra esquerda
                    if (vpery1ver < 0) {
                        vpery1ver = -vpery1ver
                    }
                    if (vpery1hor > 0) {
                        vpery1hor = -vpery1hor
                    }
                    //decomposição de velpary1 = pra cima e pra direita
                    if (vpary1ver < 0) {
                        vpary1ver = -vpary1ver
                    }
                    if (vpary1hor < 0) {
                        vpary1hor = -vpary1hor
                    }
                    }
                }else{
                    if (rightball == a) { // bola de cima para a direita com velx negativa
                          // vely perpendicular negativa
                          if (vpery1 > 0) {
                            vpery1 = -vpery1
                        }
                        if (vpary1 < 0) {
                            vpary1 = -vpary1
                        }
                        // decomposição de velpery1 = pra baixo e pra esquerda
                        if (vpery1ver > 0) {
                            vpery1ver = -vpery1ver
                        }
                        if (vpery1hor > 0) {
                            vpery1hor = -vpery1hor
                        }
                        //decomposição de velpary1 = pra baixo e pra direita
                        if (vpary1ver > 0) {
                            vpary1ver = -vpary1ver
                        }
                        if (vpary1hor < 0) {
                            vpary1hor = -vpary1hor
                        }
                    }else{ // bola de cima para a esquerda com velx negativa
                        // vely perpendicular positiva
                        if (vpery1 < 0) {
                            vpery1 = -vpery1
                        }
                        if (vpary1 > 0) {
                            vpary1 = -vpary1
                        }
                        // decomposição de velpery1 = pra baixo e para direita
                        if (vpery1ver > 0) {
                            vpery1ver = -vpery1ver
                        }
                        if (vpery1hor < 0) {
                            vpery1hor = -vpery1hor
                        }
                         //decomposição de velpary1 = pra baixo e pra esquerda
                         if (vpary1ver > 0) {
                            vpary1ver = -vpary1ver
                        }
                        if (vpary1hor > 0) {
                            vpary1hor = -vpary1hor
                        }
                    }
                }
            }
            sumper1 = vperx1 + vpery1
            sumpar1 = vparx1 + vpary1
        
            //console.log(`vperx1(vx1*senx):${vperx1.toFixed(2)},vparx1(vx1*cosx):${vparx1.toFixed(2)}`)
            //console.log(`vpery1(vy1*cosx):${vpery1.toFixed(2)},vpary1(vx1*senx):${vpary1.toFixed(2)}`)
        
            //console.log(`soma dos vetores na perpendicular: ${sumper1}`)
            //console.log(`soma dos vetores na paralela: ${sumpar1}`)
            //console.log('verificar:',sumper1**2 + sumpar1**2,vx1**2 + vy1**2)
            
            //console.log('vperx1hor(vperx1*senx):',vperx1hor,'vperx1ver(vperx1*cosx):',vperx1ver)
            //console.log('vparx1hor(vparx1*cosx):',vparx1hor,'vparx1ver(vperx1*senx):',vparx1ver)
            //console.log('vpery1hor(vpery1*senx):',vpery1hor,'vpery1ver(vpery1*cosx):',vpery1ver)
            //console.log('vpary1hor(vpary1*cosx):',vpary1hor,'vpary1ver(vpary1*senx):',vpary1ver)
            //console.log('soma horizontal na perpendicular: ',vperx1hor + vpery1hor)
            //console.log('soma vertical na perpendicular: ',vperx1ver + vpery1ver)
            if (vperx1hor + vpery1hor > 0) {
                //console.log('a resultante perpendicular está pra direita')
                dirahor = 'right'
            }else{
                //console.log('a resultante perpendicular está pra esquerda')
                dirahor = 'left'
            }
            if (vperx1ver + vpery1ver > 0) {
                //console.log('a resultante perpendicular está pra cima')
                diraver = 'up'
            }else{
                //console.log('a resultante perpendicular está pra baixo')
                diraver = 'down'
            }
            //console.log('soma(verificação)',vperx1hor + vparx1hor + vpery1hor + vpary1hor,vx1)
            //console.log('soma(verificação)',vperx1ver + vparx1ver + vpery1ver + vpary1ver,vy1)
            //console.log('verificar velocidade perpendicular',((vpery1hor + vperx1hor)**2 + (vpery1ver + vperx1ver)**2)**(1/2))
        //console.log('verificar velocidade paralela',((vpary1hor + vparx1hor)**2 + (vpary1ver + vparx1ver)**2)**(1/2))
        
        
            //console.log('')
        //pokebola 2
        //console.log('pokebola 1')
        //console.log(`bola ${b}: vx:${vx2}, vy:${vy2}`)
        vperx2 = vx2*senx // decomposição de vx2 na direção perpendicular(vel relativa)
        vparx2 = vx2*cosx // decomposição de vx2 na direção paralela(vel conservativa)
        vpery2 = vy2*cosx // decomposição de vy2 na direção perpendicular(vel relativa)
        vpary2 = vy2*senx // decomposição de vy2 na direção paralela(vel conservativa)
        vperx2hor = vperx2*senx
        vperx2ver = vperx2*cosx
        vparx2hor = vparx2*cosx
        vparx2ver = vparx2*senx
        vpery2hor = vpery2*senx
        vpery2ver = vpery2*cosx
        vpary2hor = vpary2*cosx
        vpary2ver = vpary2*senx
        
        if (vx2 > 0) {
            if (leftball == b && downball == b || rightball == b && upball == b) {
            // decomposição de velperx2 = pra cima e pra direita
            if (vperx2ver < 0) {
                vperx2ver = -vperx2ver
            }
            if (vperx2hor < 0) {
                vperx2hor = -vperx2hor
            }
            // decomposição de velparx2 = pra baixo e pra direita
            if (vparx2ver > 0) {
                vparx2ver = -vparx2ver
            }
            if (vparx2hor < 0) {
                vparx2hor = -vparx2hor
            }
            }else{
            // decomposição de velperx2 = pra baixo e pra direita
            if (vperx2ver > 0) {
                vperx2ver = -vperx2ver
            }
            if (vperx2hor < 0) {
                vperx2hor = -vperx2hor
            }
            // decomposição de velparx2 = pra cima e pra direita
            if (vparx2ver < 0) {
                vparx2ver = -vparx2ver
            }
            if (vparx2hor < 0) {
                vparx2hor = -vparx2hor
            }
            }
        }else{
            if (leftball == b && downball == b || rightball == b && upball == b) {
                // decomposição de velperx2 = pra baixo e pra esquerda
                if (vperx2ver > 0) {
                    vperx2ver = -vperx2ver
                }
                if (vperx2hor > 0) {
                    vperx2hor = -vperx2hor
                }
                // decomposição de velparx2 = pra cima e pra esquerda
                if (vparx2ver < 0) {
                    vparx2ver = -vparx2ver
                }
                if (vparx2hor > 0) {
                    vparx2hor = -vparx2hor
                }
            }else{
            // decomposição de velperx2 = pra cima e pra esquerda
            if (vperx2ver < 0) {
                vperx2ver = -vperx2ver
            }
            if (vperx2hor > 0) {
                vperx2hor = -vperx2hor
            }
            // decomposição de velparx2 = pra baixo e pra esquerda
            if (vparx2ver > 0) {
                vparx2ver = -vparx2ver
            }
            if (vparx2hor > 0) {
                vparx2hor = -vparx2hor
            }
            }
        }
        
        console.log('downball',downball)
        console.log('upball',upball)
        console.log('leftball',leftball)
        console.log('rightball',rightball)
        //console.log(b)
        //console.log(rightball == b)
        if (downball == b) { 
            //console.log('b é de baixo')
            if (vy2 > 0) {
                //console.log('velocidade positiva')
                if (leftball == b) { // bola de baixo para a esquerda com velx positiva
                    //console.log('bola esquerda')
                    // vely perpendicular positiva
                    if (vpery2 < 0) {
                        vpery2 = -vpery2
                    }
                    if (vpary2 > 0) {
                        vpary2 = -vpary2
                    }
                    // decomposição de velpery2 = pra cima e pra direita
                    if (vpery2ver < 0) {
                        vpery2ver = -vpery2ver
                    }
                    if (vpery2hor < 0) {
                        vpery2hor = -vpery2hor
                    }
                    //decomposição de velpary2 = pra cima e pra esquerda
                    if (vpary2ver < 0) {
                        vpary2ver = -vpary2ver
                    }
                    if (vpary2hor > 0) {
                        vpary2hor = -vpary2hor
                    }
                }else{ // bola de baixo para a direita com velx positiva
                    // vely perpendicular negativa
                    //console.log('bola direita')
                    if (vpery2 > 0) {
                        vpery2 = -vpery2
                    }
                    if (vpary2 < 0) {
                        vpary2 = -vpary2
                    }
                    // decomposição de velpery2 = pra cima e pra esquerda
                    if (vpery2ver < 0) {
                        vpery2ver = -vpery2ver
                    }
                    if (vpery2hor > 0) {
                        vpery2hor = -vpery2hor
                    }
                    //decomposição de velpary2 = pra cima e pra direita
                    if (vpary2ver < 0) {
                        vpary2ver = -vpary2ver
                    }
                    if (vpary2hor < 0) {
                        vpary2hor = -vpary2hor
                    }
                }
            }else{
                //console.log('velocidade negativa')
                if (leftball == b) { // bola de baixo para a esquerda com velx negativa
                    // vely perpendicular negativa
                    //console.log('bola esquerda')
                    if (vpery2 > 0) {
                        vpery2 = -vpery2
                    }
                    if (vpary2 < 0) {
                        vpary2 = -vpary2
                    }
                    // decomposição de velpery2 = pra baixo e pra esquerda
                    if (vpery2ver > 0) {
                        vpery2ver = -vpery2ver
                    }
                    if (vpery2hor > 0) {
                        vpery2hor = -vpery2hor
                    }
                    //decomposição de velpary2 = pra baixo e pra direita
                    if (vpary2ver > 0) {
                        vpary2ver = -vpary2ver
                    }
                    if (vpary2hor < 0) {
                        vpary2hor = -vpary2hor
                    }
                }else{ // bola de baixo para a direita com velx negativa
                    // vely perpendicular positiva
                    //console.log('bola direita')
                    if (vpery2 < 0) {
                        vpery2 = -vpery2
                    }
                    if (vpary2 > 0) {
                        vpary2 = -vpary2
                    }
                    // decomposição de velpery2 = pra baixo e pra direita
                    if (vpery2ver > 0) {
                        vpery2ver = -vpery2ver
                    }
                    if (vpery2hor < 0) {
                        vpery2hor = -vpery2hor
                    }
                    //decomposição de velpary2 = pra baixo e pra esquerda
                    if (vpary2ver > 0) {
                        vpary2ver = -vpary2ver
                    }
                    if (vpary2hor > 0) {
                        vpary2hor = -vpary2hor
                    }
                }
            }
        }else{
            //console.log('b é de cima')
            if (vy2 > 0) {
                //console.log('velocidade positiva')
                if (rightball == b) { // bola de cima para a direita com velx positiva
                    // vely perpendicular positiva
                    //console.log('bola direita')
                    if (vpery2 < 0) {
                        vpery2 = -vpery2
                    }
                    if (vpary2 > 0) {
                        vpary2 = -vpary2
                    }
                    // decomposição de velpery2 = pra cima e pra direita
                    if (vpery2ver < 0) {
                        vpery2ver = -vpery2ver
                    }
                    //console.log(vpery2hor)
                    if (vpery2hor < 0) {
                        vpery2hor = -vpery2hor
                    }
                    //console.log(vpery2hor < 0)
                    //decomposição de velpary2 = pra cima e pra esquerda
                    if (vpary2ver < 0) {
                        vpary2ver = -vpary2ver
                    }
                    if (vpary2hor > 0) {
                        vpary2hor = -vpary2hor
                    }
                }else{ // bola de cima para a esquerda com velx positiva
                    // vely perpendicular negativa
                    //console.log('bola esquerda')
                    if (vpery2 > 0) {
                        vpery2 = -vpery2
                    }
                    if (vpary2 < 0) {
                        vpary2 = -vpary2
                    }
                    // decomposição de velpery2 = pra cima e pra esquerda
                if (vpery2ver < 0) {
                    vpery2ver = -vpery2ver
                }
                if (vpery2hor > 0) {
                    vpery2hor = -vpery2hor
                }
                //decomposição de velpary2 = pra cima e pra direita
                if (vpary2ver < 0) {
                    vpary2ver = -vpary2ver
                }
                if (vpary2hor < 0) {
                    vpary2hor = -vpary2hor
                }
                }
            }else{
                //console.log('velocidade negativa')
                if (rightball == b) { // bola de cima para a direita com velx negativa
                    // vely perpendicular negativa
                    //console.log('bola direita')
                    if (vpery2 > 0) {
                        vpery2 = -vpery2
                    }
                    if (vpary2 < 0) {
                        vpary2 = -vpary2
                    }
                    // decomposição de velpery2 = pra baixo e pra esquerda
                    if (vpery2ver > 0) {
                        vpery2ver = -vpery2ver
                    }
                    if (vpery2hor > 0) {
                        vpery2hor = -vpery2hor
                    }
                    //decomposição de velpary2 = pra baixo e pra direita
                    if (vpary2ver > 0) {
                        vpary2ver = -vpary2ver
                    }
                    if (vpary2hor < 0) {
                        vpary2hor = -vpary2hor
                    }
                }else{ // bola de cima para a esquerda com velx negativa
                    // vely perpendicular positiva
                    //console.log('bola esquerda')
                    if (vpery2 < 0) {
                        vpery2 = -vpery2
                    }
                    if (vpary2 > 0) {
                        vpary2 = -vpary2
                    }
                    // decomposição de velpery2 = pra baixo e para direita
                    if (vpery2ver > 0) {
                        vpery2ver = -vpery2ver
                    }
                    if (vpery2hor < 0) {
                        vpery2hor = -vpery2hor
                    }
                    //decomposição de velpary2 = pra baixo e pra esquerda
                    if (vpary2ver > 0) {
                        vpary2ver = -vpary2ver
                    }
                    if (vpary2hor > 0) {
                        vpary2hor = -vpary2hor
                    }
                }
            }
        }
        sumper2 = vperx2 + vpery2
        sumpar2 = vparx2 + vpary2
        
        console.log(`vperx2:${vperx2.toFixed(6)},vparx2:${vparx2.toFixed(6)}`)
        console.log(`vpery2:${vpery2.toFixed(6)},vpary2:${vpary2.toFixed(6)}`)
        
        console.log(`soma dos vetores na perpendicular: ${sumper2}`)
        console.log(`soma dos vetores na paralela: ${sumpar2}`)
        console.log('verificar:',sumper2**2 + sumpar2**2,vx2**2 + vy2**2)
        
        console.log('vperx2hor(vperx2*senx):',vperx2hor,'vperx2ver(vperx2*cosx):',vperx2ver)
            //console.log('vparx2hor(vparx2*cosx):',vparx2hor,'vparx2ver(vperx2*senx):',vparx2ver)
            //console.log('vpery2hor(vpery2*senx):',vpery2hor,'vpery2ver(vpery2*cosx):',vpery2ver)
            //console.log('vpary2hor(vpary2*cosx):',vpary2hor,'vpary2ver(vpary2*senx):',vpary2ver)
        if (vperx2hor + vpery2hor > 0) {
            //console.log('a resultante perpendicular está pra direita')
            dirbhor = 'right'
        }else{
            //console.log('a resultante perpendicular está pra esquerda')
            dirbhor = 'left'
        }
        if (vperx2ver + vpery2ver > 0) {
            //console.log('a resultante perpendicular está pra cima')
            dirbver = 'up'
        }else{
            //console.log('a resultante perpendicular está pra baixo')
            dirbver = 'down'
        }
        console.log('soma(verificação)',vperx2hor + vparx2hor + vpery2hor + vpary2hor,vx2)
        console.log('soma(verificação)',vperx2ver + vparx2ver + vpery2ver + vpary2ver,vy2)
        console.log('verificar velocidade perpendicular',((vpery2hor + vperx2hor)**2 + (vpery2ver + vperx2ver)**2)**(1/2))
        console.log('verificar velocidade paralela',((vpary2hor + vparx2hor)**2 + (vpary2ver + vparx2ver)**2)**(1/2))
        
        //console.log('')
        // checar se efetivamente está ocorrendo uma colisão e definir o caso correspondente
        collidea = 0
        collideb = 0
        if (leftball == a && dirahor == 'right' || rightball == a && dirahor == 'left') {
            //console.log('a bola a está para colidir')
            collidea++
        }
        if (leftball == b && dirbhor == 'right' || rightball == b && dirbhor == 'left') {
            //console.log('a bola b está para colidir')
            collideb++
        }
        if (collidea == 1 && collideb == 1) {
            //window.alert('as pokebolas vão bater de frente')
            //console.log('as pokebolas vão bater de frente')
            //console.log('a bola a ficará com a velocidade na perpendicular de:',sumper2, dirbhor, dirbver)
            sumparhor1 = vpary1hor + vparx1hor
            sumparver1 = vpary1ver + vparx1ver
            //console.log(sumparhor1, sumparver1)
            sumper2hor = sumper2*senx
            sumper2ver = sumper2*cosx
            if (dirbhor == 'left') {
                if (sumper2hor > 0) {
                    sumper2hor = -sumper2hor
                }
            }else{
                if (sumper2hor < 0) {
                    sumper2hor = -sumper2hor
                }
            }
        
            if (dirbver == 'down') {
                if (sumper2ver > 0) {
                    sumper2ver = -sumper2ver
                }
            }else{
                if (sumper2ver < 0) {
                    sumper2ver = -sumper2ver
                }
            }
            //console.log('a velocidade horizontal da bola a é:', sumparhor1 + sumper2hor)
            //console.log('a velocidade vertical da bola a é:', sumparver1 + sumper2ver)
            //console.log('verificar',sumpar1**2 + sumper2**2, (sumparhor1 + sumper2hor)**2 + (sumparver1 + sumper2ver)**2)
            pokebolas[a].velx = sumparhor1 + sumper2hor
            pokebolas[a].vely = (sumparver1 + sumper2ver)*-1
            //console.log('a bola b ficará com a velocidade na perpendicular de:',sumper1,dirahor,diraver)
            sumparhor2 = vpary2hor + vparx2hor
            sumparver2 = vpary2ver + vparx2ver
            //console.log(sumparhor2, sumparver2)
            sumper1hor = sumper1*senx
            sumper1ver = sumper1*cosx
            if (dirahor == 'left') {
                if (sumper1hor > 0) {
                    sumper1hor = -sumper1hor
                }
            }else{
                if (sumper1hor < 0) {
                    sumper1hor = -sumper1hor
                }
            }
        
            if (diraver == 'down') {
                if (sumper1ver > 0) {
                    sumper1ver = -sumper1ver
                }
            }else{
                if (sumper1ver < 0) {
                    sumper1ver = -sumper1ver
                }
            }
            //console.log('a velocidade horizontal da bola b é:', sumparhor2 + sumper1hor)
            //console.log('a velocidade vertical da bola b é:', sumparver2 + sumper1ver)
            //console.log('verificar',sumpar2**2 + sumper1**2, (sumparhor2 + sumper1hor)**2 + (sumparver2 + sumper1ver)**2)
            pokebolas[b].velx = sumparhor2 + sumper1hor
            pokebolas[b].vely = (sumparver2 + sumper1ver)*-1
        }else if (collidea == 1 || collideb == 1) {
            //console.log('uma pokebola vai se chocar na outra')
            if (collidea == 1) {
            //console.log('a bola a irá se chocar com a b')
            }else{
                //console.log('a bola b irá se chocar com a a')
            }
                modsum1 = sumper1
                if (sumper1 < 0) {
                    modsum1 = -sumper1
                }
                
                modsum2 = sumper2
                if (sumper2 < 0) {
                    modsum2 = -sumper2
                }
        
                cango = false
                if (collidea == 1) {
                if (modsum1 > modsum2) {
                    cango = true
                    //console.log('ok, realmente irá ocorrer a colisão')
                    //console.log('a bola a terá sua velocidade reduzida, mantendo a direção')
                }else{
                    //console.log('não ocorrerá a colisão')
                }
            }else{
                if (modsum2 > modsum1) {
                    cango = true
                    //console.log('ok, realmente irá ocorrer a colisão')
                    //console.log('a bola b terá sua velocidade reduzida, mantendo a direção')
                }else{
                    //console.log('não ocorrerá a colisão')
                }
            }
            if (cango == true) {
            //console.log('a bola a ficará com a velocidade na perpendicular de:',sumper2, dirahor, diraver)
            sumparhor1 = vpary1hor + vparx1hor
            sumparver1 = vpary1ver + vparx1ver
            //console.log(sumparhor1, sumparver1)
            sumper2hor = sumper2*senx
            sumper2ver = sumper2*cosx
            if (dirahor == 'left') {
                if (sumper2hor > 0) {
                    sumper2hor = -sumper2hor
                }
            }else{
                if (sumper2hor < 0) {
                    sumper2hor = -sumper2hor
                }
            }
        
            if (diraver == 'down') {
                if (sumper2ver > 0) {
                    sumper2ver = -sumper2ver
                }
            }else{
                if (sumper2ver < 0) {
                    sumper2ver = -sumper2ver
                }
            }
            //console.log('a velocidade horizontal da bola a é:', sumparhor1 + sumper2hor)
            //console.log('a velocidade vertical da bola a é:', sumparver1 + sumper2ver)
            //console.log('verificar',sumpar1**2 + sumper2**2, (sumparhor1 + sumper2hor)**2 + (sumparver1 + sumper2ver)**2)
            pokebolas[a].velx = sumparhor1 + sumper2hor
            pokebolas[a].vely = (sumparver1 + sumper2ver)*-1
        
            //console.log('a bola b ficará com a velocidade na perpendicular de:',sumper1,dirbhor,dirbver)
            sumparhor2 = vpary2hor + vparx2hor
            sumparver2 = vpary2ver + vparx2ver
            //console.log(sumparhor2, sumparver2)
            sumper1hor = sumper1*senx
            sumper1ver = sumper1*cosx
            if (dirbhor == 'left') {
                if (sumper1hor > 0) {
                    sumper1hor = -sumper1hor
                }
            }else{
                if (sumper1hor < 0) {
                    sumper1hor = -sumper1hor
                }
            }
        
            if (dirbver == 'down') {
                if (sumper1ver > 0) {
                    sumper1ver = -sumper1ver
                }
            }else{
                if (sumper1ver < 0) {
                    sumper1ver = -sumper1ver
                }
            }
            //console.log('a velocidade horizontal da bola b é:', sumparhor2 + sumper1hor)
            //console.log('a velocidade vertical da bola b é:', sumparver2 + sumper1ver)
            //console.log('verificar',sumpar2**2 + sumper1**2, (sumparhor2 + sumper1hor)**2 + (sumparver2 + sumper1ver)**2)
            pokebolas[b].velx = sumparhor2 + sumper1hor
            pokebolas[b].vely = (sumparver2 + sumper1ver)*-1
        }
            }else{
            //console.log('ixi, aí acontece nada')
        }
        //console.log('velocidade 1: ',sumpar1**2 + sumper1**2,vx1**2 + vy1**2)
        //console.log('velocidade 2: ',sumpar2**2 + sumper2**2,vx2**2 + vy2**2)
        //console.log('vx1:',vx1,'vy1:',vy1)
        //console.log('resultante das velocidades vx1 e vy1:',(vx1**2 + vy1**2)**(1/2))
        //console.log('resultante das velocidades // e ⟂:',(sumpar1**2 + sumper1**2)**(1/2))
        //console.log('resultante sumpar1 e sumper2:',(sumpar1**2 + sumper2**2)**2)
        //console.log('vx2:',vx2,'vy2:',vy2)
        //console.log('resultante das velocidades vx2 e vy2:',(vx2**2 + vy2**2)**(1/2))
        //console.log('resultante das velocidades // e ⟂:',(sumpar2**2 + sumper2**2)**(1/2))
        pokebolas[a].r = ''
        pokebolas[b].r = ''
        /*
        pokebolas[a].velx = 0
        pokebolas[a].vely = 0
        pokebolas[b].velx = 0
        pokebolas[b].vely = 0
        */
        
        //window.alert('short stop')
        }
    }
    }
    }
    }