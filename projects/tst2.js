    remov = 0
    function calcularIMC() {
        m = document.getElementById('massa').value 
        a = document.getElementById('altura').value 
       core = document.createElement('p')
       core.id = 'corres'

       hd = document.getElementById('bd')
       hd.appendChild(core)
       

        e = document.getElementsByClassName('end')[0]
        if (remov != 0) {
        e.removeChild(document.getElementById('circ'))
        document.getElementById('bd').removeChild(document.getElementById('corres'))

        if (document.getElementsByTagName('table').length == 1) {
            hd.removeChild(document.getElementsByTagName('table')[0])
        }

        hd.removeChild(document.getElementById('motab'))
        }
        
        circu = document.createElement('div')
        circu.id = 'circ'
        e.appendChild(circu)

        res = document.createElement('p')
        res.id = 'result'
        circu.appendChild(res)

        if (m.length != 0 && a.length != 0) {
        console.log(m,a)
        console.log(a*a)
        console.log(m/(a*a))

         
       imc = m/(a*a)
        res.innerText = imc
       circu.style.display = 'grid'
        circu.style.animation = 'goup 0.4s'
       
       core.style.opacity = 0
       core.style.display = 'block'
       core.style.animation = 'goup 0.4s 0.3s forwards'
            if (imc < 18.5) {
            core.innerText = 'Abaixo do Peso'
            }else if(imc <= 24.9){
            core.innerText = 'Peso Normal'
            }else if(imc <= 29.9) {
            core.innerText = 'Sobrepeso'
            }else if(imc <= 34.9) {
                core.innerText = 'Obesidade Grau I'
            }else if(imc <= 39.9) {
                core.innerText = 'Obesidade Grau II'
            }else{
                core.innerText = 'Obesidade Grau III'
            }
            mt = document.createElement('input')
            mt.setAttribute('type', 'button')
           // mt.setAttribute('class', 'bf')
            mt.value = 'Mostrar Tabela'
            mt.style.margin = '20px auto 0px auto'
            
            mt.style.display = 'block'
            mt.id = 'motab'

            mt.setAttribute('onclick', 'clicado()')
            hd.appendChild(mt)
            mt.style.opacity = '0'
            mt.style.animation = 'goup 0.4s 0.6s forwards'

 //           tb = document.createElement('table')
 //   tb.innerHTML = '<thead><tr><th>CLASSIFICAÇÃO</th><th>IMC</th></tr></thead><tbody><tr><td>Abaixo do Peso</td><td>Abaixo 18.5</td></tr><tr><td>Peso Normal</td><td>18.5 - 24.9</td></tr><tr><td>Sobrepeso</td><td>25 - 29.9</td></tr><tr><td>Obesidade Grau I</td><td>30 - 34.9</td></tr><tr><td>Obesidade Grau II</td><td>35 - 39.9</td></tr><tr><td>Obesidade Grau III</td><td>Maior ou Igual 40</td></tr></tbody>'
 //   document.getElementById('bd').appendChild(tb)

        remov++
        }else{
            window.alert('Preencha os dados corretamente')
        }
    }

function clicado() {
   // window.alert('refazer')
    //document.getElementById('motab').setAttribute('class', 'af')
    document.getElementById('motab').value = 'Esconder Tabela'
    document.getElementById('motab').setAttribute('onclick', 'desfazer()')

    if (document.getElementsByTagName('table').length == 1) {
            hd.removeChild(document.getElementsByTagName('table')[0])

    }

    tb = document.createElement('table')
    tb.innerHTML = '<thead><tr><th>CLASSIFICAÇÃO</th><th>IMC</th></tr></thead><tbody><tr><td>Abaixo do Peso</td><td>Abaixo 18.5</td></tr><tr><td>Peso Normal</td><td>18.5 - 24.9</td></tr><tr><td>Sobrepeso</td><td>25 - 29.9</td></tr><tr><td>Obesidade Grau I</td><td>30 - 34.9</td></tr><tr><td>Obesidade Grau II</td><td>35 - 39.9</td></tr><tr><td>Obesidade Grau III</td><td>Maior ou Igual 40</td></tr></tbody>'
    hd.appendChild(tb)

    //tab = document.getElementsByTagName('table')[0]
    tb.style.display = 'table'

   tb.style.border = '0px solid black'

    toel = tb.getElementsByTagName('tr')
    
    for (trow = 0; trow < 1; trow++) {

        tdata = toel[trow].getElementsByTagName('th')

        for (num = 0; num < tdata.length; num++) {
        tdata[num].style.opacity = '0'
        tdata[num].style.border = '0px solid rgb(65, 169, 195) '
        tdata[num].style.animation = 'showup 1.5s forwards'
        }
    
    }
 
    dla = 0.3
    for (trow = 1; trow < toel.length; trow++) {
    tdata = toel[trow].getElementsByTagName('td')

        for (num = 0; num < tdata.length; num++) {
        tdata[num].style.opacity = '0'
        tdata[num].style.border = '0px solid black'
        tdata[num].style.animation = 'showup2 1.5s ' + dla + 's' + ' forwards'
        }
        dla += 0.3
    
    }
   
}

function desfazer() {
  // window.alert('desfazer')
    document.getElementById('motab').value = 'Mostrar Tabela'
    mt.setAttribute('onclick', 'clicado()')
   // if (document.getElementsByTagName('table').length == 1) {
   //     hd.removeChild(document.getElementsByTagName('table')[0])

//}

//tb = document.createElement('table')
//tb.innerHTML = '<thead><tr><th>CLASSIFICAÇÃO</th><th>IMC</th></tr></thead><tbody><tr><td>Abaixo do Peso</td><td>Abaixo 18.5</td></tr><tr><td>Peso Normal</td><td>18.5 - 24.9</td></tr><tr><td>Sobrepeso</td><td>25 - 29.9</td></tr><tr><td>Obesidade Grau I</td><td>30 - 34.9</td></tr><tr><td>Obesidade Grau II</td><td>35 - 39.9</td></tr><tr><td>Obesidade Grau III</td><td>Maior ou Igual 40</td></tr></tbody>'
//hd.appendChild(tb)

tb = document.getElementsByTagName('table')[0]
//tb.style.display = 'table'

tb.style.border = '0px solid black'

toel = tb.getElementsByTagName('tr')

dla = 0
for (trow = toel.length - 1; trow > -1; trow--) {
tdata = toel[trow].getElementsByTagName('td')

for (num = 0; num < tdata.length; num++) {
    tdata[num].style.animationPlayState = 'paused'

   }
  
   dla += 0.2
}

for (trow = 0; trow < 1; trow++) {

    tdata = toel[trow].getElementsByTagName('th')

    for (num = 0; num < tdata.length; num++) {
    tdata[num].style.animationPlayState = 'paused'
    }

}

tb.style.display = 'none'

}

