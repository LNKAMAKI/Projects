function load() {
    console.log('start pendulum')
    can = document.getElementById('canvas')
    c = can.getContext('2d')
    pi = Math.PI
    r = 70
    c.arc(150,70,r,0,pi,false)
    c.stroke()
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
    d = 0.5
    ad = d
    posy = s0
    situation = ''
    function loop () {
        clear()
        //console.log(vy)
        //console.log('y',vy*0.05)
       // console.log('position',s0 + vy)
       /*
        if (angle >= anglef || add < 0) {
            add = -1
            angle -= 0.1
        }else{
            angle+= 0.1
        }
        
        if (angle >= pi/2 && ad > 0) {
            console.log('CHANGE')
           ad = -d
        }
        if (posy >= pi/2 && ad < 0) {
            ad = d
        }
        
     */
        if (ad > 0) {
            rvy = vy + ad
            }else{
                rvy = -(vy + ad)
            }
     if (posy + rvy > 75 + r && ad > 0 && vy > 0) {
                ad = -d
                situation = 'pi+'
     }
     console.log('waht',posy + vy + ad)
     if (posy + rvy > 75 + r && ad < 0 && vy < 0) {
        console.log('EI, VC PODE PARAR')
        //ad = d
        //vy = -vy
}
           //console.log(posy + vy + ad)
        vy += ad
        
        //console.log('diffy',70 + sin(angle)*r - r)
        //dot(150 + cos(angle)*r,70 + sin(angle)*r)
        //dot(150 + cos(angle)*r,s0 + vy)
        
        if (posy + vy > 75 + r) {
            console.log('pode parar')
        }

        if (ad > 0) {
        posy += vy
        console.log('antes',posy,ad,vy)
        }else{
            posy -= vy
            console.log('antes',posy,ad,vy)
        }
        H2 = posy - r
        console.log(posy)
        if (situation !== 'pi+') {
        angle = Math.asin(H2/r)
        }else{
            angle = pi - Math.asin(H2/r)
        }
        //console.log('angle',angle, Math.asin(H2/r))
        //console.log('H2',H2)
        //console.log('/',H2,'/',r,'/',H2/r)
        //console.log('ANGULO',Math.asin(H2/r))
        //console.log(150 + cos(Math.asin(H2/r))*r)
       // console.log('cos',cos(Math.asin(H2/r)))
     
        if (posy > 75 + r) {
            clearInterval(interval)
        }
        if (ad > 0) {
        dot(150 + cos(Math.asin(H2/r))*r,posy)
        }else{
            dot(150 - cos(Math.asin(H2/r))*r,posy)
        }
       
    }
  const interval = setInterval(loop,1000)

  window.addEventListener('keyup',function(event) {
    console.log(event.key,event.key == 'p')
    if (event.key == 'p') {
    clearInterval(interval)
    }
})
}
function dot(x,y) {
    c.beginPath()
    c.arc(150,70,r,0,pi,false)
    c.stroke()

    c.beginPath()
    c.arc(x,y,5,0,2*pi,false)
    c.fillStyle = 'red'
    c.fill()
    c.stroke()

    c.beginPath()
    c.moveTo(150,0)
    c.lineTo(x,y)
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
