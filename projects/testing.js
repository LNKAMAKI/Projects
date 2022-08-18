/* EEP IN MISS(FALHO)
for (eep in miss) {
  monspos_ = []
  for (b in miss[eep].aparicoes) {
    monpos = scarecrow[miss[eep].aparicoes[b]].positions[scarecrow[miss[eep].aparicoes[b]].divididos.indexOf(miss[eep].dividido)]
    monspos_.push(monpos)
  }
for (quad in miss) {
if (quad != eep) {
repeated = [];
repwri = "";
monspos2 = []
  for (b in miss[quad].aparicoes) {
    monpos = scarecrow[miss[quad].aparicoes[b]].positions[scarecrow[miss[quad].aparicoes[b]].divididos.indexOf(miss[quad].dividido)]
    monspos2.push(monpos)
  }

  rap = ''
  monspos = []
  result = []
for (vespa in miss[eep].aparicoes) {
  cango = true
  monpos = scarecrow[miss[eep].aparicoes[vespa]].positions[scarecrow[miss[eep].aparicoes[vespa]].divididos.indexOf(miss[eep].dividido)]

  if (miss[quad].aparicoes.indexOf(miss[eep].aparicoes[vespa]) != -1) {
    if (monspos.indexOf(monpos) == -1) {
      monspos.push(monpos)
        }else{
          cango = false
        }

    posmon = monspos2[miss[quad].aparicoes.indexOf(miss[eep].aparicoes[vespa])]
    repeated.push(miss[eep].aparicoes[vespa]);
    rap+= ',' + miss[eep].aparicoes[vespa]

    if (roller.find(function(roller) {return roller.rept == rap}) != undefined) {
      if (cango == true && monspos.indexOf(posmon) == -1) {
      monspos.push(posmon)
      what = roller.find(function(roller) {return roller.rept == rap})
   
    for (h in monspos) {
      if (what.mons.indexOf(monspos[h]) == -1) {
        what.mons.push(monspos[h])
      } }
  }else{
    monspos.splice(monspos.length - 1,1)
  }}else{
    if (monspos.indexOf(posmon) == -1 && cango == true) {
      monspos.push(posmon)
      result.push(monpos)
      result.push(posmon)
  }else{
    if (cango == true) {
      monspos.splice(monspos.length - 1,1)
      }else{
      cango = true
      }
    parar = false
    novorap = ''
    for (h = rap.length - 1; h >= 0; h--) {
      if (rap[h] == ',' && parar == false) {
        parar = true
      }else if(parar == true) {
        novorap+= rap[h]
    }  }

  nov = ''
  for (u = novorap.length - 1; u >= 0; u--) {
    nov+= novorap[u]
  }
    rap = nov
  } }
    repwri = rap          

    if (
      roller.find(function (roller) {
        return roller.rept == repwri;
      }) == undefined
    ) {
      roller.push({
        mons: [...result],
        rept: repwri,
        opl: [...repeated],
        position: [eep, quad]
      });
    } else {
      if (roller.find(function (roller) {return roller.rept == repwri;}).position.indexOf(eep) == -1) {
        roller.find(function (roller) {return roller.rept == repwri;})
          .position.push(eep);
      }
      if (
        roller
          .find(function (roller) {
            return roller.rept == repwri;
          })
          .position.indexOf(quad) == -1
      ) {
        roller
          .find(function (roller) {
            return roller.rept == repwri;
          })
          .position.push(quad);
      }}}}}}}
      */

      for (eep in miss) {
        varib = []
        for (kel in miss[eep].aparicoes) {
            pos = miss[eep].aparicoes[kel]
            varib.push(scarecrow[pos].positions[scarecrow[pos].divididos.indexOf(miss[eep].dividido)])
        }
          for (quad in miss) {
            if (quad != eep) {
                compar = []
              varib2 = []
              for (kel in miss[quad].aparicoes) {
                pos = miss[quad].aparicoes[kel]
                varib2.push(scarecrow[pos].positions[scarecrow[pos].divididos.indexOf(miss[quad].dividido)])
            }
              repeated = [];
              repwri = "";
              for (vespa in miss[eep].aparicoes) {
                if (compar.indexOf(varib[vespa]) == -1) {
                compar.push(varib[vespa])
                if (miss[quad].aparicoes.indexOf(miss[eep].aparicoes[vespa]) != -1 && compar.indexOf(varib2[miss[quad].aparicoes.indexOf(miss[eep].aparicoes[vespa])]) == -1) {
                  compar.push(varib2[miss[quad].aparicoes.indexOf(miss[eep].aparicoes[vespa])])
                    repeated.push(miss[eep].aparicoes[vespa]);
                  repwri += "," + miss[eep].aparicoes[vespa];
                  mons1 = []
                  pos1 = eep
                  pi = 0
                  for (photo = 0; photo < Number(repwri.length)/2;photo+=1) {
                      mons1.push(compar[pi])
                      pi+= 2
                  } 
                  pos2 = quad
                  mons2 = []
                  pi = 1
                  for (photo = 0; photo < Number(repwri.length)/2;photo+=1) {
                      mons2.push(compar[pi])
                      pi+= 2
                  } 
                  if (roller.find(function (roller) { return roller.rept == repwri;}) == undefined) {
                       roller.push({
                      rept: repwri,
                      opl: [...repeated],
                      position: [eep, quad],
                      monomios: [...compar]
                    });
                  }else{
                    func = roller.find(function (roller) { return roller.rept == repwri;})
                    perm = true
                    for (sept in mons1) {
                        if (func.monomios.indexOf(mons1[sept]) != -1) {
                           perm = false 
                        }}
                    if (perm == true) {
                        func.position.push(pos1)
                        for (wake in mons1) {
                        func.monomios.push(mons1[wake])
                        } }
                    perm = true
                    for (sept in mons2) {
                        if (func.monomios.indexOf(mons2[sept]) != -1) {
                           perm = false 
                        }}
                    if (perm == true) {
                        func.position.push(pos2)
                        for (wake in mons2) {
                        func.monomios.push(mons2[wake])
                        }}}
                }else{
                        compar.splice(compar.length - 1,1)
                    }}}}}}
