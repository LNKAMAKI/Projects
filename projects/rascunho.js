
  grtols = []
  
  console.log(youdumb_2[0])
  
     for (hi in youdumb_2) {
         youdumb_2[hi].length = youdumb_2[hi].mons.length
     
         grtols.push(youdumb_2[hi])
     }
     
     organizado = sortob(grtols, 'length')[1]
     
     grtols = []
     for (ah in organizado) {
         grtols.push(youdumb_2[organizado[ah]])
        
     }
  
     youdumb_2 = grtols
     console.log(youdumb_2)
  
  lengs = []
  for (i in youdumb_2) {
    if (lengs.find(function(lengs){
      return lengs.leng == youdumb_2[i].mons.length
    }) == undefined){
      lengs.push({leng:youdumb_2[i].mons.length, num: [i]})
    }else{
     lengs.find(function(lengs){
      return lengs.leng == youdumb_2[i].mons.length
    }).num.push(i)
    }
  }
  console.log(lengs)
  
  youdumb_2ordered = []
  for (f in lengs) {
    its = []
    for (i in lengs[f].num) {
      its.push(youdumb_2[lengs[f].num[i]])
    }
  
    grtols = []
     
     for (hi in its) {
       console.log(its[i].w.what.length)
         its[hi].length = its[hi].w.what.length
     
         grtols.push(its[hi])
     }
     
     organizado = sortob(grtols, 'length')[1]
     
     grtols = []
     for (ah in organizado) {
         grtols.push(its[organizado[ah]])
        
     }
  
     its = grtols
    console.log(its)
    for (c in its) {
      youdumb_2ordered.push(its[c])
    }
    console.log('youdumb_2ordered', youdumb_2ordered)
  }
  youdumb_2 = '2'
  