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
   angle = 0.5*pi
   radius = 70
   loop()
   function loop () {
    ctx.clearRect(0,0,300,150)
    ctx.strokeStyle = 'black'
    ctx.beginPath()
    ctx.arc(150,75,radius,0,2*pi,false)    // radius = 70
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
    //console.log('diff',Math.cos(angle)*radius,Math.cos(angle))
    ctx.beginPath()
    ctx.arc(150 + Math.cos(angle)*radius,75,5,0,2*pi,false)
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(150 + Math.cos(angle)*radius,75 + Math.sin(angle)*radius)
    ctx.lineTo(150,75)
    ctx.lineWidth = '1.5'
    ctx.strokeStyle = 'black'
    ctx.stroke()

    
    ctx.beginPath()
    console.log('diff',Math.cos(angle)*40)
    ctx.moveTo(150 + Math.cos(angle)*radius,75 + Math.sin(angle)*radius)
    ctx.lineTo(150 + Math.cos(angle)*radius - Math.cos(angle)*40,75 + Math.sin(angle)*radius - Math.sin(angle)*40) 
    if (Math.cos(angle)<=0) {
        //ctx.lineTo(75 - Math.cos(angle)*40,75 - Math.sin(angle)*40) 
    }else{
      //  ctx.lineTo(225 - Math.cos(angle)*40,75 - Math.sin(angle)*40) 
    }
    ctx.strokeStyle = 'blue'
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(150 + Math.cos(angle)*radius,75 + Math.sin(angle)*radius,5,0,2*pi,false)
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.lineWidth = '1'
    ctx.strokeStyle = 'black'
    ctx.stroke()
    
    if (Math.cos(angle) < 0) {
        ctx.beginPath()
        diff = Math.cos(angle)*radius
        ctx.moveTo(150 + Math.cos(angle)*radius + 5,75)

            if (diff >= 40*Math.cos(angle) || diff <= -40*Math.cos(angle)) {
                if (diff> 5 || diff < -5) {
                    ctx.lineTo(150 + diff - 40*Math.cos(angle),75)
                            }
        }else if (diff>= 5 || diff <= -5){
            ctx.lineTo(150,75)
        }
        ctx.strokeStyle = 'blue'
        ctx.stroke()
    }else if (Math.cos(angle) > 0) {
        ctx.beginPath()
        diff = Math.cos(angle)*radius
        ctx.moveTo(150 + Math.cos(angle)*radius - 5,75)

            if (diff >= 40*Math.cos(angle) || diff <= -40*Math.cos(angle)) {
                if (diff> 5 || diff < -5) {
        ctx.lineTo(150 + diff - 40*Math.cos(angle),75)
                }
        }else if (diff> 5 || diff < -5){
            ctx.lineTo(150,75)
        }
        ctx.strokeStyle = 'blue'
        ctx.stroke()
    }
    angle+= 0.1*pi

   }
   const intervalId = setInterval(loop,100)
}

for (current in timers3) {
    advance = advances2[timers3[current].ind].ads[timers3[current].ind2]
    //advance = contnumber/3
    x =  2*(advance)*radius
    //x = 0
    // - (advance)*2*radius
 for (i = 0; i < contnumber;i++) {
     
     canmove = true
     
     if (timers3[current].time[i] - x*0.1 >= 0) {
         if (type == 'pulse') {
         if (advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03 >= 0 && Math.sin(0 - vels[current]*(timers3[current].time[i] - x*0.1)) <= 0) {
             if (direct3[current] == 'u') {
         y = (advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers3[current].time[i] - x*0.1))
             }else{
                 y = -(advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers3[current].time[i] - x*0.1))
             }


             if (i == (contnumber/3)*2 - 1 && conts3[i].reflect[current] != false) {
                 
                 
                 conts3[i].reflect[current] = false
                 //window.alert('WHITE')
                 timers2.push({time:timers3[current].time[i],ind:timers3[current].ind,ind2:advances[timers3[current].ind].ads.length})
                 if (direct3[current] == 'd') {
                    direct2.push('u')
                 }else{
                    direct2.push('d')
                    //direct2.push('u')
                 }
                 //advances[timers2[current].ind].amp.push(amplitude)
                 if (advances[timers3[current].ind].length == 1) {
                    window.alert('ON THE SIDELINES')
                 advances[timers3[current].ind].ads.push((contnumber/3)*2)
                 }else{
                    advances[timers3[current].ind].ads.push(advances[timers3[current].ind].ads[advances[timers3[current].ind].ads.length - 1] + (contnumber/3)*2)
                 }
                 vels.push(vel)
                 for (a in conts2) {
                     conts2[a].move.push(true)
                 }
                 //loop = false
                 
                 
                 }
         }else if(Math.sin(0 - vels[current]*(timers3[current].time[i] - x*0.1)) >= 0 && conts3[i].move[current] == true){
             y = 0
             if (man == false) {
             conts3[i].move[current] = false
             }
         }else{
                y = 0
                //window.alert('EITA')
            }
     }else{
         if (advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03 >= 0) {
             if (direct3[current] == 'u') {
                 y = (advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers3[current].time[i] - x*0.1))
                     }else{
                         y = -(advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers3[current].time[i] - x*0.1))
                     }
             }else{
                 y = 0
                 conts3[i].move[current] = false
             }
     }
     }else{
         y = 0
     }

    if (man == true) {
     c.fillStyle = 'black'
     if (conts3[i].move[current] == true) {
     if ((Math.sin(0 - vels[current]*(timers3[current].time[i] - x*0.1))).toFixed(1) == 0) {
        c.fillStyle = 'red'
     }else if((Math.sin(0 - vels[current]*(timers3[current].time[i] - x*0.1))).toFixed(2) == -1.00) {
        c.fillStyle = 'blue'
     }
     }

     c.font = '20px Arial'
     if (Math.sin(0 - vels[current]*(timers3[current].time[i] - x*0.1)) < Math.sin(0 - vels[current]*(timers3[current].time[i] + 0.01 - x*0.1)) && timers3[current].time[i] - x*0.1 >= 0 && advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03 >= 0) {
        c.fillStyle = 'yellow'
        y = (advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03)*-1
        conts3[i].move[current] = false
        conts3[i].fixpos[current] = y
     }
    }

     if (conts3[i].move[current] == false && type == 'pulse') {
        if (man == true) {
        if (direct3[current] == 'u') {
            y = conts3[i].fixpos[current]
        }else{
            y = -conts3[i].fixpos[current] 
        }
    }else{
        y = 0
    }
    }

    conts3[i].y += y

    // c.fillText('I',x + radius -2*(advance)*radius + space,120)
     c.beginPath()
     //c.arc(x + radius + space - (advance)*2*radius,y + starty,radius,0,2*Math.PI)
     
     if (draw1 == true) {
     c.arc(x + radius -2*(advance)*radius + space,y + advances2[timers3[current].ind].sty,radius,0,2*Math.PI)
     }
     
     //c.arc(lastx - x - radius,y + starty,radius,0,2*Math.PI)
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