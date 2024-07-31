let radius = 2.3
let starty = 100
let x = 0
loop = true
addpulse = false
function load() {
canv = document.getElementById('canvas')
c = canv.getContext('2d')
console.log(x)
contnumber = 36
conts = []
conts2 = []
conts3 = []
timers = [0]
timers2 = [0]
timers3 = []
amplitude = 40
amps = [amplitude]
amps2 = [amplitude]
amps3 = [amplitude]
vel = 0.25
vels = [vel]
direct = ['u']
direct2 = ['u']
direct3 = ['u']
for (i = 0; i < contnumber;i++) {
    conts.push({y:0,move:[]})
    conts2.push({y:0,move:[],reflect:[]})
    conts3.push({y:0,move:[],reflect:[]})

    for (tic in timers) {
        conts[i].move.push(true)
    }
    for (tic in timers2) {
        conts2[i].move.push(true)
    }
    for (tic in timers3) {
        conts3[i].move.push(true)
    }
}

/*
for (i = 0; i < contnumber + contnumber/3;i++) {
    conts3.push({y:0,move:[]})
    for (tic in timers3) {
        conts3[i].move.push(true)
    }
}*/

type = 'pulse'
fixo = false
drawball = false
function animate() {
    space = 105
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
   
    /*
    for (current in timers3) {
        x =  0
       // - (contnumber/3)*2*radius
    for (i = 0; i < contnumber + contnumber/3;i++) {
        
        canmove = true
        
        if (timers3[current] - x*0.1 >= 0) {
            if (type == 'pulse') {
            if (amps3[current] -i*at*amps3[current]*0.03 >= 0 && Math.sin(0 - vels[current]*(timers3[current] - x*0.1)) <= 0) {
                if (direct3[current] == 'u') {
            y = (amps3[current] -i*at*amps3[current]*0.03)*Math.sin(0 - vels[current]*(timers3[current] - x*0.1))
                }else{
                    y = -(amps3[current] -i*at*amps3[current]*0.03)*Math.sin(0 - vels[current]*(timers3[current] - x*0.1))
                }
            }else if(Math.sin(0 - vels[current]*(timers3[current] - x*0.1)) >= 0 && conts3[i].move[current] == true){
                y = 0
                conts3[i].move[current] = false
            }
        }else{
            if (amps3[current] -i*at*amps3[current]*0.03 >= 0) {
                if (direct3[current] == 'u') {
                    y = (amps3[current] -i*at*amps3[current]*0.03)*Math.sin(0 - vels[current]*(timers3[current] - x*0.1))
                        }else{
                            y = -(amps3[current] -i*at*amps3[current]*0.03)*Math.sin(0 - vels[current]*(timers3[current] - x*0.1))
                        }
                }else{
                    y = 0
                    conts3[i].move[current] = false
                }
        }
        }else{
            y = 0
        }

        if (conts3[i].move[current] == false && type == 'pulse') {
            y = 0
        }
       
        conts3[i].y += y
        c.beginPath()
        c.arc(x + radius + space - (contnumber/3)*2*radius,y + starty,radius,0,2*Math.PI)
        c.fillStyle = 'purple'
        c.fill()
        c.strokeStyle = 'black'
        c.stroke()
        c.beginPath()
        //c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
        c.fillStyle = 'white'
        c.fill()
        x+= 2*radius
        }
    }*/

        advance = contnumber/3
        for (current in timers3) {
            x =  2*(advance)*radius
           // - (advance)*2*radius
        for (i = 0; i < contnumber;i++) {
            
            canmove = true
            
            if (timers3[current] - x*0.1 >= 0) {
                if (type == 'pulse') {
                if (amps3[current] -(advance + i)*at*amps3[current]*0.03 >= 0 && Math.sin(0 - vels[current]*(timers3[current] - x*0.1)) <= 0) {
                    if (direct3[current] == 'u') {
                y = (amps3[current] -(advance + i)*at*amps3[current]*0.03)*Math.sin(0 - vels[current]*(timers3[current] - x*0.1))
                    }else{
                        y = -(amps3[current] -(advance + i)*at*amps3[current]*0.03)*Math.sin(0 - vels[current]*(timers3[current] - x*0.1))
                    }


                    if (i == (contnumber/3)*2 && conts3[i].reflect[current] != false) {
                        
                        /*
                        conts3[i].reflect[current] = false
                        window.alert('EI')
                        timers3.push(0)
                        direct3.push('u')
                        amps3.push(amplitude)
                        vels.push(vel)
                        for (a in conts3) {
                            conts3[a].move.push(true)
                        }*/
                        //loop = false
                        
                        
                        }
                }else if(Math.sin(0 - vels[current]*(timers3[current] - x*0.1)) >= 0 && conts3[i].move[current] == true){
                    y = 0
                    conts3[i].move[current] = false
                }
            }else{
                if (amps3[current] -(advance + i)*at*amps3[current]*0.03 >= 0) {
                    if (direct3[current] == 'u') {
                        y = (amps3[current] -(advance + i)*at*amps3[current]*0.03)*Math.sin(0 - vels[current]*(timers3[current] - x*0.1))
                            }else{
                                y = -(amps3[current] -(advance + i)*at*amps3[current]*0.03)*Math.sin(0 - vels[current]*(timers3[current] - x*0.1))
                            }
                    }else{
                        y = 0
                        conts3[i].move[current] = false
                    }
            }
            }else{
                y = 0
            }
    
            if (conts3[i].move[current] == false && type == 'pulse') {
                y = 0
            }
           
            conts3[i].y += y
            c.beginPath()
            c.arc(x + radius + space - (advance)*2*radius,y + starty,radius,0,2*Math.PI)
            c.fillStyle = 'cyan'
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

        for (current in timers) {
            x = space + 2*radius*(contnumber/3)
        for (i = 0; i < (contnumber/3)*2;i++) {
            
            canmove = true
            
            if (timers[current] - (x - (space + 2*radius*(contnumber/3)))*0.1 >= 0) {
                if (type == 'pulse') {
                if (amps[current] -i*at*amps[current]*0.03 >= 0 && Math.sin(0 - vels[current]*(timers[current] - (x - (space + 2*radius*(contnumber/3)))*0.1)) <= 0) {
                    if (direct[current] == 'u') {
                y = (amps[current] -i*at*amps[current]*0.03)*Math.sin(0 - vels[current]*(timers[current] - (x - (space + 2*radius*(contnumber/3)))*0.1))
                    }else{
                        y = -(amps[current] -i*at*amps[current]*0.03)*Math.sin(0 - vels[current]*(timers[current] - (x - (space + 2*radius*(contnumber/3)))*0.1))
                    }
                }else if(Math.sin(0 - vels[current]*(timers[current] - (x - (space + 2*radius*(contnumber/3)))*0.1)) >= 0 && conts[i + contnumber/3].move[current] == true){
                    y = 0
                    conts[i + contnumber/3].move[current] = false
                }
            }else{
                if (amps[current] -i*at*amps[current]*0.03 >= 0) {
                    if (direct[current] == 'u') {
                        y = (amps[current] -i*at*amps[current]*0.03)*Math.sin(0 - vels[current]*(timers[current] - (x - (space + 2*radius*(contnumber/3)))*0.1))
                            }else{
                                y = -(amps[current] -i*at*amps[current]*0.03)*Math.sin(0 - vels[current]*(timers[current] - (x - (space + 2*radius*(contnumber/3)))*0.1))
                            }
                    }else{
                        y = 0
                        conts[i + contnumber/3].move[current] = false
                    }
            }
            }else{
                y = 0
            }
    
            if (conts[i + contnumber/3].move[current] == false && type == 'pulse') {
                y = 0
            }
           
            conts[i + contnumber/3].y += y
            c.beginPath()
            c.arc(x + radius,y + starty,radius,0,2*Math.PI)
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
        for (current in timers2) {
            x = 0
        for (i = 0; i < contnumber;i++) {
            
            canmove = true
            
            if (timers2[current] - x*0.1 >= 0) {
                if (type == 'pulse') {
                if (amps2[current] -i*at*amps2[current]*0.03 >= 0 && Math.sin(0 - vels[current]*(timers2[current] - x*0.1)) <= 0) {
                    if (fixo == false) {
                        if (direct2[current] == 'u') {
                        y = (amps2[current] -i*at*amps2[current]*0.03)*Math.sin(0 - vels[current]*(timers2[current] - x*0.1))
                        }else{
                            y = -(amps2[current] -i*at*amps2[current]*0.03)*Math.sin(0 - vels[current]*(timers2[current] - x*0.1))
                        }
                    }else{
                        if (direct2[current] == 'd') {
                            y = (amps2[current] -i*at*amps2[current]*0.03)*Math.sin(0 - vels[current]*(timers2[current] - x*0.1))
                            }else{
                                y = -(amps2[current] -i*at*amps2[current]*0.03)*Math.sin(0 - vels[current]*(timers2[current] - x*0.1))
                            }
                    }

                    if (i == (contnumber/3)*2 && conts2[contnumber - 1 - i].reflect[current] != false) {
                        
                        conts2[contnumber - 1 - i].reflect[current] = false
                        //window.alert('EI')
                        conts
                        timers3.push(timers2[current])
                        direct3.push('u')
                        amps3.push(amplitude)
                        vels.push(vel)
                        for (a in conts3) {
                            conts3[a].move.push(true)
                        }
                        //loop = false
                        
                        
                        }

        
                }else if(Math.sin(0 - vels[current]*(timers2[current] - x*0.1)) >= 0 && conts2[contnumber - 1 - i].move[current] == true){
                    
                    conts2[contnumber - 1 - i].move[current] = false
                    /*
                    y = 0
                    if (contnumber - 1 - i == 0) {
                    //window.alert('PARE')
                    timers2[current]= 0

                    for (l in conts) {
                        //conts[l].move = true
                        conts[l].move[current] = true
                        conts2[l].move[current] = true
                    }
                   // amps2[current] = - amps2[current]
                   if (fixo == false) {
                   if (direct2[current] == 'u') {
                    direct2[current] = 'd'
                   }else{
                    direct2[current] = 'u'
                   }
                }else{
                    if (direct2[current] == 'u') {
                        direct2[current] = 'u'
                       }else{
                        direct2[current] = 'd'
                       }
                }
                    amps2[current] -= amplitude*0.7
                    vels[current] -= vel*0.2
                    }else{
                    conts2[contnumber - 1 - i].move[current] = false
                    }
                    */
                }
            }else{
                if (amps2[current] -i*at*amps2[current]*0.03 >= 0) {
                    if (fixo == false) {
                        y = (amps2[current] -i*at*amps2[current]*0.03)*Math.sin(0 - vels[current]*(timers2[current] - x*0.1))
                    }else{
                        y = -(amps2[current] -i*at*amps2[current]*0.03)*Math.sin(0 - vels[current]*(timers2[current] - x*0.1))
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
            c.arc(lastx - x - radius,y + starty,radius,0,2*Math.PI)
            c.fillStyle = 'white'
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


        x = 0
      
        for (i = 0; i < contnumber/3;i++) {
            c.beginPath()
            c.arc(x + radius + space,130,radius,0,2*Math.PI)
            c.fillStyle = 'yellow'
            c.fill()
            c.strokeStyle = 'black'
            c.stroke()
            x+= 2*radius
            }
            for (i = 0; i < contnumber/3;i++) {
                c.beginPath()
                c.arc(x + radius + space,130,radius,0,2*Math.PI)
                c.fillStyle = 'pink'
                c.fill()
                c.strokeStyle = 'black'
                c.stroke()
                x+= 2*radius
                }
                for (i = 0; i < contnumber/3;i++) {
                    c.beginPath()
                    c.arc(x + radius + space,130,radius,0,2*Math.PI)
                    c.fillStyle = 'green'
                    c.fill()
                    c.strokeStyle = 'black'
                    c.stroke()
                    x+= 2*radius
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
            //c.stroke()
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
        for (k in timers2){
            timers2[k] += 0.1
        }
        for (k in timers3){
            timers3[k] += 0.1
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
    timers2.push(0)
    direct.push('u')
    direct2.push('u')
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