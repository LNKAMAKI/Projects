// digite aqui seu programa
var H, M, S, T;
scanf("%d%d%d%d","H","M","S","T");
var Hf = H + T/3600;
var Mf = M +  (T% 3600)/60;
var Sf = S + (T% 3600) % 60;
 // printf("%d\n", Hf);
  // printf("%d\n",Mf);
 //  printf("%d\n", Sf);

if (Sf > 59) {
 Mf +=  Math.floor(Sf/60); 
  Sf = Sf%60;
}
 //printf("%d\n",Mf);
  // printf("%d\n", Sf);

if (Mf > 59) {
    Hf +=  Math.floor(Mf/60);
     Mf = Mf%60;
   }
printf("%d\n",Hf/24);
//printf("%d",Hf/24);
   printf("%d\n", Hf);
   printf("%d\n",Mf);
   printf("%d\n", Sf);

   for (current in timers) {
    //advance = conts[contnumber/3 + i].advances[current]
    advance = advances[timers[current].ind].ads[timers[current].ind2]
    x =  2*(advance)*radius
    //x = 0
    // - (advance)*2*radius
 for (i = 0; i < (contnumber/3)*2;i++) {
     
     canmove = true
     if (timers[current].time - x*0.1 >= 0) {
         if (type == 'pulse') {
         if (advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03 >= 0 && Math.sin(0 - vels[current]*(timers[current].time - x*0.1)) <= 0) {
             if (direct[current] == 'u') {
         y = (advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers[current].time - x*0.1))
             }else{
                 y = -(advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers[current].time - x*0.1))
             }


             if (i == (contnumber/3)*2 - 1 && conts[contnumber/3 + i].reflect[current] != false) {
                 
                conts[contnumber/3 + i].reflect[current] = false
                //window.alert('CYAN')
                //console.log('CYAN',current,advances[timers[current].ind])
                //timers3.push({time:timers[current].time,ind:timers[current].ind,ind2:advances2[timers[current].ind].ads.length})
                //timers3.push(timers[current].time)
                if (direct[current] == 'd') {
                direct3.push('u')
                }else{
                    direct3.push('d')
                    //direct3.push('u')
                }
                amps3.push(amplitude)
                
               // console.log('WHAT',advances2[timers[current].ind].ads.length)
                if (advances2[timers[current].ind].ads.length == 0) {
                    advances2[timers[current].ind].ads.push((contnumber/3))
                    //console.log('WHAT2',advances2[timers[current].ind].ads.length)
                }else{
                    //Mwindow.alert('PUSH')
                    //console.log(advances2[timers3.length - 2] + (contnumber/3)*2)
                    advances2[timers[current].ind].ads.push(advances2[timers[current].ind].ads[advances2[timers[current].ind].ads.length - 1] + (contnumber/3)*2)
                }
                vels.push(vel)
                for (a in conts3) {
                    conts3[a].move.push(true)
                }
                //loop = false
                 
                 }
         }else if(Math.sin(0 - vels[current]*(timers[current].time - x*0.1)) >= 0 && conts[contnumber/3 + i].move[current] == true){
            y = 0
            if (man == false) {
           conts[contnumber/3 + i].move[current] = false
            }
        }else{
            y = 0
            //window.alert('EITA')
        }

        /*
         if ((Math.sin(0 - vels[current]*(timers[current].time - x*0.1))).toFixed(2) == -1.00 && timers[current].time - x*0.1 >= 0 && conts[contnumber/3 + i].move[current] != false) {
            //window.alert('STOP')
           conts[contnumber/3 + i].fixpos[current] = y
            conts[contnumber/3 + i].move[current] = false
         }*/
          
     }else{
         if (advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03 >= 0) {
             if (direct[current] == 'u') {
                 y = (advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers[current].time - x*0.1))
                     }else{
                         y = -(advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers[current].time - x*0.1))
                     }
             }else{
                 y = 0
                 conts[contnumber/3 + i].move[current] = false
             }
     }
     }else{
         y = 0
     }

     if (man == true) {
     c.fillStyle = 'black'
    if (conts[contnumber/3 + i].move[current] == true) {
    if ((Math.sin(0 - vels[current]*(timers[current].time - x*0.1))).toFixed(1) == 0) {
       c.fillStyle = 'red'
    }else if((Math.sin(0 - vels[current]*(timers[current].time - x*0.1))).toFixed(2) == -1.00) {
       c.fillStyle = 'blue'
    }
    }

    c.font = '20px Arial'
    if (Math.sin(0 - vels[current]*(timers[current].time - x*0.1)) < Math.sin(0 - vels[current]*(timers[current].time + 0.01 - x*0.1)) && timers[current].time - x*0.1 >= 0 && advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03 >= 0) {
       c.fillStyle = 'yellow'
       y = (advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03)*-1
       conts[contnumber/3 + i].move[current] = false
       conts[contnumber/3 + i].fixpos[current] = y //+ advances[timers[current].ind].sty[contnumber/3 + i]
    }
}

     if (conts[contnumber/3 + i].move[current] == false && type == 'pulse') {
      // y = 0
      if (man == true){
      if (direct[current] == 'u') {
         y = conts[contnumber/3 + i].fixpos[current]
      }else{
        y = -conts[contnumber/3 + i].fixpos[current]
      }
      }else{
      y = 0
      }
     }
    
     conts[contnumber/3 + i].y = y + advances[timers[current].ind].sty[contnumber/3 + i]
     conts[contnumber/3 + i].ys.push(conts[contnumber/3 + i].y)
     
     //c.fillText('I',lastx - x - radius +2*(advance)*radius,50)
     
     c.beginPath()
     //c.arc(x + radius + space - (advance)*2*radius,y + starty,radius,0,2*Math.PI)
     if (draw1 == true && contnumber/3 + i != contnumber - 1) {
     c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),y + advances[timers[current].ind].sty[20],radius,0,2*Math.PI)
     }else{
        c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),100,radius,0,2*Math.PI)
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
 for (current in timers) {
    //advance = conts[contnumber/3 + i].advances[current]
    advance = advances[timers[current].ind].ads[timers[current].ind2]
    x =  2*(advance)*radius
    //x = 0
    // - (advance)*2*radius
 for (i = 0; i < (contnumber/3)*2;i++) {
     
     canmove = true
     if (timers[current].time - x*0.1 >= 0) {
         if (type == 'pulse') {
         if (advances[timers[current].ind].amp[contnumber/3 + i] - (advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03 >= 0 && Math.sin(0 - vels[current]*(timers[current].time - x*0.1)) <= 0) {
             if (direct[current] == 'u') {
         y = (advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers[current].time - x*0.1))
             }else{
                 y = -(advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers[current].time - x*0.1))
             }

             /*
             if (i == (contnumber/3)*2 - 1 && conts[contnumber/3 + i].reflect[current] != false) {
                 
                conts[contnumber/3 + i].reflect[current] = false
                //window.alert('CYAN')
                //console.log('CYAN',current,advances[timers[current].ind])
                //timers3.push({time:timers[current].time,ind:timers[current].ind,ind2:advances2[timers[current].ind].ads.length})
                //timers3.push(timers[current].time)
                if (direct[current] == 'd') {
                direct3.push('u')
                }else{
                    direct3.push('d')
                    //direct3.push('u')
                }
                amps3.push(amplitude)
                
               // console.log('WHAT',advances2[timers[current].ind].ads.length)
                if (advances2[timers[current].ind].ads.length == 0) {
                    advances2[timers[current].ind].ads.push((contnumber/3))
                    //console.log('WHAT2',advances2[timers[current].ind].ads.length)
                }else{
                    //Mwindow.alert('PUSH')
                    //console.log(advances2[timers3.length - 2] + (contnumber/3)*2)
                    advances2[timers[current].ind].ads.push(advances2[timers[current].ind].ads[advances2[timers[current].ind].ads.length - 1] + (contnumber/3)*2)
                }
                vels.push(vel)
                for (a in conts3) {
                    conts3[a].move.push(true)
                }
                //loop = false
                 
                 }*/
         }else if(Math.sin(0 - vels[current]*(timers[current].time - x*0.1)) >= 0 && conts[contnumber/3 + i].move[current] == true){
            y = 0
            if (man == false) {
           conts[contnumber/3 + i].move[current] = false
            }
        }else{
            y = 0
            //window.alert('EITA')
        }

        /*
         if ((Math.sin(0 - vels[current]*(timers[current].time - x*0.1))).toFixed(2) == -1.00 && timers[current].time - x*0.1 >= 0 && conts[contnumber/3 + i].move[current] != false) {
            //window.alert('STOP')
           conts[contnumber/3 + i].fixpos[current] = y
            conts[contnumber/3 + i].move[current] = false
         }*/
          
     }else{
         if (advances[timers[current].ind].amp[contnumber/3 + i] - (advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03 >= 0) {
             if (direct[current] == 'u') {
                 y = (advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers[current].time - x*0.1))
                     }else{
                         y = -(advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers[current].time - x*0.1))
                     }
             }else{
                 y = 0
                 conts[contnumber/3 + i].move[current] = false
             }
     }
     }else{
         y = 0
     }

     if (manf == true) {
     c.fillStyle = 'black'
    if (conts[contnumber/3 + i].move[current] == true) {
    if ((Math.sin(0 - vels[current]*(timers[current].time - x*0.1))).toFixed(1) == 0) {
       c.fillStyle = 'red'
    }else if((Math.sin(0 - vels[current]*(timers[current].time - x*0.1))).toFixed(2) == -1.00) {
       c.fillStyle = 'blue'
    }
    }

    c.font = '20px Arial'
    if (Math.sin(0 - vels[current]*(timers[current].time - x*0.1)) < Math.sin(0 - vels[current]*(timers[current].time + 0.01 - x*0.1)) && timers[current].time - x*0.1 >= 0 && advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03 >= 0) {
       c.fillStyle = 'yellow'
       y = (advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03)*-1
       conts[contnumber/3 + i].move[current] = false
       conts[contnumber/3 + i].fixpos[current] = y //+ advances[timers[current].ind].sty[contnumber/3 + i]
    }
}

     if (conts[contnumber/3 + i].move[current] == false && type == 'pulse') {
      // y = 0
      if (manf == true){
      if (direct[current] == 'u') {
         y = conts[contnumber/3 + i].fixpos[current]
      }else{
        y = -conts[contnumber/3 + i].fixpos[current]
      }
      }else{
      y = 0
      }
     }
    
     conts[contnumber/3 + i].y = y + advances[timers[current].ind].sty[contnumber/3 + i]
     conts[contnumber/3 + i].a = i //(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03
     conts[contnumber/3 + i].ys.push(conts[contnumber/3 + i].y)
     
     //c.fillText('I',lastx - x - radius +2*(advance)*radius,50)
     
     c.beginPath()
     //c.arc(x + radius + space - (advance)*2*radius,y + starty,radius,0,2*Math.PI)
     //if (timers[current].delete == undefined) {
     if (draw1 == true && contnumber/3 + i != contnumber - 1) {
     c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),y + advances[timers[current].ind].sty[contnumber/3 + i],radius,0,2*Math.PI)
     }else{
        c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),100,radius,0,2*Math.PI)
     }
    //}
     
     
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

 for (current in timers) {
    //advance = conts[contnumber/3 + i].advances[current]
    advance = advances[timers[current].ind].ads[timers[current].ind2]
    x =  2*(advance)*radius
    //x = 0
    // - (advance)*2*radius
 for (i = 0; i < (contnumber/3)*2;i++) {
     // y = x*0.1 
     canmove = true
     if (timers[current].time - x*0.1 >= 0) { // Math.sin(-vel*(timers[current].time  - x*0.1)) = 0 
         if (type == 'pulse') {
         if (advances[timers[current].ind].amp[contnumber/3 + i] - (advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03 >= 0 && Math.sin(0 - vels[current]*(timers[current].time - x*0.1)) <= 0) {
            if (conts[contnumber/3 + i].start[current] == undefined && i == 4) {
                conts[contnumber/3 + i].start[current] = {time:timers[current].time}
                //console.log('terminou', timers[current].time, vels[current]*(timers[current].time - x*0.1), x*0.1)
            }
             if (direct[current] == 'u') {
         y = (advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers[current].time - x*0.1))
             }else{
                 y = -(advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers[current].time - x*0.1))
             }

             /*
             if (i == (contnumber/3)*2 - 1 && conts[contnumber/3 + i].reflect[current] != false) {
                 
                conts[contnumber/3 + i].reflect[current] = false
                //window.alert('CYAN')
                //console.log('CYAN',current,advances[timers[current].ind])
                //timers3.push({time:timers[current].time,ind:timers[current].ind,ind2:advances2[timers[current].ind].ads.length})
                //timers3.push(timers[current].time)
                if (direct[current] == 'd') {
                direct3.push('u')
                }else{
                    direct3.push('d')
                    //direct3.push('u')
                }
                amps3.push(amplitude)
                
               // console.log('WHAT',advances2[timers[current].ind].ads.length)
                if (advances2[timers[current].ind].ads.length == 0) {
                    advances2[timers[current].ind].ads.push((contnumber/3))
                    //console.log('WHAT2',advances2[timers[current].ind].ads.length)
                }else{
                    //Mwindow.alert('PUSH')
                    //console.log(advances2[timers3.length - 2] + (contnumber/3)*2)
                    advances2[timers[current].ind].ads.push(advances2[timers[current].ind].ads[advances2[timers[current].ind].ads.length - 1] + (contnumber/3)*2)
                }
                vels.push(vel)
                for (a in conts3) {
                    conts3[a].move.push(true)
                }
                //loop = false
                 
                 }*/
         }else if(Math.sin(0 - vels[current]*(timers[current].time - x*0.1)) >= 0 && conts[contnumber/3 + i].move[current] == true){
            y = 0
            if (man == false) {
           conts[contnumber/3 + i].move[current] = false
            }
        }else{
            y = 0
            //window.alert('EITA')
        }

        /*
         if ((Math.sin(0 - vels[current]*(timers[current].time - x*0.1))).toFixed(2) == -1.00 && timers[current].time - x*0.1 >= 0 && conts[contnumber/3 + i].move[current] != false) {
            //window.alert('STOP')
           conts[contnumber/3 + i].fixpos[current] = y
            conts[contnumber/3 + i].move[current] = false
         }*/
          
     }else{
         if (advances[timers[current].ind].amp[contnumber/3 + i] - (advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03 >= 0) {
             if (direct[current] == 'u') {
                 y = (advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers[current].time - x*0.1))
                     }else{
                         y = -(advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers[current].time - x*0.1))
                     }
             }else{
                 y = 0
                 conts[contnumber/3 + i].move[current] = false
             }
     }
     }else{
         y = 0
     }

     if (manf == true) {
     c.fillStyle = 'black'
    if (conts[contnumber/3 + i].move[current] == true) {
    if ((Math.sin(0 - vels[current]*(timers[current].time - x*0.1))).toFixed(1) == 0) {
       c.fillStyle = 'red'
    }else if((Math.sin(0 - vels[current]*(timers[current].time - x*0.1))).toFixed(2) == -1.00) {
       c.fillStyle = 'blue'
    }
    }

    c.font = '20px Arial'
    if (Math.sin(0 - vels[current]*(timers[current].time - x*0.1)) < Math.sin(0 - vels[current]*(timers[current].time + 0.01 - x*0.1)) && timers[current].time - x*0.1 >= 0 && advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03 >= 0) {
       c.fillStyle = 'yellow'
       y = (advances[timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03)*-1
       if (i == 4 ) {
        if (conts[contnumber/3 + i].go[current - 1] != false) {
            conts[contnumber/3 + i].move[current] = false
        }
       }else{
         conts[contnumber/3 + i].move[current] = false
      }
       conts[contnumber/3 + i].fixpos[current] = y //+ advances[timers[current].ind].sty[contnumber/3 + i]
    }
}

     if (conts[contnumber/3 + i].move[current] == false && type == 'pulse') {
      // y = 0
      if (manf == true){
      if (direct[current] == 'u') {
         y = conts[contnumber/3 + i].fixpos[current]
      }else{
        y = -conts[contnumber/3 + i].fixpos[current]
      }
      }else{
      y = 0
      }
     }
    
     conts[contnumber/3 + i].y = y + advances[timers[current].ind].sty[contnumber/3 + i]
     conts[contnumber/3 + i].a = i //(advance + i)*at*advances[timers[current].ind].amp[contnumber/3 + i]*0.03

     add = true
     for (dom = current - 2; dom >= 0; dom--){
         if (conts[contnumber/3 + i].go[dom] == false) {
             add = false
             //window.alert('n adicionar true em',current - 1)
         }
     }
     if (i == 4) {
     if (add == true && conts[24].go[current - 1] != false && conts[24].go[current] != true) {

     conts[contnumber/3 + i].ys[current] = conts[contnumber/3 + i].y
     }else if (conts[24].go[current] == true){
     conts[24].ys[current] = conts[24].ysfinal[current]
     }else{
        conts[24].ys[current] = -100
     }
    }else{
        conts[contnumber/3 + i].ys[current] = conts[contnumber/3 + i].y
    }

     if (i == 4) {
        if (conts[24].start[current] != undefined) {
            document.getElementById('t').innerText = ''
            document.getElementById('t2').innerText = ''
            document.getElementById('t3').innerText = ''
            for (ci = 0; ci <= current; ci++) { 
                if (conts[24].ys[current] != undefined) {
                //document.getElementById('t').innerText += (conts[24].ys[ci]).toFixed(0) + ' , ' 
                //document.getElementById('t2').innerText = (conts[contnumber/3 + i].time[0]).toFixed(0) + '' + (conts[25].time[0]).toFixed(0)//conts[24].start[current].time + ' | ' + conts[contnumber/3 + i].time
                //document.getElementById('t3').innerText += (conts[24].ysfinal[ci]).toFixed(0) + ' , '
            }
        }
     }
    }
     
     //c.fillText('I',lastx - x - radius +2*(advance)*radius,50)
     
     c.beginPath()
     //c.arc(x + radius + space - (advance)*2*radius,y + starty,radius,0,2*Math.PI)
     //if (timers[current].delete == undefined) {
    if (current > 0) {
        
        if (i == 4) {
     eq = (conts[contnumber/3 + i].ys[current - 1]).toFixed(3) == (conts[contnumber/3 + i].ysfinal[current - 1]).toFixed(3)
        if (conts[contnumber/3 + i].go[current - 1] == false && eq == true) {
             //window.alert('ADD NOW')
             //timers[current].time = conts[24].start[current - 1].time
        }
        //if (conts[contnumber/3 + i].go[current - 1] == undefined) {
        if (eq == false) {
        conts[contnumber/3 + i].go[current - 1] = false
        }else{ // if (conts[contnumber/3 + i].go[current - 1] == false){
            add = true
            for (dom = current - 2; dom >= 0; dom--){
                if (conts[contnumber/3 + i].go[dom] == false) {
                    add = false
                    //window.alert('n adicionar true em',current - 1)
                }
            }
            if (add == true && timers[current].time != conts[24].start[current - 1].time) {
            if (conts[contnumber/3 + i].go[current - 1] != true) {

                timers[current].time = 1.86  //conts[24].start[current - 1].time
                //conts[24].ys[current] = -100
                conts[contnumber/3 + i].go[current - 1] = true
                document.getElementById('t2').innerText = `fazer a ${Number(current)} onda`
                //console.log('ADD NOW')
                //console.log(conts[24].ys[current], i)
            }
                //window.alert('ADD NOW')
            }
        }/*else{
            add = true
            for (dom = current - 2; dom >= 0; dom--){
                if (conts[contnumber/3 + i].go[dom] == false) {
                    add = false
                    //window.alert('n adicionar true em',current - 1)
                }
            }
            //if (add == true) {
                conts[contnumber/3 + i].go[current - 1] = 'none'
                //timers[current].time = conts[24].start[current - 1].time
                //window.alert('ADD NOW')
            //}
        }*/
    }
        
     
     //conts[contnumber/3 + i].go[current - 1] = eq
     }
     if (draw1 == true && contnumber/3 + i != contnumber - 1) { // && conts[contnumber/3 + i].ys[current - 1] == conts[contnumber/3 + i].ysfinal[current - 1]) {
        if (i != 4) {// && conts[24].go[current - 1] != true) {
      c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),y + advances[timers[current].ind].sty[contnumber/3 + i],radius,0,2*Math.PI)
      c.strokeStyle = 'black'
        }else{
            //if (conts[contnumber/3 + i].go[current] == false && conts[contnumber/3 + i].go[current - 1] == true) { //&& conts[contnumber/3 + i].go[current - 1] != 'none') {
            if (conts[contnumber/3 + i].go[current - 1] != false && conts[contnumber/3 + i].go[current] != true) {
                c.fillStyle = 'red'
                c.strokeStyle = 'black'
                if (conts[24].ys[current] == -100) {
               // console.log('I WANNA RUN AWAY', y)
                        //console.log('y1',advances[timers[current].ind].sty[contnumber/3 + i],timers[current].time)
                        y = 0
                }
        }else{
            c.fillStyle = 'transparent'
            c.strokeStyle = 'transparent'
        }
                c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),y + advances[timers[current].ind].sty[contnumber/3 + i],radius,0,2*Math.PI)
             //}
           // }
        }
     }else{
        c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),100,radius,0,2*Math.PI)
     }
    //}
     
     
     //c.arc(lastx - x - radius,y + starty,radius,0,2*Math.PI)
     //c.fillStyle = 'white'
     if (contnumber/3 + i == 24) {
        c.fill()
        c.stroke()
     }else{
        c.strokeStyle = 'black'
     //c.fill()
     }
    // c.strokeStyle = 'black'
    c.stroke() 
    // if (conts[24].go[current - 1] == true && conts[24].go[current] != true) {
    if (contnumber/3 + i == 20) {
     //c.stroke()   
    }
    // }
     c.beginPath()
     //c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
     c.fillStyle = 'white'
     x+= 2*radius
     }
 } 