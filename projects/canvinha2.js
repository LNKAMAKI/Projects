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

if (raiz2a > 0) {
    console.log(dirahor,diraver)
}else if(raiz2a < 0) {
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
    velax = Math.abs(raiz2a*senx)
}else if(dirahor == 'left') {
    velax = Math.abs(raiz2a*senx)*-1
}
if (diraver == 'down') {
    velay = Math.abs(raiz2a*senx)
}else if(diraver == 'up') {
    velay = Math.abs(raiz2a*senx)*-1
}