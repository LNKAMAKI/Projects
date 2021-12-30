u = [] // Lista de Números
optn = -1
optn2 = -1
optn3 = -1
optn4 = -1
function blue(idf) {
    num = document.getElementById(idf)
    num.style.backgroundColor = 'rgba(221, 233, 250, 0.98.53)'
    num.style.transitionDuration = '0.3s'
}
function white(idf) {
    num = document.getElementById(idf)
    num.style.backgroundColor = 'white'
}
function delit(l) {
    document.getElementById(l).parentNode.removeChild(document.getElementById(l))
    list.splice(l,1)
    u.splice(positions[l], 1)
    positions.splice(l, 1)
    seletor = document.getElementById('selc')
    quant = seletor.getElementsByTagName('option')

    for (h = 0; h < quant.length; h++) {
      quant[h].text = `${h}: ${list[h]}`
      quant[h].id = h
      quant[h].style.color = 'black'
      quant[h].setAttribute('onclick', `delit(${quant[h].id})`)
    }
    uyu = porcent.getElementsByTagName('option')
    for (gt = uyu.length; gt > 0; gt--) {
        porcent.removeChild(uyu[gt - 1])
    }

    uyi = acum.getElementsByTagName('option')
    for (gt = uyi.length; gt > 0; gt--) {
    acum.removeChild(uyi[gt - 1])
    }

    uyl = freac.getElementsByTagName('option')
    for (gt = uyl.length; gt > 0; gt--) {
    freac.removeChild(uyl[gt - 1])
    }

    uyg = fac.getElementsByTagName('option')
    for (gt = uyg.length; gt > 0; gt--) {
    fac.removeChild(uyg[gt - 1])
    }
    if (u.length == 0) {
        seletor.style.display = 'none'
        document.getElementById('medten').style.display = 'none'
        document.getElementById('dela').style.display = 'none'
        document.getElementById('tagra').style.display = 'none'
        m1 = document.getElementById('ma')
        m2 = document.getElementById('me')
        m3 = document.getElementById('mo')
        amp = document.getElementById('amp')
        m1.innerText = 'Média Aritmética:'
        m2.innerText = 'Mediana:'
        m3.innerText = 'Moda:'
        amp.innerText = 'Amplitude Total:'

        doTheMath(list)
    }else {
        list = sort(u)[0]
        positions = sort(u)[1]
        doTheMath(list)
    }

}
function go() {

    num = document.getElementById('numb')
    m1 = document.getElementById('ma')
    m2 = document.getElementById('me')
    m3 = document.getElementById('mo')
    amp = document.getElementById('amp')
    porcent = document.getElementById('porc')
    acum = document.getElementById('acum')
    freac = document.getElementById('fra')
    fac = document.getElementById('fa')
    n = num.value
    fre = document.getElementById('freq')
    seletor = document.getElementById('selc')
   
    if (n != '')           {
    if (freq.value > 0)            {

    uyu = porcent.getElementsByTagName('option')
    for (gt = uyu.length; gt > 0; gt--) {
    porcent.removeChild(uyu[gt - 1])
    }

    uyi = acum.getElementsByTagName('option')
    for (gt = uyi.length; gt > 0; gt--) {
    acum.removeChild(uyi[gt - 1])
    }

    uyl = freac.getElementsByTagName('option')
    for (gt = uyl.length; gt > 0; gt--) {
    freac.removeChild(uyl[gt - 1])
    }

    uyg = fac.getElementsByTagName('option')
    for (gt = uyg.length; gt > 0; gt--) {
    fac.removeChild(uyg[gt - 1])
    }

    for (f = 0; f < freq.value; f++) {
    u.push(Number(n))
    list = sort(u)[0]
    positions = sort(u)[1]

    alop = seletor.getElementsByTagName('option')
    for (th = alop.length; th > 0; th--) {
        seletor.removeChild(alop[th - 1])
    }
    for (a in list) {
    op = document.createElement('option')
    op.text = `${a}: ${list[a]}`
    op.id = a 
    op.setAttribute('onclick', `delit(${op.id})`)
    seletor.appendChild(op)

    seletor.style.display = 'inline-block'
    document.getElementById('medten').style.display = 'block'
    document.getElementById('dela').style.display = 'block'
    document.getElementById('tagra').style.display = 'block'

}
    alop = seletor.getElementsByTagName('option')
    for (th = alop.length; th > 0; th--) {
        alop[th - 1].style.color = 'black'
    }

    }
    
    if (num.value.length > 0) {
    doTheMath(list)
    }
}
   
    }
    freq.value = '1'
    num.value = ''
    num.focus()
}
function del() {
    u = [] // Lista de Números
  
    seletor.style.display = 'none'
    document.getElementById('medten').style.display = 'none'
    document.getElementById('dela').style.display = 'none'
    document.getElementById('tagra').style.display = 'none'
    //Deletando a Tabela
    if (document.getElementsByTagName('table').length > 0) {
        document.body.removeChild(document.getElementsByTagName('table')[0])
        document.body.removeChild(document.getElementById('graph'))
    }

    optn = -1
    seletor = document.getElementById('selc')
    alop = seletor.getElementsByTagName('option')
    for (th = alop.length; th > 0; th--) {
        seletor.removeChild(alop[th - 1])
    }
    m1.innerText = 'Média Aritmética:'
    m2.innerText = 'Mediana:'
    m3.innerText = 'Moda:'
    amp.innerText = 'Amplitude Total:'

    uyu = porcent.getElementsByTagName('option')
    for (gt = uyu.length; gt > 0; gt--) {
        porcent.removeChild(uyu[gt - 1])
    }

    uyi = acum.getElementsByTagName('option')
    for (gt = uyi.length; gt > 0; gt--) {
    acum.removeChild(uyi[gt - 1])
    }

    uyl = freac.getElementsByTagName('option')
    for (gt = uyl.length; gt > 0; gt--) {
    freac.removeChild(uyl[gt - 1])
    }

    uyg = fac.getElementsByTagName('option')
    for (gt = uyg.length; gt > 0; gt--) {
    fac.removeChild(uyg[gt - 1])
    }
}



function doTheMath(list)   {


// Deletando a Tabela e o Gráfico
    if (document.getElementsByTagName('table').length > 0) {
        document.body.removeChild(document.getElementsByTagName('table')[0])
        document.body.removeChild(document.getElementById('graph'))
    }


// Criando a Tabela e o Gráfico
if (u.length > 0) {
    gr = document.createElement('div')
    gr.id = 'graph'
    document.body.appendChild(gr)

    tab = document.createElement('table')
    document.body.appendChild(tab)
    tab.innerHTML = '<thead><tr><th>Valor</th><th>F</th><th>FR</th><th>FA</th><th>FRA</th></tr></thead><tbody></tbody>'
    tab.style.margin = 'auto'
    tab.getElementsByTagName('tr')[0].style.animation = 'slide 1s'

}
// Ordenando lista:

xernols =  String(media(list)[0]).replace(new RegExp('(?<=[0-9]\.[0-9]{2})[0-9]+'), '')
m1.innerText = 'Média Aritmética: ' + xernols

// Calculando a Amplitude Total
amplitude = list[0] - list[list.length - 1]
amp.innerText = 'Amplitude Total: ' + amplitude

// Conseguindo a Mediana
let ehprimo = parOuImpar(list.length)
if (list.length > 2)          {
if (ehprimo == 'ÍMPAR')     {
    m2.innerText = 'Mediana: ' + list[(list.length + 1)/2 - 1]
    medel = document.getElementById((list.length + 1)/2 - 1)
    medel.style.color = 'blue'
}

if (ehprimo == 'PAR')      {
  medoptions = [list.length/2 - 1, list.length/2]
  document.getElementById(medoptions[0]).style.color = 'blue'
  document.getElementById(medoptions[1]).style.color = 'blue'
  m2.innerText = 'Mediana: ' + ((list[list.length/2 - 1] + list[list.length/2])/2)

}
}else{
    m2.innerText = 'Mediana: ---'
}


// Vendo se o Tamanho da Lista é Par ou Ímpar(para conseguir a Mediana)
function parOuImpar(limite) {
    if (limite % 2 == 0) {
        return 'PAR'
    }else{
        return 'ÍMPAR'
    }
}

// Calculando a Média
function media(numeros) {
    let soma = 0
for (i = 0; i < numeros.length; i++) {
     soma += numeros[i]
}
return [soma/numeros.length, soma]
}

// Conseguindo a Moda 
mod = [0]
moda = [0]
apar = []
what = []
for (el in list) {

   rep = 0
   for (a = Number(el) + 1 ; a < list.length; a ++) {
       
       if (list[a] == list[el])  {
           rep += 1
       }else{
           
       
       }
   }
   repeat = Number(rep + 1)
   if (what.indexOf(list[el]) == -1) {
   apar.push(repeat) 
   what.push(list[el])
   }

   if (repeat > mod[0] && repeat != 1) {
       mod = [0]
       moda = [0]
       mod[0] = repeat 
       moda[0] = list[el]
       
   }else if(repeat == mod[0] && repeat != 1){
      mod.push(repeat)
      moda.push(list[el])
   }
  
}

sum = 0
for (n in apar) {
    sum += apar[n]
}

fra = 0
fa = 0

let iclass = document.getElementById('interclass')
if (iclass.value.length == 0 || iclass.value < 0.1){

uao = sort2(apar, what)[0]
asd = sort2(apar, what)[1]

// Frequências 

left = 0

for (ui = 0; ui < what.length; ui++) {
    
     trow = document.createElement('tr')
     tab.getElementsByTagName('tbody')[0].appendChild(trow)
     tdata = document.createElement('td')
     trow.appendChild(tdata)
     trow.style.animation = 'slide 1s'
     tdata.innerText = asd[ui]
        //f
        tdata = document.createElement('td')
        trow.appendChild(tdata)
        tdata.innerText = uao[ui]
        ji = document.createElement('option')
        ji.text = 'f ' + `${asd[ui]}: ${uao[ui]}`
        acum.appendChild(ji)

    //fr
    tdata = document.createElement('td')
    trow.appendChild(tdata)
    xernols =  String(uao[ui]/sum * 100).replace(new RegExp('(?<=[0-9]\.[0-9]{2})[0-9]+'), '')
    tdata.innerText = xernols + '%'
    optn2++
    ju = document.createElement('option')
    ju.text = 'fr ' + `${asd[ui]}: ${uao[ui]/sum * 100}% `
    porcent.appendChild(ju)
    
    br = document.createElement('div')
    br.setAttribute('class', 'bar')
        num1 = []
        num2 = []
        for (n = 0; n < 240; n++) {
        num1.push(n)

        }
        for (n = 0; n < 240; n++) {
            num2.push(n)
    
            }
      n1 = num1[Math.floor(num1.length*Math.random())]
      n2 = num2[Math.floor(num2.length*Math.random())]
      n3 = num2[Math.floor(num2.length*Math.random())]
    br.style.backgroundColor = `rgb(${n1}, ${n2}, ${n3})`
    gr.appendChild(br)
    
    if (100/what.length - 30/what.length > 8.5) {
            br.style.width = 'calc(8.5%)'
            gr.style.maxWidth = '600px'
        }else{
            br.style.width = `calc( ${100/what.length - 30/what.length}% )`
            if (600 + what.length*10 < 1000) {
                gr.style.maxWidth = 600 + what.length*10 + 'px'
            }else{
                gr.style.maxWidth = '1000px'
            }
        }

    pnum = document.createElement('p')
    pnum.style.position = 'absolute'
    pnum.innerText = asd[ui] + '(' + xernols + '%)'
    pnum.setAttribute('class', 'pnumber')
    pnum.style.top = '-20px'
    br.appendChild(pnum)
    br.style.height = uao[ui]/sum * 280 + 'px'
    gr.style.animation = 'hidden ' + uao[0]/sum * 280/90*3.3 + 's'
    br.style.animation = 'baran ' + uao[ui]/sum * 280/90 + 's'
    console.log(xernols)
    
   console.log('what length' + what.length)
   ht = String(uao[0]/sum * 280).replace(new RegExp('(?<=[0-9]\.[0-9]{2})[0-9]+'), '')
   console.log(Number(ht) + 5)
   gr.style.height = Number(ht) + 25 + 'px'

   pc = 12.5 * (what.length - 1) + 8.5
   pc2 = 100/what.length * (what.length - 1) + (100/what.length - 30/what.length)
   if (ui == 0) {
    if (100/what.length - 30/what.length > 8.5) {
        br.style.left = `calc(${left + ((100 - pc)/2)}%)`
    }else{
        br.style.left = `calc(${left + ((100 - pc2)/2)}%)`
    }
    
   }else{
    if (100/what.length - 30/what.length > 8.5) {
        br.style.left = `calc(${left + ((100 - pc)/2)}%)`
    }else{
        br.style.left = `calc(${left + ((100 - pc2)/2)}%)`
    }
   
   }

   if (100/what.length - 30/what.length > 8.5) {
    left += 8.5 + 4
}else{
    left += 100/what.length
}

    //fa 
    fa += uao[ui]
    jn = document.createElement('option')
    tdata = document.createElement('td')
    trow.appendChild(tdata)
    tdata.innerText = fa
    jn.text = 'fa ' + fa 
    fac.appendChild(jn)

    //fra 
    fra += uao[ui]/sum * 100
    ja = document.createElement('option')
    tdata = document.createElement('td')
    trow.appendChild(tdata)
    xernols =  String(fra).replace(new RegExp('(?<=[0-9]\.[0-9]{2})[0-9]+'), '')
    tdata.innerText = xernols + '%'
    ja.text = 'fra ' + fra + '%'
    freac.appendChild(ja)

    }

    
}else{
    interval = []
    interclasses = []
    aparic = []
   for (c = what[what.length - 1]; c <= what[0] + Number(iclass.value); c += Number(iclass.value)) {
    interval.push(c)
    if (interval.length != 1)   {
    apar2 = 0
    for(n in what) {
       if (what[n] >= interval[interval.length - 2] && what[n] < interval[interval.length - 1]) {
           apar2 += Number(apar[n])
       }
    }
    interclasses.push(interval[interval.length - 2] + ' |-- ' + interval[interval.length - 1])
    aparic.push(apar2)
    }

   }
   asd = sort2(aparic, interclasses)[1]
   uao = sort2(aparic, interclasses)[0]

   sum = 0
for (n in aparic) {
    sum += aparic[n]
}

console.log(interclasses) 
for (ui = interclasses.length; ui > -1; ui--) {
    console.log(uao[ui]/sum * 100)
    if (uao[ui]/sum * 100 == 0) {
        console.log('0!!!')
        interclasses.splice(ui, 1)
    }
}
left = 0
// Frequências com intervalo de classe
   for (ui = 0; ui < interclasses.length; ui++) {
    trow = document.createElement('tr')
     tab.getElementsByTagName('tbody')[0].appendChild(trow)

     tdata = document.createElement('td')
     trow.appendChild(tdata)
     trow.style.animation = 'slide 1s'
     tdata.innerText =  `${asd[ui]}`
     //f
     tdata = document.createElement('td')
    trow.appendChild(tdata)
    tdata.innerText =  `${uao[ui]}`
     ji = document.createElement('option')
     ji.text = `${asd[ui]}: ${uao[ui]}`
     acum.appendChild(ji)

    //fr
    optn2++
    tdata = document.createElement('td')
    trow.appendChild(tdata)
    xernols =  String(uao[ui]/sum * 100).replace(new RegExp('(?<=[0-9]\.[0-9]{2})[0-9]+'), '')
    tdata.innerText =  xernols + '%'
    ju = document.createElement('option')
    ju.text = `${asd[ui]}: ${uao[ui]/sum * 100}% `
    porcent.appendChild(ju)
//
br = document.createElement('div')
br.setAttribute('class', 'bar')
gr.appendChild(br)

if (100/interclasses.length - 30/interclasses.length > 8.5) {
        br.style.width = 'calc(8.5%)'
        gr.style.maxWidth = '600px'
    }else{
        br.style.width = `calc( ${100/interclasses.length - 30/interclasses.length}% )`
        if (600 + interclasses.length*10 < 1000) {
            gr.style.maxWidth = 600 + interclasses.length*10 + 'px'
        }else{
            gr.style.maxWidth = '1000px'
        }
    }

pnum = document.createElement('p')
pnum.style.position = 'absolute'
pnum.innerText = asd[ui] + '(' + xernols + '%)'
pnum.setAttribute('class', 'pnumber')
pnum.style.top = '-20px'
br.appendChild(pnum)
br.style.height = uao[ui]/sum * 280 + 'px'
gr.style.animation = 'hidden ' + uao[0]/sum * 280/90*3.3 + 's'
br.style.animation = 'baran ' + uao[ui]/sum * 280/90 + 's'
console.log(xernols)

console.log('interclasses.length' + interclasses.length)
pc = 12.5 * (interclasses.length - 1) + 8.5
pc2 = 100/interclasses.length * (interclasses.length - 1) + (100/interclasses.length - 30/interclasses.length)
if (ui == 0) {
if (100/interclasses.length - 30/interclasses.length > 8.5) {
    br.style.left = `calc(${left + ((100 - pc)/2)}%)`
}else{
    br.style.left = `calc(${left + ((100 - pc2)/2)}%)`
}

}else{
if (100/interclasses.length - 30/interclasses.length > 8.5) {
    br.style.left = `calc(${left + ((100 - pc)/2)}%)`
}else{
    br.style.left = `calc(${left + ((100 - pc2)/2)}%)`
}

}

if (100/interclasses.length - 30/interclasses.length > 8.5) {
left += 8.5 + 4
}else{
left += 100/interclasses.length
}
    //fa 
    fa += uao[ui]
    tdata = document.createElement('td')
    trow.appendChild(tdata)
    tdata.innerText =  fa
    jn = document.createElement('option')
    jn.text = fa
    fac.appendChild(jn)

    //fra 
    fra += uao[ui]/sum * 100
    tdata = document.createElement('td')
    trow.appendChild(tdata)
    xernols =  String(fra).replace(new RegExp('(?<=[0-9]\.[0-9]{2})[0-9]+'), '')
    tdata.innerText =  xernols + '%'
    ja = document.createElement('option')
    ja.text = fra + '%'
    freac.appendChild(ja)

    }
}

    showmoda = 'Moda: '
    for (m = 0; m < moda.length; m++) {
        if (moda.length != 1 && m != moda.length - 1 && m != moda.length - 2)  {
        showmoda += `${moda[m]}, `
        }else if(m == moda.length - 2 ){
        showmoda += `${moda[m]} e `
        }else{
            showmoda += `${moda[m]}`
        }
       
    }
    if (what.length < 2 || mod[0] == 0)   {
    m3.innerText = 'Moda: ---'
    }else{
    m3.innerText = showmoda
    }
}

// Ordenar a lista de números
function sort(n) {
var maiorparamenor = [] 
var posiçõesnumeros = []
var yposition = n

for (n in yposition) {      
    maiorparamenor.push(-100000000000000000000000000000000000000000000000000000000000000000000000000000000)
    posiçõesnumeros.push(-1)

}

for (item in yposition) {
var volume = 0
var dn = 0  
for (volume in yposition) {
if (dn == 0) {
if (yposition[item] > maiorparamenor[volume]) {
var itens = yposition.length - (Number(volume) + 1) 
var leng = yposition.length

for (c = 0; c < itens; c++) {
maiorparamenor[Number(leng) - 1] = maiorparamenor[Number(leng) - 2]
posiçõesnumeros[Number(leng) - 1] = posiçõesnumeros[Number(leng) - 2]
leng--
}
maiorparamenor[volume] = yposition[item]
posiçõesnumeros[volume] = Number(item) 
dn = 10


}
}
}
}
return [maiorparamenor, posiçõesnumeros]
}



// Ordenar a lista de números
function sort2(n, p) {
    var maiorparamenor = [] 
    var posiçõesnumeros = []
    var teste = p
    var yposition = n
    
    for (n in yposition) {      
        maiorparamenor.push(-100000000000000000000000000000000000000000000000000000000000000000000000000000000)
        //posiçõesnumeros.push(-1)
    
    }
    
    for (item in yposition) {
    var volume = 0
    var dn = 0  
    for (volume in yposition) {
    if (dn == 0) {
    if (yposition[item] > maiorparamenor[volume]) {
    var itens = yposition.length - (Number(volume) + 1) 
    var leng = yposition.length
    
    for (c = 0; c < itens; c++) {
    maiorparamenor[Number(leng) - 1] = maiorparamenor[Number(leng) - 2]
    posiçõesnumeros[Number(leng) - 1] = posiçõesnumeros[Number(leng) - 2]
    leng--
    }
    maiorparamenor[volume] = yposition[item]
    posiçõesnumeros[volume] = teste[item]
    dn = 10
    
    
    }
    }
    }
    }
    return [maiorparamenor, posiçõesnumeros]
    }
    
