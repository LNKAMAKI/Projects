if (somarmons == true) {
    exp = [];
    
    for (bye in ji) {
      for (misery in ji[bye].quais) {
        ground = "";
    
        comofica = [];
        for (b in monomios_2[ji[bye].quais[misery]].numero) {
          carac = monomios_2[ji[bye].quais[misery]].numero[b];
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
            if (b == monomios_2[ji[bye].quais[misery]].numero.length - 1) {
              comofica.push(ground);
            }} }
    
        monomios_2[ji[bye].quais[misery]].numero = comofica;
      }}
    
    for (chuva in ji) {
      conta = [];
      for (da in ji[chuva].quais) {
        divisor = [];
        for (flowers in ji[chuva].que) {
          divisor.push(ji[chuva].que[flowers]);
        }
    
        tu = [...divisor];
        resultadoDaDivisão = DIVIDIR(
          divisor,
          monomios_2[ji[chuva].quais[da]].numero
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
           
            if (plan.length == 3) {
              plan = [String(Number(plan[0]) * Number(plan[2]))];
            } } }
    
        if (add == "" && ji[chuva].quais.length > 1) {
          add = "1";
        }
        plan.push(add);
    
        if (plan.length == 3) {
          plan = [String(Number(plan[0]) * Number(plan[2]))];
        }
    
        if (
          monomios_2[ji[chuva].quais[da]].numero[0] == "+" ||
          monomios_2[ji[chuva].quais[da]].numero[0] == "-"
        ) {
          sinal = monomios_2[ji[chuva].quais[da]].numero[0];
          if (conta.length != 0) {
            conta.push(monomios_2[ji[chuva].quais[da]].numero[0]);
          } }
    
        if (conta.length == 0 && monomios_2[ji[chuva].quais[da]].numero[0] == "-") {
          entao = "-";
          entao += plan[0];
          conta.push(entao);
        } else {
          conta.push(plan[0]);
        }}
    
      comehome = fazerConta(conta);
    
      if (comehome[0][0] == "-") {
        t = "";
        for (b in comehome[0]) {
          if (comehome[0][b] != "-") {
            t += comehome[0][b];
          }}
    
        at = t;
        if (ehprimo(t) == false) {
          fat = FATORARSInGULAR(at);
        } else {
          fat = at;
        }
        oop = "-";
        oop += String(fat);
        exp.push("-");
        fat += ji[chuva].que;
        exp.push(fat);
      } else {
        if (ehprimo(comehome) == false) {
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
        }}}
    
    expression = exp;
    
    //SEPARAnDO OS MOnÔMIOS DEnOVO
    
    monomios_2 = [{ numero: "" }];
    obnum = 0;
    for (n = 0; n < exp.length; n++) {
      if (String(exp[n]).search("[\\-\\+]") != -1 && n != 0) {
        monomios_2.push({ numero: "" });
        obnum++;
      }
      monomios_2[obnum].numero += exp[n];
    }
    
    //
    
    //SEPARAR CORRETAMEnTE OS nÚMEROS
    
    for (bye in monomios_2) {
      comofica = [];
      ground = "";
      for (misery in monomios_2[bye].numero) {
        carac = monomios_2[bye].numero[misery];
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
        if (misery == monomios_2[bye].numero.length - 1) {
          comofica.push(ground);
        }}
      monomios_2[bye].numero = comofica;
    }}