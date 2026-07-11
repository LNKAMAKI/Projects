 let nan = 1
 let change_damping = false
 let change_tension = false
    function start() {
        
            gamma = -0.5
            constant = 1
            tension = 80
            density = 0.004
            v = (Math.sqrt(tension/density))
            L = 270
            beedsnumber = 60
            radius = (L/beedsnumber)/2
            modos = 19 //9
            ans = []
            bns = []
            beeds = []
            t = 0
            yinitial = 80 // espaçamento vertical
            xinitial = 15 // espaçamento horizontal
            pi = Math.PI
            dot = -1
            mousedown = false
            c = document.getElementById('canvas').getContext('2d') 
            lastTime = 0
            currentTime = 0

            for (n = 0; n < beedsnumber; n++) {
            object = {xinf: n*radius*2, xcenter: n*radius*2 + radius, xsup: n*radius*2 + 2*radius, 
                y: 0, yinf: - radius,ysup: radius, velocity: 0}
            beeds.push(object)
            }
            
            update()
            function update() {
                ans = []
                bns = []
            for (n = 1; n <= modos; n++) {
                //console.log('modo',n)
                w = (((n*pi*v)/L)**2 - gamma**2)**(1/2)  //(n*pi*v)/L
                an = 0
                bn = 0
                for (beed in beeds) {
                    y = beeds[beed].y
                    velocity = beeds[beed].velocity
                    xf = beeds[beed].xsup // limite superior
                    xi = beeds[beed].xinf // limite inferior
                    an += (2/L)*velocity*(-(L/(n*pi))*(cos((n*pi*xf)/L) - cos((n*pi*xi)/L)))
                    bn += (2/L)*y*(-(L/(n*pi))*(cos((n*pi*xf)/L) - cos((n*pi*xi)/L)))
                }
                ans.push((an - gamma*bn)/w)
                bns.push(bn)
            }
            }

             //animate()
            //function animate() {
            setInterval(() => {
                t += 0.008
            
                c.clearRect(0, 0, 300, 150)
                for (beed in beeds) {
                x = beeds[beed].xcenter

                if (beed != dot) {
                    beeds[beed].y = 0
                    beeds[beed].velocity = 0
                    for (n = 1; n <= modos; n++) {
                      wn = (((n*pi*v)/L)**2 - gamma**2)**(1/2) 
                      beeds[beed].y += constant*f()*sen((n*pi*x)/L)*(ans[n - 1]*sen(wn*t) + bns[n - 1]*cos(wn*t))
                      nan = constant*f()
                      beeds[beed].velocity += constant*f()*wn*sen((n*pi*x)/L)*(ans[n - 1]*cos(wn*t) - bns[n - 1]*sen(wn*t)) + constant*gamma*f()*sen((n*pi*x)/L)*(ans[n - 1]*sen(wn*t) + bns[n - 1]*cos(wn*t))
                    }
                    
                }

                  beeds[beed].yinf = beeds[beed].y - radius
                  beeds[beed].ysup = beeds[beed].y + radius

                // desenhar conta
                
                c.beginPath()
                c.arc(x + xinitial,beeds[beed].y + yinitial,radius,0,2*pi) 
                if (beed != dot) {
                 c.fillStyle = 'red'
                }else{
                 c.fillStyle = 'blue'
                }
                c.fill()
                c.stroke()
                c.closePath()

                //window.document.getElementById('par2').innerText = mousedown
                
            }

            //requestAnimationFrame(animate)
            //}
           
            //this.document.getElementById('par1').innerText = 'wn:' + wn
            //this.document.getElementById('par1').innerText = 't:' + t
            this.document.getElementById('par2').innerText = 't: ' + t
            this.document.getElementById('par4').innerText = 'const: ' + constant
            this.document.getElementById('par3').innerText = 'nan: ' + nan
        },0)

         setInterval(() => {
          if (dot != -1 || change_damping == true || change_tension == true) {
            gamma = Number(document.getElementById('damping').value)*-1
            tension = Number(document.getElementById('tension').value)
            v = (Math.sqrt(tension/density))
            t = 0
            update()
            change_damping = false
            change_damping = tension
          }
         },0)
            /*
        setInterval(() => {
            c.clearRect(0, 0, 300, 150)
            //func.draw()
            //func2.draw()

          for (beed in beeds) {
             x = beeds[beed].xcenter

            c.beginPath()
            c.arc(x + xinitial,beeds[beed].y + yinitial,radius,0,2*pi) 
            c.fillStyle = 'red'
            c.fill()
            c.stroke()
            c.closePath()
          }
        }, 0);
        */
        //func.ani()

         //func2 = new makeWave(50,0.02,100,30,7,110,20)
        //func2.update()
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
            object = {xinf: n*this.radius*2, xcenter: n*this.radius*2 + this.radius, xsup: n*this.radius*2 + 2*this.radius, y: beeds[n].y, velocity: 0}
            this.beeds.push(object)
            }
            
            this.hey = function () {
                console.log('this is this.L', this.L)
            }
            
            this.update = function () {
                this.ans = []
                this.bns = []
            for (n = 1; n <= this.modos; n++) {
                w = (n*pi*this.v)/this.L
                an = 0
                bn = 0
                for (beed in this.beeds) {
                    y = this.beeds[beed].y
                    velocity = this.beeds[beed].velocity
                    xf = this.beeds[beed].xsup // limite superior
                    xi = this.beeds[beed].xinf // limite inferior
                    an += (2/(w*this.L))*velocity*(-(this.L/(n*pi))*(cos((n*pi*xf)/this.L) - cos((n*pi*xi)/this.L)))
                    bn += (2/this.L)*y*(-(this.L/(n*pi))*(cos((n*pi*xf)/this.L) - cos((n*pi*xi)/this.L)))
                }
                this.ans.push(an)
                this.bns.push(bn)
            }
            }

            this.ani= setInterval (() => {

                this.t += 0.005
                for (beed in this.beeds) {
                x = this.beeds[beed].xcenter

                
                this.beeds[beed].y = 0
                this.beeds[beed].velocity = 0
                for (n = 1; n <= this.modos; n++) {
            
                wn = (n*pi*this.v)/this.L
                this.beeds[beed].y += this.f()*sen((n*pi*x)/this.L)*(this.ans[n - 1]*sen(wn*this.t) + this.bns[n - 1]*cos(wn*this.t))
                this.beeds[beed].velocity += this.f()*wn*sen((n*pi*x)/this.L)*(this.ans[n - 1]*cos(wn*this.t) - this.bns[n - 1]*sen(wn*this.t))
                
                }
                this.timer += 0.0001
            }

            }, 0)

            this.draw = function () {
                for (beed in this.beeds) {
                    x = this.beeds[beed].xcenter
                 c.beginPath()
                c.arc(x + this.xinitial,this.beeds[beed].y + this.yinitial,this.radius,0,2*pi) 
                c.fillStyle = 'red'
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


window.addEventListener('mousemove', function (event) {
 cWidth = Number(this.document.getElementById('canvas').offsetWidth)
 cHeight = Number(this.document.getElementById('canvas').offsetHeight) 
 bodyWidth = Number(this.document.body.offsetWidth)
 yfix = 50
 mousey = ((event.y - yfix)/cHeight)*150 
 mousex = ((event.x - (bodyWidth - cWidth)/2)/cWidth)*300 
 if (mousey >= 40 && mousey <= 110) {
 } else if (mousey < 40) {
  mousey = 40
 }else if (mousey > 110){
  mousey = 110
 }
 mousey2 = ((event.y - 50)/cHeight)*150
 

 if (dot != -1 && mousedown == true) { // se mouse está pressionado e conta foi selecionada
 beeds[dot].y = mousey - yinitial
 }else{
    dot = -1
 }
  
 for (beed in beeds) {
  if (mousedown == true) {
    if (mousex < beeds[beed].xsup + xinitial && mousex > beeds[beed].xinf + xinitial 
    && mousey2 < beeds[beed].ysup + yinitial && mousey2 > beeds[beed].yinf + yinitial) {
        yan = Math.round(beeds[beed].yinf + yinitial)
        yup = Math.round(beeds[beed].ysup + yinitial)
        this.document.getElementById('par1').innerText = yan + ' < ' + mousey2 + ' < ' + yup
         dot = beed
         beeds[beed].y = mousey - yinitial
    }
   }
 }
 
 })

 window.addEventListener('mousedown', function(event) {
    mousedown = true
 })

  window.addEventListener('mouseup', function(event) {
    mousedown = false
 })

function sen(number) {
    return Math.sin(number)
}
function cos(number) {
    return Math.cos(number)
}

function f() {
    return Math.exp(gamma*t)
}

function changeDamping() {
    change_damping = true
}

function changeTension() {
    change_tension = true
}

