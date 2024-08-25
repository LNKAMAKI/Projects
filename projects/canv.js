function load() {
    drawPrism()
    drawpen(Math.PI)
}

senang = 'i'
function drawPrism() {
    canv = document.getElementById('c')
    c = canv.getContext('2d')
    b = 70
    h = 70
    fixy = 80
    x0 = (300 - b)/2
    y0 = 150 - (150 - fixy)/2
    tg = h/(b/2)
    c.lineWidth = '1'
    c.strokeStyle = 'black'
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

penwidth = 60
fx = 40
fy = 60
touch = false
prismaind = 1.6
corind = 1.514
function drawpen (angle) {
    // centro = fx + penwidth/2, fy
    //c.stroke()

    if (angle >= 0) {
    x2 = -(penwidth/2)*Math.cos(angle) + fx + penwidth/2
    y2 = -(penwidth/2)*Math.sin(angle) + fy
    x = (penwidth/2)*Math.cos(angle) + fx + penwidth/2
    y = (penwidth/2)*Math.sin(angle) + fy
    }else{
    x2 = -(penwidth/2)*Math.cos(Math.PI + angle) + fx + penwidth/2
    y2 = -(penwidth/2)*Math.sin(Math.PI + angle) + fy
    x = (penwidth/2)*Math.cos(Math.PI + angle) + fx + penwidth/2
    y = (penwidth/2)*Math.sin(Math.PI + angle) + fy
    }

    if (mousey >= fy && mousex >= fx + penwidth/2) { // mouse em baixo e na direita
        x2 = (penwidth/2)*Math.cos(angle) + fx + penwidth/2
    y2 = (penwidth/2)*Math.sin(angle) + fy
    x = (penwidth/2)*-Math.cos(angle) + fx + penwidth/2
    y = (penwidth/2)*-Math.sin(angle) + fy
    }else if(mousey >= fy && mousex <= fx + penwidth/2){ // mouse em baixo e na esquerda
        x2 = -(penwidth/2)*Math.cos(angle) + fx + penwidth/2
       y2 = -(penwidth/2)*Math.sin(angle) + fy
       x = (penwidth/2 )*Math.cos(angle) + fx + penwidth/2
       y = (penwidth/2)*Math.sin(angle) + fy
    }
   

    c.lineWidth = '2'
    c.beginPath()
    c.moveTo(fx + penwidth/2,fy)
    c.lineTo(x2,y2)
    c.strokeStyle = 'black'
    c.stroke()

    c.beginPath()
    c.moveTo(fx + penwidth/2,fy)
    c.lineTo(x,y)
    c.strokeStyle = 'blue'
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
    
    c.lineWidth = '1.5'
    notouch = false
    if (Math.tan(angle) > 0 && mousex < fx + penwidth/2) {
        notouch = true
    }else if(Math.tan(angle) < 0 && mousex < fx + penwidth/2) {
        notouch = true
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
        // código para rotacionar a caneta (lembre-se de que as tg's assumem ambos os valores)
    if (Math.tan(angle) > 0) {
        if (mousex > fx + penwidth/2) {
        c.lineTo((150 - y2)/Math.tan(angle) + x2,150)
        }else{
        c.lineTo((y2)/-Math.tan(angle) + x2,0)
        }
    }else if (Math.tan(angle) < 0){
        if (mousex < fx + penwidth/2) {
            c.lineTo((150 - y2)/Math.tan(angle) + x2,150)
                }else{
                c.lineTo((y2)/-Math.tan(angle) + x2,0)
                }
            }
}else{
    //window.alert(Math.tan(angle))
    if (Math.tan(angle) < 0) {
        c.lineTo((y2)/-Math.tan(angle) + x2,0)
    }else{
        c.lineTo((150 - y2)/Math.tan(angle) + x2,150)
    }
}


c.strokeStyle = 'red'
c.stroke()
    }else{
        c.lineTo(xl + x0,y0 - yl)
        c.strokeStyle = 'red'
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
        c.stroke()

        xper0 = (y0 - cper)/-Math.tan(perslope)
        c.beginPath()
        c.moveTo(xl + x0,y0 - yl)
        c.lineTo(xper0 + x0,0)
        c.strokeStyle = 'black'
        c.stroke()

        if (Math.tan(angle) > 0 && perslope > angle) {
          // primeiro caso
          // pi = perslope - angle
          c.beginPath()
          c.arc(xl + x0, y0 - yl,20,Math.PI + angle,Math.PI + perslope)
          c.stroke()
        
          // angle
          // yl = xl*tg(angle) + c
          // c = yl + xl*tg(angle)
          // x = (c - 0)/tg(angle)
          // sigma = perslope - angle
          senang = (corind*Math.sin(perslope - Math.abs(angle)))/prismaind
            ang = perslope - Math.sin(senang)
            //ang = 0.5
          ct = yl + xl*Math.tan(ang)
          xt = (ct)/Math.tan(ang)
          c.moveTo(xl + x0,y0 - yl)
          c.lineTo(xt + x0, y0)
          c.strokeStyle = 'red'
          c.stroke()

        }

        if (Math.tan(angle) > 0 && perslope < angle) {
            // primeiro caso
            // pi = perslope - angle
            c.beginPath()
            c.arc(xl + x0, y0 - yl,20,Math.PI + perslope,Math.PI + Math.abs(angle))
            c.stroke()
            c.fillStyle = 'cyan'

            // siigma = angle + perslope
           // senang = (corind*Math.sin(perslope - Math.ab(angle)))/prismaind
            ang = Math.sin(senang) + perslope
            ang = Math.abs(angle)
          ct = yl + xl*Math.tan(ang)
          xt = (ct)/Math.tan(ang)
          c.moveTo(xl + x0,y0 - yl)
          c.lineTo(xt + x0, y0)
          c.strokeStyle = 'red'
          c.stroke()
          }

          if (Math.tan(angle) > 0) {
           // window.alert(perslope )
          }

          
          /*
          if (Math.tan(angle) < 0 && perslope < Math.abs(Math.atan(tg))) {
            // primeiro caso
            // pi = perslope - angle
            c.beginPath()
            c.arc(xl + x0, y0 - yl,20,Math.PI - Math.abs(angle),Math.PI + perslope)
            //c.stroke()
            c.fillStyle = 'cyan'
          }*/

          
          if (Math.tan(angle) < 0 && perslope < Math.abs(Math.atan(tg))) {
           // window.alert('HEY')
            // primeiro caso
            // pi = perslope - angle
            c.beginPath()
            c.arc(xl + x0, y0 - yl,20,Math.PI - Math.abs(angle),Math.PI + perslope)
            c.stroke()
            c.fillStyle = 'cyan'

            
            // vermelho: 1,514, 
            // prisma: 1,52
            // pi = Math(angle) + perslope
            // lei de snell:
            // n1.sen1 = n2.sen2
            // corind.sen(pi) = prismaind.sen(resangle)
            senang = (corind*Math.sin(Math.abs(angle) + perslope))/prismaind
            ang = perslope - Math.sin(senang)
          ct = yl + xl*Math.tan(ang)
          xt = (ct)/Math.tan(ang)
          c.moveTo(xl + x0,y0 - yl)
          c.lineTo(xt + x0, y0)
          c.strokeStyle = 'red'
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
 document.getElementById('ab').innerText = `tg (prism): ${(tg).toFixed(2)} | mousex:${(mousex).toFixed(1)}, mousey:${(mousey).toFixed(1)} | tg (pen): ${-(dify/difx).toFixed(1)} | angle: ${(Math.atan((dify/difx))).toFixed(1)} |, c: ${cc} | x': ${(xl).toFixed(2)}, y': ${(yl).toFixed(2)}, touch:${touch}  | xper: ${(xper).toFixed(2)} ! sena: ${senang}`
c.clearRect(0,0,300,150)
drawPrism()
drawpen(angle)
})