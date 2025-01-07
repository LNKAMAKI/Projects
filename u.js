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
                   
                   conts2[n][contnumber/3 + i].ys[0] = advances[n][0].sty[contnumber/3 + i]
                   conts2[n][contnumber/3 + i].time[0] = x*0.1
                   if (i == contnumber/3 - 1 && n < 20) {
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
                if (i == contnumber/3 - 1 && n < 20) {
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
        c.fillStyle = 'red'
        x+= 2*radius
    }
       //}
   
    }
   }
}