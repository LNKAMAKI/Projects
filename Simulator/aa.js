let timer = 0
let change = false // change Tension
function start() {
    func2 = 0
    tension = 80
    density = 0.02
    v = (Math.sqrt(tension/density))
    L = 270
    beedsnumber = 60//(L/500)*250
    radius = (L/beedsnumber)/2
    modos = 19
    ans = []
    bns = []
    beeds = []
    t = 0
    yinitial = 80 // espaçamento vertical
    xinitial = 15 // espaçamento horizontal
    pi = Math.PI
    dot = -1
    gamma = -0.1
    mousedown = false
    constant = 1
    //Math.exp(gamma*t) //f()
    c = document.getElementById('canvas').getContext('2d')
    canv = document.getElementById('canvas')
    cHeight = canv.offsetHeight

    for (n = 0; n < beedsnumber; n++) {
        if (0 == 0) {
      object = {xinf: n*radius*2, xcenter: n*radius*2 + radius, xsup: n*radius*2 + 2*radius, y: 0,ycenter: yinitial, yinf: yinitial - radius,ysup: yinitial + radius,  velocity: 0}
      beeds.push(object)
        }else{
            object = {xinf: n*radius*2, xcenter: n*radius*2 + radius, xsup: n*radius*2 + 2*radius, y: 0, velocity: 0}
      beeds.push(object)
        }
    }


    //an = 2/(w*L)*Integral(velocity.sen(n*pi*x/L).dx)
    //bn = (2/L)*Integral(y.sen(n*pi*x/L).dx)
    
    update()
    
    
    function update() {
        //document.getElementById('par4').innerText = ''
         ans = []
         bns = []
     for (n = 1; n <= modos; n++) {
        w = (n*pi*v)/L
        an = 0
        bn = 0
        for (beed in beeds) {
            y = beeds[beed].y
            velocity = beeds[beed].velocity
            xf = beeds[beed].xsup // limite superior
            xi = beeds[beed].xinf // limite inferior
            an += (2/(w*L))*velocity*(-(L/(n*pi))*(cos((n*pi*xf)/L) - cos((n*pi*xi)/L)))
            bn += (2/L)*y*(-(L/(n*pi))*(cos((n*pi*xf)/L) - cos((n*pi*xi)/L)))
        }
        ans.push(an)
        //document.getElementById('par4').innerText += Math.round(an) + ', '
        bns.push(bn)
        if (n == 1) {
            //this.document.getElementById('par1').innerText = an + ' ' + bn
        }
     }
    }
    
    //animate()
    
    
    setInterval( () => {
        
        t += 0.018
        for (beed in beeds) {
        x = beeds[beed].xcenter

        // calculando posições das contas
      
            if (beed != dot) {
            beeds[beed].y = 0
            beeds[beed].velocity = 0
            for (n = 1; n <= modos; n++) {
        
            wn = (n*pi*v)/L
            beeds[beed].y += constant*f()*sen((n*pi*x)/L)*(ans[n - 1]*sen(wn*t) + bns[n - 1]*cos(wn*t))
            nan = constant*f()
            beeds[beed].velocity += constant*f()*wn*sen((n*pi*x)/L)*(ans[n - 1]*cos(wn*t) - bns[n - 1]*sen(wn*t))
        }
    }

        beeds[beed].ycenter = yinitial + beeds[beed].y
        beeds[beed].yinf = yinitial + beeds[beed].y - radius
        beeds[beed].ysup = yinitial + beeds[beed].y + radius

    }

    drawWave()
    timer += 0.02
},0)

 function drawWave() {
    c.clearRect(0, 0, 300, 150)
    for (beed in beeds){
        c.beginPath()
        x = beeds[beed].xcenter
        if (func2 == 0 || 0 == 0) {
        c.arc(x + xinitial,beeds[beed].y + yinitial,radius,0,2*pi) 
        }else{
            //console.log('func2',func2.beeds[beed - dot].y)
            c.arc(x + xinitial,func2.beeds[beed].y + yinitial,radius,0,2*pi) 
            beeds[beed].y = func2.beeds[beed].y
        }
        if (beed != dot) {
            c.fillStyle = 'red'
        }else{
            c.fillStyle = 'blue'
        }
        c.fill()
        c.lineWidth = '0.6'
        c.stroke()
        c.closePath()
    }
}

    setInterval(() => {
        // mousedown == true &&
        //if (dot != -1 || change == true) {
            //tension += 0.1
            
            v = (Math.sqrt(tension/density))
            constant = 1
            timer = 0
            t = 0
            update()
            change = false
            
        //}
        //this.document.getElementById('par2').innerText = mousedown
    }, 0)



}



window.addEventListener('mousemove', function (event) {

 cWidth = Number(this.document.getElementById('canvas').offsetWidth)
 cHeight = Number(this.document.getElementById('canvas').offsetHeight) 
 bodyWidth = Number(this.document.body.offsetWidth)
 yfix = 50
 mousey = ((event.y - yfix)/cHeight)*150 
 mousex = ((event.x - (bodyWidth - cWidth)/2)/cWidth)*300 
 if (mousey >= 50 && mousey <= 100) {
 } else if (mousey < 50) {
  mousey = 50
 }else if (mousey > 140){
  mousey = 140
 }
 mousey2 = ((event.y - 50)/cHeight)*150
 
 this.document.getElementById('par1').innerText = `${ ((event.y)/cHeight)*150 + 65.5 - yinitial} ${mousey}`
  this.document.getElementById('par2').innerText = event.x
  this.document.getElementById('par3').innerText =  'height: ' + bodyWidth

 if (mousedown == true && dot != -1) { // se mouse está pressionado e conta foi selecionada
 beeds[dot].y = mousey - yinitial
 }else{
    this.document.getElementById('par4').innerText = 'unselected'
    dot = -1
 }
  
 for (beed in beeds) {
   if (mousedown == true && mousex < beeds[beed].xsup + xinitial && mousex > beeds[beed].xinf + xinitial && mousey2 < beeds[beed].ysup && mousey2 > beeds[beed].yinf && beed != 0 && beed != beedsnumber - 1) {
         dot = beed
         beeds[beed].y = mousey - yinitial
         this.document.getElementById('par4').innerText = `selected, ${dot}`
   }
 }
 
})

window.addEventListener('mousedown', function (event) {
    mousedown = true
    console.log(event.y)
})

window.addEventListener('mouseup', function (event) {
    mousedown = false
})

// quando o atrito muda
function changeDamping() {
    
    v = (Math.sqrt(tension/density))
            constant = nan
            t = 0
            timer = 0
            update()
            change = false
     /*
    constant = nan
    timer = 0
    document.getElementById('par3').innerText = 'nan: ' + nan + ', constant2: ' + constant2
    gamma = Number(document.getElementById('damping').value)*-1
    */
}

// quando a tensão muda
function changeTension() {
    change = true
    tension = Number(document.getElementById('tension').value)
}

function f() {
    return Math.exp(gamma*timer)
}

function sen(number) {
    return Math.sin(number)
}

function cos(number) {
    return Math.cos(number)
}

