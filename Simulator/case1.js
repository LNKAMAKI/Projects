let nan = 1
let timer = 0
let change = false
function start() {
    tension = 80
    density = 0.02
    v = (Math.sqrt(tension/density))
    L = 270
    beedsnumber = 60//(L/500)*250
    radius = (L/beedsnumber)/2
    modos = 15 //beedsnumber/2 
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
        bns.push(bn)
        if (n == 1) {
            //this.document.getElementById('par1').innerText = an + ' ' + bn
        }
     }
    }
    
    animate()
    
    
    function animate() {

        t += 0.05
        //timer += 0.02
        c.clearRect(0, 0, 300, 150)
        for (beed in beeds) {
        x = beeds[beed].xcenter

        // calculando posições das contas
        
      // if (beed != dot) { 
      document.getElementById('par1').innerText = nan
      document.getElementById('par2').innerText = 'timer: ' + timer
      document.getElementById('par3').innerText = 't: ' + t + ' tension: ' + tension
      document.getElementById('par4').innerText = change
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
        if (beed == 5) {
           // this.document.getElementById('par1').innerText = beeds[beed].y
        }
        beeds[beed].yinf = yinitial + beeds[beed].y - radius
        beeds[beed].ysup = yinitial + beeds[beed].y + radius

        // desenhar conta
        c.beginPath()
        c.arc(x + xinitial,beeds[beed].y + yinitial,radius,0,2*pi) 
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

    timer += 0.02
    requestAnimationFrame(animate)
    }

    setInterval(() => {
        if ((mousedown == true && dot != -1) || change == true) {
            //beeds[dot].y = mousey - yinitial
            //tension += 0.1
            v = (Math.sqrt(tension/density))
            constant = 1
            timer = 0
            t = 0
            update()
            change = false
        }
        //this.document.getElementById('par2').innerText = mousedown
    }, 0)
}

window.addEventListener('mousemove', function (event) {


 cWidth = Number(this.document.getElementById('canvas').offsetWidth)
 bodyWidth = Number(this.document.body.offsetWidth)
 alt = ((event.y)/cHeight)*150
 alt2 = ((event.y)/cHeight)*150
 mousex = ((event.x - (bodyWidth - cWidth)/2)/cWidth)*300
 if (alt >= 50 && alt <= 90) {
 } else if (alt < 50) {
  alt = 50
 }else if (alt > 120){
  alt = 120
 }
 mousey = alt + 65.5 - yinitial
 mousey2 = alt2 + 65.5 - yinitial
 //beeds[dot].y = mousey - yinitial

 if (mousedown == true && dot != -1) {
 beeds[dot].y = mousey - yinitial
 }else{
    dot = -1
 }
  //this.document.getElementById('par3').innerText = ''
 for (beed in beeds) {
   //if (beed == 2) {
   if (mousedown == true && mousex < beeds[beed].xsup + xinitial && mousex > beeds[beed].xinf + xinitial && mousey2 < beeds[beed].ysup && mousey2 > beeds[beed].yinf && beed != 0 && beed != beedsnumber - 1) {
         //this.document.getElementById('par3').innerText += 'its touching' + beed
         dot = beed
         beeds[beed].y = mousey - yinitial
   }
//}
    //console.log(this.document.body.offsetWidth - this.document.getElementById('canvas').offsetWidth)
    if (beed == 2) {
    //his.document.getElementById('par1').innerText = mousey + ' ' + beeds[beed].yinf + ' ' + beeds[beed].ysup
   //this.document.getElementById('par2').innerText = mousex + ' ' + (Math.round(Number(beeds[beed].xinf)) + xinitial) + ' ' + (Math.round(Number(beeds[beed].xcenter)) + xinitial) + ' ' + (Math.round(Number(beeds[beed].xsup)) + xinitial)
    }
     //console.log(`menor que ${beeds[beed].ysup} e maior que ${beeds[beed].yinf}`)
 }
 
})

window.addEventListener('mousedown', function (event) {

    mousedown = true
    console.log('down')

})

window.addEventListener('mouseup', function (event) {

    mousedown = false
    console.log('up')

})

function sen(number) {
    return Math.sin(number)
}

function cos(number) {
    return Math.cos(number)
}

window.addEventListener('keypress', function(event) {
    if (event.key == 'd') {
        //tension = 20
        //v = (Math.sqrt(tension/density))
        //t = 0
        //timer = 0
        //update()
    }
})

function changeDamping() {
    constant2 = f()
    constant = nan
    timer = 0
    document.getElementById('par3').innerText = 'nan: ' + nan + ', constant2: ' + constant2
    gamma = Number(document.getElementById('damping').value)*-1
}

function changeTension() {
    change = true
    tension = Number(document.getElementById('tension').value)
    //v = (Math.sqrt(tension/density))
    //constant = nan
    //timer = 0
   // update()
}

function f() {
    return Math.exp(gamma*timer)
}