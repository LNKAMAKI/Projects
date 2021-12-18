ex = 'A a a a bbbb'

ent(ex)
//ent(ex.replace(new RegExp('a', 'gi'), 'n'))

//ent(ex.replace(new RegExp('(?<=\\s)a', 'gi'), 'n'))






function ent(frase) {
parag = document.createElement('p')
parag.innerText = frase
document.body.appendChild(parag)
}