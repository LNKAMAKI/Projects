    remov = 0
    function calcularIMC() {
        m = document.getElementById('massa').value 
        a = document.getElementById('altura').value 
       core = document.createElement('p')
       core.id = 'corres'
       document.getElementById('bd').appendChild(core)

        e = document.getElementsByClassName('end')[0]
        if (remov != 0) {
        e.removeChild(document.getElementById('circ'))
        document.getElementById('bd').removeChild(document.getElementById('corres'))
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
     
        remov++
        }else{
            window.alert('Preencha os dados corretamente')
        }
    }
