palavras = ['SCRIPT','SEARCH','COMMIT','ACTION','WINDOW', '-',]
palavras = ['-','GOTHIC']

palavra = palavras[Math.floor(Math.random()*(palavras.length))]
//palavra = 'MANGUE'
//palof = palavra
rits = ['','', '', '', '','']

//window.alert(palavra)
rownum = 0
letnum = 0
palform = []
window.addEventListener('keydown', (event) => {
  digitar(String(event.key.toUpperCase()))
  console.log(String(event.key.toUpperCase()))

})


if (palavras.indexOf(palavra) < palavras.indexOf('-')) {
   console.log(palavras.indexOf(palavra), palavras.indexOf('-'))
   window.alert('A PALAVRA É EM PORTUGUÊS')
}else if (palavras.indexOf(palavra) == palavras.indexOf('-')) {
    
  while (palavras.indexOf(palavra) == palavras.indexOf('-')) {
    palavra = palavras[Math.floor(Math.random()*(palavras.length))]
    palof = palavra
  }
  
  if (palavras.indexOf(palavra) < palavras.indexOf('-')) {
    window.alert('A PALAVRA É EM PORTUGUÊS')
  }else{
    window.alert('A PALAVRA É EM INGLÊS')
  }
}else{
    window.alert('A PALAVRA É EM INGLÊS')
}
palof = palavra


function digitar(letra) {
    if (String(letra).length == 1 && String(letra).search(new RegExp('[A-Z]')) != -1 && letnum <= 5) {
   document.getElementById(rownum).getElementsByClassName('quadradinho')[letnum].innerText = letra
   palform.push(letra)
   letnum++
    }else if(letra == 'BACKSPACE'){
        if (letnum > 0) {
        letnum--
        document.getElementById(rownum).getElementsByClassName('quadradinho')[letnum].innerHTML = '&nbsp;'
        palform.splice(letnum,1)
        }
    }else if(letra == 'ENTER' && palform.length == 6) {
      //  window.alert('ENTER')
      letrig = 0
        for (n = 0; n < palform.length; n++) {
            console.log(palform[n])
           // console.log('letra certa: '+ palavra[n])
            //console.log('-------------------------------------')

            document.getElementById(palform[n]).style.transitionDuration = '1s'
            if (palform[n] == palavra[n]) {
                console.log('está certo')

               // document.getElementById(palavra[n]).style.transitionDuration = '5s'
                document.getElementById(palavra[n]).style.backgroundColor = 'green'
                palavra = palavra.replace(palavra[n], '-')

                document.getElementById(rownum).getElementsByClassName('quadradinho')[n].style.transitionDuration = '1s'
                document.getElementById(rownum).getElementsByClassName('quadradinho')[n].style.backgroundColor = 'green'
                rits[n] = palform[n]


                letrig++
                console.log('PALAVRA:' + palavra)
            }

        }

        for (n = 0; n < palform.length; n++) {
            console.log(palform[n])
            console.log('letra certa: '+ palavra[n])
        
            document.getElementById(palform[n]).style.transitionDuration = '1s'

            if(palavra.search(palform[n]) != -1 && document.getElementById(rownum).getElementsByClassName('quadradinho')[n].style.backgroundColor!= 'green'){

              document.getElementById(rownum).getElementsByClassName('quadradinho')[n].style.transitionDuration = '1s'
                document.getElementById(rownum).getElementsByClassName('quadradinho')[n].style.backgroundColor = 'orange'
                if (rits.indexOf(palform[n]) == -1) {
                document.getElementById(palform[n]).style.backgroundColor = 'orange'
                }
                palavra = palavra.replace(palavra[palavra.search(palform[n])], '-')
               console.log('PALAVRA' + palavra)
           }else if (document.getElementById(rownum).getElementsByClassName('quadradinho')[n].style.backgroundColor!= 'green' && palof.indexOf(palform[n]) == -1) {

            document.getElementById(palform[n]).style.transitionDuration = '1s'
            document.getElementById(palform[n]).style.backgroundColor = 'black'
            document.getElementById(palform[n]).style.color = 'white'
           }

 }

    rownum++
        if (letrig == 6) {
            document.body.style.overflowY = 'hidden'
            document.getElementById('ground').style.visibility = 'visible'
            document.getElementById('cent').style.animation = 'color 1s forwards'
            document.getElementById('props').style.animation = 'goup 1s forwards'
            document.getElementById('pal').innerHTML += `${palof}`
            document.getElementById('pal').style.animation = 'appear 1s 0.7s forwards'

            lft = 0
            del = 0.6
            nums = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7]
            choice = [1, 2]
           dur = [1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4]
           
            for(n = 0; n < 40; n++) {
                star = document.createElement('div')
                if (choice[Math.floor(Math.random()*(choice[choice.length - 1]))] == 1){
                    star.setAttribute('class', 'star')
                        c = 2.5
                    
                }else{
                    star.setAttribute('class', 'star2')
                    c = 3.5
                }


                //star.setAttribute('src', 'star.png')
                star.style.left = `calc(${lft}%)`
              star.style.animationDelay = `${del}s`
              star.style.animationDuration = `${dur[Math.floor(Math.random()*(dur[dur.length - 1]))]}s`
              num1 = ['0', '1', '2', '3', '4', '5', '6','7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
              n1 = num1[Math.floor(num1.length * Math.random())]
              n2 = num1[Math.floor(num1.length * Math.random())]
              n3 = num1[Math.floor(num1.length * Math.random())]
              n4 = num1[Math.floor(num1.length * Math.random())]
              n5 = num1[Math.floor(num1.length * Math.random())]
              n6 = num1[Math.floor(num1.length * Math.random())]
           
               star.style.backgroundColor = `#${n1}${n2}${n3}${n4}${n5}${n6}`
                document.getElementById('ground').appendChild(star)
                del += nums[Math.floor(Math.random()*(nums[nums.length - 1]))]
                del+= 0.1
                lft+= c
            }
        
           tab = document.getElementById('tries')
           tabtrs = tab.getElementsByTagName('tr')

           console.log(tabtrs.length)

           posrit = ['','', '', '', '','']

           for (n = 0; n < tabtrs.length; n++) {
            tabtrs[n].style.animation = `expand 1s ${1.3 + n/3}s forwards`
            //tabtrs[n].innerText = dela

           // console.log(tabtrs[n].getElementsByTagName('td')[0])
           if(n < rownum) {

            ala = 0.5
           for (na = 1; na < tabtrs[n].getElementsByTagName('td').length; na++) {
               console.log(na)
              if (document.getElementById(n).getElementsByClassName('quadradinho')[na - 1].innerText == palof[na - 1]) {
          tabtrs[n].getElementsByTagName('td')[na].innerText = document.getElementById(n).getElementsByClassName('quadradinho')[na - 1].innerText

          tabtrs[n].getElementsByTagName('td')[na].style.transitionDelay = `${ala}s`
          tabtrs[n].getElementsByTagName('td')[na].style.transitionDuration = '0.5s'
          tabtrs[n].getElementsByTagName('td')[na].style.backgroundColor = 'green'
                posrit[na - 1] = palof[na - 1]
                console.log(posrit)
              }else if(posrit[na - 1] != ''){
                 tabtrs[n].getElementsByTagName('td')[na].innerText = posrit[na - 1]
              }
              ala+= 0.5
           }
        }
           }
       
        }else{
            palavra = palof
            letnum = 0
            palform = []
        }
    }
}