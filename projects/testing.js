/* EEP IN miss_2(FALHO)
for (eep in miss_2) {
  monspos_ = []
  for (b in miss_2[eep].aparicoes) {
    monpos = scarecrow_2[miss_2[eep].aparicoes[b]].positions[scarecrow_2[miss_2[eep].aparicoes[b]].divididos.indexOf(miss_2[eep].dividido)]
    monspos_.push(monpos)
  }
for (quad in miss_2) {
if (quad != eep) {
repeated = [];
repwri = "";
monspos2 = []
  for (b in miss_2[quad].aparicoes) {
    monpos = scarecrow_2[miss_2[quad].aparicoes[b]].positions[scarecrow_2[miss_2[quad].aparicoes[b]].divididos.indexOf(miss_2[quad].dividido)]
    monspos2.push(monpos)
  }

  rap = ''
  monspos = []
  result = []
for (vespa in miss_2[eep].aparicoes) {
  cango = true
  monpos = scarecrow_2[miss_2[eep].aparicoes[vespa]].positions[scarecrow_2[miss_2[eep].aparicoes[vespa]].divididos.indexOf(miss_2[eep].dividido)]

  if (miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa]) != -1) {
    if (monspos.indexOf(monpos) == -1) {
      monspos.push(monpos)
        }else{
          cango = false
        }

    posmon = monspos2[miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa])]
    repeated.push(miss_2[eep].aparicoes[vespa]);
    rap+= ',' + miss_2[eep].aparicoes[vespa]

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

      for (eep in miss_2) {
        varib = []
        for (kel in miss_2[eep].aparicoes) {
            pos = miss_2[eep].aparicoes[kel]
            varib.push(scarecrow_2[pos].positions[scarecrow_2[pos].divididos.indexOf(miss_2[eep].dividido)])
        }
          for (quad in miss_2) {
            if (quad != eep) {
                compar = []
              varib2 = []
              for (kel in miss_2[quad].aparicoes) {
                pos = miss_2[quad].aparicoes[kel]
                varib2.push(scarecrow_2[pos].positions[scarecrow_2[pos].divididos.indexOf(miss_2[quad].dividido)])
            }
              repeated = [];
              repwri = "";
              for (vespa in miss_2[eep].aparicoes) {
                if (compar.indexOf(varib[vespa]) == -1) {
                compar.push(varib[vespa])
                if (miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa]) != -1 && compar.indexOf(varib2[miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa])]) == -1) {
                  compar.push(varib2[miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa])])
                    repeated.push(miss_2[eep].aparicoes[vespa]);
                  repwri += "," + miss_2[eep].aparicoes[vespa];
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
                      monomios_2: [...compar]
                    });
                  }else{
                    func = roller.find(function (roller) { return roller.rept == repwri;})
                    perm = true
                    for (sept in mons1) {
                        if (func.monomios_2.indexOf(mons1[sept]) != -1) {
                           perm = false 
                        }}
                    if (perm == true) {
                        func.position.push(pos1)
                        for (wake in mons1) {
                        func.monomios_2.push(mons1[wake])
                        } }
                    perm = true
                    for (sept in mons2) {
                        if (func.monomios_2.indexOf(mons2[sept]) != -1) {
                           perm = false 
                        }}
                    if (perm == true) {
                        func.position.push(pos2)
                        for (wake in mons2) {
                        func.monomios_2.push(mons2[wake])
                        }}}
                }else{
                        compar.splice(compar.length - 1,1)
                    }}}}}}
                    for (eep in miss_2) {
                      varib = []
                      for (kel in miss_2[eep].aparicoes) {
                          pos = miss_2[eep].aparicoes[kel]
                          varib.push(scarecrow_2[pos].positions[scarecrow_2[pos].divididos.indexOf(miss_2[eep].dividido)])
                      }
                        for (quad in miss_2) {
                          if (quad != eep) {
                              compar = []
                            varib2 = []
                            for (kel in miss_2[quad].aparicoes) {
                              pos = miss_2[quad].aparicoes[kel]
                              varib2.push(scarecrow_2[pos].positions[scarecrow_2[pos].divididos.indexOf(miss_2[quad].dividido)])
                          }
                            repeated = [];
                            repwri = "";
                            for (vespa in miss_2[eep].aparicoes) {
                              if (compar.indexOf(varib[vespa]) == -1) {
                              compar.push(varib[vespa])
                              if (miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa]) != -1 && compar.indexOf(varib2[miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa])]) == -1) {
                                compar.push(varib2[miss_2[quad].aparicoes.indexOf(miss_2[eep].aparicoes[vespa])])
                                  
                                  repeated.push(miss_2[eep].aparicoes[vespa]);
                                repwri += "," + miss_2[eep].aparicoes[vespa];
        
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
          
                                if (roller_2.find(function (roller_2) { return roller_2.rept == repwri;}) == undefined) {
                                     roller_2.push({
                                    rept: repwri,
                                    opl: [...repeated],
                                    position: [eep, quad],
                                    monomios: [...compar]
                                  });
                                }else{
                                  func = roller_2.find(function (roller_2) { return roller_2.rept == repwri;})
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
                                  } }}}}}