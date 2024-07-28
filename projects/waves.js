let radius = 2
let starty = 100
let x = 0
timer = 0
loop = true
function load() {
canv = document.getElementById('canvas')
c = canv.getContext('2d')
console.log(x)

function animate() {
    amplitude = 40
    space = 20
    at = 0.3
    contnumber = 120
    conts = []
    conts2 = []
    x = 0
    c.clearRect(0,0,300,150)
    // function = A*sen(2*Math.PI/comp*(x + wt))
    for (i = 0; i < contnumber;i++) {
        if (timer - x*0.1 >= 0) {
            if (amplitude -i*at*amplitude*0.03 >= 0) {
            y = starty + (amplitude -i*at*amplitude*0.03)*Math.sin(0 - 0.4*(timer - x*0.1))
            }else{
                y = starty
            }
        }else{
            y = starty
        }
       
        conts.push({index:i,y: y - starty})
        conts2.push({index: i, y: y - starty})
        c.beginPath()
        //c.arc(x + radius + space,y,radius,0,2*Math.PI)
        c.fillStyle = 'red'
        c.fill()
        c.strokeStyle = 'black'
        c.stroke()
        c.beginPath()
        //c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
        c.fillStyle = 'white'
        c.fill()
        x+= 2*radius
        }


        x = 0
        lastx = space + 2*radius*(contnumber)
        for (i = 0; i < contnumber;i++) {
            if (timer - x*0.1 >= 0) {
                if (amplitude -i*at*amplitude*0.03 >= 0) {
                    y = starty + (amplitude -i*at*amplitude*0.03)*Math.sin(0 - 0.4*(timer - x*0.1))
                    }else{
                        y = starty
                    }
               // y = starty + 30*Math.sin(0 - 0.4*(timer - x*0.1))
            }else{
                y = starty
            }
            conts2[contnumber - 1 - i].y = y - starty
            
            c.beginPath()
           // c.arc(lastx - x - radius,y,radius,0,2*Math.PI)
            c.fillStyle = 'blue'
            c.fill()
            c.strokeStyle = 'black'
            c.stroke()
            c.beginPath()
            //c.arc(300 - x - radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
            c.fillStyle = 'white'
            c.fill()
            x+= 2*radius
            }


        contsall = []
        for (cont in conts) {
            contsall.push({index:cont,y:conts[cont].y + conts2[cont].y})
        }
        
        x = 0
        for (i = 0; i < contnumber/2;i++) {
            if (i < contnumber/2 - 1) {
            c.beginPath()
            c.moveTo(x + radius + space,contsall[i].y + starty)
            //c.lineTo(0,9)
            x+= 2*radius
            c.lineTo(x + radius + space,contsall[i + 1].y + starty)
            c.stroke()
            }
            }
            x = 0
        for (i = 0; i < contnumber/2;i++) {
            c.beginPath()
            if (i == (contnumber/2 - 1)) {
                c.fillStyle = 'pink'
                c.beginPath()
                elradius = 6
                c.ellipse(x + 2*radius + space + elradius + 0.5,contsall[i].y + starty, elradius, elradius/2, 0, 0, 2*Math.PI)
                c.stroke()
                c.beginPath()
            }
            //c.arc(x + radius + space,contsall[i].y + starty,radius,0,2*Math.PI)
            c.fillStyle = 'red'
            c.fill()
            c.strokeStyle = 'black'
            c.stroke()
            c.beginPath()
            //c.arc(x + radius - 2,y - 2,radius - radius*0.5,0,2*Math.PI)
            c.fillStyle = 'white'
            c.fill()
            x+= 2*radius
            }

        timer+= 0.1
if (loop == true) {
requestAnimationFrame(animate)
}
}
animate()
}

window.addEventListener('keypress',function (event) {
    //this.window.alert(event.key)
    if (event.key == 'p') {
        loop = false
    }
}) 