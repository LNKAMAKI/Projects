function load() {
    console.log('start pendulum')
    can = document.getElementById('canvas')
    c = can.getContext('2d')
    pi = Math.PI
    r = 70
    vy = 0
    h = 60
    s0 = 70 + r - h // initial y position
    H = s0 - r // remaning y position 
    angle = Math.asin(H/r)  // starting angle
    anglef = pi - Math.asin(H/r) // ending angle
    console.log(angle,anglef)
    y0 = cos(pi/2 - Math.acos(H/r))
    sf = cos(pi - pi/2 + Math.acos(H/r)) // final x position
    //console.log('angle',pi - pi/2 + Math.acos(H/r))
    //console.log(cos(pi - pi/2 + Math.acos(H/r)))
    dot(150 + cos(angle)*r,s0)
    //console.log(H)
   // console.log('sin0:',cos(pi/2 - Math.acos(H/r)),'sf',sf)

    console.log(angle,anglef)
    add = 1
    d = 0.05
    ad = d
    posy = s0
    situation = ''
    function loop () {
        clear()
        g = document.getElementById('g')
        vel = document.getElementById('vel')
        rad = document.getElementById('rad')
         // g.innerText = 'g: ' + ad
        //vel.innerText = 'vy: ' + vy
        //rad.innerText = 'rad: '+ angle
           // console.log('posição inicial:',posy,'velocidade',vy + ad)
            v = vy + ad
            if (ad > 0) {
                posi = posy + v
               // console.log('posy + vy: ',posy + v)
             }else{
                posi = posy - v
              //  console.log('posy - vy: ',posy - v)
            }
            console.log('POSI',posi)
     if (posi > 70 + r && ad > 0 && vy >= 0) {
        console.log('HEY')
                ad = -d
                situation = 'pi+'
                console.log(vy)
     }

     if (posi > 70 + r && ad < 0 && vy <= 0) {
        console.log('EI, VC PODE PARAR')
        situation = ''
        ad = d
        console.log(vy)
        //vy = -vy
}
         vy += ad 
           //console.log(posy + vy + ad)
        
        //console.log('diffy',70 + sin(angle)*r - r)
        //dot(150 + cos(angle)*r,70 + sin(angle)*r)
        //dot(150 + cos(angle)*r,s0 + vy)
        
        
        if (posy + vy > 70 + r) {
            console.log('pode parar')
        }

        if (ad > 0) {
        posy += vy
        }else{
            posy -= vy
        }
        H2 = posy - r
        console.log('H2',H2)
        console.log('COME ON',posy)
        //console.log(ad,vy)
        if (posy > 70 + r && ad > 0 && vy > 0) {
          
        }
        
        if (situation !== 'pi+') {
        angle = Math.asin(H2/r)
        }else{
            angle = pi - Math.asin(H2/r)
        }
        console.log('angle',angle, Math.asin(H2/r))
        //console.log('H2',H2)
        //console.log('/',H2,'/',r,'/',H2/r)
        //console.log('ANGULO',Math.asin(H2/r))
        //console.log(150 + cos(Math.asin(H2/r))*r)
       // console.log('cos',cos(Math.asin(H2/r)))
     
        if (posy > 70 + r) {
           // clearInterval(interval)
        }

        if (isNaN(angle) == true) {
            console.log('STOP')
            clearInterval(interval)
            clear()
            dot(150,70 + r)
        }

        if (angle == pi/2 && vy == 0) {
            clearInterval(interval)
            clear()
            dot(150,70 + r)
        }else{
        if (ad > 0) {
        dot(150 + cos(Math.asin(H2/r))*r,posy)
        }else{
            dot(150 - cos(Math.asin(H2/r))*r,posy)
        }
    }
       
    }
  const interval = setInterval(loop,20)

  window.addEventListener('keyup',function(event) {
    console.log(event.key,event.key == 'p')
    if (event.key == 'p') {
    clearInterval(interval)
    }
})
}
function dot(x,y) {
    /*
    c.beginPath()
    c.arc(150,70,r,0,pi,false)
    c.stroke()
    */

    c.beginPath()
    c.moveTo(150,0)
    c.lineTo(x,y)
    c.stroke()

    c.beginPath()
    c.arc(x,y,10,0,2*pi,false)
    c.fillStyle = 'red'
    c.fill()
    c.stroke()
}
function clear() {
    c.clearRect(0,0,300,150)
}
function sin(rad) {
 return Math.sin(rad)
}
function cos(rad) {
    return Math.cos(rad)
   }
