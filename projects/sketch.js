function search2(subjects,titleProperty) {    
    this.pselected = -1
    this.pnumber = -1
    this.opnumbers = 0
    pholder = document.getElementById('main')
    pesquisa = document.getElementById('searcher').value
   // window.alert(allvidholders.length)
   if (pesquisa.length == 0) {
    pholder.style.display = 'none'
   }
   
    //window.alert(pesquisa.toLowerCase())
    allps = pholder.getElementsByClassName('psearcher')
    //window.alert(allps.length)
    for (n = allps.length - 1; n >= 0; n--) {
   //window.alert(allps[n])
   pholder.removeChild(allps[n])
    }
   this.opnumbers = 0
    for (n in subjects) { 
        // window.alert(subjects[n])
        // window.alert(subjects[n].includes(pesquisa.toLowerCase()))
         pesquise = pesquisa.toLowerCase()
         if (subjects[n][titleProperty].search(new RegExp(`(?<=^)${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
             this.pnumber++
             this.psearcher = document.createElement('p')
             this.psearcher.style.position = 'sticky'
             this.psearcher.innerText = subjects[n][titleProperty]
             this.psearcher.setAttribute('class', 'psearcher')
             this.psearcher.id = 'a' + n
             this.psearcher.style.fontWeight = 'bold'
             this.psearcher.setAttribute('onclick', `dothesearch(${this.psearcher.id.replace('a', '')})`)
             //psearcher.setAttribute('onmouseenter', `entrou(${this.pnumber})`)
             this.psearcher.setAttribute('onmouseout', `saiu(${this.pnumber})`)
             this.d = document.createElement('span')
             //this.d.innerText = 'o'
             this.d.setAttribute('onmouseenter', `entrou(${this.pnumber})`)
             this.d.setAttribute('class','phelp')

             this.psearcher.innerHTML = this.psearcher.innerHTML.replace(new RegExp(`(?<=^|\\W)${pesquise}`,"gi"), `<span style="font-weight:normal">${pesquise}</span>`)
             if (this.pnumber < 7) {
             pholder.appendChild(this.psearcher)
             pholder.getElementsByClassName('psearcher')[this.pnumber].appendChild(this.d)
             }
             this.opnumbers++
             pholder.style.display = 'block'
         } }
    if (pesquise.length != 0 && this.opnumbers == 0) {
        for (n in subjects) {
            // window.alert(subjects[n])
            // window.alert(subjects[n].includes(pesquisa.toLowerCase()))
             pesquise = pesquisa.toLowerCase()
             if (subjects[n][titleProperty].search(new RegExp(`(?<![a-z])${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
                this.pnumber++
                this.psearcher = document.createElement('p')
                 this.psearcher.style.position = 'sticky'
                 this.psearcher.innerText = subjects[n][titleProperty]
                 this.psearcher.setAttribute('class', 'psearcher')
                 this.psearcher.id = 'a' + n
                 this.psearcher.style.fontWeight = 'bold'
                 this.psearcher.setAttribute('onclick', `dothesearch(${this.psearcher.id.replace('a', '')})`)
                 //this.psearcher.setAttribute('onmouseenter', `entrou(${this.pnumber})`)
                 this.psearcher.setAttribute('onmouseout', `saiu(${this.pnumber})`)
                 this.d = document.createElement('span')
                 this.d.setAttribute('onmouseenter', `entrou(${this.pnumber})`)
                 //this.d.innerText = 'o'
                 this.d.setAttribute('class','phelp')

                 this.psearcher.innerHTML = this.psearcher.innerHTML.replace(new RegExp(`(?<=\\W)${pesquise}`,"gi"), `<span style="font-weight:normal">${pesquise}</span>`)
                 if (this.pnumber < 7) {
                    pholder.appendChild(this.psearcher)
                    pholder.getElementsByClassName('psearcher')[this.pnumber].appendChild(this.d)
                    }
                 this.opnumbers++
                 pholder.style.display = 'block'
             }}}
 if (pesquise.length != 0 && this.opnumbers == 0){
    for (n in subjects) {
        // window.alert(subjects[n])
        // window.alert(subjects[n].includes(pesquisa.toLowerCase()))
         pesquise = pesquisa.toLowerCase()
         if (subjects[n][titleProperty].search(new RegExp(`${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
            this.pnumber++
             this.psearcher = document.createElement('p')
             this.psearcher.style.position = 'sticky'
             this.psearcher.innerText = subjects[n][titleProperty]
             this.psearcher.setAttribute('class', 'psearcher')
             this.psearcher.id = 'a' + n 
             this.psearcher.style.fontWeight = 'bold'
             this.psearcher.setAttribute('onclick', `dothesearch(${this.psearcher.id.replace('a', '')})`)
             //this.psearcher.setAttribute('onmouseenter', `entrou(${this.pnumber})`)
             this.psearcher.setAttribute('onmouseout', `saiu(${this.pnumber})`)
             this.d = document.createElement('span')
             this.d.setAttribute('onmouseenter', `entrou(${this.pnumber})`)
             //this.d.innerText = 'o'
             this.d.setAttribute('class','phelp')

             this.psearcher.innerHTML = this.psearcher.innerHTML.replace(new RegExp(`${pesquise}`,"gi"), `<span style="font-weight:normal">${pesquise}</span>`)
             if (this.pnumber < 7) {
                pholder.appendChild(this.psearcher)
                pholder.getElementsByClassName('psearcher')[this.pnumber].appendChild(this.d)
                }
             this.opnumbers++
             pholder.style.display = 'block'
         }}}
 if (this.opnumbers == 0) {
     pholder.style.display = 'none'
 }}
