palavra = 'BOLSO'
rownum = 0
letnum = 0
palform = []
function digitar(letra) {
    if (String(letra).length == 1 && letnum <= 4) {
   document.getElementById(rownum).getElementsByClassName('quadradinho')[letnum].innerText = letra
   palform.push(letra)
   letnum++
    }else if(letra == 'BACK'){
        letnum--
        document.getElementById(rownum).getElementsByClassName('quadradinho')[letnum].innerHTML = '&nbsp;'
        palform.splice(letnum,1)
    }else if(letra == 'ENTER' && palform.length == 5) {
      //  window.alert('ENTER')
      letrig = 0
        for (n = 0; n < palform.length; n++) {
            console.log(palform[n])
            console.log('letra certa: '+ palavra[n])
            if (palform[n] == palavra[n]) {
                console.log('está certo')
                palavra = palavra.replace(palavra[n], '-')
                document.getElementById(rownum).getElementsByClassName('quadradinho')[n].style.backgroundColor = 'green'

                letrig++
            }else if(palavra.search(palform[n]) != -1){
                document.getElementById(rownum).getElementsByClassName('quadradinho')[n].style.backgroundColor = 'orange'
                palavra = palavra.replace(palavra[palavra.search(palform[n])], '-')
               // window.alert(palavra)
            }

        }
        if (letrig == 5) {
            window.alert('Parabéns!')
        }else{
            palavra = 'BOLSO'
            letnum = 0
            rownum++
            palform = []
        }
    }
}