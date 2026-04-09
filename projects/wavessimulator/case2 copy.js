let ans = []
let bns = []
let timer = 0
let timer_nochange = 0 
let lastTime = 0
let intlimits = []
const tension = 100
const density = 0.01
const v = Math.sqrt(tension/density)
const L = 250 
const contsnumber = 121 // N >= 2M
const radius = L/(2*contsnumber)
const modos = 60
let b = 9
let velocities = []
let cHeight = 0
const xinitial = 2
const yinitial = 75
const dot = 0
const h0 = 20
const a = 15
const k = 2.23
const res = true
let Tp_n = 0
let T_p_n = 0

//const L = radius*2*contsnumber

function begin(){
const canv = document.getElementById("canvas")
cHeight = canv.offsetHeight
const c = canv.getContext('2d')

intlimits = []

g = 0
for (let i = 0; i < contsnumber; i++){
   x_center = i*radius*2 + radius
  // intlimits.push({xinf:i*radius*2, xsup: i*radius*2 + 2*radius, y: h0*(1 - x_center/L),vel:0})
   //velocities.push(0)
   
  
   if (i == dot) {
      intlimits.push({xinf:i*radius*2, xsup: i*radius*2 + 2*radius, y: 50,vel:0})
      velocities.push(0)
   }else if (dot != contsnumber){
      intlimits.push({xinf: i*radius*2, xsup: i*radius*2 + 2*radius, y: -4,vel:0})
      velocities.push(0)
   }else{
      intlimits.push({xinf: i*radius*2, xsup: i*radius*2 + 2*radius, y: 0,vel:0})
   }
      
      
}

update()

animate()   

 b = 6*timer
function animate() {

     const currentTime = performance.now();  // Pega tempo atual
    
    if (lastTime === 0) {
        lastTime = currentTime;
    }
    
    const dt = (currentTime - lastTime) / 1000;
    lastTime = currentTime;
    
    timer += dt
    timer_nochange += dt

    c.clearRect(0, 0, 300, 150);

for (let i = 0; i < contsnumber; i++){

   x_center = intlimits[i].xinf + radius
   c.beginPath()
   //if (i != dot) {
      c.arc(x_center + xinitial, intlimits[i].y + yinitial, radius, 0, Math.PI*2); // círculo completo
   //}
   c.stroke(); // contorno
   if (i != dot) {
      c.fillStyle = 'red'
   }else{
      c.fillStyle = 'blue'

   }
   c.fill()
   c.closePath()
   
   // damping!
   gamma = -0.1
   if (i != dot) {
      intlimits[i].y = Math.exp(gamma*timer) * (intlimits[0].y*(1 - x_center/L))
   }else{
     // intlimits[0].y = a*Math.sin(k*timer_nochange)
   }
  

   if (dot != 1) {
      vel = 0
   }else{
      vel = 0
   }

   if (i != dot) {
    for (let n = 1; n < modos; n++){

   let kx = (n*Math.PI*x_center)/L
   let wn = (n*Math.PI*v)/L
   
  
    intlimits[i].y +=  Math.exp(gamma*timer) * (Math.sin(kx) * (ans[n-1] * Math.cos(wn * timer) + bns[n-1] * Math.sin(wn * timer)));
    vel +=  Math.exp(gamma*timer)* (Math.sin(kx) * (wn * ( bns[n-1] * Math.cos(wn * timer)  - ans[n-1] * Math.sin(wn * timer))) + 
    velocities[0]*(1 - x_center/L))
    }    
   }

   velocities[i] = vel
}


timer += dt;
requestAnimationFrame(animate)
}
}

function Timerset(n) {
  this.el = function (n) {
   return n*timer
  }
}

function update() {
ans = []
bns = []
for (let n = 1; n < modos; n++){
let wn2 = (n*Math.PI*v)/L
let an = -(2*intlimits[0].y)/(n*Math.PI)
let bn = - (2*velocities[0])/(n*Math.PI)

// FAZENDO A INTEGRAÇÃO POR PARTES
for (let i = 0; i < contsnumber; i++){ // for each x interval
   //console.log('y',intlimits[i].y,'xinferior', intlimits[i].xinf,'xsuperior', intlimits[i].xsup)
   an += (2/L)*intlimits[i].y*((-L/(n*Math.PI))*(Math.cos(n*Math.PI*intlimits[i].xsup/L) - Math.cos(n*Math.PI*intlimits[i].xinf/L)))
   bn += (2/L)*velocities[i]*((-L/(n*Math.PI))*(Math.cos(n*Math.PI*intlimits[i].xsup/L) - Math.cos(n*Math.PI*intlimits[i].xinf/L)))
}
ans.push(an)
bns.push(bn/wn2)

}   
}




window.addEventListener('mousemove', function (event) {

 alt = ((event.y)/cHeight)*150
 if (alt >= 50 && alt <= 100) {
   //intlimits[dot].y = alt - yinitial
 }else if (alt < 50){
   alt = 50
 }else{
   alt = 100
 }
   this.document.getElementById('par').innerText = `mousey: ${event.y} ${((event.y)/cHeight)*150}`
   
  // timer = 0
   //update()

})

setInterval(() => {intlimits[dot].y = alt - yinitial; timer = 0; update()}, 0);
