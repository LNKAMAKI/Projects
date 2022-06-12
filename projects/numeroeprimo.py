numero = int(input('DIGITE UM NÚMERO'))

i = 2
parar = False
while i < numero and parar == False:
    print(i)
    if numero%i == 0:
        print('EPA')
        parar = True
    i+= 1

if parar == False:
    print('É Primo')
else:
    print('Não É Primo')