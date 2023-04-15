function vocab() {
    section = document.getElementsByTagName('section')[0]
    section.innerHTML = ''
    frame = document.createElement('iframe')
    frame.setAttribute('src', '/librius-materials/test.html')
    section.appendChild(frame)
}

function load() {
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
console.log('ANGELOOOOO')
iframe = document.getElementById('if')
console.log(iframe)

if (iframe != null) {
function resizeIframe() {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
  }

  observer = new IntersectionObserver(resizeIframe, {
    root: iframe.contentWindow.document.body
  });

  observer.observe(iframe.contentWindow.document.body);
}
}

function get1(thist) {
    return document.getElementById(thist)
}

function get2(thist) {
    return document.getElementsByClassName(thist)
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

    function cli(state,index,jin,n,jor) {
        console.log('clicked')
         iframe = document.getElementById('if')
         console.log(iframe)

         console.log('uu')
         iframe = document.getElementById('if')
         console.log(iframe)
         
         if (iframe != null) {
         function resizeIframe() {
             iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
           }
         
           observer = new IntersectionObserver(resizeIframe, {
             root: iframe.contentWindow.document.body
           });
           
           observer.observe(iframe.contentWindow.document.body);
         }

        ////console.log('')
        ////console.log('-----------')
        me = document.getElementsByClassName('ar')
        this.jin = jin
        this.par1 = me[index]
        this.par2 = conts[index]
        this.par3 = cents[index]
        this.n = n
    
        beg = this.par2.offsetHeight
    
        ////console.log('JORRRRRRRRRRRRR',jor)
        this.par3.style.height = jor + 'px'
        ////console.log('PART333333333:',this.par3.style.height)
    
        this.par2.style.height = 'fit-content'
        sul = this.par2.offsetHeight
        ////console.log('SULLLLLLLLLLL', this.par2.offsetHeight)
    
        search = mecams.find(function(mecams){
            return mecams.created == this.jin
           })
    
           ////console.log(search)
        if (search != undefined) {
           ////console.log('JÁ TEM ' + this.jin)
            search.comp++
            ////console.log(search,'COMP:',search.comp)
            /*
            styles = document.head.getElementsByTagName('style')
            document.head.removeChild(styles[search.loc])
            */
    
           }else{
            ////console.log('NÃO TEM ' + this.jin)
            if (this.par3.innerText == 'Resolução') {
                ////console.log('WAIT')
               }
               if (state == true) {
                mecams.push({created:this.jin,comp:1,st:jor,end:sul,cl:state})
               }else{
                mecams.push({created:this.jin,comp:1,st:beg,end:sul,cl:state})
               } }
           search = mecams.find(function(mecams){
            return mecams.created == this.jin
           })
    
           ////console.log(search)
           if (search.cl == false) {
            if (search.cl == false) {
                ////console.log('ABRIR')
            }else{
                ////console.log('FECHAR')
            }
    
            txt = String(this.par3.innerText)
               busca = txt.search(new RegExp('((Agrupamentos)|(Relações)|(Combinações)|(Repetições))','g'))
               ////console.log('busca',txt,busca)
    
            if (this.par3.innerText == 'Resolução') {
                ////console.log('WAIT')
                ih = search.st - 10
                eh = sul - 10
               }else{
                ih = search.st
                eh = sul
               }
    
               ////console.log('initial:',ih,'px')
               ////console.log('final:',eh,'px')
    
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
        ////console.log('gooooo')
        if (this.par3.innerText == 'Resolução') {
            ////console.log('WAIT')
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

    /*
    fetch('/librius-materials/my.txt')
    .then(response => response.text())
    .then(text => {
      // store the text content in a variable
      const myText = text;
  
      // do something with the text content
      console.log(myText);
    })
    .catch(error => console.error(error));
    */