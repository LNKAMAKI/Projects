
loaded = false

function erase() {
    ////console.log('ERASE')
    get1('write').value = ''
}

   function load() {
    pexps = document.getElementsByClassName('pexp')
for (sure = 0; sure < pexps.length; sure++) {
    //console.log(pexps[sure])
    pexps[sure].setAttribute('onclick',`changeexp(${sure})`)
}

    get1('resol').innerHTML = ''

    get1('resol').innerHTML+= ' <div class="center" id="nopad"> <img src="./imagens/rar.png" alt="" class="ar"><span>Resolução</span> </div> <div class="cont"><div class="center"  classname="top"><img src="./imagens/rar.png" alt="" class="ar"><span>Engine</span></div><p></p></div>'
    //<div class="cont"> <div class="center"  classname="top"> <img src="./imagens/rar.png" alt="" class="ar"> <span> Passo a passo</span></div><p></p></div>
    conts = get2('cont')
    cents = get2('center')
    ars = get2('ar')
    mecams = [] 
    late = -1   
    sai = 0
    while  (cents[sai].innerText != 'Resolução') {
            //console.log('É', cents[sai])
            sai++
    } 
    for (bob = 0; bob < sai; bob++) {
    c = new CreateFunc(bob,'close')
        c.SetDefault()
        c.AddEvent()
    }
    //console.log('RESOLUÇÃO:',sai)

    loaded = true
    get1('write').addEventListener('keyup',(event) => {
        if (event.key == 'Enter') {
        showresult()
        }
}) }

function showresult() {
    if (loaded == true) {
    styles = document.head.getElementsByTagName('style')
    ////console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',document.head.getElementsByTagName('style'))
    for (sen = styles.length - 1; sen >= 0; sen--) {
        if (sen != 0) {
            document.head.removeChild(styles[sen])
        }}
   
    type = get1('write').value
    ////console.log('type',type)
    ////console.log(type)
    res = doTheFactoring(type)
   
    //console.log('RESSSSSSSSSSSSSSSSS',res)
    if (res[0] != '?') {
    get1('fatoracao').value = res[0]
    }else{
        get1('fatoracao').value = 'Não é possível agrupar todos os monômios'
    }

get1('resol').innerHTML = ''

smons = ''
for (yo in res[10]) {
    smons += `<span class="jo"><span class="str">'${desfat(res[10][yo].numero)}'</span><span class="num">${yo}</span></span>`
}

get1('resol').innerHTML+= ` <div class="center" id="nopad"> <img src="./imagens/rar.png" alt="" class="ar"><span>Resolução</span> </div>

<div style="padding: 3px 0px;background-color: white;border-radius: 7px;overflow: hidden;">
<div class="cont">
<div class="center" classname="top"><img src="./imagens/rar.png" alt="" class="ar">
<span>Engine</span>
</div>

<p id="mons">${smons}</p>

<div class="cram">
<div class="cont" name="ti"><div class="center" classname="top"><img src="./imagens/rar.png" class="ar"><span style="max-width:calc(100% - 50px);overflow-x:auto;">Relações</span><img src="./imagens/rar.png" class="pers" style="transform:rotate(90deg);right:30px;" onclick="fn(0,'open')"><img src="./imagens/rar.png" class="pers" onclick="fn(0,'close')"></div></div>
<div class="cont" name="ti"><div class="center"  classname="top"><img src="./imagens/rar.png" alt="" class="ar"><span>Repetições</span><img src="./imagens/rar.png" class="pers" style="transform:rotate(90deg);right:30px;" onclick="fn(1,'open')"><img src="./imagens/rar.png" class="pers" onclick="fn(1,'close')"></div></div>
</div>

<div class="cram">
<div class="cont" name="ti"><div class="center"  classname="top"><img src="./imagens/rar.png" alt="" class="ar"><span>Combinações</span><img src="./imagens/rar.png" class="pers" style="transform:rotate(90deg);right:30px;" onclick="fn(2,'open')"><img src="./imagens/rar.png" class="pers" onclick="fn(2,'close')"></div></div>
<div class="cont" name="ti"><div class="center"  classname="top"><img src="./imagens/rar.png" alt="" class="ar"><span>Agrupamentos</span><img src="./imagens/rar.png" class="pers" style="transform:rotate(90deg);right:30px;" onclick="fn(3,'open')"><img src="./imagens/rar.png" class="pers" onclick="fn(3,'close')"></div></div>
</div>
</div>

</div>`
conts = get2('cont')
cents = get2('center')
ars = get2('ar')
ts = document.getElementsByName('ti')
cn = ts[0]
cn.innerHTML+= '<div class="dev"></div>'

pl1 = []

sick = 0
while  (cents[sick].innerText != 'Relações') {
        //console.log('É', cents[sick])
        sick++
}
hyu = sick  // CORRESPONDE AO INDEX DE RELAÇÕES!
for (h in res[5]) {
    ////console.log(h)
    carfixed = ''
    for (sky in res[6][h].divisor) {
        carfixed+= res[6][h].divisor[sky]
    }
    carfixed = carfixed.replace('-.','-').replace(new RegExp('\\.','g'),'*')
    spn = ''
    spn2 = ''
    splitspn = ''
    splitspn2 = ''
    for(k in res[5][h].mons) {
        if (k != res[5][h].mons.length - 1) {
            spn+= `<span class="af">
            <span style="color:var(--number)">${res[5][h].mons[k]}</span>:<span style="color:var(--string);position:relative;" class="abs">'${desfat(REFORMATAR(res[6][h].divididos[k]))}'</span>,
            <p class="out">oláaaaa</p>
            </span>`
            //spn2+= `<span><span style="color:var(--string)">'${desfat(REFORMATAR(res[6][h].divididos[k]))}</span>',</span>`
        }else{
            spn+= `<span class="af">
            <span style="color:var(--number)">${res[5][h].mons[k]}</span>:<span style="color:var(--string)" class="abs">'${desfat(REFORMATAR(res[6][h].divididos[k]))}'</span>
            <p class="out">olá</p>
            </span>`
            //spn2+= `<span><span style="color:var(--string)">'${desfat(REFORMATAR(res[6][h].divididos[k]))}'</span></span>`
        }
        splitspn+= ` <p class="psem">
        <span style="display:inline-block;"><span style="color:var(--number)">${k}</span>: <span style="color:var(--number)">${res[5][h].mons[k]}</span>  <span style="color:var(--string)">'${desfat(REFORMATAR(res[6][h].divididos[k]))}'</span> </span> </p>`
    }

    for (ju = 0; ju <2;ju++) {
        hyu++
        pl1.push(hyu)
        }

    dg = desfat(REFORMATAR(carfixed))
    
   if (h == 0) {
    cn.getElementsByClassName('dev')[0].innerHTML+= '<div class="space"></div>'
   }
cn.getElementsByClassName('dev')[0].innerHTML+= `
<div class="cont"> 

<div class="center">
<img src="./imagens/rar.png" alt="" class="ar">
<span class='sp'> <span style="color:var(--number)">${h}</span>: {car: <span style="color:var(--string)">'${dg}'</span>, mons: Array(${res[5][h].mons.length})}
</span>
</div> 

<div class="tocent"> 
<p class="pdev">car: 
<span style="color:var(--string);position:relative;padding:10px;">
'${dg}'
<span class="som">i</span>
</span>
</p>

<div class="cont"> 
<div class="center" style="overflow-x: hidden;">
<img src="./imagens/rar.png" alt="" class="ar">
<div style="overflow-x:scroll;display:flex;height:fit-content;"><span style="font-size:0.9em">mons: [</span><span class="sp" style="min-width:24px;display:inline-flex;overflow-y:visible;">${spn}</span>
<span style="font-size:0.9em">]</span>&nbsp;
<span style="font-size:0.9em">

</div>
</div> 
${splitspn}
</div>
</div>
 </div>`
}

cn2 = ts[1]
cn2.innerHTML+= '<div class="dev"></div>'
hyu++
pl2 = []
for (h in res[7]) {
    spn = ''
    spn2 = ''
    splitspn = ''
    splitspn2 = ''
    for(k in res[7][h].aparicoes) {
        if (k != res[7][h].aparicoes.length - 1) {
            spn+= `<span><span style="color:var(--number)">${res[7][h].aparicoes[k]}</span>,</span>`
            spn2+= `<span><span style="color:var(--number)">${res[7][h].mons[k]}</span>,</span>`
        }else{
            spn+= `<span><span style="color:var(--number)">${res[7][h].aparicoes[k]}</span></span>`
            spn2+= `<span><span style="color:var(--number)">${res[7][h].mons[k]}</span></span>`
        }
        splitspn+= ` <p class="psem"><span style="display:inline-block;"><span style="color:var(--number)">${k}</span>: <span style="color:var(--number)">${res[7][h].aparicoes[k]}</span></p>`
        splitspn2+= ` <p class="psem"><span style="display:inline-block;"><span style="color:var(--number)">${k}</span>: <span style="color:var(--number)">${res[7][h].mons[k]}</span></p>`
    }

    for (ju = 0; ju <3;ju++) { // 3 = 2 spns(spn, spn2) ====> COMO ADICIONAR SPN <====
        hyu++
        pl2.push(hyu)
        }

        if (h == 0) {
            cn2.getElementsByClassName('dev')[0].innerHTML+= '<div class="space"></div>'
           }
cn2.getElementsByClassName('dev')[0].innerHTML+= `
<div class="cont">
<div class="center">
<img src="./imagens/rar.png" alt="" class="ar">
<span class="sp">
<span style="color:var(--number)">${h}</span>: {fator: <span style="color:var(--string)">'${desfat(REFORMATAR(res[7][h].dividido))}'</span>, aparições: Array(${res[7][h].aparicoes.length})}
</span>
</div>

<div class="tocent"> 
<p class="pdev">fator: <span style="color:var(--string)">'${desfat(REFORMATAR(res[7][h].dividido))}'</span></p>

<div class="cont"> 
<div class="center">
<img src="./imagens/rar.png" alt="" class="ar">
<span style="font-size:0.9em">aparics: [</span><span class="sp" style="overflow-x:scroll;">${spn}</span><span style="font-size:0.9em">]</span>
</div> 
${splitspn}
</div>

<div class="cont"> 
<div class="center">
<img src="./imagens/rar.png" alt="" class="ar">
<span style="font-size:0.9em">mons: [</span><span class="sp" style="overflow-x:scroll;">${spn2}</span><span style="font-size:0.9em">]</span>
</div> 
${splitspn2}
</div>

</div>

</div>`
}
// ${res[7][h].dividido.replace(new RegExp('\\*','g'),'.')} => FATOR FATORADO

cn3 = ts[2]
cn3.innerHTML+= '<div class="dev"></div>'
hyu++
pl3 = []
for (h in res[8]) {
    spn = ''
    splitspn = ''
    for(k in res[8][h].repetidos) {
        if (k != res[8][h].repetidos.length - 1) {
            spn+= `<span><span style="color:var(--number)">${res[8][h].repetidos[k]}</span>,</span>`
        }else{
            spn+= `<span><span style="color:var(--number)">${res[8][h].repetidos[k]}</span></span>`
        }
        splitspn+= ` <p class="psem"><span style="display:inline-block;"><span style="color:var(--number)">${k}</span>: <span style="color:var(--number)">${res[8][h].repetidos[k]}</span></p>`
    }

    spn2 = ''
    splitspn2 = ''
    for(k in res[8][h].posições) {
        if (k != res[8][h].posições.length - 1) {
            spn2+= `<span><span style="color:var(--string)">'${desfat(REFORMATAR(res[7][res[8][h].posições[k]].dividido))}'</span>,</span>`
        }else{
            spn2+= `<span><span style="color:var(--string)">'${desfat(REFORMATAR(res[7][res[8][h].posições[k]].dividido))}'</span></span>`
        }
        splitspn2+= ` <p class="psem"><span style="display:inline-block;"><span style="color:var(--number)">${k}</span>: <span style="color:var(--string)">'${desfat(REFORMATAR(res[7][res[8][h].posições[k]].dividido))}'</span></p>`
    }

    for (ju = 0; ju <3;ju++) {
    hyu++
    pl3.push(hyu)
    }

    if (h == 0) {
        cn3.getElementsByClassName('dev')[0].innerHTML+= '<div class="space"></div>'
       }
cn3.getElementsByClassName('dev')[0].innerHTML+= `
<div class="cont">
<div class="center">
<img src="./imagens/rar.png" alt="" class="ar">
<span class="sp">
<span style="color:var(--number)">${h}</span>: {posições: Array(${res[8][h].repetidos.length}), fatores: Array(${res[8][h].posições.length}), monomios: Array(${res[8][h].monomios.length})
</span>
</div>

<div class="tocent"> 

<div class="cont"> 
<div class="center">
<img src="./imagens/rar.png" alt="" class="ar">
<span style="font-size:0.9em">posições: [</span><span class="sp" style="overflow-x:scroll;">${spn}</span><span style="font-size:0.9em">]</span>
</div> 
${splitspn}
</div>

<div class="cont"> 
<div class="center">
<img src="./imagens/rar.png" alt="" class="ar">
<span style="font-size:0.9em">fatores: [</span><span class="sp" style="overflow-x:scroll;">${spn2}</span><span style="font-size:0.9em">]</span>
</div> 
${splitspn2}
</div>

</div>

</div>`
}

cn4 = ts[3]
cn4.innerHTML+= '<div class="dev"></div>'
hyu++
pl4 = []
for (h in res[9]) {
    splitspn = ''
    spn = ''
    outr = []
    for(k in res[9][h].w.what) {
           spi = ''
            for (lik in res[9][h].w.what[k].ar) {
                if (lik != res[9][h].w.what[k].ar.length - 1) {
                spi+= `<span><span style="color:var(--string)">'${desfat(res[10][res[9][h].w.what[k].ar[lik]].numero)}'</span>,</span>`
                }else{
                    spi+= `<span><span style="color:var(--string)">'${desfat(res[10][res[9][h].w.what[k].ar[lik]].numero)}'</span></span>`
                } }
        splitspn+= `<span style="display: flex;font-size:0.9em;margin-bottom: 7px;margin-left:10px;"><span style="color:var(--number)">${k}</span>:&nbsp;<span>[</span> <span style="overflow-x: scroll;">${spi}</span>]</span>`
        spn+= `[<span class="sp" style="min-width:30px;">${spi}</span>]`
    }

    for (ju = 0; ju <2;ju++) {
        hyu++
        pl4.push(hyu)
        }

        if (h == 0) {
            cn4.getElementsByClassName('dev')[0].innerHTML+= '<div class="space"></div>'
           }
cn4.getElementsByClassName('dev')[0].innerHTML+= `
<div class="cont">
<div class="center">
<img src="./imagens/rar.png" alt="" class="ar">
<span class="sp">
<span style="color:var(--number)">${h}</span>: {mons: Array(${res[9][h].mons.length}), grupos: Array(${res[9][h].w.what.length})
</span>
</div>

<div class="tocent" style="margin-bottom:0px;"> 

<div class="cont"> 
<div class="center">
<img src="./imagens/rar.png" alt="" class="ar">
<span style="font-size:0.9em">agrup:&nbsp;</span>
<span style="display: flex;overflow-x: scroll;">
${spn}
<span>
</div> 
${splitspn}
</div>
</div>
</div>`
}

feb = []
for (kep in cents) {
    don = cents[kep]
    if (don.innerText == 'Relações' || don.innerText == 'Repetições' || don.innerText == 'Combinações' || don.innerText == 'Agrupamentos'){
       ////console.log(don.innerText, kep)
       feb.push(Number(kep))
    } }

//mecams = []
//console.log(mecams.length)
for (ha = mecams.length - 1; ha >= 0; ha--) {
    //console.log(ha,mecams[ha].created)
    if (Number(String(mecams[ha].created).replace('j','')) >= sai) {
       //console.log('pode tirar')
       mecams.splice(ha,1)
    }
}

late = sai
me = document.getElementsByClassName('ar')

for (ocean = sai; ocean < sick; ocean++) {
c = new CreateFunc(ocean,'close')
        c.SetDefault()
        c.AddEvent()
}

    hgts = []
    for (tp in feb) {
        is = feb[tp]
        ////console.log(is)
        c = new CreateFunc(is,'close',8)
        c.SetDefault()
        c.AddEvent()
    }

    plar = []
    for(pare in pl1) {
        is = pl1[pare]
        c = new CreateFunc(is,'close',8)
        ////console.log('----++++----+++----+++----',is)
        c.SetDefault()
        c.AddEvent()
        plar.push(c)
    }
    for(pare in pl2) {
        is = pl2[pare]
        c = new CreateFunc(is,'close',8)
        ////console.log('----++++----+++----+++----',is)
        c.SetDefault()
        c.AddEvent()
        plar.push(c)
    }
    for(pare in pl3) {
        is = pl3[pare]
        c = new CreateFunc(is,'close',8)
        ////console.log('----++++----+++----+++----',is)
        c.SetDefault()
        c.AddEvent()
        plar.push(c)
    }
    for(pare in pl4) {
        is = pl4[pare]
        c = new CreateFunc(is,'close',8)
        ////console.log('----++++----+++----+++----',is)
        c.SetDefault()
        c.AddEvent()
        plar.push(c)
    }
    /*
    c = new CreateFunc(pl4[pl4.length - 1] + 1,'close')
    c.SetDefault()
    c.AddEvent()
    //cs.push(c)
    */
}}

function fn(a,act) {
    ////console.log('aaa',a,act)
    sur = 0
    cas = 0
    switch(a) {
        case 0:
         sur = pl1
         cas = 0
        break
        case 1:
            sur = pl2
            cas = 1
        break
        case 2:
         sur = pl3
         cas = 2
        break
        case 3:
         sur = pl4
         cas = 3
        break
    }

    for (go = sur.length - 1; go >= 0; go--) {
        conts[sur[go]].parentNode.removeChild(conts[sur[go]])
    }

    conts = get2('cont')
    cents = get2('center')
    ars = get2('ar')
    ts = document.getElementsByName('ti')

    if (cas == 0) {
    cn = ts[0]
    for (h in res[5]) {
        carfixed = ''
    for (sky in res[6][h].divisor) {
        carfixed+= res[6][h].divisor[sky]
    }
    carfixed = carfixed.replace('-.','-').replace(new RegExp('\\.','g'),'*')
        spn = ''
        spn2 = ''
        splitspn = ''
        splitspn2 = ''
        for(k in res[5][h].mons) {
            if (k != res[5][h].mons.length - 1) {
                spn+= `<span class="af">
                <span style="color:var(--number)">${res[5][h].mons[k]}</span>:<span style="color:var(--string)" class="abs">'${desfat(REFORMATAR(res[6][h].divididos[k]))}'</span>,</span>`
            }else{
                spn+= `<span class="af"><span style="color:var(--number)">${res[5][h].mons[k]}</span>:<span style="color:var(--string)" class="abs">'${desfat(REFORMATAR(res[6][h].divididos[k]))}'</span></span>`
            }
            splitspn+= ` <p class="psem"><span style="display:inline-block;"><span style="color:var(--number)">${k}</span>: <span style="color:var(--number)">${res[5][h].mons[k]}</span>  <span style="color:var(--string)">'${desfat(REFORMATAR(res[6][h].divididos[k]))}'</span> </span> </p>`
        }
        dg = desfat(REFORMATAR(carfixed))
    cn.getElementsByClassName('dev')[0].innerHTML+= `
    <div class="cont"> <div class="center"><img src="./imagens/rar.png" alt="" class="ar"><span class='sp'> <span style="color:var(--number)">${h}</span>: {car: <span style="color:var(--string)">'${dg}'</span>, mons: Array(${res[5][h].mons.length})}</span></div> <div class="tocent"> <p class="pdev">car: <span style="color:var(--string)">'${dg}'</span></p><div class="cont"> <div class="center" style="overflow-x: hidden;"><img src="./imagens/rar.png" alt="" class="ar"><div style="overflow-x:scroll;display:flex;height:fit-content;"><span style="font-size:0.9em">mons: [</span><span class="sp" style="min-width:24px;display:inline-flex;overflow-x:scroll;">${spn}</span> <span style="font-size:0.9em">]</span>&nbsp;<span style="font-size:0.9em"></div></div> ${splitspn}</div></div></div>` // dg pode ser carfixed
    }
}else if(cas == 1) {
    cn2 = ts[1]
    for (h in res[7]) {
        spn = ''
        splitspn = ''
        spn2 = ''
        splitspn2 = ''
        for(k in res[7][h].aparicoes) {
            if (k != res[7][h].aparicoes.length - 1) {
                spn+= `<span><span style="color:var(--number)">${res[7][h].aparicoes[k]}</span>,</span>`
                spn2+= `<span><span style="color:var(--number)">${res[7][h].mons[k]}</span>,</span>`
            }else{
                spn+= `<span><span style="color:var(--number)">${res[7][h].aparicoes[k]}</span></span>`
                spn2+= `<span><span style="color:var(--number)">${res[7][h].mons[k]}</span></span>`
            }
            splitspn+= ` <p class="psem"><span style="display:inline-block;"><span style="color:var(--number)">${k}</span>: <span style="color:var(--number)">${res[7][h].aparicoes[k]}</span></p>`
            splitspn2+= ` <p class="psem"><span style="display:inline-block;"><span style="color:var(--number)">${k}</span>: <span style="color:var(--number)">${res[7][h].mons[k]}</span></p>`
        }
    cn2.getElementsByClassName('dev')[0].innerHTML+= `<div class="cont"><div class="center"><img src="./imagens/rar.png" alt="" class="ar"> <span class="sp"><span style="color:var(--number)">${h}</span>: {fator: <span style="color:var(--string)">'${desfat(REFORMATAR(res[7][h].dividido))}'</span>, aparições: Array(${res[7][h].aparicoes.length})}</span></div><div class="tocent">  <p class="pdev">fator: <span style="color:var(--string)">'${res[7][h].dividido.replace(new RegExp('\\*','g'),'.')}'</span></p><div class="cont"> <div class="center"><img src="./imagens/rar.png" alt="" class="ar"><span style="font-size:0.9em">aparics: [</span><span class="sp" style="overflow-x:scroll;">${spn}</span><span style="font-size:0.9em">]</span></div> ${splitspn} </div> <div class="cont"> <div class="center"><img src="./imagens/rar.png" alt="" class="ar"><span style="font-size:0.9em">mons: [</span><span class="sp" style="overflow-x:scroll;">${spn2}</span><span style="font-size:0.9em">]</span></div> ${splitspn2}</div></div></div>`
    }
}else if(cas == 2) {
    cn3 = ts[2]
    for (h in res[8]) {
        spn = ''
        splitspn = ''
        for(k in res[8][h].repetidos) {
            if (k != res[8][h].repetidos.length - 1) {
                spn+= `<span><span style="color:var(--number)">${res[8][h].repetidos[k]}</span>,</span>`
            }else{
                spn+= `<span><span style="color:var(--number)">${res[8][h].repetidos[k]}</span></span>`
            }
            splitspn+= ` <p class="psem"><span style="display:inline-block;"><span style="color:var(--number)">${k}</span>: <span style="color:var(--number)">${res[8][h].repetidos[k]}</span></p>`
        }

        spn2 = ''
        splitspn2 = ''
        for(k in res[8][h].posições) {
            if (k != res[8][h].posições.length - 1) {
                spn2+= `<span><span style="color:var(--string)">'${desfat(REFORMATAR(res[7][res[8][h].posições[k]].dividido))}'</span>,</span>`
            }else{
                spn2+= `<span><span style="color:var(--string)">'${desfat(REFORMATAR(res[7][res[8][h].posições[k]].dividido))}'</span></span>`
            }
            splitspn2+= ` <p class="psem"><span style="display:inline-block;"><span style="color:var(--number)">${k}</span>: <span style="color:var(--string)">'${desfat(REFORMATAR(res[7][res[8][h].posições[k]].dividido))}'</span></p>`
        }
    cn3.getElementsByClassName('dev')[0].innerHTML+= `<div class="cont"><div class="center"><img src="./imagens/rar.png" alt="" class="ar"><span class="sp"><span style="color:var(--number)">${h}</span>: {posições: Array(${res[8][h].repetidos.length}), fatores: Array(${res[8][h].posições.length}), monomios: Array(${res[8][h].monomios.length})</span></div><div class="tocent"> <div class="cont"> <div class="center"><img src="./imagens/rar.png" alt="" class="ar"><span style="font-size:0.9em">posições: [</span><span class="sp" style="overflow-x:scroll;">${spn}</span><span style="font-size:0.9em">]</span></div> ${splitspn} </div><div class="cont"> <div class="center"> <img src="./imagens/rar.png" alt="" class="ar"><span style="font-size:0.9em">fatores: [</span><span class="sp" style="overflow-x:scroll;">${spn2}</span><span style="font-size:0.9em">]</span></div> ${splitspn2}  </div> </div></div>`
    }
}else{
    cn4 = ts[3]
    for (h in res[9]) {
        splitspn = ''
        spn = ''
        outr = []
        for(k in res[9][h].w.what) {
               //spn+= '['
               spi = ''
                for (lik in res[9][h].w.what[k].ar) {
                    ////console.log(lik,'adwadaadasdasads')
                    if (lik != res[9][h].w.what[k].ar.length - 1) {
                    spi+= `<span><span style="color:var(--string)">'${desfat(res[10][res[9][h].w.what[k].ar[lik]].numero)}'</span>,</span>`
                    }else{ 
                        spi+= `<span><span style="color:var(--string)">'${desfat(res[10][res[9][h].w.what[k].ar[lik]].numero)}'</span></span>`
                    } }
         splitspn+= `<span style="display: flex;font-size:0.9em;margin-bottom: 7px;margin-left:10px;"><span style="color:var(--number)">${k}</span>:&nbsp;<span>[</span> <span style="overflow-x: scroll;">${spi}</span>]</span>`
          spn+= `[<span class="sp" style="min-width:30px;">${spi}</span>]`
        }
    cn4.getElementsByClassName('dev')[0].innerHTML+= ` <div class="cont"><div class="center"><img src="./imagens/rar.png" alt="" class="ar"> <span class="sp"><span style="color:var(--number)">${h}</span>: {mons: Array(${res[9][h].mons.length}), grupos: Array(${res[9][h].w.what.length})
    </span> </div><div class="tocent" style="margin-bottom:0px;"> <div class="cont">  <div class="center"><img src="./imagens/rar.png" alt="" class="ar"><span style="font-size:0.9em">agrup:&nbsp;</span><span style="display: flex;overflow-x: scroll;">${spn}<span></div> ${splitspn}</div></div></div>`
    }}

for(pare in sur) {
    is = sur[pare]
    ////console.log(is)
    if (act == 'close') {
        c = new CreateFunc(is,'close')
    }else{
        c = new CreateFunc(is,'open')
    }
    if (act == 'close') {
    c.SetDefault()
    }
    c.AddEvent()
}}


 function changeexp (pexpind) {
    pexps = document.getElementsByClassName('pexp')
 //console.log('HEY',pexps[pexpind].innerText)
 get1('write').value = pexps[pexpind].innerText
}

function CreateFunc(ind,action,number){
    this.ind = ind
    ////console.log('THISSSSSSSSS',ind)
    this.par1 = document.getElementsByClassName('ar')[this.ind]
    this.par2 = get2('cont')[this.ind]
    this.par3 = get2('center')[this.ind]

    this.l = late
    ////console.log('ACTION', action)
    if (action != "open") {
    this.clicked = false
    this.par1.style.transform = 'rotate(0deg)'
    }else{
        ////console.log('TRUEEEEEEEEEE')
    this.clicked = true
    this.par1.style.transform = 'rotate(90deg)'
    }

    late++
    this.a = `j${late}`
    this.number = number
    h1 = 0
    h2 = 100
    heightInPx = String(this.par3.offsetHeight) + 'px'
   
    this.SetDefault= function () {
        //par2.style.height = par3.offsetHeight
        heightInPx = String(this.par3.offsetHeight) + 'px'
       if (this.par3.innerText != 'Relações' && this.par3.innerText != 'Repetições' && this.par3.innerText != 'Combinações' && this.par3.innerText != 'Agrupamentos' ) {
        this.par2.style.height = heightInPx
        this.clicked = false
       }else{
            this.par2.style.height = '28px'
            this.clicked = false
       } }
    this.par1.setAttribute
    this.AddEvent = function() {
        ////console.log(this.a)
       this.par1.setAttribute('onclick',`cli(${this.clicked},${this.ind},'${this.a}',${this.number},${this.par3.offsetHeight})`)
    }}

function cli(state,index,jin,n,jor) {
    ////console.log('')
    ////console.log('-----------')
    me = document.getElementsByClassName('ar')
    this.jin = jin
    this.par1 = me[index]
    this.par2 = conts[index]
    this.par3 = cents[index]
    this.n = n

    beg = this.par2.offsetHeight

    ////console.log('JORRRRRRRRRRRRR',jor)
    this.par3.style.height = jor + 'px'
    ////console.log('PART333333333:',this.par3.style.height)

    this.par2.style.height = 'fit-content'
    sul = this.par2.offsetHeight
    ////console.log('SULLLLLLLLLLL', this.par2.offsetHeight)

    search = mecams.find(function(mecams){
        return mecams.created == this.jin
       })

       ////console.log(search)
    if (search != undefined) {
       ////console.log('JÁ TEM ' + this.jin)
        search.comp++
        ////console.log(search,'COMP:',search.comp)
        /*
        styles = document.head.getElementsByTagName('style')
        document.head.removeChild(styles[search.loc])
        */

       }else{
        ////console.log('NÃO TEM ' + this.jin)
        if (this.par3.innerText == 'Resolução') {
            ////console.log('WAIT')
           }
           if (state == true) {
            mecams.push({created:this.jin,comp:1,st:jor,end:sul,cl:state})
           }else{
            mecams.push({created:this.jin,comp:1,st:beg,end:sul,cl:state})
           } }
       search = mecams.find(function(mecams){
        return mecams.created == this.jin
       })

       ////console.log(search)
       if (search.cl == false) {
        if (search.cl == false) {
            ////console.log('ABRIR')
        }else{
            ////console.log('FECHAR')
        }

        txt = String(this.par3.innerText)
           busca = txt.search(new RegExp('((Agrupamentos)|(Relações)|(Combinações)|(Repetições))','g'))
           ////console.log('busca',txt,busca)

        if (this.par3.innerText == 'Resolução') {
            ////console.log('WAIT')
            ih = search.st - 10
            eh = sul - 10
           }else{
            ih = search.st
            eh = sul
           }

           ////console.log('initial:',ih,'px')
           ////console.log('final:',eh,'px')

    css = `@keyframes ${jin}${search.comp} {
         0% {
            height: ${ih}px;
        }
        100% {
            height: ${eh}px;
        }}`
        this.par2.style.animation = `${jin}${search.comp} 0.2s`
        this.par2.style.height = 'fit-content'

       style = document.createElement('style')
       document.head.appendChild(style)
       style.appendChild(document.createTextNode(css))
       this.par1.style.transform = 'rotate(90deg)'
       search.cl = true
}else{
    ////console.log('gooooo')
    if (this.par3.innerText == 'Resolução') {
        ////console.log('WAIT')
        ih = search.st - 10
        eh = sul - 10
       }else{
        ih = search.st
        eh = sul
       }

    css = `@keyframes ${jin}${search.comp} {
        0% {
           height: ${eh}px;
       }
       100% {
           height: ${ih}px;
       }}`
    this.par2.style.animation = `${jin}${search.comp} 0.2s`
    this.par2.style.height = `${ih}px`
   style = document.createElement('style')
   document.head.appendChild(style)
   style.appendChild(document.createTextNode(css))
   this.par1.style.transform = 'rotate(0deg)'
   search.cl = false
}}


abriu = false;
vez = 0;
function showegs() {
if (abriu == false) {
  document.getElementById("tab").style.height = "fit-content";
  document.getElementById("exemplos").value = "Fechar";
} else {
  document.getElementById("tab").style.height = "0px";
  document.getElementById("exemplos").value = "Exemplos";
}
if (abriu == false) {
  abriu = true;
} else {
  abriu = false;
}

if (vez == 0) {
  pegs = document.getElementsByClassName("eg");
  for (iveco in pegs) {
    if (iveco.search("[0-9]") != -1) {
      pegs[iveco].setAttribute("onclick", `mudar(${iveco})`);
    }}}
vez++;
}
function mudar(index) {
document.getElementById("typearea").value =
  document.getElementsByClassName("eg")[index].innerText;
}

function VAI(str) {
comofica = []
ground = ''
for (bye in str) {
    carac = str[bye]
        if (ground.length == 0) {
            ground+= carac
        }else if(String(ground.search('[0-9]')) != -1 && String(carac).search('[0-9]') != -1) {
            ground+= carac
        }else{
            comofica.push(ground)
            ground = ''
            ground += carac
        }
        if (bye == str.length - 1) {
            comofica.push(ground)
        }
str[bye].numero = comofica
}
return comofica
}

function FATORE(q) {
arj = []
qualexp1 = q;
qualexp = "";
parar = false;
for (copy in qualexp1) {
  if (qualexp1[copy] != " ") {
    if (
      qualexp1[copy].search("[0-9]") != -1 ||
      qualexp1[copy].search("[a-z]") != -1 ||
      qualexp1[copy].search("[\\+\\-\\^]") != -1
    ) {
      qualexp += qualexp1[copy];
    } else {
      parar = true;
    }}}
if (qualexp != "" && parar == false) {
  ground = "";
  expression = [];
  for (phy in qualexp) {
    if (qualexp[phy].search("[0-9]") != -1) {
      if (ground.search("[0-9]") != -1) {
        ground += qualexp[phy];
      } else if (ground.length > 0) {
        expression.push(ground);
        ground = qualexp[phy];
      } else {
        ground = qualexp[phy];
      }
    } else {
      if (ground.length > 0) {
        expression.push(ground);
      }
      ground = qualexp[phy];
    }
    if (phy == qualexp.length - 1) {
      expression.push(ground);
    }}
  return expression
}}

 // FAZER COnTA COM nÚMEROS
 function fazerConta(anterior) {
  if(0 == 0) {
for (n = 0; n < anterior.length; n++) {
if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
  anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
  anterior.splice(n - 1, 2)
  n = n - 3 
  if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
      anterior.splice(n + 3, 1)
      anterior.splice(n + 1, 1)
      n = n - 3
  }
}else if(anterior[n] == '√' && anterior[n + 1] != '(' ) {
  anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
  anterior.splice(n, 1)
  n = n - 2
  if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
      anterior.splice(n + 3, 1)
      anterior.splice(n + 1, 1)
      n = n - 3
  }}}
for (n = 0; n < anterior.length; n++) {
if(anterior[n] == 'x' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
anterior.splice(n - 1, 2)
n = n - 3
if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
  anterior.splice(n + 3, 1)
  anterior.splice(n + 1, 1)
  n = n - 3
}
}else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
anterior.splice(n - 1, 2)
n = n - 3
if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
  anterior.splice(n + 3, 1)
  anterior.splice(n + 1, 1)
  n = n - 3
}}}
if (anterior.length > 1) {
  for (n = 0; n < anterior.length && anterior.length != 1; n++) {
      if (anterior[n] == '+' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[x\\/\\*]') == -1 && String(anterior[n - 2]).search('[x\\/\\*\\-]') == -1) {
          anterior[n + 1] = String(Number(anterior[n - 1]) + Number(anterior[n + 1]))
          anterior.splice(n - 1, 2)
          n = n - 3
          if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
              anterior.splice(n + 3, 1)
              anterior.splice(n + 1, 1)
              n = n - 3
          }
      }else if(anterior[n] == '-' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[x\\/\\*]') == -1 && String(anterior[n - 2]).search('[x\\/\\*\\-]') == -1) {
          anterior[n + 1] = String(Number(anterior[n - 1]) - Number(anterior[n + 1]))
          anterior.splice(n - 1, 2)
          n = n - 3
          if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
              anterior.splice(n + 3, 1)
              anterior.splice(n + 1, 1)
              n = n - 3
          }
      }else if(anterior[n] == 'x' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
          anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
          anterior.splice(n - 1, 2)
          n = n - 3
          if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
              anterior.splice(n + 3, 1)
              anterior.splice(n + 1, 1)
              n = n - 3
          }
      }else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
          anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
          anterior.splice(n - 1, 2)
          n = n - 3
          if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
              anterior.splice(n + 3, 1)
              anterior.splice(n + 1, 1)
              n = n - 3
          }
      }else if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
          anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
          anterior.splice(n - 1, 2)
          n = n - 3
          if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
              anterior.splice(n + 3, 1)
              anterior.splice(n + 1, 1)
              n = n - 3
          }
      }else if(anterior[n] == '√' && anterior[n + 1] != '(') {
          anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
          anterior.splice(n, 1)
          n = n - 2
          if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
              anterior.splice(n + 3, 1)
              anterior.splice(n + 1, 1)
              n = n - 3
          } }}}}
return anterior
}

function SPLITEXPS(expression) {
  splitedExps = []
  str = ''
  c1 = -1
  c2 = -1
  for (c in expression) {
    if (expression[c] == '(') {
      c1 = c
      str = ''
    }else if(expression[c] == ')') {
      c2 = c
      splitedExps.push({exp: str,open:c1,close:c2})
      str = ''
    }else{
      str+= expression[c]
    }}
  return splitedExps
  }
  function desfat(algo) {
  quase = [...algo]
  gates = []
  aconta = ''
  friend = ''
  elevar = 1
  aster = false
  for (patience in quase) {
      if (quase[patience].search('(\\*|\\.)') != -1 && quase[Number(patience) - 1].search('[0-9]') != -1 && quase[Number(patience) + 1].search('[0-9]') != -1 ) {
          aster = true
          gates.push(quase[Number(patience) - 1])
          gates.push('x')
          gates.push(quase[Number(patience) + 1])
          quase[Number(patience) + 1] = fazerConta(gates)[0]
          aconta = fazerConta(gates)[0]
          friend = fazerConta(gates)[0]
          gates = []
      }else if(quase[patience].search('[a-z]') != -1)  {
         friend+= quase[patience]
          if (quase[patience] == quase[Number(patience) - 1]) {
              elevar++
              if (patience == quase.length - 1) {
                  aconta+= `^${elevar}`
              }
          }else{
              if (elevar > 1) {
                  aconta+= `^${elevar}` 
              }
              aconta+= quase[patience]      
              elevar = 1
          }
        }else if(quase[patience].search('[0-9]') != -1 && quase.indexOf('*') == -1 && quase.indexOf('.') == -1) {
            aconta+= quase[patience]
          }else if(quase[patience] == '^'){
            aconta+= quase[patience]
          }}
  if (quase[0] != '-') {
  return aconta
  }else{
    return `-${aconta}`
  }}
  function FATORARSInGULAR(potn) {
    if (ehprimo(potn) == false && String(potn).search('[0-9]') != -1) {
        fatorado = ''
        first = 1
        div = 0
        stop = false
        fator = 1
        for (e = 2; stop == false; e++) {
            sob = Number(potn)
               if (ehprimo(e) == true) {
                while (sob%e == 0) {
                sob = sob/e
                fator = fator*e
                st = false
                if (fator == potn) {
                stop = true
                fatorado += `${e}`
                }else{
                    fatorado += `${e}*`
                }}} }
        return fatorado
    }}
    function ehprimo(Number) {
        parar = false
        for (t = 2; t < Number && parar == false; t++) {
            if (Number%t == 0) {
                parar = true
            }}
        if (parar) 
        return false
        else
        return true
    }
     // Achando todos os divisores da quantidade de monômios
 // Ex: 12: 4, 3, 2, 6
 function ehprimo2(Number) {
    divisores = []
    for (t = 2; t < Number && parar == false; t++) {
        if (Number%t == 0) {
           divisores.push(t)
        }}
   return divisores
}

function REFORMATAR(q) {
qualexp1 = q;
qualexp = "";
parar = false;
for (copy in qualexp1) {
  if (qualexp1[copy] != " ") {
    if (
      qualexp1[copy].search("([0-9]|\\.)") != -1 ||
      qualexp1[copy].search("[a-z]") != -1 ||
      qualexp1[copy].search("[\\+\\-\\^\\*]") != -1
    ) {
      qualexp += qualexp1[copy];
    } else {
      parar = true;
    }}}
if (qualexp != "" && parar == false) {
  ground = "";
  expression = [];
  for (phy in qualexp) {
    if (qualexp[phy].search("([0-9]|\\.)") != -1) {
      if (ground.search("([0-9]|\\.)") != -1) {
        ground += qualexp[phy];
      } else if (ground.length > 0) {
        expression.push(ground);
        ground = qualexp[phy];
      } else {
        ground = qualexp[phy];
      }
    } else {
      if (ground.length > 0) {
        expression.push(ground);
      }
      ground = qualexp[phy];
    }
    if (phy == qualexp.length - 1) {
      expression.push(ground);
    }}
  return expression
}}

function DIVIDIR(T, qual) {
    Tfix = []
for (h in T) {
    Tfix.push(T[h])
}
egs = []
for (norte in qual) {
if (qual[norte] == '*' || qual[norte] == '.') {
}else{
egs.push(qual[norte])
}}
takeout = []
for (n in egs) {
if (T.indexOf(egs[n]) != -1) {
T.splice(T.lastIndexOf(egs[n]), 1)
takeout.push(Number(n))
}}
for (giro = egs.length - 1; giro >= 0; giro--) {
    if (takeout.indexOf(Number(giro)) == -1) {
    }else{
        egs.splice(giro,1)
    }}
depois = ''
for (n in egs) {
        depois += String(egs[n])
     if (String(egs[Number(n) + 1]).search('[0-9]') != -1 && egs[n].search('[//-//+]') == -1) {
        depois+= '*'
     }}
return depois
}
function versetem(comp,pam) {
podeir = true;
qual = -1;
for (meow in pam) {
  array1 = [];
  for (d in pam[meow].car) {
    array1.push(pam[meow].car[d]);
  }
  array2 = [];
  for (d in comp) {
    array2.push(comp[d]);
  }
  if (pam[meow].car.length < comp.length) {
    divisao = DIVIDIR(VAI(pam[meow].car), VAI(comp));
  } else {
    divisao = DIVIDIR(VAI(comp), VAI(pam[meow].car));
  }
  if (divisao == "" || divisao == "-") {
    podeir = false;
    qual = meow;
  }}
return podeir;
}

function doTheFactoring(exal) {
////console.log(exal)
function CreateEngine2() {
    ////console.log('')
    ////console.log('')
    ////console.log('creating engine........')
  this.FATORAR = 
  function (expression_2,somarmons) {
    //console.log('HEY!')
    if (expression_2[0] !== "-" && expression_2[0] !== "+") {
      expo_2 = ["+"];
      for (ent in expression_2) {
        expo_2.push(expression_2[ent]);
      }
      expression_2 = expo_2;
    }
  
    //FATORAnDO OS nÚMEROS
  
    for (n = 0; n < expression_2.length; n++) {
      if (
        ehprimo(expression_2[n]) == false &&
        String(expression_2[n]).search("[0-9]") != -1 &&
        expression_2[n - 1] != "^"
      ) {
        fatorado = "";
        first = 1;
        div = 0;
        stop = false;
        fator = 1;
  
        for (e = 2; stop == false; e++) {
          sob = Number(expression_2[n]);
          if (ehprimo(e) == true) {
            while (sob % e == 0) {
              sob = sob / e;
              fator = fator * e;
              st = false;
              if (fator == expression_2[n]) {
                stop = true;
                fatorado += `${e}`;
              } else {
                fatorado += `${e}*`;
              } } }}
        expression_2[n] = fatorado;
      }}
  
    //FAZEnDO AS POTÊnCIAS COM LETRAS
  
    for (y in expression_2) {
      if (expression_2[y] == "^") {
        ad = expression_2[Number(y) - 1];
        for (h = 0; h < Number(expression_2[Number(y) + 1]) - 1; h++) {
          expression_2[Number(y) - 1] += ad;
        }
        expression_2.splice(Number(y) + 1, 1);
        expression_2.splice(y, 1);
      } }
  
    //SEPARAnDO OS MOnÔMIOS
  
    monomios_2 = [{ numero: "" }];
    obnum = 0;
    for (n = 0; n < expression_2.length; n++) {
      if (String(expression_2[n]).search("[\\-\\+]") != -1 && n != 0) {
        monomios_2.push({ numero: "" });
        obnum++;
      }
      monomios_2[obnum].numero += expression_2[n];
      change = [...monomios_2[obnum].numero]
      ////console.log(change)
    }
  
    //TRANSFORMA  O MONOMIOS_2.NUMERO(STRING) EM UM ARRAY
  
    for (bye in monomios_2) {
      comofica = [];
      ground = "";
  
      for (misery in monomios_2[bye].numero) {
        carac = monomios_2[bye].numero[misery];
        if (ground.length == 0) {
          ground += carac;
        } else if (
          String(ground.search("[0-9]")) != -1 &&
          String(carac).search("[0-9]") != -1
        ) {
          ground += carac;
        } else {
          comofica.push(ground);
          ground = "";
          ground += carac;
        }
        if (misery == monomios_2[bye].numero.length - 1) {
          comofica.push(ground);
        } }
      monomios_2[bye].numero = comofica;
     ////console.log('como fica',comofica)
    }
  
    for (huh in monomios_2) {
      partlet = "";
      for (y in monomios_2[huh].numero) {
        if (String(monomios_2[huh].numero[y]).search("[a-z]") != -1) {
          partlet += String(monomios_2[huh].numero[y]);
        }}
      monomios_2[huh].partletral = partlet;
    }
  
    ji = [];
    //JUNTANDO OS MONÔMIOS QUE DÁ PARA SOMAR
    for (huh in monomios_2) {
      if (
        ji.find(function (ji) {
          return ji.que == monomios_2[huh].partletral;
        }) == undefined
      ) {
        ji.push({ quais: [Number(huh)], que: monomios_2[huh].partletral });
      } else {
        ji.find(function (ji) {
          return ji.que == monomios_2[huh].partletral;
        }).quais.push(Number(huh));
      }}
  
      for (h in monomios_2) {
        mo = monomios_2[h]
        listo = []
        for (ge in mo.partletral) {
            listo.push(mo.partletral[ge])
        }
        sl = sortWords(listo)
        stri = ''
        for (nai in sl) {
           stri+= sl[nai] 
        }
        mo.partletral = stri
      }
    //SEPARAnDO/JUnTAnDO OS nÚMEROS
  // ==> SOMANDO OS MONÔMIOS...
  if (somarmons == true) {
    exp = [];
    
    for (bye in ji) {
      for (misery in ji[bye].quais) {
        ground = "";
    
        comofica = [];
        for (b in monomios_2[ji[bye].quais[misery]].numero) {
          carac = monomios_2[ji[bye].quais[misery]].numero[b];
          if (ground.length == 0) {
            ground += carac;
          } else if (
            String(ground.search("[0-9]")) != -1 &&
            String(carac).search("[0-9]") != -1
          ) {
            ground += carac;
          } else {
            comofica.push(ground);
            ground = "";
            ground += carac;
            if (b == monomios_2[ji[bye].quais[misery]].numero.length - 1) {
              comofica.push(ground);
            }} }
    
        monomios_2[ji[bye].quais[misery]].numero = comofica;
      }}
    
    for (chuva in ji) {
      conta = [];
      for (da in ji[chuva].quais) {
        divisor = [];
        for (flowers in ji[chuva].que) {
          divisor.push(ji[chuva].que[flowers]);
        }
    
        tu = [...divisor];
        resultadoDaDivisão = DIVIDIR(
          divisor,
          monomios_2[ji[chuva].quais[da]].numero
        );
    
        plan = [];
        add = "";
    
        for (past in resultadoDaDivisão) {
          if (
            resultadoDaDivisão[past].search("\\*") != -1 ||
            resultadoDaDivisão[past].search("[0-9]") != -1
          ) {
            if (add.length == 0) {
              if (resultadoDaDivisão[past - 1] != "-") {
                add += resultadoDaDivisão[past];
              }
            } else if (
              resultadoDaDivisão[past].search("[0-9]") != -1 &&
              add.search("[0-9]") != -1
            ) {
              add += resultadoDaDivisão[past];
            } else {
              plan.push(add);
              add = "";
              add += resultadoDaDivisão[past];
            }
           
            if (plan.length == 3) {
              plan = [String(Number(plan[0]) * Number(plan[2]))];
            } } }
    
        if (add == "" && ji[chuva].quais.length > 1) {
          add = "1";
        }
        plan.push(add);
    
        if (plan.length == 3) {
          plan = [String(Number(plan[0]) * Number(plan[2]))];
        }
    
        if (
          monomios_2[ji[chuva].quais[da]].numero[0] == "+" ||
          monomios_2[ji[chuva].quais[da]].numero[0] == "-"
        ) {
          sinal = monomios_2[ji[chuva].quais[da]].numero[0];
          if (conta.length != 0) {
            conta.push(monomios_2[ji[chuva].quais[da]].numero[0]);
          } }
    
        if (conta.length == 0 && monomios_2[ji[chuva].quais[da]].numero[0] == "-") {
          entao = "-";
          entao += plan[0];
          conta.push(entao);
        } else {
          conta.push(plan[0]);
        }}
    
      comehome = fazerConta(conta);
    
      if (comehome[0][0] == "-") {
        t = "";
        for (b in comehome[0]) {
          if (comehome[0][b] != "-") {
            t += comehome[0][b];
          }}
    
        at = t;
        if (ehprimo(t) == false) {
          fat = FATORARSInGULAR(at);
        } else {
          fat = at;
        }
        oop = "-";
        oop += String(fat);
        exp.push("-");
        fat += ji[chuva].que;
        exp.push(fat);
      } else {
        if (ehprimo(comehome) == false) {
          fat = FATORARSInGULAR(comehome);
        } else {
          fat = comehome;
        }
        if (exp.length == 0) {
          fat += ji[chuva].que;
          exp.push(fat);
        } else {
          exp.push("+");
          fat += ji[chuva].que;
          exp.push(fat);
        }}}
    
    expression = exp;
    
    //SEPARAnDO OS MOnÔMIOS DEnOVO
    
    monomios_2 = [{ numero: "" }];
    obnum = 0;
    for (n = 0; n < exp.length; n++) {
      if (String(exp[n]).search("[\\-\\+]") != -1 && n != 0) {
        monomios_2.push({ numero: "" });
        obnum++;
      }
      monomios_2[obnum].numero += exp[n];
    }
    
    //
    
    //SEPARAR CORRETAMEnTE OS nÚMEROS
    
    for (bye in monomios_2) {
      comofica = [];
      ground = "";
      for (misery in monomios_2[bye].numero) {
        carac = monomios_2[bye].numero[misery];
        if (ground.length == 0) {
          ground += carac;
        } else if (
          String(ground.search("[0-9]")) != -1 &&
          String(carac).search("[0-9]") != -1
        ) {
          ground += carac;
        } else {
          comofica.push(ground);
          ground = "";
          ground += carac;
        }
        if (misery == monomios_2[bye].numero.length - 1) {
          comofica.push(ground);
        }}
      monomios_2[bye].numero = comofica;
    }}
// NEWW!
    for (huh in monomios_2) {
        partlet = "";
        for (y in monomios_2[huh].numero) {
          if (String(monomios_2[huh].numero[y]).search("[a-z]") != -1) {
            partlet += String(monomios_2[huh].numero[y]);
          }}
        monomios_2[huh].partletral = partlet;
      }
      for (h in monomios_2) {
        mo = monomios_2[h]
        listo = []
        for (ge in mo.partletral) {
            listo.push(mo.partletral[ge])
        }
        sl = sortWords(listo)
        stri = ''
        for (nai in sl) {
           stri+= sl[nai] 
        }
        mo.partletral = stri
      }
      if (somarmons == false) {
    ////console.log('ASSIM É COMO FICARAM OS MONÔMIOS:')
      } 

    for (aj in monomios_2) {
        if (somarmons == false) {
            //console.log('---------------')
        ////console.log('monômio:',monomios_2[aj].numero, 'parte literal:',monomios_2[aj].partletral)
        }
        hop = 0
        whole = monomios_2[aj].numero
        justlet = []
        while (String(whole[hop]).search('[a-z]') == -1) {
            if (somarmons == false) {
            ////console.log(hop)
            ////console.log(whole[hop])
            }
            justlet.push(whole[hop])
            hop++
        }
        if (somarmons == false) {
        ////console.log('parte numérica: ',justlet)
        }
        varibs = monomios_2[aj].partletral
        for (ken in varibs) {
            if (somarmons == false) {
           ////console.log(varibs[ken])
            }
            justlet.push(varibs[ken])
        }
        if (somarmons == false) {
        ////console.log('monômio com parte literal ordenada:',justlet)
        }
        monomios_2[aj].numero = justlet
    }
    //
    
  // AQUI ACABA O CÓDIGO PARA SOMAR OS MONÔMIOS
     reps = []
     segs_2 = []
     let  = []
     

     mv = []
     for (smile in monomios_2) {
        mv.push(Number(smile))
     }
     if (somarmons == false) {
     ////console.log('MV',mv)
     }
     segs_2.push({car: '1', mons: mv})
     for (m = 0; m < monomios_2.length; m++) { // CADA MOnÔMIO
         repetido = []
         col = false
         repetido = []
        numerosrep = []
         for (oc = 0; oc < monomios_2[m].numero.length; oc++) { // CADA LETRA DE CADA MOnÔMIO
             if (monomios_2[m].numero[oc].search('[\\*\\+\\/]') == -1) {
             if (numerosrep.indexOf(monomios_2[m].numero[oc]) == -1) {
             numerosrep.push(monomios_2[m].numero[oc])
             for (u = 0; u < monomios_2.length; u++) { // OUTROS MOnÔMIOS
                 ocs2 = []
                 if(u != m) {
               // OCAS
               if(ocs2.find(function(ocs2) {
                 return ocs2.ed == monomios_2[m].numero[oc]
                 }) == undefined) {
                     ocs2.push({ed: monomios_2[m].numero[oc], el: 0})
                     ocs = 0
               for (ao = 0; ao < monomios_2[m].numero.length; ao++) {
                 if (monomios_2[m].numero[ao] == monomios_2[m].numero[oc]) {
                     ocs++
                 }}}
               for (e = 0; e < monomios_2[u].numero.length; e++) { // CADA LETRA DE CADA MOnÔMIO
                 if (monomios_2[u].numero[e] == monomios_2[m].numero[oc]) {
                     if (repetido.find(function(repetido) {
                         return repetido.monum == u
                         }) === undefined) {
                             ocs2.find(function(ocs2) {
                                 return ocs2.ed == monomios_2[m].numero[oc]
                                 }).el++
                                 if (ocs2.find(function(ocs2) {
                                     return ocs2.ed == monomios_2[m].numero[oc]
                                     }).el <= ocs) {
                     repetido.push({monum: u, wc: [m], letr: monomios_2[u].numero[e]})
                        } }else{
                                     ocs2.find(function(ocs2) {
                                         return ocs2.ed == monomios_2[m].numero[oc]
                                         }).el++
                                             if (ocs2.find(function(ocs2) {
                                                 return ocs2.ed == monomios_2[m].numero[oc]
                                                 }).el <= ocs) {
                                     repetido.find(function(repetido) {
                                         return repetido.monum == u
                                         }).letr += `.${monomios_2[u].numero[e]}`
                                     }}}}}}}}}
         reps.push(repetido)
     
         for (nope in repetido) {
         if (repetido[nope].letr[0] == '-') {
             la = ''
             for (u in repetido[nope].letr) {
                 if (u != 0 && u != 1) {
                     la+= repetido[nope].letr[u]
                 }}
             if (repetido.find(function(repetido){
                 return repetido.letr == la
             })) {
                 repetido.splice(nope, 1)
             }}}
     
             for (moe = repetido.length - 1; moe >= 0; moe--) {
                podeir = true
                qual = -1
                for (meow in segs_2) {
                      array1 = []
                      for (d in segs_2[meow].car) {
                          array1.push(segs_2[meow].car[d])
                      }
                      array2 = []
                      for (d in repetido[moe].letr) {
                          array2.push(repetido[moe].letr[d])
                      }
                      if (segs_2[meow].car.length < repetido[moe].letr.length) {
                          divisao =  DIVIDIR(VAI(segs_2[meow].car), VAI(repetido[moe].letr))
                       }else{
                           divisao = DIVIDIR(VAI(repetido[moe].letr),VAI(segs_2[meow].car))
                       }
                       if (divisao == '' || divisao == '-') {
                          podeir = false
                          qual = meow
                       }}
  
                 if (podeir == true) {
                  splitUp(repetido[moe].letr);
                      function splitUp(str) {
                      estado = "";
                      for (i in str) {
                          if (str[i] == "." && estado != "-") {
                          permission = versetem(estado,segs_2);
                          if (permission == true && estado != " " && estado != "-") {
                              segs_2.push({ car: estado, mons: [m] });
                          }}
                          estado += str[i];
                          if (i == str.length - 1) {
                          permission = versetem(estado,segs_2);
                          if (permission == true && estado != " " && estado != "-") {
                              segs_2.push({ car: estado, mons: [m] });
                          }}}}
                 }else if(segs_2[qual].mons.indexOf(m) == -1){
                      segs_2[qual].mons.push(m)      
                 }}}
                 
                 /*
                 mv = []
                 for (smile in monomios_2) {
                    mv.push(Number(smile))
                 }
                 if (somarmons == false) {
                 //console.log('MV',mv)
                 }
                 */
                 //segs_2.push({car: '1', mons: [...mv]})
     
    for (nl in segs_2) {
        if (somarmons == false) {
        ////console.log('segs_2[nl]',segs_2[nl].car,'=>',segs_2[nl].mons)
        }
        pres = segs_2[nl].car
        pcar = ''
        quantos = []
        for (part in pres) {
            if (pres[part] != '.') {
            pcar+= pres[part]
            }
            if (pres[Number(part) + 1] == '.' || part == pres.length - 1) {
                quantos.push(pcar)
                pcar = ''
            }}
        //console.log(quantos)

        for (out in segs_2) {
            if (nl != out) {
                ////console.log('*',segs_2[out].car)

        pres = segs_2[out].car
        pcar = ''
        quantos2 = []
        for (part in pres) {
            if (pres[part] != '.') {
            pcar+= pres[part]
            }
            if (pres[Number(part) + 1] == '.' || part == pres.length - 1) {
                quantos2.push(pcar)
                pcar = ''
            }}
            ////console.log(quantos2)
            life = [...quantos2]

            contidos = 0
            for (pr in quantos) {
                if (quantos2.indexOf(quantos[pr]) != -1) {
                    if (somarmons == true) {
                ////console.log(quantos[pr], 'está no index', quantos2.indexOf(quantos[pr]))
                    }
                quantos2.splice(quantos2.indexOf(quantos[pr]),1)
                if (somarmons == true) {
                ////console.log(quantos2)
                }
                contidos+= 1
                } }
                if (somarmons == true) {
            ////console.log(quantos,'tem',contidos,'fatores em',life)
                }
            if (contidos == quantos.length) {
                if (somarmons == true) {
                ////console.log('=====================',quantos, 'está em', life,'=====================')
            ////console.log(quantos2, '=>',segs_2[out].mons)
            ////console.log(quantos, '=>',segs_2[nl].mons)
                }
            for (hard in segs_2[out].mons) {
                if (somarmons == true) {
                ////console.log('-', segs_2[out].mons[hard])
            }
                if (segs_2[nl].mons.indexOf(segs_2[out].mons[hard]) == -1) {
                    if (somarmons == true) {
                    ////console.log('OPA!')
                }
                    segs_2[nl].mons.push(segs_2[out].mons[hard])
                } } }}}
                if (somarmons == true) {
        ////console.log('')
                }}
     
     /* Código para ordenar o segs de acordo com a quantidade de monômios e o tamanho do car
     Eg.: 
     0: {car: 2x, mons: [0,1,2]}
     0: {car: 2, mons: [0,1,2]}
     0: {car: 3y, mons: [0,1]}
     0: {car: 3, mons: [0,1]}
     */

     grtols_2 = []
     
     for (hi in segs_2) {
         segs_2[hi].length = segs_2[hi].mons.length
         grtols_2.push(segs_2[hi])
     }
     
     organizado = sortob(grtols_2, 'length')[1]
     
     grtols_2 = []
     for (ah in organizado) {
         grtols_2.push(segs_2[organizado[ah]])
     }
  
     segs_2 = grtols_2
  
     lengs = []
     for (i in segs_2) {
       if (lengs.find(function(lengs){
         return lengs.leng == segs_2[i].mons.length
       }) == undefined){
         lengs.push({leng:segs_2[i].mons.length, num: [i]})
       }else{
        lengs.find(function(lengs){
         return lengs.leng == segs_2[i].mons.length
       }).num.push(i)
       } }
     
    
     segs_2ordered = []
     for (f in lengs) {
       its = []
       for (i in lengs[f].num) {
         its.push(segs_2[lengs[f].num[i]])
       }
     
       grtols_2 = []
        
        for (hi in its) {
            its[hi].length = its[hi].car.length
            grtols_2.push(its[hi])
        }
        
        organizado = sortob(grtols_2, 'length')[1]
        
        grtols_2 = []
        for (ah in organizado) {
            grtols_2.push(its[organizado[ah]])
        }
     
        its = grtols_2
       for (c in its) {
         segs_2ordered.push(its[c])
       }}
     
     segs_2 = [...segs_2ordered]
//

     if (segs_2.length > 0) {
     ////console.log('------------------------INDIREITANDO AS COISA----------------------')
     }
     for (loi in segs_2) { // Cada segs_2
        ame = segs_2[loi].mons // Cada segs_2.mons
        ////console.log(ame)
        ord = sort(ame)[0] // Ordena o segs_2[loi].mons *Eg.: [0,2,1] => [2,1,0]
        ag = []
        for (dir = ord.length - 1; dir >= 0; dir--) { // Cada monômio do array ordenado, de trás para frente
            ////console.log(ord[dir])
            ag.push(ord[dir]) // ag.push(0)/(1)/(2)
        }
        segs_2[loi].mons = ag // Muda o segs_2[loi] para o array em ordem crescente *[0,1,2]
     }
     //DIVS_2
     ml = monomios_2.length
     
     divs_2 = ehprimo2(ml)
     
     if (divs_2.length == 0) {
     divs_2 = [1]
     }
     
        for (tie in segs_2) {
         segs_2[tie].godhelpme = [...segs_2[tie].mons]
        }
       
            okentao = 0
             roll_2 = [] 
             scarecrow_2 = []
             for(anchor in segs_2) { // segs_2[anchor]: {car:'',mons:(Array)}
                 army = []
                 lpisthebest = ''
                     for (fall in segs_2[anchor].car) { // segs_2[anchor].car = 'n...', segs_2[anchor].car[fall] = 'n'
                     if (lpisthebest.length == 0) { // Se lpisthebest estiver vazio
                         lpisthebest = segs_2[anchor].car[fall] // lpisthebest é igual a 'n'
                     }else if(lpisthebest.search('[0-9]') != -1 && segs_2[anchor].car[fall].search('[0-9]') != -1) { // Se lpisthebest não estiver vazio e lpisthebest e 'n' forem Numbers, ou seja, se o caractere anterior for um Number e o 'n' também *Eg.: lpisthebest = '1' e 'n' = '3'
                         lpisthebest += segs_2[anchor].car[fall] // *1 += 3 => 13
                     }else{ // Se lpisthebest não estiver vazio, mas ele ou 'n' não forem Numbers
                         army.push(lpisthebest) // army.push(lpisthebest) *13
                         if(segs_2[anchor].car[fall] != '.') { // Se 'n' não for um ponto
                         lpisthebest = segs_2[anchor].car[fall] // lpisthebest = 'n' *Eg.: x
                         }else{ // Se for um ponto
                             if (segs_2[anchor].car[Number(fall) + 1].search('[0-9]') != -1) { // Se o próximo caractere for um Number
                             lpisthebest = '*' // 13*2
                             }else{ // Se o próximo caractere não for um Number
                                 lpisthebest = '' // 2x
                             } } }
                     if (fall == segs_2[anchor].car.length - 1) { // Se for o último caractere
                         army.push(lpisthebest) // Adicionar o último caractere ao army
                     } }
                 bell = [...army] // *Eg.: bell = [...'13','*','2','x']

                 for (pahh in army) { // army[pahh] '*Eg.: 13'
                     if (army[pahh] == '*') { // Se army[pahh] == '*', mudar para '.'
                         army[pahh] = '.'
                     }}
                 scarecrow_2.push({divididos: [], outrodiv: [], poss: [...segs_2[anchor].mons], divisor: [...army], positions: [...segs_2[anchor].mons]}) // poss: [...segs_2[anchor].mons ([0,1,2])], divisor: [...army ('13','.','2','x')], positions: [...segs_2[anchor].mons ([0,1,2])]
                 for (high in segs_2[anchor].mons) {  // segs_2[anchor].mons = [n,n,...] segs_2[anchor].mons[high] = n
                     army = [...bell]
       
                  lightson = [...army] // *['13','.','2','x']
                     pain = DIVIDIR(army,monomios_2[segs_2[anchor].mons[high]].numero)
                     ////console.log(lightson,monomios_2[segs_2[anchor].mons[high]].numero)
                     // DIVIDIR(['13','.','2','x'], monomios_2[n].numero => *Eg.: ['13','*','2','*','2','x'])
                     // *pain = 2
                     ////console.log('DIVIDIR!!!!!!!!!!!!!!!', monomios_2[segs_2[anchor].mons[high]].numero, '/', lightson)
                     ////console.log('RESULTADO',pain)
  
                     if (pain.length == 0 || pain.search('([0-9]|[a-z)])') == -1) { // Se pain for '' ou '-', ou seja, se a divisão der 1 ou -1
                    if (lightson.indexOf('-') != -1 && monomios_2[segs_2[anchor].mons[high]].numero.indexOf('-') == -1) { // - com + = -
                        pain = '-1'
                        scarecrow_2[anchor].divididos.push('1')
                         scarecrow_2[anchor].outrodiv.push(pain)
                    }else if(lightson.indexOf('-') == -1 && monomios_2[segs_2[anchor].mons[high]].numero.indexOf('-') != -1) { // + com - = -
                         pain = '-1'
                         scarecrow_2[anchor].divididos.push('1')
                         scarecrow_2[anchor].outrodiv.push(pain)
                    }else{ // + com + = +
                     pain = '1'
                     scarecrow_2[anchor].divididos.push(pain)
                         scarecrow_2[anchor].outrodiv.push(pain)
                    }
                     }else{ // Se a divisão não foi 1 ou -1
                         right = '' 
                         for (feet in pain) { // Tira o sinal de + 
                             if (pain[feet] != '+') {
                                 right+= pain[feet]
                             } }
                         uy = ''
     
                        for (xarope in right) {
                         if (xarope == 0 && right[xarope] == '*') { // *2
                         }else if(xarope == right.length - 1 && right[xarope] == '*'){ // 2*
                         }else if(right[xarope] == '*' && String(right[Number(xarope) + 1]).search('[0-9]') == -1){ // 2*x
                         }else if(right[xarope] == '*' && String(right[Number(xarope) - 1]).search('[0-9]') == -1){ // x*2
                         }else{
                             uy+= right[xarope]
                         }}

                         ////console.log(uy)
                         // uy = *Eg.: 2*2
                         ////console.log('OUTRODIV LIXOO!!!!!!!!', redo(desfat(REFORMATAR(uy))))
                        scarecrow_2[anchor].outrodiv.push(redo(desfat(REFORMATAR(uy)))) // redo(desfat(uy)) = uy em ordem crescente *Eg.: 5*2 => 2*5
                       
                        if (uy[0] == '-') { // Se o uy começar com -, ou seja, se o resultado da divisão for negativa
                         holdon = ''
                         for (qual in uy) { // uy[cal] = 'n'
                             if (uy[qual] != '-')  // Se 'n' não for igual a -
                             holdon+= uy[qual]
                         } 
                         uy = holdon // uy assume somente valor positivo
                        }
                        scarecrow_2[anchor].divididos.push(redo(desfat(REFORMATAR(uy)))) // Adiciona ao divididos os valores ignorando os sinais *Eg.: [a,b,c,d]
                     }}}
        
                     for (h in scarecrow_2) {
                        ////console.log(scarecrow_2[h].divididos)
                        ////console.log(scarecrow_2[h].outrodiv)
                     }     
            miss_2 = []
     
            for (ah in scarecrow_2) { // scarecrow_2[ah] = *{divididos: ['2y','yy'], outrodiv: ['2y','yy'], poss: [1,3], divisor: ['2','.','5'], positions: [1,3]}
                for (é in scarecrow_2[ah].divididos) { // *Eg.: '2y' (scarecrow_[ah].divididos[é])
                if (miss_2.find(function(miss_2){return miss_2.dividido == scarecrow_2[ah].divididos[é]}) == undefined) { // Se o miss não tiver *'2y'
                 miss_2.push({dividido: scarecrow_2[ah].divididos[é], aparicoes: [Number(ah)], divisor: scarecrow_2[ah].divisor}) // Adicionar *'2y' ao miss
                }else{
                 miss_2.find(function(miss_2){return miss_2.dividido == scarecrow_2[ah].divididos[é]}).aparicoes.push(Number(ah)) // Adicionar ah a aparições de miss_2.dividido == *'2y'
                }}  }
            
            quantosfatores = Number(monomios_2.length)/Number(divs_2[okentao]) // *Eg.: 10/2 = 5 (5 fatores em cada grupo)
            quantasposições = Number(monomios_2.length)/Number(quantosfatores) // *Eg.: 10/5 = 2 (div_2[okentão] == quantasposições)
   
            // Ordenando o miss_2 pelo número de aparições (aparicoes.length)
            grtols_2 = []
     for (hi in miss_2) {
         miss_2[hi].length = miss_2[hi].aparicoes.length
     
         grtols_2.push(miss_2[hi])
     }
     organizado = sortob(grtols_2, 'length')[1]
     
     grtols_2 = []
     for (ah in organizado) {
         grtols_2.push(miss_2[organizado[ah]])
     }
     miss_2 = [...grtols_2]
     //

     deucerto = false
     java = 0
     
     roller_2 = [];
  
     doMiss_2()
     doRoll_2(somarmons)
    
            okentao++
     
            // *OBS: repetidos = posições no scarecrow_2, posições = posições no miss_2 (equivalente às letras/fatores)
            
           for (ne in roll_2) { // *roll_2[ne] = {posições: ['0','1'], factor: ['b','a'], repetidos: [0,2], way: ",0,1"}
            ////console.log('-------------------------------------------')
            ////console.log(`roll_2[${ne}]`,roll_2[ne].repetidos)
             arranjar = [] 
             for (pq in roll_2[ne].repetidos) { // *roll_2[ne].repetidos = [0,2], roll_2[ne].repetidos[0] = 0 (posição no scarecrow_2)
                //  *Eg.: scarecrow_2[0].divididos = ['a','b']
                 gosto = roll_2[ne].repetidos[pq]
                 ////console.log('')
                 ////console.log(roll_2[ne].repetidos[pq],scarecrow_2[roll_2[ne].repetidos[pq]].divididos,scarecrow_2[roll_2[ne].repetidos[pq]].outrodiv)
                 arranjar.push({pos: pq, ocupa: [], origin: gosto}) // pos é inútil :)
     
             for (moon in roll_2[ne].posições) { // *['0','1'] Eg.: ['b','a']
                qualmon = roll_2[ne].monosplit[moon].mons[pq]
                console.log('monosplit',moon,roll_2[ne].monosplit[moon],qualmon)
                 //vaiir = scarecrow_2[gosto].outrodiv[scarecrow_2[gosto].divididos.indexOf(miss_2[roll_2[ne].posições[moon]].dividido)] 
                vaiir = scarecrow_2[gosto].outrodiv[scarecrow_2[gosto].positions.indexOf(qualmon)]
                 console.log('VAIIIR',vaiir)
                 // *Eg.: scarecrow_2[0].outrodiv[scarecrow_2[0].divididos.indexOf('b')]
                arranjar[pq].ocupa.push(vaiir) // CHECK THIS ONE
                ////console.log(moon,':', miss_2[roll_2[ne].posições[moon]].dividido)
             }}
             console.log('arranjar:')
             console.log(arranjar)
             //console.log('ARRANJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARRRRRRRRRRRRR',arranjar)
         jafoi = []
         
         arj = [...arranjar]
       
         perfectwave = []
         for (tosse in arranjar) { // *arranjar[tosse] = {origin: 0, ocupa: ['-b','-a']} *OBS: origin => posição no scarecrow_2
             if (jafoi.indexOf(tosse) == -1) { // se tosse(index) não estiver em jafoi, ou seja, se o arranjar[tosse] não estiver em um grupo(objeto)
                 organizer = {agrupar: [tosse], referencia: arranjar[tosse].ocupa} // *agrupar: index no arranjar, referencia: ['-b','-a']
             for (calor in arranjar) { // *arranjar[tosse] = {origin: 2, ocupa: ['b','a']}
                 if (calor != tosse) { // se tosse e calor forem diferentes (para não analisar o mesmo arranjar)
                     equals = true // equals recebe true como default value
                     igualar =[]
                     for (boring in arranjar[calor].ocupa) { // *arranjar[calor].ocupa = ['b','a']
                         sendocomparado = arranjar[calor].ocupa[boring] // *arranjar[calor].ocupa[0] = 'b'
                         comparador= arranjar[tosse].ocupa[boring] // arranjar[tosse].ocupa = ['-b','-a'], arranjar[tosse].ocupa[0] = '-b'
                         //console.log('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSsendcomp',sendocomparado[0],'comp',comparador[0])
                         if (sendocomparado[0] != comparador[0]) { // se os sinais forem diferentes
                             igualar.push(true)
                         }else{
                             igualar.push(false) // se os sinais não forem diferentes
                         }}
                     if (igualar.indexOf(false) == -1 || igualar.indexOf(true) == -1) { // Se só tiver true ou só tiver false, ou seja, se for tudo invertido ou tudo igual *Eg.: b = -b, -a = a / b = b, a = a           
                         jafoi.push(calor)
                         organizer.agrupar.push(calor)
                     }}}
             perfectwave.push(organizer) // organizer: grupos que possuem monômios iguais, quando igualados os sinais:
             // *Eg.: {agrupar: [0,1], referencia: ['-b','-a']}
             // 0: ['-b','-a']
             // 1: ['b','a'] x -1 = ['-b','-a']
             ////console.log('organizer', organizer)
         }}
         
          // *perfectwave = [
         //{agrupar: [0,1], referencia: ['-b','-a']}, 
        // {agrupar: [2], referencia: ['-b','a']}
       //]
       
       console.log('perfectwave:')
       for (pe in perfectwave) {
        console.log(pe,perfectwave[pe])
       }
       for (youchoose in perfectwave) { // {agrupar: [0,1], referencia: ['-b','-a']}
        ficarassim =  perfectwave[youchoose].referencia // *['-b','-a'] => referência, ou seja, como todos irão ficar
        for (catraca in perfectwave[youchoose].agrupar) { // *perfectwave[youchoose].agrupar = [0,1]
            presa = perfectwave[youchoose].agrupar[catraca] // *perfectwave[youchoose].agrupar[0] = 0
            diferente = false
            for (moon in roll_2[ne].posições) { // *roll_2[ne].posições = ['0','1'] ('b','a')
                //vaiir = scarecrow_2[arranjar[presa].origin].outrodiv[scarecrow_2[arranjar[presa].origin].divididos.indexOf(miss_2[roll_2[ne].posições[moon]].dividido)]
                qualmon = roll_2[ne].monosplit[moon].mons[catraca]
                console.log('qualmon',qualmon)
                vaiir = scarecrow_2[arranjar[presa].origin].outrodiv[scarecrow_2[arranjar[presa].origin].positions.indexOf(qualmon)]
                console.log('vaiir',vaiir)
                // *Eg.: scarecrow_2[0].outrodiv[scarecrow_2[0].divididos.indexOf('b')]
                if (vaiir != ficarassim[moon]) { // *ficarassim[0] = '-b'
                    diferente = true
                   //scarecrow_2[arranjar[presa].origin].outrodiv[scarecrow_2[arranjar[presa].origin].divididos.indexOf(miss_2[roll_2[ne].posições[moon]].dividido)] = ficarassim[moon] 
                  // vaiir = ficarassim[moon]// *Eg.: vaiir('b') e ficarassim('-b')
                } }
            if (diferente == true) {
                console.log('EPA!')
               ////console.log('AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII*******&77&&&&&&&&%%%%%%%%%%%%%77')
               refer = [] 
               for (ho in perfectwave[youchoose].referencia) {
                   refer.push(perfectwave[youchoose].referencia[ho].replace('-',''))
               }

               ////console.log('REFER',refer)
               ////console.log(scarecrow_2[arranjar[presa].origin].outrodiv)
               sa = scarecrow_2[arranjar[presa].origin].outrodiv
               console.log('refer',refer)
               console.log('sa',sa)
               for (con in sa) {
                
                   //if (refer.indexOf(scarecrow_2[arranjar[presa].origin].divididos[con]) == -1) {
                   ////console.log(sa[con])
                   if (sa[con][0] == '-') {
                       console.log('tirar o sinal de menos')
                       sa[con] = sa[con].replace('-','')
                   }else{
                       console.log('adicionar sinal de menos')
                       sa[con] = '-' + sa[con]
                       console.log(sa,scarecrow_2[arranjar[presa].origin].outrodiv)
                   } /*}*/}

                lista = scarecrow_2[arranjar[presa].origin].divisor // *scarecrow_2[0].divisor
                if (lista[0] != '-') { // Colocar sinal de menos MUDADO! MUDANÇA! CHANGE! WARNING! MUDAR SINAL DO DIVISOR SCARECROW_2
                    modificar = ['-','.']
                    for (saved in lista) {
                        modificar.push(lista[saved])
                    }
                    scarecrow_2[arranjar[presa].origin].divisor = modificar
                }else{ // Tirar o sinal de menos
                    lista.splice(0,2)
                }}}}}

      for (sei in scarecrow_2) {
        for (ai in scarecrow_2[sei].divididos) {
            scarecrow_2[sei].divididos[ai] = scarecrow_2[sei].outrodiv[ai] // Mudar o divididos para o outrodiv (Adicionar sinal aos monômios divididos)
        } }
             
           miss_2 = []
     
           for (ah in scarecrow_2) {
               for (é in scarecrow_2[ah].divididos) {
               if (miss_2.find(function(miss_2){return miss_2.dividido == scarecrow_2[ah].divididos[é]}) == undefined) {
                miss_2.push({dividido: scarecrow_2[ah].divididos[é], aparicoes: [Number(ah)], divisor: scarecrow_2[ah].divisor})
               }else{
                miss_2.find(function(miss_2){return miss_2.dividido == scarecrow_2[ah].divididos[é]}).aparicoes.push(Number(ah))
               }} }
               //miss_2 = [{aparicoes:[0,1],dividido:"1"},{aparicoes:[0,1],dividido:"1"},{aparicoes:[0,1],dividido:"b"}] 
     
    // Ordenar o miss_2 pelo tamanho das aparicoes
           grtols_2 = [];
    for (hi in miss_2) {
      miss_2[hi].length = miss_2[hi].aparicoes.length;
  
      grtols_2.push(miss_2[hi]);
    }
    organizado = sortob(grtols_2, "length")[1];
  
    grtols_2 = [];
    for (ah in organizado) {
      grtols_2.push(miss_2[organizado[ah]]);
    }
    miss_2 = [...grtols_2];
   //
           java = 0
           roll_2 = []
           deucerto = false
           roller_2 = [];
          
           doMiss_2()
           doRoll_2(somarmons) 
     
            youdumb_2 = []
             aswillbe2 = []
             for (raging = 0; raging < roll_2.length; raging++) {
                 asitwas = [] 
                 obe = {what:[]}
                 ////console.log(roll_2[raging])
                 ////console.log('roll repetidos',roll_2[raging].repetidos)

                for (still in roll_2[raging].repetidos) {
                    ////console.log('roll still',roll_2[raging].repetidos[still])
                 asitwas2 = []
                 aswillbe = []
  
                 ////console.log('ROLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL')
                 for (still2 in roll_2[raging].monosplit) {
                    ////console.log(still2, roll_2[raging].monosplit[still2], roll_2[raging].monosplit[still2].mons[still])
                    //older = scarecrow_2[roll_2[raging].repetidos[still]].positions[scarecrow_2[roll_2[raging].repetidos[still]].divididos.indexOf(miss_2[roll_2[raging].posições[still2]].dividido)]
                    older = roll_2[raging].monosplit[still2].mons[still]
                   asitwas.push(older)
                   asitwas2.push(older)
                   aswillbe.push(older) 
                }
             obe.what.push({ar: asitwas2, indice: still})
             aswillbe2.push({oque:aswillbe, onde:raging})
            }

             join = ''
             for (rob in asitwas) {
                join += `,${asitwas[rob]}`
             }
             youdumb_2.push({mons: asitwas, rag: raging, w: obe, polen: raging, rept: join})
            }
            
             dontworry = []
             for (behappy in youdumb_2) {
                 for (armenia in youdumb_2) {
                     if (armenia != behappy) {
                     doeshave = true
                     for (sofar in youdumb_2[armenia].mons) {
                         if (youdumb_2[behappy].mons.indexOf(youdumb_2[armenia].mons[sofar]) == -1) {
                             doeshave = false
                         } }
                     if (doeshave == true) {
                    if (dontworry.indexOf(behappy) == -1) {
                     dontworry.push(armenia)
                    } }} }}
        
             grtols_2 = []
     
     for (hi in youdumb_2) {
         youdumb_2[hi].length = youdumb_2[hi].mons.length
         grtols_2.push(youdumb_2[hi])
     }
    
     organizado = sortob(grtols_2, 'length')[1]
     
     grtols_2 = []
     for (ah in organizado) {
         grtols_2.push(youdumb_2[organizado[ah]])
     }
    
     youdumb_2 = []
     for (erro in grtols_2) {
         youdumb_2.push(grtols_2[erro])
     }
     
     pans_2 = []
     numerospresentes_2 = []
    
     for (wrecked in youdumb_2) {
         initial = youdumb_2[wrecked].w.what
     }

     ////console.log('you', youdumb_2)

        grtols = []
            for (hi in youdumb_2) {
                youdumb_2[hi].length = youdumb_2[hi].mons.length
                grtols.push(youdumb_2[hi])
            }
            
            organizado = sortob(grtols, 'length')[1]
            grtols = []
            for (ah in organizado) {
                grtols.push(youdumb_2[organizado[ah]])  
            }
        
            youdumb_2 = grtols
           ////console.log(youdumb_2)
        
        lengs = []
        for (i in youdumb_2) {
            if (lengs.find(function(lengs){
            return lengs.leng == youdumb_2[i].mons.length
            }) == undefined){
            lengs.push({leng:youdumb_2[i].mons.length, num: [i]})
            }else{
            lengs.find(function(lengs){
            return lengs.leng == youdumb_2[i].mons.length
            }).num.push(i)
            }}
        ////console.log(lengs)
        
        youdumb_2ordered = []
        for (f in lengs) {
            its = []
            for (i in lengs[f].num) {
            its.push(youdumb_2[lengs[f].num[i]])
            }
        
            grtols = []
            
            for (hi in its) {
            ////console.log(its[i].w.what.length)
                its[hi].length = its[hi].w.what.length
                grtols.push(its[hi])
            }
            
            organizado = sortob(grtols, 'length')[1]
            
            grtols = []
            for (ah in organizado) {
                grtols.push(its[organizado[ah]])
            }
        
            its = grtols
            ////console.log(its)
            for (c in its) {
            youdumb_2ordered.push(its[c])
            } }

        ////console.log('youdumb_2ordered', youdumb_2ordered)
        youdumb_2 = youdumb_2ordered
        
        for (yes in youdumb_2) {
            ////console.log('==========>',yes, youdumb_2[yes].mons, youdumb_2[yes].w.what.length)
        }
     //

     // Código para deletar agrupamentos/grupos iguais
     indexsout = []
     fixyou = []
     for (no in youdumb_2) {
        if (indexsout.indexOf(no) == -1) {
        fixyou.push(youdumb_2[no])
        re1 = youdumb_2[no].rept
        w1 = youdumb_2[no].w.what.length
        ////console.log(re1, w1)
        ////console.log('---------------------------')
        for (na in youdumb_2) {
            if (na != no) {
                re2 = youdumb_2[na].rept
                w2 = youdumb_2[na].w.what.length
                ////console.log(re2, w2)
                if (re1 == re2 && w1 == w2) {
                    ////console.log('opa')
                    indexsout.push(na)
                }}}
        ////console.log('---------------------------')
            }
     }
     ////console.log(fixyou)
     youdumb_2 = [...fixyou]

     heya_2 = [...youdumb_2]
     for (imback in youdumb_2) {
        ////console.log('---------YOUDUMB-------',youdumb_2[imback])
         sticky = []
         initial = youdumb_2[imback].w.what
         ////console.log('initial',initial)
         if (initial.length > 0) {
         inside = {which: [], numberyoudumb: youdumb_2[imback].polen}
         
         for (agg in initial) {
             taai = false
             ////console.log(agg,initial[agg].ar)
              for (eng in initial[agg].ar) {
                ////console.log(eng,initial[agg].ar[eng])
                 if (numerospresentes_2.indexOf(initial[agg].ar[eng]) == -1) {
                    ////console.log('Não tá aí')
                 }else{
                    ////console.log('Tá aí')
                     taai = true
                 } }
              if (taai == false) {
                 inform = {monos: initial[agg].ar, numberwhat: initial[agg].indice} 
                 ////console.log(`inform: {mons: ${initial[agg].ar},indice: ${initial[agg].indice}}`)
                 inside.which.push(inform)
  
                 for (darkening in inform.monos) {
                     sticky.push(inform.monos[darkening])
                 }
   
                 for (eng in initial[agg].ar) {
                     numerospresentes_2.push(initial[agg].ar[eng])
                  } }}

         if (inside.which.length > 0) {
             inside.todos = sticky
      pans_2.push(inside)
         }
     
         for (h in youdumb_2) {
             if (h != imback) {
             for (tempo = youdumb_2[h].w.what.length - 1; tempo >= 0; tempo--) {
                 dulu = false
                for (and in youdumb_2[h].w.what[tempo].ar) {
                 if (numerospresentes_2.indexOf(youdumb_2[h].w.what[tempo].ar[and]) != -1) {
                     dulu = true
                 }}}}}
     
     for (força in youdumb_2) {
         entao = []
         for (areo in youdumb_2[força].w.what) {
             for (paris in youdumb_2[força].w.what[areo].ar) {
                 entao.push(Number(youdumb_2[força].w.what[areo].ar[paris]))
             }}
         youdumb_2[força].t = entao
      } } }
  
     concatenar_2 = ''
     numsdesfat = []
     newexpress = []
     
     for (bababa in pans_2) {
        ////console.log('pans_2[bababa]',pans_2[bababa])
         edge_2 = []
         naonao_2 = ''
         amount = []
           tobreak_2 = ''
           realife = []
           amontoado_2 = []

           ////console.log(roll_2[pans_2[bababa].numberyoudumb].factor, roll_2[pans_2[bababa].numberyoudumb].repetidos)
           for (quassao in roll_2[pans_2[bababa].numberyoudumb].posições) { // *roll_2[pans_2[bababa].numberyoudumb].posições = ['0','1']
             el = miss_2[roll_2[pans_2[bababa].numberyoudumb].posições[quassao]].dividido // *miss_2[0].dividido = 'a'
             gates = []
             quase = []
             teri = false
             juntar = ''
             for (estudar in el) {
                 if (el[estudar] == '*') {
                     teri = true
                     if (el[Number(estudar) + 1].search('[0-9]') != -1) {
                         quase.push(juntar)
                         juntar = ''
                     quase.push('*')
                     }
                 }else{
                     if (juntar.length == 0) {
                         juntar = el[estudar]
  
                         if (estudar == el.length - 1) {
                             quase.push(juntar)
                         }
                     }else if(el[estudar].search('[0-9]') != -1 && juntar.search('[0-9]') != -1){
                         juntar+= el[estudar]
                         if (estudar == el.length - 1) {
                             quase.push(juntar)
                         }
                     }else{
                         quase.push(juntar)
                         juntar= el[estudar]
                         if (estudar == el.length - 1) {
                             quase.push(juntar)
                         }}} }
                         ////console.log('quase',quase)
     
              if (teri == false) {
                 quase = []
                 for (t in el) {
                 quase.push(el[t])
                 } }
             aconta_2 = ''
             friend = ''
            elevar = 1
            aster = false
            
             for (patience in quase) {     
                 if (quase[patience] == '*') {
                     aster = true
                     gates.push(quase[Number(patience) - 1])
                     gates.push('x')
                     gates.push(quase[Number(patience) + 1])
                     quase[Number(patience) + 1] = fazerConta(gates)[0]
                     aconta_2 = fazerConta(gates)[0]
                     friend = fazerConta(gates)[0]
                     gates = []
                 }else if(quase[patience].search('[a-z]') != -1)  {
                    friend+= quase[patience]
                     if (quase[patience] == quase[Number(patience) - 1]) {
                         elevar++
     
                         if (patience == quase.length - 1) {
                             aconta_2+= `^${elevar}`
                         }
                     }else{
                         if (elevar > 1) {
                             aconta_2+= `^${elevar}`
                         }
                         aconta_2+= quase[patience]           
                         elevar = 1
                     }}}
           
             if (aster == false) {
              direitando = ''
              for (h in quase) {
                      direitando+= quase[h]
              }
              friend = direitando
             }else{
             ////console.log('=>',aconta_2)
             }
  
         if (aster == false) {
            // Indireitando o aconta_2 caso quase não contenha '*'
             antes = ''
             for (eyes in quase) {
                 if (quase[eyes].search('[0-9]') != -1) {
                     antes+= quase[eyes]
                 } }
             antes+= aconta_2
             aconta_2 = antes
             ////console.log('antes',antes)
         }
     
         realife.push(aconta_2)
             if (tobreak_2.length == 0) {
                 if(quase[0]== '-'){
                    negativo = true
                 if (aconta_2[0] == '-') {
                     mood = ''
                     for (member in aconta_2) {
                         if (aconta_2[member] != '-') {
                             mood+= aconta_2[member]
                         } }
                     tobreak_2+= `-${mood}`
                 }else{
                     tobreak_2 += `-${aconta_2}`
                 }
     
                 }else{
                     negativo = false
                     tobreak_2+= aconta_2
                 }
             }else if(quase[0]== '-'){
              
              negativo = true
                 correct = ''
                 for (okay in aconta_2) {
                     if (aconta_2[okay]!= '-'){
                         correct+= aconta_2[okay]
                     } }
                 tobreak_2+= ` - ${correct}`
             }else{
                 negativo = false
                 tobreak_2+= ` + ${aconta_2}`
             }
  
             if (negativo == true) {
             uh = ''
             for (i in friend) {
                 if (friend[i] != '-') {
                     uh+= friend[i]
                 }}
             amontoado_2.push('-')
             amontoado_2.push(uh)
             }else{
                 amontoado_2.push('+')
                 amontoado_2.push(friend)
             } }
            ////console.log('amontoado',amontoado_2)
            ////console.log('')

         for (repr in pans_2[bababa].which) {
              triste = scarecrow_2[roll_2[pans_2[bababa].numberyoudumb].repetidos[pans_2[bababa].which[repr].numberwhat]].divisor
              quase = []
              juntar = ''
              teri = false
              for (estudar in triste) {
                 ohjeez = triste[Number(estudar) - 1] != '-'
                 if (triste[estudar] == '.') {
                     teri = true
                     if (triste[Number(estudar) + 1].search('[0-9]') != -1 && ohjeez == true) {
                         quase.push(juntar)
                         juntar = ''
                     quase.push('*')
                     }
                 }else{
                     if (juntar.length == 0) {
                         juntar = triste[estudar]
                         if (estudar == triste.length - 1) {
                             quase.push(juntar)
                         }
                     }else if(triste[estudar].search('[0-9]') != -1 && juntar.search('[0-9]') != -1){
                         juntar+= triste[estudar]
                         if (estudar == triste.length - 1) {
                             quase.push(juntar)
                         }
                     }else{
                         quase.push(juntar)
                         juntar= triste[estudar]
                         if (estudar == triste.length - 1) {
                             quase.push(juntar)
                         }} } }
                         ////console.log('quase',quase)
     
              if (teri == false) {
                 quase = []
                 for (t in triste) {
                 quase.push(triste[t])
                 }}
     
              aconta_2 = ''
              friend = ''
              aster = false
              elevar = 1
              for (patience in quase) {
                 if (quase[patience] == '*') {
                     aster = true
                     gates.push(quase[Number(patience) - 1])
                     gates.push('x')
                     gates.push(quase[Number(patience) + 1])
                     quase[Number(patience) + 1] = fazerConta(gates)[0]
                     aconta_2 = fazerConta(gates)[0]
                     friend = fazerConta(gates)[0]
                     gates = []
                 }else if(quase[patience].search('[a-z]') != -1)  {
                      friend+= quase[patience]
                     if (quase[patience] == quase[Number(patience) - 1]) {
                         elevar++
                         if (patience == quase.length - 1) {
                             aconta_2+= `^${elevar}`
                         }
                     }else{
                         if (elevar > 1) {
                             aconta_2+= `^${elevar}` 
                         }
                         aconta_2+= quase[patience]
                         elevar = 1
                     } } }
  
             if (aster == false) {
               direitando = ''
               for (h in quase) {
                       direitando+= quase[h]
               }
               friend = direitando
              }else{
                ////console.log('=>',aconta_2)
                }
  
             if (aster == false) {
                // Indireitando o aconta_2 caso quase não contenha '*'
                 antes = ''
             for (eyes in quase) {
                 if (quase[eyes].search('[0-9]') != -1) {
                     antes+= quase[eyes]
                 } }
             antes+= aconta_2
               aconta_2 = antes
               ////console.log('antes',antes)
             }
     
            edge_2.push(aconta_2)
  
            if (quase[0] == '-') {
              uh = ''
              for (i in friend) {
                  if (friend[i] != '-') {
                      uh+= friend[i]
                  }}
              amount.push('-')
              amount.push(uh)
          }else{
              amount.push('+')
              amount.push(friend)
          }
  
             if (naonao_2.length == 0) {
                 if (quase[0] == '-') {
                     naonao_2+= `-${aconta_2}`
                 }else{
                     naonao_2+= aconta_2
                 }
             }else{
                 if (quase[0] == '-') {
                     naonao_2+= ` - ${aconta_2}`
                 }else{
                     naonao_2+= ` + ${aconta_2}`  
                 }}}
                 ////console.log('amount',amount)
                 ////console.log('')
         
          if (edge_2.length > 1) {
            if (concatenar_2.length > 0) {
            concatenar_2+= ' + '
            }
        concatenar_2+= `(${naonao_2})(${tobreak_2})`;
      } else {
        if (naonao_2[0] == '-') {
          if (concatenar_2.length > 0) {
          rok = ''
          for (j in naonao_2) {
            if (j != 0) {
              rok+= naonao_2[j]
            }}
          concatenar_2+= ' - '
          concatenar_2+= `${rok}(${tobreak_2})`;
        }else{
        concatenar_2+= `${naonao_2}(${tobreak_2})`
        }
        }else{
          if(concatenar_2.length > 0) {
          concatenar_2+= ` + ${naonao_2}(${tobreak_2})`
        }else{
          concatenar_2+= `${naonao_2}(${tobreak_2})`
        }}}
         
        //console.log(concatenar_2)
        //console.log(amount, '*', amontoado_2)
     // FAZENDO A CONTA
        primeirocaso = SOMANDOMONOMIOS_2(amount) // SOMANDO MONOMIOS DO AGRUPAMENTO ESQUERDO *Eg.: ('+','9x')
        segundocaso = SOMANDOMONOMIOS_2(amontoado_2) // SOMANDO MONOMIOS DO AGRUPAMENTO DIREITO *Eg.: ('-','2','+','y')
        mudou = false
// !----------- NEW ----------! (SOMAR MONÔMIOS DEPOIS DE FATORAR)
/*
if (somarmons == false) {
           wholecon = ''
           outrocon = ''
        for (am in primeirocaso[0]) {
            //console.log('am',am, ':',primeirocaso[0][am])
           if (primeirocaso[0][am].search('[0-9]') != -1 || primeirocaso[0][am].search('[a-z]') != -1) {
            if (primeirocaso[0][0] == '-' && am == 1) {
                //console.log('-',desfat(REFORMATAR(primeirocaso[0][am])))
                outrocon+= '-' + desfat(REFORMATAR(primeirocaso[0][am]))
            }else{
                //console.log(desfat(REFORMATAR(primeirocaso[0][am])))
                outrocon+= desfat(REFORMATAR(primeirocaso[0][am]))
            }
        }else{
            ////console.log(primeirocaso[0][am])
            if (am == 0 && primeirocaso[0][0] == '-') {
            }else{
            outrocon+= ` ${primeirocaso[0][am]} `
            }
        } }

        //console.log('naonao_2:',`( ${naonao_2} )`, 'outrocon:', `( ${outrocon} )`)
        size1 = 0
        if (primeirocaso[0].length == 1) {
        wholecon+= outrocon
        size1 = 1
        }else if (primeirocaso[0].length == 2 && primeirocaso[0][0] == '-') {
            size1 = 1
            wholecon+= outrocon
        }else{
            wholecon+= `(${outrocon})`
        }

        outrocon = ''
        for (am in segundocaso[0]) {
            //console.log('am',am, ':',segundocaso[0][am])
           if (segundocaso[0][am].search('[0-9]') != -1 || segundocaso[0][am].search('[a-z]') != -1) {
            if (segundocaso[0][0] == '-' && am == 1) {
                //console.log('-',desfat(REFORMATAR(segundocaso[0][am])))
                outrocon+= '-' + desfat(REFORMATAR(segundocaso[0][am]))
            }else{
                //console.log(desfat(REFORMATAR(segundocaso[0][am])))
                outrocon+= desfat(REFORMATAR(segundocaso[0][am]))
            }
        }else{
            ////console.log(segundocaso[0][am])
            if (am == 0 && segundocaso[0][0] == '-') {
            }else{
            outrocon+= ` ${segundocaso[0][am]} `
            } } }

        //console.log('tobreak_2',`( ${tobreak_2} )`, 'outrocon', `( ${outrocon} )`)
        if (segundocaso[0].length == 1) {
            if (size1 == 0) {
                //console.log('EPaaaaaaaaaaaaaaaaaaaaaaaA!')
        wholecon = outrocon + wholecon
            }else{
                wholecon = desfat(REFORMATAR(MULTIPLICARDIREITO(REFORMATAR(redo(wholecon)), REFORMATAR(redo(outrocon)))))
            }
        }else if (segundocaso[0].length == 2 && segundocaso[0][0] == '-') {
            if (size1 == 0) {
                //console.log('EPaaaaaaaaaaaaaaaaaaaaaaaA!')
        wholecon = outrocon + wholecon
            }
        }else{
            wholecon+= `(${outrocon})`
        }
        //console.log('wholecon!!!!!!!',wholecon)
        concatenar_2 = wholecon
    }
*/
    //

    //console.log(primeirocaso[0], segundocaso[0])
        if (primeirocaso[1] == primeirocaso[2]) {
        }else{
            mudou = true // DEU PRA SOMAR
        }
     
        if (segundocaso[1] == segundocaso[2]) {
        }else{
            mudou = true // DEU PRA SOMAR
        }
  
        if (mudou == true) { // Se deu pra somar pelo menos um dos dois (amount ou amontoado_2)
          naonao_2 = primeirocaso[0] // *9x
          tobreak_2 = segundocaso[0] // *-2 + y

        reason = []
        for (k in naonao_2) {
            //console.log('naonao_2[k]',naonao_2[k])
          if (k != 0 && naonao_2[k] != '-' && naonao_2[k] != '+') {
              deserve = naonao_2[k - 1]
              reason.push(k - 1)
              deserve+= naonao_2[k]
              naonao_2[k] = deserve
          }
          //console.log(naonao_2[k])
        }
  
     for (time = naonao_2.length - 1; time >= 0; time--) {
      if (reason.indexOf(time) != -1) {
          naonao_2.splice(time, 1)
          } }
  
     reason = []
        for (k in tobreak_2) {
          if (k != 0 && tobreak_2[k] != '-' && tobreak_2[k] != '+') {
              deserve = tobreak_2[k - 1]
              deserve+= tobreak_2[k]
              reason.push(k - 1)
             tobreak_2[k] = deserve
             //console.log(tobreak_2[k])
          }}
  
        for (time = tobreak_2.length - 1; time >= 0; time--) {
          if (reason.indexOf(time) != -1) {
              tobreak_2.splice(time, 1)
              }}
  
        for (roberto in naonao_2) {
          for (vaidarcerto in tobreak_2) {
            //console.log(naonao_2[roberto],'*',tobreak_2[vaidarcerto])
              novomon = MULTIPLICARDIREITO(naonao_2[roberto], tobreak_2[vaidarcerto])
              if (novomon[0] == '-') {
                  miya = ''
                  for (n in novomon) {
                      if (novomon[n] != '-') {
                          miya+= novomon[n]                 
                         }  }
                  newexpress.push('-')
                  newexpress.push(miya)
              }else{
                  newexpress.push('+')
                  newexpress.push(novomon)
              }}
            //console.log('newexpress',newexpress)
            }
      
         for (e in pans_2[bababa].todos) {
          numsdesfat.push(pans_2[bababa].todos[e])
         }}}
     
     if (numsdesfat.length > 0) {
        ////console.log(concatenar_2)
      console.warn('VAI TER QUE FATORAR DE NOVO')
      ////console.log('youdumb')
     
      ////console.log(pans_2)
      todososnumeros_2 = []
      for (acaba in monomios_2) {
          todososnumeros_2.push(acaba)
      }
  
      for (feliz = todososnumeros_2.length - 1; feliz >= 0; feliz--) {
           if (numsdesfat.indexOf(Number(todososnumeros_2[feliz])) != -1) {
              todososnumeros_2.splice(feliz, 1)
           }}
   
      for (eh in todososnumeros_2) {
          join = ''
          for (sempresei in monomios_2[todososnumeros_2[eh]].numero) {
              if (monomios_2[todososnumeros_2[eh]].numero[sempresei] != '+' && monomios_2[todososnumeros_2[eh]].numero[sempresei] != '-') {
              ter = monomios_2[todososnumeros_2[eh]].numero[sempresei]
              join+= ter
              } }
          if (monomios_2[todososnumeros_2[eh]].numero[0] == '+') {
              newexpress.push('+')
              newexpress.push(join)
          }else if(monomios_2[todososnumeros_2[eh]].numero[0] == '-') {
              newexpress.push('-')
              newexpress.push(join)
          }else{
              newexpress.push('+')
              newexpress.push(join)
          }
          //console.log('newexpress',newexpress)
        }
          //if (somarmons == false) 
          //console.log('newexpress',newexpress)
         //this.FATORAR(newexpress,false) // !--------- PONTO DE ATENÇÃO ---------!
     }else{
     todososnumeros_2 = []
     for (acaba in monomios_2) {
         todososnumeros_2.push(acaba)
     }
     cancelar = []
     for (feliz = todososnumeros_2.length - 1; feliz >= 0; feliz--) {
             if (numerospresentes_2.indexOf(Number(todososnumeros_2[feliz])) != -1) {
                todososnumeros_2.splice(feliz, 1)
     }}
    
     for (bye in todososnumeros_2) {
         quase = [...monomios_2[todososnumeros_2[bye]].numero]
         aconta_2 = ''
         elevar = 1
         aster = false
         friend = ''
         gates = []
          for (patience in quase) {   
              if (quase[patience] == '*') {
                  aster = true
                  gates.push(quase[Number(patience) - 1])
                  gates.push('x')
                  gates.push(quase[Number(patience) + 1])
                  quase[Number(patience) + 1] = fazerConta(gates)[0]
                  aconta_2 = fazerConta(gates)[0]
                  gates = []
              }else if(quase[patience].search('[a-z]') != -1)  {
                  if (quase[patience] == quase[Number(patience) - 1]) {
                      elevar++
                      if (patience == quase.length - 1) {
                          aconta_2+= `^${elevar}`
                      }
                  }else{
                      if (elevar > 1) {
                          aconta_2+= `^${elevar}`
                      }
                      aconta_2+= quase[patience]
                      elevar = 1
                  }} }

          if (aster == false) {
               direitando = ''
               for (h in quase) {
                       direitando+= quase[h]
               }
               friend = direitando
              }
      if (aster == false) {
          antes = ''
          for (eyes in quase) {
              if (quase[eyes].search('[0-9]') != -1) {
                  antes+= quase[eyes]
              }}
          antes+= aconta_2
          aconta_2 = antes
      }
     
      if (bye == 0) {
         if (concatenar_2.length > 0) {
             if (quase[0] == '-') {
                 concatenar_2+= ` - ${aconta_2}`
             }else{
                 concatenar_2+= ` + ${aconta_2}`
             }
         }else{
             if (quase[0] == '-') {
                 concatenar_2+= `-${aconta_2}`
             }else{
                 concatenar_2+= `${aconta_2}`
             }}
      }else{
         if (quase[0] == '-') {
             concatenar_2+= ` - ${aconta_2}`
         }else{
             concatenar_2+= ` + ${aconta_2}`
         }}}}
     
     function doit(par) {
         segs_22 = []
     
         for (uf in par) {
           segs_22[uf] = {}
             segs_22[uf].mons = [...par[uf].mons]
             segs_22[uf].car = par[uf].car
      }
     
      relation_2 = []
      quanto = Number(monomios_2.length)/Number(divs_2[okentao])
      numapars = []
     
      util = []
      for (t in segs_22) {
          if (segs_22[t].mons.length >= quanto) {
              util.push(segs_22[t])
          }}
  
      for (m in monomios_2) {
          aparic = 0
          for (t in util) {
              if (util[t].mons.indexOf(Number(m)) != -1) {
                  aparic++
              }}
          numapars.push({num: Number(m), vezes: aparic})
          }
     
      present = []
      for (r in util) {
         lista = util[r].mons
          present = {fix: [], falt: []}
          rep = 0
          for (g = 0; g < lista.length && rep < quanto; g++) {
              if (numapars.find(function(numapars) {
                  return numapars.num == lista[g]
                  }).vezes == 1) {
                    rep++
                    present.fix.push(lista[g])
              }}
     
          if (present.fix.length < quanto) {
          for (g in lista) {
              if (present.fix.indexOf(lista[g]) == -1) {
                  present.falt.push(lista[g])      
              }}
          
          if (present.fix.length == 0) {
          for (ti in present.falt) {
                  numapars.find(function(numapars) {
                      return numapars.num == present.falt[ti]
                      }).vezes--
          }}}
  
      relation_2[r] = present
      relation_2[r].car = segs_22[r].car
      }
      for (c in relation_2) {
          if (relation_2[c].fix.length > 0) {
          faltam = Number(quanto) - Number(relation_2[c].fix.length)
          for (f = 0; f < faltam; f++) {
             relation_2[c].fix.push(relation_2[c].falt[f])
             relation_2[c].falt[f] = -10
          }
     
          for (tel = 0; tel < c; tel++){
              outrorel = relation_2[tel]
          for (hu in outrorel.fix) {
              if (relation_2[c].fix.indexOf(outrorel.fix[hu]) != -1) {
                  y = 0
                  for(ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {
                      if (relation_2[c].fix.indexOf(outrorel.falt[ou]) == -1 && outrorel.falt[ou] != -10){
                          outrorel.fix[hu] =  outrorel.falt[ou]
                          outrorel.falt[ou] = -10
                          y++
                      }}}}}}}
     
     groups = 0
     conts = []
     for (yougo in relation_2) {
     if (relation_2[yougo].fix.length > 0) {
     for (pals in relation_2[yougo].fix) {
      conts.push(relation_2[yougo].fix[pals])
     }
     groups++
    }}
    
     if (groups < divs_2[okentao]) {
     
     groups = 0
     conts = []
     for (yougo in relation_2) {
     if (relation_2[yougo].fix.length > 0) {
     for (pals in relation_2[yougo].fix) {
      conts.push(relation_2[yougo].fix[pals])
     }
     groups++
     }}
    
     if (divs_2[okentao] != groups) {
     tirados_2 = []
     for (wish in relation_2) {
      for (edge_2 in relation_2[wish].fix) {
         tirados_2.push(relation_2[wish].fix[edge_2])
      }}
     
     for (die in segs_22) {
         tirar = []
     for (h in segs_22[die].mons) {
     if (tirados_2.indexOf(segs_22[die].mons[h]) != -1) {
     tirar.push(Number(h))
     }}
  
     for (far = tirar.length - 1; far >= 0; far--) {
     segs_22[die].mons.splice(tirar[far], 1)
     } }
     
     for (sorrow in segs_22) {
     grupos = Math.floor(Number(segs_22[sorrow].mons.length)/quanto)
     
     imor = 0
     
     for (b = 0; b < grupos; b++) {
         for (live = 0; live < quanto; live++) {
                if (tirados_2.indexOf(segs_22[sorrow].mons[imor]) != -1) {
                    ob.problem = true
                }
             ob.fix.push(segs_22[sorrow].mons[imor])
             tirados_2.push(segs_22[sorrow].mons[imor])
             imor++
         }
      
         if (ob.problem == false || temnaLista(ob.fix) == true) {
         relation_2.push(ob)
         }}}}
     
     males = []
     for (nah = relation_2.length - 1; nah >= 0; nah--) {
       for (nop in relation_2) {
         if (relation_2[nop].fix.length > 0 && nop != nah) {
     igual = true
     for (uh in relation_2[nop].fix) {
     if (relation_2[nah].fix.indexOf(relation_2[nop].fix[uh]) == -1) {
     igual = false
     }}
     if (igual == true) {
     if (relation_2[nah].car.length > relation_2[nop].car.length) {
     males.push(Number(nop))
     }}
     
     }else if(relation_2[nop].fix.length == 0) {
         males.push(Number(nop))
     }}}
     
       for (nah = relation_2.length - 1; nah >= 0; nah--) {
         if (males.indexOf(nah) != -1) {
             relation_2.splice(nah, 1)
         }}
     
       numerosquetem = []
       for (nah in relation_2) {
           if (relation_2[nah].fix.length > 0) {
           for (nop in relation_2[nah].fix) {
               numerosquetem.push(relation_2[nah].fix[nop])
           }}}
  
       segs_22 = []
     
       for (uf in par) {
         segs_22[uf] = {}
           segs_22[uf].mons = [...par[uf].mons]
           segs_22[uf].car = par[uf].car
     }
     
     for (pose in segs_22) {
     for (me = segs_22[pose].mons.length - 1; me >= 0; me--) {
     if (numerosquetem.indexOf(segs_22[pose].mons[me]) != -1) {
     segs_22[pose].mons.splice(me, 1)
     }}}
     
     fireonfire = []
     
         for (uf in relation_2) {
           fireonfire[uf] = {}
             fireonfire[uf].mons = [...relation_2[uf].fix]
             fireonfire[uf].car = relation_2[uf].car
      }
     
      for (red in fireonfire) {
         relation_2.push({fix: fireonfire[red].mons, car: fireonfire[red].car})
      }
     
     }else if(groups > divs_2[okentao]){
     
      mia = []
     for (idk in segs_22) {
     for (mcr in segs_22) {
     if (mcr != idk) {
         if (segs_22[mcr].mons.length <= segs_22[idk].mons.length) {
     
             sames = []
        for(y = 0; y < segs_22[mcr].mons.length; y++) {
             if (segs_22[idk].mons.indexOf(segs_22[mcr].mons[y]) != -1) {
                 sames.push('igual')
             }else{
                 sames.push('diferente')
             } }
        if (sames.indexOf('diferente') == -1){
         if (mia.indexOf(mcr) == -1) {
         mia.push(mcr)
         }}}}}}
     
      numapars = []
      
     relation_2 = []
     
      util = []
      for (t in segs_22) {
          if (segs_22[t].mons.length >= quanto) {
              util.push(segs_22[t])
          }}
     
      for (m in monomios_2) {
          aparic = 0
          for (t in util) {
              if (util[t].mons.indexOf(Number(m)) != -1) {
                  aparic++
              } }
          numapars.push({num: Number(m), vezes: aparic})
          }
     
      present = []
      for (r in util) {
         lista = util[r].mons
          present = {fix: [], falt: []}
          rep = 0
          for (g = 0; g < lista.length && rep < quanto; g++) {
              if (numapars.find(function(numapars) {
                  return numapars.num == lista[g]
                  }).vezes == 1) {
                    rep++
                    present.fix.push(lista[g])
              }}
       
          if (present.fix.length < quanto) {
          for (g in lista) {
              if (present.fix.indexOf(lista[g]) == -1) {
                  present.falt.push(lista[g])       
              }}
  
          if (present.fix.length == 0) {
          for (ti in present.falt) {
                  numapars.find(function(numapars) {
                      return numapars.num == present.falt[ti]
                      }).vezes--   
          }} }
      relation_2[r] = present
      relation_2[r].car = segs_22[r].car
      }
  
      for (c in relation_2) {
          if (relation_2[c].fix.length > 0) {
          faltam = Number(quanto) - Number(relation_2[c].fix.length)
     
          for (f = 0; f < faltam; f++) {
             relation_2[c].fix.push(relation_2[c].falt[f])
             relation_2[c].falt[f] = -10
          }
     
          for (tel = 0; tel < c; tel++){
              outrorel = relation_2[tel]
              
          for (hu in outrorel.fix) {
              if (relation_2[c].fix.indexOf(outrorel.fix[hu]) != -1) {
                  y = 0
                  for(ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {
                      if (relation_2[c].fix.indexOf(outrorel.falt[ou]) == -1 && outrorel.falt[ou] != -10){
                          outrorel.fix[hu] =  outrorel.falt[ou]
                          outrorel.falt[ou] = -10
                          y++
              }}}}}}}
   
     groups = 0
     conts = []
     for (yougo in relation_2) {
     if (relation_2[yougo].fix.length > 0) {
     for (pals in relation_2[yougo].fix) {
      conts.push(relation_2[yougo].fix[pals])
     }
     groups++
     }}
    
     if (divs_2[okentao] != groups) {
     tirados_2 = []
     for (wish in relation_2) {
      for (edge_2 in relation_2[wish].fix) {
         tirados_2.push(relation_2[wish].fix[edge_2])
      }  }
     
     for (die in segs_22) {
         tirar = []
   
     for (h in segs_22[die].mons) {
     if (tirados_2.indexOf(segs_22[die].mons[h]) != -1) {
     tirar.push(Number(h))
     }}
     for (far = tirar.length - 1; far >= 0; far--) {
     segs_22[die].mons.splice(tirar[far], 1)
     }}
     
     for (sorrow in segs_22) {
     grupos = Math.floor(Number(segs_22[sorrow].mons.length)/quanto)
     imor = 0
     
     for (b = 0; b < grupos; b++) {
         ob = {car: segs_22[sorrow].car, fix: [],problem:false}
         for (live = 0; live < quanto; live++) {
                if (tirados_2.indexOf(segs_22[sorrow].mons[imor]) != -1) {
                     ob.problem = true
                }
             ob.fix.push(segs_22[sorrow].mons[imor])
             tirados_2.push(segs_22[sorrow].mons[imor])
             imor++
         }
       
         if (ob.problem == false || temnaLista(ob.fix) == true) {
         relation_2.push(ob)
         }}}}}
     return [relation_2, segs_22]
     }
     
     function temnaLista(h) {
     for (t in relation_2) {
         if (relation_2[t].fix.length > 0) {
         home = 0
         for (fear in relation_2[t].fix) {
             if (relation_2[t].fix[fear] == h[fear]) {
                 home++
             }}
         if (home == h.length) {
             return true 
         }} }}
     
     function doit2(par) {
         segs_22 = []
         for (uf in par) {
           segs_22[uf] = {}
             segs_22[uf].mons = [...par[uf].mons]
             segs_22[uf].car = par[uf].car
      }
     
      relation_2 = []
      quanto = Number(monomios_2.length)/Number(divs_2[okentao])
      numapars = []
     
      util = []
      for (t in segs_22) {
          if (segs_22[t].mons.length >= quanto) {
              util.push(segs_22[t])
          }}
      
      for (m in monomios_2) {
          aparic = 0
          for (t in util) {
              if (util[t].mons.indexOf(Number(m)) != -1) {
                  aparic++
              }}
          numapars.push({num: Number(m), vezes: aparic})
          }
     
      present = []
      for (r in util) {
         lista = util[r].mons
          present = {fix: [], falt: []}
          rep = 0
          for (g = 0; g < lista.length && rep < quanto; g++) {
              if (numapars.find(function(numapars) {
                  return numapars.num == lista[g]
                  }).vezes == 1) {
                    rep++
                    present.fix.push(lista[g])
                   }}
          
          if (present.fix.length < quanto) {
          for (g in lista) {
              if (present.fix.indexOf(lista[g]) == -1) {
                  present.falt.push(lista[g])            
              }}
        
          if (present.fix.length == 0) {
          for (ti in present.falt) {
                  numapars.find(function(numapars) {
                      return numapars.num == present.falt[ti]
                      }).vezes--
                    }}}
      relation_2[r] = present
      relation_2[r].car = segs_22[r].car
      }
  
      for (c in relation_2) {
          if (relation_2[c].fix.length > 0) {
          faltam = Number(quanto) - Number(relation_2[c].fix.length)
          for (f = 0; f < faltam; f++) {
             relation_2[c].fix.push(relation_2[c].falt[f])
             relation_2[c].falt[f] = -10
          }
     
          for (tel = 0; tel < c; tel++){
              outrorel = relation_2[tel]
              
          for (hu in outrorel.fix) {
              if (relation_2[c].fix.indexOf(outrorel.fix[hu]) != -1) {
                  y = 0
                  for(ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {
                      if (relation_2[c].fix.indexOf(outrorel.falt[ou]) == -1 && outrorel.falt[ou] != -10){
                          outrorel.fix[hu] =  outrorel.falt[ou]
                          outrorel.falt[ou] = -10
                          y++
                      }}}} }} }
     groups = 0
     conts = []
     for (yougo in relation_2) {
     if (relation_2[yougo].fix.length > 0) {
     for (pals in relation_2[yougo].fix) {
      conts.push(relation_2[yougo].fix[pals])
     }
     groups++
     }}
     
     if (groups < divs_2[okentao]) {
     groups = 0
     conts = []
     for (yougo in relation_2) {
     if (relation_2[yougo].fix.length > 0) {
     for (pals in relation_2[yougo].fix) {
      conts.push(relation_2[yougo].fix[pals])
     }
     groups++
     }}
     
     if (divs_2[okentao] != groups) {
     tirados_2 = []
     for (wish in relation_2) {
      for (edge_2 in relation_2[wish].fix) {
         tirados_2.push(relation_2[wish].fix[edge_2])
      } }
     
     for (die in segs_22) {
         tirar = []
     for (h in segs_22[die].mons) {
     if (tirados_2.indexOf(segs_22[die].mons[h]) != -1) {
     tirar.push(Number(h))
     }}
     for (far = tirar.length - 1; far >= 0; far--) {
     segs_22[die].mons.splice(tirar[far], 1)
     }}
     
     for (sorrow in segs_22) {
     grupos = Math.floor(Number(segs_22[sorrow].mons.length)/quanto)
     imor = 0
     
     for (b = 0; b < grupos; b++) {
         ob = {car: segs_22[sorrow].car, fix: [],problem:false}
     
         for (live = 0; live < quanto; live++) {
             ob.fix.push(segs_22[sorrow].mons[imor])
             tirados_2.push(segs_22[sorrow].mons[imor])
             imor++
         }
        
         if (ob.problem == false || temnaLista(ob.fix) == true) {
         relation_2.push(ob)
         }}}}
     }else if(groups > divs_2[okentao]){
      mia = []
     for (idk in segs_22) {
     for (mcr in segs_22) {
     if (mcr != idk) {
         if (segs_22[mcr].mons.length <= segs_22[idk].mons.length) {
     
             sames = []
        for(y = 0; y < segs_22[mcr].mons.length; y++) {
             if (segs_22[idk].mons.indexOf(segs_22[mcr].mons[y]) != -1) {
                 sames.push('igual')
             }else{
                 sames.push('diferente')
             }}
        if (sames.indexOf('diferente') == -1){
         if (mia.indexOf(mcr) == -1) {
         mia.push(mcr)
         }}}  }}}
        
      numapars = []
      
     relation_2 = []
     
      util = []
      for (t in segs_22) {
          if (segs_22[t].mons.length >= quanto) {
              util.push(segs_22[t])
          }}
      
      for (m in monomios_2) {
          aparic = 0
          for (t in util) {
              if (util[t].mons.indexOf(Number(m)) != -1) {
                  aparic++
              }  }
          numapars.push({num: Number(m), vezes: aparic})
          }
     
      present = []
      for (r in util) {
         lista = util[r].mons
          present = {fix: [], falt: []}
          rep = 0
          for (g = 0; g < lista.length && rep < quanto; g++) {
              if (numapars.find(function(numapars) {
                  return numapars.num == lista[g]
                  }).vezes == 1) {
                    rep++
                    present.fix.push(lista[g])
              }}
        
          if (present.fix.length < quanto) {
          for (g in lista) {
              if (present.fix.indexOf(lista[g]) == -1) {
                  present.falt.push(lista[g])     
              }}
  
          if (present.fix.length == 0) {
          for (ti in present.falt) {
                  numapars.find(function(numapars) {
                      return numapars.num == present.falt[ti]
                      }).vezes--    
          }}}
      relation_2[r] = present
      relation_2[r].car = segs_22[r].car
      }
      for (c in relation_2) {
          if (relation_2[c].fix.length > 0) {
          faltam = Number(quanto) - Number(relation_2[c].fix.length)
          for (f = 0; f < faltam; f++) {
             relation_2[c].fix.push(relation_2[c].falt[f])
             relation_2[c].falt[f] = -10
          }
          for (tel = 0; tel < c; tel++){
              outrorel = relation_2[tel]
          for (hu in outrorel.fix) {
              if (relation_2[c].fix.indexOf(outrorel.fix[hu]) != -1) {
                  y = 0
                  for(ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {
                      if (relation_2[c].fix.indexOf(outrorel.falt[ou]) == -1 && outrorel.falt[ou] != -10){
                          outrorel.fix[hu] =  outrorel.falt[ou]
                          outrorel.falt[ou] = -10
                          y++
                      }}}}}}}
     groups = 0
     conts = []
     for (yougo in relation_2) {
     if (relation_2[yougo].fix.length > 0) {
     for (pals in relation_2[yougo].fix) {
      conts.push(relation_2[yougo].fix[pals])
     }
     groups++
     }}
  
     if (divs_2[okentao] != groups) {
     tirados_2 = []
     for (wish in relation_2) {
      for (edge_2 in relation_2[wish].fix) {
         tirados_2.push(relation_2[wish].fix[edge_2])
      }}
    
     for (die in segs_22) {
         tirar = []
     for (h in segs_22[die].mons) {
     if (tirados_2.indexOf(segs_22[die].mons[h]) != -1) {
     tirar.push(Number(h))
     }}
     for (far = tirar.length - 1; far >= 0; far--) { 
     segs_22[die].mons.splice(tirar[far], 1)
     }}
     
     for (sorrow in segs_22) {
     grupos = Math.floor(Number(segs_22[sorrow].mons.length)/quanto)
  
     imor = 0
     
     for (b = 0; b < grupos; b++) {
         ob = {car: segs_22[sorrow].car, fix: [],problem:false}
         for (live = 0; live < quanto; live++) {
             ob.fix.push(segs_22[sorrow].mons[imor])
             tirados_2.push(segs_22[sorrow].mons[imor])
             imor++
         }
        
         if (ob.problem == false || temnaLista(ob.fix) == true) {
         relation_2.push(ob)
         }}}}}
     return [relation_2, segs_22]
     }
     
   function SOMANDOMONOMIOS_2(list) {
          
  particles = [{numero: ''}]
  obnum = 0
  for (n = 0; n < list.length; n++) {
  if (String(list[n]).search('[\\-\\+]') != -1 && n != 0) {
  particles.push({numero: ''})
  obnum++
  }
  particles[obnum].numero += list[n]
  }
  
  for (huh in particles) {
      partlet = ''
      for (y in particles[huh].numero) {
       if (String(particles[huh].numero[y]).search('[a-z]') != -1) {
          partlet+= String(particles[huh].numero[y])
       }}
      particles[huh].partletral = partlet
  }
  
  exp_2 = []
  for (bye in particles) {
      comofica = []
      ground = ''
      for (misery in particles[bye].numero) { 
          carac = particles[bye].numero[misery]
              if (ground.length == 0) {
                  ground+= carac
              }else if(String(ground.search('[0-9]')) != -1 && String(carac).search('[0-9]') != -1){
                  ground+= carac
              }else{
                  comofica.push(ground)
                  ground = ''
                  ground += carac  
              }
              if (misery == particles[bye].numero.length - 1) {
                  comofica.push(ground)
              }}
      particles[bye].numero = comofica
  }
  
  agruparsoma = []
  // JUNTANDO OS MONÔMIOS QUE DÁ PARA SOMAR
  for (huh in particles) {
      if (agruparsoma.find(function (agruparsoma) {
          return agruparsoma.que == particles[huh].partletral
         }) == undefined) {
      agruparsoma.push({quais: [Number(huh)], que:  particles[huh].partletral})
         }else{
          agruparsoma.find(function (agruparsoma) {
              return agruparsoma.que == particles[huh].partletral
             }).quais.push(Number(huh))
         }}
  
  for (chuva in agruparsoma) {
      conta = []
  for (da in agruparsoma[chuva].quais) {
  divisor = []
  for (flowers in agruparsoma[chuva].que) {
  divisor.push(agruparsoma[chuva].que[flowers])
  }
  
  tu = [...divisor]
  resultadoDaDivisão = DIVIDIR( divisor, particles[agruparsoma[chuva].quais[da]].numero)
  plan = []
  add = ''
  
  for (past in resultadoDaDivisão) {
   if (resultadoDaDivisão[past].search('\\*') != -1 || resultadoDaDivisão[past].search('[0-9]') != -1) {
  if (add.length == 0) {
      if (resultadoDaDivisão[past - 1] != '-') {
      add+= resultadoDaDivisão[past]
      }
  }else if (resultadoDaDivisão[past].search('[0-9]') != -1 && add.search('[0-9]') != -1) {
  add+= resultadoDaDivisão[past]
  }else{
      plan.push(add)
      add = ''
      add+= resultadoDaDivisão[past]
  }
  
  if (plan.length == 3) {
  plan = [String(Number(plan[0])*Number(plan[2]))]
  }}}
  
  if (add == '' && agruparsoma[chuva].quais.length > 1) {
      add = '1'
  }
  plan.push(add)
  
  if (plan.length == 3) {
      plan = [String(Number(plan[0])*Number(plan[2]))]
      }
  
      if (particles[agruparsoma[chuva].quais[da]].numero[0] == '+' || particles[agruparsoma[chuva].quais[da]].numero[0] == '-') {
      sinal = particles[agruparsoma[chuva].quais[da]].numero[0]
      if (conta.length != 0) {
      conta.push(particles[agruparsoma[chuva].quais[da]].numero[0])
      }}
      if (conta.length == 0 && particles[agruparsoma[chuva].quais[da]].numero[0] == '-') {
   entao = '-'
   entao+= plan[0]
   conta.push(entao)
      }else{  
          conta.push(plan[0])
      }}
  
  comehome = fazerConta(conta)
  
  if (comehome[0][0] == '-') {
      t = ''
     for (b in comehome[0]) {
     if (comehome[0][b] != '-') {
       t+= comehome[0][b]
     }}
   
     at = t
     if (ehprimo(t) == false) {
     fat = FATORARSInGULAR(at)
     }else{
      fat = at
     }
     oop = '-'
     oop+= String(fat)
  exp_2.push('-')
  fat += agruparsoma[chuva].que
  exp_2.push(fat)
  }else{
      if (ehprimo(comehome) == false) {
  fat = FATORARSInGULAR(comehome)
      }else{
          fat = comehome
      }
  if (exp_2.length == 0) {
      fat += agruparsoma[chuva].que
      exp_2.push(fat)
      }else {
          exp_2.push('+')
          fat += agruparsoma[chuva].que
          exp_2.push(fat)
      }}}
  
  return[exp_2, agruparsoma.length, particles.length]
   }
  
   function REDONUMFACTORING(storer) {
      if (typeof storer === 'string') {
          other = []
          for (h in storer) {
              other.push(storer[h])
          }
          storer = other
      }
  resultobtained = ''
  elevar = 1
  wasmultiplicated = false
  
  operation = []
  for (patience in storer) {
      if (storer[patience] == '*') {
          wasmultiplicated = true
          operation.push(storer[Number(patience) - 1])
          operation.push('x')
          operation.push(storer[Number(patience) + 1])
          storer[Number(patience) + 1] = fazerConta(operation)[0]
          resultobtained = fazerConta(operation)[0]
          operation = []
      }else if(storer[patience].search('[a-z]') != -1)  {
          if (storer[patience] == storer[Number(patience) - 1]) {
              elevar++
              if (patience == storer.length - 1) {
                  resultobtained+= `^${elevar}`
              }
          }else{
              if (elevar > 1) { 
                  resultobtained+= `^${elevar}`
              }
              resultobtained+= storer[patience]
              elevar = 1
          }} }
  
  if (wasmultiplicated == false){
         addingnumber = ''
         for (eyes in storer) {
             if (storer[eyes].search('[0-9]') != -1) {
                 addingnumber+= storer[eyes]
             }}
         addingnumber+= resultobtained
         resultobtained = addingnumber
     }
  if(storer[0] == '-') {
      confirmedresult = '-'
      for (caracter in resultobtained) {
          confirmedresult+= resultobtained[caracter]
      }
      return [confirmedresult]
  }else{
      return [resultobtained]
  }}
  
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
                  }}}}
      return [maiorparamenor, posiçõesnumeros]
  }

  ir = false
  if (todososnumeros_2.length == 0 && pans_2.length <= 1) {
    ////console.log('DEU CERTOOOOOOOOOOOOOOO')
    ir = true
  }else if (monomios_2.length == 1) {
    ////console.log('DEU CERTOOOOOOOOOOOOOOO')
    ir = true
  }

  ////console.log('AAAAAAA AQUI ESTÁ O IRRRRR',ir)
  if (somarmons == false) {
  //console.log('todososnumeros (monômios que sobraram):', todososnumeros_2)
  //console.log('agrupamentos:',pans_2)
  //console.log('monômios:',monomios_2)
  //console.log('CONCATENAR (resultado final):', concatenar_2)
  }
  
  //console.log('ARANJARR',arj)
  if (ir == true) {
    if (somarmons == false)
    //console.log('IR: TRUEE')
    return [
        concatenar_2,
        pans_2.length,
        todososnumeros_2.length,
        segs_2.length,
        roll_2.length,
        segs_2,
        scarecrow_2,
        miss_2,
        roll_2,
        youdumb_2,
        monomios_2,
        pans_2
      ]
    }else{
        if (somarmons == false)
        //console.log('IR: FALSEE')
        return [
        concatenar_2,
        pans_2.length,
        todososnumeros_2.length,
        segs_2.length,
        roll_2.length,
        segs_2,
        scarecrow_2,
        miss_2,
        roll_2,
        youdumb_2,
        monomios_2,
        pans_2]
}}}

ep = FATORE(exal)
////console.log(ep)
fat1 = new CreateEngine2().FATORAR(ep,true)
fat2 = new CreateEngine2().FATORAR(ep,false)

////console.log('FAT',fat2[0])
        alt = 1
        if (fat2[1] == 1 && fat2[2] == 0) {
          alt = 2
         okexp = fat2[0]
        } else {
          if (fat1[1] == 1 && fat1[2]== 0) {
            alt = 1
              okexp = fat1[0]
          }else{
              alt = 2
              okexp = fat2[0]
          } }
          alt = 2
          okexp = fat2[0]

          ////console.log('ALT',alt)

          plo = false
          
          /*
          if (monomios_2.length > 1 && segs_2.length > 0 && okexp != '?') {
            ////console.log('isso')
          while (plo == false) {
            seps = SPLITEXPS(okexp)
              rexp =  ''
              chain = []
          for (varnot in seps) {          
            start = seps[varnot].open
              end = seps[varnot].close
              expin = seps[varnot].exp
          
            fator1 = new CreateEngine2().FATORAR(FATORE(seps[varnot].exp), false)
          
            //console.log('HEY ============>', seps[varnot].exp)
            previous = okexp[Number(seps[varnot].open) - 1]
            //console.log(okexp, previous)
            //console.log('FATORAÇÃO:', fator1[0])
            //console.log('rexp',rexp)
            alr = true
            if (previous == ')' && fator1[0] != '(' && fator1[0] != '?') {
                //console.log('Looks like we have an issue')
                alr = false
            }

            daprafator1 = false 
            if (fator1[1] == 1 && fator1[2] == 0) { 
            daprafator1 = true
            }
           chain.push(daprafator1)
          
           lastfat = ''
            if (varnot == 0) {
              if (start != 0) {
                  for (c = 0; c < start;c++) {
                      //rexp+= okexp[c]
                      lastfat+= okexp[c]
                  }}}else{
              for (kl = Number(seps[Number(varnot)- 1].close) + 1; kl < start; kl++) {
                 // rexp+= okexp[kl]
                  lastfat+= okexp[kl]
              }}
           
              ////console.log('lastfat',lastfat)
              if (daprafator1 == true) {
                  muf = lastfat.replace(new RegExp('[\\+\\- ]','g'),'')
                  if (muf != '' && fator1[0][0] != '(') {
                   ////console.log('lastat válido',muf)
                        ////console.log('TEMOS UM PROBLEMA')
                        strd = ''
                        for (ni = 0; fator1[0][ni] != '('; ni++) {
                            strd+= fator1[0][ni]
                        }
                        ////console.log('primeiro',strd)
                        strm = ''
                        while (ni != fator1[0].length) {
                            strm+= fator1[0][ni]
                            ni++
                        }
                        ////console.log('segundo',strm)
                        v1 = REFORMATAR(redo(muf))
                        v2 = REFORMATAR(redo(strd))
                        mult = desfat(REFORMATAR(MULTIPLICARDIREITO(v1,v2)))
                        ////console.log(v1,v2, mult)
                        rexp+= mult
                        rexp+= strm
                  }else{
                    rexp+= lastfat
                    rexp+= fator1[0]
                  }
              }else{
                  rexp+= lastfat
                  rexp+= '(' + expin + ')'
              }
              //console.log('rexp',rexp)
              if (varnot == seps.length - 1) {
                  if (end != okexp.length - 1) {
                      for (c = Number(end) + 1; c < okexp.length;c++) {
                          rexp+= okexp[c]
                      }}}}

           okexp = rexp
           if (chain.indexOf(true) == -1) {
              plo = true
              }}}*/
          
              if (alt == 1) {
                vari = fat1
              }else{
                vari = fat2
              }
              return [
                okexp,
                vari[1],
                vari[2],
                vari[3],
                vari[4],
                vari[5],
                vari[6],
                vari[7],
                vari[8],
                vari[9],
                vari[10],
                vari[11],
              ]
            }

        function doMiss_2() {
            to = []
        for (eep in miss_2) { // miss_2[eep] = *Eg.: {dividido: '2*3x', aparicoes: [1,2], divisor: ['2','.','2']}
            ////console.log('-------------------------------------')
            ////console.log(`miss_2[${eep}]`,miss_2[eep].dividido,miss_2[eep].aparicoes)
            varib = []
            aparics = []
            moremiss = []
            pino = false
            
            for (kel in miss_2[eep].aparicoes) { // miss_2[eep].aparicoes = *[1,2], miss_2[eep].aparicoes[kel] = *1
                pos = miss_2[eep].aparicoes[kel] // *1

                ////console.log('=>',pos)
                ////console.log(scarecrow_2[pos].divididos,miss_2[eep].dividido)
                ////console.log(scarecrow_2[pos].positions)
                if (aparics.find(function(aparics) {return aparics.posac == miss_2[eep].aparicoes[kel]}) == undefined) {
                aparics.push({mono: [scarecrow_2[pos].positions[scarecrow_2[pos].divididos.indexOf(miss_2[eep].dividido)]],posac:pos})
                varib.push(scarecrow_2[pos].positions[scarecrow_2[pos].divididos.indexOf(miss_2[eep].dividido)]) 
                iten = scarecrow_2[pos].positions[scarecrow_2[pos].divididos.indexOf(miss_2[eep].dividido)]
                }else{
                    mio = aparics.find(function(aparics) {return aparics.posac == miss_2[eep].aparicoes[kel]}).mono
                    ////console.log('oOOOOOOOOOOOOPSSSSSSSS',mio)
                    on = false
                    for (kno = 0; kno < scarecrow_2[pos].divididos.length && on == false; kno++) {
                        ////console.log(scarecrow_2[pos].divididos[kno],scarecrow_2[pos].positions[kno],mio.indexOf(scarecrow_2[pos].positions[kno]))
                        ////console.log(miss_2[eep].dividido == scarecrow_2[pos].divididos[kno])
                        if (mio.indexOf(scarecrow_2[pos].positions[kno]) == -1 && miss_2[eep].dividido == scarecrow_2[pos].divididos[kno]) {
                            ////console.log('pode pushar')
                            on = true
                            mio.push(scarecrow_2[pos].positions[kno])
                            varib.push(scarecrow_2[pos].positions[kno])
                            iten = scarecrow_2[pos].positions[kno]
                        } }}

                        if (moremiss.length == 0) {
                            moremiss.push({dividido: miss_2[eep].dividido, aparicoes: [pos], mons: [iten]})
                        }else{
                            deu = false
                            for (mind = 0; mind < moremiss.length && deu == false; mind++) {
                                ////console.log(moremiss[mind],moremiss[mind].aparicoes)
                                if (moremiss[mind].aparicoes.indexOf(pos) == -1) {
                                    moremiss[mind].aparicoes.push(pos)
                                    moremiss[mind].mons.push(iten)
                                    deu = true
                                }
                            }
                            if (deu == false) {
                                ////console.log('WE GOT A PROBLEM HERE')
                                moremiss.push({dividido: miss_2[eep].dividido, aparicoes: [pos], mons: [iten]})
                                pino = true
                            } }}
            if (pino == true) {
           moremiss.push({dividido: miss_2[eep].dividido, aparicoes: miss_2[eep].aparicoes, mons:varib})
            }
            ////console.log('monomios:',varib,aparics,moremiss)
            miss_2[eep].mons = varib
            for (keyi in moremiss) {
                to.push(moremiss[keyi])
            }
        }
        ////console.log('MOREMISSSSSSSSSSSSSS',to)
        miss_2 = to
    }
        function doRoll_2(somarmons) {
            ////console.log(miss_2)
            allrels = []
            for (eep in miss_2) { // miss_2[eep] = *Eg.: {dividido: '2*3x', aparicoes: [1,2], divisor: ['2','.','2']}
                //console.log('-------------------------------------')
                varib = [...miss_2[eep].mons]
                
                rel = []
                if (somarmons == false)
                ////console.log('monomios:',varib,aparics)
                ////console.log('')
                  for (quad in miss_2) { // miss_2[quad] = *Eg.: {dividido: '5y', aparicoes: [1,2], divisor: ['3','.','x']}
                    if (quad != eep) { // Se o miss[quad] for diferente do miss[eep]
                        if (somarmons == false) {
                        //console.log('') 
                            //console.log(`miss_2[${eep}]`,miss_2[eep].dividido,miss_2[eep].aparicoes)
                            //console.log('monomios',varib)
                        //console.log(`c miss_2[${quad}]`,miss_2[quad].dividido,miss_2[quad].aparicoes)
                        }
                        compar = []
                      varib2 = [...miss_2[quad].mons]
                      mispar = [...miss_2[quad].aparicoes]

                    if (somarmons == false)
                    //console.log('monomios:',varib2)
                      repeated = [];
                      repwri = "";
                      semels = 0
                      for (vespa in miss_2[eep].aparicoes) { // *miss_2[eep].aparicoes = [1,2], *miss_2[eep].aparicoes[0] = 1
                        //console.log(vespa, miss_2[eep].aparicoes[vespa])
                        if (compar.indexOf(varib[vespa]) == -1) { // *compar.indexOf(varib[0]/1)
                        compar.push(varib[vespa]) // *varib[0] = 1
                        //console.log('compar',compar)

                        ton = miss_2[eep].aparicoes[vespa]
                        //tonpos = mispar.indexOf(ton)
                        proceed = true
                        for (jk = 0; jk < mispar.length && proceed == true; jk++) {
                            if (mispar[jk] == ton && compar.indexOf(varib2[jk]) == -1) {
                                tonpos = jk
                                proceed = false
                            } }
                        if (proceed == true) {
                            tonpos = -1
                        }
                        if (tonpos != -1) {// *[1,2].indexOf(1) != -1 && compar.indexOf(varib_2[0]/2) == -1
                            //console.log('ok, pode pushar')
                            semels++
                          compar.push(varib2[tonpos]) // compar.push(varib2[0]/2)
                          //console.log('compar',compar)
                            
                            repeated.push(ton); // *repeated.push(miss_2[eep].aparicoes[0]) (1)
                          repwri += "," + ton; // *,1
                          //console.log(varib2,'monomio sendo comparado')
                          mispar[tonpos] = -1
                          varib2[tonpos] = -1
                          mons1 = []
        
                          pos1 = eep
                          pi = 0
                          for (photo = 0; photo < Number(repwri.length)/2;photo+=1) { // *,1,2,3,4
                            if (compar[pi] != undefined) {
                              mons1.push(compar[pi])
                              pi+= 2
                            }} 
                          // *mons1 = [1,3]
        
                          pos2 = quad
                          mons2 = []
                          pi = 1
                          for (photo = 0; photo < Number(repwri.length)/2;photo+=1) { // *,1,2,3,4
                            if (compar[pi] != undefined) {
                              mons2.push(compar[pi])
                              pi+= 2
                            }} 
                          // *mons2 = [2,4]
        
                          if (roller_2.find(function (roller_2) { return roller_2.rept == repwri;}) == undefined) { // Se não tiver no roller_2
                            console.log('pushar novo:',{
                                rept: repwri, // *,1,2
                                opl: [...repeated], // *[1,2]
                                factor: [miss_2[eep].dividido,miss_2[quad].dividido],
                                position: [eep, quad], // 0,1
                                monomios: [...compar], // [1,2,3,4]
                                monosplit: [{misspos: eep,mons: mons1},{misspos: quad, mons: mons2}]
                              })
                               roller_2.push({
                              rept: repwri, // *,1,2
                              opl: [...repeated], // *[1,2]
                              factor: [miss_2[eep].dividido,miss_2[quad].dividido],
                              position: [eep, quad], // 0,1
                              monomios: [...compar], // [1,2,3,4]
                              monosplit: [{misspos: eep,mons: mons1},{misspos: quad, mons: mons2}]
                            });
                          }else{ // Se já tiver no roller_2
                            func = roller_2.find(function (roller_2) { return roller_2.rept == repwri;})
                            //console.log('já tem:',func)
                            //console.log(mons1,mons2)
                            perm = true
                            for (sept in mons1) { // *mons1 = [1,3], *mons1[0] = 1
                                if (func.monomios.indexOf(mons1[sept]) != -1) { //*[0,1,2].indexOf(1) != -1
                                   perm = false 
                                }}
                            if (perm == true) {
                                func.position.push(pos1) // pos1 = eep
                                func.factor.push(miss_2[Number(pos1)].dividido)
                                func.monosplit.push({misspos: eep,mons: mons1})
                                for (wake in mons1) { // *mons1[0] = 1
                                func.monomios.push(mons1[wake])
                                } }
                            perm = true
                            for (sept in mons2) { // *mons2 = [2,4], *mons1[0] = 2
                                if (func.monomios.indexOf(mons2[sept]) != -1) { //*[0,1,2].indexOf(2) != -1
                                   perm = false 
                                }}
                            if (perm == true) {
                                func.position.push(pos2) // pos2 = quad
                                func.factor.push(miss_2[Number(pos2)].dividido)
                                func.monosplit.push({misspos: quad,mons: mons2})
                                for (wake in mons2) { // *mons1[0] = 1
                                func.monomios.push(mons2[wake])
                                }}}
                        }else{ // miss_2[quad].aparicoes.indexOf(1) == -1 || compar.indexOf(varib2[0]) != -1
                                compar.splice(compar.length - 1,1)
                                //console.log('compar',compar)
                            } }}
                            //console.log(rel)
                            if (semels > 0)
                            rel.push({m: quad, sems:semels, apars: [...miss_2[quad].aparicoes], mons: [...miss_2[quad].mons]})
                            ////console.log('MONS1 =========>',mons1)
                            ////console.log('MONS2 =========>',mons2)
                        }}
                        allrels.push(rel)
                    }
                
                    for (ceia in allrels) {  // allrels = [Array(n1),Array(n2)...]
                        //console.log(allrels[ceia])
                        grtols_2 = []
                        for (hi in allrels[ceia]) {
                            allrels[ceia][hi].length = allrels[ceia][hi].sems
                            grtols_2.push(allrels[ceia][hi])
                        }
                        organizado = sortob(grtols_2, 'length')[1]
                        
                        grtols_2 = []
                        for (ah in organizado) {
                            grtols_2.push(allrels[ceia][organizado[ah]])
                        }
                        allrels[ceia] = [...grtols_2]
                        nok = allrels[ceia] // nok = [{...},{...},{...}...]

                        compar = []
                      
                        for (mel = nok.length; mel > 1; mel--) {
                            //console.log(mel)
                            //console.log('----')
                            compar = []
                            quaispar = []
                            eachmons = [{misspos: ceia, mons: []}]
                            for (ko in miss_2[ceia].aparicoes) {
                                quepar = miss_2[ceia].aparicoes[ko]
                                //console.log('quepar',quepar)
                                cancom = true
                                fcompar = [miss_2[ceia].mons[ko]]
        
                            for (dex = 0; dex < mel; dex++) {
                                //console.log(nok[dex], nok[dex].m, nok[dex].apars) 
                                // nok[dex] = *{m: '1', sems: 2, apars: [0,2], mons: [1,5]}
                                // m = index no miss_2/ sems = aparicões em comum/ apars = todas as aparições no scarecrow_2/ mons = monômios correspondentes no scarecrow_2
                                proceed = true
                                //
                                //console.log('+++')
                                for (jk = 0; jk < nok[dex].apars.length && proceed == true; jk++) {
                                    //console.log('apar:',nok[dex].apars[jk],'mons:', nok[dex].mons[jk])
                                    if (nok[dex].apars[jk] == quepar && compar.indexOf(nok[dex].mons[jk]) == -1) {
                                        //console.log('--igual--')
                                        tonpos = jk
                                        proceed = false
                                    } 
                                }
                                //console.log('+++')
                                if (proceed == true) {
                                  cancom = false
                                }else{
                                    fcompar.push(nok[dex].mons[tonpos])
                                }
                                //console.log('can add to compar?',cancom)
                                //console.log('fcompar',fcompar)
                                //
                            }
                            if (cancom == true) {
                                //console.log('OK!!!! PODE PUSHAR!!')
                                for (nel in fcompar) {
                                    compar.push(fcompar[nel])
                                    if (nel == 0) {
                                        //console.log(`mon do miss_2[${ceia}]`,miss_2[ceia].mons[ko])
                                        eachmons[0].mons.push(miss_2[ceia].mons[ko])
                                    }else{
                                        //console.log(`nok[${nel - 1}].m`,nok[nel - 1].m,fcompar[nel])
                                        if (eachmons.find(function(eachmons){
                                            return eachmons.misspos == nok[nel - 1].m
                                        }) == undefined) {
                                            eachmons.push({misspos: nok[nel - 1].m, mons: [fcompar[nel]]})
                                        }else{
                                            eachmons.find(function(eachmons){
                                                return eachmons.misspos == nok[nel - 1].m
                                            }).mons.push(fcompar[nel])
                                        }
                                    }
                                }
                                
                                quaispar.push(quepar)
                            }
                          //console.log('>> QUAISPAR <<',quaispar, '>> COMPAR <<',compar, '>> EACHMONS <<', eachmons)
                          reptpar = ''
                          for (cobli in quaispar) {
                            reptpar += `,${quaispar[cobli]}`
                          }
                          //console.log(reptpar)
                          noks = [ceia]
                          fats = [miss_2[ceia].dividido]
                          for (ruim in nok) {
                            //console.log('nok[ruim].m',nok[ruim].m,'fats',miss_2[nok[ruim].m].dividido)
                            noks.push(nok[ruim].m)
                            fats.push(miss_2[nok[ruim].m].dividido)
                          }
                          //console.log('noks',noks,'fats',fats)
                         if (cancom == true) {
                        //roller_2.push({factor: [...fats], monomios: [...compar], monosplit: [...eachmons], opl: [...quaispar], position: [...noks], rept: reptpar})
                          }
                        } 
                            //console.log('----')
                     } 
                    }
             for (r in roller_2) { // Transferindo o roller_2 para o roll_2
                 roll_2.push({repetidos: roller_2[r].opl, factor: roller_2[r].factor, posições: roller_2[r].position, way: roller_2[r].rept, monomios: roller_2[r].monomios, monosplit: roller_2[r].monosplit})
                 // repetidos - opl, posições - position, way: rept
             } }

            function sortob(n, pam) {
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
                            if (yposition[item][pam] > maiorparamenor[volume]) {
                                var itens = yposition.length - (Number(volume) + 1)
                                var leng = yposition.length
                                for (c = 0; c < itens; c++) {
                                    maiorparamenor[Number(leng) - 1] = maiorparamenor[Number(leng) - 2]
                                    posiçõesnumeros[Number(leng) - 1] = posiçõesnumeros[Number(leng) - 2]
                                    leng--
                                }
                                maiorparamenor[volume] = yposition[item][pam]
                                posiçõesnumeros[volume] = Number(item)
                                dn = 10
                            } } }}
                return [maiorparamenor, posiçõesnumeros]
             }

        function get1(thist) {
            return document.getElementById(thist)
        }

        function get2(thist) {
            return document.getElementsByClassName(thist)
        }

        function redo(point) {
            point = FATORE(point)
            for (y in point) {
              if (point[y] == "^") {
                ad = point[Number(y) - 1];
                for (h = 0; h < Number(point[Number(y) + 1]) - 1; h++) {
                  point[Number(y) - 1] += ad;
                }
                point.splice(Number(y) + 1, 1);
                point.splice(y, 1);
              } }

              for (was in point) {
                if (point[was].search('[0-9]') != -1) {
                    if (ehprimo(point[was]) == false) {
                    point[was] = FATORARSInGULAR(point[was])
                    }}}
              fires = ''
              for (was in point) {
                fires+= point[was]
              }
              return fires
            }

            function sortWords(palavrasPrimitivas) {
                alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
                palavrasNumericas = []
                posicaoPalavras = []
                for (palavra in palavrasPrimitivas) {
                    word = palavrasPrimitivas[palavra]
                    wordToNumber = ''
                    for (letra = 0; letra < word.length; letra++) {
                        if (letra != word.length - 1) {
                            wordToNumber += `${alfabeto.indexOf(word[letra])}.`
                        } else {
                            wordToNumber += `${alfabeto.indexOf(word[letra])}`
                        } }
                    palavrasNumericas.push(wordToNumber)
                    posicaoPalavras.push(palavra)
                }
                for (pNumber in palavrasNumericas) {
                    stop = false
                    for (n = 0; stop == false && n < pNumber; n++) {
                        if (n != pNumber) {
                            palavraAnalisar = []
                            numint = ''
                            for (num = 0; num < palavrasNumericas[n].length; num++) {
                                   if (palavrasNumericas[n][num] == '.') {
                                    palavraAnalisar.push(numint)
                                    numint = ''
                                   }else if(num == palavrasNumericas[n].length - 1){
                                        numint += `${palavrasNumericas[n][num]}`
                                        palavraAnalisar.push(numint)
                                   }else{
                                    numint += `${palavrasNumericas[n][num]}`
                                   }}
                            palavraOrigin = []
                            numint = ''
                            for (num = 0; num < palavrasNumericas[pNumber].length; num++) {
                                   if (palavrasNumericas[pNumber][num] == '.') {
                                    palavraOrigin.push(numint)
                                    numint = ''
                                   }else if(num == palavrasNumericas[pNumber].length - 1){
                                        numint += `${palavrasNumericas[pNumber][num]}`
                                        palavraOrigin.push(numint)
                                   }else{
                                    numint += `${palavrasNumericas[pNumber][num]}`
                                   } }
                           if (palavraOrigin.length > palavraAnalisar.length) {
                             pare = false
                             for (numb = 0; numb < palavraAnalisar.length && pare == false; numb++) {
                              if (Number(palavraAnalisar[numb]) < Number(palavraOrigin[numb])) {
                                pare = true
                              }else if (Number(palavraAnalisar[numb]) > Number(palavraOrigin[numb])) {
                                pare = true
                                stop = true
                                palavraSubir = palavrasNumericas[pNumber]
                                wordposition = posicaoPalavras[pNumber]
                                for (posicao = pNumber; posicao > n; posicao--) {
                                  palavrasNumericas[posicao] = palavrasNumericas[posicao - 1]
                                  posicaoPalavras[posicao] = posicaoPalavras[posicao - 1]
                                }
                                palavrasNumericas[n] = palavraSubir
                                posicaoPalavras[n] = wordposition
                              }else{
                                  pare = false
                              }}
                           }else{
                            pare = false
                            for (numb = 0; numb < palavraOrigin.length && pare == false; numb++) {
                                if (Number(palavraAnalisar[numb]) < Number(palavraOrigin[numb])) {
                                    pare = true
                                  }else if (Number(palavraAnalisar[numb]) > Number(palavraOrigin[numb])) {
                                    pare = true
                                    stop = true
                                    palavraSubir = palavrasNumericas[pNumber]
                                    wordposition = posicaoPalavras[pNumber]
                                    for (posicao = pNumber; posicao > n; posicao--) {
                                      palavrasNumericas[posicao] = palavrasNumericas[posicao - 1]
                                      posicaoPalavras[posicao] = posicaoPalavras[posicao - 1]
                                    }
                                    palavrasNumericas[n] = palavraSubir
                                    posicaoPalavras[n] = wordposition
                                  }else{
                                      pare = false
                                  }}}}}}
                newlista = []
                for (p in palavrasNumericas) {
                newlista.push(palavrasPrimitivas[posicaoPalavras[p]])
                }
                return newlista
                }

                function MULTIPLICARDIREITO(num1, num2) {
                    if (String(num1).replace(new RegExp('(-|\\+)'),'') == '1' || String(num2).replace(new RegExp('(-|\\+)'),'') == '1') {
                        //console.log('yes')
                        n1 = ''
                        n2 = ''
                        if (String(num1).replace(new RegExp('(-|\\+)'),'') == '1') {
                            n1 = num1
                            n2 = num2
                        }else{
                            n1 = num2
                            n2 = num1
                        }
                            if (n1[0] != '-') {
                            resultmult = String(n2).replace(new RegExp('\\+'),'')
                            }else{
                                if (n2[0] != '-') {
                                    resultmult = '-' + String(n2).replace(new RegExp('\\+'),'')
                                }else{
                                    resultmult = String(n2).replace(new RegExp('-'),'')
                                }}
                    }else{
                        sónumero = ''
                        sóletra = ''
                        for (car in num1) {
                            if (num1[car].search('[0-9]') != -1 || num1[car] == '*') {
                                sónumero += num1[car]
                            }else if(num1[car].search('[a-z]') != -1) {
                                sóletra += num1[car]
                            } }
                        sónumero2 = ''
                        sóletra2 = ''
                        for (car in num2) {
                            if (num2[car].search('[0-9]') != -1 || num2[car] == '*') {
                                sónumero2 += num2[car]
                            }else if(num2[car].search('[a-z]') != -1){
                                sóletra2 += num2[car]
                            } }
                        if (sónumero.length > 0 && sónumero2.length > 0) {
                            sónumero+= '*'
                        }
                        if (num1[0] == '-') {
                            sinal1 = 'neg'
                        }else{
                            sinal1 = 'pos'
                        }
                        if (num2[0] == '-') {
                            sinal2 = 'neg'
                        }else{
                            sinal2 = 'pos'
                        }
                        sónumero+= sónumero2
                            sóletra+= sóletra2
                            if (sinal1 == sinal2) {
                                resultmult = sónumero+= sóletra
                            }else{
                                resultmult = '-'
                                resultmult += sónumero+= sóletra
                            }}
                    return resultmult
                    }