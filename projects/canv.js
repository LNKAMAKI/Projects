function load() {
    drawPrism()
    drawpen(90*(Math.PI/180))
}

function drawPrism() {
    canv = document.getElementById('c')
    c = canv.getContext('2d')
    b = 80
    h = 80
    tg = h/(b/2)
    c.strokeStyle = 'black'
    document.getElementById('ab').innerText = `tg: ${tg}`
    c.beginPath()
    c.moveTo((300 - b)/2,(150 - h)/2 + h)
    c.lineTo((300 - b)/2 + b,(150 - h)/2 + h)
    c.stroke()
    c.beginPath()
    c.moveTo((300 - b)/2 + b,(150 - h)/2 + h)
    c.lineTo((300 - b)/2 + b/2,(150 - h)/2)
    c.stroke()
    c.beginPath()
    c.moveTo((300 - b)/2,(150 - h)/2 + h)
    c.lineTo((300 - b)/2 + b/2,(150 - h)/2)
    c.stroke()
}

penwidth = 50
fx = 0
fy = 75
function drawpen (angle) {
    // centro = fx + penwidth/2, fy
    c.beginPath()
    x = -(penwidth/2)*Math.cos(angle) + fx + penwidth/2
    y = -(penwidth/2)*Math.sin(angle) + fy
    c.moveTo(fx + penwidth/2,fy)
    c.lineTo(x,y)
    c.strokeStyle = 'blue'
    c.stroke()

    c.beginPath()
    x = (penwidth/2)*Math.cos(angle) + fx + penwidth/2
    y = (penwidth/2)*Math.sin(angle) + fy
    c.moveTo(fx + penwidth/2,fy)
    c.lineTo(x,y)
    c.strokeStyle = 'red'
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
 document.getElementById('ab').innerText = `mousex:${(mousex).toFixed(1)}, mousey:${(mousey).toFixed(1)} | difx: ${(difx).toFixed(1)}, dify: ${(dify).toFixed(1)}, tg (pen): ${(dify/difx).toFixed(1)} | angle: ${(Math.atan((dify/difx))).toFixed(1)}`
c.clearRect(0,0,300,150)
drawPrism()
})