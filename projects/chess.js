console.log('EYES ON THE HIGHWAY')
elements = [
    {title: 'a', content: '<p>hi</p>', objects: [
        {title: 'b', content: '<p>hi</p><p>hi</p><p>hi</p><p>hi</p><p>hi</p>', objects: []},
        {title: 'sunny', content: '<p>HI<p>', objects: []}
    ]},
    
    {title: 'c', content: '<p>hi</p>', objects: [
        {title: 'd', content: '<p>hi</p>', objects: [
            {title: 'e', content: '<p>hi</p>', objects: []},
            {title: 'f', content: '<p>hi</p>', objects: []}
        ]}
    ]},
    {title: 'g', content: '<p>hi</p>', objects: [
        {title: 'h', content: '<p>hi</p>', objects: []}
    ]}
]
//console.log('el',elements)
for (ciyu in elements) {
 elements[ciyu].id = `${ciyu}`
 //console.log(elements[ciyu])
 cont = document.createElement('div')
 cont.setAttribute('class','cont')
 cont.id = `${ciyu}`
 cont.innerHTML = ` <div class="center">
 <p class="exptype"><img src="librius-materials/images/rar.png" alt="" class="ar">${elements[ciyu].title}</p>
</div>` + elements[ciyu].content
document.body.appendChild(cont)
}
loop(elements)
function loop(arraylist, d) {
    repeat = false
    newlist = []
    //console.log(arraylist)
    for (dial in arraylist) {
        //console.log('')
        //console.log(arraylist[dial])
        //console.log('--------')
        for (tones in arraylist[dial].objects) {
            //console.log(arraylist[dial].id + `.${tones}`)
            arraylist[dial].objects[tones].id = arraylist[dial].id + `.${tones}`
            //console.log(arraylist[dial].objects[tones])
            newlist.push(arraylist[dial].objects[tones])

            cont = document.createElement('div')
            cont.setAttribute('class','cont')
            cont.id = arraylist[dial].id + `.${tones}`
            cont.innerHTML = ` <div class="center">
             <p class="exptype"><img src="librius-materials/images/rar.png" alt="" class="ar">${arraylist[dial].objects[tones].title}</p></div>` + arraylist[dial].objects[tones].content
             document.getElementById(`${arraylist[dial].id}`).appendChild(cont)
        }
        if (arraylist[dial].objects.length > 0) {
            repeat = true
        }
        //console.log('--------')
    }
   // console.log('repeat', newlist)
    if (repeat == true)
        loop(newlist)
}

function load() {
    console.log('ONLOAD')
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
    
    idlist = []
    for (bob = 0; bob < conts.length; bob++) {
        //console.log('cont',conts[bob],bob,conts[bob].id)
        idlist.push({id: conts[bob].id, pos: bob})
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
            
            me = document.getElementsByClassName('ar')
            this.jin = jin
            this.par1 = me[index]
            this.par2 = conts[index]
            this.par3 = cents[index]
            this.n = n

            search = mecams.find(function(mecams){
                return mecams.created == this.jin
               })

               //console.log(search)
               if (search != undefined) {
                console.log(this.jin,search.anistate)
               }
               
               ///
               if (search == undefined || search.anistate == false) {

                beg = this.par2.offsetHeight
        
                this.par3.style.height = jor + 'px'
        
                this.par2.style.height = 'fit-content'
                sul = this.par2.offsetHeight

               modify = false
               if (search != undefined) {
               if (search.cl == false) {
                   modify = true
               }
               }else{
                modify = true
               }
               if (modify == true) {
               trueindex = Number(jin.replace('j',''))
               //console.log('was clicked!', trueindex)
               //console.log(document.getElementsByClassName('cont')[trueindex].id)
               elid = document.getElementsByClassName('cont')[trueindex].id
               elidtxt = ''
               for (trees = elid.length - 1; elid[trees] != '.' && trees > 0; trees--) {
                   elidtxt+= elid[trees]
               }
               //console.log(trees, elidtxt)
               elidtxt = ''
               for (omo = 0; omo < trees; omo++) {
                   elidtxt+= elid[omo]
               }
               //console.log('oficial text:', elidtxt)
               if (elidtxt != '') {
                element = document.getElementById(elidtxt)
               }
            }
             ///
            if (search != undefined) {
                search.comp++
               }else{
                   if (state == true) {
                    mecams.push({created:this.jin,comp:1,st:jor,end:sul,cl:state, anistate: false})
                   }else{
                    mecams.push({created:this.jin,comp:1,st:beg,end:sul,cl:state, anistate: false})
                   } }
               search = mecams.find(function(mecams){
                return mecams.created == this.jin
               })

               if (search.cl == false) {
        
                search.anistate = true
                txt = String(this.par3.innerText)
                   busca = txt.search(new RegExp('((Agrupamentos)|(Relações)|(Combinações)|(Repetições))','g'))
        
                if (this.par3.innerText == 'Resolução') {
                    ih = search.st - 10
                    eh = sul - 10
                   }else{
                    ih = search.st
                    eh = sul
                   }
        
            css = `@keyframes ${jin}-${search.comp} {
                 0% {
                    height: ${ih}px;
                }
                100% {
                    height: ${eh}px;
                }}`
                this.par2.addEventListener("animationend", animationEnded)
                this.par2.style.animation = `${jin}-${search.comp} 3s`
                this.par2.style.height = 'fit-content'
               
               style = document.createElement('style')
               document.head.appendChild(style)
               style.appendChild(document.createTextNode(css))
               this.par1.style.transform = 'rotate(90deg)'
               search.cl = true
        }else{
            search.anistate = true
                ih = search.st
                eh = sul
        
            css = `@keyframes ${jin}-${search.comp} {
                0% {
                   height: ${eh}px;
               }
               100% {
                   height: ${ih}px;
               }}`
            this.par2.style.animation = `${jin}-${search.comp} 3s`
            this.par2.style.height = `${ih}px`

           style = document.createElement('style')
           document.head.appendChild(style)
           style.appendChild(document.createTextNode(css))
           this.par1.style.transform = 'rotate(0deg)'
           search.cl = false
            }

           function animationEnded(event) {
                //console.log('ANIMATION ENDED')
                //console.log(event.animationName)
                king = event.animationName
                proceed = true
                trig = ''
                for (set = 0; set < king.length && proceed == true; set++) {
                    if (king[set] == '-') {
                        proceed = false
                    }else{
                        trig+= king[set]
                    }
                }
                //console.log(trig)

                love = mecams.find(function (mecams) {
                    return mecams.created == trig
                })
                //onsole.log(love)
                love.anistate = false
            }
        }
    }