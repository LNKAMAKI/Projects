if (pokebolas[number].x + pokebolas[number].velx <= 300 - radius && pokebolas[number].x + pokebolas[number].velx >= radius) {
    pokebolas[number].x+=pokebolas[number].velx
    }else if (pokebolas[number].x + pokebolas[number].velx > 300 - radius){
    pokebolas[number].x = 300 - radius
    pokebolas[number].velx = -pokebolas[number].velx
        //console.log(`no puedes andar, ${pokebolas[number].color}`)
    }else{
        pokebolas[number].x = radius
        pokebolas[number].velx = -pokebolas[number].velx
    }