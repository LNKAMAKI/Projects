//CASO VC QUISER TIRAR DEPOIS, TÁ AQUI:
for (eep in miss) {
  for (quad in miss) {
    if (quad != eep) {
      repeated = [];
      repwri = "";
      for (vespa in miss[eep].aparicoes) {
        if (miss[quad].aparicoes.indexOf(miss[eep].aparicoes[vespa]) != -1) {
          repeated.push(miss[eep].aparicoes[vespa]);

          repwri += "," + miss[eep].aparicoes[vespa];

          if (
            roller.find(function (roller) {
              return roller.rept == repwri;
            }) == undefined
          ) {
            roller.push({
              rept: repwri,
              opl: [...repeated],
              position: [eep, quad],
            });
          } else {
            if (
              roller
                .find(function (roller) {
                  return roller.rept == repwri;
                })
                .position.indexOf(eep) == -1
            ) {
              roller
                .find(function (roller) {
                  return roller.rept == repwri;
                })
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