

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
addtograph(150,75,70,0,Math.PI*2,'pink')

}

porcs = []
type = 1
function add(add) {
    canvas = document.getElementById('canvas')
c = canvas.getContext('2d')
    console.log('add')
    porc = Number(document.getElementById('num').value)
    times = Number(document.getElementById('times').value)


    console.log('porcentagem',porc, porc > 0)
    if (Number(porc) > 0 && add == true) {
     for (n = 0; n < times;n++) {
    porcs.push(Number(porc))
     }
    }

    st = 0
    c.clearRect(0,0,300,150)
    sum = 0
    for (p in porcs) {
        sum+= porcs[p]
    }
    console.log('soma:',sum)
    if (sum > 100) {
      porcs = []
      for (n = 0; n < times;n++) {
      porcs.push(Number(porc))
      }
      if(Number(porc) < 100){
        console.log('oh no')
        s = Number(porc)/100
        e = (100 - Number(porc))/100
        console.log(s,e)
        addtograph(150,75,70,s,e + Number(porc),'pink')
    }

    }
    if(sum < 100){
        console.log('oh no')
        s = sum/100
        e = (100 - sum)/100
        console.log(s,e)
        if (porcs.length > 0) {
            addtograph(150,75,70,s,e + porcs[Number(porcs.length) - 1],'pink')
        }else{
            addtograph(150,75,70,s,e,'pink')
        }
    }

    for (p in porcs) {
        percent = porcs[p]/100
        console.log(percent)
        c.lineWidth = '1'
        addtograph(150,75,70,st,st + percent,randomcolor())
        st+= percent
        console.log(st)
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
        c.stroke()
        c.fillStyle = 'white'
        c.fill()
        }

    function randomcolor() {
        r = Math.random()*255
        g = Math.random()*255
        b = Math.random()*255
        color = `rgb(${r},${g},${b})`
        return color
    }

    function change(tip) {
        if (tip == 1) {
            type = 1
            tp2.style.backgroundColor = 'white'
        }else{
            type = 2
            tp1.style.backgroundColor = 'white'
        }
        add(false)
    }

    function select() {
      console.log('selected')
    }