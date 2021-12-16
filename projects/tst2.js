    function calcularIMC() {
        m = document.getElementById('massa').value 
        a = document.getElementById('altura').value 
        circu = document.getElementById('circ')
        res = document.getElementById('result')
        if (m.length != 0 && a.length != 0) {
        console.log(m,a)
        console.log(a*a)
        console.log(m/(a*a))
         
        res.innerText = Math.floor(m/(a*a))
        circu.style.display = 'grid'
        }else{
            window.alert('Preencha os dados corretamente')
        }
    }
