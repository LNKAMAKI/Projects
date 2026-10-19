window.addEventListener('keyup', function(event) {
    console.log(event.key)
    console.log('pselected:', pselected,'ps:',ps.length)
    searcher = document.getElementsByClassName('searcher')[0]
    pholder = document.getElementsByClassName('main')[0]
    if (searcher == document.activeElement && event.key == 'Enter' && pselected == -1) { // Se a barra de pesquisa estiver em foco e a tecla Enter for pressionada

        if (pselected == -1) {
        quantasopções = pholder.getElementsByClassName('psearcher').length
        if (quantasopções == 1) {
           dothesearch(Number(pholder.getElementsByClassName('psearcher')[0].id.replace('a','')))
        }}
    }else if(searcher == document.activeElement && event.key == 'Enter'){ // Se uma sugestão estiver selecionada e a tecla Enter for pressionada
        console.log('UEPA!')
        dothesearch(Number(pholder.getElementsByClassName('psearcher')[pselected].id.replace('a','')))
    }
    
    // Selecionando a sugestão com as setas
    ps = pholder.getElementsByClassName('psearcher')
    if (searcher == document.activeElement && event.key == 'ArrowDown') { 
        console.log('VAI',ps.length, pselected)
        if (pselected < ps.length - 1 && podeir == true) {
            if (pselected != -1)
            ps[pselected].style.backgroundColor = 'white'
            pselected++
            //this.searcher.value = pselected
            ps[pselected].style.backgroundColor = 'rgb(235, 235, 235)'
        }
    }else if(searcher == document.activeElement && event.key == 'ArrowUp') {
        if (pselected >= 1 && podeir == true) {
            if (pselected != -1)
            ps[pselected].style.backgroundColor = 'white'
            pselected--
            //this.searcher.value = pselected
           ps[pselected].style.backgroundColor = 'rgb(235, 235, 235)'
        } }})