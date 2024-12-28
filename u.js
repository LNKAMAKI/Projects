if (current > 0 || i == 1) { 
    if (i > 0 && i < (contnumber/3)*2) {//(i == 4 || i == 3 || i == 2) {
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
       fstperc = Math.abs(conts2[n][indirec - 1].ys[0] - advances2[n][timers[0].ind].sty[indirec - 1])
       secperc = Math.abs(conts2[n][indirec - 1].ysfinal[0] - advances2[n][timers[0].ind].sty[indirec - 1])
       finalperc = fstperc/secperc

           if (i == 3) {
               //console.log(indirec - 1,':', advances2[n][timers[0].ind].sty[indirec - 1], '=>',conts2[n][indirec - 1].ysfinal[0])
           //console.log(conts2[n][indirec - 1].ys[0])
           //console.log('has moved: ',fstperc)
           ////console.log('still remains: ',secperc)
           //console.log('final percento:',finalperc)
           }
   if (conts2[n][indirec - 1].running[0] == true && finalperc >= 0.5 && conts2[n][indirec].ys[0] == -100) {
           //if (i == 2 || i == 3) {
               //console.log('hey yyou',indirec,hiro,advances2[n][timers[0].ind].sty[indirec])
               y = 0
               
               conts2[n][indirec].ys[0] = advances2[n][timers[0].ind].sty[indirec]
               conts2[n][indirec].time[0] = hiro
               conts2[n][indirec].running[0] = true
               //console.log(indirec,':',conts2[n][indirec].running[0])
               if (i == contnumber/3 - 1) {
               //console.log('add timers2')
               
               if (fixo == false) {
                 addTimers(timers2,0,advances2[n][timers2[n][current].ind].amp[(contnumber/3)],direct[current],(contnumber/3))
               }else{
                   if (direct[current] == 'u') {
                       addTimers(timers2,0,advances2[n][timers2[n][current].ind].amp[(contnumber/3)],'d',(contnumber/3))
                   }else{
                       addTimers(timers2,0,advances2[n][timers2[n][current].ind].amp[(contnumber/3)],'u',(contnumber/3))
                   }
               }
                   //addTimers(timers2,0,advances2[n][timers2[n][current].ind].amp[20],'u',0)
               }
               
          // }
   }else if (conts2[n][indirec - 1].running[0] == true && finalperc >= 0.5) {//(((conts2[n][indirec - 1].ys[0])).toFixed(3) == ((conts2[n][indirec - 1].ysfinal[0])).toFixed(3)){
       if (i == 3) {
       //console.log('pode atualizar',conts2[n][23].time[0],y)
       }
      // console.log('sim')
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
               if (conts2[n]2[0] != undefined) {
                   if (conts2[n]2[0][(contnumber/3 + 1)].yx != undefined) {
               //document.getElementById('t').innerText = conts2[n]2[0][(indirec)].yx
                   }
               }
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
   
  if (i > 0 && i < (contnumber/3)*2) {    
       if (i == 1){ //(i > 0 && i < contnumber/3) {//(i == 4 || i == 3 || i == 2) {
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
                //conts2[n][indirec].running[current] = true
                //console.log('ADD NOW')
               }//else{
               // conts2[n][indirec].time[current] = 0
              //}
              conts2[n][indirec].go[current - 1] = true
              conts2[n][indirec].running[current] = true
              //conts2[n][indirec].running[current] = true
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
}}else if (current > 0){
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
       if (conts2[n][indirec - 1].ys[current] != -100) { //conts2[n][indirec - 1].ys[current] != undefined && conts2[n][indirec - 1].ys[current] != -100 && conts2[n][indirec - 1].ysfinal[current] != undefined) {
       fstperc = Math.abs(conts2[n][indirec - 1].ys[current] - advances2[n][timers2[n][current].ind].sty[indirec - 1])
       secperc = Math.abs(conts2[n][indirec - 1].ysfinal[current] - advances2[n][timers2[n][current].ind].sty[indirec - 1])
       finalperc = fstperc/secperc
       }else{
           finalperc = 0
       }

       if (i == 19 && conts2[n][38].running[current] == true && current == 1 && conts2[n][38].ys[current] != -100) {
       //console.log(current, conts2[n][indirec - 1].running[current])
       //console.log(indirec - 1,':', advances2[n][timers2[n][current].ind].sty[indirec - 1], '=>',conts2[n][indirec - 1].ysfinal[current])
       //console.log(conts2[n][indirec - 1].ys[current])
       //console.log('has moved: ',fstperc)
       //console.log('still remains: ',secperc)
       //console.log('final percento:',current,finalperc)
       }
       if (i == 4 && (conts2[n][indirec - 1].ys[current]).toFixed(3) == (conts2[n][indirec - 1].ysfinal[current]).toFixed(3)) { // conts2[n][indirec - 1].running[current] == true && finalperc == 1 && current == 2) { 
           //conts2[n][22].running[current] != undefined
           /*
           console.log(current, conts2[n][22].running[current])
           console.log(indirec - 1,':', advances2[n][timers2[n][current].ind].sty[indirec - 1], '=>',conts2[n][indirec - 1].ysfinal[current])
           console.log(conts2[n][indirec - 1].ys[current])
           console.log('has moved: ',fstperc)
           console.log('still remains: ',secperc)
           console.log('final percento:',finalperc)
           */
           //if (Math.round(finalperc) == 1) {
              //console.log(current,'euhduehdedhed')
           //}
       }
       if (i == 2) {
           //console.log('running',current,conts2[n][indirec - 1].running[current])
       }
       if (i > 2) {
           wi = conts2[n][indirec - 1].running[current] == true && finalperc > 0.5
       //wi == (conts2[n][indirec - 1].ys[current]).toFixed(3) == (conts2[n][indirec - 1].ysfinal[current]).toFixed(3)
       }else{
           wi = true
       }
       if (add == true && wi == true) {// && (conts2[n][indirec - 1].ys[current]).toFixed(3) == (conts2[n][indirec - 1].ysfinal[current]).toFixed(3)){ //conts2[n][indirec - 1].running[current] == true && finalperc >= 0.5) { //Math.round(finalperc) == 1){//&& (conts2[n][indirec - 1].ys[current]).toFixed(3) == (conts2[n][indirec - 1].ysfinal[current]).toFixed(3)) {//&& (conts2[n][indirec - 1].ys[current]).toFixed(3) == (conts2[n][indirec - 1].ysfinal[current]).toFixed(3)) {//conts2[n][indirec].time[current] != conts2[n][indirec].start[current - 1].time && conts2[n][indirec - 1].ys[current] == conts2[n][indirec - 1].ysfinal[current]){
          if (i == 19) {
           //console.log('wi',wi,finalperc)
          }
           if (conts2[n][indirec].go[current - 1] != true) {
               if (i == 19) {
               //console.log('what',conts2[n][indirec].go[current - 1] != true)
               }
           if (conts2[n][indirec].go[current - 1] == false) {
            conts2[n][indirec].time[current] = hiro //conts2[n][24].start[current - 1].time
            
            //console.log('ADD NOW')
            if (i == contnumber/3 - 1) {
               //console.log('add timers2')
               
               if (fixo == false) {
                   addTimers(timers2,0,advances2[n][timers2[n][current].ind].amp[(contnumber/3)],direct[current],(contnumber/3))
                 }else{
                     if (direct[current] == 'u') {
                         addTimers(timers2,0,advances2[n][timers2[n][current].ind].amp[(contnumber/3)],'d',(contnumber/3))
                     }else{
                         addTimers(timers2,0,advances2[n][timers2[n][current].ind].amp[(contnumber/3)],'u',(contnumber/3))
                     }
                 }

                 //addTimers(timers2,0,advances2[n][timers2[n][current].ind].amp[20],'u',0)
            }
           }//else{
           // conts2[n][indirec].time[current] = 0
          //}
          conts2[n][indirec].go[current - 1] = true
          if (i == 19) {
           //console.log('hey',current - 1,conts2[n][indirec].go[current - 1])
          }
          conts2[n][indirec].running[current] = true
           //conts2[n][24].ys[current] = -100
           //document.getElementById('t2').innerText = `fazer a ${Number(current)} onda`
           //console.log(conts2[n][24].ys[current], i)
       }
           //window.alert('ADD NOW')
       }else if(wi == false){ //conts2[n][indirec - 1].ys[current] != conts2[n][indirec - 1].ysfinal[current]){
           conts2[n][indirec].go[current - 1] = false
           if (current == 1 && i == 19) {
           //console.log('wi',wi,finalperc)
           }
       }
   }
}