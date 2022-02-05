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

        if (String(sca1num2).length > 0) {
        document.getElementById('sca2num2').value = res
        }else{
            document.getElementById('sca2num2').value = ''
        }

    }else{
        res = ((sca1num3 - sca1num1)*(sca2num2 - sca2num1) + (sca2num3 - sca2num1)*sca1num1) / (sca2num3 - sca2num1)
   
        if (String(sca2num2).length > 0) {
            document.getElementById('sca1num2').value = res
           // document.getElementById('relac').style.backgroundColor
            }else{
                document.getElementById('sca1num2').value = ''
            }
    }
}
