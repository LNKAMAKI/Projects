function start() {
    tension = 80
    density = 0.02
    v = (Math.sqrt(tension/density))
    L = 270
    beedsnumber = 60
    radius = (L/beedsnumber)/2
    modos = 14
    ans = []
    bns = []
    beeds = []
    t = 0
    yinitial = 80 // espaçamento vertical
    xinitial = 20 // espaçamento horizontal
    pi = Math.PI
    dot = -1
    gamma = -0
    mousedown = false
    c = document.getElementById('canvas').getContext('2d')
    canv = document.getElementById('canvas')
    cHeight = canv.offsetHeight

    for (n = 0; n < beedsnumber; n++) {
        if (n == 0) {
      object = {xinf: n*radius*2, xcenter: n*radius*2 + radius, xsup: n*radius*2 + 2*radius, y: -40,ycenter: yinitial, yinf: yinitial - radius,ysup: yinitial + radius,  velocity: 0}
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
        let an = -(2*beeds[0].velocity)/(n*pi)
        let bn = -(2*beeds[0].y)/(n*pi) //- (2*beeds[0].velocity)/(n*Math.PI)
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
            this.document.getElementById('par1').innerText = an + ' ' + bn
        }
     }
    }
    
    animate()
    
    
    function animate() {

            t += 0.03

        c.clearRect(0, 0, 300, 150)
        for (beed in beeds) {
        x = beeds[beed].xcenter

        // calculando posições das contas
        
        //if (beed != 0) {
        if (beed != 0) {
        beeds[beed].y = beeds[0].y*(1 - x/L)
        }
        beeds[beed].velocity = beeds[0].velocity*(1 - x/L)
        for (n = 1; n <= modos; n++) {
       
        wn = (n*pi*v)/L
        if (beed != 0) {
        beeds[beed].y += Math.exp(gamma*t) * sen((n*pi*x)/L)*(ans[n - 1]*sen(wn*t) + bns[n - 1]*cos(wn*t))
        
        beeds[beed].velocity +=  Math.exp(gamma*t) * wn*sen((n*pi*x)/L)*(ans[n - 1]*cos(wn*t) - bns[n - 1]*sen(wn*t))
        }
        
        }
    //}


        beeds[beed].ycenter = yinitial + beeds[beed].y
        beeds[beed].yinf = yinitial + beeds[beed].y - radius
        beeds[beed].ysup = yinitial + beeds[beed].y + radius

        // desenhar conta
        c.beginPath()
        c.arc(x + xinitial,beeds[beed].y + yinitial,radius,0,2*pi) 
        if (beed != 0) {
            c.fillStyle = 'red'
        }else{
            c.fillStyle = 'blue'
        }
        c.fill()
        c.lineWidth = '0.6'
        c.stroke()
        c.closePath()
    }

    requestAnimationFrame(animate)
    }

    
    setInterval(() => {
        //if (mousedown == true) {
        if (mousedown == true && dot != -1) {
        beeds[0].y = mousey - yinitial
        t = 0
        update()
        }else{
        dot = -1
        }
        //}
        this.document.getElementById('par2').innerText = mousedown
    }, 20)
    
}

window.addEventListener('mousemove', function (event) {


 cWidth = Number(this.document.getElementById('canvas').offsetWidth)
 bodyWidth = Number(this.document.body.offsetWidth)
 alt = ((event.y)/cHeight)*150
 mousex = ((event.x - (bodyWidth - cWidth)/2)/cWidth)*300
 if (alt >= 50 && alt <= 90) {
 } else if (alt < 50) {
  alt = 50
 }else if (alt > 120){
  alt = 120
 }
 mousey = alt + 65.5 - yinitial
 //beeds[dot].y = mousey - yinitial

 /*
 if (mousedown == true && dot != -1) {
 beeds[0].y = mousey - yinitial
 }else{
    dot = -1
 }*/
 for (beed in beeds) {
    //this.document.getElementById('par1').innerText = mousey + ' ' + beeds[beed].yinf + ' ' + beeds[beed].ysup
   if (mousedown == true && mousex < beeds[beed].xsup + xinitial && mousex > beeds[beed].xinf + xinitial && mousey < beeds[beed].ysup && mousey > beeds[beed].yinf && beed == 0) {
         this.document.getElementById('par3').innerText = 'its touching' + beed
         dot = beed
         //beeds[beed].y = mousey - yinitial
   }
    //console.log(this.document.body.offsetWidth - this.document.getElementById('canvas').offsetWidth)
   //this.document.getElementById('par2').innerText = mousex + ' ' + (Math.round(Number(beeds[beed].xinf)) + xinitial) + ' ' + (Math.round(Number(beeds[beed].xcenter)) + xinitial) + ' ' + (Math.round(Number(beeds[beed].xsup)) + xinitial)
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



/*
   gamma = -0.1
   if (i != dot) {
      intlimits[i].y = Math.exp(gamma*timer) * (intlimits[0].y*(1 - x_center/L))
   }
   
let an = -(2*intlimits[0].y)/(n*Math.PI)
let bn = - (2*velocities[0])/(n*Math.PI)
*/