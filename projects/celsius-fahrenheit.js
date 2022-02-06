function converter() {
    frst = document.getElementsByName('fst')[0]
    n = frst.value
    if (String(n).length > 0) {
        if (frst.id == 'cel') {
        document.getElementsByName('sec')[0].value = (n*9 + 160)/5
        }else{
            document.getElementsByName('sec')[0].value = (n - 32)*5/9
        }

    }else{
        document.getElementsByName('sec')[0].value = ''
    }
}
function converter2() {
    seco = document.getElementsByName('sec')[0]
    n = seco.value
    console.log(n)
    if (String(n).length > 0) {
        if (seco.id == 'fah') {
        document.getElementsByName('fst')[0].value = (n - 32)*5/9
        }else{
            document.getElementsByName('fst')[0].value = (n*9 + 160)/5
        }
        }else{
            document.getElementsByName('fst')[0].value = ''
        }
}
function invert() {
    console.log(document.getElementsByName('fst')[0].id)
    console.log(document.getElementsByName('sec')[0].id)
    if (document.getElementsByName('fst')[0].id == 'cel') {
        console.log('true')
        document.getElementsByName('fst')[0].id = 'fah'
        document.getElementsByName('sec')[0].id = 'cel'
        document.getElementById('gf').innerText = 'F'
        document.getElementById('gs').innerText = 'C'
        document.getElementsByName('fst')[0].value = ''
        document.getElementsByName('sec')[0].value = ''
    }else{
        document.getElementsByName('fst')[0].id = 'cel'
        document.getElementsByName('sec')[0].id = 'fah'
        document.getElementById('gf').innerText = 'C'
        document.getElementById('gs').innerText = 'F'
        document.getElementsByName('fst')[0].value = ''
        document.getElementsByName('sec')[0].value = ''
    }
}

function mudarVar(n) {
    console.log(n) 
   
   sca1num1 = document.getElementById('sca1num1').value
    sca1num2 = document.getElementById('sca1num2').value
    sca1num3 = document.getElementById('sca1num3').value

    sca2num1 = document.getElementById('sca2num1').value
    sca2num2 = document.getElementById('sca2num2').value
    sca2num3 = document.getElementById('sca2num3').value

    if (n == 1) {

        res = ((sca2num3 - sca2num1)*(sca1num2 - sca1num1) + (sca1num3 - sca1num1)*sca2num1) / (sca1num3 - sca1num1)
        sca2rel2 = document.getElementById('sca2rel2')
        console.log(sca2rel2)
        //sca2rel2.style.backgroundColor = 'red'
        sca2rel2.style.top = 'calc(-99.5%)'
 
        if (String(sca1num2).length > 0) {
         document.getElementById('sca2num2').value = res
         sca2rel2 = document.getElementById('sca2rel2')
         sca2rel3 = document.getElementById('sca2rel3')
        
         prop = 100/((sca2num3 - sca2num1)/(res - sca2num1))
         
         if (Number(res) < Number(sca2num1)) {
             sca2rel2.style.top = `calc(0%)`
             
             prop3 = 100/((sca2num3 - sca2num2)/(sca2num1 - sca2num2))
         
             document.getElementById('sca2rel1').style.top = `calc(${-prop3}%)`
     
             sca2rel3.style.top = `calc(0%)`
     
         }else{
         if (Number(res) <= Number(sca2num3)) {
            if (prop != '100') {
                if (Number(prop) <= 99.5) {
             sca2rel2.style.top = `calc(${-prop}%)`
                }
            }else{
             sca2rel2.style.top = `calc(${-99.5}%)`
            }
         
            prop3 = 100/((sca2num3 - sca2num1)/(sca2num1 - sca2num1))
         
         document.getElementById('sca2rel1').style.top = `calc(${-prop3}%)`
     
         sca2rel3.style.top = `calc(0%)`
     
         prop3 = 100/((sca2num3 - sca2num1)/(sca2num1 - sca2num1))
         
         document.getElementById('sca2rel1').style.top = `calc(${-prop3}%)`
         }else{
             sca2rel2.style.top = `calc(-99.5%)`
            
             prop2 = 100/((sca2num2 - sca2num1)/(sca2num3 - sca2num1))

             if (Number(prop2) <= 100) {
             sca2rel3.style.top = `calc(${100 - prop2}%)`
             }

             prop3 = 100/((sca2num3 - sca2num1)/(sca2num1 - sca2num1))
         
         document.getElementById('sca2rel1').style.top = `calc(${-prop3}%)`
         }
     }
      
         }else{
             document.getElementById('sca2num2').value = ''
             sca2rel1.style.top = 'calc(0%)'
         }
 
    }else{
        res = ((sca1num3 - sca1num1)*(sca2num2 - sca2num1) + (sca2num3 - sca2num1)*sca1num1) / (sca2num3 - sca2num1)
   
        if (String(sca2num2).length > 0) {
            document.getElementById('sca1num2').value = res
            sca1rel2 = document.getElementById('sca1rel2')
            sca1rel3 = document.getElementById('sca1rel3')
           
            prop = 100/((sca1num3 - sca1num1)/(res - sca1num1))
            
            if (Number(res) < Number(sca1num1)) {
                sca1rel2.style.top = `calc(0%)`
                
                prop3 = 100/((sca1num3 - sca1num2)/(sca1num1 - sca1num2))
            
                document.getElementById('sca1rel1').style.top = `calc(${-prop3}%)`

                sca1rel3.style.top = `calc(0%)`

            }else{
            if (Number(res) <= Number(sca1num3)) {
               if (prop != '100') {
                   if (Number(prop) <= 99.5) {
                sca1rel2.style.top = `calc(${-prop}%)`
                   }else{
                       sca1rel2.style.backgroundColor = 'red'
                   }
               }else{
                sca1rel2.style.top = `calc(${-99.5}%)`
               }
            
               prop3 = 100/((sca1num3 - sca1num1)/(sca1num1 - sca1num1))
            
            document.getElementById('sca1rel1').style.top = `calc(${-prop3}%)`

            sca1rel3.style.top = `calc(0%)`

            prop3 = 100/((sca1num3 - sca1num1)/(sca1num1 - sca1num1))
            
            document.getElementById('sca1rel1').style.top = `calc(${-prop3}%)`
            }else{
                sca1rel2.style.top = `calc(-99.5%)`
               
                prop2 = 100/((sca1num2 - sca1num1)/(sca1num3 - sca1num1))
                if (Number(prop2) <= 100) {
                sca1rel3.style.top = `calc(${100 - prop2}%)`
                }
                
                prop3 = 100/((sca1num3 - sca1num1)/(sca1num1 - sca1num1))
            
            document.getElementById('sca1rel1').style.top = `calc(${-prop3}%)`
            }
        }
         
            }else{
                document.getElementById('sca1num2').value = ''
            }

    }
}

