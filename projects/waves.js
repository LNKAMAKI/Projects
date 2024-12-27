let radius = 2.3
let starty = 100
let x = 0
loop = true
addpulse = false
tot = 0
function load() {
canv = document.getElementById('canvas')
c = canv.getContext('2d')
console.log(x)
contnumber = 129
conts = []
mouse = 'up'
mouseprev = 100
mousefollow = false
conts2 = []
conts3 = []
timers = [{time: 0,ind:0,ind2:0}]
timers = [] // suspend wave automatic formation at manual
timers2 = [{time: 0,ind:0,ind2:0}]
timers2 = [[{a: 'b'}]]
timers2 = []
timers3 = []
amplitude = 40
advances = [[{ads:[0],sty:[],amp:[]}]]
for (ia = 0; ia <= contnumber; ia++) {
    advances[0][0].sty.push(starty) // sty da primmeira onda (partindo do y = 100)
    //advances[0].amp.push(amplitude)
}
//advances = []
advances2 = [] //[{ads:[],sty:[],amp:[]}]]
for (ia = 0; ia <= contnumber; ia++) { 
    //advances2[0][0].sty.push(starty) // sty da primmeira onda (partindo do y = 100)
}
amps = [amplitude]
amps2 = [amplitude]
amps3 = []
vel = 0.7
vels = [vel]
direct = []
direct2 = []
direct3 = []
yf = []
for (i = 0; i < contnumber; i++) {
    yf.push(100)
}
for (i = 0; i < contnumber;i++) {
    conts.push({y:0,move:[],fixpos:[0],ys:[],ysfinal:[],go:[],start:[],time:[],yo:100})
    //conts2[0].push({y:0,move:[],reflect:[],fixpos:[],ys:[],ysfinal:[],go:[],start:[],time:[],advances:[]}) // essential
    conts3.push({y:0,move:[],reflect:[],fixpos:[],ys:[],ysfinal: [],go:[],start:[],advances:[]})

    for (tic in timers) {
        conts[i].move.push(true)
    }
    for (tic in timers2) {
        //conts2[0][i].move.push(true)
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
fixo = true
drawball = false
draw1 = true
man = true
manf = true
stroke = true
mousex = 'i'
mousey = 'i'
at = 0.8 // usar o at para estabelecer o alinhamento das contas no manual?
function animate() {
    space = -145
    x = 0
    c.clearRect(0,0,300,150)
    // function = A*sen(2*Math.PI/comp*(x + wt))

    for (l in conts) {
        //conts[l].y = 0
        //conts2[l].y = 0
       // conts3[l].y = 0
    }

    if (addpulse == true) {
       // window.alert('FAZER ISSO AQUI') 
        for (l in conts) {
            //conts[l].y = 10
            //conts2[l].y = 10
        }
    }

    x = space + 2*radius*(contnumber/3)
    if (mousey != 'i') {
    //c.arc(x + radius,mousey,radius,0,2*Math.PI)
    }
    c.fillStyle = 'red'
    c.fill()
    c.strokeStyle = 'black'
    //c.stroke()
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
        //c.arc(x + radius + space - (contnumber/3)*2*radius,y + starty,radius,0,2*Math.PI)
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

        for (tic in conts2) {
            conts2[tic].ys = []
            //conts[tic].ys = []
        }
    

         lastx = space + 2*radius*(contnumber)
         
         for (current in timers3) {
            advance = advances2[timers3[current].ind].ads[timers3[current].ind2]
            //advance = contnumber/3
            x =  2*(advance)*radius
            //x = 0
            // - (advance)*2*radius
         for (i = 0; i < contnumber;i++) {
             
             canmove = true
             
             if (timers3[current].time - x*0.1 >= 0) {
                 if (type == 'pulse') {
                 if (advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03 >= 0 && Math.sin(0 - vels[current]*(timers3[current].time - x*0.1)) <= 0) {
                     if (direct3[current] == 'u') {
                 y = (advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers3[current].time - x*0.1))
                     }else{
                         y = -(advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers3[current].time - x*0.1))
                     }
 
 
                     if (i == (contnumber/3)*2 - 1 && conts3[i].reflect[current] != false) {
                         
                         
                         conts3[i].reflect[current] = false
                         //window.alert('WHITE')
                         timers2.push({time:timers3[current].time,ind:timers3[current].ind,ind2:advances[timers3[current].ind].ads.length})
                         if (direct3[current] == 'd') {
                            direct2.push('u')
                         }else{
                            direct2.push('d')
                            //direct2.push('u')
                         }
                         //advances[timers2[current].ind].amp[contnumber - 1 - i].push(amplitude)
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
                 }else if(Math.sin(0 - vels[current]*(timers3[current].time - x*0.1)) >= 0 && conts3[i].move[current] == true){
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
                         y = (advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers3[current].time - x*0.1))
                             }else{
                                 y = -(advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers3[current].time - x*0.1))
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
             if ((Math.sin(0 - vels[current]*(timers3[current].time - x*0.1))).toFixed(1) == 0) {
                c.fillStyle = 'red'
             }else if((Math.sin(0 - vels[current]*(timers3[current].time - x*0.1))).toFixed(2) == -1.00) {
                c.fillStyle = 'blue'
             }
             }

             c.font = '20px Arial'
             if (Math.sin(0 - vels[current]*(timers3[current].time - x*0.1)) < Math.sin(0 - vels[current]*(timers3[current].time + 0.01 - x*0.1)) && timers3[current].time - x*0.1 >= 0 && advances2[timers3[current].ind].amp -(advance + i)*at*advances2[timers3[current].ind].amp*0.03 >= 0) {
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

            conts3[i].y = y //+ advances2[timers3[current].ind].sty
            //conts3[i].fixpos[current] = y + advances2[timers3[current].ind].sty

            // c.fillText('I',x + radius -2*(advance)*radius + space,120)
             c.beginPath()
             //c.arc(x + radius + space - (advance)*2*radius,y + starty,radius,0,2*Math.PI)
             
             if (draw1 == true && i != contnumber/3) {
             //c.arc(x + radius -2*(advance)*radius + space,y + advances2[timers3[current].ind].sty[i],radius,0,2*Math.PI)
             }
             
             //c.arc(lastx - x - radius,y + starty,radius,0,2*Math.PI)
             c.fillStyle = 'cyan'
             c.fill()
             c.strokeStyle = 'black'
             //c.stroke()
             c.beginPath()
             //c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
             c.fillStyle = 'white'
             c.fill()
             x+= 2*radius
             }
         }

         /*
        for (current in timers) {
           
            x = space + 2*radius*(contnumber/3) //here
        for (i = 0; i < (contnumber/3)*2;i++) {

            if (conts[i + contnumber/3] != undefined) {
            
            canmove = true
            
            if (timers[current].time - (x - (space + 2*radius*(contnumber/3)))*0.1 >= 0) {
                if (type == 'pulse') {
                if (advances[timers[current].ind].amp -i*at*advances[timers[current].ind].amp*0.03 >= 0 && Math.sin(0 - vels[current]*(timers[current].time - (x - (space + 2*radius*(contnumber/3)))*0.1)) <= 0) {
                    if (direct[current] == 'u') {
                y = (advances[timers[current].ind].amp -i*at*advances[timers[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers[current].time - (x - (space + 2*radius*(contnumber/3)))*0.1))
                    }else{
                        y = -(advances[timers[current].ind].amp -i*at*advances[timers[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers[current].time - (x - (space + 2*radius*(contnumber/3)))*0.1))
                    }
                }else if(Math.sin(0 - vels[current]*(timers[current].time - (x - (space + 2*radius*(contnumber/3)))*0.1)) >= 0 && conts[i + contnumber/3].move[current] == true){
                    y = 0
                    if (man == false){
                    conts[i + contnumber/3].move[current] = false
                    }
                }
            }else{
                if (advances[timers[current].ind].amp -i*at*advances[timers[current].ind].amp*0.03 >= 0) {
                    if (direct[current] == 'u') {
                        y = (advances[timers[current].ind].amp -i*at*advances[timers[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers[current].time - (x - (space + 2*radius*(contnumber/3)))*0.1))
                            }else{
                                y = -(advances[timers[current].ind].amp -i*at*advances[timers[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers[current].time - (x - (space + 2*radius*(contnumber/3)))*0.1))
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
                if ((Math.sin(0 - vels[current]*(timers[current].time - (x - (space + 2*radius*(contnumber/3)))*0.1))).toFixed(1) == 0) {
                   c.fillStyle = 'red'
                }else if((Math.sin(0 - vels[current]*(timers[current].time - (x - (space + 2*radius*(contnumber/3)))*0.1))).toFixed(2) == -1.00) {
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
                       y = -conts[i + contnumber/3].fixpos[current] 
                       //y = 0
                   }
               }else{
                   y = 0
               }
               }

               //c.fillText('I',x + radius, 120)
           
            conts[i + contnumber/3].y += y
            c.beginPath()
            
            if (draw1 == true && i + contnumber/3 != contnumber/3) {
            //c.arc(x + radius,y + advances[timers[current].ind].sty[i + contnumber/3],radius,0,2*Math.PI)
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
        */



        x = 0
        lastx = space + 2*radius*(contnumber)

    
        lastx = space + 2*radius*(contnumber)
        /*
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
        
        
                     if (i == (contnumber/3)*2 - 1 && conts2[contnumber/3 + i].reflect[current] != false) {
                         
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
            
             conts2[contnumber/3 + i].y = y + advances[timers2[current].ind].sty[contnumber/3 + i]
             conts2[contnumber/3 + i].ys.push(conts2[contnumber/3 + i].y)
             
             //c.fillText('I',lastx - x - radius +2*(advance)*radius,50)
             
             c.beginPath()
             //c.arc(x + radius + space - (advance)*2*radius,y + starty,radius,0,2*Math.PI)
             if (draw1 == true && contnumber/3 + i != contnumber - 1) {
             //c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),y + advances[timers2[current].ind].sty[20],radius,0,2*Math.PI)
             }else{
                //c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),100,radius,0,2*Math.PI)
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
         */

         //document.getElementById('t3').innerText = 'numero de ondas:' + timers.length
         if (0 == 0) {
            for (current in timers) {
                //advance = conts[contnumber/3 + i].advances[0][current]
                advance = advances[0][timers[current].ind].ads[timers[current].ind2]
                x =  2*(advance)*radius
                hiro = 0
                //x = 0
                // - (advance)*2*radius
             for (i = 0; i < (contnumber/3)*2;i++) {
                 // y = hiro 
                 canmove = true
                 if (i == 3 && current == 0) {
                    //console.log('biranga',conts[23].time[0])
                    //console.log(-(advances[0][timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[0][timers[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro)))
                 }
                 if (conts[contnumber/3 + i].time[current] - hiro >= 0) { // Math.sin(-vel*(conts[contnumber/3 + i].time[current]  - hiro)) = 0 
                     if (type == 'pulse') {
                     if (advances[0][timers[current].ind].amp[contnumber/3 + i] - (advance + i)*at*advances[0][timers[current].ind].amp[contnumber/3 + i]*0.03 >= 0 && Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro)) <= 0) {
                        if (conts[contnumber/3 + i].start[current] == undefined) {
                            if (i > 0 && i < (contnumber/3)*2) { //(i == 4 || i == 3 || i == 2) {
                            conts[contnumber/3 + i].start[current] = {time:conts[contnumber/3 + i].time[current]}
                            }
                            //console.log('terminou', conts[contnumber/3 + i].time[current], vels[current]*(conts[contnumber/3 + i].time[current] - hiro), hiro)
                        }
                         if (direct[current] == 'u') {
                            //console.log('UP')
                     y = (advances[0][timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[0][timers[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro))
                         }else{
                            //console.log('DOWN')
                             y = -(advances[0][timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[0][timers[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro))
                         }
            
                         /*
                         if (i == (contnumber/3)*2 - 1 && conts[contnumber/3 + i].reflect[current] != false) {
                             
                            conts[contnumber/3 + i].reflect[current] = false
                            //window.alert('CYAN')
                            //console.log('CYAN',current,advances[0][timers[current].ind])
                            //timers3.push({time:conts[contnumber/3 + i].time[current],ind:timers[current].ind,ind2:advances[0]2[timers[current].ind].ads.length})
                            //timers3.push(conts[contnumber/3 + i].time[current])
                            if (direct[current] == 'd') {
                            direct3.push('u')
                            }else{
                                direct3.push('d')
                                //direct3.push('u')
                            }
                            amps3.push(amplitude)
                            
                           // console.log('WHAT',advances[0]2[timers[current].ind].ads.length)
                            if (advances[0]2[timers[current].ind].ads.length == 0) {
                                advances[0]2[timers[current].ind].ads.push((contnumber/3))
                                //console.log('WHAT2',advances[0]2[timers[current].ind].ads.length)
                            }else{
                                //Mwindow.alert('PUSH')
                                //console.log(advances[0]2[timers3.length - 2] + (contnumber/3)*2)
                                advances[0]2[timers[current].ind].ads.push(advances[0]2[timers[current].ind].ads[advances[0]2[timers[current].ind].ads.length - 1] + (contnumber/3)*2)
                            }
                            vels.push(vel)
                            for (a in conts3) {
                                conts3[a].move.push(true)
                            }
                            //loop = false
                             
                             }*/
                     }else if(Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro)) >= 0 && conts[contnumber/3 + i].move[current] == true){
                        y = 0
                        if (man == false) {
                       conts[contnumber/3 + i].move[current] = false
                        }
                    }else{
                        y = 0
                        //window.alert('EITA')
                    }
            
                    /*
                     if ((Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro))).toFixed(2) == -1.00 && conts[contnumber/3 + i].time[current] - hiro >= 0 && conts[contnumber/3 + i].move[current] != false) {
                        //window.alert('STOP')
                       conts[contnumber/3 + i].fixpos[current] = y
                        conts[contnumber/3 + i].move[current] = false
                     }*/
                      
                 }else{
                     if (advances[0][timers[current].ind].amp[contnumber/3 + i] - (advance + i)*at*advances[0][timers[current].ind].amp[contnumber/3 + i]*0.03 >= 0) {
                         if (direct[current] == 'u') {
                             y = (advances[0][timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[0][timers[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro))
                                 }else{
                                     y = -(advances[0][timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[0][timers[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro))
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
                if ((Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro))).toFixed(1) == 0) {
                   c.fillStyle = 'red'
                }else if((Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro))).toFixed(2) == -1.00) {
                   c.fillStyle = 'blue'
                }
                }
            
                c.font = '20px Arial'
                if (Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro)) < Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] + 0.01 - hiro)) && conts[contnumber/3 + i].time[current] - hiro >= 0 && advances[0][timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[0][timers[current].ind].amp[contnumber/3 + i]*0.03 >= 0) {
                   c.fillStyle = 'yellow'
                   y = (advances[0][timers[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[0][timers[current].ind].amp[contnumber/3 + i]*0.03)*-1
                   if (i > 0 && i < (contnumber/3)*2) {//(i == 4 || i == 3 || i == 2) {
                    if (conts[contnumber/3 + i].go[current - 1] != false) {
                        conts[contnumber/3 + i].move[current] = false
                        //if (i == 3 && current == 0)
                        //console.log('N ERA PRA SE FAZER ISSO')
                    }
                   }else{
                     conts[contnumber/3 + i].move[current] = false
                 }
                   conts[contnumber/3 + i].fixpos[current] = y //+ advances[0][timers[current].ind].sty[contnumber/3 + i]
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
                
                 if (i == 3 && current == 0){
                    //console.log('EIK',y)
                 }
                 conts[contnumber/3 + i].y = y + advances[0][timers[current].ind].sty[contnumber/3 + i]
                 conts[contnumber/3 + i].a = i //(advance + i)*at*advances[0][timers[current].ind].amp[contnumber/3 + i]*0.03
    
                 add = true
                 for (dom = current - 2; dom >= 0; dom--){
                     if (conts[contnumber/3 + i].go[dom] == false) {
                         add = false
                         //window.alert('n adicionar true em',current - 1)
                     }
                 }
                 if (current > 0 || i == 1) {
                 if (i > 0 && i < (contnumber/3)*2) {//(i == 4 || i == 3 || i == 2) {
                 if (add == true && conts[contnumber/3 + i].go[current - 1] != false && conts[contnumber/3 + i].go[current] != true) {
                    conts[contnumber/3 + i].ys[current] = conts[contnumber/3 + i].y
                 }else if (conts[contnumber/3 + i].go[current] == true){
                 conts[contnumber/3 + i].ys[current] = conts[contnumber/3 + i].ysfinal[current]
                 }else{
                    conts[contnumber/3 + i].ys[current] = -100
                 }
                }else{
                    conts[contnumber/3 + i].ys[current] = conts[contnumber/3 + i].y
                }
            }else{
                //if (i == 2)
                //console.log(conts[contnumber/3 + i - 1].ys[0] == conts[contnumber/3 + i - 1].ysfinal[0],conts[contnumber/3 + i].ys[0])
                if (i == 3) {
                    //console.log('why',conts[contnumber/3 + i - 1].ys[0] == conts[contnumber/3 + i - 1].ysfinal[0])
                }
                if (conts[contnumber/3 + i - 1].ys[0] != undefined && conts[contnumber/3 + i - 1].ysfinal[0] != undefined) {
                    // console.log(conts[contnumber/3 + i - 1].ys[0])
                if ((conts[contnumber/3 + i - 1].ys[0]).toFixed(3) == (conts[contnumber/3 + i - 1].ysfinal[0]).toFixed(3) && conts[contnumber/3 + i].ys[0] == -100) {
                        //if (i == 2 || i == 3) {
                            //console.log('hey yyou',contnumber/3 + i,hiro,advances[0][timers[0].ind].sty[contnumber/3 + i])
                            y = 0
                            
                            conts[contnumber/3 + i].ys[0] = advances[0][timers[0].ind].sty[contnumber/3 + i]
                            conts[contnumber/3 + i].time[0] = hiro
                            if (i == contnumber/3 - 1) {
                            //console.log('add timers2')
                            
                            if (fixo == false) {
                              addTimers(timers2,0,advances[0][timers[current].ind].amp[(contnumber/3)],direct[current],(contnumber/3))
                            }else{
                                if (direct[current] == 'u') {
                                    addTimers(timers2,0,advances[0][timers[current].ind].amp[(contnumber/3)],'d',(contnumber/3))
                                }else{
                                    addTimers(timers2,0,advances[0][timers[current].ind].amp[(contnumber/3)],'u',(contnumber/3))
                                }
                            }
                                //addTimers(timers2,0,advances[0][timers[current].ind].amp[20],'u',0)
                            }
                            
                       // }
                }else if (((conts[contnumber/3 + i - 1].ys[0])).toFixed(3) == ((conts[contnumber/3 + i - 1].ysfinal[0])).toFixed(3)){
                    if (i == 3) {
                    //console.log('pode atualizar',conts[23].time[0],y)
                    }
                    conts[contnumber/3 + i].ys[0] = conts[contnumber/3 + i].y
                }else{
                    conts[contnumber/3 + i].ys[0] = -100
                    //if (i == 3) {
                        conts[contnumber/3 + i].time[0] = 0
               //}
     }}           
                    }
                 if (i > 0 && i < contnumber/3) {
                    if (conts[24].start[current] != undefined) {
                        //document.getElementById('t').innerText = ''
                        //document.getElementById('t2').innerText = ''
                        //document.getElementById('t3').innerText = ''
                        for (ci = 0; ci <= current; ci++) { 
                            if (conts[24].ys[current] != undefined) {
                            //document.getElementById('t').innerText += (conts[24].ys[ci]).toFixed(0) + ' , ' 
                            if (conts2[0] != undefined) {
                                if (conts2[0][(contnumber/3 + 1)].yx != undefined) {
                            //document.getElementById('t').innerText = conts2[0][(contnumber/3 + i)].yx
                                }
                            }
                            //document.getElementById('t2').innerText = (conts[contnumber/3 + i].time[0]).toFixed(0) + '' + (conts[25].time[0]).toFixed(0)//conts[24].start[current].time + ' | ' + conts[contnumber/3 + i].time
                            //document.getElementById('t3').innerText += (conts[24].ysfinal[ci]).toFixed(0) + ' , '
                        }
                    }
                 }
                 }
                 
                 //c.fillText('I',lastx - x - radius +2*(advance)*radius,50)
                 
                 //c.beginPath()
                 //c.arc(x + radius + space - (advance)*2*radius,y + starty,radius,0,2*Math.PI)
                 //if (timers[current].delete == undefined) {
                
               if (i > 0 && i < (contnumber/3)*2) {    
                    if (i == 1){ //(i > 0 && i < contnumber/3) {//(i == 4 || i == 3 || i == 2) {
                        if (current > 0) {
                    //if (contnumber/3 + i > (contnumber/3 + 1) && contnumber/3 + i < 40) {
                        //console.log('index',contnumber/3 + i, 'current',current, 'current - 1',current - 1)
                 eq = (conts[contnumber/3 + i].ys[current - 1]).toFixed(3) == (conts[contnumber/3 + i].ysfinal[current - 1]).toFixed(3)
                    if (conts[contnumber/3 + i].go[current - 1] == false && eq == true) {
                         //window.alert('ADD NOW')
                         //conts[contnumber/3 + i].time[current] = conts[24].start[current - 1].time
                    }
                    //if (conts[contnumber/3 + i].go[current - 1] == undefined) {
                    if (eq == false) {
                    conts[contnumber/3 + i].go[current - 1] = false
                    }else{//if (conts[contnumber/3 + i].go[current - 1] == false){
                        add = true
                        for (dom = current - 2; dom >= 0; dom--){
                            if (conts[contnumber/3 + i].go[dom] == false) {
                                add = false
                                //window.alert('n adicionar true em',current - 1)
                            }
                        }
                        if (add == true && conts[contnumber/3 + i].time[current] != conts[contnumber/3 + i].start[current - 1].time) {
                        if (conts[contnumber/3 + i].go[current - 1] != true) {
    
                            if (conts[contnumber/3 + i].go[current - 1] == false) {
                             conts[contnumber/3 + i].time[current] = hiro //conts[24].start[current - 1].time
                             //console.log('ADD NOW')
                            }//else{
                            // conts[contnumber/3 + i].time[current] = 0
                           //}
                           conts[contnumber/3 + i].go[current - 1] = true
                            //conts[24].ys[current] = -100
                            //document.getElementById('t2').innerText = `fazer a ${Number(current)} onda`
                            //console.log(conts[24].ys[current], i)
                        }
                            //window.alert('ADD NOW')
                        }
                    }
                        /*else{
                        add = true
                        for (dom = current - 2; dom >= 0; dom--){
                            if (conts[contnumber/3 + i].go[dom] == false) {
                                add = false
                                //window.alert('n adicionar true em',current - 1)
                            }
                        }
                        //if (add == true) {
                            conts[contnumber/3 + i].go[current - 1] = 'none'
                            //conts[contnumber/3 + i].time[current] = conts[24].start[current - 1].time
                            //window.alert('ADD NOW')
                        //}
                    }*/
            }}else if (current > 0){
                eq = (conts[contnumber/3 + i].ys[current - 1]).toFixed(3) == (conts[contnumber/3 + i].ysfinal[current - 1]).toFixed(3)
                if (conts[contnumber/3 + i].go[current - 1] == false && eq == true) {
                     //window.alert('ADD NOW')
                     //conts[contnumber/3 + i].time[current] = conts[24].start[current - 1].time
                }
                //if (conts[contnumber/3 + i].go[current - 1] == undefined) {
                if (eq == false) {
                conts[contnumber/3 + i].go[current - 1] = false
                }else {//if (conts[contnumber/3 + i].go[current - 1] == false){
                    add = true
                        for (dom = current - 2; dom >= 0; dom--){
                        if (conts[contnumber/3 + i].go[dom] == false) {
                            add = false
                            //window.alert('n adicionar true em',current - 1)
                        }
                    }
                    if (i == 2)  {
                    //console.log(add,'eq: true',)
                    }
                    //console.log('EI',add,)
                    if (add == true && (conts[contnumber/3 + i - 1].ys[current]).toFixed(3) == (conts[contnumber/3 + i - 1].ysfinal[current]).toFixed(3)) {//conts[contnumber/3 + i].time[current] != conts[contnumber/3 + i].start[current - 1].time && conts[contnumber/3 + i - 1].ys[current] == conts[contnumber/3 + i - 1].ysfinal[current]){
                    if (conts[contnumber/3 + i].go[current - 1] != true) {
    
                        if (conts[contnumber/3 + i].go[current - 1] == false) {
                         conts[contnumber/3 + i].time[current] = hiro //conts[24].start[current - 1].time
                         //console.log('ADD NOW')
                         if (i == contnumber/3 - 1) {
                            //console.log('add timers2')
                            
                            if (fixo == false) {
                                addTimers(timers2,0,advances[0][timers[current].ind].amp[(contnumber/3)],direct[current],(contnumber/3))
                              }else{
                                  if (direct[current] == 'u') {
                                      addTimers(timers2,0,advances[0][timers[current].ind].amp[(contnumber/3)],'d',(contnumber/3))
                                  }else{
                                      addTimers(timers2,0,advances[0][timers[current].ind].amp[(contnumber/3)],'u',(contnumber/3))
                                  }
                              }

                              //addTimers(timers2,0,advances[0][timers[current].ind].amp[20],'u',0)
                         }
                        }//else{
                        // conts[contnumber/3 + i].time[current] = 0
                       //}
                       conts[contnumber/3 + i].go[current - 1] = true
                        //conts[24].ys[current] = -100
                        //document.getElementById('t2').innerText = `fazer a ${Number(current)} onda`
                        //console.log(conts[24].ys[current], i)
                    }
                        //window.alert('ADD NOW')
                    }else if (conts[contnumber/3 + i - 1].ys[current] != conts[contnumber/3 + i - 1].ysfinal[current]){
                        conts[contnumber/3 + i].go[current - 1] = false
                    }
                }
            }
        
                 //conts[contnumber/3 + i].go[current - 1] = eq
                 }
                 
                 if (draw1 == true && contnumber/3 + i != contnumber - 1) { //&& i != 1) { // && conts[contnumber/3 + i].ys[current - 1] == conts[contnumber/3 + i].ysfinal[current - 1]) {
                   // if (i != 4) {// && conts[24].go[current - 1] != true) {
                 //c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),y + advances[0][timers[current].ind].sty[contnumber/3 + i],radius,0,2*Math.PI)
                  //c.strokeStyle = 'black'
                    //}else{
                        //if (conts[contnumber/3 + i].go[current] == false && conts[contnumber/3 + i].go[current - 1] == true) { //&& conts[contnumber/3 + i].go[current - 1] != 'none') {
                        if (conts[contnumber/3 + i].go[current - 1] != false && conts[contnumber/3 + i].go[current] != true) {
                           // if (current != 0) {
                           //console.log('head straight')
                            c.fillStyle = 'red'
                            c.strokeStyle = 'black'
                            if (conts[contnumber/3 + i].ys[current] == -100) {
                           // console.log('I WANNA RUN AWAY', y)
                                    //console.log('y1',advances[0][timers[current].ind].sty[contnumber/3 + i],conts[contnumber/3 + i].time[current])
                                    y = 0
                            }
                            //conts[contnumber/3 + i].
                            
                            conts[contnumber/3 + i].yo = y + advances[0][timers[current].ind].sty[contnumber/3 + i]
                            if (i > 2 && i < (contnumber/3) && timers2.length == 0 && i != contnumber/3 - 1) {
                            c.beginPath()
                            c.moveTo(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3) - 2*radius,conts[contnumber/3 + i - 1].yo,radius,0,2*Math.PI)
                            c.lineTo(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),conts[contnumber/3 + i].yo,radius,0,2*Math.PI)
                            c.stroke()
                            c.beginPath()
                            }
                       // }
                    }else{
                        c.fillStyle = 'transparent'
                        c.strokeStyle = 'transparent'
                    }
                    if (timers2.length == 0 && i != 1 && i != contnumber/3 - 1) {
                    c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),y + advances[0][timers[current].ind].sty[contnumber/3 + i],radius,0,2*Math.PI)
                    }
                         //}
                       // }
                    //}
                 }else if (contnumber/3 + i == contnumber - 1){
                    //c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),starty,radius,0,2*Math.PI)
                 }
                //}
                 
                 
                 //c.arc(lastx - x - radius,y + starty,radius,0,2*Math.PI)
                 //c.fillStyle = 'white'
                if (i > 0 && i < (contnumber/3)) {// 2*(contnumber/3) {//(i == 1 || i == 2 || i == 3) { // (i > 0 && i < contnumber/3) { //(contnumber/3 + i == 24 || i == 3 || i == 2) {
                    c.fill()
                    c.stroke()
                 }else{
                    //c.strokeStyle = 'black'
                 //c.fill()
                 }
                // c.strokeStyle = 'black'
                if (contnumber/3 + i != 20) {
                //c.stroke() 
                }
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
                //}
            
             }
          }
         // 2nd wave
         n = 0
         if (0 == 1) {
         for (n = 0; n < timers2.length; n++) {
         for (current = 0; current < timers2[n].length; current++) {
            //advance = conts2[n][contnumber/3 + i].advances[n][current]
            //console.log(current)
            advance = advances[n][timers2[n][current].ind].ads[timers2[n][current].ind2]
            x =  2*(advance)*radius
            //x = 0
            // - (advance)*2*radius
         for (i = 0; i < (contnumber/3)*2;i++) {
             // y = x*0.1 
             canmove = true
             if (i == 3 && current == 0) {
                //console.log('biranga',conts2[n][23].time[0])
                //console.log(-(advances[n][timers2[n][current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[n][timers2[n][current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(conts2[n][contnumber/3 + i].time[current] - x*0.1)))
             }
             if (conts2[n][contnumber/3 + i].time[current] - x*0.1 >= 0) { // Math.sin(-vel*(conts2[n][contnumber/3 + i].time[current]  - x*0.1)) = 0 
                 if (type == 'pulse') {
                 if (advances[n][timers2[n][current].ind].amp[contnumber/3 + i] - (advance + i)*at*advances[n][timers2[n][current].ind].amp[contnumber/3 + i]*0.03 >= 0 && Math.sin(0 - vels[current]*(conts2[n][contnumber/3 + i].time[current] - x*0.1)) <= 0) {
                    if (conts2[n][contnumber/3 + i].start[current] == undefined) {
                        if (i > 0 && i < contnumber/3) { //(i == 4 || i == 3 || i == 2) {
                        conts2[n][contnumber/3 + i].start[current] = {time:conts2[n][contnumber/3 + i].time[current]}
                        }
                        //console.log('terminou', conts2[n][contnumber/3 + i].time[current], vels[current]*(conts2[n][contnumber/3 + i].time[current] - x*0.1), x*0.1)
                    }
                     if (direct2[n][current] == 'u') {
                        //console.log('UP')
                 y = (advances[n][timers2[n][current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[n][timers2[n][current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(conts2[n][contnumber/3 + i].time[current] - x*0.1))
                     }else{
                        //console.log('DOWN')
                         y = -(advances[n][timers2[n][current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[n][timers2[n][current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(conts2[n][contnumber/3 + i].time[current] - x*0.1))
                     }
        
                     /*
                     if (i == contnumber/3 - 1 && conts2[n][contnumber/3 + i].reflect[current] != false) {
                         
                        conts2[n][contnumber/3 + i].reflect[current] = false
                        //window.alert(`CYAN ${current}`)
                        //console.log('CYAN',current,advances[n][timers2[n][current].ind])
                        //timers3.push({time:conts2[n][contnumber/3 + i].time[current],ind:timers2[n][current].ind,ind2:advances[n]2[timers2[n][current].ind].ads.length})
                        //timers3.push(conts2[n][contnumber/3 + i].time[current])
                        if (direct2[current] == 'd') {
                        direct3.push('u')
                        }else{
                            direct3.push('d')
                            //direct3.push('u')
                        }
                        amps3.push(amplitude)
                        
                       // console.log('WHAT',advances[n]2[timers2[n][current].ind].ads.length)
                        if (advances2[timers2[n][current].ind].ads.length == 0) {
                            advances2[timers2[n][current].ind].ads.push((contnumber/3))
                            //console.log('WHAT2',advances[n]2[timers2[n][current].ind].ads.length)
                        }else{
                            //Mwindow.alert('PUSH')
                            //console.log(advances[n]2[timers3.length - 2] + (contnumber/3)*2)
                            advances2[timers2[n][current].ind].ads.push(advances2[timers2[n][current].ind].ads[advances2[timers2[n][current].ind].ads.length - 1] + (contnumber/3)*2)
                        }
                        vels.push(vel)
                        for (a in conts3) {
                            conts3[a].move.push(true)
                        }
                        //loop = false
                         
                         }*/
                 }else if(Math.sin(0 - vels[current]*(conts2[n][contnumber/3 + i].time[current] - x*0.1)) >= 0 && conts2[n][contnumber/3 + i].move[current] == true){
                    y = 0
                    if (man == false) {
                   conts2[n][contnumber/3 + i].move[current] = false // move false
                   if (n == 1 && current == 1) {
                        //console.log('now this')
                   }
                     }
                }else{
                    y = 0
                    //window.alert('EITA')
                }
        
                /*
                 if ((Math.sin(0 - vels[current]*(conts2[n][contnumber/3 + i].time[current] - x*0.1))).toFixed(2) == -1.00 && conts2[n][contnumber/3 + i].time[current] - x*0.1 >= 0 && conts2[n][contnumber/3 + i].move[current] != false) {
                    //window.alert('STOP')
                   conts2[n][contnumber/3 + i].fixpos[current] = y
                    conts2[n][contnumber/3 + i].move[current] = false
                 }*/
                  
             }else{
                 if (advances[n][timers2[n][current].ind].amp[contnumber/3 + i] - (advance + i)*at*advances[n][timers2[n][current].ind].amp[contnumber/3 + i]*0.03 >= 0) {
                     if (direct2[n][current] == 'u') {
                         y = (advances[n][timers2[n][current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[n][timers2[n][current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(conts2[n][contnumber/3 + i].time[current] - x*0.1))
                             }else{
                                 y = -(advances[n][timers2[n][current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[n][timers2[n][current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(conts2[n][contnumber/3 + i].time[current] - x*0.1))
                             }
                     }else{
                         y = 0
                         conts2[n][contnumber/3 + i].move[current] = false
                     }
             }
             }else{
                 y = 0
             }
        
             if (manf == true) {
             c.fillStyle = 'black'
            if (conts2[n][contnumber/3 + i].move[current] == true) {
            if ((Math.sin(0 - vels[current]*(conts2[n][contnumber/3 + i].time[current] - x*0.1))).toFixed(1) == 0) {
               c.fillStyle = 'red'
            }else if((Math.sin(0 - vels[current]*(conts2[n][contnumber/3 + i].time[current] - x*0.1))).toFixed(2) == -1.00) {
               c.fillStyle = 'blue'
            }
            }
        
            c.font = '20px Arial'
            if (Math.sin(0 - vels[current]*(conts2[n][contnumber/3 + i].time[current] - x*0.1)) < Math.sin(0 - vels[current]*(conts2[n][contnumber/3 + i].time[current] + 0.01 - x*0.1)) && conts2[n][contnumber/3 + i].time[current] - x*0.1 >= 0 && advances[n][timers2[n][current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[n][timers2[n][current].ind].amp[contnumber/3 + i]*0.03 >= 0) {
               c.fillStyle = 'yellow'
               y = (advances[n][timers2[n][current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[n][timers2[n][current].ind].amp[contnumber/3 + i]*0.03)*-1
               if (i > 0 && i < contnumber/3) {//(i == 4 || i == 3 || i == 2) {
                if (conts2[n][contnumber/3 + i].go[current - 1] != false && conts2[n][contnumber/3 + i].move[current] == true) {
                    conts2[n][contnumber/3 + i].move[current] = false // move false
                    if (n == 1 && current == 1 && i == 1) {
                        //console.log('now this 2')
                    }
                    //if (i == 3 && current == 0)
                    //console.log('N ERA PRA SE FAZER ISSO')
                }
               }else{
                 conts2[n][contnumber/3 + i].move[current] = false
             }
               conts2[n][contnumber/3 + i].fixpos[current] = y //+ advances[n][timers2[n][current].ind].sty[contnumber/3 + i]
            }
        }
        
             if (conts2[n][contnumber/3 + i].move[current] == false && type == 'pulse') {
                if (i == contnumber/3 - 1 && conts2[n][contnumber/3 - 1].reflect[current] != false) {
                    conts2[n][contnumber/3 - 1].reflect[current] = false
                    //window.alert('CAPISCO')
                }              // y = 0
              if (manf == true){
              if (direct2[n][current] == 'u') {
                 y = conts2[n][contnumber/3 + i].fixpos[current]
              }else{
               y = -conts2[n][contnumber/3 + i].fixpos[current]
              }
              }else{
              y = 0
              }
             }
            
             if (i == 3 && current == 0){
                //console.log('EIK',y)
             }
             conts2[n][contnumber/3 + i].y = y + advances[n][timers2[n][current].ind].sty[contnumber/3 + i]
             conts2[n][contnumber/3 + i].a = i //(advance + i)*at*advances[n][timers2[n][current].ind].amp[contnumber/3 + i]*0.03

             add = true
             for (dom = current - 2; dom >= 0; dom--){
                 if (conts2[n][contnumber/3 + i].go[dom] == false) {
                     add = false
                     //window.alert('n adicionar true em',current - 1)
                 }
             }
             if (current > 0 || i == 1) {
             if (i > 0 && i < contnumber/3) {//(i == 4 || i == 3 || i == 2) {
             if (add == true && conts2[n][contnumber/3 + i].go[current - 1] != false && conts2[n][contnumber/3 + i].go[current] != true) {
                conts2[n][contnumber/3 + i].ys[current] = conts2[n][contnumber/3 + i].y
             }else if (conts2[n][contnumber/3 + i].go[current] == true){
             conts2[n][contnumber/3 + i].ys[current] = conts2[n][contnumber/3 + i].ysfinal[current]
             }else{
                conts2[n][contnumber/3 + i].ys[current] = -100
             }
            }else{
                conts2[n][contnumber/3 + i].ys[current] = conts2[n][contnumber/3 + i].y
            }
        }else{
            //if (i == 2)
            //console.log(conts2[n][contnumber/3 + i - 1].ys[0] == conts2[n][contnumber/3 + i - 1].ysfinal[0],conts2[n][contnumber/3 + i].ys[0])
            if (i == 3) {
                //console.log('why',conts2[n][contnumber/3 + i - 1].ys[0] == conts2[n][contnumber/3 + i - 1].ysfinal[0])
            }
            if (conts2[n][contnumber/3 + i - 1].ys[0] != undefined && conts2[n][contnumber/3 + i - 1].ysfinal[0] != undefined) {
                // console.log(conts2[n][contnumber/3 + i - 1].ys[0])
            if ((conts2[n][contnumber/3 + i - 1].ys[0]).toFixed(3) == (conts2[n][contnumber/3 + i - 1].ysfinal[0]).toFixed(3) && conts2[n][contnumber/3 + i].ys[0] == -100) {
                    //if (i == 2 || i == 3) {
                        //console.log('hey yyou',contnumber/3 + i,x*0.1,advances[n][timers2[n].ind].sty[contnumber/3 + i])
                        y = 0
                        
                        conts2[n][contnumber/3 + i].ys[0] = advances[n][timers2[n][0].ind].sty[contnumber/3 + i]
                        conts2[n][contnumber/3 + i].time[0] = x*0.1
                        if (i == contnumber/3 - 1 && n < 10) {
                        //console.log('ADD TO TIMERS 2')
                        if (fixo == false) {
                            addTimers(timers2,n + 1,advances2[n][timers2[n][current].ind].amp[(contnumber/3)],direct2[n][current],(contnumber/3)*(n + 2))
                          }else{
                              if (direct2[n][current] == 'u') {
                                addTimers(timers2,n + 1,advances2[n][timers2[n][current].ind].amp[(contnumber/3)],'d',(contnumber/3)*(n + 2))
                              }else{
                                addTimers(timers2,n + 1,advances2[n][timers2[n][current].ind].amp[(contnumber/3)],'u',(contnumber/3)*(n + 2))
                              }
                          }
                        //addTimers(timers2,n + 1,advances[n][timers2[n][current].ind].amp[20],'u',20)
                        // run add timers function
                        /* variables:
                        timers (2 or 3)
                        index (0,1,...)
                        amp
                        direction
                        ad (20,40,60...)
                        */
                        }
                        
                   // }
            }else if (((conts2[n][contnumber/3 + i - 1].ys[0])).toFixed(3) == ((conts2[n][contnumber/3 + i - 1].ysfinal[0])).toFixed(3)){
                if (i == 3) {
                //console.log('pode atualizar',conts2[n][23].time[0],y)
                }
                conts2[n][contnumber/3 + i].ys[0] = conts2[n][contnumber/3 + i].y
            }else{
                conts2[n][contnumber/3 + i].ys[0] = -100
                //if (i == 3) {
                    conts2[n][contnumber/3 + i].time[0] = 0
           //}
 }}           
                }
             if (i > 0 && i < contnumber/3) {
                if (conts2[n][24].start[current] != undefined) {
                    //document.getElementById('t').innerText = ''
                    //document.getElementById('t2').innerText = ''
                    //document.getElementById('t3').innerText = ''
                    for (ci = 0; ci <= current; ci++) { 
                        if (conts2[n][24].ys[current] != undefined) {
                        //document.getElementById('t').innerText += (conts2[n][24].ys[ci]).toFixed(0) + ' , ' 
                        //document.getElementById('t').innerText = conts2[n][22].go
                        //document.getElementById('t2').innerText = (conts2[n][contnumber/3 + i].time[0]).toFixed(0) + '' + (conts2[n][25].time[0]).toFixed(0)//conts2[n][24].start[current].time + ' | ' + conts2[n][contnumber/3 + i].time
                        //document.getElementById('t3').innerText += (conts2[n][24].ysfinal[ci]).toFixed(0) + ' , '
                    }
                }
             }
             }
             
             //c.fillText('I',lastx - x - radius +2*(advance)*radius,50)
             
             //c.beginPath()
             //c.arc(x + radius + space - (advance)*2*radius,y + starty,radius,0,2*Math.PI)
             //if (timers2[n][current].delete == undefined) {
            
           if (i > 0 && i < contnumber/3) {    
                if (i == 1){ //(i > 0 && i < contnumber/3) {//(i == 4 || i == 3 || i == 2) {
                    if (current > 0) {
                //if (contnumber/3 + i > (contnumber/3 + i) && contnumber/3 + i < 40) {
                    //console.log('index',contnumber/3 + i, 'current',current, 'current - 1',current - 1)
             eq = (conts2[n][contnumber/3 + i].ys[current - 1]).toFixed(3) == (conts2[n][contnumber/3 + i].ysfinal[current - 1]).toFixed(3)
                if (conts2[n][contnumber/3 + i].go[current - 1] == false && eq == true) {
                     //window.alert('ADD NOW')
                     //conts2[n][contnumber/3 + i].time[current] = conts2[n][24].start[current - 1].time
                }
                //if (conts2[n][contnumber/3 + i].go[current - 1] == undefined) {
                if (eq == false) {
                conts2[n][contnumber/3 + i].go[current - 1] = false
                }else{//if (conts2[n][contnumber/3 + i].go[current - 1] == false){
                    add = true
                    for (dom = current - 2; dom >= 0; dom--){
                        if (conts2[n][contnumber/3 + i].go[dom] == false) {
                            add = false
                            //window.alert('n adicionar true em',current - 1)
                        }
                    }
                    if (add == true && conts2[n][contnumber/3 + i].time[current] != conts2[n][contnumber/3 + i].start[current - 1].time) {
                    if (conts2[n][contnumber/3 + i].go[current - 1] != true) {

                        if (conts2[n][contnumber/3 + i].go[current - 1] == false) {
                         conts2[n][contnumber/3 + i].time[current] = x*0.1 //conts2[n][24].start[current - 1].time
                         //console.log('ADD NOW')
                        }//else{
                        // conts2[n][contnumber/3 + i].time[current] = 0
                       //}
                       conts2[n][contnumber/3 + i].go[current - 1] = true
                        //conts2[n][24].ys[current] = -100
                        //document.getElementById('t2').innerText = `fazer a ${Number(current)} onda`
                        //console.log(conts2[n][24].ys[current], i)
                    }
                        //window.alert('ADD NOW')
                    }
                }
                    /*else{
                    add = true
                    for (dom = current - 2; dom >= 0; dom--){
                        if (conts2[n][contnumber/3 + i].go[dom] == false) {
                            add = false
                            //window.alert('n adicionar true em',current - 1)
                        }
                    }
                    //if (add == true) {
                        conts2[n][contnumber/3 + i].go[current - 1] = 'none'
                        //conts2[n][contnumber/3 + i].time[current] = conts2[n][24].start[current - 1].time
                        //window.alert('ADD NOW')
                    //}
                }*/
        }}else if (current > 0){
            eq = (conts2[n][contnumber/3 + i].ys[current - 1]).toFixed(3) == (conts2[n][contnumber/3 + i].ysfinal[current - 1]).toFixed(3)
            if (conts2[n][contnumber/3 + i].go[current - 1] == false && eq == true) {
                 //window.alert('ADD NOW')
                 //conts2[n][contnumber/3 + i].time[current] = conts2[n][24].start[current - 1].time
            }
            //if (conts2[n][contnumber/3 + i].go[current - 1] == undefined) {
            if (eq == false) {
            conts2[n][contnumber/3 + i].go[current - 1] = false
            }else {//if (conts2[n][contnumber/3 + i].go[current - 1] == false){
                add = true
                    for (dom = current - 2; dom >= 0; dom--){
                    if (conts2[n][contnumber/3 + i].go[dom] == false) {
                        add = false
                        //window.alert('n adicionar true em',current - 1)
                    }
                }
                if (i == 2)  {
                //console.log(add,'eq: true',)
                }
                //console.log('EI',add,)
                if (add == true && (conts2[n][contnumber/3 + i - 1].ys[current]).toFixed(3) == (conts2[n][contnumber/3 + i - 1].ysfinal[current]).toFixed(3)) {//conts2[n][contnumber/3 + i].time[current] != conts2[n][contnumber/3 + i].start[current - 1].time && conts2[n][contnumber/3 + i - 1].ys[current] == conts2[n][contnumber/3 + i - 1].ysfinal[current]){
                if (conts2[n][contnumber/3 + i].go[current - 1] != true) {

                    if (conts2[n][contnumber/3 + i].go[current - 1] == false) {
                     conts2[n][contnumber/3 + i].time[current] = x*0.1 //conts2[n][24].start[current - 1].time
                     //console.log('ADD NOW')
                     if (i == contnumber/3 - 1 && n < 10) {
                        //console.log(x*0.1)
                        //console.log('ADD TO TIMERS',current)
                        
                        if (fixo == false) {
                            addTimers(timers2,n + 1,advances2[n][timers2[n][current].ind].amp[(contnumber/3)],direct2[n][current],(contnumber/3)*(n + 2))
                          }else{
                              if (direct2[n][current] == 'u') {
                                addTimers(timers2,n + 1,advances2[n][timers2[n][current].ind].amp[(contnumber/3)],'d',(contnumber/3)*(n + 2))
                              }else{
                                addTimers(timers2,n + 1,advances2[n][timers2[n][current].ind].amp[(contnumber/3)],'u',(contnumber/3)*(n + 2))
                              }
                          }
                        //addTimers(timers2,n + 1,advances[n][timers2[n][current].ind].amp[20],'d',0)
                    }
                    }//else{
                    // conts2[n][contnumber/3 + i].time[current] = 0
                   //}
                   conts2[n][contnumber/3 + i].go[current - 1] = true
                    //conts2[n][24].ys[current] = -100
                    //document.getElementById('t2').innerText = `fazer a ${Number(current)} onda`
                    //console.log(conts2[n][24].ys[current], i)
                }
                }else if (conts2[n][contnumber/3 + i - 1].ys[current] != conts2[n][contnumber/3 + i - 1].ysfinal[current]){
                    conts2[n][contnumber/3 + i].go[current - 1] = false
                }
            }
        }
    
             //conts2[n][contnumber/3 + i].go[current - 1] = eq
             }
             
             if (draw1 == true && contnumber/3 + i != contnumber - 1) { // && conts2[n][contnumber/3 + i].ys[current - 1] == conts2[n][contnumber/3 + i].ysfinal[current - 1]) {
               // if (i != 4) {// && conts2[n][24].go[current - 1] != true) {
             //c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),y + advances[n][timers2[n][current].ind].sty[contnumber/3 + i],radius,0,2*Math.PI)
              //c.strokeStyle = 'black'
                //}else{
                //console.log('conts vai',n,conts2[n][contnumber/3 + i])
                    //if (conts2[n][contnumber/3 + i].go[current] == false && conts2[n][contnumber/3 + i].go[current - 1] == true) { //&& conts2[n][contnumber/3 + i].go[current - 1] != 'none') {
                    if (conts2[n][contnumber/3 + i].go[current - 1] != false && conts2[n][contnumber/3 + i].go[current] != true) {
                       // if (current != 0) {
                       //console.log('head straight')
                        c.fillStyle = 'red'
                        c.strokeStyle = 'black'
                        if (conts2[n][contnumber/3 + i].ys[current] == -100) {
                       // console.log('I WANNA RUN AWAY', y)
                                //console.log('y1',advances[n][timers2[n][current].ind].sty[contnumber/3 + i],conts2[n][contnumber/3 + i].time[current])
                                y = 0
                        }
                   // }
                }else{
                    c.fillStyle = 'transparent'
                    c.strokeStyle = 'transparent'
                }
                        //c.arc(lastx - x - radius + 2*(advance)*radius - 2*radius*(contnumber/3),y + advances[n][timers2[n][current].ind].sty[contnumber/3 + i],radius,0,2*Math.PI)
                        if (n % 2 == 0) {
                            //c.arc(lastx - x - radius + 2*(advance)*radius - 2*radius*(contnumber/3 - 1),y + advances[n][timers2[n][current].ind].sty[contnumber/3 + i],radius,0,2*Math.PI)
                        }else{
                            //c.arc(x + radius - 2*(advance)*radius + 2*radius*(contnumber/3 + 2),y + advances[n][timers2[n][current].ind].sty[contnumber/3 + i],radius,0,2*Math.PI)
                        }
                     //}
                   // }
                //}
             }else{
                //c.arc(x + radius -2*(advance)*radius + 2*radius*(contnumber/3),starty,radius,0,2*Math.PI)
             }
            //}
             
             
             //c.arc(lastx - x - radius,y + starty,radius,0,2*Math.PI)
             //c.fillStyle = 'white'
            if (i > 0 && i < contnumber/3) {//(i == 1 || i == 2 || i == 3) { // (i > 0 && i < contnumber/3) { //(contnumber/3 + i == 24 || i == 3 || i == 2) {
                if (i == contnumber/3 - 1 && c.fillStyle != 'transparent') {
                   // c.fillStyle = 'yellow'
                }
                c.fill()
                c.stroke()
             }else{
                //c.strokeStyle = 'black'
             //c.fill()
             }
            // c.strokeStyle = 'black'
            if (contnumber/3 + i != 20) {
            //c.stroke() 
            }
            // if (conts2[n][24].go[current - 1] == true && conts2[n][24].go[current] != true) {
            if (contnumber/3 + i == 20) {
             //c.stroke()   
            }
            // }
             c.beginPath()
             //c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
             c.fillStyle = 'white'
             x+= 2*radius
         }
            //}
        
         }
        }
    }

    for (n = 0; n < timers2.length; n++) {
        for (current = 0; current < timers2[n].length; current++) {
           //advance = conts2[n][contnumber/3 + i].advances2[n][current]
           //console.log(current)
           advance = advances2[n][timers2[n][current].ind].ads[timers2[n][current].ind2]
           x = 2*(advance)*radius
           hiro = 0
           //x = 0
           // - (advance)*2*radius
           for (i = 0; i < (contnumber/3)*2;i++) {
            // y = hiro 

            if (n % 2 == 0) {
                //window.alert('HEY')
               // indirec = 2*(contnumber/3) - i
            }else{
                indirec = contnumber/3 + i
            }
            indirec = contnumber/3 + i

            canmove = true
            if (i == 3 && current == 0) {
               //console.log('biranga',conts2[n][23].time[0])
               //console.log(-(advances2[n][timers2[n][current].ind].amp[indirec] -(advance + i)*at*advances2[n][timers2[n][current].ind].amp[indirec]*0.03)*Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro)))
            }
            if (conts2[n][indirec].time[current] - hiro >= 0) { // Math.sin(-vel*(conts2[n][indirec].time[current]  - hiro)) = 0 
                if (type == 'pulse') {
                if (advances2[n][timers2[n][current].ind].amp[indirec] - (advance + i)*at*advances2[n][timers2[n][current].ind].amp[indirec]*0.03 >= 0 && Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro)) <= 0) {
                   if (conts2[n][indirec].start[current] == undefined) {
                       if (i > 0 && i < contnumber/3) { //(i == 4 || i == 3 || i == 2) {
                       conts2[n][indirec].start[current] = {time:conts2[n][indirec].time[current]}
                       }
                       //console.log('terminou', conts2[n][indirec].time[current], vels[current]*(conts2[n][indirec].time[current] - hiro), hiro)
                   }
                    if (direct2[n][current] == 'u') {
                       //console.log('UP')
                y = (advances2[n][timers2[n][current].ind].amp[indirec] -(advance + i)*at*advances2[n][timers2[n][current].ind].amp[indirec]*0.03)*Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro))
                    }else{
                       //console.log('DOWN')
                        y = -(advances2[n][timers2[n][current].ind].amp[indirec] -(advance + i)*at*advances2[n][timers2[n][current].ind].amp[indirec]*0.03)*Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro))
                    }
       
                    /*
                    if (i == contnumber/3 - 1 && conts2[n][indirec].reflect[current] != false) {
                        
                       conts2[n][indirec].reflect[current] = false
                       //window.alert(`CYAN ${current}`)
                       //console.log('CYAN',current,advances2[n][timers2[n][current].ind])
                       //timers3.push({time:conts2[n][indirec].time[current],ind:timers2[n][current].ind,ind2:advances2[n]2[timers2[n][current].ind].ads.length})
                       //timers3.push(conts2[n][indirec].time[current])
                       if (direct2[current] == 'd') {
                       direct3.push('u')
                       }else{
                           direct3.push('d')
                           //direct3.push('u')
                       }
                       amps3.push(amplitude)
                       
                      // console.log('WHAT',advances2[n]2[timers2[n][current].ind].ads.length)
                       if (advances22[timers2[n][current].ind].ads.length == 0) {
                           advances22[timers2[n][current].ind].ads.push((contnumber/3))
                           //console.log('WHAT2',advances2[n]2[timers2[n][current].ind].ads.length)
                       }else{
                           //Mwindow.alert('PUSH')
                           //console.log(advances2[n]2[timers3.length - 2] + (contnumber/3)*2)
                           advances22[timers2[n][current].ind].ads.push(advances22[timers2[n][current].ind].ads[advances22[timers2[n][current].ind].ads.length - 1] + (contnumber/3)*2)
                       }
                       vels.push(vel)
                       for (a in conts3) {
                           conts3[a].move.push(true)
                       }
                       //loop = false
                        
                        }*/
                }else if(Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro)) >= 0 && conts2[n][indirec].move[current] == true){
                   y = 0
                   if (man == false) {
                  conts2[n][indirec].move[current] = false // move false
                  if (n == 1 && current == 1) {
                       //console.log('now this')
                  }
                    }
               }else{
                   y = 0
                   //window.alert('EITA')
               }
       
               /*
                if ((Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro))).toFixed(2) == -1.00 && conts2[n][indirec].time[current] - hiro >= 0 && conts2[n][indirec].move[current] != false) {
                   //window.alert('STOP')
                  conts2[n][indirec].fixpos[current] = y
                   conts2[n][indirec].move[current] = false
                }*/
                 
            }else{
                if (advances2[n][timers2[n][current].ind].amp[indirec] - (advance + i)*at*advances2[n][timers2[n][current].ind].amp[indirec]*0.03 >= 0) {
                    if (direct2[n][current] == 'u') {
                        y = (advances2[n][timers2[n][current].ind].amp[indirec] -(advance + i)*at*advances2[n][timers2[n][current].ind].amp[indirec]*0.03)*Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro))
                            }else{
                                y = -(advances2[n][timers2[n][current].ind].amp[indirec] -(advance + i)*at*advances2[n][timers2[n][current].ind].amp[indirec]*0.03)*Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro))
                            }
                    }else{
                        y = 0
                        conts2[n][indirec].move[current] = false
                    }
            }
            }else{
                y = 0
            }
       
            if (manf == true) {
            c.fillStyle = 'black'
           if (conts2[n][indirec].move[current] == true) {
           if ((Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro))).toFixed(1) == 0) {
              c.fillStyle = 'red'
           }else if((Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro))).toFixed(2) == -1.00) {
              c.fillStyle = 'blue'
           }
           }
       
           c.font = '20px Arial'
           if (Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] - hiro)) < Math.sin(0 - vels[current]*(conts2[n][indirec].time[current] + 0.01 - hiro)) && conts2[n][indirec].time[current] - hiro >= 0 && advances2[n][timers2[n][current].ind].amp[indirec] -(advance + i)*at*advances2[n][timers2[n][current].ind].amp[indirec]*0.03 >= 0) {
              c.fillStyle = 'yellow'
              y = (advances2[n][timers2[n][current].ind].amp[indirec] -(advance + i)*at*advances2[n][timers2[n][current].ind].amp[indirec]*0.03)*-1
              if (i > 0 && i < contnumber/3) {//(i == 4 || i == 3 || i == 2) {
               if (conts2[n][indirec].go[current - 1] != false && conts2[n][indirec].move[current] == true) {
                   conts2[n][indirec].move[current] = false // move false
                   if (n == 1 && current == 1 && i == 1) {
                       //console.log('now this 2')
                   }
                   //if (i == 3 && current == 0)
                   //console.log('N ERA PRA SE FAZER ISSO')
               }
              }else{
                conts2[n][indirec].move[current] = false
            }
              conts2[n][indirec].fixpos[current] = y //+ advances2[n][timers2[n][current].ind].sty[indirec]
           }
       }
       
            if (conts2[n][indirec].move[current] == false && type == 'pulse') {
               if (i == contnumber/3 - 1 && conts2[n][contnumber/3 - 1].reflect[current] != false) {
                   conts2[n][contnumber/3 - 1].reflect[current] = false
                   //window.alert('CAPISCO')
               }              // y = 0
             if (manf == true){
             if (direct2[n][current] == 'u') {
                y = conts2[n][indirec].fixpos[current]
             }else{
              y = -conts2[n][indirec].fixpos[current]
             }
             }else{
             y = 0
             }
            }
           
            if (i == 3 && current == 0){
               //console.log('EIK',y)
            }
            conts2[n][indirec].y = y + advances2[n][timers2[n][current].ind].sty[indirec]
            conts2[n][indirec].a = i //(advance + i)*at*advances2[n][timers2[n][current].ind].amp[indirec]*0.03

            add = true
            for (dom = current - 2; dom >= 0; dom--){
                if (conts2[n][indirec].go[dom] == false) {
                    add = false
                    //window.alert('n adicionar true em',current - 1)
                }
            }
            if (current > 0 || i == 2) {
            if (i > 0 && i < contnumber/3) {//(i == 4 || i == 3 || i == 2) {
            if (add == true && conts2[n][indirec].go[current - 1] != false && conts2[n][indirec].go[current] != true) {
               conts2[n][indirec].ys[current] = conts2[n][indirec].y
            }else if (conts2[n][indirec].go[current] == true){
            conts2[n][indirec].ys[current] = conts2[n][indirec].ysfinal[current]
            }else{
               conts2[n][indirec].ys[current] = -100
            }
           }else{
               conts2[n][indirec].ys[current] = conts2[n][indirec].y
           }
       }else{
           //if (i == 2)
           //console.log(conts2[n][indirec - 1].ys[0] == conts2[n][indirec - 1].ysfinal[0],conts2[n][indirec].ys[0])
           if (i == 3) {
               //console.log('why',conts2[n][indirec - 1].ys[0] == conts2[n][indirec - 1].ysfinal[0])
           }
           if (conts2[n][indirec - 1].ys[0] != undefined && conts2[n][indirec - 1].ysfinal[0] != undefined) {
               // console.log(conts2[n][indirec - 1].ys[0])
           if ((conts2[n][indirec - 1].ys[0]).toFixed(3) == (conts2[n][indirec - 1].ysfinal[0]).toFixed(3) && conts2[n][indirec].ys[0] == -100) {
                   //if (i == 2 || i == 3) {
                       //console.log('hey yyou',indirec,hiro,advances2[n][timers2[n].ind].sty[indirec])
                       y = 0
                       
                       conts2[n][indirec].ys[0] = advances2[n][timers2[n][0].ind].sty[indirec]
                       conts2[n][indirec].time[0] = hiro
                       if (i == contnumber/3 - 1 && n < 10) {
                       //console.log('ADD TO TIMERS 2')
                       if (fixo == false) {
                           addTimers(timers2,n + 1,advances2[n][timers2[n][current].ind].amp[(contnumber/3)],direct2[n][current],(contnumber/3)*(n + 2))
                         }else{
                             if (direct2[n][current] == 'u') {
                               addTimers(timers2,n + 1,advances2[n][timers2[n][current].ind].amp[contnumber/3],'d',(contnumber/3)*(n + 2))
                             }else{
                               addTimers(timers2,n + 1,advances2[n][timers2[n][current].ind].amp[contnumber/3],'u',(contnumber/3)*(n + 2))
                             }
                         }
                       //addTimers(timers2,n + 1,advances2[n][timers2[n][current].ind].amp[20],'u',20)
                       // run add timers function
                       /* variables:
                       timers (2 or 3)
                       index (0,1,...)
                       amp
                       direction
                       ad (20,40,60...)
                       */
                       }
                       
                  // }
           }else if (((conts2[n][indirec - 1].ys[0])).toFixed(3) == ((conts2[n][indirec - 1].ysfinal[0])).toFixed(3)){
               if (i == 3) {
               //console.log('pode atualizar',conts2[n][23].time[0],y)
               }
               conts2[n][indirec].ys[0] = conts2[n][indirec].y
           }else{
               conts2[n][indirec].ys[0] = -100
               //if (i == 3) {
                   conts2[n][indirec].time[0] = 0
          //}
}}           
               }
            if (i > 0 && i < contnumber/3) {
               if (conts2[n][24].start[current] != undefined) {
                   //document.getElementById('t').innerText = ''
                   //document.getElementById('t2').innerText = ''
                   //document.getElementById('t3').innerText = ''
                   for (ci = 0; ci <= current; ci++) { 
                       if (conts2[n][24].ys[current] != undefined) {
                       //document.getElementById('t').innerText += (conts2[n][24].ys[ci]).toFixed(0) + ' , ' 
                       //document.getElementById('t').innerText = conts2[n][22].go
                       //document.getElementById('t2').innerText = (conts2[n][indirec].time[0]).toFixed(0) + '' + (conts2[n][25].time[0]).toFixed(0)//conts2[n][24].start[current].time + ' | ' + conts2[n][indirec].time
                       //document.getElementById('t3').innerText += (conts2[n][24].ysfinal[ci]).toFixed(0) + ' , '
                   }
               }
            }
            }
            
            //c.fillText('I',lastx - x - radius +2*(advance)*radius,50)
            
            //c.beginPath()
            //c.arc(x + radius + space - (advance)*2*radius,y + starty,radius,0,2*Math.PI)
            //if (timers2[n][current].delete == undefined) {
           
          if (i > 0 && i < contnumber/3) {    
               if (i == 2){ //(i > 0 && i < contnumber/3) {//(i == 4 || i == 3 || i == 2) {
                   if (current > 0) {
               //if (indirec > (contnumber/3 + 1) && indirec < 40) {
                   //console.log('index',indirec, 'current',current, 'current - 1',current - 1)
            eq = (conts2[n][indirec].ys[current - 1]).toFixed(3) == (conts2[n][indirec].ysfinal[current - 1]).toFixed(3)
               if (conts2[n][indirec].go[current - 1] == false && eq == true) {
                    //window.alert('ADD NOW')
                    //conts2[n][indirec].time[current] = conts2[n][24].start[current - 1].time
               }
               //if (conts2[n][indirec].go[current - 1] == undefined) {
               if (eq == false) {
               conts2[n][indirec].go[current - 1] = false
               }else{//if (conts2[n][indirec].go[current - 1] == false){
                   add = true
                   for (dom = current - 2; dom >= 0; dom--){
                       if (conts2[n][indirec].go[dom] == false) {
                           add = false
                           //window.alert('n adicionar true em',current - 1)
                       }
                   }
                   if (add == true && conts2[n][indirec].time[current] != conts2[n][indirec].start[current - 1].time) {
                   if (conts2[n][indirec].go[current - 1] != true) {

                       if (conts2[n][indirec].go[current - 1] == false) {
                        conts2[n][indirec].time[current] = hiro //conts2[n][24].start[current - 1].time
                        //console.log('ADD NOW')
                       }//else{
                       // conts2[n][indirec].time[current] = 0
                      //}
                      conts2[n][indirec].go[current - 1] = true
                       //conts2[n][24].ys[current] = -100
                       //document.getElementById('t2').innerText = `fazer a ${Number(current)} onda`
                       //console.log(conts2[n][24].ys[current], i)
                   }
                       //window.alert('ADD NOW')
                   }
               }
                   /*else{
                   add = true
                   for (dom = current - 2; dom >= 0; dom--){
                       if (conts2[n][indirec].go[dom] == false) {
                           add = false
                           //window.alert('n adicionar true em',current - 1)
                       }
                   }
                   //if (add == true) {
                       conts2[n][indirec].go[current - 1] = 'none'
                       //conts2[n][indirec].time[current] = conts2[n][24].start[current - 1].time
                       //window.alert('ADD NOW')
                   //}
               }*/
       }}else if (current > 0 && i != 1){
        //console.log('heya',i,indirec,conts2[n][indirec])
           eq = (conts2[n][indirec].ys[current - 1]).toFixed(3) == (conts2[n][indirec].ysfinal[current - 1]).toFixed(3)
           if (conts2[n][indirec].go[current - 1] == false && eq == true) {
                //window.alert('ADD NOW')
                //conts2[n][indirec].time[current] = conts2[n][24].start[current - 1].time
           }
           //if (conts2[n][indirec].go[current - 1] == undefined) {
           if (eq == false) {
           conts2[n][indirec].go[current - 1] = false
           }else {//if (conts2[n][indirec].go[current - 1] == false){
               add = true
                   for (dom = current - 2; dom >= 0; dom--){
                   if (conts2[n][indirec].go[dom] == false) {
                       add = false
                       //window.alert('n adicionar true em',current - 1)
                   }
               }
               if (i == 2)  {
               //console.log(add,'eq: true',)
               }
               //console.log('EI',add,)
               if (add == true && (conts2[n][indirec - 1].ys[current]).toFixed(3) == (conts2[n][indirec - 1].ysfinal[current]).toFixed(3)) {//conts2[n][indirec].time[current] != conts2[n][indirec].start[current - 1].time && conts2[n][indirec - 1].ys[current] == conts2[n][indirec - 1].ysfinal[current]){
               if (conts2[n][indirec].go[current - 1] != true) {

                   if (conts2[n][indirec].go[current - 1] == false) {
                    conts2[n][indirec].time[current] = hiro //conts2[n][24].start[current - 1].time
                    //console.log('ADD NOW')
                    if (i == contnumber/3 - 1 && n < 10) {
                       //console.log(hiro)
                       //console.log('ADD TO TIMERS',current)
                       
                       if (fixo == false) {
                           addTimers(timers2,n + 1,advances2[n][timers2[n][current].ind].amp[contnumber/3],direct2[n][current],(contnumber/3)*(n + 2))
                         }else{
                             if (direct2[n][current] == 'u') {
                               addTimers(timers2,n + 1,advances2[n][timers2[n][current].ind].amp[contnumber/3],'d',(contnumber/3)*(n + 2))
                             }else{
                               addTimers(timers2,n + 1,advances2[n][timers2[n][current].ind].amp[contnumber/3],'u',(contnumber/3)*(n + 2))
                             }
                         }
                       //addTimers(timers2,n + 1,advances2[n][timers2[n][current].ind].amp[20],'d',0)
                   }
                   }//else{
                   // conts2[n][indirec].time[current] = 0
                  //}
                  conts2[n][indirec].go[current - 1] = true
                   //conts2[n][24].ys[current] = -100
                   //document.getElementById('t2').innerText = `fazer a ${Number(current)} onda`
                   //console.log(conts2[n][24].ys[current], i)
               }
               }else if (conts2[n][indirec - 1].ys[current] != conts2[n][indirec - 1].ysfinal[current]){
                   conts2[n][indirec].go[current - 1] = false
               }
           }
       }
   
            //conts2[n][indirec].go[current - 1] = eq
            }
            
            if (draw1 == true && indirec != contnumber - 1) {// && i != 1) { // && conts2[n][indirec].ys[current - 1] == conts2[n][indirec].ysfinal[current - 1]) {
              // if (i != 4) {// && conts2[n][24].go[current - 1] != true) {
            //c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),y + advances2[n][timers2[n][current].ind].sty[indirec],radius,0,2*Math.PI)
             //c.strokeStyle = 'black'
               //}else{
               //console.log('conts vai',n,conts2[n][indirec])
                   //if (conts2[n][indirec].go[current] == false && conts2[n][indirec].go[current - 1] == true) { //&& conts2[n][indirec].go[current - 1] != 'none') {
                   if (conts2[n][indirec].go[current - 1] != false && conts2[n][indirec].go[current] != true) {
                      // if (current != 0) {
                      //console.log('head straight')
                       c.fillStyle = 'red'
                       c.strokeStyle = 'black'
                       if (conts2[n][indirec].ys[current] == -100) {
                      // console.log('I WANNA RUN AWAY', y)
                               //console.log('y1',advances2[n][timers2[n][current].ind].sty[indirec],conts2[n][indirec].time[current])
                               y = 0
                       }
                  // }
               }else{
                   c.fillStyle = 'transparent'
                   c.strokeStyle = 'transparent'
               }
                       //c.arc(lastx - x - radius + 2*(advance)*radius - 2*radius*(contnumber/3),y + advances2[n][timers2[n][current].ind].sty[indirec],radius,0,2*Math.PI)
                       if (n % 2 == 0 && i != 1) {
                           //c.arc(lastx - x - radius + 2*(advance)*radius - 2*radius*(contnumber/3 - 1),y + advances2[n][timers2[n][current].ind].sty[indirec],radius,0,2*Math.PI)
                       }else{
                           //c.arc(x + radius - 2*(advance)*radius + 2*radius*(contnumber/3 + 2),y + advances2[n][timers2[n][current].ind].sty[indirec],radius,0,2*Math.PI)
                       }
                    //}
                  // }
               //}
            }else{
                //window.alert('HEY')
                if (i == 1) {
                    //console.log('y(contnumber/3 + i)',x + radius -2*(advance)*radius + 2*radius*(contnumber/3))
                }
               //c.arc(x + radius -2*(advance)*radius + 2*radius*(contnumber/3),starty,radius,0,2*Math.PI)
            }
           //}
            
            
            //c.arc(lastx - x - radius,y + starty,radius,0,2*Math.PI)
            //c.fillStyle = 'white'
           if (i > 1 && i < contnumber/3) {//(i == 1 || i == 2 || i == 3) { // (i > 0 && i < contnumber/3) { //(indirec == 24 || i == 3 || i == 2) {
               if (i == contnumber/3 - 1 && c.fillStyle != 'transparent') {
                  // c.fillStyle = 'yellow'
               }
               c.fillStyle = 'purple'
               c.fill()
               c.stroke()
            }else{
               //c.strokeStyle = 'black'
            //c.fill()
            }
           // c.strokeStyle = 'black'
           if (indirec != 20) {
           //c.stroke() 
           }
           // if (conts2[n][24].go[current - 1] == true && conts2[n][24].go[current] != true) {
           if (indirec == 20) {
            //c.stroke()   
           }
           // }
            c.beginPath()
            //c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
            c.fillStyle = 'white'
            x+= 2*radius
        }
           //}
       
        }
       }
        
        //c.beginPath()
        //x = 0 //+ (contnumber/3)*radius
        /*
        for (i = contnumber/3; i < contnumber; i++) {
            if (conts[i].ysfinal.length > 0) {
            //c.arc(x + radius + space + 2*radius*(contnumber/3),conts[i].ysfinal[conts[i].ysfinal.length - 1],radius,0,2*Math.PI)
            c.stroke()
            c.fill()
            x+= 2*radius
            }
        }
            */
      /*
        for (i = 0; i < contnumber/3;i++) {
            c.beginPath()
            //c.arc(x + radius + space,130,radius,0,2*Math.PI)
            c.fillStyle = 'yellow'
            c.fill()
            c.strokeStyle = 'black'
            c.stroke()
            x+= 2*radius
            }
            for (i = 0; i < contnumber/3;i++) {
                c.beginPath()
                //c.arc(x + radius + space,130,radius,0,2*Math.PI)
                c.fillStyle = 'pink'
                c.fill()
                c.strokeStyle = 'black'
                c.stroke()
                x+= 2*radius
                }
                for (i = 0; i < contnumber/3;i++) {
                    c.beginPath()
                    //c.arc(x + radius + space,130,radius,0,2*Math.PI)
                    c.fillStyle = 'green'
                    c.fill()
                    c.strokeStyle = 'black'
                    c.stroke()
                    x+= 2*radius
                    }
                    */
        
                    
        contsall = []
        for (cont in conts2) {
          contsall.push({index:cont,y:conts2[cont].y + conts3[cont].y})
        }
        
        x1 = 2*radius*(contnumber/3 + 1)
        
        for (i3 = 1; i3 < (contnumber/3)*2;i3++) {
            if (i3 < (contnumber/3)*2 - 1 && conts[i3 + contnumber/3].ys != undefined) {
            c.beginPath()
            y1 = starty
            found = false
            for (o in conts[i3 + contnumber/3].ys) {
                //console.log('yosh',o,conts[i + contnumber/3].ys[Number(o) + 1])
                if (conts[i3 + contnumber/3].ys[Number(o) + 1] == -100 || o == conts[i3 + contnumber/3].ys.length - 1) {
                    if (found == false) {
                    // stop here
                    y1 = conts[i3  + contnumber/3].ys[o]
                    found = true
                    }
                }
            }
            if (y1 == -100) {
                y1 = starty
            }
            
            
            if (i3 == 1) {
            //yf[(contnumber/3 + 1)] = y1
            }
            yf[i3 + contnumber/3] = y1
            y2 = starty
            found = false
            for (o in conts[i3 + contnumber/3 + 1].ys) {
                if (conts[i3 + contnumber/3 + 1].ys[Number(o)  + 1] == -100 || o == conts[i3 + contnumber/3 + 1].ys.length - 1) {
                 if (found == false) {
                    // stop here
                    y2 = conts[i3  + contnumber/3 + 1].ys[o]
                    found = true
                 }
                }
            }
            if (y2 == -100) {
                y2 = starty
            }
            //if (i == 1 && timers2.length < 2)
            //console.log('y1',y1,'y2',y2)
        
            c.moveTo(x1 + radius + space,y1) //conts[i + contnumber/3].y)//contsall[i + contnumber/3].y + starty)
            //if (i3 == 1)
            //console.log('x1',x1 + radius + space)
            //c.lineTo(0,9)
            x1 += 2*radius
            c.lineTo(x1 + radius + space,y2) //conts[i + contnumber/3 + 1].y)// contsall[i + contnumber/3 + 1].y + starty)
            //if (i3 == 1)
            //console.log('x2',x1 + radius + space)

            if (i3 == 1 && timers2.length < 2) {
                //console.log('---------')
                //console.log(x - 2*radius + radius + space, y1)
                //console.log(x + radius + space, y2)
            }
            //if (stroke == true) {
            //c.stroke()
            //c.arc(150,75,5,0,2*Math.PI)
            c.strokeStyle = 'black'
            //c.stroke()
            //console.log(y1,y2)
            //if (i3 == 1)
            //console.log('y1',y1,'y2',y2)
            //}
            //console.log('IAAAAA',i)
            }
            }

            
            for (t = 0; t < timers2.length; t++) {
                //timers2[t]
                
                for (lo = 0; lo < conts2[t].length; lo++) {
                   // if (lo == (contnumber/3 + 1)) {
                        found = false
                        //console.log(lo, conts2[t][lo])
                        y1 = ''
                    for (o = 0; o < conts2[t][lo].ys.length; o++) {
                        //console.log('yosh',o,conts[i + contnumber/3].ys[Number(o) + 1])
                        
                        if (conts2[t][lo].ys[Number(o) + 1] == -100 || o == conts2[t][lo].ys.length - 1) {
                            if (found == false) {
                            // stop here
                            y1 = conts2[t][lo].ys[o]
                            ampsep = advances2[t][o].amp[contnumber/3 + 1]
                            //console.log('esse amp',advances2[t][o].amp[(contnumber/3 + i)])
                            found = true
                            indx = o
                            }
                        }
                    }

                    if (conts2[t][lo].ys.length == 0 || y1 == -100) {
                        y1 = 100
                        ampsep = 0
                        //console.log('esse amp',0)
                        indx = 0
                    }
                    //console.log('y1',y1)
                    //console.log('total',conts2[t][lo].ysfinal[indx],y1,Number(conts2[t][lo].ysfinal[indx]) - Number(y1))
                    //console.log(advances2[t])
                    //conts2[t][lo].yx = Number(conts2[t][lo].ysfinal[indx]) - Number(y1)
                    if (t % 2 == 0) {
                        inde = contnumber - lo
                        if (lo == 0) {
                            inde = 0
                        }
                    }else{
                        inde = lo
                        if (lo == 0) {
                            inde = 0
                        }
                    }

                    //console.log(advances2[t][indx].sty[lo],y1,Math.abs(Number(advances2[t][indx].sty[lo]) - Number(y1)),inde,indx)
                    
                    //console.log(conts2[t][inde].yx != undefined)
                    if (conts2[t][inde].yx != undefined) {
                    if (direct2[t][indx] == 'u') {
                        conts2[t][inde].yx[indx] = -Math.abs(Number(advances2[t][indx].sty[lo]) - Number(y1))
                        //yf[inde] += -Math.abs(Number(advances2[t][indx].sty[lo]) - Number(y1))
                    }else{
                        conts2[t][inde].yx[indx] = Math.abs(Number(advances2[t][indx].sty[lo]) - Number(y1))
                        //yf[inde] += Math.abs(Number(advances2[t][indx].sty[lo]) - Number(y1))
                    }
                    }else{
                        conts2[t][inde].yx = []
                        //console.log(conts2[t][inde].yx)
                        if (direct2[t][indx] == 'u') {
                            conts2[t][inde].yx[indx] = -Math.abs(Number(advances2[t][indx].sty[lo]) - Number(y1))
                            //yf[inde] += -Math.abs(Number(advances2[t][indx].sty[lo]) - Number(y1))
                        }else{
                            conts2[t][inde].yx[indx] = Math.abs(Number(advances2[t][indx].sty[lo]) - Number(y1))
                            //yf[inde] += Math.abs(Number(advances2[t][indx].sty[lo]) - Number(y1))
                        }
                    }

                    ysum = 0
                    for (ji in conts2[t][inde].yx) { 
                        if (inde == (contnumber/3 + 1)) {
                        //console.log('somar com amp: ',conts2[t][inde].yx[ji])
                        }
                        ysum += conts2[t][inde].yx[ji]
                    }
                    yf[inde] += ysum
                    //document.getElementById('t').innerText = yf[(contnumber/3 + 1)]

                    c.beginPath()
                    //c.arc(2*radius*0 + radius + 2*radius*(contnumber/3),yf[(contnumber/3 + 1)],radius,0,2*Math.PI)
                    //c.arc(2*radius + radius + 2*radius*(contnumber/3) + space,yf[(contnumber/3 + 1)],radius,0,2*Math.PI)
                    //if (inde == (contnumber/3 + 1))
                    //console.log('total sum',ysum)
               // }
                }           
            }




            
        comp = 9
        alt = 7
        comp2 = 10
        alt2 = 70
        alt3 = 16

            xtouch = mousex >= 2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp - comp2 && mousex <= 2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp
            ytouch = mousey >= mouseprev - radius - alt && mousey <= mouseprev - radius - alt + alt2
            
            if (timers2.length > 0) {
            c.beginPath()
            c.moveTo(2*radius*(1) + radius + 2*radius*(contnumber/3) + space,mouseprev,radius,0,2*Math.PI)
            c.lineTo(2*radius*(2) + radius + 2*radius*(contnumber/3) + space,yf[2 + contnumber/3],radius,0,2*Math.PI)
            c.stroke()
            }else{
            c.beginPath()
            c.moveTo(2*radius*(1) + radius + 2*radius*(contnumber/3) + space,mouseprev,radius,0,2*Math.PI)
            //c.lineTo(2*radius*(2) + radius + 2*radius*(contnumber/3) + space,yf[2 + contnumber/3],radius,0,2*Math.PI)
            c.lineTo(2*radius*(2) + radius + 2*radius*(contnumber/3) + space,conts[2 + contnumber/3].yo,radius,0,2*Math.PI)
            c.stroke()
            }
        
            if (timers2.length > 0) {
                for (ke = 2; ke < contnumber/3 - 1; ke++) {
                    if (ke > 2) {
                        c.beginPath()
                        c.moveTo(2*radius*(ke - 1) + radius + 2*radius*(contnumber/3) + space,yf[ke - 1 + contnumber/3],radius,0,2*Math.PI)
                        c.lineTo(2*radius*ke + radius + 2*radius*(contnumber/3) + space,yf[ke + contnumber/3],radius,0,2*Math.PI)
                        c.stroke()
                        }
                }

            for (ke = 2; ke < contnumber/3 - 1; ke++) {
                //console.log('ke HEY',ke)
                c.beginPath()
                c.arc(2*radius*ke + radius + 2*radius*(contnumber/3) + space,yf[ke + contnumber/3],radius,0,2*Math.PI)
                c.fillStyle = 'red'
                c.fill()
                c.stroke()
            }

            c.beginPath()
            c.moveTo(2*radius*(contnumber/3 - 2) + radius + 2*radius*(contnumber/3) + space,yf[contnumber/3 - 2 + contnumber/3],radius,0,2*Math.PI)
            c.lineTo(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space,starty,radius,0,2*Math.PI)
            c.stroke()
            c.beginPath()
        }else{
            //document.getElementById('t').innerText = yf[(contnumber/3 + i)]
        }


        fstcon = mouse == 'down' && xtouch == true && ytouch == true
        if (fstcon == true || mousefollow == true) {
            mouseprev = mousey
        }
        //if (mouse == 'down' && xtouch == true && ytouch == true) {
        c.beginPath()
        c.arc(2*radius*(1) + radius + 2*radius*(contnumber/3) + space,mouseprev,radius,0,2*Math.PI)
        c.fillStyle = 'red'
        c.fill()
        c.stroke()
       //}

        comp = 15
        alt = 7
        c.beginPath()
        //c.moveTo(2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp,mousey - radius)
        //c.lineTo(2*radius*(1) + radius + 2*radius*(contnumber/3) + space + comp,mousey - radius)
        c.fillStyle = 'gray'
        c.fillRect(2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp,mouseprev - radius - alt,comp + 2,alt)
        c.fill()

        c.beginPath()
        //c.moveTo(2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp,mousey + radius)
        //c.lineTo(2*radius*(1) + radius + 2*radius*(contnumber/3) + space + comp,mousey + radius)
        c.fillRect(2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp,mouseprev + radius,comp + 2,alt)
        c.fill()

        comp2 = 12
        alt2 = 74
        c.beginPath()
        c.fillStyle = 'black'
        c.fillRect(2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp - comp2,mouseprev - radius - alt,comp2,alt2)
        c.fill()

        alt3 = 16
        c.beginPath()
        c.fillStyle = 'red'
        c.fillRect(2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp - comp2,mouseprev - radius - alt - alt3,comp2 + comp + 2,alt3)
        c.fill()
        

        c.beginPath()
        c.arc(2*radius*(contnumber/3 - 1) + radius + 2*radius*(contnumber/3) + space,starty,radius,0,2*Math.PI)
        c.fillStyle = 'red'
        c.fill()
        c.stroke()
            
            x = 0
            /*
        for (i = 0; i < contnumber/3;i++) {
            c.beginPath()
            if (i == (contnumber/3 - 1)) {
                c.fillStyle = 'pink'
                c.beginPath()
                elradius = 6
               // c.ellipse(x + 2*radius + space + elradius + 0.5,contsall[i + contnumber/3].y + starty, elradius, elradius/2, 0, 0, 2*Math.PI)
                c.stroke()
                c.beginPath()
            }
           // if (contsall[i].y + starty > starty) {
                //loop = false
           // }
            if (drawball == true) {
            //c.arc(x + radius + space,contsall[i + contnumber/3].y + starty,radius,0,2*Math.PI)
            }
            c.fillStyle = 'red'
            c.fill()
            c.strokeStyle = 'black'
            c.stroke()
            c.beginPath()
            if (drawball == true) {
            //c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
            }
            c.fillStyle = 'white'
            c.fill()
            x+= 2*radius
            }
            */

            for (p in conts) {
                for (h in timers) {
                    conts[p].time[h] += 0.2
                    //conts2[0][p].time[h] += 0.15
                }
            }
            for (t = 0; t < timers2.length; t++) {
                //timers2[t]
                for (lo in conts){
                    for (ti = 0; ti < timers2[t].length; ti++) {
                        conts2[t][lo].time[ti] += 0.2
                    }
                }           
            }
        for (k in timers){
            timers[k].time += 0.1
        }
        for (k in timers2){
            timers2[k].time += 0.1
        }
        for (k in timers3){
            timers3[k].time += 0.1
        }

if (loop == true) {
requestAnimationFrame(animate)
//document.getElementById('t').innerText = mouse
}
}
animate()

go = true
/*
window.addEventListener('keyup',function (event) {
    if (event.key == 'm') {
    //this.window.alert('NOW')
    timers.push({time:0,ind:1})
    timers2.push({time:0, ind:1,ind2:0})
    direct.push('u')
    direct2.push('u')
   // advances[timers[current].ind].amp.push(amplitude)
    amps.push(amplitude)
    advances.push({ads:[0]})
    advances2.push({ads:[]})
    vels.push(vel)
    for (a in conts) {
        conts[a].move.push(true)
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

})*/


window.addEventListener('keyup',function (event) {
    if (event.key == 'o' || event.key == 'O') { // add set of waves
        addwave()
        //tot++
}
})

function addwave() {
    //timers.push({time:0,ind:tot,ind2:0})
    //console.log('mousey:',mousey)
    if (starty != mousey) {
        //console.log('hey')
    if (tot > 0) {
        //console.log('first beed y position',conts[(contnumber/3 + i)].ys[tot - 1])
        ampcont1 = conts[(contnumber/3 + 1)].ysfinal[tot - 1] - mousey//Number(this.document.getElementById('ev2').innerText) - mousey
        ampman = Math.abs(conts[(contnumber/3 + 1)].ysfinal[tot - 1] - mousey)
        //console.log(tot - 1,':')
        //console.log(tot - 1 ,'final: ',conts[24].ysfinal[tot - 1], mousey)
        //ampman = starty - mousey
        dir = ''
        if (ampcont1 > 0) {
            dir  ='u'
        }else{
            dir = 'd'
        }
        join = false
        if (conts[(contnumber/3 + 1)].go[tot - 2] == false && direct[tot - 1] == dir) {
            //console.log('juntar')
            ampmanof = ampman + Number(advances[0][tot - 1].amp[(contnumber/3 + 1)])
            totof = tot - 1
            join = true
        }else{
            totof = tot
            ampmanof = ampman 
        }
        }else{
            ampman = Math.abs(starty - mousey)
            ampcont1 = starty - mousey
            ampmanof = ampman
            totof  = tot
            join = false
        }
        //console.log('amplitude',ampman)
        // determinar o at a partir da posição da última conta (contnumber - 1)
        //  y = (advances[timers2[current].ind].amp[contnumber/3 + i] -(advance + i)*at*advances[timers2[current].ind].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
        // y = ampman - i*at*ampman*0.03
        // ampman - 40*at*ampman*0.03 = 0
        // ampman = 40*at*ampman*0.03
        // at = ampman/(40*ampman*0.03)
        at = (starty - mousey)/(20*(starty - mousey)*0.03)
        //console.log('mousey',mousey,'starty',starty)
        //at = 0.1
        at = 0.01
        // prever o y máximo de todas as contas ()
        //x = 2*(advance)*radius
        x = space + (contnumber/3)*radius
        if (ampmanof != 0) {
        for (i = contnumber/3; i < contnumber; i++) {
            //console.log(i,':', ampman - (contnumber - i)*at*ampman*0.03 + starty)
            yat = starty - ampman - (contnumber - i)*at*ampman*0.03
            //conts[i].ysfinal.push(starty - ampman - (contnumber - i)*at*ampman*0.03)
            x+= 2*radius
        }


    if (join == false) {
    timers.push({time:0, ind:tot,ind2:0})
    //timers2[0].push({time:0, ind:tot,ind2:0}) // essential ind: conts[n].length - 1
    }
    ad = 0
    if (tot > 0 && join == false) {
    advances[0].push({ads:[ad],sty:[],amp:[]}) // essential
    }
    
    //console.log('tot',tot)
    //essential
    for (ia = 0; ia <= contnumber - 1; ia++) { // adicionar sty para cada conta
        //if (conts[ia].fixpos.length > 0) {

            if (tot > 0 ) {
                if (ia > contnumber/3 && ia <= contnumber) { // ia >= 20
                    if (join  == false) {
                    styman = conts[ia].ysfinal[tot - 1]
                    }else{
                        styman = advances[0][tot - 1].sty[ia]
                    }
                //styman = 100 
                }else if (ia  == contnumber/3){
                    styman = conts[ia].ysfinal[tot - 1]
                }else{
                    //styman = starty
                }
                advances[0][totof].sty[ia] = styman// + starty)
                if (ia == 0) {
                    //console.log('styman:',styman)
                }
                }else{
                    //console.log('tot igual a 0')
                    styman = starty // o sty já está definido para primeira onda
                }

                if (join ==  false) {
                    conts[ia].time.push(0) 
                    //conts2[0][ia].time.push(0) // not to include
                }
                if (ia >= contnumber/3 && ia <= contnumber) {
                //console.log(conts[ia].ys[tot])
                //console.log(conts[ia].ysfinal[tot])
                // para diferentes stys as amps são diferentes
                // conts[ia].ysfinal[tot] = amp - ia*at*amp*0.03 + styman
                // y - styman = amp(1 - ia*at*0.03)
                // amp = (y - styman)/(1 - ia*at*0.03))
                //console.log('STAND',1 - ia*at*0.03)
                //ampadd = (conts[ia].ysfinal[tot] - 100)/(1 - ia*at*0.03)
                //console.log(ampadd)
                //advances[tot].amp.push(Math.abs(conts[ia].ysfinal[tot] - starty))
                //advances[tot].amp.push(ampadd)
                //conts[ia].ysfinal[tot] = styman + ampman
                // ampman = conts[ia].ysfinal[tot] - styman 
                //console.log(ia, 'sty',styman,'ysfinal',conts[ia].ysfinal[tot],'amp',Math.abs(styman - conts[ia].ysfinal[tot]))
                //advances[tot].amp.push(Math.abs(styman - conts[ia].ysfinal[tot]))
                if (ampcont1 > 0) { // direction
                  conts[ia].ysfinal[totof] = Number(styman) - ampmanof + Number(((ad) + ia - contnumber/3)*at*ampmanof*0.03)
                  //conts2[0][ia].ysfinal[totof] = Number(styman) - ampmanof + Number((ia - contnumber/3)*at*ampmanof*0.03) // ampmanof => previous amp
                }else if (ampcont1 !== 0){
                    conts[ia].ysfinal[totof] = Number(styman) + ampmanof - Number(((ad) + ia - contnumber/3)*at*ampmanof*0.03)
                    //conts2[0][ia].ysfinal[totof] = Number(styman) + ampmanof - Number((ia - contnumber/3)*at*ampmanof*0.03)
                }
                if (ia == 24) {
                    //console.log('totof', totof, 'final',conts[ia].ysfinal[totof])
                    //console.log('styman',styman,'ampmanof',ampmanof,'at',at,'join',join)
                    }
                advances[0][totof].amp[ia] = ampmanof // essential
                }else if (ia < 20){
                        //advances[tot].amp.push(Math.abs(ampcont1))
                        //advances[tot].amp.push(Math.abs(styman - conts[ia].ysfinal[tot]))
                        //advances[tot].amp.push(0)
                }
       //}
    }
    /*
    if (tot > 0) {
    advances2.push({ads:[],sty:[],amp:amplitude})
    //window.alert(cont)
    for (ia = 0; ia <= contnumber - 1; ia++) {
        //if (conts3[ia].fixpos.length > 0) {
        advances2[tot].sty.push(conts[ia].fixpos[0] + starty)
        //}
    }
    timers[tot - 1].delete = true
    //console.log('já terminou de fazer a última onda?',conts[39].ysfinal[tot - 1] == conts[39].ys[tot - 1])
}*/
// essential => use previous directions
   if (join == false){
    if (ampcont1 > 0) {
    direct.push('u')
    //direct2[0].push('u')
    }else{
        direct.push('d')
        //direct2[0].push('d')
    }
}
    vels.push(vel)
    for (a in conts) {
        conts[a].move.push(true)
        conts[a].fixpos.push(0)
    }
    //for (a = 0; a < conts2[0].length; a++) {
        //conts2[0][a].move.push(true)
        //conts2[0][a].fixpos.push(0)
    //}
    for (a in conts3) {
        conts3[a].move.push(true)
        conts3[a].fixpos.push(0)
    }
    if (join == false) {
    tot++
    }
}
}
}

mousex = 'i'
mousey = 'i'
find = 0
ir = true
console.log('onmouse',window.onmousedown)
window.addEventListener('mousemove',function(event) {
    xtouch = mousex >= 2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp - comp2 && mousex <= 2*radius*(1) + radius + 2*radius*(contnumber/3) + space - comp
    ytouch = mousey >= mouseprev - radius - alt && mousey <= mouseprev - radius - alt + alt2
    fstcon = go == true && mouse == 'down' && xtouch == true && ytouch == true
    if (fstcon == true || mousefollow == true) {
    if (mousey != 'i') {
    if (ir == true) {
        ir = false
    setTimeout(function () {
        ir = true
        addwave()
        //tot++
        // mousey
    },20)
}
mousefollow = true
    }

}
this.document.getElementById('t').innerText =  mouse == 'down' && xtouch == true && ytouch == true
})

mouse = 'up'
window.addEventListener('mousedown',function(event) {
    mouse = 'down'
    this.window.document.body.style.cursor = 'grab'
})
window.addEventListener('mouseup',function(event) {
    mouse = 'up'
    this.window.document.body.style.cursor = 'auto'
    mousefollow = false
})



window.addEventListener('mousemove',function(event) {
    if (go == true) {
    //c.clearRect(0,0,300,150)
    canv = document.querySelector('canvas')
    c = canv.getContext('2d')
    cWidth = canv.offsetWidth
    wWidth = this.window.innerWidth
    cHeight = canv.offsetHeight
    wHeight = this.window.innerHeight
    dif = wWidth - cWidth
    mousex = ((event.x - dif/2)/cWidth)*300
    mousey = ((event.y)/cHeight)*150
    
        prevx = String(this.document.getElementById('x').innerText)
        //this.document.getElementById('ev').innerText = 'y atual:' + conts[20].ys[tot - 1]
        prevy = String(this.document.getElementById('y').innerText)
        //this.document.getElementById('ev2').innerText = conts[24].ys[current]
        //this.document.getElementById('x').innerText = direct[tot - 1]
        //this.document.getElementById('y').innerText = mousey
       
    }
})
}


function addTimers(settimer, contindex, ampli, mov, ad) {
    //console.log('adadwdwdwdwd',settimer,mov)
 /* variables:
 timers (2 or 3) check
 index (0,1,...) check
 amp check
 direction 
 ad (20,40,60..)
*/
//console.log('AD',ad)
if (conts2[contindex] != undefined){
   
    for (j = 0; j < contnumber;j++) {
        conts2[contindex][j].move.push(true) 
        conts2[contindex][j].fixpos.push(0)   
    }
       settimer[contindex].push({time:0, ind:settimer[contindex].length,ind2:0}) // essential ind: conts[n].length - 1
        
        //ad = 0
        advances2[contindex].push({ads:[ad],sty:[],amp:[]}) // essential
        
        //essential
        //ampli = 5
        //mov = 'd'
        for (ia2 = 0; ia2 <= contnumber - 1; ia2++) { // adicionar sty para cada conta
            //if (conts[ia].fixpos.length > 0) {
    
                    if (ia2 > (contnumber/3) && ia2 <= contnumber) { // ia >= 20
                        styman = conts2[contindex][ia2].ysfinal[conts2[contindex][ia2].ysfinal.length - 1]
                    //styman = 100 
                    }
                    advances2[contindex][advances2[contindex].length - 1].sty[ia2] = styman// + starty)
        
                    conts2[contindex][ia2].time.push(0) 

                    if (ia2 >= (contnumber/3) && ia2 <= contnumber) {
                    if (mov == 'u') { // direction
                      conts2[contindex][ia2].ysfinal.push(Number(styman) - ampli + Number((ad + ia2 - contnumber/3)*at*ampli*0.03)) // ampmanof => previous amp
                    }else{
                        conts2[contindex][ia2].ysfinal.push(Number(styman) + ampli - Number((ad + ia2 - contnumber/3)*at*ampli*0.03))
                    }
                    
                    advances2[contindex][advances2[contindex].length - 1].amp[ia2] = ampli // essential
                    }
           //}
        }
    // essential => use previous directions
        direct2[contindex].push(mov)
}else{
    conts2.push([])
    for (j = 0; j < contnumber;j++) {
            conts2[contindex].push({y:0,move:[],reflect:[],fixpos:[],ys:[],ysfinal:[],go:[],start:[],time:[],advances:[]})
            conts2[contindex][j].move.push(true) 
            conts2[contindex][j].fixpos.push(0)   
        }

       settimer.push([])
       settimer[contindex].push({time:0, ind:0,ind2:0}) // essential ind: conts[n].length - 1
        
        //ad = 0
        //if (tot > 0 && join == false) {
        advances2.push([])
        advances2[contindex].push({ads:[ad],sty:[],amp:[]}) // essential
        //}
        
        //console.log('tot',tot)
        //essential
        //ampli = 5
        //mov = 'u'
        for (ia2 = 0; ia2 <= contnumber - 1; ia2++) { // adicionar sty para cada conta
            //if (conts[ia].fixpos.length > 0) {
    
                /*
                if (tot > 0) {
                    if (ia > 20 && ia <= contnumber) { // ia >= 20
                        if (join  == false) {
                        styman = conts[ia].ysfinal[tot - 1]
                        }
                    //styman = 100 
                    }else if (ia  == 20){
                        styman = conts[ia].ysfinal[tot - 1]
                    }
                    advances[contnumber][totof].sty[ia] = styman// + starty)
                    }else{*/
                        //console.log('tot igual a 0')
                        styman = starty // o sty já está definido para primeira onda
                    //}
                        advances2[contindex][0].sty[ia2] = starty
                        conts2[contindex][ia2].time.push(0) 

                    if (ia >= (contnumber/3) && ia <= contnumber) {
                    if (mov == 'u') { // direction
                      conts2[contindex][ia2].ysfinal[0] = Number(styman) - ampli + Number((ad + ia2 - contnumber/3)*at*ampli*0.03) // ampmanof => previous amp
                    }else{
                        conts2[contindex][ia2].ysfinal[0] = Number(styman) + ampli - Number((ad + ia2 - contnumber/3)*at*ampli*0.03)
                    }
                    
                    advances2[contindex][0].amp[ia2] = ampli // essential
                    }
           //}
        }
    // essential => use previous directions
        direct2.push([])
        direct2[contindex].push(mov)
}
}
window.addEventListener('keydown',function (event) {
    //this.window.alert(event.key)
    if (event.key == 'p' || event.key == 'P') {
        loop = false
    }
    if (event.key == 'm') {
        //this.window.alert('m')
        for (l in conts) {
            //conts[l].move = truef
            conts[l].y = 0
        }
     
    }
}) 