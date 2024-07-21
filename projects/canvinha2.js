if (pokebolas[pi].x + pokebolas[pi].velx < radius && pokebolas[pi].x < pokebolas[p].x || pokebolas[pi].x + pokebolas[pi].velx > 300 - radius && pokebolas[pi].x > pokebolas[p].x) {
    console.log('NÃO PODE CONTINUAR',pokebolas[pi].color)
    tcor2[0] = false
}else{
    tcor2[0] = true
}

if (pokebolas[pi].y + pokebolas[pi].vely < radius && pokebolas[pi].y < pokebolas[p].y || pokebolas[pi].y + pokebolas[pi].vely > 150 - radius && pokebolas[pi].y > pokebolas[p].y) {
    console.log('NÃO PODE CONTINUAR',pokebolas[pi].color)
    tcor2[1] = false
}else{
    tcor2[1] = true
}