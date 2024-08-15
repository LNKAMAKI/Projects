function load() {
    drawPrism()
    drawpen(90*(Math.PI/180))
}

function drawPrism() {
    canv = document.getElementById('c')
    c = canv.getContext('2d')
    b = 70
    h = 60
    fixy = 80
    tg = h/(b/2)
    c.lineWidth = '1'
    c.strokeStyle = 'black'
    c.beginPath()
    c.moveTo((300 - b)/2,(150 - fixy)/2 + fixy)
    c.lineTo((300 - b)/2 + b,(150 - fixy)/2 + fixy)
    c.stroke()
    c.beginPath()
    c.moveTo((300 - b)/2 + b,(150 - fixy)/2 + fixy)
    c.lineTo((300 - b)/2 + b/2,(150 - fixy)/2 + fixy - h)
    c.stroke()
    c.beginPath()
    c.moveTo((300 - b)/2,(150 - fixy)/2 + fixy)
    c.lineTo((300 - b)/2 + b/2,(150 - fixy)/2 + fixy - h)
    c.stroke()

    c.beginPath()
    c.moveTo(0,150 - (150 - fixy)/2)
    c.lineTo(300,150 - (150 - fixy)/2)
    c.stroke()
    c.beginPath()
    c.moveTo((300 - b)/2,0)
    c.lineTo((300 - b)/2,150)
    c.stroke()
}

penwidth = 60
fx = 20
fy = 75
function drawpen (angle) {
    // centro = fx + penwidth/2, fy
    c.lineWidth = '2'
    c.beginPath()
    x = -(penwidth/2)*Math.cos(angle) + fx + penwidth/2
    y = -(penwidth/2)*Math.sin(angle) + fy
    c.moveTo(fx + penwidth/2,fy)
    c.lineTo(x,y)
    c.strokeStyle = 'black'
    c.stroke()

    c.beginPath()
    x = (penwidth/2)*Math.cos(angle) + fx + penwidth/2
    y = (penwidth/2)*Math.sin(angle) + fy
    c.moveTo(fx + penwidth/2,fy)
    c.lineTo(x,y)
    c.strokeStyle = 'black'
    c.stroke()

    

}
window.addEventListener('mousemove', function(event) {
    canv = document.getElementById('c')
    c = canv.getContext('2d')
cWidth = canv.offsetWidth
wWidth = this.window.innerWidth
cHeight = canv.offsetHeight
wHeight = this.window.innerHeight
dif = wWidth - cWidth
mousex = ((event.x - dif/2)/cWidth)*300
mousey = ((event.y - 2)/cHeight)*150
difx = mousex - fx - penwidth/2
dify = mousey - fy
angle = Math.atan((dify/difx))
 document.getElementById('ab').innerText = `mousex:${(mousex).toFixed(1)}, mousey:${(mousey).toFixed(1)} | difx: ${(difx).toFixed(1)}, dify: ${(dify).toFixed(1)}, tg (pen): ${(dify/difx).toFixed(1)} | angle: ${(Math.atan((dify/difx))).toFixed(1)}`
c.clearRect(0,0,300,150)
drawPrism()
drawpen(angle)
})