quase = ['2','*','3','*','2','x','x','x']

console.log(REDONUMFACTORING(quase))

function REDONUMFACTORING(storer) {

    if (typeof storer === 'string') {
        console.log('ISH, é uma string')
        other = []
        for (h in storer) {
            console.log(storer[h])
            other.push(storer[h])
        }
        storer = other
    }

resultobtained = ''

elevar = 1
wasmultiplicated = false


operation = []
for (patience in storer) {
    
   
    if (storer[patience] == '*') {
        wasmultiplicated = true
        
        
        operation.push(storer[Number(patience) - 1])
        operation.push('x')
        operation.push(storer[Number(patience) + 1])
        

        storer[Number(patience) + 1] = fazerConta(operation)[0]
        resultobtained = fazerConta(operation)[0]
        
      
        operation = []
    }else if(storer[patience].search('[a-z]') != -1)  {
       
        if (storer[patience] == storer[Number(patience) - 1]) {
       
            elevar++

            if (patience == storer.length - 1) {
                
                resultobtained+= `^${elevar}`
                
            }

        }else{
          
            if (elevar > 1) {
                
                resultobtained+= `^${elevar}`
                
            }

            resultobtained+= storer[patience]
        
            
          
            elevar = 1
        }
        
       
    } 
}

if (wasmultiplicated == false) {
    //   
       addingnumber = ''
       for (eyes in storer) {
           
          // 
           if (storer[eyes].search('[0-9]') != -1) {
              // 
               addingnumber+= storer[eyes]
           }
       }
       addingnumber+= resultobtained
      // 
       
       resultobtained = addingnumber
    
   }
if(storer[0] == '-') {
    confirmedresult = '-'
    for (caracter in resultobtained) {
        confirmedresult+= resultobtained[caracter]
    }
    return confirmedresult
}else{
    return resultobtained
}
   
}
 // FAZER COnTA COM nÚMEROS
 function fazerConta(anterior) {
   
    if(0 == 0) {// falta == false
//Primeiro raizes e potências
for (n = 0; n < anterior.length; n++) {
if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
    //
    anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
    anterior.splice(n - 1, 2)
    
    n = n - 3 // n = n - 3
    //
    if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
        //
        anterior.splice(n + 3, 1)
        anterior.splice(n + 1, 1)
        n = n - 3

        //
    }else{
        //
    }
}else if(anterior[n] == '√' && anterior[n + 1] != '(' ) {
    //
    anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
    anterior.splice(n, 1)
    //
    n = n - 2
    //
    if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
        //
        anterior.splice(n + 3, 1)
        anterior.splice(n + 1, 1)
        n = n - 3

        //
    }else{
        //
    }
}
}

// Segundo multiplicações e divisões
for (n = 0; n < anterior.length; n++) {
if(anterior[n] == 'x' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
//
anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
anterior.splice(n - 1, 2)

n = n - 3
//

if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
    //
    anterior.splice(n + 3, 1)
    anterior.splice(n + 1, 1)
    n = n - 3

    //
}else{
    //
}
}else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
//
anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
anterior.splice(n - 1, 2)

n = n - 3
//
if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
    //
    anterior.splice(n + 3, 1)
    anterior.splice(n + 1, 1)
    n = n - 3

    //
}else{
    //
}
}
}


if (anterior.length > 1) {

// while(anterior.length != 1 && anterior.indexOf('nan') == -1) {
    for (n = 0; n < anterior.length && anterior.length != 1; n++) {
        //
        if (anterior[n] == '+' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[x\\/\\*]') == -1 && String(anterior[n - 2]).search('[x\\/\\*\\-]') == -1) {
            //
            anterior[n + 1] = String(Number(anterior[n - 1]) + Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
          
            n = n - 3
            //
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //
            }else{
                //
            }
        }else if(anterior[n] == '-' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[x\\/\\*]') == -1 && String(anterior[n - 2]).search('[x\\/\\*\\-]') == -1) {
            //
            anterior[n + 1] = String(Number(anterior[n - 1]) - Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
            
            n = n - 3
            //
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //
            }else{
                //
            }
        }else if(anterior[n] == 'x' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
            //
            anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
            
            n = n - 3
            //
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //
            }else{
                //
            }
        }else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
            //
            anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
            
            n = n - 3
            //
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //
            }else{
                //
            }
        }else if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
            //
            anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
            anterior.splice(n - 1, 2)
            
            n = n - 3
            //
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3

                //
            }else{
                //
            }
        }else if(anterior[n] == '√' && anterior[n + 1] != '(') {
            //
            anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
            anterior.splice(n, 1)
            
            n = n - 2
            //
            if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                //
                anterior.splice(n + 3, 1)
                anterior.splice(n + 1, 1)
                n = n - 3
        
                //
            }else{
                //
            }
        }
    }
// }
}

    
}
return anterior
}


console.log(MULTIPLICARDIREITO('7','2*2y'))
function MULTIPLICARDIREITO(num1, num2) {
    console.log('MULTIPLICAR:',num1, 'x',num2)

    sónumero = ''
    sóletra = ''
    for (car in num1) {
        if (num1[car].search('[0-9]') != -1 || num1[car] == '*') {
            sónumero += num1[car]
        }else{
            sóletra += num1[car]
        }
    }
    console.log(num1, sónumero, sóletra)

    sónumero2 = ''
    sóletra2 = ''
    for (car in num2) {
        if (num2[car].search('[0-9]') != -1 || num2[car] == '*') {
            sónumero2 += num2[car]
        }else{
            sóletra2 += num2[car]
        }
    }
    console.log(num2, sónumero2, sóletra2)
    if (sónumero.length > 0 && sónumero2.length > 0) {
        sónumero+= '*'
    }
    sónumero+= sónumero2

        sóletra+= sóletra2
    console.log(sónumero, sóletra)
    resultmult = sónumero+= sóletra
    console.log(resultmult)
}