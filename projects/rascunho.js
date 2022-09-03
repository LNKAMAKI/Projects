plo = false
    
while (plo == false) {
    seps = SPLITEXPS(okexp)
    rexp =  ''
    chain = []
for (varnot in seps) {
    start = seps[varnot].open
    end = seps[varnot].close
    expin = seps[varnot].exp

  fator1 = FATORAR2(FATORE(seps[varnot].exp))

  daprafator1 = false 
  if (fator1[1] == 1 && fator1[2] == 0) { 
  daprafator1 = true
  }
 chain.push(daprafator1)

  if (varnot == 0) {
    if (start != 0) {
        for (c = 0; c < start;c++) {
            rexp+= okexp[c]
        }}}else{
    for (kl = Number(seps[Number(varnot)- 1].close) + 1; kl < start; kl++) {
        rexp+= okexp[kl]
    }}

    if (daprafator1 == true) {
        rexp+= fator1[0]
    }else{
        rexp+= '(' + expin + ')'
    }
    if (varnot == seps.length - 1) {
        if (end != okexp.length - 1) {
            for (c = Number(end) + 1; c < okexp.length;c++) {
                rexp+= okexp[c]
            }}}}
 okexp = rexp
 if (chain.indexOf(true) == -1) {
    plo = true
    }}