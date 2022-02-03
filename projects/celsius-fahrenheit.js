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
    }else{
        document.getElementsByName('fst')[0].id = 'cel'
        document.getElementsByName('sec')[0].id = 'fah'
    }
}