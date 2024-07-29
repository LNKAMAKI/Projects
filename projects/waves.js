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
for (i = 0; i < contnumber;i++) {
    conts.push({y:0,move:[]})
    conts2.push({y:0,move:[]})

    for (tic in timers) {
        conts[i].move.push(true)
        conts2[i].move.push(true)
    }
}

type = 'pulse'
fixo = false
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
            if (type == 'pulse') {
            if (amps[current] -i*at*amps[current]*0.03 >= 0 && Math.sin(0 - vels[current]*(timers[current] - x*0.1)) <= 0) {
            y = (amps[current] -i*at*amps[current]*0.03)*Math.sin(0 - vels[current]*(timers[current] - x*0.1))
            }else if(Math.sin(0 - vels[current]*(timers[current] - x*0.1)) >= 0 && conts[i].move[current] == true){
                y = 0
                conts[i].move[current] = false
            }
        }else{
            if (amps[current] -i*at*amps[current]*0.03 >= 0) {
                y = (amps[current] -i*at*amps[current]*0.03)*Math.sin(0 - vels[current]*(timers[current] - x*0.1))
                }else{
                    y = 0
                    conts[i].move[current] = false
                }
        }
        }else{
            y = 0
        }

        if (conts[i].move[current] == false && type == 'pulse') {
            y = 0
        }
       
        conts[i].y += y
        c.beginPath()
        //c.arc(x + radius + space,conts[i].y + starty,radius,0,2*Math.PI)
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


        x = 0
        lastx = space + 2*radius*(contnumber)
        for (current in timers) {
            x = 0
        for (i = 0; i < contnumber;i++) {
            
            canmove = true
            
            if (timers[current] - x*0.1 >= 0) {
                if (type == 'pulse') {
                if (amps[current] -i*at*amps[current]*0.03 >= 0 && Math.sin(0 - vels[current]*(timers[current] - x*0.1)) <= 0) {
                    if (fixo == false) {
                        y = (amps[current] -i*at*amps[current]*0.03)*Math.sin(0 - vels[current]*(timers[current] - x*0.1))
                    }else{
                        y = -(amps[current] -i*at*amps[current]*0.03)*Math.sin(0 - vels[current]*(timers[current] - x*0.1))
                    }
                }else if(Math.sin(0 - vels[current]*(timers[current] - x*0.1)) >= 0 && conts2[contnumber - 1 - i].move[current] == true){
                    y = 0
                    if (contnumber - 1 - i == 0) {
                    //window.alert('PARE')
                    timers[current]= 0

                    for (l in conts) {
                        //conts[l].move = true
                        conts[l].move[current] = true
                        conts2[l].move[current] = true
                    }
                   // amps[current] = - amps[current]
                    amps[current] -= amplitude*0.8
                    vels[current] -= vel*0.5
                    }else{
                    conts2[contnumber - 1 - i].move[current] = false
                    }
                }
            }else{
                if (amps[current] -i*at*amps[current]*0.03 >= 0) {
                    if (fixo == false) {
                        y = (amps[current] -i*at*amps[current]*0.03)*Math.sin(0 - vels[current]*(timers[current] - x*0.1))
                    }else{
                        y = -(amps[current] -i*at*amps[current]*0.03)*Math.sin(0 - vels[current]*(timers[current] - x*0.1))
                    }
                    }else{
                        y = 0
                        conts2[contnumber - 1 - i].move[current] = false
                    }
            }
            }else{
                y = 0
            }
    
            if (conts2[contnumber - 1 - i].move[current] == false && type == 'pulse') {
                y = 0
            }
           
            //conts2[i].y += y
            conts2[contnumber - 1 - i].y += y
            c.beginPath()
            //c.arc(lastx - x - radius,conts2[contnumber - 1 - i].y + starty,radius,0,2*Math.PI)
            c.fillStyle = 'blue'
            c.fill()
            c.strokeStyle = 'black'
            c.stroke()
            c.beginPath()
            //mc.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
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
            c.arc(x + radius + space,contsall[i].y + starty,radius,0,2*Math.PI)
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
