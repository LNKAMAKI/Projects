var songs = [
{word: 'lay out',type: 'phrasal verb transitive',meaning: 'to spread something out, or to arrange things so you can see them easily/to explain something carefully and clearly/to arrange something according to a detailed plan, for example rooms in a building, roads in a town, or areas on a piece of land/to spend an amount of money/to hit someone so hard that they fall to the ground and become unconscious',
examples: 'She opened her suitcase and laid her clothes out on the bed*A display of local history material was laid out on the table/The documents lay out the principles clearly enough/The city was laid out with the town hall on a hill in its centre/They had already laid out a substantial sum for the wedding/Joe laid Ken out with one punch' 
},
{word: 'narrow down', type: 'phrasal verb transitive', meaning: 'diminuir,restringir,apertar/to reduce the number of possibilities or choices', examples: '/We’re working to narrow down the list of possible suspects.'},
{word: 'squint', type: 'verb intransitive', meaning: 'apertar os olhos/to close your eyes slightly and try to see something, either because of a bright light or because your eyes do not work very well', examples: '/He squinted at her in the sun'},
{word: 'crisp', type: 'adjective', meaning: 'nítido/crisp food is firm in a pleasant way and makes a noise when you bite it/crisp cloth or paper is smooth, clean, and fresh/crisp weather is pleasant because it is cold and dry/crisp speech or writing is clear and effective/a crisp movement is quick and accurate',
examples:'/The bacon should be crisp and brown*A crisp carrot/He put on a crisp white shirt/A crisp spring day/Her reply was crisp and unemotional/a crisp backhand volley'}
,{word: 'lurk', type: 'verb intransitive', meaning: 'espreitar/to wait, sometimes hiding, in order to frighten, annoy, or attack someone',
examples: '/Why is that woman lurking around?*I saw someone lurking behind the bushes and ran.'
},
{word: 'chill', type: 'verb', meaning: 'calafrio, frio, arrepio, relaxar, esfriar, acalmar/If you chill food or drink, or if it chills, it becomes cold enough to be ready to eat or drink/to make someone feel cold/to make someone feel extremely frightened or worried/if a situation or relationship chills, or if something chills it, it becomes less friendly/to relax and stop being angry or nervous, or to spend time relaxing'
,examples: '/Chill the dessert in the fridge for about two hours*The wine is chilling right now/Chill someone to the bone (=make someone feel very cold): The icy winds had chilled us to the bone/They looked across at me, chilled by what Mark had said/The border dispute between the two countries chilled their relations for decades/I’m just going to chill this weekend.'
},
{word: 'soggy', type: 'adjective', meaning: 'encharcado, úmido/wet and soft, especially in an unpleasant way', examples:'/a soggy afternoon (=an afternoon of rain)'},
{word: 'hind', type: 'adjective', meaning: 'the hind legs or feet of an animal are its back legs or feet', examples: ''}
,{word: 'leap', type: 'verb', meaning: 'to move somewhere suddenly and quickly/to jump into the air or over a long distance/to jump over something/to suddenly improve, increase, or progress/to suddenly change to another time or situation, for example in a film', 
examples: 'She leapt to her feet (=suddenly stood up) when she saw me*The suspect was seen leaping into a car and speeding off*He leapt out of bed/People were forced to leap to safety from the burning building*She leapt into the air with joy/The horse leapt the fence and galloped off down the track/Sales have leapt 43% this quarter/The action then leaps forward to 1989, when Rose is an elderly woman'},
{word: 'rub', type: 'verb', meaning: 'esfregar, massagear', examples: 'The boy rubbed his eyes sleepily*Scott gently rubbed her back until the pain went away*The cat rubbed its cheek against my leg*Rub your hands together, it will help you to stay warm'}
,{word: 'pet peeve', type: 'noun', meaning: 'implicância/something that a particular person finds especially annoying', examples: '/One of my biggest pet peeves is poor customer service'}
,{word: 'doodle', type: 'noun/verb countable', meaning: 'rabisco', examples: 'He was only doodling in the margin*the text was interspersed with doodles'}
,{word: 'dodge ball', type: 'noun', meaning: 'queimada, carimba', examples: 'Let\'s play dodge ball'},
{word: 'badge', type: 'noun', meaning: 'emblema, chachá, distintivo', examples: 'Employees should wear their badges at all times in the building*a scout badge'}
,{word: 'reef', type: 'noun', meaning: 'recife, corais', examples: ''}
,{word: 'attempt', type: 'noun countable/verb', meaning: 'try to do something', examples: 'He attempted to swim the swollen river*It’s his fourth attempt at flying a balloon around the world solo*An attempt on the world record*Their spokesperson has rejected all our attempts to talk to him'}
, {word: 'assembly', type: 'noun', meaning: 'montagem/a part of a government consisting of people who have been elected to make laws/a group of people who meet together for a particular reason', examples: '/the French National Assembly'}
, {word: 'crack of dawn', type: 'noun', meaning: 'amanhecer', examples: 'I was up at the crack of dawn trying to finish my essay'}
,{word: 'nosy', type: 'adjective', meaning: 'curioso', examples: 'Don\'t be nosy'},
{word: 'hurdle', type: 'noun', meaning: 'obstáculo', examples: 'Finding investors is the biggest hurdle we face'}
,{word: 'fierce', type: 'adjective', meaning: 'acirrado, destemido, feroz', examples: 'A fierce storm forced the crew to abandon the yacht*We face fierce competition from overseas competitors*He looked so fierce'}
, {word: 'wondrous', type: 'adjective', meaning: 'maravilhoso', examples: 'what a wondrous place'},
{word: 'prevail over', type: 'verb', meaning: 'prevalecer/to defeat someone in a game, competition, argument', examples: '/The Italian team eventually prevailed over Russia 45 – 43'}
,{word: 'blunder', type: 'noun', meaning: 'mancada, erro/a careless or embarrassing mistake', examples: '/Officials were accused of making a huge administrative blunder'}
,{word: 'template', type: 'noun', meaning: 'modelo, mode, gabarito/something that is used as a pattern or an example for something else', examples: '/The French Revolution was the template for all future revolutions'}
,{word: 'flop', type: 'noun/verb intransitive', meaning: 'fiasco, fracasso/to sit or lie down in a heavy way by relaxing your muscles and letting your body fall/to move or hang in a loose, heavy, and uncontrolled way/if a play, film, or new product flops, it is completely unsuccessful'
,examples: '/He got home and flopped into a chair/Her long hair flopped down over her eyes'}
,{word: 'hover', type: 'verb intransitive',meaning: 'pairar/to be in a state or situation that may change at any time',examples: 'Hover your mouse over the image/His girlfriend is hovering between life and death'}
,{word: 'linger', type: 'verb intransitive', meaning: 'perdurar, atrasar, demorar/to stay somewhere longer than is necessary, or to spend longer doing something than is necessary, because it is enjoyable or helpful to you',
examples:'/Many students lingered after class*She let her eyes linger on him*His face lingered in her memory'}
,{word: 'bound',type: 'adjective/noun', meaning: 'vinculado,ligado,limite/something that is bound to happen will almost certainly happen/having an obligation to do something because of a law, promise/feeling that you should do something because you are expected to, or because it is morally right, even if you do not really want to do it/limits/a long or high jump', 
examples: '/Knowing Jim, he’s bound to be late/By signing the contract you agree to be bound by its terms/We felt bound to tell her that her son had been taking drugs/The business community was allowed – within reasonable bounds – to set whatever pay rates they wanted*investment advice that goes beyond the bounds of good sense'},
{word: 'power plant',type: 'noun', meaning: 'usina', examples: ''},
{word: 'meddling',type: 'noun/verb intransitive', meaning: 'intromissão,interferência/intrometer', examples: '/Stop meddling!'},
{word: 'interest',type: 'noun', meaning: 'interesse, juros', examples: 'We can show you how you can earn a higher rate of interest on your savings'},
{word: 'fire department',type: 'noun', meaning: 'corpo de bombeiros', examples: 'The fire department has been called'},
{word: 'rod',type: 'noun', meaning: 'vara, vareta', examples: 'A fishing rod'},
{word: 'fad',type: 'noun', meaning: '\'modinha\'/something that is popular or fashionable for only a short time', examples: ''},
{word: 'outweigh',type: 'verb transitive', meaning: 'superar,ultrapassar/to be more important, useful, or valuable than something else', examples: '/The possible benefits outweigh the risks involved'},
{word: 'live it up',type: 'phrase', meaning: 'Viver o hoje, sem se preocupar muito com o amanhã/to do enjoyable and exciting things that involve spending a lot of money', examples: ''},
{word: 'lay someone low',type: 'phrase usually passive', meaning: 'to make someone ill or weak and unable to do the things that they usually do', examples: 'He was laid low for two weeks with a virus'},
{word: 'lay low',type: 'phrasal verb', meaning: 'Ao contrário de live it up, ter uma vida mais tranquila, sem ser o centro das atenções', examples: ''},
{word: 'throw under the bus',type: 'informal phrase', meaning: 'betray someone', examples: 'You do realize they might cut a deal and throw you under the bus'},
{word: 'as a matter of fact',type: 'phrase', meaning: 'na realidade', examples: 'I haven’t been here long. As a matter of fact, I just got off the plane yesterday'},
{word: 'income',type: 'noun', meaning: 'renda,rendimento/money that someone gets from working or from investing money', examples: '/These families have no source of income when the harvest is over'},
{word: 'turnover',type: 'noun', meaning: 'rolatividade,volume,faturamento', examples: 'a company with an annual turnover of over £150 million*a high turnover of staff,personnel'},
{word: 'fit the mold',type: 'phrase', meaning: 'to be the right person for a certain activity', examples: 'She doesn’t fit the mold of the typical opera singer.'},
{word: 'wrest',type: 'verb transitive', meaning: 'arrancar/to get land, power, or possessions from someone, usually by fighting', examples: '/Russia wrested control of the northern Caucasus in the 19th century'},
{word: 'up to',type: 'phrase', meaning: 'máximo, até', examples: 'The car drives up to 250 kilometers per hour'},
{word: 'toddler',type: 'noun countable', meaning: 'a very young child who is learning how to walk', examples: ''},
{word: 'get into something',type: 'phrase', meaning: 'to have interest in some activity/to start enjoying something, or to become enthusiastic about it/to begin to discuss something/to be accepted to study at a school or chosen to play for a team', examples: '/You feel shy when you start your speech, but then you get into it*She’s really getting into the Internet/I don’t think we have time to get into that now/he got into one of the top universities in the country'},
{word: 'take up something',type: 'phrase', meaning: 'to start doing something regularly as a habit, job, or interest', examples: 'I took up smoking when I was in high school*Chris has taken up jogging'},
{word: 'undertake',type: 'verb transitive', meaning: 'assumir, comprometer, empreender, realizar', examples: 'State senators undertook to use federal funds for improving schools*The court will undertake a serious examination of the case*It is one of the largest dam projects ever undertaken'},
{word: 'odds and ends',type: 'phrase', meaning: 'things without importance, with no value', examples: ''},
{word: 'swipe',type: 'verb', meaning: 'to steal something/to swing your arm and hit or to try to hit someone or something, using your hand or an object/to move your finger across the screen of a smartphone or tablet', examples: 'Someone swiped my wallet!/She swiped him hard on the side of the head/Simply swipe left or right to change the clock style'},
{word: 'leaps and bounds',type: 'phrase', meaning: 'a passos largos', examples: 'Murray has been working hard at his game and has progressed by leaps and bounds'},
{word: 'smirk',type: 'verb intransitive', meaning: 'to smile in an unpleasant way because something bad has happened to someone else, or because you think you have achieved an advantage over them', examples: ''},
{word: 'grievous',type: 'adjective formal', meaning: 'extremely serious or severe', examples: 'A grievous injury*He has made a grievous error'},
{word: 'smother',type: 'verb transitive', meaning: 'sufocar/to cover someone or something completely/to put out a fire by covering it/to kill someone by covering their face until they stop breathing/to try not to express a feeling/to express your love for someone too much', 
examples: '/The meat was smothered in thick sauce*smother someone with kisses: Linda smothered the child with kisses///Emma smothered a laugh/He accused his mother of smothering him as a child'},
{word: 'pantry',type: 'noun', meaning: 'despensa', examples: ''},
{word: 'mock',type: 'verb', meaning: 'to make someone or something look stupid by laughing at them, copying them, or saying something that is not kind', examples: 'Are you trying to mock me?'},
{word: 'mock up',type: 'phrasal verb', meaning: 'to make a simple copy of something that you will later make or do properly, in order to test it or show people what it will be like', examples: 'I mocked up the toy with cardboard'},
{word: 'mock test',type: 'noun', meaning: 'simulado', examples: ''},
{word: 'thrift store',type: 'noun countable', meaning: 'brechó', examples: ''},
{word: 'churn',type: 'verb', meaning: 'agitar, rotacionar/to mix milk or cream in a special container in order to make butter/churn or churn up: to move something such as a liquid around violently, or to move in this way/if your stomach churns, you have a strong nervous feeling in it because you are worried, afraid, or upset/if your mind or emotions churn, you are upset or worried about a situation', 
examples: '//The churning seas*A hurricane was churning up the bay/My stomach was churning before the first performance/Her mind churned as she tried to think of a way out of her predicament'},
{word: 'knock off',type: 'phrasal verb informal', meaning: 'stop working/murder someone/reduce a price, amount/make something carelessly/steal something/knock someone’s head​,​block off: used for threatening to hit someone and hurt them very badly',
 examples: 'Do you want to knock off early tonight?//They’ll knock some off the price if you pick it up it yourself*Kelly knocked two seconds off her previous time/Forgers can knock off a fake passport in no time/'},
{word: 'knockoff',type: 'noun countable', meaning: 'a bad,inexpensive copy of something', examples: ''},
{word: 'knock it off',type: 'phrase', meaning: 'used for telling someone to stop doing something', examples: ''},
{word: 'retail',type: 'noun/adjective', meaning: 'varejo, retalho, revenda', examples: 'She works in retail/The retail trade,sector'},
{word: 'counterfeit',type: 'adjective', meaning: 'counterfeit money, products, tickets, etc. are illegal copies made in order to trick people', examples: ''},
{word: 'resemble',type: 'verb transitive', meaning: 'to be similar to someone or something, especially in appearance', examples: ' Soldiers are trained under conditions that closely resemble real combat'},
{word: 'ruthless',type: 'adjective', meaning: 'willing to make other people suffer so that you can achieve your goals', 
examples: 'She showed a ruthless determination to succeed in her career*A ruthless dictator,killer'},
{word: 'turn down',type: 'phrasal verb transitive', meaning: 'to not accept an offer or request/to reduce the amount of sound, heat, or light produced by a piece of equipment by pressing a button or moving a switch'
, examples: 'How could you turn down such a fantastic job?/The lights were turned down low'},
{word: '',type: '', meaning: '', examples: ''},
{word: '',type: '', meaning: '', examples: ''},
{word: '',type: '', meaning: '', examples: ''},
{word: '',type: '', meaning: '', examples: ''},
{word: '',type: '', meaning: '', examples: ''},
{word: '',type: '', meaning: '', examples: ''},
{word: '',type: '', meaning: '', examples: ''},
{word: '',type: '', meaning: '', examples: ''},
{word: '',type: '', meaning: '', examples: ''},
{word: '',type: '', meaning: '', examples: ''},
{word: '',type: '', meaning: '', examples: ''},
{word: '',type: '', meaning: '', examples: ''},
{word: '',type: '', meaning: '', examples: ''},
{word: '',type: '', meaning: '', examples: ''},
{word: '',type: '', meaning: '', examples: ''},
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
             psearcher = document.createElement('p')
             psearcher.style.position = 'sticky'
             psearcher.innerText = songs[n].word
             psearcher.setAttribute('class', 'psearcher')
             psearcher.id = 'a' + n
             psearcher.style.fontWeight = 'bold'
             psearcher.setAttribute('onclick', `dothesearch(${psearcher.id.replace('a', '')})`)
            // window.alert(pesquise)
             psearcher.innerHTML = psearcher.innerHTML.replace(new RegExp(`(?<=^|\\W)${pesquise}`,"gi"), `<span style="font-weight: normal";">${pesquise}</span>`)
             document.getElementById('main').appendChild(psearcher)
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
                 psearcher = document.createElement('p')
                 psearcher.style.position = 'sticky'
                 psearcher.innerText = songs[n].word
                 psearcher.setAttribute('class', 'psearcher')
                 psearcher.id = 'a' + n
                 psearcher.style.fontWeight = 'bold'
                 psearcher.setAttribute('onclick', `dothesearch(${psearcher.id.replace('a', '')})`)
                // window.alert(pesquise)
                 psearcher.innerHTML = psearcher.innerHTML.replace(new RegExp(`(?<=\\W)${pesquise}`,"gi"), `<span style="font-weight: normal">${pesquise}</span>`)
                 document.getElementById('main').appendChild(psearcher)
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
             psearcher = document.createElement('p')
             psearcher.style.position = 'sticky'
             psearcher.innerText = songs[n].word
             psearcher.setAttribute('class', 'psearcher')
             psearcher.id = 'a' + n 
             psearcher.style.fontWeight = 'bold'
             psearcher.setAttribute('onclick', `dothesearch(${psearcher.id.replace('a', '')})`)
            // window.alert(pesquise)
             psearcher.innerHTML = psearcher.innerHTML.replace(new RegExp(`${pesquise}`,"gi"), `<span style="font-weight: normal">${pesquise}</span>`)
             document.getElementById('main').appendChild(psearcher)
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