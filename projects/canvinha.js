//pokebola 2
console.log('pokebola 1')
console.log(`bola ${b}: vx:${vx2}, vy:${vy2}`)
vperx2 = vx2*senx // decomposição de vx2 na direção perpendicular(vel relativa)
vparx2 = vx2*cosx // decomposição de vx2 na direção paralela(vel conservativa)
vpery2 = vy2*cosx // decomposição de vy2 na direção perpendicular(vel relativa)
vpary2 = vy2*senx // decomposição de vy2 na direção paralela(vel conservativa)
vperx2hor = vperx2*senx
vperx2ver = vperx2*cosx
vparx2hor = vparx2*cosx
vparx2ver = vparx2*senx
vpery2hor = vpery2*senx
vpery2ver = vpery2*cosx
vpary2hor = vpary2*cosx
vpary2ver = vpary2*senx

if (vx2 > 0) {
    if (leftball == b && downball == b || rightball == b && upball == b) {
    // decomposição de velperx2 = pra cima e pra direita
    if (vperx2ver < 0) {
        vperx2ver = -vperx2ver
    }
    if (vperx2hor < 0) {
        vperx2hor = -vperx2hor
    }
    // decomposição de velparx2 = pra baixo e pra direita
    if (vparx2ver > 0) {
        vparx2ver = -vparx2ver
    }
    if (vparx2hor < 0) {
        vparx2hor = -vparx2hor
    }
    }else{
    // decomposição de velperx2 = pra baixo e pra direita
    if (vperx2ver > 0) {
        vperx2ver = -vperx2ver
    }
    if (vperx2hor < 0) {
        vperx2hor = -vperx2hor
    }
    // decomposição de velparx2 = pra cima e pra direita
    if (vparx2ver < 0) {
        vparx2ver = -vparx2ver
    }
    if (vparx2hor < 0) {
        vparx2hor = -vparx2hor
    }
    }
}else{
    if (leftball == b && downball == b || rightball == b && upball == b) {
        // decomposição de velperx2 = pra baixo e pra esquerda
        if (vperx2ver > 0) {
            vperx2ver = -vperx2ver
        }
        if (vperx2hor > 0) {
            vperx2hor = -vperx2hor
        }
        // decomposição de velparx2 = pra cima e pra esquerda
        if (vparx2ver < 0) {
            vparx2ver = -vparx2ver
        }
        if (vparx2hor > 0) {
            vparx2hor = -vparx2hor
        }
    }else{
    // decomposição de velperx2 = pra cima e pra esquerda
    if (vperx2ver < 0) {
        vperx2ver = -vperx2ver
    }
    if (vperx2hor > 0) {
        vperx2hor = -vperx2hor
    }
    // decomposição de velparx2 = pra baixo e pra esquerda
    if (vparx2ver > 0) {
        vparx2ver = -vparx2ver
    }
    if (vparx2hor > 0) {
        vparx2hor = -vparx2hor
    }
    }
}

if (downball == b) { 
    if (vy2 > 0) {
        if (leftball == b) { // bola de baixo para a esquerda com velx positiva
            // vely perpendicular positiva
            if (vpery2 < 0) {
                vpery2 = -vpery2
            }
            if (vpary2 > 0) {
                vpary2 = -vpary2
            }
            // decomposição de velpery2 = pra cima e pra direita
            if (vpery2ver < 0) {
                vpery2ver = -vpery2ver
            }
            if (vpery2hor < 0) {
                vpery2hor = -vpery2hor
            }
            //decomposição de velpary2 = pra cima e pra esquerda
            if (vpary2ver < 0) {
                vpary2ver = -vpary2ver
            }
            if (vpary2hor > 0) {
                vpary2hor = -vpary2hor
            }
        }else{ // bola de baixo para a direita com velx positiva
            // vely perpendicular negativa
            if (vpery2 > 0) {
                vpery2 = -vpery2
            }
            if (vpary2 < 0) {
                vpary2 = -vpary2
            }
            // decomposição de velpery2 = pra cima e pra esquerda
            if (vpery2ver < 0) {
                vpery2ver = -vpery2ver
            }
            if (vpery2hor > 0) {
                vpery2hor = -vpery2hor
            }
            //decomposição de velpary2 = pra cima e pra direita
            if (vpary2ver < 0) {
                vpary2ver = -vpary2ver
            }
            if (vpary2hor < 0) {
                vpary2hor = -vpary2hor
            }
        }
    }else{
        if (leftball == b) { // bola de baixo para a esquerda com velx negativa
            // vely perpendicular negativa
            if (vpery2 > 0) {
                vpery2 = -vpery2
            }
            if (vpary2 < 0) {
                vpary2 = -vpary2
            }
            // decomposição de velpery2 = pra baixo e pra esquerda
            if (vpery2ver > 0) {
                vpery2ver = -vpery2ver
            }
            if (vpery2hor > 0) {
                vpery2hor = -vpery2hor
            }
            //decomposição de velpary2 = pra baixo e pra direita
            if (vpary2ver > 0) {
                vpary2ver = -vpary2ver
            }
            if (vpary2hor < 0) {
                vpary2hor = -vpary2hor
            }
        }else{ // bola de baixo para a direita com velx negativa
            // vely perpendicular positiva
            if (vpery2 < 0) {
                vpery2 = -vpery2
            }
            if (vpary2 > 0) {
                vpary2 = -vpary2
            }
            // decomposição de velpery2 = pra baixo e pra direita
            if (vpery2ver > 0) {
                vpery2ver = -vpery2ver
            }
            if (vpery2hor < 0) {
                vpery2hor = -vpery2hor
            }
            //decomposição de velpary2 = pra baixo e pra esquerda
            if (vpary2ver > 0) {
                vpary2ver = -vpary2ver
            }
            if (vpary2hor > 0) {
                vpary2hor = -vpary2hor
            }
        }
    }
}else{
    if (vy2 > 0) {
        if (rightball == b) { // bola de cima para a direita com velx positiva
            // vely perpendicular positiva
            if (vpery2 < 0) {
                vpery2 = -vpery2
            }
            if (vpary2 > 0) {
                vpary2 = -vpary2
            }
            // decomposição de velpery2 = pra cima e pra direita
            if (vpery2ver < 0) {
                vpery2ver = -vpery2ver
            }
            if (vpery2hor < 0) {
                vpery2hor = -vpery2hor
            }
            //decomposição de velpary2 = pra cima e pra esquerda
            if (vpary2ver < 0) {
                vpary2ver = -vpary2ver
            }
            if (vpary2hor > 0) {
                vpary2hor = -vpary2hor
            }
        }else{ // bola de cima para a esquerda com velx positiva
            // vely perpendicular negativa
            if (vpery2 > 0) {
                vpery2 = -vpery2
            }
            if (vpary2 < 0) {
                vpary2 = -vpary2
            }
        }
        // decomposição de velpery2 = pra cima e pra esquerda
        if (vpery2ver < 0) {
            vpery2ver = -vpery2ver
        }
        if (vpery2hor > 0) {
            vpery2hor = -vpery2hor
        }
        //decomposição de velpary2 = pra cima e pra direita
        if (vpary2ver < 0) {
            vpary2ver = -vpary2ver
        }
        if (vpary2hor < 0) {
            vpary2hor = -vpary2hor
        }
    }else{
        if (rightball == b) { // bola de cima para a direita com velx negativa
            // vely perpendicular negativa
            if (vpery2 > 0) {
                vpery2 = -vpery2
            }
            if (vpary2 < 0) {
                vpary2 = -vpary2
            }
            // decomposição de velpery2 = pra baixo e pra esquerda
            if (vpery2ver > 0) {
                vpery2ver = -vpery2ver
            }
            if (vpery2hor > 0) {
                vpery2hor = -vpery2hor
            }
            //decomposição de velpary2 = pra baixo e pra direita
            if (vpary2ver > 0) {
                vpary2ver = -vpary2ver
            }
            if (vpary2hor < 0) {
                vpary2hor = -vpary2hor
            }
        }else{ // bola de cima para a esquerda com velx negativa
            // vely perpendicular positiva
            if (vpery2 < 0) {
                vpery2 = -vpery2
            }
            if (vpary2 > 0) {
                vpary2 = -vpary2
            }
            // decomposição de velpery2 = pra baixo e para direita
            if (vpery2ver > 0) {
                vpery2ver = -vpery2ver
            }
            if (vpery2hor < 0) {
                vpery2hor = -vpery2hor
            }
            //decomposição de velpary2 = pra baixo e pra esquerda
            if (vpary2ver > 0) {
                vpary2ver = -vpary2ver
            }
            if (vpary2hor > 0) {
                vpary2hor = -vpary2hor
            }
        }
    }
}
sumper2 = vperx2 + vpery2
sumpar2 = vparx2 + vpary2

console.log(`vperx2:${vperx2.toFixed(2)},vparx2:${vparx2.toFixed(2)}`)
console.log(`vpery2:${vpery2.toFixed(2)},vpary2:${vpary2.toFixed(2)}`)

console.log(`soma dos vetores na perpendicular: ${sumper2}`)
console.log(`soma dos vetores na paralela: ${sumpar2}`)
console.log('verificar:',sumper2**2 + sumpar2**2,vx2**2 + vy2**2)

console.log('vperx2hor(vperx2*senx):',vperx2hor,'vperx2ver(vperx2*cosx):',vperx2ver)
    console.log('vparx2hor(vparx2*cosx):',vparx2hor,'vparx2ver(vperx2*senx):',vparx2ver)
    console.log('vpery2hor(vpery2*senx):',vpery2hor,'vpery2ver(vpery2*cosx):',vpery2ver)
    console.log('vpary2hor(vpary2*cosx):',vpary2hor,'vpary2ver(vpary2*senx):',vpary2ver)
if (vperx2hor + vpery2hor > 0) {
    console.log('a resultante perpendicular está pra direita')
    dirbhor = 'right'
}else{
    console.log('a resultante perpendicular está pra esquerda')
    dirbhor = 'left'
}
if (vperx2ver + vpery2ver > 0) {
    console.log('a resultante perpendicular está pra cima')
    dirbver = 'up'
}else{
    console.log('a resultante perpendicular está pra baixo')
    dirbver = 'down'
}
console.log('soma(verificação)',vperx2hor + vparx2hor + vpery2hor + vpary2hor,vx2)
console.log('soma(verificação)',vperx2ver + vparx2ver + vpery2ver + vpary2ver,vy2)
console.log('verificar velocidade perpendicular',((vpery2hor + vperx2hor)**2 + (vpery2ver + vperx2ver)**2)**(1/2))
console.log('verificar velocidade paralela',((vpary2hor + vparx2hor)**2 + (vpary2ver + vparx2ver)**2)**(1/2))
