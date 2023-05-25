console.log('aaaa')
cardson = false
square = 0
slid = 1
animation = 0
window.addEventListener('resize', function() {
    adjustSize(0)
    adjustSize(1)
  });
  
function load() {
    adjustSize(0)
    adjustSize(1)
    document.getElementsByClassName('conter')[0].addEventListener('animationend', () => {
        console.log('ENDED')
        animation = 0
    })
    document.getElementsByClassName('conter')[1].addEventListener('animationend', () => {
        console.log('ENDED')
        animation = 0
    })
}
window.addEventListener('keydown',(event) => {
 console.log(event.key)
 if (event.key == 'ArrowRight' && slid < 9) {
    slide2()
 }else if(event.key == 'ArrowLeft' && slid > 1) {
    slide()
 }
})
function slide() {
   if (slid > 1) {
    if (animation == 0) {
        animation = 1
    console.log('slide!')
        seg = 0.07*window.innerWidth/1536
    //document.getElementsByClassName('square')[square].style.animation = `slide-forward ${seg}s cubic-bezier(1, 1.01, 1, 1.01) forwards`
    document.getElementsByClassName('conter')[square].style.animation = `slide-forward ${seg}s cubic-bezier(1, 1.01, 1, 1.01) forwards`
    slid--
    if (square == 0) {
        square = 1
    }else{
        square = 0
    }

    s2 = document.getElementsByClassName('square')[square]
    //s2.getElementsByClassName('pa')[0].innerText = slid
    if (s2.getElementsByClassName('content').length > 0) {
        console.log('VIXI')
        s2.removeChild(s2.getElementsByClassName('content')[0])
    }
    iframe = document.createElement('iframe')
    iframe.setAttribute('class','content')
    setIframe(iframe,slid,square)
    s2.appendChild(iframe)
    //s2.style.animation = `slide-forward2 ${seg}s cubic-bezier(1, 1.01, 1, 1.01) forwards`
    document.getElementsByClassName('conter')[square].style.animation = `slide-forward2 ${seg}s cubic-bezier(1, 1.01, 1, 1.01) forwards`
}
   }
}
function slide2() {
    if (slid < 9) {
    if (animation == 0) {
        animation = 1
    console.log('slide2!')
    seg = 0.07*window.innerWidth/1536
    //document.getElementsByClassName('square')[square].style.animation = `slide-backward ${seg}s cubic-bezier(1, 1.01, 1, 1.01) forwards`
    document.getElementsByClassName('conter')[square].style.animation = `slide-backward ${seg}s cubic-bezier(1, 1.01, 1, 1.01) forwards`
    slid++
    if (square == 0) {
        square = 1
    }else{
        square = 0
    }
    s1 = document.getElementsByClassName('square')[square]
    //s1.getElementsByClassName('pa')[0].innerText = slid
    if (s1.getElementsByClassName('content').length > 0) {
        console.log('VIXI')
        s1.removeChild(s1.getElementsByClassName('content')[0])
    }
    iframe = document.createElement('iframe')
    iframe.setAttribute('class','content')
    setIframe(iframe,slid,square)
    s1.appendChild(iframe)
    //s1.style.animation = `slide-backward2 ${seg}s cubic-bezier(1, 1.01, 1, 1.01) forwards`
    document.getElementsByClassName('conter')[square].style.animation = `slide-backward2 ${seg}s cubic-bezier(1, 1.01, 1, 1.01) forwards`
}
}
}

function setIframe (element,source,cont) {
    url = ''
    switch(source) {
        case 1:
            url = '<img src="opening.jpg" alt="" style="width: 100%;height:100%;"> <input type="button" id="play" value="Jogar">'
            break;
        case 2: 
        url = ` <div id="fases"> 
           <div class="fase"><img src="condado.jpg" alt=""></div
             > <div class="fase"><div class="blocked"></div>
             <img src="terras-solitárias.jpg" alt=""></div> <div class="fase">
               <img src="valfenda.jpg" alt=""></div> 
               <div class="fase"><img src="montanhas-sombrias.jpg" alt=""></div>
               <div class="fase"><img src="florestas-trevas.jpg" alt=""></div>     
               <div class="fase"><img src="cidade-lago.jpg" alt=""></div> 
               <div class="fase"><img  alt=""></div>
               <div class="fase"><img src="montanha-solitária.jpg" alt=""></div></div>`
               document.getElementsByClassName('square')[square].style.backgroundColor = 'rgb(171 175 177)'
           break;
           case 3:
            url = `
            <img src="bilbo-house.svg" alt="" id="o"><img src="lake.svg" alt="" id="l"><img src="casas-hobbit.svg" id="c"><img src="casas-hobbit.svg" id="c1"><img src="casas-hobbit2.svg" id="c2"><img src="tree.svg" id="tree"><img src="tree.svg" id="tree2"><img src="tree2.svg" id="tree3"><img src="tree2.svg" id="tree5"><img src="tree.svg" id="tree6"><img src="tree2.svg" id="tree7"><img src="tree.svg" id="tree8"><img src="tree2.svg" id="tree9"></img>`
            document.getElementsByClassName('square')[square].style.backgroundColor = 'rgb(166 239 137)'
        break;
        case 4:
            url = ' <img src="lonely-tree.svg" id="lt"><img src="lonely-tree.svg" id="lt2"><img src="lonely-tree.svg" id="lt3"><img src="bonfire.svg" id="f"><img src="lonely-tree.svg" id="lt4"><img src="lonely-tree.svg" id="lt5"><img src="lonely-tree.svg" id="lt6"><img src="lonely-tree.svg" id="lt7"><img src="lonely-tree.svg" id="lt8"><img src="lonely-tree.svg" id="lt9"><img src="lonely-tree.svg" id="lt10"><img src="lonely-tree.svg" id="lt11">'
            document.getElementsByClassName('square')[square].style.backgroundColor = 'rgb(166 239 137)'
        break;
        case 5:
            url = '  <img src="tree2.svg" id="tr1"><img src="tree.svg" id="tr2"><img src="tree.svg" id="tr3"><img src="tree2.svg" id="tr4"><img src="tree.svg" id="tr5"><img src="tree.svg" id="tr6"><img src="tree2.svg" id="tr7"><img src="tree.svg" id="tr8"><img src="rocks.svg" alt="" id="r"> <img src="rocks.svg" alt="" id="r2"><img src="rock2.svg" alt="" id="r3"><img src="rock3.svg" alt="" id="r4"><img src="cachoeira.svg" id="ca"><img src="elrond-house.svg" id="el">'
            document.getElementsByClassName('square')[square].style.backgroundColor = 'rgb(166 239 137)'
            break;
        case 6:
            url = '<img src="mountains.svg" id="mo"><img src="mountain.svg" id="mo1"><img src="mountain.svg" id="mo2"><img src="mountain.svg" id="mo3"><img src="mountain.svg" id="mo4"><img src="mountain.svg" id="mo5"> <img src="mountain.svg" id="mo6"><img src="globin-cave.svg" id="gc">'
            document.getElementsByClassName('square')[square].style.backgroundColor = '#8590a2'
            break;
        case 7:
            url = '<img src="spider-web.svg" alt="" id="spi"><img src="spider-web2.svg" alt="" id="dt1"><img src="spider-web3.svg" alt="" id="dt3"><img src="dark-tree.svg" alt="" id="dt5"><img src="dark-tree.svg" alt="" id="dt6">'
            document.getElementsByClassName('square')[square].style.backgroundColor = '#a2b28e'
            break;
        case 8:
            url = ' <img src="barrel2.svg" id="bar"><img src="barrel.svg" id="bar2"><img src="barrel.svg" id="bar3"><img src="barrel.svg" id="bar4"><img src="barrel2.svg" id="bar5"><img src="lake-hut.svg" alt="" id="lh"><img src="lake-hut.svg" alt="" id="lh2"><img src="lake-hut.svg" alt="" id="lh3"><img src="lake-hut.svg" alt="" id="lh4"><img src="lake-huts.svg" alt="" id="lhs">'
            document.getElementsByClassName('square')[square].style.backgroundColor = '#70D8FA'
            break;
            case 9:
                url = '<img src="erebor.svg" id="er"></img>'
                document.getElementsByClassName('square')[square].style.backgroundColor = '#8590a2'
                break;

            
    
    }
  // if (source != 1) {
   //document.getElementsByClassName('conter')[cont].style.backgroundImage = `url('imagens/sheep.png')`
   //document.getElementsByClassName('conter')[cont].style.backgroundPosition = `center`
   //document.getElementsByClassName('conter')[cont].style.backgroundSize = `contain`
   console.log('cont','!!!!!!!!!!')
   if (square == 1) {
    document.getElementsByClassName('square')[0].innerHTML = ''
   }else{
    document.getElementsByClassName('square')[1].innerHTML = ''
   }
   
   document.getElementsByClassName('square')[square].innerHTML = url + `<img src="bag.png" id="bag" onclick="showcard()">
   <div id="cards">
     <div class="card-collumn">
      <div class="card"><img src="bilbo-card.jpg" alt=""></div>
      <div class="card"><img src="thorin-card.jpg" alt=""></div>
      <div class="card"><img src="elrond-card.jpg" alt=""></div>
      <div class="card"><img src="kili-card.jpg" alt=""></div>
     </div>
     <div class="card-collumn">
       <div class="card"><img src="gollum-card.jpg" alt=""></div>
       <div class="card"><img src="troll.jpg" alt=""></div>
       <div class="card"><img src="azog-card.jpg" alt=""></div>
       <div class="card"><img src="spider-card.jpg" alt=""></div>
     </div>
     <div class="card-collumn">
       <div class="card"><img src="gandalf-card.jpg" alt=""></div>
       <div class="card"><img src="thorin-card.jpg" alt=""></div>
       <div class="card"><img src="elrond-card.jpg" alt=""></div>
       <div class="card"><img src="thorin-card.jpg" alt=""></div>
     </div>
 </div>`
 console.log(document.getElementsByClassName('square')[square])
 
  // document.getElementsByClassName('conter')[square].getElementsByTagName('img')[0].setAttribute('src',`imagens/${url}`)
  // }
}

function adjustSize(ind) {
    width = this.window.innerWidth
    height = this.window.innerHeight
    realwidth = ''
    if (width < height*418/313.3) {
        document.getElementsByClassName('square')[ind].style.width = '100vw'
        realwidth = `${width}`
        document.getElementsByClassName('square')[ind].style.height = `${width*313.3/418}px`
    }else{
    document.getElementsByClassName('square')[ind].style.height = '100vh'
    document.getElementsByClassName('square')[ind].style.width = `${height*418/313.3}px`
    realwidth = `${height*418/313.3}`
    }
    document.getElementsByClassName('square')[ind].style.marginLeft = `${(width - realwidth)/2}px`
}

function showcard () {
    if (cardson == false) {
    document.getElementById('cards').style.display = 'grid'
    cardson = true
    }else{
    document.getElementById('cards').style.display = 'none'
    cardson = false
    }
}
function questions() {
    
}
