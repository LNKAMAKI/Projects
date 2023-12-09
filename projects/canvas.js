/*
canvas: 0 - 300
*/
let pokebolas = []
loop = true
function load() {
    //console.log(document.querySelector('canvas'))
    canv = document.querySelector('canvas')
    c = canv.getContext('2d')
    //console.log(c)

mousex = ''
mousey = ''
function animate() {
   // for (t = 0; t < 2;t++) {
    if (pokebolas.length == 0) {
for (v = 0; v < 3; v++) {
width = Math.random()*8 + 10
width = 13
velx = Number((Math.random()*3).toFixed(0)) + 1
vely = Number((Math.random()*3).toFixed(0)) + 1

x = Math.random()*(300-width*3) + width
y = Math.random()*(150-width*3) + width
//console.log(velx)


if (v == 0) {
    x = 150
    y = 75
}else  if (v == 1){
    x = 250
    y = 120
}else{
    x = 50
    y = 40
}


//x = Math.random()*(100-width*2) + width
//y = Math.random()*(50-width*2) + width

r = Math.random()*255
g = Math.random()*255
b = Math.random()*255
color = Math.trunc(Math.random()*7)
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
}

rangex = [x - width,x + width]
rangey = [y - width,y + width]
createPokebola(x,y,width,color,velx,vely,true,rangex,rangey)
}
    }else{
        document.getElementById('diff').innerText = 'iii' + Number((pokebolas[0].x- pokebolas[1].x)**2 + (pokebolas[0].y- pokebolas[1].y)**2)
        c.clearRect(0,0,300,150)
        
        for (number in pokebolas) {
            if (pokebolas[number].x > 300 - pokebolas[number].width || pokebolas[number].x < pokebolas[number].width) {
                pokebolas[number].velx = -pokebolas[number].velx
            }
            if (pokebolas[number].y > 150 - pokebolas[number].width || pokebolas[number].y < pokebolas[number].width) {
                pokebolas[number].vely = -pokebolas[number].vely
            }
            pokebolas[number].x+=pokebolas[number].velx
            pokebolas[number].y+=pokebolas[number].vely
            pokebolas[number].rangex = [pokebolas[number].x - pokebolas[number].width,pokebolas[number].x + pokebolas[number].width]
            pokebolas[number].rangey = [pokebolas[number].y - pokebolas[number].width,pokebolas[number].y + pokebolas[number].width]
            createPokebola(pokebolas[number].x,pokebolas[number].y,pokebolas[number].width,pokebolas[number].color,pokebolas[number].velx,pokebolas[number].vely,false,pokebolas[number].rangex,pokebolas[number].rangey)
            fp = document.getElementById('firstp')
            sp = document.getElementById('secp')
            if (number == 0) {
            fp.innerHTML = `<span style="color:red;">x</span>: ${Math.trunc(pokebolas[number].rangex[0])} - ${Math.trunc(pokebolas[number].rangex[1])}, <span style="color:red;">y</span>: ${Math.trunc(pokebolas[number].rangey[0])} - ${Math.trunc(pokebolas[number].rangey[1])} `
            }else{
                sp.innerHTML = `<span style="color:blue;">x</span>: ${Math.trunc(pokebolas[number].rangex[0])} - ${Math.trunc(pokebolas[number].rangex[1])}, <span style="color:blue;">y</span>: ${Math.trunc(pokebolas[number].rangey[0])} - ${Math.trunc(pokebolas[number].rangey[1])} `  
            }
    }
    collision()
    document.getElementById('diff').innerText = 'iii' + Number((pokebolas[0].x- pokebolas[1].x)**2 + (pokebolas[0].y- pokebolas[1].y)**2)
    }
//}
    /*
    if (mousex != '' && mousey != '') {
        for (p in pokebolas) {
            px = pokebolas[p].x
            pw = pokebolas[p].width
            py = pokebolas[p].y
            ////console.log(px - pw, px + pw, py - pw, py + pw)
            document.getElementById('px').innerText = `${px + pw}`
            document.getElementById('py').innerText = py - pw + '-' + py + pw
            if (mousex > px - pw && mousex < px + pw && mousey > py - pw && mousey < py + pw) {
                //console.log('OWO')
                r = Math.random()*255
                g = Math.random()*255
                b = Math.random()*255
                pokebolas[p].color = `rgb(${r},${g},${b})`
            }
        }
    }*/
    if (loop == true) {
requestAnimationFrame(animate)
    }
}
animate()
}

coll = 0
function collision() {
    console.log(coll)
   for (a = 0; a < 3;a++) {//for (a in pokebolas) {
        ////console.log('a',a)
        cx = pokebolas[a].x
        cy = pokebolas[a].y
        velx1 = pokebolas[a].velx
        vely1 = pokebolas[a].vely
        
        for (b in pokebolas) {
            if (b != a) {
                ////console.log('b',b)
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
        
        
        if (pokebolas[a].x > 300 - pokebolas[a].width || pokebolas[a].x < pokebolas[a].width) {
            velx1 = -pokebolas[a].velx
        }
        if (pokebolas[a].y > 150 - pokebolas[a].width || pokebolas[a].y < pokebolas[a].width) {
            vely1 = -pokebolas[a].vely
        }
        if (pokebolas[b].x > 300 - pokebolas[b].width || pokebolas[b].x < pokebolas[b].width) {
            velx2 = -pokebolas[b].velx
        }
        if (pokebolas[b].y > 150 - pokebolas[b].width || pokebolas[b].y < pokebolas[b].width) {
            vely2 = -pokebolas[b].vely
        }
        newcx = cx + velx1
        newcx2 = cx2 + velx2
        newcy = cy + vely1
        newcy2 = cy2 + vely2
        newdiffx = newcx - newcx2
        newdiffy = newcy - newcy2
        
        if (diffx**2 + diffy**2 <= (pokebolas[a].width + pokebolas[b].width)**2) {
            console.log('PAROU!')
            window.alert('PAROU')
            //loop = false
        }
        /*
        if (newdiffx**2 + newdiffy**2 <= 1000) {
            console.log('DIFFERENECE',diffx**2 + diffy**2)
            console.log('NEXT',newdiffx**2 + newdiffy**2)
        }
        if (newdiffx**2 + newdiffy**2 <= (pokebolas[a].width + pokebolas[b].width)**2) {
            console.log('AH, n vai n')
            //loop = false
            console.log('bola 0:')
            console.log('velx:',velx1)
            console.log('vely',vely1)
            console.log('bola 1:')
            console.log('velx:',velx2)
            console.log('vely',vely2)
            rvx1vx1 = 1
            rvx2vx1 = velx2/velx1 //cx2
            if (velx1 < 0) {
                rvx1vx1 = -1
            }
            if (velx2 < 0 && rvx2vx1 > 0 || velx2 > 0 && rvx2vx1 < 0) {
                rvx2vx1 = -rvx2vx1
            }
            rvy1vx1 = vely1/velx1 //cy
            rvy2vx1 = vely2/velx1 //cy2
            if (vely1 < 0 && rvy1vx1> 0 || vely1 > 0 && rvy1vx1 < 0) {
                rvy1vx1 = -rvy1vx1
            }
            if (vely2 < 0 && rvy2vx1> 0 || vely2 > 0 && rvy2vx1< 0) {
                rvy2vx1 = -rvy2vx1
            }
            console.log('x:',rvx1vx1,rvx2vx1)
            console.log('y:',rvy1vx1,rvy2vx1)
            addx = rvx1vx1 - rvx2vx1
            addy = rvy1vx1 - rvy2vx1
            console.log(addx,addy)
           
            diffx = -40
            diffy = 20
            console.log('diffx:',diffx,'diffy:',diffy)
            res = (pokebolas[a].width + pokebolas[b].width)**2
            cex = diffx**2 + diffy**2 - res
            bex = 2*(diffx*addx + diffy*addy)
            aex = addx**2 + addy**2
            delta = bex**2 - 4*aex*cex
            console.log('a:',aex)
            console.log('b:',bex)
            console.log('c:',cex)
            if (delta > 0) {
            raiz1 = (-bex + delta**(1/2))/(2*aex)
            raiz2 = (-bex - delta**(1/2))/(2*aex)
            console.log('raiz1:',raiz1)
            console.log('raiz2:',raiz2)
            }else{
                console.log('SEM SOLUÇÃO')
            xres = 0
            raiz1 = -1
            raiz2 = -1
            }
           
            console.log(raiz1,raiz2)
        }
        */
        if (diffx**2 + diffy**2 <= (pokebolas[a].width + pokebolas[b].width)**2 || newdiffx**2 + newdiffy**2 <= (pokebolas[a].width + pokebolas[b].width)**2
        ) {
            //console.log('touching')
            //loop = false
            let vx1 = pokebolas[a].velx
            let vy1 = -pokebolas[a].vely // sinal de menos para definir + pra cima e - pra baixo
            let vx2 = pokebolas[b].velx
            let vy2 = -pokebolas[b].vely // sinal de menos para definir + pra cima e - pra baixo
            

            if (cy < cy2) {
                //console.log(`bola ${a} é a de cima`)
                upball = a
                downball = b
            }else{
                //console.log(`bola ${b} é a de cima`)
                upball = b
                downball = a
            }

            if (cx > cx2) {
                //console.log(`bola ${a} está na direita`)
                rightball = a
                leftball = b
            }else{
                //console.log(`bola ${b} está na direita`)
                rightball = b
                leftball = a
            }

            
            senx = diffx/(diffx**2 + diffy**2)**(1/2)
            cosx = diffy/(diffx**2 + diffy**2)**(1/2)
            //senx = 3**(1/2)/2
            //cosx = 1/2
            //console.log(`senx:${senx.toFixed(2)}, cosx:${cosx.toFixed(2)}, ${(senx**2 + cosx**2).toFixed(0)}`)

            //pokebola 1
            //console.log('pokebola 1')
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
            //console.log(`soma dos vetores na perpendicular: ${sumper1}`)
            //console.log(`soma dos vetores na paralela: ${sumpar1}`)

            //console.log(`vperx1:${vperx1.toFixed(2)},vparx1:${vparx1.toFixed(2)},vpery1:${vpery1.toFixed(2)},vpary1:${vpary1.toFixed(2)}`)
            
            //console.log('vpery1hor:',vpery1hor,'vpery1ver:',vpery1ver)
            //console.log('vperx1hor:',vperx1hor,'vperx1ver:',vperx1ver)
            //console.log('')
            //console.log('vpary1hor:',vpary1hor,'vpary1ver:',vpary1ver)
            //console.log('vparx1hor:',vparx1hor,'vparx1ver:',vparx1ver)
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
            //console.log('soma(verificação)',vperx1hor + vparx1hor + vpery1hor + vpary1hor)
            //console.log('soma(verificação)',vperx1ver + vparx1ver + vpery1ver + vpary1ver)
     

            //console.log('')
        //pokebola 2
        //console.log('pokebola 2')
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

        if (downball == b) {
            if (vy2 > 0) {
                if (leftball == b) { // bola de baixo para a esquerda com velx positiva
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
                if (leftball == b) { // bola de baixo para a esquerda com velx negativa
                    // vely perpendicular negativa
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
            if (vy2 > 0) {
                if (rightball == b) { // bola de cima para a direita com velx positiva
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
                }else{ // bola de cima para a esquerda com velx positiva
                    // vely perpendicular negativa
                    if (vpery2 > 0) {
                        vpery2 = -vpery2
                    }
                    if (vpary2 < 0) {
                        vpary2 = -vpary2
                    }
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
            }else{
                if (rightball == b) { // bola de cima para a direita com velx negativa
                    // vely perpendicular negativa
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
        //console.log(`soma dos vetores na perpendicular: ${sumper2}`)
        //console.log(`soma dos vetores na paralela: ${sumpar2}`)

        //console.log(`vperx2:${vperx2.toFixed(2)},vparx2:${vparx2.toFixed(2)},vpery2:${vpery2.toFixed(2)},vpary2:${vpary2.toFixed(2)}`)

        //console.log('vpery2hor:',vpery2hor,'vpery2ver:',vpery2ver)
        //console.log('vperx2hor:',vperx2hor,'vperx2ver:',vperx2ver)
        //console.log('')
        //console.log('vpary2hor:',vpary2hor,'vpary2ver:',vpary2ver)
        //console.log('vparx2hor:',vparx2hor,'vparx2ver:',vparx2ver)
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
        //console.log('soma(verificação)',vperx2hor + vparx2hor + vpery2hor + vpary2hor)
        //console.log('soma(verificação)',vperx2ver + vparx2ver + vpery2ver + vpary2ver)
        //console.log('verificar velocidade perpendicular',((vpery2hor + vperx2hor)**2 + (vpery2ver + vperx2ver)**2)**(1/2))
        //console.log('verificar velocidade paralela',((vpary2hor + vparx2hor)**2 + (vpary2ver + vparx2ver)**2)**(1/2))

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
                if (collidea == 1) {
                if (modsum1 > modsum2) {
                    //console.log('ok, realmente irá ocorrer a colisão')
                    //console.log('a bola a terá sua velocidade reduzida, mantendo a direção')
                }else{
                    console.log('não ocorrerá a colisão')
                }
            }else{
                if (modsum2 > modsum1) {
                    //console.log('ok, realmente irá ocorrer a colisão')
                    //console.log('a bola b terá sua velocidade reduzida, mantendo a direção')
                }else{
                    console.log('não ocorrerá a colisão')
                }
            }
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
            pokebolas[b].velx = sumparhor2 + sumper1hor
            pokebolas[b].vely = (sumparver2 + sumper1ver)*-1
            }else{
            console.log('ixi, aí acontece nada')
        }

        }
    }
        }
    }
    coll++
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
    
}

//saber quando o mouse encosta em uma pokebola
window.addEventListener('mousemove',function(event) {
    
    canv = document.querySelector('canvas')
    cWidth = canv.offsetWidth
    wWidth = this.window.innerWidth
    cHeight = canv.offsetHeight
    wHeight = this.window.innerHeight
    dif = wWidth - cWidth
    ////console.log('it moved')
    ////console.log(event.x - dif/2,event.y)
    
    ////console.log(wWidth,cWidth,dif/2)
    ////console.log(((event.x - dif/2)/cWidth)*300)
    mousex = ((event.x - dif/2)/cWidth)*300
    mousey = ((event.y - 80.48)/cHeight)*150
    //this.document.getElementById('x').innerText = mousex
    //this.document.getElementById('y').innerText = mousey
    ////console.log(wHeight,cHeight)
    ////console.log(event.y - 80.48)
    ////console.log(((event.y - 80.48)/cHeight)*150)
    if (mousex < 300 && mousex > 0 && mousey < 150 && mousey > 0) {
        //this.document.getElementById('x').innerText += 'within'
    }
    
    for (p in pokebolas) {
        px = pokebolas[p].x
        pw = pokebolas[p].width
        py = pokebolas[p].y
        ////console.log(px - pw, px + pw, py - pw, py + pw)
        if (mousex > px - pw && mousex < px + pw && mousey > py - pw && mousey < py + pw) {
            ////console.log('OWO')
            r = Math.random()*255
            g = Math.random()*255
            b = Math.random()*255
            //pokebolas[p].color = `rgb(${r},${g},${b})`
        }
    }
})
