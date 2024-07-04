function load() {
sort = []
letras = ['a','b','c']
n = 8
for (v = 0; v < n; v++) {
    //sort.push({dist:Number((Math.random()*1 + 1).toFixed(2)),dist2:Math.random()*3 + 1})
    sort.push({dist:Number((Math.random()*1 + 1).toFixed(2))})
    fst = Math.round(Math.random()*(n - 1))
    snd = Math.round(Math.random()*(n - 1))
    //while (fst == snd) {
        //snd = Math.round(Math.random()*(n - 1))
    //}
    console.log(fst)
}
//sort = [{dist:1.99},{dist:1.01},{dist:1.58},{dist:1.24}]
console.log(sort)
console.log('pegar o maior')
for (p in sort) {
    console.log('---------',p,'---------')
    console.log(sort[p].dist)
    console.log('ver os outros')
    ob = sort[p]
    stop = false
    for (pi = 0; pi < p && stop == false; pi++) {
        if (pi != p) {
        console.log(pi,':', sort[pi].dist)
        if (sort[p].dist > sort[pi].dist) {
            stop = true
            console.log(sort[p].dist,'é maior que',sort[pi].dist)
            console.log('refazer a parada')
            //começar do p e ir até pi
            for (k = p; k > pi; k--) {
                console.log(k,':',sort[k].dist)
                console.log('o próximo é:',sort[k - 1].dist,ob)
                sort[k] = sort[k - 1]
            }
            sort[pi] = ob
            for (lor in sort) {
                console.log(sort[lor])
            }
        }else{
            console.log(sort[p].dist,'não é maior que',sort[pi].dist)
        }
        }
    }
 
}
}
