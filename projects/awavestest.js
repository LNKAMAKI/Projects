let ans = []
let bns = []
let timer = 0
let intlimits = []
const tension = 120
const density = 0.03
const v = Math.sqrt(tension/density)
const radius = 4
const contsnumber = 20
let b = 9
let funtims = []

const L = radius*2*contsnumber
const modos = 8

function begin(){
const canv = document.getElementById("canvas")
const c = canv.getContext('2d')

intlimits = []
velocities = []
const xinitial = 50
const yinitial = 75

g = 0
for (let i = 0; i < contsnumber; i++){
   if (i < 0) {
      intlimits.push({xinf:i*radius*2, xsup: i*radius*2 + 2*radius, y: yinitial - yinitial,vel:0})
   }else{
      intlimits.push({xinf: i*radius*2, xsup: i*radius*2 + 2*radius, y: 150*Math.sin(i*radius*2),vel:0})
      velocities.push(0

      )
   }
}

update()

animate()   

 b = 6*timer
function animate() {
    c.clearRect(0, 0, 300, 150);

for (let i = 0; i < contsnumber; i++){
   c.beginPath()
   xcont = xinitial + i*radius*2
   c.arc(intlimits[i].xinf - radius + xinitial + radius, intlimits[i].y + yinitial, radius, 0, Math.PI*2); // círculo completo
   c.stroke(); // contorno
   c.fillStyle = 'red'
   c.fill()
   c.closePath()
   
   intlimits[i].y = 0
    for (let n = 1; n < modos; n++){
   let k = (n*Math.PI*(intlimits[i].xinf + radius))/L
   let wn = (n*Math.PI*v)/L
   gamma = -0.09
   intlimits[i].y += Math.exp(gamma*timer)*Math.sin(k) * (ans[n-1] * Math.cos(wn * timer) + bns[n-1] * Math.sin(wn * timer)); //+ Math.sin(k) * bns[n - 1] * Math.sin(wn * timer);
   //intlimits[i].exp = `sin(${k}).Ancos(${wn}.${timer}) + sin(${k}).Bnsin(${wn}.${timer})`
   //console.log(intlimits[i].exp)
    }     
   // function format: sin(npix/L).Ancos(wnt) + sin(npix/L).Bsin(wnt)
  // wn = npiv/L
  // v = sqrt(tension/density)
}

// function format: sin(npix/L).Ancos(wnt) + sin(npix/L).Bsin(wnt)
// wn = npiv/L
// v = sqrt(tension/density)
timer += 0.04
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
let an = 0
let bn = 0
for (let i = 0; i < contsnumber; i++){ // for each x interval
    // 2/L.y(x)∫(xinf - xsup)sin(nπx/L).dx
   // 2/L.y(x).-L/nπx.cos(nπx/l)
   // 2/L.y(x).(-L/nπx.cos(nπxsub/l) + L/nπ.cos(nπxinf/l)
   // 2/L.y(x).(-L/nπ(cos(nπxsub/L) - cos(nπxinf/L)))
   //console.log('y',intlimits[i].y,'xinferior', intlimits[i].xinf,'xsuperior', intlimits[i].xsup)
   let wn2 = (n*Math.PI*v)/L
   an += (2/L)*intlimits[i].y*((-L/(n*Math.PI))*(Math.cos(n*Math.PI*intlimits[i].xsup/L) - Math.cos(n*Math.PI*intlimits[i].xinf/L)))
   bn += (2/(wn2*L))*velocities[i]*((-L/(n*Math.PI))*(Math.cos(n*Math.PI*intlimits[i].xsup/L) - Math.cos(n*Math.PI*intlimits[i].xinf/L)))
}
ans.push(an)
bns.push(bn)
}   
}