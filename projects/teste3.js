var songs = ['are you bored yet?','army of one','ain\'t no sense in love','animals','a head full of dreams', 'amazing day', 'as the world caves in', 'a sky full of stars', 'adventure of a lifetime', 'all i need',
'boulevard of broken dreams','bring me to life','believe','beautiful world','believer', 'birds', 'back for good', 'bad liar','bedshaped', 'bad dream',
'carnival','cancer', 'crawling', 'counting stars', 'clocks', 'charlie brown',
'demons', 'do i wanna know?', 
'eight letters','end of everything','everglow', 'everlasting', 'everybody is changing',
'freeze','fun','flaws','fix you','fall down at your feet','faint', 'feel good', 'fireflies', 'fluorescent adolescent', 'fly on', 'fly me to the moon',
'greatest day', 'gravity','giveaway',
'hurt','happy now','hello','how did it come to this','hold on','hear me now', 'higher power', 'high hopes', 'hold up a light', 'human',
'it\'s my life','i\'d wait for life','if it\'s not love','into the wild', 'i\'m yours', 'in the end',
'julie',
'kidz',
'like a stone','lovelife','leave out all the rest', 'last kiss', 'love love', 'lucid dream', 'lovers in japan','losing my religion',
'my immortal','man','mancunian way','my everything', 'mad house', 'magic', 'my universe',
'natural', 'numb', 'new day', 
'only time', 'one of us', 'one more light',
'paradise', 'patience',
'',
'rule the world','reach out','raven','radioactive', 'rocket man', 'rolling in the deep', 
'shadow of the day','strawberry swing','stressed out','shine','speed of sound','stars', 'stand','sad','said it all', 'skyfall','sign of the times','something just like this', 'sos', 'sing', 'shooting star', 'swing lynn', 'smells like teen spirit', 'somewhere i belong', 'somewhere only we know',
'titanium','the reason','these days','the circus','the flood','the day the work is done','the way i feel','this is the last time', 'the saltwater room', 'to the sky', 'talk', 'the scientist',
'us and ours','ue o muite arukou', 'upside down', 'up and up', 'up all night',
'viva la vida', 'violet hill', 
'waiting for the end','what i\'ve done','where\'s the love?','what\'s love','when we were young','wrecked','what do you want from me','wake me up when september ends','warning sign', 'wonderful world', 'wherever you will go', 'when can i see you again', 
'you\'re not alone','yellow', 'you deserve an oscar', 'you', 
'zombie', 
'505'


]
var songsSearched = []
function search() {
    pesquisa = document.getElementById('searcher').value

    if (songsSearched.indexOf(pesquisa.toLowerCase()) == -1) {
    allvidholders = document.getElementsByClassName('video-holder')
   // window.alert(allvidholders.length)
        songsSearched.unshift(pesquisa.toLowerCase())
        for (n = allvidholders.length - 1; n >= 0; n--) {
        document.body.removeChild(allvidholders[n])
    }
    for (n in songsSearched)  {
        vidhold =  document.createElement('div')
        vidhold.setAttribute('class', 'video-holder')
        vidhold.id = songsSearched[n]
       document.body.appendChild(vidhold)
        vid = document.createElement('div')
        vid.setAttribute('class', 'video')
        vidhold.appendChild(vid)
        p = document.createElement('p')
        p.innerText = songsSearched[n]
        vid.appendChild(p)
        delbut = document.createElement('input')
        delbut.setAttribute('type', 'button')
        delbut.setAttribute('value', 'Deletar')
        delbut.id = n
        delbut.setAttribute('class', 'deletbut')
        delbut.setAttribute('onclick', `deleta(${delbut.id})`)
        vidhold.appendChild(delbut)
 }
}
 
}
  
function dothesearch(whichid) {
    document.getElementById('searcher').value = songs[whichid]
    allps = document.getElementsByClassName('psearcher')
   // window.alert(document.getElementById('a' + whichid))
   for (n = allps.length - 1; n >= 0; n--) {
   document.getElementById('main').removeChild(allps[n])
    }
    search()
}
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


function search2() {
    pesquisa = document.getElementById('searcher').value
   // window.alert(allvidholders.length)
   
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
         if (songs[n].search(new RegExp(`(?<=^)${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
             psearcher = document.createElement('p')
             psearcher.style.position = 'sticky'
             psearcher.innerText = songs[n]
             psearcher.setAttribute('class', 'psearcher')
             psearcher.id = 'a' + n
             psearcher.style.fontWeight = 'bold'
             psearcher.setAttribute('onclick', `dothesearch(${psearcher.id.replace('a', '')})`)
            // window.alert(pesquise)
             psearcher.innerHTML = psearcher.innerHTML.replace(new RegExp(`(?<=^|\\W)${pesquise}`,"gi"), `<span style="font-weight: normal";">${pesquise}</span>`)
             document.getElementById('main').appendChild(psearcher)
             opnumbers++
         }
    }
    if (pesquise.length != 0 && opnumbers == 0) {
        for (n in songs) {
            // window.alert(songs[n])
            // window.alert(songs[n].includes(pesquisa.toLowerCase()))
             pesquise = pesquisa.toLowerCase()
             if (songs[n].search(new RegExp(`(?<![a-z])${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
                 psearcher = document.createElement('p')
                 psearcher.style.position = 'sticky'
                 psearcher.innerText = songs[n]
                 psearcher.setAttribute('class', 'psearcher')
                 psearcher.id = 'a' + n
                 psearcher.style.fontWeight = 'bold'
                 psearcher.setAttribute('onclick', `dothesearch(${psearcher.id.replace('a', '')})`)
                // window.alert(pesquise)
                 psearcher.innerHTML = psearcher.innerHTML.replace(new RegExp(`(?<=\\W)${pesquise}`,"gi"), `<span style="font-weight: normal">${pesquise}</span>`)
                 document.getElementById('main').appendChild(psearcher)
                 opnumbers++
             }
        }
     
    }
 if (pesquise.length != 0 && opnumbers == 0){
    for (n in songs) {
        // window.alert(songs[n])
        // window.alert(songs[n].includes(pesquisa.toLowerCase()))
         pesquise = pesquisa.toLowerCase()
         if (songs[n].search(new RegExp(`${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
             psearcher = document.createElement('p')
             psearcher.style.position = 'sticky'
             psearcher.innerText = songs[n]
             psearcher.setAttribute('class', 'psearcher')
             psearcher.id = 'a' + n
             psearcher.style.fontWeight = 'bold'
             psearcher.setAttribute('onclick', `dothesearch(${psearcher.id.replace('a', '')})`)
            // window.alert(pesquise)
             psearcher.innerHTML = psearcher.innerHTML.replace(new RegExp(`${pesquise}`,"gi"), `<span style="font-weight: normal">${pesquise}</span>`)
             document.getElementById('main').appendChild(psearcher)
             opnumbers++
         }
    }
 }
}