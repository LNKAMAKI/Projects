

function go() {
    tp1 = document.getElementsByClassName('type')[0]
    tp2 = document.getElementsByClassName('type')[1]

    tp1.addEventListener("mouseenter",function() {
        if (type == 2) {
      tp1.style.backgroundColor = 'rgb(214, 214, 214)'
        }
    });

    tp1.addEventListener("mouseleave",function() {
        if (type == 2) {
        tp1.style.backgroundColor = 'white'
        }
      });

      tp2.addEventListener("mouseenter",function() {
        if (type == 1) {
      tp2.style.backgroundColor = 'rgb(214, 214, 214)'
        }
    });

    tp2.addEventListener("mouseleave",function() {
        if (type == 1) {
        tp2.style.backgroundColor = 'white'
        }
      });

    canvas = document.getElementById('canvas')
c = canvas.getContext('2d')

}


type = 1
st = 0
porcs2 = []
function add(add) {
    porcs = []
    canvas = document.getElementById('canvas')
c = canvas.getContext('2d')
    //console.log('add')
    porc = Number(document.getElementById('num').value)
    times = Number(document.getElementById('times').value)

    ran = randomcolor()
    //console.log('porcentagem',porc, porc > 0)
    if (Number(porc) > 0 && add == true) {
     for (n = 0; n < times;n++) {
    porcs.push(Number(porc))
    porcs2.push({percent:Number(porc),color:ran})
     }
    }

    sum = 0
    for (p in porcs2) {
        sum+= porcs2[p].percent
    }
    console.log('soma:',sum)
    if (sum > 100) {
      porcs2 = []
      porcs = []
      for (n = 0; n < times;n++) {
      porcs.push(Number(porc))
      porcs2.push({percent:Number(porc),color:ran})
      }
      if(Number(porc) < 100){
        //console.log('oh no')
        s = Number(porc)/100
        e = (100 - Number(porc))/100
    }
    }

    for (p in porcs) {
        percent = porcs[p]/100
        //console.log(percent)
        c.lineWidth = '1'
        addtograph(150,75,70,st,st + percent,ran)
        console.log(st,st + percent)
        st+= percent
    }

    if (type == 2) {
     doDot2()
    }
}

function addtograph(x,y,radius,start,end,color) {
    c.beginPath()
    c.lineWidth = '0'
    c.strokeStyle = 'black'
    c.arc(x,y,0,0,Math.PI*2,false)
    c.stroke()
    
    c.lineWidth = '0.05'
    c.arc(x,y,radius,Math.PI*2*start,Math.PI*2*end,false)
    
    c.lineWidth = '0'
    c.strokeStyle = 'black'
    c.arc(150,75,0,0,Math.PI*2,false)
    c.stroke()
    c.fillStyle = color
    c.fill()
    }

    function doDot2() {
        c.beginPath()
        c.strokeStyle = 'black'
        c.arc(150,75,55,0,Math.PI*2,false)
        //c.stroke()
        c.fillStyle = 'white'
        c.fill()
        }

    function randomcolor() {
        inputcolor = document.getElementById('color').value
        //console.log(inputcolor)
        r = Math.random()*255
        g = Math.random()*255
        b = Math.random()*255
        color = `rgb(${r},${g},${b})`
        return color
    }

    function change(tip) {
        if (tip == 1) {
            c.clearRect(0,0,300,150)
            c.beginPath()
            c.arc(150,75,0,Math.PI*2,false)
            c.strokeStyle = 'black'
            c.fillStyle = 'black'
            c.stroke()
            c.fill()
            type = 1
            tp2.style.backgroundColor = 'white'
                //addtograph(150,75,70,0,Math.PI*2,'pink')
                st = 0
                for (p in porcs2) {
                    percent = porcs2[p].percent/100
                    console.log(percent)
                    c.lineWidth = '1'
                    addtograph(150,75,70,st,st + percent,porcs2[p].color)
                    console.log(st,st + percent)
                    st+= percent
                }
        }else{
            type = 2
            tp1.style.backgroundColor = 'white'
        }
        add(false)
    }

    function select() {
      //console.log('selected')
    }