/*
canvas: 0 - 300
*/
/*
coisas para fazer:
criar um algoritmo para quando mais de 2 pokebolas se colidirem ao mesmo tempo:
- coordenadas iniciais (check)
- velx/vely positivo/negativo
- comparação das coordenadas iniciais com as coordenadas após a colisão com cada pokebola
*/
// THERE'S SOME ERROR FOR YOU TO FIX(pokebola overlaying the other => try the new code for b com r e a sem r)
let pokebolas = []
loop = true
function load() {
    //console.log(document.querySelector('canvas'))
    canv = document.getElementById("canv")
    c = canv.getContext('2d')
    c.font = "20px Arial";
    c.strokeText("Hello World", 10, 50)
    //console.log(c)

mousex = ''
mousey = ''
function animate() {
   // for (t = 0; t < 2;t++) {
    if (pokebolas.length == 0) { // start - no pokeballs => create pokeballs
for (v = 0; v < 4; v++) {
width = Math.random()*8 + 10
width = 13
velx = Number((Math.random()*1).toFixed(0)) + 1
vely = Number((Math.random()*1).toFixed(0)) + 1

x = Math.random()*(300-width*3) + width
y = Math.random()*(150-width*3) + width
//console.log(velx)


// JUST FOR TESTING
if (v == 0) {
    x = 94
    y = 61
    //x = 126
    //y = 63
    //velx = 4
    //vely = -4
    vely = -vely
    velx = -velx
    color = 'pink'
    velx = -2
    vely = -2
}else  if (v == 1){
    x = 120
    y = 120
    //velx = 9
    //vely = 5
    color = 'red'
}else if(v == 2){
    x = 100
    y = 30
    //x = 118
    //y = 33
    //vely = -vely
    // velx = 3
    //vely = -2
    velx = -velx
    color = 'yellow'
    velx = -1
    vely = 2
}else if (v == 3){
    x = 180
    y = 40
    color = 'lime'
}else if(v == 4){
    x = 120
    y = 9
    velx = -velx
    color = 'cyan'
    //velx = 10
    //vely = 10
}else if (v == 5){
    x = 70
    y = 37
    color = 'orange'
}else{
    x = 150
    y = 30
    //x = 146
    //y = 40
    velx = 2
    vely = 2
    color = 'purple'
}

// RANDOMIZE COORDINATES
//x = Math.random()*(100-width*2) + width
//y = Math.random()*(50-width*2) + width

r = Math.random()*255
g = Math.random()*255
//b = Math.random()*255
//color = Math.trunc(Math.random()*7)
// RANDOMNESS FOR POKEBALL COLOR (PUT BACL WHEN TEST IS OVER)
/*
if (color == 0) {
 color = "red"
}else if(color == 1){
color = "rgb(255, 116, 199)"
}else if(color == 2) {
color = "rgb(44, 186, 248)"
}else if (color == 3){
color = "rgb(255, 167, 66)"
}else if(color == 4){
    color= "rgb(34, 209, 139)"
}else if(color == 5){
    color = "rgb(211, 100, 254)"
}else{
    color = 'yellow'
}
if (v == 0) {
    color = 'pink'
}*/

rangex = [x - width,x + width]
rangey = [y - width,y + width]
createPokebola(x,y,width,color,velx,vely,true,rangex,rangey)
}

// pokeballs collision arrangment
posibs = []
strposibs = []
for (m in pokebolas) {
    for (n in pokebolas) {
        if (m != n) {
        console.log(`${m}.${n}`)
        if (strposibs.indexOf(`${n}.${m}`) == -1) {
            posibs.push({a: `${m}`,b: `${n}`})
            strposibs.push(`${m}.${n}`)
        }
        }
    }
}
console.log(posibs)
    }else{ // pokeballs already on screen
        document.getElementById('diff').innerText = 'iii' + Number((pokebolas[0].x- pokebolas[1].x)**2 + (pokebolas[0].y- pokebolas[1].y)**2)
        c.clearRect(0,0,300,150)

        //console.log('CHECK TOOOUCH**************************************************************************************')
        //checkTouch()
        for (number in pokebolas) {
            /*
            if (pokebolas[number].x > 300 - pokebolas[number].width || pokebolas[number].x < pokebolas[number].width) {
                pokebolas[number].velx = -pokebolas[number].velx
            }
            if (pokebolas[number].y > 150 - pokebolas[number].width || pokebolas[number].y < pokebolas[number].width) {
                pokebolas[number].vely = -pokebolas[number].vely
            }*/
            //console.log('r',pokebolas[number].r,pokebolas[number].r === '')
            if (pokebolas[number].r === '' || pokebolas[number].r == undefined) {
            pokebolas[number].x+=pokebolas[number].velx
            pokebolas[number].y+=pokebolas[number].vely
            }else{
                console.log(`no puedes andar, ${pokebolas[number].color}`)
            }
    
            pokebolas[number].rangex = [pokebolas[number].x - pokebolas[number].width,pokebolas[number].x + pokebolas[number].width]
            pokebolas[number].rangey = [pokebolas[number].y - pokebolas[number].width,pokebolas[number].y + pokebolas[number].width]
            createPokebola(pokebolas[number].x,pokebolas[number].y,pokebolas[number].width,pokebolas[number].color,pokebolas[number].velx,pokebolas[number].vely,false,pokebolas[number].rangex,pokebolas[number].rangey)
            fp = document.getElementById('firstp')
            en = document.getElementById('energy')
            sp = document.getElementById('secp')
            en.innerText = 'energy' + Number(pokebolas[0].velx**2 + pokebolas[0].vely**2 + pokebolas[1].velx**2 + pokebolas[1].vely**2 + pokebolas[2].velx**2 + pokebolas[2].vely**2 )//+ pokebolas[2].velx**2 + pokebolas[2].vely**2)
            if (number == 0) {
            fp.innerHTML = `<span style="color:red;">x</span>:${(pokebolas[number].velx).toFixed(2)},<span style="color:red;">y</span>: ${(pokebolas[number].vely).toFixed(2)} `
            }else{
                sp.innerHTML = `<span style="color:blue;">x</span>: ${(pokebolas[number].velx).toFixed(2)}, <span style="color:blue;">y</span>: ${(pokebolas[number].vely).toFixed(2)}`  
            }
    }
    collision()
    document.getElementById('diff').innerText = '---------------DISTANCE: ' + Number((pokebolas[0].x- pokebolas[1].x)**2 + (pokebolas[0].y- pokebolas[1].y)**2)
    }

    if (loop == true) {
requestAnimationFrame(animate)
    }
}
animate()
}

coll = 0
function collision() {
    for (a in pokebolas) {
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
                    vx1 = pokebolas[a].velx
                    vy1 = -pokebolas[a].vely
                
                    //vx2 = pokebolas[b].velx/pokebolas[b].r
                    //vy2 = -pokebolas[b].vely/pokebolas[b].r // sinal de menos para definir + pra cima e - pra baixo
                    vx2 = pokebolas[b].velx
                    vy2 = -pokebolas[b].vely
                
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
                
                //console.log('downball',downball)
                //console.log('upball',upball)
                //console.log('leftball',leftball)
                //console.log('rightball',rightball)
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
    
        for (t in pokebolas) {
            pokebolas[t].fstx = Number(`${pokebolas[t].x}`)
            pokebolas[t].fsty = Number(`${pokebolas[t].y}`)
        }
        realposibsx = []
        realposibsy = []
  
        col = 0
        for (p in posibs) {
            result = detectCollision(posibs[p].a,posibs[p].b,pokebolas[posibs[p].a].x,pokebolas[posibs[p].a].y,pokebolas[posibs[p].b].x,pokebolas[posibs[p].b].y,true,true)
            if (result != undefined) {
                col++
                pokebolas[posibs[p].a].x = result.x1
                pokebolas[posibs[p].a].y = result.y1
                pokebolas[posibs[p].b].x = result.x2
                pokebolas[posibs[p].b].y = result.y2
                pokebolas[posibs[p].a].r = 88
                pokebolas[posibs[p].b].r = 88
            }
        }
        if (col > 1) {
            loop = false
        }
        
         /*
for (p in posibs) {
            pri = pokebolas[posibs[p].a]
            seg = pokebolas[posibs[p].b]
            result = detectCollision(posibs[p].a,posibs[p].b,Number(pri.fstx),Number(pri.fsty),Number(seg.fstx),Number(seg.fsty),true,true)
            if (result != undefined) { //as pokebolas certamente se colidem
                //window.alert('vão colidir')
                if (pokebolas[posibs[p].a].x < pokebolas[posibs[p].b].x) {
                realposibsx.push({a: posibs[p].a, b: posibs[p].b, ax: pokebolas[posibs[p].a].x, bx: pokebolas[posibs[p].b].x,x1:result.x1,y1:result.y1,x2:result.x2,y2:result.y2,acolor: pokebolas[posibs[p].a].color,bcolor: pokebolas[posibs[p].b].color,colide: true})
                }else{
                    realposibsx.push({a: posibs[p].b, b: posibs[p].a, ax: pokebolas[posibs[p].b].x, bx: pokebolas[posibs[p].a].x,x1:result.x2,y1:result.y2,x2:result.x1,y2:result.y1, acolor: pokebolas[posibs[p].b].color,bcolor: pokebolas[posibs[p].a].color,colide: true})
                }
            }else{
                
                if (pokebolas[posibs[p].a].x < pokebolas[posibs[p].b].x) {
                    realposibsx.push({a: posibs[p].a, b: posibs[p].b, ax: pokebolas[posibs[p].a].x, bx: pokebolas[posibs[p].b].x,x1:pokebolas[posibs[p].a].fstx + pokebolas[posibs[p].a].velx,y1:pokebolas[posibs[p].a].fsty + pokebolas[posibs[p].a].vely,x2:pokebolas[posibs[p].b].fstx + pokebolas[posibs[p].b].velx,y2:pokebolas[posibs[p].b].fsty + pokebolas[posibs[p].b].vely,acolor: pokebolas[posibs[p].a].color,bcolor: pokebolas[posibs[p].b].color,colide: false})
                    }else{
                        realposibsx.push({a: posibs[p].b, b: posibs[p].a, ax: pokebolas[posibs[p].b].x, bx: pokebolas[posibs[p].a].x,x1:pokebolas[posibs[p].b].fstx + pokebolas[posibs[p].b].velx,y1:pokebolas[posibs[p].b].fsty + pokebolas[posibs[p].b].vely,x2:pokebolas[posibs[p].a].fstx + pokebolas[posibs[p].a].velx,y2:pokebolas[posibs[p].a].fsty + pokebolas[posibs[p].a].vely,acolor: pokebolas[posibs[p].b].color,bcolor: pokebolas[posibs[p].a].color,colide: false})
                    }
            }
        }
        realposibsx = sortob(realposibsx,'ax','bx')
        //console.log('realposibsx',sortob(realposibsx,'ax','bx'))
        if (realposibsx.length >= 1) {
            //console.log(coll)
        }
        
        if (realposibsx.length > 1) {
            //console.log('É DOOOOOOOOOOOOOOOOOOOOOOOOOOOOO00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOIS')
            //loop = false
        }
        //console.log(realposibsx)
       
        //console.log('realposibsy',sortob(realposibsy,'ax','bx'))
        
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
    if (col > 1) {
        loop = false
    }
    
        
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
        
        
        
        //console.log('difx:',life)
        //console.log('dify',time)
        //console.log('vx1',velx1)
        //console.log('vy1',vely1)
        //console.log('vx2',velx2)
        //console.log('vy2',vely2)
        
        
        //console.log('delta',delta)
        //console.log('raiz1',raiz1)
        //console.log('raiz2',raiz2)
        res = (life + velx1*raiz2 - velx2*raiz2)**2 + (time + vely1*raiz2 - vely2*raiz2)**2
        //console.log('conferir:',res)

        
        //raiz2 = 0.001
        
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
}*/
    }

//criar a pokebola
function createPokebola(x,y,width,color,velx,vely,addornot,rangex,rangey) {
    if (addornot == true) {
    pokebolas.push({x:x,y:y,width:width,color:color,velx:velx,vely:vely,rangex:rangex,rangey:rangey})
    }
    c.beginPath()
    c.fillStyle = 'rgb(255,255,255)'
    c.arc(x,y,width,0,Math.PI,false)
    c.fill()
    c.stroke()
    
    c.beginPath()
    c.fillStyle = color
    c.arc(x,y,width,0,Math.PI,true)
    c.fill()
    c.stroke()

    
    y2 = y
    for ( i=0;i<width*0.1;i++) {
    c.beginPath()
    c.moveTo(x + width,y2)
    c.lineTo(x - width,y2)
    c.stroke()
    y2++
    }

    
    c.beginPath()
    c.arc(x,y,width*0.3,0,Math.PI*2,true)
    c.fillStyle = 'black'
    c.fill()
    c.stroke()

    c.beginPath()
    c.arc(x,y,width*0.2,0,Math.PI*2,true)
    c.fillStyle = 'white'
    c.fill()
    c.stroke()
    
    c.fillStyle = 'black'
    
    
    if (velx < 0) {
    c.fillText('←', x - width - 13,y + 6)
    }else{
        c.fillText('→', x + width - 9,y + 6)
    }
    if (vely < 0) {
    c.fillText('↑', x - 5,y - 8)
    }else{
        c.fillText('↓', x - 5,y + width + 3)
    }
    
    
    
}

function detectCollision(a,b,setx,sety,setx2,sety2,cor1,cor2) {
    newx1 = 'n'
    newx2 = 'n'
    newy1 = 'n'
    newy2 = 'n'
    cx = setx
    cy = sety
    velx1 = pokebolas[a].velx
    vely1 = pokebolas[a].vely
    
    cx2 = setx2
    cy2 = sety2
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
        //console.log('PAROU!')
        //pokebolas[a].velx = 0
        //pokebolas[a].vely = 0
        //pokebolas[b].velx = 0
        //pokebolas[b].vely = 0
        //console.log(`a distância entre as pokebolas ${pokebolas[a].color} e ${pokebolas[b].color} é de ${diffx**2 + diffy**2}`)
        console.log('POKEBOLAAAAS',pokebolas[a].color,pokebolas[b].color, diffx**2 + diffy**2)
        //window.alert('PAROU')
       //loop = false
    }

    if (cor1 == true) {
    velx1 = pokebolas[a].velx
    vely1 = pokebolas[a].vely
    }else{
    velx1 = 0
    vely1 = 0
    }
    if (cor2 == true) {
    velx2 = pokebolas[b].velx
    vely2 = pokebolas[b].vely
    }else{
    velx2 = 0
    vely2 = 0
    }
    
    newcx = cx + velx1
    newcy = cy + vely1
    newcx2 = cx2 + velx2
    newcy2 = cy2 + vely2
    
    newdiffx = newcx - newcx2
    newdiffy = newcy - newcy2
    if (newdiffx**2 + newdiffy**2 <= 676 || diffx**2 + diffy**2 <= 676) {//if (diffx**2 + diffy**2 < 1000 || newdiffx**2 + newdiffy**2 < 1000) {
        //console.log('')
        //console.log('NOW',diffx**2 + diffy**2)
        //console.log('NEXT',newdiffx**2 + newdiffy**2)
        }

    // código para antecipar a colisão, impedindo que a pokebola passe por cima da outra
    //if (Math.round(newdiffx**2 + newdiffy**2) < (pokebolas[a].width + pokebolas[b].width)**2) {
        //console.log('')
        //console.log('round',coll)
        //console.log('no, you wont')
        //console.log(`bola ${pokebolas[a].color} com bola ${pokebolas[b].color}`)
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
            //console.log(`a bola ${pokebolas[b].color} n irá bater de frente horizontalmente`)
        }else{
            xvelx2 = 'x'
        }
        if (rightball == a && velx1 > 0 || leftball == a && velx1 < 0) {
            //console.log(`a bola ${pokebolas[a].color} n irá bater de frente horizontalmente`)
        }else{
            xvelx1 = 'x'
        }
        if (upball == b && vely2 < 0 || downball == b && vely2 > 0) {
            //console.log(`a bola ${pokebolas[b].color} n irá bater de frente verticalmente`)
        }else{
            xvely2 = 'x'
        }
        if (upball == a && vely1 < 0 || downball == a && vely1 > 0) {
            //console.log(`a bola ${pokebolas[a].color} n irá bater de frente verticalmente`)
        }else{
            xvely1 = 'x'
        }

        if (xvelx2 == '' && xvely2 == '') {
            xvelx2 = ''
            xvely2 = ''
        }else{
            xvelx2 = 'x'
            xvely2 = 'x'
        }

        if (xvelx1 == '' && xvely1 == '') {
            xvelx1 = ''
            xvely1 = ''
        }else{
            xvelx1 = 'x'
            xvely1 = 'x'
        }
        
    /*
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
   */
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
        if (delta >= 0) {
        raiz1 = (-bex + delta**(1/2))/(2*aex)
        raiz2 = (-bex - delta**(1/2))/(2*aex)
    
        /*
        console.log('x1:',pokebolas[a].x)
        console.log('y1:',pokebolas[a].y)
        console.log('x2:',pokebolas[b].x)
        console.log('y2:',pokebolas[b].y)
        */
       /*
        pokebolas[a].fstx = `${pokebolas[a].x}`
        pokebolas[a].fsty = `${pokebolas[a].y}`
        pokebolas[b].fstx = `${pokebolas[b].x}`
        pokebolas[b].fsty = `${pokebolas[b].y}`
      */

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
        
        //console.log('raiz1',raiz1,'raiz2',raiz2)
        //res = (life + velx1*raiz2 - velx2*raiz2)**2 + (time + vely1*raiz2 - vely2*raiz2)**2
        //console.log('conferir:',res)
        
        //console.log('now',diffx**2 + diffy**2)
        //console.log('next',newdiffx**2 + newdiffy**2)
        for (o in pokebolas) {
            //console.log(pokebolas[o].r)
        }
        //window.alert('COLISÃO')
        if (raiz2 > 0 && raiz2 <= 1) {
            console.log('raiz1',raiz1,'raiz2',raiz2)
            //pokebolas[a].r = raiz2
            //pokebolas[b].r = raiz2
            return {x1: newx1,x2: newx2, y1: newy1, y2: newy2}
        }
    }
    //}
}

function checkTouch () {
    pokesr = 0
    for (ce in posibs) {
     //console.log(posibs[ce].a, posibs[ce].b)
     dis = (pokebolas[posibs[ce].a].x - pokebolas[posibs[ce].b].x)**2 + (pokebolas[posibs[ce].a].y - pokebolas[posibs[ce].b].y)**2
     //console.log(dis)
     //console.log('HEYYY',(pokebolas[posibs[ce].a].x + pokebolas[posibs[ce].a].velx - pokebolas[posibs[ce].b].x - pokebolas[posibs[ce].b].velx)**2 + (pokebolas[posibs[ce].a].y + pokebolas[posibs[ce].a].vely - pokebolas[posibs[ce].b].y - pokebolas[posibs[ce].b].vely)**2)

     if (Math.round(dis) == 676 && (pokebolas[posibs[ce].a].x + pokebolas[posibs[ce].a].velx - pokebolas[posibs[ce].b].x - pokebolas[posibs[ce].b].velx)**2 + (pokebolas[posibs[ce].a].y + pokebolas[posibs[ce].a].vely - pokebolas[posibs[ce].b].y - pokebolas[posibs[ce].b].vely)**2 < 676){
        //console.log(`as pokebolas ${pokebolas[posibs[ce].a].color} e ${pokebolas[posibs[ce].b].color} estão se tocando perfeitamente`)
        pokebolas
        
        pokesr+= 2
        pokebolas[posibs[ce].a].r = 88
        pokebolas[posibs[ce].b].r = 88
       
        if (pokebolas[posibs[ce].a].velx != 0) {
        pokebolas[posibs[ce].a].ivelx = Number(`${pokebolas[posibs[ce].a].velx}`)
        }
        if (pokebolas[posibs[ce].a].vely != 0) {
            pokebolas[posibs[ce].a].ively = Number(`${pokebolas[posibs[ce].a].vely}`)
            }
        if (pokebolas[posibs[ce].b].velx != 0) {
        pokebolas[posibs[ce].b].ivelx = Number(`${pokebolas[posibs[ce].b].velx}`)
        }
        if (pokebolas[posibs[ce].b].vely != 0) {
            pokebolas[posibs[ce].b].ively = Number(`${pokebolas[posibs[ce].b].vely}`)
            }

            //loop = false
            /*
        pokebolas[posibs[ce].a].velx = 0
        pokebolas[posibs[ce].a].vely = 0
        pokebolas[posibs[ce].b].velx = 0
        pokebolas[posibs[ce].b].vely = 0
        */
    }   
}
if (pokesr >= 2) {
    //window.alert('UEPA EPA',pokesr)
    //loop = false
}
}


function poke() {
    for (a in pokebolas) {
        for (b in pokebolas) {
            if (b != a) {
    if (Math.round(diffx**2 + diffy**2) == 676) {//|| newdiffx**2 + newdiffy**2 < 676) {
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
    
    //console.log('downball',downball)
    //console.log('upball',upball)
    //console.log('leftball',leftball)
    //console.log('rightball',rightball)
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


// SIDE FUNCTIONS

function redoCollisions() {
    for (ba = posibin - 1; ba >= 0; ba--) {//for (ba = 0; ba < posibin; ba++) {
        console.log(ba)
        console.log('precisa refazer essa colisão aqui:')
        console.log(realposibsx[ba])
        if (realposibsx[ba].colide == true) {
        re = detectCollision(realposibsx[ba].a,realposibsx[ba].b,pokebolas[realposibsx[ba].a].fstx,pokebolas[realposibsx[ba].a].fsty,pokebolas[realposibsx[ba].b].x,pokebolas[realposibsx[ba].b].y,true,false)
        
        if (re != undefined) {
            console.log(`hey,wo,wo${re.x1},${re.y1},${re.x2},${re.y2}`)
            if (pokebolas[realposibsx[ba].a].x != pokebolas[realposibsx[ba].a].fstx) {
            if (pokebolas[realposibsx[ba].a].velx > 0 && pokebolas[realposibsx[ba].a].x > re.x1 || pokebolas[realposibsx[ba].a].velx < 0 && pokebolas[realposibsx[ba].a].x < re.x1) {
            pokebolas[realposibsx[ba].a].x = re.x1
            pokebolas[realposibsx[ba].a].y = re.y1
            }
        }else{
            pokebolas[realposibsx[ba].a].x = re.x1
            pokebolas[realposibsx[ba].a].y = re.y1
        }
        }
        }else{
            console.log('epa, n se colidem, porém pode ter coisa aí')
            re = detectCollision(realposibsx[ba].a,realposibsx[ba].b,pokebolas[realposibsx[ba].a].fstx,pokebolas[realposibsx[ba].a].fsty,pokebolas[realposibsx[ba].b].x,pokebolas[realposibsx[ba].b].y,true,false)
            console.log(re)
            if (re != undefined) {
                console.log(`hey,wo,wo${re.x1},${re.y1},${re.x2},${re.y2}`)
                if (pokebolas[realposibsx[ba].a].x == pokebolas[realposibsx[ba].a].fstx) {
                if (pokebolas[realposibsx[ba].a].velx > 0 && realposibsx[ba].x1 > re.x1 || pokebolas[realposibsx[ba].a].velx < 0 && realposibsx[ba].x1 < re.x1) {
                    pokebolas[realposibsx[ba].a].x = re.x1
                    pokebolas[realposibsx[ba].a].y = re.y1
                    //loop = false
                }
            }else{
                if (pokebolas[realposibsx[ba].a].velx > 0 && pokebolas[realposibsx[ba].a].x > re.x1 || pokebolas[realposibsx[ba].a].velx < 0 && pokebolas[realposibsx[ba].a].x < re.x1) {
                    pokebolas[realposibsx[ba].a].x = re.x1
                    pokebolas[realposibsx[ba].a].y = re.y1
                    //loop = false
                }
            }
            }
        }
    }
}

function POKEBOL() {
    c.clearRect(0,0,300,150)
    for (num in pokebolas) {
    createPokebola(pokebolas[num].x,pokebolas[num].y,pokebolas[num].width,pokebolas[num].color,pokebolas[num].velx,pokebolas[num].vely,false,0,0)
    }
}
//saber quando o mouse encosta em uma pokebola
window.addEventListener('mousemove', function(event) {
    
    canv = document.querySelector('canvas')
    cWidth = canv.offsetWidth
    wWidth = this.window.innerWidth
    cHeight = canv.offsetHeight
    wHeight = this.window.innerHeight
    dif = wWidth - cWidth
    //console.log('it moved')
    //console.log(event.x - dif/2,event.y)
    
    //console.log(wWidth,cWidth,dif/2)
    //console.log(((event.x - dif/2)/cWidth)*300)
    mousex = ((event.x - dif/2)/cWidth)*300
    mousey = ((event.y - 80.48)/cHeight)*150
    //this.document.getElementById('x').innerText = mousex
    //this.document.getElementById('y').innerText = mousey
    //console.log(wHeight,cHeight)
    //console.log(event.y - 80.48)
    //console.log(((event.y - 80.48)/cHeight)*150)
    if (mousex < 300 && mousex > 0 && mousey < 150 && mousey > 0) {
        //this.document.getElementById('x').innerText += 'within'
    }
    
    /*
    for (p in pokebolas) {
        px = pokebolas[p].x
        pw = pokebolas[p].width
        py = pokebolas[p].y
        //console.log(px - pw, px + pw, py - pw, py + pw)
        if (mousex > px - pw && mousex < px + pw && mousey > py - pw && mousey < py + pw) {
            //console.log('OWO')
            r = Math.random()*255
            g = Math.random()*255
            b = Math.random()*255
            //pokebolas[p].color = `rgb(${r},${g},${b})`
        }
    }*/
})

window.addEventListener('keyup',function(event) {
    console.log(event.key)
    if (event.key == 'p' || event.ley == 'P') {
       loop = false
    }
    if (event.key == 'c') {
      POKEBOL()
    }
    if (event.key == 'd') {
       poke()
     }
   }) 

   function sortob(n, pam, pim) {
    var maiorparamenor = []
    var posiçõesnumeros = []
    var yposition = n

    for (n in yposition) {
        maiorparamenor[n] = {}
        posiçõesnumeros.push(-1)
        maiorparamenor[n][pam] = 100000000000000000000000000000000000000000000000000000000000000000000000000000000
    }

    for (item in yposition) {
        var volume = 0
        var dn = 0
        for (volume in yposition) {
            if (dn == 0) {
                if (yposition[item][pam] < maiorparamenor[volume][pam] || yposition[item][pam] == maiorparamenor[volume][pam] && yposition[item][pim] < maiorparamenor[volume][pim]) {
                    var itens = yposition.length - (Number(volume) + 1)
                    var leng = yposition.length

                    for (ci = 0; ci < itens; ci++) {
                        maiorparamenor[Number(leng) - 1] = maiorparamenor[Number(leng) - 2]
                        posiçõesnumeros[Number(leng) - 1] = posiçõesnumeros[Number(leng) - 2]
                        leng--
                    }
                    maiorparamenor[volume] = yposition[item]
                    posiçõesnumeros[volume] = Number(item)
                    dn = 10
                }
            }
        }
    }

    //return [maiorparamenor,posiçõesnumeros]
    return maiorparamenor
}

function caldis(color1,color2) {
    for (ju in pokebolas){
        console.log(pokebolas[ju].color,color1,pokebolas[ju].color == color1)
        if (pokebolas[ju].color == color1) {
            poke1 = pokebolas[ju]
        }else if(pokebolas[ju].color == color2) {
            poke2 = pokebolas[ju]
        }
    }
    difx = poke1.x - poke2.x
    dify = poke1.y - poke2.y
    answer = difx**2 + dify**2
    return answer
}