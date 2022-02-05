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

function fazerComparacao() {
    window.alert('e')
    sca1num1 = document.getElementById('sca1num1').value
    sca1num2 = document.getElementById('sca1num2').value
    sca1num3 = document.getElementById('sca1num3').value

    sca2num1 = document.getElementById('sca2num1').value
    sca2num2 = document.getElementById('sca2num2').value
    sca2num3 = document.getElementById('sca2num3').value
    console.log('sca1num1.value = ' + sca1num1)
    console.log('sca1num2.value = ' + sca1num2)
    console.log('sca1num3.value = ' + sca1num3)

    console.log('sca2num1.value = ' + sca2num1)
    console.log('sca2num2.value = ' + sca2num2)
    console.log('sca2num3.value = ' + sca2num3)

    // Formula da 1 Escala
    console.log(sca1num3 - sca1num1)
    console.log(sca2num3 - sca2num1)
}