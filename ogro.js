//conts2[i], mas preserva as outras configurações do timers2 original
for (current in timers2) {
    //advance = conts2[i].advances[current]
    advance = advances[timers2[current].ind].ads[timers2[current].ind2]
    x =  2*(advance)*radius
    //x = 0
    // - (advance)*2*radius
 for (i = 0; i < contnumber;i++) {
     
     canmove = true
     if (timers2[current].time - x*0.1 >= 0) {
         if (type == 'pulse') {
         if (advances[timers2[current].ind].amp -(advance + i)*at*advances[timers2[current].ind].amp*0.03 >= 0 && Math.sin(0 - vels[current]*(timers2[current].time - x*0.1)) <= 0) {
             if (direct2[current] == 'u') {
         y = (advances[timers2[current].ind].amp -(advance + i)*at*advances[timers2[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
             }else{
                 y = -(advances[timers2[current].ind].amp -(advance + i)*at*advances[timers2[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
             }


             if (i == (contnumber/3)*2 && conts2[i].reflect[current] != false) {
                 
                conts2[i].reflect[current] = false
                //window.alert('CYAN')
                //console.log('CYAN',current,advances[timers2[current].ind])
                //timers3.push({time:timers2[current].time,ind:timers2[current].ind,ind2:advances2[timers2[current].ind].ads.length})
                //timers3.push(timers2[current].time)
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
                //loop = false
                 
                 }
         }else if(Math.sin(0 - vels[current]*(timers2[current].time - x*0.1)) >= 0 && conts2[i].move[current] == true){
            y = 0
            if (man == false) {
           conts2[i].move[current] = false
            }
        }else{
            y = 0
            //window.alert('EITA')
        }

        /*
         if ((Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))).toFixed(2) == -1.00 && timers2[current].time - x*0.1 >= 0 && conts2[i].move[current] != false) {
            //window.alert('STOP')
           conts2[i].fixpos[current] = y
            conts2[i].move[current] = false
         }*/
          
     }else{
         if (advances[timers2[current].ind].amp -(advance + i)*at*advances[timers2[current].ind].amp*0.03 >= 0) {
             if (direct2[current] == 'u') {
                 y = (advances[timers2[current].ind].amp -(advance + i)*at*advances[timers2[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
                     }else{
                         y = -(advances[timers2[current].ind].amp -(advance + i)*at*advances[timers2[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
                     }
             }else{
                 y = 0
                 conts2[i].move[current] = false
             }
     }
     }else{
         y = 0
     }

     if (man == true) {
     c.fillStyle = 'black'
    if (conts2[i].move[current] == true) {
    if ((Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))).toFixed(1) == 0) {
       c.fillStyle = 'red'
    }else if((Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))).toFixed(2) == -1.00) {
       c.fillStyle = 'blue'
    }
    }

    c.font = '20px Arial'
    if (Math.sin(0 - vels[current]*(timers2[current].time - x*0.1)) < Math.sin(0 - vels[current]*(timers2[current].time + 0.01 - x*0.1)) && timers2[current].time - x*0.1 >= 0 && advances[timers2[current].ind].amp -(advance + i)*at*advances[timers2[current].ind].amp*0.03 >= 0) {
       c.fillStyle = 'yellow'
       y = (advances[timers2[current].ind].amp -(advance + i)*at*advances[timers2[current].ind].amp*0.03)*-1
       conts2[i].move[current] = false
       conts2[i].fixpos[current] = y //+ advances[timers2[current].ind].sty[i]
    }
}

     if (conts2[i].move[current] == false && type == 'pulse') {
      // y = 0
      if (man == true){
      if (direct2[current] == 'u') {
         y = conts2[i].fixpos[current]
      }else{
        y = -conts2[i].fixpos[current]
      }
      }else{
      y = 0
      }
     }
    //
     conts2[i].y = y + advances[timers2[current].ind].sty[i]
     conts2[i].ys.push(conts2[i].y)
     
     //c.fillText('I',lastx - x - radius +2*(advance)*radius,50)
     
     c.beginPath()
     //c.arc(x + radius + space - (advance)*2*radius,y + starty,radius,0,2*Math.PI)
     if (draw1 == true && i != contnumber/3) {
     c.arc(lastx - x - radius +2*(advance)*radius,y + advances[timers2[current].ind].sty[i],radius,0,2*Math.PI)
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
// conts2[contnumber/3 + i], não preserva as outras configurações
 for (current in timers2) {
    //advance = conts2[contnumber/3 + i].advances[current]
    advance = advances[timers2[current].ind].ads[timers2[current].ind2]
    x =  2*(advance)*radius
    //x = 0
    // - (advance)*2*radius
 for (i = 0; i < (contnumber/3)*2;i++) {
     
     canmove = true
     if (timers2[current].time - x*0.1 >= 0) {
         if (type == 'pulse') {
         if (advances[timers2[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber/3 + i]*0.03 >= 0 && Math.sin(0 - vels[current]*(timers2[current].time - x*0.1)) <= 0) {
             if (direct2[current] == 'u') {
         y = (advances[timers2[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
             }else{
                 y = -(advances[timers2[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
             }


             if (i == (contnumber/3)*2 && conts2[contnumber/3 + i].reflect[current] != false) {
                 
                conts2[contnumber/3 + i].reflect[current] = false
                //window.alert('CYAN')
                //console.log('CYAN',current,advances[timers2[current].ind])
                //timers3.push({time:timers2[current].time,ind:timers2[current].ind,ind2:advances2[timers2[current].ind].ads.length})
                //timers3.push(timers2[current].time)
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
                //loop = false
                 
                 }
         }else if(Math.sin(0 - vels[current]*(timers2[current].time - x*0.1)) >= 0 && conts2[contnumber/3 + i].move[current] == true){
            y = 0
            if (man == false) {
           conts2[contnumber/3 + i].move[current] = false
            }
        }else{
            y = 0
            //window.alert('EITA')
        }

        /*
         if ((Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))).toFixed(2) == -1.00 && timers2[current].time - x*0.1 >= 0 && conts2[contnumber/3 + i].move[current] != false) {
            //window.alert('STOP')
           conts2[contnumber/3 + i].fixpos[current] = y
            conts2[contnumber/3 + i].move[current] = false
         }*/
          
     }else{
         if (advances[timers2[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber/3 + i]*0.03 >= 0) {
             if (direct2[current] == 'u') {
                 y = (advances[timers2[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
                     }else{
                         y = -(advances[timers2[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
                     }
             }else{
                 y = 0
                 conts2[contnumber/3 + i].move[current] = false
             }
     }
     }else{
         y = 0
     }

     if (man == true) {
     c.fillStyle = 'black'
    if (conts2[contnumber/3 + i].move[current] == true) {
    if ((Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))).toFixed(1) == 0) {
       c.fillStyle = 'red'
    }else if((Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))).toFixed(2) == -1.00) {
       c.fillStyle = 'blue'
    }
    }

    c.font = '20px Arial'
    if (Math.sin(0 - vels[current]*(timers2[current].time - x*0.1)) < Math.sin(0 - vels[current]*(timers2[current].time + 0.01 - x*0.1)) && timers2[current].time - x*0.1 >= 0 && advances[timers2[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber/3 + i]*0.03 >= 0) {
       c.fillStyle = 'yellow'
       y = (advances[timers2[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber/3 + i]*0.03)*-1
       conts2[contnumber/3 + i].move[current] = false
       conts2[contnumber/3 + i].fixpos[current] = y //+ advances[timers2[current].ind].sty[contnumber/3 + i]
    }
}

     if (conts2[contnumber/3 + i].move[current] == false && type == 'pulse') {
      // y = 0
      if (man == true){
      if (direct2[current] == 'u') {
         y = conts2[contnumber/3 + i].fixpos[current]
      }else{
        y = -conts2[contnumber/3 + i].fixpos[current]
      }
      }else{
      y = 0
      }
     }
    //
     conts2[contnumber/3 + i].y = y + advances[timers2[current].ind].sty[contnumber/3 + i]
     conts2[contnumber/3 + i].ys.push(conts2[contnumber/3 + i].y)
     
     //c.fillText('I',lastx - x - radius +2*(advance)*radius,50)
     
     c.beginPath()
     //c.arc(x + radius + space - (advance)*2*radius,y + starty,radius,0,2*Math.PI)
     if (draw1 == true &&  contnumber/3 + i != contnumber/3) {
     c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),y + advances[timers2[current].ind].sty[contnumber/3 + i],radius,0,2*Math.PI)
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
//conts2[contnumber - 1 - i], mas não preserva as outras configurações
 for (current in timers2) {
    //advance = conts2[contnumber - 1 - i].advances[current]
    advance = advances[timers2[current].ind].ads[timers2[current].ind2]
    x =  2*(advance)*radius
    //x = 0
    // - (advance)*2*radius
 for (i = 0; i < (contnumber/3)*2;i++) {
     
     canmove = true
     if (timers2[current].time - x*0.1 >= 0) {
         if (type == 'pulse') {
         if (advances[timers2[current].ind].amp[contnumber - 1 - i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber - 1 - i]*0.03 >= 0 && Math.sin(0 - vels[current]*(timers2[current].time - x*0.1)) <= 0) {
             if (direct2[current] == 'u') {
         y = (advances[timers2[current].ind].amp[contnumber - 1 - i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber - 1 - i]*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
             }else{
                 y = -(advances[timers2[current].ind].amp[contnumber - 1 - i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber - 1 - i]*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
             }


             if (i == (contnumber/3)*2 && conts2[contnumber - 1 - i].reflect[current] != false) {
                 
                conts2[contnumber - 1 - i].reflect[current] = false
                //window.alert('CYAN')
                //console.log('CYAN',current,advances[timers2[current].ind])
                //timers3.push({time:timers2[current].time,ind:timers2[current].ind,ind2:advances2[timers2[current].ind].ads.length})
                //timers3.push(timers2[current].time)
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
                //loop = false
                 
                 }
         }else if(Math.sin(0 - vels[current]*(timers2[current].time - x*0.1)) >= 0 && conts2[contnumber - 1 - i].move[current] == true){
            y = 0
            if (man == false) {
           conts2[contnumber - 1 - i].move[current] = false
            }
        }else{
            y = 0
            //window.alert('EITA')
        }

        /*
         if ((Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))).toFixed(2) == -1.00 && timers2[current].time - x*0.1 >= 0 && conts2[contnumber - 1 - i].move[current] != false) {
            //window.alert('STOP')
           conts2[contnumber - 1 - i].fixpos[current] = y
            conts2[contnumber - 1 - i].move[current] = false
         }*/
          
     }else{
         if (advances[timers2[current].ind].amp[contnumber - 1 - i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber - 1 - i]*0.03 >= 0) {
             if (direct2[current] == 'u') {
                 y = (advances[timers2[current].ind].amp[contnumber - 1 - i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber - 1 - i]*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
                     }else{
                         y = -(advances[timers2[current].ind].amp[contnumber - 1 - i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber - 1 - i]*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
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
    if (conts2[contnumber - 1 - i].move[current] == true) {
    if ((Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))).toFixed(1) == 0) {
       c.fillStyle = 'red'
    }else if((Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))).toFixed(2) == -1.00) {
       c.fillStyle = 'blue'
    }
    }

    c.font = '20px Arial'
    if (Math.sin(0 - vels[current]*(timers2[current].time - x*0.1)) < Math.sin(0 - vels[current]*(timers2[current].time + 0.01 - x*0.1)) && timers2[current].time - x*0.1 >= 0 && advances[timers2[current].ind].amp[contnumber - 1 - i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber - 1 - i]*0.03 >= 0) {
       c.fillStyle = 'yellow'
       y = (advances[timers2[current].ind].amp[contnumber - 1 - i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber - 1 - i]*0.03)*-1
       conts2[contnumber - 1 - i].move[current] = false
       conts2[contnumber - 1 - i].fixpos[current] = y //+ advances[timers2[current].ind].sty[contnumber - 1 - i]
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
    //
     conts2[contnumber - 1 - i].y = y + advances[timers2[current].ind].sty[contnumber - 1 - i]
     conts2[contnumber - 1 - i].ys.push(conts2[contnumber - 1 - i].y)
     
     //c.fillText('I',lastx - x - radius +2*(advance)*radius,50)
     
     c.beginPath()
     //c.arc(x + radius + space - (advance)*2*radius,y + starty,radius,0,2*Math.PI)
     if (draw1 == true &&  contnumber - 1 - i != contnumber/3) {
     c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),y + advances[timers2[current].ind].sty[contnumber - 1 - i],radius,0,2*Math.PI)
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