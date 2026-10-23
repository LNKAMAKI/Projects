/*PESQUISA*/
// arrays a serem buscados
subjects2 = [
     {title2: 'aya'},
     {title2: 'ayaya'},
     {title2: 'ayayaya'},
     {title2: 'ayayayaya',},
     {title2: 'ayayayo',},
     {title2: 'ayayaye'},
     {title2: 'ayayayi'},
     {title2: 'ayayi'},
     {title2: 'a a a a a a ya'},
     {title2: 'a a a a a a a ya'},
      {title2: 'a a a a a a a a ya'},
       {title2: 'a a a a a a a a a ya'},
        {title2: 'a a a a a a a a a a ya'},
         {title2: 'a c ya'},
     {title2: 'a b ya'},
     {title2: 'b ya'},
     {title2: 'a a a a a ya'},
     {title2: 'a d ya'},
     {title2: 'a a ya'},
     {title2: 'a a a ya'},
     {title2: 'a a a a ya'},
]

subjects2 = [
  {title: 'banana  santana'},
  {title: 'fernanda  giovanna    ana '},
  {title: 'ana  amanda  '},
  {title: 'mariana  amanda  '},
  {title: ' ananda  fernandes  banana '},
  {title: 'amanda  ana '},
  {title: ' anferson  fernandes  santana '},
  {title: ' ana  amanda  anastasia '},
  {title: ' joana  anastasia   ana '},
  {title: 'ana'},
  {title: ' ana  andrade anastasia  '},
  {title: ' ana  dernanda   andrade  santana '},
  {title: ' mariana   ana '},
  {title: ' ananda  '},
  {title: '  ana  banana   santana  '},
  {title: '  anastasia   ana '},
  {title: ' amanda  anastasia '},
]

subjects = [
    {title: 'abacate', link: 'https://www.google.com/search?q=abacate'},
    {title: 'banana', link: 'https://www.google.com/search?q=banana'},
    {title: 'caju', link: 'https://www.google.com/search?q=caju'},
    {title: 'damasco', link: 'https://www.google.com/search?q=damasco'},
    {title: 'figo', link: 'https://www.google.com/search?q=figo'},
    {title: 'goiaba', link: 'https://www.google.com/search?q=goiaba'},
    {title: 'jabuticaba', link: 'https://www.google.com/search?q=jabuticaba'},
    {title: 'kiwi', link: 'https://www.google.com/search?q=kiwi'},
    {title: 'laranja', link: 'https://www.google.com/search?q=laranja'},
    {title: 'mamão', link: 'https://www.google.com/search?q=mam%C3%A3o'},
    {title: 'nectarina', link: 'https://www.google.com/search?q=nectarina'},
    {title: 'pera', link: 'https://www.google.com/search?q=pera'},
    {title: 'romã', link: 'https://www.google.com/search?q=rom%C3%A3'},
    {title: 'tangerina', link: 'https://www.google.com/search?q=tangerina'},
    {title: 'uva', link: 'https://www.google.com/search?q=uva'},
    {title: 'abacaxi', link: 'https://www.google.com/search?q=abacaxi'},
    {title: 'acerola', link: 'https://www.google.com/search?q=acerola'},
    {title: 'amora', link: 'https://www.google.com/search?q=amora'},
    {title: 'cereja', link: 'https://www.google.com/search?q=cereja'},
]
   
class_searcher = 'searcher' // classe das barras de pesquisa
class_pholder = 'main' // classe das divs que contêm as opções de busca

pselected = [-1,-1] // reseta as opções selecionadas por teclado para -1
podeir = [true,true] // outro reset de navegação
attributes = ['title','title'] // atributos que contêm os textos a serem buscados em cada array
// código para sortear os textos primeiro por quantidade de palavras e depois alfabeticamente
subjects2 = sortWords(sortWordsByNumber(subjects2, attributes[0]),attributes[0])
subjects = sortWords(sortWordsByNumber(subjects, attributes[1]),attributes[1])
color_selected = 'var(--sideyellow)' // cor atribuída aos parágrafos em seleção

lists = [subjects2,subjects] // listas de arrays a serem buscados
pstate = [] // estado das opções ( (des)selecionada, (não) em hover )

// Quando uma tecla é pressionada na barra de pesquisa/Navegação por teclado
function load() {
    console.log('aaa',document.getElementsByClassName(class_searcher))
for (let s = 0; s < document.getElementsByClassName(class_searcher).length; s++) {

    pstate.push([])
    // acionamento da busca
    document.getElementsByClassName(class_searcher)[s].addEventListener('keyup', function(event) {
        console.log(event.key)
        if (event.key != 'ArrowDown' && event.key != 'ArrowUp' && event.key != 'Enter') {
            search2(lists[s], attributes[s], s)
        }
    })

    let fila = Promise.resolve()

    pholder = document.getElementsByClassName(class_pholder)[s]
    ps = pholder.getElementsByClassName('psearcher')
    setInterval(() => {
        //console.log(pselected[s])
        if (pselected[s] != -1) {
        ps[pselected[s]].style.backgroundColor = color_selected
        }
        for (let psearch in ps) {
            if (psearch < ps.length) {
            //console.log(psearch)
            //console.log('HOVER',pstate[s][psearch].onhover)
            if (pstate[s][psearch].onhover == true) {
               ps[psearch].style.backgroundColor = color_selected
            }else if (psearch != pselected[s]){
                ps[psearch].style.backgroundColor = 'white'
            }
        }
    }
},50)

    // navegação por teclado
    window.addEventListener('keydown', (event) => {
        console.log('pressionouaaaaaaaaaaaaaaa')
        if (podeir[s] == true) {
        fila = fila.then(async () => {
           return new Promise (r => {
            console.log('AAAAAAAAAAA',!(pselected[s] == ps.length - 1  && event.key == 'ArrowDown'))
            if (!(pselected[s] == ps.length - 1  && event.key == 'ArrowDown') && !(pselected[s] == 0  && event.key == 'ArrowUp') && !(pselected[s] == -1  && event.key == 'ArrowUp') && podeir[s] == true) {// && document.getElementsByClassName(class_searcher)[s] == document.activeElement) {
                  setTimeout(() => {
    console.log(event.key)
    console.log('teclou',pselected[s])
    searcher = document.getElementsByClassName(class_searcher)[s]
    if (searcher == document.activeElement && event.key == 'Enter' && pselected[s] == -1) { // Se a barra de pesquisa estiver em foco e a tecla Enter for pressionada

        if (pselected[s] == -1) {
        quantasopções = pholder.getElementsByClassName('psearcher').length
        console.log('ueepa')
        if (quantasopções == 1) {
           dothesearch(Number(pholder.getElementsByClassName('psearcher')[0].id.replace('a','')),s,attributes[s])
        }}
    }else if(searcher == document.activeElement && event.key == 'Enter'){ // Se uma sugestão estiver selecionada e a tecla Enter for pressionada
        console.log('UEPA!')
        dothesearch(Number(pholder.getElementsByClassName('psearcher')[pselected[s]].id.replace('a','')),s,attributes[s])
    }
    
    // Selecionando a sugestão com as setas
    if (searcher == document.activeElement && event.key == 'ArrowDown') { 
        //console.log(pselected)
        //console.log('VAI',ps.length, pselected[s])
        if (pselected[s] < ps.length - 1 && podeir[s] == true) {
            //if (pselected[s] != -1)
            //ps[pselected[s]].style.backgroundColor = 'white'
            pselected[s]++
            //this.searcher.value = pselected[s]
            //ps[pselected[s]].style.backgroundColor = 'rgb(235, 235, 235)'
        }
    }else if(searcher == document.activeElement && event.key == 'ArrowUp') {
        if (pselected[s] >= 1 && podeir[s] == true) {
            //if (pselected[s] != -1)
            //ps[pselected[s]].style.backgroundColor = 'white'
            pselected[s]--
            //this.searcher.value = pselected[s]
           //ps[pselected[s]].style.backgroundColor = 'rgb(235, 235, 235)'
        } }

        console.log('teclou agora',pselected[s])
        r()
    },100)
}else{
    r()
}
}
    
            )
        })
    }
})
        
}
}


// Cada vez que o usuário digita um caractere na barra de pesquisa
function search2(subjects,titleProperty,searcherIndex) {   
    console.log('LOGGG',subjects)
    pstate[searcherIndex] = []
    pselected[searcherIndex] = -1
    this.pnumber = -1
    this.opnumbers = 0
    pholder = document.getElementsByClassName(class_pholder)[searcherIndex]
    searcher = document.getElementsByClassName(class_searcher)[searcherIndex]
    pesquisa = searcher.value

      for (n in subjects) {
        console.log('www',subjects[n][titleProperty].search(new RegExp(`${pesquisa}`,"gi")))
        index_found = subjects[n][titleProperty].search(new RegExp(`${pesquisa}`,"gi"))
        if (index_found > -1) {
            subjects[n].index_found = subjects[n][titleProperty].search(new RegExp(`${pesquisa}`,"gi"))
        }else{
            subjects[n].index_found = 1000
        }
         }

    // ordenação pelos índices em que a busca foi encontrada
    // ex: pesquisa = 'a'
    // índice em 'abacate' = 0
    // índice em 'tangerina' = 1
    subjects = sortob(subjects, 'index_found')
    console.log('SUBJECTS',subjects)

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
             this.psearcher.id = 'a' + subjects[n].original_index
             this.psearcher.style.fontWeight = 'bold'
             this.psearcher.setAttribute('onclick', `dothesearch(${this.psearcher.id.replace('a', '')},${searcherIndex},'${titleProperty}')`)
             this.psearcher.setAttribute('onmouseenter', `entrou(${this.pnumber},${searcherIndex})`)
             this.psearcher.setAttribute('onmouseleave', `saiu(${this.pnumber},${searcherIndex})`)
             this.d = document.createElement('span')
             //this.d.innerText = 'o'
             this.d.setAttribute('onmouseenter', `entrou(${this.pnumber},${searcherIndex})`)
             this.d.setAttribute('class','phelp')

             this.psearcher.innerHTML = this.psearcher.innerHTML.replace(new RegExp(`(?<=^|\\W)${pesquise}`,"gi"), `<span style="font-weight:normal">${pesquise}</span>`)
             if (this.pnumber < 7) {
             pholder.appendChild(this.psearcher)
             pholder.getElementsByClassName('psearcher')[this.pnumber].appendChild(this.d)
             pstate[searcherIndex].push({p_id:pnumber,onhover:false})
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
                 this.psearcher.id = 'a' + subjects[n].original_index
                 this.psearcher.style.fontWeight = 'bold'
                 this.psearcher.setAttribute('onclick', `dothesearch(${this.psearcher.id.replace('a', '')},${searcherIndex},'${titleProperty}')`)
                 this.psearcher.setAttribute('onmouseenter', `entrou(${this.pnumber},${searcherIndex})`)
                 this.psearcher.setAttribute('onmouseleave', `saiu(${this.pnumber},${searcherIndex})`)
                 this.d = document.createElement('span')
                 this.d.setAttribute('onmouseenter', `entrou(${this.pnumber},${searcherIndex})`)
                 //this.d.innerText = 'o'
                 this.d.setAttribute('class','phelp')

                 this.psearcher.innerHTML = this.psearcher.innerHTML.replace(new RegExp(`(?<=\\W)${pesquise}`,"gi"), `<span style="font-weight:normal">${pesquise}</span>`)
                 if (this.pnumber < 7) {
                    pholder.appendChild(this.psearcher)
                    pholder.getElementsByClassName('psearcher')[this.pnumber].appendChild(this.d)
                    pstate[searcherIndex].push({p_id:pnumber,onhover:false})
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
             this.psearcher.id = 'a' + subjects[n].original_index
             this.psearcher.style.fontWeight = 'bold'
             this.psearcher.setAttribute('onclick', `dothesearch(${this.psearcher.id.replace('a', '')},${searcherIndex},'${titleProperty}')`)
             this.psearcher.setAttribute('onmouseenter', `entrou(${this.pnumber},${searcherIndex})`)
             this.psearcher.setAttribute('onmouseleave', `saiu(${this.pnumber},${searcherIndex})`)
             this.d = document.createElement('span')
             this.d.setAttribute('onmouseenter', `entrou(${this.pnumber},${searcherIndex})`)
             //this.d.innerText = 'o'
             this.d.setAttribute('class','phelp')

             this.psearcher.innerHTML = this.psearcher.innerHTML.replace(new RegExp(`${pesquise}`,"gi"), `<span style="font-weight:normal">${pesquise}</span>`)
             if (this.pnumber < 7) {
                pholder.appendChild(this.psearcher)
                pholder.getElementsByClassName('psearcher')[this.pnumber].appendChild(this.d)
                pstate[searcherIndex].push({p_id:pnumber,onhover:false})
                }
             this.opnumbers++
             pholder.style.display = 'block'
         }}}
 if (this.opnumbers == 0) {
     pholder.style.display = 'none'
 }}

// Quando a pesquisa é realizada
function dothesearch(whichid,searcher,titleProperty) {

    document.getElementsByClassName(class_searcher)[searcher].value = lists[searcher][whichid][titleProperty]
    mainholder = document.getElementsByClassName(class_pholder)[searcher]
    allps = mainholder.getElementsByClassName('psearcher')
    podeir[searcher] = true

   for (n = allps.length - 1; n >= 0; n--) {
   mainholder.removeChild(allps[n])
    }

    //search(whichid)
    
    console.log('HERE', mainholder.style.display)
    //mainholder.style.display = 'none'
    console.log('HERE', mainholder.style.display)
}

/*
function fclic() {
    pesquisa = document.getElementsByClassName(class_searcher)[0].value
    if (pesquisa.length == 0) {
     document.getElementsByClassName(class_pholder)[0].style.display = 'none'
    }}*/


// Quando o mouse entra em uma opção(psearcher)
function entrou(thing,sindex) {
    console.log('entrou',thing)
    if (document.getElementsByClassName(class_searcher)[sindex] == document.activeElement) {
    ps = document.getElementsByClassName(class_pholder)[sindex].getElementsByClassName('psearcher')

    podeir[sindex] = false
    console.log('podeir',podeir[sindex])
    console.log('pselected',pselected[sindex])
    
    if (pselected[sindex] != -1 && pselected[sindex] != thing) {
       // ps[pselected[sindex]].style.backgroundColor = 'white'
        pselected[sindex] = -1
        console.log('pselected',pselected[sindex])
    }

   // ps[thing].style.backgroundColor = 'rgb(235, 235, 235)'
    pstate[sindex][thing].onhover = true
}}

// Quando o mouse sai de uma opção(psearcher)
function saiu(thing,sindex) {
    console.log('saiu',thing)
    if (document.getElementsByClassName(class_searcher)[sindex] == document.activeElement) {
    ps = document.getElementsByClassName(class_pholder)[sindex].getElementsByClassName('psearcher')

    podeir[sindex] = true
    console.log('podeir',podeir[sindex])

     if (pselected[sindex] != -1 && pselected[sindex] != thing) {
        //ps[pselected[sindex]].style.backgroundColor = 'white'
        pselected[sindex] = -1
        console.log('pselected',pselected[sindex])
    }

    //if (pselected[sindex] != thing)
    //ps[thing].style.backgroundColor = 'white'

    pstate[sindex][thing].onhover = false

}}

// Ordena os textos alfabeticamente
function sortWords(palavrasPrimitivas,s) {
    alfabeto = ['a', 'b', 'c','ç', 'd', 'e', 'f', 'g', 'h', 'i','í', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
palavrasNumericas = []
posicaoPalavras = []

for (palavra in palavrasPrimitivas) {
    word = palavrasPrimitivas[palavra][s].toLowerCase()
    console.log('word',word)
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

// Ordena os objetos numericamente por propriedade
// os textos pelo índice de busca
function sortob(n, pam, pim) {
    var maiorparamenor = []
    var posiçõesnumeros = []
    var yposition = n

    for (n in yposition) {
        maiorparamenor[n] = {}
        yposition[n].original_index = Number(n)
        posiçõesnumeros.push(-1)
        maiorparamenor[n][pam] = 100000000000000000000000000000000000000000000000000000000000000000000000000000000
    }

    for (item in yposition) {
        var volume = 0
        var dn = 0
        for (volume in yposition) {
            if (dn == 0) {
                if (yposition[item][pam] < maiorparamenor[volume][pam] || yposition[item][pam] == maiorparamenor[volume][pam] && yposition[item][pim] < maiorparamenor[volume][pim]) {
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
    return maiorparamenor
}

// Ordena os textos por quantidade de palavras
function sortWordsByNumber(palavrasPrimitivas,s) {
for (palavra in palavrasPrimitivas) {
    word = palavrasPrimitivas[palavra][s].toLowerCase()
    console.log('word',word)
    break_word = ''
    words_number = 0
    word_right_spaced = ''
    word += ' '
    for (car in word) {
        //console.log('caractere',word[car])
        if (word[car] != ' ') {
             if (break_word == '') {
                console.warn(break_word,'new word')
                words_number += 1
            }
            break_word += word[car]
        }else{
            if (break_word != '') {
            console.warn(break_word)
            if (word_right_spaced != '')
                word_right_spaced += ' '
            word_right_spaced += break_word
            }
            break_word = ''
        }
        }
        console.warn('words number:',words_number,word_right_spaced,word_right_spaced.length)
        palavrasPrimitivas[palavra].words_number = words_number
        palavrasPrimitivas[palavra][s] = word_right_spaced
}

palavrasPrimitivas = sortob(palavrasPrimitivas,'words_number')
return palavrasPrimitivas
}