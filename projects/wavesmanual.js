let radius = 2
let starty = 100
let x = 0
loop = true
addpulse = false
function load() {
canv = document.getElementById('canvas')
c = canv.getContext('2d')
console.log(x)
contnumber = 60
conts = []
conts2 = []
timers = [0]
amplitude = 40
amps = [amplitude]
vel = 0.4
vels = [vel]
direct = ['u']
for (i = 0; i < contnumber;i++) {
    conts.push({y:0,move:[]})
    conts2.push({y:0,move:[]})

    for (tic in timers) {
        conts[i].move.push(true)
        conts2[i].move.push(true)
    }
}

type = 'pulse'
fixo = true
drawball = true
function animate() {
    space = 20
    at = 0.3
    x = 0
    c.clearRect(0,0,300,150)
    // function = A*sen(2*Math.PI/comp*(x + wt))

    for (l in conts) {
        conts[l].y = 0
        conts2[l].y = 0
    }

    if (addpulse == true) {
       // window.alert('FAZER ISSO AQUI')
        for (l in conts) {
            conts[l].y = 10
            conts2[l].y = 10
        }
    }
   
    for (current in timers) {
        x = 0
    for (i = 0; i < contnumber;i++) {
        
        canmove = true
        
        if (timers[current] - x*0.1 >= 0) {
            if (amps[current] -i*at*amps[current]*0.03 >= 0){// && Math.sin(0 - vels[current]*(timers[current] - x*0.1)) <= 0) {
                //if (direct[current] == 'u') {
            y = (amps[current] -i*at*amps[current]*0.03)*Math.sin(0 - vels[current]*(timers[current] - x*0.1))
               // }else{
                   // y = -(amps[current] -i*at*amps[current]*0.03)*Math.sin(0 - vels[current]*(timers[current] - x*0.1))
                //}
            }
        }else{
            y = 0
        }

        if (conts[i].move[current] == false && type == 'pulse') {
            //window.alert(conts[i].y)
            //y = conts[i].y
            //window.alert('EITA')
        }

        c.beginPath()
        if (i != 0.1) {
        conts[i].y += y
        c.arc(x + radius + space,y + starty,radius,0,2*Math.PI)
        if ((Math.sin(0 - vels[current]*(timers[current] - x*0.1))).toFixed(2) == -1.00 && timers[current] - x*0.1 >= 0) {
            c.fontStyle = '3px'
            c.fillStyle = 'red'
            conts[i].move[current] = false
            //c.fillText((Math.sin(0 - vels[current]*(timers[current] - x*0.1))).toFixed(2),x + radius + space + 2.3*x,90)
            c.fillText('I',x + radius + space,90)
        }else{
            c.fontStyle = '3px'
            c.fillStyle = 'black'
            //c.fillText((Math.sin(0 - vels[current]*(timers[current] - x*0.1))).toFixed(2),x + radius + space + 2.3*x,90)
            c.fillText('I',x + radius + space,90)
        }
        }else{
        //conts[i].y += mousey - starty
        c.arc(x + radius + space,mousey,radius,0,2*Math.PI)
        }
        c.fillStyle = 'red'
        c.fill()
        c.strokeStyle = 'black'
        c.stroke()
        c.beginPath()
        //c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
        c.fillStyle = 'white'
        c.fill()
        x+= 2*radius
        }
    }


        contsall = []
        for (cont in conts) {
            contsall.push({index:cont,y:conts[cont].y + conts2[cont].y})
        }
        
        x = 0
        
        for (i = 0; i < contnumber/2;i++) {
            if (i < contnumber/2 - 1) {
            c.beginPath()
            c.moveTo(x + radius + space,contsall[i].y + starty)
            //c.lineTo(0,9)
            x+= 2*radius
            c.lineTo(x + radius + space,contsall[i + 1].y + starty)
            c.stroke()
            }
            }
            
            x = 0
        for (i = 0; i < contnumber/2;i++) {
            c.beginPath()
            if (i == (contnumber/2 - 1)) {
                c.fillStyle = 'pink'
                c.beginPath()
                elradius = 6
                c.ellipse(x + 2*radius + space + elradius + 0.5,contsall[i].y + starty, elradius, elradius/2, 0, 0, 2*Math.PI)
                c.stroke()
                c.beginPath()
            }
            if (contsall[i].y + starty > starty) {
                //loop = false
            }
            if (drawball == true) {
            //c.arc(x + radius + space,contsall[i].y + starty,radius,0,2*Math.PI)
            }
            c.fillStyle = 'red'
            c.fill()
            c.strokeStyle = 'black'
            c.stroke()
            c.beginPath()
            //c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
            c.fillStyle = 'white'
            c.fill()
            x+= 2*radius
            }

        for (k in timers){
            timers[k] += 0.1
        }
if (loop == true) {
requestAnimationFrame(animate)
}
}
animate()
}


window.addEventListener('keydown',function (event) {
    //this.window.alert(event.key)
    if (event.key == 'p') {
        loop = false
    }
    if (event.key == 'm') {
        //this.window.alert('m')
        for (l in conts) {
            //conts[l].move = true
            conts[l].y = 0
        }
     
    }
}) 

window.addEventListener('keyup',function (event) {
    if (event.key == 'm') {
    //this.window.alert('NOW')
    timers.push(0)
    direct.push('u')
    amps.push(amplitude)
    vels.push(vel)
    for (a in conts) {
        conts[a].move.push(true)
    }
    for (a in conts2) {
        conts2[a].move.push(true)
    }
    }
    
})


window.addEventListener('mousemove',function(event) {
    canv = document.querySelector('canvas')
    cWidth = canv.offsetWidth
    wWidth = this.window.innerWidth
    cHeight = canv.offsetHeight
    wHeight = this.window.innerHeight
    dif = wWidth - cWidth
    
    mousex = ((event.x - dif/2)/cWidth)*300
    mousey = ((event.y)/cHeight)*150
    this.document.getElementById('x').innerText = mousex
    this.document.getElementById('y').innerText = mousey
   
})