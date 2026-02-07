let ans = []
let bns = []
let timer = 0
let lastTime = 0
let intlimits = []
const tension = 80
const density = 0.05
const v = Math.sqrt(tension/density)
const L = 250 
const contsnumber = 121 // N >= 2M
const radius = L/(2*contsnumber)
let b = 9
let velocities = []
let cHeight = 0
const xinitial = 2
const yinitial = 75
const dot = 0
const h0 = 20

//const L = radius*2*contsnumber
const modos = 120

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
      intlimits.push({xinf:i*radius*2, xsup: i*radius*2 + 2*radius, y: h0,vel:0})
      velocities.push(0)
   }else if (dot != contsnumber){
      intlimits.push({xinf: i*radius*2, xsup: i*radius*2 + 2*radius, y: -10,vel:0})
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

    c.clearRect(0, 0, 300, 150);

for (let i = 0; i < contsnumber; i++){

   x_center = intlimits[i].xinf + radius
   c.beginPath()
   if (dot != 0) {
      c.arc(x_center + xinitial, intlimits[i].y + yinitial, radius, 0, Math.PI*2); // círculo completo
   }
   c.stroke(); // contorno
   if (i != dot) {
      c.fillStyle = 'red'
   }else{
      c.fillStyle = 'blue'

   }
   c.fill()
   c.closePath()
   
   if (i != dot) {
       intlimits[i].y = intlimits[0].y*(1 - x_center/L)
   }else{
      // intlimits[i].y = a*Math.sin(c*timer_nochange)
   }
  
   if (dot != 1) {
      vel = 0
   }else{
      vel = 0 // a*c*Math.cos(c*timer_nochange)
   }

   if (i != dot) {
    for (let n = 1; n < modos; n++){

   let kx = (n*Math.PI*x_center)/L
   let wn = (n*Math.PI*v)/L
   gamma = -0.5
   //intlimits[i].y += Math.exp(gamma*timer)*Math.sin(k) * (ans[n-1] * Math.cos(wn * timer) + bns[n-1] * Math.sin(wn * timer)); //+ Math.sin(k) * bns[n - 1] * Math.sin(wn * timer);
    //sin_medio = (cos(k*intlimits[i].xinf) - cos(k*intlimits[i].xsup)) / (k*(intlimits[i].xsup - intlimits[i].xinf))

    tp_n = 0
    t_p_n = 0
    // k != wn:
// tp_n = (2*a*k**2/(n*Math.PI*(wn2**2 - k**2)))*Math.sin(k*timer_nochange)
// else:
// tp_n = - (a*k/(2*n*Math.PI))*(timer_nochange)*Math.cos(k*(timer_nochange))
// an += Tp,n(0) 
// k != wn2::
// t_p_n = (2*a*k**3/(n*Math.PI*(wn2**2 - k**2)))*Math.cos(k*timer_nochange)
// else:
// t_p_n = - (a*k/(2*n*Math.PI))*Math.cos(k*timer_nochange) + (a*k**2/(2*n*Math.PI))*(timer_nochange)*Math.sin(k*timer_nochange)
// bn += T'p,n(0)

    // com ressonãncia:
    intlimits[i].y +=  Math.exp(gamma*timer) * Math.sin(kx) * (ans[n-1] * Math.cos(wn * timer) + bns[n-1] * Math.sin(wn * timer) + tp_n);
    vel +=  Math.exp(gamma*timer) * Math.sin(kx) * (wn * ( bns[n-1] * Math.cos(wn * timer)  - ans[n-1] * Math.sin(wn * timer)) + t_p_n) //+ velocities[0]*(1 - x_center/L)
   //intlimits[i].exp = `sin(${kx}).Ancos(${wn}.${timer}) + sin(${kx}).Bnsin(${wn}.${timer})`
   //console.log(intlimits[i].exp)
    }    
   }

   velocities[i] = vel

   // function format: sin(npix/L).Ancos(wnt) + sin(npix/L).Bsin(wnt)
  // wn = npiv/L
  // v = sqrt(tension/density)
}

// function format: sin(npix/L).Ancos(wnt) + sin(npix/L).Bsin(wnt)
// wn = npiv/L
// v = sqrt(tension/density)
//timer += 0.01
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
// k != wn2:
// Tp,n(0) = (2*a*k**2/(n*Math.PI*(wn2**2 - k**2)))*Math.sin(k*timer_nochange)
// else:
// Tp,n(0) = - (a*k/(2*n*Math.PI))*(timer_nochange)*Math.cos(k*(timer_nochange))
// an += Tp,n(0) 
let bn = - (2*velocities[0])/(n*Math.PI)
// k != wn2::
// T'p,n(0) = (2*a*k**3/(n*Math.PI*(wn2**2 - k**2)))*Math.cos(k*timer_nochange)
// else:
// T'p,n(0) = - (a*k/(2*n*Math.PI))*Math.cos(k*timer_nochange) + (a*k**2/(2*n*Math.PI))*(timer_nochange)*Math.sin(k*timer_nochange)
// bn += T'p,n(0)

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
 if (alt >= 10 && alt <= 140) {
   //intlimits[dot].y = alt - yinitial
 }
   this.document.getElementById('par').innerText = `mousey: ${event.y} ${((event.y)/cHeight)*150}`
   
  // timer = 0
   //update()

})

setInterval(() => {timer = 0; update()}, 10);

/*
function updatevelocities() {
for (let i1 = 0; i1 < contsnumber; i1++) {  

    let vel = 0;
    let x = intlimits[i1].xinf + radius; 

    for (let n1 = 1; n1 < modos; n1++) { 

        let kn = n1 * Math.PI / L;
        let wn = n1 * Math.PI * v / L;

        vel += Math.sin(kn * x) * wn * ( bns[n1-1] * Math.cos(wn * timer)  - ans[n1-1] * Math.sin(wn * timer));

    }
    velocities[i1] = vel;  
}
timer = 0
update()
}
*/