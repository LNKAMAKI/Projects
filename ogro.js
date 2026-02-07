for (i = 0; i < contnumber - 1;i++) {
    // y = hiro 
    canmove = true
    if (i == 3 && current == 0) {
       //console.log('biranga',conts[23].time[0])
       //console.log(-(advances[0][current].amp[i] -(advance + i)*at*advances[0][current].amp[i]*0.03)*Math.sin(0 - vels[current]*(conts[i].time[current] - hiro)))
    }
    if (conts[i].time[current] - hiro >= 0) { // Math.sin(-vel*(conts[i].time[current]  - hiro)) = 0 
        if (type == 'pulse') {
        if (advances[0][current].amp[i] - (advance + i)*at*advances[0][current].amp[i]*0.03 >= 0 && Math.sin(0 - vels[current]*(conts[i].time[current] - hiro)) <= 0) {
           if (conts[i].start[current] == undefined) {
               if (i > 0 && i < (contnumber/3)*2) { //(i == 4 || i == 3 || i == 2) {
               conts[i].start[current] = {time:conts[i].time[current]}
               }
               //console.log('terminou', conts[i].time[current], vels[current]*(conts[i].time[current] - hiro), hiro)
           }
            if (direct[current] == 'u') {
               //console.log('UP')
        y = (advances[0][current].amp[i] -(advance + i)*at*advances[0][current].amp[i]*0.03)*Math.sin(0 - vels[current]*(conts[i].time[current] - hiro))
            }else{
               //console.log('DOWN')
                y = -(advances[0][current].amp[i] -(advance + i)*at*advances[0][current].amp[i]*0.03)*Math.sin(0 - vels[current]*(conts[i].time[current] - hiro))
            }

            /*
            if (i == (contnumber/3)*2 - 1 && conts[i].reflect[current] != false) {
                
               conts[i].reflect[current] = false
               //window.alert('CYAN')
               //console.log('CYAN',current,advances[0][current])
               //timers3.push({time:conts[i].time[current],ind:current,ind2:advances[0]2[current].ads.length})
               //timers3.push(conts[i].time[current])
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
        }else if(Math.sin(0 - vels[current]*(conts[i].time[current] - hiro)) >= 0 && conts[i].move[current] == true){
           y = 0
           if (man == false) {
          conts[i].move[current] = false
           }
       }else{
           y = 0
           //window.alert('EITA')
       }

       /*
        if ((Math.sin(0 - vels[current]*(conts[i].time[current] - hiro))).toFixed(2) == -1.00 && conts[i].time[current] - hiro >= 0 && conts[i].move[current] != false) {
           //window.alert('STOP')
          conts[i].fixpos[current] = y
           conts[i].move[current] = false
        }*/
         
    }else{
        if (advances[0][current].amp[i] - (advance + i)*at*advances[0][current].amp[i]*0.03 >= 0) {
            if (direct[current] == 'u') {
                y = (advances[0][current].amp[i] -(advance + i)*at*advances[0][current].amp[i]*0.03)*Math.sin(0 - vels[current]*(conts[i].time[current] - hiro))
                    }else{
                        y = -(advances[0][current].amp[i] -(advance + i)*at*advances[0][current].amp[i]*0.03)*Math.sin(0 - vels[current]*(conts[i].time[current] - hiro))
                    }
            }else{
                y = 0
                conts[i].move[current] = false
            }
    }
    }else{
        y = 0
    }

    if (manf == true) {
    c.fillStyle = 'black'
   if (conts[i].move[current] == true) {
   if ((Math.sin(0 - vels[current]*(conts[i].time[current] - hiro))).toFixed(1) == 0) {
      c.fillStyle = 'red'
   }else if((Math.sin(0 - vels[current]*(conts[i].time[current] - hiro))).toFixed(2) == -1.00) {
      c.fillStyle = 'blue'
   }
   }

   c.font = '20px Arial'
   if (Math.sin(0 - vels[current]*(conts[i].time[current] - hiro)) < Math.sin(0 - vels[current]*(conts[i].time[current] + 0.01 - hiro)) && conts[i].time[current] - hiro >= 0 && advances[0][current].amp[i] -(advance + i)*at*advances[0][current].amp[i]*0.03 >= 0) {
      c.fillStyle = 'yellow'
      y = (advances[0][current].amp[i] -(advance + i)*at*advances[0][current].amp[i]*0.03)*-1
      if (i > 0 && i < (contnumber/3)*2) {//(i == 4 || i == 3 || i == 2) {
       if (conts[i].go[current - 1] != false) {
           conts[i].move[current] = false
           //if (i == 3 && current == 0)
           //console.log('N ERA PRA SE FAZER ISSO')
       }
      }else{
        conts[i].move[current] = false
    }
      conts[i].fixpos[current] = y //+ advances[0][current].sty[i]
   }
}

    if (conts[i].move[current] == false && type == 'pulse') {
     // y = 0
     if (manf == true){
     if (direct[current] == 'u') {
        y = conts[i].fixpos[current]
     }else{
      y = -conts[i].fixpos[current]
     }
     }else{
     y = 0
     }
    }
   
    if (i == 3 && current == 0){
       //console.log('EIK',y)
    }
    conts[i].y = y + advances[0][current].sty[i]
    conts[i].a = i //(advance + i)*at*advances[0][current].amp[i]*0.03

    add = true
    for (dom = current - 2; dom >= 0; dom--){
        if (conts[i].go[dom] == false) {
            add = false
            //window.alert('n adicionar true em',current - 1)
        }
    }

    //conts[22].running[0] = true
    if (current == 0 && i == 2) {
       //conts[22].running[0] = true
    }
    if (current > 0 || i == 1 || i == 2) { 
    //if (i > 0 && i < (contnumber/3)*2) {//(i == 4 || i == 3 || i == 2) {
    if (add == true && conts[i].go[current - 1] != false && conts[i].go[current] != true) {
       conts[i].ys[current] = conts[i].y
    }else if (conts[i].go[current] == true){
    conts[i].ys[current] = conts[i].ysfinal[current]
    }else{
       conts[i].ys[current] = -100
    }
   //}else{
       //conts[i].ys[current] = conts[i].y
   //}
}else{
   //if (i == 2)
   //console.log(conts[i - 1].ys[0] == conts[i - 1].ysfinal[0],conts[i].ys[0])
   if (i == 3) {
       //console.log('why',conts[i - 1].ys[0] == conts[i - 1].ysfinal[0])
   }
   if (conts[i - 1].ys[0] != undefined && conts[i - 1].ysfinal[0] != undefined) {
       // console.log(conts[i - 1].ys[0])
       fstperc = Math.abs(conts[i - 1].ys[0] - advances[0][0].sty[i - 1])
       secperc = Math.abs(conts[i - 1].ysfinal[0] - advances[0][0].sty[i - 1])
       finalperc = fstperc/secperc

               cond = conts[i - 1].running[0] == true && finalperc > tension && conts[i].ys[0] == -100
           
               //console.log(i - 1,':', advances[0][0].sty[i - 1], '=>',conts[i - 1].ysfinal[0])
           //console.log(conts[i - 1].ys[0])
           //console.log('has moved: ',fstperc)
           ////console.log('still remains: ',secperc)
           //console.log('final percento:',finalperc)
           
   if (cond == true) {
           //if (i == 2 || i == 3) {
               //console.log('hey yyou',i,hiro,advances[0][0].sty[i])
               y = 0
               
               conts[i].ys[0] = advances[0][0].sty[i]
               conts[i].time[0] = hiro
               conts[i].running[0] = true
               //console.log(i,':',conts[i].running[0])
               if (i == contnumber/3 - 1) {
               //console.log('add timers2')
               
               if (fixo == false) {
                 addTimers(timers2,0,advances[0][current].amp[(contnumber/3)],direct[current],(contnumber/3))
               }else{
                   if (direct[current] == 'u') {
                       addTimers(timers2,0,advances[0][current].amp[(contnumber/3)],'d',(contnumber/3))
                   }else{
                       addTimers(timers2,0,advances[0][current].amp[(contnumber/3)],'u',(contnumber/3))
                   }
               }
                   //addTimers(timers2,0,advances[0][current].amp[20],'u',0)
               }
               
          // }
   }else if (conts[i - 1].running[0] == true && finalperc > tension) {//(((conts[i - 1].ys[0])).toFixed(3) == ((conts[i - 1].ysfinal[0])).toFixed(3)){
       if (i == 3) {
       //console.log('pode atualizar',conts[23].time[0],y)
       }
      // console.log('sim')
       conts[i].ys[0] = conts[i].y
   }else{
       conts[i].ys[0] = -100
       //if (i == 3) {
           conts[i].time[0] = 0
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
               //document.getElementById('t').innerText = conts2[0][(i)].yx
                   }
               }
               //document.getElementById('t2').innerText = (conts[i].time[0]).toFixed(0) + '' + (conts[25].time[0]).toFixed(0)//conts[24].start[current].time + ' | ' + conts[i].time
               //document.getElementById('t3').innerText += (conts[24].ysfinal[ci]).toFixed(0) + ' , '
           }
       }
    }
    }
    
    //c.fillText('I',lastx - x - radius +2*(advance)*radius,50)
    
    //c.beginPath()
    //c.arc(x + radius + space - (advance)*2*radius,y + starty,radius,0,2*Math.PI)
    //if (timers[current].delete == undefined) {
   
  //if (i > 0 && i < (contnumber/3)*2) {    
       if (i == 1 || i == 2){ //(i > 0 && i < contnumber/3) {//(i == 4 || i == 3 || i == 2) {
           if (current > 0) {
       //if (i > (contnumber/3 + 1) && i < 40) {
           //console.log('index',i, 'current',current, 'current - 1',current - 1)
    eq = (conts[i].ys[current - 1]).toFixed(3) == (conts[i].ysfinal[current - 1]).toFixed(3)
       if (conts[i].go[current - 1] == false && eq == true) {
            //window.alert('ADD NOW')
            //conts[i].time[current] = conts[24].start[current - 1].time
       }
       //if (conts[i].go[current - 1] == undefined) {
       if (eq == false) {
       conts[i].go[current - 1] = false
       }else{//if (conts[i].go[current - 1] == false){
           add = true
           for (dom = current - 2; dom >= 0; dom--){
               if (conts[i].go[dom] == false) {
                   add = false
                   //window.alert('n adicionar true em',current - 1)
               }
           }
           if (add == true && conts[i].time[current] != conts[i].start[current - 1].time) {
           if (conts[i].go[current - 1] != true) {

               if (conts[i].go[current - 1] == false) {
                conts[i].time[current] = hiro //conts[24].start[current - 1].time
                //conts[i].running[current] = true
                //console.log('ADD NOW')
               }//else{
               // conts[i].time[current] = 0
              //}
              conts[i].go[current - 1] = true
              conts[i].running[current] = true
              //conts[i].running[current] = true
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
               if (conts[i].go[dom] == false) {
                   add = false
                   //window.alert('n adicionar true em',current - 1)
               }
           }
           //if (add == true) {
               conts[i].go[current - 1] = 'none'
               //conts[i].time[current] = conts[24].start[current - 1].time
               //window.alert('ADD NOW')
           //}
       }*/
}}else if (current > 0){
   eq = (conts[i].ys[current - 1]).toFixed(3) == (conts[i].ysfinal[current - 1]).toFixed(3)
   
   if (conts[i].go[current - 1] == false && eq == true) {
        //window.alert('ADD NOW')
        //conts[i].time[current] = conts[24].start[current - 1].time
   }
   //if (conts[i].go[current - 1] == undefined) {
   if (eq == false) {
   conts[i].go[current - 1] = false
   }else {//if (conts[i].go[current - 1] == false){
       add = true
           for (dom = current - 2; dom >= 0; dom--){
           if (conts[i].go[dom] == false) {
               add = false
               //window.alert('n adicionar true em',current - 1)
           }
       }
       if (i == 2)  {
       //console.log(add,'eq: true',)
       }
       //console.log('EI',add,)
       if (conts[i - 1].ys[current] != -100) { //conts[i - 1].ys[current] != undefined && conts[i - 1].ys[current] != -100 && conts[i - 1].ysfinal[current] != undefined) {
       fstperc = Math.abs(conts[i - 1].ys[current] - advances[0][current].sty[i - 1])
       secperc = Math.abs(conts[i - 1].ysfinal[current] - advances[0][current].sty[i - 1])
       finalperc = fstperc/secperc
       }else{
           finalperc = 0
       }

       if (i == 19 && conts[38].running[current] == true && current == 1 && conts[38].ys[current] != -100) {
       //console.log(current, conts[i - 1].running[current])
       //console.log(i - 1,':', advances[0][current].sty[i - 1], '=>',conts[i - 1].ysfinal[current])
       //console.log(conts[i - 1].ys[current])
       //console.log('has moved: ',fstperc)
       //console.log('still remains: ',secperc)
       //console.log('final percento:',current,finalperc)
       }
       if (i == 4 && (conts[i - 1].ys[current]).toFixed(3) == (conts[i - 1].ysfinal[current]).toFixed(3)) { // conts[i - 1].running[current] == true && finalperc == 1 && current == 2) { 
           //conts[22].running[current] != undefined
           /*
           console.log(current, conts[22].running[current])
           console.log(i - 1,':', advances[0][current].sty[i - 1], '=>',conts[i - 1].ysfinal[current])
           console.log(conts[i - 1].ys[current])
           console.log('has moved: ',fstperc)
           console.log('still remains: ',secperc)
           console.log('final percento:',finalperc)
           */
           //if (Math.round(finalperc) == 1) {
              //console.log(current,'euhduehdedhed')
           //}
       }
       if (i == 2) {
           //console.log('running',current,conts[i - 1].running[current])
       }
       if (i > 2) {
           wi = conts[i - 1].running[current] == true && finalperc > tension
       //wi == (conts[i - 1].ys[current]).toFixed(3) == (conts[i - 1].ysfinal[current]).toFixed(3)
       }else{
           wi = true
       }
       if (add == true && wi == true) {// && (conts[i - 1].ys[current]).toFixed(3) == (conts[i - 1].ysfinal[current]).toFixed(3)){ //conts[i - 1].running[current] == true && finalperc >= 0.5) { //Math.round(finalperc) == 1){//&& (conts[i - 1].ys[current]).toFixed(3) == (conts[i - 1].ysfinal[current]).toFixed(3)) {//&& (conts[i - 1].ys[current]).toFixed(3) == (conts[i - 1].ysfinal[current]).toFixed(3)) {//conts[i].time[current] != conts[i].start[current - 1].time && conts[i - 1].ys[current] == conts[i - 1].ysfinal[current]){
          if (i == 19) {
           //console.log('wi',wi,finalperc)
          }
           if (conts[i].go[current - 1] != true) {
               if (i == 19) {
               //console.log('what',conts[i].go[current - 1] != true)
               }
           if (conts[i].go[current - 1] == false) {
            conts[i].time[current] = hiro //conts[24].start[current - 1].time
            
            //console.log('ADD NOW')
            if (i == contnumber/3 - 1) {
               //console.log('add timers2')
               
               if (fixo == false) {
                   addTimers(timers2,0,advances[0][current].amp[(contnumber/3)],direct[current],(contnumber/3))
                 }else{
                     if (direct[current] == 'u') {
                         addTimers(timers2,0,advances[0][current].amp[(contnumber/3)],'d',(contnumber/3))
                     }else{
                         addTimers(timers2,0,advances[0][current].amp[(contnumber/3)],'u',(contnumber/3))
                     }
                 }

                 //addTimers(timers2,0,advances[0][current].amp[20],'u',0)
            }
           }//else{
           // conts[i].time[current] = 0
          //}
          conts[i].go[current - 1] = true
          if (i == 19) {
           //console.log('hey',current - 1,conts[i].go[current - 1])
          }
          conts[i].running[current] = true
           //conts[24].ys[current] = -100
           //document.getElementById('t2').innerText = `fazer a ${Number(current)} onda`
           //console.log(conts[24].ys[current], i)
       }
           //window.alert('ADD NOW')
       }else if(wi == false){ //conts[i - 1].ys[current] != conts[i - 1].ysfinal[current]){
           conts[i].go[current - 1] = false
           if (current == 1 && i == 19) {
           //console.log('wi',wi,finalperc)
           }
       }
   }
}

    //conts[i].go[current - 1] = eq
    //}
    
    if (draw1 == true && i != contnumber - 1) { //&& i != 1) { // && conts[i].ys[current - 1] == conts[i].ysfinal[current - 1]) {
      // if (i != 4) {// && conts[24].go[current - 1] != true) {
    //c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),y + advances[0][current].sty[i],radius,0,2*Math.PI)
     //c.strokeStyle = 'black'
       //}else{
           //if (conts[i].go[current] == false && conts[i].go[current - 1] == true) { //&& conts[i].go[current - 1] != 'none') {
           if (conts[i].go[current - 1] != false && conts[i].go[current] != true) {
              // if (current != 0) {
              //console.log('head straight')
               c.fillStyle = 'red'
               c.strokeStyle = 'black'
               if (conts[i].ys[current] == -100) {
              // console.log('I WANNA RUN AWAY', y)
                       //console.log('y1',advances[0][current].sty[i],conts[i].time[current])
                       y = 0
               }
               //conts[i].
               
               conts[i].yo = y + advances[0][current].sty[i]
               if (i > 2 && i < (contnumber/3) && timers2.length == 0 && i != contnumber/3 - 1) {
                   /*
               c.beginPath()
               c.moveTo(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3) - 2*radius,conts[i - 1].yo,radius,0,2*Math.PI)
               c.lineTo(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),conts[i].yo,radius,0,2*Math.PI)
               c.stroke()
               c.beginPath()
               */
               }
          // }
       }else{
           c.fillStyle = 'transparent'
           c.strokeStyle = 'transparent'
       }
       if (timers2.length == 0 && i != 1 && i != contnumber/3 - 1) {
       //c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),y + advances[0][current].sty[i],radius,0,2*Math.PI)
       }
            //}
          // }
       //}
    }else if (i == contnumber - 1){
       //c.arc(x + radius -2*(advance)*radius + space + 2*radius*(contnumber/3),starty,radius,0,2*Math.PI)
    }
   //}
    
    
    //c.arc(lastx - x - radius,y + starty,radius,0,2*Math.PI)
    //c.fillStyle = 'white'
   //if (i > 0 && i < (contnumber/3)) {// 2*(contnumber/3) {//(i == 1 || i == 2 || i == 3) { // (i > 0 && i < contnumber/3) { //(i == 24 || i == 3 || i == 2) {
       c.fill()
       c.stroke()
    //}else{
       //c.strokeStyle = 'black'
    //c.fill()
    //}
   // c.strokeStyle = 'black'
   if (i != 20) {
   //c.stroke() 
   }
   // if (conts[24].go[current - 1] == true && conts[24].go[current] != true) {
   if (i == 20) {
    //c.stroke()   
   }
   // }
    c.beginPath()
    //c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
    c.fillStyle = 'white'
    x+= 2*radius
}