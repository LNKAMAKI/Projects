// digite aqui seu programa
var H, M, S, T;
scanf("%d%d%d%d","H","M","S","T");
var Hf = H + T/3600;
var Mf = M +  (T% 3600)/60;
var Sf = S + (T% 3600) % 60;
 // printf("%d\n", Hf);
  // printf("%d\n",Mf);
 //  printf("%d\n", Sf);

if (Sf > 59) {
 Mf +=  Math.floor(Sf/60); 
  Sf = Sf%60;
}
 //printf("%d\n",Mf);
  // printf("%d\n", Sf);

if (Mf > 59) {
    Hf +=  Math.floor(Mf/60);
     Mf = Mf%60;
   }
printf("%d\n",Hf/24);
//printf("%d",Hf/24);
   printf("%d\n", Hf);
   printf("%d\n",Mf);
   printf("%d\n", Sf);
   