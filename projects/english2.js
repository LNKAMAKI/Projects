
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
   }) != undefined) {
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
      case 1: 
      outra.innerHTML = '<div class="pic"><img src="imagens/var.png" alt=""></div>'
     cont.innerText =  'Variable is one of the most essential concepts in any programming language, \'cause it helps us store information to use later. It can be stored as a number, string or boolean.'
      break
      case 2: 
      outra.innerHTML = '<div class="pic"><img src="imagens/arithmetic-operations.png" alt=""></div>'
      cont.innerText =  'When we store a information as a number, we can do some operations with it. This includes addition, subtraction, multiplication, exponential and division. These are called arithmetic operations.'
      break
      case 3: 
      outra.innerHTML = '<div class="pic"><img src="imagens/comparison-operations.png" alt=""></div></div>'
      cont.innerText =  'As the name already says, comparison operations have to do with comparing a value to another one. This includes seeing if a number is greater or less than another, if it has the same value as the one being compared or if it\'s different from it.'
      break
      case 4: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/concatenation1.png" alt=""></div></div>'
      cont.innerText =  'aaaaaaaaaaa'
      break
      case 5: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/concatenation2.png" alt=""></div></div>'
      cont.innerText =  'aaaaaaaaaaa'
      break
      case 6: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/declarearray.png" alt=""></div></div>'
      cont.innerText =  'aaaaaaaaaaa'
      break
      case 7: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/arraysplice.png" alt=""></div></div>'
      cont.innerText =  'aaaaaaaaaaa'
      break
      case 8: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/arraypush.png" alt=""></div></div>'
      cont.innerText =  'aaaaaaaaaaa'
      break
      case 9: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/arrayindexof.png" alt=""></div></div>'
      cont.innerText =  'aaaaaaaaaaa'
      break
      case 10: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/declareobject.png" alt=""></div></div>'
      cont.innerText =  'aaaaaaaaaaa'
      break
      case 11: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/objectprop.png" alt=""></div></div>'
      cont.innerText =  'aaaaaaaaaaa'
      break
      case 12: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/ifelse.png" alt=""></div></div>'
      cont.innerText =  'aaaaaaaaaaa'
      break
      case 13: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/ifexample.png" alt=""></div></div>'
      cont.innerText =  'aaaaaaaaaaa'
      break
      case 14: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/while.png" alt=""></div></div>'
      cont.innerText =  'aaaaaaaaaaa'
      break
      case 15: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/whilearray.png" alt=""></div></div>'
      cont.innerText =  'aaaaaaaaaaa'
      break
      case 16: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/for.png" alt=""></div></div>'
      cont.innerText =  'aaaaaaaaaaa'
      break
      case 17: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/forin.png" alt=""></div></div>'
      cont.innerText =  'aaaaaaaaaaa'
      break
      case 18: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/forinobject.png" alt=""></div></div>'
      cont.innerText =  'aaaaaaaaaaa'
      break
      case 19: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/function.png" alt=""></div></div>'
      cont.innerText =  'aaaaaaaaaaa'
      break
      case 20: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/function.png" alt=""></div></div>'
      cont.innerText =  'aaaaaaaaaaa'
      break
      case 21: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/function.png" alt=""></div></div>'
      cont.innerText =  'aaaaaaaaaaa'
      break
      /*
      case 6:
      mark = true
      outra.innerHTML = '<div class="pic"><img src="imagens/concatenation2.png" alt=""></div></div>'
      cont.innerText =  'HERE GOES THE QUESTION'

      at.innerHTML = ' <div class="conter"><p class="option" name="space">THIS IS THE FIRST OPTION</p><p class="option">THIS IS THE SECOND OPTION</p></div><div class="conter"><p class="option" name="space">THIS IS THE THIRD OPTION</p><p class="option">THIS IS THE FORTH OPTION</p></div> <input type="button" value="SUBMIT" class="sub">'

      document.getElementsByClassName('sub')[0].setAttribute('onclick', 'corrigir()')

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

      break
*/
      default: 
      outra.innerHTML = ''
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
      case 5:
         correct = 0
         break
      case 6:
         correct = 3
         break
      default:
      correct = -1
      break
   }
}

