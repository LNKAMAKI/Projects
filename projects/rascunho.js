for (chuva in ji) {
  conta = [];

  comehome = fazerConta(conta);
  console.log('I WALK A... I WALK A.... -------------------------',comehome)

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