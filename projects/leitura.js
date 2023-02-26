console.log('aaa')
square = 0
slid = 1
window.addEventListener('keydown',(event) => {
 console.log(event.key)
 if (event.key == 'ArrowRight') {
    slide2()
 }else if(event.key == 'ArrowLeft') {
    slide()
 }
})
function slide() {
    console.log('slide!')
    if (slid > 1) {
        seg = 0.4
    document.getElementsByClassName('square')[square].style.animation = `slide-forward ${seg}s cubic-bezier(1, 1.01, 1, 1.01) forwards`
    slid--
    if (square == 0) {
        square = 1
    }else{
        square = 0
    }

    s2 = document.getElementsByClassName('square')[square]
    s2.getElementsByClassName('pa')[0].innerText = slid
    s2.style.animation = `slide-forward2 ${seg}s cubic-bezier(1, 1.01, 1, 1.01) forwards`
}
}
function slide2() {
    console.log('slide2!')
    seg = 0.4
    document.getElementsByClassName('square')[square].style.animation = `slide-backward ${seg}s cubic-bezier(1, 1.01, 1, 1.01) forwards`
    slid++
    if (square == 0) {
        square = 1
    }else{
        square = 0
    }
    s1 = document.getElementsByClassName('square')[square]
    s1.getElementsByClassName('pa')[0].innerText = slid
    s1.style.animation = `slide-backward2 ${seg}s cubic-bezier(1, 1.01, 1, 1.01) forwards`
}