
function searchInnertext(text,busca,search_regex) {

 text_changed = text.replace(new RegExp(`${search_regex}${busca}`,"gi"), `/${busca}`)
console.log(text.replace(new RegExp(`${search_regex}${busca}`,"gi"), `/${busca}`))
let indexes = []
 innertext = ''
let countindex = 0

for (char = 0; char < text_changed.length; char++) {
    console.log(text_changed[char],text[char])
    if (text_changed[char] == '/') {
        //innertext+= text.slice(char,busca.length)
        if (char > 0) {
          trecho = text_changed[char - 1] + text_changed.slice(char + 1, char + 1 + busca.length)
        }else{
          trecho = text_changed.slice(char + 1, char + 1 + busca.length)
        }
         console.log('olhe o trecho: ',trecho)
         console.log('a pesquisa fecha?',trecho.search(new RegExp(`${search_regex}${busca}`,"gi")))
         if (trecho.search(new RegExp(`${search_regex}${busca}`,"gi")) != -1) {
         console.log('pushar',char)
         indexes.push(char - countindex)
         countindex++
         }
    }
}

for (char = 0; char < text.length; char++) {
    console.log(char,text[char])
    if (indexes.indexOf(Number(char)) == -1) {
        innertext += text[char]
    }else{
        console.log('aaaaaa',char,char + busca.length,text.slice(char,busca.length))
        innertext += `<span style="font-weight: normal;color:yellow;">${text.slice(Number(char),Number(char) + Number(busca.length))}</span>`
        char += busca.length - 1
    }
}
return innertext
}

function load() {
document.getElementById('p').innerHTML = searchInnertext('abacaxi is aBacaxi is Abacaxi is abacaxi','aba','(?<=^|\\W)')
}
//${search_regex}
// (?<=\\W)
//replace(new RegExp(`(?<=^|\\W)${busca}`,"gi"), `/${busca}/`)
//replace(new RegExp(`${busca}`,"gi"), `/${busca}</span>`)