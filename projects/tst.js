palavrasPrimitivas = ['cenoura', 'morango', 'biscoito', 'gelatina', 'pudim', 'tofu', 'missushiro', 'torta', 'arroz', 'feijao', 'beterraba', 'nabo']
alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
palavrasNumericas = []
posicaoPalavras = []
console.log(palavrasPrimitivas)

for (palavra in palavrasPrimitivas) {
    console.log(palavrasPrimitivas[palavra])
    word = palavrasPrimitivas[palavra]
    wordToNumber = ''
    for (letra = 0; letra < word.length; letra++) {
        console.log(word[letra])
        console.log(alfabeto.indexOf(word[letra]))

        if (letra != word.length - 1) {
            console.log(letra, word.length - 1)
            wordToNumber += `${alfabeto.indexOf(word[letra])}.`
        } else {
            wordToNumber += `${alfabeto.indexOf(word[letra])}`
        }
    }
    console.log(wordToNumber)

    console.log(wordToNumber.split('.'))

    palavrasNumericas.push(wordToNumber)
    posicaoPalavras.push(palavra)

    console.log(palavrasNumericas)
    console.log(posicaoPalavras)
}

console.log("Hela")


for (pNumber in palavrasNumericas) {
    console.log('Próximo')
    console.log(palavrasNumericas[pNumber])
    console.log(pNumber)
    console.log('Começar')

    stop = false
    for (n = 0; stop == false && n < pNumber; n++) {
        console.log(palavrasNumericas[n])

        if (n != pNumber) {
            console.log('Analisar')
            console.log(palavrasNumericas[n])
            palavraAnalisar = []
           
            console.log(palavrasNumericas[n].length)
            
            numint = ''
            for (num = 0; num < palavrasNumericas[n].length; num++) {
                   console.log(palavrasNumericas[n][num])
                   if (palavrasNumericas[n][num] == '.') {
                    console.log('PONTO')
                    palavraAnalisar.push(numint)
                    numint = ''
                   }else if(num == palavrasNumericas[n].length - 1){
                        numint += `${palavrasNumericas[n][num]}`
                        palavraAnalisar.push(numint)
                   }else{
                    numint += `${palavrasNumericas[n][num]}`
                   }
            }
            console.log(palavraAnalisar)

            console.log('Palavra Original') 
            console.log(palavrasNumericas[pNumber])
            palavraOrigin = []

            console.log(palavrasNumericas[pNumber].length)
            
            numint = ''
            for (num = 0; num < palavrasNumericas[pNumber].length; num++) {
                   console.log(palavrasNumericas[pNumber][num])
                   if (palavrasNumericas[pNumber][num] == '.') {
                    console.log('PONTO')
                    palavraOrigin.push(numint)
                    numint = ''
                   }else if(num == palavrasNumericas[pNumber].length - 1){
                        numint += `${palavrasNumericas[pNumber][num]}`
                        palavraOrigin.push(numint)
                   }else{
                    numint += `${palavrasNumericas[pNumber][num]}`
                   }
            }
            console.log(palavraOrigin)

            console.log(palavraAnalisar, palavraOrigin)

            console.log('Menor:')
           if (palavraOrigin.length > palavraAnalisar.length) {
             console.log(palavraAnalisar)
             pare = false
             for (numb = 0; numb < palavraAnalisar.length && pare == false; numb++) {
              console.log(palavraAnalisar[numb])
              console.log(palavraOrigin[numb])
              if (Number(palavraAnalisar[numb]) < Number(palavraOrigin[numb])) {
                console.log(palavraAnalisar[numb] + ' é menor que' + palavraOrigin[numb] )
                pare = true
                console.log(palavrasNumericas[n])
              }else if (Number(palavraAnalisar[numb]) > Number(palavraOrigin[numb])) {
                console.log(palavraAnalisar[numb] + ' é maior que' + palavraOrigin[numb])
                pare = true
                console.log(palavrasNumericas[pNumber])
                console.log(n)
                console.log(pNumber)
                stop = true

                console.log(pNumber - n)
              
                console.log('HERE IT GOES')
                console.log(palavrasNumericas)
                console.log(posicaoPalavras)
                palavraSubir = palavrasNumericas[pNumber]
                wordposition = posicaoPalavras[pNumber]
                for (posicao = pNumber; posicao > n; posicao--) {
                  console.log(palavrasNumericas[posicao])
                  palavrasNumericas[posicao] = palavrasNumericas[posicao - 1]
                  posicaoPalavras[posicao] = posicaoPalavras[posicao - 1]
                }
                palavrasNumericas[n] = palavraSubir
                posicaoPalavras[n] = wordposition
                console.log(palavrasNumericas)
                console.log(posicaoPalavras)
              }else{
                  pare = false
              }
             }
           }else{
            console.log(palavraOrigin)
            pare = false
            for (numb = 0; numb < palavraOrigin.length && pare == false; numb++) {
                console.log(palavraOrigin[numb])
                console.log(palavraAnalisar[numb])
                if (Number(palavraAnalisar[numb]) < Number(palavraOrigin[numb])) {
                    console.log(palavraAnalisar[numb] + ' é menor que' + palavraOrigin[numb] )
                    pare = true
                    console.log(palavrasNumericas[n])
                  }else if (Number(palavraAnalisar[numb]) > Number(palavraOrigin[numb])) {
                    console.log(palavraAnalisar[numb] + ' é maior que' + palavraOrigin[numb])
                    pare = true
                    console.log(palavrasNumericas[pNumber])
                    console.log(n)
                    console.log(pNumber)
                    stop = true

                    console.log(pNumber - n)

                    console.log('HERE IT GOES')
                    console.log(palavrasNumericas)
                    console.log(posicaoPalavras)
                    palavraSubir = palavrasNumericas[pNumber]
                    wordposition = posicaoPalavras[pNumber]
                    for (posicao = pNumber; posicao > n; posicao--) {
                      console.log(palavrasNumericas[posicao])
                      palavrasNumericas[posicao] = palavrasNumericas[posicao - 1]
                      posicaoPalavras[posicao] = posicaoPalavras[posicao - 1]
                    }
                    palavrasNumericas[n] = palavraSubir
                    posicaoPalavras[n] = wordposition
                    console.log(palavrasNumericas)
                    console.log(posicaoPalavras)
                  }else{
                      pare = false
                  }
               }
           }
          
        }
    }

}
console.log('uasd', palavrasNumericas)
for (p in palavrasNumericas) {
console.log(palavrasPrimitivas[posicaoPalavras[p]])
}

numeros = [1,8, 20, 4, 6, 2, 5, 7, 3]
console.log(numeros)
console.log(numeros.sort((a, b) => a - b))