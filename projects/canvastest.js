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
   angchose = 0.5*pi
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
    //console.log(angchose)
    //console.log('diff',Math.cos(angchose)*radius,Math.cos(angchose))
    ctx.beginPath()
    ctx.arc(150 + Math.cos(angchose)*radius,75,5,0,2*pi,false)
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(150 + Math.cos(angchose)*radius,75 + Math.sin(angchose)*radius)
    ctx.lineTo(150,75)
    ctx.lineWidth = '1.5'
    ctx.strokeStyle = 'black'
    ctx.stroke()

    
    ctx.beginPath()
    console.log('diff',Math.cos(angchose)*40)
    ctx.moveTo(150 + Math.cos(angchose)*radius,75 + Math.sin(angchose)*radius)
    ctx.lineTo(150 + Math.cos(angchose)*radius - Math.cos(angchose)*40,75 + Math.sin(angchose)*radius - Math.sin(angchose)*40) 
    if (Math.cos(angchose)<=0) {
        //ctx.lineTo(75 - Math.cos(angchose)*40,75 - Math.sin(angchose)*40) 
    }else{
      //  ctx.lineTo(225 - Math.cos(angchose)*40,75 - Math.sin(angchose)*40) 
    }
    ctx.strokeStyle = 'blue'
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(150 + Math.cos(angchose)*radius,75 + Math.sin(angchose)*radius,5,0,2*pi,false)
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.lineWidth = '1'
    ctx.strokeStyle = 'black'
    ctx.stroke()
    
    if (Math.cos(angchose) < 0) {
        ctx.beginPath()
        diff = Math.cos(angchose)*radius
        ctx.moveTo(150 + Math.cos(angchose)*radius + 5,75)

            if (diff >= 40*Math.cos(angchose) || diff <= -40*Math.cos(angchose)) {
                if (diff> 5 || diff < -5) {
                    ctx.lineTo(150 + diff - 40*Math.cos(angchose),75)
                            }
        }else if (diff>= 5 || diff <= -5){
            ctx.lineTo(150,75)
        }
        ctx.strokeStyle = 'blue'
        ctx.stroke()
    }else if (Math.cos(angchose) > 0) {
        ctx.beginPath()
        diff = Math.cos(angchose)*radius
        ctx.moveTo(150 + Math.cos(angchose)*radius - 5,75)

            if (diff >= 40*Math.cos(angchose) || diff <= -40*Math.cos(angchose)) {
                if (diff> 5 || diff < -5) {
        ctx.lineTo(150 + diff - 40*Math.cos(angchose),75)
                }
        }else if (diff> 5 || diff < -5){
            ctx.lineTo(150,75)
        }
        ctx.strokeStyle = 'blue'
        ctx.stroke()
    }
    angchose+= 0.1*pi

   }
   const intervalId = setInterval(loop,100)
}

for (current in timers) {
           
    x = space + 2*radius*(contnumber/3)
for (i = 0; i < (contnumber/3)*2;i++) {

    if (conts[i + contnumber/3] != undefined) {
    
    canmove = true
    
    if (timers[current].time[i] - (1 - (space + 2*radius*(contnumber/3)))*0.1 >= 0) {
        if (type == 'pulse') {
        if (timers[current].amp[i + contnumber/3] -i*at*timers[current].amp[i + contnumber/3]*0.03 >= 0 && Math.sin(0 - vels[current]*(timers[current].time[i] - (1 - (space + 2*radius*(contnumber/3)))*0.1)) <= 0) {
            if (direct[current] == 'u') {
        y = (timers[current].amp[i + contnumber/3] -i*at*timers[current].amp[i + contnumber/3]*0.03)*Math.sin(0 - vels[current]*(timers[current].time[i] - (1 - (space + 2*radius*(contnumber/3)))*0.1))
            }else{
                y = -(timers[current].amp[i + contnumber/3] -i*at*timers[current].amp[i + contnumber/3]*0.03)*Math.sin(0 - vels[current]*(timers[current].time[i] - (1 - (space + 2*radius*(contnumber/3)))*0.1))
            }
        }else if(Math.sin(0 - vels[current]*(timers[current].time[i] - (1 - (space + 2*radius*(contnumber/3)))*0.1)) >= 0 && conts[i + contnumber/3].move[current] == true){
            y = 0
            if (man == false){
            conts[i + contnumber/3].move[current] = false
            }
        }
    }else{
        if (timers[current].amp[i + contnumber/3] -i*at*timers[current].amp[i + contnumber/3]*0.03 >= 0) {
            if (direct[current] == 'u') {
                y = (timers[current].amp[i + contnumber/3] -i*at*timers[current].amp[i + contnumber/3]*0.03)*Math.sin(0 - vels[current]*(timers[current].time[i] - (1 - (space + 2*radius*(contnumber/3)))*0.1))
                    }else{
                        y = -(timers[current].amp[i + contnumber/3] -i*at*timers[current].amp[i + contnumber/3]*0.03)*Math.sin(0 - vels[current]*(timers[current].time[i] - (1 - (space + 2*radius*(contnumber/3)))*0.1))
                    }
            }else{
                y = 0
                conts[i + contnumber/3].move[current] = false
            }
    }
    }else{
        y = 0
    }

    if (man == true) {
        c.fillStyle = 'black'
        if (conts[i + contnumber/3].move[current] == true) {
        if ((Math.sin(0 - vels[current]*(timers[current].time[i] - (1 - (space + 2*radius*(contnumber/3)))*0.1))).toFixed(1) == 0) {
           c.fillStyle = 'red'
        }else if((Math.sin(0 - vels[current]*(timers[current].time[i] - (1 - (space + 2*radius*(contnumber/3)))*0.1))).toFixed(2) == -1.00) {
           c.fillStyle = 'blue'
           conts[i + contnumber/3].move[current] = false
           conts[i + contnumber/3].fixpos[current] = y
        }
        }

       }

        if (conts[i + contnumber/3].move[current] == false && type == 'pulse') {
           if (man == true) {
           if (direct[current] == 'u') {
               y = conts[i + contnumber/3].fixpos[current]
           }else{
               y = conts[i + contnumber/3].fixpos[current] 
               //y = 0
           }
       }else{
           y = 0
       }
       }

       //c.fillText('I',x + radius, 120)
   
    conts[i + contnumber/3].y += y
    c.beginPath()
    
    if (draw1 == true) {
    c.arc(x + radius,y + advances[timers[current].ind].sty,radius,0,2*Math.PI)
    }
    
    c.fillStyle = 'blue'
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
}

for (current in timers2) {
    //advance = conts2[contnumber - 1 - i].advances[current]
    advance = advances[timers2[current].ind].ads[timers2[current].ind2]
    x =  2*(advance)*radius
    //x = 0
    // - (advance)*2*radius
 for (i = 0; i < contnumber;i++) {
     
     canmove = true
     if (timers2[current].time[i] - x*0.1 >= 0) {
         if (type == 'pulse') {
         if (timers2[current].amp[i] -(advance + i)*at*timers2[current].amp[i]*0.03 >= 0 && Math.sin(0 - vels[current]*(timers2[current].time[i] - x*0.1)) <= 0) {
             if (direct2[current] == 'u') {
         y = (timers2[current].amp[i] -(advance + i)*at*timers2[current].amp[i]*0.03)*Math.sin(0 - vels[current]*(timers2[current].time[i] - x*0.1))
             }else{
                 y = -(timers2[current].amp[i] -(advance + i)*at*timers2[current].amp[i]*0.03)*Math.sin(0 - vels[current]*(timers2[current].time[i] - x*0.1))
             }


             if (i == (contnumber/3)*2 && conts2[contnumber - 1 - i].reflect[current] != false) {
                 
                conts2[contnumber - 1 - i].reflect[current] = false
                //window.alert('CYAN')
                //console.log('CYAN',current,advances[timers2[current].ind])
                timers3.push({time:[],ind:timers2[current].ind,ind2:advances2[timers2[current].ind].ads.length})

                for (bask in timers2[current].time) {
                    timers3[timers3.length - 1].time.push(timers2[current].time[bask])
                }
                //timers3.push(timers2[current].time[i])
                if (direct2[current] == 'd') {
                direct3.push('u')
                }else{
                    direct3.push('d')
                    //direct3.push('u')
                }
                amps3.push(amplitude)
                
               // console.log('WHAT',advances2[timers2[current].ind].ads.length)
                if (advances2[timers2[current].ind].ads.length == 0) {
                    advances2[timers2[current].ind].ads.push((contnumber/3))
                    //console.log('WHAT2',advances2[timers2[current].ind].ads.length)
                }else{
                    //Mwindow.alert('PUSH')
                    //console.log(advances2[timers3.length - 2] + (contnumber/3)*2)
                    advances2[timers2[current].ind].ads.push(advances2[timers2[current].ind].ads[advances2[timers2[current].ind].ads.length - 1] + (contnumber/3)*2)
                }
                vels.push(vel)
                for (a in conts3) {
                    conts3[a].move.push(true)
                }
                //advances2[timers2[current].ind].amp = 0
                //loop = false
                 
                 }
         }else if(Math.sin(0 - vels[current]*(timers2[current].time[i] - x*0.1)) >= 0 && conts2[contnumber - 1 - i].move[current] == true){
            y = 0
            if (man == false) {
           conts2[contnumber - 1 - i].move[current] = false
            }
        }else{
            y = 0
            //window.alert('EITA')
        }

        /*
         if ((Math.sin(0 - vels[current]*(timers2[current].time[i] - x*0.1))).toFixed(2) == -1.00 && timers2[current].time[i] - x*0.1 >= 0 && conts2[contnumber - 1 - i].move[current] != false) {
            //window.alert('STOP')
           conts2[contnumber - 1 - i].fixpos[current] = y
            conts2[contnumber - 1 - i].move[current] = false
         }*/
          
     }else{
         if (timers2[current].amp[i] -(advance + i)*at*timers2[current].amp[i]*0.03 >= 0) {
             if (direct2[current] == 'u') {
                 y = (timers2[current].amp[i] -(advance + i)*at*timers2[current].amp[i]*0.03)*Math.sin(0 - vels[current]*(timers2[current].time[i] - x*0.1))
                     }else{
                         y = -(timers2[current].amp[i] -(advance + i)*at*timers2[current].amp[i]*0.03)*Math.sin(0 - vels[current]*(timers2[current].time[i] - x*0.1))
                     }
             }else{
                 y = 0
                 conts2[contnumber - 1 - i].move[current] = false
             }
     }
     }else{
         y = 0
     }

     if (man == true) {
     c.fillStyle = 'black'
     /*
    if (conts2[contnumber - 1 - i].move[current] == true) {
    if ((Math.sin(0 - vels[current]*(timers2[current].time[i] - x*0.1))).toFixed(1) == 0) {
       c.fillStyle = 'red'
    }else if((Math.sin(0 - vels[current]*(timers2[current].time[i] - x*0.1))).toFixed(2) == -1.00) {
       c.fillStyle = 'blue'
    }
    }
    */

    c.font = '20px Arial'
    if (Math.sin(0 - vels[current]*(timers2[current].time[i] - x*0.1)) < Math.sin(0 - vels[current]*(timers2[current].time[i] + 0.01 - x*0.1)) && timers2[current].time[i] - x*0.1 >= 0 && timers2[current].amp[i] -(advance + i)*at*timers2[current].amp[i]*0.03 >= 0) {
       c.fillStyle = 'yellow'
       y = (timers2[current].amp[i] -(advance + i)*at*timers2[current].amp[i]*0.03)*-1
       conts2[contnumber - 1 - i].move[current] = false
       conts2[contnumber - 1 - i].fixpos[current] = y
    }
}

     if (conts2[contnumber - 1 - i].move[current] == false && type == 'pulse') {
      // y = 0
      if (man == true){
      if (direct2[current] == 'u') {
         y = conts2[contnumber - 1 - i].fixpos[current]
      }else{
        y = -conts2[contnumber - 1 - i].fixpos[current]
      }
      }else{
      y = 0
      }
     }
    
     conts2[contnumber - 1 - i].y += y
     
     //c.fillText('I',lastx - x - radius +2*(advance)*radius,50)
     
     c.beginPath()
     //c.arc(x + radius + space - (advance)*2*radius,y + starty,radius,0,2*Math.PI)
     if (draw1 == true) {
     c.arc(lastx - x - radius +2*(advance)*radius ,y + advances[timers2[current].ind].sty,radius,0,2*Math.PI)
     }
     
     //c.arc(lastx - x - radius,y + starty,radius,0,2*Math.PI)
     c.fillStyle = 'white'
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
         if (timers3[current].amp[i] -(advance + i)*at*timers3[current].amp[i]*0.03 >= 0 && Math.sin(0 - vels[current]*(timers3[current].time[i] - x*0.1)) <= 0) {
             if (direct3[current] == 'u') {
         y = (timers3[current].amp[i] -(advance + i)*at*timers3[current].amp[i]*0.03)*Math.sin(0 - vels[current]*(timers3[current].time[i] - x*0.1))
             }else{
                 y = -(timers3[current].amp[i] -(advance + i)*at*timers3[current].amp[i]*0.03)*Math.sin(0 - vels[current]*(timers3[current].time[i] - x*0.1))
             }


             if (i == (contnumber/3)*2 - 1 && conts3[i].reflect[current] != false) {
                 
                 
                 conts3[i].reflect[current] = false
                 //window.alert('WHITE')
                 timers2.push({time:[],ind:timers3[current].ind,ind2:advances[timers3[current].ind].ads.length,amp:[]})

                 for (bask in timers3[current].time) {
                    timers2[timers2.length - 1].time.push(timers3[current].time[bask])
                    timers2[timers2.length - 1].amp.push(timers3[current].amp[bask])
                }
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
         if (timers3[current].amp[i] -(advance + i)*at*timers3[current].amp[i]*0.03 >= 0) {
             if (direct3[current] == 'u') {
                 y = (timers3[current].amp[i] -(advance + i)*at*timers3[current].amp[i]*0.03)*Math.sin(0 - vels[current]*(timers3[current].time[i] - x*0.1))
                     }else{
                         y = -(timers3[current].amp[i] -(advance + i)*at*timers3[current].amp[i]*0.03)*Math.sin(0 - vels[current]*(timers3[current].time[i] - x*0.1))
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
     if (Math.sin(0 - vels[current]*(timers3[current].time[i] - x*0.1)) < Math.sin(0 - vels[current]*(timers3[current].time[i] + 0.01 - x*0.1)) && timers3[current].time[i] - x*0.1 >= 0 && timers3[current].amp[i] -(advance + i)*at*timers3[current].amp[i]*0.03 >= 0) {
        c.fillStyle = 'yellow'
        y = (timers3[current].amp[i] -(advance + i)*at*timers3[current].amp[i]*0.03)*-1
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


 for (current in timers) {
           
    x = space + 2*radius*(contnumber/3)
for (i = 0; i < (contnumber/3)*2;i++) {

    if (conts[i + contnumber/3] != undefined) {
    
    canmove = true
    
    if (timers[current].time[i] - (1 - (space + 2*radius*(contnumber/3)))*0.1 >= 0) {
        if (type == 'pulse') {
        if (timers[current].amp[i + contnumber/3] -i*at*timers[current].amp[i + contnumber/3]*0.03 >= 0 && Math.sin(0 - vels[current]*(timers[current].time[i] - (1 - (space + 2*radius*(contnumber/3)))*0.1)) <= 0) {
            if (direct[current] == 'u') {
        y = (timers[current].amp[i + contnumber/3] -i*at*timers[current].amp[i + contnumber/3]*0.03)*Math.sin(0 - vels[current]*(timers[current].time[i] - (1 - (space + 2*radius*(contnumber/3)))*0.1))
            }else{
                y = -(timers[current].amp[i + contnumber/3] -i*at*timers[current].amp[i + contnumber/3]*0.03)*Math.sin(0 - vels[current]*(timers[current].time[i] - (1 - (space + 2*radius*(contnumber/3)))*0.1))
            }
        }else if(Math.sin(0 - vels[current]*(timers[current].time[i] - (1 - (space + 2*radius*(contnumber/3)))*0.1)) >= 0 && conts[i + contnumber/3].move[current] == true){
            y = 0
            if (man == false){
            conts[i + contnumber/3].move[current] = false
            }
        }
    }else{
        if (timers[current].amp[i + contnumber/3] -i*at*timers[current].amp[i + contnumber/3]*0.03 >= 0) {
            if (direct[current] == 'u') {
                y = (timers[current].amp[i + contnumber/3] -i*at*timers[current].amp[i + contnumber/3]*0.03)*Math.sin(0 - vels[current]*(timers[current].time[i] - (1 - (space + 2*radius*(contnumber/3)))*0.1))
                    }else{
                        y = -(timers[current].amp[i + contnumber/3] -i*at*timers[current].amp[i + contnumber/3]*0.03)*Math.sin(0 - vels[current]*(timers[current].time[i] - (1 - (space + 2*radius*(contnumber/3)))*0.1))
                    }
            }else{
                y = 0
                conts[i + contnumber/3].move[current] = false
            }
    }
    }else{
        y = 0
    }

    if (man == true) {
        c.fillStyle = 'black'
        if (conts[i + contnumber/3].move[current] == true) {
        if ((Math.sin(0 - vels[current]*(timers[current].time[i] - (1 - (space + 2*radius*(contnumber/3)))*0.1))).toFixed(1) == 0) {
           c.fillStyle = 'red'
        }else if((Math.sin(0 - vels[current]*(timers[current].time[i] - (1 - (space + 2*radius*(contnumber/3)))*0.1))).toFixed(2) == -1.00) {
           c.fillStyle = 'blue'
           conts[i + contnumber/3].move[current] = false
           conts[i + contnumber/3].fixpos[current] = y
        }
        }

       }

        if (conts[i + contnumber/3].move[current] == false && type == 'pulse') {
           if (man == true) {
           if (direct[current] == 'u') {
               y = conts[i + contnumber/3].fixpos[current]
           }else{
               y = conts[i + contnumber/3].fixpos[current] 
               //y = 0
           }
       }else{
           y = 0
       }
       }

       //c.fillText('I',x + radius, 120)
   
    conts[i + contnumber/3].y += y
    c.beginPath()
    
    if (draw1 == true) {
    c.arc(x + radius,y + timers[current].sty[i + contnumber/3],radius,0,2*Math.PI)
    }
    
    c.fillStyle = 'blue'
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
}


if (touch2 == true) { // && touch == true) {
    c.beginPath()
    c.moveTo(xref + x0,y0 - yref)
    c.lineTo(xl2 + x0, y0 - yl2)
    c.strokeStyle = 'green'
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
c.stroke()

xper0 = (y0 - cper)/Math.tan(perslope)
c.beginPath()
c.moveTo(xper + x0,y0 - yl2)
c.lineTo(xper0 + x0,0)
c.strokeStyle = 'black'
c.stroke()

if (Math.tan(angchose) < 0) { //&& perslope > angchose) {
    // primeiro caso
    // pi = perslope - angchose
    c.beginPath()
    if (perslope > Math.abs(angchose)) {
    c.arc(xl2 + x0, y0 - yl2,20,Math.PI - perslope,Math.PI - Math.abs(angchose))
    }else{
      c.arc(xl2 + x0, y0 - yl2,20,Math.PI - Math.abs(angchose),Math.PI - perslope)
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
        c.strokeStyle = 'red'
      }else{
        yfin = y0
        c.strokeStyle = 'gray'
      }

      c.strokeStyle = 'black'
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
    c.arc(xl2 + x0, y0 - yl2,20,Math.PI - perslope,Math.PI + angchose)
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
        c.strokeStyle = 'red'
      }else{
        yfin = y0
        c.strokeStyle = 'gray'
      }
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
    c.arc(xl2 + x0, y0 - yl2,20,Math.PI + angchose,Math.PI + Math.PI - perslope)
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
  c.strokeStyle = 'purple'
  c.stroke()

  }
}