
def formatarData(data):
  group = ''
  dataform = []
  for f in range(len(data)):
    c = data[f]
    if c != '/':
      group+= c
      if f == len(data) - 1:
        dataform.append(int(group))
        group = ''
    else:
      dataform.append(int(group))
      group = ''
  return dataform

def ordenarDatas(datas):
  ordenado = []
  positions = []
  for i in range(len(datas)):
    ordenado.append('-')
    positions.append(-1)
  for i in range(len(datas)):
    parar = False
    a = 0
    while a < len(ordenado) and parar == False:
      if ordenado[a] != '-':
       informação = []
       informação.append(ordenado[a][2])
       informação.append(ordenado[a][1])
       informação.append(ordenado[a][0])
  
       informação2 = []
       informação2.append(datas[i][2])
       informação2.append(datas[i][1])
       informação2.append(datas[i][0])
        
       stop = False
  
       e = 0
       while e < len(informação) and stop == False:
         if informação[e] != informação2[e]:
           stop = True
           if informação2[e] > informação[e]:
             for inicio in range(len(ordenado) - 1,a,-1):
               ordenado[inicio] = ordenado[inicio - 1]
               positions[inicio] = positions[inicio - 1]
               
             ordenado[a] = datas[i]
             positions[a] = i
             parar = True
         e+= 1
      else:
        ordenado[a] = datas[i]
        positions[a] = i
        parar = True
      a+= 1
  return [ordenado,positions]
  
def criarArrayPeças(string):
  peças = []
  peça = ''
  for  a in range(len(string)):
    if string[a] == '*':
      peças.append([peça])
      peça = ''
    else:
      peça+= string[a]
      if a == len(string) - 1:
        peças.append([peça])
        peça = ''
  
  for index in range(len(peças)):
    print('peça',index,': ',peças[index])
  
  return peças

def getProperty(prop,peça):

  get = False
  acum = ''
  stop = False
  
  n = 0
  thisOne = False
  while n < len(peça[0]) and stop == False:
    c = peça[0][n]
   
    if c == ':':
      acum = ''
      get = True
    if get == True and c == '|' and thisOne == False:
      get = False
      acum = ''
    elif get == True and c == '|' and thisOne == True:
      stop = True
      return acum
    elif c != ':' and c != ' ':
      acum+= c
      if get == True and n == len(peça[0]) - 1 and thisOne == True:
       stop = True
       return acum 

    if acum == prop:
      thisOne = True
    n+= 1


#peçaseparadas = criarArrayPeças(roupas)
#print(getProperty('data',peçaseparadas[0]))


quantidade = int(input('Digite a quantidade de roupas:'))
peçainforms = ''


for i in range(quantidade):
  print('peça',i)
  properties = ['tamanho','preço','data','cor']
  values = []

  for a in range(len(properties)):
    values.append('')

  peçainforms+= '| '
  for a in range(len(properties)):
    values[a] = input(f'{properties[a]}: ')

  for e in range(len(properties)):
   
    peçainforms+= f'{properties[e]}: {values[e]}'
    if e != len(properties) - 1:
      peçainforms+= ' | '
    else:
      peçainforms+= ' |*'

print('')
print('ARQUIVO:')
armariow = open('armario.txt','a')
armariow.write(peçainforms)
armariow.close()
print(peçainforms)
armarior = open('armario.txt','r')
arqcont = armarior.read()
armarior.close()
print(arqcont)
print('')

peçasLista = criarArrayPeças(arqcont)
#print(getProperty('cor',peçasLista[0]))

dataspeças = []
for i in range(len(peçasLista)):
  date = getProperty('data',peçasLista[i])
  dataspeças.append(formatarData(date))

ordenar = ordenarDatas(dataspeças)
#print(ordenar)

print('')
print('PEÇAS ORDENADAS POR DATA:')
for i in range(len(ordenar[1]) - 1, -1, -1):
  print(peçasLista[ordenar[1][i]])