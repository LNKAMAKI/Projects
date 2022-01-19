
left = 0
nimpor = false
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
   n1 = num1[Math.floor(num1.length * Math.random())]
   n2 = num1[Math.floor(num1.length * Math.random())]
   n3 = num1[Math.floor(num1.length * Math.random())]
   n4 = num1[Math.floor(num1.length * Math.random())]
   n5 = num1[Math.floor(num1.length * Math.random())]
   n6 = num1[Math.floor(num1.length * Math.random())]

    if (valueColor == null || cn == true) {
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

    lie = String(ht).replace(new RegExp('(?<=[0-9]+)\\.[0-9]+'), '').length
    if (String(ht).search('\\.') == -1 || lie > 1) { //Se o número não tiver casa decimal ou ser maior que 9 (Ex.: 8, 7, 5, 4, 33.33, 12.5, 14.28)
        arredondamento = Math.round(ht)
    }else{ // Se o número for um 4.8, 5.5, 9.6
        console.log('DECIMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL')
        seila = String(ht).replace(new RegExp('(?<=[0-9]+\\.[0-9])[0-9]+'), '')
    resto = String(ht).replace(new RegExp('[0-9]+\\..'), '')
    primeiraCasaDecimal = String(seila).replace(new RegExp('[0-9]+\.'), '')
    roundar = Number(`${primeiraCasaDecimal}.${resto}`)
    frstnum = String(seila).replace(new RegExp('\\.[0-9]'), '')
    decround = Number(`${frstnum}.${Math.round(roundar)}`)
    arredondamento = decround
    }
    
   // htWiotDec = ht.replace(new RegExp('\\.[0-9]+'), '')

   // htLstN = String(htWiotDec)[Number(String(htWiotDec).length) - 1]

    lstlet = String(arredondamento)[String(arredondamento).length - 1]

    if (nimpor == false) {
    console.log('A porcentagem mais alta equivale a ' + ht)
    console.log(`${arredondamento}.length: ${String(arredondamento).length}`)
    console.log(`O último algarismo do número ${arredondamento} é: ${lstlet}`)
    }

    if (lstlet == 5 || lstlet == 0) { // 25, 50, 100, 4.5
       if (nimpor == false)
       console.log('mxNum: ' + arredondamento)

       mxNum = arredondamento
    }else if(lstlet >= 8) { 
       if  (String(ht).search('\\.') == -1 || lie > 1) { //8, 9, 48, 69
           if (nimpor == false)
       console.log('mxNum: ' + (Number(arredondamento) + (10 - Number(lstlet))))

       mxNum = Number(arredondamento) + (10 - Number(lstlet))
       // 10, 10, 50, 70
       }else{ // 4.8, 7.9
           if (nimpor == false)
           console.log('mxNum: ' + (Number(arredondamento) + (10 - Number(lstlet))/10))
           //4.8 + (10 - 8)/10

           mxNum = Number(arredondamento) + (10 - Number(lstlet))/10
           //5, 8
       }
    }else if (lstlet <= 2){ 
       if  (lie > 1) { // 11, 32
           if (nimpor == false)
           console.log('mxNum: ' + (Number(arredondamento) - Number(lstlet)))
           mxNum = Number(arredondamento) - Number(lstlet)
       }else{ 
           if (String(ht).search('\\.') == -1) { // 1, 2
           if (nimpor == false)
           console.log('mxNum: ' + arredondamento)
           mxNum = arredondamento 
           // 1, 2
           }else{ // 4.1, 5.2
               console.log('mxNum: ' + (Number(arredondamento) - Number(lstlet)/10))
               mxNum = Number(arredondamento) - Number(lstlet)/10
               // 4, 5
           }
       }
    }else{ 
       if  (lie > 1) { // 44, 56, 87, 93
       if (nimpor == false)
       console.log('mxNum: ' + (Number(arredondamento) + (5 - Number(lstlet))))
       mxNum = Number(arredondamento) + (5 - Number(lstlet))
       // 45, 55, 85, 95
       }else{
           if(String(ht).search('\\.') == -1) { // 4, 6, 7, 3
               if (nimpor == false)
               console.log('mxNum: ' + arredondamento)
               mxNum = arredondamento 
               // 4, 6, 7, 3
           }else{ // 4.4, 7.6, 9.7, 1.3
               if (nimpor == false)
               console.log('mxNum: ' + (Number(arredondamento) + (5 - Number(lstlet))/10))
               mxNum = Number(arredondamento) + (5 - Number(lstlet))/10
              // 4.5, 7.5, 9.5, 1.5
           }
       }
    }
    if (nimpor == false)
    console.log('---------------------')
   
    // 14 + (5 - 4) = 15
    // 16 + (5 - 6) = 16 + -1 16 - 1 = 15
    //mxNum = arredondamento


    /*
      line.style.bottom = 'calc(94%)'
           line2.style.bottom = `calc(${94 / 2}%)` 
           line3.style.bottom = `calc(${94 / 4}%)` 
           line4.style.bottom = `calc(${94 * 0.75}%)`
   */
  //console.log(String(mxNum).length + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')

  /*
  tds = 0
  for (n = 0; n < String(mxNum).length; n++) {
   console.log(String(mxNum)[n])
   tds = tds + Number(String(mxNum)[n])
  }
  console.log('soma: ', tds)
  */

    numarks = []
    
    if (String(mxNum).length > 1) {
        divisor = 5
    }else if(mxNum < 8 && mxNum > 3){ //7,6,5,4
        divisor = mxNum
    }else{
       divisor = 5
    }
    sal = 0
    
    for (n = mxNum; sal < divisor; n = n - Number(mxNum)/divisor) {
        nm = Number(String(n).replace(new RegExp('(?<=[0-9]\.[0-9]{2})[0-9]+'), ''))
        sal++
        if (nimpor == false)
       console.log(nm, sal)
       numarks.push(nm)
       line = document.createElement('hr')
       if (mxNum > ht) {
           line.style.bottom = `calc(${94*(nm / mxNum)}%)`
         
       }else{
           line.style.bottom = `calc(${94 / (ht / nm)}%)`
       }
      // console.log(94 / (ht / n))
       gr.appendChild(line)

       pa = document.createElement('p')
       line.appendChild(pa)
       pa.innerText = nm

       if (String(nm).length == 1) { // 1
           pa.style.left = '-8px'
        } else if (String(nm).length == 2) { // 10
           pa.style.left = '-20px'
        } else if (String(nm).length == 3) { //100
            pa.style.left = '-28px'
    } else if (String(nm).length == 4) { //10.5
            pa.style.left = '-33px'
        } else if (String(nm).length == 5) { // 10.55
            pa.style.left = '-42px'
    }
    }
    nimpor = true

    if (mxNum > ht) {
        br.style.height = `calc(${94 / (mxNum / (uao[ui] / sum * 100))}%)`
        jorge.style.bottom = `calc(${94 / (100 / xernolsim)}%)`
        hgts.push(94 / (mxNum / (uao[ui] / sum * 100)))
        altur = 94 / (mxNum / (uao[ui] / sum * 100))
       
    } else {
        br.style.height = `calc(${94 / (ht / (uao[ui] / sum * 100))}%)`
        jorge.style.bottom = `calc(${94 / (100 / xernolsim)}%)`
        hgts.push(94 / (ht / (uao[ui] / sum * 100)))
        altur = 94 / (ht / (uao[ui] / sum * 100))
        
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
} //Aqui