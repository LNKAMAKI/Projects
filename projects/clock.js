function load() {
console.log('hi')
canvas = document.getElementById('can')
c = canvas.getContext('2d')
c.fillStyle = 'black'
//c.fillRect(20, 20, 150, 100)

const date = new Date()
hours = date.getHours()
mins = date.getMinutes()
if (hours > 12){
 hours = hours - 12
}
console.log(hours, mins)
numbersplit = 12
pi = Math.PI
st = 1.5
end = 1.5 + 2/numbersplit
//console.log(st,end)
r = Math.random()*255
g = Math.random()*255
b = Math.random()*255
//c.arc(150,75,65,pi*1,pi*1.5,false)
c.strokeStyle = `rgb(${r},${g},${b})`
//c.stroke()


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
c.stroke()

c.beginPath()
c.arc(150,75,1,0,pi*2,false)
c.strokeStyle = `black`
c.fill()
c.stroke()

num = 1
for (a = 0; a < numbersplit; a++) {
    console.log(a)
    c.beginPath()
    console.log(st,end)
r = Math.random()*255
g = Math.random()*255
b = Math.random()*255
c.arc(150,75,65,pi*st,pi*end,false)
console.log(`sen de ${end}: ${Math.sin(end*pi)}`)
console.log(`cos de ${end}: ${Math.cos(end*pi)}`)
console.log(`x é ${Math.cos(end*pi)*60}`)
console.log(`y é ${Math.sin(end*pi)*60}`)
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
    c.fillText(num,x - 7,y + 10)
num++
console.log('x1',x1)
console.log('y1',y1)
console.log('x',x)
console.log('y',y)
c.lineWidth = 1
c.strokeStyle = `rgb(0,0,0)`
c.stroke()

//console.log(Math.sin(pi*1.5))
//console.log(Math.sin(pi/4),Math.sin(pi*1.75),Math.cos(pi/4),Math.cos(pi*1.75))
st = end
end = end + 2/numbersplit
}

}
window.addEventListener('keyup', function(event) {
    console.log(event.key)
    if (event.key == 'p') {
        p()
    }
})
