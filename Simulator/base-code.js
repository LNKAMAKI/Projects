 
    function start() {
        //func = new makeWave(50,0.02,100,30,7,80,20)
        gamma = -0.1
        //func.update()

            tension = 55
            density = 0.02
            v = (Math.sqrt(tension/density))
            L = 200
            beedsnumber = 60
            radius = (L/beedsnumber)/2
            modos = 15
            ans = []
            bns = []
            beeds = []
            t = 0
            yinitial = 75 // espaçamento vertical
            xinitial = 50 // espaçamento horizontal
            pi = Math.PI
            c = document.getElementById('canvas').getContext('2d') 
            lastTime = 0
            currentTime = 0

            for (n = 0; n < beedsnumber; n++) {
            object = {xinf: n*radius*2, xcenter: n*radius*2 + radius, xsup: n*radius*2 + 2*radius, y: 20, velocity: 0}
            beeds.push(object)
            }
            
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
            }
            }

             animate()
            function animate() {

                t += 0.02

                c.clearRect(0, 0, 300, 150)
                for (beed in beeds) {

                x = beeds[beed].xcenter
                beeds[beed].y = 0
                beeds[beed].velocity = 0
                for (n = 1; n <= modos; n++) {
            
                wn = (n*pi*v)/L
                beeds[beed].y += sen((n*pi*x)/L)*(ans[n - 1]*sen(wn*t) + bns[n - 1]*cos(wn*t))
                beeds[beed].velocity += wn*sen((n*pi*x)/L)*(ans[n - 1]*cos(wn*t) - bns[n - 1]*sen(wn*t))
                
                }

                // desenhar conta
                
                c.beginPath()
                c.arc(x + xinitial,beeds[beed].y + yinitial,radius,0,2*pi) 
                c.fillStyle = 'red'
                c.fill()
                c.stroke()
                c.closePath()
                
            }

            requestAnimationFrame(animate)
            }

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

 cWidth = Number(this.document.getElementById('canvas').offsetWidth) // pega comprimento do canvas
 cHeight = this.document.getElementById('canvas').offsetHeight
 bodyWidth = Number(this.document.body.offsetWidth) // pega comprimento do body do documento
 alt = ((event.y - 50)/cHeight)*150// alt = com limites de y inclusos
 alt2 = ((event.y - 50)/cHeight)*150 // alt2 = sem limites de y inclusos
 mousex = ((event.x - (bodyWidth - cWidth)/2)/cWidth)*300 // mousex dentro das coordenadas do canva
 if (alt >= 50 && alt <= 100) {
 } else if (alt < 50) {
  alt = 50
 }else if (alt > 100){
  alt = 100
 }
 mousey = alt - yinitial
 mousey2 = alt2 - yinitial

 this.document.getElementById('par1').innerText = mousey2
 /*
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
   if (mousedown == true && mousex < beeds[beed].xsup + xinitial && mousex > beeds[beed].xinf + xinitial && mousey2 < beeds[beed].ysup && mousey2 > beeds[beed].yinf && beed != 0 && beed != beedsnumber - 1) {
         dot = beed
         beeds[beed].y = mousey - yinitial
         this.document.getElementById('par4').innerText = 'selected, '
   }
 }*/
 
})

function sen(number) {
    return Math.sin(number)
}
function cos(number) {
    return Math.cos(number)
}
