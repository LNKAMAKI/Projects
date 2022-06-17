//  {word: '',type: '', meaning: '', examples: ''},
var songs = [
    {word: 'hunk', type: 'noun countable', meaning: 'a large piece of a solid substance',examples:'a hunk of meat,bread,plastic,concrete'},

]


var songsSearched = []
// Cria o "vídeos"
function search() {
    pesquisa = document.getElementById('searcher').value

    if (songsSearched.indexOf(pesquisa.toLowerCase()) == -1) {
    allvidholders = document.getElementsByClassName('video-holder')
   // window.alert(allvidholders.length)
       songsSearched.length = 0
        songsSearched.unshift(pesquisa.toLowerCase())
        for (n = allvidholders.length - 1; n >= 0; n--) {
        document.body.removeChild(allvidholders[n])
    }
    
        vidhold =  document.createElement('div')
        vidhold.setAttribute('class', 'video-holder')
        vidhold.id = pesquisa.toLowerCase()
        document.body.appendChild(vidhold)
       word =  document.createElement('h1')
       word.innerText = pesquisa.toLowerCase()
       vidhold.appendChild(word)

        wordSearched = songs.find(function(songs){
        return songs.word == pesquisa.toLowerCase()
       })
       type = document.createElement('span')
       type.setAttribute('class', 'tipo')
       type.innerText = `(${wordSearched.type})`
       vidhold.appendChild(type)

       if (wordSearched.examples.length > 0) {
       splitexamples = wordSearched.examples.split('/')
       dosplit = true
       }else{ 
        dosplit = false
       }
       splitmeanings = wordSearched.meaning.split('/')
    
       for (n in splitmeanings) {
       console.log(splitmeanings[n])
       ulist = document.createElement('ul')
       vidhold.appendChild(ulist)
       ulist.setAttribute('type', 'disc')
       lit = document.createElement('li')
       lit.setAttribute('class', 'numb-ex')
       lit.innerText = `${Number(n) + 1}. ` + splitmeanings[n].replace(splitmeanings[n].charAt(0), splitmeanings[n].charAt(0).toUpperCase())
       ulist.appendChild(lit)
       if (dosplit == true) {
       if (n <= splitexamples.length - 1) {
        splitmore = splitexamples[n].split('*')
           for (a in splitmore) {
               if (splitmore[a].length > 0) {
       lit = document.createElement('li')
       lit.innerText = splitmore[a]
       ulist.appendChild(lit)
           }
        }
    }

       }

}
}
}
  
function dothesearch(whichid) {
    document.getElementById('searcher').value = songs[whichid].word
    allps = document.getElementsByClassName('psearcher')
   // window.alert(document.getElementById('a' + whichid))
   for (n = allps.length - 1; n >= 0; n--) {
       if (allps[n].id != 'a' + whichid) {
   document.getElementById('main').removeChild(allps[n])
       }
    }
    search()
}
/*
function deleta(indexnumber) {
    allvidholders = document.getElementsByClassName('video-holder')
    document.body.removeChild(allvidholders[indexnumber])
   
    songsSearched.splice(indexnumber, 1)
    //window.alert(songsSearched)
    //window.alert('Aqui vai...')
    delbuts = document.getElementsByClassName('deletbut')
    for (n in songsSearched) {
       // window.alert(allvidholders[n])
        //window.alert(delbuts[n].value)
        allvidholders[n].id = songsSearched[n]
        delbuts[n].id = n
        delbuts[n].setAttribute('onclick', `deleta(${delbuts[n].id})`)
       
    }
    
 
}
*/


function search2() {
    pnumber = 0
    pesquisa = document.getElementById('searcher').value
   // window.alert(allvidholders.length)
   if (pesquisa.length == 0) {
    document.getElementById('main').style.display = 'none'
   }
   
    //window.alert(pesquisa.toLowerCase())
    allps = document.getElementsByClassName('psearcher')
    //window.alert(allps.length)
    for (n = allps.length - 1; n >= 0; n--) {
   //window.alert(allps[n])
   document.getElementById('main').removeChild(allps[n])
    }
   opnumbers = 0
    for (n in songs) {
        // window.alert(songs[n])
        // window.alert(songs[n].includes(pesquisa.toLowerCase()))
         pesquise = pesquisa.toLowerCase()
         if (songs[n].word.search(new RegExp(`(?<=^)${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
             pnumber++
             psearcher = document.createElement('p')
             psearcher.style.position = 'sticky'
             psearcher.innerText = songs[n].word
             psearcher.setAttribute('class', 'psearcher')
             psearcher.id = 'a' + n
             psearcher.style.fontWeight = 'bold'
             psearcher.setAttribute('onclick', `dothesearch(${psearcher.id.replace('a', '')})`)
            // window.alert(pesquise)
             psearcher.innerHTML = psearcher.innerHTML.replace(new RegExp(`(?<=^|\\W)${pesquise}`,"gi"), `<span style="font-weight: normal";">${pesquise}</span>`)
             if (pnumber < 7) {
             document.getElementById('main').appendChild(psearcher)
             }
             opnumbers++
             document.getElementById('main').style.display = 'block'
         }
    }
    if (pesquise.length != 0 && opnumbers == 0) {
        for (n in songs) {
            // window.alert(songs[n])
            // window.alert(songs[n].includes(pesquisa.toLowerCase()))
             pesquise = pesquisa.toLowerCase()
             if (songs[n].word.search(new RegExp(`(?<![a-z])${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
                pnumber++
                psearcher = document.createElement('p')
                 psearcher.style.position = 'sticky'
                 psearcher.innerText = songs[n].word
                 psearcher.setAttribute('class', 'psearcher')
                 psearcher.id = 'a' + n
                 psearcher.style.fontWeight = 'bold'
                 psearcher.setAttribute('onclick', `dothesearch(${psearcher.id.replace('a', '')})`)
                // window.alert(pesquise)
                 psearcher.innerHTML = psearcher.innerHTML.replace(new RegExp(`(?<=\\W)${pesquise}`,"gi"), `<span style="font-weight: normal">${pesquise}</span>`)
                 if (pnumber < 7) {
                    document.getElementById('main').appendChild(psearcher)
                    }
                 opnumbers++
                 document.getElementById('main').style.display = 'block'
             }
        }
     
    }
 if (pesquise.length != 0 && opnumbers == 0){
    for (n in songs) {
        // window.alert(songs[n])
        // window.alert(songs[n].includes(pesquisa.toLowerCase()))
         pesquise = pesquisa.toLowerCase()
         if (songs[n].word.search(new RegExp(`${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
            pnumber++
             psearcher = document.createElement('p')
             psearcher.style.position = 'sticky'
             psearcher.innerText = songs[n].word
             psearcher.setAttribute('class', 'psearcher')
             psearcher.id = 'a' + n 
             psearcher.style.fontWeight = 'bold'
             psearcher.setAttribute('onclick', `dothesearch(${psearcher.id.replace('a', '')})`)
            // window.alert(pesquise)
             psearcher.innerHTML = psearcher.innerHTML.replace(new RegExp(`${pesquise}`,"gi"), `<span style="font-weight: normal">${pesquise}</span>`)
             if (pnumber < 7) {
                document.getElementById('main').appendChild(psearcher)
                }
             opnumbers++
             document.getElementById('main').style.display = 'block'
         }
    }
 }
 if (opnumbers == 0) {
     document.getElementById('main').style.display = 'none'
 }
}
function fclic() {
    pesquisa = document.getElementById('searcher').value
    if (pesquisa.length == 0) {
     document.getElementById('main').style.display = 'none'
    }
}