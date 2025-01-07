let radius = 2.3
let starty = 80
let x = 0
loop = true
addpulse = false
tot = 0
function load() {
canv = document.getElementById('canvas')
c = canv.getContext('2d')
console.log(x)
contnumber = 60
conts = []
mouse = 'up'
mouseprev = starty
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
vel = 0.4
vels = [vel]
direct = []
direct2 = []
direct3 = []
yf = []
ysep = []
for (i = 0; i < contnumber; i++) {
    yf.push(starty)
}
for (i = 0; i < contnumber;i++) {
    if (i == contnumber/3 + 1 || i == contnumber/3 + 2){ // || i == contnumber/3 + 2 || i == contnumber/3 + 3) {
        conts.push({y:0,move:[],fixpos:[0],ys:[],ysfinal:[],go:[],start:[],time:[],yo:starty,running:[true]})
    }else{
        conts.push({y:0,move:[],fixpos:[0],ys:[-100],ysfinal:[],go:[],start:[],time:[],yo:starty,running:[false]})
    }
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
//at = 0.8 // usar o at para estabelecer o alinhamento das contas no manual?
function animate() {
    space = 300 -(contnumber/3 - 1)*radius*2*2 - 40
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
                advance = advances[0][current].ads[0]
                x =  2*(advance)*radius
                hiro = 0
                //x = 0
                // - (advance)*2*radius
             for (i = 0; i < (contnumber/3)*2;i++) {
                 // y = hiro 
                 canmove = true
                 if (i == 3 && current == 0) {
                    //console.log('biranga',conts[23].time[0])
                    //console.log(-(advances[0][current].amp[contnumber/3 + i] -(advance + i)*at*advances[0][current].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro)))
                 }
                 if (conts[contnumber/3 + i].time[current] - hiro >= 0) { // Math.sin(-vel*(conts[contnumber/3 + i].time[current]  - hiro)) = 0 
                     if (type == 'pulse') {
                     if (advances[0][current].amp[contnumber/3 + i] - (advance + i)*at*advances[0][current].amp[contnumber/3 + i]*0.03 >= 0 && Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro)) <= 0) {
                        if (conts[contnumber/3 + i].start[current] == undefined) {
                            if (i > 0 && i < (contnumber/3)*2) { //(i == 4 || i == 3 || i == 2) {
                            conts[contnumber/3 + i].start[current] = {time:conts[contnumber/3 + i].time[current]}
                            }
                            //console.log('terminou', conts[contnumber/3 + i].time[current], vels[current]*(conts[contnumber/3 + i].time[current] - hiro), hiro)
                        }
                         if (direct[current] == 'u') {
                            //console.log('UP')
                     y = (advances[0][current].amp[contnumber/3 + i] -(advance + i)*at*advances[0][current].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro))
                         }else{
                            //console.log('DOWN')
                             y = -(advances[0][current].amp[contnumber/3 + i] -(advance + i)*at*advances[0][current].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro))
                         }
            
                         /*
                         if (i == (contnumber/3)*2 - 1 && conts[contnumber/3 + i].reflect[current] != false) {
                             
                            conts[contnumber/3 + i].reflect[current] = false
                            //window.alert('CYAN')
                            //console.log('CYAN',current,advances[0][current])
                            //timers3.push({time:conts[contnumber/3 + i].time[current],ind:current,ind2:advances[0]2[current].ads.length})
                            //timers3.push(conts[contnumber/3 + i].time[current])
                            if (direct[current] == 'd') {
                            direct3.push('u')
                            }else{
                                direct3.push('d')
                                //direct3.push('u')
                            }
                            amps3.push(amplitude)
                            
                           // console.log('WHAT',advances[0]2[current].ads.length)
                            if (advances[0]2[current].ads.length == 0) {
                                advances[0]2[current].ads.push((contnumber/3))
                                //console.log('WHAT2',advances[0]2[current].ads.length)
                            }else{
                                //Mwindow.alert('PUSH')
                                //console.log(advances[0]2[timers3.length - 2] + (contnumber/3)*2)
                                advances[0]2[current].ads.push(advances[0]2[current].ads[advances[0]2[current].ads.length - 1] + (contnumber/3)*2)
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
                     if (advances[0][current].amp[contnumber/3 + i] - (advance + i)*at*advances[0][current].amp[contnumber/3 + i]*0.03 >= 0) {
                         if (direct[current] == 'u') {
                             y = (advances[0][current].amp[contnumber/3 + i] -(advance + i)*at*advances[0][current].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro))
                                 }else{
                                     y = -(advances[0][current].amp[contnumber/3 + i] -(advance + i)*at*advances[0][current].amp[contnumber/3 + i]*0.03)*Math.sin(0 - vels[current]*(conts[contnumber/3 + i].time[current] - hiro))
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
             if (timers2[current].time - x*0.1 >= 0) {
                 if (type == 'pulse') {
                 if (advances[timers2[current].ind].amp -(advance + i)*at*advances[timers2[current].ind].amp*0.03 >= 0 && Math.sin(0 - vels[current]*(timers2[current].time - x*0.1)) <= 0) {
                     if (direct2[current] == 'u') {
                 y = (advances[timers2[current].ind].amp -(advance + i)*at*advances[timers2[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
                     }else{
                         y = -(advances[timers2[current].ind].amp -(advance + i)*at*advances[timers2[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
                     }
    
    
                     if (i == (contnumber/3)*2 && conts2[contnumber - 1 - i].reflect[current] != false) {
                         
                        conts2[contnumber - 1 - i].reflect[current] = false
                        //window.alert('CYAN')
                        //console.log('CYAN',current,advances[timers2[current].ind])
                        timers3.push({time:timers2[current].time,ind:timers2[current].ind,ind2:advances2[timers2[current].ind].ads.length})
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
                 if (advances[timers2[current].ind].amp -(advance + i)*at*advances[timers2[current].ind].amp*0.03 >= 0) {
                     if (direct2[current] == 'u') {
                         y = (advances[timers2[current].ind].amp -(advance + i)*at*advances[timers2[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
                             }else{
                                 y = -(advances[timers2[current].ind].amp -(advance + i)*at*advances[timers2[current].ind].amp*0.03)*Math.sin(0 - vels[current]*(timers2[current].time - x*0.1))
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
            if (Math.sin(0 - vels[current]*(timers2[current].time - x*0.1)) < Math.sin(0 - vels[current]*(timers2[current].time + 0.01 - x*0.1)) && timers2[current].time - x*0.1 >= 0 && advances[timers2[current].ind].amp -(advance + i)*at*advances[timers2[current].ind].amp*0.03 >= 0) {
               c.fillStyle = 'yellow'
               y = (advances[timers2[current].ind].amp -(advance + i)*at*advances[timers2[current].ind].amp*0.03)*-1
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
            //
             conts2[contnumber - 1 - i].y = y + advances[timers2[current].ind].sty
             //conts2[contnumber - 1 - i].fixpos[current] = y + advances[timers2[current].ind].sty
             
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

        

        x = 0
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
        
        /*
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
            x+= 2*radius
            c.lineTo(x + radius + space,contsall[i + contnumber/3 + 1].y)
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
    if (event.key == 'o') {
    //oooooooooooothis.window.alert('NOW')
    timers.push({time:0,ind:tot,ind2:0})
    timers2.push({time:0, ind:tot,ind2:0})
    advances.push({ads:[0],sty:starty,amp:amplitude})
    advances2.push({ads:[],sty:starty,amp:amplitude})
    for (nt = 0; nt < contnumber; nt++) {
        //timers2[timers2.length - 1].time.push(0)
    }
    direct.push('d')
    direct2.push('d')
   // advances[timers[current].ind].amp.push(amplitude)
    //amps.push({ads:[0]})
    //advances2.push({ads:[]})
    vels.push(vel)
    for (a in conts) {
        //conts[a].move.push(true)
        //conts[a].fixpos.push(0)
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
    
    this.document.getElementById('ev').innerText = ((event.y)/cHeight)*150
    //console.log(mousey,(((event.y)/cHeight)*150))
    axis = 100
    if (mousey != 'i') {
        if (((event.y)/cHeight)*150 < mousey) {
             c.fillStyle = 'red'
             direct = ['u']
        }else{
            c.fillStyle = 'blue'
            direct = ['d']
        }
    

    //if (find < 4) {
    //timers = [{time:0,ind:0}]
    //timers.push({time:0,ind:find})
        //advances = [{ads:[],sty:mousey,amp:Math.abs(mousey - 120)}]
        advances = [{ads:[],sty:mousey,amp:Math.abs(mousey - ((event.y)/cHeight)*150)}]
        //advances.push({ads:[],sty:mousey,amp:Math.abs(mousey - ((event.y)/cHeight)*150)})
        //advances.push({ads:[],sty:mousey,amp:20})
        
    
    //advances[timers[current].ind].amp.push(amplitude)
    vels.push(vel)
    //conts = []
    conts.push({y:0,move:[true],fixpos:[]})
    for (j = 0; j < contnumber/3 + 1;j++) {
       // conts.push({y:0,move:[true],fixpos:[]})
    }
    if (ir == true) {
        ir = false
    setTimeout(function () {
        //window.alert('hello')
        console.log(conts.length)
        ir = true
        for (k = 0; k < contnumber/3; k++) {
        conts.push({y:0,move:[true],fixpos:[]})
        }
    }, 2000)
}
    for (a in conts) {
        //conts[a].move[0] = true
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