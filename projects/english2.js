
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
      cont.innerText =  'As the name already says, comparison operations have to do with comparing a value to another. This includes seeing if a number is greater, less or equal to the one being compared.'
      break
      case 4: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/concatenation1.png" alt=""></div></div>'
      cont.innerText =  'Imagine this situation: you ask the user\'s name on your website and you want to say something like: Hello, (user\'s name), which was previously stored in a variable called username. In order to do that, you have to follow a syntax: the variable goes inside two brackets, the first preceded by a dollar sign, and the text goes outside. However, it only works if the whole statement is inside these special quotes: ` `, which are called backticks'
      break
      case 5: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/concatenation2.png" alt=""></div></div>'
      cont.innerText =  'When you don\'t have many variables inside a text, you may want to join them by the plus sign, like shown above. But in case you have a lot of variables, the other way is more convenient.'
      break
      case 6: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/declarearray.png" alt=""></div></div>'
      cont.innerText =  'Another very important concept in javascript and not only in javascript is the array. It is like a list where each element has its own position, which we refer to as an index. The index of the first element in the array is 0. '
      break
      case 7: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/arraysplice.png" alt=""></div></div>'
      cont.innerText =  'When we want to remove an item from a array, we can use the method splice(), which can receive 3 parameters. The first one receives the index we want to start removing from and the second, how many items are going to be removed. The third, not represented on the image is the item we want to place instead.'
      break
      case 8: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/arraypush.png" alt=""></div></div>'
      cont.innerText =  'The method push() allows us to add any item to the list or array. When we do so, it takes up the last position or the last index. '
      break
      case 9: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/arrayindexof.png" alt=""></div></div>'
      cont.innerText =  'If we don\'t have any repeated values in the list, we can use the method indexOf() to get the index of a certain item. It differs strings from numbers, so make sure to put the exact value of the item on the list. If the item isn\'t found in the array, it will return -1.'
      break
      case 10: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/declareobject.png" alt=""></div></div>'
      cont.innerText =  'Arrays, however, allows us to put only one value in each index. This turns into a problem when we work with items with more than one property. In the example above, our object is a cake and it has a color, a number of layers and a specific size. '
      break
      case 11: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/objectprop.png" alt=""></div></div>'
      cont.innerText =  'We can access those properties in two ways: one is by putting .nameoftheproperty next to the object name and the other one is similar to the index in a array, what changes is that the value is a string, not an number. We can also add a property to an object, just like an array. '
      break
      case 12: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/ifelse.png" alt=""></div></div>'
      cont.innerText =  'The comparison operators can be applied when we use if and else structure. The example above is an very common script, used to compare two numbers and say which of them is the greatest. '
      break
      case 13: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/ifexample.png" alt=""></div></div>'
      cont.innerText =  'Like we said before, when an item isn\'t in a array, its index is -1. Which means if the index of an element is equal to any other value different from -1, this element is in the list. '
      break
      case 14: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/while.png" alt=""></div></div>'
      cont.innerText =  'The repeating structures are very important when dealing with many information. For example, when you have an array with more than 30 values and you want to analyze them one by one, copying the same script over and over again may get exhausting'
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
      outra.innerHTML = '<div class="pic"><img src="imagens/functionexample.png" alt=""></div></div>'
      cont.innerText =  'aaaaaaaaaaa'
      break
      case 21: 
      mark = false
      outra.innerHTML = '<div class="pic"><img src="imagens/functionexample.png" alt=""></div></div>'
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

