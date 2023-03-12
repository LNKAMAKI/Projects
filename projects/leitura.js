console.log('aaa')
square = 0
slid = 1
animation = 0
function load() {
    document.getElementsByClassName('square')[0].addEventListener('animationend', () => {
        console.log('ENDED')
        animation = 0
    })
    document.getElementsByClassName('square')[1].addEventListener('animationend', () => {
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
        seg = 0.3
    document.getElementsByClassName('square')[square].style.animation = `slide-forward ${seg}s cubic-bezier(1, 1.01, 1, 1.01) forwards`
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
    setIframe(iframe,slid)
    s2.appendChild(iframe)
    s2.style.animation = `slide-forward2 ${seg}s cubic-bezier(1, 1.01, 1, 1.01) forwards`
}
   }
}
function slide2() {
    if (animation == 0) {
        animation = 1
    console.log('slide2!')
    seg = 0.3
    document.getElementsByClassName('square')[square].style.animation = `slide-backward ${seg}s cubic-bezier(1, 1.01, 1, 1.01) forwards`
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
    setIframe(iframe,slid)
    s1.appendChild(iframe)
    s1.style.animation = `slide-backward2 ${seg}s cubic-bezier(1, 1.01, 1, 1.01) forwards`
}
}

function setIframe (element,source) {
    url = ''
    switch(source) {
        case 1:
            url = 'fat.html'
            break;
        case 2: 
           url = 'leitura.html'
           break;
           case 3:
            url = 'leitura.html'
            break;

    }
    //element.setAttribute('src',url)
}
