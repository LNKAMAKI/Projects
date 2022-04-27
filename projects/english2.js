
ident = 0
qual = 0

function next() {
   hat = document.getElementsByClassName('scroll')
console.log(hat)



console.log(hat[ident])
hat[ident].style.animation = 'slide3 0.6s cubic-bezier(0.4, 0, 0, 0.39) forwards'

ident++
qual++
outra = document.createElement('div')
outra.setAttribute('class', 'scroll')
outra.id = ident
outra.style.visibility = 'visible'

switch (qual) {
   case 0: 
   outra.innerHTML = '<div class="pic"><img src="HTML symbol.webp" alt=""></div>'
   break
   case 1: 
   outra.innerHTML = '<div class="pic"><img src="css-logo.webp" alt=""></div></div>'
   break
   case 2: 
   outra.innerHTML = '<div class="pic"><img src="hello world.gif" alt=""></div>'
   break
}
outra.style.transform = 'translate(200%)'
outra.style.animation = 'slide2 0.6s cubic-bezier(0.4, 0, 0, 0.39) forwards'
document.getElementById('seila').appendChild(outra)



}


function prev() {
   hat = document.getElementsByClassName('scroll')
console.log(hat)



console.log(hat[ident])
hat[ident].style.animation = 'slide 0.6s cubic-bezier(0.4, 0, 0, 0.39) forwards'

ident++
qual--
outra = document.createElement('div')
outra.setAttribute('class', 'scroll')
outra.id = ident
outra.style.visibility = 'visible'

switch (qual) {
   case 0: 
   outra.innerHTML = '<div class="pic"><img src="HTML symbol.webp" alt=""></div>'
   break
   case 1: 
   outra.innerHTML = '<div class="pic"><img src="css-logo.webp" alt=""></div></div>'
   break
   case 2: 
   outra.innerHTML = '<div class="pic"><img src="hello world.gif" alt=""></div>'
   break
}
outra.style.transform = 'translate(-200%)'
outra.style.animation = 'slide2 0.6s cubic-bezier(0.4, 0, 0, 0.39) forwards'
document.getElementById('seila').appendChild(outra)



}
/*
                  <div class="scroll"><div class="pic"><img src="hello world.gif" alt=""></div></div>
                  */