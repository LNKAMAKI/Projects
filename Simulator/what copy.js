    
    function start() {
        makeWave(50,0.02,200,60,17)
        //console.log(func.L)
    }
        function makeWave(tensao, densidade, comp, contas, mods, yin, xin) {
            tension = 50
            density = 0.02
            v = (Math.sqrt(tension/density))
            L = 200
            beedsnumber = 60
            radius = (L/beedsnumber)/2
            modos = 17
            ans = []
            bns = []
            beeds = []
            t = 0
            yinitial = 80 // espaçamento vertical
            xinitial = 20 // espaçamento horizontal
            pi = Math.PI
            c = document.getElementById('canvas').getContext('2d') 
            lastTime = 0
            currentTime = 0

            for (n = 0; n < beedsnumber; n++) {
            object = {xinf: n*radius*2, xcenter: n*radius*2 + radius, xsup: n*radius*2 + 2*radius, y: 10, velocity: 0}
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

            //console.log('MOOODOS',this.this.modos)
            animate()
            function animate() {

                //console.log('l',this.L, 'this.modos',this.modos)
                
                t += 0.02

                //t += 0.01
                c.clearRect(0, 0, 300, 150)
                for (beed in beeds) {
                x = beeds[beed].xcenter

                
                beeds[beed].y = 0
                beeds[beed].velocity = 0
                for (n = 1; n <= modos; n++) {
            
                wn = (n*pi*v)/L
                beeds[beed].y += sen((n*pi*x)/L)*(ans[n - 1]*sen(wn*t) + bns[n - 1]*cos(wn*t))
                if (beed == 10) {
                //console.log('y',beeds[beed].y)
                }
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
        t = 0
        update()
    }, 20)
    */
    
}


function sen(number) {
    return Math.sin(number)
}
function cos(number) {
    return Math.cos(number)
}
