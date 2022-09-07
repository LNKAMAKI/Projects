
window.addEventListener('keydown', (event) => {
  if (event.key == 'ArrowRight') {
   next()
  }else if(event.key == 'ArrowLeft'){
     prev()
  }
 
 })

ident = 0
qual = 0

direction = 'next'
// go to the next slide
function next() {

   console.log('qual')
   direction = 'next'
   if (mark == false || respondidas.find(function(respondidas) {
      return respondidas.numslide == qual
   }) != undefined) {

      if (qual != 20) {
      console.log(qual, qual != 0)
   hat = document.getElementsByClassName('scroll')
console.log(hat)

console.log(hat[ident])
hat[ident].style.animation = 'slide 0.6s cubic-bezier(0.4, 0, 0, 0.39) forwards'

if (ident == 0) {
ident = 1
}else if(ident == 1) {
   ident = 0
}
qual++
wisright(qual)
outra = hat[ident]
outra.style.visibility = 'visible'

sw(qual)

outra.style.transform = 'translate(200%)'
outra.style.animation = 'slide2 0.6s cubic-bezier(0.4, 0, 0, 0.39) forwards'
   }
}
}

// go to previous slide
function prev() {
   direction = 'prev'
   if (qual > 0) {
   hat = document.getElementsByClassName('scroll')

console.log(hat)

hat[ident].style.animation = 'slide3 0.6s cubic-bezier(0.4, 0, 0, 0.39) forwards'

if (ident == 0) {
ident = 1
}else if(ident == 1) {
   ident = 0
}
qual--
wisright(qual)

outra = hat[ident]
outra.style.visibility = 'visible'

sw(qual)

outra.style.transform = 'translate(-200%)'
outra.style.animation = 'slide2 0.6s cubic-bezier(0.4, 0, 0, 0.39) forwards'
   }
}

mark = false
respondidas = []
function sw(what){
   document.getElementById('p').parentNode.removeChild(document.getElementById('p'))
   cont = document.createElement('p')
   cont.id = 'p'
   document.getElementById('hold').appendChild(cont)
   cont.style.opacity = '0'
   cont.style.transform = 'translateY(100%)'
   cont.style.animation = 'showup 0.5s 0.1s forwards'
   title = document.getElementById('tit')

   document.getElementById('alter').parentNode.removeChild(document.getElementById('alter'))
   at = document.createElement('div')
   at.id = 'alter'
   document.getElementById('partim').appendChild(at)
   at.style.opacity = '0'
   at.style.transform = 'translateY(100%)'
   at.style.animation = 'showup 0.5s 0.1s forwards'
   
   
   marcada = -1
   switch (what) {
      case 0: 
      tit.innerText = 'Ecologia'
      outra.innerHTML = '<div class="pic"><img src="imagens/pantanal.jpg" alt=""></div>'
     cont.innerText =  ' Ecologia é a ciência que estuda as relações dos seres vivos entre si e com o meio no qual vivem.'
      break
      case 1:
         tit.innerText = 'Padrões celulares'
         outra.innerHTML = '<div class="pic"><img src="imagens/celulas.jpg" alt=""></div>'
         cont.innerText = 'Existem dois padrões célulares encontrados nos seres vivos: a célula eucariótica, que possui organização mais complexa, com várias organelas e membrana em volta do material genético, e a célula procariótica, com organização mais simples e sem material genético revestido por uma membrana. Lembrando que os 3 principais componentes de uma célula são: membrana, citoplasma e material genético.'
      break
      case 2:
            tit.innerText = 'Organizações celulares'
            outra.innerHTML = '<div class="pic"><img src="imagens/mush.jpg" alt=""></div>'
            cont.innerText = 'Também é possível distinguir organismos pela quantidade de células que possuem. Há organismos pluricelulares, que apresentam várias células, e unicelulares, que possuem somente uma. Plantas e animais são exemplos de organismos pluricelulares, enquanto bactérias (procariontes) e protozoários (eucariontes) são unicelulares. Os fungos podem ser tanto unicelulares (leveduras) como pluricelulares (cogumelos)'
      break
      case 3:
         tit.innerText = 'Seres vivos precisam de energia'
         outra.innerHTML = '<div class="pic"><img src="imagens/tree.webp" alt=""></div>'
         cont.innerText = 'Uma das características em comum dos seres vivos é que todos eles precisam de energia para sobreviver. Há aqueles que produzem o seu próprio alimento (autotróficos) e os os que se alimentam de outros seres (heterotróficos). As plantas, algas e cianobactérias, por exemplo, são autotróficas, pois obtêm o seu alimento por meio da fotossíntese, processo no qual gás carbônico, água, sais minerais e luz solar são utilizados para produzir açúcares, dentre eles a glicose.'
   break
   case 4:
         tit.innerText = 'Respiração celular'
         outra.innerHTML = '<div class="pic"><img src="imagens/lobinho.jpg" alt=""></div>'
         cont.innerText = 'É importante lembrarmos que, para obter energia através do alimento, a glicose, a maioria dos seres vivos fazem a respiração celular, no qual esse açúcar é convertido em substâncias mais simples (gás carbônico e água) após várias reações químicas que ocorrem na presença do gás oxigênio. Esse conjunto de reações fornece energia para a realização das atividades celulares. '
   break
   case 5:
         tit.innerText = 'Seres vivos têm metabolismo'
         outra.innerHTML = '<div class="pic"><img src="imagens/comida.jpg" alt=""></div>'
         cont.innerText = 'Metabolismo é o conjunto de transformações químicas que ocorre dentro da célula. O metabolismo energético gera energia para que a célula cresça, se divida e se movimente, por meio da respiração celular, enquanto o metabolismo de construção permite que o alimento seja convertido em compostos orgânicos (proteínas e outras substâncias estruturais).'
   break
   case 6:
         tit.innerText = 'Seres vivos respondem a estímulos'
         outra.innerHTML = '<div class="pic"><img src="imagens/estimulo.jpg" alt=""></div>'
         cont.innerText = 'Os seres vivos também respondem a estímulos, que são a forma como eles reagem às informações do meio no qual vivem. Os sentidos têm um papel essencial nesse contexto, já que é por meio deles que animais conseguem detectar a presença de alimento ou de prepadores. A planta carnívora, por exemplo, reage ao contato com insetos fechando as suas folhas, para que possa aprisioná-los, ou seja, ela recebe um estímulo por meio do tato. '
   break
   case 7:
         tit.innerText = 'Seres vivos têm material genético'
         outra.innerHTML = '<div class="pic"><img src="imagens/dna.jpg" alt=""></div>'
         cont.innerText = 'Outra característica dos seres vivos é que eles apresentam material genético, que garante a estabilidade da espécie ao ser transmitido de geração para geração e é responsável pela hereditariedade. Quando ocorre alteração casual ou acidental do material genético, chamamos isso de mutação, que permite a variabilidade genética dentro da espécie.'
   break
   case 8:
         tit.innerText = 'Seres vivos se reproduzem'
         outra.innerHTML = '<div class="pic"><img src="imagens/dna.jpg" alt=""></div>'
         cont.innerText = 'Outra característica dos seres vivos é que eles apresentam material genético, que garante a estabilidade da espécie ao ser transmitido de geração para geração e é responsável pela hereditariedade. Quando ocorre alteração casual ou acidental do material genético, chamamos isso de mutação, que permite a variabilidade genética dentro da espécie.'
   break
   }
   ops = document.getElementsByClassName('option')
   for (number in ops) {
      if (number.search('[a-z]') == -1) {
      console.log(ops[number])
       ops[number].setAttribute('onclick',`clicou(${number})`)
      
      }
   }
}



function clicou(value) {
   if (respondidas.find(function(respondidas) {
      return respondidas.numslide == qual
   }) == undefined) {
console.log('VOCÊ CLICOU', value)
automark(value)

   }
}

function corrigir() {
   if (marcada != -1) {
   console.log('corrigir')
   console.log(respondidas.find(function(respondidas) {
      return respondidas.numslide == qual
   }))

   if (respondidas.find(function(respondidas) {
      return respondidas.numslide == qual
   }) == undefined) {
   respondidas.push({numslide: qual, marked: marcada})
   document.getElementsByClassName('option')[correct].style.backgroundColor = 'rgb(82, 250, 82)'
   document.getElementsByClassName('option')[correct].style.color = 'white'

   if (respondidas.find(function(respondidas) {
      return respondidas.numslide == qual
      }).marked != correct) {
         markedanswer = respondidas.find(function(respondidas) {
            return respondidas.numslide == qual
            }).marked
         document.getElementsByClassName('option')[markedanswer].style.backgroundColor = 'red'
      }
   }
   }
}

function automark(val) {
   opsnum = document.getElementsByClassName('option')

   opsnum[val].style.backgroundColor = 'rgb(149, 229, 253)'

marcada = val
for (ham in opsnum) {
   if (ham != val && ham.search('[a-z]') == -1) {
opsnum[ham].style.backgroundColor = 'rgb(109, 198, 226)'

   }
}
}

correct = -1
function wisright(w) {
   switch(w) {
      case 21:
         correct = 1
         break
      case 22:
         correct = 2
         break
         case 23:
            correct = 3
            break
            case 24:
            correct = 3
            break
      default:
      correct = -1
      break
   }
}

function markingcorrect() {
   if (respondidas.find(function(respondidas) {
      return respondidas.numslide == qual
   }) != undefined) {


      which = respondidas.find(function(respondidas) {
         return respondidas.numslide == qual
      }).marked
   console.log(which)
   automark(which)
   document.getElementsByClassName('option')[correct].style.backgroundColor = 'rgb(82, 250, 82)'
   document.getElementsByClassName('option')[correct].style.color = 'white'

   if (respondidas.find(function(respondidas) {
      return respondidas.numslide == qual
      }).marked != correct) {
         markedanswer = respondidas.find(function(respondidas) {
            return respondidas.numslide == qual
            }).marked
         document.getElementsByClassName('option')[markedanswer].style.backgroundColor = 'red'
      }
   }
}