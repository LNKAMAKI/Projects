u = [] // Lista de Números
optn = -1
optn2 = -1
optn3 = -1
optn4 = -1
cn = false
valueColor = null
ischeck = false
rainbow = true
function blue(idf) {
    num = document.getElementById(idf)
    num.style.backgroundColor = 'rgba(221, 233, 250, 0.98.53)'
}
function white(idf) {
    num = document.getElementById(idf)
}
function delit(l) {
    document.getElementById(l).parentNode.removeChild(document.getElementById(l))
    list.splice(l, 1)
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
    } else {
        list = sort(u)[0]
        positions = sort(u)[1]
        doTheMath(list)
    }

}

function go() {

    console.log('click = 0')
    click = 0
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

    if (n != '') {
        if (freq.value > 0) {

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
        dv.removeChild(tab)
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



function doTheMath(list) {

    lfts = []
    intxts = []
    hgts = []
    clrs = []
    wids = 0
    // Deletando a Tabela e o Gráfico
    if (document.getElementsByTagName('table').length > 0) {
        dv.removeChild(tab)
        document.body.removeChild(document.getElementById('graph'))
    }


    // Criando a Tabela e o Gráfico
    if (u.length > 0) {
        gr = document.createElement('div')
        gr.id = 'graph'
        document.body.appendChild(gr)

        personal = document.createElement('div')
        personal.setAttribute('class', 'person')
        personal.setAttribute('onclick', 'redo()')
        gr.appendChild(personal)
        personal.innerHTML = '<img src="gear.png" alt="" id= "f">'

        config = document.createElement('div')
        config.setAttribute('class', 'config')
        gr.appendChild(config)

        line = document.createElement('hr')
        line.setAttribute('class', 'hr0')
        gr.appendChild(line)

        pa = document.createElement('p')
        line.appendChild(pa)
        pa.innerText = '0'
        pa.style.left = '-10px'

        dv = document.createElement('div')
        dv.style.overflowY = 'hidden'
        dv.style.overflowX = 'auto'
        dv.style.margin = '0px auto 10px auto'
        dv.style.width = 'fit-content'
        document.body.appendChild(dv)

        tab = document.createElement('table')
        dv.appendChild(tab)
        tab.innerHTML = '<thead><tr><th scope= "col">Valor</th><th scope= "col">F</th><th scope= "col">FR</th><th scope= "col">FA</th><th scope= "col">FRA</th></tr></thead><tbody></tbody>'
        tab.getElementsByTagName('tr')[0].style.animation = 'slide 1s'

    }
    // Ordenando lista:

    xernols = String(media(list)[0]).replace(new RegExp('(?<=[0-9]\.[0-9]{2})[0-9]+'), '')
    m1.innerText = 'Média Aritmética: ' + xernols

    // Calculando a Amplitude Total
    amplitude = list[0] - list[list.length - 1]
    amp.innerText = 'Amplitude Total: ' + amplitude

    // Conseguindo a Mediana
    let ehprimo = parOuImpar(list.length)
    if (list.length > 2) {
        if (ehprimo == 'ÍMPAR') {
            m2.innerText = 'Mediana: ' + list[(list.length + 1) / 2 - 1]
            medel = document.getElementById((list.length + 1) / 2 - 1)
            medel.style.color = 'blue'
        }

        if (ehprimo == 'PAR') {
            medoptions = [list.length / 2 - 1, list.length / 2]
            document.getElementById(medoptions[0]).style.color = 'blue'
            document.getElementById(medoptions[1]).style.color = 'blue'
            m2.innerText = 'Mediana: ' + ((list[list.length / 2 - 1] + list[list.length / 2]) / 2)

        }
    } else {
        m2.innerText = 'Mediana: ---'
    }


    // Vendo se o Tamanho da Lista é Par ou Ímpar(para conseguir a Mediana)
    function parOuImpar(limite) {
        if (limite % 2 == 0) {
            return 'PAR'
        } else {
            return 'ÍMPAR'
        }
    }

    // Calculando a Média
    function media(numeros) {
        let soma = 0
        for (i = 0; i < numeros.length; i++) {
            soma += numeros[i]
        }
        return [soma / numeros.length, soma]
    }

    // Conseguindo a Moda 
    mod = [0]
    moda = [0]
    apar = []
    what = []
    for (el in list) {

        rep = 0
        for (a = Number(el) + 1; a < list.length; a++) {

            if (list[a] == list[el]) {
                rep += 1
            } else {


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

        } else if (repeat == mod[0] && repeat != 1) {
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
    ar = document.createElement('div')
    ar.setAttribute('class', 'porcarrow')
    gr.appendChild(ar)

    if (iclass.value.length == 0 || iclass.value < uao[ui] / sum) {
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
            xernols = String(uao[ui] / sum * 100).replace(new RegExp('(?<=[0-9]\.[0-9]{2})[0-9]+'), '')
            tdata.innerText = xernols + '%'
            optn2++
            ju = document.createElement('option')
            ju.text = 'fr ' + `${asd[ui]}: ${uao[ui] / sum * 100}% `
            porcent.appendChild(ju)

            //fa 
            fa += uao[ui]
            jn = document.createElement('option')
            tdata = document.createElement('td')
            trow.appendChild(tdata)
            tdata.innerText = fa
            jn.text = 'fa ' + fa
            fac.appendChild(jn)

            //fra 
            fra += uao[ui] / sum * 100
            ja = document.createElement('option')
            tdata = document.createElement('td')
            trow.appendChild(tdata)
            xernolsim = String(fra).replace(new RegExp('(?<=[0-9]\.[0-9]{2})[0-9]+'), '')
            tdata.innerText = xernolsim + '%'
            ja.text = 'fra ' + fra + '%'
            freac.appendChild(ja)

            br = document.createElement('div')
            br.setAttribute('class', 'bar')
            br.setAttribute('onmouseenter', `hey(${ui})`)
            br.setAttribute('onmouseout', `hah(${ui})`)
            num1 = []
            num2 = []
            
         
            num1 = ['0', '1', '2', '3', '4', '5', '6','7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
            console.log(num1)
            n1 = num1[Math.floor(num1.length * Math.random())]
            n2 = num1[Math.floor(num1.length * Math.random())]
            n3 = num1[Math.floor(num1.length * Math.random())]
            n4 = num1[Math.floor(num1.length * Math.random())]
            n5 = num1[Math.floor(num1.length * Math.random())]
            n6 = num1[Math.floor(num1.length * Math.random())]
        
             if (valueColor == null || cn == true) {
                 console.log(`#${n1}${n2}${n3}${n4}${n5}${n6}`)
             br.style.backgroundColor = `#${n1}${n2}${n3}${n4}${n5}${n6}`
             clrs.push(`#${n1}${n2}${n3}${n4}${n5}${n6}`)
            }else{
                br.style.backgroundColor = valueColor
                clrs.push(valueColor)
            }

            gr.appendChild(br)

            jorge = document.createElement('div')
            jorge.setAttribute('class', 'blacko')
            gr.appendChild(jorge)
            if (100 / what.length - 30 / what.length > 8.5) {
                br.style.width = 'calc(8.5%)'
                jorge.style.width = 'calc(8.5%)'
                wids = 8.5
                gr.style.maxWidth = '600px'
            } else {
                br.style.width = `calc( ${100 / what.length - 30 / what.length}% )`
                jorge.style.width = `calc( ${100 / what.length - 30 / what.length}% )`
                wids = 100 / what.length - 30 / what.length
                if (600 + what.length * 10 < 1000) {
                    gr.style.maxWidth = 600 + what.length * 10 + 'px'
                } else {
                    gr.style.maxWidth = '1000px'
                }
            }

            intxts.push(asd[ui] + ' : ' + xernols + '%')

            ht = String(uao[0] / sum * 100).replace(new RegExp('(?<=[0-9]\.[0-9]{2})[0-9]+'), '')

            gr.style.animation = 'hidden ' + 94 / (ht / (uao[0] / sum * 100)) / 6.99 + 's'

            ar.style.animation = 'hide ' + 94 / (ht / (uao[0] / sum * 100)) / 24 + 's' + ' steps(1)'
           
            br.style.animation = 'baran ' + 94 / (ht / (uao[ui] / sum * 100)) / 25 + 's'

            htWiotDec = ht.replace(new RegExp('\\.[0-9]+'), '')

            htLstN = String(htWiotDec)[Number(String(htWiotDec).length) - 1]

            line = document.createElement('hr')
            gr.appendChild(line)
            line2 = document.createElement('hr')
            gr.appendChild(line2)
            line3 = document.createElement('hr')
            gr.appendChild(line3)
            line4 = document.createElement('hr')
            gr.appendChild(line4)

            mxNum = Math.round(ht)
            if (mxNum > ht) {
                br.style.height = `calc(${94 / (mxNum / (uao[ui] / sum * 100))}%)`
                jorge.style.bottom = `calc(${94 / (100 / xernolsim)}%)`
                hgts.push(94 / (mxNum / (uao[ui] / sum * 100)))
                altur = 94 / (mxNum / (uao[ui] / sum * 100))
                line.style.bottom = 'calc(94%)'
                line2.style.bottom = `calc(${94 / 2}%)`
                line3.style.bottom = `calc(${94 / 4}%)`
                line4.style.bottom = `calc(${94 * 0.75}%)`
            } else {
                br.style.height = `calc(${94 / (ht / (uao[ui] / sum * 100))}%)`
                jorge.style.bottom = `calc(${94 / (100 / xernolsim)}%)`
                hgts.push(94 / (ht / (uao[ui] / sum * 100)))
                altur = 94 / (ht / (uao[ui] / sum * 100))
                line.style.bottom = `calc(${94 / (ht / mxNum)}%)`
                line2.style.bottom = `calc(${94 / (ht / mxNum) / 2}%)`
                line3.style.bottom = `calc(${94 / (ht / mxNum) / 4}%)`
                line4.style.bottom = `calc(${94 / (ht / mxNum) * 0.75}%)`
            }

            pa = document.createElement('p')
            line.appendChild(pa)
            pa.innerText = mxNum
            
            if (String(mxNum).length == 1) { // 1
                pa.style.left = '-12px'
            } else if (String(mxNum).length == 2) { // 10
                pa.style.left = '-20px'
            } else if (String(mxNum).length == 3) { //100
                pa.style.left = '-28px'
            } else if (String(mxNum).length == 4) { //10.5
                pa.style.left = '-33px'
            } else if (String(mxNum).length == 5) { // 10.55
                pa.style.left = '-42px'
            }
            

            pa2 = document.createElement('p')
            line2.appendChild(pa2)
            pa2.innerText = mxNum / 2
         
            if (String(mxNum / 2).length == 1) { // 1
                pa2.style.left = '-10px'
            } else if (String(mxNum / 2).length == 2) { // 10
                pa2.style.left = '-20px'
            } else if (String(mxNum / 2).length == 3) { //100
                pa2.style.left = '-24px'
            } else if (String(mxNum / 2).length == 4) { //10.5
                pa2.style.left = '-33px'
            } else if (String(mxNum / 2).length == 5) { // 10.55
                pa2.style.left = '-42px'
            }

            pa3 = document.createElement('p')
            line3.appendChild(pa3)
            pa3.innerText = mxNum / 4
           
            if (String(mxNum / 4).length == 1) { // 1
                pa3.style.left = '-12px'
            } else if (String(mxNum / 4).length == 2) { // 10
                pa3.style.left = '-20px'
            } else if (String(mxNum / 4).length == 3) { //100
                pa3.style.left = '-24px'
            } else if (String(mxNum / 4).length == 4) { //10.5
                pa3.style.left = '-33px'
            } else if (String(mxNum / 4).length == 5) { // 10.55
                pa3.style.left = '-42px'
            }
            pa4 = document.createElement('p')
            line4.appendChild(pa4)
            pa4.innerText = mxNum * 0.75
          
            if (String(mxNum * 0.75).length == 1) { // 1
                pa4.style.left = '-12px'
            } else if (String(mxNum * 0.75).length == 2) { // 10
                pa4.style.left = '-20px'
            } else if (String(mxNum * 0.75).length == 3) { //100
                pa4.style.left = '-24px'
            } else if (String(mxNum * 0.75).length == 4) { //10.5
                pa4.style.left = '-33px'
            } else if (String(mxNum * 0.75).length == 5) { // 10.55
                pa4.style.left = '-42px'
            }

            pc = 12.5 * (what.length - 1) + 8.5
            pc2 = 100 / what.length * (what.length - 1) + (100 / what.length - 30 / what.length)
            if (ui == 0) {
                if (100 / what.length - 30 / what.length > 8.5) {
                    br.style.left = `calc(${left + ((100 - pc) / 2)}%)`
                    jorge.style.left = `calc(${left + ((100 - pc) / 2)}%)`
                    lfts.push(left + (100 - pc) / 2)
                } else {
                    br.style.left = `calc(${left + ((100 - pc2) / 2)}%)`
                    jorge.style.left = `calc(${left + ((100 - pc2) / 2)}%)`
                    lfts.push(left + (100 - pc2) / 2)
                }

            } else {
                if (100 / what.length - 30 / what.length > 8.5) {
                    br.style.left = `calc(${left + ((100 - pc) / 2)}%)`
                    jorge.style.left = `calc(${left + ((100 - pc) / 2)}%)`
                    lfts.push(left + (100 - pc) / 2)
                } else {
                    br.style.left = `calc(${left + ((100 - pc2) / 2)}%)`
                    jorge.style.left = `calc(${left + ((100 - pc2) / 2)}%)`
                    lfts.push(left + (100 - pc2) / 2)
                }

            }

            if (100 / what.length - 30 / what.length > 8.5) {
                left += 8.5 + 4
            } else {
                left += 100 / what.length
            }
            if (what.length > 1) {
            square = document.createElement('div')
                square.setAttribute('class', 'squar')
                jorge.appendChild(square)
                square.style.animation = 'popup ' + altur / 24 + 's' + ' steps(1)'

                 
                sqap = document.createElement('p')
                sqap.setAttribute('class', 'squarp')
                sqap.innerText = xernolsim + '%'
                square.appendChild(sqap)

                if (ischeck == true) {
                    square.style.visibility = 'hidden'
                }
            }
            if (what.length > 1 && ui != what.length - 1) {
                fra2 = uao[ui + 1] / sum * 100
                
                tp = 0
                rg = 0
                for (n = 0; n <= Math.round(fra2/1.2); n++) {
                    square2 = document.createElement('div')
                    square.appendChild(square2)
                    square2.setAttribute('class', 'SQUARE2')
                    square2.style.position = 'absolute'
                    square2.style.width = '5px'
                    square2.style.height = '5px'
                    tp+= 100
                    rg+= 154
    
                    square2.style.top = `calc(${-rg}% - -1vw + ${-50/fra2}%)`
                    square2.style.right = `calc(${-rg}% - -1vw + ${-50/fra2}%)`
                    square2.style.backgroundColor = 'red'
                }
            }
        }
    }else{
        interclasses = []
        aparic = []

        for (n in what) {
            interval = []
            //what = [1,2]
            if (what[n] >= 0) {
                for (c = 0; c <= what[n] + Number(iclass.value); c += Number(iclass.value)) {
                    // intervalo de classe = 2
                    // c = 0; c <= 4; c += 2 
                    interval.push(c)
                    // interval = [0, 2, 4]
                    if (interval.length != 1) {  // Se o comprimento de interval for maior que 1
                        //apar2 = 0
                        if (what[n] >= interval[interval.length - 2] && what[n] < interval[interval.length - 1]) {
                            // Se 1 >= 0 && 1 < 2
                            //apar2 += Number(apar[n])
                            // apar = [1,1,1,1] (Número que os números se repetem)
                            // apar += 1

                            if (interclasses.indexOf(interval[interval.length - 2] + ' |-- ' + interval[interval.length - 1]) == -1) {
                                interclasses.push(interval[interval.length - 2] + ' |-- ' + interval[interval.length - 1])
                                aparic.push(apar[n])
                                
                            } else {
                                
                                aparic[interclasses.indexOf(interval[interval.length - 2] + ' |-- ' + interval[interval.length - 1])] += apar[n]
                            }

                        }
                        // interclasses.push(0 |-- 2)
                        // aparic.push(2)
                    }
                }
            } else {
                for (c = 0; c >= what[n] - Number(iclass.value); c -= Number(iclass.value)) {
                    // intervalo de classe = 2
                    // c = 0; c <= 4; c += 2 
                    interval.push(c)
                    // interval = [0, 2, 4]
                    if (interval.length != 1) {  // Se o comprimento de interval for maior que 1
                        //apar2 = 0
                        if (what[n] <= interval[interval.length - 2] && what[n] > interval[interval.length - 1]) {
                            // Se 1 >= 0 && 1 < 2
                            //apar2 += Number(apar[n])
                            // apar = [1,1,1,1] (Número que os números se repetem)
                            // apar += 1

                            if (interclasses.indexOf(interval[interval.length - 2] + ' |-- ' + interval[interval.length - 1]) == -1) {
                                interclasses.push(interval[interval.length - 2] + ' |-- ' + interval[interval.length - 1])
                                aparic.push(apar[n])
                                
                            } else {
                                
                                aparic[interclasses.indexOf(interval[interval.length - 2] + ' |-- ' + interval[interval.length - 1])] += apar[n]
                            }

                        }
                        // interclasses.push(0 |-- 2)
                        // aparic.push(2)
                    }
                }

            }
        }

        asd = sort2(aparic, interclasses)[1]
        uao = sort2(aparic, interclasses)[0]

        sum = 0
        for (n in aparic) {
            sum += aparic[n]
        }

        
        for (ui = interclasses.length; ui > -1; ui--) {
            
            if (uao[ui] / sum * 100 == 0) {
                
                interclasses.splice(ui, 1)
            }
        }
        // Frequências com intervalo de classe

 left = 0

 for (ui = 0; ui < interclasses.length; ui++) {

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
     xernols = String(uao[ui] / sum * 100).replace(new RegExp('(?<=[0-9]\.[0-9]{2})[0-9]+'), '')
     tdata.innerText = xernols + '%'
     optn2++
     ju = document.createElement('option')
     ju.text = 'fr ' + `${asd[ui]}: ${uao[ui] / sum * 100}% `
     porcent.appendChild(ju)

     //fa 
     fa += uao[ui]
     jn = document.createElement('option')
     tdata = document.createElement('td')
     trow.appendChild(tdata)
     tdata.innerText = fa
     jn.text = 'fa ' + fa
     fac.appendChild(jn)

     //fra 
     fra += uao[ui] / sum * 100
     ja = document.createElement('option')
     tdata = document.createElement('td')
     trow.appendChild(tdata)
     xernolsim = String(fra).replace(new RegExp('(?<=[0-9]\.[0-9]{2})[0-9]+'), '')
     tdata.innerText = xernolsim + '%'
     ja.text = 'fra ' + fra + '%'
     freac.appendChild(ja)

     br = document.createElement('div')
     br.setAttribute('class', 'bar')
     br.setAttribute('onmouseenter', `hey(${ui})`)
     br.setAttribute('onmouseout', `hah(${ui})`)
     num1 = []
     num2 = []
    
    num1 = ['0', '1', '2', '3', '4', '5', '6','7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    console.log(num1)
    n1 = num1[Math.floor(num1.length * Math.random())]
    n2 = num1[Math.floor(num1.length * Math.random())]
    n3 = num1[Math.floor(num1.length * Math.random())]
    n4 = num1[Math.floor(num1.length * Math.random())]
    n5 = num1[Math.floor(num1.length * Math.random())]
    n6 = num1[Math.floor(num1.length * Math.random())]

     if (valueColor == null || cn == true) {
         console.log(`#${n1}${n2}${n3}${n4}${n5}${n6}`)
     br.style.backgroundColor = `#${n1}${n2}${n3}${n4}${n5}${n6}`
     clrs.push(`#${n1}${n2}${n3}${n4}${n5}${n6}`)
     }else{
         br.style.backgroundColor = valueColor
         clrs.push(valueColor)
     }

     gr.appendChild(br)

     jorge = document.createElement('div')
     jorge.setAttribute('class', 'blacko')
     gr.appendChild(jorge)
     if (100 / interclasses.length - 30 / interclasses.length > 8.5) {
         br.style.width = 'calc(8.5%)'
         jorge.style.width = 'calc(8.5%)'
         wids = 8.5
         gr.style.maxWidth = '600px'
     } else {
         br.style.width = `calc( ${100 / interclasses.length - 30 / interclasses.length}% )`
         jorge.style.width = `calc( ${100 / interclasses.length - 30 / interclasses.length}% )`
         wids = 100 / interclasses.length - 30 / interclasses.length
         if (600 + interclasses.length * 10 < 1000) {
             gr.style.maxWidth = 600 + interclasses.length * 10 + 'px'
         } else {
             gr.style.maxWidth = '1000px'
         }
     }

     intxts.push(asd[ui] + ' : ' + xernols + '%')

     ht = String(uao[0] / sum * 100).replace(new RegExp('(?<=[0-9]\.[0-9]{2})[0-9]+'), '')

     gr.style.animation = 'hidden ' + 94 / (ht / (uao[0] / sum * 100)) / 6.99 + 's'

     ar.style.animation = 'hide ' + 94 / (ht / (uao[0] / sum * 100)) / 24 + 's' + ' steps(1)'
     
     br.style.animation = 'baran ' + 94 / (ht / (uao[ui] / sum * 100)) / 25 + 's'

     

     

     
     htWiotDec = ht.replace(new RegExp('\\.[0-9]+'), '')

     htLstN = String(htWiotDec)[Number(String(htWiotDec).length) - 1]

     


     line = document.createElement('hr')
     gr.appendChild(line)
     line2 = document.createElement('hr')
     gr.appendChild(line2)
     line3 = document.createElement('hr')
     gr.appendChild(line3)
     line4 = document.createElement('hr')
     gr.appendChild(line4)

     mxNum = Math.round(ht)
     if (mxNum > ht) {
         br.style.height = `calc(${94 / (mxNum / (uao[ui] / sum * 100))}%)`
         jorge.style.bottom = `calc(${94 / (100 / xernolsim)}%)`
         hgts.push(94 / (mxNum / (uao[ui] / sum * 100)))
         altur = 94 / (mxNum / (uao[ui] / sum * 100))
         line.style.bottom = 'calc(94%)'
         line2.style.bottom = `calc(${94 / 2}%)`
         line3.style.bottom = `calc(${94 / 4}%)`
         line4.style.bottom = `calc(${94 * 0.75}%)`
     } else {
         br.style.height = `calc(${94 / (ht / (uao[ui] / sum * 100))}%)`
         jorge.style.bottom = `calc(${94 / (100 / xernolsim)}%)`
         hgts.push(94 / (ht / (uao[ui] / sum * 100)))
         altur = 94 / (ht / (uao[ui] / sum * 100))
         line.style.bottom = `calc(${94 / (ht / mxNum)}%)`
         line2.style.bottom = `calc(${94 / (ht / mxNum) / 2}%)`
         line3.style.bottom = `calc(${94 / (ht / mxNum) / 4}%)`
         line4.style.bottom = `calc(${94 / (ht / mxNum) * 0.75}%)`
     }

     pa = document.createElement('p')
     line.appendChild(pa)
     pa.innerText = mxNum
     
     if (String(mxNum).length == 1) { // 1
         pa.style.left = '-12px'
     } else if (String(mxNum).length == 2) { // 10
         pa.style.left = '-20px'
     } else if (String(mxNum).length == 3) { //100
         pa.style.left = '-28px'
     } else if (String(mxNum).length == 4) { //10.5
         pa.style.left = '-33px'
     } else if (String(mxNum).length == 5) { // 10.55
         pa.style.left = '-42px'
     }
     

     pa2 = document.createElement('p')
     line2.appendChild(pa2)
     pa2.innerText = mxNum / 2
     
     if (String(mxNum / 2).length == 1) { // 1
         pa2.style.left = '-10px'
     } else if (String(mxNum / 2).length == 2) { // 10
         pa2.style.left = '-20px'
     } else if (String(mxNum / 2).length == 3) { //100
         pa2.style.left = '-24px'
     } else if (String(mxNum / 2).length == 4) { //10.5
         pa2.style.left = '-33px'
     } else if (String(mxNum / 2).length == 5) { // 10.55
         pa2.style.left = '-42px'
     }

     pa3 = document.createElement('p')
     line3.appendChild(pa3)
     pa3.innerText = mxNum / 4
     
     if (String(mxNum / 4).length == 1) { // 1
         pa3.style.left = '-12px'
     } else if (String(mxNum / 4).length == 2) { // 10
         pa3.style.left = '-20px'
     } else if (String(mxNum / 4).length == 3) { //100
         pa3.style.left = '-24px'
     } else if (String(mxNum / 4).length == 4) { //10.5
         pa3.style.left = '-33px'
     } else if (String(mxNum / 4).length == 5) { // 10.55
         pa3.style.left = '-42px'
     }
     pa4 = document.createElement('p')
     line4.appendChild(pa4)
     pa4.innerText = mxNum * 0.75
   
     if (String(mxNum * 0.75).length == 1) { // 1
         pa4.style.left = '-12px'
     } else if (String(mxNum * 0.75).length == 2) { // 10
         pa4.style.left = '-20px'
     } else if (String(mxNum * 0.75).length == 3) { //100
         pa4.style.left = '-24px'
     } else if (String(mxNum * 0.75).length == 4) { //10.5
         pa4.style.left = '-33px'
     } else if (String(mxNum * 0.75).length == 5) { // 10.55
         pa4.style.left = '-42px'
     }

     pc = 12.5 * (interclasses.length - 1) + 8.5
     pc2 = 100 / interclasses.length * (interclasses.length - 1) + (100 / interclasses.length - 30 / interclasses.length)
     if (ui == 0) {
         if (100 / interclasses.length - 30 / interclasses.length > 8.5) {
             br.style.left = `calc(${left + ((100 - pc) / 2)}%)`
             jorge.style.left = `calc(${left + ((100 - pc) / 2)}%)`
             lfts.push(left + (100 - pc) / 2)
         } else {
             br.style.left = `calc(${left + ((100 - pc2) / 2)}%)`
             jorge.style.left = `calc(${left + ((100 - pc2) / 2)}%)`
             lfts.push(left + (100 - pc2) / 2)
         }

     } else {
         if (100 / interclasses.length - 30 / interclasses.length > 8.5) {
             br.style.left = `calc(${left + ((100 - pc) / 2)}%)`
             jorge.style.left = `calc(${left + ((100 - pc) / 2)}%)`
             lfts.push(left + (100 - pc) / 2)
         } else {
             br.style.left = `calc(${left + ((100 - pc2) / 2)}%)`
             jorge.style.left = `calc(${left + ((100 - pc2) / 2)}%)`
             lfts.push(left + (100 - pc2) / 2)
         }

     }

     if (100 / interclasses.length - 30 / interclasses.length > 8.5) {
         left += 8.5 + 4
     } else {
         left += 100 / interclasses.length
     }
     if (interclasses.length > 1) {
     square = document.createElement('div')
         square.setAttribute('class', 'squar')
         jorge.appendChild(square)
         square.style.animation = 'popup ' + altur / 24 + 's' + ' steps(1)'

          
         sqap = document.createElement('p')
         sqap.setAttribute('class', 'squarp')
         sqap.innerText = xernolsim + '%'
         square.appendChild(sqap)

         if (ischeck == true) {
             square.style.visibility = 'hidden'
         }

     }
     if (interclasses.length > 1 && ui != interclasses.length - 1) {
         fra2 = uao[ui + 1] / sum * 100
        
         tp = 0
         rg = 0
         for (n = 0; n <= Math.round(fra2/1.2); n++) {
             square2 = document.createElement('div')
             square.appendChild(square2)
             square2.setAttribute('class', 'SQUARE2')
             square2.style.position = 'absolute'
             square2.style.width = '5px'
             square2.style.height = '5px'
             tp+= 100
             rg+= 154

             square2.style.top = `calc(${-rg}% - -1vw + ${-50/fra2}%)`
             square2.style.right = `calc(${-rg}% - -1vw + ${-50/fra2}%)`
             square2.style.backgroundColor = 'red'
         }
     }
 }
    }

    showmoda = 'Moda: '
    for (m = 0; m < moda.length; m++) {
        if (moda.length != 1 && m != moda.length - 1 && m != moda.length - 2) {
            showmoda += `${moda[m]}, `
        } else if (m == moda.length - 2) {
            showmoda += `${moda[m]} e `
        } else {
            showmoda += `${moda[m]}`
        }

    }
    if (what.length < 2 || mod[0] == 0) {
        m3.innerText = 'Moda: ---'
    } else {
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

//REDO

    function redo(){
    
        if (click == 0) {
            
            css = '.person {background-color: rgb(231, 231, 231); }'
           style = document.createElement('style')
           document.head.appendChild(style)
           style.appendChild(document.createTextNode(css))

           css = '.person:hover {background-color: rgb(231, 231, 231); }'
           style = document.createElement('style')
           document.head.appendChild(style)
           style.appendChild(document.createTextNode(css))

           css = '.person:active {background-color: rgb(206, 206, 206); }'
           style = document.createElement('style')
           document.head.appendChild(style)
           style.appendChild(document.createTextNode(css))

            css = '.person > img#f {visibility: visible;}'
            style = document.createElement('style')
            document.head.appendChild(style)
            style.appendChild(document.createTextNode(css))
 
             css = '.person:hover > img#f {visibility: visible;}'
             style = document.createElement('style')
             document.head.appendChild(style)
             style.appendChild(document.createTextNode(css))

            gear = document.getElementsByClassName('person')[0] 

            gear.style.opacity = '100'
            gear.style.left = 'calc(270px + (100% - 300px) / 2)'
            gear.style.top = 'calc(100% - 112px)'
            

            gear.innerHTML = '<img src="x-mark.png" alt="x-mark" id= "s">'
            config = document.getElementsByClassName('config')[0]
            config.style.transitionDuration = '0.4s'
            config.style.visibility = 'visible'
            config.style.opacity = '100'
            config.style.top = '-7px'

                config.innerHTML = `<p style= "position: relative; top: -1px;">Esconder o gráfico de pareto:</p><input type="checkbox" onclick= "check()"> <div class= "o"><p style= "padding-top: 5px; position: relative; top: -6px;">Cor das barras:</p> <input type= "color" id= "cor"> <img src="paint-brush.png" style= "width: 25px; height: 25px;" onclick="change()"> <img src="rainbow-circle.png" style= "width: 30px; height: 30px; position: relative; top: 3px;" onclick= "random()" id="rb"></div>`
                config.getElementsByTagName('input')[1].value = valueColor

                if (ischeck == true) {
                console.log(config.getElementsByTagName('input')[0])
                config.getElementsByTagName('input')[0].checked = true
                }
            
            for (n = 0; n < config.getElementsByTagName('input').length; n++) {
                config.getElementsByTagName('input')[n].style.cursor = 'pointer'
            }

            console.log('click = 1')
            click = 1

            if (rainbow == true) {
          
            }
        }else{

            if (rainbow == true) {
              
                }

           css = '.person {background-color: transparent;}'
           style = document.createElement('style')
           document.head.appendChild(style)
           style.appendChild(document.createTextNode(css))
            

           css = '.person:hover {background-color: rgb(231, 231, 231); }'
           style = document.createElement('style')
           document.head.appendChild(style)
           style.appendChild(document.createTextNode(css))

           css = '.person:active {background-color: rgb(206, 206, 206); }'
           style = document.createElement('style')
           document.head.appendChild(style)
           style.appendChild(document.createTextNode(css))

           
            css = '.person > img#f {opacity: 0; }'
            style = document.createElement('style')
            document.head.appendChild(style)
            style.appendChild(document.createTextNode(css))
            

             css = '.person:hover > img#f {opacity: 100;}'
             style = document.createElement('style')
             document.head.appendChild(style)
             style.appendChild(document.createTextNode(css))

            gear.style.left = 'calc(100% - 45px)'
            gear.style.top = 'calc(100% - 45px)'
            gear.innerHTML = '<img src="gear.png" alt="configuration gear" id= "f">'
            config = document.getElementsByClassName('config')[0]
            config.style.transitionDuration = '0.4s'
            config.style.visibility = 'hidden'
            config.style.opacity = '0'
            config.style.top = '0%'
            console.log('click = 0')
            click = 0

            config.getElementsByTagName('img')[0].style.transitionDuration = '0.4s'
            config.getElementsByTagName('img')[0].style.visibility = 'hidden'

            for (n = 0; n < config.getElementsByTagName('input').length; n++) {
                config.getElementsByTagName('input')[n].style.transitionDuration = '0.4s'
                config.getElementsByTagName('input')[n].style.visibility = 'hidden'
    
           }
        }
    }

    function check() {
        inp = config.getElementsByTagName('input')[0]
        
        if (inp.checked == true) {
            ischeck = true
           sqs = document.getElementById('graph').getElementsByClassName('squar')
           sqps = document.getElementById('graph').getElementsByClassName('squarp')
           for (n = 0; n < sqs.length; n++) {
           sqs[n].style.visibility= 'hidden'
           }
        }else{
            ischeck = false
            sqs = document.getElementById('graph').getElementsByClassName('squar')
            sqps = document.getElementById('graph').getElementsByClassName('squarp')
            
            for (n = 0; n < sqs.length; n++) {
            sqs[n].style.visibility = 'visible'
           
            }
        }
    }
    function change() {
        console.log('change color')
            css = '.config img#rb {background-color: transparent;}'
            style = document.createElement('style')
            document.head.appendChild(style)
            style.appendChild(document.createTextNode(css))

            css = '.config img:hover#rb {background-color: rgb(200, 200, 200);}'
           style = document.createElement('style')
           document.head.appendChild(style)
           style.appendChild(document.createTextNode(css))

            rainbow = false
            cn = false
            config = document.getElementsByClassName('config')[0]
         
         valueColor = config.getElementsByTagName('input')[1].value

         clrs = []
         for (n = 0; n < gr.getElementsByClassName('bar').length; n++) {
            gr.getElementsByClassName('bar')[n].style.backgroundColor = config.getElementsByTagName('input')[1].value

            clrs.push(config.getElementsByTagName('input')[1].value)
         }
    }
    
    function random() {
        if (click == 1 && valueColor!= null) {
            if (rainbow == false) {
                css = '.config img#rb {background-color: rgb(200, 200, 200); border-radius: 3px;}'
                style = document.createElement('style')
                document.head.appendChild(style)
                style.appendChild(document.createTextNode(css))
    
                css = '.config img#rb:hover {background-color: rgb(200, 200, 200);}'
                style = document.createElement('style')
                document.head.appendChild(style)
                style.appendChild(document.createTextNode(css))
           
            clrs = []
         for (n = 0; n < gr.getElementsByClassName('bar').length; n++) {
            n1 = num1[Math.floor(num1.length * Math.random())]
            n2 = num1[Math.floor(num1.length * Math.random())]
            n3 = num1[Math.floor(num1.length * Math.random())]
            n4 = num1[Math.floor(num1.length * Math.random())]
            n5 = num1[Math.floor(num1.length * Math.random())]
            n6 = num1[Math.floor(num1.length * Math.random())]
    
            gr.getElementsByClassName('bar')[n].style.backgroundColor = `#${n1}${n2}${n3}${n4}${n5}${n6}`
            clrs.push(`#${n1}${n2}${n3}${n4}${n5}${n6}`)
         }
           cn = true
            rainbow = true
        }else{
            css = '.config img#rb {background-color: transparent;}'
            style = document.createElement('style')
            document.head.appendChild(style)
            style.appendChild(document.createTextNode(css))

            css = '.config img#rb:hover {background-color: rgb(200, 200, 200);}'
            style = document.createElement('style')
            document.head.appendChild(style)
            style.appendChild(document.createTextNode(css))

            cn = false
            rainbow = false
            config = document.getElementsByClassName('config')[0]
            
            valueColor = config.getElementsByTagName('input')[1].value
            

            clrs = []
            for (n = 0; n < gr.getElementsByClassName('bar').length; n++) {
               gr.getElementsByClassName('bar')[n].style.backgroundColor = config.getElementsByTagName('input')[1].value

               clrs.push(config.getElementsByTagName('input')[1].value)
        }
    }
    }
}
    function hey(idx) {

            console.log(clrs[idx])
            if (ar.getElementsByClassName('pnumber').length > 0) {
                ar.removeChild(ar.getElementsByClassName('pnumber')[0])
            }

            ar.style.left = `calc(${lfts[idx] + wids/2}% - 7px)`
            ar.style.bottom =  `calc(${hgts[idx]}% - 3px)`
             ar.style.opacity = '100'
             ar.style.visibility = 'visible'
             pnum = document.createElement('p')
            pnum.style.position = 'absolute'
            pnum.setAttribute('class', 'pnumber')
            pnum.style.padding = '3px 8px 3px 8px'
    
            console.log('text:',intxts[idx])
            console.log(String(intxts[idx]).replace(new RegExp('.+\\s:\\s', 'g'), ''))

            pnum.innerHTML = `${String(intxts[idx]).replace(new RegExp('\\s:.+', 'g'), '')}<br>`
            ar.appendChild(pnum)

            if (lfts[idx] > 7 && lfts[idx] < 87) {
                pnum.style.top = '-45px'
                ar.style.justifyItems = 'center'
                ar.style.alignItems = 'normal'
                ar.style.borderTopColor = 'black'
                ar.style.borderRightColor = 'transparent'
                ar.style.borderLeftColor = 'transparent'
                ar.style.borderBottomColor = 'transparent'
            }else{
             //  pnum.style.left = 'calc(50% + 5px)'
               // pnum.style.top = '-17px'
              // pnum.style.left = '0px'
             //  pnum.style.top = '0px'
               if (lfts[idx] < 7) {
                // /*
             //  pnum.style.left = '4px'
               ar.style.display = 'grid'
               ar.style.alignItems = 'center'
               ar.style.justifyItems = 'start'
                ar.style.borderTopColor = 'transparent'
                ar.style.borderRightColor = 'transparent'
                ar.style.borderLeftColor = 'transparent'
                ar.style.borderBottomColor = 'black'
                // */
               }else{
              // pnum.style.left += 5
             // /*
                ar.style.alignItems = 'center'
                ar.style.justifyItems = 'end'
                 ar.style.borderTopColor = 'transparent'
                 ar.style.borderRightColor = 'transparent'
                 ar.style.borderLeftColor = 'transparent'
                 ar.style.borderBottomColor = 'black'
                 //*/
               }
            }

            pnum.innerHTML += `<input type= "color" class= "inputcolor"></input>${String(intxts[idx]).replace(new RegExp('.+\\s:\\s', 'g'), '')}`

            pnum.getElementsByTagName('input')[0].value = clrs[idx]

    }
    function hah() {
        ar.style.opacity = '0'
        ar.style.visibility = 'hidden'
    }