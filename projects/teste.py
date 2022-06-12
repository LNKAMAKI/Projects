lista = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

palavra = 'Python'

palavra_ordenada = ''

for i in range(len(lista)): #percorre a lista(a,b,c,d...)

    if lista[i] in palavra.lower(): #se a letra está na string palavra

        for n in range(len(palavra)): #vendo quantas vezes a letra aparece na palavra
           
            if palavra[n].lower() == lista[i]:
                palavra_ordenada+= palavra[n] #adicionando a letra à string palavra_ordenada
    
print(palavra_ordenada)