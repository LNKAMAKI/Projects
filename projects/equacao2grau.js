function solve() {
  i1 = document.getElementById('inp1').value
  i2 = document.getElementById('inp2').value

  if (i1.search('([0-9]|[a-z])') != -1 && i2.search('([0-9]|[a-z])') != -1) { 
      i1 = REFORMATAR(i1)
      i2 = REFORMATAR(i2)
      console.log(i1,i2)
      for (i in i2) {
        console.log(i2[i])
        if (i == 0 && i2[i] != '-') {
          i1.push('-')
        }
        if (i2[i] != '-' && i2[i] != '+') {
        i1.push(i2[i])
        }else if(i2[i] == '-') {
          i1.push('+')
        }else{
          i1.push('-')
        }
      }

      console.log(i1)

      int = FATORAR(i1)
     simplificar = int[1]
     console.log(simplificar)
     intfinal = FATORAR(simplificar)
     console.log(intfinal[2])
     console.log(intfinal[3])
    
     monomios = intfinal[2]
     a = 0
     b = 0
     c = 0
     if (monomios.length <= 3) { 
      console.log('Ok, go through the ji')

      ji = ORDENAROB(intfinal[3],'que')
      console.log(ji)
      tudocerto = true
      for (i = 0; i < ji.length && tudocerto == true; i++) {
          console.log(ji[i].quais[0], ji[i].que)

          if (i == 0) {
          if (ji[i].que.length == 2 && ji[i].que[0] == ji[i].que[1]) {
            console.log('ESSE É O A')
            partnum = monomios[ji[i].quais[0]].numero.replace(ji[i].que,'')

            if (partnum == '') {
              partnum = '1'
            }else if(partnum == '-') {
              partnum = '-1'
            }else if(partnum == '+') {
              partnum = '+1'
            }

            console.log(partnum)

            if (partnum.search('\\*') != -1) {
            a = Number(desfat(partnum))
            }else{
              a = partnum
            }
            num = ji[i].que[0]
          }else{
            tudocerto = false
          }
        }else if (ji[i].que == '') {
          console.log('ESSE É O C')
          console.log(monomios[ji[i].quais[0]].numero)

          if (monomios[ji[i].quais[0]].numero.search('\\*') != -1) {
          c = Number(desfat(String(monomios[ji[i].quais[0]].numero)))
          }else{
            console.log('numero',monomios[ji[i].quais[0]].numero)
            c = monomios[ji[i].quais[0]].numero
          }
          console.log(c)

        }else if(ji[i].que.length == 1) {
          if ( ji[i].que[0] == num) {
          console.log('ESSE É O B')
          partnum = monomios[ji[i].quais[0]].numero.replace(ji[i].que,'')

          if (partnum == '') {
            partnum = '1'
          }else if(partnum == '-') {
            partnum = '-1'
          }else if(partnum == '+') {
            partnum = '+1'
          }
          console.log(partnum)
          if (partnum.search('\\*') != -1) {
            b = Number(desfat(partnum))
            }else{
              b = partnum
            }

          }else{
            tudocerto = false
          }
        }
      }

      if (tudocerto == true) {

        if (c == -0) {
          c = 0
        }
        console.log('A:',a, 'B:',b, 'C:',c)
        console.log('HORA DE RESOLVER')
        delta = b**2 - 4*a*c
        console.log('this is delta:', delta)
        if (delta >= 0) {
          console.log('OK, DÁ PARA CONTINUAR')
          console.log('raiz de delta é:', delta**(1/2))

         // if (String(delta**(1/2)).search('\\.') == -1) {
          upper = -b + delta**(1/2)
          lower = 2*a

          console.log(upper,'/',lower)
          if (String(upper/lower).search('\\.') == -1 || countDecimals(String(upper/lower)) == 1) {
          sol1 = upper/lower
        }else{
          console.log(int[0])
          console.log(`${upper} + ${lower}x`)
          simp = FATORAR(REFORMATAR(`${upper} + ${lower}x`))[0]
          console.log('fator comum:',simp)
          
          if (simp != 'empty') {

            console.log('&&&&simp&&&&',simp)
            if(simp[0] == '-') {
              simp = simp.replace('.','')
              console.log('SIMP:',simp)
            }

          if (simp.search('\\.') != -1) {
          comum = desfat(simp.replace(new RegExp('\\.','g'),'*'))
          console.log(comum)
          }else{
            console.log('simp.length = 1')
            comum = simp
          }

          res = upper/comum + '/' + lower/comum
          console.log(res)
          sol1 = res
        }else{
          console.log(upper/lower)
          res = upper + '/' + lower
          sol1 = res
        }
        }

        upper = -b - delta**(1/2)
        lower = 2*a

        console.log(upper,'/',lower)
        if (String(upper/lower).search('\\.') == -1 || countDecimals(String(upper/lower)) == 1) {
        sol2 = upper/lower
      }else{
        console.log(int[0])
        console.log(`${upper} + ${lower}x`)
        simp = FATORAR(REFORMATAR(`${upper} + ${lower}x`))[0]
        console.log('fator comum:',simp)
        
        if (simp != 'empty') {

          console.log('&&&&simp&&&&',simp)
          if(simp[0] == '-') {
            simp = simp.replace('.','')
            console.log('SIMP:',simp)
          }

        if (simp.search('\\.') != -1) {
        comum = desfat(simp.replace(new RegExp('\\.','g'),'*'))
        console.log(comum)
        }else{
          console.log('simp.length = 1')
          comum = simp
        }

        res = upper/comum + '/' + lower/comum
        console.log(res)
        sol2 = res
      }else{
        console.log(upper/lower)
        res = upper + '/' + lower
        sol2 = res
      }
      }

      
          if (delta != 0) {
          console.log('SOLUÇÃO 1:', sol1, 'SOLUÇÃO 2:', sol2)
          }else{
            console.log('SOLUÇÃO:', sol1)
          }

       // }else{
         // console.log('EPA, PERAÍ')
         // sol1 = `(${-b} + √${delta})/${2*a}`
          //sol2 = `(${-b} - √${delta})/${2*a}`
         // console.log('solução 1:',sol1)
         // console.log('solução 2:',sol2)
       // }

        document.getElementById('result').style.display = 'block'

        if (sol1 != sol2) {
      document.getElementById('solucao').innerText = `x¹: ${sol1}, x²: ${sol2}`
        }else{
      document.getElementById('solucao').innerText = `x: ${sol1}`
        }
      }else{
        
      document.getElementById('result').style.display = 'block'
      document.getElementById('solucao').innerText = 'Sem solução pertencente aos ℝ'
      }

      }
     }

    }
}

function REFORMATAR(q) {
  qualexp1 = q;
  qualexp = "";

  parar = false;
  for (copy in qualexp1) {
    
    if (qualexp1[copy] != " ") {
      if (
        qualexp1[copy].search("([0-9]|\\.)") != -1 ||
        qualexp1[copy].search("[a-z]") != -1 ||
        qualexp1[copy].search("[\\+\\-\\^\\*]") != -1
      ) {
        
        qualexp += qualexp1[copy];
      } else {
        parar = true;
      }
    }
  }
  

  if (qualexp != "" && parar == false) {
    ground = "";
    expression = [];
    for (phy in qualexp) {
      if (qualexp[phy].search("([0-9]|\\.)") != -1) {
        if (ground.search("([0-9]|\\.)") != -1) {
          ground += qualexp[phy];
        } else if (ground.length > 0) {
          expression.push(ground);
          ground = qualexp[phy];
        } else {
          ground = qualexp[phy];
        }
      } else {
        if (ground.length > 0) {
          expression.push(ground);
        }
        ground = qualexp[phy];
      }
      if (phy == qualexp.length - 1) {
        expression.push(ground);
      }
    }

    
    
    return expression
  }
}


function fazerConta(anterior) {
   
  if(0 == 0) {// falta == false
//Primeiro raizes e potências
for (n = 0; n < anterior.length; n++) {
if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
  //console.log('POTEnCIALIZAÇÃO')
  anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
  anterior.splice(n - 1, 2)
  
  n = n - 3 // n = n - 3
  //console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
  if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
      //console.log('TIRAR')
      anterior.splice(n + 3, 1)
      anterior.splice(n + 1, 1)
      n = n - 3

      //console.log(anterior)
  }else{
      //console.log(anterior)
  }
}else if(anterior[n] == '√' && anterior[n + 1] != '(' ) {
  //console.log('RAIZ')
  anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
  anterior.splice(n, 1)
  //console.log(n)
  n = n - 2
  //console.log(n)
  if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
      //console.log('TIRAR')
      anterior.splice(n + 3, 1)
      anterior.splice(n + 1, 1)
      n = n - 3

      //console.log(anterior)
  }else{
      //console.log(anterior)
  }
}
}

// Segundo multiplicações e divisões
for (n = 0; n < anterior.length; n++) {
if(anterior[n] == 'x' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
//console.log('MULTIPLICAÇÃO')
anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
anterior.splice(n - 1, 2)

n = n - 3
//console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])

if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
  //console.log('TIRAR')
  anterior.splice(n + 3, 1)
  anterior.splice(n + 1, 1)
  n = n - 3

  //console.log(anterior)
}else{
  //console.log(anterior)
}
}else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
//console.log('DIVISÃO')
anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
anterior.splice(n - 1, 2)

n = n - 3
//console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
  //console.log('TIRAR')
  anterior.splice(n + 3, 1)
  anterior.splice(n + 1, 1)
  n = n - 3

  //console.log(anterior)
}else{
  //console.log(anterior)
}
}
}


if (anterior.length > 1) {

// while(anterior.length != 1 && anterior.indexOf('nan') == -1) {
  for (n = 0; n < anterior.length && anterior.length != 1; n++) {
      //console.log(anterior[n])
      if (anterior[n] == '+' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[x\\/\\*]') == -1 && String(anterior[n - 2]).search('[x\\/\\*\\-]') == -1) {
          //console.log('ADIÇÃO')
          anterior[n + 1] = String(Number(anterior[n - 1]) + Number(anterior[n + 1]))
          anterior.splice(n - 1, 2)
        
          n = n - 3
          //console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
          if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
              //console.log('TIRAR')
              anterior.splice(n + 3, 1)
              anterior.splice(n + 1, 1)
              n = n - 3

              //console.log(anterior)
          }else{
              //console.log(anterior)
          }
      }else if(anterior[n] == '-' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[x\\/\\*]') == -1 && String(anterior[n - 2]).search('[x\\/\\*\\-]') == -1) {
          //console.log('SUBTRAÇÃO') 
          anterior[n + 1] = String(Number(anterior[n - 1]) - Number(anterior[n + 1]))
          anterior.splice(n - 1, 2)
          
          n = n - 3
          //console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
          if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
              //console.log('TIRAR')
              anterior.splice(n + 3, 1)
              anterior.splice(n + 1, 1)
              n = n - 3

              //console.log(anterior)
          }else{
              //console.log(anterior)
          }
      }else if(anterior[n] == 'x' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
          //console.log('MULTIPLICAÇÃO')
          anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
          anterior.splice(n - 1, 2)
          
          n = n - 3
          //console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
          if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
              //console.log('TIRAR')
              anterior.splice(n + 3, 1)
              anterior.splice(n + 1, 1)
              n = n - 3

              //console.log(anterior)
          }else{
              //console.log(anterior)
          }
      }else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
          //console.log('DIVISÃO')
          anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
          anterior.splice(n - 1, 2)
          
          n = n - 3
          //console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
          if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
              //console.log('TIRAR')
              anterior.splice(n + 3, 1)
              anterior.splice(n + 1, 1)
              n = n - 3

              //console.log(anterior)
          }else{
              //console.log(anterior)
          }
      }else if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
          //console.log('DIVISÃO')
          anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
          anterior.splice(n - 1, 2)
          
          n = n - 3
          //console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
          if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
              //console.log('TIRAR')
              anterior.splice(n + 3, 1)
              anterior.splice(n + 1, 1)
              n = n - 3

              //console.log(anterior)
          }else{
              //console.log(anterior)
          }
      }else if(anterior[n] == '√' && anterior[n + 1] != '(') {
          //console.log('RAIZ')
          anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
          anterior.splice(n, 1)
          
          n = n - 2
          //console.log(n)
          if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
              //console.log('TIRAR')
              anterior.splice(n + 3, 1)
              anterior.splice(n + 1, 1)
              n = n - 3
      
              //console.log(anterior)
          }else{
              //console.log(anterior)
          }
      }
  }
// }
}

  
}
return anterior
}


function ehprimo(Number) {
  parar = false;
  for (t = 2; t < Number && parar == false; t++) {
    if (Number % t == 0) {
      parar = true;
    }
  }
  if (parar) return false;
  else return true;
}
function ORDENAROB(ar,prop) {
grtols = []
   for (hi in ar) {
       ar[hi].length = ar[hi][prop].length
       grtols.push(ar[hi])
   }
   organizado = sortob(grtols, 'length')[1]
   grtols = []
   for (ah in organizado) {
       grtols.push(ar[organizado[ah]])
   }
   return grtols
}

function sortob(n, pam) {
  var maiorparamenor = []
  var posiçõesnumeros = []
  var yposition = n

  for (n in yposition) {
      maiorparamenor.push(-100000000000000000000000000000000000000000000000000000000000000000000000000000000)
      posiçõesnumeros.push(-1)

  }

  for (item in yposition) {
      var volume = 0
      var dn = 0
      for (volume in yposition) {
          if (dn == 0) {
              if (yposition[item][pam] > maiorparamenor[volume]) {
                  var itens = yposition.length - (Number(volume) + 1)
                  var leng = yposition.length

                  for (i = 0; i < itens; i++) {
                      maiorparamenor[Number(leng) - 1] = maiorparamenor[Number(leng) - 2]
                      posiçõesnumeros[Number(leng) - 1] = posiçõesnumeros[Number(leng) - 2]
                      leng--
                  }
                  maiorparamenor[volume] = yposition[item][pam]
                  posiçõesnumeros[volume] = Number(item)
                  dn = 10


              }
          }
      }
  }
  return [maiorparamenor, posiçõesnumeros]
}

function FATORARSInGULAR(potn) {
  if (ehprimo(potn) == false && String(potn).search('[0-9]') != -1) {
      fatorado = ''
  
      first = 1
  
      div = 0
  
      stop = false
      fator = 1
      
      for (e = 2; stop == false; e++) {
          
          
          
      
          sob = Number(potn)
        
             if (ehprimo(e) == true) {
              while (sob%e == 0) {
              if (sob%e == 0) {
                  
                  
                  
              }
  
              sob = sob/e
              
              
              
  
              fator = fator*e
  
              st = false
              
              if (fator == potn) {
              stop = true
              fatorado += `${e}`
              }else{
                  fatorado += `${e}*`
              }
             }
          }
      }
      return fatorado
  }
  }
  function versetem(comp) {
    podeir = true;
    qual = -1;
    for (meow in segs) {
      array1 = [];
      for (d in segs[meow].car) {
        array1.push(segs[meow].car[d]);
      }
      array2 = [];
      for (d in comp) {
        array2.push(comp[d]);
      }
      if (segs[meow].car.length < comp.length) {
        divisao = DIVIDIR(VAI(segs[meow].car), VAI(comp));
      } else {
        divisao = DIVIDIR(VAI(comp), VAI(segs[meow].car));
      }
      if (divisao == "" || divisao == "-") {
        //
        podeir = false;
        qual = meow;
      }
    }
    return podeir;
  }
  function VAI(str) {

    
    comofica = []
    ground = ''
for (bye in str) {
    

        
        carac = str[bye]
      
            if (ground.length == 0) {
                ground+= carac
            }else if(String(ground.search('[0-9]')) != -1 && String(carac).search('[0-9]') != -1) {
                ground+= carac
            }else{
                comofica.push(ground)
                ground = ''
                ground += carac
               
            }
            if (bye == str.length - 1) {
                comofica.push(ground)
            }
    str[bye].numero = comofica
 }

 return comofica
}



function FATORAR(expression) {

  alt = 1
  startexp = [...expression];

if (expression[0] !== "-" && expression[0] !== "+") {
  //
  expo = ["+"];
  for (ent in expression) {
    //
    expo.push(expression[ent]);
  }
  expression = expo;
}

//6x^2 + 3 + 14x^2y + 7y

//FAZEnDO AS COnTAS COM nÚMEROS

//FATORAnDO OS nÚMEROS

console.log('FATORAR')
for (n = 0; n < expression.length; n++) {
  console.log(expression[n],ehprimo(expression[n]))
  if (
    ehprimo(expression[n]) == false &&
    String(expression[n]).search("[0-9]") != -1 &&
    expression[n - 1] != "^"
  ) {

    console.log('OK')
    fatorado = "";

    first = 1;

    div = 0;
    //

    stop = false;
    fator = 1;

    for (e = 2; stop == false; e++) {
      sob = Number(expression[n]);

      if (ehprimo(e) == true) {
        while (sob % e == 0) {
          if (sob % e == 0) {
            //
          }

          sob = sob / e;

          //
          //

          fator = fator * e;

          st = false;

          if (fator == expression[n]) {
            stop = true;
            fatorado += `${e}`;
          } else {
            fatorado += `${e}*`;
          }
        }
      }
    }

    expression[n] = fatorado;
    console.log(expression[n],'=>',fatorado)
  }
}
//

//FAZEnDO AS POTÊnCIAS COM LETRAS

//
for (y in expression) {
  if (expression[y] == "^") {
    ad = expression[Number(y) - 1];
    for (h = 0; h < Number(expression[Number(y) + 1]) - 1; h++) {
      expression[Number(y) - 1] += ad;
    }

    expression.splice(Number(y) + 1, 1);
    expression.splice(y, 1);
  }
}

//SEPARAnDO OS MOnÔMIOS

monomios = [{ numero: "" }];
obnum = 0;
for (n = 0; n < expression.length; n++) {
  if (String(expression[n]).search("[\\-\\+]") != -1 && n != 0) {
    monomios.push({ numero: "" });
    obnum++;
  }

  monomios[obnum].numero += expression[n];
}

//monomios = [{numero: ['11','x']},{numero: ['11','*','3','x']}]

//TRANSFORMA  O MONOMIOS.NUMERO(STRING) EM UM ARRAY

for (bye in monomios) {
  comofica = [];
  ground = "";

  for (misery in monomios[bye].numero) {
    carac = monomios[bye].numero[misery];

    if (ground.length == 0) {
      //
      ground += carac;
    } else if (
      String(ground.search("([0-9]|\\.)")) != -1 &&
      String(carac).search("([0-9]|\\.)") != -1
    ) {
      //
      ground += carac;
    } else {
      comofica.push(ground);
      ground = "";
      ground += carac;
    }
    if (misery == monomios[bye].numero.length - 1) {
      comofica.push(ground);
    }
  }
  monomios[bye].numero = comofica;
}

for (huh in monomios) {
  partlet = "";
  for (y in monomios[huh].numero) {
    if (String(monomios[huh].numero[y]).search("[a-z]") != -1) {
      partlet += String(monomios[huh].numero[y]);
    }
  }
  monomios[huh].partletral = partlet;
}

ji = [];
//JUNTANDO OS MONÔMIOS QUE DÁ PARA somar
for (huh in monomios) {
  if (
    ji.find(function (ji) {
      return ji.que == monomios[huh].partletral;
    }) == undefined
  ) {
    ji.push({ quais: [Number(huh)], que: monomios[huh].partletral });
  } else {
    ji.find(function (ji) {
      return ji.que == monomios[huh].partletral;
    }).quais.push(Number(huh));
  }
}

//SEPARAnDO/JUnTAnDO OS nÚMEROS
// ==> SOMANDO OS MONÔMIOS...

exp = [];

for (bye in ji) {
//

for (misery in ji[bye].quais) {
  ground = "";

  comofica = [];
  for (bo in monomios[ji[bye].quais[misery]].numero) {
    carac = monomios[ji[bye].quais[misery]].numero[bo];
    //

    if (ground.length == 0) {
      //
      ground += carac;
    } else if (
      String(ground.search("([0-9]|\\.)")) != -1 &&
      String(carac).search("([0-9]|\\.)") != -1
    ) {
      //
      ground += carac;
    } else {
      comofica.push(ground);
      ground = "";
      ground += carac;
      if (bo == monomios[ji[bye].quais[misery]].numero.length - 1) {
        comofica.push(ground);
      }
    }
  }

  monomios[ji[bye].quais[misery]].numero = comofica;
}
}

for (chuva in ji) {
//

conta = [];
for (da in ji[chuva].quais) {
  divisor = [];
  for (flowers in ji[chuva].que) {
    divisor.push(ji[chuva].que[flowers]);
  }

  tu = [...divisor];
  resultadoDaDivisão = DIVIDIR(
    divisor,
    monomios[ji[chuva].quais[da]].numero
  );

  plan = [];
  add = "";

  for (past in resultadoDaDivisão) {
    if (
      resultadoDaDivisão[past].search("\\*") != -1 ||
      resultadoDaDivisão[past].search("([0-9]|\\.)") != -1
    ) {
      if (add.length == 0) {
        if (resultadoDaDivisão[past - 1] != "-") {
          add += resultadoDaDivisão[past];
        }
      } else if (
        resultadoDaDivisão[past].search("([0-9]|\\.)") != -1 &&
        add.search("([0-9]|\\.)") != -1
      ) {
        add += resultadoDaDivisão[past];
      } else {
        plan.push(add);
        add = "";

        add += resultadoDaDivisão[past];
      }
      //

      if (plan.length == 3) {
        plan = [String(Number(plan[0]) * Number(plan[2]))];
      }
    }
  }

  if (add == "" && ji[chuva].quais.length > 1) {
    add = "1";
    //
  }
  plan.push(add);

  if (plan.length == 3) {
    //
    //
    plan = [String(Number(plan[0]) * Number(plan[2]))];
    //
  }

  if (
    monomios[ji[chuva].quais[da]].numero[0] == "+" ||
    monomios[ji[chuva].quais[da]].numero[0] == "-"
  ) {
    //

    sinal = monomios[ji[chuva].quais[da]].numero[0];

    if (conta.length != 0) {
      conta.push(monomios[ji[chuva].quais[da]].numero[0]);
    }
  }

  if (conta.length == 0 && monomios[ji[chuva].quais[da]].numero[0] == "-") {
    entao = "-";
    entao += plan[0];
    //
    conta.push(entao);
  } else {
    conta.push(plan[0]);
  }
}

comehome = fazerConta(conta);

if (comehome[0][0] == "-") {
  t = "";
  for (bo in comehome[0]) {
    if (comehome[0][bo] != "-") {
      t += comehome[0][bo];
    }
  }
  //

  at = t;
  if (ehprimo(t) == false) {
    console.log('AT:',at)
    fat = FATORARSInGULAR(at);
    //
  } else {
    //
    fat = at;
  }
  oop = "-";
  oop += String(fat);

  exp.push("-");
  fat += ji[chuva].que;
  exp.push(fat);
} else {
  if (ehprimo(comehome) == false) {
    console.log('AT:',comehome)
    fat = FATORARSInGULAR(comehome);
  } else {
    fat = comehome;
  }

  if (exp.length == 0) {
    fat += ji[chuva].que;
    exp.push(fat);
  } else {
    exp.push("+");
    fat += ji[chuva].que;
    exp.push(fat);
    //
  }
}
}

expression = exp;

//SEPARAnDO OS MOnÔMIOS DEnOVO

monomios = [{ numero: "" }];
obnum = 0;

for (n = 0; n < exp.length; n++) {
if (String(exp[n]).search("[\\-\\+]") != -1 && n != 0) {
  monomios.push({ numero: "" });
  obnum++;
}

monomios[obnum].numero += exp[n];
}

//

//SEPARAR CORRETAMEnTE OS nÚMEROS

/*
for (bye in monomios) {
//

comofica = [];
ground = "";

for (misery in monomios[bye].numero) {
  //

  carac = monomios[bye].numero[misery];
  //
  //

  //
  if (ground.length == 0) {
    ground += carac;
  } else if (
    String(ground.search("[0-9]")) != -1 &&
    String(carac).search("[0-9]") != -1
  ) {
    ground += carac;
  } else {
    comofica.push(ground);
    ground = "";
    ground += carac;
  }
  if (misery == monomios[bye].numero.length - 1) {
    comofica.push(ground);
  }
}

monomios[bye].numero = comofica;
}
*/
// AQUI ACABA O CÓDIGO PARA somar OS MONÔMIOS

 function FATORARSInGULAR(potn) {
 if (ehprimo(potn) == false && String(potn).search('[0-9]') != -1) {
     fatorado = ''
 
     first = 1
 
     div = 0
 
     stop = false
     fator = 1
     
     for (e = 2; stop == false; e++) {
         ////console.log('')
         ////console.log(e)
         ////console.log('')
     
         sob = Number(potn)
       
            if (ehprimo(e) == true) {
             while (sob%e == 0) {
             if (sob%e == 0) {
                 ////console.log(sob + '/' + e + ': ' + sob/e)
                 
                 
             }
 
             sob = sob/e
             
             //console.log('SIM')
             //console.log(fator + ' x ' + e + ': ' + fator*e)
 
             fator = fator*e
 
             st = false
             
             if (fator == potn) {
             stop = true
             fatorado += `${e}`
             }else{
                 fatorado += `${e}*`
             }
            }
         }
     }
     return fatorado
 }
 }
 //
 

 
 // FAZER COnTA COM nÚMEROS
 function fazerConta(anterior) {
 
     if(0 == 0) {// falta == false
 //Primeiro raizes e potências
 for (n = 0; n < anterior.length; n++) {
 if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
     //console.log('POTEnCIALIZAÇÃO')
     anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
     anterior.splice(n - 1, 2)
     
     n = n - 3 // n = n - 3
     //console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
     if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
         //console.log('TIRAR')
         anterior.splice(n + 3, 1)
         anterior.splice(n + 1, 1)
         n = n - 3
 
         //console.log(anterior)
     }else{
         //console.log(anterior)
     }
 }else if(anterior[n] == '√' && anterior[n + 1] != '(' ) {
     //console.log('RAIZ')
     anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
     anterior.splice(n, 1)
     //console.log(n)
     n = n - 2
     //console.log(n)
     if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
         //console.log('TIRAR')
         anterior.splice(n + 3, 1)
         anterior.splice(n + 1, 1)
         n = n - 3
 
         //console.log(anterior)
     }else{
         //console.log(anterior)
     }
 }
 }
 
 // Segundo multiplicações e divisões
 for (n = 0; n < anterior.length; n++) {
 if(anterior[n] == 'x' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
 //console.log('MULTIPLICAÇÃO')
 anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
 anterior.splice(n - 1, 2)
 
 n = n - 3
 //console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
 
 if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
     //console.log('TIRAR')
     anterior.splice(n + 3, 1)
     anterior.splice(n + 1, 1)
     n = n - 3
 
     //console.log(anterior)
 }else{
     //console.log(anterior)
 }
 }else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
 //console.log('DIVISÃO')
 anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
 anterior.splice(n - 1, 2)
 
 n = n - 3
 //console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
 if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
     //console.log('TIRAR')
     anterior.splice(n + 3, 1)
     anterior.splice(n + 1, 1)
     n = n - 3
 
     //console.log(anterior)
 }else{
     //console.log(anterior)
 }
 }
 }
 
 
 if (anterior.length > 1) {
 
 // while(anterior.length != 1 && anterior.indexOf('nan') == -1) {
     for (n = 0; n < anterior.length && anterior.length != 1; n++) {
         //console.log(anterior[n])
         if (anterior[n] == '+' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[x\\/\\*]') == -1 && String(anterior[n - 2]).search('[x\\/\\*\\-]') == -1) {
             //console.log('ADIÇÃO')
             anterior[n + 1] = String(Number(anterior[n - 1]) + Number(anterior[n + 1]))
             anterior.splice(n - 1, 2)
           
             n = n - 3
             //console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
             if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                 //console.log('TIRAR')
                 anterior.splice(n + 3, 1)
                 anterior.splice(n + 1, 1)
                 n = n - 3
 
                 //console.log(anterior)
             }else{
                 //console.log(anterior)
             }
         }else if(anterior[n] == '-' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[x\\/\\*]') == -1 && String(anterior[n - 2]).search('[x\\/\\*\\-]') == -1) {
             //console.log('SUBTRAÇÃO') 
             anterior[n + 1] = String(Number(anterior[n - 1]) - Number(anterior[n + 1]))
             anterior.splice(n - 1, 2)
             
             n = n - 3
             //console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
             if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                 //console.log('TIRAR')
                 anterior.splice(n + 3, 1)
                 anterior.splice(n + 1, 1)
                 n = n - 3
 
                 //console.log(anterior)
             }else{
                 //console.log(anterior)
             }
         }else if(anterior[n] == 'x' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
             //console.log('MULTIPLICAÇÃO')
             anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
             anterior.splice(n - 1, 2)
             
             n = n - 3
             //console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
             if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                 //console.log('TIRAR')
                 anterior.splice(n + 3, 1)
                 anterior.splice(n + 1, 1)
                 n = n - 3
 
                 //console.log(anterior)
             }else{
                 //console.log(anterior)
             }
         }else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
             //console.log('DIVISÃO')
             anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
             anterior.splice(n - 1, 2)
             
             n = n - 3
             //console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
             if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                 //console.log('TIRAR')
                 anterior.splice(n + 3, 1)
                 anterior.splice(n + 1, 1)
                 n = n - 3
 
                 //console.log(anterior)
             }else{
                 //console.log(anterior)
             }
         }else if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
             //console.log('DIVISÃO')
             anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
             anterior.splice(n - 1, 2)
             
             n = n - 3
             //console.log('EnEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ' + n, anterior[n])
             if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                 //console.log('TIRAR')
                 anterior.splice(n + 3, 1)
                 anterior.splice(n + 1, 1)
                 n = n - 3
 
                 //console.log(anterior)
             }else{
                 //console.log(anterior)
             }
         }else if(anterior[n] == '√' && anterior[n + 1] != '(') {
             //console.log('RAIZ')
             anterior[n + 1] = String(Number(anterior[n + 1]) ** (1/2))
             anterior.splice(n, 1)
             
             n = n - 2
             //console.log(n)
             if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                 //console.log('TIRAR')
                 anterior.splice(n + 3, 1)
                 anterior.splice(n + 1, 1)
                 n = n - 3
         
                 //console.log(anterior)
             }else{
                 //console.log(anterior)
             }
         }
     }
 // }
 }
 
     
 }
 return anterior
 }
 //
 
 function versetem(comp) {
  podeir = true;
  qual = -1;
  for (meow in segs) {
    array1 = [];
    for (d in segs[meow].car) {
      array1.push(segs[meow].car[d]);
    }
    array2 = [];
    for (d in comp) {
      array2.push(comp[d]);
    }
    if (segs[meow].car.length < comp.length) {
      divisao = DIVIDIR(VAI(segs[meow].car), VAI(comp));
    } else {
      divisao = DIVIDIR(VAI(comp), VAI(segs[meow].car));
    }
    if (divisao == "" || divisao == "-") {
      //
      podeir = false;
      qual = meow;
    }
  }
  return podeir;
}
 
 function DIVIDIR(T, qual) {
     
 
     Tfix = []
 for (h in T) {
     Tfix.push(T[h])
     //console.log(T[h])
 }
 //egs = [...qual]
 
 //console.log('QUAL?',qual)
 egs = []
 for (norte in qual) {
 //console.log(qual[norte])
 if (qual[norte] == '*' || qual[norte] == '.') {
     //console.log('NÃOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
 }else{
 //console.log('SIIIIIIIIIIM')
 
 egs.push(qual[norte])
 
 }
 
 }
 
 
 takeout = []
 
 for (n in egs) {
 
 if (T.indexOf(egs[n]) != -1) {
 
    //console.log('TAKE OUT', egs[n])
 T.splice(T.lastIndexOf(egs[n]), 1)
 takeout.push(Number(n))
 }
 
 }
 
 
 //console.log('eeeeeeeeeeeeeeeeeeg', egs)
 
 
 for (giro = egs.length - 1; giro >= 0; giro--) {
     if (takeout.indexOf(Number(giro)) == -1) {
    //console.log(egs[giro],'egs[giro]')
     }else{
        //console.log('SPLICE')
         egs.splice(giro,1)
     }
 }
 
 //console.log('GIRRRRRRRRRROOOOO', egs)
 depois = ''
 for (n in egs) {
    //console.log('yo',egs[n])
         depois += String(egs[n])
 
      if (String(egs[Number(n) + 1]).search('[0-9]') != -1 && egs[n].search('[//-//+]') == -1) {
       //console.log('HUmm')
         depois+= '*'
      }
 }
 
 return depois
 
 
 }
 //expression = exp
 
 ////console.log('--------------------------------------------MOnOMIOS--------------------------------------')
 reps = []
 segs = []
 let  = []
 
 for (m = 0; m < monomios.length; m++) { // CADA MOnÔMIO
     repetido = []
     
     col = false
     repetido = []
 
    numerosrep = []
     ////console.log('BURRO')
  ////console.log('--------------------')
     //console.log(monomios[m].numero)
     
  
     for (oc = 0; oc < monomios[m].numero.length; oc++) { // CADA LETRA DE CADA MOnÔMIO
         
 
         if (monomios[m].numero[oc].search('[\\*\\+\\/]') == -1) {
       //console.log('LETRA OU nÚMERO ISOLADO: ' + monomios[m].numero[oc])
 
        //console.log('nUMEROS REPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP', numerosrep.indexOf(monomios[m].numero[oc]))
         if (numerosrep.indexOf(monomios[m].numero[oc]) == -1) {
         numerosrep.push(monomios[m].numero[oc])
 
         for (u = 0; u < monomios.length; u++) { // OUTROS MOnÔMIOS
             ocs2 = []
 
             if(u != m) {
         //console.log(`monomio ${u}: `)
         //console.log(monomios[u])   
             
 
           // OCAS
           if(ocs2.find(function(ocs2) {
             return ocs2.ed == monomios[m].numero[oc]
             }) == undefined) {
              //console.log('====================')
                 ocs2.push({ed: monomios[m].numero[oc], el: 0})
 
                 ocs = 0
           for (ao = 0; ao < monomios[m].numero.length; ao++) {
           //console.log('AAAAAAAAAA' + monomios[m].numero[ao])
             if (monomios[m].numero[ao] == monomios[m].numero[oc]) {
                 ocs++
             }
           }
         }
           //console.log('OOOOOOOOOOOOOOCS-------!!!!!!', ocs)
           
           for (e = 0; e < monomios[u].numero.length; e++) { // CADA LETRA DE CADA MOnÔMIO
           //console.log(monomios[u].numero[e])
             
             if (monomios[u].numero[e] == monomios[m].numero[oc]) {
               //  //console.log(monomios[m].numero[oc] + ' é igual a ' + monomios[u].numero[e])
 
                 if (repetido.find(function(repetido) {
                     return repetido.monum == u
                     }) === undefined) {
 
                         ocs2.find(function(ocs2) {
                             return ocs2.ed == monomios[m].numero[oc]
                             }).el++
 
                     
 
                      
 
                             if (ocs2.find(function(ocs2) {
                                 return ocs2.ed == monomios[m].numero[oc]
                                 }).el <= ocs) {
 
                                     //console.log('________uuuuuuuuuuuuuuuuuuuuuu________',{monum: u, wc: [m], letr: monomios[u].numero[e]})
                 repetido.push({monum: u, wc: [m], letr: monomios[u].numero[e]})
 
                
 
                             }
 
                 //reps.push({mns: [u, m],alg: monomios[u].numero[e])
                // reps.push(monomios[u].numero[e])
                     }else{
                         ////console.log('OOOOOBABAOBABEI')
                        // if (repetido.find(function(repetido) {
                            // return repetido.monum == u
                            // }).letr.indexOf(monomios[u].numero[e]) == -1) {
 
                                 ocs2.find(function(ocs2) {
                                     return ocs2.ed == monomios[m].numero[oc]
                                     }).el++
 
                              
                                    
 
                                         if (ocs2.find(function(ocs2) {
                                             return ocs2.ed == monomios[m].numero[oc]
                                             }).el <= ocs) {
                                    
                                 repetido.find(function(repetido) {
                                     return repetido.monum == u
                                     }).letr += `.${monomios[u].numero[e]}`
                                    
                                 }
                                     //reps.push(monomios[u].numero[e])
     
               
                            // }else{
                                 //////console.log('DO nOT ADD')
                           // }
                     }
                 
                 ////console.log('REPETIDO: ', repetido)
                 ////console.log('OCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS34246352645263546345:', ocs2)
             }else{
                 
             }
             ////console.log('')
           }
         }
         }
         ////console.log('------------------------------------------------------------------------------------------')
     }
     }
     }
    
     //console.log('REPETIDO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', repetido)
     reps.push(repetido)
 
     
     for (nope in repetido) {
     if (repetido[nope].letr[0] == '-') {
         //console.log('hei')
         la = ''
         for (u in repetido[nope].letr) {
             if (u != 0 && u != 1) {
                 la+= repetido[nope].letr[u]
             }
         }
         //console.log(la, 'aaaaaaaaa')
         if (repetido.find(function(repetido){
             return repetido.letr == la
         })) {
             //console.log(':(', nope)
             repetido.splice(nope, 1)
             
         }
     }
 }
 
 
     ////console.log('OALAALODLOALDAODLADOLADAOLAODLaaaaaaaaaaaa000000000000000OOOOOOooooooooooooooooooooIIIIIIIIIIIIIIAODALDLAOLDAO')
     
         for (moe = repetido.length - 1; moe >= 0; moe--) {
            //console.log('**********************************************************************esse',repetido[moe], segs)

            podeir = true
            qual = -1
            for (meow in segs) {
                
              //console.log('')
              //console.log('',segs[meow].car)
             
                  array1 = []
                  for (d in segs[meow].car) {
                      array1.push(segs[meow].car[d])
                  }

                  array2 = []
                  for (d in repetido[moe].letr) {
                      array2.push(repetido[moe].letr[d])
                  }

                  if (segs[meow].car.length < repetido[moe].letr.length) {

                      divisao =  DIVIDIR(VAI(segs[meow].car), VAI(repetido[moe].letr))
                  //console.log('DIVIDIR', segs[meow].car, 'por', repetido[moe].letr, '(', VAI(segs[meow].car), '*', VAI(repetido[moe].letr), ')', divisao)
                   }else{
                       divisao = DIVIDIR(VAI(repetido[moe].letr),VAI(segs[meow].car))
                  //console.log('DIVIDIR', repetido[moe].letr, 'por', segs[meow].car, '(', VAI(segs[meow].car), '*', VAI(repetido[moe].letr), ')',divisao)
                   }

                   if (divisao == '' || divisao == '-') {
                      //console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> OPA, TEM!!!!!!!!!!!!!!!')
                      podeir = false
                      qual = meow
                   }
                
            }

            //console.log('PODE IR?????????????????????????', podeir, qual)
             if (podeir == true) {
              splitUp(repetido[moe].letr);
                  function splitUp(str) {
                  estado = "";
                  // CÓDIGO PARA ADICIONAR OS TERMOS EM COMUM DOS MONÔMIOS NA LISTA SEGS(SEGMENTOS)
                  for (i in str) {
                      if (str[i] == "." && estado != "-") {
                      permission = versetem(estado);
                      //console.log(permission)
                      if (permission == true && estado != " " && estado != "-") {
                          segs.push({ car: estado, mons: [m] });
                      }
                      }
                      estado += str[i];
                      if (i == str.length - 1) {
                      permission = versetem(estado);
                      if (permission == true && estado != " " && estado != "-") {
                          segs.push({ car: estado, mons: [m] });
                      }
                      }
                  }
                  //
                  }
 
             }else if(segs[qual].mons.indexOf(m) == -1){
                  segs[qual].mons.push(m)      
             }
         }
         
 }
 
 
 ////console.log('RELAÇÃO EnTRE OS MOnÔMIOS')
 ////console.log(segs)
 
 
 for (nl = 0; nl < segs.length; nl++) {
     //console.log('-----------------------------------------------------------------------------------------')
     
     //console.log(segs[nl])
 
     //console.log('AnALISAR CADA ITEM')
     //console.log('nUMERO: ', segs[nl].car)
     for (n = 0; n < segs.length; n++) {
 
         //console.log('---------------------------------------------------------------------')
         if (n != nl) {
         //console.log(`${segs[n].car}.search('${segs[nl].car}')`, String(segs[n].car).search(String(segs[nl].car)))
         for (dry in segs[nl].car) {
          //console.log('_|(o u o)|_', segs[nl].car[dry])
         }

         if (String(segs[n].car).search(String(segs[nl].car)) != -1) {
            
             //console.log(`${segs[n].car}: ${segs[n].mons}`)
             //console.log(`${segs[nl].car}: ${segs[nl].mons}`)
 
             for (u in segs[n].mons) {
                 //console.log(segs[n].mons[u])
                 if (segs[nl].mons.indexOf(segs[n].mons[u]) != -1) {
                     //console.log('TEM')
                 }else{
                   //console.log('nÃO TEM')
                   //console.log('O DEVTOOLS É A PIOR COISA QUE JÁ EXISTIU nESSE MUnDO', segs[nl].mons)
                     segs[nl].mons.push(segs[n].mons[u])
                   
                 }
             }
         }
         }
     
     }
 
 }
 
 if (segs.length >= 1) {
 return [ORDENAROB(segs,'car')[0].car,expression,monomios,ji]
 }else{
  return ['empty',expression,monomios,ji]
 }
}

function desfat(quase) {
  quase = REFORMATAR(quase)
gates = []
aconta = ''
friend = ''

elevar = 1
aster = false

for (patience in quase) {
   
    if (quase[patience] == '*') {
        aster = true
      
        gates.push(quase[Number(patience) - 1])
        gates.push('x')
        gates.push(quase[Number(patience) + 1])
       
        quase[Number(patience) + 1] = fazerConta(gates)[0]
        aconta = fazerConta(gates)[0]
        friend = fazerConta(gates)[0]
       
        gates = []
    }else if(quase[patience].search('[a-z]') != -1)  {
      
       friend+= quase[patience]
        if (quase[patience] == quase[Number(patience) - 1]) {
            elevar++

            if (patience == quase.length - 1) {
                aconta+= `^${elevar}`
            }
        }else{
            if (elevar > 1) {
                aconta+= `^${elevar}` 
            }

            aconta+= quase[patience]
        
            elevar = 1
        }
    } 
}

if (quase[0] != '-') {
return aconta
}else{
  return `-${aconta}`
}
}

function countDecimals(string) {
  iniciar = false
  count = 0
  for (i in string) {
    if (string[i] == '.') {
      iniciar = true
    }else if(iniciar == true) {
      count+=1
    }
  }
  return count
  }