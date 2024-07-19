/*
canvas: 0 - 300
y : 0
   150

*/
/*
coisas para fazer:
criar um algoritmo para quando mais de 2 pokebolas se colidirem ao mesmo tempo:
- coordenadas iniciais (check)
- velx/vely positivo/negativo
- comparação das coordenadas iniciais com as coordenadas após a colisão com cada pokebola
*/
// THERE'S SOME ERROR FOR YOU TO FIX(pokebola overlaying the other => try the new code for b com r e a sem r)
// IMPORTANT: quando o mecanismo de detectar colisões (linha 1307) adiciona as possíveis colisões ao sortob, ele utiliza a função detectCollision - que simula o que irá acontecer no próximo frame e, consequentemente, se as pokebolas irão ou não bater (se a raiz2 - que é a menor raiz for maior ou igual a zero e menor ou igual a 1, significa que as pokebolas irão se chocar, já que o x da expressão se refere à porcentagem das velocidades das pokebolas necessária para que elas se encostem). Mas note que, duas pokebolas que incialmente não colidem uma com a outra podem posteriormente colidir caso suas velocidades forem alteradas após a colisão com outras pokebolas, o que necessitaria de nova checagem(que pode acabar em um loop infinito)
let pokebolas = []
// to go back to testing mode, change loop to true
loop = true
radius = 8
comp = 280
alt = 132
contagem = 0
potwidth = 10
pokepos = [{x:150,y:75,color:'blue'},{x:30,y:75,color:'black'}]
//{x:230,y:75,color:'brown'},{x:230,y:45,color:'yellow'},{x:230,y:105,color:'green'},{x:240,y:60,color:'white'}]
//pokepos = [{x:20,y:130}]
function setTable() {
    c.beginPath()
    c.lineWidth = '1.3'
    c.strokeStyle = 'black'
    c.strokeRect((300 - comp)/2,(150 - alt)/2,comp,alt)
    c.arc((300 - comp)/2,(150 - alt)/2,potwidth,Math.PI/2,2*Math.PI)
    c.fillStyle = 'white'
    c.fill()
    c.stroke()

    c.arc((300 - comp)/2,(150 - alt)/2,potwidth,0,Math.PI/2)
    c.fillStyle = 'white'
    //c.fill()
    //c.stroke()

    c.beginPath()
    c.arc((300 - comp)/2,150 - (150 - alt)/2,potwidth,0,3*Math.PI/2)
    c.fillStyle = 'white'
    c.fill()
    c.stroke()

    c.beginPath()
    c.arc(300 - (300 - comp)/2,150 - (150 - alt)/2,potwidth,0,Math.PI)
    c.fillStyle = 'white'
    c.fill()
    //c.stroke()

    c.beginPath()
    c.arc(300 - (300 - comp)/2,150 - (150 - alt)/2,potwidth,3*Math.PI/2,Math.PI)
    c.fillStyle = 'white'
    c.fill()
    //c.stroke()

    c.beginPath()
    c.arc(300 - (300 - comp)/2,150 - (150 - alt)/2,potwidth,0,Math.PI)
    c.stroke()

    c.beginPath()
    c.arc(300 - (300 - comp)/2,150 - (150 - alt)/2,potwidth,3*Math.PI/2,Math.PI*2)
    c.stroke()

    c.beginPath()
    c.arc(300 - (300 - comp)/2,(150 - alt)/2,potwidth,0,Math.PI/2)
    c.fillStyle = 'white'
    c.fill()
    //c.stroke()

    c.beginPath()
    c.arc(300 - (300 - comp)/2,(150 - alt)/2,potwidth,Math.PI,Math.PI/2)
    c.fillStyle = 'white'
    c.fill()
    //c.stroke()

    c.beginPath()
    c.arc(300 - (300 - comp)/2,(150 - alt)/2,potwidth,0,Math.PI/2)
    c.stroke()

    c.beginPath()
    c.arc(300 - (300 - comp)/2,(150 - alt)/2,potwidth,Math.PI,Math.PI/2)
    c.stroke()


}
function load() {
    //console.log(document.querySelector('canvas'))
    canv = document.getElementById("canv")
    c = canv.getContext('2d')
    c.font = "20px Arial";
    //c.strokeText("Hello World", 10, 50)
    c.strokeStyle = 'black'
    setTable()
    //c.strokeStyle = 'black'
    //c.stroke()
    
    //console.log(c)

mousex = ''
mousey = ''
function animate() {
   // for (t = 0; t < 2;t++) {
    if (pokebolas.length == 0) { // start - no pokeballs => create pokeballs
        
velj = []
for (v = 0; v < pokepos.length; v++) {
width = Math.random()*8 + 10
width = radius
velx = Number((Math.random()*0.2).toFixed(5)) + 0.5
vely = Number((Math.random()*0.2).toFixed(5)) + 0.5
velx = Number((Math.random()*1).toFixed(0)) + 2
vely = Number((Math.random()*1).toFixed(0)) + 2
//velx = 1.008
//vely = 7


/*
if (v == 0) {
    velx = 1
    vely = 1
}else{
    velx = 1
    vely = 1.2
}*/


//console.log(velx)


// JUST FOR TESTING
/*
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
    //velx = -1
    //vely = 2
}else if (v == 3){
    x = 127
    y = 40
    //velx = -2
    //vely = -2
    color = 'lime'
}else if(v == 4){
    x = 118
    y = 6
    velx = -4
    vely = 4
    color = 'cyan'
   // velx = -velx
    //velx = 10
    //vely = 10
}else if (v == 5){
    x = 70
    y = 37
    color = 'orange'
    //velx = 2
    //vely = -2
}else{
    x = 146
    y = 30
    //x = 146
    //y = 40
    //velx = 2
    //vely = 2
    color = 'purple'
}
*/
velj.push(`velx${v}:${velx}`)
velj.push(`vely${v}:${vely}`)

if (v == 0) {
    color = 'pink'
    x = 100
    y = 90
    velx = 1
    vely = 3
    //const vx1 = [...velx]
    //const vy1 = [...vely]
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
color = pokepos[v].color
x = pokepos[v].x
y = pokepos[v].y
//velx = 0
//vely = 0
//loop = false
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
        //console.log(`${m}.${n}`)
        if (strposibs.indexOf(`${n}.${m}`) == -1) {
            posibs.push({a: `${m}`,b: `${n}`})
            strposibs.push(`${m}.${n}`)
        }
        }
    }
}
//console.log(posibs)


    }else{ // pokeballs already on screen
       // document.getElementById('diff').innerText = 'iii' + Number((pokebolas[0].x- pokebolas[1].x)**2 + (pokebolas[0].y- pokebolas[1].y)**2)
       contagem++
       //console.log('CONTAGEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEM',contagem)
        c.clearRect(0,0,300,150)

        //console.log('CHECK TOOOUCH**************************************************************************************')
        //checkTouch()
        //console.log('pokebola velx',pokebolas[0].velx)
        for (number in pokebolas) {
           
            //console.log('r',pokebolas[number].r,pokebolas[number].r === '')
            if (pokebolas[number].r === '' || pokebolas[number].r == undefined) {
            // colocando o atrito: f = 0.03
            
            
         
            //console.log(pokebolas[number].color)
            //console.log(pokebolas[number].velx)
            
            
           
            hipo = (pokebolas[number].velx**2 + pokebolas[number].vely**2)**(1/2)
            sena = Math.abs(pokebolas[number].vely/hipo)
            cosa = Math.abs(pokebolas[number].velx/hipo)

            /*
            if (pokebolas[number].velx > 0) {
            if (pokebolas[number].velx > 0.015*cosa) {
            pokebolas[number].velx -= 0.015*cosa
            }else{
                //console.log('ZERO')
            pokebolas[number].velx = 0
            }
            }else if (pokebolas[number].velx != 0){
                if (pokebolas[number].velx < 0.015*cosa) {
                    pokebolas[number].velx += 0.015*cosa
                    }else{
                        //console.log('ZERO')
                    pokebolas[number].velx = 0
                    }
            }
        
            
            if (pokebolas[number].vely > 0) {
                if (pokebolas[number].vely > 0.015*sena) {
                pokebolas[number].vely -= 0.015*sena
                }else{
                    //console.log('ZERO')
                pokebolas[number].vely = 0
                }
                }else if (pokebolas[number].vely != 0){
                    if (pokebolas[number].vely < 0.015*sena) {
                        pokebolas[number].vely += 0.015*sena
                        }else{
                            //console.log('ZERO')
                        pokebolas[number].vely = 0
                        }
                }
                */
            
            pokebolas[number].x+=pokebolas[number].velx
            
            if (pokebolas[number].y + pokebolas[number].vely <= 150 - radius && pokebolas[number].y + pokebolas[number].vely >= radius) {
            pokebolas[number].y+=pokebolas[number].vely
            }else if (pokebolas[number].y + pokebolas[number].vely > 150 - radius){
            pokebolas[number].y = 150 - radius
            pokebolas[number].vely = -pokebolas[number].vely
                //console.log(`no puedes andar, ${pokebolas[number].color}`)
            }else{
                pokebolas[number].y = radius
                pokebolas[number].vely = -pokebolas[number].vely
            }

            if (pokebolas[number].x + pokebolas[number].velx <= 300 - radius && pokebolas[number].x + pokebolas[number].velx >= radius) {
                pokebolas[number].x+=pokebolas[number].velx
                }else if (pokebolas[number].x + pokebolas[number].velx > 300 - radius){
                pokebolas[number].x = 300 - radius
                pokebolas[number].velx = -pokebolas[number].velx
                    //console.log(`no puedes andar, ${pokebolas[number].color}`)
                }else{
                    pokebolas[number].x = radius
                    pokebolas[number].velx = -pokebolas[number].velx
                }
    
            //pokebolas[number].rangex = [pokebolas[number].x - pokebolas[number].width,pokebolas[number].x + pokebolas[number].width]
            //pokebolas[number].rangey = [pokebolas[number].y - pokebolas[number].width,pokebolas[number].y + pokebolas[number].width]
            createPokebola(pokebolas[number].x,pokebolas[number].y,pokebolas[number].width,pokebolas[number].color,pokebolas[number].velx,pokebolas[number].vely,false,pokebolas[number].rangex,pokebolas[number].rangey)
            fp = document.getElementById('firstp')
            en = document.getElementById('energy')
            sp = document.getElementById('secp')
           // en.innerText = 'energy' + Number(pokebolas[0].velx**2 + pokebolas[0].vely**2 + pokebolas[1].velx**2 + pokebolas[1].vely**2)//+ pokebolas[2].velx**2 + pokebolas[2].vely**2)
            if (number == 0) {
        //fp.innerHTML = `<span style="color:red;">x</span>:${(pokebolas[number].velx).toFixed(2)},<span style="color:red;">y</span>: ${(pokebolas[number].vely).toFixed(2)} `
            }else{
                //sp.innerHTML = `<span style="color:blue;">x</span>: ${(pokebolas[number].velx).toFixed(2)}, <span style="color:blue;">y</span>: ${(pokebolas[number].vely).toFixed(2)}`  
            }
        }
    }
    collision()
    //document.getElementById('diff').innerText = '________DISTANCE: ' + Number((pokebolas[0].x- pokebolas[1].x)**2 + (pokebolas[0].y- pokebolas[1].y)**2)
    }
    

    if (loop == true) {
requestAnimationFrame(animate)
    }
}
animate()
}

coll = 0
function collision() {
    //console.log('DO THE COLLISION BROTHER','colisão')
    for (a in pokebolas) {
        console.log(a)
        cx = pokebolas[a].x
                cy = pokebolas[a].y
                velx1 = pokebolas[a].velx
                vely1 = pokebolas[a].vely
                
                for (b = 0; b < pokebolas.length; b++) {
                    if (b != a) {
                        //console.log('b',b)
                        //console.log('a:',pokebolas[a].color, 'b:', pokebolas[b].color)
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
                
               
                if (pokebolas[a].velx != 0) {
                   // console.log('OLHAR A POKEBOLA',pokebolas[a])
                xrel = pokebolas[a].x - (300 - comp)/2 + radius
                yrel = pokebolas[a].y - (150 - alt)/2
                // (x + velx*C)² + (y + vely*C)² = r²
                // x² + 2*x*velx*C + velx²*C² + y² + 2*y*vely*C + vely²*C² = r²
                // x² + y² + C*(2*x*velx + 2*y*vely) + C²(velx²+ vely²) - r² = 0
                //    c                 b                     a
                pokevelx = pokebolas[a].velx
                pokevely = pokebolas[a].vely
                ak = pokevelx**2 + pokevely**2
                bk = 2*xrel*pokevelx + 2*yrel*pokevely
                ck = xrel**2 + yrel**2 - potwidth**2
                delta = bk**2 - 4*ak*ck
                //console.log(pokebolas[a].color,xrel,yrel)
                //console.log('ak',ak)
                //console.log('bk',bk)
                //console.log('ck',ck)
                //console.log(delta)
                //console.log('NÃO FAZERRRRRRRRRRRRRRR')
                if (delta >= 0) {
                   raiz1 = (-bk + delta**(1/2))/(2*ak)
                   raiz2 = (-bk - delta**(1/2))/(2*ak)
                   if (Math.floor(raiz2) == 0) {
                    console.log('NA BORDA')
                    //loop = false
                   }
                   console.log('raiz1',raiz1)
                   console.log('raiz2',raiz2)
                   }
                }

                /*
                potball = 0
                if (pokebolas[a].y >= (150 - alt)/2 + potwidth - radius && pokebolas[a].y <= 150 - (150 - alt)/2 - potwidth + radius) {
                if (pokebolas[a].x > (300 - comp)/2 + comp - pokebolas[a].width && pokebolas[a].velx > 0 || pokebolas[a].x < pokebolas[a].width + (300 - comp)/2 && pokebolas[a].velx < 0) {
                    velx1 = -pokebolas[a].velx
                    pokebolas[a].velx = -pokebolas[a].velx
                }
            }else{
                potball++
            }
                if (pokebolas[a].x >=  (300 - comp)/2 + potwidth - radius && pokebolas[a].x <= 300 - (300 - comp)/2 - potwidth + radius) {
                if (pokebolas[a].y > (150 - alt)/2 + alt - pokebolas[a].width && pokebolas[a].vely > 0|| pokebolas[a].y < pokebolas[a].width + (150 - alt)/2 && pokebolas[a].vely < 0) {
                    vely1 = -pokebolas[a].vely
                    pokebolas[a].vely = -pokebolas[a].vely
                }
            }else{
                potball++
            }
            if (potball == 2) {
                //window.alert('ENTROU')
                pokebolas[a].pot = true
            }

            if (pokebolas[b].y >= (150 - alt)/2 + potwidth - radius && pokebolas[b].y <= 150 - (150 - alt)/2 - potwidth + radius) {
                if (pokebolas[b].x > (300 - comp)/2 + comp - pokebolas[b].width && pokebolas[b].velx > 0 || pokebolas[b].x < pokebolas[b].width + (300 - comp)/2 && pokebolas[b].velx < 0 ) {
                    velx2 = -pokebolas[b].velx
                    pokebolas[b].velx = -pokebolas[b].velx
                }
            }else{
                //console.log('NÃO FAZERRRRRRRRRRRRRRR')
            }
            
                if (pokebolas[b].x >= (300 - comp)/2 + potwidth - radius && pokebolas[b].x <= 300 - (300 - comp)/2 - potwidth + radius) {
                if (pokebolas[b].y > (150 - alt)/2 + alt - pokebolas[b].width && pokebolas[b].vely > 0|| pokebolas[b].y < pokebolas[b].width + (150 - alt)/2 && pokebolas[b].vely < 0) {
                    vely2 = -pokebolas[b].vely
                    pokebolas[b].vely = -pokebolas[b].vely
                }
        }
        */
            
                
                // código para a colisão
                
                //console.log('distância',Math.round(diffx**2 + diffy**2),'colisão',pokebolas[a].color,'e',pokebolas[b].color,pokebolas[a].r)
                if (Math.round(diffx**2 + diffy**2) == (2*radius)**2 && pokebolas[a].r != '') {//|| newdiffx**2 + newdiffy**2 < (2*radius)**2) {
                    //window.alert('')
                    //console.log(cx,cx2)
                   // console.log(cy,cy2)
                   //window.alert('colidir')
                    console.log(`calcular a colisão com ${pokebolas[a].color} e ${pokebolas[b].color}`)
                    //console.log(pokebolas[a].velx)
                    //console.log(pokebolas[a].r)
                    //loop = false
                    /*
                    if (pokebolas[a].r == '' || pokebolas[a].r == undefined) {
                        pokebolas[a].r = 1
                        pokebolas[b].r = 1
                    }*/
                    //vx1 = pokebolas[a].velx/pokebolas[a].r
                    //vy1 = -pokebolas[a].vely/pokebolas[a].r // sinal de menos para definir + pra cima e - pra baixo
                    vx1 = pokebolas[a].velx
                    vy1 = -pokebolas[a].vely
                   
                
                    //vx2 = pokebolas[b].velx/pokebolas[b].r
                    //vy2 = -pokebolas[b].vely/pokebolas[b].r // sinal de menos para definir + pra cima e - pra baixo
                    vx2 = pokebolas[b].velx
                    vy2 = -pokebolas[b].vely

                    console.log(pokebolas[a].color,'vx:',vx1,'vy:',vy1)
                    console.log(pokebolas[b].color,'vx:',vx2,'vy:',vy2)

                    console.log(pokebolas[a].color,'x:',cx,'y:',cy)
                    console.log(pokebolas[b].color,'x:',cx2,'y:',cy2)
                
                    //console.log('vx1: ',vx1)
                    //console.log('vy1: ',vy1)
                    //console.log('vx2: ',vx2)
                    //console.log('vy2: ',vy2)
                
                    if (cy < cy2) {
                        console.log(`bola ${pokebolas[a].color} é a de cima`)
                        upball = Number(a)
                        downball = Number(b)
                    }else{
                        console.log(`bola ${pokebolas[b].color} é a de cima`)
                        upball = Number(b)
                        downball = Number(a)
                    }
                
                    if (cx > cx2) {
                        console.log(`bola ${pokebolas[a].color} está na direita`)
                        rightball = Number(a)
                        leftball = Number(b)
                    }else{
                        console.log(`bola ${pokebolas[b].color} está na direita`)
                        rightball = Number(b)
                        leftball = Number(a)
                    }
                
                    //console.log('triangulo:',diffx,diffy,(diffx**2 + diffy**2)**(1/2))
                    senx = diffx/(diffx**2 + diffy**2)**(1/2)
                    senx = diffx/(radius*2)
                    cosx = diffy/(diffx**2 + diffy**2)**(1/2)
                    cosx = diffy/(radius*2)
                    console.log('senx',senx)
                    console.log('cos',cosx)
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
                
                    console.log(`vperx1(vx1*senx):${vperx1.toFixed(6)},vparx1(vx1*cosx):${vparx1.toFixed(6)}`)
                    console.log(`vpery1(vy1*cosx):${vpery1.toFixed(6)},vpary1(vx1*senx):${vpary1.toFixed(6)}`)
                
                    console.log(`soma dos vetores na perpendicular: ${sumper1}`)
                    console.log(`soma dos vetores na paralela: ${sumpar1}`)
                    console.log('verificar:',sumper1**2 + sumpar1**2,vx1**2 + vy1**2)
                    
                    //console.log('vperx1hor(vperx1*senx):',vperx1hor,'vperx1ver(vperx1*cosx):',vperx1ver)
                    //console.log('vparx1hor(vparx1*cosx):',vparx1hor,'vparx1ver(vperx1*senx):',vparx1ver)
                    //console.log('vpery1hor(vpery1*senx):',vpery1hor,'vpery1ver(vpery1*cosx):',vpery1ver)
                    //console.log('vpary1hor(vpary1*cosx):',vpary1hor,'vpary1ver(vpary1*senx):',vpary1ver)
                    //console.log('soma horizontal na perpendicular: ',vperx1hor + vpery1hor)
                    //console.log('soma vertical na perpendicular: ',vperx1ver + vpery1ver)
                    if (vperx1hor + vpery1hor > 0) {
                        console.log('a resultante perpendicular está pra direita')
                        dirahor = 'right'
                    }else if (vperx1hor + vpery1hor < 0){
                        console.log('a resultante perpendicular está pra esquerda')
                        dirahor = 'left'
                    }else{
                        console.log('não há horizontal resultante perpendicular')
                        dirahor = ''
                    }
                    if (vperx1ver + vpery1ver > 0) {
                        console.log('a resultante perpendicular está pra cima')
                        diraver = 'up'
                    }else if (vperx1ver + vpery1ver < 0){
                        console.log('a resultante perpendicular está pra baixo')
                        diraver = 'down'
                    }else{
                        console.log('não há vertical na resultante perpendicular')
                        diraver = ''
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
                
                console.log(`vperx2:${vperx2.toFixed(6)},vparx2:${vparx2.toFixed(6)}`)
                console.log(`vpery2:${vpery2.toFixed(6)},vpary2:${vpary2.toFixed(6)}`)
                
                console.log(`soma dos vetores na perpendicular: ${sumper2}`)
                console.log(`soma dos vetores na paralela: ${sumpar2}`)
                console.log('verificar:',sumper2**2 + sumpar2**2,vx2**2 + vy2**2)
                
                //console.log('vperx2hor(vperx2*senx):',vperx2hor,'vperx2ver(vperx2*cosx):',vperx2ver)
                    //console.log('vparx2hor(vparx2*cosx):',vparx2hor,'vparx2ver(vperx2*senx):',vparx2ver)
                    //console.log('vpery2hor(vpery2*senx):',vpery2hor,'vpery2ver(vpery2*cosx):',vpery2ver)
                    //console.log('vpary2hor(vpary2*cosx):',vpary2hor,'vpary2ver(vpary2*senx):',vpary2ver)
                if (vperx2hor + vpery2hor > 0) {
                    console.log('a resultante perpendicular está pra direita')
                    dirbhor = 'right'
                }else if (vperx2hor + vpery2hor < 0) {
                    console.log('a resultante perpendicular está pra esquerda')
                    dirbhor = 'left'
                }else{
                    console.log('não há vertical na resultante perpendicular')
                    dirbhor = ''
                }
                if (vperx2ver + vpery2ver > 0) {
                    console.log('a resultante perpendicular está pra cima')
                    dirbver = 'up'
                }else if (vperx2ver + vpery2ver < 0) {
                    console.log('a resultante perpendicular está pra baixo')
                    dirbver = 'down'
                }else{
                    console.log('não há vertical na resultante perpendicular')
                    dirbver = ''
                }
                //console.log('soma(verificação)',vperx2hor + vparx2hor + vpery2hor + vpary2hor,vx2)
                //console.log('soma(verificação)',vperx2ver + vparx2ver + vpery2ver + vpary2ver,vy2)
                //console.log('verificar velocidade perpendicular',((vpery2hor + vperx2hor)**2 + (vpery2ver + vperx2ver)**2)**(1/2))
                //console.log('verificar velocidade paralela',((vpary2hor + vparx2hor)**2 + (vpary2ver + vparx2ver)**2)**(1/2))
                
                //console.log('')
                // checar se efetivamente está ocorrendo uma colisão e definir o caso correspondente
                collidea = 0
                collideb = 0
                console.log(leftball,dirahor)
                if (senx != 0) { // quando o senx é zero, é porque eles estão alinhados verticalmente e, portanto, n é possível fazer a análise pelo eixo x(n irá ter left/right ball)
                if (leftball == a && dirahor == 'right' || rightball == a && dirahor == 'left') {
                    console.log('a bola a está para colidir')
                    collidea++
                }
                if (leftball == b && dirbhor == 'right' || rightball == b && dirbhor == 'left') {
                    console.log('a bola b está para colidir')
                    collideb++
                }
            }else{
                console.log('o seno é zero, cara')
                console.log(diraver,dirbver)
                console.log(downball == a,upball == b)
                
                if (upball == a && diraver == 'down' || downball == a && diraver == 'up') {
                    console.log('a bola a está para colidir')
                    collidea++
                }
                if (upball == b && dirbver == 'down' || downball == b && dirbver == 'up') {
                    console.log('a bola b está para colidir')
                    collideb++
                }
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
                    console.log('a bola a irá se chocar com a b')
                    }else{
                    console.log('a bola b irá se chocar com a a')
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
                        if (dirahor == '' && diraver == '') {
                            dirahor = dirbhor
                            diraver = dirbver
                            }
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
                    console.log('É O CASO EM QUE TROCAM DE VELOCIDADE')
                    console.log('sumparhovpary1hor + vparx1hor')
                    pokebolas[a].velx = sumparhor1 + sumper2hor
                    pokebolas[a].vely = (sumparver1 + sumper2ver)*-1
                    console.log(`${pokebolas[a]}.vely: ${pokebolas[a].vely}`)
                
                    if (dirbhor == '' && dirbver == '') {
                    dirbhor = dirahor
                    dirbver = diraver
                    }
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
                    }else if (dirbhor == 'right'){
                        if (sumper1hor < 0) {
                            sumper1hor = -sumper1hor
                        }
                    }
                
                    if (dirbver == 'down') {
                        if (sumper1ver > 0) {
                            sumper1ver = -sumper1ver
                        }
                    }else if (dirbver == 'up'){
                        if (sumper1ver < 0) {
                            sumper1ver = -sumper1ver
                        }
                    }
                    console.log('a velocidade horizontal da bola b é:', sumparhor2 + sumper1hor)
                    console.log('a velocidade vertical da bola b é:', sumparver2 + sumper1ver)
                    console.log('verificar',sumpar2**2 + sumper1**2, (sumparhor2 + sumper1hor)**2 + (sumparver2 + sumper1ver)**2)
                    pokebolas[b].velx = sumparhor2 + sumper1hor
                    pokebolas[b].vely = (sumparver2 + sumper1ver)*-1
                    console.log(`${pokebolas[b]}.vely: ${pokebolas[b].vely}`)
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

                console.log(9999,'eeee',7687,'***********&&&&&&&&&&&&&&$$$$$$______________(((((((((((())))))*723215163236155123123215215SEU LIXO COLISÃO ENTRE',pokebolas[a].color,' e ', pokebolas[b].color)
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
        realposibsx = []
        realposibsy = []
  
        col = 0
        
      /*  
        for (p in posibs) {
            result = detectCollision(posibs[p].a,posibs[p].b,pokebolas[posibs[p].a].x,pokebolas[posibs[p].a].y,pokebolas[posibs[p].b].x,pokebolas[posibs[p].b].y,true,true)
            if (result != undefined) {
                console.log(pokebolas[posibs[p].a].color, 'com', pokebolas[posibs[p].b].color)
                console.log(result.dist)
                col++
                fstx = pokebolas[posibs[p].a].x
                fsty = pokebolas[posibs[p].a].y
                console.log('x',fstx,'y',fsty)
                console.log('x\'',result.x1,'y\'',result.x2)
                
                pokebolas[posibs[p].a].x = result.x1
                pokebolas[posibs[p].a].y = result.y1
                pokebolas[posibs[p].b].x = result.x2
                pokebolas[posibs[p].b].y = result.y2
                
                pokebolas[posibs[p].a].r = 88
                pokebolas[posibs[p].b].r = 88
            }
        }*/
        
       sortcol = []
       console.log('AQUI COMEÇA O SORTOB')
       if (pokebolas.length == 1) {
        console.log('É UM, MAN')
        potball = 0
        if (pokebolas[0].y >= (150 - alt)/2 + potwidth - radius && pokebolas[0].y <= 150 - (150 - alt)/2 - potwidth + radius) {
        if (pokebolas[0].x > (300 - comp)/2 + comp - pokebolas[0].width && pokebolas[0].velx > 0 || pokebolas[0].x < pokebolas[0].width + (300 - comp)/2 && pokebolas[0].velx < 0) {
            velx1 = -pokebolas[0].velx
            pokebolas[0].velx = -pokebolas[0].velx
        }
    }else{
        potball++
    }
        if (pokebolas[0].x >=  (300 - comp)/2 + potwidth - radius && pokebolas[0].x <= 300 - (300 - comp)/2 - potwidth + radius) {
        if (pokebolas[0].y > (150 - alt)/2 + alt - pokebolas[0].width && pokebolas[0].vely > 0|| pokebolas[0].y < pokebolas[0].width + (150 - alt)/2 && pokebolas[0].vely < 0) {
            vely1 = -pokebolas[0].vely
            pokebolas[0].vely = -pokebolas[0].vely
        }
    }else{
        potball++
    }
    if (potball == 2) {
        //window.alert('ENTROU')
        pokebolas[0].pot = true
    }
       }
       for (p in pokebolas) {
        which = {dist:'',pokeb1:'',pokeb2:'',co1:'',co2:'',remove:''}
        //console.log('>>>>>',p,pokebolas[p].color)
        foi = false
        //if (p == 0) {
        console.log('VELX1',pokebolas[p].color,pokebolas[p].velx)
        console.log('VELY1',pokebolas[p].color,pokebolas[p].vely)
        //}
        for (pi in pokebolas) {
            if (pi != p) {
                console.log('VELX2',pokebolas[pi].color,pokebolas[pi].velx)
                console.log('VELY2',pokebolas[pi].color,pokebolas[pi].vely)
            result = detectCollision(p,pi,pokebolas[p].x,pokebolas[p].y,pokebolas[pi].x,pokebolas[pi].y,true,true)
            if (result != undefined) {
                foi = true 
                console.log('==> Veja colisão entre',pokebolas[p].color,'e',pokebolas[pi].color)
                console.log('distância entre pokebolas:',result.dist)
                console.log(pokebolas[p].color,'x:',pokebolas[p].x,'y',pokebolas[p].y)
                console.log(pokebolas[p].color,'x1:',result.x1,'y1',result.y1)
                console.log(pokebolas[pi].color,'x:',pokebolas[pi].x,'y',pokebolas[pi].y)
                console.log(pokebolas[pi].color,'x:',result.x2,'y',result.y2)
                col++
                //if (pokebolas[p].x != result.x1) {
                    console.log(pokebolas[p].x,'diferente de',result.x1)

                    console.log('which.dist',which.dist)
                    if (result.dist == '>') {
                        console.log(result.x1,'precisa ser maior que',which.dist)
                if (which.dist == '' || result.x1 > which.dist) {
                    console.log(result.x1,'é maior que',which.dist)
                    which.dist = result.x1
                    which.dist2 = result.x2
                    which.pokeb1 = p
                    which.pokeb2 = pi
                    which.co1 = pokebolas[p].color
                    which.co2 = pokebolas[pi].color
            }
        }else{
            console.log(result.x1,'precisa ser menor que',which.dist)
            if (which.dist == '' || result.x1 < which.dist) {
                console.log(result.x1,'é menor que',which.dist)
                which.dist = result.x1
                which.dist2 = result.x2
                which.pokeb1 = p
                which.pokeb2 = pi
                which.co1 = pokebolas[p].color
                which.co2 = pokebolas[pi].color
        }
        }
        /*
            }else{
                console.log('são iguais',pokebolas[p].y,result.dist2)
                //if (pokebolas[p].y != result.y1) {
                    console.log(pokebolas[p].y,'diferente de',result.y1)
                
                    console.log('which.dist',which.dist)
                    if (result.dist2 == '>') {
                        console.log(result.y1,'precisa ser maior que',which.dist)
                if (which.dist == '' || result.y1 > which.dist) {
                    console.log(result.y1,'é maior que',which.dist)
                    which.dist = result.y1
                    which.dist2 = result.y2
                    which.pokeb1 = p
                    which.pokeb2 = pi
                    which.co1 = pokebolas[p].color
                    which.co2 = pokebolas[pi].color
                }
                }else{
                console.log(result.y1,'precisa ser menor que',which.dist)
                if (which.dist == '' || result.y1 < which.dist) {
                console.log(result.y1,'é menor que',which.dist)
                which.dist = result.y1
                which.dist2 = result.y2
                which.pokeb1 = p
                which.pokeb2 = pi
                which.co1 = pokebolas[p].color
                which.co2 = pokebolas[pi].color
                }
                }
                
                //}
            }*/
        }
    }
       }
    
       if (which.dist != '') {
        //console.log('which',pokebolas[p].color,which)
        sortcol.push(which)
        }
    }

    for (lp in sortcol) {
        //console.log('if you wanna stray')
       // console.log(sortcol[lp].remove)
         //console.log(sortcol[lp].pokeb1,sortcol[lp].pokeb2)
         //console.log('-----------')
         for (lp2 in sortcol) {
            //console.log(sortcol[lp2].pokeb1,sortcol[lp2].pokeb2)
            if (sortcol[lp].pokeb1 == sortcol[lp2].pokeb2 && sortcol[lp].pokeb2 == sortcol[lp2].pokeb1 && sortcol[lp].remove == '') {
                //console.log('é igual')
                sortcol[lp2].remove = true
                sortcol[lp].pri = true
            }
         }
    }

    
    sortcol_1 = [] // priorizar
    sortcol_2 = [] // precisa ordenar
    if (sortcol.length > 0) {
    //console.log('----------------------------------REMOVER OS IGUAIS----------------------------')
    }
    for (ment in sortcol) {
        //console.log(sortcol[ment])
        if (sortcol[ment].remove == true) {
            //console.log('remove this thing')
            //sortcol_.push(sortcol[ment])
            sortcol_1.push(sortcol[ment])
        }else if (sortcol[ment].pri == undefined){
            sortcol_2.push(sortcol[ment])
        }
    }
    //console.log('')
    if (sortcol.length > 0) {
    //console.log('____________________________PRECISA ORDENAR O SORTCOL_2_______________________')
    }
    for (ki in sortcol_2) {
        //console.log(`${sortcol_2[ki].co1} com ${sortcol_2[ki].co2}: ${(sortcol_2[ki].dist).toFixed(2)}    ${(sortcol_2[ki].dist2).toFixed(2)}`)
    }

    for (lo in sortcol_2) {
        //console.log('---------',lo,'---------')
        //console.log(sortcol_2[lo].co2,sortcol_2[lo].dist2)
        if (pokebolas[sortcol_2[lo].pokeb2].velx < 0) {
            //console.log('pegar o maior')
            sig = '>'
         }else{
             sig = '<'
             //console.log('pegar o menor')
         }
        //console.log('ver os outros')
        ob = sortcol_2[lo]
        stop = false
        for (li = 0; li < lo && stop == false; li++) {
            if (li != lo) {
                if (sortcol_2[li].co1 == sortcol_2[lo].co2) {
                    //console.log(sortcol_2[li].co1,'é igual a',sortcol_2[lo].co2)
                    anel = sortcol_2[li].dist
                }else if(sortcol_2[li].co2 == sortcol_2[lo].co2) {
                    //console.log(sortcol_2[li].co2,'é igual a',sortcol_2[lo].co2)
                    anel = sortcol_2[li].dist2
                }
            
            if (sortcol_2[li].co1 == sortcol_2[lo].co2 || sortcol_2[li].co2 == sortcol_2[lo].co2) {
                //console.log(li,':', anel)
                if (sig == '>') {
            if (sortcol_2[lo].dist2 > anel) {
                stop = true
                //console.log(sortcol_2[lo].dist2,'é maior que',anel)
                //console.log('refazer a parada')
                //começar do lo e ir até li
                for (k = lo; k > li; k--) {
                    //console.log(k,':',sortcol_2[k].dist)
                    //console.log('o próximo é:',sortcol_2[k - 1].dist,ob)
                    sortcol_2[k] = sortcol_2[k - 1]
                }
                sortcol_2[li] = ob
                for (lor in sortcol_2) {
                    //console.log(sortcol_2[lor])
                }
            }else{
                //console.log(sortcol_2[lo].dist2,'não é maior que',anel)
            }
            }else{
                if (sortcol_2[lo].dist2 < anel) {
                stop = true
                //console.log(sortcol_2[lo].dist2,'é menor que',anel)
                //console.log('refazer a parada')
                //começar do lo e ir até li
                for (k = lo; k > li; k--) {
                    //console.log(k,':',sortcol_2[k].dist)
                    //console.log('o próximo é:',sortcol_2[k - 1].dist,ob)
                    sortcol_2[k] = sortcol_2[k - 1]
                }
                sortcol_2[li] = ob
                for (lor in sortcol_2) {
                    //console.log(sortcol_2[lor])
                }
            }else{
                //console.log(sortcol_2[lo].dist2,'não é menor que',anel)
            }
            }
        }
        }
        }
    }
    
    /*
    for (lo in sortcol_2) {
        console.log('--------------',lo,'--------------')
        console.log(sortcol_2[lo].co1,sortcol_2[lo].dist)
        console.log(sortcol_2[lo].co2,sortcol_2[lo].dist2)
        console.log(sortcol_2[lo].co1,'é o fixado')
        console.log('analisar',sortcol_2[lo].co2)
        //console.log(pokebolas[sortcol_2[lo].pokeb2])
        if (pokebolas[sortcol_2[lo].pokeb2].velx < 0) {
           console.log('pegar o maior')
           sig = '>'
        }else{
            sig = '<'
            console.log('pegar o menor')
        }
        for (li in sortcol_2) {
            if (li != lo) {
            console.log(li, sortcol_2[li])
            console.log(sortcol_2[li].co1,sortcol_2[li].co2)
            if (sortcol_2[li].co1 == sortcol_2[lo].co2) {
                console.log(sortcol_2[li].co1,'é igual a',sortcol_2[lo].co2)
                anel = sortcol_2[li].dist
            }else if(sortcol_2[li].co2 == sortcol_2[lo].co2) {
                console.log(sortcol_2[li].co2,'é igual a',sortcol_2[lo].co2)
                anel = sortcol_2[li].dist2
            }
            if (sortcol_2[li].co1 == sortcol_2[lo].co2 || sortcol_2[li].co2 == sortcol_2[lo].co2) {
            console.log('fixado',sortcol_2[lo].dist2,'analisado',anel)
            if (sig == '>') {
                if (anel > sortcol_2[lo].dist2) {
                    console.log('fixado:',lo,'analisado',li)
                    if (lo < li) {
                        console.log('trocar de posição')
                        over = {...sortcol_2[li]}
                    }
                }
            }else{

            }
            }
        }
    }
    }
    */
    //sortcol = [...sortcol_]
    
    sortcol = []
    for (k in sortcol_1) {
        sortcol.push(sortcol_1[k])
    }
    for (k in sortcol_2) {
        sortcol.push(sortcol_2[k])
    }

    //console.log(pokebolas)
    for (p in sortcol) {
        //p = 0
        //console.log('sortcol','45333333333333334',89898,sortcol[p],'colisão')
        //console.log('first',sortcol[p].pokeb1,'second',sortcol[p].pokeb2,'colisão')

        if (pokebolas[sortcol[p].pokeb1].stat == undefined){
            //console.log('its undefined')
            pokebolas[sortcol[p].pokeb1].stat = true
        }
        if (pokebolas[sortcol[p].pokeb2].stat == undefined){
            //console.log('its undefined')
            pokebolas[sortcol[p].pokeb2].stat = true
        }

        //console.log(pokebolas[sortcol[p].pokeb1].stat,pokebolas[sortcol[p].pokeb2].stat,'colisão')
        result = detectCollision(sortcol[p].pokeb1,sortcol[p].pokeb2,pokebolas[sortcol[p].pokeb1].x,pokebolas[sortcol[p].pokeb1].y,pokebolas[sortcol[p].pokeb2].x,pokebolas[sortcol[p].pokeb2].y,pokebolas[sortcol[p].pokeb1].stat,pokebolas[sortcol[p].pokeb2].stat)

       
            pokebolas[sortcol[p].pokeb1].stat = false
            pokebolas[sortcol[p].pokeb2].stat = false

        if (result != undefined) {
            //console.log(pokebolas[sortcol[p].pokeb1].color, 'com', pokebolas[sortcol[p].pokeb2].color)
            col++
            fstx = pokebolas[sortcol[p].pokeb1].x
            fsty = pokebolas[sortcol[p].pokeb1].y
            fstx2 = pokebolas[sortcol[p].pokeb2].x
            fsty2 = pokebolas[sortcol[p].pokeb2].y
            //console.log(pokebolas[sortcol[p].pokeb1].color,sortcol[p].dist)
            //console.log(pokebolas[sortcol[p].pokeb2].color,sortcol[p].dist2)

            
            pokebolas[sortcol[p].pokeb1].x = result.x1
            pokebolas[sortcol[p].pokeb1].y = result.y1
            pokebolas[sortcol[p].pokeb2].x = result.x2
            pokebolas[sortcol[p].pokeb2].y = result.y2
            
            pokebolas[sortcol[p].pokeb1].r = 88
            pokebolas[sortcol[p].pokeb2].r = 88
        }
    }
        if (sortcol.length > 1) {
            //console.log('COL+ ENCOS')
            //loop = false
        }
        //console.log('')
        
    for (che in posibs) {
        if (Math.round(caldis(pokebolas[posibs[che].a].color,pokebolas[posibs[che].b].color)) == (2*radius)**2) {
            //console.log(pokebolas[posibs[che].a].color,pokebolas[posibs[che].b].color)
            //console.log(caldis(pokebolas[posibs[che].a].color,pokebolas[posibs[che].b].color))
        }
        if (caldis(pokebolas[posibs[che].a].color,pokebolas[posibs[che].b].color) < (2*radius)**2 - 1) {
         console.log('ENCOSTOOOOOOOOU',caldis(pokebolas[posibs[che].a].color,pokebolas[posibs[che].b].color))
         loop = false
        }
    }

    cont = 0
    for (zo in pokebolas) {
        if (pokebolas[zo].velx == 0 && pokebolas[zo].vely == 0) { // pokebola totalmente parada
            cont++
        }
    }
    if (cont == pokebolas.length) {
        //console.log('WYU')
        loop = false
        powerup = false
        stopcue = false
        onpoke = -1
        //console.log('POKEPOS PRECISA SER ATUALIZADO')
        pokepos = []
        for (gi in pokebolas) {
            pokepos.push({x:pokebolas[gi].x,y:pokebolas[gi].y,color:pokebolas[gi].color})
        }
        //console.log('new pokepos',pokepos)
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
       //console.log(realposibsx[posibin])
        ra = realposibsx[posibin].a
        rb = realposibsx[posibin].b
        //console.log(pokebolas[ra].color + ' com ' + pokebolas[rb].color)
        //console.log('velocidades:')
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
        //console.log(`${pokebolas[ra].color}.velx: ${velx1s}`)
        //console.log(`${pokebolas[ra].color}.vely: ${vely1s}`)
        //console.log(`${pokebolas[rb].color}.velx: ${velx2s}`)
        //console.log(`${pokebolas[rb].color}.vely: ${vely2s}`)
        //console.log(`as coordenadas iniciais das bolas são:`)
        //console.log(pokebolas[ra].fstx)
        //console.log(pokebolas[ra].fsty)
        //console.log(pokebolas[rb].fstx)
        //console.log(pokebolas[rb].fsty)
        //console.log(`as coordenadas da colisão normal entre as bolas são:`)
        //console.log(realposibsx[posibin].x1)
        //console.log(realposibsx[posibin].y1)
        //console.log(realposibsx[posibin].x2)
        //console.log(realposibsx[posibin].y2)
        //console.log('se as pokebolas não colidissem suas posições seriam:')
        //console.log(Number(pokebolas[ra].fstx) + Number(pokebolas[ra].velx))
        //console.log(Number(pokebolas[ra].fsty) + Number(pokebolas[ra].vely))
        //console.log(Number(pokebolas[rb].fstx) + Number(pokebolas[rb].velx))
        //console.log(Number(pokebolas[rb].fsty) + Number(pokebolas[rb].vely))

        if (pokebolas[ra].velx > 0 && pokebolas[ra].fstx < realposibsx[posibin].x1 || pokebolas[ra].velx < 0 && pokebolas[ra].fstx > realposibsx[posibin].x1) {
            //console.log('tá certo')
        }
        if (pokebolas[ra].vely > 0 && pokebolas[ra].fsty < realposibsx[posibin].y1 || pokebolas[ra].vely < 0 && pokebolas[ra].fsty > realposibsx[posibin].y1) {
             //console.log('tá certo')
         }
         if (pokebolas[rb].velx > 0 && pokebolas[rb].fstx < realposibsx[posibin].x2 || pokebolas[rb].velx < 0 && pokebolas[rb].fstx > realposibsx[posibin].x2) {
            //console.log('tá certo')
        }
        if (pokebolas[rb].vely > 0 && pokebolas[rb].fsty < realposibsx[posibin].y2 || pokebolas[rb].vely < 0 && pokebolas[rb].fsty > realposibsx[posibin].y2) {
        //console.log('tá certo')
        }
       if (realposibsx[posibin].colide == true) {
       if (pokebolas[ra].x == pokebolas[ra].fstx && pokebolas[rb].x == pokebolas[rb].fstx) {
        //loop = false
        //console.log(`${pokebolas[ra].color} sem r e ${pokebolas[rb].color} sem r`)
           // POKEBOLA[0] SEM R E POKEBOLA[1] SEM R
          pokebolas[ra].x = realposibsx[posibin].x1
          pokebolas[ra].y = realposibsx[posibin].y1
          pokebolas[rb].x = realposibsx[posibin].x2
          pokebolas[rb].y = realposibsx[posibin].y2

          redoCollisions()
        }else if(pokebolas[ra].x != pokebolas[ra].fstx && pokebolas[rb].x == pokebolas[rb].fstx) {
            //loop = false
            //console.log(`${pokebolas[ra].color} com r e ${pokebolas[rb].color} sem r`)
          // POKEBOLA[0] COM R E POKEBOLA[1] SEM R
            //console.log(`fazendo a colisão: x= ${realposibsx[posibin].x1}, y= ${realposibsx[posibin].y1}`)
            //console.log(`coordenadas atuais: x= ${pokebolas[ra].x}, y= ${pokebolas[ra].y}`)
            if (pokebolas[ra].velx > 0 && pokebolas[ra].x > realposibsx[posibin].x1 || pokebolas[ra].velx < 0 && pokebolas[ra].x < realposibsx[posibin].x1) {
                // COLISÃO ATUAL VENCE => realposibsx[posibin].x1
                //console.log('colisão atual vence',pokebolas[ra].color,pokebolas[rb].color)
                // POKEBOLA[0] MUDA DE COORDENADAS (PARA COLISÃO ATUAL)
                // POKEBOLA[1] MUDA DE COORDENADAS (PARA COLISÃO ATUAL)
                
                pokebolas[ra].x = realposibsx[posibin].x1
                pokebolas[ra].y = realposibsx[posibin].y1
                //console.log(pokebolas[ra].color,pokebolas[ra].x,pokebolas[ra].y)
                pokebolas[rb].x = realposibsx[posibin].x2
                pokebolas[rb].y = realposibsx[posibin].y2
                
                // REFAZER AS ANTERIORES
                redoCollisions()
            }else{
                // COLISÃO ANTERIOR VENCE => pokebola[0].x
                //console.log('colisão anterior vence')
                // POKEBOLA[0] CONTINUA COM AS MESMA COORDENADAS
                // POKEBOLA[1] PRECISA READAPTAR SUAS COORDENADAS DE ACORDO COM A POKEBOLA[0]
                re = detectCollision(ra,rb,pokebolas[ra].x,pokebolas[ra].y,pokebolas[rb].fstx,pokebolas[rb].fsty,false,true)
                // as coordenadas da pokebola[0] se mantêm
                // pokebolas[rb].fstx = pokebolas[rb].x
                //console.log(re)
                if (re != undefined) {
                    //console.log(`a pokebola ${pokebolas[rb].color} deve ficar com as seguintes coordenadas: x= ${re.x2}, y= ${re.y2}`)
                    pokebolas[rb].x = re.x2
                    pokebolas[rb].y = re.y2
                }
            }
        }else if (pokebolas[ra].x == pokebolas[ra].fstx && pokebolas[rb].x != pokebolas[rb].fstx) {
            //loop = false
            // POKEBOLA[0] COM R E POKEBOLA[1] SEM R
            //console.log(`${pokebolas[rb].color} com r e ${pokebolas[ra].color} sem r`)
            
            //console.log(`${pokebolas[rb].color} com r e ${pokebolas[ra].color} sem r`)
          // POKEBOLA[0] COM R E POKEBOLA[1] SEM R
            //console.log(`fazendo a colisão: x= ${realposibsx[posibin].x2}, y= ${realposibsx[posibin].y2}`)
            //console.log(`coordenadas atuais: x= ${pokebolas[rb].x}, y= ${pokebolas[rb].y}`)
            if (pokebolas[rb].velx > 0 && pokebolas[rb].x > realposibsx[posibin].x2 || pokebolas[rb].velx < 0 && pokebolas[rb].x < realposibsx[posibin].x2) {
                // COLISÃO ATUAL VENCE => realposibsx[posibin].x2
                //console.log('colisão atual vence',pokebolas[rb].color,pokebolas[ra].color)
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
                //console.log('colisão anterior vence')
                // POKEBOLA[0] CONTINUA COM AS MESMA COORDENADAS
                // POKEBOLA[1] PRECISA READAPTAR SUAS COORDENADAS DE ACORDO COM A POKEBOLA[0]
                re = detectCollision(rb,ra,pokebolas[rb].x,pokebolas[rb].y,pokebolas[ra].fstx,pokebolas[ra].fsty,false,true)
                // as coordenadas da pokebola[0] se mantêm
                // pokebolas[ra].fstx = pokebolas[ra].x
                //console.log(re)
                if (re != undefined) {
                    //console.log(`a pokebola ${pokebolas[ra].color} deve ficar com as seguintes coordenadas: x= ${re.x1}, y= ${re.y1}`)
                    pokebolas[ra].x = re.x2
                    pokebolas[ra].y = re.y2
                }
            }

        }else if (pokebolas[ra].x != pokebolas[ra].fstx && pokebolas[rb].x != pokebolas[rb].fstx){
            //loop = false
            //console.log(`${pokebolas[rb].color} com r e ${pokebolas[ra].color} com r`)
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
                //console.log('pode mudar para colisão atual')
                pokebolas[ra].x = realposibsx[posibin].x1
                pokebolas[ra].y = realposibsx[posibin].y1
                pokebolas[rb].x = realposibsx[posibin].x2
                pokebolas[rb].y = realposibsx[posibin].y2
                //console.log('precisa refazer as colisões anteriores')
                
               redoCollisions() 
            }else{
                //console.log('contiuar como estava')
            }
        }
    }else{
        //console.log(`${pokebolas[ra].color} e ${pokebolas[rb].color} n se colidem`)
        //console.log('no entanto, deve-se checar a pokebola com menor x, nesse caso,',pokebolas[ra].color)
        re = detectCollision(ra,rb,pokebolas[ra].x,pokebolas[ra].y,pokebolas[rb].fstx,pokebolas[rb].fsty,false,true)
        //console.log(re)
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
        //console.log('PAROU!')
        //console.log(`a distância entre as pokebolas é de ${diffx**2 + diffy**2}`)
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
    if (newdiffx**2 + newdiffy**2 <= (2*radius)**2 || diffx**2 + diffy**2 <= (2*radius)**2) {//if (diffx**2 + diffy**2 < 1000 || newdiffx**2 + newdiffy**2 < 1000) {
        //console.log('')
        //console.log('NOW',diffx**2 + diffy**2)
        //console.log('NEXT',newdiffx**2 + newdiffy**2)
        }

    // código para antecipar a colisão, impedindo que a pokebola passe por cima da outra
    if (Math.round(newdiffx**2 + newdiffy**2) < (pokebolas[a].width + pokebolas[b].width)**2) {
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
        
       
        //console.log('xvely2:',xvely2)
        //console.log('cx:',cx,'cx2:',cx2)
        //console.log('cy:',cy,'cy2;',cy2)

        //[(cx + vx) - (cx2 + vx2)]**2 + [(cy + vy) - (cy2 + vy2)]**2
        //[cx - cx2 + vx - vx2]**2 + [cy - cy2 + vy - vy2]**2
        //[life + difvex]**2 + [time + difvey]**2
        //life**2 + 2*life*difvex + difvex**2 + time**2 + 2*time*difvey + difvey**2
        //life**2 + time**2 - (2*radius)**2 + 2(life*difvex + time*difvey) + difvex**2 + difvey**2
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
        cex = life**2 + time**2 - (2*radius)**2
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
        //console.log('now',diffx**2 + diffy**2)
        //console.log('next',newdiffx**2 + newdiffy**2)
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
    c.strokeStyle = 'black'
        c.lineWidth = 1
    if (addornot == true) {
    pokebolas.push({x:x,y:y,width:width,color:color,velx:velx,vely:vely,rangex:rangex,rangey:rangey})
    }
    // white half of the pokeball
    c.beginPath()
    c.fillStyle = 'rgb(255,255,255)'
    c.arc(x,y,width,0,Math.PI,false)
    c.fill()
    //c.lineWidth = width*0.1
    c.stroke()
    
    // colored half of the pokeball
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
    c.fillStyle = 'black'
    c.stroke()
    y2++
    }

    
    c.beginPath()
    c.arc(x,y,width*0.3,0,Math.PI*2,true)
    c.fillStyle = 'black'
    c.fill()
    //c.lineWidth = width*0.02
    //c.stroke()
    

    c.beginPath()
    c.arc(x,y,width*0.2,0,Math.PI*2,true)
    c.fillStyle = 'white'
    c.fill()
    c.lineWidth = width*0.04
    c.stroke()
    
    c.fillStyle = 'black'
    
    /*
    if (velx < 0) {
    c.fillText('←', x - width - radius,y + 6)
    }else{
        c.fillText('→', x + width - 9,y + 6)
    }
    if (vely < 0) {
    c.fillText('↑', x - 5,y - 8)
    }else{
        c.fillText('↓', x - 5,y + width + 3)
    }*/
}


function detectCollision(a,b,setx,sety,setx2,sety2,cor1,cor2) {
    //console.log('YOU CAN CALL ME ANYTIME, ALWAYS YOU CAN CALL ME ANYTIME, ALWAYYYYYYS')
    //console.log('a',a,'b',b,'colisão')
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
    
    /*
    //console.log('DETECT',pokebolas[a].color,pokebolas[b].color)
    if (pokebolas[a].y >= (150 - alt)/2 + potwidth - radius) { 
    if (pokebolas[a].x >  (300 - comp)/2 + comp - pokebolas[a].width + 800 && pokebolas[a].velx > 0 || pokebolas[a].x < pokebolas[a].width + (300 - comp)/2 && pokebolas[a].velx < 0) {
        velx1 = -pokebolas[a].velx
        pokebolas[a].velx = -pokebolas[a].velx
        //console.log('MUDAR VELX AQUI')
    }
}else{
    //console.log('NÃO FAZERRRRRRRRRRRRRRR')
}
    if (pokebolas[a].x >= (300 - comp)/2 + potwidth - radius + 800) {
    if (pokebolas[a].y >  (150 - alt)/2 + alt - pokebolas[a].width && pokebolas[a].vely > 0|| pokebolas[a].y < pokebolas[a].width + (150 - alt)/2 && pokebolas[a].vely < 0) {
        vely1 = -pokebolas[a].vely
        pokebolas[a].vely = -pokebolas[a].vely
        //console.log('MUDAR VELY AQUI')
    }
}
if (pokebolas[b].y >= (150 - alt)/2 + potwidth - radius) {
    if (pokebolas[b].x >  (300 - comp)/2 + comp - pokebolas[b].width && pokebolas[b].velx > 0 || pokebolas[b].x < pokebolas[b].width + (300 - comp)/2 && pokebolas[b].velx < 0) {
        velx2 = -pokebolas[b].velx
        pokebolas[b].velx = -pokebolas[b].velx 
        //console.log('MUDAR VELX AQUI')
    }
}else{
    //console.log('NÃO FAZERRRRRRRRRRRRRRR')
}
    if (pokebolas[b].x >= (300 - comp)/2 + potwidth - radius + 800) {
    if (pokebolas[b].y > (150 - alt)/2 + alt - pokebolas[b].width && pokebolas[b].vely > 0|| pokebolas[b].y < pokebolas[b].width + (150 - alt)/2 && pokebolas[b].vely < 0) {
        vely2 = -pokebolas[b].vely
        pokebolas[b].vely = -pokebolas[b].vely
        //console.log('MUDAR VELY AQUI')
    }
}  */
    
    
    if (Math.round(diffx**2 + diffy**2) < (pokebolas[a].width + pokebolas[b].width)**2) {
        //console.log('PAROU!')
        //pokebolas[a].velx = 0
        //pokebolas[a].vely = 0
        //pokebolas[b].velx = 0
        //pokebolas[b].vely = 0
        //console.log(`a distância entre as pokebolas ${pokebolas[a].color} e ${pokebolas[b].color} é de ${diffx**2 + diffy**2}`)
        //console.log('POKEBOLAAAAS',pokebolas[a].color,pokebolas[b].color, diffx**2 + diffy**2)
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
    //console.log('velx1',velx1,'vely1',vely1,'velx2',velx2,'vely2',vely2,'colisão')
    
    newcx = cx + velx1
    newcy = cy + vely1
    newcx2 = cx2 + velx2
    newcy2 = cy2 + vely2
    
    newdiffx = newcx - newcx2
    newdiffy = newcy - newcy2
    if (newdiffx**2 + newdiffy**2 <= (2*radius)**2 || diffx**2 + diffy**2 <= (2*radius)**2) {//if (diffx**2 + diffy**2 < 1000 || newdiffx**2 + newdiffy**2 < 1000) {
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
           // console.log(`bola ${a} é a de cima colisão`)
            upball = Number(a)
            downball = Number(b)
        }else{
           // console.log(`bola ${b} é a de cima  colisão`)
            upball = Number(b)
            downball = Number(a)
        }
    
        if (cx > cx2) {
            //console.log(`bola ${a} está na direita  colisão`)
            rightball = Number(a)
            leftball = Number(b)
        }else{
            //console.log(`bola ${b} está na direita  colisão`)
            rightball = Number(b)
            leftball = Number(a)
        }
        
        xvelx1 = ''
        xvely1 = ''
        xvelx2 = ''
        xvely2 = ''
        //console.log(cx,cy,'colisão')
       // console.log(cx2,cy2,'colisão')
       // console.log(newcx,newcy,'colisão')
       // console.log(newcx,newcx2,'colisão')
        if (newcx2 != newcx) {
        if (rightball == b && velx2 > 0 || leftball == b && velx2 < 0) {
            //console.log(`a bola ${pokebolas[b].color} n irá bater de frente horizontalmente  colisão`)
            xvelx2 = ''
        }else{
            //console.log(`a bola ${pokebolas[b].color} irá bater de frente horizontalmente  colisão`)
            xvelx2 = 'x'
        }
    }else{
        //console.log(`a bola ${pokebolas[b].color} n irá bater de frente horizontalmente  colisão`)
        xvelx2 = ''
    }
        if (newcx2 != newcx) {
        if (rightball == a && velx1 > 0 || leftball == a && velx1 < 0) {
            //console.log(`a bola ${pokebolas[a].color} n irá bater de frente horizontalmente  colisão`)
            xvelx1 = ''
        }else{
            //console.log(`a bola ${pokebolas[a].color} irá bater de frente horizontalmente  colisão`)
            xvelx1 = 'x'
        }
    }else{
        //console.log(`a bola ${pokebolas[a].color} n irá bater de frente horizontalmente  colisão`)
        xvelx1 = ''
    }
   

        if (upball == b && vely2 < 0 || downball == b && vely2 > 0) {
            //console.log(`a bola ${pokebolas[b].color} n irá bater de frente verticalmente  colisão`)
            xvely2 = ''
        }else{
            //console.log(`a bola ${pokebolas[b].color} irá bater de frente verticalmente  colisão`)
            xvely2 = 'x'
        }
        if (upball == a && vely1 < 0 || downball == a && vely1 > 0) {
            //console.log(`a bola ${pokebolas[a].color} n irá bater de frente verticalmente  colisão`)
            xvely1 = ''
        }else{
            //console.log(`a bola ${pokebolas[a].color} irá bater de frente verticalmente  colisão`)
            xvely1 = 'x'
        }

        /* => n entendi pra que que serve isso
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
        }*/

        //console.log(xvelx1,xvely1,'colisão')
        //console.log(xvelx2,xvely2,'colisão')
    /*
    //[(cx + vx) - (cx2 + vx2)]**2 + [(cy + vy) - (cy2 + vy2)]**2
    //[cx - cx2 + vx - vx2]**2 + [cy - cy2 + vy - vy2]**2
    //[life + difvex]**2 + [time + difvey]**2
    //life**2 + 2*life*difvex + difvex**2 + time**2 + 2*time*difvey + difvey**2
    //life**2 + time**2 - (2*radius)**2 + 2(life*difvex + time*difvey) + difvex**2 + difvey**2
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
        //console.log('life',life,'colisão')
        //console.log('time',time,'colisão')
        //console.log(life**2 + time**2)
        difvex = velx1 - velx2
       //console.log('difvex',difvex,'colisão')
        difvey = vely1 - vely2
        //console.log('difvey',difvey,'colisão')
        aex = 0
        bex = 0
        cex = life**2 + time**2 - (2*radius)**2
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
        //console.log('a',aex,'b',bex,'c',cex,'colisão')
        delta = bex**2 - 4*aex*cex
        if (delta >= 0) {
        raiz1 = (-bex + delta**(1/2))/(2*aex)
        raiz2 = (-bex - delta**(1/2))/(2*aex)
    
        /*
        //console.log('x1:',pokebolas[a].x)
        //console.log('y1:',pokebolas[a].y)
        //console.log('x2:',pokebolas[b].x)
        //console.log('y2:',pokebolas[b].y)
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
        
        //console.log(pokebolas[a].color,'com',pokebolas[b].color)
        //console.log('raiz1',raiz1,'raiz2',raiz2,'colisão')
        //res = (life + velx1*raiz2 - velx2*raiz2)**2 + (time + vely1*raiz2 - vely2*raiz2)**2
        //console.log('conferir:',res)
        
       // console.log('now',diffx**2 + diffy**2,'colisão')
        //console.log('next',newdiffx**2 + newdiffy**2,'colisão')
        for (o in pokebolas) {
            //console.log(pokebolas[o].r)
        }
        //window.alert('COLISÃO')
        //console.log(raiz2<=1,Math.floor(raiz1))
        if (raiz2 >= 0 && raiz2 <= 1) { // tbm precisa colocar 0, cara, se não o r fica = '' e a colisão n acontece
            //console.log('raiz1',raiz1,'raiz2',raiz2)
            //pokebolas[a].r = raiz2
            //pokebolas[b].r = raiz2
            //   0 ----> 300
            // velx1 < 0
            //  15 20  <--       (pegar a maior)
            // velx1 > 0
            //  --> 15 20         (pegar a menor)
            // vely1 < 0
            // ^            (pegar o maior)
            // |
             // vely1 > 0
            // |            (pegar o menor)
            // V
            //console.log(vely1)
            if (vely1 < 0) {
                lel = '>'
            }else{
                lel = '<'
            }
            if (velx1 < 0) {
                return {x1: newx1,x2: newx2, y1: newy1, y2: newy2, dist: '>',dist2:lel}
            }else{
                return {x1: newx1,x2: newx2, y1: newy1, y2: newy2, dist: '<',dist2:lel}
            }
    
        }
    }else{
        //console.log('o delta é negativo')
        //console.log(pokebolas[a].color,'com',pokebolas[b].color)
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

     if (Math.round(dis) == (2*radius)**2 && (pokebolas[posibs[ce].a].x + pokebolas[posibs[ce].a].velx - pokebolas[posibs[ce].b].x - pokebolas[posibs[ce].b].velx)**2 + (pokebolas[posibs[ce].a].y + pokebolas[posibs[ce].a].vely - pokebolas[posibs[ce].b].y - pokebolas[posibs[ce].b].vely)**2 < (2*radius)**2){
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

// SIDE FUNCTIONS

function redoCollisions() {
    for (ba = posibin - 1; ba >= 0; ba--) {//for (ba = 0; ba < posibin; ba++) {
        //console.log(ba)
        //console.log('precisa refazer essa colisão aqui:')
        //console.log(realposibsx[ba])
        if (realposibsx[ba].colide == true) {
        re = detectCollision(realposibsx[ba].a,realposibsx[ba].b,pokebolas[realposibsx[ba].a].fstx,pokebolas[realposibsx[ba].a].fsty,pokebolas[realposibsx[ba].b].x,pokebolas[realposibsx[ba].b].y,true,false)
        
        if (re != undefined) {
            //console.log(`hey,wo,wo${re.x1},${re.y1},${re.x2},${re.y2}`)
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
            //console.log('epa, n se colidem, porém pode ter coisa aí')
            re = detectCollision(realposibsx[ba].a,realposibsx[ba].b,pokebolas[realposibsx[ba].a].fstx,pokebolas[realposibsx[ba].a].fsty,pokebolas[realposibsx[ba].b].x,pokebolas[realposibsx[ba].b].y,true,false)
            //console.log(re)
            if (re != undefined) {
                //console.log(`hey,wo,wo${re.x1},${re.y1},${re.x2},${re.y2}`)
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

onpoke = -1
powerup = false // check if the pokeball has been released
stopcue = false // detect if the pokeball has been clicked
drawcue = true
xsig = ''
ysig = ''
//saber quando o mouse encosta em uma pokebola
/*
window.addEventListener('mousemove', function(event) {
    
    if (powerup == false) {
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
    mousex = ((event.x - dif/2)/cWidth)*300 // VOLTAR
    mousey = ((event.y - 80.48)/cHeight)*150
    mousey = ((event.y - 2)/cHeight)*150
    //this.document.getElementById('x').innerText = mousex
    //this.document.getElementById('y').innerText = mousey
    //console.log(wHeight,cHeight)
    //console.log(event.y - 80.48)
    //console.log(((event.y - 80.48)/cHeight)*146)
    if (mousex < 300 && mousex > 0 && mousey < 146 && mousey > 0) {
        //this.document.getElementById('x').innerText += 'within'
    }
    
    onpress = false
    if (stopcue == false) {
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
            onpoke = p
            onpress = true
            //pokebolas[p].color = `rgb(${r},${g},${b})`
}
}
if (onpress == false) {
    onpoke = -1
}
    }else{
        //console.log(pokebolas[onpoke].x - mousex,pokebolas[onpoke].y - mousey)
        xi = pokebolas[onpoke].x - mousex
        yi = pokebolas[onpoke].y - mousey
        hi = (xi**2 + yi**2)**(1/2)
        //console.log('XI/HI',xi,'/',hi)
        senxi = yi/hi
        cosxi = xi/hi
        if (cosxi < 0) {
            //cosxi =-cosxi
        }
        //console.log('COS',cosxi)
        //console.log('DIFX',xi)
        //console.log('DIFY',yi)
        
        //console.log('ANGLE',angle)
        if (yi > 0) {
            angle = Math.acos(cosxi)
        }else{
            angle = -Math.acos(cosxi)
        }
        funcao = ''
        // primeiro caso:
        // menor que o ponto alvo e maior que a origem
        // segundo caso:
        // manor que a origem e maior que o ponto alvo

        caso = 0
        // primeiro quadrante 
        // menor que o ponto alvo e maior que a origem
        if (angle <= 0 && angle > -Math.PI/2) {
            //this.window.alert('PRECISA MUDAR')
            // y = tgx.x
            tgx = Math.abs(Math.tan(angle))
            funcao = 'c' // left down
            xsig = '-'
            ysig = '+'
            caso = 1
        }
        // segundo quadrante
        // menor que a origem e maior que o ponto alvo
        if (angle <= -Math.PI/2 && angle > -Math.PI) {
            //this.window.alert('PRECISA MUDAR')
            tgx = -Math.abs(Math.tan(angle))
            funcao = 'dc' // right down
            xsig = '+'
            ysig = '+'
            caso = 2
        }
        // terceiro quadrante
        // menor que a origem e maior que o ponto alvo
        if (angle > Math.PI/2 && angle <= Math.PI) {
           //this.window.alert('PRECISA MUDAR')
           tgx = Math.abs(Math.tan(angle))
           funcao = 'c' // right up
           xsig = '+'
            ysig = '-'
           caso = 2
        }
        // quarto quadrante
        // menor que o ponto alvo e maior que a origem
        if (angle > 0 && angle <= Math.PI/2) {
            tgx = -Math.abs(Math.tan(angle))
            funcao = 'dc' // left up
            xsig = '-'
            ysig = '-'
            caso = 1
         }
         
         //console.log('FUNÇÃO É',funcao)
         //console.log('A TANGENTE É',tgx)
         //console.log('POKE',onpoke)
         // y = tgx.x => reta (cue)
         // (x - px)² + (y - py)² = r²
         // (y - py)² = r² - (x - px)²
         // y - py = (169 - (x - px)²)**(1/2)
         // y = (169 - (x - px)²)**(1/2) + py
         // tgx.x = (169 - (x - px)²)**(1/2) + py
         // (tgx.x - py)² = 169 - (x - px)²
         // tgx².x² -2.tgx.x.py + py² = 169 - x² + 2.x.px - px²
         // x²(tgx² + 1) + x(-2.tgx.py - 2.px) + py² + px² - 169 = 0
         //       a                 b                  c  
         
        wid = 120 // comprimento do cue
        c.clearRect(0,0,300,150)
        setTable()

        origem = cuewidth*Math.cos(angle) + pokebolas[onpoke].x
        alvo = cuewidth*Math.cos(angle) + pokebolas[onpoke].x + wid*Math.cos(angle)
       
        c.strokeStyle = 'black'
        c.lineWidth = 1
        let pokex = pokebolas[onpoke].x
        let pokey = pokebolas[onpoke].y
        pokebolas = []
        drawcue = true
        for (v = 0; v < pokepos.length; v++) {
            color = pokepos[v].color
            x = pokepos[v].x
            y = pokepos[v].y
            //velx = 0
            //vely = 0
            
            rangex = [x - width,x + width]
            rangey = [y - width,y + width]
            createPokebola(x,y,width,color,velx,vely,true,rangex,rangey)
    
            if (v != onpoke) {
            //console.log(color,x,y)
            // indo para o referencial da pokebola fixada
            //console.log(pokebolas[onpoke].color,pokex,pokey)
            relx = x - pokex
            rely = pokey - y // lembre-se que o y cresce de cima para baixo 
            //console.log('x rel:',relx,'y rel:',rely,angle)
    
            ac = tgx**2 + 1
             bc = -2*tgx*rely - 2*relx
             cc = relx**2 + rely**2 - radius**2
             delt = bc**2 - 4*ac*cc
             //console.log(ac,bc,cc)
             if (delt > 0) {
            r1 = (-bc + delt**(1/2))/(2*ac)
            r2 = (-bc - delt**(1/2))/(2*ac)
            //console.log('SOLUÇÕES',r1,r2)
            //console.log('pokebola',color,'tá encostando no taco')
            touch = false
            if (caso == 1) {
                //console.log('menor que',alvo - pokex,'maior que',origem - pokex)
                //console.log('o x precisa ser menor que o ponto alvo e maior que a origem')
                if (r1 <= alvo - pokex && r1 >= origem - pokex) {
                    //console.log('certo r1')
                    touch = true
                }
                if (r2 <= alvo - pokex && r2 >= origem - pokex) {
                    //console.log('certo r2')
                    touch = true
                }
            }else{
                //console.log('menor que',origem - pokex,'maior que',alvo - pokex)
                //console.log('o x precisa ser menor que a origem e maior que o ponto alvo')
                if (r1 >= alvo - pokex && r1 <= origem - pokex) {
                    //console.log('certo r1')
                    touch = true
                }
                if (r2 >= alvo - pokex && r2 <= origem - pokex) {
                    //console.log('certo r2')
                    touch = true
                }
            }
            if (touch == true) {
                //console.log('TUDO CERTO, A POKEBOLA ENCOSTA')
                drawcue = false
            }else{
                //console.log('A POKEBOLA NÃO ENCOSTA')
            }
    
             }else{
                //console.log('NÃO TEM SOLUÇÃO')
             }
            }
        }
    if (drawcue == false) {
        //console.log('NÃO DESENHAR O TACO')
    }
    if (drawcue == true) {

        // draw cue
    c.beginPath()
    c.moveTo(cuewidth*Math.cos(angle) + pokebolas[onpoke].x,cuewidth*Math.sin(angle) + pokebolas[onpoke].y)
    c.lineTo(cuewidth*Math.cos(angle) + pokebolas[onpoke].x + wid*Math.cos(angle),cuewidth*Math.sin(angle) + pokebolas[onpoke].y + wid*Math.sin(angle))
    c.lineWidth = 1.5
    c.strokeStyle = 'brown'
    c.stroke()
    }else{
        c.beginPath()
    c.moveTo(cuewidth*Math.cos(angle) + pokebolas[onpoke].x,cuewidth*Math.sin(angle) + pokebolas[onpoke].y)
    c.lineTo(cuewidth*Math.cos(angle) + pokebolas[onpoke].x + wid*Math.cos(angle),cuewidth*Math.sin(angle) + pokebolas[onpoke].y + wid*Math.sin(angle))
    c.lineWidth = 1.5
    c.strokeStyle = 'red'
    c.stroke()
    }
    }
}else{
    //this.window.alert('FAZER NADA')
}})
window.addEventListener('mousedown',function (event) {
   // this.window.alert('MOUSE PRESSED')
    if (onpoke != -1 && powerup == false) {
        //this.window.alert('A POKEBOLA FOI PRESSIONADA')
        canv = document.querySelector('canvas')
        cWidth = canv.offsetWidth
        wWidth = this.window.innerWidth
        cHeight = canv.offsetHeight
        wHeight = this.window.innerHeight
        dif = wWidth - cWidth
        mousex = ((event.x - dif/2)/cWidth)*300
        mousey = ((event.y - 2)/cHeight)*150
        //this.document.getElementById('x').innerText = mousex
        
        onpress = false
        if (stopcue == false) {
            stopcue = true
            //console.log(pokebolas[onpoke].x - mousex,pokebolas[onpoke].y - mousey)
            xi = pokebolas[onpoke].x - mousex
            yi = pokebolas[onpoke].y - mousey
            hi = (xi**2 + yi**2)**(1/2)
            //console.log('XI/HI',xi,'/',hi)
            senxi = yi/hi
            cosxi = xi/hi
            
            //console.log('COS',cosxi)
            //console.log('DIFX',xi)
            //console.log('DIFY',yi)
            
            if (yi > 0) {
                angle = Math.acos(cosxi)
            }else{
                angle = -Math.acos(cosxi)
            }
            funcao = ''
    
            caso = 0
          
            if (angle <= 0 && angle > -Math.PI/2) {
                tgx = Math.abs(Math.tan(angle))
                funcao = 'c' // left down
                xsig = '-'
                ysig = '+'
                caso = 1
            }
           
            if (angle <= -Math.PI/2 && angle > -Math.PI) {
                tgx = -Math.abs(Math.tan(angle))
                funcao = 'dc' // right down
                xsig = '+'
                ysig = '+'
                caso = 2
            }
          
            if (angle > Math.PI/2 && angle <= Math.PI) {
               tgx = Math.abs(Math.tan(angle))
               funcao = 'c' // right up
               xsig = '+'
                ysig = '-'
               caso = 2
            }
            if (angle > 0 && angle <= Math.PI/2) {
                tgx = -Math.abs(Math.tan(angle))
                funcao = 'dc' // left up
                xsig = '-'
                ysig = '-'
                caso = 1
             }
             
             //console.log('FUNÇÃO É',funcao)
             //console.log('A TANGENTE É',tgx)
             //console.log('POKE',onpoke)
            
            wid = 160
            c.clearRect(0,0,300,150)
    
            origem = cuewidth*Math.cos(angle) + pokebolas[onpoke].x
            alvo = cuewidth*Math.cos(angle) + pokebolas[onpoke].x + wid*Math.cos(angle)
           
            c.strokeStyle = 'black'
            c.lineWidth = 1
            let pokex = pokebolas[onpoke].x
            let pokey = pokebolas[onpoke].y
            pokebolas = []
            setTable()
            drawcue = true
            for (v = 0; v < pokepos.length; v++) {
                color = pokepos[v].color
                x = pokepos[v].x
                y = pokepos[v].y
                //velx = 0
                //vely = 0
                
                rangex = [x - width,x + width]
                rangey = [y - width,y + width]
                createPokebola(x,y,width,color,velx,vely,true,rangex,rangey)
        
                if (v != onpoke) {
                //console.log(color,x,y)
                // indo para o referencial da pokebola fixada
                //console.log(pokebolas[onpoke].color,pokex,pokey)
                relx = x - pokex
                rely = pokey - y // lembre-se que o y cresce de cima para baixo 
                //console.log('x rel:',relx,'y rel:',rely,angle)
        
                ac = tgx**2 + 1
                 bc = -2*tgx*rely - 2*relx
                 cc = relx**2 + rely**2 - radius**2
                 delt = bc**2 - 4*ac*cc
                 //console.log(ac,bc,cc)
                 if (delt > 0) {
                r1 = (-bc + delt**(1/2))/(2*ac)
                r2 = (-bc - delt**(1/2))/(2*ac)
                //console.log('SOLUÇÕES',r1,r2)
                //console.log('pokebola',color,'tá encostando no taco')
                touch = false
                if (caso == 1) {
                    //console.log('menor que',alvo - pokex,'maior que',origem - pokex)
                    //console.log('o x precisa ser menor que o ponto alvo e maior que a origem')
                    if (r1 <= alvo - pokex && r1 >= origem - pokex) {
                        //console.log('certo r1')
                        touch = true
                    }
                    if (r2 <= alvo - pokex && r2 >= origem - pokex) {
                        //console.log('certo r2')
                        touch = true
                    }
                }else{
                    //console.log('menor que',origem - pokex,'maior que',alvo - pokex)
                    //console.log('o x precisa ser menor que a origem e maior que o ponto alvo')
                    if (r1 >= alvo - pokex && r1 <= origem - pokex) {
                        //console.log('certo r1')
                        touch = true
                    }
                    if (r2 >= alvo - pokex && r2 <= origem - pokex) {
                        //console.log('certo r2')
                        touch = true
                    }
                }
                if (touch == true) {
                    //console.log('TUDO CERTO, A POKEBOLA ENCOSTA')
                    drawcue = false
                }else{
                    //console.log('A POKEBOLA NÃO ENCOSTA')
                }
        
                 }else{
                    //console.log('NÃO TEM SOLUÇÃO')
                 }
                }
            }
        if (drawcue == false) {
            //console.log('NÃO DESENHAR O TACO')
        }
        if (drawcue == true) {
    
            // draw cue
        c.beginPath()
        c.moveTo(cuewidth*Math.cos(angle) + pokebolas[onpoke].x,cuewidth*Math.sin(angle) + pokebolas[onpoke].y)
        c.lineTo(cuewidth*Math.cos(angle) + pokebolas[onpoke].x + wid*Math.cos(angle),cuewidth*Math.sin(angle) + pokebolas[onpoke].y + wid*Math.sin(angle))
        c.lineWidth = 1.5
        c.strokeStyle = 'brown'
        c.stroke()
        }
        }
}})

power = 0
cuewidth = 8
window.addEventListener('keydown',function(event) {
    if (event.key == ' ' && drawcue == true) {
        //console.log('SPACE BAR ACTIVATED')
        if (power < 4) {
        power+= 0.4
        }
        //console.log(power)
    }
})

window.addEventListener('keyup',function(event) {
    
    if (event.key == ' ' && drawcue == true && powerup == false) {
        powerup = true
        //power = 1
        //angle = 1.56609
        //xsig = '+'
        //ysig = '-'
        //console.log(angle,power)
        //console.log('SPACE BAR DISABLED')
        //this.window.alert('LANÇAR')
        //console.log('LETS GO POKEBALLL',xsig,ysig)
        
        if (xsig == '+') {
            vx = power*Math.abs(Math.cos(angle))
        }else{
            vx = -power*Math.abs(Math.cos(angle))
        }
        if (ysig == '+') {
            vy = power*Math.abs(Math.sin(angle))
        }else{
            vy = -power*Math.abs(Math.sin(angle))
        }
        //console.log(vx,vy)
        //console.log(Math.tan(angle),vy/vx)
        spaceactive = false
        loop = true
        
        c.clearRect(0,0,300,150)
        c.beginPath()
        c.moveTo(cuewidth*Math.cos(angle) + pokebolas[onpoke].x,cuewidth*Math.sin(angle) + pokebolas[onpoke].y)
        c.lineTo(cuewidth*Math.cos(angle) + pokebolas[onpoke].x + wid*Math.cos(angle),cuewidth*Math.sin(angle) + pokebolas[onpoke].y + wid*Math.sin(angle))
        c.lineWidth = 1.5
        c.strokeStyle = 'blue'
        c.stroke()
        pokebolas = []
        setTable()
        function animate2() {
            // for (t = 0; t < 2;t++) {
             if (pokebolas.length == 0) { // start - no pokeballs => create pokeballs
                 
         velj = []
         for (v = 0; v < pokepos.length; v++) {
         width = Math.random()*8 + 10
         width = radius
         velx = Number((Math.random()*0.2).toFixed(5)) + 0.5
         vely = Number((Math.random()*0.2).toFixed(5)) + 0.5
         velx = Number((Math.random()*1).toFixed(0)) + 2
         vely = Number((Math.random()*1).toFixed(0)) + 2
         
         
         x = Math.random()*(300-width*3) + width
         y = Math.random()*(146-width*3) + width
         
         velj.push(`velx${v}:${velx}`)
         velj.push(`vely${v}:${vely}`)
         
         color = pokepos[v].color

         if (v != onpoke) {
            velx = 0
            vely = 0
    }else{
        velx = vx
        vely = vy
    }
        x = pokepos[v].x
        y = pokepos[v].y
         
         r = Math.random()*255
         g = Math.random()*255
         
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
                 //console.log(`${m}.${n}`)
                 if (strposibs.indexOf(`${n}.${m}`) == -1) {
                     posibs.push({a: `${m}`,b: `${n}`})
                     strposibs.push(`${m}.${n}`)
                 }
                 }
             }
         }
         //console.log(posibs)
         
         
             }else{ 
                contagem++
       //console.log('CONTAGEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEM',contagem)
                 c.clearRect(0,0,300,150)
                 setTable()
                 collision()
                
                 pokestay = []
                 for (number in pokebolas) {
                    if (pokebolas[number].pot == undefined){ //|| pokebolas[number].pot == true) {
                        pokestay.push(pokebolas[number])
                    
                     if (pokebolas[number].r === '' || pokebolas[number].r == undefined) {
                     //console.log(pokebolas[number].color)
                     //console.log(pokebolas[number].velx)
                     
                     
                     if (pokebolas[number].velx > 0) {
                     if (pokebolas[number].velx > 0.005) {
                     pokebolas[number].velx -= 0.005
                     }else{
                         //console.log('ZERO')
                     pokebolas[number].velx = 0
                     }
                     }else if (pokebolas[number].velx != 0){
                         if (pokebolas[number].velx < 0.005) {
                             pokebolas[number].velx += 0.005
                             }else{
                                 //console.log('ZERO')
                             pokebolas[number].velx = 0
                             }
                     }
                 
                     
                     if (pokebolas[number].vely > 0) {
                         if (pokebolas[number].vely > 0.005) {
                         pokebolas[number].vely -= 0.005
                         }else{
                             //console.log('ZERO')
                         pokebolas[number].vely = 0
                         }
                         }else if (pokebolas[number].vely != 0){
                             if (pokebolas[number].vely < 0.005) {
                                 pokebolas[number].vely += 0.005
                                 }else{
                                     //console.log('ZERO')
                                 pokebolas[number].vely = 0
                                 }
                         }
                                 
                                 
                    
                     
                     pokebolas[number].x+=pokebolas[number].velx
                     pokebolas[number].y+=pokebolas[number].vely
                     }else{
                         //console.log(`no puedes andar, ${pokebolas[number].color}`)
                     }
             
                     //pokebolas[number].rangex = [pokebolas[number].x - pokebolas[number].width,pokebolas[number].x + pokebolas[number].width]
                     //pokebolas[number].rangey = [pokebolas[number].y - pokebolas[number].width,pokebolas[number].y + pokebolas[number].width]
                     createPokebola(pokebolas[number].x,pokebolas[number].y,pokebolas[number].width,pokebolas[number].color,pokebolas[number].velx,pokebolas[number].vely,false,pokebolas[number].rangex,pokebolas[number].rangey)
                     fp = document.getElementById('firstp')
                     en = document.getElementById('energy')
                     sp = document.getElementById('secp')
                    // en.innerText = 'energy' + Number(pokebolas[0].velx**2 + pokebolas[0].vely**2 + pokebolas[1].velx**2 + pokebolas[1].vely**2)//+ pokebolas[2].velx**2 + pokebolas[2].vely**2)
                     if (number == 0) {
                 //fp.innerHTML = `<span style="color:red;">x</span>:${(pokebolas[number].velx).toFixed(2)},<span style="color:red;">y</span>: ${(pokebolas[number].vely).toFixed(2)} `
                     }else{
                         //sp.innerHTML = `<span style="color:blue;">x</span>: ${(pokebolas[number].velx).toFixed(2)}, <span style="color:blue;">y</span>: ${(pokebolas[number].vely).toFixed(2)}`  
                     }
                    }else{
                        console.log(`${pokebolas[number].color} is out!`)
                     }
             }
             
             
             pokebolas = []
             for (n in pokestay) {
                pokebolas.push(pokestay[n])
             }
             posibs = []
             posibs = []
             strposibs = []
             for (m in pokebolas) {
                 for (n in pokebolas) {
                     if (m != n) {
                     //console.log(`${m}.${n}`)
                     if (strposibs.indexOf(`${n}.${m}`) == -1) {
                         posibs.push({a: `${m}`,b: `${n}`})
                         strposibs.push(`${m}.${n}`)
                     }
                     }
                 }
             }
             collision()
             //document.getElementById('diff').innerText = '________DISTANCE: ' + Number((pokebolas[0].x- pokebolas[1].x)**2 + (pokebolas[0].y- pokebolas[1].y)**2)
             }
             
         
             if (loop == true) {
         requestAnimationFrame(animate2)
             }
         }
         animate2()
    }
})
*/
//teclas de teste 
window.addEventListener('keyup',function(event) {
    //console.log(event.key)
    if (event.key == 'p' || event.key == 'P') {
       loop = false
    }
    if (event.key == 'c') {
      //POKEBOL()
      c.beginPath()
        c.moveTo(cuewidth*Math.cos(angle) + pokebolas[0].x,cuewidth*Math.sin(angle) + pokebolas[0].y)
        c.lineTo(cuewidth*Math.cos(angle) + pokebolas[0].x + wid*Math.cos(angle),cuewidth*Math.sin(angle) + pokebolas[0].y + wid*Math.sin(angle))
        c.stroke()
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

//função para determinar distância entre duas pokebolas (input = cor)
function caldis(color1,color2) {
    for (ju in pokebolas){
        //console.log(pokebolas[ju].color,color1,pokebolas[ju].color == color1)
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