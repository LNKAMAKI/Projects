palavra = 'LENTE'
palof = 'LENTE'
rownum = 0
letnum = 0
palform = []
window.addEventListener('keydown', (event) => {
  digitar(String(event.key.toUpperCase()))
  console.log(String(event.key.toUpperCase()))

})
function digitar(letra) {
    if (String(letra).length == 1 && letnum <= 4) {
   document.getElementById(rownum).getElementsByClassName('quadradinho')[letnum].innerText = letra
   palform.push(letra)
   letnum++
    }else if(letra == 'BACKSPACE'){
        if (letnum > 0) {
        letnum--
        document.getElementById(rownum).getElementsByClassName('quadradinho')[letnum].innerHTML = '&nbsp;'
        palform.splice(letnum,1)
        }
    }else if(letra == 'ENTER' && palform.length == 5) {
      //  window.alert('ENTER')
      letrig = 0
        for (n = 0; n < palform.length; n++) {
            console.log(palform[n])
           // console.log('letra certa: '+ palavra[n])
            //console.log('-------------------------------------')
            if (palform[n] == palavra[n]) {
                console.log('está certo')
                palavra = palavra.replace(palavra[n], '-')
                document.getElementById(rownum).getElementsByClassName('quadradinho')[n].style.backgroundColor = 'green'

                letrig++
                console.log('PALAVRA:' + palavra)
            }

        }

        for (n = 0; n < palform.length; n++) {
            console.log(palform[n])
            console.log('letra certa: '+ palavra[n])
        
            if(palavra.search(palform[n]) != -1 && document.getElementById(rownum).getElementsByClassName('quadradinho')[n].style.backgroundColor!= 'green'){
                document.getElementById(rownum).getElementsByClassName('quadradinho')[n].style.backgroundColor = 'orange'
                palavra = palavra.replace(palavra[palavra.search(palform[n])], '-')
               console.log('PALAVRA' + palavra)
           }

 }

        if (letrig == 5) {
            document.getElementById('cent').style.animation = 'color 1s forwards'
            document.getElementById('props').style.animation = 'goup 1s forwards'
            document.getElementById('pal').innerHTML += `<span style="color: blue;">${palof}</span>`

            lft = 0
            del = 0.9
            nums = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5]
            choice = [1, 2]
            for(n = 0; n < 33; n++) {
                star = document.createElement('div')
                if (choice[Math.floor(Math.random()*(choice[choice.length - 1]))] == 1){
                    star.setAttribute('class', 'star')
                }else{
                    star.setAttribute('class', 'star2')
                }
                //star.setAttribute('src', 'star.png')
                star.style.left = `calc(${lft}%)`
              star.style.animationDelay = `${del}s`
              num1 = ['0', '1', '2', '3', '4', '5', '6','7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
              n1 = num1[Math.floor(num1.length * Math.random())]
              n2 = num1[Math.floor(num1.length * Math.random())]
              n3 = num1[Math.floor(num1.length * Math.random())]
              n4 = num1[Math.floor(num1.length * Math.random())]
              n5 = num1[Math.floor(num1.length * Math.random())]
              n6 = num1[Math.floor(num1.length * Math.random())]
           
               star.style.backgroundColor = `#${n1}${n2}${n3}${n4}${n5}${n6}`
                document.getElementById('ground').appendChild(star)
                lft += 3
                del+= nums[Math.floor(Math.random()*(nums[nums.length - 1]))]

           
            }
           
        }else{
            palavra = palof
            letnum = 0
            rownum++
            palform = []
        }
    }
}