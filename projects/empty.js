console.log('DIGITO: ' + event.key)
    if (String(event.key).search('[=CE]') == -1) {
    if (ansd == false) {
    if (expression.length > 0) {

    if (String(event.key).search('[0-9]') != -1 || String(event.key) == '.') {
        console.log('NUMERO OU PONTO')

        if (ansd == true) {
            ansd = false
        }
       if (String(expression[expression.length - 1]).search('[0-9]') != -1 || String(expression[expression.length - 1]) == '.') {
        console.log(expression[expression.length - 1] + ' é um número ou ponto')
        expression[position] += String(event.key)
       }else{
           console.log(expression[expression.length - 1] + ' não é um número ou ponto')
           position++
        expression[position] = String(event.key)
       }
    }else{
        position++
        expression[position] = String(event.key)
    }
  
}else{
    console.log('LISTA VAZIA')
   expression.push(String(event.key))
  
}
console.log(expression)
console.log('POSITION: ' + position)
console.log(' ')
    }else{
        console.log('ansd = true')
        if (String(event.key).search('[0-9]') != -1 || String(event.key) == '.') {
            expression[0] = event.key
        }else{
       position++
        expression[position] = event.key
    }
    ansd = false
}
    }else{
        if (String(event.key) == 'CE') {
            console.log('CE')
           
            if (String(expression[expression.length - 1]).length == 1) {
                console.log(expression[expression.length - 1] + ' tem tamanho 1')
                expression.splice(expression.length - 1, 1)
                console.log(expression)

                if (position > 0) {
                    position--
                    }
            }else{
                slicednum = ''
                console.log(expression[expression.length - 1] + ' tem tamanho maior que 1') 
                for (na = 0; na <= Number(String(expression[expression.length - 1]).length) - 2; na++) {
                    console.log(na, String(expression[expression.length - 1])[na])
                    slicednum +=  String(expression[expression.length - 1])[na]
                }
                console.log(slicednum)
                expression[expression.length - 1] = slicednum
                console.log(expression)

            }
        }else{
            console.log('=')
            fazerConta()
            position = 0
            ansd = true
        }
    }
    txt = ''
    for (b = 0; b < expression.length; b++) {
        console.log(expression[b])
        txt+= ` ${expression[b]}`
    }
    console.log(txt)
    if (event.key != '=') {
    document.getElementById('put').innerText = txt 
    }
