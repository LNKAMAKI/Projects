/*
canvas: 0 - 300
*/
let pokebolas = []
loop = true
function load() {
    console.log(document.querySelector('canvas'))
    canv = document.querySelector('canvas')
    c = canv.getContext('2d')
    console.log(c)

mousex = ''
mousey = ''
function animate() {
   // for (t = 0; t < 2;t++) {
    if (pokebolas.length == 0) {
for (v = 0; v < 2; v++) {
width = Math.random()*8 + 10
width = 13
velx = Number((Math.random()*1).toFixed(0)) + 1
vely = Number((Math.random()*1).toFixed(0)) + 1
//velx = 0.01
//vely = 0.01
x = Math.random()*(300-width*2) + width
y = Math.random()*(150-width*2) + width
console.log(velx)

//x = Math.random()*(100-width*2) + width
//y = Math.random()*(50-width*2) + width

r = Math.random()*255
g = Math.random()*255
b = Math.random()*255
color = Math.trunc(Math.random()*6)
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
}else{
    color = "rgb(211, 100, 254)"
}

if(v == 0) {
    color = "red"
}else{
color = "blue"
}
//color = `rgb(${r},${g},${b})`
console.log('create')
rangex = [x - width,x + width]
rangey = [y - width,y + width]
createPokebola(x,y,width,color,velx,vely,true,rangex,rangey)
}
    }else{
        c.clearRect(0,0,300,150)
        collision()
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
    }
//}
    /*
    if (mousex != '' && mousey != '') {
        for (p in pokebolas) {
            px = pokebolas[p].x
            pw = pokebolas[p].width
            py = pokebolas[p].y
            //console.log(px - pw, px + pw, py - pw, py + pw)
            document.getElementById('px').innerText = `${px + pw}`
            document.getElementById('py').innerText = py - pw + '-' + py + pw
            if (mousex > px - pw && mousex < px + pw && mousey > py - pw && mousey < py + pw) {
                console.log('OWO')
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


function collision() {
    for (a = 0; a < 1;a++) {//for (a in pokebolas) {
        //console.log('a',a)
        minx = pokebolas[a].rangex[0]
        maxx = pokebolas[a].rangex[1]
        miny = pokebolas[a].rangey[0]
        maxy = pokebolas[a].rangey[1]
        cx = pokebolas[a].x
        cy = pokebolas[a].y
        //console.log(minx,maxx,miny,maxy)
       // console.log(cx,cy)
        
        for (b in pokebolas) {
            if (b != a) {
                //console.log('b',b)
                minx2 = pokebolas[b].rangex[0]
        maxx2 = pokebolas[b].rangex[1]
        miny2 = pokebolas[b].rangey[0]
        maxy2 = pokebolas[b].rangey[1]
        cx2 = pokebolas[b].x
        cy2 = pokebolas[b].y
        //console.log(minx2,maxx2,miny2,maxy2)
        //console.log(cx2,cy2)
        diffx = cx - cx2
        diffy = cy - cy2
        if (diffx < 0) {
            diffx = -diffx
        }
        if (diffy < 0) {
            diffy = -diffy
        }
        //console.log('forget it',diffx,diffy)
        //console.log(diffx**2 + diffy**2)
        if (diffx**2 + diffy**2 <= (pokebolas[a].width + pokebolas[b].width)**2) {
            //console.log('touching')
            let vx1 = pokebolas[a].velx
            let vy1 = -pokebolas[a].vely // sinal de menos para definir + pra cima e - pra baixo
            let vx2 = pokebolas[b].velx
            let vy2 = -pokebolas[b].vely // sinal de menos para definir + pra cima e - pra baixo
            loop = false

            if (cy < cy2) {
                console.log(`bola ${a} é a de cima`)
                upball = a
                downball = b
            }else{
                console.log(`bola ${b} é a de cima`)
                upball = b
                downball = a
            }

            if (cx > cx2) {
                console.log(`bola ${a} está na direita`)
                rightball = a
                leftball = b
            }else{
                console.log(`bola ${b} está na direita`)
                rightball = b
                leftball = a
            }

            console.log(`bola ${a}: vx:${vx1}, vy:${vy1}`)
            console.log(`bola ${b}: vx:${vx2}, vy:${vy2}`)
            senx = diffx/(diffx**2 + diffy**2)**(1/2)
            cosx = diffy/(diffx**2 + diffy**2)**(1/2)
            senx = 3**(1/2)/2
            cosx = 1/2
            console.log(`senx:${senx.toFixed(2)}, cosx:${cosx.toFixed(2)}, ${(senx**2 + cosx**2).toFixed(0)}`)

            //pokebola 1
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
            console.log(`soma dos vetores na perpendicular: ${sumper1}`)
            console.log(`soma dos vetores na paralela: ${sumpar1}`)

            console.log(`vperx1:${vperx1.toFixed(2)},vparx1:${vparx1.toFixed(2)},vpery1:${vpery1.toFixed(2)},vpary1:${vpary1.toFixed(2)}`)
            
            console.log('vpery1hor:',vpery1hor,'vpery1ver:',vpery1ver)
            console.log('vpary1hor:',vpary1hor,'vpary1ver:',vpary1ver)

             //pokebola 2
         vperx2 = vx2*senx // decomposição de vx1 na direção perpendicular(vel relativa)
         vparx2 = vx2*cosx // decomposição de vx1 na direção paralela(vel conservativa)
         vpery2 = vy2*cosx // decomposição de vy1 na direção perpendicular(vel relativa)
         vpary2 = vy2*senx // ecomposição de vy1 na direção paralela(vel conservativa)


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
                 }else{ // bola de baixo para a direita com velx positiva
                     // vely perpendicular negativa
                     if (vpery2 > 0) {
                         vpery2 = -vpery2
                     }
                     if (vpary2 < 0) {
                         vpary2 = -vpary2
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
                 }else{ // bola de baixo para a direita com velx negativa
                     // vely perpendicular positiva
                     if (vpery2 < 0) {
                         vpery2 = -vpery2
                     }
                     if (vpary2 > 0) {
                         vpary2 = -vpary2
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
                 }else{ // bola de cima para a esquerda com velx positiva
                     // vely perpendicular negativa
                     if (vpery1 > 0) {
                         vpery1 = -vpery1
                     }
                     if (vpary1 < 0) {
                         vpary1 = -vpary1
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
                 }else{ // bola de cima para a esquerda com velx negativa
                     // vely perpendicular positiva
                     if (vpery1 < 0) {
                         vpery1 = -vpery1
                     }
                     if (vpary1 > 0) {
                         vpary1 = -vpary1
                     }
                 }
             }
         }
         sumper2 = vperx2 + vpery2
         sumpar2 = vparx2 + vpary2
         console.log(`soma dos vetores na perpendicular: ${sumper2}`)
         console.log(`soma dos vetores na paralela: ${sumpar2}`)

         console.log(`vperx2:${vperx2.toFixed(2)},vparx2:${vparx2.toFixed(2)},vpery2:${vpery2.toFixed(2)},vpary2:${vpary2.toFixed(2)}`)
        }
     
            }
        }
    }
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
    
    for (p in pokebolas) {
        px = pokebolas[p].x
        pw = pokebolas[p].width
        py = pokebolas[p].y
        //console.log(px - pw, px + pw, py - pw, py + pw)
        if (mousex > px - pw && mousex < px + pw && mousey > py - pw && mousey < py + pw) {
            console.log('OWO')
            r = Math.random()*255
            g = Math.random()*255
            b = Math.random()*255
            //pokebolas[p].color = `rgb(${r},${g},${b})`
        }
    }
})
