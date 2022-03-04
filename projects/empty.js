
    document.getElementById('put').style.justifyContent = 'end'
    console.log('DIGITO: ' +event.key)
    

    if (String(event.key).search('[=Backspace]') == -1) {
    if (ansd == false) {
    if (expression.length > 0) {

    if (String(event.key).search('[0-9]') != -1 ||String(event.key) == '.') {
        console.log('NUMERO OU PONTO')

        if (ansd == true) {
            ansd = false
        }
       if (String(expression[expression.length - 1]).search('[0-9]') != -1 || String(expression[expression.length - 1]) == '.' || juntar == true) {
           console.log(juntar)
        console.log(expression[expression.length - 1] + ' é umevent.keyúmero ou ponto')
        expression[position] +=String(event.key)

        juntar = false
       }else{
           console.log(expression[expression.length - 1] + 'event.keyão é umevent.keyúmero ou ponto')
           position++
        expression[position] =String(event.key)
       }
    }else{
        console.log('EEEEEEEEEEEEI')
        console.log(expression[expression.length - 1], String(expression[expression.length - 1]).search('[\\x\\*\\+\\(\\/]') != -1)
        if (String(event.key) == '-' && String(expression[expression.length - 1]).search('[\\x\\*\\+\\(\\/]') != -1 ||String(event.key) == '-' && expression[expression.length - 1] == '-') {
            console.log('TEMOS UM PROBLEMÃO')
            juntar = true
        }
        if (expression.length > 0) {
        position++
        }
        expression[position] =String(event.key)
        
    }
  
}else{
    console.log('LISTA VAZIA')
    if (String(event.key).search('[0-9]') != -1 ||String(event.key) == '.' ||String(event.key) == '(' ||String(event.key) == '-' ||String(event.key) == '√')  {
   expression.push(String(event.key))
    }
   if (n == '-') {
    console.log('OOOPS')
    juntar = true
   }
  
}
console.log(expression)
//console.log('POSITION: ' + position)
//console.log(' ')
    }else{
        console.log('ansd = true')
       
        if (String(event.key).search('[0-9]') != -1 ||String(event.key) == '.' ||String(event.key) == '(' ||String(event.key) == '√') {
            expression[0] =event.key
            ansd = false
            error = false
        }else if (error == false &&String(event.key) != ')'){
       position++
        expression[position] =event.key
        ansd = false
    }else if(error == true){
        ansd = false
        error = false
        if (String(event.key) == '-') {
            expression[0] =event.key
            juntar = true
        }
    }

}
    }else{
        if (String(event.key) == 'Backspace') {
          //  console.log('Backspace')
           if (error == false /*&& String(document.getElementById('put').innerText).search('Infinity') == -1*/) {
            if (String(expression[expression.length - 1]).length == 1) {
                console.log('AAAAAAAA')
               // console.log(expression[expression.length - 1] + ' tem tamanho 1')
                expression.splice(expression.length - 1, 1)
                //console.log(expression)

                if (position != 0) {
                    position--
                    }
            }else{
                slicednum = ''
               // console.log(expression[expression.length - 1] + ' tem tamanho maior que 1') 
                for (na = 0; na <= Number(String(expression[expression.length - 1]).length) - 2; na++) {
                    //console.log(na, String(expression[expression.length - 1])[na])
                    slicednum +=  String(expression[expression.length - 1])[na]
                }
                //console.log(slicednum)
                expression[expression.length - 1] = slicednum
                //console.log(expression)

            }
            console.log(expression)
            if (expression.length == 0) {
              //  document.getElementById('ans').innerText = ''
            }
        }else{
            console.log('ARE YOU KIDDING ME?')
            position = 0
          //  document.getElementById('put').innerText = '777777'
            error = false
        }
            if (expression.length == 0) {
                console.log('É ZEEEEEEEEEEEEEEROOOOOOOOOOOOOO')
                ansd = false
            }
        }else{
           // console.log('=')
           
    
    degs = []
    parents = 0
    for (e = 0; e < expression.length; e++) {
    
        console.log('NUMBER: ' + expression[e])
        
    
        if (expression[e] == '(') {
            continuar = false
            stop2 = false
            pares = 0
    
            console.log('--------PARÊNTESES--------')
            degs.push({})
            console.log(degs)
            degs[parents].start = e
           
            console.log('DEEEEEEGS[E] = ' + degs[parents])
    
            calcular = ''
            for (n = e + 1; stop2 == false &&event.key < expression.length;event.key++) {
                //console.log(continuar)
                //console.log(continuar == true)
                console.log(expression[n])
                if (expression[n] == '(') {
                    console.log('Ohevent.keyo')
                    console.log(pares)
                    pares++
                    console.log('PARES: ' + pares)
                    continuar = true
                    degs[parents].par = pares
                    console.log('DEGS PARES---------: ' + degs[parents].par)
    
                }else if (continuar == true && expression[n] == ')'){ 
                        console.log('TRUE')
                      
                        if (pares == 1) {
                            continuar = false
                        }
                        pares--
                        console.log('PARES: ' + pares)
    
                }else if (continuar == false && expression[n] == ')') {
    
                    console.log(degs[parents])
                    if (degs[parents].par == undefined) {
                       console.log('TEM ALGO DE ERRADO')
                        degs[parents].par = 0
                    }
                    console.log('MAIS')
                    console.log('PARES: ' + pares)
                    console.log('stop2: ' + stop2)
                    stop2 = true
                    console.log('stop2: ' + stop2)
                    console.log('abre parenteses: ' + e + '    fecha parenteses: ' +event.key )
    
                    degs[parents].end =event.key
                }
            }
            console.log('STOP2: ' + stop2)
            console.log('PARES: ', pares)
            
            console.log('EXPRESSION!!!!!!!!!!!!: ' + expression)
            parents++
        }
    } 
            falta = false
            if (degs.length > 0) {
            for (i = 0; i < degs.length && false == false; i++) {
                console.log(degs[i].end)
                if (degs[i].end == undefined) {
                    falta = true
                }
            }
        }else if(expression.indexOf(')') != -1){
            falta = true
        }
            
           if (expression.length != 0 && falta == false) {
               anstxt = txt
            fazerConta(anstxt) 
            position = 0    
           ansd = true

            
           }
        }
    }
    txt = ''
    for (b = 0; b < expression.length; b++) {
        //console.log(expression[b])
        txt+= ` ${expression[b]}`
    }
   // console.log(txt)
    if (n != '=' && n != 'Enter') {
    document.getElementById('put').innerText = txt 
    }

    if (anstxt != '' && ansd == false) {
        if (String(anstxt).search(`Ans = `) == -1)  {
            document.getElementById('ans').innerText = `Ans = ${String(anstxt).replace('=', '')}`
        }else{
            document.getElementById('ans').innerText = `${anstxt}`
        }
    }

