if (pokebolas[number].vely > 0) {
    if (pokebolas[number].vely > 0.1) {
    pokebolas[number].vely -= 0.1
    }else{
        console.log('ZERO')
    pokebolas[number].vely = 0
    }
    }else if (pokebolas[number].vely != 0){
        if (pokebolas[number].vely < 0.1) {
            pokebolas[number].vely += 0.1
            }else{
                console.log('ZERO')
            pokebolas[number].vely = 0
            }
    }