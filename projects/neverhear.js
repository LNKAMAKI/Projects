function FATORAR2(expression_2) {

    startexp_2 = [...expression_2];

  if (expression_2[0] !== "-" && expression_2[0] !== "+") {
    //
    expo_2 = ["+"];
    for (ent in expression_2) {
      //
      expo_2.push(expression_2[ent]);
    }
    expression_2 = expo_2;
  }

  //6x^2 + 3 + 14x^2y + 7y

  //FAZEnDO AS COnTAS COM nÚMEROS

  //FATORAnDO OS nÚMEROS

  for (n = 0; n < expression_2.length; n++) {
    if (
      ehprimo(expression_2[n]) == false &&
      String(expression_2[n]).search("[0-9]") != -1 &&
      expression_2[n - 1] != "^"
    ) {
      fatorado = "";

      first = 1;

      div = 0;
      //

      stop = false;
      fator = 1;

      for (e = 2; stop == false; e++) {
        sob = Number(expression_2[n]);

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

            if (fator == expression_2[n]) {
              stop = true;
              fatorado += `${e}`;
            } else {
              fatorado += `${e}*`;
            }
          }
        }
      }

      expression_2[n] = fatorado;
    }
  }
  //

  //FAZEnDO AS POTÊnCIAS COM LETRAS

  //
  for (y in expression_2) {
    if (expression_2[y] == "^") {
      ad = expression_2[Number(y) - 1];
      for (h = 0; h < Number(expression_2[Number(y) + 1]) - 1; h++) {
        expression_2[Number(y) - 1] += ad;
      }

      expression_2.splice(Number(y) + 1, 1);
      expression_2.splice(y, 1);
    }
  }

  //SEPARAnDO OS MOnÔMIOS

  monomios_2 = [{ numero: "" }];
  obnum = 0;
  for (n = 0; n < expression_2.length; n++) {
    if (String(expression_2[n]).search("[\\-\\+]") != -1 && n != 0) {
      monomios_2.push({ numero: "" });
      obnum++;
    }

    monomios_2[obnum].numero += expression_2[n];
  }

  //monomios_2 = [{numero: ['11','x']},{numero: ['11','*','3','x']}]

  //TRANSFORMA  O MONOMIOS_2.NUMERO(STRING) EM UM ARRAY

  for (bye in monomios_2) {
    comofica = [];
    ground = "";

    for (misery in monomios_2[bye].numero) {
      carac = monomios_2[bye].numero[misery];

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
      if (misery == monomios_2[bye].numero.length - 1) {
        comofica.push(ground);
      }
    }
    monomios_2[bye].numero = comofica;
  }

  for (huh in monomios_2) {
    partlet = "";
    for (y in monomios_2[huh].numero) {
      if (String(monomios_2[huh].numero[y]).search("[a-z]") != -1) {
        partlet += String(monomios_2[huh].numero[y]);
      }
    }
    monomios_2[huh].partletral = partlet;
  }

  ji = [];
  //JUNTANDO OS MONÔMIOS QUE DÁ PARA SOMAR
  for (huh in monomios_2) {
    if (
      ji.find(function (ji) {
        return ji.que == monomios_2[huh].partletral;
      }) == undefined
    ) {
      ji.push({ quais: [Number(huh)], que: monomios_2[huh].partletral });
    } else {
      ji.find(function (ji) {
        return ji.que == monomios_2[huh].partletral;
      }).quais.push(Number(huh));
    }
  }

  //SEPARAnDO/JUnTAnDO OS nÚMEROS
// ==> SOMANDO OS MONÔMIOS...

// AQUI ACABA O CÓDIGO PARA SOMAR OS MONÔMIOS

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
    for (meow in segs_2) {
      array1 = [];
      for (d in segs_2[meow].car) {
        array1.push(segs_2[meow].car[d]);
      }
      array2 = [];
      for (d in comp) {
        array2.push(comp[d]);
      }
      if (segs_2[meow].car.length < comp.length) {
        divisao = DIVIDIR(VAI(segs_2[meow].car), VAI(comp));
      } else {
        divisao = DIVIDIR(VAI(comp), VAI(segs_2[meow].car));
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
   //expression_2 = exp_2
   
   ////console.log('--------------------------------------------Monomios_2--------------------------------------')
   reps = []
   segs_2 = []
   let  = []
   
   for (m = 0; m < monomios_2.length; m++) { // CADA MOnÔMIO
       repetido = []
       
       col = false
       repetido = []
   
      numerosrep = []
       ////console.log('BURRO')
    ////console.log('--------------------')
       //console.log(monomios_2[m].numero)
       
    
       for (oc = 0; oc < monomios_2[m].numero.length; oc++) { // CADA LETRA DE CADA MOnÔMIO
           
   
           if (monomios_2[m].numero[oc].search('[\\*\\+\\/]') == -1) {
         //console.log('LETRA OU nÚMERO ISOLADO: ' + monomios_2[m].numero[oc])
   
          //console.log('nUMEROS REPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP', numerosrep.indexOf(monomios_2[m].numero[oc]))
           if (numerosrep.indexOf(monomios_2[m].numero[oc]) == -1) {
           numerosrep.push(monomios_2[m].numero[oc])
   
           for (u = 0; u < monomios_2.length; u++) { // OUTROS MOnÔMIOS
               ocs2 = []
   
               if(u != m) {
           //console.log(`monomio ${u}: `)
           //console.log(monomios_2[u])   
               
   
             // OCAS
             if(ocs2.find(function(ocs2) {
               return ocs2.ed == monomios_2[m].numero[oc]
               }) == undefined) {
                //console.log('====================')
                   ocs2.push({ed: monomios_2[m].numero[oc], el: 0})
   
                   ocs = 0
             for (ao = 0; ao < monomios_2[m].numero.length; ao++) {
             //console.log('AAAAAAAAAA' + monomios_2[m].numero[ao])
               if (monomios_2[m].numero[ao] == monomios_2[m].numero[oc]) {
                   ocs++
               }
             }
           }
             //console.log('OOOOOOOOOOOOOOCS-------!!!!!!', ocs)
             
             for (e = 0; e < monomios_2[u].numero.length; e++) { // CADA LETRA DE CADA MOnÔMIO
             //console.log(monomios_2[u].numero[e])
               
               if (monomios_2[u].numero[e] == monomios_2[m].numero[oc]) {
                 //  //console.log(monomios_2[m].numero[oc] + ' é igual a ' + monomios_2[u].numero[e])
   
                   if (repetido.find(function(repetido) {
                       return repetido.monum == u
                       }) === undefined) {
   
                           ocs2.find(function(ocs2) {
                               return ocs2.ed == monomios_2[m].numero[oc]
                               }).el++
   
                       
   
                        
   
                               if (ocs2.find(function(ocs2) {
                                   return ocs2.ed == monomios_2[m].numero[oc]
                                   }).el <= ocs) {
   
                                       //console.log('________uuuuuuuuuuuuuuuuuuuuuu________',{monum: u, wc: [m], letr: monomios_2[u].numero[e]})
                   repetido.push({monum: u, wc: [m], letr: monomios_2[u].numero[e]})
   
                  
   
                               }
   
                   //reps.push({mns: [u, m],alg: monomios_2[u].numero[e])
                  // reps.push(monomios_2[u].numero[e])
                       }else{
                           ////console.log('OOOOOBABAOBABEI')
                          // if (repetido.find(function(repetido) {
                              // return repetido.monum == u
                              // }).letr.indexOf(monomios_2[u].numero[e]) == -1) {
   
                                   ocs2.find(function(ocs2) {
                                       return ocs2.ed == monomios_2[m].numero[oc]
                                       }).el++
   
                                
                                      
   
                                           if (ocs2.find(function(ocs2) {
                                               return ocs2.ed == monomios_2[m].numero[oc]
                                               }).el <= ocs) {
                                      
                                   repetido.find(function(repetido) {
                                       return repetido.monum == u
                                       }).letr += `.${monomios_2[u].numero[e]}`
                                      
                                   }
                                       //reps.push(monomios_2[u].numero[e])
       
                 
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
              //console.log('**********************************************************************esse',repetido[moe], segs_2)

              podeir = true
              qual = -1
              for (meow in segs_2) {
                  
                //console.log('')
                //console.log('',segs_2[meow].car)
               
                    array1 = []
                    for (d in segs_2[meow].car) {
                        array1.push(segs_2[meow].car[d])
                    }

                    array2 = []
                    for (d in repetido[moe].letr) {
                        array2.push(repetido[moe].letr[d])
                    }

                    if (segs_2[meow].car.length < repetido[moe].letr.length) {

                        divisao =  DIVIDIR(VAI(segs_2[meow].car), VAI(repetido[moe].letr))
                    //console.log('DIVIDIR', segs_2[meow].car, 'por', repetido[moe].letr, '(', VAI(segs_2[meow].car), '*', VAI(repetido[moe].letr), ')', divisao)
                     }else{
                         divisao = DIVIDIR(VAI(repetido[moe].letr),VAI(segs_2[meow].car))
                    //console.log('DIVIDIR', repetido[moe].letr, 'por', segs_2[meow].car, '(', VAI(segs_2[meow].car), '*', VAI(repetido[moe].letr), ')',divisao)
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
                            segs_2.push({ car: estado, mons: [m] });
                        }
                        }
                        estado += str[i];
                        if (i == str.length - 1) {
                        permission = versetem(estado);
                        if (permission == true && estado != " " && estado != "-") {
                            segs_2.push({ car: estado, mons: [m] });
                        }
                        }
                    }
                    //
                    }
   
               }else if(segs_2[qual].mons.indexOf(m) == -1){
                    segs_2[qual].mons.push(m)      
               }
           }
           
   }
   
   
   ////console.log('RELAÇÃO EnTRE OS MOnÔMIOS')
   ////console.log(segs_2)
   
   
   for (nl = 0; nl < segs_2.length; nl++) {
       //console.log('-----------------------------------------------------------------------------------------')
       
       //console.log(segs_2[nl])
   
       //console.log('AnALISAR CADA ITEM')
       //console.log('nUMERO: ', segs_2[nl].car)
       for (n = 0; n < segs_2.length; n++) {
   
           //console.log('---------------------------------------------------------------------')
           if (n != nl) {
           //console.log(`${segs_2[n].car}.search('${segs_2[nl].car}')`, String(segs_2[n].car).search(String(segs_2[nl].car)))
           for (dry in segs_2[nl].car) {
            //console.log('_|(o u o)|_', segs_2[nl].car[dry])
           }

           if (String(segs_2[n].car).search(String(segs_2[nl].car)) != -1) {
              
               //console.log(`${segs_2[n].car}: ${segs_2[n].mons}`)
               //console.log(`${segs_2[nl].car}: ${segs_2[nl].mons}`)
   
               for (u in segs_2[n].mons) {
                   //console.log(segs_2[n].mons[u])
                   if (segs_2[nl].mons.indexOf(segs_2[n].mons[u]) != -1) {
                       //console.log('TEM')
                   }else{
                     //console.log('nÃO TEM')
                     //console.log('O DEVTOOLS É A PIOR COISA QUE JÁ EXISTIU nESSE MUnDO', segs_2[nl].mons)
                       segs_2[nl].mons.push(segs_2[n].mons[u])
                     
                   }
               }
           }
           }
       
       }
   
   }
   

   function ehprimo(Number) {
       parar = false
       for (t = 2; t < Number && parar == false; t++) {
       
           if (Number%t == 0) {
               parar = true
           }
       }
       if (parar) 
       return false
       else
       return true
   }
   
   
   //////console.log('------------------------------ORDEnAnDO DO MAIOR PARA O MEnOR----------------------------')
   
   
   grtols_2 = []
   
   for (hi in segs_2) {
       segs_2[hi].length = segs_2[hi].mons.length
   
       grtols_2.push(segs_2[hi])
   }
   
   organizado = sortob(grtols_2, 'length')[1]
   
   grtols_2 = []
   for (ah in organizado) {
       grtols_2.push(segs_2[organizado[ah]])
      
   }

   segs_2 = grtols_2

   lengs = []
   for (i in segs_2) {
     if (lengs.find(function(lengs){
       return lengs.leng == segs_2[i].mons.length
     }) == undefined){
       lengs.push({leng:segs_2[i].mons.length, num: [i]})
     }else{
      lengs.find(function(lengs){
       return lengs.leng == segs_2[i].mons.length
     }).num.push(i)
     }
   }
   
   
   segs_2ordered = []
   for (f in lengs) {
     its = []
     for (i in lengs[f].num) {
       its.push(segs_2[lengs[f].num[i]])
     }
   
     grtols_2 = []
      
      for (hi in its) {
          its[hi].length = its[hi].car.length
      
          grtols_2.push(its[hi])
      }
      
      organizado = sortob(grtols_2, 'length')[1]
      
      grtols_2 = []
      for (ah in organizado) {
          grtols_2.push(its[organizado[ah]])
         
      }
   
      its = grtols_2
     //console.log(its)
     for (c in its) {
       segs_2ordered.push(its[c])
     }
   }
   
   segs_2 = [...segs_2ordered]

   //DIVS_2
   ml = monomios_2.length
   //////console.log(ml)
   
   divs_2 = ehprimo2(ml)
   //////console.log(divs_2)
   
   for (n in divs_2) {
       //////console.log(divs_2[okentao])
       
   }
   
   if (divs_2.length == 0) {
   divs_2 = [1]
   }
   
/*
   goaway = []
   for (nah in segs_2) {
    
       //console.log(segs_2[nah].car)
       if (segs_2[nah].car[0] == '-') {
        //console.log('NEGATIVO')
        semmenos = ''
        for (memories in segs_2[nah].car) {
            //console.log(segs_2[nah].car[memories])
            if (memories != 0 && memories!= 1){
             semmenos+= segs_2[nah].car[memories]
            }
        }
        //console.log('pesquisar:', semmenos)
        //console.log(segs_2.find(function(segs_2) {return segs_2.car == semmenos}))
        if (segs_2.find(function(segs_2) {return segs_2.car == semmenos}) != undefined) {
            goaway.push(Number(nah))
        }
       }
   }
   //console.log('TIRAR TUDO')
   //console.log(goaway)

   for (time = segs_2.length - 1; time >= 0; time--) {
    //console.log(time, segs_2[time])
    if (goaway.indexOf(time) != -1) {
        //console.log('TIRAR')
        segs_2.splice(time, 1)
        }
   }
*/
   //divs_2 = [2,3]
   
   //////console.log('AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIÓÓOÓÓÓÓÓOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
   //////console.log(segs_2)
   
   
       //////console.log(segs_2, divs_2)
   
       ////console.log(segs_2)
   
    //console.log(segs_2)
   
       //const HATEYOU = []
       //for (HATEDEVTOOLS in segs_2) {
          
         //console.log(segs_2[HATEDEVTOOLS].mons)
           //HATEYOU.push(segs_2[HATEDEVTOOLS])
      // }
       
      //console.log(segs_2)
      for (tie in segs_2) {
      //console.log(segs_2[tie])
       segs_2[tie].godhelpme = [...segs_2[tie].mons]
      }
     
      okentao = 0
      // for (okentao in divs_2) {
           roll_2 = [] 
   
          //console.log('nAOOOOOOOOOOOOOOOOOOOOOOsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', n)
           //const vi = 0
           scarecrow_2 = []
           for(anchor in segs_2) {
              //console.log('i feel the light betrayed me', segs_2[anchor].mons)
               
           
               army = []
               lpisthebest = ''
                   for (fall in segs_2[anchor].car) {
                   if (lpisthebest.length == 0) {
                       //console.log('LISTA VAZIA - ADD')
                       lpisthebest = segs_2[anchor].car[fall]
                       //console.log(lpisthebest)
                   }else if(lpisthebest.search('[0-9]') != -1 && segs_2[anchor].car[fall].search('[0-9]') != -1) {
                       //console.log('VAI - ADD')
                       lpisthebest += segs_2[anchor].car[fall]
                   }else{
                       //console.log('nÃO VAI nÃO')
                       army.push(lpisthebest)
                       if(segs_2[anchor].car[fall] != '.') {
                       lpisthebest = segs_2[anchor].car[fall]
                       }else{
                           if (segs_2[anchor].car[Number(fall) + 1].search('[0-9]') != -1) {
                           lpisthebest = '*'
                           }else{
                               lpisthebest = ''
                           }
                       }
                  ////console.log('LPISTHEBEST', lpisthebest)
                   }
                   if (fall == segs_2[anchor].car.length - 1) {
                       army.push(lpisthebest)
                   }
               }
               bell = [...army]
              //console.log('OAHAHA', army)
   
              //console.log(army, '_____________YOU HAVE TO FIX WHAT YOU DID WRONG!_______________')
               
               for (pahh in army) {
                  //console.log(army[pahh])
                   if (army[pahh] == '*') {
                       army[pahh] = '.'
                   }
               }
               scarecrow_2.push({divididos: [], outrodiv: [], poss: [...segs_2[anchor].mons], divisor: [...army], positions: [...segs_2[anchor].mons]})
               for (high in segs_2[anchor].mons) {
                   
                  
                   army = [...bell]
            
                //console.log(monomios_2[segs_2[anchor].mons[high]].numero,army)
           
               
                lightson = [...army]
                   pain = DIVIDIR(army,monomios_2[segs_2[anchor].mons[high]].numero)
                   //console.log(lightson,monomios_2[segs_2[anchor].mons[high]].numero)
   
                   if (pain.length == 0 || pain.search('([0-9]|[a-z)])') == -1) {
                  //console.log('É 1')
                  if (lightson.indexOf('-') != -1 && monomios_2[segs_2[anchor].mons[high]].numero.indexOf('-') == -1) {
   
                      pain = '-1'
                     //console.log('opa')
                      scarecrow_2[anchor].divididos.push('1')
                       scarecrow_2[anchor].outrodiv.push(pain)
                  }else if(lightson.indexOf('-') == -1 && monomios_2[segs_2[anchor].mons[high]].numero.indexOf('-') != -1) {
                      
                       pain = '-1'
                     //console.log('opa')
                       scarecrow_2[anchor].divididos.push('1')
                       scarecrow_2[anchor].outrodiv.push(pain)
                  }else{
                   pain = '1'
                   scarecrow_2[anchor].divididos.push(pain)
                       scarecrow_2[anchor].outrodiv.push(pain)
                  }
                   
   
                   }else{
           
                       right = ''
                       for (feet in pain) {
                         //console.log(pain[feet])
                           if (pain[feet] != '+') {
                               right+= pain[feet]
                           }
                       }
                    //console.log('É ESSE:', right)
                      
                       uy = ''
                     //console.log(right, 'RIGHT') 
   
                      for (xarope in right) {
                    //console.log(right[xarope])
                       if (xarope == 0 && right[xarope] == '*') { // *2
                      //console.log('ERRADO!', '*2')
                       }else if(xarope == right.length - 1 && right[xarope] == '*'){ // 2*
                     // //console.log('ERRADO', '2*')
                       }else if(right[xarope] == '*' && String(right[Number(xarope) + 1]).search('[0-9]') == -1){ // 2*x
                    //  //console.log('ERRADO', '2*x')
                       }else if(right[xarope] == '*' && String(right[Number(xarope) - 1]).search('[0-9]') == -1){ // x*2
                      ////console.log('ERRADO', 'x*2')
                       }else{
                           uy+= right[xarope]
                       }
                      }
                      //console.log('UY',uy)
                      scarecrow_2[anchor].outrodiv.push(uy)
   
                      if (uy[0] == '-') {
                       holdon = ''
                       for (qual in uy) { 
                           if (uy[qual] != '-')
                           holdon+= uy[qual]
                       }
                       //console.log('FIXED', holdon)
                       uy = holdon
                      }
                      scarecrow_2[anchor].divididos.push(uy)
                   }
                  
               }
           }
      
          miss_2 = []
   
          for (ah in scarecrow_2) {
              //console.log('SCARECROW', scarecrow_2[ah].divididos)
              for (é in scarecrow_2[ah].divididos) {
                  //console.log(scarecrow_2[ah].divididos[é])
              if (miss_2.find(function(miss_2){return miss_2.dividido == scarecrow_2[ah].divididos[é]}) == undefined) {
               miss_2.push({dividido: scarecrow_2[ah].divididos[é], aparicoes: [Number(ah)], divisor: scarecrow_2[ah].divisor})
              }else{
               miss_2.find(function(miss_2){return miss_2.dividido == scarecrow_2[ah].divididos[é]}).aparicoes.push(Number(ah))
              }
           }
          }
   
          
          quantosfatores = Number(monomios_2.length)/Number(divs_2[okentao])
          quantasposições = Number(monomios_2.length)/Number(quantosfatores)
   
         //console.log('número de fatoes:', quantosfatores, '     número de posições:', quantasposições)
   
   // ORDEnAnO O MISS DE ACORDO COM O TAMAnHO DO APARIÇÕES
   
          grtols_2 = []
   for (hi in miss_2) {
       //////console.log(segs_2[hi], segs_2[hi].mons.length)
       miss_2[hi].length = miss_2[hi].aparicoes.length
   
       grtols_2.push(miss_2[hi])
   }
   organizado = sortob(grtols_2, 'length')[1]
   
   grtols_2 = []
   for (ah in organizado) {
      // ////console.log(segs_2[organizado[ah]])
       grtols_2.push(miss_2[organizado[ah]])
      
   }
   miss_2 = [...grtols_2]
   //
   deucerto = false
   java = 0
   
   //console.log('MISS.LENGTH',miss_2.length)
   
   roller_2 = [];
  for (eep in miss_2) {
    for (quad in miss_2) {
      if (quad != eep) {
        repeated = [];
        repwri = "";
        for (vespa in miss_2[eep].aparicoes) {
          if (miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa]) != -1) {
            repeated.push(miss_2[eep].aparicoes[vespa]);

            repwri += "," + miss_2[eep].aparicoes[vespa];

            if (
              roller_2.find(function (roller_2) {
                return roller_2.rept == repwri;
              }) == undefined
            ) {
              //console.log('PODE PUSHAR',{rept: repwri,opl:repeated,position: [eep,quad]}, repeated, repeated.length)
              roller_2.push({
                rept: repwri,
                opl: [...repeated],
                position: [eep, quad],
              });
            } else {
              if (
                roller_2
                  .find(function (roller_2) {
                    return roller_2.rept == repwri;
                  })
                  .position.indexOf(eep) == -1
              ) {
                roller_2
                  .find(function (roller_2) {
                    return roller_2.rept == repwri;
                  })
                  .position.push(eep);
              }

              if (
                roller_2
                  .find(function (roller_2) {
                    return roller_2.rept == repwri;
                  })
                  .position.indexOf(quad) == -1
              ) {
                roller_2
                  .find(function (roller_2) {
                    return roller_2.rept == repwri;
                  })
                  .position.push(quad);
              }
            }
          }
        }
      }
    }
  }
   for (r in roller_2) {
       //console.log(roller_2[r].opl, roller_2[r].position, roller_2[r].rept)
       roll_2.push({repetidos: roller_2[r].opl, posições: roller_2[r].position, way: roller_2[r].rept})
   }
   while(java < miss_2.length && deucerto == false) {
              
             // if (miss_2[java].aparicoes.length >= quantasposições) {
           //console.log('')
        //console.log('SEnDO AnALISADO nO MOMEnTO', miss_2[java].aparicoes)
   
           podeser_2 = []
           for (outro in miss_2) {
              //console.log('')
               if (outro != java /*&& miss_2[outro].aparicoes.length >= quantasposições*/) {
               //console.log(miss_2[outro], outro)
   
                   presentes = []
                   for (quecoisa in miss_2[outro].aparicoes) {
                       fatorzinho = miss_2[outro].aparicoes[quecoisa]
                    //console.log('FATORZINHO', fatorzinho, 'MISS[JAVA]', miss_2[java].aparicoes)
   
                       if (miss_2[java].aparicoes.indexOf(fatorzinho) != -1) {
                    //console.log('TEM', fatorzinho)
                           presentes.push(fatorzinho)
                       }
                   }
                 //console.log('OLHA', presentes)
   
                   adicionou = false
                   for (idk in podeser_2) {
                    //console.log(podeser_2[idk])
                       esigual = true
                       for (denovo in podeser_2[idk].opl) {
                          //console.log(podeser_2[idk].opl[denovo], presentes[denovo])
                           if (podeser_2[idk].opl[denovo] == presentes[denovo]) {
                              //console.log('É IGUAL')
                           }else{
                               esigual = false
                           }
                       }
                       if (esigual == true) {
                           podeser_2[idk].position.push(outro)
                           adicionou = true
                       }
                   }
                   if (presentes.length > 0 && presentes.length > 0 && adicionou == false) {
                       podeser_2.push({opl: presentes, position: [outro]})
                   }
                   
               }
              }
              //console.log('ESSE É O PODESERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR', podeser_2)
              
              
              for (belief in podeser_2) {
                  if (podeser_2[belief].position.indexOf(java) == -1) {
                  podeser_2[belief].position.push(String(java))
                  }
   
               //console.log(podeser_2[belief].opl)
   
               shot = ''
               for (gun in podeser_2[belief].opl) {
                   //console.log(podeser_2[belief].opl[gun])
                   shot+= podeser_2[belief].opl[gun] + ','
               }
              //console.log('THAT WE LET IT GO:', shot)
   
               if (roll_2.length == 0) {
                  //console.log('ADICIONAR(LISTA VAZIA)')
                   //roll_2.push({repetidos: [...podeser_2[belief].opl], way: shot, posições: [...podeser_2[belief].position]})
               }else if(roll_2.find(function(roll_2){return roll_2.way == shot}) != undefined) { // SE JÁ TIVER NA LSITA
                   //console.log('JÁ TEM')
                  //console.log(roll_2.find(function(roll_2){return roll_2.way == shot}),'esse',podeser_2[belief])
   
                   for (capital in podeser_2[belief].position) {
                       //console.log(podeser_2[belief].position[capital])
   
                     //console.log(roll_2.find(function(roll_2){return roll_2.way == shot}).posições, roll_2.find(function(roll_2){return roll_2.way == shot}).posições.indexOf(podeser_2[belief].position[capital]),podeser_2[belief].position[capital])
   
                   if (roll_2.find(function(roll_2){return roll_2.way == shot}).posições.indexOf(podeser_2[belief].position[capital])== -1) {
                      //console.log('NÃO TEM') 
                      roll_2.find(function(roll_2){return roll_2.way == shot}).posições.push(podeser_2[belief].position[capital])
                   }
                   }
   
               }else{
                   //console.log('NÃO TEM')
                   //roll_2.push({repetidos: [...podeser_2[belief].opl], way: shot, posições: [...podeser_2[belief].position]})
               }
              }
   
              //console.log('E ESSE É O ORIGInAL: ', miss_2[java].aparicoes, java)
              whyis = java
              if (podeser_2.length > 0) {
                  //console.log('fatores', quantosfatores, 'posições', quantasposições)
                  //console.log(podeser_2)
   
                  for(cold in podeser_2) {
              if (podeser_2[cold].position.length == quantosfatores && podeser_2[cold].opl.length == quantasposições && miss_2[whyis].aparicoes.length == quantasposições) {
              //console.log('É ISSOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
               deucerto = true
   
               ficaassim = ''
              // podeser_2[cold].position.push(whyis)
   
               for (yehaa in podeser_2[cold].position) {
                 //console.log(podeser_2[cold])
                  //console.log(miss_2[podeser_2[cold].position[yehaa]].dividido)
                   if (miss_2[podeser_2[cold].position[yehaa]].dividido[0] == '-') {
                       
                       fi = ''
                       for (ohjesus in miss_2[podeser_2[cold].position[yehaa]].dividido) {
                           if (miss_2[podeser_2[cold].position[yehaa]].dividido[ohjesus] != '-') {
                               fi+= miss_2[podeser_2[cold].position[yehaa]].dividido[ohjesus]
                           }
                       }
                     //console.log(fi)
                       if (yehaa != 0) {
                            ficaassim += ` - ${fi}`
                       }else{
                           ficaassim += `-${fi}`
                       }
                   }else if(yehaa != 0){
                       ficaassim += ' + '
                       ficaassim+= miss_2[podeser_2[cold].position[yehaa]].dividido
                   }else{
                       ficaassim+= miss_2[podeser_2[cold].position[yehaa]].dividido 
                   }
                   
               
               }
              //console.log('FICA ASSIM', `(${ficaassim})`)
              for (ruin in podeser_2[cold].opl) {
             //console.log(scarecrow_2[podeser_2[cold].opl[ruin]].divisor)
               emotion = ''
               for (scream in scarecrow_2[podeser_2[cold].opl[ruin]].divisor ) {
              ////console.log(scarecrow_2[podeser_2[cold].opl[ruin]].divisor[scream])
                   emotion+= scarecrow_2[podeser_2[cold].opl[ruin]].divisor[scream]
               }
             //console.log(`${emotion}(${ficaassim})`)
             }
              }
           }
   
           }
   
            //  }
              
            //console.log('continuar', miss_2[java])
   
              java++
          }
          okentao++
   
   
          /*
          for (nao in roll_2) {
             //console.log('-------------------------------------------------------------------')
          //console.log('esse é o negócio',roll_2[nao].repetidos)
           
          //console.log('---------------------------------------------')
         //console.log('ANALISANDO O MISS')
   
          
               shot = ''
               for (gun in roll_2[nao].repetidos) {
                   //console.log(podeser_2[belief].opl[gun])
                   shot+= roll_2[nao].repetidos[gun] + ','
               }
   
           for (whyso in miss_2) {
               //console.log(miss_2[whyso].aparicoes)
               igual = 0
               for (heat in miss_2[whyso].aparicoes) {
                   //console.log(miss_2[whyso].aparicoes[heat])
                   if (roll_2[nao].repetidos.indexOf(miss_2[whyso].aparicoes[heat]) != -1) {
                     //console.log('TEM')
                       igual++
                   }
               }
              //console.log('HÁ', igual, 'numero repetidos')
               if (igual == roll_2[nao].repetidos.length) {
                  //console.log('TEM SIMMMMMMMMMMMMMMM', whyso)
                     //console.log(roll_2.find(function (roll_2){return roll_2.way == shot}).posições)
   
                      if (roll_2.find(function (roll_2){return roll_2.way == shot}).posições.indexOf(whyso) != -1) {
                       //console.log('NAO ADICIONAR, JÁ TEM')
                   }else{
                     //console.log('ADICIONAR EFETIVAMENTE')
                       roll_2.find(function (roll_2){return roll_2.way == shot}).posições.push(whyso)
                   }
               }
                 //console.log('THAT WE LET IT GO:', shot)
                  
               }
           }
           */
          
         //console.log('ROOLLLLLLLLLLLLLLLLLLLLLLLLLLL', roll_2)
   
   
         //console.log('PARAR PARA ANALISAR')
         for (ne in roll_2) {
          //for (ne = 0; ne < 1; ne++) {
             //console.log('_______________________________')
           //console.log(roll_2[ne].posições, '(MISS):')
           //console.log('')
           //console.log(roll_2[ne].repetidos, '(SCARECROW)')
   
           arranjar = []
           for (pq in roll_2[ne].repetidos) {
               gosto = roll_2[ne].repetidos[pq], scarecrow_2[roll_2[ne].repetidos[pq]].divididos
               //console.log('----', gosto, scarecrow_2[gosto].divisor)
               arranjar.push({pos: pq, ocupa: [], origin: gosto})
   
           for (moon in roll_2[ne].posições) {
   
              //console.log(roll_2[ne].posições[moon], miss_2[roll_2[ne].posições[moon]].dividido, scarecrow_2[gosto].divididos)
               vaiir = scarecrow_2[gosto].outrodiv[scarecrow_2[gosto].divididos.indexOf(miss_2[roll_2[ne].posições[moon]].dividido)]
               //console.log(vaiir)
   
              arranjar[pq].ocupa.push(vaiir)
           }
       }
       //console.log('_______________ANALISANDO O ARRANJAR!!!!!!!!!!!_______________')
       
       
       jafoi = []
       
       perfectwave = []
       for (tosse in arranjar) {
   
           if (jafoi.indexOf(tosse) == -1) {
               organizer = {agrupar: [tosse], referencia: arranjar[tosse].ocupa}
          //console.log('___________________________________________')
          //console.log(tosse, arranjar[tosse].ocupa)
         //console.log('')
         
           for (calor in arranjar) {
       
               if (calor != tosse) {
                  //console.log('------------------------------')
                   //console.log(calor, arranjar[calor].ocupa)
   
                   equals = true
                   igualar =[]
                   for (boring in arranjar[calor].ocupa) {
                       sendocomparado = arranjar[calor].ocupa[boring]
                       comparador= arranjar[tosse].ocupa[boring]
                     //console.log(sendocomparado, '=>', comparador)
                      //console.log(sendocomparado[0],'==', comparador[0])
                       if (sendocomparado[0] != comparador[0]) {
                         //console.log(true)
                           igualar.push(true)
                       }else{
                          //console.log(false)
                           igualar.push(false)
                       }
                   }
                  //console.log('igualar:', igualar)
                   if (igualar.indexOf(false) == -1 || igualar.indexOf(true) == -1) {
                       //console.log(`======================> ${arranjar[calor].ocupa} é igual a ${arranjar[tosse].ocupa}`,tosse, calor)                     
                       jafoi.push(calor)
                       organizer.agrupar.push(calor)
   
                   }
               }
           }
           perfectwave.push(organizer)
       }
       }
       
      //console.log(roll_2[ne].posições)
       for (youchoose in perfectwave) {
           //console.log('_______________________________________',perfectwave[youchoose].agrupar)
           //console.log('COMO É PARA FICAR:', perfectwave[youchoose].referencia)
           ficarassim =  perfectwave[youchoose].referencia
   
           for (catraca in perfectwave[youchoose].agrupar) {
               //console.log('-----------------------------------------------------------')
               presa = perfectwave[youchoose].agrupar[catraca]
             
              //console.log(perfectwave[youchoose].agrupar[catraca], arranjar[presa].origin)
              //console.log(scarecrow_2[arranjar[presa].origin].divisor)
   
               diferente = false
               for (moon in roll_2[ne].posições) {
   
                  //console.log(roll_2[ne].posições[moon], miss_2[roll_2[ne].posições[moon]].dividido, scarecrow_2[arranjar[presa].origin].divididos)
                   vaiir = scarecrow_2[arranjar[presa].origin].outrodiv[scarecrow_2[arranjar[presa].origin].divididos.indexOf(miss_2[roll_2[ne].posições[moon]].dividido)]
                  //console.log(vaiir, ficarassim[moon])
                   if (vaiir != ficarassim[moon]) {
                       diferente = true
   
                       //console.log('MUDARR!!!!!!')
                      //console.log(scarecrow_2[arranjar[presa].origin].outrodiv[scarecrow_2[arranjar[presa].origin].divididos.indexOf(miss_2[roll_2[ne].posições[moon]].dividido)])
   
                      scarecrow_2[arranjar[presa].origin].outrodiv[scarecrow_2[arranjar[presa].origin].divididos.indexOf(miss_2[roll_2[ne].posições[moon]].dividido)] = ficarassim[moon]
                   }
       
                 
               }
              //console.log('SOME LIKE TO PLAY, I LIKE TO CODE')
               if (diferente == true) {
                   //console.log('ALTERAR...', scarecrow_2[arranjar[presa].origin].divisor)
   
                   lista = scarecrow_2[arranjar[presa].origin].divisor
                   if (lista != '-') {
                       //console.log('aff... >:')
                       modificar = ['-','.']
                       for (saved in lista) {
                          //console.log(lista[saved])
                           modificar.push(lista[saved])
                       }
                      //console.log(modificar)
                       scarecrow_2[arranjar[presa].origin].divisor = modificar
                   }else{
                       lista.splice(0,2)
                   }
               }
           }
       }
         }
   
        //console.log('OKAY, LET\'S DO IT!')
         for (sei in scarecrow_2) {
           //console.log(scarecrow_2[sei].divididos)
           
           for (ai in scarecrow_2[sei].divididos) {
               //console.log(scarecrow_2[sei].divididos[ai],'=', scarecrow_2[sei].outrodiv[ai])
               scarecrow_2[sei].divididos[ai] = scarecrow_2[sei].outrodiv[ai]
           }
         }
   
         miss_2 = []
   
         for (ah in scarecrow_2) {
             //console.log('SCARECROW', scarecrow_2[ah].divididos)
             for (é in scarecrow_2[ah].divididos) {
                 //console.log(scarecrow_2[ah].divididos[é])
             if (miss_2.find(function(miss_2){return miss_2.dividido == scarecrow_2[ah].divididos[é]}) == undefined) {
              miss_2.push({dividido: scarecrow_2[ah].divididos[é], aparicoes: [Number(ah)], divisor: scarecrow_2[ah].divisor})
             }else{
              miss_2.find(function(miss_2){return miss_2.dividido == scarecrow_2[ah].divididos[é]}).aparicoes.push(Number(ah))
             }
          }
         }
         
   
         grtols_2 = [];
  for (hi in miss_2) {
    miss_2[hi].length = miss_2[hi].aparicoes.length;

    grtols_2.push(miss_2[hi]);
  }
  organizado = sortob(grtols_2, "length")[1];

  grtols_2 = [];
  for (ah in organizado) {
    grtols_2.push(miss_2[organizado[ah]]);
  }
  miss_2 = [...grtols_2];


         java = 0
         roll_2 = []
         deucerto = false
   
         roller_2 = [];
  for (eep in miss_2) {
    for (quad in miss_2) {
      if (quad != eep) {
        repeated = [];
        repwri = "";
        for (vespa in miss_2[eep].aparicoes) {
          if (miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa]) != -1) {
            repeated.push(miss_2[eep].aparicoes[vespa]);

            repwri += "," + miss_2[eep].aparicoes[vespa];

            if (
              roller_2.find(function (roller_2) {
                return roller_2.rept == repwri;
              }) == undefined
            ) {
              //console.log('PODE PUSHAR',{rept: repwri,opl:repeated,position: [eep,quad]}, repeated, repeated.length)
              roller_2.push({
                rept: repwri,
                opl: [...repeated],
                position: [eep, quad],
              });
            } else {
              if (
                roller_2
                  .find(function (roller_2) {
                    return roller_2.rept == repwri;
                  })
                  .position.indexOf(eep) == -1
              ) {
                roller_2
                  .find(function (roller_2) {
                    return roller_2.rept == repwri;
                  })
                  .position.push(eep);
              }

              if (
                roller_2
                  .find(function (roller_2) {
                    return roller_2.rept == repwri;
                  })
                  .position.indexOf(quad) == -1
              ) {
                roller_2
                  .find(function (roller_2) {
                    return roller_2.rept == repwri;
                  })
                  .position.push(quad);
              }
            }
          }
        }
      }
    }
  }

  for (r in roller_2) {
    //console.log(roller_2[r].opl, roller_2[r].position, roller_2[r].rept)
    roll_2.push({repetidos: roller_2[r].opl, posições: roller_2[r].position, way: roller_2[r].rept})
}

         while(java < miss_2.length && deucerto == false) {
           
   
         podeser_2 = []
         for (outro in miss_2) {
            //console.log('')
             if (outro != java /*&& miss_2[outro].aparicoes.length >= quantasposições*/) {
                //console.log(miss_2[outro].aparicoes, outro)
   
                 presentes = []
                 for (quecoisa in miss_2[outro].aparicoes) {
                     fatorzinho = miss_2[outro].aparicoes[quecoisa]
                    //console.log('FATORZINHO', fatorzinho, 'MISS[JAVA]', miss_2[java].aparicoes)
   
                     if (miss_2[java].aparicoes.indexOf(fatorzinho) != -1) {
                     //console.log('TEM', fatorzinho)
                         presentes.push(fatorzinho)
                     }
                 }
                 //console.log('OLHA', presentes)
   
                 adicionou = false
                 for (idk in podeser_2) {
                    //console.log(podeser_2[idk])
                     esigual = true
                     for (denovo in podeser_2[idk].opl) {
                         //console.log(podeser_2[idk].opl[denovo], presentes[denovo])
                         if (podeser_2[idk].opl[denovo] == presentes[denovo]) {
                            //console.log('É IGUAL')
                         }else{
                             esigual = false
                         }
                     }
                     if (esigual == true) {
                         podeser_2[idk].position.push(outro)
                         adicionou = true
                     }
                 }
                 if (presentes.length > 0 && presentes.length > 0 && adicionou == false) {
                     podeser_2.push({opl: presentes, position: [outro]})
                 }
                 
             }
            }
           //console.log('ESSE É O PODESERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR', podeser_2)
            
            
            for (belief in podeser_2) {
                if (podeser_2[belief].position.indexOf(java) == -1) {
                podeser_2[belief].position.push(String(java))
                }
   
             //console.log(podeser_2[belief].opl)
   
             shot = ''
             for (gun in podeser_2[belief].opl) {
                 //console.log(podeser_2[belief].opl[gun])
                 shot+= podeser_2[belief].opl[gun] + ','
             }
            //console.log('THAT WE LET IT GO:', shot)
   
             if (roll_2.length == 0) {
                //console.log('ADICIONAR(LISTA VAZIA)')
                 //roll_2.push({repetidos: [...podeser_2[belief].opl], way: shot, posições: [...podeser_2[belief].position]})
             }else if(roll_2.find(function(roll_2){return roll_2.way == shot}) != undefined) { // SE JÁ TIVER NA LSITA
                 //console.log('JÁ TEM')
                //console.log(roll_2.find(function(roll_2){return roll_2.way == shot}),'esse',podeser_2[belief])
   
                 for (capital in podeser_2[belief].position) {
                     //console.log(podeser_2[belief].position[capital])
   
                   //console.log(roll_2.find(function(roll_2){return roll_2.way == shot}).posições, roll_2.find(function(roll_2){return roll_2.way == shot}).posições.indexOf(podeser_2[belief].position[capital]),podeser_2[belief].position[capital])
   
                 if (roll_2.find(function(roll_2){return roll_2.way == shot}).posições.indexOf(podeser_2[belief].position[capital])== -1) {
                    //console.log('NÃO TEM') 
                    roll_2.find(function(roll_2){return roll_2.way == shot}).posições.push(podeser_2[belief].position[capital])
                 }
                 }
   
             }else{
                 //console.log('NÃO TEM')
                 //roll_2.push({repetidos: [...podeser_2[belief].opl], way: shot, posições: [...podeser_2[belief].position]})
             }
            }
   
            //console.log('E ESSE É O ORIGInAL: ', miss_2[java].aparicoes, java)
            whyis = java
            if (podeser_2.length > 0) {
                //console.log('fatores', quantosfatores, 'posições', quantasposições)
                //console.log(podeser_2)
   
                for(cold in podeser_2) {
            if (podeser_2[cold].position.length == quantosfatores && podeser_2[cold].opl.length == quantasposições && miss_2[whyis].aparicoes.length == quantasposições) {
            //console.log('É ISSOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
             deucerto = true
   
             ficaassim = ''
             podeser_2[cold].position.push(whyis)
   
             for (yehaa in podeser_2[cold].position) {
                //console.log(podeser_2[cold])
                 //console.log(miss_2[podeser_2[cold].position[yehaa]].dividido)
                 if (miss_2[podeser_2[cold].position[yehaa]].dividido[0] == '-') {
                     
                     fi = ''
                     for (ohjesus in miss_2[podeser_2[cold].position[yehaa]].dividido) {
                         if (miss_2[podeser_2[cold].position[yehaa]].dividido[ohjesus] != '-') {
                             fi+= miss_2[podeser_2[cold].position[yehaa]].dividido[ohjesus]
                         }
                     }
                    //console.log(fi)
                     if (yehaa != 0) {
                          ficaassim += ` - ${fi}`
                     }else{
                         ficaassim += `-${fi}`
                     }
                 }else if(yehaa != 0){
                     ficaassim += ' + '
                     ficaassim+= miss_2[podeser_2[cold].position[yehaa]].dividido
                 }else{
                     ficaassim+= miss_2[podeser_2[cold].position[yehaa]].dividido 
                 }
                 
             
             }
             //console.log('FICA ASSIM', `(${ficaassim})`)
            for (ruin in podeser_2[cold].opl) {
            //console.log(scarecrow_2[podeser_2[cold].opl[ruin]].divisor)
             emotion = ''
             for (scream in scarecrow_2[podeser_2[cold].opl[ruin]].divisor ) {
           //console.log(scarecrow_2[podeser_2[cold].opl[ruin]].divisor[scream])
                 emotion+= scarecrow_2[podeser_2[cold].opl[ruin]].divisor[scream]
             }
            //console.log(`${emotion}(${ficaassim})`)
           }
            }
         }
   
         }
   
          //  }
   
            java++
        }
   
   
   
   
   
   
   
   
          youdumb_2 = []
   
           aswillbe2 = []
           for (raging = 0; raging < roll_2.length; raging++) {
   
               asitwas = [] 
           
               obe = {what:[]}
   
             //console.log('')
              //console.log(roll_2[raging].repetidos, roll_2[raging].posições)
   
              
           
              for (still in roll_2[raging].repetidos) {
               asitwas2 = []
               aswillbe = []
   
              //console.log('')
            //console.log(scarecrow_2[roll_2[raging].repetidos[still]].divisor, still)
   
               mylife = '('
               for (still2 in roll_2[raging].posições) {
   
                   if (still != 0) {
                   mylife+= ' + ' + miss_2[roll_2[raging].posições[still2]].dividido
                   }else{
                       mylife+= miss_2[roll_2[raging].posições[still2]].dividido
                   }
   
                 
                 //console.log(miss_2[roll_2[raging].posições[still2]].dividido)
   
                   conseguiu = false
                   older = 0
                   while (older < monomios_2.length && conseguiu == false) {
                   DESFATORAR(monomios_2[older].numero, scarecrow_2[roll_2[raging].repetidos[still]].divisor, miss_2[roll_2[raging].posições[still2]].dividido)
                   //console.log('ISOOOOOOOOO', monomios_2[older].numero, scarecrow_2[roll_2[raging].repetidos[still]].divisor, miss_2[roll_2[raging].posições[still2]].dividido)
                   
                   // correto == ['2','*','10','x'] (NÚMERO QUE VAI SER COMPARADO)
                   // eg2 == ['10'] (NÚMERO QUE VAI MULTIPLICAR)
                   // eg == '2x' (NÚMERO QUE VAI SER MULTIPLICADO)
                   
                   function DESFATORAR(correto, eg2, eg) {
   
                   //console.log('eg', eg)
   
                   eassim = []
                   solo = ''
                   for (ne in eg) {
                       //console.log('EGGGGGG',eg[ne])
                       if (eg[ne] != '.') {
                   if (solo.length == 0) {
                       //console.log('LISTA VAZIA')
                       solo+= eg[ne]
                   }else if(String(solo.search('[0-9]')) != -1 && String(eg[ne]).search('[0-9]') != -1){
                       //console.log('É UM nÚMERO')
                       solo+= eg[ne]
                   }else{
                       eassim.push(solo)
                       solo = ''
                       solo += eg[ne]
                       
                   }
                   if (ne == eg.length - 1) {
                       eassim.push(solo)
                   }
                       }else{
                      //console.log('NAO')
                       }
                   }
                   
                   eg = eassim
                   
                   
                   whythat = [...eg]
                 //console.log(correto)
                 /*
                   for (ponto in eg2) {
                     //console.log(eg2[ponto])
                       if (eg2[ponto] != '.') {
                       whythat.push(eg2[ponto])
                     //console.log('I FOLLOW YOu')
                       }
                   }
                   */
                  teri = false
                   juntar = ''
                   for (estudar in eg2) {
                  //console.log(eg2[estudar])
                       if (eg2[estudar] == '.') {
                           teri = true
                           if (eg2[Number(estudar) + 1].search('[0-9]') != -1) {
                             
                               whythat.push(juntar)
                               juntar = ''
                           whythat.push('*')
                          
                           }
                       }else{
                          
                      
                    //console.log('juntar',juntar)
                           if (juntar.length == 0) {
                               juntar = eg2[estudar]
                         //console.log('LISTA VAZIA', juntar)
                               if (estudar == eg2.length - 1) {
                                   whythat.push(juntar)
                              //console.log('WHYTHAAAAAAAAAAAAAAAAT', whythat)
                               }
   
                           }else if(eg2[estudar].search('[0-9]') != -1 && juntar.search('[0-9]') != -1){
                          //console.log('I\'M NEVER WHAT I LIKE')
                               juntar+= eg2[estudar]
                          //console.log('juntar', juntar)
                               if (estudar == eg2.length - 1) {
                              //console.log('UAISO')
                                   whythat.push(juntar)
                               
                               }
                           }else{
                               whythat.push(juntar)
                               juntar= eg2[estudar]
                               if (estudar == eg2.length - 1) {
                                   whythat.push(juntar)
                               }
                           }
                       }
                         
                    }
                    if (teri == false) {
                     whythat = []
                  //console.log('SEM ASTERISCO')
                       for (t in eg2) {
                       whythat.push(eg2[t])
                       }
                       for (t in eg) {
                           whythat.push(eg[t])
                       }
                   }
   
         //console.log('MULTIPLICAR', eg2,'*',eg)
          //console.log('YOU ARE YES AND YOU ARE NO---------',whythat)
                   
                   numerinhos = []
                   for (decisao in correto) {
                       if (correto[decisao] != '*' && correto[decisao] != '.' && correto[decisao] != '+' && correto[decisao] != '-') {
                          numerinhos.push(correto[decisao])
                          
                           }
                  //console.log(correto[decisao],'AH, NAO')
                   }
                  //console.log(numerinhos)
                       thatway = [...numerinhos]
   
   
                       for (poder in whythat){
                           if (whythat[poder] != '*' && whythat[poder] != '.' && whythat[poder] != '+' && numerinhos.indexOf(whythat[poder]) != -1) {
                      //console.log(whythat[poder], numerinhos)
                      //console.log(numerinhos.indexOf(whythat[poder]))
                           numerinhos.splice(numerinhos.indexOf(whythat[poder]),1)
   
                           }
                       }
   
                       for (pombo = whythat.length - 1; pombo >= 0; pombo--){
                      //console.log('______________________', whythat[pombo])
                           if (whythat[pombo] == '*' || whythat[pombo] == '1') {
                          //console.log('?',whythat[pombo])
                               whythat.splice(pombo,1)
                         //console.log(whythat)
                           }
                           
                       }
   
                  //console.log('WHYTHATTTTTTTTTTTTTTT', whythat, thatway, 'THATWAAAAAAAAAAAY')
                  //console.log(numerinhos)
                  //console.log('WERE BROKEN PEOPLE', thatway, 'thatway', whythat, 'numerinhos')
   
                //console.log('_U__U__U__U__U__U__U__U_ooooo_U_U_U__U_U__U__U_U_U__U__', thatway)
                     
                //console.log('PLEAAAAAAAAAAAAAAASE, GOD', numerinhos, whythat, thatway)
   
                     for (pray = whythat.length - 1; pray>=0 ; pray--) {
                  //console.log(whythat[pray])
                       if (whythat[pray] == '-')
                       whythat.splice(pray, 1)
                     }
   
                       if (numerinhos.length == 0 && thatway.length == whythat.length) {
                      //console.log('ENTÃO', eg2,'*',eg,'=',correto, older, 'ONE MORE MOMNET')
                           conseguiu = true
                       }
                   }
                   older++
                   }
             //console.log('ALL THE SORROW I\'VE SEEN', older - 1, scarecrow_2[roll_2[raging].repetidos[still]].divisor, miss_2[roll_2[raging].posições[still2]].dividido)
             //console.log(whythat,'está na posição', older - 1, 'em monômios',monomios_2[older - 1].numero)
          //console.log(older - 1, monomios_2[older - 1].numero)
                  asitwas.push(older - 1)
                  asitwas2.push(older - 1)
                  aswillbe.push(older - 1)
                  
              }
           
   
         //console.log('ASITWAS',asitwas, asitwas2, aswillbe)
             //console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', asitwas)


              obe.what.push({ar: asitwas2, indice: still})
              aswillbe2.push({oque:aswillbe, onde:raging})
              
           }
           
           youdumb_2.push({mons: asitwas, rag: raging, w: obe, polen: raging})
      //console.log(obe)
          }
   
    //console.log('YOUDUMB',youdumb_2)
          
           dontworry = []
           for (behappy in youdumb_2) {
   
          //console.log('_______________________________')
          //console.log(youdumb_2[behappy].mons)
   
               //console.log('---------------------------------------')
               for (armenia in youdumb_2) {
                   
                   if (armenia != behappy) {
              //console.log(youdumb_2[armenia].mons)
   
                   doeshave = true
                   for (sofar in youdumb_2[armenia].mons) {
                  //console.log(youdumb_2[armenia].mons[sofar])
                       if (youdumb_2[behappy].mons.indexOf(youdumb_2[armenia].mons[sofar]) == -1) {
                           doeshave = false
                          
                       }
                   }
              //console.log(doeshave)
                   if (doeshave == true) {
              //console.log(youdumb_2[behappy].mons,'TEM', youdumb_2[armenia].mons)
                  if (dontworry.indexOf(behappy) == -1) {
                   dontworry.push(armenia)
                  }
                   }
               }
   
               }
             
           }
   
           
           for (da = youdumb_2.length - 1; da >= 0; da--) {
               if (dontworry.indexOf(String(da)) != -1) {
              //console.log('TEM COISA AÍ',youdumb_2[da].mons)
                  // youdumb_2.splice(da,1)
               }
           }
           
   
           grtols_2 = []
   
   
       
   for (hi in youdumb_2) {
      //console.log(segs_2[hi], segs_2[hi].mons.length)
       youdumb_2[hi].length = youdumb_2[hi].mons.length
   
       grtols_2.push(youdumb_2[hi])
   }
   
   //console.log('grtols_2: ', segs_2)
   //console.log(sortob(grtols_2, 'length'))
   
   
   organizado = sortob(grtols_2, 'length')[1]
   
   grtols_2 = []
   for (ah in organizado) {
      //console.log(segs_2[organizado[ah]])
       grtols_2.push(youdumb_2[organizado[ah]])
      
   }
        
   //console.log('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')
   
   youdumb_2 = []
   for (erro in grtols_2) {
      //console.log(grtols_2[erro])
       youdumb_2.push(grtols_2[erro])
   }
   
   
   
   //console.log('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')
   /*
   for (yourlife in grtols_2) {
   
       //console.log(grtols_2[yourlife].w.what)
   
       for (bolinho in grtols_2[yourlife].w.what) {
      //console.log(grtols_2[yourlife].w.what[bolinho])
   
           vagem = grtols_2[yourlife].w.what[bolinho]
           for (ahnao in vagem) {
          //console.log(vagem[ahnao])
           }
       }
   }
   */
   
   pans_2 = []
   numerospresentes_2 = []
   
   //console.log('WHAT IS IN YOUR MIND??????????????????__________LLLLLLLLLLLLLLLLLLLLLLLLL_______________')
   for (AH in youdumb_2) {
       //console.log(youdumb_2[AH])
   }
   for (wrecked in youdumb_2) {
       //console.log('YOUDUMB[WRECKED]',youdumb_2[wrecked])
       initial = youdumb_2[wrecked].w.what
       for (agg in initial) {
      //console.log(initial[agg].ar, Number(agg))
       }
   }
   
   grtols_2 = [];
   for (hi in youdumb_2) {
     youdumb_2[hi].length = youdumb_2[hi].w.what.length;
 
     grtols_2.push(youdumb_2[hi]);
   }
   organizado = sortob(grtols_2, "length")[1];
 
   grtols_2 = [];
   for (ah in organizado) {
     ////
     grtols_2.push(youdumb_2[organizado[ah]]);
   }
   youdumb_2 = [...grtols_2];

   heya_2 = [...youdumb_2]
   for (imback in youdumb_2) {
      //console.log('AAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', imback)
   
       sticky = []
       initial = youdumb_2[imback].w.what
   
     
   
       if (initial.length > 0) {
       inside = {which: [], numberyoudumb: youdumb_2[imback].polen}
      //console.log(imback)
       //console.log('THERE\'S NOTHING TO SAY NOW',youdumb_2[imback].mons)
   
   
       //console.log('///////\\\\\\\ESPERE POR UM SEGUNDO...///////\\\\\\')
       
       
       for (agg in initial) {
      //console.log('IN THIS WORLD',initial[agg].ar)
   
           taai = false
            for (eng in initial[agg].ar) {
              //console.log(initial[agg].ar[eng])
               if (numerospresentes_2.indexOf(initial[agg].ar[eng]) == -1) {
              //console.log('OK')
                  
               }else{
          //console.log('WE HAVE A PROBLEM')
                   taai = true
               }
            }
        
            if (taai == false) {
          //console.log('SEM PROBLEMAS', imback, agg)
               inform = {monos: initial[agg].ar, numberwhat: initial[agg].indice} 
              
          //console.log('I\'M TWISTED UP',inside, inform)
               inside.which.push(inform)
          //console.log('INFORM', inform.monos)
               for (darkening in inform.monos) {
                  
                   sticky.push(inform.monos[darkening])
               }
          //console.log('DODODODODODODODDODOODDODODOODDDODODODO', inside.which)
   
               for (eng in initial[agg].ar) {
               
                   numerospresentes_2.push(initial[agg].ar[eng])
                  
                }
           //console.log('NUMEROS PRESENTES ATÉ O MOMENTO:',numerospresentes_2)
            }
       }
   
       
       if (inside.which.length > 0) {
           inside.todos = sticky
    pans_2.push(inside)
       }
   
       //youdumb_2.splice(imback, 1)
       //console.log('FICOU ASSIM Ó:', numerospresentes_2, sticky)
       /*
       for (invest in pans_2) {
      //console.log('índice',invest)
           for (plat in pans_2[invest].which) {
          //console.log(pans_2[invest].which[plat].monos)
           }
       }
       */
       
      // youdumb_2.splice(imback, 1)
       for (h in youdumb_2) {
   
           if (h != imback) {
               if (youdumb_2[h].w.what.length > 0) {
         //console.log(youdumb_2[h].w.what, h)
               }
   
           //console.log('-----------------------------')
           for (tempo = youdumb_2[h].w.what.length - 1; tempo >= 0; tempo--) {
           //console.log(youdumb_2[h].w.what[tempo].ar, tempo)
               
               dulu = false
               
              for (and in youdumb_2[h].w.what[tempo].ar) {
              //console.log(youdumb_2[h].w.what[tempo].ar[and])
               if (numerospresentes_2.indexOf(youdumb_2[h].w.what[tempo].ar[and]) != -1) {
                 //console.log('ESTÁ EM: ', numerospresentes_2)
                   dulu = true
               }
              }
              if (dulu == false) {
             //console.log('PODE FICAR :)', h, tempo)
              }else{
            ////console.log('NÃO PODE!!!!!!!!!!!!!')
             // youdumb_2[h].w.what.splice(tempo, 1)
             //imback++
         //console.log('IMBAACK',imback)
              }
          }
       }
       }
       
       //console.log('YOUDUMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMB' )
   
     
    
      //console.log('OLHA, eu tentei...', youdumb_2.length)
       for (vixi in youdumb_2) {
        
        // if (youdumb_2[vixi].w.what.length > 0) {
          //console.log('aaa',youdumb_2[vixi].w.what)
           for (ainao in youdumb_2[vixi].w.what) {
           //console.log('AI NÃO',youdumb_2[vixi].w.what[ainao].ar)
           
             
       }
   //}
   }
   
   for (força in youdumb_2) {
      //console.log(força, youdumb_2[força],youdumb_2[força].w.what.length)
       entao = []
       for (areo in youdumb_2[força].w.what) {
          //console.log(areo,youdumb_2[força].w.what[areo].ar)
           for (paris in youdumb_2[força].w.what[areo].ar) {
              //console.log(paris,youdumb_2[força].w.what[areo].ar[paris])
               entao.push(Number(youdumb_2[força].w.what[areo].ar[paris]))
           }
       }
      //console.log(entao)
       youdumb_2[força].t = entao
      //console.log(youdumb_2[força].t)
    }
   
   //console.log('EU NÃO SEI MAS O QUE EU ESTOU FAZENDO....A, A, A, A, A, A, A, A, A, A, A, A,')
   
   
   grtols_2 = []
   
   
       
   for (hi in youdumb_2) {
       //////console.log(segs_2[hi], segs_2[hi].mons.length)
       youdumb_2[hi].length = youdumb_2[hi].t.length
   
       grtols_2.push(youdumb_2[hi])
   }
   
   //////console.log('grtols_2: ', segs_2)
   //////console.log(sortob(grtols_2, 'length'))
   
   
   organizado = sortob(grtols_2, 'length')[1]
   
   grtols_2 = []
   for (ah in organizado) {
      // ////console.log(segs_2[organizado[ah]])
       grtols_2.push(youdumb_2[organizado[ah]])
      
   }
   
   youdumb_2 = []
   for (erro in grtols_2) {
      //console.log('RAINY DAY',grtols_2[erro])
       youdumb_2.push(grtols_2[erro])
   }
   
   //console.log('IMAGENS', youdumb_2)
   
   }
   
   }
   //console.log('pans_2 é', pans_2)
   concatenar_2 = ''
   numsdesfat = []
   newexpress = []

   for (bababa in pans_2) {
      
       //console.log('A PARTIR DA QUI')
       edge_2 = []
       naonao_2 = ''
       amount = []
   
     //console.log(pans_2[bababa], Number(bababa))
      //console.log(pans_2[bababa].which)
      //console.log(roll_2[pans_2[bababa].numberyoudumb])
    //console.log('posições(fixas) - miss_2: ',roll_2[pans_2[bababa].numberyoudumb].posições)
   
         tobreak_2 = ''
         realife = []
         amontoado_2 = []
         for (quassao in roll_2[pans_2[bababa].numberyoudumb].posições) {
      //console.log(quassao,':', roll_2[pans_2[bababa].numberyoudumb].posições[quassao],miss_2[roll_2[pans_2[bababa].numberyoudumb].posições[quassao]].dividido)
   
           el = miss_2[roll_2[pans_2[bababa].numberyoudumb].posições[quassao]].dividido
   
      //console.log('ALL I WANTED WAS TO FINISH THIS THING :D', el)
   
           gates = []
   
           quase = []
           /*
           for (power in el) {
               quase.push(el[power])
          //console.log('EL POWER!',el[power])
           }
   */
           teri = false
           juntar = ''
         //console.log('NADAAAAAAAAAA')
           for (estudar in el) {
          //console.log(el[estudar])
               if (el[estudar] == '*') {
                   teri = true
                   if (el[Number(estudar) + 1].search('[0-9]') != -1) {
                     
                       quase.push(juntar)
                       juntar = ''
                   quase.push('*')
              //console.log('aaaaaaaaaaaaaaaaa', quase)
                   }
               }else{
                  
              
            //console.log('juntar',juntar)
                   if (juntar.length == 0) {
                       juntar = el[estudar]
                  //console.log('LISTA VAZIA', juntar)
   
                       if (estudar == el.length - 1) {
                           quase.push(juntar)
                       }
   
                   }else if(el[estudar].search('[0-9]') != -1 && juntar.search('[0-9]') != -1){
                  //console.log('I\'M NEVER WHAT I LIKE')
                       juntar+= el[estudar]
                  //console.log('juntar', juntar)
                       if (estudar == el.length - 1) {
                      //console.log('UAISO')
                           quase.push(juntar)
                       }
                   }else{
                       quase.push(juntar)
                       juntar= el[estudar]
                       if (estudar == el.length - 1) {
                           quase.push(juntar)
                       }
                   }
               }
                 
            }
       //console.log('QUASSSSEEEE',quase)
   
            if (teri == false) {
               
               quase = []
             //console.log('SEM ASTERISCO')
               for (t in el) {
               quase.push(el[t])
               }
           }
           aconta_2 = ''
           friend = ''
   
          elevar = 1
          aster = false
          
          //console.log('QUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASE',quase)
           for (patience in quase) {
               //console.log('_________uuuuuuuuuuu_______',quase[patience])       
              
               if (quase[patience] == '*') {
                   aster = true
                  //console.log('AND THE CLSDADWDWD', patience)
                  //console.log(quase[Number(patience) - 1], quase[Number(patience) + 1])
                   gates.push(quase[Number(patience) - 1])
                   gates.push('x')
                   gates.push(quase[Number(patience) + 1])
                   //console.log('gates',gates, fazerConta(gates))
   
                  //console.log(friend)
                   quase[Number(patience) + 1] = fazerConta(gates)[0]
                   aconta_2 = fazerConta(gates)[0]
                   friend = fazerConta(gates)[0]
                   //console.log('AI QUE COISA MAIS ESTRESSANTE É ESSA', aconta_2)
                 
                   gates = []
               }else if(quase[patience].search('[a-z]') != -1)  {
                  //console.log('É LETRA!!!!')
                  friend+= quase[patience]
                   if (quase[patience] == quase[Number(patience) - 1]) {
                  //console.log('ELEVAR!')
                       elevar++
   
                       if (patience == quase.length - 1) {
                         //console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                           aconta_2+= `^${elevar}`
                          //console.log(aconta_2)
                       }
   
                   }else{
                     
                       if (elevar > 1) {
                          //console.log('UEPA')
                           aconta_2+= `^${elevar}`
                           
                       }
   
                       aconta_2+= quase[patience]
                   
                      //console.log(aconta_2)
                     
                       elevar = 1
                   }
                 //console.log(elevar)
                  
               } 
           }
         
           //console.log( 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA__________',aconta_2)
           if (aster == false) {
           //console.log('<<<<<<<<<<<<<',quase)
            direitando = ''
            for (h in quase) {
                    direitando+= quase[h]
            }
            friend = direitando
           }


       if (aster == false) {
        //console.log('SEM ASTERISCO',aconta_2)
           antes = ''
           for (eyes in quase) {
               
              //console.log(quase[eyes])
               if (quase[eyes].search('[0-9]') != -1) {
                  //console.log('CRY')
                   antes+= quase[eyes]
               }
           }
           antes+= aconta_2
          //console.log('ANTEEEES:', antes)
           
           aconta_2 = antes
        
       }
       //console.log('A CONTA',aconta_2)
   
       realife.push(aconta_2)
           if (tobreak_2.length == 0) {
              
              
               if(quase[0]== '-'){
               
                  negativo = true
               if (aconta_2[0] == '-') {
                //console.log('PROBLEM')
                   mood = ''
                   for (member in aconta_2) {
                       //console.log('VAMOS LOGO!!!', aconta_2[member])
                       if (aconta_2[member] != '-') {
                          //console.log('PUSHAR')
                           mood+= aconta_2[member]
                       }
                   }
                   //console.log('THIS IS MOOOOOOOOOOOOD', mood)
                   tobreak_2+= `-${mood}`
               }else{
                   tobreak_2 += `-${aconta_2}`
                   //console.log('THIS IS ACONTAAAAAAAAAAA', aconta_2)
               }
   
               }else{
                   negativo = false
                   tobreak_2+= aconta_2
                  //console.log('THIS IS ACONTA_2||||||||||||||||||||||||||||||||||||||||||', aconta_2)
                   for (now in aconta_2) {
                   //console.log(aconta_2[now])
                   }
               }
           }else if(quase[0]== '-'){
            
            negativo = true
               correct = ''
               for (okay in aconta_2) {
                  //console.log(el[okay])
                   if (aconta_2[okay]!= '-'){
                       correct+= aconta_2[okay]
                     //console.log('MESS', aconta_2[okay])
                   }
               }
              //console.log('ASSIM: ', correct)
               tobreak_2+= ` - ${correct}`
               //console.log('THIS IS CORRECTTTT||||||||||||||||||||||||||||||||||||||||||', correct)
           }else{
               negativo = false
             //console.log(el)
               tobreak_2+= ` + ${aconta_2}`
               //console.log('THIS IS ACONTA_2||||||||||||||||||||||||||||||||||||||||||', aconta_2)
           }
          //console.log('THE COLOURS THAT I SAW', tobreak_2)


         //console.log('CERTINHO?????vaaaaaaaaaaaaaaaaaaai', friend, negativo)
          //console.log(amontoado_2)
           
           if (negativo == true) {
          
           uh = ''
           for (i in friend) {
               if (friend[i] != '-') {
                   uh+= friend[i]
               }
           }
           amontoado_2.push('-')
           amontoado_2.push(uh)
           }else{
               amontoado_2.push('+')
               amontoado_2.push(friend)
           }
           
         }
         //console.log('ENTÃO:','(', tobreak_2,')')
   
       for (repr in pans_2[bababa].which) {
           
        //console.log(' ')
           //console.log(pans_2[bababa].which[repr].monos, pans_2[bababa].which[repr].numberwhat, Number(repr))
            //console.log('repetidos(não fixo) - scarecrow_2: ',roll_2[pans_2[bababa].numberyoudumb].repetidos[pans_2[bababa].which[repr].numberwhat], scarecrow_2[roll_2[pans_2[bababa].numberyoudumb].repetidos[pans_2[bababa].which[repr].numberwhat]].divisor)
   
            triste = scarecrow_2[roll_2[pans_2[bababa].numberyoudumb].repetidos[pans_2[bababa].which[repr].numberwhat]].divisor
            //console.log(triste)
   
            quase = []
           //console.log(quase, 'k')
            juntar = ''
            teri = false
            for (estudar in triste) {
             //console.log('O QUE ESTÁ ACONTECENDO?', triste[estudar])
               //console.log('asasasa',triste[estudar])
               ohjeez = triste[Number(estudar) - 1] != '-'
             //console.log(ohjeez)
               if (triste[estudar] == '.') {
                   teri = true
                   if (triste[Number(estudar) + 1].search('[0-9]') != -1 && ohjeez == true) {
                     
                       quase.push(juntar)
                       juntar = ''
                   quase.push('*')
                 //console.log(quase)
                   }
               }else{
                  
                   //quase.push(triste[estudar])
                //console.log('juntar',juntar)
                   if (juntar.length == 0) {
                       juntar = triste[estudar]
                      //console.log('LISTA VAZIA', juntar)
   
                       if (estudar == triste.length - 1) {
                           quase.push(juntar)
                       }
                      //console.log('MENMEN',quase)
   
                   }else if(triste[estudar].search('[0-9]') != -1 && juntar.search('[0-9]') != -1){
   
                    //console.log('I\'M NEVER WHAT I LIKE')
                       juntar+= triste[estudar]
                    //console.log('juntar', juntar)
                       if (estudar == triste.length - 1) {
                        //console.log('UAISO')
                           quase.push(juntar)
                        //console.log(quase)
                       }
                   }else{
                       quase.push(juntar)
                       juntar= triste[estudar]
                       if (estudar == triste.length - 1) {
                           quase.push(juntar)
                         //console.log(quase)
                       }
                   }
               }
                 
            }
           //console.log('MAIS RÁPIDO',quase)
   
            if (teri == false) {
               
               quase = []
            //console.log('SEM ASTERISCO')
               for (t in triste) {
               quase.push(triste[t])
               }
           }
   
            aconta_2 = ''
            friend = ''
            aster = false
            elevar = 1
            //console.log('QUAAAAAAAASE', quase)
   
            for (patience in quase) {
               //console.log(quase,'edededededededededed',quase[patience])   
   
               if (quase[patience] == '*') {
                   aster = true
                   //console.log('AND THE CLSDADWDWD', patience)
                   //console.log(quase[Number(patience) - 1], quase[Number(patience) + 1])
                   gates.push(quase[Number(patience) - 1])
                   gates.push('x')
                   gates.push(quase[Number(patience) + 1])
                   //console.log(gates, fazerConta(gates))
   
                   //console.log(quase, Number(patience) + 1)
                   quase[Number(patience) + 1] = fazerConta(gates)[0]
                   aconta_2 = fazerConta(gates)[0]
                   friend = fazerConta(gates)[0]
                   //console.log(friend)
                 
                   gates = []
               }else if(quase[patience].search('[a-z]') != -1)  {
                  //console.log('É LETRA', quase[patience])
                    friend+= quase[patience]
                   if (quase[patience] == quase[Number(patience) - 1]) {
                       //console.log('ELEVAR!')
                       elevar++
   
                       if (patience == quase.length - 1) {
                           //console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                           aconta_2+= `^${elevar}`
                           //console.log(aconta_2)
                       }
   
                   }else{
                       if (elevar > 1) {
                         //console.log('UEPA')
                           aconta_2+= `^${elevar}`
                           
                       }
   
                       aconta_2+= quase[patience]
                      //console.log(aconta_2)
                     
                       elevar = 1
                   }
                   //console.log(elevar)
                  
               } 
           }
           //console.log('CETRTINHO? vaaaaaaaaaaaaaaaaaai', friend)

           if (aster == false) {
            //console.log('<<<<<<<<<<<<<',quase)
             direitando = ''
             for (h in quase) {
                     direitando+= quase[h]
             }
             friend = direitando
            }

           if (aster == false) {
             
              //console.log('SEM ASTERISCO2', aconta_2, quase)
   
               antes = ''
           for (eyes in quase) {
               
              //console.log(quase[eyes])
               if (quase[eyes].search('[0-9]') != -1) {
                  //console.log('CRY')
                   antes+= quase[eyes]
               }
           }
           antes+= aconta_2
          //console.log('ANTEEEES:', antes)
              // for (t in quase) {
              // aconta_2+= quase[t]
             //  }
             aconta_2 = antes
           }
          //console.log(quase[0],'VAIIIIIIIIIIIIIIIIIIIIIIIIIIII', aconta_2)
   
          edge_2.push(aconta_2)

          if (quase[0] == '-') {
            uh = ''
            for (i in friend) {
                if (friend[i] != '-') {
                    uh+= friend[i]
                }
            }
            amount.push('-')
            amount.push(uh)
            //console.log('ANOTHERRRRRRRRRRRRRRRRRRRRRRR', '-',aconta_2,'____________________')
        }else{
            amount.push('+')
            amount.push(friend)
            //console.log('ANOTHERRRRRRRRRRRRRRRRRRRRRRR', aconta_2)
        }

           if (naonao_2.length == 0) {
               //console.log('TÁ VAZio')
               if (quase[0] == '-') {
                   naonao_2+= `-${aconta_2}`
                  
               }else{
                   naonao_2+= aconta_2
                   
               }
           }else{
               if (quase[0] == '-') {
                   naonao_2+= ` - ${aconta_2}`
                  
               }else{
                   naonao_2+= ` + ${aconta_2}`
                  
               }
           }
       }
   
       if (concatenar_2.length > 0) {
           concatenar_2+= ' + '
       }
       if (edge_2.length > 1) {
       //console.log('                                ','( ',naonao_2,' )','( ',tobreak_2,' )','                         ')
       concatenar_2+= `( ${naonao_2} )( ${tobreak_2} )`
       }else{
           //console.log('                            ',naonao_2,'( ',tobreak_2,' )','                          ')
           concatenar_2+= `${naonao_2}( ${tobreak_2} )`
       }

       //console.log('ESSE É O AMONTOADO_2', amontoado_2)
       //console.log('ESSE É O AMOUNT', amount)

     
   // FAZENDO A CONTA
      primeirocaso = SOMANDOMONOMIOS_2(amount)
      segundocaso = SOMANDOMONOMIOS_2(amontoado_2)

      mudou = false
      if (primeirocaso[1] == primeirocaso[2]) {
        //console.log(primeirocaso[0], 'continua igual')
        
      }else{

          mudou = true
          //console.log(amount,'=>',primeirocaso[0])
         
      }
   

      if (segundocaso[1] == segundocaso[2]) {
        //console.log(segundocaso[0], 'continua igual')
      }else{

          mudou = true
        //console.log(amontoado_2,'=>',segundocaso[0])
        
      }



      if (mudou == true) {
        naonao_2 = primeirocaso[0]
        tobreak_2 = segundocaso[0] 

      //console.log('')
      //console.log('SOMANDO FICA ASSIM:')

      //console.log('')

      reason = []
      for (k in naonao_2) {
      //console.log(k, naonao_2[k])
        if (k != 0 && naonao_2[k] != '-' && naonao_2[k] != '+') {
            deserve = naonao_2[k - 1]
            reason.push(k - 1)
            deserve+= naonao_2[k]
            //console.log('anterior:',deserve)
            naonao_2[k] = deserve
        }
      }

    //console.log('reason')
     
   for (time = naonao_2.length - 1; time >= 0; time--) {
    //console.log(time, naonao_2[time])
    if (reason.indexOf(time) != -1) {
        //console.log('TIRAR')
        naonao_2.splice(time, 1)
        }
   }
      //console.log('', naonao_2)

   reason = []
      for (k in tobreak_2) {
        //console.log(k, tobreak_2[k])
        if (k != 0 && tobreak_2[k] != '-' && tobreak_2[k] != '+') {
            deserve = tobreak_2[k - 1]
            deserve+= tobreak_2[k]
            reason.push(k - 1)
           //console.log('anterior:',deserve)
           tobreak_2[k] = deserve
        }
      }

     //console.log('reason')
      for (time = tobreak_2.length - 1; time >= 0; time--) {
      //console.log(time, tobreak_2[time])
        if (reason.indexOf(time) != -1) {
           //console.log('TIRAR')
            tobreak_2.splice(time, 1)
            }
       }
      //console.log('', tobreak_2)

      //console.log('____________________','( ',naonao_2,' )','( ',tobreak_2,' )','___________________________')

      //console.log('ESSA É A HORA DECISIVA: MULTIPLICAR OS MONÔMIOS! DEUS ME AJUDE!!')
      for (roberto in naonao_2) {
          //console.log('---------------------------------------------------------------______')
        //console.log(naonao_2[roberto])
        
        for (vaidarcerto in tobreak_2) {
            //console.log(tobreak_2[vaidarcerto])
            novomon = MULTIPLICARDIREITO(naonao_2[roberto], tobreak_2[vaidarcerto])
            //console.log(naonao_2[roberto], 'multiplicado por',tobreak_2[vaidarcerto],'=',novomon)
            console.warn(newexpress)
            if (novomon[0] == '-') {
                miya = ''
                for (n in novomon) {
                    if (novomon[n] != '-') {
                        miya+= novomon[n]                 
                       }
                }
                //console.log(miya)
                newexpress.push('-')
                newexpress.push(miya)
            }else{
                newexpress.push('+')
                newexpress.push(novomon)
            }
        }


    }
    
       
       for (e in pans_2[bababa].todos) {
        numsdesfat.push(pans_2[bababa].todos[e])
       }
       
      }

   }
   
   if (numsdesfat.length > 0) {
    console.warn('VAI TER QUE FATORAR DE NOVO')
    todososnumeros_2 = []
    for (acaba in monomios_2) {
       //console.log(acaba)
        todososnumeros_2.push(acaba)
    }

    for (feliz = todososnumeros_2.length - 1; feliz >= 0; feliz--) {
        //console.log(todososnumeros_2[feliz])
         if (numsdesfat.indexOf(Number(todososnumeros_2[feliz])) != -1) {
            todososnumeros_2.splice(feliz, 1)
         }
 }
    //console.log('tirando', sort(numsdesfat)[0], 'dos outros monomios_2( tem', monomios_2.length, 'ao todo):',todososnumeros_2)
    for (eh in todososnumeros_2) {
        //console.log(todososnumeros_2[eh], monomios_2[todososnumeros_2[eh]].numero)

        join = ''
        for (sempresei in monomios_2[todososnumeros_2[eh]].numero) {
            if (monomios_2[todososnumeros_2[eh]].numero[sempresei] != '+' && monomios_2[todososnumeros_2[eh]].numero[sempresei] != '-') {
            ter = monomios_2[todososnumeros_2[eh]].numero[sempresei]
            //console.log(ter)
            join+= ter
            }
        }
        if (monomios_2[todososnumeros_2[eh]].numero[0] == '+') {
            //console.log('MAIS')
            newexpress.push('+')
            newexpress.push(join)
        }else if(monomios_2[todososnumeros_2[eh]].numero[0] == '-') {
            //console.log('MENOS')
            newexpress.push('-')
            newexpress.push(join)
        }else{
            //console.log('MAIS')
            newexpress.push('+')
            newexpress.push(join)
        }
        //console.log('PREPARADO PARA ENTRAR NA LISTA:', join)
    }

    //console.log('_____________________________________________newexpression:_____________________________________________ ')
        //console.log(newexpress)
        //console.log('_______________________________________________________________________________________   _______________')

        FATORAR2(newexpress)
   }else{

   //console.log('VENDO OS QUE FALTAM:')
   //console.log(numerospresentes_2)
   todososnumeros_2 = []
   for (acaba in monomios_2) {
      //console.log(acaba)
       todososnumeros_2.push(acaba)
   }
   cancelar = []
   for (feliz = todososnumeros_2.length - 1; feliz >= 0; feliz--) {
          //console.log(todososnumeros_2[feliz])
           if (numerospresentes_2.indexOf(Number(todososnumeros_2[feliz])) != -1) {
              todososnumeros_2.splice(feliz, 1)
   }
   }
   //console.log(todososnumeros_2)
   
   for (bye in todososnumeros_2) {
       //console.log(monomios_2[todososnumeros_2[bye]].numero)
   
       quase = monomios_2[todososnumeros_2[bye]].numero
       aconta_2 = ''
       elevar = 1
       aster = false
       friend = ''
       
       //console.log(quase)
       gates = []
   
        for (patience in quase) {
            //console.log('EFEEDEDEDEED',quase[patience])       
           
            if (quase[patience] == '*') {
                aster = true
               //console.log('AND THE CLSDADWDWD', patience)
               //console.log(quase[Number(patience) - 1], quase[Number(patience) + 1])
                gates.push(quase[Number(patience) - 1])
                gates.push('x')
                gates.push(quase[Number(patience) + 1])
              //console.log(gates, fazerConta(gates))
   
             //console.log(quase, Number(patience) + 1)
                quase[Number(patience) + 1] = fazerConta(gates)[0]
                aconta_2 = fazerConta(gates)[0]
              
                gates = []
            }else if(quase[patience].search('[a-z]') != -1)  {
               //console.log('É LETRA')
              
                if (quase[patience] == quase[Number(patience) - 1]) {
               //console.log('ELEVAR!')
                    elevar++
   
                    if (patience == quase.length - 1) {
                      //console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                        aconta_2+= `^${elevar}`
                       //console.log(aconta_2)
                    }
   
                }else{
                    if (elevar > 1) {
                       //console.log('UEPA')
                        aconta_2+= `^${elevar}`
                        
                    }
   
                    aconta_2+= quase[patience]
                   //console.log(aconta_2)
                  
                    elevar = 1
                }
              //console.log(elevar)
               
            } 
        }
        
        if (aster == false) {
            //console.log('<<<<<<<<<<<<<',quase)
             direitando = ''
             for (h in quase) {
                     direitando+= quase[h]
             }
             friend = direitando
            }
    if (aster == false) {
     //console.log('SEM ASTERISCO',aconta_2)
        antes = ''
        for (eyes in quase) {
            
           //console.log(quase[eyes])
            if (quase[eyes].search('[0-9]') != -1) {
               //console.log('CRY')
                antes+= quase[eyes]
            }
        }
        antes+= aconta_2
       //console.log('ANTEEEES:', antes)
        
        aconta_2 = antes
    }
    //console.log('A CONTA',aconta_2, quase)
   
    if (bye == 0) {
       //console.log('PRIMEIRO')
       if (concatenar_2.length > 0) {
           if (quase[0] == '-') {
               concatenar_2+= ` - ${aconta_2}`
           }else{
               concatenar_2+= ` + ${aconta_2}`
           }
       }else{
           if (quase[0] == '-') {
               concatenar_2+= `-${aconta_2}`
           }else{
               concatenar_2+= `${aconta_2}`
           }
       }
    }else{
       if (quase[0] == '-') {
           concatenar_2+= ` - ${aconta_2}`
       }else{
           concatenar_2+= ` + ${aconta_2}`
       }
    }
   }
}
   
   //console.log('FINALMENTE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!: ', concatenar_2)

 
   // Vendo se o número é primo
   function ehprimo(Number) {
       parar = false
       for (t = 2; t < Number && parar == false; t++) {
       
           if (Number%t == 0) {
               parar = true
           }
       }
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
           }
       }
      return divisores
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
   
                       for (c = 0; c < itens; c++) {
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
   
   function doit(par) {
   
       segs_22 = []
   
       for (uf in par) {
       
          //console.log(segs_2[uf].godhelpme)
          // segs_22.push(segs_2[uf])
         //  segs_2[tie].godhelpme = [...segs_2[tie].mons]
         segs_22[uf] = {}
           segs_22[uf].mons = [...par[uf].mons]
           segs_22[uf].car = par[uf].car
   
    }
   
    relation_2 = []
   
   
    quanto = Number(monomios_2.length)/Number(divs_2[okentao])
   
   
    numapars = []
   
   
   
   
    util = []
    for (t in segs_22) {
   
   
   
        if (segs_22[t].mons.length >= quanto) {
            util.push(segs_22[t])
        }
        ////console.log('')
    }
   
    ////console.log('util', util)
    
    for (m in monomios_2) {
        aparic = 0
        ////console.log(m)
        for (t in util) {
            ////console.log('util[t].mons', util[t].mons)
            ////console.log('util[t].mons.indexOf(Number(m))', util[t].mons.indexOf(Number(m)))
   
            if (util[t].mons.indexOf(Number(m)) != -1) {
                aparic++
            }
        }
        ////console.log('aparic',m, aparic)
        numapars.push({num: Number(m), vezes: aparic})
        }
   
    present = []
    //console.log('numapars',numapars)
    ////console.log('----------------------------------------------------------------------------------------------------')
    for (r in util) {
   
        ////console.log('-----------------------------------------------------------------------------------------------------------------------------')
       lista = util[r].mons
        present = {fix: [], falt: []}
        ////console.log(lista)
      
        rep = 0
        for (g = 0; g < lista.length && rep < quanto; g++) {
            ////console.log(lista[g])
   
   
            if (numapars.find(function(numapars) {
                return numapars.num == lista[g]
                }).vezes == 1) {
                ////console.log('ADICIOnAR')
                  rep++
                  present.fix.push(lista[g])
                 
            }
   
        }
        ////console.log('present', present)
        ////console.log('--------------------------------------VEnDO O QUE FALTA-----------------------------------')
   
        if (present.fix.length < quanto) {
        for (g in lista) {
            ////console.log('')
           //console.log(lista[g])
            if (present.fix.indexOf(lista[g]) == -1) {
              //console.log('FALTA')
                present.falt.push(lista[g])
   
               
   
                  //  numapars.find(function(numapars) {
                      // return numapars.num == lista[g]
                     //   }).vezes--
   
                        
            }
        }
        //console.log('FALTAM OS nÚMEROS', present.falt)
   
        
        if (present.fix.length == 0) {
        for (ti in present.falt) {
          //console.log(present.falt[ti])
   
           
   
                numapars.find(function(numapars) {
                    return numapars.num == present.falt[ti]
                    }).vezes--
   
                 
        }
    }
        
   
    }
    relation_2[r] = present
    relation_2[r].car = segs_22[r].car
    
    }
    //console.log('Relation_2!!!!!!!!!!!!!!!!!', relation_2)
    for (c in relation_2) {
        ////console.log('-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
        if (relation_2[c].fix.length > 0) {
   //console.log(relation_2[c].fix, relation_2[c].falt)
   
        faltam = Number(quanto) - Number(relation_2[c].fix.length)
   //console.log('faltam', faltam)
   
        for (f = 0; f < faltam; f++) {
       //console.log(relation_2[c].falt[f])
           relation_2[c].fix.push(relation_2[c].falt[f])
          
      //console.log('AnTES: ', relation_2[c].falt)
           relation_2[c].falt[f] = -10
   
      //console.log('DEPOIS: ', relation_2[c].falt)
        }
   //console.log(relation_2[c].fix)
   
        for (tel = 0; tel < c; tel++){
   
            if (relation_2[tel].fix.length > 0) {
       //console.log('relation_2[tel]', relation_2[tel])
            }
            
            outrorel = relation_2[tel]
            
        for (hu in outrorel.fix) {
       //console.log(outrorel.fix[hu])
            if (relation_2[c].fix.indexOf(outrorel.fix[hu]) != -1) {
           //console.log(`${relation_2[c].fix}.indexOf(${outrorel.fix[hu]}) = ${relation_2[c].fix.indexOf(outrorel.fix[hu])}`)
           //console.log(outrorel.falt)
                y = 0
                for(ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {
   
               //console.log(outrorel.falt[ou])
                    if (relation_2[c].fix.indexOf(outrorel.falt[ou]) == -1 && outrorel.falt[ou] != -10){
                   //console.log('pode ir')
                        outrorel.fix[hu] =  outrorel.falt[ou]
                        outrorel.falt[ou] = -10
                        
                   //console.log('isso aí:', outrorel.fix)
                        y++
                    }
                }
            }
        }
    }
        }
    }
   
    ////console.log('SERÁ QUE DEU CERTO?')
   
   //////console.log(relation_2)
   
   groups = 0
   conts = []
   for (yougo in relation_2) {
   if (relation_2[yougo].fix.length > 0) {
   //console.log(relation_2[yougo].fix)
   
   for (pals in relation_2[yougo].fix) {
    //console.log(relation_2[yougo].fix[pals])
    conts.push(relation_2[yougo].fix[pals])
   }
   groups++
   }
   }
   
   //console.log('divs_2 é igual a ', divs_2[okentao])
   //console.log('groups é igual a', groups)
   
   
   if (groups < divs_2[okentao]) {
    //console.log('DEU CERTO!!!EBAAAAAA')
   
    //console.log('SERÁ QUE DEU CERTO?')
   
   ////console.log(relation_2)
   
   groups = 0
   conts = []
   for (yougo in relation_2) {
   if (relation_2[yougo].fix.length > 0) {
   //console.log(relation_2[yougo].fix)
   
   for (pals in relation_2[yougo].fix) {
    ////console.log(relation_2[yougo].fix[pals])
    conts.push(relation_2[yougo].fix[pals])
   }
   groups++
   }
   }
   ////console.log('IF LIFE AIn\'T JUST A JOKE THEn WHY ARE WE LAUGHInG?', divs_2[okentao], 'and', groups)
   if (divs_2[okentao] != groups) {
   //console.log('SÓ QUE nÃO')
   ////console.log('I\'VE TRIED TO PUT THIS ALL BEHInD ME')
   
   tirados_2 = []
   for (wish in relation_2) {
    ////console.log(relation_2[wish].fix)
    for (edge_2 in relation_2[wish].fix) {
       ////console.log(relation_2[wish].fix[edge_2])
       tirados_2.push(relation_2[wish].fix[edge_2])
    }
   }
   ////console.log('nÚMEROS QUE SERÃO TIRADOS_2', tirados_2)
   
   
   
   for (die in segs_22) {
       tirar = []
   
   //console.log('break', segs_22[die].mons)
   for (h in segs_22[die].mons) {
   //console.log(segs_22[die].mons[h])
   if (tirados_2.indexOf(segs_22[die].mons[h]) != -1) {
   tirar.push(Number(h))
   }
   }

   //console.log('tirar de ',segs_22[die].mons, tirar)

   for (far = tirar.length - 1; far >= 0; far--) {
       //console.log(segs_2[die].mons[tirar[far]])
   segs_22[die].mons.splice(tirar[far], 1)
   
   }
   //console.log('ficou assim:', segs_22[die].mons)
   }
   
   for (sorrow in segs_22) {
   //console.log(segs_22[sorrow].mons)
   grupos = Math.floor(Number(segs_22[sorrow].mons.length)/quanto)
   //console.log('dá para formar', grupos,'grupos')
   
   imor = 0
   
   for (b = 0; b < grupos; b++) {
       //console.log(b, 'vez----------------------------------------------------------------------------------------')
      
       ob = {car: segs_22[sorrow].car, fix: [],problem:false}
   
       for (live = 0; live < quanto; live++) {
           //console.log('TIRADOS_2')
      //console.log(segs_22[sorrow].mons[imor])
   
       //console.log(tirados_2.indexOf(segs_22[sorrow].mons[imor]) == -1) 
   
              if (tirados_2.indexOf(segs_22[sorrow].mons[imor]) != -1) {
                  ob.problem = true
              }
               //console.log('PLEASE DOnT ASK ME FOR THE LAST WORDS',ob)
           ob.fix.push(segs_22[sorrow].mons[imor])
           tirados_2.push(segs_22[sorrow].mons[imor])
           imor++
           
          
       }
      
      
       //console.log('In THE EnD', ob)
   
       //console.log(segs_22)
       //console.log('VEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',ob.fix,'----------------',temnaLista(ob.fix))
       if (ob.problem == false || temnaLista(ob.fix) == true) {
       relation_2.push(ob)
       }
   }
   
   }
   
   
   
   }
   
   males = []
   for (nah = relation_2.length - 1; nah >= 0; nah--) {
        // if (relation_2[nah].fix.length > 0) {
             
    //console.log('fix',relation_2[nah].fix)
   
     //console.log('---VEnDO TODA A LISTA---')
     for (nop in relation_2) {
       if (relation_2[nop].fix.length > 0 && nop != nah) {
   //console.log(relation_2[nop].fix, relation_2[nop].car)
   
   igual = true
   for (uh in relation_2[nop].fix) {
   //console.log(relation_2[nop].fix[uh])
   if (relation_2[nah].fix.indexOf(relation_2[nop].fix[uh]) == -1) {
   igual = false
   }
   }
   //console.log(igual)
   if (igual == true) {
   if (relation_2[nah].car.length > relation_2[nop].car.length) {
   //console.log('ESSE É UM MAL QUE PRECISA SER RETIRADO DA SOCIEDADE')
   males.push(Number(nop))
   }
   //}
   
       }
   
   }else if(relation_2[nop].fix.length == 0) {
       males.push(Number(nop))
   }
         }
     
     }
   
     for (nah = relation_2.length - 1; nah >= 0; nah--) {
         //console.log('dream',nah, relation_2[nah])
        //console.log(males)
       if (males.indexOf(nah) != -1) {
         //console.log('HEY')
           relation_2.splice(nah, 1)
       }
     }
   
     numerosquetem = []
     for (nah in relation_2) {
         if (relation_2[nah].fix.length > 0) {
       //console.log(relation_2[nah].fix)
   
         for (nop in relation_2[nah].fix) {
          //console.log(relation_2[nah].fix[nop])
             numerosquetem.push(relation_2[nah].fix[nop])
         }
         }
     }
     //console.log('----------------------------------------------------------------')
   
     segs_22 = []
   
     for (uf in par) {
     
        //console.log(segs_2[uf].godhelpme)
        // segs_22.push(segs_2[uf])
       //  segs_2[tie].godhelpme = [...segs_2[tie].mons]
       segs_22[uf] = {}
         segs_22[uf].mons = [...par[uf].mons]
         segs_22[uf].car = par[uf].car
   
   }
   
   for (pose in segs_22) {
   //console.log(segs_22[pose].mons)
   for (me = segs_22[pose].mons.length - 1; me >= 0; me--) {
   //console.log(segs_22[pose].mons[me])
   if (numerosquetem.indexOf(segs_22[pose].mons[me]) != -1) {
   //console.log('tirar')
   segs_22[pose].mons.splice(me, 1)
   }
   }
   }
   
   fireonfire = []
   
       for (uf in relation_2) {
       
          //console.log(segs_2[uf].godhelpme)
          // segs_22.push(segs_2[uf])
         //  segs_2[tie].godhelpme = [...segs_2[tie].mons]
         fireonfire[uf] = {}
           fireonfire[uf].mons = [...relation_2[uf].fix]
           fireonfire[uf].car = relation_2[uf].car
   
    }
   
    //console.log('OK, AGORA PRECISAMOS EnCOnTRAR O RESTO')
    //console.log(doit2(segs_22)[0])
    //console.log(fireonfire)
   
    //console.log('relation_2', relation_2)
    for (red in fireonfire) {
      //console.log(fireonfire[red])
       relation_2.push({fix: fireonfire[red].mons, car: fireonfire[red].car})
    }
   
   }else if(groups > divs_2[okentao]){
       
   //console.log('nÃO DEU CERTO! BUÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ')
    ////console.log('números que têm: ', conts)
    ////console.log(segs_2)
   
    mia = []
   for (idk in segs_22) {
   //////console.log('---------------------------------------------------------------------')
   ////console.log('aqui ó',segs_2[idk].mons)
   
   
   for (mcr in segs_22) {
   if (mcr != idk) {
   
       //////console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')
      // //console.log('outro',segs_2[mcr].mons)
      
      // //console.log(segs_2[idk].mons.length)
       if (segs_22[mcr].mons.length <= segs_22[idk].mons.length) {
   
           sames = []
      for(y = 0; y < segs_22[mcr].mons.length; y++) {
       //  //console.log(segs_2[idk].mons, segs_2[mcr].mons[y], segs_2[idk].mons.indexOf(segs_2[mcr].mons[y]))
           if (segs_22[idk].mons.indexOf(segs_22[mcr].mons[y]) != -1) {
             ////console.log('igual')
               sames.push('igual')
           }else{
             // //console.log('diferente')
               sames.push('diferente')
           }
      }
    // //console.log(sames)
      if (sames.indexOf('diferente') == -1){
     // //console.log('TIRAR', segs_2[mcr])
   
       if (mia.indexOf(mcr) == -1) {
       mia.push(mcr)
       }
       
       ////console.log(segs_2)
       
      }
   }
       
   }
   }
   
   }
   
   for (f = mia.length - 1; f >= 0; f--) {
       //segs_22.splice(mia[f],1)
       
      }
   
      
    numapars = []
    
   relation_2 = []
   
    //////console.log('--------------------------------------------------------------------------------------------------------------------------------')
   
   
    util = []
    for (t in segs_22) {
   
       ////console.log(segs_2[n],'.mons: ',segs_2[t].mons,'.length: ', segs_2[t].mons.length)
     //  //console.log(`${segs_2[t].mons.length} é maior que ou igual a ${quanto}? ${segs_2[t].mons.length >= quanto}`)
   
        if (segs_22[t].mons.length >= quanto) {
            util.push(segs_22[t])
        }
        ////console.log('')
    }
   
    //console.log('util', util)
    
    for (m in monomios_2) {
        aparic = 0
       ////console.log(m)
        for (t in util) {
         //   //console.log('util[t].mons', util[t].mons)
         //   //console.log('util[t].mons.indexOf(Number(m))', util[t].mons.indexOf(Number(m)))
   
            if (util[t].mons.indexOf(Number(m)) != -1) {
                aparic++
            }
        }
       // //console.log('aparic',m, aparic)
        numapars.push({num: Number(m), vezes: aparic})
        }
   
    present = []
    ////console.log('----------------------------------------------------------------------------------------------------')
    for (r in util) {
   
        ////console.log('-----------------------------------------------------------------------------------------------------------------------------')
       lista = util[r].mons
        present = {fix: [], falt: []}
        ////console.log(lista)
      
        rep = 0
        for (g = 0; g < lista.length && rep < quanto; g++) {
         //   //console.log(lista[g])
   
   
            if (numapars.find(function(numapars) {
                return numapars.num == lista[g]
                }).vezes == 1) {
                ////console.log('ADICIOnAR')
                  rep++
                  present.fix.push(lista[g])
                 
            }
   
        }
       // //console.log('present', present)
        ////console.log('--------------------------------------VEnDO O QUE FALTA-----------------------------------')
   
        if (present.fix.length < quanto) {
        for (g in lista) {
           // //console.log('')
           // //console.log(lista[g])
            if (present.fix.indexOf(lista[g]) == -1) {
             //   //console.log('FALTA')
                present.falt.push(lista[g])
   
               
   
                  //  numapars.find(function(numapars) {
                      // return numapars.num == lista[g]
                     //   }).vezes--
   
                        
            }
        }
      //  //console.log('FALTAM OS nÚMEROS', present.falt)
   
        
        if (present.fix.length == 0) {
        for (ti in present.falt) {
          //  //console.log(present.falt[ti])
   
           
   
                numapars.find(function(numapars) {
                    return numapars.num == present.falt[ti]
                    }).vezes--
   
                 
        }
    }
        
   
    }
    relation_2[r] = present
    relation_2[r].car = segs_22[r].car
    
    }
    //console.log('Relation_2!!!!!!!!!!!!!!!!!', relation_2)
    for (c in relation_2) {
       // //console.log('-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
        if (relation_2[c].fix.length > 0) {
       // //console.log(relation_2[c].fix, relation_2[c].falt)
   
        faltam = Number(quanto) - Number(relation_2[c].fix.length)
        ////console.log('faltam', faltam)
   
        for (f = 0; f < faltam; f++) {
         //   //console.log(relation_2[c].falt[f])
           relation_2[c].fix.push(relation_2[c].falt[f])
          
       //    //console.log('AnTES: ', relation_2[c].falt)
           relation_2[c].falt[f] = -10
   
       //    //console.log('DEPOIS: ', relation_2[c].falt)
        }
      //  //console.log(relation_2[c].fix)
   
        for (tel = 0; tel < c; tel++){
   
            if (relation_2[tel].fix.length > 0) {
          //  //console.log('relation_2[tel]', relation_2[tel])
            }
            
            outrorel = relation_2[tel]
            
        for (hu in outrorel.fix) {
          //  //console.log(outrorel.fix[hu])
            if (relation_2[c].fix.indexOf(outrorel.fix[hu]) != -1) {
             //   //console.log(`${relation_2[c].fix}.indexOf(${outrorel.fix[hu]}) = ${relation_2[c].fix.indexOf(outrorel.fix[hu])}`)
                ////console.log(outrorel.falt)
                y = 0
                for(ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {
   
                 ///   //console.log(outrorel.falt[ou])
                    if (relation_2[c].fix.indexOf(outrorel.falt[ou]) == -1 && outrorel.falt[ou] != -10){
                    //    //console.log('pode ir')
                        outrorel.fix[hu] =  outrorel.falt[ou]
                        outrorel.falt[ou] = -10
                        
                     //   //console.log('isso aí:', outrorel.fix)
                        y++
                    }
                }
            }
        }
    }
        }
    }
   
    //console.log('SERÁ QUE DEU CERTO?')
   
   //console.log(relation_2)
   
   groups = 0
   conts = []
   for (yougo in relation_2) {
   if (relation_2[yougo].fix.length > 0) {
   ////console.log(relation_2[yougo].fix)
   
   for (pals in relation_2[yougo].fix) {
    ////console.log(relation_2[yougo].fix[pals])
    conts.push(relation_2[yougo].fix[pals])
   }
   groups++
   }
   }
   //console.log('IF LIFE AIn\'T JUST A JOKE THEn WHY ARE WE LAUGHInG?', divs_2[okentao], 'and', groups)
   if (divs_2[okentao] != groups) {
   //console.log('THEn WHY ARE WE LAUGHInG?')
   //console.log('I\'VE TRIED TO PUT THIS ALL BEHInD ME')
   
   tirados_2 = []
   for (wish in relation_2) {
    //console.log(relation_2[wish].fix)
    for (edge_2 in relation_2[wish].fix) {
       //console.log(relation_2[wish].fix[edge_2])
       tirados_2.push(relation_2[wish].fix[edge_2])
    }
   }
   //console.log('nÚMEROS QUE SERÃO TIRADOS_2', tirados_2)
   
   
   for (die in segs_22) {
       tirar = []
   
   //console.log('break', segs_22[die].mons)
   for (h in segs_22[die].mons) {
   //console.log(segs_22[die].mons[h])
   if (tirados_2.indexOf(segs_22[die].mons[h]) != -1) {
   tirar.push(Number(h))
   }
   }
   //console.log('tirar de ',segs_22[die].mons, tirar)
   for (far = tirar.length - 1; far >= 0; far--) {
       
   segs_22[die].mons.splice(tirar[far], 1)
   
   }
   //console.log('ficou assim:', segs_22[die].mons)
   }
   
   for (sorrow in segs_22) {
   //console.log(segs_22[sorrow].mons)
   grupos = Math.floor(Number(segs_22[sorrow].mons.length)/quanto)
   //console.log('dá para formar', grupos,'grupos')
   
   imor = 0
   
   for (b = 0; b < grupos; b++) {
       //console.log(b, 'vez----------------------------------------------------------------------------------------')
      
       ob = {car: segs_22[sorrow].car, fix: [],problem:false}
   
       for (live = 0; live < quanto; live++) {
           //console.log('TIRADOS_2')
           //console.log(segs_22[sorrow].mons[imor])
   
          //console.log(tirados_2.indexOf(segs_22[sorrow].mons[imor]) == -1) 
   
              if (tirados_2.indexOf(segs_22[sorrow].mons[imor]) != -1) {
                   ob.problem = true
              }
               //console.log('PLEASE DOnT ASK ME FOR THE LAST WORDS',ob)
           ob.fix.push(segs_22[sorrow].mons[imor])
           tirados_2.push(segs_22[sorrow].mons[imor])
           imor++
           
          
       }
      
      
       //console.log('In THE EnD', ob)
   
       //console.log(segs_22)
       //console.log('VEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',ob.fix,'----------------',temnaLista(ob.fix))
       if (ob.problem == false || temnaLista(ob.fix) == true) {
       relation_2.push(ob)
       }
   }
   
   }
   
   
   
   }
   }
   //console.log('aaaaaaaaaaaaaaaaaaaaaaaa',segs_22, relation_2)
   return [relation_2, segs_22]
   }
   
   function temnaLista(h) {
   //console.log('THIS IS HOW I DISAPPEAR, THIS IS HOW I DISAPPEAR, THIS IS HOW I DISAPPEAR')
   
   for (t in relation_2) {
   
       if (relation_2[t].fix.length > 0) {
       //console.log(relation_2[t].fix)
   
       home = 0
       for (fear in relation_2[t].fix) {
           if (relation_2[t].fix[fear] == h[fear]) {
               //console.log('WOW')
               home++
           }
       }
   
       if (home == h.length) {
           //console.log('É IGUAL')
           return true 
       }
   
       }
   }
   }
   
   function doit2(par) {
   
       segs_22 = []
   
       for (uf in par) {
       
          //console.log(segs_2[uf].godhelpme)
          // segs_22.push(segs_2[uf])
         //  segs_2[tie].godhelpme = [...segs_2[tie].mons]
         segs_22[uf] = {}
           segs_22[uf].mons = [...par[uf].mons]
           segs_22[uf].car = par[uf].car
   
    }
   
    relation_2 = []
   
   
    quanto = Number(monomios_2.length)/Number(divs_2[okentao])
   
   
    numapars = []
   
   
   
   
    util = []
    for (t in segs_22) {
   
   
   
        if (segs_22[t].mons.length >= quanto) {
            util.push(segs_22[t])
        }
        ////console.log('')
    }
   
    ////console.log('util', util)
    
    for (m in monomios_2) {
        aparic = 0
        ////console.log(m)
        for (t in util) {
            ////console.log('util[t].mons', util[t].mons)
            ////console.log('util[t].mons.indexOf(Number(m))', util[t].mons.indexOf(Number(m)))
   
            if (util[t].mons.indexOf(Number(m)) != -1) {
                aparic++
            }
        }
        ////console.log('aparic',m, aparic)
        numapars.push({num: Number(m), vezes: aparic})
        }
   
    present = []
    //console.log('numapars',numapars)
    ////console.log('----------------------------------------------------------------------------------------------------')
    for (r in util) {
   
        ////console.log('-----------------------------------------------------------------------------------------------------------------------------')
       lista = util[r].mons
        present = {fix: [], falt: []}
        ////console.log(lista)
      
        rep = 0
        for (g = 0; g < lista.length && rep < quanto; g++) {
            ////console.log(lista[g])
   
   
            if (numapars.find(function(numapars) {
                return numapars.num == lista[g]
                }).vezes == 1) {
                ////console.log('ADICIOnAR')
                  rep++
                  present.fix.push(lista[g])
                 
            }
   
        }
        ////console.log('present', present)
        ////console.log('--------------------------------------VEnDO O QUE FALTA-----------------------------------')
   
        if (present.fix.length < quanto) {
        for (g in lista) {
            ////console.log('')
            ////console.log(lista[g])
            if (present.fix.indexOf(lista[g]) == -1) {
                ////console.log('FALTA')
                present.falt.push(lista[g])
   
               
   
                  //  numapars.find(function(numapars) {
                      // return numapars.num == lista[g]
                     //   }).vezes--
   
                        
            }
        }
        ////console.log('FALTAM OS nÚMEROS', present.falt)
   
        
        if (present.fix.length == 0) {
        for (ti in present.falt) {
            ////console.log(present.falt[ti])
   
           
   
                numapars.find(function(numapars) {
                    return numapars.num == present.falt[ti]
                    }).vezes--
   
                 
        }
    }
        
   
    }
    relation_2[r] = present
    relation_2[r].car = segs_22[r].car
    
    }
    ////console.log('Relation_2!!!!!!!!!!!!!!!!!', relation_2)
    for (c in relation_2) {
        ////console.log('-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
        if (relation_2[c].fix.length > 0) {
        ////console.log(relation_2[c].fix, relation_2[c].falt)
   
        faltam = Number(quanto) - Number(relation_2[c].fix.length)
        ////console.log('faltam', faltam)
   
        for (f = 0; f < faltam; f++) {
            ////console.log(relation_2[c].falt[f])
           relation_2[c].fix.push(relation_2[c].falt[f])
          
           ////console.log('AnTES: ', relation_2[c].falt)
           relation_2[c].falt[f] = -10
   
           ////console.log('DEPOIS: ', relation_2[c].falt)
        }
        ////console.log(relation_2[c].fix)
   
        for (tel = 0; tel < c; tel++){
   
            if (relation_2[tel].fix.length > 0) {
            ////console.log('relation_2[tel]', relation_2[tel])
            }
            
            outrorel = relation_2[tel]
            
        for (hu in outrorel.fix) {
            ////console.log(outrorel.fix[hu])
            if (relation_2[c].fix.indexOf(outrorel.fix[hu]) != -1) {
                ////console.log(`${relation_2[c].fix}.indexOf(${outrorel.fix[hu]}) = ${relation_2[c].fix.indexOf(outrorel.fix[hu])}`)
                ////console.log(outrorel.falt)
                y = 0
                for(ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {
   
                    ////console.log(outrorel.falt[ou])
                    if (relation_2[c].fix.indexOf(outrorel.falt[ou]) == -1 && outrorel.falt[ou] != -10){
                        ////console.log('pode ir')
                        outrorel.fix[hu] =  outrorel.falt[ou]
                        outrorel.falt[ou] = -10
                        
                        ////console.log('isso aí:', outrorel.fix)
                        y++
                    }
                }
            }
        }
    }
        }
    }
   
    ////console.log('SERÁ QUE DEU CERTO?')
   
   //////console.log(relation_2)
   
   groups = 0
   conts = []
   for (yougo in relation_2) {
   if (relation_2[yougo].fix.length > 0) {
   ////console.log(relation_2[yougo].fix)
   
   for (pals in relation_2[yougo].fix) {
    ////console.log(relation_2[yougo].fix[pals])
    conts.push(relation_2[yougo].fix[pals])
   }
   groups++
   }
   }
   
   ////console.log('divs_2 é igual a ', divs_2[okentao])
   ////console.log('groups é igual a', groups)
   if (groups < divs_2[okentao]) {
    //console.log('DEU CERTO!!!EBAAAAAA')
   
    ////console.log('SERÁ QUE DEU CERTO?')
   
   ////console.log(relation_2)
   
   groups = 0
   conts = []
   for (yougo in relation_2) {
   if (relation_2[yougo].fix.length > 0) {
   //console.log(relation_2[yougo].fix)
   
   for (pals in relation_2[yougo].fix) {
   //console.log(relation_2[yougo].fix[pals])
    conts.push(relation_2[yougo].fix[pals])
   }
   groups++
   }
   }
   //console.log('IF LIFE AIn\'T JUST A JOKE THEn WHY ARE WE LAUGHInG?', divs_2[okentao], 'and', groups)
   if (divs_2[okentao] != groups) {
   //console.log('THEn WHY ARE WE LAUGHInG?')
   //console.log('I\'VE TRIED TO PUT THIS ALL BEHInD ME')
   
   tirados_2 = []
   for (wish in relation_2) {
   //console.log(relation_2[wish].fix)
    for (edge_2 in relation_2[wish].fix) {
   //console.log(relation_2[wish].fix[edge_2])
       tirados_2.push(relation_2[wish].fix[edge_2])
    }
   }
   //console.log('nÚMEROS QUE SERÃO TIRADOS_2', tirados_2)
   
   
   
   for (die in segs_22) {
       tirar = []
   
   //console.log('break', segs_22[die].mons)
   for (h in segs_22[die].mons) {
   //console.log(segs_22[die].mons[h])
   if (tirados_2.indexOf(segs_22[die].mons[h]) != -1) {
   tirar.push(Number(h))
   }
   }
   //console.log('tirar de ',segs_22[die].mons, tirar)
   for (far = tirar.length - 1; far >= 0; far--) {
      //console.log(segs_2[die].mons[tirar[far]])
   segs_22[die].mons.splice(tirar[far], 1)
   
   }
   //console.log('ficou assim:', segs_22[die].mons)
   }
   
   for (sorrow in segs_22) {
   //console.log(segs_22[sorrow].mons)
   grupos = Math.floor(Number(segs_22[sorrow].mons.length)/quanto)
   //console.log('dá para formar', grupos,'grupos')
   
   imor = 0
   
   for (b = 0; b < grupos; b++) {
       //console.log(b, 'vez----------------------------------------------------------------------------------------')
      
       ob = {car: segs_22[sorrow].car, fix: [],problem:false}
   
       for (live = 0; live < quanto; live++) {
           //console.log('TIRADOS_2')
           //console.log(segs_22[sorrow].mons[imor])
   
          //console.log(tirados_2.indexOf(segs_22[sorrow].mons[imor]) == -1) 
   
              if (tirados_2.indexOf(segs_22[sorrow].mons[imor]) != -1) {
                  // ob.problem = true
              }
               //console.log('PLEASE DOnT ASK ME FOR THE LAST WORDS',ob)
           ob.fix.push(segs_22[sorrow].mons[imor])
           tirados_2.push(segs_22[sorrow].mons[imor])
           imor++
           
          
       }
      
      
       //console.log('In THE EnD', ob)
   
       //console.log(segs_22)
       //console.log('VEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',ob.fix,'----------------',temnaLista(ob.fix))
       if (ob.problem == false || temnaLista(ob.fix) == true) {
       relation_2.push(ob)
       }
   }
   
   }
   
   
   
   }
   }else if(groups > divs_2[okentao]){
       
   //console.log('nÃO DEU CERTO! BUÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ')
    //console.log('números que têm: ', conts)
    ////console.log(segs_2)
   
    mia = []
   for (idk in segs_22) {
   //////console.log('---------------------------------------------------------------------')
   //console.log('aqui ó',segs_2[idk].mons)
   
   
   for (mcr in segs_22) {
   if (mcr != idk) {
   
       //////console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')
     //console.log('outro',segs_2[mcr].mons)
      
      //console.log(segs_2[idk].mons.length)
       if (segs_22[mcr].mons.length <= segs_22[idk].mons.length) {
   
           sames = []
      for(y = 0; y < segs_22[mcr].mons.length; y++) {
       //  //console.log(segs_2[idk].mons, segs_2[mcr].mons[y], segs_2[idk].mons.indexOf(segs_2[mcr].mons[y]))
           if (segs_22[idk].mons.indexOf(segs_22[mcr].mons[y]) != -1) {
          //console.log('igual')
               sames.push('igual')
           }else{
           //console.log('diferente')
               sames.push('diferente')
           }
      }
   //console.log(sames)
      if (sames.indexOf('diferente') == -1){
    //console.log('TIRAR', segs_2[mcr])
   
       if (mia.indexOf(mcr) == -1) {
       mia.push(mcr)
       }
       
    //console.log(segs_2)
       
      }
   }
       
   }
   }
   
   }
   
   for (f = mia.length - 1; f >= 0; f--) {
       //segs_22.splice(mia[f],1)
       
      }
   
      
    numapars = []
    
   relation_2 = []
   
    //////console.log('--------------------------------------------------------------------------------------------------------------------------------')
   
   
    util = []
    for (t in segs_22) {
   
       ////console.log(segs_2[n],'.mons: ',segs_2[t].mons,'.length: ', segs_2[t].mons.length)
     //  //console.log(`${segs_2[t].mons.length} é maior que ou igual a ${quanto}? ${segs_2[t].mons.length >= quanto}`)
   
        if (segs_22[t].mons.length >= quanto) {
            util.push(segs_22[t])
        }
        ////console.log('')
    }
   
    //console.log('util', util)
    
    for (m in monomios_2) {
        aparic = 0
       ////console.log(m)
        for (t in util) {
         //   //console.log('util[t].mons', util[t].mons)
         //   //console.log('util[t].mons.indexOf(Number(m))', util[t].mons.indexOf(Number(m)))
   
            if (util[t].mons.indexOf(Number(m)) != -1) {
                aparic++
            }
        }
       // //console.log('aparic',m, aparic)
        numapars.push({num: Number(m), vezes: aparic})
        }
   
    present = []
    ////console.log('----------------------------------------------------------------------------------------------------')
    for (r in util) {
   
        ////console.log('-----------------------------------------------------------------------------------------------------------------------------')
       lista = util[r].mons
        present = {fix: [], falt: []}
        ////console.log(lista)
      
        rep = 0
        for (g = 0; g < lista.length && rep < quanto; g++) {
         //   //console.log(lista[g])
   
   
            if (numapars.find(function(numapars) {
                return numapars.num == lista[g]
                }).vezes == 1) {
                ////console.log('ADICIOnAR')
                  rep++
                  present.fix.push(lista[g])
                 
            }
   
        }
       // //console.log('present', present)
        ////console.log('--------------------------------------VEnDO O QUE FALTA-----------------------------------')
   
        if (present.fix.length < quanto) {
        for (g in lista) {
           // //console.log('')
           // //console.log(lista[g])
            if (present.fix.indexOf(lista[g]) == -1) {
             //   //console.log('FALTA')
                present.falt.push(lista[g])
   
               
   
                  //  numapars.find(function(numapars) {
                      // return numapars.num == lista[g]
                     //   }).vezes--
   
                        
            }
        }
      //  //console.log('FALTAM OS nÚMEROS', present.falt)
   
        
        if (present.fix.length == 0) {
        for (ti in present.falt) {
          //  //console.log(present.falt[ti])
   
           
   
                numapars.find(function(numapars) {
                    return numapars.num == present.falt[ti]
                    }).vezes--
   
                 
        }
    }
        
   
    }
    relation_2[r] = present
    relation_2[r].car = segs_22[r].car
    
    }
    //console.log('Relation_2!!!!!!!!!!!!!!!!!', relation_2)
    for (c in relation_2) {
       // //console.log('-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
        if (relation_2[c].fix.length > 0) {
       // //console.log(relation_2[c].fix, relation_2[c].falt)
   
        faltam = Number(quanto) - Number(relation_2[c].fix.length)
        ////console.log('faltam', faltam)
   
        for (f = 0; f < faltam; f++) {
         //   //console.log(relation_2[c].falt[f])
           relation_2[c].fix.push(relation_2[c].falt[f])
          
       //    //console.log('AnTES: ', relation_2[c].falt)
           relation_2[c].falt[f] = -10
   
       //    //console.log('DEPOIS: ', relation_2[c].falt)
        }
      //  //console.log(relation_2[c].fix)
   
        for (tel = 0; tel < c; tel++){
   
            if (relation_2[tel].fix.length > 0) {
          //  //console.log('relation_2[tel]', relation_2[tel])
            }
            
            outrorel = relation_2[tel]
            
        for (hu in outrorel.fix) {
          //  //console.log(outrorel.fix[hu])
            if (relation_2[c].fix.indexOf(outrorel.fix[hu]) != -1) {
           //console.log(`${relation_2[c].fix}.indexOf(${outrorel.fix[hu]}) = ${relation_2[c].fix.indexOf(outrorel.fix[hu])}`)
                ////console.log(outrorel.falt)
                y = 0
                for(ou = 0; y < 1 && ou < outrorel.falt.length; ou++) {
   
                 ///   //console.log(outrorel.falt[ou])
                    if (relation_2[c].fix.indexOf(outrorel.falt[ou]) == -1 && outrorel.falt[ou] != -10){
                    //    //console.log('pode ir')
                        outrorel.fix[hu] =  outrorel.falt[ou]
                        outrorel.falt[ou] = -10
                        
                     //console.log('isso aí:', outrorel.fix)
                        y++
                    }
                }
            }
        }
    }
        }
    }
   
    //console.log('SERÁ QUE DEU CERTO?')
   
   //console.log(relation_2)
   
   groups = 0
   conts = []
   for (yougo in relation_2) {
   if (relation_2[yougo].fix.length > 0) {
   //console.log(relation_2[yougo].fix)
   
   for (pals in relation_2[yougo].fix) {
    //console.log(relation_2[yougo].fix[pals])
    conts.push(relation_2[yougo].fix[pals])
   }
   groups++
   }
   }
   //console.log('IF LIFE AIn\'T JUST A JOKE THEn WHY ARE WE LAUGHInG?', divs_2[okentao], 'and', groups)
   if (divs_2[okentao] != groups) {
   //console.log('THEn WHY ARE WE LAUGHInG?')
   //console.log('I\'VE TRIED TO PUT THIS ALL BEHInD ME')
   
   tirados_2 = []
   for (wish in relation_2) {
    //console.log(relation_2[wish].fix)
    for (edge_2 in relation_2[wish].fix) {
      //console.log(relation_2[wish].fix[edge_2])
       tirados_2.push(relation_2[wish].fix[edge_2])
    }
   }
   //console.log('nÚMEROS QUE SERÃO TIRADOS_2', tirados_2)
   
   
   for (die in segs_22) {
       tirar = []
   
   //console.log('break', segs_22[die].mons)
   for (h in segs_22[die].mons) {
   //console.log(segs_22[die].mons[h])
   if (tirados_2.indexOf(segs_22[die].mons[h]) != -1) {
   tirar.push(Number(h))
   }
   }
   //console.log('tirar de ',segs_22[die].mons, tirar)
   for (far = tirar.length - 1; far >= 0; far--) {
       
   segs_22[die].mons.splice(tirar[far], 1)
   
   }
   //console.log('ficou assim:', segs_22[die].mons)
   }
   
   for (sorrow in segs_22) {
   //console.log(segs_22[sorrow].mons)
   grupos = Math.floor(Number(segs_22[sorrow].mons.length)/quanto)
   //console.log('dá para formar', grupos,'grupos')
   
   imor = 0
   
   for (b = 0; b < grupos; b++) {
       //console.log(b, 'vez----------------------------------------------------------------------------------------')
      
       ob = {car: segs_22[sorrow].car, fix: [],problem:false}
   
       for (live = 0; live < quanto; live++) {
         //console.log('TIRADOS_2')
        //console.log(segs_22[sorrow].mons[imor])
   
       //console.log(tirados_2.indexOf(segs_22[sorrow].mons[imor]) == -1) 
   
              if (tirados_2.indexOf(segs_22[sorrow].mons[imor]) != -1) {
                   //ob.problem = true
              }
            //console.log('PLEASE DOnT ASK ME FOR THE LAST WORDS',ob)
           ob.fix.push(segs_22[sorrow].mons[imor])
           tirados_2.push(segs_22[sorrow].mons[imor])
           imor++
           
          
       }
      
      
       //console.log('In THE EnD', ob)
   
       //console.log(segs_22)
       //console.log('VEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',ob.fix,'----------------',temnaLista(ob.fix))
       if (ob.problem == false || temnaLista(ob.fix) == true) {
       relation_2.push(ob)
       }
   }
   
   }
   
   
   
   }
   }
   
   //console.log('HELLO')
   
   
   return [relation_2, segs_22]
   }
   
   //console.log('PERAÍIIIIIIIII', DIVIDIR(['2'],['2', '*', '2', '*', '3', 'x', 'x']))
   //DESFATORAR(['-','3'],['3'],['1'])
   //console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', DIVIDIR(['x'], ['10','x']))
   
 function SOMANDOMONOMIOS_2(list) {
        
particles = [{numero: ''}]
obnum = 0
for (n = 0; n < list.length; n++) {


if (String(list[n]).search('[\\-\\+]') != -1 && n != 0) {
//console.log('DEVTOOLS EU TE ODEIOoooooooooooooooooo')
particles.push({numero: ''})
obnum++
}

particles[obnum].numero += list[n]
//console.log('número----------------------------------------------:',particles[obnum].numero)
}



for (huh in particles) {
   //console.log('HUH',particles[huh].numero)

    partlet = ''
    for (y in particles[huh].numero) {
     //console.log(particles[huh].numero[y])
     if (String(particles[huh].numero[y]).search('[a-z]') != -1) {
        //console.log('EEEEEE')
        partlet+= String(particles[huh].numero[y])
     }
    }
    particles[huh].partletral = partlet
   //console.log('PARTLETRAL',particles[huh].partletral)
}


exp_2 = []
for (bye in particles) {
    //console.log(particles[bye])

    comofica = []
    ground = ''

    for (misery in particles[bye].numero) { 
     //console.log(particles[bye].numero[misery])
        
        carac = particles[bye].numero[misery]
       //console.log('CARACTER' + carac)
      //console.log(ground.length)

      //console.log('OH COME On',ground, String(ground.search('[0-9]')))
            if (ground.length == 0) {
               //console.log('LISTA VAZIA')
                ground+= carac
            }else if(String(ground.search('[0-9]')) != -1 && String(carac).search('[0-9]') != -1){
               //console.log('É UM nÚMERO')
                ground+= carac
            }else{
                comofica.push(ground)
                ground = ''
                ground += carac
                
            }
            if (misery == particles[bye].numero.length - 1) {
                comofica.push(ground)
            }
    }

   //console.log('COMOFICA', comofica)
    ////console.log('nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',particles[bye].numero)
    particles[bye].numero = comofica
}


agruparsoma = []
// JUNTANDO OS MONÔMIOS QUE DÁ PARA SOMAR
for (huh in particles) {
    //console.log(particles[huh].numero, particles[huh].partletral,'_________________')
    
    if (agruparsoma.find(function (agruparsoma) {
        return agruparsoma.que == particles[huh].partletral
       }) == undefined) {
           //console.log('ARRRRRROZ')
    agruparsoma.push({quais: [Number(huh)], que:  particles[huh].partletral})
       }else{
        agruparsoma.find(function (agruparsoma) {
            return agruparsoma.que == particles[huh].partletral
           }).quais.push(Number(huh))
       }
    
}


          





for (chuva in agruparsoma) {
    //console.log('')
   //console.log('')
    //console.log('')

    conta = []
for (da in agruparsoma[chuva].quais) {



divisor = []
for (flowers in agruparsoma[chuva].que) {

divisor.push(agruparsoma[chuva].que[flowers])
}

//console.log(particles[agruparsoma[chuva].quais[da]].numero, '/',divisor)
tu = [...divisor]
resultadoDaDivisão = DIVIDIR( divisor, particles[agruparsoma[chuva].quais[da]].numero)

//console.log('A DIVISÃO É IGUAL DE',particles[agruparsoma[chuva].quais[da]].numero,'por',tu, resultadoDaDivisão)

plan = []
add = ''

for (past in resultadoDaDivisão) {
   
 //console.log(resultadoDaDivisão[past])

 if (resultadoDaDivisão[past].search('\\*') != -1 || resultadoDaDivisão[past].search('[0-9]') != -1) {
//console.log('ADICIOnAR')

if (add.length == 0) {
    if (resultadoDaDivisão[past - 1] != '-') {
    add+= resultadoDaDivisão[past]
    }

}else if (resultadoDaDivisão[past].search('[0-9]') != -1 && add.search('[0-9]') != -1) {
    //console.log('OK')
add+= resultadoDaDivisão[past]
}else{
    plan.push(add)
    add = ''
    //console.log('AASADWHDUWHDU',resultadoDaDivisão[past - 1])
   
    add+= resultadoDaDivisão[past]
    
    
}
//console.log('ADD', add)
//console.log('PLAn É:', plan)

if (plan.length == 3) {
//console.log('É TRÊEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEIS')
//console.log('___________________number1:', Number(plan[0]), 'number2:', Number(plan[2]),'__________________')
//console.log(Number(plan[0])*Number(plan[2]))
plan = [String(Number(plan[0])*Number(plan[2]))]
}
 }

}

//console.log(agruparsoma[chuva].quais.length, '---------')
if (add == '' && agruparsoma[chuva].quais.length > 1) {
    add = '1'
   //console.log('VAIIIIIIIIIIIIIII')
}
plan.push(add)
//console.log('PLAn', plan)

if (plan.length == 3) {
    //console.log('É TRÊEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEIS')
    //console.log(Number(plan[0])*Number(plan[2]))
    plan = [String(Number(plan[0])*Number(plan[2]))]
    //console.log('É ISSO!!', plan)
    }

    if (particles[agruparsoma[chuva].quais[da]].numero[0] == '+' || particles[agruparsoma[chuva].quais[da]].numero[0] == '-') {
   //console.log('O SInAL É: ', particles[agruparsoma[chuva].quais[da]].numero[0])

    sinal = particles[agruparsoma[chuva].quais[da]].numero[0]

    if (conta.length != 0) {
    conta.push(particles[agruparsoma[chuva].quais[da]].numero[0])
    }
    }

    if (conta.length == 0 && particles[agruparsoma[chuva].quais[da]].numero[0] == '-') {

 entao = '-'
 entao+= plan[0]
 //console.log(entao)
 conta.push(entao)
    }else{
       
        conta.push(plan[0])
    }
   
    
}


//console.log('OK, FICOU ASSIM:', conta)

comehome = fazerConta(conta)
//console.log('E RESOLVEnDO FICA ASSIM:', comehome)



if (comehome[0][0] == '-') {
    t = ''
   for (b in comehome[0]) {
   if (comehome[0][b] != '-') {
     t+= comehome[0][b]
   }
   }
  //console.log(t)
   //console.log(typeof t)
   at = t
   if (ehprimo(t) == false) {
      //console.log(at)
   fat = FATORARSInGULAR(at)
  //console.log(String(fat))
   }else{
     //console.log('É PRIMOOOOOOOOOOOOOOOOO')
    fat = at
   }
   oop = '-'
   oop+= String(fat)
//console.log(oop)

exp_2.push('-')
fat += agruparsoma[chuva].que
exp_2.push(fat)

}else{
    
    if (ehprimo(comehome) == false) {
fat = FATORARSInGULAR(comehome)
    }else{
        fat = comehome
    }
    
//console.log(fat)

if (exp_2.length == 0) {
    fat += agruparsoma[chuva].que
    exp_2.push(fat)
    //console.log('PARTE LETRAL:', agruparsoma[chuva].que)
   
    }else {
        exp_2.push('+')
        fat += agruparsoma[chuva].que
        exp_2.push(fat)
      //console.log('PARTE LETRAL:', agruparsoma[chuva].que)
    }
}




}

return[exp_2, agruparsoma.length, particles.length]
 }


 function REDONUMFACTORING(storer) {

    if (typeof storer === 'string') {
        other = []
        for (h in storer) {
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
    return [confirmedresult]
}else{
    return [resultobtained]
}
   
}


function MULTIPLICARDIREITO(num1, num2) {
    

    if (num1 == '1' || num2 == '1') {
        //console.log('É 1')
        if (num1 == '1') {
            resultmult = num2
        }else{
            resultmult = num1
        }
    }else{
        sónumero = ''
        sóletra = ''
        for (car in num1) {
            if (num1[car].search('[0-9]') != -1 || num1[car] == '*') {
                sónumero += num1[car]
            }else if(num1[car].search('[a-z]') != -1) {
                sóletra += num1[car]
            }
        }
        
    
        sónumero2 = ''
        sóletra2 = ''
        for (car in num2) {
            if (num2[car].search('[0-9]') != -1 || num2[car] == '*') {
                sónumero2 += num2[car]
            }else if(num2[car].search('[a-z]') != -1){
                sóletra2 += num2[car]
            }
        }
        
        if (sónumero.length > 0 && sónumero2.length > 0) {
            sónumero+= '*'
        }
    
        if (num1[0] == '-') {
            sinal1 = 'neg'
        }else{
            sinal1 = 'pos'
        }
        
        if (num2[0] == '-') {
            sinal2 = 'neg'
        }else{
            sinal2 = 'pos'
        }
    
    
        sónumero+= sónumero2
    
            sóletra+= sóletra2
        
           
            if (sinal1 == sinal2) {
               
                resultmult = sónumero+= sóletra
            }else{
               
                resultmult = '-'
                resultmult += sónumero+= sóletra
            }
    }
    return resultmult
    }

function sort(n) {
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
                if (yposition[item] > maiorparamenor[volume]) {
                    var itens = yposition.length - (Number(volume) + 1)
                    var leng = yposition.length

                    for (c = 0; c < itens; c++) {
                        maiorparamenor[Number(leng) - 1] = maiorparamenor[Number(leng) - 2]
                        posiçõesnumeros[Number(leng) - 1] = posiçõesnumeros[Number(leng) - 2]
                        leng--
                    }
                    maiorparamenor[volume] = yposition[item]
                    posiçõesnumeros[volume] = Number(item)
                    dn = 10


                }
            }
        }
    }
    return [maiorparamenor, posiçõesnumeros]
}

return [
  concatenar_2,
  pans_2.length,
  todososnumeros_2.length,
  segs_2.length,
  roll_2.length,
];
//console.log('Poxa segs_2, você me decepcionou... ;-; (D:)', VAI('13x'), DIVIDIR(['-','.','13'],['2','.','13']))

}