for (eep in miss_2) {
          monspos_ = []
          for (b in miss_2[eep].aparicoes) {
            monpos = scarecrow[miss_2[eep].aparicoes[b]].positions[scarecrow[miss_2[eep].aparicoes[b]].divididos.indexOf(miss_2[eep].dividido)]
            monspos_.push(monpos)
          }
       
    for (quad in miss_2) {
     
      if (quad != eep) {
        
        repeated = [];
        repwri = "";

        monspos2 = []
          for (b in miss_2[quad].aparicoes) {
            
            monpos = scarecrow[miss_2[quad].aparicoes[b]].positions[scarecrow[miss_2[quad].aparicoes[b]].divididos.indexOf(miss_2[quad].dividido)]
            monspos2.push(monpos)
          }
          
          rap = ''

          monspos = []
          result = []
        for (vespa in miss_2[eep].aparicoes) {
          
          cango = true
          monpos = scarecrow[miss_2[eep].aparicoes[vespa]].positions[scarecrow[miss_2[eep].aparicoes[vespa]].divididos.indexOf(miss_2[eep].dividido)]

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
              }
            }
            
          }else{
            
            monspos.splice(monspos.length - 1,1)
          }
          
        }else{
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
            }
          }

          nov = ''
          for (u = novorap.length - 1; u >= 0; u--) {
            nov+= novorap[u]
          }
            rap = nov
          }
        }
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
              }
            }
          }
        }
      }
    }
    
  }