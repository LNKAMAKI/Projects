
loaded = false

    function load() {
        get1('resol').innerHTML = ''

        get1('resol').innerHTML+= ' <div class="center" id="nopad"> <img src="/projects/imagens/rar.png" alt="" class="ar"><span>Resolução</span> </div> <div class="cont"><div class="center"  classname="top"><img src="/projects/imagens/rar.png" alt="" class="ar"><span>Engine</span></div><p></p></div><div class="cont"> <div class="center"  classname="top"> <img src="/projects/imagens/rar.png" alt="" class="ar"> <span> Passo a passo</span></div><p></p></div>'
        conts = get2('cont')
        cents = get2('center')
        ars = get2('ar')
        cs = []

        
        for (i = 0; i < ars.length; i++) {
            //console.log(i, ars[i], conts[i], cents[i])
            c = new CreateFunc(i,'close')
            c.SetDefault()
            c.AddEvent()
            cs.push(c)
            //console.log(Number(ars.length) - 1, i)
            if (i != Number(ars.length) - 1) {
                //console.log('ok')
               //conts[i].style.marginBottom = '40px'
            } }

        loaded = true
        get1('write').addEventListener('keyup',(event) => {
            if (event.key == 'Enter') {
            type = get1('write').value
            //console.log('type',type)
            //console.log(type)
            res = doTheFactoring(type)
            get1('fatoracao').value = res[0]
            //console.log(res[5],res[6],res[7],res[8],res[9],res[10],res[11])
         }
        
        get1('resol').innerHTML = ''

        smons = ''
        for (yo in res[10]) {
            smons += `<span class="jo"><span class="str">'${desfat(res[10][yo].numero)}'</span><span class="num">${yo}</span></span>`
        }

get1('resol').innerHTML+= ` <div class="center" id="nopad"> <img src="/projects/imagens/rar.png" alt="" class="ar"><span>Resolução</span> </div>

<div style="padding: 3px;background-color: white;border-radius: 7px;overflow: hidden;">
<div class="cont">
<div class="center" classname="top"><img src="/projects/imagens/rar.png" alt="" class="ar">
<span>Engine</span>
</div>

<p id="mons">${smons}</p>

<div class="cram">
<div class="cont" name="ti"><div class="center" classname="top"><img src="/projects/imagens/rar.png" class="ar"><span style="max-width:calc(100% - 50px);overflow-x:auto;">Relações</span><img src="/projects/imagens/rar.png" class="pers" style="transform:rotate(90deg);right:30px;" onclick="fn(0,'open')"><img src="/projects/imagens/rar.png" class="pers" onclick="fn(0,'close')"></div></div>
<div class="cont" name="ti"><div class="center"  classname="top"><img src="/projects/imagens/rar.png" alt="" class="ar"><span>Repetições</span><img src="/projects/imagens/rar.png" class="pers" style="transform:rotate(90deg);right:30px;" onclick="fn(1,'open')"><img src="/projects/imagens/rar.png" class="pers" onclick="fn(1,'close')"></div></div>
</div>

<div class="cram">
<div class="cont" name="ti"><div class="center"  classname="top"><img src="/projects/imagens/rar.png" alt="" class="ar"><span>Combinações</span><img src="/projects/imagens/rar.png" class="pers" style="transform:rotate(90deg);right:30px;" onclick="fn(2,'open')"><img src="/projects/imagens/rar.png" class="pers" onclick="fn(2,'close')"></div></div>
<div class="cont" name="ti"><div class="center"  classname="top"><img src="/projects/imagens/rar.png" alt="" class="ar"><span>Agrupamentos</span><img src="/projects/imagens/rar.png" class="pers" style="transform:rotate(90deg);right:30px;" onclick="fn(3,'open')"><img src="/projects/imagens/rar.png" class="pers" onclick="fn(3,'close')"></div></div>
</div>
</div>

<div class="cont"> <div class="center"  classname="top"> <img src="/projects/imagens/rar.png" alt="" class="ar"> <span> Passo a passo</span></div><p></p></div>

</div>`
        conts = get2('cont')
        cents = get2('center')
        ars = get2('ar')
        cs = []
        ts = document.getElementsByName('ti')
        cn = ts[0]

        cn.innerHTML+= '<div class="dev"></div>'

        pl1 = []
        hyu = 2
        for (h in res[5]) {
            //console.log(h)
            carfixed = res[5][h].car.replace('-.','-').replace(new RegExp('\\.','g'),'*').replace(new RegExp('\\*(?=[a-z])'),'')
            carfixed2 = res[5][h].car.replace('-.','-').replace(new RegExp('\\.(?=[a-z])'),'')
            spn = ''
            spn2 = ''
            splitspn = ''
            splitspn2 = ''
            for(k in res[5][h].mons) {
                if (k != res[5][h].mons.length - 1) {
                    spn+= `<span class="af">
                    <span style="color:var(--number)">${res[5][h].mons[k]}</span>:<span style="color:var(--string);position:relative;" class="abs">'${desfat(REFORMATAR(res[6][h].divididos[k]))}'</span>,</span>`
                    //spn2+= `<span><span style="color:var(--string)">'${desfat(REFORMATAR(res[6][h].divididos[k]))}</span>',</span>`
                }else{
                    spn+= `<span class="af">
                    <span style="color:var(--number)">${res[5][h].mons[k]}</span>:<span style="color:var(--string)" class="abs">'${desfat(REFORMATAR(res[6][h].divididos[k]))}'</span></span>`
                    //spn2+= `<span><span style="color:var(--string)">'${desfat(REFORMATAR(res[6][h].divididos[k]))}'</span></span>`
                }
                splitspn+= ` <p class="psem">
                <span style="overflow-x:scroll;display:inline-block;"><span style="color:var(--number)">${k}</span>: <span style="color:var(--number)">${res[5][h].mons[k]}</span>  <span style="color:var(--string)">'${desfat(REFORMATAR(res[6][h].divididos[k]))}'</span> </span> </p>`

                //splitspn2+= ` <p class="psem"><span style="overflow-x:scroll;display:inline-block;"><span style="color:var(--number)">${k}</span>: <span style="color:var(--string)">'${desfat(REFORMATAR(res[6][h].divididos[k]))}'</span></span> </p>`
            }

            for (ju = 0; ju <2;ju++) {
                hyu++
                pl1.push(hyu)
                }

            dg = desfat(REFORMATAR(carfixed))
        cn.getElementsByClassName('dev')[0].innerHTML+= `
        <div class="cont"> 

        <div class="center">
        <img src="/projects/imagens/rar.png" alt="" class="ar">
        <span class='sp'> <span style="color:var(--number)">${h}</span>: {car: <span style="color:var(--string)">'${dg}'</span>, mons: Array(${res[5][h].mons.length})}
        </span>
        </div> 

        <div class="tocent"> 
        <p class="pdev">car: 
        <span style="color:var(--string);position:relative;padding:10px;">
        '${carfixed2}'
        <span class="som">i</span>
        </span>
        </p>

        <div class="cont"> 
        <div class="center" style="overflow-x: hidden;">
        <img src="/projects/imagens/rar.png" alt="" class="ar">
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
            splitspn = ''
            for(k in res[7][h].aparicoes) {
                if (k != res[7][h].aparicoes.length - 1) {
                    spn+= `<span>
                    <span style="color:var(--number)">${res[7][h].aparicoes[k]}</span>,</span>`
                }else{
                    spn+= `<span><span style="color:var(--number)">${res[7][h].aparicoes[k]}</span></span>`
                }
                splitspn+= ` <p class="psem"><span style="overflow-x:scroll;display:inline-block;"><span style="color:var(--number)">${k}</span>: <span style="color:var(--number)">${res[7][h].aparicoes[k]}</span></p>`
            }

            for (ju = 0; ju <2;ju++) {
                hyu++
                pl2.push(hyu)
                }

        cn2.getElementsByClassName('dev')[0].innerHTML+= `
        <div class="cont">
        <div class="center">
        <img src="/projects/imagens/rar.png" alt="" class="ar">
        <span class="sp">
        <span style="color:var(--number)">${h}</span>: {fator: <span style="color:var(--string)">'${desfat(REFORMATAR(res[7][h].dividido))}'</span>, aparições: Array(${res[7][h].aparicoes.length})}
        </span>
        </div>

        <div class="tocent"> 
        <p class="pdev">fator: <span style="color:var(--string)">'${res[7][h].dividido.replace(new RegExp('\\*','g'),'.')}'</span></p>

        <div class="cont"> 
        <div class="center">
        <img src="/projects/imagens/rar.png" alt="" class="ar">
        <span style="font-size:0.9em">aparicoes: [</span><span class="sp" style="overflow-x:scroll;">${spn}</span><span style="font-size:0.9em">]</span>
        </div> 
       ${splitspn}
        </div>
        </div>

        </div>`
        }

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
                splitspn+= ` <p class="psem"><span style="overflow-x:scroll;display:inline-block;"><span style="color:var(--number)">${k}</span>: <span style="color:var(--number)">${res[8][h].repetidos[k]}</span></p>`
            }

            spn2 = ''
            splitspn2 = ''
            for(k in res[8][h].posições) {
                if (k != res[8][h].posições.length - 1) {
                    spn2+= `<span><span style="color:var(--string)">'${desfat(REFORMATAR(res[7][res[8][h].posições[k]].dividido))}'</span>,</span>`
                }else{
                    spn2+= `<span><span style="color:var(--string)">'${desfat(REFORMATAR(res[7][res[8][h].posições[k]].dividido))}'</span></span>`
                }
                splitspn2+= ` <p class="psem"><span style="overflow-x:scroll;display:inline-block;"><span style="color:var(--number)">${k}</span>: <span style="color:var(--string)">'${desfat(REFORMATAR(res[7][res[8][h].posições[k]].dividido))}'</span></p>`
            }

            for (ju = 0; ju <3;ju++) {
            hyu++
            pl3.push(hyu)
            }

        cn3.getElementsByClassName('dev')[0].innerHTML+= `
        <div class="cont">
        <div class="center">
        <img src="/projects/imagens/rar.png" alt="" class="ar">
        <span class="sp">
        <span style="color:var(--number)">${h}</span>: {posições: Array(${res[8][h].repetidos.length}), fatores: Array(${res[8][h].posições.length}), monomios: Array(${res[8][h].monomios.length})
        </span>
        </div>

        <div class="tocent"> 

        <div class="cont"> 
        <div class="center">
        <img src="/projects/imagens/rar.png" alt="" class="ar">
        <span style="font-size:0.9em">posições: [</span><span class="sp" style="overflow-x:scroll;">${spn}</span><span style="font-size:0.9em">]</span>
        </div> 
       ${splitspn}
        </div>

        <div class="cont"> 
        <div class="center">
        <img src="/projects/imagens/rar.png" alt="" class="ar">
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
                   //spn+= '['
                   spi = ''
                    for (lik in res[9][h].w.what[k].ar) {
                        //console.log(lik,'adwadaadasdasads')
                        if (lik != res[9][h].w.what[k].ar.length - 1) {
                        //spn+= `<span><span style="color:var(--string)">'${desfat(res[10][res[9][h].w.what[k].ar[lik]].numero)}'</span>,</span>`
                        spi+= `<span><span style="color:var(--string)">'${desfat(res[10][res[9][h].w.what[k].ar[lik]].numero)}'</span>,</span>`
                        }else{
                            //spn+= `<span><span style="color:var(--string)">'${desfat(res[10][res[9][h].w.what[k].ar[lik]].numero)}'</span></span>` 
                            spi+= `<span><span style="color:var(--string)">'${desfat(res[10][res[9][h].w.what[k].ar[lik]].numero)}'</span></span>`
                        }
                    }
                    //spn+= ']'
                splitspn+= ` <p class="psem"><span style="overflow-x:scroll;display:inline-block;"><span style="color:var(--number)">${k}</span>: [${spi}]</p>`
                spn+= `[<span class="sp" style="min-width:30px;">${spi}</span>]`
            }

            for (ju = 0; ju <2;ju++) {
                hyu++
                pl4.push(hyu)
                }

        cn4.getElementsByClassName('dev')[0].innerHTML+= `
        <div class="cont">
        <div class="center">
        <img src="/projects/imagens/rar.png" alt="" class="ar">
        <span class="sp">
        <span style="color:var(--number)">${h}</span>: {mons: Array(${res[9][h].mons.length}), grupos: Array(${res[9][h].w.what.length})
        </span>
        </div>

        <div class="tocent" style="margin-bottom:0px;"> 

        <div class="cont"> 
        <div class="center">
        <img src="/projects/imagens/rar.png" alt="" class="ar">
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
               console.log(don.innerText, kep)
               feb.push(Number(kep))
            }
        }

        mecams = []
        late = 1
        me = document.getElementsByClassName('ar')
        c = new CreateFunc(0,'close')
                c.SetDefault()
                c.AddEvent()
                cs.push(c)

        c = new CreateFunc(1,'close')
            c.SetDefault()
            c.AddEvent()
            cs.push(c)

            hgts = []
            for (tp in feb) {
                is = feb[tp]
                console.log(is)
                c = new CreateFunc(is,'close',8)
                c.SetDefault()
                c.AddEvent()
                cs.push(c)
            }

            plar = []
            for(pare in pl1) {
                is = pl1[pare]
                c = new CreateFunc(is,'close',8)
                console.log('----++++----+++----+++----',is)
                c.SetDefault()
                c.AddEvent()
                plar.push(c)
            }
            for(pare in pl2) {
                is = pl2[pare]
                c = new CreateFunc(is,'close',8)
                console.log('----++++----+++----+++----',is)
                c.SetDefault()
                c.AddEvent()
                plar.push(c)
            }
            for(pare in pl3) {
                is = pl3[pare]
                c = new CreateFunc(is,'close',8)
                console.log('----++++----+++----+++----',is)
                c.SetDefault()
                c.AddEvent()
                plar.push(c)
            }
            for(pare in pl4) {
                is = pl4[pare]
                c = new CreateFunc(is,'close',8)
                console.log('----++++----+++----+++----',is)
                c.SetDefault()
                c.AddEvent()
                plar.push(c)
            }

            c = new CreateFunc(pl4[pl4.length - 1] + 1,'close')
            c.SetDefault()
            c.AddEvent()
            cs.push(c)
        }) }
           
    function fn(a,act) {
        console.log('aaa',a,act)
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
        //console.log(sur)
        for (go = sur.length - 1; go >= 0; go--) {
            //console.log(conts[sur[go]])
            conts[sur[go]].parentNode.removeChild(conts[sur[go]])
        }

        conts = get2('cont')
        cents = get2('center')
        ars = get2('ar')
        ts = document.getElementsByName('ti')

        if (cas == 0) {
        cn = ts[0]
        for (h in res[5]) {
            carfixed = res[5][h].car.replace('-.','-').replace(new RegExp('\\.','g'),'*').replace(new RegExp('\\*(?=[a-z])'),'')
            carfixed2 = res[5][h].car.replace('-.','-').replace(new RegExp('\\.(?=[a-z])'),'')
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
                splitspn+= ` <p class="psem"><span style="overflow-x:scroll;display:inline-block;"><span style="color:var(--number)">${k}</span>: <span style="color:var(--number)">${res[5][h].mons[k]}</span>  <span style="color:var(--string)">'${desfat(REFORMATAR(res[6][h].divididos[k]))}'</span> </span> </p>`
            }
            dg = desfat(REFORMATAR(carfixed))
        cn.getElementsByClassName('dev')[0].innerHTML+= `
        <div class="cont"> <div class="center"><img src="/projects/imagens/rar.png" alt="" class="ar"><span class='sp'> <span style="color:var(--number)">${h}</span>: {car: <span style="color:var(--string)">'${dg}'</span>, mons: Array(${res[5][h].mons.length})}</span></div> <div class="tocent"> <p class="pdev">car: <span style="color:var(--string)">'${carfixed2}'</span></p><div class="cont"> <div class="center" style="overflow-x: hidden;"><img src="/projects/imagens/rar.png" alt="" class="ar"><div style="overflow-x:scroll;display:flex;height:fit-content;"><span style="font-size:0.9em">mons: [</span><span class="sp" style="min-width:24px;display:inline-flex;overflow-x:scroll;">${spn}</span> <span style="font-size:0.9em">]</span>&nbsp;<span style="font-size:0.9em"></div></div> ${splitspn}</div></div></div>`
        }
    }else if(cas == 1) {
        cn2 = ts[1]
        for (h in res[7]) {
            spn = ''
            splitspn = ''
            for(k in res[7][h].aparicoes) {
                if (k != res[7][h].aparicoes.length - 1) {
                    spn+= `<span>
                    <span style="color:var(--number)">${res[7][h].aparicoes[k]}</span>,</span>`
                }else{
                    spn+= `<span><span style="color:var(--number)">${res[7][h].aparicoes[k]}</span></span>`
                }
                splitspn+= ` <p class="psem"><span style="overflow-x:scroll;display:inline-block;"><span style="color:var(--number)">${k}</span>: <span style="color:var(--number)">${res[7][h].aparicoes[k]}</span></p>`
            }
        cn2.getElementsByClassName('dev')[0].innerHTML+= `<div class="cont"><div class="center"><img src="/projects/imagens/rar.png" alt="" class="ar"> <span class="sp"><span style="color:var(--number)">${h}</span>: {fator: <span style="color:var(--string)">'${desfat(REFORMATAR(res[7][h].dividido))}'</span>, aparições: Array(${res[7][h].aparicoes.length})}</span></div><div class="tocent">  <p class="pdev">fator: <span style="color:var(--string)">'${res[7][h].dividido.replace(new RegExp('\\*','g'),'.')}'</span></p><div class="cont"> <div class="center"><img src="/projects/imagens/rar.png" alt="" class="ar"><span style="font-size:0.9em">aparicoes: [</span><span class="sp" style="overflow-x:scroll;">${spn}</span><span style="font-size:0.9em">]</span></div> ${splitspn} </div> </div></div>`
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
                splitspn+= ` <p class="psem"><span style="overflow-x:scroll;display:inline-block;"><span style="color:var(--number)">${k}</span>: <span style="color:var(--number)">${res[8][h].repetidos[k]}</span></p>`
            }

            spn2 = ''
            splitspn2 = ''
            for(k in res[8][h].posições) {
                if (k != res[8][h].posições.length - 1) {
                    spn2+= `<span><span style="color:var(--string)">'${desfat(REFORMATAR(res[7][res[8][h].posições[k]].dividido))}'</span>,</span>`
                }else{
                    spn2+= `<span><span style="color:var(--string)">'${desfat(REFORMATAR(res[7][res[8][h].posições[k]].dividido))}'</span></span>`
                }
                splitspn2+= ` <p class="psem"><span style="overflow-x:scroll;display:inline-block;"><span style="color:var(--number)">${k}</span>: <span style="color:var(--string)">'${desfat(REFORMATAR(res[7][res[8][h].posições[k]].dividido))}'</span></p>`
            }
        cn3.getElementsByClassName('dev')[0].innerHTML+= `<div class="cont"><div class="center"><img src="/projects/imagens/rar.png" alt="" class="ar"><span class="sp"><span style="color:var(--number)">${h}</span>: {posições: Array(${res[8][h].repetidos.length}), fatores: Array(${res[8][h].posições.length}), monomios: Array(${res[8][h].monomios.length})</span></div><div class="tocent"> <div class="cont"> <div class="center"><img src="/projects/imagens/rar.png" alt="" class="ar"><span style="font-size:0.9em">posições: [</span><span class="sp" style="overflow-x:scroll;">${spn}</span><span style="font-size:0.9em">]</span></div> ${splitspn} </div><div class="cont"> <div class="center"> <img src="/projects/imagens/rar.png" alt="" class="ar"><span style="font-size:0.9em">fatores: [</span><span class="sp" style="overflow-x:scroll;">${spn2}</span><span style="font-size:0.9em">]</span></div> ${splitspn2}  </div> </div></div>`
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
                        //console.log(lik,'adwadaadasdasads')
                        if (lik != res[9][h].w.what[k].ar.length - 1) {
                        spi+= `<span><span style="color:var(--string)">'${desfat(res[10][res[9][h].w.what[k].ar[lik]].numero)}'</span>,</span>`
                        }else{ 
                            spi+= `<span><span style="color:var(--string)">'${desfat(res[10][res[9][h].w.what[k].ar[lik]].numero)}'</span></span>`
                        } }
                splitspn+= ` <p class="psem"><span style="overflow-x:scroll;display:inline-block;"><span style="color:var(--number)">${k}</span>: [${spi}]</p>`
              spn+= `[<span class="sp" style="min-width:30px;">${spi}</span>]`
            }
        cn4.getElementsByClassName('dev')[0].innerHTML+= ` <div class="cont"><div class="center"><img src="/projects/imagens/rar.png" alt="" class="ar"> <span class="sp"><span style="color:var(--number)">${h}</span>: {mons: Array(${res[9][h].mons.length}), grupos: Array(${res[9][h].w.what.length})
        </span> </div><div class="tocent" style="margin-bottom:0px;"> <div class="cont">  <div class="center"><img src="/projects/imagens/rar.png" alt="" class="ar"><span style="font-size:0.9em">agrup:&nbsp;</span><span style="display: flex;overflow-x: scroll;">${spn}<span></div> ${splitspn}</div></div></div>`
        }
    }
    
    for(pare in sur) {
        is = sur[pare]
        //console.log(is)
        if (act == 'close') {
            c = new CreateFunc(is,'close')
        }else{
            c = new CreateFunc(is,'open')
        }
        if (act == 'close') {
        c.SetDefault()
        }
        c.AddEvent()
    }
}

    late = 1
    function CreateFunc(ind,action,number){

        this.ind = ind
        console.log('THISSSSSSSSS',ind)
        this.par1 = document.getElementsByClassName('ar')[this.ind]
        this.par2 = get2('cont')[this.ind]
        this.par3 = get2('center')[this.ind]

        this.l = late
        console.log('ACTION', action)
        if (action != "open") {
        this.clicked = false
        }else{
            console.log('TRUEEEEEEEEEE')
        this.clicked = true
        this.par1.style.transform = 'rotate(90deg)'
        }

        late++
        this.a = `j${late}`
        this.number = number
        h1 = 0
        h2 = 100
        heightInPx = String(this.par3.offsetHeight) + 'px'
        
        /*
        css = `@keyframes ${a} {
            0% {
                height: ${heightInPx};
            }
            100% {
                height: ${this.hgt}px;
            }
        }`
        
        par2.style.animation = `${a} 0.3s`
           style = document.createElement('style')
           document.head.appendChild(style)
           style.appendChild(document.createTextNode(css))
        */
       
        this.SetDefault= function () {
            //par2.style.height = par3.offsetHeight
            heightInPx = String(this.par3.offsetHeight) + 'px'
            if (this.par3.innerText != 'Relações' && this.par3.innerText != 'Repetições' && this.par3.innerText != 'Combinações' && this.par3.innerText != 'Agrupamentos' ) {
            this.par2.style.height = heightInPx
            this.clicked = false
            }else{
                this.par2.style.height = '28px'
                this.clicked = false
            }
        }
        
        this.par1.setAttribute
        this.AddEvent = function() {
            console.log(this.a)
           this.par1.setAttribute('onclick',`cli(${this.clicked},${this.ind},'${this.a}',${this.number})`)
        } //a
    }

    function cli(state,index,jin,n) {
        me = document.getElementsByClassName('ar')
        this.jin = jin
        this.par1 = me[index]
        this.par2 = conts[index]
        this.par3 = cents[index]
        this.n = n
        console.log(this.par1,this.par2,this.par3)
        console.log('fechar?',state)
        beg = this.par2.offsetHeight
        this.par2.style.height = 'fit-content'
        sul = this.par2.offsetHeight
        console.log('jin: ',jin)

        search = mecams.find(function(mecams){
            return mecams.created == this.jin
           })

          
           console.log('THIS.N -----------------',this.n)
        if (search != undefined) {
            console.log('JÁ TEM ' + this.jin)
            search.comp++
            console.log(search,search.comp)
           }else{
            console.log('NÃO TEM ' + this.jin)
            if (this.par3.innerText == 'Resolução') {
                console.log('WAIT')
                beg = beg - 10
                sul = sul - 10
                console.log(beg)
                //sul = sul + 10
               }
               txt = String(this.par3.innerText)
               busca = txt.search(new RegExp('((Agrupamentos)|(Relações)|(Combinações)|(Repetições))','g'))
               console.log('busca',txt,busca)
               if (this.n == 8 && busca == -1) {
                console.log('YES')
                sul = sul - 8
                console.log('FIXED',sul)
               }
            mecams.push({created:this.jin,comp:1,st:beg,end:sul,cl:state})
           }

           search = mecams.find(function(mecams){
            return mecams.created == this.jin
           })

           console.log('initial:',search.st)
           console.log('final:',search.end)
           //console.log('search.beg:',search.st)
          // console.log(search.comp)


           if (search.cl == false) {
        css = `@keyframes ${jin}${search.comp} {
             0% {
                height: ${search.st}px;
            }
            100% {
                height: ${search.end}px;
            }
        }`
        this.par3.style.height = '20px'
        this.par2.style.height = '20px'
        this.par2.style.animation = `${jin}${search.comp} 2s`
        this.par2.style.height = 'fit-content'
           style = document.createElement('style')
           document.head.appendChild(style)
           style.appendChild(document.createTextNode(css))
    }else{
        console.log('gooooo')
        css = `@keyframes ${jin}${search.comp} {
            0% {
               height: ${search.end}px;
           }
           100% {
               height: ${search.st}px;
           }
       }`
       this.par3.style.height = '20px'
        this.par2.style.height = '20px'
        this.par2.style.animation = `${jin}${search.comp} 2s`
       style = document.createElement('style')
       document.head.appendChild(style)
       style.appendChild(document.createTextNode(css))
       this.par1.style.transform = 'rotate(0deg)'
    }
    }

    function copy() {
        nums = document.getElementsByClassName('type')
        copyText = nums[0]
        copyText.select();
        copyText.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(copyText.value);
    }

    function copy2() {
        nums = document.getElementsByClassName('type')
        copyText = nums[1]
        var copyGfGText = copyText;
        copyGfGText.select();
        document.execCommand("copy");
    }

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
          if (quase[patience] == '*' && quase[Number(patience) - 1].search('[0-9]') != -1 && quase[Number(patience) + 1].search('[0-9]') != -1 ) {
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
            }else if(quase[patience].search('[0-9]') != -1 && quase.indexOf('*') == -1) {
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
    console.log(exal)
    function CreateEngine2() {
        console.log('')
        console.log('')
        console.log('creating engine........')
      this.FATORAR = 
      function (expression_2,somarmons) {
    
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
          //console.log(change)
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
         // console.log('como fica',comofica)
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
      // AQUI ACABA O CÓDIGO PARA SOMAR OS MONÔMIOS
         reps = []
         segs_2 = []
         let  = []
         
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
         
         for (nl = 0; nl < segs_2.length; nl++) {
             for (n = 0; n < segs_2.length; n++) {
                 if (n != nl) {
                 if (String(segs_2[n].car).search(String(segs_2[nl].car)) != -1) {
                     for (u in segs_2[n].mons) {
                         if (segs_2[nl].mons.indexOf(segs_2[n].mons[u]) != -1) {
                         }else{
                             segs_2[nl].mons.push(segs_2[n].mons[u])
                         }}}}}}
         
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
           }
         }
         
        
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
           }
         }
         
         segs_2 = [...segs_2ordered]
      

         if (segs_2.length > 0) {
         console.log('------------------------INDIREITANDO AS COISA----------------------')
         }
         for (loi in segs_2) {
            ame = segs_2[loi].mons
            console.log(ame)
            ord = sort(ame)[0]
            ag = []
            for (dir = ord.length - 1; dir >= 0; dir--) {
                console.log(ord[dir])
                ag.push(ord[dir])
            }
            segs_2[loi].mons = ag
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
                 for(anchor in segs_2) {
                     army = []
                     lpisthebest = ''
                         for (fall in segs_2[anchor].car) {
                         if (lpisthebest.length == 0) {
                             lpisthebest = segs_2[anchor].car[fall]
                         }else if(lpisthebest.search('[0-9]') != -1 && segs_2[anchor].car[fall].search('[0-9]') != -1) {
                             lpisthebest += segs_2[anchor].car[fall]
                         }else{
                             army.push(lpisthebest)
                             if(segs_2[anchor].car[fall] != '.') {
                             lpisthebest = segs_2[anchor].car[fall]
                             }else{
                                 if (segs_2[anchor].car[Number(fall) + 1].search('[0-9]') != -1) {
                                 lpisthebest = '*'
                                 }else{
                                     lpisthebest = ''
                                 } } }
                         if (fall == segs_2[anchor].car.length - 1) {
                             army.push(lpisthebest)
                         }
                     }
                     bell = [...army]
                 
                     for (pahh in army) {
                         if (army[pahh] == '*') {
                             army[pahh] = '.'
                         }
                     }
                     scarecrow_2.push({divididos: [], outrodiv: [], poss: [...segs_2[anchor].mons], divisor: [...army], positions: [...segs_2[anchor].mons]})
                     for (high in segs_2[anchor].mons) {
                         army = [...bell]
           
                      lightson = [...army]
                         pain = DIVIDIR(army,monomios_2[segs_2[anchor].mons[high]].numero)
      
                         if (pain.length == 0 || pain.search('([0-9]|[a-z)])') == -1) {
                        if (lightson.indexOf('-') != -1 && monomios_2[segs_2[anchor].mons[high]].numero.indexOf('-') == -1) {
                            pain = '-1'
                            scarecrow_2[anchor].divididos.push('1')
                             scarecrow_2[anchor].outrodiv.push(pain)
                        }else if(lightson.indexOf('-') == -1 && monomios_2[segs_2[anchor].mons[high]].numero.indexOf('-') != -1) {
                             pain = '-1'
                             scarecrow_2[anchor].divididos.push('1')
                             scarecrow_2[anchor].outrodiv.push(pain)
                        }else{
                         pain = '1'
                         scarecrow_2[anchor].divididos.push(pain)
                             scarecrow_2[anchor].outrodiv.push(pain)
                        }
                         }else{
                             right = ''
                             for (feet in pain) {
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
                                 //console.log('WHEN WDWDIWJDIWDI',uy)
                             }}


                             //console.log('UYYYYYYYYYYYYYYYYYY', uy)
                             //console.log('consertado:', redo(desfat(uy)))
                            scarecrow_2[anchor].outrodiv.push(redo(desfat(uy)))
         
                            if (uy[0] == '-') {
                             holdon = ''
                             for (qual in uy) { 
                                 if (uy[qual] != '-')
                                 holdon+= uy[qual]
                             }
                             uy = holdon
                            }
                            scarecrow_2[anchor].divididos.push(uy)
                         }}}
            
                miss_2 = []
         
                for (ah in scarecrow_2) {
                    for (é in scarecrow_2[ah].divididos) {
                    if (miss_2.find(function(miss_2){return miss_2.dividido == scarecrow_2[ah].divididos[é]}) == undefined) {
                     miss_2.push({dividido: scarecrow_2[ah].divididos[é], aparicoes: [Number(ah)], divisor: scarecrow_2[ah].divisor})
                    }else{
                     miss_2.find(function(miss_2){return miss_2.dividido == scarecrow_2[ah].divididos[é]}).aparicoes.push(Number(ah))
                    }}  }
                
                quantosfatores = Number(monomios_2.length)/Number(divs_2[okentao])
                quantasposições = Number(monomios_2.length)/Number(quantosfatores)
       
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
         deucerto = false
         java = 0
         
         roller_2 = [];
      
         for (eep in miss_2) {
            varib = []
            for (kel in miss_2[eep].aparicoes) {
                pos = miss_2[eep].aparicoes[kel]
                varib.push(scarecrow_2[pos].positions[scarecrow_2[pos].divididos.indexOf(miss_2[eep].dividido)])
            }
              for (quad in miss_2) {
                if (quad != eep) {
                    compar = []
                  varib2 = []
                  for (kel in miss_2[quad].aparicoes) {
                    pos = miss_2[quad].aparicoes[kel]
                    varib2.push(scarecrow_2[pos].positions[scarecrow_2[pos].divididos.indexOf(miss_2[quad].dividido)])
                }
                  repeated = [];
                  repwri = "";
                  for (vespa in miss_2[eep].aparicoes) {
                    if (compar.indexOf(varib[vespa]) == -1) {
                    compar.push(varib[vespa])
                    if (miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa]) != -1 && compar.indexOf(varib2[miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa])]) == -1) {
                      compar.push(varib2[miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa])])
                        
                        repeated.push(miss_2[eep].aparicoes[vespa]);
                      repwri += "," + miss_2[eep].aparicoes[vespa];
    
                      mons1 = []
    
                      pos1 = eep
                      pi = 0
                      for (photo = 0; photo < Number(repwri.length)/2;photo+=1) {
                          mons1.push(compar[pi])
                          pi+= 2
                      } 
    
                      pos2 = quad
    
                      mons2 = []
                      pi = 1
                      for (photo = 0; photo < Number(repwri.length)/2;photo+=1) {
                          mons2.push(compar[pi])
                          pi+= 2
                      } 
    
                      if (roller_2.find(function (roller_2) { return roller_2.rept == repwri;}) == undefined) {
                           roller_2.push({
                          rept: repwri,
                          opl: [...repeated],
                          position: [eep, quad],
                          monomios: [...compar]
                        });
                      }else{
                        func = roller_2.find(function (roller_2) { return roller_2.rept == repwri;})
                        perm = true
                        for (sept in mons1) {
                            if (func.monomios.indexOf(mons1[sept]) != -1) {
                               perm = false 
                            }}
                        if (perm == true) {
                            func.position.push(pos1)
                            for (wake in mons1) {
                            func.monomios.push(mons1[wake])
                            } }
                        perm = true
                        for (sept in mons2) {
                            if (func.monomios.indexOf(mons2[sept]) != -1) {
                               perm = false 
                            }}
                        if (perm == true) {
                            func.position.push(pos2)
                            for (wake in mons2) {
                            func.monomios.push(mons2[wake])
                            }}}
                    }else{
                            compar.splice(compar.length - 1,1)
                        } }}}}}
          
         for (r in roller_2) {
             roll_2.push({repetidos: roller_2[r].opl, posições: roller_2[r].position, way: roller_2[r].rept})
         }
         while(java < miss_2.length && deucerto == false) {
                 podeser_2 = []
                 for (outro in miss_2) {
                     if (outro != java /*&& miss_2[outro].aparicoes.length >= quantasposições*/) {
                         presentes = []
                         for (quecoisa in miss_2[outro].aparicoes) {
                             fatorzinho = miss_2[outro].aparicoes[quecoisa]
                             if (miss_2[java].aparicoes.indexOf(fatorzinho) != -1) {
                                 presentes.push(fatorzinho)
                             }}
      
                         adicionou = false
                         for (idk in podeser_2) {
                             esigual = true
                             for (denovo in podeser_2[idk].opl) {
                                 if (podeser_2[idk].opl[denovo] == presentes[denovo]) {
                                 }else{
                                     esigual = false
                                 }}
                             if (esigual == true) {
                                 podeser_2[idk].position.push(outro)
                                 adicionou = true
                             } }
                         if (presentes.length > 0 && presentes.length > 0 && adicionou == false) {
                             podeser_2.push({opl: presentes, position: [outro]})
                         } }}
                    
                    for (belief in podeser_2) {
                        if (podeser_2[belief].position.indexOf(java) == -1) {
                        podeser_2[belief].position.push(String(java))
                        }
         
                     shot = ''
                     for (gun in podeser_2[belief].opl) {
                         shot+= podeser_2[belief].opl[gun] + ','
                     }
         
                     if (roll_2.length == 0) {
                     }else if(roll_2.find(function(roll_2){return roll_2.way == shot}) != undefined) { // SE JÁ TIVER NA LSITA
                      
                         for (capital in podeser_2[belief].position) {
                         if (roll_2.find(function(roll_2){return roll_2.way == shot}).posições.indexOf(podeser_2[belief].position[capital])== -1) {
                            roll_2.find(function(roll_2){return roll_2.way == shot}).posições.push(podeser_2[belief].position[capital])
                         }}}}
         
                    whyis = java
                    if (podeser_2.length > 0) {
                        for(cold in podeser_2) {
                    if (podeser_2[cold].position.length == quantosfatores && podeser_2[cold].opl.length == quantasposições && miss_2[whyis].aparicoes.length == quantasposições) {
                     deucerto = true
                     ficaassim = ''
      
                     for (yehaa in podeser_2[cold].position) {
                         if (miss_2[podeser_2[cold].position[yehaa]].dividido[0] == '-') {
                             fi = ''
                             for (ohjesus in miss_2[podeser_2[cold].position[yehaa]].dividido) {
                                 if (miss_2[podeser_2[cold].position[yehaa]].dividido[ohjesus] != '-') {
                                     fi+= miss_2[podeser_2[cold].position[yehaa]].dividido[ohjesus]
                                 } }
                             if (yehaa != 0) {
                                  ficaassim += ` - ${fi}`
                             }else{
                                 ficaassim += `-${fi}`
                             }
                         }else if(yehaa != 0){
                             ficaassim += ' + '
                             ficaassim+= miss_2[podeser_2[cold].position[yehaa]].dividido
                         }else{
                             ficaassim+= miss_2[podeser_2[cold].position[yehaa]].dividido 
                         }}
                    for (ruin in podeser_2[cold].opl) {
                     emotion = ''
                     for (scream in scarecrow_2[podeser_2[cold].opl[ruin]].divisor ) {
                         emotion+= scarecrow_2[podeser_2[cold].opl[ruin]].divisor[scream]
                     }
                   }} } }
                    java++
                }
                okentao++
         
                
               for (ne in roll_2) {
                 arranjar = []
                 for (pq in roll_2[ne].repetidos) {
                     gosto = roll_2[ne].repetidos[pq], scarecrow_2[roll_2[ne].repetidos[pq]].divididos
                     arranjar.push({pos: pq, ocupa: [], origin: gosto})
         
                 for (moon in roll_2[ne].posições) {
                     vaiir = scarecrow_2[gosto].outrodiv[scarecrow_2[gosto].divididos.indexOf(miss_2[roll_2[ne].posições[moon]].dividido)]
                    arranjar[pq].ocupa.push(vaiir)
                 }}
            
             
             jafoi = []
             
             perfectwave = []
             for (tosse in arranjar) {
                 if (jafoi.indexOf(tosse) == -1) {
                     organizer = {agrupar: [tosse], referencia: arranjar[tosse].ocupa}
                 for (calor in arranjar) {
                     if (calor != tosse) {
                         equals = true
                         igualar =[]
                         for (boring in arranjar[calor].ocupa) {
                             sendocomparado = arranjar[calor].ocupa[boring]
                             comparador= arranjar[tosse].ocupa[boring]
                             if (sendocomparado[0] != comparador[0]) {
                                 igualar.push(true)
                             }else{
                                 igualar.push(false)
                             }}
                         if (igualar.indexOf(false) == -1 || igualar.indexOf(true) == -1) {               
                             jafoi.push(calor)
                             organizer.agrupar.push(calor)
                         }}}
                 perfectwave.push(organizer)
             }}
             
            
             for (youchoose in perfectwave) {
                 ficarassim =  perfectwave[youchoose].referencia
                 for (catraca in perfectwave[youchoose].agrupar) {
                     presa = perfectwave[youchoose].agrupar[catraca]
                     diferente = false
                     for (moon in roll_2[ne].posições) {
                         vaiir = scarecrow_2[arranjar[presa].origin].outrodiv[scarecrow_2[arranjar[presa].origin].divididos.indexOf(miss_2[roll_2[ne].posições[moon]].dividido)]
                         if (vaiir != ficarassim[moon]) {
                             diferente = true
                            scarecrow_2[arranjar[presa].origin].outrodiv[scarecrow_2[arranjar[presa].origin].divididos.indexOf(miss_2[roll_2[ne].posições[moon]].dividido)] = ficarassim[moon]
                         } }
                     if (diferente == true) {
                         lista = scarecrow_2[arranjar[presa].origin].divisor
                         if (lista != '-') {
                             modificar = ['-','.']
                             for (saved in lista) {
                                 modificar.push(lista[saved])
                             }
                             scarecrow_2[arranjar[presa].origin].divisor = modificar
                         }else{
                             lista.splice(0,2)
                         }}}} }
         
               for (sei in scarecrow_2) {
                 for (ai in scarecrow_2[sei].divididos) {
                     scarecrow_2[sei].divididos[ai] = scarecrow_2[sei].outrodiv[ai]
                 } }
         
               miss_2 = []
         
               for (ah in scarecrow_2) {
                   for (é in scarecrow_2[ah].divididos) {
                   if (miss_2.find(function(miss_2){return miss_2.dividido == scarecrow_2[ah].divididos[é]}) == undefined) {
                    miss_2.push({dividido: scarecrow_2[ah].divididos[é], aparicoes: [Number(ah)], divisor: scarecrow_2[ah].divisor})
                   }else{
                    miss_2.find(function(miss_2){return miss_2.dividido == scarecrow_2[ah].divididos[é]}).aparicoes.push(Number(ah))
                   }} }
         
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
      
               java = 0
               roll_2 = []
               deucerto = false
               roller_2 = [];
               for (eep in miss_2) {
                varib = []
                for (kel in miss_2[eep].aparicoes) {
                    pos = miss_2[eep].aparicoes[kel]
                    varib.push(scarecrow_2[pos].positions[scarecrow_2[pos].divididos.indexOf(miss_2[eep].dividido)])
                }
                  for (quad in miss_2) {
                    if (quad != eep) {
                        compar = []
                      varib2 = []
                      for (kel in miss_2[quad].aparicoes) {
                        pos = miss_2[quad].aparicoes[kel]
                        varib2.push(scarecrow_2[pos].positions[scarecrow_2[pos].divididos.indexOf(miss_2[quad].dividido)])
                    }
                      repeated = [];
                      repwri = "";
                      for (vespa in miss_2[eep].aparicoes) {
                        if (compar.indexOf(varib[vespa]) == -1) {
                        compar.push(varib[vespa])
    
                        if (miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa]) != -1 && compar.indexOf(varib2[miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa])]) == -1) {
                          compar.push(varib2[miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa])])
                            
                            repeated.push(miss_2[eep].aparicoes[vespa]);
                          repwri += "," + miss_2[eep].aparicoes[vespa];
                          //console.log('COMPARAR:',compar,repwri)
    
                          mons1 = []
    
                          pos1 = eep
                          pi = 0
                          for (photo = 0; photo < Number(repwri.length)/2;photo+=1) {
                              //console.log(pi)
                              mons1.push(compar[pi])
                              pi+= 2
                          } 
                          //console.log('mons1',mons1)
    
                          pos2 = quad
                          //console.log('monomios:')
    
                          mons2 = []
                          pi = 1
                          for (photo = 0; photo < Number(repwri.length)/2;photo+=1) {
                              //console.log(pi)
                              mons2.push(compar[pi])
                              pi+= 2
                          } 
    
                          if (roller_2.find(function (roller_2) { return roller_2.rept == repwri;}) == undefined) {
                               roller_2.push({
                              rept: repwri,
                              opl: [...repeated],
                              position: [eep, quad],
                              monomios: [...compar]
                            });
                          }else{
                            func = roller_2.find(function (roller_2) { return roller_2.rept == repwri;})
                            perm = true
                            for (sept in mons1) {
                                if (func.monomios.indexOf(mons1[sept]) != -1) {
                                   perm = false 
                                }}

                            if (perm == true) {
                                func.position.push(pos1)
                                for (wake in mons1) {
                                func.monomios.push(mons1[wake])
                                } }
    
                            perm = true
                            for (sept in mons2) {
                                if (func.monomios.indexOf(mons2[sept]) != -1) {
                                   perm = false 
                                }}
                                
                            if (perm == true) {
                                func.position.push(pos2)
                                for (wake in mons2) {
                                func.monomios.push(mons2[wake])
                                }}}
                        }else{
                                compar.splice(compar.length - 1,1)
                               //console.log(compar)
                            }
                         }}}}}
    
        for (r in roller_2) {
          roll_2.push({repetidos: roller_2[r].opl, posições: roller_2[r].position, way: roller_2[r].rept, monomios: roller_2[r].monomios})
      }
      
               while(java < miss_2.length && deucerto == false) {
               podeser_2 = []
               for (outro in miss_2) {
                   if (outro != java ) {
                       presentes = []
                       for (quecoisa in miss_2[outro].aparicoes) {
                           fatorzinho = miss_2[outro].aparicoes[quecoisa]
                           if (miss_2[java].aparicoes.indexOf(fatorzinho) != -1) {
                               presentes.push(fatorzinho)
                           }}
         
                       adicionou = false
                       for (idk in podeser_2) {
                           esigual = true
                           for (denovo in podeser_2[idk].opl) {
                               if (podeser_2[idk].opl[denovo] == presentes[denovo]) {
                               }else{
                                   esigual = false
                               }
                           }
                           if (esigual == true) {
                               podeser_2[idk].position.push(outro)
                               adicionou = true
                           }}
                       if (presentes.length > 0 && presentes.length > 0 && adicionou == false) {
                           podeser_2.push({opl: presentes, position: [outro]})
                       } }}
      
                  for (belief in podeser_2) {
                      if (podeser_2[belief].position.indexOf(java) == -1) {
                      podeser_2[belief].position.push(String(java))
                      }
         
                   shot = ''
                   for (gun in podeser_2[belief].opl) {
                       shot+= podeser_2[belief].opl[gun] + ','
                   }
         
                   if (roll_2.length == 0) {
                   }else if(roll_2.find(function(roll_2){return roll_2.way == shot}) != undefined) { // SE JÁ TIVER NA LSITA
                      
                       for (capital in podeser_2[belief].position) {
                       if (roll_2.find(function(roll_2){return roll_2.way == shot}).posições.indexOf(podeser_2[belief].position[capital])== -1) {
                          roll_2.find(function(roll_2){return roll_2.way == shot}).posições.push(podeser_2[belief].position[capital])
                       } } }}
         
                  whyis = java
                  if (podeser_2.length > 0) {
                      for(cold in podeser_2) {
                  if (podeser_2[cold].position.length == quantosfatores && podeser_2[cold].opl.length == quantasposições && miss_2[whyis].aparicoes.length == quantasposições) {
                   deucerto = true
         
                   ficaassim = ''
                   podeser_2[cold].position.push(whyis)
         
                   for (yehaa in podeser_2[cold].position) {
                       if (miss_2[podeser_2[cold].position[yehaa]].dividido[0] == '-') {
                           fi = ''
                           for (ohjesus in miss_2[podeser_2[cold].position[yehaa]].dividido) {
                               if (miss_2[podeser_2[cold].position[yehaa]].dividido[ohjesus] != '-') {
                                   fi+= miss_2[podeser_2[cold].position[yehaa]].dividido[ohjesus]
                               }}
                           if (yehaa != 0) {
                                ficaassim += ` - ${fi}`
                           }else{
                               ficaassim += `-${fi}`
                           }
                       }else if(yehaa != 0){
                           ficaassim += ' + '
                           ficaassim+= miss_2[podeser_2[cold].position[yehaa]].dividido
                       }else{
                           ficaassim+= miss_2[podeser_2[cold].position[yehaa]].dividido 
                       }}
                  for (ruin in podeser_2[cold].opl) {
                   emotion = ''
                   for (scream in scarecrow_2[podeser_2[cold].opl[ruin]].divisor ) {
                       emotion+= scarecrow_2[podeser_2[cold].opl[ruin]].divisor[scream]
                   }
                 }}}}
                  java++
              }
         
                youdumb_2 = []
                 aswillbe2 = []
                 for (raging = 0; raging < roll_2.length; raging++) {
                     asitwas = [] 
                     obe = {what:[]}
                 
                    for (still in roll_2[raging].repetidos) {
                     asitwas2 = []
                     aswillbe = []
      
                     mylife = '('
                     for (still2 in roll_2[raging].posições) {
                         if (still != 0) {
                         mylife+= ' + ' + miss_2[roll_2[raging].posições[still2]].dividido
                         }else{
                             mylife+= miss_2[roll_2[raging].posições[still2]].dividido
                         }
                         older = 
                         scarecrow_2[roll_2[raging].repetidos[still]].positions[scarecrow_2[roll_2[raging].repetidos[still]].divididos.indexOf(miss_2[roll_2[raging].posições[still2]].dividido)]
                        asitwas.push(older)
                        asitwas2.push(older)
                        aswillbe.push(older)
                    }
                    obe.what.push({ar: asitwas2, indice: still})
                    aswillbe2.push({oque:aswillbe, onde:raging})
                 }
                 youdumb_2.push({mons: asitwas, rag: raging, w: obe, polen: raging})
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

         //console.log('you', youdumb_2)

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
               //console.log(youdumb_2)
            
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
            //console.log(lengs)
            
            youdumb_2ordered = []
            for (f in lengs) {
                its = []
                for (i in lengs[f].num) {
                its.push(youdumb_2[lengs[f].num[i]])
                }
            
                grtols = []
                
                for (hi in its) {
                //console.log(its[i].w.what.length)
                    its[hi].length = its[hi].w.what.length
                    grtols.push(its[hi])
                }
                
                organizado = sortob(grtols, 'length')[1]
                
                grtols = []
                for (ah in organizado) {
                    grtols.push(its[organizado[ah]])
                }
            
                its = grtols
                //console.log(its)
                for (c in its) {
                youdumb_2ordered.push(its[c])
                } }

            //console.log('youdumb_2ordered', youdumb_2ordered)
            youdumb_2 = youdumb_2ordered
            
            for (yes in youdumb_2) {
                //console.log('==========>',yes, youdumb_2[yes].mons, youdumb_2[yes].w.what.length)
            }
         //
         heya_2 = [...youdumb_2]
         for (imback in youdumb_2) {
             sticky = []
             initial = youdumb_2[imback].w.what
             if (initial.length > 0) {
             inside = {which: [], numberyoudumb: youdumb_2[imback].polen}
             
             for (agg in initial) {
                 taai = false
                  for (eng in initial[agg].ar) {
                     if (numerospresentes_2.indexOf(initial[agg].ar[eng]) == -1) {
                     }else{
                         taai = true
                     } }
                  if (taai == false) {
                     inform = {monos: initial[agg].ar, numberwhat: initial[agg].indice} 
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
             edge_2 = []
             naonao_2 = ''
             amount = []
               tobreak_2 = ''
               realife = []
               amontoado_2 = []
               for (quassao in roll_2[pans_2[bababa].numberyoudumb].posições) {
                 el = miss_2[roll_2[pans_2[bababa].numberyoudumb].posições[quassao]].dividido
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
                 }
      
             if (aster == false) {
                 antes = ''
                 for (eyes in quase) {
                     if (quase[eyes].search('[0-9]') != -1) {
                         antes+= quase[eyes]
                     } }
                 antes+= aconta_2
                 aconta_2 = antes
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
                 }}
         
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
                  }
      
                 if (aster == false) {
                     antes = ''
                 for (eyes in quase) {
                     if (quase[eyes].search('[0-9]') != -1) {
                         antes+= quase[eyes]
                     } }
                 antes+= aconta_2
                   aconta_2 = antes
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
             
              if (edge_2.length > 1) {
                if (concatenar_2.length > 0) {
                concatenar_2+= ' + '
                }
            concatenar_2 += `(${naonao_2})(${tobreak_2})`;
          } else {
            if (naonao_2[0] == '-') {
              if (concatenar_2.length > 0) {
              rok = ''
              for (j in naonao_2) {
                if (j != 0) {
                  rok+= naonao_2[j]
                }
              }
              concatenar_2+= ' - '
              concatenar_2 += `${rok}(${tobreak_2})`;
            }else{
              concatenar_2 += `${naonao_2}(${tobreak_2})`
            }
            }else{
              if(concatenar_2.length > 0) {
              concatenar_2 += ` + ${naonao_2}(${tobreak_2})`
            }else{
              concatenar_2 += `${naonao_2}(${tobreak_2})`
            }
          }
        }
             
      
         // FAZENDO A CONTA
            primeirocaso = SOMANDOMONOMIOS_2(amount)
            segundocaso = SOMANDOMONOMIOS_2(amontoado_2)
            mudou = false
            if (primeirocaso[1] == primeirocaso[2]) {
            }else{
                mudou = true
            }
         
            if (segundocaso[1] == segundocaso[2]) {
            }else{
                mudou = true
            }
      
            if (mudou == true) {
              naonao_2 = primeirocaso[0]
              tobreak_2 = segundocaso[0] 
            reason = []
            for (k in naonao_2) {
              if (k != 0 && naonao_2[k] != '-' && naonao_2[k] != '+') {
                  deserve = naonao_2[k - 1]
                  reason.push(k - 1)
                  deserve+= naonao_2[k]
                  naonao_2[k] = deserve
              }}
      
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
              }}
      
            for (time = tobreak_2.length - 1; time >= 0; time--) {
              if (reason.indexOf(time) != -1) {
                  tobreak_2.splice(time, 1)
                  }}
      
            for (roberto in naonao_2) {
              for (vaidarcerto in tobreak_2) {
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
                  }}}
          
             for (e in pans_2[bababa].todos) {
              numsdesfat.push(pans_2[bababa].todos[e])
             }}}
         
         if (numsdesfat.length > 0) {
            //console.log(concatenar_2)
          console.warn('VAI TER QUE FATORAR DE NOVO')
          //console.log('youdumb')
         
          //console.log(pans_2)
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
              }}
             this.FATORAR(newexpress)
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
          }
          }
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
         }
         }
       
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
      
      function MULTIPLICARDIREITO(num1, num2) {
          if (num1 == '1' || num2 == '1') {
              if (num1 == '1') {
                  resultmult = num2
              }else{
                  resultmult = num1
              }
          }else{
              sónumero = ''
              sóletra = ''
              for (car in num1) {
                  if (num1[car].search('[0-9]') != -1 || num1[car] == '*') {
                      sónumero += num1[car]
                  }else if(num1[car].search('[a-z]') != -1) {
                      sóletra += num1[car]
                  }
                }
              sónumero2 = ''
              sóletra2 = ''
              for (car in num2) {
                  if (num2[car].search('[0-9]') != -1 || num2[car] == '*') {
                      sónumero2 += num2[car]
                  }else if(num2[car].search('[a-z]') != -1){
                      sóletra2 += num2[car]
                  }
              }
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
      ];
      }
    }
    
    ep = FATORE(exal)
    //console.log(ep)
    fat1 = new CreateEngine2().FATORAR(ep,true)
    fat2 = new CreateEngine2().FATORAR(ep,false)
    
    //console.log('FAT',fat2[0])
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
    
              //console.log('ALT',alt)
    
              plo = false
              
              if (monomios_2.length > 1 && segs_2.length > 1) {
                //console.log('isso')
              while (plo == false) {
                  seps = SPLITEXPS(okexp)
                  rexp =  ''
                  chain = []
              for (varnot in seps) {             
                start = seps[varnot].open
                  end = seps[varnot].close
                  expin = seps[varnot].exp
              
                fator1 = new CreateEngine2().FATORAR(FATORE(seps[varnot].exp), false)
              
                daprafator1 = false 
                if (fator1[1] == 1 && fator1[2] == 0) { 
                daprafator1 = true
                }
               chain.push(daprafator1)
              
                if (varnot == 0) {
                  if (start != 0) {
                      for (c = 0; c < start;c++) {
                          rexp+= okexp[c]
                      }}}else{
                  for (kl = Number(seps[Number(varnot)- 1].close) + 1; kl < start; kl++) {
                      rexp+= okexp[kl]
                  }}
              
                  if (daprafator1 == true) {
                      rexp+= fator1[0]
                  }else{
                      rexp+= '(' + expin + ')'
                  }
                  if (varnot == seps.length - 1) {
                      if (end != okexp.length - 1) {
                          for (c = Number(end) + 1; c < okexp.length;c++) {
                              rexp+= okexp[c]
                          }}}}
               okexp = rexp
               if (chain.indexOf(true) == -1) {
                  plo = true
                  }}
              }
              
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
                        }
                    } }
                  fires = ''
                  for (was in point) {
                    fires+= point[was]
                  }
                  return fires
                }