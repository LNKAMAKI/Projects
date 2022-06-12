lista ='abcdefghijklmnopqrstuvwxyz'
palavra = 'Python'

palavra_ordenada = ''

for i in lista: #percorre a lista(a,b,c,d...)

    if i in palavra.lower(): #se a letra está na string palavra

        for n in range(len(palavra)): #vendo quantas vezes a letra aparece na palavra
           
            if palavra[n].lower() == i:
                palavra_ordenada+= palavra[n] #adicionando a letra à string palavra_ordenada
    
print(palavra_ordenada)