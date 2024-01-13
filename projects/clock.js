function load() {
//console.log('hi')
canvas = document.getElementById('can')
c = canvas.getContext('2d')
c.clearRect(0,0,300,150)
c.fillStyle = 'black'
c.lineWidth = 1


const date = new Date()
hours = date.getHours()
mins = date.getMinutes()
secs = date.getSeconds()

hourplace = document.getElementById('hours')
minsplace = document.getElementById('mins')
hourplace.innerText = hours
if (mins < 10) {
    minsplace.innerText = '0' + mins
}else{
    minsplace.innerText = mins
}
if (hours < 10) {
    hourplace.innerText = '0' + hours
}else{
    hourplace.innerText = hours
}

if (hours > 12){
 hours = hours - 12
}
//console.log(hours, mins)
numbersplit = 12
pos = 1.5 + 2/numbersplit*(hours + 1/60*mins)
mintohour = 1/60*mins
//console.log('position',pos)
//console.log(mintohour)
pos2 = 1.5 + (2/numbersplit)*((mins + 1/60*secs)/5)
pos3 = 1.5 + (secs/60)*2
pi = Math.PI
st = 1.5
end = 1.5 + 2/numbersplit
r = Math.random()*255
g = Math.random()*255
b = Math.random()*255
c.strokeStyle = `rgb(${r},${g},${b})`


c.beginPath()
c.arc(150,75,70,0,pi*2,false)
c.strokeStyle = `black`
c.fillStyle = 'cyan'
c.fill()
c.stroke()

c.beginPath()
c.arc(150,75,65,0,pi*2,false)
c.fillStyle = `white`
c.fill()

num = 1

for (a = 0; a < numbersplit; a++) {
    //console.log('num',num)
    c.beginPath()
    if (end >= 2) {
        end = end - 2
    }
    //console.log(st,end)
r = Math.random()*255
g = Math.random()*255
b = Math.random()*255
c.arc(150,75,65,pi*st,pi*end,false)
//console.log(`sen de ${end}: ${Math.sin(end*pi)}`)
//console.log(`cos de ${end}: ${Math.cos(end*pi)}`)
//console.log(`x é ${Math.cos(end*pi)*60}`)
//console.log(`y é ${Math.sin(end*pi)*60}`)
x1 = 150 + Math.cos(end*pi)*65
y1 = 75 + Math.sin(end*pi)*65
x = 150 + Math.cos(end*pi)*60
y = 75 + Math.sin(end*pi)*60
//c.strokeStyle = `rgb(${r},${g},${b})`
c.strokeStyle = 'black'
c.stroke()
c.beginPath()
c.moveTo(x1, y1)
c.lineTo(x, y)
c.fillStyle = 'black'
//console.log('add to x:', -5*Math.cos(end*pi))
//console.log('add to y:', -5*Math.sin(end*pi))
//c.fillText(num, x, y)
if (end >= 0 && end <= 0.2) {
    //console.log('DO IT')
    cos = Math.cos(end*pi)
    sin = Math.sin(end*pi)
    c.fillText(num,x - 6*cos,y - 6*sin)
}else if (end > 0.2 && end <= 0.3) {
    cos = Math.cos(end*pi)
    sin = Math.sin(end*pi)
    c.fillText(num,x - 4*cos,y - 4*sin)
}else if (end > 0.3 && end <= 0.4){
    cos = Math.cos(end*pi)
    sin = Math.sin(end*pi)
    c.fillText(num,x - 2*cos,y - 2*sin)
}else if (end > 0.4 && end <= 1.3){
    cos = Math.cos(end*pi)
    sin = Math.sin(end*pi)
    c.fillText(num,x - 0.4*cos,y - 0.4*sin)
}else if (end > 1.3 && end < 1.5){
    cos = Math.cos(end*pi)
    sin = Math.sin(end*pi)
    c.fillText(num,x - 4*cos,y - 4*sin)
}else if (end > 1.5 && end <= 1.7){
    cos = Math.cos(end*pi)
    sin = Math.sin(end*pi)
    c.fillText(num,x - 9*cos,y - 9*sin)
}else{
    cos = Math.cos(end*pi)
    sin = Math.sin(end*pi)
    c.fillText(num,x - 8*cos,y - 8*sin)
}
num++
////console.log('x1',x1)
////console.log('y1',y1)
////console.log('x',x)
////console.log('y',y)
c.strokeStyle = `rgb(0,0,0)`
c.stroke()

////console.log(Math.sin(pi*1.5))
////console.log(Math.sin(pi/4),Math.sin(pi*1.75),Math.cos(pi/4),Math.cos(pi*1.75))
st = end
end = end + 2/numbersplit
}

c.beginPath()
c.arc(150,75,65,1.5*pi,pos*pi,false)
c.strokeStyle = 'transparent'
c.stroke()

xh = 150 + Math.cos(pos*pi)*40
yh = 75 + Math.sin(pos*pi)*40
c.beginPath()
c.moveTo(xh, yh)
c.lineTo(150,75)
c.strokeStyle = 'gray'
c.stroke()

c.beginPath()
c.arc(150,75,65,1.5*pi,pos2*pi,false)
c.strokeStyle = 'transparent'
c.stroke()

xh = 150 + Math.cos(pos2*pi)*50
yh = 75 + Math.sin(pos2*pi)*50
c.beginPath()
c.moveTo(xh, yh)
c.lineTo(150,75)
c.strokeStyle = 'gray'
c.stroke()

c.beginPath()
c.arc(150,75,65,1.5*pi,pos3*pi,false)
c.strokeStyle = 'transparent'
c.stroke()

/*
xh = 150 + Math.cos(pos3*pi)*58
yh = 75 + Math.sin(pos3*pi)*58
c.beginPath()
c.moveTo(xh, yh)
c.lineTo(150,75)
c.strokeStyle = 'red'
c.stroke()
*/
c.beginPath()
c.arc(150,75,1,0,pi*2,false)
c.strokeStyle = `black`
c.fill()
c.stroke()


//const intervalId = setInterval(load, 10000)
}
window.addEventListener('keyup', function(event) {
    //console.log(event.key)
    if (event.key == 'p') {
        p()
    }
})
