LPsongs = [
    'Guilty All The Same',
    'Invisible',
    'A Place For My Head',
    'Breaking The Habit',
    'Burn It Down',
    'Burning In The Skies',
    'Battle Symphony',
    'Valentines Day',
    'Shadow Of The Day',
    'Powerless',
    'Good Goodbye',
    'Given Up',
    'Lying From You',
    'From The Inside',
    'Hit The Floor',
    'In Pieces',
    'What Ive done',
    'In My Remains',
    'Waiting For The End',
    'One Step Closer',
    'Leave Out All The Rest',
    'My December',
    'Sharp Edges',
    'Heavy',
    'Halfway Right',
    'Nobody Can Save Me',
    'Sorry For Now',
    'Lost In The Echo',
    'Somewhere I Belong',
    'Crawling',
    'Numb',
    'In Between',
    'Forgotten',
    'In The End',
    'Dont stay',
    'Faint',
    'New Divide',
    'One More Light',
    'By Myself',
    'No More Sorrow',
    'Castle Of Glass',
    'Ill Be Gone',
    'Iridescent',
    'Talking To Myself',
    'Pushing Me Away',
    'Runaway'

]

palavrasPrimitivas = []
for (muscs in LPsongs) {
    //console.log(songs[muscs])
    musname = []
    for (letr in LPsongs[muscs]) {
          //console.log(songs[muscs][letr])
          musname.push(LPsongs[muscs][letr])
    }
    for (letr = musname.length - 1; letr >= 0; letr--) {
        //console.log(musname[letr])
        musname[letr] = musname[letr].toLowerCase()
        if (musname[letr] == ' ') {
            //console.log('tirar')
            musname.splice(letr, 1)
        }
    }
    //console.log('AQUI')
//console.log(musname)
s = ''
for (n in musname) {
    s+= musname[n]
}
//console.log('s:' + s)
palavrasPrimitivas.push(s)
}


alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
palavrasNumericas = []
posicaoPalavras = []
//console.log(palavrasPrimitivas)

for (palavra in palavrasPrimitivas) {
    //console.log(palavrasPrimitivas[palavra])
    word = palavrasPrimitivas[palavra]
    wordToNumber = ''
    for (letra = 0; letra < word.length; letra++) {
        //console.log(word[letra])
        //console.log(alfabeto.indexOf(word[letra]))

        if (letra != word.length - 1) {
            //console.log(letra, word.length - 1)
            wordToNumber += `${alfabeto.indexOf(word[letra])}.`
        } else {
            wordToNumber += `${alfabeto.indexOf(word[letra])}`
        }
    }
    //console.log(wordToNumber)

    //console.log(wordToNumber.split('.'))

    palavrasNumericas.push(wordToNumber)
    posicaoPalavras.push(palavra)

    //console.log(palavrasNumericas)
    //console.log(posicaoPalavras)
}

//console.log("Hela")


for (pNumber in palavrasNumericas) {
    //console.log('Próximo')
    //console.log(palavrasNumericas[pNumber])
    //console.log(pNumber)
    //console.log('Começar')

    stop = false
    for (n = 0; stop == false && n < pNumber; n++) {
        //console.log(palavrasNumericas[n])

        if (n != pNumber) {
           // console.log('Analisar')
            //console.log(palavrasNumericas[n])
            palavraAnalisar = []
           
            //console.log(palavrasNumericas[n].length)
            
            numint = ''
            for (num = 0; num < palavrasNumericas[n].length; num++) {
                   //console.log(palavrasNumericas[n][num])
                   if (palavrasNumericas[n][num] == '.') {
                   // console.log('PONTO')
                    palavraAnalisar.push(numint)
                    numint = ''
                   }else if(num == palavrasNumericas[n].length - 1){
                        numint += `${palavrasNumericas[n][num]}`
                        palavraAnalisar.push(numint)
                   }else{
                    numint += `${palavrasNumericas[n][num]}`
                   }
            }
            //console.log(palavraAnalisar)

            //console.log('Palavra Original') 
            //console.log(palavrasNumericas[pNumber])
            palavraOrigin = []

            //console.log(palavrasNumericas[pNumber].length)
            
            numint = ''
            for (num = 0; num < palavrasNumericas[pNumber].length; num++) {
                   //console.log(palavrasNumericas[pNumber][num])
                   if (palavrasNumericas[pNumber][num] == '.') {
                    //console.log('PONTO')
                    palavraOrigin.push(numint)
                    numint = ''
                   }else if(num == palavrasNumericas[pNumber].length - 1){
                        numint += `${palavrasNumericas[pNumber][num]}`
                        palavraOrigin.push(numint)
                   }else{
                    numint += `${palavrasNumericas[pNumber][num]}`
                   }
            }
            //console.log(palavraOrigin)

            //console.log(palavraAnalisar, palavraOrigin)

            //console.log('Menor:')
           if (palavraOrigin.length > palavraAnalisar.length) {
            //console.log(palavraAnalisar)
             pare = false
             for (numb = 0; numb < palavraAnalisar.length && pare == false; numb++) {
              //console.log(palavraAnalisar[numb])
              //console.log(palavraOrigin[numb])
              if (Number(palavraAnalisar[numb]) < Number(palavraOrigin[numb])) {
               // console.log(palavraAnalisar[numb] + ' é menor que' + palavraOrigin[numb] )
                pare = true
               // console.log(palavrasNumericas[n])
              }else if (Number(palavraAnalisar[numb]) > Number(palavraOrigin[numb])) {
                //console.log(palavraAnalisar[numb] + ' é maior que' + palavraOrigin[numb])
                pare = true
               //console.log(palavrasNumericas[pNumber])
               // console.log(n)
               // console.log(pNumber)
                stop = true

               // console.log(pNumber - n)
              
                //console.log('HERE IT GOES')
               // console.log(palavrasNumericas)
               // console.log(posicaoPalavras)
                palavraSubir = palavrasNumericas[pNumber]
                wordposition = posicaoPalavras[pNumber]
                for (posicao = pNumber; posicao > n; posicao--) {
                  ///console.log(palavrasNumericas[posicao])
                  palavrasNumericas[posicao] = palavrasNumericas[posicao - 1]
                  posicaoPalavras[posicao] = posicaoPalavras[posicao - 1]
                }
                palavrasNumericas[n] = palavraSubir
                posicaoPalavras[n] = wordposition
                //console.log(palavrasNumericas)
                //console.log(posicaoPalavras)
              }else{
                  pare = false
              }
             }
           }else{
            //console.log(palavraOrigin)
            pare = false
            for (numb = 0; numb < palavraOrigin.length && pare == false; numb++) {
               // console.log(palavraOrigin[numb])
               // console.log(palavraAnalisar[numb])
                if (Number(palavraAnalisar[numb]) < Number(palavraOrigin[numb])) {
                    //console.log(palavraAnalisar[numb] + ' é menor que' + palavraOrigin[numb] )
                    pare = true
                   // console.log(palavrasNumericas[n])
                  }else if (Number(palavraAnalisar[numb]) > Number(palavraOrigin[numb])) {
                   // console.log(palavraAnalisar[numb] + ' é maior que' + palavraOrigin[numb])
                    pare = true
                   // console.log(palavrasNumericas[pNumber])
                    //console.log(n)
                   // console.log(pNumber)
                    stop = true

                   // console.log(pNumber - n)

                  //  console.log('HERE IT GOES')
                   // console.log(palavrasNumericas)
                   // console.log(posicaoPalavras)
                    palavraSubir = palavrasNumericas[pNumber]
                    wordposition = posicaoPalavras[pNumber]
                    for (posicao = pNumber; posicao > n; posicao--) {
                      //console.log(palavrasNumericas[posicao])
                      palavrasNumericas[posicao] = palavrasNumericas[posicao - 1]
                      posicaoPalavras[posicao] = posicaoPalavras[posicao - 1]
                    }
                    palavrasNumericas[n] = palavraSubir
                    posicaoPalavras[n] = wordposition
                    //console.log(palavrasNumericas)
                   // console.log(posicaoPalavras)
                  }else{
                      pare = false
                  }
               }
           }
          
        }
    }

}
songs2 = []
//console.log('uasd', palavrasNumericas)
for (p in palavrasNumericas) {
console.log(LPsongs[posicaoPalavras[p]])
songs2.push(LPsongs[posicaoPalavras[p]])
}
console.log(songs2)
randnum = Math.random()
ind = Math.floor(songs2.length*randnum)
console.log(songs2[ind])