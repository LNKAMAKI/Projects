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
     for (n = 0; n < 240; n++) {
         num1.push(n)

     }
     for (n = 0; n < 240; n++) {
         num2.push(n)

     }
     n1 = num1[Math.floor(num1.length * Math.random())]
     n2 = num2[Math.floor(num2.length * Math.random())]
     n3 = num2[Math.floor(num2.length * Math.random())]
     if (valueColor == null || cn == true) {
     br.style.backgroundColor = `rgb(${n1}, ${n2}, ${n3})`
     }else{
         br.style.backgroundColor = valueColor
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
    // pnum = document.createElement('p')
     //pnum.style.position = 'absolute'
     //pnum.innerText = intxts[idx]
    // pnum.setAttribute('class', 'pnumber')
    // pnum.style.top = '-35px'
     //pnum.innerText = '11111'
     //gr.appendChild(pnum)
     
     /*
     pnum = document.createElement('p')
     pnum.style.position = 'absolute'
     pnum.innerText = asd[ui] + ' : ' + xernols + '%'
     pnum.setAttribute('class', 'pnumber')
     pnum.style.top = '-35px'
     br.appendChild(pnum)
     */

    // pnum.appendChild(ar)

     ht = String(uao[0] / sum * 100).replace(new RegExp('(?<=[0-9]\.[0-9]{2})[0-9]+'), '')

     gr.style.animation = 'hidden ' + 94 / (ht / (uao[0] / sum * 100)) / 6.99 + 's'
     // br.style.animation = 'baran ' + uao[ui]/sum * 280/90 + 's'
     br.style.animation = 'baran ' + 94 / (ht / (uao[ui] / sum * 100)) / 25 + 's'

     //console.log(xernols)

     //console.log('interclasses length' + interclasses.length)

     //console.log('Maior porcentagem: ' + ht)
     htWiotDec = ht.replace(new RegExp('\\.[0-9]+'), '')

     htLstN = String(htWiotDec)[Number(String(htWiotDec).length) - 1]

     //console.log(htWiotDec, htLstN)


     line = document.createElement('hr')
     gr.appendChild(line)
     line2 = document.createElement('hr')
     gr.appendChild(line2)
     line3 = document.createElement('hr')
     gr.appendChild(line3)
     line4 = document.createElement('hr')
     gr.appendChild(line4)

     //console.log(htWiotDec.length)
     // if (htWiotDec.length > 1) {
     //if (String(ht).search('\\.') == -1) { // Se o número não tiver casa decimal (Ex: 100)

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
     //pa.style.left = -String(mxNum).length * 9 + 'px'
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
     //console.log('max number: ' + mxNum)

     pa2 = document.createElement('p')
     line2.appendChild(pa2)
     pa2.innerText = mxNum / 2
     //pa2.style.left = -String(mxNum/2).length * 9 + 'px'
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
     //pa3.style.left = -String(mxNum/4).length * 9 + 'px'
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
     //pa4.style.left = -String(mxNum*0.75).length * 9 + 'px'
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
     //br.style.height = uao[ui]/sum * 100 * 2.866 + 'px'
     //br.style.height = '286.6px'

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
         //linha.style.display = 'none'
         //square.style.top = 100/fra*(altur/2) + '%'

         fra2 = uao[ui + 1] / sum * 100
         //console.log('fra2: ' + fra2)
         //console.log(fra2 / 3)
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
             //50/10 = 5 30/10 = 3
             //square2.style.top = -tp + '%'
             //square2.style.right = -rg + '%'
             square2.style.top = `calc(${-rg}% - -1vw + ${-50/fra2}%)`
             square2.style.right = `calc(${-rg}% - -1vw + ${-50/fra2}%)`
             square2.style.backgroundColor = 'red'
             //square2.style.animation = 'popup ' + altur/24 + 's' + ' steps(1)'
             //tp += 10
             //square2.style.top= -tp + 'px'
            // square2.style.right = `calc(${-tp}%)`
            // square2.style.top = `calc(${-tp}%)`
         }
     }
 }