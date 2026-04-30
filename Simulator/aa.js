let nan = 1
let timer = 0
let change = false
let doty = []
let nowdot = -1
let still = false
function start() {
    func2 = 0
    tension = 80
    density = 0.02
    v = (Math.sqrt(tension/density))
    L = 270
    beedsnumber = 60//(L/500)*250
    radius = (L/beedsnumber)/2
    modos = 19 //beedsnumber/2 
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
        //c.clearRect(0, 0, 300, 150)
        for (beed in beeds) {
        x = beeds[beed].xcenter

        // calculando posições das contas
        
      // if (beed != dot) { 
      //document.getElementById('par1').innerText = nan
      //document.getElementById('par2').innerText = 'timer: ' + timer
      //document.getElementById('par3').innerText = 't: ' + t + ' tension: ' + tension
      
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


    timer += 0.02
},0)

setInterval (() => {
    if (mousedown == true && dot != -1) {
        if (still == false || nowdot != dot) {
            doty = []
            if (func2 != 0) {
            console.log('quebrou')
            //update2()
            }
            func2 = 0
            still = true
            nowdot = dot
            console.log('true',nowdot)
            for (ys in doty) {
                console.log(ys,doty[ys])
            }
        }
        doty.push(mousey)
        //for (ys in doty) {
                //console.log(doty)
            //}
        if (doty.length > 1) {
            //console.log('revolted',doty[doty.length - 1], doty[doty.length - 2])
            if (doty[doty.length - 1]!= doty[doty.length - 2]) {
                //console.log('clear')
                doty = []
                if (func2 != 0) {
                console.log('quebrou')
                //update2()
                }
                func2 = 0
            }
        }

        if (doty.length == 60) {
            console.log('muito tempo parado ',dot)
            b = Number(dot) + 1
            func2 = new makeWave(80,0.02,b*radius*2,b,b/4.3,80,15)// + Number(dot)*radius*2)
        }

        drawWave()
        if (func2 != 0) {
            func2.draw()
        }
    }else{
        doty = []
        if (still == true) {
            if (func2 != 0) {
        console.log('quebrou')
        //update2()
            }
        func2 = 0
        still = false
        }
        drawWave()
    }
},0)

function update2 () {
    ans = []
        bns = []
        for (n = 1; n <= modos; n++) {
            w = (n*pi*v)/L
            an = 0
            bn = 0
            for (beed in beeds) {
                y = 10 //beeds[beed].y
                velocity = 0 //beeds[beed].velocity
                xf = beeds[beed].xsup // limite superior
                xi = beeds[beed].xinf // limite inferior
                an += (2/(w*L))*velocity*(-(L/(n*pi))*(cos((n*pi*xf)/L) - cos((n*pi*xi)/L)))
                bn += (2/L)*y*(-(L/(n*pi))*(cos((n*pi*xf)/L) - cos((n*pi*xi)/L)))
            }
            ans.push(an)
            bns.push(bn)
        }
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

    window.addEventListener('keypress', function(event) {
    if (event.key == 'd') {
        //func2 = new makeWave(80,0.02,270,60,19,110,15)
        //tension = 20
        v = (Math.sqrt(tension/density))
        t = 0
        timer = 0
        
        ans = []
        bns = []
        for (n = 1; n <= modos; n++) {
            w = (n*pi*v)/L
            an = 0
            bn = 0
            for (beed in beeds) {
                y = 10 //beeds[beed].y
                velocity = 0 //beeds[beed].velocity
                xf = beeds[beed].xsup // limite superior
                xi = beeds[beed].xinf // limite inferior
                an += (2/(w*L))*velocity*(-(L/(n*pi))*(cos((n*pi*xf)/L) - cos((n*pi*xi)/L)))
                bn += (2/L)*y*(-(L/(n*pi))*(cos((n*pi*xf)/L) - cos((n*pi*xi)/L)))
            }
            ans.push(an)
            bns.push(bn)
        }
        console.log('hey')
    }
})


}



window.addEventListener('mousemove', function (event) {


 cWidth = Number(this.document.getElementById('canvas').offsetWidth) // pega comprimento do canvas
 bodyWidth = Number(this.document.body.offsetWidth) // pega comprimento do body do documento
 alt = ((event.y)/cHeight)*150 // alt = com limites de y inclusos
 alt2 = ((event.y)/cHeight)*150 // alt2 = sem limites de y inclusos
 mousex = ((event.x - (bodyWidth - cWidth)/2)/cWidth)*300 // mousex dentro das coordenadas do canva
 if (alt >= 50 && alt <= 100) {
 } else if (alt < 50) {
  alt = 50
 }else if (alt > 100){
  alt = 100
 }
 mousey = alt + 65.5 - yinitial // 65.5 - referente ao padding superior
 mousey2 = alt2 + 65.5 - yinitial

 if (mousedown == true && dot != -1) { // se mouse está pressionado e conta foi selecionada
    //if (func2 == 0){
 beeds[dot].y = mousey - yinitial
    //}else{
        //beeds[dot].y = 0
    //}
 }else{
    this.document.getElementById('par4').innerText = 'unselected'
    dot = -1
 }
  
 for (beed in beeds) {
   //if (beed == 2) {
   if (mousedown == true && mousex < beeds[beed].xsup + xinitial && mousex > beeds[beed].xinf + xinitial && mousey2 < beeds[beed].ysup && mousey2 > beeds[beed].yinf && beed != 0 && beed != beedsnumber - 1) {
         dot = beed
         //doty.push(mousey)
         beeds[beed].y = mousey - yinitial
         this.document.getElementById('par4').innerText = 'selected, '
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
})

window.addEventListener('mouseup', function (event) {
    mousedown = false
})

// quando o atrito muda
function changeDamping() {
    constant2 = f()
    constant = nan
    timer = 0
    document.getElementById('par3').innerText = 'nan: ' + nan + ', constant2: ' + constant2
    gamma = Number(document.getElementById('damping').value)*-1
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


function makeWave(tensao, densidade, comp, contas, mods, yin, xin) {
            this.tension = tensao
            this.density = densidade
            this.v = (Math.sqrt(this.tension/this.density))
            this.L = comp
            this.beedsnumber = contas
            this.radius = (this.L/this.beedsnumber)/2
            this.modos = mods
            this.ans = []
            this.bns = []
            this.beeds = []
            this.t = 0
            this.timer = 0
            this.yinitial = yin // espaçamento vertical
            this.xinitial = xin// espaçamento horizontal
            pi = Math.PI
            c = document.getElementById('canvas').getContext('2d') 

            console.log('beed',beeds)
            for (n = 0; n < this.beedsnumber; n++) {
                if (n == this.beedsnumber - 1) {
                    object = {xinf: n*this.radius*2, xcenter: n*this.radius*2 + this.radius, xsup: n*this.radius*2 + 2*this.radius, y: 0, velocity: 0}
                }else{
            object = {xinf: n*this.radius*2, xcenter: n*this.radius*2 + this.radius, xsup: n*this.radius*2 + 2*this.radius, y: 10, velocity:0}
                }
                //beeds[beedsnumber - 1 - n].y
            this.beeds.push(object)
            //console.log('beedeew',this.beeds[n].y)
            }
            
            this.hey = function () {
                console.log('this is this.L', this.L)
            }
            
            //this.update = function () {
                this.ans = []
                this.bns = []
            for (n = 1; n <= this.modos; n++) {
                w = (n*pi*this.v)/this.L
                an =  0//-(2*this.beeds[0].velocity)/(n*pi)
                bn = -(2*this.beeds[0].y)/(n*pi)//((2*this.beeds[this.beedsnumber - 1].y)/(n*pi))*(1**n)
                for (i = 0; i < this.beedsnumber; i++) {
                    console.log('y',beedsnumber - 1 - i,beeds[beedsnumber - 1 - i].y,dot)
                    y = this.beeds[i].y
                    //y = this.beeds[i].y
                    velocity = this.beeds[i].velocity //beeds[beedsnumber - 1 - i].velocity
                    //velocity = this.beeds[i].velocity
                    xf = beeds[i].xsup // limite superior
                    xi = beeds[i].xinf // limite inferior
                    an += (2/(w*this.L))*velocity*(-(this.L/(n*pi))*(cos((n*pi*xf)/this.L) - cos((n*pi*xi)/this.L)))
                    bn += (2/this.L)*y*(-(this.L/(n*pi))*(cos((n*pi*xf)/this.L) - cos((n*pi*xi)/this.L)))
                }
                this.ans.push(an)
                this.bns.push(bn)
            }
            //}

            this.ani= setInterval (() => {

                this.t += 0 //0.018
                for (beed in this.beeds) {
                x = this.beeds[beed].xcenter

                if (beed != 0) {
                this.beeds[beed].y = this.beeds[0].y*(1 - x/this.L)
                this.beeds[beed].velocity = 0//this.beeds[0].velocity*(1 - x/this.L)
                }
                
                for (n = 1; n <= this.modos; n++) {
            
                wn = (n*pi*this.v)/this.L
                if (beed != 0) {
                this.beeds[beed].y += this.f()*sen((n*pi*x)/this.L)*(this.ans[n - 1]*sen(wn*this.t) + this.bns[n - 1]*cos(wn*this.t))
                this.beeds[beed].velocity += this.f()*wn*sen((n*pi*x)/this.L)*(this.ans[n - 1]*cos(wn*this.t) - this.bns[n - 1]*sen(wn*this.t))
                }

                }
                this.timer += 0 //0.0001
            }

            }, 0)

            this.draw = function () {
                for (beed in this.beeds) {
                    x = this.beeds[beed].xcenter
                 c.beginPath()
                c.arc(x + this.xinitial,this.beeds[beed].y + this.yinitial,this.radius,0,2*pi) 
                c.fillStyle = 'yellow'
                c.fill()
                c.stroke()
                c.closePath()
                }
            }

            this.f = function() {
            return Math.exp(gamma*this.timer)
            }

    
    
    /*
    setInterval(() => {
        this.t = 0
        update()
    }, 20)
    */
    
}