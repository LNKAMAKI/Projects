
u = [] // Lista de Números
optn = -1
optn2 = -1
optn3 = -1
optn4 = -1
function blue(idf) {
    num = document.getElementById(idf)
    num.style.backgroundColor = 'rgba(221, 233, 250, 0.973)'
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
        m1 = document.getElementById('ma')
        m2 = document.getElementById('me')
        m3 = document.getElementById('mo')
        amp = document.getElementById('amp')
        m1.innerText = 'Média Aritmética:'
        m2.innerText = 'Mediana:'
        m3.innerText = 'Moda:'
        amp.innerText = 'Amplitude Total:'
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
    }
    alop = seletor.getElementsByTagName('option')
    for (th = alop.length; th > 0; th--) {
        alop[th - 1].style.color = 'black'
    }
    
    }
    doTheMath(list)
}
   
    }
    freq.value = '1'
    num.value = ''
    num.focus()
}
function del() {
    u = [] // Lista de Números
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
// Ordenando lista:



m1.innerText = 'Média Aritmética: ' + media(list)[0]

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

for (ui = 0; ui < what.length; ui++) {
    //fr
    optn2++
    ju = document.createElement('option')
    ju.text = `${asd[ui]}: ${uao[ui]/sum * 100}% `
    porcent.appendChild(ju)

    //f
    ji = document.createElement('option')
    ji.text = `${asd[ui]}: ${uao[ui]}`
    acum.appendChild(ji)
    
    //fa 
    fa += uao[ui]
    jn = document.createElement('option')
    jn.text = fa
    fac.appendChild(jn)

    //fra 
    fra += uao[ui]/sum * 100
    ja = document.createElement('option')
    ja.text = fra + '%'
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
   for (ui = 0; ui < interclasses.length; ui++) {
    //fr
    optn2++
    ju = document.createElement('option')
    ju.text = `${asd[ui]}: ${uao[ui]/sum * 100}% `
    porcent.appendChild(ju)

    //f
    ji = document.createElement('option')
    ji.text = `${asd[ui]}: ${uao[ui]}`
    acum.appendChild(ji)
    
    //fa 
    fa += uao[ui]
    jn = document.createElement('option')
    jn.text = fa
    fac.appendChild(jn)

    //fra 
    fra += uao[ui]/sum * 100
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
    
