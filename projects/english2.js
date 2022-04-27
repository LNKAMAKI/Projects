
ident = 0

function clicar() {
   hat = document.getElementsByClassName('scroll')
console.log(hat)


ident++
console.log(hat[ident - 1])
hat[ident - 1].style.animation = 'slide 0.6s cubic-bezier(0.4, 0, 0, 0.39) forwards'
outra = document.createElement('div')
outra.setAttribute('class', 'scroll')
outra.id = ident
outra.style.visibility = 'visible'

switch (ident) {
   case 0: 
   outra.innerHTML = '<div class="pic"><img src="HTML symbol.webp" alt=""></div>'
   break
   case 1: 
   outra.innerHTML = '<div class="pic"><img src="hello world.gif" alt=""></div>'

}
outra.style.transform = 'translate(200%)'
outra.style.animation = 'slide2 0.6s cubic-bezier(0.4, 0, 0, 0.39) forwards'
document.getElementById('seila').appendChild(outra)



}



/*
                  <div class="scroll"><div class="pic"><img src="hello world.gif" alt=""></div></div>
                  */