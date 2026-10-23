  let fila = Promise.resolve()
    window.addEventListener('keydown', (event) => {
        console.log('pressionouaaaaaaaaaaaaaaa')
        if (podeir[this.s] == true) {
        fila = fila.then(async () => {
           return new Promise (r => {
            console.log('AAAAAAAAAAA',!(pselected[this.s] == this.ps.length - 1  && event.key == 'ArrowDown'))
            if (!(pselected[this.s] == this.ps.length - 1  && event.key == 'ArrowDown') && !(pselected[this.s] == 0  && event.key == 'ArrowUp') && !(pselected[this.s] == -1  && event.key == 'ArrowUp') && podeir[this.s] == true) {// && document.getElementsByClassName(class_searcher)[this.s] == document.activeElement) {
                  setTimeout(() => {
    console.log(event.key)
    console.log('teclou',pselected[this.s])
    searcher = document.getElementsByClassName(class_searcher)[this.s]
    if (searcher == document.activeElement && event.key == 'Enter' && pselected[this.s] == -1) { // Se a barra de pesquisa estiver em foco e a tecla Enter for pressionada

        if (pselected[this.s] == -1) {
        quantasopções = this.pholder.getElementsByClassName('psearcher').length
        console.log('ueepa')
        if (quantasopções == 1) {
           dothesearch(Number(this.pholder.getElementsByClassName('psearcher')[0].id.replace('a','')),this.s,attributes[this.s])
        }}
    }else if(searcher == document.activeElement && event.key == 'Enter'){ // Se uma sugestão estiver selecionada e a tecla Enter for pressionada
        console.log('UEPA!')
        dothesearch(Number(this.pholder.getElementsByClassName('psearcher')[pselected[this.s]].id.replace('a','')),this.s,attributes[this.s])
    }
    
    // Selecionando a sugestão com as setas
    if (searcher == document.activeElement && event.key == 'ArrowDown') { 
        //console.log(pselected)
        //console.log('VAI',this.ps.length, pselected[this.s])
        if (pselected[this.s] < this.ps.length - 1 && podeir[this.s] == true) {
            //if (pselected[this.s] != -1)
            //this.ps[pselected[this.s]].style.backgroundColor = 'white'
            pselected[this.s]++
            //this.searcher.value = pselected[this.s]
            //this.ps[pselected[this.s]].style.backgroundColor = 'rgb(235, 235, 235)'
        }
    }else if(searcher == document.activeElement && event.key == 'ArrowUp') {
        if (pselected[this.s] >= 1 && podeir[this.s] == true) {
            //if (pselected[this.s] != -1)
            //this.ps[pselected[this.s]].style.backgroundColor = 'white'
            pselected[this.s]--
            //this.searcher.value = pselected[this.s]
           //this.ps[pselected[this.s]].style.backgroundColor = 'rgb(235, 235, 235)'
        } }

        console.log('teclou agora',pselected[this.s])
        r()
    },100)
}else{
    r()
}
}
    
            )
        })
    }
})
    setInterval(() => {
        //console.log(pselected[this.s])
        if (pselected[this.s] != -1) {
        this.ps[pselected[this.s]].style.backgroundColor = color_selected
        }

        for (let psearch in this.ps) {
            if (psearch < this.ps.length) {
                console.log(this.s, this.ps.length,'!!!!')
            console.log('PSTATE',this.pholder,pstate[this.s][psearch],this.s,psearch)
            console.log('HOVER',pstate[this.s][psearch].onhover)
            if (pstate[this.s][psearch].onhover == true) {
               this.ps[psearch].style.backgroundColor = color_selected
            }else if (psearch != pselected[this.s]){
                this.ps[psearch].style.backgroundColor = 'white'
            }
        }
    }
},400)