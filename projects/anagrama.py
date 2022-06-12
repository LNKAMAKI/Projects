palavra1 = input('Digite a palavra 1')
palavra2 = input('Digite a palavra 2')

stop = False
n = 0
len2 = len(palavra2)
while n < len(palavra1) and stop == False:
    print(palavra1[n])
    if palavra1[n] in palavra2:
        print('TEM', palavra2.find(palavra1[n]))
        palavra2_modificada = ''

        for o in range(len(palavra2)):
            if o != palavra2.find(palavra1[n]):
                palavra2_modificada+= palavra2[o]

        print(palavra2_modificada)
        palavra2 = palavra2_modificada
    else:
        stop = True
    n+= 1
    

print('palavra2',palavra2,len2,len(palavra1))
if len2 == len(palavra1) and palavra2 == '':
    print('SÃO IGUAIS!')