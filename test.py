mins = int(input('minutes to hours:'))
write = 'hours'
write2 = 'minutes'
if mins//60 == 1:
 write = 'hour'
if mins%60 == 1:
 write2 = 'minute'
if mins//60 != 0:
    if mins%60 != 0:
     print(f'this represents {mins//60} {write} and {mins%60} {write2}')
    else:
     print(f'this represents {mins//60} {write}')
else:
 print(f'this represents {mins%60} {write2}')
 
nota = float(input('diga a nota:'))
if nota >= 9:
 print('excelente, espigão!')
elif nota >= 7:
 print('bom')
elif nota >= 5:
 print('mehh')
else:
 print('já era, zé')