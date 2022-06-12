#Se tiver 7 dígitos, por exemplo, 7891015, deve-se acrescentar 9 na frente, e se já tiver 8 dígitos, não precisa

numero = input('Número de Celular')
print(numero)

#Tirando os espaços e traços
numero_socomnumeros = ''
for i in range(len(numero)):
    print(numero[i])
    if numero[i] != ' ' and numero[i] != '-':
        numero_socomnumeros+= numero[i]

print(numero_socomnumeros)


#Vendo se precisa ou não adicionar 9 na frente
ir = True
if len(numero_socomnumeros) == 7:

    numero_com_9 = '9'
    for n in numero_socomnumeros:
         numero_com_9+= n
    numero_socomnumeros = numero_com_9

elif len(numero_socomnumeros) != 8:
    ir = False
    print('NÚMERO INVÁLIDO')



#Colocando o traço
if ir:
  print(numero_socomnumeros)
 
  index = 0
  numero_com_traço = ''
  for a in range(0,9,1):
    if a != 4:
     numero_com_traço+= numero_socomnumeros[index]
     index += 1
    else:
     numero_com_traço+= '-'

  print(numero_com_traço)
    
