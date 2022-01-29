exp = ' 12 x 10 '
console.log(exp)
remodelado = exp.replace(new RegExp('x','g'),'*')
console.log(remodelado)
console.log(remodelado.replace(new RegExp('\\s(?=[0-9]+)','g'),'Number('))
console.log(remodelado.replace(new RegExp('\\s(?=[0-9]+)','g'),'Number('))