/*
function vocab() {
    section = document.getElementsByTagName('section')[0]
    section.innerHTML = ''
    frame = document.createElement('iframe')
    frame.setAttribute('src', '/librius-materials/vocab.html')
    section.appendChild(frame)
    frame.setAttribute('scrolling','no')
    
    iframe = frame
console.log(iframe)

if (iframe != null) {
function resizeIframe() {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
  }

  setInterval(function() {
    var currentHeight = iframe.style.height;

    // check if the iframe content has changed
    if (currentHeight !== iframe.contentWindow.document.body.scrollHeight + 'px') {
      resizeIframe();
    }
  }, 20)
}
    }*/

initialcontent = ''
function get1(thist) {
    return document.getElementById(thist)
}

function get2(thist) {
    return document.getElementsByClassName(thist)
}

// Materiais Array
contents = [
    {title:'HTML', url:'html-logo.svg',subs:[{title:'abcdefghijklmnopqrstuv',url:'../materiais/introducao-html.html'}]}
    /*{title:'CSS', url:'css-logo.svg',subs:[]},
    {title:'JAVASCRIPT', url:'js-logo.svg',subs:[{title:'Iframas',url:'../materiais/iframe.html'}]},*/
]

var subjects = []

for (i in contents) {
    for (e in contents[i].subs) {
        console.log(contents[i].title,contents[i].subs[e].title, contents[i].subs[e].url)
        subjects.push({title1:i, title2: contents[i].subs[e].title.toLowerCase(), url:contents[i].subs[e].url,index:e})
    }}

document.addEventListener("DOMContentLoaded", function() {

// Ordena as palavras alfabeticamente
function sortWords(palavrasPrimitivas,s) {
    alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
palavrasNumericas = []
posicaoPalavras = []

for (palavra in palavrasPrimitivas) {
    word = palavrasPrimitivas[palavra][s].toLowerCase()
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

// Cada vez que o usuário digite um caractere na barra de pesquisa
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
    for (n in subjects) {
        // window.alert(subjects[n])
        // window.alert(subjects[n].includes(pesquisa.toLowerCase()))
         pesquise = pesquisa.toLowerCase()
         if (subjects[n].title2.search(new RegExp(`(?<=^)${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
             pnumber++
             psearcher = document.createElement('p')
             psearcher.style.position = 'sticky'
             psearcher.innerText = subjects[n].title2
             psearcher.setAttribute('class', 'psearcher')
             psearcher.id = 'a' + n
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
            // window.alert(subjects[n])
            // window.alert(subjects[n].includes(pesquisa.toLowerCase()))
             pesquise = pesquisa.toLowerCase()
             if (subjects[n].title2.search(new RegExp(`(?<![a-z])${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
                pnumber++
                psearcher = document.createElement('p')
                 psearcher.style.position = 'sticky'
                 psearcher.innerText = subjects[n].title2
                 psearcher.setAttribute('class', 'psearcher')
                 psearcher.id = 'a' + n
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
        // window.alert(subjects[n])
        // window.alert(subjects[n].includes(pesquisa.toLowerCase()))
         pesquise = pesquisa.toLowerCase()
         if (subjects[n].title2.search(new RegExp(`${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
            pnumber++
             psearcher = document.createElement('p')
             psearcher.style.position = 'sticky'
             psearcher.innerText = subjects[n].title2
             psearcher.setAttribute('class', 'psearcher')
             psearcher.id = 'a' + n 
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

// Cria o conteúdo(quando é feita a pesquisa)
function search(path) {
  pesquisa = document.getElementById('searcher').value
  songsSearched.length = 0
  songsSearched.unshift(pesquisa.toLowerCase())
     //document.getElementsByTagName('iframe')[0].src = path
  console.log('VEJA:',subjects[path].title1,subjects[path])

  if (layer == 0) {
      //window.alert('ok')
      //window.alert(subjects[path].title1,subjects[path].index)
      mostrarlista(subjects[path].title1)
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
      criariframe(subjects[path].title1,subjects[path].index)
  }
      wordSearched = subjects.find(function(subjects){
      return subjects.title2 == pesquisa.toLowerCase()
     })}

  // Materiais Array
  function fclic() {
    pesquisa = document.getElementById('searcher').value
    if (pesquisa.length == 0) {
     document.getElementById('main').style.display = 'none'
    }}
  // Quando a pesquisa é realizada
function dothesearch(whichid) {

  document.getElementById('searcher').value = subjects[whichid].title2
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

// cria o iframe para o material
function openMaterial(materialUrl,name) {
    console.log('YEEEEEEEEEEE')
    section = document.getElementsByTagName('section')[0]
    if (initialcontent == '') {
        initialcontent = section.innerHTML
    }
    section.innerHTML = ''
    sep = document.createElement('div')
    sep.setAttribute('class','sep')
    sep.style.maxWidth = '750px'
    sep.style.margin = 'auto'
    ph = document.createElement('p')
    ph.setAttribute('class','ph')
    button = document.createElement('div')
    button.setAttribute('class','gobackbut')
    button.setAttribute('onclick','backtoStart()')
    backarrow = document.createElement('img')
    backarrow.setAttribute('src','librius-materials/images/go-back-arrow.svg')
    backarrow.setAttribute('class','backar')
    span = document.createElement('span')
    span.innerText = 'Return'
    header = document.createElement('h1')
    header.setAttribute('class','title')
    header.innerText = name
    frame = document.createElement('iframe')
    frame.setAttribute('src', materialUrl)
    sep.appendChild(ph)
    button.appendChild(backarrow)
    button.appendChild(span)
    ph.appendChild(button)
    sep.appendChild(header)
    sep.appendChild(frame)
    section.appendChild(sep)
    frame.setAttribute('scrolling','no')
    
    iframe = frame
console.log(iframe)


var loopRunning = true
if (iframe != null) {
function resizeIframe() {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
  }

  setInterval(function() {
    console.log('loopRunning:', loopRunning)
    var currentHeight = iframe.style.height;

    // check if the iframe content has changed
    if (loopRunning) {
    if (currentHeight !== iframe.contentWindow.document.body.scrollHeight + 'px') {
      resizeIframe();
    }
}
  }, 20)
}
}

function backtoStart() {
    window.alert('hello you')
    loopRunning = false
    console.log('NOW THE LOOPRUNNING VALUE IS EQUAL TO:', loopRunning)
    section = document.getElementsByTagName('section')[0]
    section.innerHTML = 'a'
}