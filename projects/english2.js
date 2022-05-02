
window.addEventListener('keydown', (event) => {
  if (event.key == 'ArrowRight') {
   next()
  }else if(event.key == 'ArrowLeft'){
     prev()
  }
 
 })

ident = 0
qual = 0

function next() {
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
outra = hat[ident]
outra.style.visibility = 'visible'


sw(qual)

outra.style.transform = 'translate(200%)'
outra.style.animation = 'slide2 0.6s cubic-bezier(0.4, 0, 0, 0.39) forwards'






}


function prev() {
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
outra = hat[ident]
outra.style.visibility = 'visible'

sw(qual)

outra.style.transform = 'translate(-200%)'
outra.style.animation = 'slide2 0.6s cubic-bezier(0.4, 0, 0, 0.39) forwards'
   }



}

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
   
   switch (what) {
      case 0: 
      outra.innerHTML = '<div class="pic"><img src="imagens/html-css-js.jpg" alt=""></div>'
     cont.innerText =  'MOST SITES USE THESE THREE MAIN LANGUAGES: HTML, CSS AND JAVASCRIPT.'
      break
      case 1: 
      outra.innerHTML = '<div class="pic"><img src="html-symbol.webp" alt=""></div></div>'
      cont.innerText =  'sss'
      break
      case 2: 
      outra.innerHTML = '<div class="pic"><img src="css-logo.webp" alt=""></div></div>'
      cont.innerText =  'aaaaaaaaaaa'
      break
      case 3: 
      outra.innerHTML = '<div class="pic"><img src="imagens/js-logo.webp" alt=""></div></div>'
      cont.innerText =  'aaaaaaaaaaa'
      break
      case 4: 
      outra.innerHTML = '<div class="pic"><img src="imagens/js-logo.webp" alt=""></div></div>'
      cont.innerText =  '---------------------------'

      at.innerHTML = ' <div class="conter"><p class="option" name="space">asduwdhwuidhwiu wwd uwdh wdw duwd wdwq q2wue dwudwud uuwd wwduwd udwud</p><p class="option">THIS IS THE SECOND OPTION</p></div><div class="conter"><p class="option" name="space">asduwdhwuidhwiu wwd uwdh w</p><p class="option">THIS IS THE SECOND OPTION</p></div>'
      break
      default: 
      outra.innerHTML = ''
      break
   }
}
/*
                  <div class="scroll"><div class="pic"><img src="hello world.gif" alt=""></div></div>
                  */