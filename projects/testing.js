function versetem(comp,pam) {
       podeir = true;
       qual = -1;
       for (meow in pam) {
         array1 = [];
         for (d in pam[meow].car) {
           array1.push(pam[meow].car[d]);
         }
         array2 = [];
         for (d in comp) {
           array2.push(comp[d]);
         }
         if (pam[meow].car.length < comp.length) {
           divisao = DIVIDIR(VAI(pam[meow].car), VAI(comp));
         } else {
           divisao = DIVIDIR(VAI(comp), VAI(pam[meow].car));
         }
         if (divisao == "" || divisao == "-") {
           podeir = false;
           qual = meow;
         }}
       return podeir;
     }