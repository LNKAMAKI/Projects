function solve() {
    i1 = document.getElementById('inp1').value
    i2 = document.getElementById('inp2').value

    if (i1.search('([0-9]|[a-z])') != -1 && i2.search('([0-9]|[a-z])') != -1) { // SE OS VALORES FOREM VÁLIDOS
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

        int = SOMAR(i1)
       simplificar = int[0]
       console.log(simplificar)
       intfinal = SOMAR(simplificar)
       console.log(intfinal[1])
       console.log(intfinal[2])
      
       monomios = intfinal[1]
       a = 0
       b = 0
       c = 0
       if (monomios.length <= 3) { // Se tiver 3 ou menos monômios
        console.log('Ok, go through the ji')

        ji = ORDENAROB(intfinal[2],'que')
        console.log(ji)
        tudocerto = true
        for (i = 0; i < ji.length && tudocerto == true; i++) {
            console.log(ji[i].quais[0], ji[i].que)

            if (i == 0) {
            if (ji[i].que.length == 2 && ji[i].que[0] == ji[i].que[1]) {
              console.log('ESSE É O A')
              partnum = monomios[ji[i].quais[0]].numero.replace(ji[i].que,'')
              console.log(partnum)
              a = Number(partnum)
              num = ji[i].que[0]
            }else{
              tudocerto = false
            }
          }else if (ji[i].que == '') {
            console.log('ESSE É O C')
            console.log(monomios[ji[i].quais[0]].numero)
            c = Number(monomios[ji[i].quais[0]].numero)

          }else if(ji[i].que.length == 1) {
            if ( ji[i].que[0] == num) {
            console.log('ESSE É O B')
            partnum = monomios[ji[i].quais[0]].numero.replace(ji[i].que,'')
            console.log(partnum)
            b = Number(partnum)

            }else{
              tudocerto = false
            }
          }
        }

        if (tudocerto == true) {
          console.log('A:',a, 'B:',b, 'C:',c)
        }
       }

      }
}

function REFORMATAR(q) {
    qualexp1 = q;
    qualexp = "";
  
    parar = false;
    for (copy in qualexp1) {
      //console.log(qualexp1[copy])
      if (qualexp1[copy] != " ") {
        if (
          qualexp1[copy].search("[0-9]") != -1 ||
          qualexp1[copy].search("[a-z]") != -1 ||
          qualexp1[copy].search("[\\+\\-\\^]") != -1
        ) {
          //console.log(qualexp1[copy],'ir')
          qualexp += qualexp1[copy];
        } else {
          parar = true;
        }
      }
    }
    //console.log('É ESSE:', qualexp)
  
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
        }
      }
  
      //resultado = FATORAR(expression,0);
      //return resultado;
      return expression
    }
  }

  function SOMAR(expression) {

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
  
    /*
    for (n = 0; n < expression.length; n++) {
      if (
        ehprimo(expression[n]) == false &&
        String(expression[n]).search("[0-9]") != -1 &&
        expression[n - 1] != "^"
      ) {
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
      }
    }
    */
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
  
    /*
    for (bye in monomios) {
      comofica = [];
      ground = "";
  
      for (misery in monomios[bye].numero) {
        carac = monomios[bye].numero[misery];
  
        if (ground.length == 0) {
          //
          ground += carac;
        } else if (
          String(ground.search("[0-9]")) != -1 &&
          String(carac).search("[0-9]") != -1
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
    */

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
    //JUNTANDO OS MONÔMIOS QUE DÁ PARA SOMAR
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
        for (b in monomios[ji[bye].quais[misery]].numero) {
          carac = monomios[ji[bye].quais[misery]].numero[b];
          //
  
          if (ground.length == 0) {
            //
            ground += carac;
          } else if (
            String(ground.search("[0-9]")) != -1 &&
            String(carac).search("[0-9]") != -1
          ) {
            //
            ground += carac;
          } else {
            comofica.push(ground);
            ground = "";
            ground += carac;
            if (b == monomios[ji[bye].quais[misery]].numero.length - 1) {
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
            resultadoDaDivisão[past].search("[0-9]") != -1
          ) {
            if (add.length == 0) {
              if (resultadoDaDivisão[past - 1] != "-") {
                add += resultadoDaDivisão[past];
              }
            } else if (
              resultadoDaDivisão[past].search("[0-9]") != -1 &&
              add.search("[0-9]") != -1
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
        for (b in comehome[0]) {
          if (comehome[0][b] != "-") {
            t += comehome[0][b];
          }
        }
        //
  
        at = t;
          fat = at;

        oop = "-";
        oop += String(fat);
  
        exp.push("-");
        fat += ji[chuva].que;
        exp.push(fat);
      } else {
          fat = comehome;

  
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

      function DIVIDIR(T, qual) {
        Tfix = [];
        for (h in T) {
          Tfix.push(T[h]);
        }
        //egs = [...qual]
    
        egs = [];
        for (norte in qual) {
          if (qual[norte] == "*" || qual[norte] == ".") {
          } else {
            egs.push(qual[norte]);
          }
        }
    
        takeout = [];
    
        for (n in egs) {
          if (T.indexOf(egs[n]) != -1) {
            //
            T.splice(T.lastIndexOf(egs[n]), 1);
            takeout.push(Number(n));
          }
        }
    
        for (giro = egs.length - 1; giro >= 0; giro--) {
          if (takeout.indexOf(Number(giro)) == -1) {
            //
          } else {
            //
            egs.splice(giro, 1);
          }
        }
    
        depois = "";
        for (n in egs) {
          //
          depois += String(egs[n]);
    
          if (
            String(egs[Number(n) + 1]).search("[0-9]") != -1 &&
            egs[n].search("[//-//+]") == -1
          ) {
            //
            depois += "*";
          }
        }
    
        return depois;
      }

      /*
      function FATORARSInGULAR(potn) {
        if (ehprimo(potn) == false && String(potn).search("[0-9]") != -1) {
          fatorado = "";
    
          first = 1;
    
          div = 0;
    
          stop = false;
          fator = 1;
    
          for (e = 2; stop == false; e++) {
            sob = Number(potn);
    
            if (ehprimo(e) == true) {
              while (sob % e == 0) {
                if (sob % e == 0) {
                }
    
                sob = sob / e;
    
                fator = fator * e;
    
                st = false;
    
                if (fator == potn) {
                  stop = true;
                  fatorado += `${e}`;
                } else {
                  fatorado += `${e}*`;
                }
              }
            }
          }
          return fatorado;
        }
      }
      */

      return [exp,monomios,ji]

  // AQUI ACABA O IÓDIGO PARA SOMAR OS MONÔMIOS
}

function REDONUMFACTORING(storer) {
    if (typeof storer === "string") {
      other = [];
      for (h in storer) {
        other.push(storer[h]);
      }
      storer = other;
    }

    resultobtained = "";

    elevar = 1;
    wasmultiplicated = false;

    operation = [];
    for (patience in storer) {
      if (storer[patience] == "*") {
        wasmultiplicated = true;

        operation.push(storer[Number(patience) - 1]);
        operation.push("x");
        operation.push(storer[Number(patience) + 1]);

        storer[Number(patience) + 1] = fazerConta(operation)[0];
        resultobtained = fazerConta(operation)[0];

        operation = [];
      } else if (storer[patience].search("[a-z]") != -1) {
        if (storer[patience] == storer[Number(patience) - 1]) {
          elevar++;

          if (patience == storer.length - 1) {
            resultobtained += `^${elevar}`;
          }
        } else {
          if (elevar > 1) {
            resultobtained += `^${elevar}`;
          }

          resultobtained += storer[patience];

          elevar = 1;
        }
      }
    }

    if (wasmultiplicated == false) {
      //
      addingnumber = "";
      for (eyes in storer) {
        //
        if (storer[eyes].search("[0-9]") != -1) {
          //
          addingnumber += storer[eyes];
        }
      }
      addingnumber += resultobtained;
      //

      resultobtained = addingnumber;
    }
    if (storer[0] == "-") {
      confirmedresult = "-";
      for (caracter in resultobtained) {
        confirmedresult += resultobtained[caracter];
      }
      return confirmedresult;
    } else {
      return resultobtained;
    }
  }

  function fazerConta(anterior) {
    if (0 == 0) {
      //falta == false
      //Primeiro raizes e potências
      for (n = 0; n < anterior.length; n++) {
        if (
          anterior[n] == "*" &&
          anterior[n - 1] != "(" &&
          anterior[n - 1] != ")" &&
          anterior[n + 1] != "(" &&
          anterior[n + 1] != ")" &&
          anterior[n + 1] != "√"
        ) {
          anterior[n + 1] = String(
            Number(anterior[n - 1]) ** Number(anterior[n + 1])
          );
          anterior.splice(n - 1, 2);

          n = n - 3; //n = n - 3

          if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
            anterior.splice(n + 3, 1);
            anterior.splice(n + 1, 1);
            n = n - 3;
          } else {
          }
        } else if (anterior[n] == "√" && anterior[n + 1] != "(") {
          anterior[n + 1] = String(Number(anterior[n + 1]) ** (1 / 2));
          anterior.splice(n, 1);

          n = n - 2;

          if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
            anterior.splice(n + 3, 1);
            anterior.splice(n + 1, 1);
            n = n - 3;
          } else {
          }
        }
      }

      //Segundo multiplicações e divisões
      for (n = 0; n < anterior.length; n++) {
        if (
          anterior[n] == "x" &&
          anterior[n - 1] != "(" &&
          anterior[n - 1] != ")" &&
          anterior[n + 1] != "(" &&
          anterior[n + 1] != ")" &&
          anterior[n + 1] != "√" &&
          String(anterior[n + 2]).search("\\*") == -1 &&
          String(anterior[n - 2]).search("\\*") == -1
        ) {
          anterior[n + 1] = String(
            Number(anterior[n - 1]) * Number(anterior[n + 1])
          );
          anterior.splice(n - 1, 2);

          n = n - 3;

          if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
            anterior.splice(n + 3, 1);
            anterior.splice(n + 1, 1);
            n = n - 3;
          } else {
          }
        } else if (
          anterior[n] == "/" &&
          anterior[n - 1] != "(" &&
          anterior[n - 1] != ")" &&
          anterior[n + 1] != "(" &&
          anterior[n + 1] != ")" &&
          anterior[n + 1] != "√" &&
          String(anterior[n + 2]).search("\\*") == -1 &&
          String(anterior[n - 2]).search("\\*") == -1
        ) {
          anterior[n + 1] = String(
            Number(anterior[n - 1]) / Number(anterior[n + 1])
          );
          anterior.splice(n - 1, 2);

          n = n - 3;

          if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
            anterior.splice(n + 3, 1);
            anterior.splice(n + 1, 1);
            n = n - 3;
          } else {
          }
        }
      }

      if (anterior.length > 1) {
        //while(anterior.length != 1 && anterior.indexOf('nan') == -1) {
        for (n = 0; n < anterior.length && anterior.length != 1; n++) {
          if (
            anterior[n] == "+" &&
            anterior[n - 1] != "(" &&
            anterior[n - 1] != ")" &&
            anterior[n + 1] != "(" &&
            anterior[n + 1] != ")" &&
            anterior[n + 1] != "√" &&
            String(anterior[n + 2]).search("[x\\/\\*]") == -1 &&
            String(anterior[n - 2]).search("[x\\/\\*\\-]") == -1
          ) {
            anterior[n + 1] = String(
              Number(anterior[n - 1]) + Number(anterior[n + 1])
            );
            anterior.splice(n - 1, 2);

            n = n - 3;

            if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
              anterior.splice(n + 3, 1);
              anterior.splice(n + 1, 1);
              n = n - 3;
            } else {
            }
          } else if (
            anterior[n] == "-" &&
            anterior[n - 1] != "(" &&
            anterior[n - 1] != ")" &&
            anterior[n + 1] != "(" &&
            anterior[n + 1] != ")" &&
            anterior[n + 1] != "√" &&
            String(anterior[n + 2]).search("[x\\/\\*]") == -1 &&
            String(anterior[n - 2]).search("[x\\/\\*\\-]") == -1
          ) {
            anterior[n + 1] = String(
              Number(anterior[n - 1]) - Number(anterior[n + 1])
            );
            anterior.splice(n - 1, 2);

            n = n - 3;

            if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
              anterior.splice(n + 3, 1);
              anterior.splice(n + 1, 1);
              n = n - 3;
            } else {
            }
          } else if (
            anterior[n] == "x" &&
            anterior[n - 1] != "(" &&
            anterior[n - 1] != ")" &&
            anterior[n + 1] != "(" &&
            anterior[n + 1] != ")" &&
            anterior[n + 1] != "√" &&
            String(anterior[n + 2]).search("\\*") == -1 &&
            String(anterior[n - 2]).search("\\*") == -1
          ) {
            anterior[n + 1] = String(
              Number(anterior[n - 1]) * Number(anterior[n + 1])
            );
            anterior.splice(n - 1, 2);

            n = n - 3;

            if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
              anterior.splice(n + 3, 1);
              anterior.splice(n + 1, 1);
              n = n - 3;
            } else {
            }
          } else if (
            anterior[n] == "/" &&
            anterior[n - 1] != "(" &&
            anterior[n - 1] != ")" &&
            anterior[n + 1] != "(" &&
            anterior[n + 1] != ")" &&
            anterior[n + 1] != "√" &&
            String(anterior[n + 2]).search("\\*") == -1 &&
            String(anterior[n - 2]).search("\\*") == -1
          ) {
            anterior[n + 1] = String(
              Number(anterior[n - 1]) / Number(anterior[n + 1])
            );
            anterior.splice(n - 1, 2);

            n = n - 3;

            if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
              anterior.splice(n + 3, 1);
              anterior.splice(n + 1, 1);
              n = n - 3;
            } else {
            }
          } else if (
            anterior[n] == "*" &&
            anterior[n - 1] != "(" &&
            anterior[n - 1] != ")" &&
            anterior[n + 1] != "(" &&
            anterior[n + 1] != ")" &&
            anterior[n + 1] != "√"
          ) {
            anterior[n + 1] = String(
              Number(anterior[n - 1]) ** Number(anterior[n + 1])
            );
            anterior.splice(n - 1, 2);

            n = n - 3;

            if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
              anterior.splice(n + 3, 1);
              anterior.splice(n + 1, 1);
              n = n - 3;
            } else {
            }
          } else if (anterior[n] == "√" && anterior[n + 1] != "(") {
            anterior[n + 1] = String(Number(anterior[n + 1]) ** (1 / 2));
            anterior.splice(n, 1);

            n = n - 2;

            if (anterior[n + 1] == "(" && anterior[n + 3] == ")") {
              anterior.splice(n + 3, 1);
              anterior.splice(n + 1, 1);
              n = n - 3;
            } else {
            }
          }
        }
      }
    }
    return anterior;
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