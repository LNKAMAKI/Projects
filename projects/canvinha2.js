if (pokebolas[number].r === '' || pokebolas[number].r == undefined) {
   
    hipo = (pokebolas[number].velx**2 + pokebolas[number].vely**2)**(1/2)
    sena = Math.abs(pokebolas[number].vely/hipo)
    cosa = Math.abs(pokebolas[number].velx/hipo)

    
    if (pokebolas[number].velx > 0) {
    if (pokebolas[number].velx > 0.015*cosa) {
    pokebolas[number].velx -= 0.015*cosa
    }else{
        //console.log('ZERO')
    pokebolas[number].velx = 0
    }
    }else if (pokebolas[number].velx != 0){
        if (pokebolas[number].velx < 0.015*cosa) {
            pokebolas[number].velx += 0.015*cosa
            }else{
                //console.log('ZERO')
            pokebolas[number].velx = 0
            }
    }

    
    if (pokebolas[number].vely > 0) {
        if (pokebolas[number].vely > 0.015*sena) {
        pokebolas[number].vely -= 0.015*sena
        }else{
            //console.log('ZERO')
        pokebolas[number].vely = 0
        }
        }else if (pokebolas[number].vely != 0){
            if (pokebolas[number].vely < 0.015*sena) {
                pokebolas[number].vely += 0.015*sena
                }else{
                    //console.log('ZERO')
                pokebolas[number].vely = 0
                }
        }
        
    
    //pokebolas[number].x+=pokebolas[number].velx
    console.log(pokebolas[number].color)
    console.log('x:',pokebolas[number].x,'velx:',pokebolas[number].velx)
    console.log('y:',pokebolas[number].y,'vely:',pokebolas[number].vely)
    console.log('newx:',pokebolas[number].x + pokebolas[number].velx)
    console.log('newy:',pokebolas[number].y + pokebolas[number].vely)

    if (pokebolas[number].y + pokebolas[number].vely <= (150 - alt)/2 + alt - radius && pokebolas[number].y + pokebolas[number].vely >= (150 - alt)/2 + radius) {
    pokebolas[number].y+=pokebolas[number].vely
    }else if (pokebolas[number].y + pokebolas[number].vely > (150 - alt)/2 + alt - radius){
    pokebolas[number].y = (150 - alt)/2 + alt - radius
    pokebolas[number].vely = -pokebolas[number].vely
    console.log(pokebolas[number].color,'change NO HEART IS TAKEN -----14932482943849248888(((((((()******* vely to 150 - radius')
        //console.log(`no puedes andar, ${pokebolas[number].color}`)
    }else{
        pokebolas[number].y = (150 - alt)/2 + radius
        pokebolas[number].vely = -pokebolas[number].vely
        console.log(pokebolas[number].color,'change NO HEART IS TAKEN -----14932482943849248888(((((((()******* vely to radius')
    }

    if (pokebolas[number].x + pokebolas[number].velx <= (300 - comp)/2 + comp - radius && pokebolas[number].x + pokebolas[number].velx >= (300 - comp)/2 + radius) {
        pokebolas[number].x+=pokebolas[number].velx
        }else if (pokebolas[number].x + pokebolas[number].velx > (300 - comp)/2 + comp - radius){
        pokebolas[number].x = (300 - comp)/2 + comp - radius
        pokebolas[number].velx = -pokebolas[number].velx
        console.log(pokebolas[number].color,'change NO HEART IS TAKEN -----14932482943849248888(((((((()******* velx to 300 - radius')
            //console.log(`no puedes andar, ${pokebolas[number].color}`)
        }else{
            pokebolas[number].x = (300 - comp)/2 + radius
            pokebolas[number].velx = -pokebolas[number].velx
            console.log(pokebolas[number].color,'change NO HEART IS TAKEN -----14932482943849248888(((((((()******* velx to radius')
        }

}else{
    if (pokebolas[number].x > (300 - comp)/2 + comp - radius || pokebolas[number].x < (300 - comp)/2 + radius || pokebolas[number].y > (150 - alt)/2 + alt - radius || pokebolas[number].y < (150 - alt)/2 + radius) {
        loop = false
        window.alert('ULTRAPASSOU')
        pokebolas[number].velx = 0
       pokebolas[number].vely = 0
    }
}

if (Math.random() < 0.5) {
    if (pky < 3) {
pky += 2
    }else{
        pky -= 2
    }
}else{
    if (pky > 0) {
        pky -= 2
            }else{
                pky += 2
            }
        }
        if (raizreal != sumper2) {
            console.log(pokebolas[b].color,'irá ficar com velocidade',raizreal)
            if (raizreal > 0) {
                console.log(dirbhor,dirbver)
            }else if(raizreal < 0) {
                if (dirbhor == 'right') {
                    console.log('left')
                    dirbhor = 'left'
                }else if (dirbhor == 'left'){
                    console.log('right')
                    dirbhor = 'right'
                }
                if (dirbver == 'up') {
                    console.log('down')
                    dirbver = 'down'
                }else if (dirbver == 'down'){
                    console.log('up')
                    dirbver = 'up'
                }
            }
            velbx = 0
            velby = 0
            if (dirbhor == 'right') {
                velbx = Math.abs(raizreal*senx)
            }else if(dirbhor == 'left') {
                velbx = Math.abs(raizreal*senx)*-1
            }
            if (dirbver == 'down') {
                velby = Math.abs(raizreal*senx)
            }else if(dirbver == 'up') {
                velby = Math.abs(raizreal*senx)*-1
            }
            console.log('horizontal:',velbx)
            console.log('vertical:',velby)

            pokebolas[b].velx = sumparhor2 + velbx
            pokebolas[b].vely = (sumparver2 + velby)*-1

            pokebolas[b].color,'irá ficar com velocidade'
            console.log(`${pokebolas[a].color} irá ficar com velocidade`,(Math.abs(pokebolas[a].m*sumper1) + Math.abs(pokebolas[b].m*sumper2) - pokebolas[b].m*raizreal)/pokebolas[a].m)

            raiza = (Math.abs(pokebolas[a].m*sumper1) + Math.abs(pokebolas[b].m*sumper2) - pokebolas[b].m*raizreal)/pokebolas[a].m
            if (raiza > 0) {
                console.log(dirahor,diraver)
            }else if(raiza < 0) {
                if (dirahor == 'right') {
                    console.log('left')
                    dirahor = 'left'
                }else if (dirahor == 'left'){
                    console.log('right')
                    dirahor = 'right'
                }
                if (diraver == 'up') {
                    console.log('down')
                    diraver = 'down'
                }else if (diraver == 'down'){
                    console.log('up')
                    diraver = 'up'
                }
            }
            velax = 0
            velay = 0
            if (dirahor == 'right') {
                velax = Math.abs(raiza*senx)
            }else if(dirahor == 'left') {
                velax = Math.abs(raiza*senx)*-1
            }
            if (diraver == 'down') {
                velay = Math.abs(raiza*senx)
            }else if(diraver == 'up') {
                velay = Math.abs(raiza*senx)*-1
            }

            console.log('horizontal:',velax)
            console.log('vertical:',velay)

            pokebolas[a].velx = sumparhor1 + velax
            pokebolas[a].vely = (sumparver1 + velay)*-1
        }


        for (i = 0; i < contnumber;i++) {
        
            canmove = true
            
            if (timer - x*0.1 >= 0) {
                if (type == 'pulse') {
                if (amplitude -i*at*amplitude*0.03 >= 0 && Math.sin(0 - 0.4*(timer - x*0.1)) <= 0) {
                y = starty + (amplitude -i*at*amplitude*0.03)*Math.sin(0 - 0.4*(timer - x*0.1))
                }else if(Math.sin(0 - 0.4*(timer - x*0.1)) >= 0 && conts[i].move == true){
                    y = starty
                    conts[i].move = false
                }
            }else{
                if (amplitude -i*at*amplitude*0.03 >= 0) {
                    y = starty + (amplitude -i*at*amplitude*0.03)*Math.sin(0 - 0.4*(timer - x*0.1))
                    }else{
                        y = starty
                        conts[i].move = false
                    }
            }
            }else{
                y = starty
            }
    
            if (conts[i].move == false && type == 'pulse') {
                y = starty
            }
           
            conts[i].y = y - starty
            c.beginPath()
            //c.arc(x + radius + space,y,radius,0,2*Math.PI)
            c.fillStyle = 'red'
            c.fill()
            c.strokeStyle = 'black'
            c.stroke()
            c.beginPath()
            //c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
            c.fillStyle = 'white'
            c.fill()
            x+= 2*radius
            }
        
    
    
            x = 0
            lastx = space + 2*radius*(contnumber)
            for (i = 0; i < contnumber;i++) {
                if (timer - x*0.1 >= 0) {
                if (type == 'pulse') {
                    if (amplitude -i*at*amplitude*0.03 >= 0 && Math.sin(0 - 0.4*(timer - x*0.1)) <= 0) {
                        if (fixo == false) {
                            y = starty + (amplitude -i*at*amplitude*0.03)*Math.sin(0 - 0.4*(timer - x*0.1))
                        }else{
                            y = starty - (amplitude -i*at*amplitude*0.03)*Math.sin(0 - 0.4*(timer - x*0.1))
                        }
                    }else if(Math.sin(0 - 0.4*(timer - x*0.1)) >= 0){
                        y = starty
                        conts2[i].move = false
                    }
                }else{
                    if (amplitude -i*at*amplitude*0.03 >= 0) {
                        if (fixo == false) {
                            y = starty + (amplitude -i*at*amplitude*0.03)*Math.sin(0 - 0.4*(timer - x*0.1))
                        }else{
                            y = starty - (amplitude -i*at*amplitude*0.03)*Math.sin(0 - 0.4*(timer - x*0.1))
                        }
                        }else{
                            y = starty
                            conts2[i].move = false
                        }
                }
                }else{
                    y = starty
                }
    
                if (conts2[i].move == false && type == 'pulse') {
                    y = starty
                    }
    
                conts2[contnumber - 1 - i].y = y - starty
                
                
                c.beginPath()
                //c.arc(lastx - x - radius,y,radius,0,2*Math.PI)
                c.fillStyle = 'blue'
                c.fill()
                c.strokeStyle = 'black'
                c.stroke()
                c.beginPath()
                //c.arc(300 - x - radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
                c.fillStyle = 'white'
                c.fill()
                x+= 2*radius
                }