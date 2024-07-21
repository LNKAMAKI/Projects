tcor1 = [true,true]
if (pokebolas[sortcol[p].pokeb1].x + pokebolas[sortcol[p].pokeb1].velx < radius && pokebolas[sortcol[p].pokeb1].x < pokebolas[sortcol[p].pokeb2].x || pokebolas[sortcol[p].pokeb1].x + pokebolas[sortcol[p].pokeb1].velx > (300 - comp)/2 + comp - radius && pokebolas[sortcol[p].pokeb1].x > pokebolas[sortcol[p].pokeb2].x) {
    console.log('NÃO PODE CONTINUAR',pokebolas[sortcol[p].pokeb1].color)
    //loop = false
    tcor1[0] = false
    if (pokebolas[sortcol[p].pokeb1].x + pokebolas[sortcol[p].pokeb1].velx < radius && pokebolas[sortcol[p].pokeb1].x < pokebolas[sortcol[p].pokeb2].x) {
    fix1x = radius
    }else{
    fix1x = (300 - comp)/2 + comp - radius 
    }
}else{
    tcor1[0] = true
}

if (pokebolas[sortcol[p].pokeb1].y + pokebolas[sortcol[p].pokeb1].vely < radius && pokebolas[sortcol[p].pokeb1].y < pokebolas[sortcol[p].pokeb2].y || pokebolas[sortcol[p].pokeb1].y + pokebolas[sortcol[p].pokeb1].vely > (150 - alt)/2 + alt - radius && pokebolas[sortcol[p].pokeb1].y > pokebolas[sortcol[p].pokeb2].y) {
    console.log('NÃO PODE CONTINUAR',pokebolas[sortcol[p].pokeb1].color)
    tcor1[1] = false
    if (pokebolas[sortcol[p].pokeb1].y + pokebolas[sortcol[p].pokeb1].vely < radius && pokebolas[sortcol[p].pokeb1].y < pokebolas[sortcol[p].pokeb2].y) {
        fix1y = radius
        }else{
            fix1y = (150 - alt)/2 + alt - radius 
        }
}else{
    tcor1[1] = true
}

tcor2 = [true,true]
if (pokebolas[sortcol[p].pokeb2].x + pokebolas[sortcol[p].pokeb2].velx < radius && pokebolas[sortcol[p].pokeb2].x < pokebolas[sortcol[p].pokeb1].x || pokebolas[sortcol[p].pokeb2].x + pokebolas[sortcol[p].pokeb2].velx > (300 - comp)/2 + comp - radius && pokebolas[sortcol[p].pokeb2].x > pokebolas[sortcol[p].pokeb1].x) {
    console.log('NÃO PODE CONTINUAR',pokebolas[sortcol[p].pokeb2].color)
    tcor2[0] = false
    if (pokebolas[sortcol[p].pokeb2].x + pokebolas[sortcol[p].pokeb2].velx < radius && pokebolas[sortcol[p].pokeb2].x < pokebolas[sortcol[p].pokeb1].x) {
    fix2x = radius
    }else{
        loop = false
        fix2x = (300 - comp)/2 + comp - radius 
    }
  
}else{
    tcor2[0] = true
}

if (pokebolas[sortcol[p].pokeb2].y + pokebolas[sortcol[p].pokeb2].vely < radius && pokebolas[sortcol[p].pokeb2].y < pokebolas[sortcol[p].pokeb1].y || pokebolas[sortcol[p].pokeb2].y + pokebolas[sortcol[p].pokeb2].vely > (150 - alt)/2 + alt - radius && pokebolas[sortcol[p].pokeb2].y > pokebolas[sortcol[p].pokeb1].y) {
    console.log('NÃO PODE CONTINUAR',pokebolas[sortcol[p].pokeb2].color)
    tcor2[1] = false
    if (pokebolas[sortcol[p].pokeb2].y + pokebolas[sortcol[p].pokeb2].vely < radius && pokebolas[sortcol[p].pokeb2].y < pokebolas[sortcol[p].pokeb1].y) {
        fix2y = radius
        }else{
            fix2y = (150 - alt)/2 + alt - radius 
        }
   
}else{
    tcor2[1] = true
}