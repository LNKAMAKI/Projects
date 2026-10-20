/*PESQUISA*/

// Materiais Array
contents = [
    {title:'HTML', url:'html-logo.svg',subs:[{title:'Estrutura HTML básica, tags HTML e hierarquia de títulos',url:'../materiais/introducao-html.html'},{title:'Parágrafos, quebras de linha, símbolos e emojis',url:'../materiais/br,símbolos.html'},{title:'Formatos de imagem, tag img, direitos autorais e imagens responsivas',url:'../materiais/imagens.html'},{title:'Favicon e links internos, externos e para download',url:'../materiais/favicon-links.html'},{title:'Formatações de texto',url:'../materiais/tipostexto.html'},{title:'Citações, códigos e abreviações',url:'../materiais/citações-code.html'},{title:'Listas ol, ul e de definição',url:'../materiais/listas.html'},{title:'Áudios e vídeos',url:'../materiais/audios-videos.html'},{title:'Tabelas',url:'../materiais/tabelas.html'},{title:'Iframes',url:'../materiais/iframe.html'}]},
    {title:'CSS', url:'css-logo.svg',subs:[]},
    {title:'JAVASCRIPT', url:'js-logo.svg',subs:[{title:'Iframas',url:'../materiais/iframe.html'}]},
    {title:'abobrinha', url:'js-logo.svg',subs:[{title:'abacaxi',url:'../materiais/iframe.html'}]},
    {title:'abacaxi', url:'js-logo.svg',subs:[{title:'abacate',url:'../materiais/iframe.html'}]},
   {title:'abol', url:'js-logo.svg',subs:[{title:'abol',url:'../materiais/iframe.html'}]},
    {title:'abol', url:'js-logo.svg',subs:[{title:'abobrinha',url:'../materiais/iframe.html'}]},
     {title:'abol', url:'js-logo.svg',subs:[{title:'abol2',url:'../materiais/iframe.html'}]},
      {title:'abol', url:'js-logo.svg',subs:[{title:'abol4',url:'../materiais/iframe.html'}]},
       {title:'abol', url:'js-logo.svg',subs:[{title:'abol3',url:'../materiais/iframe.html'}]},
        {title:'abol', url:'js-logo.svg',subs:[{title:'abol6',url:'../materiais/iframe.html'}]},
         {title:'abol', url:'js-logo.svg',subs:[{title:'abol5',url:'../materiais/iframe.html'}]},
]

var subjects2 = []

for (i in contents) {
    for (e in contents[i].subs) {
        console.log(contents[i].title,contents[i].subs[e].title, contents[i].subs[e].url)
        subjects2.push({title1:i, title2: contents[i].subs[e].title.toLowerCase(), url:contents[i].subs[e].url,index:e})
    }}

// Ordena as palavras alfabeticamente
function sortWords(palavrasPrimitivas,s) {
    alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
palavrasNumericas = []
posicaoPalavras = []

for (palavra in palavrasPrimitivas) {
    word = palavrasPrimitivas[palavra][s].toLowerCase()
    neword = ''
    for (car in word) {
        if (word[car] != ' ') {
            neword+= word[car]
        }
        }
    word = neword
    wordToNumber = ''
    for (letra = 0; letra < word.length; letra++) {
        if (letra != word.length - 1) {
            wordToNumber += `${alfabeto.indexOf(word[letra])}.`
        } else {
            wordToNumber += `${alfabeto.indexOf(word[letra])}`
        }  }
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
                   }}
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
                   }}
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

pselected = [-1,-1]
podeir = [true,true]
subjects2 = sortWords(subjects2,'title2')

var songsSearched = []


// Quando uma tecla é pressionada

for (let s = 0; s < document.getElementsByClassName('searcher').length; s++) {
    console.log('hey')
    document.getElementsByClassName('searcher')[s].addEventListener('keyup', function(event) {

        if (event.key != 'ArrowDown' && event.key != 'ArrowUp' && event.key != 'Enter') {
            search2(subjects2,'title2',s)
        }
    })

    window.addEventListener('keyup', function(event) {
    console.log(event.key)
    searcher = document.getElementsByClassName('searcher')[s]
    pholder = document.getElementsByClassName('main')[s]
    if (searcher == document.activeElement && event.key == 'Enter' && pselected[s] == -1) { // Se a barra de pesquisa estiver em foco e a tecla Enter for pressionada

        if (pselected[s] == -1) {
        quantasopções = pholder.getElementsByClassName('psearcher').length
        if (quantasopções == 1) {
           dothesearch(Number(pholder.getElementsByClassName('psearcher')[s].id.replace('a','')),s)
        }}
    }else if(searcher == document.activeElement && event.key == 'Enter'){ // Se uma sugestão estiver selecionada e a tecla Enter for pressionada
        console.log('UEPA!')
        dothesearch(Number(pholder.getElementsByClassName('psearcher')[pselected[s]].id.replace('a','')),s)
    }
    
    // Selecionando a sugestão com as setas
    ps = pholder.getElementsByClassName('psearcher')
    if (searcher == document.activeElement && event.key == 'ArrowDown') { 
        console.log(pselected)
        console.log('VAI',ps.length, pselected[s])
        if (pselected[s] < ps.length - 1 && podeir[s] == true) {
            if (pselected[s] != -1)
            ps[pselected[s]].style.backgroundColor = 'white'
            pselected[s]++
            //this.searcher.value = pselected[s]
            ps[pselected[s]].style.backgroundColor = 'rgb(235, 235, 235)'
        }
    }else if(searcher == document.activeElement && event.key == 'ArrowUp') {
        if (pselected[s] >= 1 && podeir[s] == true) {
            if (pselected[s] != -1)
            ps[pselected[s]].style.backgroundColor = 'white'
            pselected[s]--
            //this.searcher.value = pselected[s]
           ps[pselected[s]].style.backgroundColor = 'rgb(235, 235, 235)'
        } }})
}


// Cada vez que o usuário digite um caractere na barra de pesquisa
function search2(subjects,titleProperty,searcherIndex) {    
    pselected[searcherIndex] = -1
    this.pnumber = -1
    this.opnumbers = 0
    pholder = document.getElementsByClassName('main')[searcherIndex]
    searcher = document.getElementsByClassName('searcher')[searcherIndex]
    pesquisa = searcher.value
   // window.alert(allvidholders.length)
   if (pesquisa.length == 0) {
    pholder.style.display = 'none'
   }
   
    //window.alert(pesquisa.toLowerCase())
    allps = pholder.getElementsByClassName('psearcher')
    //window.alert(allps.length)
    for (n = allps.length - 1; n >= 0; n--) {
   //window.alert(allps[n])
   pholder.removeChild(allps[n])
    }
   this.opnumbers = 0
    for (n in subjects) { 
        // window.alert(subjects[n])
        // window.alert(subjects[n].includes(pesquisa.toLowerCase()))
         pesquise = pesquisa.toLowerCase()
         if (subjects[n][titleProperty].search(new RegExp(`(?<=^)${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
             this.pnumber++
             this.psearcher = document.createElement('p')
             this.psearcher.style.position = 'sticky'
             this.psearcher.innerText = subjects[n][titleProperty]
             this.psearcher.setAttribute('class', 'psearcher')
             this.psearcher.id = 'a' + n
             this.psearcher.style.fontWeight = 'bold'
             this.psearcher.setAttribute('onclick', `dothesearch(${this.psearcher.id.replace('a', '')},${searcherIndex})`)
             this.psearcher.setAttribute('onmouseenter', `entrou(${this.pnumber},${searcherIndex})`)
             this.psearcher.setAttribute('onmouseout', `saiu(${this.pnumber},${searcherIndex})`)
             this.d = document.createElement('span')
             //this.d.innerText = 'o'
             this.d.setAttribute('onmouseenter', `entrou(${this.pnumber},${searcherIndex})`)
             this.d.setAttribute('class','phelp')

             this.psearcher.innerHTML = this.psearcher.innerHTML.replace(new RegExp(`(?<=^|\\W)${pesquise}`,"gi"), `<span style="font-weight:normal">${pesquise}</span>`)
             if (this.pnumber < 7) {
             pholder.appendChild(this.psearcher)
             pholder.getElementsByClassName('psearcher')[this.pnumber].appendChild(this.d)
             }
             this.opnumbers++
             pholder.style.display = 'block'
         } }
    if (pesquise.length != 0 && this.opnumbers == 0) {
        for (n in subjects) {
            // window.alert(subjects[n])
            // window.alert(subjects[n].includes(pesquisa.toLowerCase()))
             pesquise = pesquisa.toLowerCase()
             if (subjects[n][titleProperty].search(new RegExp(`(?<![a-z])${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
                this.pnumber++
                this.psearcher = document.createElement('p')
                 this.psearcher.style.position = 'sticky'
                 this.psearcher.innerText = subjects[n][titleProperty]
                 this.psearcher.setAttribute('class', 'psearcher')
                 this.psearcher.id = 'a' + n
                 this.psearcher.style.fontWeight = 'bold'
                 this.psearcher.setAttribute('onclick', `dothesearch(${this.psearcher.id.replace('a', '')},${searcherIndex})`)
                 this.psearcher.setAttribute('onmouseenter', `entrou(${this.pnumber},${searcherIndex})`)
                 this.psearcher.setAttribute('onmouseout', `saiu(${this.pnumber},${searcherIndex})`)
                 this.d = document.createElement('span')
                 this.d.setAttribute('onmouseenter', `entrou(${this.pnumber},${searcherIndex})`)
                 //this.d.innerText = 'o'
                 this.d.setAttribute('class','phelp')

                 this.psearcher.innerHTML = this.psearcher.innerHTML.replace(new RegExp(`(?<=\\W)${pesquise}`,"gi"), `<span style="font-weight:normal">${pesquise}</span>`)
                 if (this.pnumber < 7) {
                    pholder.appendChild(this.psearcher)
                    pholder.getElementsByClassName('psearcher')[this.pnumber].appendChild(this.d)
                    }
                 this.opnumbers++
                 pholder.style.display = 'block'
             }}}
 if (pesquise.length != 0 && this.opnumbers == 0){
    for (n in subjects) {
        // window.alert(subjects[n])
        // window.alert(subjects[n].includes(pesquisa.toLowerCase()))
         pesquise = pesquisa.toLowerCase()
         if (subjects[n][titleProperty].search(new RegExp(`${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
            this.pnumber++
             this.psearcher = document.createElement('p')
             this.psearcher.style.position = 'sticky'
             this.psearcher.innerText = subjects[n][titleProperty]
             this.psearcher.setAttribute('class', 'psearcher')
             this.psearcher.id = 'a' + n 
             this.psearcher.style.fontWeight = 'bold'
             this.psearcher.setAttribute('onclick', `dothesearch(${this.psearcher.id.replace('a', '')},${searcherIndex})`)
             this.psearcher.setAttribute('onmouseenter', `entrou(${this.pnumber},${searcherIndex})`)
             this.psearcher.setAttribute('onmouseout', `saiu(${this.pnumber},${searcherIndex})`)
             this.d = document.createElement('span')
             this.d.setAttribute('onmouseenter', `entrou(${this.pnumber},${searcherIndex})`)
             //this.d.innerText = 'o'
             this.d.setAttribute('class','phelp')

             this.psearcher.innerHTML = this.psearcher.innerHTML.replace(new RegExp(`${pesquise}`,"gi"), `<span style="font-weight:normal">${pesquise}</span>`)
             if (this.pnumber < 7) {
                pholder.appendChild(this.psearcher)
                pholder.getElementsByClassName('psearcher')[this.pnumber].appendChild(this.d)
                }
             this.opnumbers++
             pholder.style.display = 'block'
         }}}
 if (this.opnumbers == 0) {
     pholder.style.display = 'none'
 }}

// Quando a pesquisa é realizada
function dothesearch(whichid,searcher) {

    document.getElementsByClassName('searcher')[searcher].value = subjects2[whichid].title2
    mainholder = document.getElementsByClassName('main')[searcher]
    allps = mainholder.getElementsByClassName('psearcher')
    podeir[searcher] = true

   for (n = allps.length - 1; n >= 0; n--) {
   mainholder.removeChild(allps[n])
    }

    //search(whichid)
    
    console.log('HERE', mainholder.style.display)
    mainholder.style.display = 'none'
    console.log('HERE', mainholder.style.display)
}

function fclic() {
    pesquisa = document.getElementsByClassName('searcher')[0].value
    if (pesquisa.length == 0) {
     document.getElementsByClassName('main')[0].style.display = 'none'
    }}


// Quando o mouse entra em uma opção(psearcher)
function entrou(thing,sindex) {
    if (document.getElementsByClassName('searcher')[sindex] == document.activeElement) {
    ps = document.getElementsByClassName('main')[sindex].getElementsByClassName('psearcher')

    podeir[sindex] = false
    
    if (pselected[sindex] != -1 && pselected[sindex] != thing) {
        ps[pselected[sindex]].style.backgroundColor = 'white'
        pselected[sindex] = -1
    }

    ps[thing].style.backgroundColor = 'rgb(235, 235, 235)'
}}

// Quando o mouse sai de uma opção(psearcher)
function saiu(thing,sindex) {
    if (document.getElementsByClassName('searcher')[sindex] == document.activeElement) {
    podeir[sindex] = true
    pselected[sindex] = -1
    ps = document.getElementsByClassName('main')[sindex].getElementsByClassName('psearcher')
    ps[thing].style.backgroundColor = 'white'
    }}