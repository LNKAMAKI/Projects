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
        function end() {
        console.log('ENDED')
        animation = 0
        }
        setTimeout(end, 400)
    })
    document.getElementsByClassName('conter')[1].addEventListener('animationend', () => {
        function end2() {
            console.log('ENDED')
            animation = 0
            }
            setTimeout(end2, 400)
    })
}
window.addEventListener('keydown',(event) => {
 console.log(event.key)
 if (event.key == 'ArrowRight' && slid < 30) {
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
        seg = 0.5*window.innerWidth/1536
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
    function delayedExecution2() {
        document.getElementsByClassName('conter')[square].style.animation = `slide-forward2 ${seg}s cubic-bezier(1, 1.01, 1, 1.01) forwards`
      }
      
      setTimeout(delayedExecution2, seg + 400);
}
   }
}
function slide2() {
    if (slid < 30) {
    if (animation == 0) {
        animation = 1
    console.log('slide2!')
    seg = 0.5*window.innerWidth/1536
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
    function delayedExecution() {
        document.getElementsByClassName('conter')[square].style.animation = `slide-backward2 ${seg}s cubic-bezier(1, 1.01, 1, 1.01) forwards`
      }
      setTimeout(delayedExecution, seg + 400);
}}}

function setIframe (element,source,cont) {
    url = ''
    switch(source) {
      case 1: 
      url = '1-introduction'
      break;
      case 2: 
      url = '2-html-intro'
      break;
      case 3: 
      url = '3-html-show'
      break;
      case 4: 
      url = '4-html-basic'
      break;
      case 5: 
      url = '5-tags'
      break;
      case 6: 
      url = '6-html-examples'
      break;
      case 7: 
      url = '7-css-intro'
      break;
      case 8: 
      url = '8-css-show'
      break;
      case 9: 
      url = '9-css-basic'
      break;
      case 10: 
      url = '10-css-examples'
      break;
      case 11: 
      url = '11-css-in-html'
      break;
      case 12: 
      url = '12-js-intro'
      break;
      case 13: 
      url = '13-js-show'
      break;
      case 14: 
      url = '14-js-show'
      break;
      case 15: 
      url = '15-js-examples'
      break;
    }
 
    element.setAttribute('src', `${url}.html`)
    /*
    s = document.getElementsByClassName('conter')[square].getElementsByClassName('square')[0]
    frameo = document.createElement('iframe')
    s.appendChild(frameo)
    frameo.setAttribute('class','content')
    frameo.setAttribute('src',`${url}.html`)*/
}

function adjustSize(ind) {
    width = this.window.innerWidth
    height = this.window.innerHeight
    realwidth = ''
    if (width < height*418/313.3) {
        document.getElementsByClassName('square')[ind].style.width = '100vw'
        realwidth = `${width}`
        document.getElementsByClassName('square')[ind].style.height = `100vh`
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
