listaPalavras = [ {word: 'abacaxi'},{word: 'abc'},{word: 'aaa'}]
alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
palavrasNumericas = []
posicaoPalavras = []
//⬜

listaPalavras2 = ['a','c','b','b']
console.log(sortWords2(listaPalavras2))
//console.log(sortWords(listaPalavras,'word'))

function sortWords(palavrasPrimitivas,s) {
for (palavra in palavrasPrimitivas) {
    word = palavrasPrimitivas[palavra][s]
    wordToNumber = ''
    for (letra = 0; letra < word.length; letra++) {
        if (letra != word.length - 1) {
            wordToNumber += `${alfabeto.indexOf(word[letra])}.`
        } else {
            wordToNumber += `${alfabeto.indexOf(word[letra])}`
        }}
    palavrasNumericas.push(wordToNumber)
    posicaoPalavras.push(palavra)
}
for (pNumber in palavrasNumericas) {
    stop = false
    for (n = 0; stop == false && n < pNumber; n++) {
        if (n != pNumber) {
            palavraAnalisar = []
            numint = ''
            for (num = 0; num < palavrasNumericas[n].length; num++) {
                   if (palavrasNumericas[n][num] == '.') {
                    palavraAnalisar.push(numint)
                    numint = ''
                   }else if(num == palavrasNumericas[n].length - 1){
                        numint += `${palavrasNumericas[n][num]}`
                        palavraAnalisar.push(numint)
                   }else{
                    numint += `${palavrasNumericas[n][num]}`
                   }  }
            palavraOrigin = []
            numint = ''
            for (num = 0; num < palavrasNumericas[pNumber].length; num++) {
                   if (palavrasNumericas[pNumber][num] == '.') {
                    palavraOrigin.push(numint)
                    numint = ''
                   }else if(num == palavrasNumericas[pNumber].length - 1){
                        numint += `${palavrasNumericas[pNumber][num]}`
                        palavraOrigin.push(numint)
                   }else{
                    numint += `${palavrasNumericas[pNumber][num]}`
                   } }
           if (palavraOrigin.length > palavraAnalisar.length) {
             pare = false
             for (numb = 0; numb < palavraAnalisar.length && pare == false; numb++) {
              if (Number(palavraAnalisar[numb]) < Number(palavraOrigin[numb])) {
                pare = true
              }else if (Number(palavraAnalisar[numb]) > Number(palavraOrigin[numb])) {
                pare = true
                stop = true
                palavraSubir = palavrasNumericas[pNumber]
                wordposition = posicaoPalavras[pNumber]
                for (posicao = pNumber; posicao > n; posicao--) {
                  palavrasNumericas[posicao] = palavrasNumericas[posicao - 1]
                  posicaoPalavras[posicao] = posicaoPalavras[posicao - 1]
                }
                palavrasNumericas[n] = palavraSubir
                posicaoPalavras[n] = wordposition
              }else{
                  pare = false
              }}
           }else{
            pare = false
            for (numb = 0; numb < palavraOrigin.length && pare == false; numb++) {
                if (Number(palavraAnalisar[numb]) < Number(palavraOrigin[numb])) {
                    pare = true
                  }else if (Number(palavraAnalisar[numb]) > Number(palavraOrigin[numb])) {
                    pare = true
                    stop = true
                    palavraSubir = palavrasNumericas[pNumber]
                    wordposition = posicaoPalavras[pNumber]
                    for (posicao = pNumber; posicao > n; posicao--) {
                      palavrasNumericas[posicao] = palavrasNumericas[posicao - 1]
                      posicaoPalavras[posicao] = posicaoPalavras[posicao - 1]
                    }
                    palavrasNumericas[n] = palavraSubir
                    posicaoPalavras[n] = wordposition
                  }else{
                      pare = false
                  }}}}}}
newlista = []
for (p in palavrasNumericas) {
newlista.push(palavrasPrimitivas[posicaoPalavras[p]])
}
return newlista
}

listaPalavras = ['a','b','c']
alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
palavrasNumericas = []
posicaoPalavras = []
function sortWords2(palavrasPrimitivas) {
  for (palavra in palavrasPrimitivas) {
      word = palavrasPrimitivas[palavra]
      wordToNumber = ''
      for (letra = 0; letra < word.length; letra++) {
          if (letra != word.length - 1) {
              wordToNumber += `${alfabeto.indexOf(word[letra])}.`
          } else {
              wordToNumber += `${alfabeto.indexOf(word[letra])}`
          }}
      palavrasNumericas.push(wordToNumber)
      posicaoPalavras.push(palavra)
  }
  for (pNumber in palavrasNumericas) {
      stop = false
      for (n = 0; stop == false && n < pNumber; n++) {
          if (n != pNumber) {
              palavraAnalisar = []
              numint = ''
              for (num = 0; num < palavrasNumericas[n].length; num++) {
                     if (palavrasNumericas[n][num] == '.') {
                      palavraAnalisar.push(numint)
                      numint = ''
                     }else if(num == palavrasNumericas[n].length - 1){
                          numint += `${palavrasNumericas[n][num]}`
                          palavraAnalisar.push(numint)
                     }else{
                      numint += `${palavrasNumericas[n][num]}`
                     }  }
              palavraOrigin = []
              numint = ''
              for (num = 0; num < palavrasNumericas[pNumber].length; num++) {
                     if (palavrasNumericas[pNumber][num] == '.') {
                      palavraOrigin.push(numint)
                      numint = ''
                     }else if(num == palavrasNumericas[pNumber].length - 1){
                          numint += `${palavrasNumericas[pNumber][num]}`
                          palavraOrigin.push(numint)
                     }else{
                      numint += `${palavrasNumericas[pNumber][num]}`
                     } }
             if (palavraOrigin.length > palavraAnalisar.length) {
               pare = false
               for (numb = 0; numb < palavraAnalisar.length && pare == false; numb++) {
                if (Number(palavraAnalisar[numb]) < Number(palavraOrigin[numb])) {
                  pare = true
                }else if (Number(palavraAnalisar[numb]) > Number(palavraOrigin[numb])) {
                  pare = true
                  stop = true
                  palavraSubir = palavrasNumericas[pNumber]
                  wordposition = posicaoPalavras[pNumber]
                  for (posicao = pNumber; posicao > n; posicao--) {
                    palavrasNumericas[posicao] = palavrasNumericas[posicao - 1]
                    posicaoPalavras[posicao] = posicaoPalavras[posicao - 1]
                  }
                  palavrasNumericas[n] = palavraSubir
                  posicaoPalavras[n] = wordposition
                }else{
                    pare = false
                }}
             }else{
              pare = false
              for (numb = 0; numb < palavraOrigin.length && pare == false; numb++) {
                  if (Number(palavraAnalisar[numb]) < Number(palavraOrigin[numb])) {
                      pare = true
                    }else if (Number(palavraAnalisar[numb]) > Number(palavraOrigin[numb])) {
                      pare = true
                      stop = true
                      palavraSubir = palavrasNumericas[pNumber]
                      wordposition = posicaoPalavras[pNumber]
                      for (posicao = pNumber; posicao > n; posicao--) {
                        palavrasNumericas[posicao] = palavrasNumericas[posicao - 1]
                        posicaoPalavras[posicao] = posicaoPalavras[posicao - 1]
                      }
                      palavrasNumericas[n] = palavraSubir
                      posicaoPalavras[n] = wordposition
                    }else{
                        pare = false
                    }}}}}}
  newlista = []
  for (p in palavrasNumericas) {
  newlista.push(palavrasPrimitivas[posicaoPalavras[p]])
  }
  return newlista
  }