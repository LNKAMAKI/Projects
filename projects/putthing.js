function load() {
sortcol_2 = []
letras = ['a','b','c']
n = 8
for (v = 0; v < n; v++) {
    //sortcol_2.push({dist:Number((Math.random()*1 + 1).toFixed(2)),dist2:Math.random()*3 + 1})
    sortcol_2.push({dist:Number((Math.random()*1 + 1).toFixed(2))})
    fst = Math.round(Math.random()*(n - 1))
    snd = Math.round(Math.random()*(n - 1))
    //while (fst == snd) {
        //snd = Math.round(Math.random()*(n - 1))
    //}
    console.log(fst)
}
//sortcol_2 = [{dist:1.99},{dist:1.01},{dist:1.58},{dist:1.24}]
console.log(sortcol_2)
console.log('pegar o maior')
for (lo in sortcol_2) {
    console.log('---------',lo,'---------')
    console.log(sortcol_2[lo].dist2)
    console.log('ver os outros')
    ob = sortcol_2[lo]
    stop = false
    for (li = 0; li < lo && stop == false; li++) {
        if (li != lo) {
            if (sortcol_2[li].co1 == sortcol_2[lo].co2) {
                console.log(sortcol_2[li].co1,'é igual a',sortcol_2[lo].co2)
                anel = sortcol_2[li].dist
            }else if(sortcol_2[li].co2 == sortcol_2[lo].co2) {
                console.log(sortcol_2[li].co2,'é igual a',sortcol_2[lo].co2)
                anel = sortcol_2[li].dist2
            }
        console.log(li,':', anel)
        if (sortcol_2[li].co1 == sortcol_2[lo].co2 || sortcol_2[li].co2 == sortcol_2[lo].co2) {
            if (sig == '>') {
        if (sortcol_2[lo].dist2 > anel) {
            stop = true
            console.log(sortcol_2[lo].dist2,'é maior que',anel)
            console.log('refazer a parada')
            //começar do lo e ir até li
            for (k = lo; k > li; k--) {
                console.log(k,':',sortcol_2[k].dist)
                console.log('o próximo é:',sortcol_2[k - 1].dist,ob)
                sortcol_2[k] = sortcol_2[k - 1]
            }
            sortcol_2[li] = ob
            for (lor in sortcol_2) {
                console.log(sortcol_2[lor])
            }
        }else{
            console.log(sortcol_2[lo].dist2,'não é maior que',anel)
        }
        }else{
            if (sortcol_2[lo].dist2 < anel) {
            stop = true
            console.log(sortcol_2[lo].dist2,'é menor que',anel)
            console.log('refazer a parada')
            //começar do lo e ir até li
            for (k = lo; k > li; k--) {
                console.log(k,':',sortcol_2[k].dist)
                console.log('o próximo é:',sortcol_2[k - 1].dist,ob)
                sortcol_2[k] = sortcol_2[k - 1]
            }
            sortcol_2[li] = ob
            for (lor in sortcol_2) {
                console.log(sortcol_2[lor])
            }
        }else{
            console.log(sortcol_2[lo].dist2,'não é menor que',anel)
        }
        }
    }
    }
    }
 
}
}


if (pokebolas[number].vely > 0) {
    if (pokebolas[number].vely >= 0.1) {
    pokebolas[number].vely -= 0.1
    }else{
    pokebolas[number].vely = 0
    }
    }else{
        if (pokebolas[number].vely <= 0.1) {
            pokebolas[number].vely += 0.1
            }else{
            pokebolas[number].vely = 0
            }
    }