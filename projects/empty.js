numbers = [{number: 0}, {number: 1}, {number: 0}]
console.log(sort(numbers))

function sort(n) {
    var maiorparamenor = []
    var posiçõesnumeros = []
    var yposition = n

    for (n in yposition) {
        maiorparamenor.push({ par:-100000000000000000000000000000000000000000000000000000000000000000000000000000000})
        posiçõesnumeros.push(-1)

    }

    for (item in yposition) {
        var volume = 0
        var dn = 0
        for (volume in yposition) {
            if (dn == 0) {
                if (yposition[item].par > maiorparamenor[volume].par) {
                    var itens = yposition.length - (Number(volume) + 1)
                    var leng = yposition.length

                    for (c = 0; c < itens; c++) {
                        maiorparamenor[Number(leng) - 1] = maiorparamenor[Number(leng) - 2]
                        posiçõesnumeros[Number(leng) - 1] = posiçõesnumeros[Number(leng) - 2]
                        leng--
                    }
                    maiorparamenor[volume] = yposition[item]
                    posiçõesnumeros[volume] = Number(item)
                    dn = 10


                }
            }
        }
    }
    return [maiorparamenor, posiçõesnumeros]
}