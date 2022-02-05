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
    if (n == 1) {
        fstvar = document.getElementById('sca1num2').value
        console.log(fstvar)
    }else{
        secvar = document.getElementById('sca2num2').value
        console.log(secvar)
    }
}
function fazerComparacao() {
    sca1num1 = document.getElementById('sca1num1').value
    sca1num2 = document.getElementById('sca1num2').value
    sca1num3 = document.getElementById('sca1num3').value

    sca2num1 = document.getElementById('sca2num1').value
    sca2num2 = document.getElementById('sca2num2').value
    sca2num3 = document.getElementById('sca2num3').value
  

    // Formula da 1 Escala
    if (String(Number(sca1num2)) != 'NaN') {
     res = ((sca2num3 - sca2num1)*(sca1num2 - sca1num1) + (sca1num3 - sca1num1)*sca2num1) / (sca1num3 - sca1num1)

     document.getElementById('sca2num2').value = `${res}${secvar}`

    }else if(String(Number(sca2num2)) != 'NaN'){
        res = ((sca1num3 - sca1num1)*(sca2num2 - sca2num1) + (sca2num3 - sca2num2)*sca1num1) / (sca2num3 - sca2num1)

        document.getElementById('sca1num2').value = `${res}${fstvar}`
    }
}