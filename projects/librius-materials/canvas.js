/*
canvas: 0 - 300
*/
let pokebolas = []
function load() {
    console.log(document.querySelector('canvas'))
    canv = document.querySelector('canvas')
    c = canv.getContext('2d')
    console.log(c)
    /*
    c.fillStyle = "rgb(255,0,0,0.4)"
    c.fillRect(250,100,50,50)
    c.beginPath()
    c.strokeStyle = 'black'
    c.moveTo(0,0)
    c.lineTo(300,150)
    c.stroke()
 */
   //function animate() {


    //requestAnimationFrame(animate)
//}
//animate()

mousex = ''
mousey = ''
function animate() {
    if (pokebolas.length == 0) {
for (v = 0; v < 2; v++) {
width = Math.random()*8 + 10
width = 13
velx = Math.random()*1 - 0.5
vely = Math.random()*1 - 0.5
velx = 0.01
vely = 0.01
x = Math.random()*(300-width*2) + width
y = Math.random()*(150-width*2) + width
r = Math.random()*255
g = Math.random()*255
b = Math.random()*255
color = Math.trunc(Math.random()*6)
if (color == 0) {
 color = "red"
}else if(color == 1){
color = "rgb(255, 116, 199)"
}else if(color == 2) {
color = "rgb(44, 186, 248)"
}else if (color == 3){
color = "rgb(255, 167, 66)"
}else if(color == 4){
    color= "rgb(34, 209, 139)"
}else{
    color = "rgb(211, 100, 254)"
}

if(v == 0) {
    color = "red"
}else{
color = "blue"
}
//color = `rgb(${r},${g},${b})`
console.log('create')
rangex = [x - width,x + width]
rangey = [y - width,y + width]
createPokebola(x,y,width,color,velx,vely,true,rangex,rangey)
}
    }else{
        c.clearRect(0,0,300,150)
        for (number in pokebolas) {
            if (pokebolas[number].x > 300 - pokebolas[number].width || pokebolas[number].x < pokebolas[number].width) {
                pokebolas[number].velx = -pokebolas[number].velx
            }
            if (pokebolas[number].y > 150 - pokebolas[number].width || pokebolas[number].y < pokebolas[number].width) {
                pokebolas[number].vely = -pokebolas[number].vely
            }
            pokebolas[number].x+=pokebolas[number].velx
            pokebolas[number].y+=pokebolas[number].vely
            pokebolas[number].rangex = [pokebolas[number].x - pokebolas[number].width,pokebolas[number].x + pokebolas[number].width]
            pokebolas[number].rangey = [pokebolas[number].y - pokebolas[number].width,pokebolas[number].y + pokebolas[number].width]
            createPokebola(pokebolas[number].x,pokebolas[number].y,pokebolas[number].width,pokebolas[number].color,pokebolas[number].velx,pokebolas[number].vely,false,pokebolas[number].rangex,pokebolas[number].rangey)
            fp = document.getElementById('firstp')
            sp = document.getElementById('secp')
            if (number == 0) {
            fp.innerHTML = `<span style="color:red;">x</span>: ${Math.trunc(pokebolas[number].rangex[0])} - ${Math.trunc(pokebolas[number].rangex[1])}, <span style="color:red;">y</span>: ${Math.trunc(pokebolas[number].rangey[0])} - ${Math.trunc(pokebolas[number].rangey[1])} `
            }else{
                sp.innerHTML = `<span style="color:blue;">x</span>: ${Math.trunc(pokebolas[number].rangex[0])} - ${Math.trunc(pokebolas[number].rangex[1])}, <span style="color:blue;">y</span>: ${Math.trunc(pokebolas[number].rangey[0])} - ${Math.trunc(pokebolas[number].rangey[1])} `  
            }
        }
    }
    /*
    if (mousex != '' && mousey != '') {
        for (p in pokebolas) {
            px = pokebolas[p].x
            pw = pokebolas[p].width
            py = pokebolas[p].y
            //console.log(px - pw, px + pw, py - pw, py + pw)
            document.getElementById('px').innerText = `${px + pw}`
            document.getElementById('py').innerText = py - pw + '-' + py + pw
            if (mousex > px - pw && mousex < px + pw && mousey > py - pw && mousey < py + pw) {
                console.log('OWO')
                r = Math.random()*255
                g = Math.random()*255
                b = Math.random()*255
                pokebolas[p].color = `rgb(${r},${g},${b})`
            }
        }
    }*/
requestAnimationFrame(animate)
}
animate()
}

function createPokebola(x,y,width,color,velx,vely,addornot,rangex,rangey) {
    if (addornot == true) {
    pokebolas.push({x:x,y:y,width:width,color:color,velx:velx,vely:vely,rangex:rangex,rangey:rangey})
    }
    c.beginPath()
    c.fillStyle = 'rgb(255,255,255)'
    c.arc(x,y,width,0,Math.PI,false)
    c.fill()
    c.stroke()
    
    c.beginPath()
    c.fillStyle = color
    c.arc(x,y,width,0,Math.PI,true)
    c.fill()
    c.stroke()

    y2 = y
    for ( i=0;i<width*0.1;i++) {
    c.beginPath()
    c.moveTo(x + width,y2)
    c.lineTo(x - width,y2)
    c.stroke()
    y2++
    }

    
    c.beginPath()
    c.arc(x,y,width*0.3,0,Math.PI*2,true)
    c.fillStyle = 'black'
    c.fill()
    c.stroke()

    c.beginPath()
    c.arc(x,y,width*0.2,0,Math.PI*2,true)
    c.fillStyle = 'white'
    c.fill()
    c.stroke()
    
}

window.addEventListener('mousemove',function(event) {
    
    canv = document.querySelector('canvas')
    cWidth = canv.offsetWidth
    wWidth = this.window.innerWidth
    cHeight = canv.offsetHeight
    wHeight = this.window.innerHeight
    dif = wWidth - cWidth
    //console.log('it moved')
    //console.log(event.x - dif/2,event.y)
    
    //console.log(wWidth,cWidth,dif/2)
    //console.log(((event.x - dif/2)/cWidth)*300)
    mousex = ((event.x - dif/2)/cWidth)*300
    mousey = ((event.y - 80.48)/cHeight)*150
    //this.document.getElementById('x').innerText = mousex
    //this.document.getElementById('y').innerText = mousey
    //console.log(wHeight,cHeight)
    //console.log(event.y - 80.48)
    //console.log(((event.y - 80.48)/cHeight)*150)
    if (mousex < 300 && mousex > 0 && mousey < 150 && mousey > 0) {
        //this.document.getElementById('x').innerText += 'within'
    }
    
    for (p in pokebolas) {
        px = pokebolas[p].x
        pw = pokebolas[p].width
        py = pokebolas[p].y
        //console.log(px - pw, px + pw, py - pw, py + pw)
        if (mousex > px - pw && mousex < px + pw && mousey > py - pw && mousey < py + pw) {
            console.log('OWO')
            r = Math.random()*255
            g = Math.random()*255
            b = Math.random()*255
            //pokebolas[p].color = `rgb(${r},${g},${b})`
        }
    }
})
