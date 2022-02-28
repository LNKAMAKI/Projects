numero = '1'
expression = []

window.addEventListener('keydown', (event)=> {
    if (String(event.key).search('[0-9]') != -1 || event.key.search('[\\.\\(\\)\\+\\-\\x\\/r*=Backspace]') != -1) {
        console.log(event.key)
        console.log('DIGITO: ' + event.key)
    if (String(event.key).search('[Enter=Backspace]') == -1) {
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
        if (String(event.key).search('[0-9]') != -1 || String(event.key).search('[\\.\\(\\)]') != -1) {
            expression[0] = event.key
        }else{
       position++
        expression[position] = event.key
    }
    ansd = false
}
    }else{
        if (String(event.key) == 'Backspace') {
            console.log('Backspace')
           
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
            if (expression.length != 0) {
                anstxt = txt
            fazerConta(anstxt)
            position = 0
            ansd = true
            }
        }
    }
    txt = ''
    for (b = 0; b < expression.length; b++) {
        console.log(expression[b])
        txt+= ` ${expression[b]}`
    }
    console.log(txt)
    if (event.key != '=' && event.key != 'Enter') {
    document.getElementById('put').innerText = txt 
    }

    }
})




//INSERIR
ansd = false
position = 0
juntar = false
anstxt = ''
function inserir(n) {
    console.log('DIGITO: ' + n)
    
    if (anstxt != '') {
    document.getElementById('ans').innerText = `Ans = ${anstxt}`
    }

    if (String(n).search('[=CE]') == -1) {
    if (ansd == false) {
    if (expression.length > 0) {

    if (String(n).search('[0-9]') != -1 || String(n) == '.') {
        console.log('NUMERO OU PONTO')

        if (ansd == true) {
            ansd = false
        }
       if (String(expression[expression.length - 1]).search('[0-9]') != -1 || String(expression[expression.length - 1]) == '.' || juntar == true) {
           console.log(juntar)
        console.log(expression[expression.length - 1] + ' é um número ou ponto')
        expression[position] += String(n)

        juntar = false
       }else{
           console.log(expression[expression.length - 1] + ' não é um número ou ponto')
           position++
        expression[position] = String(n)
       }
    }else{
        if (n == '-' && String(expression[expression.length - 1]).search('[x\\\\*+\\(\\/]') != -1 || n== '-' && expression[expression.length - 1] == '-') {
            console.log('TEMOS UM PROBLEMÃO')
            juntar = true
        }
        if (expression.length > 0) {
        position++
        }
        expression[position] = String(n)
        
    }
  
}else{
    //console.log('LISTA VAZIA')
   expression.push(String(n))
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
       
        if (String(n).search('[0-9]') != -1 || String(n) == '.' || String(n).search('[\\(\\)]') != -1) {
            expression[0] = n
        }else{
       position++
        expression[position] = n
    }
    ansd = false
}
    }else{
        if (String(n) == 'CE') {
          //  console.log('CE')
           
            if (String(expression[expression.length - 1]).length == 1) {
               // console.log(expression[expression.length - 1] + ' tem tamanho 1')
                expression.splice(expression.length - 1, 1)
                //console.log(expression)

                if (position > 0) {
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
           // console.log('=')
           if (expression.length != 0) {
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
    if (n != '=') {
    document.getElementById('put').innerText = txt 
    }
}




//FAZER CONTA
function fazerConta(anterior) {
    for (n = 0; n < expression.length; n++) {
    if(expression[n] == '*' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
        console.log('POTENCIALIZAÇÃO')
        expression[n + 1] = String(Number(expression[n - 1]) ** Number(expression[n + 1]))
        expression.splice(n - 1, 2)
        
        n--
        
        if (expression[n - 1] == '(' && expression[n + 1] == ')') {
            console.log('TIRAR')
            expression.splice(n + 1, 1)
            expression.splice(n - 1, 1)
            n = n - 3
    
            console.log(expression)
        }else{
            console.log(expression)
        }
    }else if(expression[n] == 'r' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
        console.log('RAIZ')
        expression[n + 1] = String(Number(expression[n - 1]) ** (1/ Number(expression[n + 1])))
        expression.splice(n - 1, 2)
        
        n--
        
        if (expression[n - 1] == '(' && expression[n + 1] == ')') {
            console.log('TIRAR')
            expression.splice(n + 1, 1)
            expression.splice(n - 1, 1)
            n = n - 3
    
            console.log(expression)
        }else{
            console.log(expression)
        }
    }
    }

for (n = 0; n < expression.length; n++) {
if(expression[n] == 'x' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
    console.log('MULTIPLICAÇÃO')
    expression[n + 1] = String(Number(expression[n - 1]) * Number(expression[n + 1]))
    expression.splice(n - 1, 2)
    
    n--
  
    if (expression[n - 1] == '(' && expression[n + 1] == ')') {
        console.log('TIRAR')
        expression.splice(n + 1, 1)
        expression.splice(n - 1, 1)
        n = n - 3

        console.log(expression)
    }else{
        console.log(expression)
    }
}else if(expression[n] == '/' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
    console.log('DIVISÃO')
    expression[n + 1] = String(Number(expression[n - 1]) / Number(expression[n + 1]))
    expression.splice(n - 1, 2)
    
    n--
   
    if (expression[n - 1] == '(' && expression[n + 1] == ')') {
        console.log('TIRAR')
        expression.splice(n + 1, 1)
        expression.splice(n - 1, 1)
        n = n - 3

        console.log(expression)
    }else{
        console.log(expression)
    }
}
}


if (expression.length > 1) {

        for (n = 0; n < expression.length; n++) {
            console.log(expression[n])
            if (expression[n] == '+' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
                console.log('ADIÇÃO')
                expression[n + 1] = String(Number(expression[n - 1]) + Number(expression[n + 1]))
                expression.splice(n - 1, 2)
              
                n--
               
                if (expression[n - 1] == '(' && expression[n + 1] == ')') {
                    console.log('TIRAR')
                    expression.splice(n + 1, 1)
                    expression.splice(n - 1, 1)
                    n = n - 3

                    console.log(expression)
                }else{
                    console.log(expression)
                }
            }else if(expression[n] == '-' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
                console.log('SUBTRAÇÃO')
                expression[n + 1] = String(Number(expression[n - 1]) - Number(expression[n + 1]))
                expression.splice(n - 1, 2)
                
                n--
                
                if (expression[n - 1] == '(' && expression[n + 1] == ')') {
                    console.log('TIRAR')
                    expression.splice(n + 1, 1)
                    expression.splice(n - 1, 1)
                    n = n - 3

                    console.log(expression)
                }else{
                    console.log(expression)
                }
            }else if(expression[n] == 'x' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
                console.log('MULTIPLICAÇÃO')
                expression[n + 1] = String(Number(expression[n - 1]) * Number(expression[n + 1]))
                expression.splice(n - 1, 2)
                
                n--
                
                if (expression[n - 1] == '(' && expression[n + 1] == ')') {
                    console.log('TIRAR')
                    expression.splice(n + 1, 1)
                    expression.splice(n - 1, 1)
                    n = n - 3

                    console.log(expression)
                }else{
                    console.log(expression)
                }
            }else if(expression[n] == '/' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
                console.log('DIVISÃO')
                expression[n + 1] = String(Number(expression[n - 1]) / Number(expression[n + 1]))
                expression.splice(n - 1, 2)
                
                n--
                
                if (expression[n - 1] == '(' && expression[n + 1] == ')') {
                    console.log('TIRAR')
                    expression.splice(n + 1, 1)
                    expression.splice(n - 1, 1)
                    n = n - 3

                    console.log(expression)
                }else{
                    console.log(expression)
                }
            }else if(expression[n] == '*' && expression[n - 1] != '(' && expression[n - 1] != ')' && expression[n + 1] != '(' && expression[n + 1] != ')') {
                console.log('DIVISÃO')
                expression[n + 1] = String(Number(expression[n - 1]) ** Number(expression[n + 1]))
                expression.splice(n - 1, 2)
                
                n--
            
                if (expression[n - 1] == '(' && expression[n + 1] == ')') {
                    console.log('TIRAR')
                    expression.splice(n + 1, 1)
                    expression.splice(n - 1, 1)
                    n = n - 3

                    console.log(expression)
                }else{
                    console.log(expression)
                }
            }
        }
}

//document.getElementById('put').style.justifyContent = 'start'

    document.getElementById('selc').removeChild(document.getElementById('put'))
    op = document.createElement('option')
    op.id = 'put'
    document.getElementById('selc').appendChild(op)
    op.style.animation = 'goup 0.3s'

    document.getElementById('selc').removeChild(document.getElementById('ans'))
    op2 = document.createElement('option')
    op2.id = 'ans'
    op2.innerText = `${anterior} =`
    document.getElementById('selc').appendChild(op2)
    op2.style.animation = 'goup2 0.3s'

    if (expression.indexOf('NaN') == -1 && expression.length == 1) {
    document.getElementById('put').innerText = expression
    if (expression[0].length > 17) {
        document.getElementById('put').style.justifyContent = 'start'
    }
}else{
    console.log('what?')
    expression = []
    document.getElementById('put').innerText = 'Error'
}
}