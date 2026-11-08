
text = 'abacaxi is aBacaxi is Abacaxi is abacaxi'
pesquise = 'aba'
text_changed = text.replace(new RegExp(`(?<=\\W)${pesquise}`,"gi"), `/${pesquise}`)
console.log(text.replace(new RegExp(`(?<=\\W)${pesquise}`,"gi"), `/${pesquise}`))

indexes = []
innertext = ''
countindex = 0
for (char = 0; char < text_changed.length; char++) {
    console.log(text_changed[char],text[char])
    if (text_changed[char] == '/') {
        //innertext+= text.slice(char,pesquise.length)
        indexes.push(char - countindex)
        countindex++
    }
}

for (char = 0; char < text.length; char++) {
    console.log(char,text[char])
    if (indexes.indexOf(Number(char)) == -1) {
        innertext += text[char]
    }else{
        console.log('aaaaaa',char,char + pesquise.length,text.slice(char,pesquise.length))
        innertext += `<span style="font-weight: bold">${text.slice(Number(char),Number(char) + Number(pesquise.length))}</span>`
        char += pesquise.length - 1
    }
}

function load() {
console.log('innertext',innertext)
document.getElementById('p').innerHTML = innertext
}
//replace(new RegExp(`(?<=^|\\W)${pesquise}`,"gi"), `/${pesquise}/`)
//replace(new RegExp(`${pesquise}`,"gi"), `/${pesquise}</span>`)