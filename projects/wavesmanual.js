let radius = 2.3
let starty = 0
let x = 0
loop = true
addpulse = false

contnumber = 60
contspos = []
for(ag = 0; ag < contnumber/3 + 1;ag++) {
    contspos.push({ir:true})
}
amplitude = 60
function load() {
canv = document.getElementById('canvas')
c = canv.getContext('2d')
console.log(x)
contnumber = 60
conts = []
conts2 = []
conts3 = []
timers = [{time: [],ind:0,ind2:0,amp:[],sty:[]}]
timers[0].time.push(0)
for (nt = 0; nt < contnumber/3 + 1; nt++) {
    timers[0].time.push(0)
    timers[0].amp.push(amplitude)
    timers[0].sty.push(100)
}
//timers = []
timers2 = [{time: [],ind:0,ind2:0,amp:[],sty:[]}]
for (nt = 0; nt < contnumber; nt++) {
    timers2[0].time.push(0)
    timers2[0].amp.push(amplitude)
    timers2[0].sty.push(100)
}
//timers2[0].time.push(0)

timers2 = []
timers3 = []
amplitude = 60
advances = [{ads:[0],sty:starty,amp:amplitude}]
advances = []
advances2 = [{ads:[],sty:starty,amp:amplitude}]
amps = [amplitude]
amps2 = [amplitude]
amps3 = []
vel = 0.4
vels = [vel]
direct = ['u']
direct2 = ['d']
direct3 = []
for (i = 0; i < contnumber/3 + 1;i++) {
    conts.push({y:0,move:[],fixpos:[]})
    conts2.push({y:0,move:[],reflect:[],fixpos:[],advances:[]})
    conts3.push({y:0,move:[],reflect:[],fixpos:[],advances:[]})

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
drawball = true
draw1 = true
man = false
stroke = false  
function animate() {
    space = 10
    at = 0.4
    x = 0
    c.clearRect(0,0,300,150)
    // function = A*sen(2*Math.PI/comp*(x + wt))

    for (l in conts) {
        conts[l].y = 0
        //conts2[l].y = 0
        //conts3[l].y = 0
    }

    if (addpulse == true) {
       // window.alert('FAZER ISSO AQUI')
        for (l in conts) {
            //conts[l].y = 10
           // conts2[l].y = 10
        }
    }
   
    /*
    for (current in timers3) {
        x =  0
       // - (contnumber/3)*2*radius
    for (i = 0; i < contnumber + contnumber/3;i++) {
        
        canmove = true
        
        if (timers3[current].time - x*0.1 >= 0) {
            if (type == 'pulse') {
            if (advances2[timers3[current].ind].amp -i*at*advances2[timers3[current].ind].amp*0.03 >= 0 && Math.sin(0 - vels[current]*(timers3[current].time - x*0.1)) <= 0) {
                if (direct3[current] == 'u') {
            y = (advances2[timers3[current].ind].amp -i*at*advances2[timers3[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers3[current].time - x*0.1))
                }else{
                    y = -(advances2[timers3[current].ind].amp -i*at*advances2[timers3[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers3[current].time - x*0.1))
                }
            }else if(Math.sin(0 - vels[current]*(timers3[current].time - x*0.1)) >= 0 && conts3[i].move[current] == true){
                y = 0
                conts3[i].move[current] = false
            }
        }else{
            if (advances2[timers3[current].ind].amp -i*at*advances2[timers3[current].ind].amp*0.03 >= 0) {
                if (direct3[current] == 'u') {
                    y = (advances2[timers3[current].ind].amp -i*at*advances2[timers3[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers3[current].time - x*0.1))
                        }else{
                            y = -(advances2[timers3[current].ind].amp -i*at*advances2[timers3[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers3[current].time - x*0.1))
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


         lastx = space + 2*radius*(contnumber)
         
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
                         timers2.push({time:[],ind:timers3[current].ind,ind2:advances[timers3[current].ind].ads.length,amp:[],sty:[]})
        
                         for (bask in timers3[current].time) {
                            timers2[timers2.length - 1].time.push(timers3[current].time[bask])
                            timers2[timers2.length - 1].amp.push(timers3[current].amp[bask])
                            timers2[timers2.length - 1].sty.push(timers3[current].sty[bask])
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
             c.arc(x + radius -2*(advance)*radius + space,y + timers3[current].sty[i],radius,0,2*Math.PI)
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
                   //window.alert('É FALSO FALLMILIA',i + contnumber/3)
                   contspos[i + contnumber/3].ir = true
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

            if (conts[i + contnumber/3].move[current] == false) {
            this.document.getElementById('ev').innerText = `${y + timers[current].sty[i + contnumber/3]}`
            contspos[i + contnumber/3].my = y + timers[current].sty[i + contnumber/3]
            //contspos[i + contnumber/3].my = 100
            }
            this.document.getElementById('ev2').innerText = 'move: ' + conts[i + contnumber/3].move[current] + '/ podeir: ' + contspos[i + contnumber/3].ir
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



        x = 0
        lastx = space + 2*radius*(contnumber)

    
        lastx = space + 2*radius*(contnumber)
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
                        timers3.push({time:[],ind:timers2[current].ind,ind2:advances2[timers2[current].ind].ads.length,amp:[],sty:[]})
        
                        for (bask in timers2[current].time) {
                            timers3[timers3.length - 1].time.push(timers2[current].time[bask])
                            timers3[timers3.length - 1].amp.push(timers2[current].amp[bask])
                            timers3[timers3.length - 1].sty.push(timers2[current].sty[bask])
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
             c.arc(lastx - x - radius +2*(advance)*radius ,y + timers2[current].sty[i],radius,0,2*Math.PI)
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
        
                /*
        contsall = []
        for (cont in conts) {
            contsall.push({index:cont,y:conts2[cont].y + conts3[cont].y + conts[cont].y})
        }
        
        x = 0
        
        for (i = 0; i < (contnumber/3);i++) {
            if (i < (contnumber/3) - 1) {
            c.beginPath()
           // c.moveTo(x + radius + space,contsall[i + contnumber/3].y + starty)
            //c.lineTo(0,9)
            x+= 2*radius
           // c.lineTo(x + radius + space,contsall[i + contnumber/3 + 1].y + starty)
            if (stroke == true) {
            c.stroke()
            }
            }
            }
            
            x = 0
        for (i = 0; i < contnumber/3;i++) {
            c.beginPath()
            if (i == (contnumber/3 - 1)) {
                c.fillStyle = 'pink'
                c.beginPath()
                elradius = 6
               // c.ellipse(x + 2*radius + space + elradius + 0.5,contsall[i + contnumber/3].y + starty, elradius, elradius/2, 0, 0, 2*Math.PI)
                //c.stroke()
                c.beginPath()
            }
           // if (contsall[i].y + starty > starty) {
                //loop = false
           // }
            if (drawball == true) {
            c.arc(x + radius + space,contsall[i + contnumber/3].y + starty,radius,0,2*Math.PI)
            }
            c.fillStyle = 'red'
            c.fill()
            c.strokeStyle = 'black'
            c.stroke()
            c.beginPath()
            if (drawball == true) {
            c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
            }
            c.fillStyle = 'white'
            c.fill()
            x+= 2*radius
            }
            */
        for (k in timers){
            for (ki in timers[k].time) {
            timers[k].time[ki] += 0.1
            }
        }
        for (k in timers2){
            for (ki in timers2[k].time) {
            timers2[k].time[ki] += 0.1
            }
        }
        for (k in timers3){
            for (ki in timers3[k].time) {
            timers3[k].time[ki] += 0.1
            }
        }
       
if (loop == true) {
requestAnimationFrame(animate)
}
}
animate()

go = true
window.addEventListener('keyup',function (event) {
    if (event.key == 'm') {
    //this.window.alert('NOW')
    //timers.push({time:0,ind:1})
    timers2.push({time:[], ind:1,ind2:0})
    advances.push({ads:[0],sty:starty,amp:amplitude})
    advances2.push({ads:[],sty:starty,amp:amplitude})
    for (nt = 0; nt < contnumber; nt++) {
        timers2[timers2.length - 1].time.push(0)
    }
    direct.push('u')
    direct2.push('u')
   // advances[timers[current].ind].amp.push(amplitude)
    amps.push({ads:[0]})
    advances2.push({ads:[]})
    vels.push(vel)
    for (a in conts) {
        //conts[a].move.push(true)
    }
    for (a in conts2) {
        conts2[a].move.push(true)
    }
    }

    if (event.key == 'e') {
        go = true

        //setTimeout(sayHello, 1000)
    }

    function sayHello() {
        window.alert('Hello')
    }

})

mousex = 'i'
//mousey = 'i'
find = 0
ir = true
window.addEventListener('mousemove',function(event) {
    if (go == true) {
        c.clearRect(0,0,300,150)
    canv = document.querySelector('canvas')
    c = canv.getContext('2d')
    cWidth = canv.offsetWidth
    wWidth = this.window.innerWidth
    cHeight = canv.offsetHeight
    wHeight = this.window.innerHeight
    dif = wWidth - cWidth
    
    //this.document.getElementById('ev').innerText = ((event.y)/cHeight)*150
    //console.log(mousey,(((event.y)/cHeight)*150))
    axis = 100
    
    if (0 != 1) {
    //if (mousey != 'i') {
    /*
        if (((event.y)/cHeight)*150 < mousey) {
             c.fillStyle = 'red'
             direct = ['u']
        }else{
            c.fillStyle = 'blue'
            direct = ['d']
        }*/
        
    

    //if (find < 4) {
    //timers = [{time:0,ind:0}]
    //timers2 = [{time:0,ind:0}]
    
    //timers.push({time:0,ind:find})
        //advances = [{ads:[],sty:mousey,amp:Math.abs(mousey - 120)}]
        //advances = [{ads:[],sty:mousey,amp:Math.abs(mousey - ((event.y)/cHeight)*150)}]
        //advances.push({ads:[],sty:mousey,amp:Math.abs(mousey - ((event.y)/cHeight)*150)})
        //advances.push({ads:[],sty:mousey,amp:20})
        
    
    //advances[timers[current].ind].amp.push(amplitude)
    //vels.push(vel)
    
    //conts.push({y:0,move:[true],fixpos:[]})
    for (j = 0; j < contnumber/3 + 1;j++) {
       // conts.push({y:0,move:[true],fixpos:[]})
    }

    //conts = []
    for (d in contspos) {

    if (contspos[d].ir == true) {
        contspos[d].ir = false
        contspos[d].my = ((event.y)/cHeight)*150
       // this.window.alert(contspos[d].my)
        excont(d)
}
    }


    //conts[d].move[0] = true
    for (a in conts) {
        //conts[a].move.push(true)
        //conts[a].move[0] = true
        //conts[a].y = 0
    }
    for (a in conts2) {
        //conts2[a].move.push(true)
        //conts[a].move.push(true)
        //conts[a].y = 0
    }
    find++
//} 
    }

    c.fillText('EPAOA',100,120)
    c.stroke()
    mousex = ((event.x - dif/2)/cWidth)*300
    mousey = ((event.y)/cHeight)*150
    this.document.getElementById('x').innerText = mousex
    this.document.getElementById('y').innerText = mousey
    //find++
}
})

function excont(d) {
    //window.alert(d)
     setTimeout(function () {
        if (contspos[d].ir == true || conts[d].move[0] == false) {
        if (d == 20 || d == 21) {
        //window.alert('FAMILIA')
        }
         //window.alert(contspos[d].my)
        //timers[0].sty[d] = contspos[d].my
        //timers[0].sty[d] = 0
        //timers[0].amp[d] = Math.abs(mousey - contspos[d].my)
        
         //timers[0].time[d] = d
         //contspos[d].ir = true
         conts[d].move[0] = true
         timers[0].sty[d] = contspos[d].my 
         //timers[0].time[20] = ''
         timers[0].amp[d] = Math.abs(mousey - contspos[d].my)
         //timers[0].amp[d] = 50
        // window.alert('hello')
         //timers.push({time:0,ind:0})
         //timers.push({time: [],ind:timers.length - 1,ind2:0})
      for (nt = 0; nt < contnumber/3 - 5; nt++) {
    //timers[0].time.push(0)
      }  
 
      //timers2 = [{time: [],ind:0,ind2:0}]
     for (nt = 0; nt < contnumber; nt++) {
         //timers2[0].time.push(0)
     }
         //timers2 = [{time:0,ind:0,ind2:0}]                                                                   
     //timers2 = [{time:0,ind:0}]
 
     if (contspos[d].my < mousey) {
         c.fillStyle = 'red'
         direct = ['d']
         direct2 = ['d']
         //window.alert('UP')
    }else{
        c.fillStyle = 'blue'
        direct = ['u']
        direct2 = ['u']
        //window.alert('DOWN')
    }
     //advances = [{ads:[],sty:mousey,amp:Math.abs(mousey - ((event.y)/cHeight)*150)}]
     //advances = [{ads:[],sty:100,amp:Math.abs(mousey - 100)}]
     //advances = [{ads:[0],sty:contspos[d].my,amp:Math.abs(mousey - contspos[d].my)}]
     vels.push(vel)
         console.log(conts.length)
         ir = true
        // for (k = 0; k < contnumber/3*2; k++) {
        // conts.push({y:0,move:[true],fixpos:[]})
         //}
         for (k = 0; k < contnumber; k++) {
            // conts2.push({y:0,move:[],reflect:[],fixpos:[],advances:[]})
             }
            }
     },300 + (d - 20)*1000)
 }

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