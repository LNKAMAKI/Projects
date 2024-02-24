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
    console.log('angle',pi - pi/2 + Math.acos(H/r))
    console.log(cos(pi - pi/2 + Math.acos(H/r)))
    dot(150 + cos(angle)*r,s0)
    console.log(H)
    console.log('sin0:',cos(pi/2 - Math.acos(H/r)),'sf',sf)

    console.log(angle,anglef)
    add = 1
    d = 0.1
    ad = d
    posy = s0
    function loop () {
        clear()
        //console.log(vy)
        //console.log('y',vy*0.05)
       // console.log('position',s0 + vy)
        if (angle >= anglef || add < 0) {
            add = -1
            angle -= 0.1
        }else{
            angle+= 0.1
        }
        if (posy >= 150) {
           ad = -d
        }
        if (posy <= 0) {
            ad = d
        }
        vy += ad
        
        console.log('diffy',70 + sin(angle)*r - r)
        //dot(150 + cos(angle)*r,70 + sin(angle)*r)
        //dot(150 + cos(angle)*r,s0 + vy)
        posy += vy
        H2 = posy - r
        console.log(Math.asin(H2/r))
        dot(150 + cos(Math.asin(H2/r)),posy)
    }
  const interval = setInterval(loop,1000)
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