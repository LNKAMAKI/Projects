  window.addEventListener('keyup', function(event) {
    console.log(event.key)
    //console.log('pselected[s]:', pselected[s],'ps:',ps.length)
    searcher = document.getElementsByClassName('searcher')[s]
    pholder = document.getElementsByClassName('main')[s]
    if (searcher == document.activeElement && event.key == 'Enter' && pselected[s] == -1) { // Se a barra de pesquisa estiver em foco e a tecla Enter for pressionada

        if (pselected[s] == -1) {
        quantasopções = pholder.getElementsByClassName('psearcher').length
        if (quantasopções == 1) {
           dothesearch(Number(pholder.getElementsByClassName('psearcher')[s].id.replace('a','')),0)
        }}
    }else if(searcher == document.activeElement && event.key == 'Enter'){ // Se uma sugestão estiver selecionada e a tecla Enter for pressionada
        console.log('UEPA!')
        dothesearch(Number(pholder.getElementsByClassName('psearcher')[pselected[s]].id.replace('a','')),0)
    }
    
    // Selecionando a sugestão com as setas
    ps = pholder.getElementsByClassName('psearcher')
    if (searcher == document.activeElement && event.key == 'ArrowDown') { 
        console.log(pselected)
        console.log('VAI',ps.length, pselected[s])
        if (pselected[s] < ps.length - 1 && podeir == true) {
            if (pselected[s] != -1)
            ps[pselected[s]].style.backgroundColor = 'white'
            pselected[s]++
            //this.searcher.value = pselected[s]
            ps[pselected[s]].style.backgroundColor = 'rgb(235, 235, 235)'
        }
    }else if(searcher == document.activeElement && event.key == 'ArrowUp') {
        if (pselected[s] >= 1 && podeir == true) {
            if (pselected[s] != -1)
            ps[pselected[s]].style.backgroundColor = 'white'
            pselected[s]--
            //this.searcher.value = pselected[s]
           ps[pselected[s]].style.backgroundColor = 'rgb(235, 235, 235)'
        } }})