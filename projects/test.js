if (pokebolas[p].y != result.y1) {
    console.log(pokebolas[p].y,'diferente de',result.y1)

    console.log('which.dist',which.dist)
    if (result.dist2 == '>') {
        console.log(result.y1,'precisa ser maior que',which.dist)
if (which.dist == '' || result.y1 > which.dist) {
    console.log(result.y1,'é maior que',which.dist)
    which.dist = result.y1
    which.dist2 = result.y2
    which.pokeb1 = p
    which.pokeb2 = pi
    which.co1 = pokebolas[p].color
    which.co2 = pokebolas[pi].color
}
}else{
console.log(result.y1,'precisa ser menor que',which.dist)
if (which.dist == '' || result.y1 < which.dist) {
console.log(result.y1,'é menor que',which.dist)
which.dist = result.y1
which.dist2 = result.y2
which.pokeb1 = p
which.pokeb2 = pi
which.co1 = pokebolas[p].color
which.co2 = pokebolas[pi].color
}
}
}