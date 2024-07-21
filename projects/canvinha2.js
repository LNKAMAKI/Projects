tcor1 = [true,true]
if (pokebolas[p].x + pokebolas[p].velx < radius && pokebolas[p].x < pokebolas[pi].x || pokebolas[p].x + pokebolas[p].velx > comp - radius && pokebolas[p].x > pokebolas[pi].x) {
    console.log('NÃO PODE CONTINUAR',pokebolas[p].color)
    //loop = false
    tcor1[0] = false
    if (pokebolas[p].x + pokebolas[p].velx < radius && pokebolas[p].x < pokebolas[pi].x) {
    fix1x = radius
    }else{
    fix1x = comp - radius 
    }
}else{
    tcor1[0] = true
}

if (pokebolas[p].y + pokebolas[p].vely < radius && pokebolas[p].y < pokebolas[pi].y || pokebolas[p].y + pokebolas[p].vely > alt - radius && pokebolas[p].y > pokebolas[pi].y) {
    console.log('NÃO PODE CONTINUAR',pokebolas[p].color)
    tcor1[1] = false
    if (pokebolas[p].y + pokebolas[p].vely < radius && pokebolas[p].y < pokebolas[pi].y) {
        fix1y = radius
        }else{
            fix1y = alt - radius 
        }
}else{
    tcor1[1] = true
}

tcor2 = [true,true]
if (pokebolas[pi].x + pokebolas[pi].velx < radius && pokebolas[pi].x < pokebolas[p].x || pokebolas[pi].x + pokebolas[pi].velx > comp - radius && pokebolas[pi].x > pokebolas[p].x) {
    console.log('NÃO PODE CONTINUAR',pokebolas[pi].color)
    tcor2[0] = false
    if (pokebolas[pi].x + pokebolas[pi].velx < radius && pokebolas[pi].x < pokebolas[p].x) {
    fix2x = radius
    }else{
        //loop = false
        fix2x = comp - radius 
    }
  
}else{
    tcor2[0] = true
}

if (pokebolas[pi].y + pokebolas[pi].vely < radius && pokebolas[pi].y < pokebolas[p].y || pokebolas[pi].y + pokebolas[pi].vely > alt - radius && pokebolas[pi].y > pokebolas[p].y) {
    console.log('NÃO PODE CONTINUAR',pokebolas[pi].color)
    tcor2[1] = false
    if (pokebolas[pi].y + pokebolas[pi].vely < radius && pokebolas[pi].y < pokebolas[p].y) {
        fix2y = radius
        }else{
            fix2y = alt - radius 
        }
   
}else{
    tcor2[1] = true
}


        tcor1 = [true,true]
        if (pokebolas[sortcol[p].pokeb1].x + pokebolas[sortcol[p].pokeb1].velx < radius && pokebolas[sortcol[p].pokeb1].x < pokebolas[sortcol[p].pokeb2].x || pokebolas[sortcol[p].pokeb1].x + pokebolas[sortcol[p].pokeb1].velx > comp - radius && pokebolas[sortcol[p].pokeb1].x > pokebolas[sortcol[p].pokeb2].x) {
            console.log('NÃO PODE CONTINUAR',pokebolas[sortcol[p].pokeb1].color)
            //loop = false
            tcor1[0] = false
            if (pokebolas[sortcol[p].pokeb1].x + pokebolas[sortcol[p].pokeb1].velx < radius && pokebolas[sortcol[p].pokeb1].x < pokebolas[sortcol[p].pokeb2].x) {
            fix1x = radius
            }else{
            fix1x = comp - radius 
            }
        }else{
            tcor1[0] = true
        }
        
        if (pokebolas[sortcol[p].pokeb1].y + pokebolas[sortcol[p].pokeb1].vely < radius && pokebolas[sortcol[p].pokeb1].y < pokebolas[sortcol[p].pokeb2].y || pokebolas[sortcol[p].pokeb1].y + pokebolas[sortcol[p].pokeb1].vely > alt - radius && pokebolas[sortcol[p].pokeb1].y > pokebolas[sortcol[p].pokeb2].y) {
            console.log('NÃO PODE CONTINUAR',pokebolas[sortcol[p].pokeb1].color)
            tcor1[1] = false
            if (pokebolas[sortcol[p].pokeb1].y + pokebolas[sortcol[p].pokeb1].vely < radius && pokebolas[sortcol[p].pokeb1].y < pokebolas[sortcol[p].pokeb2].y) {
                fix1y = radius
                }else{
                    fix1y = alt - radius 
                }
        }else{
            tcor1[1] = true
        }
        
        tcor2 = [true,true]
        if (pokebolas[sortcol[p].pokeb2].x + pokebolas[sortcol[p].pokeb2].velx < radius && pokebolas[sortcol[p].pokeb2].x < pokebolas[sortcol[p].pokeb1].x || pokebolas[sortcol[p].pokeb2].x + pokebolas[sortcol[p].pokeb2].velx > comp - radius && pokebolas[sortcol[p].pokeb2].x > pokebolas[sortcol[p].pokeb1].x) {
            console.log('NÃO PODE CONTINUAR',pokebolas[sortcol[p].pokeb2].color)
            tcor2[0] = false
            if (pokebolas[sortcol[p].pokeb2].x + pokebolas[sortcol[p].pokeb2].velx < radius && pokebolas[sortcol[p].pokeb2].x < pokebolas[sortcol[p].pokeb1].x) {
            fix2x = radius
            }else{
                loop = false
                fix2x = comp - radius 
            }
          
        }else{
            tcor2[0] = true
        }
        
        if (pokebolas[sortcol[p].pokeb2].y + pokebolas[sortcol[p].pokeb2].vely < radius && pokebolas[sortcol[p].pokeb2].y < pokebolas[sortcol[p].pokeb1].y || pokebolas[sortcol[p].pokeb2].y + pokebolas[sortcol[p].pokeb2].vely > alt - radius && pokebolas[sortcol[p].pokeb2].y > pokebolas[sortcol[p].pokeb1].y) {
            console.log('NÃO PODE CONTINUAR',pokebolas[sortcol[p].pokeb2].color)
            tcor2[1] = false
            if (pokebolas[sortcol[p].pokeb2].y + pokebolas[sortcol[p].pokeb2].vely < radius && pokebolas[sortcol[p].pokeb2].y < pokebolas[sortcol[p].pokeb1].y) {
                fix2y = radius
                }else{
                    fix2y = alt - radius 
                }
           
        }else{
            tcor2[1] = true
        }