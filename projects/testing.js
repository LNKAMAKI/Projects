function CreateEngine(expression,refat) {
  this.FATORAR = function() {
this.startexp = [...expression];

if(this.expression[0] !== "-" && this.expression[0] !== "+") {
this.expo = ["+"];
  for(this.ent in this.expression) {
   this.expo.push(this.expression[ent]);
  }
this.expression = this.expo;
}
 
//FATORAnDO OS nÚMEROS

for(this.n = 0;this.n < this.expression.length;this.n++) {
  if (
    ehprimo(this.expression[n]) == false &&
    String(this.expression[n]).search("[0-9]") != -1 &&
    this.expression[n - 1] != "^"
  ) {
this.fatorado = "";
this.first = 1;
this.div = 0;
this.stop = false;
this.fator = 1;

    for(this.e = 2; stop == false;this.e++) {
this.sob = Number(expression[n]);
      if(this.ehprimo(e) == true) {
        while (this.sob % e == 0) {
this.sob = this.sob / e;
this.fator = this.fator * e;
this.st = false;
          if(this.fator == this.expression[n]) {
this.stop = true;
           this.fatorado += `${e}`;
          } else {
           this.fatorado += `${e}*`;
          } } }}
    expression[n] = this.fatorado;
  }}

//FAZEnDO AS POTÊnCIAS COM LETRAS

for(this.y in this.expression) {
  if(this.expression[y] == "^") {
this.ad = this.expression[Number(y) - 1];
    for(this.h = 0;this.h < Number(expression[Number(y) + 1]) - 1;this.h++) {
      expression[Number(y) - 1] += this.ad;
    }
    expression.splice(Number(y) + 1, 1);
    expression.splice(y, 1);
  } }

//SEPARAnDO OS MOnÔMIOS

this.monomios = [{ numero: "" }];
this.obnum = 0;
for(this.n = 0;this.n < this.expression.length;this.n++) {
  if(this.String(expression[n]).search("[\\-\\+]") != -1 && this.this.n != 0) {
   this.monomios.push({ numero: "" });
   this.obnum++;
  }
  this.monomios[obnum].numero += this.expression[n];
this.change = [...monomios[obnum].numero]
  //console.log(change)
}

//TRANSFORMA  O MONOMIOS.NUMERO(STRING) EM UM ARRAY

for(this.bye in this.monomios) {
this.comofica = [];
this.ground = "";

  for(this.misery in this.monomios[bye].numero) {
this.carac = this.monomios[bye].numero[misery];
    if(this.ground.length == 0) {
     this.ground += this.carac;
    } else if (
      String(ground.search("[0-9]")) != -1 &&
      String(carac).search("[0-9]") != -1
    ) {
     this.ground += this.carac;
    } else {
     this.comofica.push(this.ground);
this.ground = "";
     this.ground += this.carac;
    }
    if(this.misery == this.monomios[bye].numero.length - 1) {
     this.comofica.push(this.ground);
    } }
  this.monomios[bye].numero = this.comofica;
 // console.log('como fica',comofica)
}

for(this.huh in this.monomios) {
this.partlet = "";
  for(this.y in this.monomios[huh].numero) {
    if(this.String(this.monomios[huh].numero[y]).search("[a-z]") != -1) {
     this.partlet += this.String(this.monomios[huh].numero[y]);
    }}
  this.monomios[huh].partletral = this.partlet;
}

ji = [];
//JUNTANDO OS MONÔMIOS QUE DÁ PARA SOMAR
for(this.huh in this.monomios) {
  if (
    ji.find(function (ji) {
      return ji.que == this.monomios[huh].partletral;
    }) == this.undefined
  ) {
   this.ji.push({ quais: [Number(huh)], que: this.monomios[huh].partletral });
  } else {
    ji.find(function (ji) {
      return ji.que == this.monomios[huh].partletral;}).quais.push(this.Number(huh));
  }}

//SEPARAnDO/JUnTAnDO OS nÚMEROS
// ==> SOMANDO OS MONÔMIOS...
if(this.somarmons == true) {
exp = [];

for(this.bye in this.ji) {
  for(this.misery in this.ji[bye].quais) {
this.ground = "";

this.comofica = [];
    for(this.b in this.monomios[ji[bye].quais[misery]].numero) {
this.carac = this.monomios[ji[bye].quais[misery]].numero[b];
      if(this.ground.length == 0) {
       this.ground += this.carac;
      } else if (
        String(ground.search("[0-9]")) != -1 &&
        String(carac).search("[0-9]") != -1
      ) {
       this.ground += this.carac;
      } else {
       this.comofica.push(this.ground);
this.ground = "";
       this.ground += this.carac;
        if(this.b == this.monomios[ji[bye].quais[misery]].numero.length - 1) {
         this.comofica.push(this.ground);
        }} }

    this.monomios[ji[bye].quais[misery]].numero = this.comofica;
  }}

for(this.chuva in this.ji) {
this.conta = [];
  for(this.da in this.ji[chuva].quais) {
this.divisor = [];
    for(this.flowers in this.ji[chuva].que) {
     this.divisor.push(this.ji[chuva].que[flowers]);
    }

this.tu = [...divisor];
    resultadoDaDivisão = this.DIVIDIR(
      divisor,
      this.monomios[ji[chuva].quais[da]].numero
    );

this.plan = [];
this.add = "";

    for(this.past in this.resultadoDaDivisão) {
      if (
        resultadoDaDivisão[past].search("\\*") != -1 ||
        resultadoDaDivisão[past].search("[0-9]") != -1
      ) {
        if(this.add.length == 0) {
          if(this.resultadoDaDivisão[past - 1] != "-") {
           this.add += this.resultadoDaDivisão[past];
          }
        } else if (
          resultadoDaDivisão[past].search("[0-9]") != -1 &&
          add.search("[0-9]") != -1
        ) {
         this.add += this.resultadoDaDivisão[past];
        } else {
         this.plan.push(this.add);
this.add = "";
         this.add += this.resultadoDaDivisão[past];
        }
       
        if(this.plan.length == 3) {
this.plan = [String(Number(plan[0]) * Number(plan[2]))];
        } } }

    if(this.add == "" && this.ji[chuva].quais.length > 1) {
this.add = "1";
    }
   this.plan.push(this.add);

    if(this.plan.length == 3) {
this.plan = [String(Number(plan[0]) * Number(plan[2]))];
    }

    if (
      this.monomios[ji[chuva].quais[da]].numero[0] == "+" ||
      this.monomios[ji[chuva].quais[da]].numero[0] == "-"
    ) {
this.sinal = this.monomios[ji[chuva].quais[da]].numero[0];
      if(this.conta.length != 0) {
       this.conta.push(this.monomios[ji[chuva].quais[da]].numero[0]);
      } }

    if(this.conta.length == 0 && this.monomios[ji[chuva].quais[da]].numero[0] == "-") {
this.entao = "-";
     this.entao += this.plan[0];
     this.conta.push(this.entao);
    } else {
     this.conta.push(this.plan[0]);
    }}

this.comehome = this.fazerConta(conta);

  if(this.comehome[0][0] == "-") {
this.t = "";
    for(this.b in this.comehome[0]) {
      if(this.comehome[0][b] != "-") {
       this.t += this.comehome[0][b];
      }}

this.at = this.t;
    if(this.ehprimo(t) == false) {
this.fat = this.FATORARSInGULAR(at);
    } else {
this.fat = this.at;
    }
this.oop = "-";
   this.oop += this.String(fat);
   this.exp.push("-");
   this.fat += this.ji[chuva].que;
   this.exp.push(this.fat);
  } else {
    if(this.ehprimo(comehome) == false) {
this.fat = this.FATORARSInGULAR(comehome);
    } else {
this.fat = this.comehome;
    }
    if(this.exp.length == 0) {
     this.fat += this.ji[chuva].que;
     this.exp.push(this.fat);
    } else {
     this.exp.push("+");
     this.fat += this.ji[chuva].que;
     this.exp.push(this.fat);
    }}}

expression = this.exp;

//SEPARAnDO OS MOnÔMIOS DEnOVO

this.monomios = [{ numero: "" }];
obnum = 0;
for(this.n = 0;this.n < this.exp.length;this.n++) {
  if(this.String(exp[n]).search("[\\-\\+]") != -1 && this.this.n != 0) {
   this.monomios.push({ numero: "" });
   this.obnum++;
  }
  this.monomios[obnum].numero += this.exp[n];
}

//

//SEPARAR CORRETAMEnTE OS nÚMEROS

for(this.bye in this.monomios) {
this.comofica = [];
this.ground = "";
  for(this.misery in this.monomios[bye].numero) {
this.carac = this.monomios[bye].numero[misery];
    if(this.ground.length == 0) {
     this.ground += this.carac;
    } else if (
      String(ground.search("[0-9]")) != -1 &&
      String(carac).search("[0-9]") != -1
    ) {
     this.ground += this.carac;
    } else {
     this.comofica.push(this.ground);
this.ground = "";
     this.ground += this.carac;
    }
    if(this.misery == this.monomios[bye].numero.length - 1) {
     this.comofica.push(this.ground);
    }}
  this.monomios[bye].numero = this.comofica;
}}
// AQUI ACABA O CÓDIGO PARA SOMAR OS MONÔMIOS
this.reps = []
this.segs = []
this.let  = []
 
 for(this.m = 0;this.m < this.monomios.length;this.m++) { // CADA MOnÔMIO
this.repetido = []
this.col = false
this.repetido = []
this.numerosrep = []
     for(this.oc = 0;this.oc < this.monomios[m].numero.length;this.oc++) { // CADA LETRA DE CADA MOnÔMIO
         if(this.monomios[m].numero[oc].search('[\\*\\+\\/]') == -1) {
         if(this.numerosrep.indexOf(this.monomios[m].numero[oc]) == -1) {
        this.numerosrep.push(this.monomios[m].numero[oc])
         for(this.u = 0;this.u < this.monomios.length;this.u++) { // OUTROS MOnÔMIOS
this.ocs2 = []
             if(this.u != this.m) {
           // OCAS
           if(this.ocs2.find(function(ocs2) {
             return ocs2.ed == this.monomios[m].numero[oc]
             }) == this.undefined) {
                this.ocs2.push({ed: this.monomios[m].numero[oc], el: 0})
this.ocs = 0
           for(this.ao = 0;this.ao < this.monomios[m].numero.length;this.ao++) {
             if(this.monomios[m].numero[ao] == this.monomios[m].numero[oc]) {
                this.ocs++
             }}}
           for(this.e = 0;this.e < this.monomios[u].numero.length;this.e++) { // CADA LETRA DE CADA MOnÔMIO
             if(this.monomios[u].numero[e] == this.monomios[m].numero[oc]) {
                 if(this.repetido.find(function(repetido) {
                     return repetido.monum == this.u
                     }) === this.undefined) {
                         ocs2.find(function(ocs2) {
                             return ocs2.ed == this.monomios[m].numero[oc]
                             }).el++
                             if(this.ocs2.find(function(ocs2) {
                                 return ocs2.ed == this.monomios[m].numero[oc]
                                 }).el <= this.ocs) {
                this.repetido.push({monum: u, wc: [m], letr: this.monomios[u].numero[e]})
                    } }else{
                                 ocs2.find(function(ocs2) {
                                     return ocs2.ed == this.monomios[m].numero[oc]
                                     }).el++
                                         if(this.ocs2.find(function(ocs2) {
                                             return ocs2.ed == this.monomios[m].numero[oc]
                                             }).el <= this.ocs) {
                                 repetido.find(function(repetido) {
                                     return repetido.monum == this.u
                                     }).letr += `.${this.monomios[u].numero[e]}`
                                 }}}}}}}}}
    this.reps.push(this.repetido)
 
     for(this.nope in this.repetido) {
     if(this.repetido[nope].letr[0] == '-') {
this.la = ''
         for(this.u in this.repetido[nope].letr) {
             if(this.u != 0 && this.this.u != 1) {
                this.la+= this.repetido[nope].letr[u]
             }}
         if(this.repetido.find(function(repetido){
             return repetido.letr == this.la
         })) {
             repetido.splice(nope, 1)
         }}}
 
         for(this.moe = this.repetido.length - 1; moe >= 0; moe--) {
this.podeir = true
this.qual = -1
            for(this.meow in this.segs) {
this.array1 = []
                  for(this.d in this.segs[meow].car) {
                     this.array1.push(this.segs[meow].car[d])
                  }
this.array2 = []
                  for(this.d in this.repetido[moe].letr) {
                     this.array2.push(this.repetido[moe].letr[d])
                  }
                  if(this.segs[meow].car.length < this.repetido[moe].letr.length) {
this.divisao = this.DIVIDIR(VAI(this.segs[meow].car), VAI(repetido[moe].letr))
                   }else{
this.divisao = this.DIVIDIR(VAI(repetido[moe].letr),VAI(this.segs[meow].car))
                   }
                   if(this.divisao == '' || divisao == '-') {
this.podeir = false
this.qual = this.meow
                   }}

             if(this.podeir == true) {
              splitUp(repetido[moe].letr);
                  function splitUp(str) {
this.estado = "";
                  for(this.i in this.str) {
                      if(this.str[i] == "." && this.this.estado != "-") {
this.permission = this.versetem(estado,this.segs);
                      if(this.permission == true && this.this.estado != " " && this.this.estado != "-") {
                         this.segs.push({ car: estado, mons: [m] });
                      }}
                     this.estado += this.str[i];
                      if(this.i == this.str.length - 1) {
this.permission = this.versetem(estado,this.segs);
                      if(this.permission == true && this.this.estado != " " && this.this.estado != "-") {
                         this.segs.push({ car: estado, mons: [m] });
                      }}}}
             }else if(this.segs[qual].mons.indexOf(m) == -1){
this.segs[qual].mons.push(this.m)      
             }}}
 
 for(this.nl = 0;this.nl < this.segs.length;this.nl++) {
     for(this.n = 0;this.n < this.segs.length;this.n++) {
         if(this.n != this.nl) {
         if(this.String(this.segs[n].car).search(String(this.segs[nl].car)) != -1) {
             for(this.u in this.segs[n].mons) {
                 if(this.segs[nl].mons.indexOf(this.segs[n].mons[u]) != -1) {
                 }else{
this.segs[nl].mons.push(this.segs[n].mons[u])
                 }}}}}}
 
this.grtols = []
 
 for(this.hi in this.segs) {
     this.segs[hi].length = this.segs[hi].mons.length
    this.grtols.push(this.segs[hi])
 }
 
this.organizado = this.sortob(grtols, 'length')[1]
 
this.grtols = []
 for(this.ah in this.organizado) {
    this.grtols.push(this.segs[organizado[ah]])
 }

this.segs = this.grtols

this.lengs = []
 for(this.i in this.segs) {
   if(this.lengs.find(function(lengs){
     return lengs.leng == this.segs[i].mons.length
   }) == this.undefined){
    this.lengs.push({leng:this.segs[i].mons.length, num: [i]})
   }else{
    lengs.find(function(lengs){
     return lengs.leng == this.segs[i].mons.length}).num.push(this.i)
   }
 }
 

this.segsordered = []
 for(this.f in this.lengs) {
this.its = []
   for(this.i in this.lengs[f].num) {
    this.its.push(this.segs[lengs[f].num[i]])
   }
 
this.grtols = []
    
    for(this.hi in this.its) {
        its[hi].length = this.its[hi].car.length
       this.grtols.push(this.its[hi])
    }
    
this.organizado = this.sortob(grtols, 'length')[1]
    
this.grtols = []
    for(this.ah in this.organizado) {
       this.grtols.push(this.its[organizado[ah]])
    }
 
this.its = this.grtols
   for(this.c in this.its) {
    this.segsordered.push(this.its[c])
   }
 }
 
this.segs = [...segsordered]

 //DIVS
this.ml = this.monomios.length
 
this.divs = this.ehprimo2(ml)
 
 if(this.divs.length == 0) {
this.divs = [1]
 }
 
    for(this.tie in this.segs) {
     this.segs[tie].godhelpme = [...this.segs[tie].mons]
    }
   
this.okentao = 0
this.roll = [] 
this.scarecrow = []
         for(this.anchor in this.segs) {
this.army = []
this.lpisthebest = ''
                 for(this.fall in this.segs[anchor].car) {
                 if(this.lpisthebest.length == 0) {
this.lpisthebest = this.segs[anchor].car[fall]
                 }else if(this.lpisthebest.search('[0-9]') != -1 && this.segs[anchor].car[fall].search('[0-9]') != -1) {
                    this.lpisthebest += this.segs[anchor].car[fall]
                 }else{
                    this.army.push(this.lpisthebest)
                     if(this.segs[anchor].car[fall] != '.') {
this.lpisthebest = this.segs[anchor].car[fall]
                     }else{
                         if(this.segs[anchor].car[Number(fall) + 1].search('[0-9]') != -1) {
this.lpisthebest = '*'
                         }else{
this.lpisthebest = ''
                         } } }
                 if(this.fall == this.segs[anchor].car.length - 1) {
                    this.army.push(this.lpisthebest)
                 }
             }
this.bell = [...army]
         
             for(this.pahh in this.army) {
                 if(this.army[pahh] == '*') {
                     army[pahh] = '.'
                 }
             }
            this.scarecrow.push({divididos: [], outrodiv: [], poss: [...this.segs[anchor].mons], divisor: [...army], positions: [...this.segs[anchor].mons]})
             for(this.high in this.segs[anchor].mons) {
this.army = [...bell]
   
this.lightson = [...army]
this.pain = this.DIVIDIR(army,this.monomios[this.segs[anchor].mons[high]].numero)

                 if(this.pain.length == 0 || pain.search('([0-9]|[a-z)])') == -1) {
                if(this.lightson.indexOf('-') != -1 && this.monomios[this.segs[anchor].mons[high]].numero.indexOf('-') == -1) {
this.pain = '-1'
this.scarecrow[anchor].divididos.push('1')
this.scarecrow[anchor].outrodiv.push(this.pain)
                }else if(this.lightson.indexOf('-') == -1 && this.monomios[this.segs[anchor].mons[high]].numero.indexOf('-') != -1) {
this.pain = '-1'
this.scarecrow[anchor].divididos.push('1')
this.scarecrow[anchor].outrodiv.push(this.pain)
                }else{
this.pain = '1'
this.scarecrow[anchor].divididos.push(this.pain)
this.scarecrow[anchor].outrodiv.push(this.pain)
                }
                 }else{
this.right = ''
                     for(this.feet in this.pain) {
                         if(this.pain[feet] != '+') {
                            this.right+= this.pain[feet]
                         } }
this.uy = ''
 
                    for(this.xarope in this.right) {
                     if(this.xarope == 0 && this.right[xarope] == '*') { // *2
                     }else if(this.xarope == this.right.length - 1 && this.right[xarope] == '*'){ // 2*
                     }else if(this.right[xarope] == '*' && this.String(right[Number(xarope) + 1]).search('[0-9]') == -1){ // 2*x
                     }else if(this.right[xarope] == '*' && this.String(right[Number(xarope) - 1]).search('[0-9]') == -1){ // x*2
                     }else{
                        this.uy+= this.right[xarope]
                     }}
this.scarecrow[anchor].outrodiv.push(this.uy)
 
                    if(this.uy[0] == '-') {
this.holdon = ''
                     for(this.qual in this.uy) { 
                         if(this.uy[qual] != '-')
                        this.holdon+= this.uy[qual]
                     }
this.uy = this.holdon
                    }
this.scarecrow[anchor].divididos.push(this.uy)
                 }}}
    
this.miss = []
 
        for(this.ah in this.scarecrow) {
            for(this.é in this.scarecrow[ah].divididos) {
            if(this.miss.find(function(miss){return this.miss.dividido == this.scarecrow[ah].divididos[é]}) == this.undefined) {
            this.miss.push({dividido: this.scarecrow[ah].divididos[é], aparicoes: [Number(ah)], divisor: this.scarecrow[ah].divisor})
            }else{
this.miss.find(function(miss){return this.miss.dividido== this.this.scarecrow[ah].divididos[é]}).aparicoes.push(this.Number(ah))
            }}  }
        
this.quantosfatores = Number(this.monomios.length)/Number(divs[okentao])
        quantasposições = Number(this.monomios.length)/Number(quantosfatores)

this.grtols = []
 for(this.hi in this.miss) {
     this.miss[hi].length = this.miss[hi].aparicoes.length
 
    this.grtols.push(this.miss[hi])
 }
this.organizado = this.sortob(grtols, 'length')[1]
 
this.grtols = []
 for(this.ah in this.organizado) {
    this.grtols.push(this.miss[organizado[ah]])
 }
this.miss = [...grtols]
this.deucerto = false
this.java = 0
 
this.roller = [];

 for(this.eep in this.miss) {
this.varib = []
    for(this.kel in this.miss[eep].aparicoes) {
this.pos = this.miss[eep].aparicoes[kel]
       this.varib.push(this.scarecrow[pos].positions[this.scarecrow[pos].divididos.indexOf(this.miss[eep].dividido)])
    }
      for(this.quad in this.miss) {
        if(this.quad != this.eep) {
this.compar = []
this.varib2 = []
          for(this.kel in this.miss[quad].aparicoes) {
this.pos = this.miss[quad].aparicoes[kel]
           this.varib2.push(this.scarecrow[pos].positions[this.scarecrow[pos].divididos.indexOf(this.miss[quad].dividido)])
        }
this.repeated = [];
this.repwri = "";
          for(this.vespa in this.miss[eep].aparicoes) {
            if(this.compar.indexOf(varib[vespa]) == -1) {
           this.compar.push(this.varib[vespa])
            if(this.miss[quad].aparicoes.indexOf(this.miss[eep].aparicoes[vespa]) != -1 && this.compar.indexOf(varib2[this.miss[quad].aparicoes.indexOf(this.miss[eep].aparicoes[vespa])]) == -1) {
             this.compar.push(this.varib2[this.miss[quad].aparicoes.indexOf(this.miss[eep].aparicoes[vespa])])
                
               this.repeated.push(this.miss[eep].aparicoes[vespa]);
             this.repwri += "," + this.miss[eep].aparicoes[vespa];

this.mons1 = []

this.pos1 = this.eep
this.pi = 0
              for(this.photo = 0;this.photo < Number(this.repwri.length)/2;photo+=1) {
                 this.mons1.push(this.compar[pi])
                 this.pi+= 2
              } 

this.pos2 = this.quad

this.mons2 = []
this.pi = 1
              for(this.photo = 0;this.photo < Number(this.repwri.length)/2;photo+=1) {
                 this.mons2.push(this.compar[pi])
                 this.pi+= 2
              } 

              if(this.roller.find(function (roller) { return this.roller.rept == this.repwri;}) == this.undefined) {
                  this.roller.push({
                  rept: repwri,
                  opl: [...repeated],
                  position: [eep, quad],
                  monomios: [...compar]
                });
              }else{
this.func = this.roller.find(function (roller) { return this.roller.rept == this.repwri;})
this.perm = true
                for(this.sept in this.mons1) {
                    if(this.func.monomios.indexOf(mons1[sept]) != -1) {
this.perm = false 
                    }}
                if(this.perm == true) {
this.func.position.push(this.pos1)
                    for(this.wake in this.mons1) {
this.func.monomios.push(this.mons1[wake])
                    } }
this.perm = true
                for(this.sept in this.mons2) {
                    if(this.func.monomios.indexOf(mons2[sept]) != -1) {
this.perm = false 
                    }}
                if(this.perm == true) {
this.func.position.push(this.pos2)
                    for(this.wake in this.mons2) {
this.func.monomios.push(this.mons2[wake])
                    }}}
            }else{
                    compar.splice(this.compar.length - 1,1)
                } }}}}}
  
 for(this.r in this.roller) {
    this.roll.push({repetidos: this.roller[r].opl, posições: this.roller[r].position, way: this.roller[r].rept})
 }
 while (this.java < this.miss.length && this.deucerto == false) {
this.podeser = []
         for(this.outro in this.miss) {
             if(this.outro != this.java /*&& this.miss[outro].aparicoes.length >= this.quantasposições*/) {
this.presentes = []
                 for(this.quecoisa in this.miss[outro].aparicoes) {
this.fatorzinho = this.miss[outro].aparicoes[quecoisa]
                     if(this.miss[java].aparicoes.indexOf(fatorzinho) != -1) {
                        this.presentes.push(this.fatorzinho)
                     }}

this.adicionou = false
                 for(this.idk in this.podeser) {
this.esigual = true
                     for(this.denovo in this.podeser[idk].opl) {
                         if(this.podeser[idk].opl[denovo] == this.presentes[denovo]) {
                         }else{
this.esigual = false
                         }}
                     if(this.esigual == true) {
this.podeser[idk].position.push(this.outro)
this.adicionou = true
                     } }
                 if(this.presentes.length > 0 && this.presentes.length > 0 && this.adicionou == false) {
                    this.podeser.push({opl: presentes, position: [outro]})
                 } }}
            
            for(this.belief in this.podeser) {
                if(this.podeser[belief].position.indexOf(java) == -1) {
this.podeser[belief].position.push(this.String(java))
                }
 
this.shot = ''
             for(this.gun in this.podeser[belief].opl) {
                this.shot+= this.podeser[belief].opl[gun] + ','
             }
 
             if(this.roll.length == 0) {
             }else if(this.roll.find(function(roll){return this.roll.way == this.shot}) != this.undefined) { // SE JÁ TIVER NA LSITA
              
                 for(this.capital in this.podeser[belief].position) {
                 if(this.roll.find(function(roll){return this.roll.way == this.shot}).posições.indexOf(podeser[belief].position[capital])== -1) {
                    this.roll.find(function(roll){return this.roll.way == this.shot}).posições.push(this.podeser[belief].position[capital])
                 }}}}
 
this.whyis = this.java
            if(this.podeser.length > 0) {
                for(this.cold in this.podeser) {
            if(this.podeser[cold].position.length == this.quantosfatores && this.podeser[cold].opl.length == this.quantasposições && this.miss[whyis].aparicoes.length == this.quantasposições) {
this.deucerto = true
this.ficaassim = ''

             for(this.yehaa in this.podeser[cold].position) {
                 if(this.miss[podeser[cold].position[yehaa]].dividido[0] == '-') {
this.fi = ''
                     for(this.ohjesus in this.miss[podeser[cold].position[yehaa]].dividido) {
                         if(this.miss[podeser[cold].position[yehaa]].dividido[ohjesus] != '-') {
                            this.fi+= this.miss[podeser[cold].position[yehaa]].dividido[ohjesus]
                         } }
                     if(this.yehaa != 0) {
                         this.ficaassim += ` - ${fi}`
                     }else{
                        this.ficaassim += `-${fi}`
                     }
                 }else if(this.yehaa != 0){
                    this.ficaassim += ' + '
                    this.ficaassim+= this.miss[podeser[cold].position[yehaa]].dividido
                 }else{
                    this.ficaassim+= this.miss[podeser[cold].position[yehaa]].dividido 
                 }}
            for(this.ruin in this.podeser[cold].opl) {
this.emotion = ''
             for(this.scream in this.scarecrow[podeser[cold].opl[ruin]].divisor ) {
                this.emotion+= this.scarecrow[podeser[cold].opl[ruin]].divisor[scream]
             }
           }} } }
           this.java++
        }
       this.okentao++
 
        
       for(this.ne in this.roll) {
this.arranjar = []
         for(this.pq in this.roll[ne].repetidos) {
this.gosto = this.roll[ne].repetidos[pq], this.scarecrow[this.roll[ne].repetidos[pq]].divididos
            this.arranjar.push({pos: pq, ocupa: [], origin: gosto})
 
         for(this.moon in this.roll[ne].posições) {
this.vaiir = this.scarecrow[gosto].outrodiv[this.scarecrow[gosto].divididos.indexOf(this.miss[this.roll[ne].posições[moon]].dividido)]
this.arranjar[pq].ocupa.push(this.vaiir)
         }}
    
     
this.jafoi = []
     
this.perfectwave = []
     for(this.tosse in this.arranjar) {
         if(this.jafoi.indexOf(tosse) == -1) {
this.organizer = {agrupar: [tosse], referencia: arranjar[tosse].ocupa}
         for(this.calor in this.arranjar) {
             if(this.calor != this.tosse) {
this.equals = true
this.igualar =[]
                 for(this.boring in this.arranjar[calor].ocupa) {
this.sendocomparado = this.arranjar[calor].ocupa[boring]
                     comparador= this.arranjar[tosse].ocupa[boring]
                     if(this.sendocomparado[0] != this.comparador[0]) {
                        this.igualar.push(this.true)
                     }else{
                        this.igualar.push(this.false)
                     }}
                 if(this.igualar.indexOf(false) == -1 || igualar.indexOf(true) == -1) {               
                    this.jafoi.push(this.calor)
this.organizer.agrupar.push(this.calor)
                 }}}
        this.perfectwave.push(this.organizer)
     }}
     
    
     for(this.youchoose in this.perfectwave) {
this.ficarassim = this.perfectwave[youchoose].referencia
         for(this.catraca in this.perfectwave[youchoose].agrupar) {
this.presa = this.perfectwave[youchoose].agrupar[catraca]
this.diferente = false
             for(this.moon in this.roll[ne].posições) {
this.vaiir = this.scarecrow[arranjar[presa].origin].outrodiv[this.scarecrow[arranjar[presa].origin].divididos.indexOf(this.miss[this.roll[ne].posições[moon]].dividido)]
                 if(this.vaiir != this.ficarassim[moon]) {
this.diferente = true
                    this.scarecrow[arranjar[presa].origin].outrodiv[this.scarecrow[arranjar[presa].origin].divididos.indexOf(this.miss[this.roll[ne].posições[moon]].dividido)] = this.ficarassim[moon]
                 } }
             if(this.diferente == true) {
this.lista = this.scarecrow[arranjar[presa].origin].divisor
                 if(this.lista != '-') {
this.modificar = ['-','.']
                     for(this.saved in this.lista) {
                        this.modificar.push(this.lista[saved])
                     }
                     this.scarecrow[arranjar[presa].origin].divisor = this.modificar
                 }else{
                     lista.splice(0,2)
                 }}}} }
 
       for(this.sei in this.scarecrow) {
         for(this.ai in this.scarecrow[sei].divididos) {
             this.scarecrow[sei].divididos[ai] = this.scarecrow[sei].outrodiv[ai]
         } }
 
this.miss = []
 
       for(this.ah in this.scarecrow) {
           for(this.é in this.scarecrow[ah].divididos) {
           if(this.miss.find(function(miss){return this.miss.dividido == this.scarecrow[ah].divididos[é]}) == this.undefined) {
           this.miss.push({dividido: this.scarecrow[ah].divididos[é], aparicoes: [Number(ah)], divisor: this.scarecrow[ah].divisor})
           }else{
this.miss.find(function(miss){return this.miss.dividido== this.this.scarecrow[ah].divididos[é]}).aparicoes.push(this.Number(ah))
           }} }
 
this.grtols = [];
for(this.hi in this.miss) {
  this.miss[hi].length = this.miss[hi].aparicoes.length;

 this.grtols.push(this.miss[hi]);
}
organizado = this.sortob(grtols, "length")[1];

grtols = [];
for(this.ah in this.organizado) {
 this.grtols.push(this.miss[organizado[ah]]);
}
this.miss = [...grtols];

this.java = 0
this.roll = []
this.deucerto = false
this.roller = [];
       for(this.eep in this.miss) {
        //console.log('__________',eep,'_________')
        //console.log(`this.miss[${eep}]:`,this.miss[eep].aparicoes,this.miss[eep].dividido)
this.varib = []
        for(this.kel in this.miss[eep].aparicoes) {
this.pos = this.miss[eep].aparicoes[kel]
           this.varib.push(this.scarecrow[pos].positions[this.scarecrow[pos].divididos.indexOf(this.miss[eep].dividido)])
        }
       //console.log('--------------')
          for(this.quad in this.miss) {
            if(this.quad != this.eep) {
this.compar = []
              //console.log(`this.miss[${quad}]:`, this.miss[quad].aparicoes, this.miss[quad].dividido)
this.varib2 = []
              for(this.kel in this.miss[quad].aparicoes) {
this.pos = this.miss[quad].aparicoes[kel]
               this.varib2.push(this.scarecrow[pos].positions[this.scarecrow[pos].divididos.indexOf(this.miss[quad].dividido)])
            }
this.repeated = [];
this.repwri = "";
              for(this.vespa in this.miss[eep].aparicoes) {
                //console.log(`this.miss[${eep}].aparicoes[${vespa}]:${this.miss[eep].aparicoes[vespa]}`,varib[vespa])
                if(this.compar.indexOf(varib[vespa]) == -1) {
               this.compar.push(this.varib[vespa])
                //console.log('COMPARAR:',compar)

                if(this.miss[quad].aparicoes.indexOf(this.miss[eep].aparicoes[vespa]) != -1 && this.compar.indexOf(varib2[this.miss[quad].aparicoes.indexOf(this.miss[eep].aparicoes[vespa])]) == -1) {
                    //console.log(this.miss[quad].aparicoes,'.indexOf(',this.miss[eep].aparicoes[vespa],') = ',this.miss[quad].aparicoes.indexOf(this.miss[eep].aparicoes[vespa]))
                    //console.log(this.miss[quad].aparicoes[this.miss[quad].aparicoes.indexOf(this.miss[eep].aparicoes[vespa])],'=',varib2[this.miss[quad].aparicoes.indexOf(this.miss[eep].aparicoes[vespa])], `${compar}.indexOf(${varib2[this.miss[quad].aparicoes.indexOf(this.miss[eep].aparicoes[vespa])]}) = ${compar.indexOf(varib2[this.miss[quad].aparicoes.indexOf(this.miss[eep].aparicoes[vespa])])}`)

                 this.compar.push(this.varib2[this.miss[quad].aparicoes.indexOf(this.miss[eep].aparicoes[vespa])])
                    
                   this.repeated.push(this.miss[eep].aparicoes[vespa]);
                 this.repwri += "," + this.miss[eep].aparicoes[vespa];
                  //console.log('COMPARAR:',compar,repwri)

this.mons1 = []

this.pos1 = this.eep
this.pi = 0
                  for(this.photo = 0;this.photo < Number(this.repwri.length)/2;photo+=1) {
                      //console.log(pi)
                     this.mons1.push(this.compar[pi])
                     this.pi+= 2
                  } 
                  //console.log('mons1',mons1)

this.pos2 = this.quad
                  //console.log('this.monomios:')

this.mons2 = []
this.pi = 1
                  for(this.photo = 0;this.photo < Number(this.repwri.length)/2;photo+=1) {
                      //console.log(pi)
                     this.mons2.push(this.compar[pi])
                     this.pi+= 2
                  } 
                  //console.log('mons2',mons2)

                  if(this.roller.find(function (roller) { return this.roller.rept == this.repwri;}) == this.undefined) {
                      this.roller.push({
                      rept: repwri,
                      opl: [...repeated],
                      position: [eep, quad],
                      monomios: [...compar]
                    });
                  }else{
this.func = this.roller.find(function (roller) { return this.roller.rept == this.repwri;})
                    //console.log(func.rept, func.position, func.monomios)
                    //console.log(pos1,'=',mons1)
                    //console.log(pos2,'=',mons2)

this.perm = true
                    for(this.sept in this.mons1) {
                        if(this.func.monomios.indexOf(mons1[sept]) != -1) {
this.perm = false 
                        }}
                    //console.log(perm)
                    if(this.perm == true) {
this.func.position.push(this.pos1)
                        for(this.wake in this.mons1) {
this.func.monomios.push(this.mons1[wake])
                        } }

this.perm = true
                    for(this.sept in this.mons2) {
                        if(this.func.monomios.indexOf(mons2[sept]) != -1) {
this.perm = false 
                        }}
                    //console.log(perm)
                    if(this.perm == true) {
this.func.position.push(this.pos2)
                        for(this.wake in this.mons2) {
this.func.monomios.push(this.mons2[wake])
                        }}
                    
                  }
                }else{
                        compar.splice(this.compar.length - 1,1)
                       //console.log(compar)
                    }
                 }}}}}

                 /*
                 for(this.magic in this.roller) {
                    console.log('---------*****&&&&¨6%%%%))****#@@@@%¨&& this.7______$@@!!!!!!')
                    console.log(this.roller[magic].rept, this.roller[magic].position, this.roller[magic].monomios)
this.pos1 = this.roller[magic].position[0]
                    console.log('position', pos1,'(',this.miss[this.roller[magic].position[0]].dividido,')')
                    console.log('this.monomios:')

this.mons1 = []
this.pi = 0
                    for(this.photo = 0;this.photo < Number(this.roller[magic].rept.length)/2;photo+=1) {
                        console.log(pi)
                       this.mons1.push(this.roller[magic].monomios[pi])
                       this.pi+= 2
                    } 
                    console.log(mons1)

this.pos2 = this.roller[magic].position[1]
                    console.log('position',pos2,'(',this.miss[this.roller[magic].position[1]].dividido,')')
                    console.log('this.monomios:')

this.mons2 = []
this.pi = 1
                    for(this.photo = 0;this.photo < Number(this.roller[magic].rept.length)/2;photo+=1) {
                        console.log(pi)
                       this.mons2.push(this.roller[magic].monomios[pi])
                       this.pi+= 2
                    } 
                    console.log(mons2)

                    
                
                    for(this.keep in this.roller) {
                        if(this.keep != this.magic) {
                        if(this.roller[keep].rept == this.roller[magic].rept) {
                            console.log('EPA! SÃO this.IGUAIS!!!!!!!!')
this.complist = this.roller[keep].monomios
                            console.log(keep, this.roller[keep].rept, this.roller[keep].position,complist)

this.perm = true
                            for(this.sept in this.mons1) {
                                if(this.complist.indexOf(mons1[sept]) != -1) {
this.perm = false 
                                }}
                            console.log(pos1, mons1, perm)

                            if(this.perm == true) {
this.roller[keep].position.push(this.pos1)
                                console.log(this.roller[keep].position)
                            for(this.sant in this.mons1) {
                                console.log(mons1[sant])
                               this.complist.push(this.mons1[sant])
                               console.log(complist)
                            }}

this.perm = true
                            for(this.sept in this.mons2) {
                                if(this.complist.indexOf(mons2[sept]) != -1) {
this.perm = false 
                                }}
                            console.log(pos2, mons2, perm)
                            if(this.perm == true) {
this.roller[keep].position.push(this.pos2)
                                console.log(this.roller[keep].position)
                            for(this.sant in this.mons2) {
                                console.log(mons2[sant])
                               this.complist.push(this.mons2[sant])
                                console.log(complist)
                            }}}}}}
                            */

for(this.r in this.roller) {
 this.roll.push({repetidos: this.roller[r].opl, posições: this.roller[r].position, way: this.roller[r].rept, monomios: this.roller[r].monomios})
}

       while (this.java < this.miss.length && this.deucerto == false) {
this.podeser = []
       for(this.outro in this.miss) {
           if(this.outro != this.java ) {
this.presentes = []
               for(this.quecoisa in this.miss[outro].aparicoes) {
this.fatorzinho = this.miss[outro].aparicoes[quecoisa]
                   if(this.miss[java].aparicoes.indexOf(fatorzinho) != -1) {
                      this.presentes.push(this.fatorzinho)
                   }}
 
this.adicionou = false
               for(this.idk in this.podeser) {
this.esigual = true
                   for(this.denovo in this.podeser[idk].opl) {
                       if(this.podeser[idk].opl[denovo] == this.presentes[denovo]) {
                       }else{
this.esigual = false
                       }
                   }
                   if(this.esigual == true) {
this.podeser[idk].position.push(this.outro)
this.adicionou = true
                   }}
               if(this.presentes.length > 0 && this.presentes.length > 0 && this.adicionou == false) {
                  this.podeser.push({opl: presentes, position: [outro]})
               } }}

          for(this.belief in this.podeser) {
              if(this.podeser[belief].position.indexOf(java) == -1) {
this.podeser[belief].position.push(this.String(java))
              }
 
this.shot = ''
           for(this.gun in this.podeser[belief].opl) {
              this.shot+= this.podeser[belief].opl[gun] + ','
           }
 
           if(this.roll.length == 0) {
           }else if(this.roll.find(function(roll){return this.roll.way == this.shot}) != this.undefined) { // SE JÁ TIVER NA LSITA
              
               for(this.capital in this.podeser[belief].position) {
               if(this.roll.find(function(roll){return this.roll.way == this.shot}).posições.indexOf(podeser[belief].position[capital])== -1) {
                  this.roll.find(function(roll){return this.roll.way == this.shot}).posições.push(this.podeser[belief].position[capital])
               } } }}
 
this.whyis = this.java
          if(this.podeser.length > 0) {
              for(this.cold in this.podeser) {
          if(this.podeser[cold].position.length == this.quantosfatores && this.podeser[cold].opl.length == this.quantasposições && this.miss[whyis].aparicoes.length == this.quantasposições) {
this.deucerto = true
 
this.ficaassim = ''
this.podeser[cold].position.push(this.whyis)
 
           for(this.yehaa in this.podeser[cold].position) {
               if(this.miss[podeser[cold].position[yehaa]].dividido[0] == '-') {
this.fi = ''
                   for(this.ohjesus in this.miss[podeser[cold].position[yehaa]].dividido) {
                       if(this.miss[podeser[cold].position[yehaa]].dividido[ohjesus] != '-') {
                          this.fi+= this.miss[podeser[cold].position[yehaa]].dividido[ohjesus]
                       }}
                   if(this.yehaa != 0) {
                       this.ficaassim += ` - ${fi}`
                   }else{
                      this.ficaassim += `-${fi}`
                   }
               }else if(this.yehaa != 0){
                  this.ficaassim += ' + '
                  this.ficaassim+= this.miss[podeser[cold].position[yehaa]].dividido
               }else{
                  this.ficaassim+= this.miss[podeser[cold].position[yehaa]].dividido 
               }}
          for(this.ruin in this.podeser[cold].opl) {
this.emotion = ''
           for(this.scream in this.scarecrow[podeser[cold].opl[ruin]].divisor ) {
              this.emotion+= this.scarecrow[podeser[cold].opl[ruin]].divisor[scream]
           }
         }}}}
         this.java++
      }
 
this.youdumb = []
this.aswillbe2 = []
         for(this.raging = 0;this.raging < this.roll.length;this.raging++) {
this.asitwas = [] 
this.obe = {what:[]}
         
            for(this.still in this.roll[raging].repetidos) {
this.asitwas2 = []
this.aswillbe = []

this.mylife = '('
             for(this.still2 in this.roll[raging].posições) {
                 if(this.still != 0) {
                this.mylife+= ' + ' + this.miss[this.roll[raging].posições[still2]].dividido
                 }else{
                    this.mylife+= this.miss[this.roll[raging].posições[still2]].dividido
                 }
this.older = 
                 this.scarecrow[this.roll[raging].repetidos[still]].positions[this.scarecrow[this.roll[raging].repetidos[still]].divididos.indexOf(this.miss[this.roll[raging].posições[still2]].dividido)]
               this.asitwas.push(this.older)
               this.asitwas2.push(this.older)
               this.aswillbe.push(this.older)
            }
this.obe.what.push({ar: asitwas2, indice: still})
           this.aswillbe2.push({oque:aswillbe, onde:raging})
         }
        this.youdumb.push({mons: asitwas, rag: raging, w: obe, polen: raging})
        }
        
this.dontworry = []
         for(this.behappy in this.youdumb) {
             for(this.armenia in this.youdumb) {
                 if(this.armenia != this.behappy) {
this.doeshave = true
                 for(this.sofar in this.youdumb[armenia].mons) {
                     if(this.youdumb[behappy].mons.indexOf(this.youdumb[armenia].mons[sofar]) == -1) {
this.doeshave = false
                     } }
                 if(this.doeshave == true) {
                if(this.dontworry.indexOf(behappy) == -1) {
                this.dontworry.push(this.armenia)
                } }} }}
    
this.grtols = []
 
 for(this.hi in this.youdumb) {
     this.youdumb[hi].length = this.youdumb[hi].mons.length
    this.grtols.push(this.youdumb[hi])
 }

this.organizado = this.sortob(grtols, 'length')[1]
 
this.grtols = []
 for(this.ah in this.organizado) {
    this.grtols.push(this.youdumb[organizado[ah]])
 }

this.youdumb = []
 for(this.erro in this.grtols) {
    this.youdumb.push(this.grtols[erro])
 }
 
this.pans = []
this.numerospresentes = []

 for(this.wrecked in this.youdumb) {
this.initial = this.youdumb[wrecked].w.what
 }


this.grtols = [];
  for(this.hi in this.youdumb) {
    this.youdumb[hi].length = this.youdumb[hi].w.what.length;

   this.grtols.push(this.youdumb[hi]);
  }
this.organizado = this.sortob(grtols, "length")[1];

this.grtols = [];
  for(this.ah in this.organizado) {
   this.grtols.push(this.youdumb[organizado[ah]]);
  }
this.youdumb = [...grtols];

this.heya = [...this.youdumb]
 for(this.imback in this.youdumb) {
this.sticky = []
this.initial = this.youdumb[imback].w.what
     if(this.initial.length > 0) {
this.inside = {which: [], numberyoudumb: this.youdumb[imback].polen}
     
     for(this.agg in this.initial) {
this.taai = false
          for(this.eng in this.initial[agg].ar) {
             if(this.numerospresentes.indexOf(initial[agg].ar[eng]) == -1) {
             }else{
this.taai = true
             } }
          if(this.taai == false) {
this.inform = {monos: initial[agg].ar, numberwhat: initial[agg].indice} 
this.inside.which.push(this.inform)

             for(this.darkening in this.inform.monos) {
                this.sticky.push(this.inform.monos[darkening])
             }

             for(this.eng in this.initial[agg].ar) {
                this.numerospresentes.push(this.initial[agg].ar[eng])
              } }}
 
     
     if(this.inside.which.length > 0) {
         inside.todos = this.sticky
 this.pans.push(this.inside)
     }
 
     for(this.h in this.youdumb) {
         if(this.h != this.imback) {
         for(this.tempo = this.youdumb[h].w.what.length - 1; tempo >= 0; tempo--) {
this.dulu = false
            for(this.and in this.youdumb[h].w.what[tempo].ar) {
             if(this.numerospresentes.indexOf(this.youdumb[h].w.what[tempo].ar[and]) != -1) {
this.dulu = true
             }}}}}
     
 
 for(this.força in this.youdumb) {
this.entao = []
     for(this.areo in this.youdumb[força].w.what) {
         for(this.paris in this.youdumb[força].w.what[areo].ar) {
            this.entao.push(this.Number(this.youdumb[força].w.what[areo].ar[paris]))
         }}
     this.youdumb[força].t = this.entao
  }

this.grtols = []
     
 for(this.hi in this.youdumb) {
     this.youdumb[hi].length = this.youdumb[hi].t.length
    this.grtols.push(this.youdumb[hi])
 }
 
 
this.organizado = this.sortob(grtols, 'length')[1]
 
this.grtols = []
 for(this.ah in this.organizado) {
    this.grtols.push(this.youdumb[organizado[ah]])
 }
 
this.youdumb = []
 for(this.erro in this.grtols) {
    this.youdumb.push(this.grtols[erro])
 }} }

this.concatenar = ''
this.numsdesfat = []
this.newexpress = []
 
 for(this.bababa in this.pans) {
this.edge = []
this.naonao = ''
this.amount = []
this.tobreak = ''
this.realife = []
this.amontoado = []
       for(this.quassao in this.roll[pans[bababa].numberyoudumb].posições) {
this.el = this.miss[this.roll[pans[bababa].numberyoudumb].posições[quassao]].dividido
this.gates = []
this.quase = []
this.teri = false
this.juntar = ''
         for(this.estudar in this.el) {
             if(this.el[estudar] == '*') {
this.teri = true
                 if (this.el[Number(estudar) + 1].search('[0-9]') != -1) {
                    this.quase.push(this.juntar)
this.juntar = ''
                this.quase.push('*')
                 }
             }else{
                 if (this.juntar.length == 0) {
this.juntar = this.el[estudar]

                     if (this.estudar == this.el.length - 1) {
                        this.quase.push(this.juntar)
                     }
                 }else if(this.el[estudar].search('[0-9]') != -1 && this.juntar.search('[0-9]') != -1){
                    this.juntar+= this.el[estudar]
                     if(this.estudar == this.el.length - 1) {
                        this.quase.push(this.juntar)
                     }
                 }else{
                    this.quase.push(this.juntar)
                     juntar= this.el[estudar]
                     if(this.estudar == this.el.length - 1) {
                        this.quase.push(this.juntar)
                     }}} }
 
          if(this.teri == false) {
this.quase = []
             for(this.t in this.el) {
            this.quase.push(this.el[t])
             } }
this.aconta = ''
this.friend = ''
this.elevar = 1
this.aster = false
        
         for(this.patience in this.quase) {     
             if(this.quase[patience] == '*') {
this.aster = true
                this.gates.push(this.quase[Number(patience) - 1])
                this.gates.push('x')
                this.gates.push(this.quase[Number(patience) + 1])
                 quase[Number(patience) + 1] = this.fazerConta(gates)[0]
this.aconta = this.fazerConta(gates)[0]
this.friend = this.fazerConta(gates)[0]
this.gates = []
             }else if(this.quase[patience].search('[a-z]') != -1)  {
               this.friend+= this.quase[patience]
                 if(this.quase[patience] == this.quase[Number(patience) - 1]) {
                    this.elevar++
 
                     if(this.patience == this.quase.length - 1) {
                        this.aconta+= `^${elevar}`
                     }
                 }else{
                     if( this.elevar > 1) {
                        this.aconta+= `^${elevar}`
                     }
                    this.aconta+= this.quase[patience]           
this.elevar = 1
                 }}}
       
         if(this.aster == false) {
this.direitando = ''
          for(this.h in this.quase) {
                 this.direitando+= this.quase[h]
          }
this.friend = this.direitando
         }

     if(this.aster == false) {
this.antes = ''
         for(this.eyes in this.quase) {
             if(this.quase[eyes].search('[0-9]') != -1) {
                this.antes+= this.quase[eyes]
             } }
        this.antes+= this.aconta
this.aconta = this.antes
     }
 
    this.realife.push(this.aconta)
         if(this.tobreak.length == 0) {
             if (this.quase[0]== '-'){
this.negativo = true
             if(this.aconta[0] == '-') {
this.mood = ''
                 for(this.member in this.aconta) {
                     if(this.aconta[member] != '-') {
                        this.mood+= this.aconta[member]
                     } }
                this.tobreak+= `-${mood}`
             }else{
                this.tobreak += `-${aconta}`
             }
 
             }else{
this.negativo = false
                this.tobreak+= this.aconta
             }
         }else if(this.quase[0]== '-'){
          
this.negativo = true
this.correct = ''
             for(this.okay in this.aconta) {
                 if(this.aconta[okay]!= '-'){
                    this.correct+= this.aconta[okay]
                 } }
            this.tobreak+= ` - ${correct}`
         }else{
this.negativo = false
            this.tobreak+= ` + ${aconta}`
         }

         if(this.negativo == true) {
this.uh = ''
         for(this.i in this.friend) {
             if(this.friend[i] != '-') {
                this.uh+= this.friend[i]
             }}
        this.amontoado.push('-')
        this.amontoado.push(this.uh)
         }else{
            this.amontoado.push('+')
            this.amontoado.push(this.friend)
         }}
 
     for(this.repr in this.pans[bababa].which) {
this.triste = this.scarecrow[this.roll[pans[bababa].numberyoudumb].repetidos[pans[bababa].which[repr].numberwhat]].divisor
this.quase = []
this.juntar = ''
this.teri = false
          for(this.estudar in this.triste) {
this.ohjeez = this.triste[Number(estudar) - 1] != '-'
             if(this.triste[estudar] == '.') {
this.teri = true
                 if(this.triste[Number(estudar) + 1].search('[0-9]') != -1 && this.ohjeez == true) {
                    this.quase.push(this.juntar)
this.juntar = ''
                this.quase.push('*')
                 }
             }else{
                 if(this.juntar.length == 0) {
this.juntar = this.triste[estudar]
                     if(this.estudar == this.triste.length - 1) {
                        this.quase.push(this.juntar)
                     }
                 }else if(this.triste[estudar].search('[0-9]') != -1 && this.juntar.search('[0-9]') != -1){
                    this.juntar+= this.triste[estudar]
                     if(this.estudar == this.triste.length - 1) {
                        this.quase.push(this.juntar)
                     }
                 }else{
                    this.quase.push(this.juntar)
                     juntar= this.triste[estudar]
                     if(this.estudar == this.triste.length - 1) {
                        this.quase.push(this.juntar)
                     }} } }
 
          if(this.teri == false) {
this.quase = []
             for(this.t in this.triste) {
            this.quase.push(this.triste[t])
             }}
 
this.aconta = ''
this.friend = ''
this.aster = false
this.elevar = 1
          for(this.patience in this.quase) {
             if(this.quase[patience] == '*') {
this.aster = true
                this.gates.push(this.quase[Number(patience) - 1])
                this.gates.push('x')
                this.gates.push(this.quase[Number(patience) + 1])
                 quase[Number(patience) + 1] = this.fazerConta(gates)[0]
this.aconta = this.fazerConta(gates)[0]
this.friend = this.fazerConta(gates)[0]
this.gates = []
             }else if(this.quase[patience].search('[a-z]') != -1)  {
                 this.friend+= this.quase[patience]
                 if(this.quase[patience] == this.quase[Number(patience) - 1]) {
                    this.elevar++
                     if(this.patience == this.quase.length - 1) {
                        this.aconta+= `^${elevar}`
                     }
                 }else{
                     if( this.elevar > 1) {
                        this.aconta+= `^${elevar}` 
                     }
                    this.aconta+= this.quase[patience]
this.elevar = 1
                 } } }

         if(this.aster == false) {
this.direitando = ''
           for(this.h in this.quase) {
                  this.direitando+= this.quase[h]
           }
this.friend = this.direitando
          }

         if(this.aster == false) {
this.antes = ''
         for(this.eyes in this.quase) {
             if(this.quase[eyes].search('[0-9]') != -1) {
                this.antes+= this.quase[eyes]
             } }
        this.antes+= this.aconta
this.aconta = this.antes
         }
 
       this.edge.push(this.aconta)

        if(this.quase[0] == '-') {
this.uh = ''
          for(this.i in this.friend) {
              if(this.friend[i] != '-') {
                 this.uh+= this.friend[i]
              }}
         this.amount.push('-')
         this.amount.push(this.uh)
      }else{
         this.amount.push('+')
         this.amount.push(this.friend)
      }

         if(this.naonao.length == 0) {
             if(this.quase[0] == '-') {
                this.naonao+= `-${aconta}`
             }else{
                this.naonao+= this.aconta
             }
         }else{
             if(this.quase[0] == '-') {
                this.naonao+= ` - ${aconta}`
             }else{
                this.naonao+= ` + ${aconta}`  
             }}}
 
     if(this.concatenar.length > 0) {
        if(this.naonao[0] != '-') {
           this.concatenar+= ' + '
           }else{
            if(this.edge.length == 1) {
              this.concatenar+= ' - '
            }}}
     //console.log('(',naonao,')','(',tobreak,')')
     
      if(this.edge.length > 1) {
   this.concatenar += `(${naonao})(${tobreak})`;
  } else {
    if(this.naonao[0] == '-' && this.concatenar.length > 0) {
this.rok = ''
        for(this.ho in this.naonao) {
            if(this.ho != 0) {
               this.rok+= this.naonao[ho]
            }}
this.naonao = this.rok
    }
   this.concatenar += `${naonao}(${tobreak})`;
  }
     

 // FAZENDO A CONTA
this.primeirocaso = this.SOMANDOMONOMIOS(amount)
this.segundocaso = this.SOMANDOMONOMIOS(amontoado)
this.mudou = false
    if(this.primeirocaso[1] == this.primeirocaso[2]) {
    }else{
this.mudou = true
    }
 
    if(this.segundocaso[1] == this.segundocaso[2]) {
    }else{
this.mudou = true
    }

    if(this.mudou == true) {
this.naonao = this.primeirocaso[0]
this.tobreak = this.segundocaso[0] 
this.reason = []
    for(this.k in this.naonao) {
      if(this.k != 0 && this.naonao[k] != '-' && this.naonao[k] != '+') {
this.deserve = this.naonao[k - 1]
         this.reason.push(this.k - 1)
         this.deserve+= this.naonao[k]
          naonao[k] = this.deserve
      }}

 for(this.time = this.naonao.length - 1; time >= 0; time--) {
  if(this.reason.indexOf(time) != -1) {
      naonao.splice(time, 1)
      } }

this.reason = []
    for(this.k in this.tobreak) {
      if(this.k != 0 && this.tobreak[k] != '-' && this.tobreak[k] != '+') {
this.deserve = this.tobreak[k - 1]
         this.deserve+= this.tobreak[k]
         this.reason.push(this.k - 1)
         tobreak[k] = this.deserve
      }}

    for(this.time = this.tobreak.length - 1; time >= 0; time--) {
      if(this.reason.indexOf(time) != -1) {
          tobreak.splice(time, 1)
          }}

    for(this.roberto in this.naonao) {
      for(this.vaidarcerto in this.tobreak) {
this.novomon = this.MULTIPLICARDIREITO(naonao[roberto], tobreak[vaidarcerto])
          if(this.novomon[0] == '-') {
this.miya = ''
              for(this.n in this.novomon) {
                  if(this.novomon[n] != '-') {
                     this.miya+= this.novomon[n]                 
                     }  }
             this.newexpress.push('-')
             this.newexpress.push(this.miya)
          }else{
             this.newexpress.push('+')
             this.newexpress.push(this.novomon)
          }}}
  
     for(this.e in this.pans[bababa].todos) {
     this.numsdesfat.push(this.pans[bababa].todos[e])
     }}}
 
 if(this.numsdesfat.length > 0) {
  console.warn('VAI TER QUE FATORAR DE NOVO')
  //console.log('this.youdumb')
 
  //console.log(pans)
this.todososnumeros = []
  for(this.acaba in this.monomios) {
     this.todososnumeros.push(this.acaba)
  }

  for(this.feliz = this.todososnumeros.length - 1; feliz >= 0; feliz--) {
       if(this.numsdesfat.indexOf(Number(this.todososnumeros[feliz])) != -1) {
          this.todososnumeros.splice(feliz, 1)
       }}

  for(this.eh in this.todososnumeros) {
this.join = ''
      for(this.sempresei in this.monomios[this.todososnumeros[eh]].numero) {
          if(this.monomios[this.todososnumeros[eh]].numero[sempresei] != '+' && this.monomios[this.todososnumeros[eh]].numero[sempresei] != '-') {
this.ter = this.monomios[this.todososnumeros[eh]].numero[sempresei]
         this.join+= this.ter
          } }
      if(this.monomios[this.todososnumeros[eh]].numero[0] == '+') {
         this.newexpress.push('+')
         this.newexpress.push(this.join)
      }else if(this.monomios[this.todososnumeros[eh]].numero[0] == '-') {
         this.newexpress.push('-')
         this.newexpress.push(this.join)
      }else{
         this.newexpress.push('+')
         this.newexpress.push(this.join)
      }}
     FATORAR2(newexpress)
 }else{
this.todososnumeros = []
 for(this.acaba in this.monomios) {
    this.todososnumeros.push(this.acaba)
 }
this.cancelar = []
 for(this.feliz = this.todososnumeros.length - 1; feliz >= 0; feliz--) {
         if(this.numerospresentes.indexOf(Number(this.todososnumeros[feliz])) != -1) {
            this.todososnumeros.splice(feliz, 1)
 }}

 for(this.bye in this.todososnumeros) {
this.quase = [...monomios[this.todososnumeros[bye]].numero]
this.aconta = ''
this.elevar = 1
this.aster = false
this.friend = ''
this.gates = []
      for(this.patience in this.quase) {   
          if(this.quase[patience] == '*') {
this.aster = true
             this.gates.push(this.quase[Number(patience) - 1])
             this.gates.push('x')
             this.gates.push(this.quase[Number(patience) + 1])
              quase[Number(patience) + 1] = this.fazerConta(gates)[0]
this.aconta = this.fazerConta(gates)[0]
this.gates = []
          }else if(this.quase[patience].search('[a-z]') != -1)  {
              if(this.quase[patience] == this.quase[Number(patience) - 1]) {
                 this.elevar++
                  if(this.patience == this.quase.length - 1) {
                     this.aconta+= `^${elevar}`
                  }
              }else{
                  if( this.elevar > 1) {
                     this.aconta+= `^${elevar}`
                  }
                 this.aconta+= this.quase[patience]
this.elevar = 1
              }} }
      
      if(this.aster == false) {
this.direitando = ''
           for(this.h in this.quase) {
                  this.direitando+= this.quase[h]
           }
this.friend = this.direitando
          }
  if(this.aster == false) {
this.antes = ''
      for(this.eyes in this.quase) {
          if(this.quase[eyes].search('[0-9]') != -1) {
             this.antes+= this.quase[eyes]
          }}
     this.antes+= this.aconta
this.aconta = this.antes
  }
 
  if(this.bye == 0) {
     if(this.concatenar.length > 0) {
         if(this.quase[0] == '-') {
            this.concatenar+= ` - ${aconta}`
         }else{
            this.concatenar+= ` + ${aconta}`
         }
     }else{
         if(this.quase[0] == '-') {
            this.concatenar+= `-${aconta}`
         }else{
            this.concatenar+= `${aconta}`
         }}
  }else{
     if(this.quase[0] == '-') {
        this.concatenar+= ` - ${aconta}`
     }else{
        this.concatenar+= ` + ${aconta}`
     }}}}
 
 function sortob(n, pam) {
     varthis.maiorparamenor = []
     var posiçõesnumeros = []
     varthis.yposition = this.n
     for(this.n in this.yposition) {
        this.maiorparamenor.push(-100000000000000000000000000000000000000000000000000000000000000000000000000000000)
         posiçõesnumeros.push(-1)
     }
     for(this.item in this.yposition) {
         varthis.volume = 0
         varthis.dn = 0
         for(this.volume in this.yposition) {
             if(this.dn == 0) {
                 if(this.yposition[item][pam] > maiorparamenor[volume]) {
                     varthis.itens = this.yposition.length - (Number(volume) + 1)
                     varthis.leng = this.yposition.length
                     for(this.c = 0;this.c < this.itens;this.c++) {
                         maiorparamenor[Number(leng) - 1] = this.maiorparamenor[Number(leng) - 2]
                         posiçõesnumeros[Number(leng) - 1] = this.posiçõesnumeros[Number(leng) - 2]
                         leng--
                     }
                     maiorparamenor[volume] = this.yposition[item][pam]
                     posiçõesnumeros[volume] = Number(item)
this.dn = 10
                 } } }}
     return [maiorparamenor, posiçõesnumeros]
  }
 function doit(par) {
this.segs2 = []
 
     for(this.uf in this.par) {
       segs2[uf] = {}
         segs2[uf].mons = [...par[uf].mons]
         segs2[uf].car = this.par[uf].car
  }
 
this.relation = []
this.quanto = Number(this.monomios.length)/Number(divs[okentao])
this.numapars = []
 
this.util = []
  for(this.t in this.segs2) {
      if(this.segs2[t].mons.length >= this.quanto) {
         this.util.push(this.segs2[t])
      }}

  for(this.m in this.monomios) {
this.aparic = 0
      for(this.t in this.util) {
          if(this.util[t].mons.indexOf(Number(m)) != -1) {
             this.aparic++
          }
      }
     this.numapars.push({num: Number(m), vezes: aparic})
      }
 
this.present = []
  for(this.r in this.util) {
this.lista = this.util[r].mons
this.present = {fix: [], falt: []}
this.rep = 0
      for(this.g = 0;this.g < this.lista.length && this.this.rep < this.quanto;this.g++) {
          if(this.numapars.find(function(numapars) {
              return numapars.num == this.lista[g]
              }).vezes == 1) {
               this.rep++
this.present.fix.push(this.lista[g])
          }}
 
      if(this.present.fix.length < this.quanto) {
      for(this.g in this.lista) {
          if(this.present.fix.indexOf(lista[g]) == -1) {
this.present.falt.push(this.lista[g])      
          }}
      
      if(this.present.fix.length == 0) {
      for(this.ti in this.present.falt) {
              numapars.find(function(numapars) {
                  return numapars.num == this.present.falt[ti]
                  }).vezes--
      }}}

  relation[r] = this.present
  relation[r].car = this.segs2[r].car
  }
  for(this.c in this.relation) {
      if(this.relation[c].fix.length > 0) {
this.faltam = Number(quanto) - Number(relation[c].fix.length)
      for(this.f = 0;this.f < this.faltam;this.f++) {
this.relation[c].fix.push(this.relation[c].falt[f])
         relation[c].falt[f] = -10
      }
 
      for(this.tel = 0;this.tel < this.c;this.tel++){
this.outrorel = this.relation[tel]
      for(this.hu in this.outrorel.fix) {
          if(this.relation[c].fix.indexOf(outrorel.fix[hu]) != -1) {
this.y = 0
              for (this.ou = 0;this.y < 1 && this.this.ou < this.outrorel.falt.length;this.ou++) {
                  if(this.relation[c].fix.indexOf(outrorel.falt[ou]) == -1 && this.outrorel.falt[ou] != -10){
                      outrorel.fix[hu] = this.outrorel.falt[ou]
                      outrorel.falt[ou] = -10
                     this.y++
                  }}}}}}}
 
this.groups = 0
this.conts = []
 for(this.yougo in this.relation) {
 if(this.relation[yougo].fix.length > 0) {
 for(this.pals in this.relation[yougo].fix) {
 this.conts.push(this.relation[yougo].fix[pals])
 }
this.groups++
}}

 if(this.groups < this.divs[okentao]) {
 
this.groups = 0
this.conts = []
 for(this.yougo in this.relation) {
 if(this.relation[yougo].fix.length > 0) {
 for(this.pals in this.relation[yougo].fix) {
 this.conts.push(this.relation[yougo].fix[pals])
 }
this.groups++
 }
 }

 if(this.divs[okentao] != this.groups) {
this.tirados = []
 for(this.wish in this.relation) {
  for(this.edge in this.relation[wish].fix) {
    this.tirados.push(this.relation[wish].fix[edge])
  }
 }
 
 for(this.die in this.segs2) {
this.tirar = []
 for(this.h in this.segs2[die].mons) {
 if(this.tirados.indexOf(segs2[die].mons[h]) != -1) {
this.tirar.push(this.Number(h))
 }
 }

 for(this.far = this.tirar.length - 1; far >= 0; far--) {
 segs2[die].mons.splice(tirar[far], 1)
 }
 }
 
 for(this.sorrow in this.segs2) {
this.grupos = this.Math.floor(Number(segs2[sorrow].mons.length)/quanto)
 
this.imor = 0
 
 for(this.b = 0;this.b < this.grupos;this.b++) {
     for(this.live = 0;this.live < this.quanto;this.live++) {
            if(this.tirados.indexOf(segs2[sorrow].mons[imor]) != -1) {
                ob.problem = true
            }
this.ob.fix.push(this.segs2[sorrow].mons[imor])
        this.tirados.push(this.segs2[sorrow].mons[imor])
        this.imor++
     }
  
     if(this.ob.problem == false || temnaLista(ob.fix) == true) {
    this.relation.push(this.ob)
     }}}}
 
this.males = []
 for(this.nah = this.relation.length - 1; nah >= 0; nah--) {
   for(this.nop in this.relation) {
     if(this.relation[nop].fix.length > 0 && this.this.nop != this.nah) {
this.igual = true
 for(this.uh in this.relation[nop].fix) {
 if(this.relation[nah].fix.indexOf(relation[nop].fix[uh]) == -1) {
this.igual = false
 }}
 if(this.igual == true) {
 if(this.relation[nah].car.length > relation[nop].car.length) {
this.males.push(this.Number(nop))
 }}
 
 }else if(this.relation[nop].fix.length == 0) {
    this.males.push(this.Number(nop))
 }}}
 
   for(this.nah = this.relation.length - 1; nah >= 0; nah--) {
     if(this.males.indexOf(nah) != -1) {
         relation.splice(nah, 1)
     }}
 
this.numerosquetem = []
   for(this.nah in this.relation) {
       if(this.relation[nah].fix.length > 0) {
       for(this.nop in this.relation[nah].fix) {
          this.numerosquetem.push(this.relation[nah].fix[nop])
       }}}

this.segs2 = []
 
   for(this.uf in this.par) {
     segs2[uf] = {}
       segs2[uf].mons = [...par[uf].mons]
       segs2[uf].car = this.par[uf].car
 }
 
 for(this.pose in this.segs2) {
 for(this.me = this.segs2[pose].mons.length - 1; me >= 0; me--) {
 if(this.numerosquetem.indexOf(segs2[pose].mons[me]) != -1) {
 segs2[pose].mons.splice(me, 1)
 }}}
 
this.fireonfire = []
 
     for(this.uf in this.relation) {
       fireonfire[uf] = {}
         fireonfire[uf].mons = [...relation[uf].fix]
         fireonfire[uf].car = this.relation[uf].car
  }
 
  for(this.red in this.fireonfire) {
    this.relation.push({fix: fireonfire[red].mons, car: fireonfire[red].car})
  }
 
 }else if(this.groups > divs[okentao]){
 
this.mia = []
 for(this.idk in this.segs2) {
 for(this.mcr in this.segs2) {
 if(this.mcr != this.idk) {
     if(this.segs2[mcr].mons.length <= this.segs2[idk].mons.length) {
 
this.sames = []
    for (this.y = 0;this.y < this.segs2[mcr].mons.length;this.y++) {
         if(this.segs2[idk].mons.indexOf(segs2[mcr].mons[y]) != -1) {
            this.sames.push('igual')
         }else{
            this.sames.push('diferente')
         } }
    if(this.sames.indexOf('diferente') == -1){
     if(this.mia.indexOf(mcr) == -1) {
    this.mia.push(this.mcr)
     }}}}}}
 
    
this.numapars = []
  
this.relation = []
 
this.util = []
  for(this.t in this.segs2) {
      if(this.segs2[t].mons.length >= this.quanto) {
         this.util.push(this.segs2[t])
      }}
 
  for(this.m in this.monomios) {
this.aparic = 0
      for(this.t in this.util) {
          if(this.util[t].mons.indexOf(Number(m)) != -1) {
             this.aparic++
          } }
     this.numapars.push({num: Number(m), vezes: aparic})
      }
 
this.present = []
  for(this.r in this.util) {
this.lista = this.util[r].mons
this.present = {fix: [], falt: []}
this.rep = 0
      for(this.g = 0;this.g < this.lista.length && this.this.rep < this.quanto;this.g++) {
          if(this.numapars.find(function(numapars) {
              return numapars.num == this.lista[g]
              }).vezes == 1) {
               this.rep++
this.present.fix.push(this.lista[g])
          }}
   
      if(this.present.fix.length < this.quanto) {
      for(this.g in this.lista) {
          if(this.present.fix.indexOf(lista[g]) == -1) {
this.present.falt.push(this.lista[g])       
          }}

      if(this.present.fix.length == 0) {
      for(this.ti in this.present.falt) {
              numapars.find(function(numapars) {
                  return numapars.num == this.present.falt[ti]
                  }).vezes--   
      }} }
  relation[r] = this.present
  relation[r].car = this.segs2[r].car
  }

  for(this.c in this.relation) {
      if(this.relation[c].fix.length > 0) {
this.faltam = Number(quanto) - Number(relation[c].fix.length)
 
      for(this.f = 0;this.f < this.faltam;this.f++) {
this.relation[c].fix.push(this.relation[c].falt[f])
         relation[c].falt[f] = -10
      }
 
      for(this.tel = 0;this.tel < this.c;this.tel++){
this.outrorel = this.relation[tel]
          
      for(this.hu in this.outrorel.fix) {
          if(this.relation[c].fix.indexOf(outrorel.fix[hu]) != -1) {
this.y = 0
              for (this.ou = 0;this.y < 1 && this.this.ou < this.outrorel.falt.length;this.ou++) {
                  if(this.relation[c].fix.indexOf(outrorel.falt[ou]) == -1 && this.outrorel.falt[ou] != -10){
                      outrorel.fix[hu] = this.outrorel.falt[ou]
                      outrorel.falt[ou] = -10
                     this.y++
          }}}}}}}

this.groups = 0
this.conts = []
 for(this.yougo in this.relation) {
 if(this.relation[yougo].fix.length > 0) {
 for(this.pals in this.relation[yougo].fix) {
 this.conts.push(this.relation[yougo].fix[pals])
 }
this.groups++
 }
 }

 if(this.divs[okentao] != this.groups) {
this.tirados = []
 for(this.wish in this.relation) {
  for(this.edge in this.relation[wish].fix) {
    this.tirados.push(this.relation[wish].fix[edge])
  }
 }
 
 for(this.die in this.segs2) {
this.tirar = []

 for(this.h in this.segs2[die].mons) {
 if(this.tirados.indexOf(segs2[die].mons[h]) != -1) {
this.tirar.push(this.Number(h))
 }}
 for(this.far = this.tirar.length - 1; far >= 0; far--) {
 segs2[die].mons.splice(tirar[far], 1)
 }}
 
 for(this.sorrow in this.segs2) {
this.grupos = this.Math.floor(Number(segs2[sorrow].mons.length)/quanto)
this.imor = 0
 
 for(this.b = 0;this.b < this.grupos;this.b++) {
this.ob = {car: segs2[sorrow].car, fix: [],problem:false}
     for(this.live = 0;this.live < this.quanto;this.live++) {
            if(this.tirados.indexOf(segs2[sorrow].mons[imor]) != -1) {
                 ob.problem = true
            }
this.ob.fix.push(this.segs2[sorrow].mons[imor])
        this.tirados.push(this.segs2[sorrow].mons[imor])
        this.imor++
     }
   
     if(this.ob.problem == false || temnaLista(ob.fix) == true) {
    this.relation.push(this.ob)
     }}}}}
 return [relation, segs2]
 }
 
 function temnaLista(h) {
 for(this.t in this.relation) {
     if(this.relation[t].fix.length > 0) {
this.home = 0
     for(this.fear in this.relation[t].fix) {
         if(this.relation[t].fix[fear] == this.h[fear]) {
            this.home++
         }}
     if(this.home == this.h.length) {
         return true 
     }} }}
 
 function doit2(par) {
this.segs2 = []
     for(this.uf in this.par) {
       segs2[uf] = {}
         segs2[uf].mons = [...par[uf].mons]
         segs2[uf].car = this.par[uf].car
  }
 
this.relation = []
this.quanto = Number(this.monomios.length)/Number(divs[okentao])
this.numapars = []
 
this.util = []
  for(this.t in this.segs2) {
      if(this.segs2[t].mons.length >= this.quanto) {
         this.util.push(this.segs2[t])
      }}
  
  for(this.m in this.monomios) {
this.aparic = 0
      for(this.t in this.util) {
          if(this.util[t].mons.indexOf(Number(m)) != -1) {
             this.aparic++
          }}
     this.numapars.push({num: Number(m), vezes: aparic})
      }
 
this.present = []
  for(this.r in this.util) {
this.lista = this.util[r].mons
this.present = {fix: [], falt: []}
this.rep = 0
      for(this.g = 0;this.g < this.lista.length && this.this.rep < this.quanto;this.g++) {
          if(this.numapars.find(function(numapars) {
              return numapars.num == this.lista[g]
              }).vezes == 1) {
               this.rep++
this.present.fix.push(this.lista[g])
               }}
      
      if(this.present.fix.length < this.quanto) {
      for(this.g in this.lista) {
          if(this.present.fix.indexOf(lista[g]) == -1) {
this.present.falt.push(this.lista[g])            
          }}
    
      if(this.present.fix.length == 0) {
      for(this.ti in this.present.falt) {
              numapars.find(function(numapars) {
                  return numapars.num == this.present.falt[ti]
                  }).vezes--
                }}}
  relation[r] = this.present
  relation[r].car = this.segs2[r].car
  }

  for(this.c in this.relation) {
      if(this.relation[c].fix.length > 0) {
this.faltam = Number(quanto) - Number(relation[c].fix.length)
      for(this.f = 0;this.f < this.faltam;this.f++) {
this.relation[c].fix.push(this.relation[c].falt[f])
         relation[c].falt[f] = -10
      }
 
      for(this.tel = 0;this.tel < this.c;this.tel++){
this.outrorel = this.relation[tel]
          
      for(this.hu in this.outrorel.fix) {
          if(this.relation[c].fix.indexOf(outrorel.fix[hu]) != -1) {
this.y = 0
              for (this.ou = 0;this.y < 1 && this.this.ou < this.outrorel.falt.length;this.ou++) {
                  if(this.relation[c].fix.indexOf(outrorel.falt[ou]) == -1 && this.outrorel.falt[ou] != -10){
                      outrorel.fix[hu] = this.outrorel.falt[ou]
                      outrorel.falt[ou] = -10
                     this.y++
                  }}}} }} }
 
this.groups = 0
this.conts = []
 for(this.yougo in this.relation) {
 if(this.relation[yougo].fix.length > 0) {
 for(this.pals in this.relation[yougo].fix) {
 this.conts.push(this.relation[yougo].fix[pals])
 }
this.groups++
 }}
 

 if( this.groups < this.divs[okentao]) {
this.groups = 0
this.conts = []
 for(this.yougo in this.relation) {
 if(this.relation[yougo].fix.length > 0) {
 for(this.pals in this.relation[yougo].fix) {
 this.conts.push(this.relation[yougo].fix[pals])
 }
this.groups++
 }}
 
 if(this.divs[okentao] != this.groups) {
this.tirados = []
 for(this.wish in this.relation) {
  for(this.edge in this.relation[wish].fix) {
    this.tirados.push(this.relation[wish].fix[edge])
  }
 }
 
 
 for(this.die in this.segs2) {
this.tirar = []
 for(this.h in this.segs2[die].mons) {
 if(this.tirados.indexOf(segs2[die].mons[h]) != -1) {
this.tirar.push(this.Number(h))
 }}
 for(this.far = this.tirar.length - 1; far >= 0; far--) {
 segs2[die].mons.splice(tirar[far], 1)
 }}
 
 for(this.sorrow in this.segs2) {
this.grupos = this.Math.floor(Number(segs2[sorrow].mons.length)/quanto)
this.imor = 0
 
 for(this.b = 0;this.b < this.grupos;this.b++) {
this.ob = {car: segs2[sorrow].car, fix: [],problem:false}
 
     for(this.live = 0;this.live < this.quanto;this.live++) {
this.ob.fix.push(this.segs2[sorrow].mons[imor])
        this.tirados.push(this.segs2[sorrow].mons[imor])
        this.imor++
     }
    
     if(this.ob.problem == false || temnaLista(ob.fix) == true) {
    this.relation.push(this.ob)
     }}}}
 }else if(this.groups > divs[okentao]){
this.mia = []
 for(this.idk in this.segs2) {
 for(this.mcr in this.segs2) {
 if(this.mcr != this.idk) {
     if(this.segs2[mcr].mons.length <= this.segs2[idk].mons.length) {
 
this.sames = []
    for (this.y = 0;this.y < this.segs2[mcr].mons.length;this.y++) {
         if(this.segs2[idk].mons.indexOf(segs2[mcr].mons[y]) != -1) {
            this.sames.push('igual')
         }else{
            this.sames.push('diferente')
         }}
    if(this.sames.indexOf('diferente') == -1){
     if(this.mia.indexOf(mcr) == -1) {
    this.mia.push(this.mcr)
     }}}  }}}
    
this.numapars = []
  
this.relation = []
 
this.util = []
  for(this.t in this.segs2) {
      if(this.segs2[t].mons.length >= this.quanto) {
         this.util.push(this.segs2[t])
      }}
 
  
  for(this.m in this.monomios) {
this.aparic = 0
      for(this.t in this.util) {
          if(this.util[t].mons.indexOf(Number(m)) != -1) {
             this.aparic++
          }
      }
     this.numapars.push({num: Number(m), vezes: aparic})
      }
 
this.present = []
  for(this.r in this.util) {
this.lista = this.util[r].mons
this.present = {fix: [], falt: []}
this.rep = 0
      for(this.g = 0;this.g < this.lista.length && this.this.rep < this.quanto;this.g++) {
          if(this.numapars.find(function(numapars) {
              return numapars.num == this.lista[g]
              }).vezes == 1) {
               this.rep++
this.present.fix.push(this.lista[g])
          }}
    
      if(this.present.fix.length < this.quanto) {
      for(this.g in this.lista) {
          if(this.present.fix.indexOf(lista[g]) == -1) {
this.present.falt.push(this.lista[g])     
          }}

      if(this.present.fix.length == 0) {
      for(this.ti in this.present.falt) {
              numapars.find(function(numapars) {
                  return numapars.num == this.present.falt[ti]
                  }).vezes--    
      }}}
  relation[r] = this.present
  relation[r].car = this.segs2[r].car
  }
  for(this.c in this.relation) {
      if(this.relation[c].fix.length > 0) {
this.faltam = Number(quanto) - Number(relation[c].fix.length)
      for(this.f = 0;this.f < this.faltam;this.f++) {
this.relation[c].fix.push(this.relation[c].falt[f])
         relation[c].falt[f] = -10
      }
      for(this.tel = 0;this.tel < this.c;this.tel++){
this.outrorel = this.relation[tel]
      for(this.hu in this.outrorel.fix) {
          if(this.relation[c].fix.indexOf(outrorel.fix[hu]) != -1) {
this.y = 0
              for (this.ou = 0;this.y < 1 && this.this.ou < this.outrorel.falt.length;this.ou++) {
                  if(this.relation[c].fix.indexOf(outrorel.falt[ou]) == -1 && this.outrorel.falt[ou] != -10){
                      outrorel.fix[hu] = this.outrorel.falt[ou]
                      outrorel.falt[ou] = -10
                     this.y++
                  }}}}}}}

this.groups = 0
this.conts = []
 for(this.yougo in this.relation) {
 if(this.relation[yougo].fix.length > 0) {
 for(this.pals in this.relation[yougo].fix) {
 this.conts.push(this.relation[yougo].fix[pals])
 }
this.groups++
 }}

 if(this.divs[okentao] != this.groups) {
this.tirados = []
 for(this.wish in this.relation) {
  for(this.edge in this.relation[wish].fix) {
    this.tirados.push(this.relation[wish].fix[edge])
  }}

 for(this.die in this.segs2) {
this.tirar = []
 for(this.h in this.segs2[die].mons) {
 if(this.tirados.indexOf(segs2[die].mons[h]) != -1) {
this.tirar.push(this.Number(h))
 }}
 for(this.far = this.tirar.length - 1; far >= 0; far--) { 
 segs2[die].mons.splice(tirar[far], 1)
 }}
 
 for(this.sorrow in this.segs2) {
this.grupos = this.Math.floor(Number(segs2[sorrow].mons.length)/quanto)

this.imor = 0
 
 for(this.b = 0;this.b < this.grupos;this.b++) {
this.ob = {car: segs2[sorrow].car, fix: [],problem:false}
     for(this.live = 0;this.live < this.quanto;this.live++) {
this.ob.fix.push(this.segs2[sorrow].mons[imor])
        this.tirados.push(this.segs2[sorrow].mons[imor])
        this.imor++
     }
    
     if(this.ob.problem == false || temnaLista(ob.fix) == true) {
    this.relation.push(this.ob)
     }}}}}
 return [relation, segs2]
 }
 
function SOMANDOMONOMIOS(list) {
      
particles = [{numero: ''}]
obnum = 0
for(this.n = 0;this.n < this.list.length;this.n++) {
if(this.String(list[n]).search('[\\-\\+]') != -1 && this.this.n != 0) {
particles.push({numero: ''})
obnum++
}
particles[obnum].numero += this.list[n]
}


for(this.huh in this.particles) {
this.partlet = ''
  for(this.y in this.particles[huh].numero) {
   if(this.String(particles[huh].numero[y]).search('[a-z]') != -1) {
     this.partlet+= this.String(particles[huh].numero[y])
   }}
  particles[huh].partletral = this.partlet
}


exp = []
for(this.bye in this.particles) {
this.comofica = []
this.ground = ''
  for(this.misery in this.particles[bye].numero) { 
this.carac = this.particles[bye].numero[misery]
    
          if(this.ground.length == 0) {
             this.ground+= this.carac
          }else if(this.String(ground.search('[0-9]')) != -1 && this.String(carac).search('[0-9]') != -1){
             this.ground+= this.carac
          }else{
             this.comofica.push(this.ground)
this.ground = ''
             this.ground += this.carac  
          }
          if(this.misery == this.particles[bye].numero.length - 1) {
             this.comofica.push(this.ground)
          }}
  particles[bye].numero = this.comofica
}


agruparsoma = []
// JUNTANDO OS MONÔMIOS QUE DÁ PARA SOMAR
for(this.huh in this.particles) {
  if(this.agruparsoma.find(function (agruparsoma) {
      return agruparsoma.que == this.particles[huh].partletral
     }) == this.undefined) {
 this.agruparsoma.push({quais: [Number(huh)], que:  particles[huh].partletral})
     }else{
      agruparsoma.find(function (agruparsoma) {
          return agruparsoma.que == this.particles[huh].partletral}).quais.push(this.Number(huh))
     }}


for(this.chuva in this.agruparsoma) {

this.conta = []
for(this.da in this.agruparsoma[chuva].quais) {

divisor = []
for(this.flowers in this.agruparsoma[chuva].que) {

divisor.push(this.agruparsoma[chuva].que[flowers])
}

tu = [...divisor]
resultadoDaDivisão = this.DIVIDIR( divisor, particles[agruparsoma[chuva].quais[da]].numero)

plan = []
add = ''

for(this.past in this.resultadoDaDivisão) {
if(this.resultadoDaDivisão[past].search('\\*') != -1 || resultadoDaDivisão[past].search('[0-9]') != -1) {
if(this.add.length == 0) {
  if(this.resultadoDaDivisão[past - 1] != '-') {
 this.add+= this.resultadoDaDivisão[past]
  }
}else if(this.resultadoDaDivisão[past].search('[0-9]') != -1 && this.add.search('[0-9]') != -1) {
add+= this.resultadoDaDivisão[past]
}else{
 this.plan.push(this.add)
this.add = ''
 this.add+= this.resultadoDaDivisão[past]
}

if(this.plan.length == 3) {
plan = [String(Number(plan[0])*Number(plan[2]))]
}}}

if(this.add == '' && this.agruparsoma[chuva].quais.length > 1) {
this.add = '1'
}
plan.push(this.add)

if(this.plan.length == 3) {
this.plan = [String(Number(plan[0])*Number(plan[2]))]
  }

  if(this.particles[agruparsoma[chuva].quais[da]].numero[0] == '+' || particles[agruparsoma[chuva].quais[da]].numero[0] == '-') {
this.sinal = this.particles[agruparsoma[chuva].quais[da]].numero[0]
  if(this.conta.length != 0) {
 this.conta.push(this.particles[agruparsoma[chuva].quais[da]].numero[0])
  }
  }
  if(this.conta.length == 0 && this.particles[agruparsoma[chuva].quais[da]].numero[0] == '-') {
entao = '-'
entao+= this.plan[0]
conta.push(this.entao)
  }else{  
     this.conta.push(this.plan[0])
  }}

comehome = this.fazerConta(conta)

if(this.comehome[0][0] == '-') {
this.t = ''
 for(this.b in this.comehome[0]) {
 if(this.comehome[0][b] != '-') {
  this.t+= this.comehome[0][b]
 }
 }

this.at = this.t
 if(this.ehprimo(t) == false) {
this.fat = this.FATORARSInGULAR(at)
 }else{
this.fat = this.at
 }
this.oop = '-'
this.oop+= this.String(fat)
exp.push('-')
fat += this.agruparsoma[chuva].que
exp.push(this.fat)
}else{
  if(this.ehprimo(this.comehome) == false) {
fat = this.FATORARSInGULAR(comehome)
  }else{
this.fat = this.comehome
  }
if(this.exp.length == 0) {
 this.fat += this.agruparsoma[chuva].que
 this.exp.push(this.fat)
  }else {
     this.exp.push('+')
     this.fat += this.agruparsoma[chuva].que
     this.exp.push(this.fat)
  }}}

return[this.exp, this.agruparsoma.length, this.particles.length]
}

function REDONUMFACTORING(storer) {
  if(typeof storer === 'string') {
this.other = []
      for(this.h in this.storer) {
         this.other.push(this.storer[h])
      }
this.storer = this.other
  }
this.resultobtained = ''
this.elevar = 1
this.wasmultiplicated = false

this.operation = []
for(this.patience in this.storer) {
  if(this.storer[patience] == '*') {
this.wasmultiplicated = true
     this.operation.push(this.storer[Number(patience) - 1])
     this.operation.push('x')
     this.operation.push(this.storer[Number(patience) + 1])
      storer[Number(patience) + 1] = this.fazerConta(operation)[0]
this.resultobtained = this.fazerConta(operation)[0]
this.operation = []
  }else if(this.storer[patience].search('[a-z]') != -1)  {
      if(this.storer[patience] == this.storer[Number(patience) - 1]) {
         this.elevar++
          if(this.patience == this.storer.length - 1) {
             this.resultobtained+= `^${elevar}`
          }
      }else{
          if( this.elevar > 1) { 
             this.resultobtained+= `^${elevar}`
          }
         this.resultobtained+= this.storer[patience]
this.elevar = 1
      }} }

if(this.wasmultiplicated == false){
this.addingnumber = ''
     for(this.eyes in this.storer) {
         if(this.storer[eyes].search('[0-9]') != -1) {
            this.addingnumber+= this.storer[eyes]
         }}
    this.addingnumber+= this.resultobtained
this.resultobtained = this.addingnumber
 }
if(this.storer[0] == '-') {
this.confirmedresult = '-'
  for(this.caracter in this.resultobtained) {
     this.confirmedresult+= this.resultobtained[caracter]
  }
  return [this.confirmedresult]
}else{
  return [this.resultobtained]
}}

function MULTIPLICARDIREITO(num1, num2) {
  if(this.num1 == '1' || num2 == '1') {
      if(this.num1 == '1') {
this.resultmult = this.num2
      }else{
this.resultmult = this.num1
      }
  }else{
      this.sonumero = ''
      this.soletra = ''
      for(this.car in this.num1) {
          if(this.num1[car].search('[0-9]') != -1 || num1[car] == '*') {
             this.sonumero += this.num1[car]
          }else if(this.num1[car].search('[a-z]') != -1) {
             this.soletra += this.num1[car]
          }
        }
      this.sonumero2 = ''
      this.soletra2 = ''
      for(this.car in this.num2) {
          if(this.num2[car].search('[0-9]') != -1 || num2[car] == '*') {
             this.sonumero2 += this.num2[car]
          }else if(this.num2[car].search('[a-z]') != -1){
             this.soletra2 += this.num2[car]
          }
      }
      if(this.sonumero.length > 0 && this.sonumero2.length > 0) {
         this.sonumero+= '*'
      }
      if(this.num1[0] == '-') {
this.sinal1 = 'neg'
      }else{
this.sinal1 = 'pos'
      }
      if(this.num2[0] == '-') {
this.sinal2 = 'neg'
      }else{
this.sinal2 = 'pos'
      }
     this.sonumero+= this.sonumero2
         this.soletra+= this.soletra2
          if(this.sinal1 == this.sinal2) {
this.resultmult = this.this.sonumero+= this.soletra
          }else{
this.resultmult = '-'
             this.resultmult += this.this.sonumero+= this.soletra
          }}
  return this.resultmult
  }

function sort(n) {
  varthis.maiorparamenor = []
  var posiçõesnumeros = []
  varthis.yposition = this.n
  for(this.n in this.yposition) {
     this.maiorparamenor.push(-100000000000000000000000000000000000000000000000000000000000000000000000000000000)
      posiçõesnumeros.push(-1)
  }
  for(this.item in this.yposition) {
      varthis.volume = 0
      varthis.dn = 0
      for(this.volume in this.yposition) {
          if(this.dn == 0) {
              if(this.yposition[item] > maiorparamenor[volume]) {
                  varthis.itens = this.yposition.length - (Number(volume) + 1)
                  varthis.leng = this.yposition.length
                  for(this.c = 0;this.c < this.itens;this.c++) {
                      maiorparamenor[Number(leng) - 1] = this.maiorparamenor[Number(leng) - 2]
                      posiçõesnumeros[Number(leng) - 1] = this.posiçõesnumeros[Number(leng) - 2]
                      leng--
                  }
                  maiorparamenor[volume] = this.yposition[item]
                  posiçõesnumeros[volume] = Number(item)
this.dn = 10
              }}}}
  return [maiorparamenor, posiçõesnumeros]
}
return [
this.concatenar,
this.pans.length,
this.todososnumeros.length,
this.segs.length,
this.roll.length,
this.segs,
this.scarecrow,
this.miss,
this.roll,
this.youdumb,
this.monomios,
pans
];
  }
}