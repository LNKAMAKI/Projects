function ir() {
    qualexp1 = document.getElementById("typearea").value;
    qualexp = "";
    parar = false;
    for (copy in qualexp1) {
      if (qualexp1[copy] != " ") {
        if (
          qualexp1[copy].search("[0-9]") != -1 ||
          qualexp1[copy].search("[a-z]") != -1 ||
          qualexp1[copy].search("[\\+\\-\\^]") != -1
        ) {
          qualexp += qualexp1[copy];
        } else {
          parar = true;
        }}}
    if (qualexp != "" && parar == false) {
      ground = "";
      expression = [];
      for (phy in qualexp) {
        if (qualexp[phy].search("[0-9]") != -1) {
          if (ground.search("[0-9]") != -1) {
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
        } }
  
      resultadogeral = FATORAR(expression,true);
      resultado = resultadogeral[0];
      devtools(false)
      document.getElementById("result").innerHTML = "Resultado:";
      document.getElementById('result').style.display = 'block';
      document.getElementById("fatoracao").innerText = resultado;
      document.getElementById("tab").style.height = "0px";
      document.getElementById("exemplos").value = "Exemplos";
      abriu = false;
    }}
  abriu = false;
  vez = 0;
  function showegs() {
    if (abriu == false) {
      document.getElementById("tab").style.height = "fit-content";
      document.getElementById("exemplos").value = "Fechar";
    } else {
      document.getElementById("tab").style.height = "0px";
      document.getElementById("exemplos").value = "Exemplos";
    }
    if (abriu == false) {
      abriu = true;
    } else {
      abriu = false;
    }
  
    if (vez == 0) {
      pegs = document.getElementsByClassName("eg");
      for (iveco in pegs) {
        if (iveco.search("[0-9]") != -1) {
          pegs[iveco].setAttribute("onclick", `mudar(${iveco})`);
        }}}
    vez++;
  }
  function mudar(index) {
    document.getElementById("typearea").value =
      document.getElementsByClassName("eg")[index].innerText;
  }
  
  devtoolsstate = 'closed'
function devtools(close) {
  if (alt == 1){
    psegs = segs
    pscarecrow = scarecrow
    proll = roll
    pmiss = miss
    pyou = youdumb
    pmons = monomios
  }else{
    psegs = se
    pscarecrow = sc
    proll = rol
    pmiss = ms
    pyou = yd
    pmons = mns
  }
  for (away in pyou) {
    omori = ''
    for (ten in pyou[away].mons) {
        omori+= pyou[away].mons[ten] + ','
    }
    pyou[away].str = omori
  }
  tab = document.getElementById('devtab')
  but = document.getElementById('dev')
  dec = document.getElementById('dec')
  m = document.getElementById('mons')
  slots = document.getElementsByClassName('slot')
  if (devtoolsstate == 'closed' || close == false) {
    mms = m.getElementsByTagName('span')
     for (ret = mms.length - 1; ret >= 0; ret--) {
        m.removeChild(mms[ret])
     }
     for (erase in slots) {
        slots[erase].innerHTML = ''
    } 
      if (close == true) {
        devtoolsstate = 'open'
        tab.style.height= '400px'
        tab.style.overflowY = 'auto'
        tab.style.padding= '10px'
        but.setAttribute('class','deven')
       }
      for (a in pmons) {
        relnum =  desfat(pmons[a].numero)
        span = document.createElement('span')
        if (a == 0) {
        span.innerText = relnum
        }else if(pmons[a].numero[0] == '+') {
            span.innerText =  ' + ' + relnum
        }else if(pmons[a].numero[0] == '-'){
            quest = ''
            for (mens in relnum) {
                if (mens != 0) {
                    quest+= relnum[mens]
                }}
            span.innerText = ' - ' + quest
        }
        m.appendChild(span)
    }

    for (h in psegs) {
        p = document.createElement('p')
        p.style.whiteSpace = 'nowrap'
        p.style.margin = '5px'
        for (proud in pscarecrow[h].divididos) {
            pscarecrow[h].divididos[proud] = desfat(REFORMATAR(String(pscarecrow[h].divididos[proud])))
        }
       
        if (psegs[h].car[0] == '-') {
            sing = ''
            for (tor in psegs[h].car) {
                if (psegs[h].car[tor] == '.' && psegs[h].car[Number(tor) - 1] == '-') {
                }else{
                    sing+= psegs[h].car[tor]
                }}
                psegs[h].car = sing
            }
        go = REFORMATAR(psegs[h].car.replace(new RegExp('\\.','g'),'*'))
        refeito = []
        for (j in go) {
            if (go[j] == '*' && go[Number(j) + 1].search('[0-9]') == -1) {
            }else{
                refeito.push(go[j])
            }}
        go = desfat(refeito)
        p.innerHTML = `<span style="color:rgb(79 196 251);">${h}</span> &nbsp;${go}: [ `
        for (n in pscarecrow[h].divididos) {
            pc = document.createElement('div')
            pc.setAttribute('class','pcon')
            p.appendChild(pc)
            ph = document.createElement('p')
            ph.innerText = ' ' + pscarecrow[h].divididos[n]
            ph.setAttribute('class','part')
            pc.appendChild(ph)
            plen = document.createElement('span')
            plen.setAttribute('class','plen')
            plen.innerText = psegs[h].mons[n]
            pc.appendChild(plen)
            if (n < Number(pscarecrow[h].divididos.length) - 1) {
                p.innerHTML+= ','
            }else{
                p.innerHTML+= ' ]'
            } }
        slots[0].appendChild(p) 
    }
        for (h in pmiss) {
        p = document.createElement('p')
        p.style.whiteSpace = 'nowrap'
        p.style.margin = '5px'
        p.innerHTML = desfat(REFORMATAR(pmiss[h].dividido))+ ': ' + '[ ' + `<span style="color: rgb(79 196 251);">${pmiss[h].aparicoes}</span>` + ' ]'
        slots[1].appendChild(p)
    }
    for (h in proll) {
        p = document.createElement('p')
        p.style.whiteSpace = 'nowrap'
        p.style.margin = '5px'
        okl = []
        for (love in proll[h].posições) {
        okl.push(` ${desfat(REFORMATAR(pmiss[proll[h].posições[love]].dividido))}`)
        }
        p.innerHTML = `<span style="color: rgb(79 196 251);">${proll[h].repetidos}</span>` + ': [ ' + okl + ' ]'
        slots[2].appendChild(p)
    }

    grupagens = []
    for (h in pyou) {
        p = document.createElement('p')
        p.style.whiteSpace = 'nowrap'
        p.style.margin = '5px'
       //console.log('----')

        omori = ''
        for (ten in pyou[h].mons) {
           //console.log(pyou[h].mons[ten])
            omori+= pyou[h].mons[ten] + ','
        }

        if (grupagens.indexOf(omori) == -1) {
        for (sob in pyou[h].w.what) {
            //console.log('aaaaaaaa',pyou[h].w.what[sob].ar)
            ser = pyou[h].w.what[sob].ar
            p.innerHTML+= '[ '
            for (gr in ser) {
                pc = document.createElement('div')
                pc.setAttribute('class','pcon')
                pc.innerHTML =  `<p class="part"> ${ser[gr]}</p><p class="plen">${desfat(pmons[ser[gr]].numero)}</p>`
                if (gr < ser.length - 1){
                    pc.innerHTML+= ','
                }
                p.appendChild(pc)
            } 
            p.innerHTML += ' ] '
        }
        slots[3].appendChild(p)
        grupagens.push(omori)
    }}
  }else{
    devtoolsstate = 'closed'
    tab.style.height = '0'
    tab.style.overflowY = 'hidden'
    tab.style.padding = '0'
    but.setAttribute('class','devin')
  }}

  
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

function FATORE(q) {
    qualexp1 = q;
    qualexp = "";
    parar = false;
    for (copy in qualexp1) {
      if (qualexp1[copy] != " ") {
        if (
          qualexp1[copy].search("[0-9]") != -1 ||
          qualexp1[copy].search("[a-z]") != -1 ||
          qualexp1[copy].search("[\\+\\-\\^]") != -1
        ) {
          qualexp += qualexp1[copy];
        } else {
          parar = true;
        }}}
    if (qualexp != "" && parar == false) {
      ground = "";
      expression = [];
      for (phy in qualexp) {
        if (qualexp[phy].search("[0-9]") != -1) {
          if (ground.search("[0-9]") != -1) {
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
        }}
      return expression
    }}

     // FAZER COnTA COM nÚMEROS
     function fazerConta(anterior) {
      if(0 == 0) {
  for (n = 0; n < anterior.length; n++) {
  if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
      anterior[n + 1] = String(Number(anterior[n - 1]) ** Number(anterior[n + 1]))
      anterior.splice(n - 1, 2)
      n = n - 3 
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
  for (n = 0; n < anterior.length; n++) {
  if(anterior[n] == 'x' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
  anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
  anterior.splice(n - 1, 2)
  n = n - 3
  if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
      anterior.splice(n + 3, 1)
      anterior.splice(n + 1, 1)
      n = n - 3
  }
  }else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
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
          if (anterior[n] == '+' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[x\\/\\*]') == -1 && String(anterior[n - 2]).search('[x\\/\\*\\-]') == -1) {
              anterior[n + 1] = String(Number(anterior[n - 1]) + Number(anterior[n + 1]))
              anterior.splice(n - 1, 2)
              n = n - 3
              if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                  anterior.splice(n + 3, 1)
                  anterior.splice(n + 1, 1)
                  n = n - 3
              }
          }else if(anterior[n] == '-' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('[x\\/\\*]') == -1 && String(anterior[n - 2]).search('[x\\/\\*\\-]') == -1) {
              anterior[n + 1] = String(Number(anterior[n - 1]) - Number(anterior[n + 1]))
              anterior.splice(n - 1, 2)
              n = n - 3
              if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                  anterior.splice(n + 3, 1)
                  anterior.splice(n + 1, 1)
                  n = n - 3
              }
          }else if(anterior[n] == 'x' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
              anterior[n + 1] = String(Number(anterior[n - 1]) * Number(anterior[n + 1]))
              anterior.splice(n - 1, 2)
              n = n - 3
              if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                  anterior.splice(n + 3, 1)
                  anterior.splice(n + 1, 1)
                  n = n - 3
              }
          }else if(anterior[n] == '/' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√' && String(anterior[n + 2]).search('\\*') == -1 && String(anterior[n - 2]).search('\\*') == -1) {
              anterior[n + 1] = String(Number(anterior[n - 1]) / Number(anterior[n + 1]))
              anterior.splice(n - 1, 2)
              n = n - 3
              if (anterior[n + 1] == '(' && anterior[n + 3] == ')') {
                  anterior.splice(n + 3, 1)
                  anterior.splice(n + 1, 1)
                  n = n - 3
              }
          }else if(anterior[n] == '*' && anterior[n - 1] != '(' && anterior[n - 1] != ')' && anterior[n + 1] != '(' && anterior[n + 1] != ')' && anterior[n + 1] != '√') {
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
              } }}}}
  return anterior
  }
  
  function SPLITEXPS(expression) {
      splitedExps = []
      str = ''
      c1 = -1
      c2 = -1
      for (c in expression) {
        if (expression[c] == '(') {
          c1 = c
          str = ''
        }else if(expression[c] == ')') {
          c2 = c
          splitedExps.push({exp: str,open:c1,close:c2})
          str = ''
        }else{
          str+= expression[c]
        }}
      return splitedExps
      }
      function desfat(algo) {
      quase = [...algo]
      gates = []
      aconta = ''
      friend = ''
      elevar = 1
      aster = false
      for (patience in quase) {
          if (quase[patience] == '*' && quase[Number(patience) - 1].search('[0-9]') != -1 && quase[Number(patience) + 1].search('[0-9]') != -1 ) {
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
            }else if(quase[patience].search('[0-9]') != -1 && quase.indexOf('*') == -1) {
                aconta+= quase[patience]
              }else if(quase[patience] == '^'){
                aconta+= quase[patience]
              }}
      if (quase[0] != '-') {
      return aconta
      }else{
        return `-${aconta}`
      }}
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
                    sob = sob/e
                    fator = fator*e
                    st = false
                    if (fator == potn) {
                    stop = true
                    fatorado += `${e}`
                    }else{
                        fatorado += `${e}*`
                    }}} }
            return fatorado
        }}
        function ehprimo(Number) {
            parar = false
            for (t = 2; t < Number && parar == false; t++) {
                if (Number%t == 0) {
                    parar = true
                }}
            if (parar) 
            return false
            else
            return true
        }
         // Achando todos os divisores da quantidade de monômios
     // Ex: 12: 4, 3, 2, 6
     function ehprimo2(Number) {
        divisores = []
        for (t = 2; t < Number && parar == false; t++) {
            if (Number%t == 0) {
               divisores.push(t)
            }}
       return divisores
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
        }}}
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
        }}
      return expression
    }}

    function DIVIDIR(T, qual) {
        Tfix = []
    for (h in T) {
        Tfix.push(T[h])
    }
    egs = []
    for (norte in qual) {
    if (qual[norte] == '*' || qual[norte] == '.') {
    }else{
    egs.push(qual[norte])
    }}
    takeout = []
    for (n in egs) {
    if (T.indexOf(egs[n]) != -1) {
    T.splice(T.lastIndexOf(egs[n]), 1)
    takeout.push(Number(n))
    }}
    for (giro = egs.length - 1; giro >= 0; giro--) {
        if (takeout.indexOf(Number(giro)) == -1) {
        }else{
            egs.splice(giro,1)
        }}
    depois = ''
    for (n in egs) {
            depois += String(egs[n])
         if (String(egs[Number(n) + 1]).search('[0-9]') != -1 && egs[n].search('[//-//+]') == -1) {
            depois+= '*'
         }}
    return depois
   }
   function versetem(comp,pam) {
    podeir = true;
    qual = -1;
    for (meow in pam) {
      array1 = [];
      for (d in pam[meow].car) {
        array1.push(pam[meow].car[d]);
      }
      array2 = [];
      for (d in comp) {
        array2.push(comp[d]);
      }
      if (pam[meow].car.length < comp.length) {
        divisao = DIVIDIR(VAI(pam[meow].car), VAI(comp));
      } else {
        divisao = DIVIDIR(VAI(comp), VAI(pam[meow].car));
      }
      if (divisao == "" || divisao == "-") {
        podeir = false;
        qual = meow;
      }}
    return podeir;
  }