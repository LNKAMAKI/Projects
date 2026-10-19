// Quando o mouse entra em uma opção(psearcher)
function entrou(thing,sindex) {
    if (document.getElementsByClassName('searcher')[sindex] == document.activeElement) {
    ps = document.getElementsByClassName('main')[sindex].getElementsByClassName('psearcher')

    podeir[sindex] = false
    //document.getElementsByClassName('searcher')[sindex].value = 'entrou' + thing + podeir
    
    if (pselected[sindex] != -1 && pselected[sindex] != thing) {
        ps[pselected[sindex]].style.backgroundColor = 'white'
        pselected[sindex] = -1
    }
    //document.getElementsByClassName('searcher')[sindex].value += 'thing' + thing

    ps[thing].style.backgroundColor = 'rgb(235, 235, 235)'
}}

// Quando o mouse sai de uma opção(psearcher)
function saiu(thing,sindex) {
    if (document.getElementsByClassName('searcher')[sindex] == document.activeElement) {
    podeir[sindex] = true
    //document.getElementsByClassName('searcher')[sindex].value = 'saiu' + thing + podeir
    pselected[sindex] = -1
    ps = document.getElementsByClassName('main')[sindex].getElementsByClassName('psearcher')
    ps[thing].style.backgroundColor = 'white'
    }}