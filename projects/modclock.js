doit = false
function load() {
//console.log('hi')

arrangeState(12)
modnum = document.getElementsByClassName('modnum')[0]
fnum = document.getElementsByClassName('fnum')[0]
/*
modnum.addEventListener('blur', function() {
    console.log('Input in on blur')
    arrangeState(modnum.value)
  })
  */
  modnum.addEventListener('input', function() {
    console.log('Input value changed') 
    if (modnum.value <= 20 && modnum.value > 0) {
    arrangeState(modnum.value,fnum.value)
    }
  })

  fnum.addEventListener('input', function() {
    console.log('Input value changed') 
    if (modnum.value <= 20 && modnum.value > 0) {
    arrangeState(modnum.value,fnum.value)
    }
  })
}

function arrangeState(mod,steps) {
    console.log('steps',steps)
    canvas = document.getElementById('can')
    c = canvas.getContext('2d')
    c.clearRect(0,0,300,150)
    c.fillStyle = 'black'
    c.lineWidth = 1
    
    numbersplit = mod
    pi = Math.PI
    st = 1.5
    end = 1.5 //+ 2/numbersplit
    r = Math.random()*255
    g = Math.random()*255
    b = Math.random()*255
    c.strokeStyle = `rgb(${r},${g},${b})`
    
    
    c.beginPath()
    c.arc(150,75,70,0,pi*2,false)
    c.strokeStyle = `black`
    c.fillStyle = 'cyan'
    c.fill()
    c.stroke()
    
    c.beginPath()
    c.arc(150,75,65,0,pi*2,false)
    c.fillStyle = `white`
    c.fill()
    
    num = 0
    
    for (a = 0; a < numbersplit; a++) {
        console.log(a)
        console.log(st,end)
        c.beginPath()
        if (end >= 2) {
            end = end - 2
        }
    r = Math.random()*255
    g = Math.random()*255
    b = Math.random()*255
    c.arc(150,75,65,pi*st,pi*end,false)
    x1 = 150 + Math.cos(end*pi)*65
    y1 = 75 + Math.sin(end*pi)*65
    x = 150 + Math.cos(end*pi)*60
    y = 75 + Math.sin(end*pi)*60
    c.strokeStyle = 'black'
    c.stroke()
    c.beginPath()
    c.moveTo(x1, y1)
    c.lineTo(x, y)
    c.fillStyle = 'black'
    if (end >= 0 && end <= 0.2) {
        cos = Math.cos(end*pi)
        sin = Math.sin(end*pi)
        c.fillText(num,x - 6*cos,y - 6*sin)
    }else if (end > 0.2 && end <= 0.3) {
        cos = Math.cos(end*pi)
        sin = Math.sin(end*pi)
        c.fillText(num,x - 4*cos,y - 4*sin)
    }else if (end > 0.3 && end <= 0.4){
        cos = Math.cos(end*pi)
        sin = Math.sin(end*pi)
        c.fillText(num,x - 2*cos,y - 2*sin)
    }else if (end > 0.4 && end <= 1.1){
        cos = Math.cos(end*pi)
        sin = Math.sin(end*pi)
        c.fillText(num,x - 0.4*cos,y - 0.4*sin)
    }else if (end > 1.1 && end <= 1.3){
        cos = Math.cos(end*pi)
        sin = Math.sin(end*pi)
        c.fillText(num,x - 3*cos,y - 3*sin)
    }else if (end > 1.3 && end < 1.5){
        cos = Math.cos(end*pi)
        sin = Math.sin(end*pi)
        c.fillText(num,x - 4*cos,y - 4*sin)
    }else if (end >= 1.5 && end <= 1.7){
        cos = Math.cos(end*pi)
        sin = Math.sin(end*pi)
        c.fillText(num,x - 9*cos,y - 9*sin)
    }else{
        cos = Math.cos(end*pi)
        sin = Math.sin(end*pi)
        c.fillText(num,x - 8*cos,y - 8*sin)
    }
    num++
    c.strokeStyle = `rgb(0,0,0)`
    c.stroke()
    st = end
    if (a != numbersplit - 1) {
    end = end + 2/numbersplit
    }
    }
    c.beginPath()
    console.log(end)
    c.arc(150,75,65,pi*end,1.5*pi,false)
    c.stroke()
    
    c.beginPath()
    c.arc(150,75,1,0,pi*2,false)
    c.strokeStyle = `black`
    c.fill()
    c.stroke()

    c.beginPath()
    c.arc(150,75,65,1.5*pi,1.5*pi + 2/numbersplit*steps*pi,false)
    c.strokeStyle = 'transparent'
    c.stroke()

   xh = 150 + Math.cos(1.5*pi + 2/numbersplit*steps*pi)*50
   yh = 75 + Math.sin(1.5*pi + 2/numbersplit*steps*pi)*50
   c.beginPath()
   c.moveTo(xh, yh)
   c.lineTo(150,75)
   c.strokeStyle = 'gray'
   c.stroke()
}
window.addEventListener('keyup', function(event) {
    //console.log(event.key)
    if (event.key == 'p') {
        p()
    }
})
