function vocab() {
    section = document.getElementsByTagName('section')[0]
    section.innerHTML = ''
    frame = document.createElement('iframe')
    frame.setAttribute('src', '/librius-materials/vocabulary.html')
    section.appendChild(frame)
}

function CreateFunc(ind,action,number){
    this.ind = ind
    ////console.log('THISSSSSSSSS',ind)
    this.par1 = document.getElementsByClassName('ar')[this.ind]
    this.par2 = get2('cont')[this.ind]
    this.par3 = get2('center')[this.ind]

    this.l = late
    ////console.log('ACTION', action)
    if (action != "open") {
    this.clicked = false
    this.par1.style.transform = 'rotate(0deg)'
    }else{
        ////console.log('TRUEEEEEEEEEE')
    this.clicked = true
    this.par1.style.transform = 'rotate(90deg)'
    }

    late++
    this.a = `j${late}`
    this.number = number
    h1 = 0
    h2 = 100
    heightInPx = String(this.par3.offsetHeight) + 'px'
   
    this.SetDefault= function () {
        //par2.style.height = par3.offsetHeight
        heightInPx = String(this.par3.offsetHeight) + 'px'
       if (this.par3.innerText != 'Relações' && this.par3.innerText != 'Repetições' && this.par3.innerText != 'Combinações' && this.par3.innerText != 'Agrupamentos' ) {
        this.par2.style.height = heightInPx
        this.clicked = false
       }else{
            this.par2.style.height = '28px'
            this.clicked = false
       } }
    this.par1.setAttribute
    this.AddEvent = function() {
        ////console.log(this.a)
       this.par1.setAttribute('onclick',`cli(${this.clicked},${this.ind},'${this.a}',${this.number},${this.par3.offsetHeight})`)
    }}