console.log('aaaa')
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
 if (event.key == 'ArrowRight') {
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

function setIframe (element,source,cont) {
    url = ''
    switch(source) {
        case 1:
            url = 'animal-farm'
            break;
        case 2: 
           url = 'ovelhas!'
           break;
        case 3:
            url = 'napoleão'
        break;
    }
  // if (source != 1) {
   //document.getElementsByClassName('conter')[cont].style.backgroundImage = `url('imagens/sheep.png')`
   //document.getElementsByClassName('conter')[cont].style.backgroundPosition = `center`
   //document.getElementsByClassName('conter')[cont].style.backgroundSize = `contain`
   document.getElementsByClassName('conter')[square].getElementsByTagName('img')[0].setAttribute('src',`imagens/${url}.png`)
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