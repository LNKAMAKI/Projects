    
    function start() {
    tension = 55
    density = 0.02
    v = (Math.sqrt(tension/density))
    L = 200
    beedsnumber = 80
    radius = (L/beedsnumber)/2
    modos = 10
    ans = []
    bns = []
    beeds = []
    dot = 20
    t = 0
    div = 4
    yinitial = 80 // espaçamento vertical
    xinitial = 20 // espaçamento horizontal
    pi = Math.PI
    c = document.getElementById('canvas').getContext('2d') 
    lastTime = 0
    currentTime = 0
    pins = [{initial: 0, final: dot},{initial: dot, final: beedsnumber - 1}]

     for (pin in pins) {
        pins[pin].beeds = (pins[pin].final - pins[pin].initial + 1)
        pins[pin].width = 2*radius*(pins[pin].final - pins[pin].initial + 1)

    if (pin == 0){
        pins[pin].take = 0
    }else{
         pins[pin].take = 2*(pins[pin - 1].final)*radius
    }
  }

    for (n = 0; n < beedsnumber; n++) {
        if (n <= dot) {
            object = {xinf: n*radius*2, xcenter: n*radius*2 + radius, xsup: n*radius*2 + 2*radius, y: 10, velocity: 0, index: 0}
        }else{
            object = {xinf: n*radius*2, xcenter: n*radius*2 + radius, xsup: n*radius*2 + 2*radius, y: 10, velocity: 0, index: 1}
        }
      beeds.push(object)
    }

    

    update()
    function update() {
        ans = []
        bns = []
        for (pin in pins) {
         ans1 = []
         bns1 = []
        for (n = 1; n <= pins[pin].beeds/div; n++) {
            w = (n*pi*v)/(pins[pin].width)
            an = 0
            bn = 0
            for (beed = pins[pin].initial; beed <= pins[pin].final; beed++) {
                y = beeds[beed].y
                velocity = beeds[beed].velocity

                xf = beeds[beed].xsup - pins[pin].take // limite superior
                xi = beeds[beed].xinf - pins[pin].take // limite inferior

                an += (2/(w*pins[pin].width))*velocity*(-(pins[pin].width/(n*pi))*(cos((n*pi*xf)/pins[pin].width) - cos((n*pi*xi)/pins[pin].width)))
                bn += (2/pins[pin].width)*y*(-(pins[pin].width/(n*pi))*(cos((n*pi*xf)/pins[pin].width) - cos((n*pi*xi)/pins[pin].width)))
            }
            ans1.push(an)
            bns1.push(bn)
        }
        ans.push(ans1)
        bns.push(bns1)
        }
    }

    animate()
    function animate() {

        const currentTime = performance.now();  // Pega tempo atual
    
        if (lastTime === 0) {
            lastTime = currentTime;
        }
        
        const dt = (currentTime - lastTime) /1000;
        lastTime = currentTime;
        
        t += dt

        //t += 0.01
        c.clearRect(0, 0, 300, 150)
        for (beed in beeds) {
        x = beeds[beed].xcenter - pins[beeds[beed].index].take

        
        beeds[beed].y = 0
        beeds[beed].velocity = 0
        Ls = pins[beeds[beed].index].width
        gamma = -0
        if (beed != dot) {
        for (n = 1; n <= pins[beeds[beed].index].beeds/div; n++) {
           // console.log(n, ans[0][n - 1])
        wn = (n*pi*v)/Ls
        beeds[beed].y += Math.exp(gamma*t) * sen((n*pi*x)/Ls)*(ans[beeds[beed].index][n - 1]*sen(wn*t) + bns[beeds[beed].index][n - 1]*cos(wn*t))
        beeds[beed].velocity += Math.exp(gamma*t) * wn*sen((n*pi*x)/Ls)*(ans[beeds[beed].index][n - 1]*cos(wn*t) - bns[beeds[beed].index][n - 1]*sen(wn*t))
        }
    }

        // desenhar conta
        c.beginPath()
        c.arc(beeds[beed].xcenter + xinitial,beeds[beed].y + yinitial,radius,0,2*pi) 
        if (beed != dot) {
             c.fillStyle = 'red'
        }else{
            c.fillStyle = 'blue'
        }
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
