palavra = 'HEART'
print(palavra)
letra = 'a'
count = 0
index = 'undefined'

for i in range(len(palavra)-1,-1,-1):
    print(i,palavra[i],count)
    if palavra[i].lower() == letra.lower():
        index = count

    count+=1

print(index)