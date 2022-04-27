
ident = 0
function clicar() {
   hat = document.getElementsByClassName('scroll')
console.log(hat)
ident++
console.log(hat[ident - 1])
hat[ident - 1].style.animation = 'slide 0.5s cubic-bezier(0.4, 0, 0, 0.39) forwards'
outra = document.createElement('div')
outra.setAttribute('class', 'scroll')
outra.id = ident
document.getElementById('quests').appendChild(outra)

}