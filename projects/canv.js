function load() {
    drawPrism()
    drawpen(Math.PI)
}

senang = 'i'
ang = 'i'
ang2 = 'i'
tang = 'i'
yfin = 'i'
ct= 'i'
maincor = 'black'
promode = false
function drawPrism() {
    canv = document.getElementById('c')
    if (maincor == 'black') {
      canv.style.backgroundColor = 'white'
    }else{
      canv.style.backgroundColor = 'black'
    }
    c = canv.getContext('2d')
    b = 70
    h = 70
    fixy = 80
    x0 = (300 - b)/2
    y0 = 150 - (150 - fixy)/2
    tg = h/(b/2)
    c.lineWidth = '1'
    c.strokeStyle = maincor// white
    c.beginPath()
    c.moveTo(x0,(150 - fixy)/2 + fixy)
    c.lineTo(x0 + b,(150 - fixy)/2 + fixy)
    c.stroke()
    c.beginPath()
    c.moveTo(x0 + b,(150 - fixy)/2 + fixy)
    c.lineTo(x0 + b/2,(150 - fixy)/2 + fixy - h)
    c.stroke()
    c.beginPath()
    c.moveTo(x0,(150 - fixy)/2 + fixy)
    c.lineTo(x0 + b/2,(150 - fixy)/2 + fixy - h)
    c.stroke()

    // (0,0) => (x0, y0)
    c.beginPath()
    c.moveTo(0,y0)
    c.lineTo(300,y0)
    c.stroke()
    c.beginPath()
    c.moveTo(x0,0)
    c.lineTo(x0,150)
    c.stroke()
}

penwidth = 51
fx = 60
fy = 60
touch = false
touch2 = false
priscorindex = [
  { color: "red", index: 0.8},
  { color: "orange", index: 1.732 },
  { color: "yellow", index: 1.764 },
  { color: "green", index: 1.796 },
  { color: "blue", index: 1.828 },
  { color: "indigo", index: 1.860 },
  { color: "violet", index: 1.892 }
]
//prismaind = 2
corind = 1.1
xl2 = 0
yl2 = 0
function drawpen (angle) {
    // centro = fx + penwidth/2, fy
    //c.stroke()

    direct = 'u'
    if (angle >= 0) {
        c.strokeStyle = 'blue'
        direct = 'u'
    x2 = -(penwidth/2)*Math.cos(angle) + fx + penwidth/2
    y2 = -(penwidth/2)*Math.sin(angle) + fy
    x = (penwidth/2)*Math.cos(angle) + fx + penwidth/2
    y = (penwidth/2)*Math.sin(angle) + fy
    }else{
        c.strokeStyle = 'purple'
        direct = 'u'
    x2 = -(penwidth/2)*Math.cos(Math.PI + angle) + fx + penwidth/2
    y2 = -(penwidth/2)*Math.sin(Math.PI + angle) + fy
    x = (penwidth/2)*Math.cos(Math.PI + angle) + fx + penwidth/2
    y = (penwidth/2)*Math.sin(Math.PI + angle) + fy
    }

    if (mousey >= fy && mousex >= fx + penwidth/2) { // mouse em baixo e na direita
        direct = 'd'
        c.strokeStyle = 'orange'
        x2 = (penwidth/2)*Math.cos(angle) + fx + penwidth/2
    y2 = (penwidth/2)*Math.sin(angle) + fy
    x = (penwidth/2)*-Math.cos(angle) + fx + penwidth/2
    y = (penwidth/2)*-Math.sin(angle) + fy
    }else if(mousey >= fy && mousex <= fx + penwidth/2){ // mouse em baixo e na esquerda
        direct = 'd'
        c.strokeStyle = 'green'
        x2 = -(penwidth/2)*Math.cos(angle) + fx + penwidth/2
       y2 = -(penwidth/2)*Math.sin(angle) + fy
       x = (penwidth/2 )*Math.cos(angle) + fx + penwidth/2
       y = (penwidth/2)*Math.sin(angle) + fy
    }
   

    c.lineWidth = '2'
    c.beginPath()
    c.moveTo(fx + penwidth/2,fy)
    c.lineTo(x2,y2)
    c.strokeStyle = 'gray'
    c.stroke()

    c.beginPath()
    c.moveTo(fx + penwidth/2,fy)
    c.lineTo(x,y)
    c.strokeStyle = 'gray'
    c.stroke()

    xc = x - x0 // pra direita = +
    yc = ((150 - fixy)/2 + fixy) - y // pra cima = +
    // y = tg(angle).xc + cc
    // cc = y - tg(angle).xc
    cc =  yc + Math.tan(angle)*xc // tangente tem que coincidir com a equação do prisma - -tg(angle)
    // y = tg*x
    // y = tg(angle)*xc + cc
    // quando inteceptam:
    // tg(prisma)*x' = tg(angle)*x' + cc
    // x'(tg(prisma) - tg(angle)) = cc
    // x' = cc/(tg - tg(angle))
    xl = cc/(tg + Math.tan(angle)) // troca de sinal (tg)
    yl = tg*xl
    
    c.lineWidth = '1'
    notouch = false
    /*
    if (Math.tan(angle) > 0 && mousex < fx + penwidth/2) {
        notouch = true
    }else if(Math.tan(angle) < 0 && mousex < fx + penwidth/2) {
        notouch = true
    }*/
        for (i = 0; i < 1; i++) {
          prismaind = priscorindex[i].index
          c.lineWidth = '1'
   if (direct == 'u') {
    if (yl < yc) {
      notouch = true
     }
   }
   if (direct == 'd') {
    if (yl > yc) {
        notouch = true
     }
   }
    if (xl >= 0 && xl <= b/2 && notouch == false) {
        touch = true
    }else{
        touch = false
    }
  
    c.beginPath()
    c.moveTo(x2,y2)
    // y = tg(angle)*x
    // x = y/tg(angle)

    xper = 0

    if (touch == false) {
    if (mousex != fx + penwidth/2) {
        // código para rotacionar a = (lembre-se de que as tg's assumem ambos os valores)
    if (Math.tan(angle) > 0) {
        if (mousex > fx + penwidth/2) {
        c.lineTo((y0 - y2)/Math.tan(angle) + x2,y0)
        }else{
        c.lineTo((y2)/-Math.tan(angle) + x2,0)
        }
    }else if (Math.tan(angle) < 0){
        if (mousex < fx + penwidth/2) {
            c.lineTo((y0 - y2)/Math.tan(angle) + x2,y0)
                }else{
                c.lineTo((y2)/-Math.tan(angle) + x2,0)
                }
            }
}else{
    //window.alert(Math.tan(angle))
    if (Math.tan(angle) < 0) {
        c.lineTo((y2)/-Math.tan(angle) + x2,0)
    }else{
        c.lineTo((y0 - y2)/Math.tan(angle) + x2,y0)
    }
}


c.strokeStyle = maincor // white
c.stroke()
    }else{ // quando raio está tocando a primeira face do prisma
        c.lineTo(xl + x0,y0 - yl)
        c.strokeStyle = maincor // white
        c.stroke()

        // feixe está interceptando prisma
        // arctg(tg) + 90 + x = 180
        // x = 90 - arctg(tg)
        perslope = Math.PI/2 - Math.atan(tg) // ângulo de inclinação da reta perpendicular
        // yl = xl*-tg(perslope) + cper
        // cper = yl + xl*tg(perslope)
        cper = yl + xl*Math.tan(perslope) // troca de sinal
        // tg(prisma)*x' = -tg(perslope)*x' + cper
        // x'(tg(prisma) + tg(perslope)) = cper
        // x' = cper/(tg(prisma) + tg(perslope))
        xper = cper/(tg + Math.tan(perslope))
        //xl = (yl - cper)/-tg(perslope)
        xper0 = (0 - cper)/-Math.tan(perslope)
        c.beginPath()
        c.moveTo(xl + x0,y0 - yl)
        c.lineTo(xper0 + x0,y0)
        c.strokeStyle = 'black'
        if (promode == true) {
        c.stroke() //-> desenhar reta perpendicular à primeira face
        }

        xper0 = (y0 - cper)/-Math.tan(perslope)
        c.beginPath()
        c.moveTo(xl + x0,y0 - yl)
        c.lineTo(xper0 + x0,0)
        c.strokeStyle = 'black'
        if (promode == true) {
        c.stroke() //-> desenhar reta perpendicular à primeira face
        }

        // primeira face
        if (Math.tan(angle) > 0) { //&& perslope > angle) {
          // primeiro caso
          // pi = perslope - angle
          c.beginPath()
          if (perslope > angle) {
          c.arc(xl + x0, y0 - yl,20,Math.PI + angle,Math.PI + perslope) //draw angle
          }else{
           c.arc(xl + x0, y0 - yl,20,Math.PI + perslope,Math.PI + angle) //draw angle
            }
          
          c.strokeStyle = 'black'
          if (promode == true) {
          c.stroke()
          }
        
          // angle
          // yl = xl*tg(angle) + c
          // c = yl + xl*tg(angle)
          // x = (c - 0)/tg(angle)
          // sigma = perslope - angle
          senang = (corind*Math.sin(perslope - Math.abs(angle)))/prismaind
          //document.getElementById('ab1').innerText = senang + ' | ' + Math.sin(senang)
            ang = perslope - Math.asin(senang) // se sin(senang) for negativo, ent caso == 2
            if (ang < 0) {
              yfin = y0
            }else{
              yfin = 0
            }
            c.beginPath()
          ct = yl + xl*Math.tan(ang)
          xt = (ct - yfin)/Math.tan(ang)
          c.moveTo(xl + x0,y0 - yl)
          c.lineTo(xt + x0, y0  - yfin)
          c.strokeStyle = 'purple'
          if (promode == true) {
          c.stroke() // draw ray
          }

        }

        /*
        if (Math.tan(angle) > 0 && perslope < angle) {
            // primeiro caso
            // pi = perslope - angle
            c.beginPath()
            c.arc(xl + x0, y0 - yl,20,Math.PI + perslope,Math.PI + Math.abs(angle))
            c.stroke()
            c.fillStyle = 'cyan'

            // siigma = angle + perslope
           // senang = (corind*Math.sin(perslope - Math.ab(angle)))/prismaind
            ang = Math.asin(senang) + perslope
           // ang = Math.abs(angle)
          ct = yl + xl*Math.tan(ang)
          xt = (ct)/Math.tan(ang)
          c.moveTo(xl + x0,y0 - yl)
          c.lineTo(xt + x0, y0)
          c.strokeStyle = 'red'
          //c.stroke()
          }
          */
          
          if (Math.tan(angle) < 0 && Math.abs(angle) > Math.abs(Math.atan(tg))) {
            // primeiro caso
            // pi = perslope - angle
            c.beginPath()
            c.arc(xl + x0, y0 - yl,20,Math.PI + perslope,Math.PI + Math.PI - Math.abs(angle)) //draw angle
            c.strokeStyle = 'black'
           
            if (promode == true) {
            c.stroke()
            }
            

            senang = (corind*Math.sin(Math.PI - perslope - Math.abs(angle))/prismaind)
            ang = Math.asin(senang) + perslope
            //ang = angle
            //ang = Math.abs(angle)
            c.beginPath()
          ct = yl + xl*Math.tan(ang)
          xt = (ct)/Math.tan(ang)
          c.moveTo(xl + x0,y0 - yl)
          c.lineTo(xt + x0, y0)
          c.strokeStyle = 'purple'
          if (promode == true) {
          c.stroke() // draw ray
          }

          }

          
          if (Math.tan(angle) < 0  && Math.abs(angle) < Math.abs(Math.atan(tg))) {
           // window.alert('HEY')
            // primeiro caso
            // pi = perslope - angle
            c.beginPath()
            c.arc(xl + x0, y0 - yl,20,Math.PI - Math.abs(angle),Math.PI + perslope) //draw angle
            c.strokeStyle = 'black'
            if (promode == true) {
            c.stroke()
            }

            
            // vermelho: 1,514, 
            // prisma: 1,52
            // pi = Math(angle) + perslope
            // lei de snell:
            // n1.sen1 = n2.sen2
            // corind.sen(pi) = prismaind.sen(resangle)
            

            yfin = y0
            senang = (corind*Math.sin(Math.abs(angle) + perslope))/prismaind
            ang = perslope - Math.asin(senang)
            ct = yl + xl*Math.tan(ang)
            if (ang < 0) {
                yfin = y0
                c.strokeStyle = 'cyan'
                //document.getElementById('ab1').innerText = xt
               // c.moveTo(xl + x0,y0 - yl)
                //c.lineTo(xt + x0, y0 - yfin)
                //c.stroke()
            }else {
                yfin = 0
                c.strokeStyle = 'blue'
                //document.getElementById('ab1').innerText = xt
                //c.moveTo(xl + x0,y0 - yl)
                //c.lineTo(xt + x0, y0)
                //c.stroke()
                //yfin = 0
            }
            c.strokeStyle = 'black'
            if (promode == true) {
            c.stroke()
            }

            c.beginPath()
            c.strokeStyle = 'purple'
            xt = (ct - yfin)/Math.tan(ang)
            c.moveTo(xl + x0,y0 - yl)
            c.lineTo(xt + x0, y0 - yfin)
            if (promode == true) {
            c.stroke() // draw ray
            }
            //ang = angle
            /*
          ct = yl + xl*Math.tan(ang)
          xt = (ct - yfin)/Math.tan(ang)
          c.moveTo(xl + x0,y0 - yl)
          c.lineTo(xt + x0, y0 - yfin)
          c.stroke()

          ct = yl + xl*Math.tan(ang)
          xt = (ct)/Math.tan(ang)
          c.moveTo(xl + x0,y0 - yl)
          c.lineTo(xt + x0, y0)
          c.stroke()
          */

          }

          /*
          if (Math.tan(angle) < 0) {
          tang = Math.tan(ang)
          c.beginPath()
          //ang = angle
          ct = yl + xl*Math.tan(angle)
          xt = (ct - y0)/Math.tan(angle)
          c.moveTo(xl + x0,y0 - yl)
          c.lineTo(xt + x0, 0)
          c.strokeStyle = 'purple'
          c.stroke()
          }else{
            tang = Math.tan(ang)
          c.beginPath()
          //ang = angle
          ct = yl + xl*Math.tan(angle)
          xt = (ct)/Math.tan(angle)
          c.moveTo(xl + x0,y0 - yl)
          c.lineTo(xt + x0, y0)
          c.strokeStyle = 'purple'
          //c.stroke()
          }*/

        }

        // segunda face
          // equação da segunda reta:
          // x = b, y = 0
          // y = x.-tg + c
          // c = 0 + b.tg
          //y = x.-tg + 0 + b.tg
          //x = (y - b.tg)/-tg 
          // equação do raio:
          // y = -x*tg(ang) + ct
          // equação da intercepção:
          // x.-tg + 0 + b.tg = -x*tg(ang) + ct
          // x.-tg + x*tg(ang) = ct - b.tg
          // x(-tg + tg(ang)) = ct - b.tg
          // x = (ct - b.tg)/(-tg + tg(ang)) 
         // (y - ct)/(-tg(ang)) = x
         c.beginPath()
         //c.moveTo(x0 + xl, y0 - yl)
         //c.lineTo((ct - 0)/Math.tan(ang) + x0,y0 - 0)
          c.strokeStyle = 'green'
          //c.stroke()

          
          if (ct != undefined) {
          xl2 = (ct - b*tg)/(-tg + Math.tan(ang))
          yl2 = xl2*-tg + 0 + b*tg
          }else{
             // y = tg(angle).xc + cc
    // cc = y - tg(angle).xc
    //cc =  yc + Math.tan(angle)*xc // tangente tem que coincidir com a equação do prisma - -tg(angle)
    // y = tg*x
    // y = tg(angle)*xc + cc 
    // tg(angle)*x' + cc = x'.-tg + 0 + b.tg
    // x'(tg(angle) + tg) = b*tg - cc
    // x' = (b*tg - cc)/(tg(angle) + tg)
        xl2 = (b*tg - cc)/(-Math.tan(angle) + tg)
        yl2 = (xl2)*-tg + b*tg
          }

          if (touch == false) {
          xl2 = (b*tg - cc)/(-Math.tan(angle) + tg)
        yl2 = (xl2)*-tg + b*tg
          }


          notouch = false
          /*
          if (direct == 'u') {
            if (yl2 < yl) {
                notouch = true
             }
           }
           if (direct == 'd') {
            if (yl2 > yl) {
                notouch = true
             }
           }
             */

           if (xl2 >= b/2 && xl2 <= b && yl2 >= 0 && yl2 <= h && notouch == false) {
            touch2 = true
        }else{
            touch2 = false
        }

        if (touch == false) {
            xref = xc
            yref = yc
            angchose = angle
        }else{
            xref = xl
            yref = yl
            angchose = ang
        }
        c.strokeStyle = priscorindex[i].color
        if (touch2 == true && touch == true) { // precisa passar pela primeira face antes
          c.beginPath()
          c.moveTo(xref + x0,y0 - yref)
          c.lineTo(xl2 + x0, y0 - yl2)
          //c.strokeStyle = 'green'
          //c.strokeStyle = 'red'
          c.stroke()

           // feixe está interceptando prisma
      // arctg(tg) + 90 + x = 180
      // x = 90 - arctg(tg)
      perslope = Math.PI/2 - Math.atan(tg) // ângulo de inclinação da reta perpendicular
      // yl = xl*-tg(perslope) + cper
      // cper = yl + xl*tg(perslope)
      cper = yl2 - xl2*Math.tan(perslope) 
      // y = x*tg(perslope) + cper
      // x = (y - cper)/x*tg(perslope)
      //y = x.-tg + 0 + b.tg
      // -tg(prisma)*x' + b*tg(prisma) = tg(perslope)*x' + cper
      // x'(tg(prisma) + tg(perslope)) = b*tg(prisma) - cper
      // x' = (b*tg(prisma) - cper)/(tg(prisma) + tg(perslope))
      xper = (b*tg - cper)/(tg + Math.tan(perslope))
      //xl = (yl - cper)/-tg(perslope)
      xper0 = (0 - cper)/Math.tan(perslope)
      c.beginPath()
      c.moveTo(xper + x0,y0 - yl2)
      c.lineTo(xper0 + x0,y0)
      c.strokeStyle = 'black'
      if (promode == true) {
      c.stroke() // desenhar reta perpendicular
      }
      
      xper0 = (y0 - cper)/Math.tan(perslope)
      c.beginPath()
      c.moveTo(xper + x0,y0 - yl2)
      c.lineTo(xper0 + x0,0)
      c.strokeStyle = 'black'
      
      if (promode == true) {
      c.stroke() // desenhar reta perpendicular
      }
      
      c.lineWidth = '2.2'
      c.strokeStyle = priscorindex[i].color
      if (Math.tan(angchose) < 0) { //&& perslope > angchose) {
          // primeiro caso
          // pi = perslope - angchose
          c.beginPath()
          if (perslope > Math.abs(angchose)) {
          //c.arc(xl2 + x0, y0 - yl2,20,Math.PI - perslope,Math.PI - Math.abs(angchose)) //draw angle
          }else{
            //c.arc(xl2 + x0, y0 - yl2,20,Math.PI - Math.abs(angchose),Math.PI - perslope) //draw angle
          }
          c.stroke()
        
          // angchose
          // yl2 = xl2*tg(angchose) + c
          // c = yl2 + xl2*tg(angchose)
          // x = (c - 0)/tg(angchose)
          // sigma = perslope - angchose
          senang = (prismaind*Math.sin(perslope - Math.abs(angchose)))/corind
          //document.getElementById('ab1').innerText = senang + ' | ' + Math.sin(senang)
            ang2 = Math.asin(senang) - perslope // pra baixo = +, pra cima = -
            if (ang2 > 0) {
              yfin = 0
              //c.strokeStyle = 'red'
            }else{
              yfin = y0
              //c.strokeStyle = 'gray'
            }
      
           // c.strokeStyle = 'black'
           // c.strokeStyle = 'red'
          ct = yl2 + xl2*Math.tan(ang2)
          xt = (ct - yfin)/Math.tan(ang2)
          c.moveTo(xl2 + x0,y0 - yl2)
          c.lineTo(xt + x0, y0 - yfin)
          c.stroke()
      
        }
      
        if (Math.tan(angchose) > 0 && Math.abs(angchose) < Math.abs(Math.atan(tg))) { //&& perslope > angchose) {
          // primeiro caso
          // pi = perslope - angchose
          c.beginPath()
          //c.arc(xl2 + x0, y0 - yl2,20,Math.PI - perslope,Math.PI + angchose) //draw angle
          c.stroke()
        
          // angchose
          // yl2 = xl2*tg(angchose) + c
          // c = yl2 + xl2*tg(angchose)
          // x = (c - 0)/tg(angchose)
          // sigma = perslope - angchose
          senang = (prismaind*Math.sin(perslope + angchose))/corind
          //document.getElementById('ab1').innerText = senang + ' | ' + Math.sin(senang)
            ang2 = Math.asin(senang) - perslope // pra baixo = +, pra cima = -
            if (ang2 > 0) {
              yfin = 0
              //c.strokeStyle = 'red'
            }else{
              yfin = y0
              //c.strokeStyle = 'gray'
            }
           // c.strokeStyle = 'red'
          ct = yl2 + xl2*Math.tan(ang2)
          xt = (ct - yfin)/Math.tan(ang2)
          c.moveTo(xl2 + x0,y0 - yl2)
          c.lineTo(xt + x0, y0 - yfin)
          c.stroke()
      
        }
      
        if (Math.tan(angchose) > 0 && Math.abs(angchose) > Math.abs(Math.atan(tg))) {
          // primeiro caso
          // pi = perslope - angchosele
          c.beginPath()
          //c.arc(xl2 + x0, y0 - yl2,20,Math.PI + angchose,Math.PI + Math.PI - perslope) //draw angle
          c.stroke()
          c.fillStyle = 'cyan'
        
          senang = (prismaind*Math.sin(Math.PI - perslope - angchose)/corind)
          ang2 = -Math.asin(senang) - perslope
          //angchose = angchosele
          //angchose = Math.abs(angchosele)
        ct = yl2 + xl2*Math.tan(ang2)
        xt = (ct)/Math.tan(ang2)
        c.moveTo(xl2 + x0,y0 - yl2)
        c.lineTo(xt + x0, y0)
        //c.strokeStyle = 'purple'
        //c.strokeStyle = 'red'
        c.stroke()
      
        }
      }else if (touch == true) {
        ct = yl + xl*Math.tan(ang)
        xt = (ct)/Math.tan(ang)
        c.moveTo(xl + x0,y0 - yl)
        c.lineTo(xt + x0, y0)
        c.stroke()
      }
   

    
    }
}
window.addEventListener('mousemove', function(event) {
    canv = document.getElementById('c')
    c = canv.getContext('2d')
cWidth = canv.offsetWidth
wWidth = this.window.innerWidth
cHeight = canv.offsetHeight
wHeight = this.window.innerHeight
dif = wWidth - cWidth
mousex = ((event.x - dif/2)/cWidth)*300
mousey = ((event.y - 2)/cHeight)*150
difx = mousex - fx - penwidth/2
dify = mousey - fy
angle = Math.atan((dify/difx))
 document.getElementById('ab').innerText = `tg (prism): ${(tg).toFixed(2)} | mousex:${(mousex).toFixed(1)}, mousey:${(mousey).toFixed(1)} | tg (pen): ${(dify/difx).toFixed(3)} | angle: ${(Math.atan((dify/difx))).toFixed(3)} |, c: ${cc} | x': ${(xl).toFixed(2)}, y': ${(yl).toFixed(2)}, touch:${touch}  | xper: ${(xper).toFixed(2)}  | yfin: ${yfin} | ct: ${ct} | sena: ${senang} | ang: ${ang} | tang: ${tang} |  angle: ${(Math.atan((dify/difx)))} | direct: ${direct} | xl2: ${xl2} | yl2 = ${yl2} | touch2 = ${touch2} |  ang2: ${ang2}`
c.clearRect(0,0,300,150)
drawPrism()
drawpen(angle)
})