//  {word: '',type: '', meaning: '', examples: ''},
var songs = [
    {word: 'abacaxi', url: 'http://abacaxi'},
    {word: 'abóbora',url: 'http://abc'},
    {word: 'alcateia', url: 'http://aaa'},
    {word: 'areia', url: 'http://aaa'},
    {word: 'almôndega', url: 'http://aaa'},
    {word: 'avião', url: 'http://aaa'},
    {word: 'begônia', url: 'http://aaa'},
    
]

pselected = -1
songs = sortWords(songs,'word')

window.addEventListener('keyup', function(event) {
    
    if (document.getElementById('searcher') == document.activeElement && event.key == 'Enter') { // Se a barra de pesquisa estiver em foco e a tecla Enter for pressionada

        quantasopções = document.getElementById('main').getElementsByClassName('psearcher').length
        console.log(quantasopções,Number(document.getElementById('main').getElementsByClassName('psearcher')[0].id.replace('a','')))
        if (quantasopções == 1) {
           dothesearch(Number(document.getElementById('main').getElementsByClassName('psearcher')[0].id.replace('a','')))


        }
    }
    
    // Selecionando a sugestão com as setas
    ps = document.getElementById('main').getElementsByClassName('psearcher')
    if (document.getElementById('searcher') == document.activeElement && event.key == 'ArrowDown') { 
        console.log(ps.length)
        if (pselected < ps.length - 1) {
            if (pselected != -1)
            ps[pselected].style.backgroundColor = 'white'

            pselected++
            //this.window.alert(pselected)
            ps[pselected].style.backgroundColor = 'rgb(235, 235, 235)'
        }
    }else if(document.getElementById('searcher') == document.activeElement && event.key == 'ArrowUp') {
        if (pselected >= 1) {
            if (pselected != -1)
            ps[pselected].style.backgroundColor = 'white'

            pselected--
           // this.window.alert(pselected)
           ps[pselected].style.backgroundColor = 'rgb(235, 235, 235)'
        }
    }
})

var songsSearched = []
// Cria o "vídeos"
function search() {
    pesquisa = document.getElementById('searcher').value

    songsSearched.length = 0
    songsSearched.unshift(pesquisa.toLowerCase())

        document.getElementById('se').innerText = pesquisa.toLowerCase()
        

        wordSearched = songs.find(function(songs){
        return songs.word == pesquisa.toLowerCase()
       })
      
       //⬜
    

}
  
function dothesearch(whichid) { // => Quando a pesquisa é realizada
    document.getElementById('searcher').value = songs[whichid].word
    allps = document.getElementsByClassName('psearcher')
  
   for (n = allps.length - 1; n >= 0; n--) {
       if (allps[n].id != 'a' + whichid) {
   document.getElementById('main').removeChild(allps[n])
       }
    }
    search()

    pselected = -1
}

document.getElementById('searcher').addEventListener('keyup',function(event) {
    if (event.key != 'ArrowDown' && event.key != 'ArrowUp') {
        search2()
    }
})

function search2() { // => Cada vez que o usuário digite um caractere na barra de pesquisa
    
    pselected = -1

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