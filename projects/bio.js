
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

   direction = 'next'
   if (mark == false || respondidas.find(function(respondidas) {
      return respondidas.numslide == qual
   }) != undefined && qual != 1) {

      console.log(qual)
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
      outra.innerHTML = '<div class="pic"><img src="imagens/js-logo.webp" alt=""></div>'
     cont.innerText =  ' Javascript is the most commonly-used programming language in the world. It\'s also one of the easiest, since it doesn\'t require any previous coding knowledge. Google, Youtube, Facebook, Amazon, Twitter and Netflix are examples of popular platforms that have javascript in their composition.'
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