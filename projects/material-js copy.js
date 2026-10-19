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
podeir = true
subjects2 = sortWords(subjects2,'title2')

var songsSearched = []
/*
 window.addEventListener('keyup', function(event) {
    console.log(event.key)
    //console.log('pselected[0]:', pselected[0],'ps:',ps.length)
    searcher = document.getElementsByClassName('searcher')[0]
    pholder = document.getElementsByClassName('main')[0]
    if (searcher == document.activeElement && event.key == 'Enter' && pselected[0] == -1) { // Se a barra de pesquisa estiver em foco e a tecla Enter for pressionada

        if (pselected[0] == -1) {
        quantasopções = pholder.getElementsByClassName('psearcher').length
        if (quantasopções == 1) {
           dothesearch(Number(pholder.getElementsByClassName('psearcher')[0].id.replace('a','')),0)
        }}
    }else if(searcher == document.activeElement && event.key == 'Enter'){ // Se uma sugestão estiver selecionada e a tecla Enter for pressionada
        console.log('UEPA!')
        dothesearch(Number(pholder.getElementsByClassName('psearcher')[pselected[0]].id.replace('a','')),0)
    }
    
    // Selecionando a sugestão com as setas
    ps = pholder.getElementsByClassName('psearcher')
    if (searcher == document.activeElement && event.key == 'ArrowDown') { 
        console.log(pselected)
        console.log('VAI',ps.length, pselected[0])
        if (pselected[0] < ps.length - 1 && podeir == true) {
            if (pselected[0] != -1)
            ps[pselected[0]].style.backgroundColor = 'white'
            pselected[0]++
            //this.searcher.value = pselected[0]
            ps[pselected[0]].style.backgroundColor = 'rgb(235, 235, 235)'
        }
    }else if(searcher == document.activeElement && event.key == 'ArrowUp') {
        if (pselected[0] >= 1 && podeir == true) {
            if (pselected[0] != -1)
            ps[pselected[0]].style.backgroundColor = 'white'
            pselected[0]--
            //this.searcher.value = pselected[0]
           ps[pselected[0]].style.backgroundColor = 'rgb(235, 235, 235)'
        } }})*/


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
    //console.log('pselected[s]:', pselected[s],'ps:',ps.length)
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
        if (pselected[s] < ps.length - 1 && podeir == true) {
            if (pselected[s] != -1)
            ps[pselected[s]].style.backgroundColor = 'white'
            pselected[s]++
            //this.searcher.value = pselected[s]
            ps[pselected[s]].style.backgroundColor = 'rgb(235, 235, 235)'
        }
    }else if(searcher == document.activeElement && event.key == 'ArrowUp') {
        if (pselected[s] >= 1 && podeir == true) {
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
             this.psearcher.setAttribute('onmouseenter', `entrou(${this.pnumber})`)
             this.psearcher.setAttribute('onmouseout', `saiu(${this.pnumber})`)
             this.d = document.createElement('span')
             //this.d.innerText = 'o'
             this.d.setAttribute('onmouseenter', `entrou(${this.pnumber})`)
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
                 this.psearcher.setAttribute('onmouseenter', `entrou(${this.pnumber})`)
                 this.psearcher.setAttribute('onmouseout', `saiu(${this.pnumber})`)
                 this.d = document.createElement('span')
                 this.d.setAttribute('onmouseenter', `entrou(${this.pnumber})`)
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
             this.psearcher.setAttribute('onmouseenter', `entrou(${this.pnumber})`)
             this.psearcher.setAttribute('onmouseout', `saiu(${this.pnumber})`)
             this.d = document.createElement('span')
             this.d.setAttribute('onmouseenter', `entrou(${this.pnumber})`)
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

    console.log('AAAAAAAAAAAAAAAAAA')
    document.getElementsByClassName('searcher')[searcher].value = subjects2[whichid].title2
    mainholder = document.getElementsByClassName('main')[searcher]
    allps = mainholder.getElementsByClassName('psearcher')
    podeir = true

   for (n = allps.length - 1; n >= 0; n--) {
       //if (allps[n].id != 'a' + whichid) {
   mainholder.removeChild(allps[n])
      // }
    }

    //search(whichid)
    
    console.log('HERE', mainholder.style.display)
    mainholder.style.display = 'none'
    console.log('HERE', mainholder.style.display)
}

// Cria o conteúdo(quando é feita a pesquisa)
/*
function search(path) {
    //window.alert('search')
    pesquisa = document.getElementById('searcher').value
    songsSearched.length = 0
    songsSearched.unshift(pesquisa.toLowerCase())
       //document.getElementsByTagName('iframe')[0].src = path
    console.log('VEJA:',subjects[path].title1,subjects[path])

    if (layer == 0) {
        //window.alert('ok')
        //window.alert(subjects[path].title1,subjects[path].index)
        mostrarlista(subjects[path].title1)
        window.alert('mostrarlista')
        criariframe(subjects[path].title1,subjects[path].index,true)
    }else if(layer == 1){
        criariframe(subjects[path].title1,subjects[path].index,true)
        document.getElementsByClassName('cont')[0].getElementsByClassName('ps2')[0].innerText = contents[subjects[path].title1].title
        qualicon = subjects[path].title1
    }else{
        dv.removeChild(dv.getElementsByClassName('pt')[0])
        whichi = document.getElementById('index').getElementsByTagName('iframe')[0]
        console.log(whichi)
        document.getElementById('index').removeChild(whichi)
        qualicon = subjects[path].title1
        document.getElementsByClassName('cont')[0].getElementsByClassName('ps2')[0].innerText = 
        contents[subjects[path].title1].title
        criariframe(subjects[path].title1,subjects[path].index)
    }
        wordSearched = subjects.find(function(subjects){
        return subjects.title2 == pesquisa.toLowerCase()
       })}
        */

   
function fclic() {
    pesquisa = document.getElementsByClassName('searcher')[0].value
    if (pesquisa.length == 0) {
     document.getElementsByClassName('main')[0].style.display = 'none'
    }}

//ps = document.getElementById('main').getElementsByClassName('psearcher')

// Quando o mouse entra em uma opção(psearcher)
function entrou(thing) {
    if (document.getElementsByClassName('searcher')[0] == document.activeElement) {
    ps = document.getElementsByClassName('main')[0].getElementsByClassName('psearcher')

    podeir = false 
    //document.getElementsByClassName('searcher')[0].value = 'entrou' + thing + podeir
    
    if (pselected[0] != -1 && pselected[0] != thing) {
        ps[pselected[0]].style.backgroundColor = 'white'
        pselected[0] = -1
    }
    //document.getElementsByClassName('searcher')[0].value += 'thing' + thing

    ps[thing].style.backgroundColor = 'rgb(235, 235, 235)'
}}

// Quando o mouse sai de uma opção(psearcher)
function saiu(thing) {
    if (document.getElementsByClassName('searcher')[0] == document.activeElement) {
    podeir = true
    //document.getElementsByClassName('searcher')[0].value = 'saiu' + thing + podeir
    pselected[0] = -1
    ps = document.getElementsByClassName('main')[0].getElementsByClassName('psearcher')
    ps[thing].style.backgroundColor = 'white'
    }}
    


/*MATERIAL*/
/*
d = document.createElement('div')
d.setAttribute('class','container-lg')
document.body.appendChild(d)

d2 = document.createElement('div')
d2.setAttribute('class','row justify-content-center')
d2.setAttribute('name','select-content')
d.appendChild(d2)

// Cria os bigicons/ícones
for (i in contents) {
d2.innerHTML +=  `<div class="col-lg-6 col-md-6 col-sm-6 mt-3" name="icone"><div class="bg-light" name="icon-img" onclick="mostrarlista(${i})"><img src="./\imagens/${contents[i].url}" alt="${contents[i].title}"> <p>${contents[i].title}</p></div></div>`
}

qualicon = -1
function mostrarlista(which1) {
qualicon = which1
layer = 1
bigicons = document.getElementsByName('select-content')[0]
bigicons.style.display = 'none'
    container = document.getElementsByClassName('container-lg')[0]
    dv = document.createElement('div')
    dv.setAttribute('id', 'index')
    container.appendChild(dv)

    cont = document.createElement('div')
    cont.setAttribute('class', 'cont')
    dv.appendChild(cont)
    ps = document.createElement('p')
    ps.innerText = contents[which1].title
    ps.setAttribute('class','ps2')
    cont.appendChild(ps)
    btn = document.createElement('button')
    btn.setAttribute('onclick','voltar()')
    btn.setAttribute('class','button')
    btn.innerText = 'Voltar'
    cont.appendChild(btn)

    list = document.createElement('div')
    list.setAttribute('class','names')
   
    dv.appendChild(list)
    for (f in contents[qualicon].subs) {
    ps = document.createElement('p')
    ps.innerText = contents[qualicon].subs[f].title
    ps.setAttribute('class', 'ps')
    
    ps.setAttribute('onclick',`criariframe(${qualicon},${f},true)`)
    list.appendChild(ps)
    }}

layer = 0
function voltar() {
    //window.alert(qualicon)
    //window.alert(`${contents[qualicon].subs[f].title}`)
    if (layer == 2) {
        dv.removeChild(dv.getElementsByClassName('pt')[0])
        dv.removeChild(dv.getElementsByTagName('iframe')[0])
        
        list = document.createElement('div')
        list.setAttribute('class','names')
       
        dv.appendChild(list)
        for (f in contents[qualicon].subs) {
        ps = document.createElement('p')
        ps.innerText = contents[qualicon].subs[f].title
        ps.setAttribute('class', 'ps')
        
        ps.setAttribute('onclick',`criariframe(${qualicon},${f},true)`)
        list.appendChild(ps)
        }

    }else if(layer == 1){
    container.removeChild(dv)
    bigicons.style.display = 'flex'
    }
    layer--
}

// Cria o iframe
function criariframe(a,b,c) {
    layer = 2
    cont = document.getElementsByClassName('cont')[0]
    if (c == true) {
    listsubs = document.getElementsByClassName('names')[0]
    listsubs.parentNode.removeChild(listsubs)
    }
    
   //cont.getElementsByClassName('ps2')[0].innerText = contents[a].subs[b].title
   //cont.getElementsByClassName('ps2')[0].style.fontWeight = 'bold'
    
    p = document.createElement('p')
    p.innerText =  contents[a].subs[b].title
    p.setAttribute('class', 'pt')
    dv.appendChild(p)
    iframe = document.createElement('iframe')
    iframe.setAttribute('src',contents[a].subs[b].url)
    iframe.style.width = '100%'
    dv.appendChild(iframe)
}
    */