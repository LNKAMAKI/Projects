function load() {
    can = document.getElementById('c')
    ctx = can.getContext('2d')
    /*
    p1x = 150
    p1y = 140

    p2x = 110
    p2y = 120
    p3x = 120
    p3y = 115

    p4x = 150
    p4y = 100
    console.log(c)
    ctx.strokeStyle = 'black'
    ctx.beginPath();
    ctx.moveTo(p1x, p1y);
    ctx.bezierCurveTo(p2x, p2y, p3x, p3y, p4x, p4y);
    ctx.stroke()

    ctx.strokeStyle = 'red'
    ctx.fillStyle = 'red'
    ctx.beginPath()
    ctx.arc(p1x,p1y,2,0,2*Math.PI,false)
    ctx.fill()
    ctx.stroke()

    ctx.strokeStyle = 'pink'
    ctx.fillStyle = 'pink'
    ctx.beginPath()
    ctx.arc(p2x,p2y,2,0,2*Math.PI,false)
    ctx.fill()
    ctx.stroke()

    ctx.strokeStyle = 'blue'
    ctx.fillStyle = 'blue'
    ctx.beginPath()
    ctx.arc(60,p3y,2,0,2*Math.PI,false)
    ctx.fill()
    ctx.stroke()

    ctx.strokeStyle = 'green'
    ctx.fillStyle = 'green'
    ctx.beginPath()
    ctx.arc(p4x,p4y,2,0,2*Math.PI,false)
    ctx.fill()
    ctx.stroke()
    */
   pi = Math.PI
   angle = 0
   function loop () {
    ctx.clearRect(0,0,300,150)
    ctx.beginPath()
    ctx.arc(150,75,70,0,2*pi,false)    // radius = 70
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(150,75,1,0,2*pi,false)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(80,75)
    ctx.lineTo(150,75)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(220,75)
    ctx.lineTo(150,75)
    ctx.stroke()

   // console.log('loop')
    //console.log(angle)
    angle+= 0.05*pi
    //console.log(Math.cos(angle)*70)
    ctx.beginPath()
    ctx.arc(150 + Math.cos(angle)*70,75,5,0,2*pi,false)
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.stroke()
   }
   const intervalId = setInterval(loop, 100)
}