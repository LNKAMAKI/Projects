tudocerto = true
formula = []
caso = ['2','*','5']

function resolverFuncao() {
    form = document.getElementById('formula').value
    console.log(form)
    
    numero = '1'
    expression = []
    ansd = false
    position = 0
    juntar = false
    anstxt = ''
    error = false
    pros = 'sim'
    console.log(form.search('x'))
    if (form.search('x') != -1) {

    for (qualq in form) {
        if (String(form[qualq]).search('([0-9]|x)') != -1 || form[qualq].search('[\\.\\(\\)\\+\\-\\/\\^\\*r=Backspace]') != -1) {
            if (String(form[qualq]).search('[=Backspace]') == -1) {
            if (ansd == false) {
            if (expression.length > 0) {
            if (String(form[qualq]).search('([0-9]|x)') != -1 ||String(form[qualq]) == '.') {
                if (ansd == true) {
                    ansd = false
                }
               if (String(expression[expression.length - 1]).search('([0-9]|x)') != -1 || String(expression[expression.length - 1]) == '.' || juntar == true) {
                expression[position] +=String(form[qualq])
                juntar = false
               }else{
                   position++
                expression[position] =String(form[qualq])
               }
            }else{
                if (String(form[qualq]) == '-' && String(expression[expression.length - 1]).search('[\\^\\+\\(\\/\\*]') != -1 ||String(form[qualq]) == '-' && expression[expression.length - 1] == '-') {
                    juntar = true
                    console.log('JUNTAR: TRUE',form[qualq])
                }
                if (expression.length > 0) {
                position++
                }
                expression[position] =String(form[qualq])
            }
        }else{
            if (String(form[qualq]).search('([0-9]|x)') != -1 ||String(form[qualq]) == '.' ||String(form[qualq]) == '(' ||String(form[qualq]) == '-' ||String(form[qualq]) == '√')  {
           expression.push(String(form[qualq]))
            }
           if (form[qualq] == '-') {
            juntar = true
            console.log('JUNTAR: TRUE',form[qualq])
           }}
            }else{
                if (String(form[qualq]).search('([0-9]|x)') != -1 ||String(form[qualq]) == '.' ||String(form[qualq]) == '(' ||String(form[qualq]) == '√') {
                    expression[0] =form[qualq]
                    ansd = false
                    error = false
                }else if (error == false &&String(form[qualq]) != ')'){
               position++
                expression[position] =form[qualq]
                ansd = false
            }else if(error == true){
                ansd = false
                error = false
                if (String(form[qualq]) == '-') {
                    expression[0] =form[qualq]
                    juntar = true
                    console.log('JUNTAR: TRUE',form[qualq])
                }}}}}} 
    degs = []
    parents = 0
    for (e = 0; e < expression.length; e++) {
        if (expression[e] == '(') {
            continuar = false
            stop2 = false
            pares = 0
            degs.push({})
            degs[parents].start = e
            calcular = ''
            for (n = e + 1; stop2 == false && n < expression.length; n++) {
                if (expression[n] == '(') {
                    pares++
                    continuar = true
                    degs[parents].par = pares
                }else if (continuar == true && expression[n] == ')'){ 
                        if (pares == 1) {
                            continuar = false
                        }
                        pares--
                }else if (continuar == false && expression[n] == ')') {
                    if (degs[parents].par == undefined) {
                        degs[parents].par = 0
                    }
                    stop2 = true
                    degs[parents].end =form[qualq]
                }}
            parents++
        }} 
    stop = false
   for (h = 0; h < degs.length && stop == false; h++){
    if (degs[h].end == undefined) {stop = true}}
   if (stop == true) {
    tudocerto = false
   }else{tudocerto = true}
   degs = []
    parents = 0
    for (e = expression.length - 1; e >= 0; e--) {
      console.log(expression[e])
        if (expression[e] == ')') {
            continuar = false
            stop2 = false
            pares = 0
            degs.push({})
            degs[parents].start = e
            calcular = ''
            for (n = e - 1; stop2 == false && n >= 0; n--) {
              console.log(n, expression[n])
                if (expression[n] == ')') {
                    pares++
                    continuar = true
                    degs[parents].par = pares
                }else if (continuar == true && expression[n] == '('){ 
                        if (pares == 1) { continuar = false}
                        pares--
                }else if (continuar == false && expression[n] == '(') {
                    if (degs[parents].par == undefined) {degs[parents].par = 0}
                    stop2 = true
                  console.log(e)
                    degs[parents].end = expression[n]
                }}
            parents++
        }} 
        stop = false
   for (h = 0; h < degs.length && stop == false; h++){
    if (degs[h].end == undefined) {
        stop = true
    }}
   if (stop == true) {
    tudocerto = false
   }

   if (tudocerto == true) {
    formula = expression
   }else{
    console.log('EPA')
    window.alert('Faltam parênteses')
    pros = 'não'
   }
}
xis = document.getElementById('valx').value
if (xis != '' && formula.length != 0 && pros == 'sim') {
console.log(formula,xis)

caso = []
for (i in formula) {
    if (formula[i].search('x') != -1){
        if (formula[i] != 'x') {
            num = ''
            for (u in formula[i]) {
                if (formula[i][u] != 'x') {
                    num+= formula[i][u]
                }
            }
            caso.push(num)
            caso.push('*')
            caso.push(xis)
        }else{
            caso.push(xis)
        }
    }else{
        caso.push(formula[i])
    }
}
str = ''
for (todos in caso) {
    str+= caso[todos]
}
answer = fazerConta(caso)
document.getElementById('formula').value = str
document.getElementById('x').innerText = xis
document.getElementById('y').innerText = Arredondar(answer,2)
}
}

function change() {
    document.getElementById('x').innerText = 'x'
    document.getElementById('y').innerText = 'y'
}

function fazerConta(anterior) {
    //Primeiro raizes e potências
    for (n = 0; n < anterior.length; n++) {
    if(anterior[n] == '^' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
        anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
        anterior.splice(n - 1, 2)
        n = n - 3 // n = n - 3
        if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
            anterior.splice(n + 3, 1)
            anterior.splice(n + 1, 1)
            n = n - 3
        }
    }else if(anterior[n] == '√' && anterior[n + 1] != '(' ) {
        anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
        anterior.splice(n, 1)
        n = n - 2
        if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
            anterior.splice(n + 3, 1)
            anterior.splice(n + 1, 1)
            n = n - 3
        }}}
    // Segundo multiplicações e divisões
    for (n = 0; n < anterior.length; n++) {
    if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\^') == -1 && String(anterior[n - 2]).search('\\^') == -1) {
    anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
    anterior.splice(n - 1, 2)
    n = n - 3
    if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
        anterior.splice(n + 3, 1)
        anterior.splice(n + 1, 1)
        n = n - 3
    }
    }else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\^') == -1 && String(anterior[n - 2]).search('\\^') == -1) {
    anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
    anterior.splice(n - 1, 2)
    n = n - 3
    if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
        anterior.splice(n + 3, 1)
        anterior.splice(n + 1, 1)
        n = n - 3
    }}}
    if (anterior.length > 1) {
        for (n = 0; n < anterior.length && anterior.length != 1; n++) {
            if (anterior[n] == '+' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[\\*\\/\\^]') == -1 && String(anterior[n - 2]).search('[\\*\\/\\^\\-]') == -1) {
                anterior[n + 1] = String(Number(anterior[n - 1]) + Number(anterior[n + 1]))
                anterior.splice(n - 1, 2)
                n = n - 3
                if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                    anterior.splice(n + 3, 1)
                    anterior.splice(n + 1, 1)
                    n = n - 3
                }
            }else if(anterior[n] == '-' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[\\*\\/\\^]') == -1 && String(anterior[n - 2]).search('[\\*\\/\\^\\-]') == -1) {
                anterior[n + 1] = String(Number(anterior[n - 1]) - Number(anterior[n + 1]))
                anterior.splice(n - 1, 2)
                n = n - 3
                if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                    anterior.splice(n + 3, 1)
                    anterior.splice(n + 1, 1)
                    n = n - 3
                }
            }else if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\^') == -1 && String(anterior[n - 2]).search('\\^') == -1) {
                anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
                anterior.splice(n - 1, 2)
                n = n - 3
                if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                    anterior.splice(n + 3, 1)
                    anterior.splice(n + 1, 1)
                    n = n - 3
                }
            }else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\^') == -1 && String(anterior[n - 2]).search('\\^') == -1) {
                anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
                anterior.splice(n - 1, 2)
                n = n - 3
                if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                    anterior.splice(n + 3, 1)
                    anterior.splice(n + 1, 1)
                    n = n - 3
                }
            }else if(anterior[n] == '^' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
                anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
                anterior.splice(n - 1, 2)
                n = n - 3
                if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                    anterior.splice(n + 3, 1)
                    anterior.splice(n + 1, 1)
                    n = n - 3
                }
            }else if(anterior[n] == '√' && anterior[n + 1] != '(') {
                anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
                anterior.splice(n, 1)
                n = n - 2
                if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                    anterior.splice(n + 3, 1)
                    anterior.splice(n + 1, 1)
                    n = n - 3
                }}}}
                return anterior
    }

function montarTabela() {
    start = Number(document.getElementById('start').value)
    end = Number(document.getElementById('end').value)
    steps = Number(document.getElementById('steps').value)
    if (formula.length > 0 && steps > 0) {
    
console.log(caso, start, end, steps)

tab = document.getElementById('table')
document.getElementById('tb').style.display = 'table'
trs = tab.getElementsByTagName('tr')
for (b = trs.length - 1; b > 0; b--) {
    console.log(b, trs[b])
    tab.removeChild(trs[b])
}
        
if (start < end) {
    casos = []

    direction = 'add'
    tr = document.createElement('tr')
    tab.append(tr) 
    console.log(start)
    caso = []
    for (i in formula) {
        if (formula[i].search('x') != -1){
            if (formula[i] != 'x') {
                num = ''
                for (u in formula[i]) {
                    if (formula[i][u] != 'x') {
                        num+= formula[i][u]
                    }
                }
                caso.push(num)
                caso.push('*')
                caso.push(String(start))
            }else{
                caso.push(String(start))
            }
        }else{
            caso.push(formula[i])
        }
    }
    console.log(caso)
    str = ''
        for (todos in caso) {
            str+= caso[todos]
        }
        console.log(str)
    td = document.createElement('td')
    td.innerText = start
    tr.append(td)

    td = document.createElement('td')
    td.innerText = str
    tr.append(td)

   casos.push(caso)

    for (n = start; n + steps <= end; n+= steps) {
        tr = document.createElement('tr')
        tab.append(tr) 
        console.log(n + steps)
        caso = []
        for (i in formula) {
            if (formula[i].search('x') != -1){
                if (formula[i] != 'x') {
                    num = ''
                    for (u in formula[i]) {
                        if (formula[i][u] != 'x') {
                            num+= formula[i][u]
                        }
                    }
                    caso.push(num)
                    caso.push('*')
                    caso.push(String(n + steps))
                }else{
                    caso.push(String(n + steps))
                }
            }else{
                caso.push(formula[i])
            }
        }
        console.log(caso)
        str = ''
        for (todos in caso) {
            str+= caso[todos]
        }
        console.log(str)
        td = document.createElement('td')
        td.innerText = n + steps
        tr.append(td)
    
        td = document.createElement('td')
        td.innerText = str
        tr.append(td)
        
        casos.push(caso)
    }
   

}else{
    casos = []

    direction = 'sub'
    tr = document.createElement('tr')
    tab.append(tr) 
    console.log(start)
    caso = []
    for (i in formula) {
        if (formula[i].search('x') != -1){
            if (formula[i] != 'x') {
                num = ''
                for (u in formula[i]) {
                    if (formula[i][u] != 'x') {
                        num+= formula[i][u]
                    }
                }
                caso.push(num)
                caso.push('*')
                caso.push(String(start))
            }else{
                caso.push(String(start))
            }
        }else{
            caso.push(formula[i])
        }
    }
    console.log(caso)
    str = ''
        for (todos in caso) {
            str+= caso[todos]
        }
        console.log(str)
    td = document.createElement('td')
    td.innerText = start
    tr.append(td)

    td = document.createElement('td')
    td.innerText = str
    tr.append(td)

   casos.push(caso)

    for (n = start; n - steps >= end; n-= steps) {
        tr = document.createElement('tr')
        tab.append(tr) 
        console.log(n - steps)
        caso = []
        for (i in formula) {
            if (formula[i].search('x') != -1){
                if (formula[i] != 'x') {
                    num = ''
                    for (u in formula[i]) {
                        if (formula[i][u] != 'x') {
                            num+= formula[i][u]
                        }
                    }
                    caso.push(num)
                    caso.push('*')
                    caso.push(String(n - steps))
                }else{
                    caso.push(String(n - steps))
                }
            }else{
                caso.push(formula[i])
            }
        }
        console.log(caso)
        str = ''
        for (todos in caso) {
            str+= caso[todos]
        }
        console.log(str)
        td = document.createElement('td')
        td.innerText = n - steps
        tr.append(td)
    
        td = document.createElement('td')
        td.innerText = str
        tr.append(td)
        
        casos.push(caso)
    }
   

}
trs = tab.getElementsByTagName('tr')
for (j in casos) {
    res = fazerConta(casos[j])
    console.log(j,trs[Number(j)+1],res)
    td = document.createElement('td')
    td.innerText = Arredondar(res,2)
    trs[Number(j)+1].append(td)
}

    }
}
function Arredondar(num,numcasas) {
    if (String(num).search('\\.') != -1) {
    fi = String(num).replace(new RegExp('(?<=\\.)[0-9]+'),'')
              fix = String(num).replace(new RegExp('.+(?=\\.)\\.'),'')
              c2 = fix.replace(new RegExp(`(?<=[0-9]{${numcasas}})[0-9]+`),'')
              console.log(fi, fix,c2)
              return fi + c2
    }else{
      return num
    }}