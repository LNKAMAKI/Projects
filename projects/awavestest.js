let ans = []
let bns = []
let timer = 0
let lastTime = 0
let intlimits = []
const tension = 80
const density = 0.005
const v = Math.sqrt(tension/density)
const L = 150
const contsnumber = 60
const radius = L/(2*contsnumber)
let b = 9
let velocities = []

//const L = radius*2*contsnumber
const modos = 30

function begin(){
const canv = document.getElementById("canvas")
const c = canv.getContext('2d')

intlimits = []
const xinitial = 50
const yinitial = 75

g = 0
for (let i = 0; i < contsnumber; i++){
   if (i != 10) {
      intlimits.push({xinf:i*radius*2, xsup: i*radius*2 + 2*radius, y: -20,vel:0})
      velocities.push(0)
   }else{
      intlimits.push({xinf: i*radius*2, xsup: i*radius*2 + 2*radius, y: 0,vel:0})
      velocities.push(0)
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
   c.arc(x_center + xinitial, intlimits[i].y + yinitial, radius, 0, Math.PI*2); // círculo completo
   c.stroke(); // contorno
   if (i != 10) {
      c.fillStyle = 'red'
   }else{
      c.fillStyle = 'blue'

   }
   c.fill()
   c.closePath()
   
   intlimits[i].y = 0
   vel = 0
   if (i != 10) {
    for (let n = 1; n < modos; n++){

   let k = (n*Math.PI*x_center)/L
   let wn = (n*Math.PI*v)/L
   gamma = -0.00
   //intlimits[i].y += Math.exp(gamma*timer)*Math.sin(k) * (ans[n-1] * Math.cos(wn * timer) + bns[n-1] * Math.sin(wn * timer)); //+ Math.sin(k) * bns[n - 1] * Math.sin(wn * timer);
    //sin_medio = (cos(k*intlimits[i].xinf) - cos(k*intlimits[i].xsup)) / (k*(intlimits[i].xsup - intlimits[i].xinf))

    intlimits[i].y += Math.sin(k) * (ans[n-1] * Math.cos(wn * timer) + bns[n-1] * Math.sin(wn * timer));
    vel += Math.sin(k) * wn * ( bns[n-1] * Math.cos(wn * timer)  - ans[n-1] * Math.sin(wn * timer))
   //intlimits[i].exp = `sin(${k}).Ancos(${wn}.${timer}) + sin(${k}).Bnsin(${wn}.${timer})`
   //console.log(intlimits[i].exp)
    }    
   }else{

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
   bn += (2/(wn2*L))*velocities[i]*((-L/(n*Math.PI))*(Math.cos(n*Math.PI*intlimits[i].xsup/L) - Math.cos(n*Math.PI*intlimits[i].xinf/L)))}
ans.push(an)
bns.push(bn)
}   
}




window.addEventListener('keyup', function (event) {
   if (event.key == 'l') {
      update()
   }

})

//setInterval(() => {timer = 0; update()}, 15);

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
