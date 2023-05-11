function showresult() {
    console.log('yaya')
    expression = document.getElementById('write').value
    letsi = []
    a = ''
    b = ''
    c = ''
    ai = ''
    bi = ''
    ci = ''
    add = ''
    ay = ''
    by = ''
    tem = false
    for (char in expression) {
        sim = expression[char]
        console.log(sim)
        if (sim == '(' && expression[char - 1] != '^') {
            console.log('add a, b or c')
            //if (letsi.length == 0) {
                console.log('a')
                if (letsi.length == 0) {
                add = 'a'
            }else if(letsi.length == 1) {
                //console.log('b')
                add = 'b'
            }else{
                //console.log('c')
                add = 'c'
            }
        }else if(sim == '^') {
            //console.log('elevar')
            if (letsi.length == 0) {
                console.log('aaaa')
                add = 'ai'
            }else{
                //console.log('bbbbbb')
                add = 'bi'
            }
            letsi.push(1)
        }else if(sim == ')') {
            console.log('stop')
            add = ''
            tem = false
            console.log('TEM',tem)
        }else{
            if (add != '') {
            switch(add) {
                case 'a':
                    a+= sim
                    break
                case 'b':
                    b+= sim
                break
                case 'c':
                    c+= sim
                break
                case 'ai':
                    if (sim == '(') {
                        console.log('esse tem!!!!')
                        tem = true
                    }else if (sim.search('[a-z]|[0-9]') != -1){
                    ai+= sim
                    }else{
                        console.log('TEM',tem)
                        if (tem == true) {
                        ai+= sim
                        }else{
                        add = ''
                        tem = false
                        }
                    }
                break
                case 'bi':
                    if (sim == '(') {
                        console.log('esse tem!!!!')
                        tem = true
                    }else if(sim.search('[a-z]|[0-9]') != -1){
                    bi+= sim
                    }else {
                        console.log('TEM',tem)
                    if (tem == true) {
                    bi+= sim
                    }else{
                    add = '' 
                    tem = false
                    }
                    }
                break
            }
        }else{
            console.log('sad life')
            console.log('SAD SIMMMMMMM', sim)
            if (sim.search('[a-z]|[0-9]') != -1) {
                console.log('hmmmmm')
                if (letsi.length == 0) {
                    console.log('this is ay')
                    ay+= sim
                }else{
                    console.log('this is by')
                    by += sim
                    }
            }
        }
    }
    }
}

function changeexp (pexpind) {
    pexps = document.getElementsByClassName('pexp')
 get1('write').value = pexps[pexpind].innerText
}

function load() {
    // initialize examples function
    pexps = document.getElementsByClassName('pexp')
for (sure = 0; sure < pexps.length; sure++) {
    pexps[sure].setAttribute('onclick',`changeexp(${sure})`)
}

  // initialize content scroll
    conts = get2('cont')
    cents = get2('center')
    ars = get2('ar')
    mecams = [] 
    late = -1   
    sai = 0
    for (bob = 0; bob < cents.length; bob++) {
    c = new CreateFunc(bob,'close')
        c.SetDefault()
        c.AddEvent()
    }
    //
    
    }
    
    function get1(thist) {
        return document.getElementById(thist)
    }
    
    function get2(thist) {
        return document.getElementsByClassName(thist)
    }
    // code for content scroll engine
    function CreateFunc(ind,action,number){
        this.ind = ind
        this.par1 = document.getElementsByClassName('ar')[this.ind]
        this.par2 = get2('cont')[this.ind]
        this.par3 = get2('center')[this.ind]
        this.l = late
        if (action != "open") {
        this.clicked = false
        this.par1.style.transform = 'rotate(0deg)'
        }else{
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
           this.par1.setAttribute('onclick',`cli(${this.clicked},${this.ind},'${this.a}',${this.number},${this.par3.offsetHeight})`)
        }}
    
        function cli(state,index,jin,n,jor) {
            me = document.getElementsByClassName('ar')
            this.jin = jin
            this.par1 = me[index]
            this.par2 = conts[index]
            this.par3 = cents[index]
            this.n = n
            beg = this.par2.offsetHeight
            this.par3.style.height = jor + 'px'
            this.par2.style.height = 'fit-content'
            sul = this.par2.offsetHeight
            search = mecams.find(function(mecams){
                return mecams.created == this.jin
               })
        
            if (search != undefined) {
                search.comp++
               }else{
                   if (state == true) {
                    mecams.push({created:this.jin,comp:1,st:jor,end:sul,cl:state})
                   }else{
                    mecams.push({created:this.jin,comp:1,st:beg,end:sul,cl:state})
                   } }
               search = mecams.find(function(mecams){
                return mecams.created == this.jin
               })
        
               if (search.cl == false) {
                txt = String(this.par3.innerText)
                   busca = txt.search(new RegExp('((Agrupamentos)|(Relações)|(Combinações)|(Repetições))','g'))
        
                if (this.par3.innerText == 'Resolução') {
                    ih = search.st - 10
                    eh = sul - 10
                   }else{
                    ih = search.st
                    eh = sul
                   }
        
            css = `@keyframes ${jin}${search.comp} {
                 0% {
                    height: ${ih}px;
                }
                100% {
                    height: ${eh}px;
                }}`
                this.par2.style.animation = `${jin}${search.comp} 0.2s`
                this.par2.style.height = 'fit-content'
        
               style = document.createElement('style')
               document.head.appendChild(style)
               style.appendChild(document.createTextNode(css))
               this.par1.style.transform = 'rotate(90deg)'
               search.cl = true
        }else{
            if (this.par3.innerText == 'Resolução') {
                ih = search.st - 10
                eh = sul - 10
               }else{
                ih = search.st
                eh = sul
               }
        
            css = `@keyframes ${jin}${search.comp} {
                0% {
                   height: ${eh}px;
               }
               100% {
                   height: ${ih}px;
               }}`
            this.par2.style.animation = `${jin}${search.comp} 0.2s`
            this.par2.style.height = `${ih}px`
           style = document.createElement('style')
           document.head.appendChild(style)
           style.appendChild(document.createTextNode(css))
           this.par1.style.transform = 'rotate(0deg)'
           search.cl = false
        }}
    //
        