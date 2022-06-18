//  {word: '',type: '', meaning: '', examples: ''},
var songs = [
    {word: 'abacaxi'},
    {word: 'abc'},
    {word: 'aaa'}
    
]

songs = sortWords(songs,'word')


var songsSearched = []
// Cria o "vídeos"
function search() {
    pesquisa = document.getElementById('searcher').value

    if (songsSearched.indexOf(pesquisa.toLowerCase()) == -1) {
    allvidholders = document.getElementsByClassName('video-holder')
   // window.alert(allvidholders.length)
       songsSearched.length = 0
        songsSearched.unshift(pesquisa.toLowerCase())
        for (n = allvidholders.length - 1; n >= 0; n--) {
        document.body.removeChild(allvidholders[n])
    }
    
        vidhold =  document.createElement('div')
        vidhold.setAttribute('class', 'video-holder')
        vidhold.id = pesquisa.toLowerCase()
        document.body.appendChild(vidhold)
     
        par = document.createElement('p')
        par.innerText = pesquisa.toLowerCase()
        vidhold.appendChild(par)
        

        wordSearched = songs.find(function(songs){
        return songs.word == pesquisa.toLowerCase()
       })
      
       //⬜

       if (wordSearched.examples.length > 0) {
       splitexamples = wordSearched.examples.split('/')
       dosplit = true
       }else{ 
        dosplit = false
       }
       splitmeanings = wordSearched.meaning.split('/')
    
       for (n in splitmeanings) {
       console.log(splitmeanings[n])
       //⬜
       //⬜
       //⬜
       lit = document.createElement('li')
       lit.setAttribute('class', 'numb-ex')
       lit.innerText = `${Number(n) + 1}. ` + splitmeanings[n].replace(splitmeanings[n].charAt(0), splitmeanings[n].charAt(0).toUpperCase())
       //⬜
       if (dosplit == true) {
       if (n <= splitexamples.length - 1) {
        splitmore = splitexamples[n].split('*')
           for (a in splitmore) {
               if (splitmore[a].length > 0) {
       lit = document.createElement('li')
       lit.innerText = splitmore[a]
       //⬜
           }
        }
    }

       }

}
}
}
  
function dothesearch(whichid) {
    document.getElementById('searcher').value = songs[whichid].word
    allps = document.getElementsByClassName('psearcher')
   // window.alert(document.getElementById('a' + whichid))
   for (n = allps.length - 1; n >= 0; n--) {
       if (allps[n].id != 'a' + whichid) {
   document.getElementById('main').removeChild(allps[n])
       }
    }
    search()
}


function search2() {
    pnumber = 0
    pesquisa = document.getElementById('searcher').value
   // window.alert(allvidholders.length)
   if (pesquisa.length == 0) {
    document.getElementById('main').style.display = 'none'
   }
   
    //window.alert(pesquisa.toLowerCase())
    allps = document.getElementsByClassName('psearcher')
    //window.alert(allps.length)
    for (n = allps.length - 1; n >= 0; n--) {
   //window.alert(allps[n])
   document.getElementById('main').removeChild(allps[n])
    }
   opnumbers = 0
    for (n in songs) {
        // window.alert(songs[n])
        // window.alert(songs[n].includes(pesquisa.toLowerCase()))
         pesquise = pesquisa.toLowerCase()
         if (songs[n].word.search(new RegExp(`(?<=^)${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
             pnumber++
             psearcher = document.createElement('p')
             psearcher.style.position = 'sticky'
             psearcher.innerText = songs[n].word
             psearcher.setAttribute('class', 'psearcher')
             psearcher.id = 'a' + n
             psearcher.style.fontWeight = 'bold'
             psearcher.setAttribute('onclick', `dothesearch(${psearcher.id.replace('a', '')})`)
            // window.alert(pesquise)
             psearcher.innerHTML = psearcher.innerHTML.replace(new RegExp(`(?<=^|\\W)${pesquise}`,"gi"), `<span style="font-weight: normal";">${pesquise}</span>`)
             if (pnumber < 7) {
             document.getElementById('main').appendChild(psearcher)
             }
             opnumbers++
             document.getElementById('main').style.display = 'block'
         }
    }
    if (pesquise.length != 0 && opnumbers == 0) {
        for (n in songs) {
            // window.alert(songs[n])
            // window.alert(songs[n].includes(pesquisa.toLowerCase()))
             pesquise = pesquisa.toLowerCase()
             if (songs[n].word.search(new RegExp(`(?<![a-z])${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
                pnumber++
                psearcher = document.createElement('p')
                 psearcher.style.position = 'sticky'
                 psearcher.innerText = songs[n].word
                 psearcher.setAttribute('class', 'psearcher')
                 psearcher.id = 'a' + n
                 psearcher.style.fontWeight = 'bold'
                 psearcher.setAttribute('onclick', `dothesearch(${psearcher.id.replace('a', '')})`)
                // window.alert(pesquise)
                 psearcher.innerHTML = psearcher.innerHTML.replace(new RegExp(`(?<=\\W)${pesquise}`,"gi"), `<span style="font-weight: normal">${pesquise}</span>`)
                 if (pnumber < 7) {
                    document.getElementById('main').appendChild(psearcher)
                    }
                 opnumbers++
                 document.getElementById('main').style.display = 'block'
             }
        }
     
    }
 if (pesquise.length != 0 && opnumbers == 0){
    for (n in songs) {
        // window.alert(songs[n])
        // window.alert(songs[n].includes(pesquisa.toLowerCase()))
         pesquise = pesquisa.toLowerCase()
         if (songs[n].word.search(new RegExp(`${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
            pnumber++
             psearcher = document.createElement('p')
             psearcher.style.position = 'sticky'
             psearcher.innerText = songs[n].word
             psearcher.setAttribute('class', 'psearcher')
             psearcher.id = 'a' + n 
             psearcher.style.fontWeight = 'bold'
             psearcher.setAttribute('onclick', `dothesearch(${psearcher.id.replace('a', '')})`)
            // window.alert(pesquise)
             psearcher.innerHTML = psearcher.innerHTML.replace(new RegExp(`${pesquise}`,"gi"), `<span style="font-weight: normal">${pesquise}</span>`)
             if (pnumber < 7) {
                document.getElementById('main').appendChild(psearcher)
                }
             opnumbers++
             document.getElementById('main').style.display = 'block'
         }
    }
 }
 if (opnumbers == 0) {
     document.getElementById('main').style.display = 'none'
 }
}
function fclic() {
    pesquisa = document.getElementById('searcher').value
    if (pesquisa.length == 0) {
     document.getElementById('main').style.display = 'none'
    }
}


function sortWords(palavrasPrimitivas,s) {

    alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
palavrasNumericas = []
posicaoPalavras = []


for (palavra in palavrasPrimitivas) {
    //⬜
    word = palavrasPrimitivas[palavra][s]
    wordToNumber = ''
    for (letra = 0; letra < word.length; letra++) {
        //⬜
        //⬜

        if (letra != word.length - 1) {
            //⬜
            wordToNumber += `${alfabeto.indexOf(word[letra])}.`
        } else {
            wordToNumber += `${alfabeto.indexOf(word[letra])}`
        }
    }
    //⬜

    //⬜

    palavrasNumericas.push(wordToNumber)
    posicaoPalavras.push(palavra)

    //⬜
    //⬜
}

//⬜


for (pNumber in palavrasNumericas) {
    //⬜
    //⬜
    //⬜
    //⬜

    stop = false
    for (n = 0; stop == false && n < pNumber; n++) {
        //⬜

        if (n != pNumber) {
            //⬜
            //⬜
            palavraAnalisar = []
           
            //⬜
            
            numint = ''
            for (num = 0; num < palavrasNumericas[n].length; num++) {
                   //⬜
                   if (palavrasNumericas[n][num] == '.') {
                    //⬜
                    palavraAnalisar.push(numint)
                    numint = ''
                   }else if(num == palavrasNumericas[n].length - 1){
                        numint += `${palavrasNumericas[n][num]}`
                        palavraAnalisar.push(numint)
                   }else{
                    numint += `${palavrasNumericas[n][num]}`
                   }
            }
            //⬜

            //⬜
            //⬜
            palavraOrigin = []

            //⬜
            
            numint = ''
            for (num = 0; num < palavrasNumericas[pNumber].length; num++) {
                   //⬜
                   if (palavrasNumericas[pNumber][num] == '.') {
                    //⬜
                    palavraOrigin.push(numint)
                    numint = ''
                   }else if(num == palavrasNumericas[pNumber].length - 1){
                        numint += `${palavrasNumericas[pNumber][num]}`
                        palavraOrigin.push(numint)
                   }else{
                    numint += `${palavrasNumericas[pNumber][num]}`
                   }
            }
            //⬜

            //⬜

            //⬜
           if (palavraOrigin.length > palavraAnalisar.length) {
             //⬜
             pare = false
             for (numb = 0; numb < palavraAnalisar.length && pare == false; numb++) {
              //⬜
              //⬜
              if (Number(palavraAnalisar[numb]) < Number(palavraOrigin[numb])) {
                //⬜
                pare = true
                //⬜
              }else if (Number(palavraAnalisar[numb]) > Number(palavraOrigin[numb])) {
                //⬜
                pare = true
                //⬜
                //⬜
                //⬜
                stop = true

                //⬜
              
                //⬜
                //⬜
                //⬜
                palavraSubir = palavrasNumericas[pNumber]
                wordposition = posicaoPalavras[pNumber]
                for (posicao = pNumber; posicao > n; posicao--) {
                  //⬜
                  palavrasNumericas[posicao] = palavrasNumericas[posicao - 1]
                  posicaoPalavras[posicao] = posicaoPalavras[posicao - 1]
                }
                palavrasNumericas[n] = palavraSubir
                posicaoPalavras[n] = wordposition
                //⬜
                //⬜
              }else{
                  pare = false
              }
             }
           }else{
            //⬜
            pare = false
            for (numb = 0; numb < palavraOrigin.length && pare == false; numb++) {
                //⬜
                //⬜
                if (Number(palavraAnalisar[numb]) < Number(palavraOrigin[numb])) {
                    //⬜
                    pare = true
                    //⬜
                  }else if (Number(palavraAnalisar[numb]) > Number(palavraOrigin[numb])) {
                    //⬜
                    pare = true
                    //⬜
                    //⬜
                    //⬜
                    stop = true

                    //⬜

                    //⬜
                    //⬜
                    //⬜
                    palavraSubir = palavrasNumericas[pNumber]
                    wordposition = posicaoPalavras[pNumber]
                    for (posicao = pNumber; posicao > n; posicao--) {
                      //⬜
                      palavrasNumericas[posicao] = palavrasNumericas[posicao - 1]
                      posicaoPalavras[posicao] = posicaoPalavras[posicao - 1]
                    }
                    palavrasNumericas[n] = palavraSubir
                    posicaoPalavras[n] = wordposition
                    //⬜
                    //⬜
                  }else{
                      pare = false
                  }
               }
           }
          
        }
    }

}
//⬜

newlista = []
for (p in palavrasNumericas) {
//⬜
newlista.push(palavrasPrimitivas[posicaoPalavras[p]])
}

return newlista
}