let radius = 2
let starty = 100
let x = 0
timer = 0
loop = true
addpulse = false
times 
function load() {
canv = document.getElementById('canvas')
c = canv.getContext('2d')
console.log(x)
contnumber = 70
conts = []
conts2 = []
for (i = 0; i < contnumber;i++) {
    conts.push({y:0,move:true})
    conts2.push({y:0,move:true})
}

type = 'pulse'
fixo = false
drawball = false
function animate() {
    amplitude = 40
    space = 20
    at = 0.3
    x = 0
    c.clearRect(0,0,300,150)
    // function = A*sen(2*Math.PI/comp*(x + wt))

    for (l in conts) {
        conts[l].y = 0
        conts2[l].y = 0
    }

    if (addpulse == true) {
       // window.alert('FAZER ISSO AQUI')
        for (l in conts) {
            conts[l].y = 10
            conts2[l].y = 10
        }
    }


    for (i = 0; i < contnumber;i++) {
        
        canmove = true
        
        if (timer - x*0.1 >= 0) {
            if (type == 'pulse') {
            if (amplitude -i*at*amplitude*0.03 >= 0 && Math.sin(0 - 0.4*(timer - x*0.1)) <= 0) {
            y = (amplitude -i*at*amplitude*0.03)*Math.sin(0 - 0.4*(timer - x*0.1))
            }else if(Math.sin(0 - 0.4*(timer - x*0.1)) >= 0 && conts[i].move == true){
                y = 0
                conts[i].move = false
            }
        }else{
            if (amplitude -i*at*amplitude*0.03 >= 0) {
                y = (amplitude -i*at*amplitude*0.03)*Math.sin(0 - 0.4*(timer - x*0.1))
                }else{
                    y = 0
                    conts[i].move = false
                }
        }
        }else{
            y = 0
        }

        if (conts[i].move == false && type == 'pulse') {
            y = 0
        }
       
        conts[i].y += y
        c.beginPath()
        //c.arc(x + radius + space,conts[i].y + starty,radius,0,2*Math.PI)
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
            if (type == 'pulse') {
                if (amplitude -i*at*amplitude*0.03 >= 0 && Math.sin(0 - 0.4*(timer - x*0.1)) <= 0) {
                    if (fixo == false) {
                        y = (amplitude -i*at*amplitude*0.03)*Math.sin(0 - 0.4*(timer - x*0.1))
                    }else{
                        y = -(amplitude -i*at*amplitude*0.03)*Math.sin(0 - 0.4*(timer - x*0.1))
                    }
                }else if(Math.sin(0 - 0.4*(timer - x*0.1)) >= 0){
                    y = 0
                    conts2[i].move = false
                }
            }else{
                if (amplitude -i*at*amplitude*0.03 >= 0) {
                    if (fixo == false) {
                        y = (amplitude -i*at*amplitude*0.03)*Math.sin(0 - 0.4*(timer - x*0.1))
                    }else{
                        y =  -(amplitude -i*at*amplitude*0.03)*Math.sin(0 - 0.4*(timer - x*0.1))
                    }
                    }else{
                        y = 0
                        conts2[i].move = false
                    }
            }
            }else{
                y = 0
            }

            if (conts2[i].move == false && type == 'pulse') {
                y = 0
                }

            conts2[contnumber - 1 - i].y += y
            
            
            c.beginPath()
            //c.arc(lastx - x - radius,y,radius,0,2*Math.PI)
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
            if (contsall[i].y + starty > starty) {
                //loop = false
            }
            if (drawball == true) {
            c.arc(x + radius + space,contsall[i].y + starty,radius,0,2*Math.PI)
            }
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


window.addEventListener('keydown',function (event) {
    //this.window.alert(event.key)
    if (event.key == 'p') {
        loop = false
    }
    if (event.key == 'm') {
        //this.window.alert('m')
        for (l in conts) {
            //conts[l].move = true
            conts[l].y = 0
            //(amplitude -i*at*amplitude*0.03)*Math.sin(0 - 0.4*(timer2 - x*0.1))
        }
     
    }
}) 

window.addEventListener('keyup',function (event) {
    if (event.key == 'm') {
    //this.window.alert('NOW')
    addpulse = true
    }
    
})
