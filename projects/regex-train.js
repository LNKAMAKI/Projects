ex = '610.19445454544545454'

ent(ex.replace(new RegExp('(?<=[0-9]\.[0-9]{2})[0-9]+'), ''))






function ent(frase) {
parag = document.createElement('p')
parag.innerText = frase
document.body.appendChild(parag)
}