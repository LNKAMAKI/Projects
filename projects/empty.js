
     sca1rel2 = document.getElementById('sca1rel2')
     sca1rel3 = document.getElementById('sca1rel3')
    
     prop = 100/((sca1num3 - sca1num1)/(sca1num2 - sca1num1))
     
     if (Number(sca1num2) < Number(sca1num1)) {
         sca1rel2.style.top = `calc(0%)`
         
         prop3 = 100/((sca1num3 - sca1num2)/(sca1num1 - sca1num2))
     
         if (Number(prop3) >= 0) {
         document.getElementById('sca1rel1').style.top = `calc(${-prop3}%)`
         }
         sca1rel3.style.top = `calc(0%)`
 
     }else{
     if (Number(sca1num2) <= Number(sca1num3)) {
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
     
        if (Number(prop3) >= 0) {
     document.getElementById('sca1rel1').style.top = `calc(${-prop3}%)`
        }
     sca1rel3.style.top = `calc(0%)`
 
     prop3 = 100/((sca1num3 - sca1num1)/(sca1num1 - sca1num1))
     
     if (Number(prop3) >= 0) {
     document.getElementById('sca1rel1').style.top = `calc(${-prop3}%)`
     }
     }else{
         sca1rel2.style.top = `calc(-99.5%)`
        
         prop2 = 100/((sca1num2 - sca1num1)/(sca1num3 - sca1num1))
         if (Number(prop2) <= 100 && Number(prop2) >= 0) {
         sca1rel3.style.top = `calc(${100 - prop2}%)`
         }
         
         prop3 = 100/((sca1num3 - sca1num1)/(sca1num1 - sca1num1))
     
         if (Number(prop3) >= 0) {
     document.getElementById('sca1rel1').style.top = `calc(${-prop3}%)`
         }
     }
 }
  
     

 res = ((sca2num3 - sca2num1)*(sca1num2 - sca1num1) + (sca1num3 - sca1num1)*sca2num1) / (sca1num3 - sca1num1)

 if (String(sca1num2).length > 0) {
     document.getElementById('sca2num2').value = res
     sca2rel2 = document.getElementById('sca2rel2')
     sca2rel3 = document.getElementById('sca2rel3')
    
     prop = 100/((sca2num3 - sca2num1)/(res - sca2num1))
     
     if (Number(res) < Number(sca2num1)) {
         sca2rel2.style.top = `calc(0%)`
         
         prop3 = 100/((sca2num3 - sca2num2)/(sca2num1 - sca2num2))
     
         if (Number(prop3) >= 0) {
         document.getElementById('sca2rel1').style.top = `calc(${-prop3}%)`
         }
         sca2rel3.style.top = `calc(0%)`

     }else{
     if (Number(res) <= Number(sca2num3)) {
        if (prop != '100') {
            if (Number(prop) <= 99.5) {
         sca2rel2.style.top = `calc(${-prop}%)`
            }else{
                sca2rel2.style.backgroundColor = 'red'
            }
        }else{
         sca2rel2.style.top = `calc(${-99.5}%)`
        }
     
        prop3 = 100/((sca2num3 - sca2num1)/(sca2num1 - sca2num1))
     
        if (Number(prop3) >= 0) {
     document.getElementById('sca2rel1').style.top = `calc(${-prop3}%)`
        }
     sca2rel3.style.top = `calc(0%)`

     prop3 = 100/((sca2num3 - sca2num1)/(sca2num1 - sca2num1))
     
     if (Number(prop3) >= 0) {
     document.getElementById('sca2rel1').style.top = `calc(${-prop3}%)`
     }
     }else{
         sca2rel2.style.top = `calc(-99.5%)`
        
         prop2 = 100/((sca2num2 - sca2num1)/(sca2num3 - sca2num1))
         if (Number(prop2) <= 100 && Number(prop2) >= 0) {
         sca2rel3.style.top = `calc(${100 - prop2}%)`
         }
         
         prop3 = 100/((sca2num3 - sca2num1)/(sca2num1 - sca2num1))
     
         if (Number(prop3) >= 0) {
     document.getElementById('sca2rel1').style.top = `calc(${-prop3}%)`
         }
     }
 }
  
     }else{
         document.getElementById('sca2num2').value = ''
     }
