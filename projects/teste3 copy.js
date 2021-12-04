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
,{word: 'bound',type: 'adjective/noun', meaning: 'vinculado, ligado, limite/something that is bound to happen will almost certainly happen/having an obligation to do something because of a law, promise/feeling that you should do something because you are expected to, or because it is morally right, even if you do not really want to do it/limits/a long or high jump', 
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
{word: 'turn in',type: 'phrasal verb', meaning: 'entregar/to return something to the person it belongs to, especially something that was lost or was lent to you/to give something to the person who has officially asked for it or who is in charge/to tell the police about someone, or to take them to the police, because they have committed a crime/to go to bed at night/to produce a particular amount or degree of something/To point, curve, or fold something inwards', 
examples: '/She turned in the lost wallet at the local police station*Someone may have turned your briefcase in to the lost-and-found department/You’re the only person who hasn’t turned in their report for the quarter/His own brother turned him in*She turned herself in to local police//Bicknell turned in a fine all-around performance/Turn your toes in, like this'},
{word: 'shareholder',type: 'noun', meaning: 'acionista', examples: ''},
{word: 'footage',type: 'noun', meaning: 'filmagem/Length, extent, or amount based on measurement in feet/Recorded film or video, especially of a specified nature or subject', 
examples: '/estimated the square footage of new office space/news footage; detailed footage of the royal wedding'},
{word: 'dunk',type: 'verb/noun', meaning: 'enterrada, enterrar, afundar, molhar', examples: ''},
{word: 'spool',type: 'noun', meaning: 'carretel,rolo', examples: ''},
{word: 'ton',type: 'noun', meaning: 'tonelada', examples: ''},
{word: 'plow',type: 'noun/verb', meaning: 'arar,arado', examples: ''},
{word: 'prep',type: 'noun/adjective/verb', meaning: 'preparação,preparar', examples: 'Prepping for a radio interview'},
{word: 'drill',type: 'verb/noun', meaning: 'perfuração, furadeira, furar, perfurar, treinamento, simulação', 
examples: 'Fire drill: a practice of the emergency procedures to be used in case of fire'},
{word: 'backbone',type: 'noun', meaning: 'coluna vertebral, espinha dorsal, firmeza, sustentação', 
examples: 'The backbone of a thesis'},
{word: 'revenue',type: 'noun', meaning: 'receita, rendimento', examples: ''},
{word: 'jack up',type: 'verb', meaning: 'increase/raise something, especially a vehicle, with a jack/inject oneself with an illegal drug', 
examples: 'Ad rates will be jacked up to $3600 a month/Jack the car up until the wheel can spin freely/We stepped over people jacking up in the street outside'},
{word: 'finicky',type: 'adjective', meaning: 'minuncioso/extremely or excessively particular, exacting, or meticulous in taste or standards', 
examples: '/finicky eater(picky eater)'},
{word: 'hatchery',type: 'noun', meaning: 'incubadora', examples: ''},
{word: 'subscribe',type: 'verb ', meaning: 'assinar, firmar, concordar, inscrever/to pay money to an organization in order to receive a product, use a service regularly, or support the organization',
examples: '/2.3 million people subscribe to this online music service*She subscribes to several women\'s magazines*I subscribe €10 a month to the charity'},
{word: 'infuriating',type: 'adjective', meaning: 'irritante,revoltante', examples: 'It\'s infuriating when people keep spelling your name wrong, isn\'t it?'},
{word: 'markup',type: 'noun', meaning: 'marcação', examples: ''},
{word: 'pity',type: 'noun', meaning: 'piedade,compaixão,pena', 
examples: 'The girl stood gazing in, with pity at the old lion in the cage*She agreed to go out with him more out of pity than anything*Can\'t you go to the party? Oh, that\'s (such) a pity*It\'s a pity (that) children spend so little time outside nowadays*I felt deep pity for the lost dog'},
{word: 'commander-in-chief',type: 'noun', meaning: 'comandante-chefe', examples: ''},
{word: 'overtake',type: 'verb', meaning: 'to go past something by being a greater amount or degree/to come from behind another vehicle or a person and move in front of them', 
examples: 'Our US sales have now overtaken our sales in Europe*We\'d planned to hold a meeting tomorrow, but events have overtaken us (= things have changed)/Always check your rear view mirror before you overtake (another car)'},
{word: 'sight',type: 'noun/verb', meaning: 'vista, visão, mira/to suddenly see something or someone', 
examples: '/After days at sea, the sailors finally sighted land'},
{word: 'sightsee',type: 'verb intransitive', meaning: 'to visit interesting places, especially when on holiday', 
examples: 'In the summer, more people come to sightsee'},
{word: 'poultry',type: 'noun uncountable', meaning: 'birds, such as chickens, that are bred for their eggs and meat', examples: ''},
{word: 'lawsuit',type: 'noun', meaning: 'demand/a court case for enforcing a right or claim', 
examples: '/The homeowner filed a lawsuit against the moving company that was refusing to be held responsible for damaging her furniture'},
{word: 'loan',type: 'noun/verb', meaning: 'empréstimo, emprestar, crédito', 
examples: 'Thank you very much for the loan of your bike*This library loans books and CDs'},
{word: 'chunk',type: 'noun', meaning: 'pedaço/a roughly cut piece/a part of something, especially a large part', 
examples: '/a chunk of cheese, meat/a chunk of text'},
{word: 'cram', type: 'phrasal verb/verb', meaning: 'to force a lot of things into a small space/to try to learn a lot very quickly before an exam', 
examples: 'Eight children were crammed into the back of the car/She\'s cramming for her history exam'},
{word: 'frostbite',type: 'noun uncountable', meaning: 'injury to someone caused by severe cold, usually to their toes, fingers, ears, or nose, that causes permanent loss of tissue', examples: ''},
{word: 'claim',type: 'verb', meaning: 'afirmar, reivindicar, alegar', 
examples: 'The company claims (that) it is not responsible for the pollution in the river'},
{word: 'packet',type: 'adjective', meaning: 'lotado(de pessoas)', examples: ''},
{word: 'bend',type: 'verb', meaning: 'curvar', examples: ''},
{word: 'bend the truth',type: 'phrase', meaning: 'to say something that is not true or that misleads people but that is usually not regarded as a serious or harmful lie', 
examples: 'When he tells people he\'s from Manhattan he\'s bending the truth a little since he really grew up in Brooklyn'},
{word: 'shortage',type: 'noun countable', meaning: 'a situation in which there is not enough of something', 
examples: 'There\'s a shortage of food and shelter in the refugee camps'},
{word: 'strip',type: 'verb/noun', meaning: 'to remove, pull, or tear the covering or outer layer from something/tira/to remove clothing from', 
examples: 'The paintwork was so bad that we decided to strip off all the paint and start again/now tear the paper into strips and fold them up carefully/The men were ordered to strip'},
{word: 'torn off',type: 'noun', meaning: 'arrancado', examples: 'It was worth almost having your ear torn off'},
{word: 'shred',type: 'noun', meaning: 'a very small amount of something/a very small, thin piece that has been torn from something', 
examples: 'There\'s still a shred of hope that a peace agreement can be reached*There isn\'t a shred of evidence to support her accusation/There isn\'t a shred of evidence to support her accusation'},
{word: 'thign',type: 'noun', meaning: 'coxa', examples: ''},
{word: 'broaden',type: 'verb', 
meaning: 'ampliar, expandir/if your smile broadens, it becomes wider because you are happy/if your accent broadens, you start to speak with a more noticeable accent', 
examples: 'The street broadened into a square*The scope of the book has been broadened to include the history of Eastern Europe/His smile broadened when he saw her/As he grew angrier, his accent broadened'},
{word: 'cue',type: 'noun countable', meaning: 'an event, action, or statement that tells someone indirectly that they should do something', 
examples: ' Greg’s arrival seemed to be the cue for everyone to get up and start dancing'},
{word: 'pin',type: 'noun countable/verb', meaning: 'alfinete, broche/to fasten or attach with or as with a pin or pins/to hold fast in a spot or position (sometimes followed by down)', 
examples: '/to pin two pieces of cloth together/The debris pinned him down'},
{word: 'rendezvous',type: 'noun countable', 
meaning: 'a meeting arranged for a particular time and place, especially secretly/the place where people have agreed to meet',
 examples: ''},
{word: 'dish out',type: 'phrasal verb transitive', 
meaning: 'to give things to a number of people/to serve food/if someone dishes out something such as criticism or punishment, they criticize or punish someone severely/if you can\'t take it, don\'t dish it out', 
examples: 'Some doctors are dishing out drugs their patients do not need/He was dishing out a chicken stew/He’s always ready to dish out criticism/If you don\'t like being criticized, don\'t do it to other people'},
{word: 'dish the dirt',type: 'phrase informal', meaning: 'to tell people what you know about someone, especially things that could damage their reputation', examples: ''},
{word: 'rat out',type: 'phrasal verb informal', meaning: 'to expose someone or something in a bad way', 
examples: 'The news reporter ratted out the people who were involved with the scandal'},
{word: 'water down',type: 'phrasal verb transitive', meaning: 'to make something such as a statement or newspaper article less offensive, powerful, or detailed/to add water to a drink or liquid in order to make it less strong', 
examples: 'Some of the more forthright sections were watered down by the editors/'},
{word: 'forthright',type: 'adjective', meaning: 'saying what you think and feel directly and honestly, without being afraid of other people’s reactions', 
examples: 'A forthright politician*A forthright comment/statement/apology'},
{word: 'dig in',type: 'phrasal verb', meaning: 'eat like an animal/if something digs in, it presses hard into something else', 
examples: 'Let\'s dig in!/She gripped his arm so hard that her nails dug in'},
{word: 'grip',type: 'verb', meaning: 'to hold something tightly/to have a strong effect on someone/to keep someone very interested in something',
 examples: 'She gripped Frank’s hand firmly to show her support/A feeling of fear gripped the crowd/The case has gripped the public because of the celebrities involved'},
{word: 'fill out',type: 'phrasal verb', meaning: 'To became less skinny by gaining weight/to add information such as your name or address in the empty spaces on an official document',
 examples: 'Sam’s really filled out, hasn’t he?/It took me several hours to fill out the application form'},
{word: 'fill up',type: 'phrasal verb', 
meaning: 'if you fill someone up, or if they fill up, they eat enough food so that they no longer feel hungry/same as fill', 
examples: 'They filled me up with cakes and sandwiches/By eight o’clock the restaurant was beginning to fill up'},
{word: 'suck it up',type: 'phrase informal', meaning: ' hold all your bad feelings(like pain or exhaustion)',
examples: 'You can either suck it up and be a man, or every time you get an ache and pain you can go out of the game'},
{word: 'suck up to someone',type: 'phrase', meaning: 'puchar o saco', examples: ''},
{word: 'silk',type: 'noun', meaning: 'seda', examples: ''},
{word: 'straw',type: 'noun', meaning: 'palha,canudo', examples: ''},
{word: 'seep',type: 'verb intransitive', meaning: 'infiltrar, escoar/to flow into or out of something through small holes, usually when this should not happen',
 examples: '/seep through: The rain had seeped through his clothes*seep into: Poisonous chemicals from the factory are seeping into our soil*seep from, out of: The helium will slowly seep out of the balloon*seep in: Even when he closed the windows the noise of the traffic seeped in'},
{word: 'bedshaped',type: 'adjective', 
meaning: ' is about feeling that you\'ve been \'left behind\' by an old friend or lover and about hoping that you\'ll be reunited one day so that you can live out the end of your lives together the way you started them', 
examples: ''},
{word: 'perk',type: 'verb/noun', 
meaning: 'to become lively, cheerful, or vigorous, as after depression or sickness (usually followed by up)/priviledge', 
examples: 'The patients all perked up when we played the piano for them/Free theatre tickets are one of the perks of this job'},
{word: 'nevertheless',type: 'adverb', 
meaning: 'used to contradict another phrase that has already been said', 
examples: 'I\'m really excited, nevertheless, I want to rest a bit'},
{word: 'nonetheless ',type: 'adverb', 
meaning: 'used to contradict another phrase that has already been said', 
examples: 'She\'s going to like it for sure, nonetheless, you should change some things'},
{word: 'whatsoever',type: 'pronoun/adjective', meaning: 'an intensive form of whatever', 
examples: 'I don\'t want to hear it whatsoever'},
{word: 'stiff',type: 'adjective',
 meaning: 'rígido, duro/difficult or impossible to bend or flex:/not moving or working easily:', 
 examples: '/A stiff collar/The motor was a little stiff from the cold weather'},
{word: 'tilt',type: 'verb', meaning: 'inclinar/to move something so that one side is lower than the other/if something tilts, it moves so that one side is lower than the other',
 examples: '/She tilted the bowl to pour the mixture out*The tray was tilted at an angle/Suddenly the boat started to tilt'},
{word: 'slant',type: 'verb', 
meaning: 'To be or move at an angle that is not 90 degrees, or to make something do this/to give information or ideas in a way that gives more attention or support to a particular person, group, or opinion',
 examples: 'Slant your skis a little more to the left/The text was slanted towards younger readers'},
{word: 'scold',type: 'verb transitive old-fashioned', 
meaning: 'to criticize someone, especially a child, severely and usually angrily for something they have done wrong', 
examples: 'The teacher scolded me for being late'},
{word: 'thrive',type: 'verb intransitive', meaning: 'prosperar', examples: ''},
{word: 'pursuit',type: 'noun', meaning: 'the process of trying to achieve something/the process of chasing someone or something in order to catch them/an activity that you enjoy/the process of continuing with an activity', 
examples: 'pursuit of: the pursuit of happiness*in (the) pursuit of something: his single-mindedness in the pursuit of his goals/in pursuit (of someone, something): A group of horsemen set off in pursuit/his artistic pursuits/pursuit of: Increased inflation would have resulted from the pursuit of this policy' },
{word: 'cradle',type: 'noun', meaning: 'cradle or crib: berço', examples: ''},
{word: 'crib',type: 'noun', meaning: 'crib or cradle: berço', examples: ''},
{word: 'wayside',type: 'noun', meaning: 'esquecimento', examples: ''},
{word: 'hay',type: 'noun uncountable', meaning: 'feno', examples: ''},
{word: 'blacksmith',type: 'noun countable', meaning: 'ferreiro', examples: ''},
{word: 'stead',type: 'noun', meaning: 'lugar', examples: ''},
{word: 'inheritance',type: 'noun', meaning: 'property or money that you receive from someone when they die/the process of inheriting money or property/something that you receive from your parents or from people who lived before you/the process of receiving something from your parents or from people who lived before you', 
examples: 'Advice for people who have recently received an inheritance/French laws of inheritance/The three countries shared a common linguistic and religious inheritance/The inheritance of a gift for music'},
{word: 'heritage',type: 'noun',
 meaning: 'The art, buildings, traditions, and beliefs that a society considers important to its history and culture', 
 examples: 'Ireland’s rich musical heritage*A need for the Asian community to preserve their cultural heritage'},
{word: 'merchandise',type: 'noun uncountable', meaning: 'mercadoria', examples: ''},
{word: 'smug',type: 'adjective', meaning: 'convencido', examples: ''},
{word: 'truce',type: 'noun countable', meaning: 'trégua', 
examples: 'At least 750 people have died since the truce ended*call a truce (=agree to stop fighting or arguing): They should call a truce while negotiations are given a chance'},
{word: 'up in the air ',type: 'phrase', meaning: 'indefinido', examples: ''},
{word: 'reign',type: 'noun countable', meaning: 'reinado', examples: ''},
{word: 'realm',type: 'noun countable', 
meaning: 'reino/A particular area of knowledge, experience, interest', 
examples: '/The political, military realm*Realm of: This is not really within the realms of my experience'},
{word: 'lifeline',type: 'noun countable', 
meaning: 'a person or thing that you depend on very much/a rope that you throw to someone who has fallen into water by accident', 
examples: ''},
{word: 'roundabout',type: 'noun countable british', 
meaning: 'a circular area where three or more roads meet that you have to drive around in one direction in order to get onto another road. The American word is traffic circle or rotary/a circular structure in a playground that children sit or stand on while it is pushed round', 
examples: ''},
{word: 'temptation',type: 'noun countable', 
meaning: 'tentação/a strong feeling of wanting to have or to do something, especially something that is bad for you', 
examples: '/Temptation to do something: The temptation to gamble is great, so he stays at home*give in​, ​yield​, ​succumb to (the) temptation (=get or do the thing that you want): She nearly gave in to the temptation to open the letter*resist the temptation to do something: I will resist the temptation to go into detail here'},
{word: 'gamble',type: 'verb', 
meaning: 'to risk money or something valuable in the hope of winning more if you are lucky or if you guess something correctly', 
examples: 'We used to gamble at the casino in Monte Carlo'},
{word: 'outrageous',type: 'adjective', meaning: 'very shocking or unreasonable', 
examples: '‘She blames me for causing her father’s death.’‘But that’s outrageous!’*An outrageous claim, act, demand'},
{word: 'hunch',type: 'noun countable', meaning: 'a feeling that something is true or will happen, although you do not know any definite facts about it',
 examples: ''},
{word: 'handkerchief',type: 'noun countable', meaning: 'lenço', examples: ''},
{word: 'rather than',type: 'phrase', 
meaning: 'used for saying that one thing is preferred to another or happens instead of another', 
examples: 'Doug chose to quit rather than admit that he’d made a mistak*Rather than criticizing your husband, why not find out if there’s something wrong*We want the matter settled sooner rather than later'},
{word: 'fine',type: 'noun', meaning: 'multa', examples: ''},
{word: 'stroke',type: 'noun/verb', meaning: 'derrame/(a line or mark made by) a movement of a pen or pencil when writing or a brush when painting/an unexpected but important event or experience/an act of hitting someone with a weapon/an act of hitting a ball when playing a sport/to move a hand, another part of the body, or an object gently over something or someone, usually repeatedly and for pleasure', 
examples: 'She suffered, had a stroke that left her unable to speak/A brush stroke*With a few bold strokes, she signed her name/a stroke of luck, good fortune: Winning the lottery was quite a stroke of luck/The punishment was 20 strokes of the lash/The batsman stroked the ball effortlessly to the boundary/Stroke the dog if you want, he won\'t bite*She lovingly stroked Chris\'s face with the tips of her fingers'},
{word: 'wreck',type: 'verb transitive', meaning: 'to severely damage or destroy a vehicle or building/to damage something such as a plan or a relationship so badly that it no longer exists/naufragar',
 examples: 'The town has been wrecked by the bombing/My behaviour very nearly wrecked our relationship/A Spanish treasure ship wrecked off the Florida Keys'},
{word: 'rematch',type: 'noun countable', meaning: 'revanche', examples: ''},
{word: 'forecast',type: 'noun countable', meaning: 'previsão', examples: 'The weather forecast is for a dry sunny day tomorrow'},
{word: 'stab',type: 'verb', 
meaning: 'to kill or hurt someone by pushing a knife or other sharp object into their body/to push a sharp object quickly into something/stab or stab at: to make a movement with your finger or a pointed object as if you are stabbing something, usually to emphasize something that you are saying/if an unpleasant or negative feeling stabs you, you suddenly feel it very strongly/if someone’s words stab you, they make you feel suddenly very sad or afraid',
 examples: 'His brother was stabbed in the hand*Stab someone to death: One fan was stabbed to death in a fight between gangs/She stabbed the meat with her fork/‘Here!’ she said, stabbing the book with her finger*Stab at: He stabbed at the paper with his pen//His words stabbed her to the heart'},
{word: 'oblivious ',type: 'adjective', 
meaning: 'not noticing something, or not knowing about it', 
examples: 'Oblivious to, of: She seemed completely oblivious to the noise around her'},
{word: 'query',type: 'noun countable/verb', 
meaning: 'a question that you ask because you want information or because you are not certain about something', 
examples: 'Have a query about, regarding, concerning something: We have a number of queries regarding delivery*Answer a query: One of our staff will be available to answer your queries*Many people are querying whether the tests are accurate'},
{word: 'seize',type: 'verb transitive', 
meaning: 'to suddenly and firmly hold someone by a part of their body or clothing/to quickly take something in your hand/to take something using official power and force/to take control of a place or situation using military force/to gain control in a situation/if a feeling or emotion seizes someone, it suddenly affects them very strongly/to take something or someone away in an illegal and violent way', 
examples: '‘Listen,’ he said, seizing my wrist*Seize someone by something: Before he could run away, she seized him by the collar/Hearing a noise, he seized his gun from the drawer/Customs officials have seized 100 kilos of cocaine/Eastern towns were seized by the rebels two years ago/Seize control: Their opponents had seized control of the army*seize the initiative (=make certain that you are able to control a situation): You must seize the initiative in discussions about salary/A wave of panic seized me/Robbers tied up security guards and seized the money'},
{word: 'hold dear',type: 'verb', 
meaning: 'care for, cherish/to feel that someone or something is very important to you', 
examples: '/He laughed at the ideas they held dear*This government was a threat to everything he held dear'},
{word: 'slam',type: 'verb', 
meaning: 'to shut (a door, window, or lid) forcefully and loudly/to close quickly with a loud noise/to put, move, or hit something against or onto a surface with great force/to move against something with great force/to criticize someone or something severely', 
examples: 'He ran from the room, slamming the door behind him*slam the door shut: She slammed the door shut in his face/Slam shut: The heavy gate slammed shut/slam something down, into, on (something): He slammed the groceries down on the table*She slammed the brakes on/Slam into​, against: The bicycle slammed into a tree/The film has been slammed by critics'},
{word: 'pummel',type: 'verb transitive', 
meaning: 'to cause a lot of damage to a place/to hit someone or something many times, for example with your fists/to criticize or attack someone or something, especially in a public way/to defeat an opponent completely', 
examples: 'Bombers pummelled the village///Bath pummelled Leicester 37–3'},
{word: 'grieve',type: 'verb', 
meaning: 'lament, sorrow, suffer/to feel extremely sad because someone has died/to upset someone', 
examples: '/They were grieving the death of their father*He’s still grieving for his wife*Millions of people are grieving over his death/It grieves me to see her like this'},
{word: 'fractious',type: 'adjective', 
meaning: 'rebelde, turbulento/easily upset or annoyed/causing problems and difficult to control', 
examples: '/A fractious child'},
{word: 'thy',type: 'pronoun', 
meaning: 'an old word meaning ‘your’ that was used for talking or writing to one person', 
examples: ''},
{word: 'toll',type: 'noun', 
meaning: 'pedágio/an amount of money that you pay to use a bridge or a road/the total number of people who have been killed or hurt/he total amount of harm or damage/the loud slow repeated sound of a large bell', 
examples: '/Toll charges//The mounting toll of failed businesses'},
{word: 'strong-willed',type: 'adjective', 
meaning: 'determinado, persistente', 
examples: ''},
{word: 'go the extra mile',type: 'phrase', 
meaning: 'to make a special extra effort in order to achieve something', 
examples: 'We are prepared to go the extra mile to establish peace'},
{word: 'it takes two to tango',type: 'phrase', 
meaning: 'Não dá para fazer uma coisa com uma só pessoa/spoken used to say that if a problem involves two people, then both people are equally responsible', 
examples: ''},
{word: 'kick the bucket',type: 'phrase', 
meaning: 'bater as botas', 
examples: 'When I kick the bucket you\'ll be able to live on my life insurance'},
{word: 'miss the boat',type: 'phrase', 
meaning: 'lose the opportunity', 
examples: 'You’ll miss the boat if you don’t buy shares now'},
{word: 'see eye to eye',type: 'phrase', 
meaning: 'agree', 
examples: 'I don’t always see eye to eye with my father'},
{word: 'sit on the fence',type: 'phrase', 
meaning: 'to avoid saying which side of an argument you support or what your opinion is about a particular subject', 
examples: 'You can\'t sit on the fence any longer - what\'s it going to be?'},
{word: 'take with a grain of salt',type: 'phrase', 
meaning: 'to not completely believe what someone tells you, because you know that they do not always tell the truth', 
examples: 'Most of what he says should be taken with a grain of salt'},
{word: 'take with a pinch of salt',type: 'phrase', 
meaning: 'to not completely believe what someone tells you, because you know that they do not always tell the truth', 
examples: 'Most of what he says should be taken with a pinch of salt'},
{word: 'scrape',type: 'verb', 
meaning: 'raspar/to injure a part of your body or damage something by rubbing it against a rough surface/to rub a sharp edge or tool against a surface/to remove something by pulling a hard tool across the surface it is on/to remove the skin of a vegetable or fruit with a tool/if a sharp edge or point scrapes a surface, or if you scrape it across the surface, it moves across the surface', 
examples: '/I scraped my elbow when I fell over/You’ll have to scrape the walls before you paint them/scrape something off, into, onto, out of etc (something): Scrape the mud off your boots before you come inside*I scraped the bits of meat into the dog’s bowl/I washed and scraped the carrots/scrape against, across, along etc something: He felt the knife blade scrape against the back of his neck*scrape something against, across, along etc something: She scraped her nails along the blackboard'},
{word: 'deepen',type: 'verb', 
meaning: 'if a bad situation deepens, it becomes worse/if a feeling or relationship deepens, or if something deepens it, it becomes stronger/if someone’s knowledge or understanding deepens, or if something deepens it, they know or understand more/if a mystery deepens, or if something deepens it, it becomes more complicated and difficult to understand/if water deepens, or if someone deepens it, it becomes deeper/if a colour deepens, it becomes darker/if a sound deepens, or if someone deepens it, it becomes lower', 
examples: 'The economic crisis has deepened*A deepening conflict between the political rivals/His anxiety deepened when he heard the news*Both sides are now deepening their commitment to the peace process/I’m trying to deepen my understanding of local history//Plans to deepen channels in the Port of Southampton/As evening arrived, the shadows deepened/The man suddenly deepened his voice'},
{word: 'strive',type: 'verb intransitive', 
meaning: 'to make a lot of effort to achieve something', 
examples: 'Strive to do something: We strive to be accurate, but some mistakes are inevitable*Strive for: women who were striving for more freedom'},
{word: 'give rise',type: 'phrase', 
meaning: 'to make something happen or begin, especially something unpleasant or unexpected', 
examples: 'Delays could give rise to further problems*The remark about an election inevitably gave rise to widespread speculation'},
{word: 'mischievous',type: 'adjective', 
meaning: 'arteiro, brincalhão, travesso/ mischievous person, especially a child, enjoys having fun by causing trouble/a mischievous action or statement is one that is intended to cause trouble or disagreement', 
examples: '/There were always mischievous boys around/Much of what has been published has been mischievous'},
{word: 'brag',type: 'verb intransitive', 
meaning: 'gabar', 
examples: 'I don’t mean to brag, but my pecan pie is the best*brag about: She’s always bragging about her famous father*brag (that): He bragged that he’d lasted longer than anyone else'},
{word: 'gaze',type: 'verb intransitive', 
meaning: 'To gaze is defined as to stare or look at something with a steady look', 
examples: 'Gaze at, into, toward, upon, up at: He lay on the bed gazing up at the ceiling*They gazed into each other’s eyes'},
{word: 'debris',type: 'noun uncountable', 
meaning: 'destroços', 
examples: ''},
{word: 'pitch-black',type: 'adjective', 
meaning: 'completely black or dark', 
examples: 'I coudn\'t see anything when I got into the house \'cause it was pitch black'},
{word: 'cobweb',type: 'noun countable', 
meaning: 'teia de aranha', 
examples: ''},
{word: 'stale',type: 'adjective', 
meaning: 'old/stale food such as bread is old and no longer fresh/used for describing something that does not smell fresh or pleasant/not new, original, or interesting/if you are stale, you have done something so often that you can no longer do it well or be interested in it', 
examples: '/Get, go stale: Wrap the bread up well or it’ll go stale/Stale air*Stale cigarette smoke/Stale news, jokes, ideas/ Get, go stale: He was getting stale and wanted a new jo'},
{word: 'breed',type: 'verb', 
meaning: 'reproduzir/to make negative feelings or situations develop/sometimes used for saying that something good develops', 
examples: 'The birds have bred successfully for the past six years/Secrecy breeds distrust/Success tends to breed success'},
{word: 'spring',type: 'noun/verb', 
meaning: 'primavera, nascente de rio, mola/to jump or move somewhere suddenly', 
examples: '/The cat sprang onto the sofa*I tried to shut the door, but it kept springing open*Spring to life (=to suddenly become very active): After about 8 o\'clock, the city springs to life'},
{word: 'wreckage',type: 'noun', 
meaning: 'the parts of a vehicle or building that remain after it has been severely damaged/the destruction of someone’s relationship, life, hopes etc', 
examples: 'The pilot was trapped in the wreckage for almost seven hours'},
{word: 'oath',type: 'noun countable', 
meaning: 'juramento/a formal promise, especially one made in a court of law', 
examples: '/An oath of loyalty*Take, swear an oath: Even today, all new American citizens officially take an oath of allegiance' },
{word: 'wipe',type: 'verb transitive', 
meaning: 'esfregar/to clean or dry by rubbing', 
examples: '/Let me just wipe the table before you sit down*Wipe your mouth. You’ve got chocolate all over it*She wiped away her tears*wipe something with something: He wiped his mouth with his serviette*Wipe your hands, feet: Wipe your hands before touching food*Wipe something on something: I wish you wouldn’t wipe your hands on your clothes'},
{word: 'sew',type: 'verb', 
meaning: 'costurar', 
examples: ''},
{word: 'knit',type: 'verb', 
meaning: 'tricotar', 
examples: ''},
{word: 'seam',type: 'noun countable', 
meaning: 'costura, emenda', 
examples: ''},
{word: 'burst',type: 'verb', 
meaning: 'rebentar, estourar, explodir/to go somewhere quickly and suddenly/to become noticeable or successful quickly and suddenly', 
examples: 'Did a tyre burst?*She spitefully burst the little boy’s balloon/Burst into, through, out: A man burst into the room waving a gun/The simple designs burst upon a tired market'},
{word: 'burst into',type: 'phrasal verb', 
meaning: 'to suddenly start doing something/burst into flames: to suddenly start burning with large flames/to suddenly start working or becoming active', 
examples: 'The audience burst into wild applause*Burst into tears, song, laughter: Terri keeps bursting into tears (=starting to cry) for no reason/Their helicopter burst into flames after hitting a power line/Banks of electronic equipment burst into life'},
{word: 'tear',type: 'verb', 
meaning: 'rasgar, arrancar/to move somewhere very quickly, especially in an excited or uncontrolled way', 
examples: 'It’s made of very thin material that tears easily*Tear a hole in something: I’ve torn a hole in my sweater!*Tear something to pieces, bits, shreds: Mary tore the letter to pieces without reading it*Tear something in two: Reynolds tore the contract in two*Tear something on something: I must have torn my sleeve on that nail*Tear something out, off, away from etc: You’ll need to tear the old wallpaper off the walls*The storm had torn the old tree up by the roots/Tear into, off, past etc: Those kids are always tearing around here on their bicycles'},
{word: 'chapped',type: 'adjective', 
meaning: 'chapped skin or lips are dry and painful, especially because of cold weather', 
examples: ''},
{word: 'vending machine',type: 'noun countable', 
meaning: 'a machine that you can buy things from, for example, sweets or drinks', 
examples: ''},
{word: 'bench',type: 'noun countable', 
meaning: 'a hard seat for two or more people, usually outside in a public place', 
examples: ''},
{word: 'arson',type: 'noun uncountable', 
meaning: 'the criminal act of deliberately setting fire to property', 
examples: ''},
{word: 'towards',type: 'preposition', 
meaning: 'used for saying in which direction someone or something is going, facing, or looking/used when saying how you feel about someone or something or how you treat them/used for showing how a process is developing in a way that will produce a particular result/near a time(a little before a particular time) or place', 
examples: 'A stream of traffic speeding towards West London*Victor was standing with his back towards me*A path leading towards the river/He’s not feeling very friendly towards you at the moment/Not much has been done towards improving safety/I’ll phone you some time towards the end of the week*Caroline’s name appeared towards the bottom of the list'},
{word: 'disregard',type: 'noun uncountable', 
meaning: 'desconsideração', 
examples: 'Disregard of, for: What we are seeing is disregard of the law*Complete, blatant, reckless disregard for: This decision shows a blatant disregard for the current residents'},
{word: 'approach',type: 'noun', 
meaning: 'abordagem/aproximação/path or road that leads to a place/the action of starting to speak or write to someone when you are asking for something or making an offer', 
examples: 'Approach to: We need a fresh approach to sports in education*Adopt, take, use an approach: As a writer she takes a completely new approach to the classic horror story/With the approach of war, many children were evacuated./Approach to: Soldiers were guarding all approaches to the palace/Make an approach to someone: The company has made some approaches to the government'},
{word: 'side hustle',type: 'noun', 
meaning: ' a piece of work or a job that you get paid for doing in addition to doing your main job', 
examples: 'If you’re looking to score up to $1000 a month, you might want to try out some of these side hustle ideas'},
{word: 'resent',type: 'verb transitive', 
meaning: 'ressentir, guardar rancor', 
examples: 'The girls in the family resented all the attention that Peter was getting*Resent (someone) doing something: It’s obvious that he resents being dropped from the team*I deeply resent you implying that I would be involved in anything like that'},
{word: 'fairly',type: 'adverb', 
meaning: 'to some degree, but not completely or extremely/in a fair way/OLD-FASHIONED: Used for emphasizing that something happens or is done in an extreme way', 
examples: 'His statement explains the situation fairly well*We went to the theatre fairly often/I do my best to treat all my children fairly/She fairly screamed at me'},
{word: 'wicked',type: 'adjective', 
meaning: 'perverso, malvado/morally wrong and deliberately intending to hurt people/slightly cruel but not intending to upset people/expressing a slightly cruel type of enjoyment/​INFORMAL: Used for emphasizing how bad something is/VERY INFORMAL: Very good - This word is used mainly by young people', 
examples: '/I knew that it was a wicked thing to do*They have a love of power that makes them really wicked/A wicked joke, sense of humour/A wicked laugh, smile/A wicked waste, shame'},
{word: 'fall into place',type: 'phrase', 
meaning: 'encaixar/if the details of a problem or puzzle fall into place, you suddenly understand how they are connected and you can solve the problem/if things fall into place, events happen in a way that is satisfactory for you', 
examples: '//When you are playing well, everything falls into place'},
{word: 'sidekick',type: 'noun countable informal', 
meaning: 'someone’s friend or assistant', 
examples: ''},
{word: 'overcome',type: 'verb transitive', 
meaning: 'superar/to succeed in dealing with or controlling a problem/to make someone very emotional, weak, ill, or unconscious/to defeat someone or something', 
examples: '/Jimmy overcame his difficulties to graduate with a first-class degree*What can I do to overcome my fear of rejection?/Exhaustion finally overcame her and she collapsed*Be overcome by something: Two men died when they were overcome by fumes from the fire*Be overcome with emotion, excitement, horror etc: The entire family was overcome with grief/Government troops have finally overcome rebel forces in the north'},
{word: '',type: '', 
meaning: '', 
examples: ''},
{word: '',type: '', 
meaning: '', 
examples: ''},
{word: '',type: '', 
meaning: '', 
examples: ''},
{word: '',type: '', 
meaning: '', 
examples: ''},

{word: '',type: '', 
meaning: '', 
examples: ''},
{word: '',type: '', 
meaning: '', 
examples: ''},
{word: '',type: '', 
meaning: '', 
examples: ''},
{word: '',type: '', 
meaning: '', 
examples: ''},

{word: '',type: '', 
meaning: '', 
examples: ''},
{word: '',type: '', 
meaning: '', 
examples: ''},
{word: '',type: '', 
meaning: '', 
examples: ''},
{word: '',type: '', 
meaning: '', 
examples: ''},
{word: '',type: '', 
meaning: '', 
examples: ''},
{word: '',type: '', 
meaning: '', 
examples: ''},
{word: '',type: '', 
meaning: '', 
examples: ''},
{word: '',type: '', 
meaning: '', 
examples: ''},


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