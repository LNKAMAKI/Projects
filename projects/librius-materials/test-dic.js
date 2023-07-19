
initialcontent = ''
function get1(thist) {
    return document.getElementById(thist)
}

function get2(thist) {
    return document.getElementsByClassName(thist)
}

// Materiais Array
contents = [
    {title:'The Story of An Hour', url:'html-logo.svg',subs:[{title: 'abacaxi', type:"noun",meaning: 'fruta que você pode comer como sobremesa ou lanche; nunca comer melão na pizza ou na salada(crime gravíssimo)_comida',examples: 'fruta abacaxi@abacaxi = rei das frutas_comida(que se come) azeda'},{title: 'melancia', type:"noun",meaning: 'fruta_comida',examples: 'melhor fruta do mundo!@doce e saborosíssima! yummy!_comida deliciosa para se comer como sombremesa (bem geladinha)!@picolé de melancia, suca de melancia'}, {title: 'abacate', type:"",meaning: 'fruta_comida',examples: 'sdadsadadadssd'}]}, 

    {title:'possessive', url:'html-logo.svg',subs:[{title: 'maça', type:"noun",meaning: 'fruta doce e deliciosa',examples: 'torta de maça, suco de maça'}]}
    /*{title:'CSS', url:'css-logo.svg',subs:[]},
    {title:'JAVASCRIPT', url:'js-logo.svg',subs:[{title:'Iframas',url:'../materiais/iframe.html'}]},*/
]

var subjects = []
document.addEventListener("DOMContentLoaded", function() {

    // Código para saber qual material está sendo acessado
    specfunc = String(document.getElementById('searcher').onclick)
    cango = true
    material = ''
    for (x = 33; cango == true && x < specfunc.length; x++) {
        if (specfunc[x] == '\'')
            cango = false
        else
           material+= specfunc[x]
        }

    // Código para que somente o vocabulário do material acessado seja utilizado
    newContent = []
    if (material != '') {
        for (trust in contents) {
            console.log(contents[trust])
            if (contents[trust].title == material) {
                console.log('this one!')
                newContent.push(contents[trust])
            }
        }
        contents = [...newContent]
    }

for (i in contents) {
    console.log(contents[i])
    for (e in contents[i].subs) {
        subjects.push({title1:i, title2: contents[i].subs[e].title.toLowerCase(),index:e})
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

pselected = -1
podeir = true
subjects = sortWords(subjects,'title2')

var songsSearched = []

window.addEventListener('keyup', function(event) {
    console.log(event.key)
    console.log('pselected:', pselected,'ps:',ps.length)
    if (document.getElementById('searcher') == document.activeElement && event.key == 'Enter' && pselected == -1) { // Se a barra de pesquisa estiver em foco e a tecla Enter for pressionada

        if (pselected == -1) {
        quantasopções = document.getElementById('main').getElementsByClassName('psearcher').length
        if (quantasopções == 1) {
           dothesearch(Number(document.getElementById('main').getElementsByClassName('psearcher')[0].id.replace('a','')))
        }}
    }else if(document.getElementById('searcher') == document.activeElement && event.key == 'Enter'){ // Se uma sugestão estiver selecionada e a tecla Enter for pressionada
        console.log('UEPA!')
        dothesearch(Number(document.getElementById('main').getElementsByClassName('psearcher')[pselected].id.replace('a','')))
    }
    
    // Selecionando a sugestão com as setas
    ps = document.getElementById('main').getElementsByClassName('psearcher')
    if (document.getElementById('searcher') == document.activeElement && event.key == 'ArrowDown') { 
        console.log('VAI',ps.length, pselected)
        if (pselected < ps.length - 1 && podeir == true) {
            if (pselected != -1)
            ps[pselected].style.backgroundColor = 'var(--verylightgray)'
            pselected++
            //this.document.getElementById('searcher').value = pselected
            ps[pselected].style.backgroundColor = 'var(--lightgray)'
        }
    }else if(document.getElementById('searcher') == document.activeElement && event.key == 'ArrowUp') {
        if (pselected >= 1 && podeir == true) {
            if (pselected != -1)
            ps[pselected].style.backgroundColor = 'var(--verylightgray)'
            pselected--
            //this.document.getElementById('searcher').value = pselected
           ps[pselected].style.backgroundColor = 'var(--lightgray)'
        } }})

// Quando uma tecla é pressionada
document.getElementById('searcher').addEventListener('keyup',function(event) {
    if (event.key != 'ArrowDown' && event.key != 'ArrowUp' && event.key != 'Enter') {
        search2()
    }})

// Cada vez que o usuário digita um caractere na barra de pesquisa
function search2() {    
    pselected = -1
    pnumber = -1
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
   opspath = []
    for (n in subjects) {
         pesquise = pesquisa.toLowerCase()
         if (subjects[n].title2.search(new RegExp(`(?<=^)${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
            opspath.push(subjects[n])
             pnumber++
             psearcher = document.createElement('p')
             psearcher.style.position = 'sticky'
             psearcher.innerText = subjects[n].title2
             psearcher.setAttribute('class', 'psearcher')
             psearcher.id = 'a' + opnumbers
             psearcher.style.fontWeight = 'bold'
             psearcher.setAttribute('onclick', `dothesearch(${psearcher.id.replace('a', '')})`)
             //psearcher.setAttribute('onmouseenter', `entrou(${pnumber})`)
             psearcher.setAttribute('onmouseout', `saiu(${pnumber})`)
             d = document.createElement('span')
             //d.innerText = 'o'
             d.setAttribute('onmouseenter', `entrou(${pnumber})`)
             d.setAttribute('class','phelp')

             psearcher.innerHTML = psearcher.innerHTML.replace(new RegExp(`(?<=^|\\W)${pesquise}`,"gi"), `<span style="font-weight:normal">${pesquise}</span>`)
             if (pnumber < 7) {
             document.getElementById('main').appendChild(psearcher)
             document.getElementById('main').getElementsByClassName('psearcher')[pnumber].appendChild(d)
             }
             opnumbers++
             document.getElementById('main').style.display = 'block'
         } }
    if (pesquise.length != 0 && opnumbers == 0) {
        for (n in subjects) {
             pesquise = pesquisa.toLowerCase()
             if (subjects[n].title2.search(new RegExp(`(?<![a-z])${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
                opspath.push(subjects[n])
                pnumber++
                psearcher = document.createElement('p')
                 psearcher.style.position = 'sticky'
                 psearcher.innerText = subjects[n].title2
                 psearcher.setAttribute('class', 'psearcher')
                 psearcher.id = 'a' + opnumbers
                 psearcher.style.fontWeight = 'bold'
                 psearcher.setAttribute('onclick', `dothesearch(${psearcher.id.replace('a', '')})`)
                 //psearcher.setAttribute('onmouseenter', `entrou(${pnumber})`)
                 psearcher.setAttribute('onmouseout', `saiu(${pnumber})`)
                 d = document.createElement('span')
                 d.setAttribute('onmouseenter', `entrou(${pnumber})`)
                 //d.innerText = 'o'
                 d.setAttribute('class','phelp')

                 psearcher.innerHTML = psearcher.innerHTML.replace(new RegExp(`(?<=\\W)${pesquise}`,"gi"), `<span style="font-weight:normal">${pesquise}</span>`)
                 if (pnumber < 7) {
                    document.getElementById('main').appendChild(psearcher)
                    document.getElementById('main').getElementsByClassName('psearcher')[pnumber].appendChild(d)
                    }
                 opnumbers++
                 document.getElementById('main').style.display = 'block'
             }}}
 if (pesquise.length != 0 && opnumbers == 0){
    for (n in subjects) {
         pesquise = pesquisa.toLowerCase()
         if (subjects[n].title2.search(new RegExp(`${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
            opspath.push(subjects[n])
            pnumber++
             psearcher = document.createElement('p')
             psearcher.style.position = 'sticky'
             psearcher.innerText = subjects[n].title2
             psearcher.setAttribute('class', 'psearcher')
             psearcher.id = 'a' + opnumbers 
             psearcher.style.fontWeight = 'bold'
             psearcher.setAttribute('onclick', `dothesearch(${psearcher.id.replace('a', '')})`)
             //psearcher.setAttribute('onmouseenter', `entrou(${pnumber})`)
             psearcher.setAttribute('onmouseout', `saiu(${pnumber})`)
             d = document.createElement('span')
             d.setAttribute('onmouseenter', `entrou(${pnumber})`)
             //d.innerText = 'o'
             d.setAttribute('class','phelp')

             psearcher.innerHTML = psearcher.innerHTML.replace(new RegExp(`${pesquise}`,"gi"), `<span style="font-weight:normal">${pesquise}</span>`)
             if (pnumber < 7) {
                document.getElementById('main').appendChild(psearcher)
                document.getElementById('main').getElementsByClassName('psearcher')[pnumber].appendChild(d)
                }
             opnumbers++
             document.getElementById('main').style.display = 'block'
         }}}
 if (opnumbers == 0) {
     document.getElementById('main').style.display = 'none'
 }}

ps = document.getElementById('main').getElementsByClassName('psearcher')

});

  // Quando a pesquisa é realizada (uma opção é clicada)
function dothesearch(whichid) {

  document.getElementById('searcher').value = opspath[whichid].title2
  allps = document.getElementsByClassName('psearcher')
  podeir = true

 for (n = allps.length - 1; n >= 0; n--) {
     //if (allps[n].id != 'a' + whichid) {
 document.getElementById('main').removeChild(allps[n])
    // }
  }

  search(whichid)
  
  console.log('HERE', document.getElementById('main').style.display)
  document.getElementById('main').style.display = 'none'
  console.log('HERE', document.getElementById('main').style.display)
  pselected = -1
}

 // Quando a barra de pesquisa é clicada quando vazia
 function fclic() {
    pesquisa = document.getElementById('searcher').value
    if (pesquisa.length == 0) {
     document.getElementById('main').style.display = 'none'
    }}

    // Quando o mouse entra em uma opção(psearcher)
  function entrou(thing) {
    if (document.getElementById('searcher') == document.activeElement) {
    ps = document.getElementById('main').getElementsByClassName('psearcher')

    podeir = false 
    //document.getElementById('searcher').value = 'entrou' + thing + podeir
    
    if (pselected != -1 && pselected != thing) {
        ps[pselected].style.backgroundColor = 'var(--verylightgray)'
        pselected = -1
    }
    //document.getElementById('searcher').value += 'thing' + thing

    ps[thing].style.backgroundColor = 'var(--lightgray)'
}}

// Quando o mouse sai de uma opção(psearcher)
function saiu(thing) {
    if (document.getElementById('searcher') == document.activeElement) {
    podeir = true
    //document.getElementById('searcher').value = 'saiu' + thing + podeir
    pselected = -1
    ps = document.getElementById('main').getElementsByClassName('psearcher')
    ps[thing].style.backgroundColor = 'var(--verylightgray)'
    }}

// Cria o conteúdo(quando é feita a pesquisa)
function search(path) {

pesquisa = document.getElementById('searcher').value
bodycontent = document.getElementById('vocabmng')
if (stack == false) {
bodycontent.innerHTML = ''
}
hd = document.createElement('h1')
console.log('PATH!!!!',path)
console.log(opspath[path])
wordInfo = contents[opspath[path].title1].subs[opspath[path].index]
hd.innerText = wordInfo.title
span = document.createElement('span')
span.setAttribute('class','tipo')
span.innerText = '(' + wordInfo.type + ')'
hd.appendChild(span)
bodycontent.appendChild(hd)
exindex = 0
text1 = ''
textindex1 = 0
for (char in wordInfo.meaning) {
    mngc = wordInfo.meaning[char]
 console.log(mngc)
 if (mngc != '_') {
 text1+= mngc
 }

 if (mngc == '_' || char == wordInfo.meaning.length - 1) {
    console.log('STOP!', text1)
    textindex1++
    pEl = document.createElement('p')
    newtext1 = ''
    for (vai in text1) {
        if (vai != 0) 
        newtext1+= text1[vai]
    }
    text1 = text1[0].toUpperCase() + newtext1
    console.log('DIAL TONES', newtext1)
    /*pEl.innerHTML = `<img src="images/pencil.svg" alt=""> <span class="inline">${text1}</span>`*/
    pEl.innerHTML = `<span class="inline"><span style="color: var(--mainpink);font-weight: 800;">${textindex1}. </span>${text1}</span>`
    pEl.setAttribute('class','pel1')
    bodycontent.appendChild(pEl)
    text1 = ''

    keepgoing = true
    text2 = ''
    textindex2 = 0
   for (beg = exindex; keepgoing == true && beg < wordInfo.examples.length; beg++) {
    exc = wordInfo.examples[beg]
    console.log('EX',exc)
    if (exc != '_' && exc != '@') {
        text2+= exc
    }
    console.log(exc) 
    if (exc == '_' || beg == wordInfo.examples.length - 1 || exc == '@') {
        textindex2++
        if (exc != '@') 
        keepgoing = false
        console.log('STOP 2!!', text2)
        newtext2 = ''
        for (vai in text2) {
            if (vai != 0) 
            newtext2+= text2[vai]
        }
        if (text2 != '') {
        text2 = text2[0].toUpperCase() + newtext2
        pEl = document.createElement('p')
        pEl.innerHTML = `<span style="font-weight: 500;">Ex ${textindex2}</span>:&nbsp ` + text2
        pEl.setAttribute('class','pel2')
        bodycontent.appendChild(pEl)
        }

        if (exc == '@') 
        text2 = ''
    }
    exindex++
   }
 }
}
}

//stack button
stack = false
animationOn = false
function move() {
    console.log('COME ON, LET US MOVE IT')
    clickelement = document.getElementsByClassName('stack')[0]
    stackelement = document.getElementsByClassName('yes-no')[0]
    if (animationOn == false) {
    animationOn = true
    if (stack == false) {
        clickelement.style.backgroundColor = 'var(--lightpink)'
        stackelement.style.backgroundColor = 'white'
        stackelement.style.animation = 'swap-forward 0.2s forwards'
        stack = true
    }else{
        stackelement.style.backgroundColor = 'var(--lightpink)'
        clickelement.style.backgroundColor = 'white'
        stackelement.style.animation = 'swap-backward 0.2s forwards'
        stack = false
    }
    stackelement.addEventListener("animationend", animationEnded)
    function animationEnded() {
        console.log('it ended')
        animationOn = false
    }
}
}