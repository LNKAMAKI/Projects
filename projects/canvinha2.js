if (pokebolas[sortcol[p].pokeb2].stat == true) {
    if (pokebolas[sortcol[p].pokeb2].x + pokebolas[sortcol[p].pokeb2].velx < radius && pokebolas[sortcol[p].pokeb2].x < pokebolas[sortcol[p].pokeb1].x || pokebolas[sortcol[p].pokeb2].x + pokebolas[sortcol[p].pokeb2].velx > 300 - radius && pokebolas[sortcol[p].pokeb2].x > pokebolas[sortcol[p].pokeb1].x) {
        console.log('NÃO PODE CONTINUAR',pokebolas[sortcol[p].pokeb2].color)
        tcor2[0] = false
    }else{
        tcor2[0] = true
    }
    
    if (pokebolas[sortcol[p].pokeb2].y + pokebolas[sortcol[p].pokeb2].vely < radius && pokebolas[sortcol[p].pokeb2].y < pokebolas[sortcol[p].pokeb1].y || pokebolas[sortcol[p].pokeb2].y + pokebolas[sortcol[p].pokeb2].vely > 150 - radius && pokebolas[sortcol[p].pokeb2].y > pokebolas[sortcol[p].pokeb1].y) {
        console.log('NÃO PODE CONTINUAR',pokebolas[sortcol[p].pokeb2].color)
        tcor2[1] = false
    }else{
        tcor2[1] = true
    }
}else{
    tcor2[0] = false
    tcoe2[1] = false
}