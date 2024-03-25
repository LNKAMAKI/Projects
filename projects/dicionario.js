//  {word: '',type: '', meaning: '', examples: ''},
// add more meanings: put down, work out
var songs = [
    {word: 'hunk', type: 'noun countable', meaning: 'a large piece of a solid substance_a strong and attractive man',
    examples:'a hunk of meat, bread, plastic, concrete'},

    {word: 'hourglass',type: 'noun countable', meaning: 'ampulheta', examples: 'Life is an hourglass(Mindy Gledhill)'},

    {word: 'landfill',type: 'noun', meaning: 'Aterro', examples: 'Landfill is a place where garbage is burried under the earth'},

{word: 'wane',type: 'verb intransitive', meaning: 'to become weaker or less important', examples: 'My patiente is waning(from Imagine Dragons)'},

{word: 'hurtle',type: 'verb intransitive', meaning: 'chocar, bater contra, lançar violentamente', examples: 'hurtle towards, along, down, forward: A hunk of space debris is hurtling towards the Earth*He hurtled down the mountainside'},

{word: 'lay out',type: 'phrasal verb transitive',meaning: 'to spread something out, or to arrange things so you can see them easily_to explain something carefully and clearly_to arrange something according to a detailed plan, for example rooms in a building, roads in a town, or areas on a piece of land_to spend an amount of money_to hit someone so hard that they fall to the ground and become unconscious',
examples: 'She opened her suitcase and laid her clothes out on the bed*A display of local history material was laid out on the table_The documents lay out the principles clearly enough_The city was laid out with the town hall on a hill in its centre_They had already laid out a substantial sum for the wedding_Joe laid Ken out with one punch' 
},
{word: 'narrow down', type: 'phrasal verb transitive', meaning: 'diminuir,restringir,apertar_to reduce the number of possibilities or choices', examples: '_We’re working to narrow down the list of possible suspects.'},
{word: 'squint', type: 'verb intransitive', meaning: 'apertar os olhos_to close your eyes slightly and try to see something, either because of a bright light or because your eyes do not work very well', examples: '_He squinted at her in the sun'},
{word: 'crisp', type: 'adjective', meaning: 'nítido_crisp food is firm in a pleasant way and makes a noise when you bite it_crisp cloth or paper is smooth, clean, and fresh_crisp weather is pleasant because it is cold and dry_crisp speech or writing is clear and effective_a crisp movement is quick and accurate',
examples:'_The bacon should be crisp and brown*A crisp carrot_He put on a crisp white shirt_A crisp spring day_Her reply was crisp and unemotional_a crisp backhand volley'}
,{word: 'lurk', type: 'verb intransitive', meaning: 'espreitar_to wait, sometimes hiding, in order to frighten, annoy, or attack someone',
examples: '_Why is that woman lurking around?*I saw someone lurking behind the bushes and ran.'
},
{word: 'chill', type: 'verb', meaning: 'calafrio, frio, arrepio, relaxar, esfriar, acalmar_If you chill food or drink, or if it chills, it becomes cold enough to be ready to eat or drink_to make someone feel cold_to make someone feel extremely frightened or worried_if a situation or relationship chills, or if something chills it, it becomes less friendly_to relax and stop being angry or nervous, or to spend time relaxing'
,examples: '_Chill the dessert in the fridge for about two hours*The wine is chilling right now_Chill someone to the bone (= make someone feel very cold): The icy winds had chilled us to the bone_They looked across at me, chilled by what Mark had said_The border dispute between the two countries chilled their relations for decades_I’m just going to chill this weekend.'
},
{word: 'soggy', type: 'adjective', meaning: 'encharcado, úmido_wet and soft, especially in an unpleasant way', examples:'_a soggy afternoon (= an afternoon of rain)*Baby, I\'m just soggy from the chemo(from My Chemical Romance)'},
{word: 'hind', type: 'adjective', meaning: 'the hind legs or feet of an animal are its back legs or feet', examples: ''}
,{word: 'leap', type: 'verb', meaning: 'to move somewhere suddenly and quickly_to jump into the air or over a long distance_to jump over something_to suddenly improve, increase, or progress_to suddenly change to another time or situation, for example in a film', 
examples: 'She leapt to her feet (= suddenly stood up) when she saw me*The suspect was seen leaping into a car and speeding off*He leapt out of bed_People were forced to leap to safety from the burning building*She leapt into the air with joy_The horse leapt the fence and galloped off down the track_Sales have leapt 43% this quarter_The action then leaps forward to 1989, when Rose is an elderly woman'},
{word: 'rub', type: 'verb', meaning: 'esfregar, massagear', examples: 'The boy rubbed his eyes sleepily*Scott gently rubbed her back until the pain went away*The cat rubbed its cheek against my leg*Rub your hands together, it will help you to stay warm'}
,{word: 'pet peeve', type: 'noun', meaning: 'implicância_something that a particular person finds especially annoying', examples: '_One of my biggest pet peeves is poor customer service'}
,{word: 'doodle', type: 'noun  countable_verb', meaning: 'rabisco', examples: 'He was only doodling in the margin*the text was interspersed with doodles'}
,{word: 'dodge ball', type: 'noun', meaning: 'queimada, carimba', examples: 'Let\'s play dodge ball'},
{word: 'badge', type: 'noun', meaning: 'emblema, chachá, distintivo', examples: 'Employees should wear their badges at all times in the building*a scout badge'}
,{word: 'reef', type: 'noun', meaning: 'recife, corais', examples: ''}
,{word: 'attempt', type: 'noun countable_verb', meaning: 'try to do something', examples: 'He attempted to swim the swollen river*It’s his fourth attempt at flying a balloon around the world solo*An attempt on the world record*Their spokesperson has rejected all our attempts to talk to him'}
, {word: 'assembly', type: 'noun', meaning: 'montagem_a part of a government consisting of people who have been elected to make laws_a group of people who meet together for a particular reason', examples: '_the French National Assembly'}
, {word: 'crack of dawn', type: 'noun', meaning: 'amanhecer', examples: 'I was up at the crack of dawn trying to finish my essay'}
,{word: 'nosy', type: 'adjective', meaning: 'curioso', examples: 'Don\'t be nosy'},
{word: 'hurdle', type: 'noun', meaning: 'obstáculo', examples: 'Finding investors is the biggest hurdle we face'}
,{word: 'fierce', type: 'adjective', meaning: 'acirrado, destemido, feroz', examples: 'A fierce storm forced the crew to abandon the yacht*We face fierce competition from overseas competitors*He looked so fierce'}
, {word: 'wondrous', type: 'adjective', meaning: 'maravilhoso', examples: 'what a wondrous place'},
{word: 'prevail over', type: 'verb', meaning: 'prevalecer_to defeat someone in a game, competition, argument', examples: '_The Italian team eventually prevailed over Russia 45 – 43'}
,{word: 'blunder', type: 'noun', meaning: 'mancada, erro_a careless or embarrassing mistake', examples: '_Officials were accused of making a huge administrative blunder'}
,{word: 'template', type: 'noun', meaning: 'modelo, mode, gabarito_something that is used as a pattern or an example for something else', examples: '_The French Revolution was the template for all future revolutions'}
,{word: 'flop', type: 'noun/verb intransitive', meaning: 'fiasco, fracasso_to sit or lie down in a heavy way by relaxing your muscles and letting your body fall_to move or hang in a loose, heavy, and uncontrolled way_if a play, film, or new product flops, it is completely unsuccessful'
,examples: '_He got home and flopped into a chair_Her long hair flopped down over her eyes'}
,{word: 'hover', type: 'verb intransitive',meaning: 'pairar_to be in a state or situation that may change at any time',examples: 'Flock of birds hovering above(from Coldplay)_Hover your mouse over the image_His girlfriend is hovering between life and death'}
,{word: 'linger', type: 'verb intransitive', meaning: 'perdurar, atrasar, demorar_to stay somewhere longer than is necessary, or to spend longer doing something than is necessary, because it is enjoyable or helpful to you',
examples:'Your presence still lingers here(from Evanescence)_Many students lingered after class*She let her eyes linger on him*His face lingered in her memory'}
,{word: 'bound',type: 'adjective_noun', meaning: 'vinculado, ligado, limite_something that is bound to happen will almost certainly happen_having an obligation to do something because of a law, promise_feeling that you should do something because you are expected to, or because it is morally right, even if you do not really want to do it_limits_a long or high jump', 
examples: '_Knowing Jim, he’s bound to be late_By signing the contract you agree to be bound by its terms_We felt bound to tell her that her son had been taking drugs_The business community was allowed – within reasonable bounds – to set whatever pay rates they wanted*investment advice that goes beyond the bounds of good sense'},
{word: 'power plant',type: 'noun', meaning: 'usina', examples: ''},
{word: 'meddling',type: 'noun/verb intransitive', meaning: 'intromissão,interferência_intrometer', examples: '_Stop meddling!'},
{word: 'interest',type: 'noun', meaning: 'interesse, juros', examples: 'We can show you how you can earn a higher rate of interest on your savings'},
{word: 'fire department',type: 'noun', meaning: 'corpo de bombeiros', examples: 'The fire department has been called'},
{word: 'rod',type: 'noun', meaning: 'vara, vareta', examples: 'A fishing rod'},
{word: 'fad',type: 'noun', meaning: '\'modinha\'_something that is popular or fashionable for only a short time', examples: ''},
{word: 'outweigh',type: 'verb transitive', meaning: 'superar,ultrapassar_to be more important, useful, or valuable than something else', examples: '_The possible benefits outweigh the risks involved'},
{word: 'live it up',type: 'phrase', meaning: 'Viver o hoje, sem se preocupar muito com o amanhã_to do enjoyable and exciting things that involve spending a lot of money', examples: ''},
{word: 'lay someone low',type: 'phrase usually passive', meaning: 'to make someone ill or weak and unable to do the things that they usually do', examples: 'He was laid low for two weeks with a virus'},
{word: 'lay low',type: 'phrasal verb', meaning: 'Ao contrário de live it up, ter uma vida mais tranquila, sem ser o centro das atenções', examples: ''},
{word: 'throw under the bus',type: 'informal phrase', meaning: 'betray someone', examples: 'You do realize they might cut a deal and throw you under the bus'},
{word: 'as a matter of fact',type: 'phrase', meaning: 'na realidade', examples: 'I haven’t been here long. As a matter of fact, I just got off the plane yesterday'},
{word: 'income',type: 'noun', meaning: 'renda,rendimento_money that someone gets from working or from investing money', examples: '_These families have no source of income when the harvest is over'},
{word: 'turnover',type: 'noun', meaning: 'the value of the goods and services that a company sells in a particular period of time_the rate at which people leave a place', examples: 'a company with an annual turnover of over £150 million_a high turnover of staff, personnel'},
{word: 'fit the mold',type: 'phrase', meaning: 'to be the right person for a certain activity', examples: 'She doesn’t fit the mold of the typical opera singer.'},
{word: 'wrest',type: 'verb transitive', meaning: 'arrancar_to get land, power, or possessions from someone, usually by fighting', examples: '_Russia wrested control of the northern Caucasus in the 19th century'},
{word: 'up to',type: 'phrase', meaning: 'máximo, até', examples: 'The car drives up to 250 kilometers per hour'},
{word: 'toddler',type: 'noun countable', meaning: 'a very young child who is learning how to walk', examples: ''},
{word: 'get into something',type: 'phrase', meaning: 'to have interest in some activity_to start enjoying something, or to become enthusiastic about it_to begin to discuss something_to be accepted to study at a school or chosen to play for a team', examples: '_You feel shy when you start your speech, but then you get into it*She’s really getting into the Internet_I don’t think we have time to get into that now_he got into one of the top universities in the country'},
{word: 'take up something',type: 'phrase', meaning: 'to start doing something regularly as a habit, job, or interest', examples: 'I took up smoking when I was in high school*Chris has taken up jogging'},
{word: 'undertake',type: 'verb transitive', meaning: 'assumir, comprometer, empreender, realizar', examples: 'State senators undertook to use federal funds for improving schools*The court will undertake a serious examination of the case*It is one of the largest dam projects ever undertaken'},
{word: 'odds and ends',type: 'phrase', meaning: 'things without importance, with no value', examples: 'I\'m odds and ends(from A-ha)'},
{word: 'swipe',type: 'verb', meaning: 'to steal something_to swing your arm and hit or to try to hit someone or something, using your hand or an object_to move your finger across the screen of a smartphone or tablet', examples: 'Someone swiped my wallet!_She swiped him hard on the side of the head_Simply swipe left or right to change the clock style'},
{word: 'leaps and bounds',type: 'phrase', meaning: 'a passos largos', examples: 'Murray has been working hard at his game and has progressed by leaps and bounds'},
{word: 'smirk',type: 'verb intransitive', meaning: 'to smile in an unpleasant way because something bad has happened to someone else, or because you think you have achieved an advantage over them', examples: ''},
{word: 'grievous',type: 'adjective formal', meaning: 'extremely serious or severe', examples: 'A grievous injury*He has made a grievous error'},
{word: 'smother',type: 'verb transitive', meaning: 'sufocar_to cover someone or something completely_to put out a fire by covering it_to kill someone by covering their face until they stop breathing_to try not to express a feeling_to express your love for someone too much', 
examples: 'Can\'t you see that you\'re smothering me?(from Linkin Park)_The meat was smothered in thick sauce*Smother someone with kisses: Linda smothered the child with kisses___Emma smothered a laugh_He accused his mother of smothering him as a child'},
{word: 'pantry',type: 'noun', meaning: 'despensa', examples: ''},
{word: 'mock',type: 'verb', meaning: 'to make someone or something look stupid by laughing at them, copying them, or saying something that is not kind', examples: 'Are you trying to mock me?*In spite of the way you were mocking me(from Linkin Park)'},
{word: 'mock up',type: 'phrasal verb', meaning: 'to make a simple copy of something that you will later make or do properly, in order to test it or show people what it will be like', examples: 'I mocked up the toy with cardboard'},
{word: 'mock test',type: 'noun', meaning: 'simulado', examples: ''},
{word: 'thrift store',type: 'noun countable', meaning: 'brechó', examples: ''},
{word: 'churn',type: 'verb', meaning: 'agitar, rotacionar_to mix milk or cream in a special container in order to make butter_churn or churn up: to move something such as a liquid around violently, or to move in this way_if your stomach churns, you have a strong nervous feeling in it because you are worried, afraid, or upset_if your mind or emotions churn, you are upset or worried about a situation', 
examples: '__The churning seas*A hurricane was churning up the bay_My stomach was churning before the first performance_Her mind churned as she tried to think of a way out of her predicament'},
{word: 'knock off',type: 'phrasal verb informal', meaning: 'stop working_murder someone_reduce a price, amount_make something carelessly_steal something_knock someone’s head​, ​block off: used for threatening to hit someone and hurt them very badly',
 examples: 'Do you want to knock off early tonight?__They’ll knock some off the price if you pick it up it yourself*Kelly knocked two seconds off her previous time_Forgers can knock off a fake passport in no time_'},
{word: 'knockoff',type: 'noun countable', meaning: 'a bad, inexpensive copy of something', examples: ''},
{word: 'knock it off',type: 'phrase', meaning: 'used for telling someone to stop doing something', examples: ''},
{word: 'retail',type: 'noun/adjective', meaning: 'varejo, retalho, revenda', examples: 'She works in retail_The retail trade,sector'},
{word: 'counterfeit',type: 'adjective', meaning: 'counterfeit money, products, tickets, etc. are illegal copies made in order to trick people', examples: ''},
{word: 'resemble',type: 'verb transitive', meaning: 'to be similar to someone or something, especially in appearance', examples: ' Soldiers are trained under conditions that closely resemble real combat'},
{word: 'ruthless',type: 'adjective', meaning: 'willing to make other people suffer so that you can achieve your goals', 
examples: 'She showed a ruthless determination to succeed in her career*A ruthless dictator,killer'},
{word: 'turn down',type: 'phrasal verb transitive', meaning: 'to not accept an offer or request_to reduce the amount of sound, heat, or light produced by a piece of equipment by pressing a button or moving a switch'
, examples: 'How could you turn down such a fantastic job?_The lights were turned down low*When they turn down the lights(from Linkin Park)'},
{word: 'turn in',type: 'phrasal verb', meaning: 'entregar_to return something to the person it belongs to, especially something that was lost or was lent to you_to give something to the person who has officially asked for it or who is in charge_to tell the police about someone, or to take them to the police, because they have committed a crime_to go to bed at night_to produce a particular amount or degree of something_To point, curve, or fold something inwards', 
examples: '_She turned in the lost wallet at the local police station*Someone may have turned your briefcase in to the lost-and-found department_You’re the only person who hasn’t turned in their report for the quarter_His own brother turned him in*She turned herself in to local police__Bicknell turned in a fine all-around performance_Turn your toes in, like this'},
{word: 'shareholder',type: 'noun', meaning: 'acionista', examples: ''},
{word: 'footage',type: 'noun', meaning: 'filmagem_Length, extent, or amount based on measurement in feet_Recorded film or video, especially of a specified nature or subject', 
examples: '_estimated the square footage of new office space_news footage; detailed footage of the royal wedding'},
{word: 'dunk',type: 'noun/verb', meaning: 'enterrada, enterrar, afundar, molhar', examples: ''},
{word: 'spool',type: 'noun', meaning: 'carretel,rolo', examples: ''},
{word: 'ton',type: 'noun', meaning: 'tonelada', examples: ''},
{word: 'plow',type: 'noun/verb', meaning: 'arar,arado', examples: ''},
{word: 'prep',type: 'noun/adjective_verb', meaning: 'preparação,preparar', examples: 'Prepping for a radio interview'},
{word: 'drill',type: 'noun/verb', meaning: 'perfuração, furadeira, furar, perfurar, treinamento, simulação', 
examples: 'Fire drill: a practice of the emergency procedures to be used in case of fire'},
{word: 'backbone',type: 'noun', meaning: 'coluna vertebral, espinha dorsal, firmeza, sustentação', 
examples: 'The backbone of a thesis'},
{word: 'revenue',type: 'noun', meaning: 'receita, rendimento', examples: ''},
{word: 'jack up',type: 'verb', meaning: 'increase_raise something, especially a vehicle, with a jack_inject oneself with an illegal drug', 
examples: 'Ad rates will be jacked up to $3600 a month_Jack the car up until the wheel can spin freely_We stepped over people jacking up in the street outside'},
{word: 'finicky',type: 'adjective', meaning: 'minuncioso_extremely or excessively particular, exacting, or meticulous in taste or standards', 
examples: '_finicky eater(picky eater)'},
{word: 'hatchery',type: 'noun', meaning: 'incubadora', examples: ''},
{word: 'subscribe',type: 'verb ', meaning: 'assinar, firmar, concordar, inscrever_to pay money to an organization in order to receive a product, use a service regularly, or support the organization',
examples: '_2.3 million people subscribe to this online music service*She subscribes to several women\'s magazines*I subscribe €10 a month to the charity'},
{word: 'infuriating',type: 'adjective', meaning: 'irritante,revoltante', examples: 'It\'s infuriating when people keep spelling your name wrong, isn\'t it?'},
{word: 'markup',type: 'noun', meaning: 'marcação', examples: ''},
{word: 'pity',type: 'noun', meaning: 'piedade,compaixão,pena', 
examples: 'The girl stood gazing in, with pity at the old lion in the cage*She agreed to go out with him more out of pity than anything*Can\'t you go to the party? Oh, that\'s (such) a pity*It\'s a pity (that) children spend so little time outside nowadays*I felt deep pity for the lost dog'},
{word: 'commander-in-chief',type: 'noun', meaning: 'comandante-chefe', examples: ''},
{word: 'overtake',type: 'verb', meaning: 'to go past something by being a greater amount or degree_to come from behind another vehicle or a person and move in front of them', 
examples: 'Our US sales have now overtaken our sales in Europe*We\'d planned to hold a meeting tomorrow, but events have overtaken us (= things have changed)_Always check your rear view mirror before you overtake (another car)'},
{word: 'sight',type: 'noun/verb', meaning: 'vista, visão, mira_to suddenly see something or someone', 
examples: 'As you sleep out of sight(from Take That)_After days at sea, the sailors finally sighted land'},
{word: 'sightsee',type: 'verb intransitive', meaning: 'to visit interesting places, especially when on holiday', 
examples: 'In the summer, more people come to sightsee'},
{word: 'poultry',type: 'noun uncountable', meaning: 'birds, such as chickens, that are bred for their eggs and meat', examples: ''},
{word: 'lawsuit',type: 'noun', meaning: 'demand_a court case for enforcing a right or claim', 
examples: '_The homeowner filed a lawsuit against the moving company that was refusing to be held responsible for damaging her furniture'},
{word: 'loan',type: 'noun/verb', meaning: 'empréstimo, emprestar, crédito', 
examples: 'Thank you very much for the loan of your bike*This library loans books and CDs'},
{word: 'chunk',type: 'noun', meaning: 'pedaço_a roughly cut piece_a part of something, especially a large part', 
examples: '_a chunk of cheese, meat_a chunk of text'},
{word: 'cram', type: 'phrasal verb_verb', meaning: 'to force a lot of things into a small space_to try to learn a lot very quickly before an exam', 
examples: 'Eight children were crammed into the back of the car_She\'s cramming for her history exam'},
{word: 'frostbite',type: 'noun uncountable', meaning: 'injury to someone caused by severe cold, usually to their toes, fingers, ears, or nose, that causes permanent loss of tissue', examples: ''},
{word: 'claim',type: 'verb', meaning: 'afirmar, reivindicar, alegar', 
examples: 'The company claims (that) it is not responsible for the pollution in the river'},
{word: 'packet',type: 'adjective', meaning: 'lotado(de pessoas)', examples: ''},
{word: 'bend the truth',type: 'phrase', meaning: 'to say something that is not true or that misleads people but that is usually not regarded as a serious or harmful lie', 
examples: 'When he tells people he\'s from Manhattan he\'s bending the truth a little since he really grew up in Brooklyn*I\'m just trying to bend the truth(from Linkin Park)'},
{word: 'shortage',type: 'noun countable', meaning: 'a situation in which there is not enough of something', 
examples: 'There\'s a shortage of food and shelter in the refugee camps'},
{word: 'strip',type: 'noun/verb', meaning: 'to remove, pull, or tear the covering or outer layer from something_tira_to remove clothing from', 
examples: 'The paintwork was so bad that we decided to strip off all the paint and start again_now tear the paper into strips and fold them up carefully_The men were ordered to strip'},
{word: 'torn off',type: 'noun', meaning: 'arrancado', examples: 'It was worth almost having your ear torn off'},
{word: 'shred',type: 'noun', meaning: 'a very small amount of something_a very small, thin piece that has been torn from something', 
examples: 'There\'s still a shred of hope that a peace agreement can be reached_There isn\'t a shred of evidence to support her accusation'},
{word: 'thign',type: 'noun', meaning: 'coxa', examples: 'With your hands between your thigns(from Artic Monkeys)'},
{word: 'broaden',type: 'verb', 
meaning: 'ampliar, expandir_if your smile broadens, it becomes wider because you are happy_if your accent broadens, you start to speak with a more noticeable accent', 
examples: 'The street broadened into a square*The scope of the book has been broadened to include the history of Eastern Europe_His smile broadened when he saw her_As he grew angrier, his accent broadened'},
{word: 'cue',type: 'noun countable', meaning: 'an event, action, or statement that tells someone indirectly that they should do something', 
examples: ' Greg’s arrival seemed to be the cue for everyone to get up and start dancing'},
{word: 'pin',type: 'noun countable_verb', meaning: 'alfinete, broche_to fasten or attach with or as with a pin or pins_to hold fast in a spot or position (sometimes followed by down)_firmly establish or determine something', 
examples: '_to pin two pieces of cloth together*Pin the tail on the donkey_The debris pinned him down_We need to pin down the exact time of the meeting'},
{word: 'rendezvous',type: 'noun countable', 
meaning: 'a meeting arranged for a particular time and place, especially secretly_the place where people have agreed to meet',
 examples: ''},
{word: 'dish out',type: 'phrasal verb transitive', 
meaning: 'to give things to a number of people_to serve food_if someone dishes out something such as criticism or punishment, they criticize or punish someone severely_if you can\'t take it, don\'t dish it out: If you don\'t like being criticized, don\'t do it to other people', 
examples: 'Some doctors are dishing out drugs their patients do not need_He was dishing out a chicken stew_He’s always ready to dish out criticism'},
{word: 'dish the dirt',type: 'phrase informal', meaning: 'to tell people what you know about someone, especially things that could damage their reputation', examples: ''},
{word: 'rat out',type: 'phrasal verb informal', meaning: 'to expose someone or something in a bad way', 
examples: 'The news reporter ratted out the people who were involved with the scandal'},
{word: 'water down',type: 'phrasal verb transitive', meaning: 'to make something such as a statement or newspaper article less offensive, powerful, or detailed_to add water to a drink or liquid in order to make it less strong', 
examples: 'Some of the more forthright sections were watered down by the editors_'},
{word: 'forthright',type: 'adjective', meaning: 'saying what you think and feel directly and honestly, without being afraid of other people’s reactions', 
examples: 'A forthright politician*A forthright comment_statement_apology'},
{word: 'dig in',type: 'phrasal verb', meaning: 'eat like an animal_if something digs in, it presses hard into something else', 
examples: 'Let\'s dig in!_She gripped his arm so hard that her nails dug in'},
{word: 'grip',type: 'verb', meaning: 'to hold something tightly_to have a strong effect on someone_to keep someone very interested in something',
 examples: 'She gripped Frank’s hand firmly to show her support_A feeling of fear gripped the crowd_The case has gripped the public because of the celebrities involved'},
{word: 'fill out',type: 'phrasal verb', meaning: 'To became less skinny by gaining weight_to add information such as your name or address in the empty spaces on an official document',
 examples: 'Sam’s really filled out, hasn’t he?_It took me several hours to fill out the application form'},
{word: 'fill up',type: 'phrasal verb', 
meaning: 'if you fill someone up, or if they fill up, they eat enough food so that they no longer feel hungry_same as fill', 
examples: 'They filled me up with cakes and sandwiches_By eight o’clock the restaurant was beginning to fill up'},
{word: 'suck it up',type: 'phrase informal', meaning: ' hold all your bad feelings(like pain or exhaustion)',
examples: 'You can either suck it up and be a man, or every time you get an ache and pain you can go out of the game*You\'d say: Oh, suck it all up(from Imagine Dragons)'},
{word: 'suck up to someone',type: 'phrase', meaning: 'puchar o saco', examples: ''},
{word: 'silk',type: 'noun', meaning: 'seda', examples: ''},
{word: 'straw',type: 'noun', meaning: 'palha,canudo', examples: ''},
{word: 'seep',type: 'verb intransitive', meaning: 'infiltrar, escoar_to flow into or out of something through small holes, usually when this should not happen',
 examples: '_seep through: The rain had seeped through his clothes*seep into: Poisonous chemicals from the factory are seeping into our soil*seep from, out of: The helium will slowly seep out of the balloon*seep in: Even when he closed the windows the noise of the traffic seeped in'},
{word: 'bedshaped',type: 'adjective', 
meaning: ' is about feeling that you\'ve been \'left behind\' by an old friend or lover and about hoping that you\'ll be reunited one day so that you can live out the end of your lives together the way you started them', 
examples: 'Bedshaped and legs of stone(from Keane)'},
{word: 'perk',type: 'noun/verb', 
meaning: 'to become lively, cheerful, or vigorous, as after depression or sickness (usually followed by up)_priviledge', 
examples: 'The patients all perked up when we played the piano for them_Free theatre tickets are one of the perks of this job'},
{word: 'nevertheless',type: 'adverb', 
meaning: 'used to contradict another phrase that has already been said', 
examples: 'I\'m really excited, nevertheless, I want to rest a bit'},
{word: 'nonetheless ',type: 'adverb', 
meaning: 'used to contradict another phrase that has already been said', 
examples: 'She\'s going to like it for sure, nonetheless, you should change some things*it is very much a work in progress, but a transformative one, nonetheless'},
{word: 'whatsoever',type: 'pronoun/adjective', meaning: 'an intensive form of whatever', 
examples: 'I don\'t want to hear it whatsoever'},
{word: 'stiff',type: 'adjective',
 meaning: 'rígido, duro_difficult or impossible to bend or flex:_not moving or working easily:', 
 examples: '_A stiff collar_The motor was a little stiff from the cold weather'},
{word: 'tilt',type: 'verb', meaning: 'inclinar_to move something so that one side is lower than the other_if something tilts, it moves so that one side is lower than the other',
 examples: '_She tilted the bowl to pour the mixture out*The tray was tilted at an angle_Suddenly the boat started to tilt'},
{word: 'slant',type: 'verb', 
meaning: 'To be or move at an angle that is not 90 degrees, or to make something do this_to give information or ideas in a way that gives more attention or support to a particular person, group, or opinion',
 examples: 'Slant your skis a little more to the left_The text was slanted towards younger readers'},
{word: 'scold',type: 'verb transitive old-fashioned', 
meaning: 'to criticize someone, especially a child, severely and usually angrily for something they have done wrong', 
examples: 'The teacher scolded me for being late'},
{word: 'thrive',type: 'verb intransitive', meaning: 'prosperar', examples: ''},
{word: 'pursuit',type: 'noun', meaning: 'the process of trying to achieve something_the process of chasing someone or something in order to catch them_an activity that you enjoy_the process of continuing with an activity', 
examples: 'pursuit of: the pursuit of happiness*in (the) pursuit of something: his single-mindedness in the pursuit of his goals_in pursuit (of someone, something): A group of horsemen set off in pursuit_his artistic pursuits_pursuit of: Increased inflation would have resulted from the pursuit of this policy' },
{word: 'cradle',type: 'noun', meaning: 'cradle or crib: berço', examples: ''},
{word: 'crib',type: 'noun', meaning: 'crib or cradle: berço', examples: ''},
{word: 'wayside',type: 'noun', meaning: 'esquecimento', examples: 'I\'ve fallen by the wayside now(from Keane)'},
{word: 'hay',type: 'noun uncountable', meaning: 'feno', examples: ''},
{word: 'blacksmith',type: 'noun countable', meaning: 'ferreiro', examples: ''},
{word: 'stead',type: 'noun', meaning: 'lugar', examples: ''},
{word: 'inheritance',type: 'noun', meaning: 'property or money that you receive from someone when they die_the process of inheriting money or property_something that you receive from your parents or from people who lived before you_the process of receiving something from your parents or from people who lived before you', 
examples: 'Advice for people who have recently received an inheritance_French laws of inheritance_The three countries shared a common linguistic and religious inheritance_The inheritance of a gift for music'},
{word: 'heritage',type: 'noun',
 meaning: 'The art, buildings, traditions, and beliefs that a society considers important to its history and culture', 
 examples: 'Ireland’s rich musical heritage*A need for the Asian community to preserve their cultural heritage'},
{word: 'merchandise',type: 'noun uncountable', meaning: 'mercadoria', examples: ''},
{word: 'smug',type: 'adjective', meaning: 'convencido', examples: ''},
{word: 'truce',type: 'noun countable', meaning: 'trégua', 
examples: 'At least 750 people have died since the truce ended*call a truce (= agree to stop fighting or arguing): They should call a truce while negotiations are given a chance'},
{word: 'up in the air ',type: 'phrase', meaning: 'indefinido', examples: ''},
{word: 'reign',type: 'noun countable', meaning: 'reinado', examples: ''},
{word: 'realm',type: 'noun countable', 
meaning: 'reino_A particular area of knowledge, experience, interest', 
examples: '_The political, military realm*Realm of: This is not really within the realms of my experience'},
{word: 'lifeline',type: 'noun countable', 
meaning: 'a person or thing that you depend on very much_a rope that you throw to someone who has fallen into water by accident', 
examples: ''},
{word: 'roundabout',type: 'noun countable british', 
meaning: 'a circular area where three or more roads meet that you have to drive around in one direction in order to get onto another road. The American word is traffic circle or rotary_a circular structure in a playground that children sit or stand on while it is pushed round', 
examples: ''},
{word: 'temptation',type: 'noun countable', 
meaning: 'tentação_a strong feeling of wanting to have or to do something, especially something that is bad for you', 
examples: '_Temptation to do something: The temptation to gamble is great, so he stays at home*give in​, ​yield​, ​succumb to (the) temptation (=get or do the thing that you want): She nearly gave in to the temptation to open the letter*resist the temptation to do something: I will resist the temptation to go into detail here'},
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
{word: 'stroke',type: 'noun/verb', meaning: 'derrame_(a line or mark made by) a movement of a pen or pencil when writing or a brush when painting_an unexpected but important event or experience_an act of hitting someone with a weapon_an act of hitting a ball when playing a sport_to move a hand, another part of the body, or an object gently over something or someone, usually repeatedly and for pleasure', 
examples: 'She suffered, had a stroke that left her unable to speak_A brush stroke*With a few bold strokes, she signed her name_a stroke of luck, good fortune: Winning the lottery was quite a stroke of luck_The punishment was 20 strokes of the lash_The batsman stroked the ball effortlessly to the boundary_Stroke the dog if you want, he won\'t bite*She lovingly stroked Chris\'s face with the tips of her fingers'},
{word: 'wreck',type: 'verb transitive_noun', meaning: 'to severely damage or destroy a vehicle or building_to damage something such as a plan or a relationship so badly that it no longer exists_naufragar_A ship, car, plane, etc. that has been very badly damaged in an accident_INFORMAL: A person who is in a bad physical or mental condition',
 examples: 'The town has been wrecked by the bombing_My behaviour very nearly wrecked our relationship_A Spanish treasure ship wrecked off the Florida Keys_Two passengers are still trapped in the wreck*She was pulled from the burning wreck by firefighters_Oh, I\'m a wreck without you here(from Imagine Dragons)'},
{word: 'rematch',type: 'noun countable', meaning: 'revanche', examples: ''},
{word: 'forecast',type: 'noun countable', meaning: 'previsão', examples: 'The weather forecast is for a dry sunny day tomorrow'},
{word: 'stab',type: 'verb', 
meaning: 'to kill or hurt someone by pushing a knife or other sharp object into their body_to push a sharp object quickly into something_stab or stab at: to make a movement with your finger or a pointed object as if you are stabbing something, usually to emphasize something that you are saying_if an unpleasant or negative feeling stabs you, you suddenly feel it very strongly_if someone’s words stab you, they make you feel suddenly very sad or afraid',
 examples: 'His brother was stabbed in the hand*Stab someone to death: One fan was stabbed to death in a fight between gangs_She stabbed the meat with her fork_‘Here!’ she said, stabbing the book with her finger*Stab at: He stabbed at the paper with his pen__His words stabbed her to the heart'},
{word: 'oblivious ',type: 'adjective', 
meaning: 'not noticing something, or not knowing about it', 
examples: 'Oblivious to, of: She seemed completely oblivious to the noise around her'},
{word: 'query',type: 'noun countable_verb', 
meaning: 'a question that you ask because you want information or because you are not certain about something', 
examples: 'Have a query about, regarding, concerning something: We have a number of queries regarding delivery*Answer a query: One of our staff will be available to answer your queries*Many people are querying whether the tests are accurate'},
{word: 'seize',type: 'verb transitive', 
meaning: 'seize a chance, an opportunity, the initiative, etc.: to be quick to make use of a chance, an opportunity, etc._to suddenly and firmly hold someone by a part of their body or clothing_to quickly take something in your hand_to take something using official power and force_to take control of a place or situation using military force_to gain control in a situation_if a feeling or emotion seizes someone, it suddenly affects them very strongly_to take something or someone away in an illegal and violent way', 
examples: 'Every chance that you get is a chance you seize(from Coldplay)*You must seize the initiative in discussions about salary_‘Listen,’ he said, seizing my wrist*Seize someone by something: Before he could run away, she seized him by the collar_Hearing a noise, he seized his gun from the drawer_Customs officials have seized 100 kilos of cocaine_Eastern towns were seized by the rebels two years ago_Seize control: Their opponents had seized control of the army_A wave of panic seized me_Robbers tied up security guards and seized the money'},
{word: 'hold dear',type: 'verb', 
meaning: 'care for, cherish_to feel that someone or something is very important to you', 
examples: '_He laughed at the ideas they held dear*This government was a threat to everything he held dear'},
{word: 'slam',type: 'verb', 
meaning: 'to shut (a door, window, or lid) forcefully and loudly_to close quickly with a loud noise_to put, move, or hit something against or onto a surface with great force_to move against something with great force_to criticize someone or something severely', 
examples: 'Leaving rooms and slamming doors(from Take That)*He ran from the room, slamming the door behind him*Slam the door shut: She slammed the door shut in his face_Slam shut: The heavy gate slammed shut_Slam something down, into, on (something): He slammed the groceries down on the table*She slammed the brakes on_Slam into​, against: The bicycle slammed into a tree_The film has been slammed by critics'},
{word: 'pummel',type: 'verb transitive', 
meaning: 'to cause a lot of damage to a place_to hit someone or something many times, for example with your fists_to criticize or attack someone or something, especially in a public way_to defeat an opponent completely', 
examples: 'Bombers pummelled the village___Bath pummelled Leicester 37–3'},
{word: 'grieve',type: 'verb', 
meaning: 'lament, sorrow, suffer_to feel extremely sad because someone has died_to upset someone', 
examples: '_They were grieving the death of their father*He’s still grieving for his wife*Millions of people are grieving over his death_It grieves me to see her like this'},
{word: 'fractious',type: 'adjective', 
meaning: 'rebelde, turbulento_easily upset or annoyed_causing problems and difficult to control', 
examples: '_A fractious child'},
{word: 'thy',type: 'pronoun', 
meaning: 'an old word meaning ‘your’ that was used for talking or writing to one person', 
examples: ''},
{word: 'toll',type: 'noun', 
meaning: 'pedágio_an amount of money that you pay to use a bridge or a road_the total number of people who have been killed or hurt_The total amount of harm or damage_the loud slow repeated sound of a large bell', 
examples: 'I really hate to pay this toll(from Helloween)_Toll charges_Death toll_The mounting toll of failed businesses'},
{word: 'strong-willed',type: 'adjective', 
meaning: 'determinado, persistente', 
examples: ''},
{word: 'go the extra mile',type: 'phrase', 
meaning: 'to make a special extra effort in order to achieve something', 
examples: 'We are prepared to go the extra mile to establish peace'},
{word: 'it takes two to tango',type: 'phrase', 
meaning: 'Não dá para fazer uma coisa com uma só pessoa_spoken used to say that if a problem involves two people, then both people are equally responsible', 
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
meaning: 'raspar_to injure a part of your body or damage something by rubbing it against a rough surface_to rub a sharp edge or tool against a surface_to remove something by pulling a hard tool across the surface it is on_to remove the skin of a vegetable or fruit with a tool_if a sharp edge or point scrapes a surface, or if you scrape it across the surface, it moves across the surface', 
examples: '_I scraped my elbow when I fell over_You’ll have to scrape the walls before you paint them_scrape something off, into, onto, out of etc (something): Scrape the mud off your boots before you come inside*I scraped the bits of meat into the dog’s bowl_I washed and scraped the carrots_scrape against, across, along etc something: He felt the knife blade scrape against the back of his neck*scrape something against, across, along etc something: She scraped her nails along the blackboard'},
{word: 'deepen',type: 'verb', 
meaning: 'if a bad situation deepens, it becomes worse_if a feeling or relationship deepens, or if something deepens it, it becomes stronger_if someone’s knowledge or understanding deepens, or if something deepens it, they know or understand more_if a mystery deepens, or if something deepens it, it becomes more complicated and difficult to understand_if water deepens, or if someone deepens it, it becomes deeper_if a colour deepens, it becomes darker_if a sound deepens, or if someone deepens it, it becomes lower', 
examples: 'The economic crisis has deepened*A deepening conflict between the political rivals_His anxiety deepened when he heard the news*Both sides are now deepening their commitment to the peace process_I’m trying to deepen my understanding of local history__Plans to deepen channels in the Port of Southampton_As evening arrived, the shadows deepened_The man suddenly deepened his voice'},
{word: 'strive',type: 'verb intransitive', 
meaning: 'to make a lot of effort to achieve something', 
examples: 'Strive to do something: We strive to be accurate, but some mistakes are inevitable*Strive for: women who were striving for more freedom'},
{word: 'give rise',type: 'phrase', 
meaning: 'to make something happen or begin, especially something unpleasant or unexpected', 
examples: 'Delays could give rise to further problems*The remark about an election inevitably gave rise to widespread speculation'},
{word: 'mischievous',type: 'adjective', 
meaning: 'arteiro, brincalhão, travesso_ mischievous person, especially a child, enjoys having fun by causing trouble_a mischievous action or statement is one that is intended to cause trouble or disagreement', 
examples: '_There were always mischievous boys around_Much of what has been published has been mischievous'},
{word: 'brag',type: 'verb intransitive', 
meaning: 'gabar', 
examples: 'I don’t mean to brag, but my pecan pie is the best*brag about: She’s always bragging about her famous father*brag (that): He bragged that he’d lasted longer than anyone else'},
{word: 'gaze',type: 'verb intransitive', 
meaning: 'To gaze is defined as to stare or look at something with a steady look', 
examples: 'Gaze at, into, toward, upon, up at: He lay on the bed gazing up at the ceiling*They gazed into each other’s eyes*Gaze into my eyes(from Owl City)'},
{word: 'debris',type: 'noun uncountable', 
meaning: 'destroços', 
examples: ''},
{word: 'pitch-black',type: 'adjective', 
meaning: 'completely black or dark', 
examples: 'I coudn\'t see anything when I got into the house \'cause it was pitch black'},
{word: 'cobweb',type: 'noun countable', 
meaning: 'teia de aranha', 
examples: 'On a cobweb afternoon(from Audioslave)'},
{word: 'stale',type: 'adjective', 
meaning: 'old_stale food such as bread is old and no longer fresh_used for describing something that does not smell fresh or pleasant_not new, original, or interesting_if you are stale, you have done something so often that you can no longer do it well or be interested in it', 
examples: 'And the blood\'s run stale(from Imagine Dragons)_Get, go stale: Wrap the bread up well or it’ll go stale_Stale air*Stale cigarette smoke_Stale news, jokes, ideas_ Get, go stale: He was getting stale and wanted a new jo'},
{word: 'breed',type: 'verb', 
meaning: 'reproduzir_to keep animals or plants in order to produce young ones for a particular purpose_breed something into somebody: to educate somebody in a particular way as they are growing up_to make negative feelings or situations develop_sometimes used for saying that something good develops', 
examples: 'The birds have bred successfully for the past six years_Breed something (for, as something): The rabbits are bred for their long coats_Fear of failure was bred into him at an early age_Secrecy breeds distrust_Success tends to breed success'},
{word: 'spring',type: 'noun/verb', 
meaning: 'primavera, nascente de rio, mola_to jump or move somewhere suddenly', 
examples: '_The cat sprang onto the sofa*I tried to shut the door, but it kept springing open*Spring to life (= to suddenly become very active): After about 8 o\'clock, the city springs to life'},
{word: 'wreckage',type: 'noun', 
meaning: 'the parts of a vehicle or building that remain after it has been severely damaged_the destruction of someone’s relationship, life, hopes etc', 
examples: 'The pilot was trapped in the wreckage for almost seven hours'},
{word: 'oath',type: 'noun countable', 
meaning: 'juramento_a formal promise, especially one made in a court of law', 
examples: 'Took an oath by the blood of my hand(from Imagine Dragons)_An oath of loyalty*Take, swear an oath: Even today, all new American citizens officially take an oath of allegiance' },
{word: 'wipe',type: 'verb transitive', 
meaning: 'esfregar_to clean or dry by rubbing', 
examples: '_Let me just wipe the table before you sit down*Wipe your mouth. You’ve got chocolate all over it*She wiped away her tears*wipe something with something: He wiped his mouth with his serviette*Wipe your hands, feet: Wipe your hands before touching food*Wipe something on something: I wish you wouldn’t wipe your hands on your clothes'},
{word: 'sew',type: 'verb', 
meaning: 'costurar', 
examples: ''},
{word: 'knit',type: 'verb', 
meaning: 'tricotar', 
examples: ''},
{word: 'seam',type: 'noun countable', 
meaning: 'costura, emenda', 
examples: 'Tearing at the seams(from Imagine Dragons)'},
{word: 'burst',type: 'verb', 
meaning: 'rebentar, estourar, explodir_to go somewhere quickly and suddenly_to become noticeable or successful quickly and suddenly', 
examples: 'And in a burst of light that blinded every angel(from Linkin Park)*Did a tyre burst?*She spitefully burst the little boy’s balloon_Burst into, through, out: A man burst into the room waving a gun_The simple designs burst upon a tired market'},
{word: 'burst into',type: 'phrasal verb', 
meaning: 'to suddenly start doing something_burst into flames: to suddenly start burning with large flames_to suddenly start working or becoming active', 
examples: 'The audience burst into wild applause*Burst into tears, song, laughter: Terri keeps bursting into tears (= starting to cry) for no reason_Their helicopter burst into flames after hitting a power line_Banks of electronic equipment burst into life'},
{word: 'tear',type: 'verb', 
meaning: 'rasgar, arrancar_to move somewhere very quickly, especially in an excited or uncontrolled way', 
examples: 'It’s made of very thin material that tears easily*Tear a hole in something: I’ve torn a hole in my sweater!*Tear something to pieces, bits, shreds: Mary tore the letter to pieces without reading it*Tear something in two: Reynolds tore the contract in two*Tear something on something: I must have torn my sleeve on that nail*Tear something out, off, away from etc: You’ll need to tear the old wallpaper off the walls*The storm had torn the old tree up by the roots_Tear into, off, past etc: Those kids are always tearing around here on their bicycles'},
{word: 'chapped',type: 'adjective', 
meaning: 'chapped skin or lips are dry and painful, especially because of cold weather', 
examples: '\'Cause my lips are chapped and faded(from My Chemical Romance)'},
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
meaning: 'used for saying in which direction someone or something is going, facing, or looking_used when saying how you feel about someone or something or how you treat them_used for showing how a process is developing in a way that will produce a particular result_near a time(a little before a particular time) or place', 
examples: 'A stream of traffic speeding towards West London*Victor was standing with his back towards me*A path leading towards the river_He’s not feeling very friendly towards you at the moment_Not much has been done towards improving safety_I’ll phone you some time towards the end of the week*Caroline’s name appeared towards the bottom of the list'},
{word: 'disregard',type: 'noun uncountable', 
meaning: 'desconsideração', 
examples: 'Digging through the wreckage of your disregard(from Linkin Park)*Disregard of, for: What we are seeing is disregard of the law*Complete, blatant, reckless disregard for: This decision shows a blatant disregard for the current residents'},
{word: 'approach',type: 'noun', 
meaning: 'abordagem_aproximação_path or road that leads to a place_the action of starting to speak or write to someone when you are asking for something or making an offer', 
examples: 'Approach to: We need a fresh approach to sports in education*Adopt, take, use an approach: As a writer she takes a completely new approach to the classic horror story_With the approach of war, many children were evacuated._Approach to: Soldiers were guarding all approaches to the palace_Make an approach to someone: The company has made some approaches to the government'},
{word: 'side hustle',type: 'noun', 
meaning: 'a piece of work or a job that you get paid for doing in addition to doing your main job', 
examples: 'If you’re looking to score up to $1000 a month, you might want to try out some of these side hustle ideas'},
{word: 'resent',type: 'verb transitive', 
meaning: 'ressentir, guardar rancor', 
examples: 'The girls in the family resented all the attention that Peter was getting*Resent (someone) doing something: It’s obvious that he resents being dropped from the team*I deeply resent you implying that I would be involved in anything like that*Don\'t resent me(from Linkin Park)'},
{word: 'fairly',type: 'adverb', 
meaning: 'to some degree, but not completely or extremely_in a fair way_OLD-FASHIONED: Used for emphasizing that something happens or is done in an extreme way', 
examples: 'His statement explains the situation fairly well*We went to the theatre fairly often_I do my best to treat all my children fairly_She fairly screamed at me'},
{word: 'wicked',type: 'adjective', 
meaning: 'perverso, malvado_morally wrong and deliberately intending to hurt people_slightly cruel but not intending to upset people_expressing a slightly cruel type of enjoyment_​INFORMAL: Used for emphasizing how bad something is_VERY INFORMAL: Very good - This word is used mainly by young people', 
examples: '_I knew that it was a wicked thing to do*They have a love of power that makes them really wicked_A wicked joke, sense of humour_A wicked laugh, smile_A wicked waste, shame'},
{word: 'fall into place',type: 'phrase', 
meaning: 'encaixar_if the details of a problem or puzzle fall into place, you suddenly understand how they are connected and you can solve the problem_if things fall into place, events happen in a way that is satisfactory for you', 
examples: '__When you are playing well, everything falls into place'},
{word: 'sidekick',type: 'noun countable informal', 
meaning: 'someone’s friend or assistant', 
examples: ''},
{word: 'overcome',type: 'verb transitive', 
meaning: 'superar_to succeed in dealing with or controlling a problem_to make someone very emotional, weak, ill, or unconscious_to defeat someone or something', 
examples: '_Jimmy overcame his difficulties to graduate with a first-class degree*What can I do to overcome my fear of rejection?_Exhaustion finally overcame her and she collapsed*Be overcome by something: Two men died when they were overcome by fumes from the fire*Be overcome with emotion, excitement, horror etc: The entire family was overcome with grief_Government troops have finally overcome rebel forces in the north'},
{word: 'wind up',type: 'phrasal verb', 
meaning: 'to end something_to close a business_to find yourself in an unexpected and usually unpleasant situation, especially as a result of what you do_to trick someone by telling them something that is not true_to make someone angry or upset', 
examples: 'I’d like to wind up the meeting soon_The company was wound up in February with debts of $5.2 million_If he keeps doing stuff like that he\'s going to wind up in prison!*You don\'t want to wind up homeless, do you?_At first I thought they were winding me up_Please don’t wind him up – he causes me enough trouble'},
{word: 'root for',type: 'phrasal verb transitive informal', 
meaning: 'to support someone in a game, competition etc', 
examples: 'I’m sure you’ll win. Everyone’s rooting for you'},
{word: 'have the nerve',type: 'phrase', 
meaning: 'if someone has the nerve to do something, then this person is bold enough to do what they weren\'t expected to(tem a cara de pau de fazer algo)', 
examples: 'You have a lot of nerve to ask my wife to dance*He had the nerve to ask me to prove who I was'},
{word: 'tear down',type: 'phrasal verb transitive', 
meaning: 'to rip or pull something down from a surface_to destroy or remove a structure or part of a structure_to criticize or punish someone severely', 
examples: 'The warden went around tearing down pictures and posters hanging up in prisoners\' cells_I can\'t believe they haven\'t torn that old building down yet_Don\'t tear me down for all i need(from Within Temptation)'},
{word: 'vacancy',type: 'noun', 
meaning: 'vaga,vazio_a job that is available for someone to do_a room in a hotel that is available for someone to stay in_FORMAL: Lack of intelligence or interest', 
examples: 'But all the vacancy the words revealed(from Linkin Park)_We have several vacancies to fill in the Sales Department*Vacancy for: There are always plenty of vacancies for bar staff_We have no vacancies at all during July'},
{word: 'bid',type: 'verb', 
meaning: 'to offer a particular amount of money for something, for example at an auction (= an event where things are sold to the person who offers the most money)_to offer to do work or provide a service for a particular amount of money', 
examples: 'So bid the forest floor goodbye(from Owl City)*Bid for: Two people were bidding against each other for the mirror*Bid something for something: They bid £300 for the painting_Bid for: Several contractors bid for the job'},
{word: 'sift',type: 'verb transitive', 
meaning: 'to pour a dry substance through a sieve to remove the large pieces_sift or sift through: to examine information, documents etc in order to find what you are looking for_to look in a pile of things in order to find a particular thing', 
examples: '_He spent hours sifting through all the documents relating to the case*Sift every grain of information until you find the answer_They sifted through the rubble, searching for signs of life*Sifting through the wreckage(from Linkin Park)'},
{word: 'deceit',type: 'noun', 
meaning: 'enganação, fraude_dishonest behaviour that is intended to trick someone', 
examples: 'I\'m so tired of this deceit(from Linkin Park)_The whole relationship was based on lies and deceit'},
{word: 'unwind',type: 'verb', 
meaning: 'INFORMAL: to begin to relax after you have been working hard or feeling nervous_desenrolar', 
examples: 'I need to sit down and unwind for half an hour_She slowly unwound the scarf from around her neck*This is how we find how it all unwinds(from Linkin Park)'},
{word: 'slay',type: 'verb transitive', 
meaning: 'to kill someone in a violent way_INFORMAL: to impress someone, especially by making them laugh_arrasar', 
examples: 'He was slain in battle in 673_His jokes really slay me_I\'m slaying my makeup'},
{word: 'simp',type: 'noun/verb', 
meaning: 'Uma pessoa que sempre está tentando agradar outra porque gosta dela', 
examples: 'You\'re such a simp*You\'re simping for someone'},
{word: 'dime piece',type: 'noun', 
meaning: 'Uma pessoa muito linda', 
examples: 'That woman is a dime piece'},
{word: 'murder mittens',type: 'noun', 
meaning: 'patas de gato', 
examples: ''},
{word: 'big oof',type: 'phrase', 
meaning: 'big mistake',
examples: ''},
{word: 'slap',type: 'verb', 
meaning: '︎really good_to hit someone or something quickly with the palm of the hand or a flat object, making a loud noise_to hit a surface with a sound like someone slapping something_to put something down quickly and noisily_to put something on a surface quickly and without much attention', 
examples: 'That songs slaps_Then, with a resounding smack, she slapped Claudia’s face_Slap against: The waves slapped against the stone pier_Slap something down: Annie slapped down her cards*Slap something down on something: He slapped the packages down on the top step_Slap something on, into something: Just slap some paint on the wall and it will look fine*He slapped some cream cheese on the bagel and gave it to me'},
{word: 'bougie',type: 'adjective', 
meaning: 'coisas de luxo, mas desnecessárias', 
examples: 'The clothes in that store are so bougie'},
{word: 'big facts',type: 'phrase', 
meaning: 'Usado para concordar com alguém', 
examples: '"Brasil é muito rico de cultura": Big facts'},
{word: 'spill the tea',type: 'phrase', 
meaning: 'semelhante com spill the beans, contar uma fofoca', 
examples: 'I gotta spill the tea'},
{word: 'tea',type: 'noun', 
meaning: 'fofoca', 
examples: 'I have some tea for you'},
{word: 'cheugy',type: 'adjective', 
meaning: 'era legal, mas agora já passou, fora de moda, old-fashioned', 
examples: 'That shirt is so cheugy'},
{word: 'not at all',type: 'phrase', 
meaning: 'Same as you\'re welcome', 
examples: ''},
{word: 'appease',type: 'verb transitive', 
meaning: 'pacify or placate (someone) by acceding to their demands_relieve or satisfy (a demand or a feeling)', 
examples: 'In an attempt to appease the angry protesters, the government promised to address their concerns*She tried to appease her upset friend by offering a sincere apology*They appeased the dictator by accepting his demands in an effort to avoid war_We give to charity because it appeases our guilt'},
{word: 'appeal',type: 'noun/verb', 
meaning: 'to be attracted to_to arouse a sympathetic response_to make an earnest request_apelo_a quality that causes people to like someone or something', 
examples: '*The novel\'s unique storyline appeals to a wide range of readers_An idea that appeals to him_We appealed to them for help* He appealed to the public for assistance in finding his missing dog_They made a desperate appeal [=plea, entreaty] for help*The mayor made an appeal to the people of the city to stay calm*His appeals to his father for money were ignored_Music never held much appeal [=attraction] for him*I can\'t understand the appeal of skydiving. [=I can\'t understand why some people like it]*instant mass appeal to how seamlessly it translates the language of video games to film'},
{word: 'diligent',type: 'adjective formal', 
meaning: 'someone who is diligent works very hard and very carefully', 
examples: ''},
{word: 'inept',type: 'adjective', 
meaning: 'someone who is inept does not have much ability or skill_used about things that are done very badly', 
examples: 'She is inept at dealing with people*I was a hopelessly inept student_An appallingly inept performance'},
{word: 'gregarious',type: 'adjective', 
meaning: 'A gregarious person enjoys being with other people', 
examples: ''},
{word: 'grasp',type: 'verb transitive', 
meaning: 'to take and hold something or someone very tightly_to understand something_to take advantage of an opportunity when it happens', 
examples: 'She grasped his hand and pulled him towards her*Grasp someone by the shoulders, arm, wrist etc: He grasped her firmly by the shoulders_He was finding it difficult to grasp the rules of the game*Grasp the meaning, significance of something: You should try to grasp the meaning of whole sentences*Grasp a concept, principle, point: Charlie grasped the point at once_We must grasp every opportunity if we are going to succeed'},
{word: 'consolidate',type: 'verb', 
meaning: 'to make the power, position, or achievements you already have stronger or more effective so that they are likely to continue_to combine several small things, especially companies or organizations, into one large unit', 
examples: 'The president is trying to consolidate support for his proposal*The company is consolidating its hold on technology'},
{word: 'subsequent',type: 'adjective formal', 
meaning: 'happening or coming after something else', 
examples: 'In subsequent interviews, Steele has contradicted his original story*Subsequent to: Reed was disqualified subsequent to failing a drugs test'},
{word: 'ostrich',type: 'noun countable', 
meaning: 'avestruz', 
examples: ''},
{word: 'ascertain',type: 'verb formal', 
meaning: 'to find out something', 
examples: 'Police are trying to ascertain the facts of the case*Ascertain whether, what, how etc: We need to ascertain whether the project is feasible*Ascertain that: The police have ascertained that he knew the victim*Ascertain from: This much could easily be ascertained from the newspapers*Ascertain the cause, nature, extent of something: Experts were unable to ascertain the cause of the accident'},
{word: 'stack',type: 'noun countable_verb', 
meaning: 'pilha_a large amount_a way of storing data (= information) on a computer so that the last piece of data to be stored is the first one to be found by the computer_to arrange things in an ordered pile_to fill something with objects_to arrange things in a pile one on top of another', 
examples: '_Don\'t worry, we\'ve got stacks of time__Once the last few people had left the hall, the caretaker began stacking (up) the chairs_I got a job stacking shelves in a supermarket_Stacking up problems that are so unecessary(from Linkin Park)'},
{word: 'stack up',type: 'phrasal verb', 
meaning: 'to compare with another thing of a similar type_to produce a particular result or impression_if accounts, prices, figures, etc. stack up, they seem to be accurate or show that something is worth buying or investing in', 
examples: 'The new model of this car just doesn\'t stack up against previous models (= is not as good as previous models)_How do the three project proposals and their financing stack up*Stack up against: What most firms want to know is how they stack up against their competitors_The economics of buying US retail and commercial banking businesses do not stack up'},
{word: 'whirlwind',type: 'noun countable', 
meaning: 'redemoinho_something that happens very quickly and unexpectedly, so that the people involved have little control of what happens and how they feel', 
examples: 'It\'s like a whirlwind inside of my head(from Linkin Park)_A whirlwind tour,romance*A whirlwind of emotions'},
{word: 'undertow',type: 'noun countable', 
meaning: 'correnteza: a current below the surface of the sea or a river, that moves in the opposite direction to the water above it_a feeling or attitude that is opposite to the one that is generally felt', 
examples: 'Caught in the undertow, just caught in the undertow(from Linkin Park)'},
{word: 'plush',type: 'adjective', 
meaning: 'aveludado, macio, made with very nice material, such as wool or leather_expensive, comfortable and attractive', 
examples: 'this house has a plush carpet_plush offices, surroundings'},
{word: 'duvet',type: 'noun countable', 
meaning: 'a warm cover for your bed, consisting of a large cloth bag filled with feathers or a soft material. The usual American word is comforter', 
examples: 'This bed has a plush duvet'},
{word: 'detachable',type: 'adjective', 
meaning: 'a detachable part can be removed and put back on again', 
examples: 'a jacket with a detachable hood*a detachable shower head'},
{word: 'cushion',type: 'noun', 
meaning: 'almofada, a cloth bag filled with something soft such as feathers, used for making a seat more comfortable_a layer that separates two objects and prevents one from hitting or touching the other_a number of points or goals by which you are winning during a match or competition', 
examples: '_The air cushion reduces the boat\’s contact with water_Grayson’s goal gives England a five-point cushion'},
{word: 'weave',type: 'verb', 
meaning: 'to make cloth by crossing long threads over and under each other on a machine called a loom_to move somewhere by going around and between things_to create an object', 
examples: 'The women shut themselves behind closed doors to weave their cloth_Samantha had to weave her way through the crowd*The taxi weaved in and out of traffic_Fresh or dried flowers can be woven into a garland'},
{word: 'mend',type: 'verb', 
meaning: 'remendar, to repair a tear or hole in a piece of clothing_to repair something that is broken or damaged so that it can be used again_if a bone mends, or if something mends it after it has broken, it grows back together and becomes healthy again', 
examples: 'These socks need to be mended_the gate needs to be mended so it closes properly'},
{word: 'allowance',type: 'noun countable', 
meaning: 'an amount of money that someone receives regularly, in order to pay for the things they need_mesada, pocket money_an amount of something that you are officially allowed by a particular set of rules or by the law', 
examples: 'She receives a monthly allowance of £500*a housing, clothing, fuel allowance (= money given to help people with their rent, clothes, or heating): an increase in the winter fuel allowance__the recommended daily allowance of Vitamin C*Your baggage allowance is 30 kilos.'},
{word: 'grave',type: 'noun countable', 
meaning: 'the place where a dead body is buried in a deep hole in the ground. A tomb is a structure above the ground that contains a dead body_the grave​', 
examples: 'He’s never even visited his mother’s grave_His secret will go with me to the grave (= I will die without telling anyone)*beyond the grave: It seemed to him like a voice from beyond the grave (=the voice of a dead person)'},
{word: 'engraving',type: 'noun', 
meaning: 'gravura, a picture made by cutting a design into a metal plate, putting ink on it, and pressing it onto paper_the process or art of engraving things', 
examples: ''},
{word: 'unfettered',type: 'adjective formal', 
meaning: 'without limits or control', 
examples: 'Unfettered by the bounds of reality, my imagination flourished'},
{word: 'sizzle',type: 'noun/verb', 
meaning: 'the sound when food is frying', 
examples: 'I hear the sizzle of the bacon*The bacon began to sizzle in the pan'},
{word: 'frenzied',type: 'adjective', 
meaning: 'wild, uncontrolled, excited', 
examples: 'Frenzied turnover (= very high turnover)'},
{word: 'frenzy',type: 'noun', 
meaning: 'great excitement, wild behavior, panic, uncontrolled excitement', 
examples: 'the house is a mess and the children are in a frenzy'},
{word: 'wage',type: 'noun countable', 
meaning: 'salary', 
examples: 'rapid wage growth'},
{word: 'abate',type: 'verb formal', 
meaning: 'to reduce, to lessen, to become less intense', 
examples: 'frenzied turnover and rapid wage growth are abating*the storm finally abated*the fire began to abate*nothing could abate his anger'},
{word: 'billboard',type: 'noun countable', 
meaning: 'a large board for advertisements in an outside public place', 
examples: ''},
{word: 'steep',type: 'adjective', 
meaning: 'set at an high angle, a sharp slope_an unreasonably high price', 
examples: 'i was exhausted after climbing the steep hill_the steep price at the private club was set so only rich people could join*the steep competition for labor(= intense competition)'},
{word: 'drive up',type: 'phrasal verb', 
meaning: 'to cause something to increase rapidly', 
examples: 'steep competition drove wages up*what\'s driving up oil prices?'},
{word: 'sweeten the deal',type: 'phrase', 
meaning: 'to make a business deal more attractive', 
examples: 'the company began offering one thousand signing bonuses to sweeten the deal'},
{word: 'go to the roof',type: 'phrase', 
meaning: 'to rise to a high lever, to reach unexpected heights', 
examples: 'gasoline prices have gone through the roof recently*sales of those cars went through the roof'},
{word: 'die down',type: 'phrasal verb', 
meaning: 'tp gradually become less strong, quieter, less intense, less powerful, less noisy', 
examples: 'the storm is finally starting to die down*the party didn\'t die down until 2 o\'clock in the morning'},
{word: 'altogether',type: 'adverb', 
meaning: 'completely, totally', 
examples: 'I\'ve stopped eating sugar altogether'},
{word: 'the tables have turned',type: 'phrase', 
meaning: 'the situation has reversed completely', 
examples: ''},
{word: 'throw a curveball',type: 'phrase', 
meaning: 'to present (someone) with a difficult and unexpected problem, situation, question, etc', 
examples: 'life throws us curveballs all the time*She threw me a curveball when she asked about that subject'},
{word: 'aftermath',type: 'noun', 
meaning: 'the period immediately following a usually ruinous event', 
examples: 'after the disaster aftermath, the authorities decided to take action*In the aftermath, authorities promised stricter building regulations'},
{word: 'rely',type: 'verb', 
meaning: 'to be dependent_to have confidence based on experience', 
examples: 'the system which we rely for water_someone you can rely on'},
{word: 'sly',type: 'adjective', 
meaning: 'having or showing a cunning and deceitful nature_seeming to know secrets', 
examples: 'Sly fox(Zootopia)_ "You\'ll find out eventually," said with a sly smile.'},
{word: 'bummer',type: 'noun', 
meaning: 'a rude word for something that is very annoying or not convenient', 
examples: 'I\'ve left my wallet at home." "What a bummer!'},
{word: 'slick',type: 'adjective', 
meaning: 'skillful, clever, wily, crafty, someone who is slick has an attractive manner and is good at persuading people, but may not be sincere or moral_(Of an action or thing) done or operating in an impressively smooth, efficient, and apparently effortless way_something that is slick is clever or attractive to look at, but may not have much real meaning or any important ideas_having a smooth(sliperry) or glossy surface', 
examples: 'He\'s slick and funny, but human underneath_a slick piece of software_It\'s that sort of slick sales talk that I mistrust*a slick magazine, brochure'},
{word: 'get to someone',type: 'phrase', 
meaning: 'If someone or something gets to you, they or it make(s) you feel upset or angry', 
examples: ''},
{word: 'treachery',type: 'noun', 
meaning: 'betrayal of trust; deceptive action or nature', 
examples: 'is resignation was perceived as an act of treachery'},
{word: 'lowlife',type: 'noun', 
meaning: 'a person who exists by criminal activities or has a way of life that most people disapprove of', 
examples: 'There are plenty of lowlifes out there, ready to take advantage of unsuspecting senior citizens'},
{word: 'moron',type: 'noun informal', 
meaning: 'a very stupid person', 
examples: 'Some moron smashed into the back of my car yesterday'},
{word: 'delouse',type: 'transitive verb', 
meaning: 'rid (a person or animal) of lice and other parasitic insects', 
examples: 'delousingn chambers'},
{word: 'bare',type: 'noun/verb', 
meaning: 'to take away the thing that is covering something so that it can be seen, without any clothes or not covered by anything', 
examples: 'The men bared their heads*Don\'t walk around outside in your bare feet'},
{word: 'jazzed',type: 'adjective informal', 
meaning: 'full of excitement or enthusiasm', 
examples: ''},
{word: 'rally',type: 'noun/verb', 
meaning: 'protest, a public meeting of a large group of people, especially supporters of a particular opinion_to (cause to) come together in order to provide support or make a shared effort_improvement, improve', 
examples: '5,000 people held an anti-nuclear rally_The general rallied his forces to defend the town_The team played badly in the first half of the game but rallied in the second*The nurse said my mother had rallied after a poor night'},
{word: 'mar',type: 'verb transitive', 
meaning: 'to spoil something, making it less good or less enjoyable', 
examples: 'It was a really nice day, marred only by a little argument in the car on the way home*Sadly, the text is marred by careless errors'},
{word: 'milk',type: 'verb', 
meaning: 'to get as much money or information out of someone or something as possible, often in an unfair or dishonest way', 
examples: 'The newspapers milked the story dry*The directors milked the company of several million dollars'},
{word: 'teensy',type: 'adjective', 
meaning: 'tiny', 
examples: ''},
{word: 'meek',type: 'adjective', 
meaning: 'quiet, gentle and unwilling to disagree or fight or to strongly support personal ideas and opinions', 
examples: 'She seemed so very meek and mild'},
{word: 'mild',type: 'adjective', 
meaning: 'not violent, severe, or extreme', 
examples: 'She can\'t accept even mild criticism of her work'},
{word: 'sore',type: 'adjective_noun_adverb', 
meaning: 'painful and uncomfortable(area) because of injury, infection, or too much use_INFORMAL: angry because you feel you have been unfairly treated_extremely, severely', 
examples: 'I\'ve got a sore back*The poor dog\'s back was covered with sores_He accused me of being a sore loser (= someone who does not accept defeat well)_they were sore afraid'},
{word: 'dire',type: 'adjective', 
meaning: 'very bad, serious or extreme', 
examples: 'He gave a dire warning that an earthquake was imminent*his decision will have dire consequences for local people*I thought her latest book was dire!'},
{word: 'tinge',type: 'noun/verb', 
meaning: 'a very slight amount of a color or of a feeling_to add a slight amount of color or a quality to something', 
examples: 'His hair is starting to show tinges of gray*I felt a tinge of regret that I hadn\'t accepted her offer_he sunset tinged the sky red'},
{word: 'endeavor',type: 'noun/verb', 
meaning: 'an effort or attempt to do something, to try to do something', 
examples: 'Writing is a very different endeavor than teaching*I endeavored to explain the legal consequences of his action'},
{word: 'liability',type: 'noun transitive', 
meaning: 'legal responsible for something_something or someone that causes you a lot of trouble, often when that thing or person should be helping you_the amount of money that a person or organization owes', 
examples: 'He denies any liability for the damage caused_After a certain age, a car\'s just a liability_He listed liabilities of more than $3 million*he company will also have to show that it has a liability of $600'},
{word: 'wistful',type: 'adjective', 
meaning: 'full of yearning or desire tinged with melancholy, sad and thinking about something that is impossible or in the past', 
examples: 'a wistful smile*I thought about those days and grew wistful'},
{word: 'talk tongues',type: 'expresion', 
meaning: 'to say strange words that no one can understand', 
examples: 'It feels like she\'s talking tongues'},
{word: 'sleight of hand',type: 'noun', 
meaning: 'speed and skill of the hand when performing tricks_skilful hiding of the truth in order to win an advantage', 
examples: 'Most of these conjuring tricks depend on sleight of hand_this is financial sleight of hand of the worst sort'},
{word: 'preposterous',type: 'adjective', 
meaning: 'contrary to reason or common sense, utterly absurd or ridiculous', 
examples: 'That was such a preposterous action'},
{word: 'utter',type: 'verb/adjective', 
meaning: 'to say something or to make a sound with your voice_complete or extreme', 
examples: 'She didn\'t utter a word through the whole meeting_utter confusion, misery, chaos, nonsense, rubbish, drivel'},
{word: 'dump',type: 'noun/verb', 
meaning: 'to put down or drop something in a careless way_to get rid of something unwanted, especially by leaving it in a place where it is not allowed to be:_to sell unwanted goods very cheaply, usually in other countries_to suddenly end a romantic relationship you have been having with someone_a place where people are allowed to leave their rubbish_INFORMAL: a very unpleasant and unattractive place', 
examples: 'He came in with four shopping bags and dumped them on the table_Toxic chemicals continue to be dumped into the river_They accused the West of dumping out-of-date medicines on Third World countries_She\'s got dumped by her boyfriend not so long ago__I\'m sure you\'d rather stay on this dump than buying your own house'},
{word: 'clingy',type: 'adjective', 
meaning: 'tending to stay very close to someone (such as a parent) for emotional support, protection', 
examples: 'She has a very clingy child to look after'},
{word: 'groundbreaking',type: 'adjective', 
meaning: 'innovative; pioneering', 
examples: 'His latest movie is interesting, but not groundbreaking'},
{word: 'uncanny',type: 'adjective', 
meaning: 'strange or mysterious, especially in an unsettling way that seems beyond the ordinary or natural', 
examples: 'She bears an uncanny resemblance to her father\'s best friend*It was uncanny the way that she always knew what he was thinking*uncanny resemblance to humans'},
{word: 'pooch',type: 'informal noun', 
meaning: 'a dog', 
examples: ''},
{word: 'roam',type: 'verb', 
meaning: 'to move about or travel, especially without a clear idea of what you are going to do', 
examples: 'After the bars close, gangs of youths roam the city streets'},
{word: 'poacher',type: 'noun', 
meaning: 'someone who catches and kills animals illegally', 
examples: 'Poachers hunt and kill the rhinos for their horns'},
{word: 'smuggle',type: 'verb', 
meaning: 'to take goods or people into or out of a country illegally', 
examples: 'He was caught trying to smuggle goods across the border'},
{word: 'carry away',type: 'phrasal verb', 
meaning: 'to become or cause someone to become so excited about something that they do not control what they say or do', 
examples: 'I\'ll admit I got a bit carried away last night*the crowd were carried away by his passionate speech'},
{word: 'snoop',type: 'verb', 
meaning: 'to look around a place secretly, in order to discover things or find out information about someone or something_to try to find out about other people\'s private lives', 
examples: 'If you came here to snoop around, you\'d better keep going_Clara\'s husband is snooping on her because he thinks she is seeing another man'},
{word: 'snap out of something',type: 'phrase', 
meaning: ' to stop being in or to cause (someone) to stop being in an unhappy condition or mood, a daydream, etc', 
examples: 'I don\'t know how to get her to snap out of her depression*Snap out of it(from Artic Monkeys)*The sound of a door slamming snapped me out of my daydream'},
{word: 'disclose',type: 'verb', 
meaning: 'to make something known publicly, or to show something that was hidden_to give secret, private, or personal information because you must do so for financial, insurance, or legal reasons', 
examples: 'Physicians must learn that it is important to disclose the risks and benefits of procedures and alternatives to patients and their relatives*The case has been disclosed after being up in the air for more than 4 months*The police have disclosed that two officers are under internal investigation'},
{word: 'the more, the merrier',type: 'phrase', 
meaning: 'quanto mais, melhor', 
examples: 'My mother would always tell us the phrase "The more, the merrier" when we were kids'},
{word: 'come in handy',type: 'phrase', 
meaning: 'to be useful for a particular purpose', 
examples: 'This has got to come in handy at some point*This money will come in handy when we go on vacation'},
{word: 'amusing',type: 'adjective', 
meaning: 'entertaining and funny', 
examples: 'What an amusing film'},
{word:'break to', type:"transitive phrasal verb",meaning: 'tell',examples: 'great care was taken to break to her as gently as possible'},
    {word:'conceal', type:"verb",meaning: 'conceal means to hide, cover, or keep something out of sight or from the knowledge of others intentionally. It involves keeping something secret or not making it visible or apparent',examples: 'veiled hints that revealed in half concealing*She concealed the gift behind her back, hoping to surprise her friend later*He couldn\'t conceal his excitement when he heard the news of his promotion'},
    {word:'intelligence', type:"noun",meaning: 'information, news',examples: 'he had been in the newspaper office when intelligence of the railroad disaster was received*the government had intelligence from several different sources'},
    {word:'hasten', type:"verb",meaning: '[Intransitive] To say or do something without delay; hurry_[Transitive] To make something happen sooner or more quickly',examples: 'and had hastened to forestall any less careful, less tender friend in bearing the sad message_The treatment she received may, in fact, have hastened her death'},
    {word:'forestall', type:"transitive verb",meaning: 'to prevent something from happening or somebody from doing something by doing something first',examples: 'and had hastened to forestall any less careful, less tender friend in bearing the sad message*Try to anticipate what your child will do and forestall problems'},
    {word:'tender', type:"adjective",meaning: 'kind, gentle and loving_easy to bite through and cut (food)_painful when you touch it (part of the body)_easily hurt or damaged; delicate',examples: 'and had hastened to forestall any less careful, less tender friend in bearing the sad message_This meat is extremely tender_My leg is still very tender where I banged it'},
    {word:'bear', type:"verb",meaning: '[Transitive] To show something; to carry something so that it can be seen_[Transitive] To be able to accept and deal with something unpleasant; stand, to support the weight of somebody or something_[Transitive] To take responsibility for something_[Intransitive] turn',examples: 'and had hastened to forestall any less careful, less tender friend in bearing the sad message*He was badly wounded in the war and still bears the scars*She bears little resemblance to (= is not much like) her mother*Suddenly, a man bearing a gun entered the room_She couldn\'t bear the thought of losing him*The ice is too thin to bear your weight_In the end it\'s consumers who bear the burden of higher prices*It\'s your decision - you have to bear the responsibility if things go wrong*I suggest you claim on your insurance rather than bearing the cost yourselves_When you get to the fork in the road, bear right'},
    {word:'weep', type:"verb",meaning: 'to cry, usually because you are sad',examples: 'she wept at once, with sudden, wild abandonment, in her sister\'s arms_She wept bitter tears of disappointment'},
    {word:'grief', type:"noun",meaning: 'a very sad feeling, especially when somebody dies_[Uncountable] (Informal) problems and worry',examples: 'when the storm of grief had spent itself she went away to her room alone*They were able to share their common joys and griefs_He caused his parents a lot of grief'},
    {word:'haunt', type:"verb",meaning: 'assombrar; pursue, follow, or appear repeatedly and persistently',examples: 'pressed down by a physical exhaustion that haunted her body and seemed to reach into her soul'},
    {word:'aquiver', type:"adjective",meaning: 'trembling, shaking',examples: 'trees that were all aquiver with the new spring life'},
    {word:'peddler', type:"noun",meaning: 'a person who goes from place to place selling small items',examples: 'in the street below a peddler was crying his wares'},
    {word:'cry', type:"verb",meaning: 'to say something loudly',examples: 'in the street below a peddler was crying his wares'},
    {word:'ware', type:"noun",meaning: 'objects made of the material or in the way or place mentioned; objects used for the purpose or in the room mentioned',examples: 'ceramic ware*silverware*a colletion of local ware*homeware*kitchenware'},
    {word:'sparrow', type:"noun",meaning: 'pardal',examples: 'countless sparrows were twittering in the eaves'},
    {word:'twitter', type:"verb",meaning: 'sound produced by birds',examples: 'countless sparrows were twittering in the eaves'},
    {word:'eave', type:"noun",meaning: 'the part of a roof that meets or overhangs the walls of a building',examples: 'countless sparrows were twittering in the eaves'},
    {word:'roomy', type:"adjective",meaning: 'spacious',examples: 'there stood, facing the open window, a comfortable, roomy armchair'},
    {word:'patch', type:"noun",meaning: 'a small area of something, especially one which is different from the area around it_a small piece of material that is used to cover a hole in something or to make a weak area stronger, or as decoration; a piece of material that you sew onto clothes as part of a uniform',examples: 'there were patches of blue sky showing here and there_I sewed patches on the knees of my jeans*He wears a patch from his employer, Verizon'},
    {word:'sob', type:"verb",meaning: '[Intransitive] To cry noisily, taking sudden, sharp breaths_to say something while crying',examples: 'as a child who has cried itself to sleep continues to sob in its dreams_He sobbed out his troubles'},
    {word:'fair', type:"adjective",meaning: 'pale',examples: 'with a fair, calm face'},
    {word:'bespeak', type:"transitive verb",meaning: 'to show or suggest something',examples: 'whose lines bespoke repression and even a certain strength'},
    {word:'dull', type:"adjective",meaning: 'not interesting or exciting; dreary_not bright or shiny; not clear or loud_not very severe, but continuous',examples: 'there was a dull stare in her eyes_dull knives(from Imagine Dragons)*The fire died down to a dull glow*The gates shut behind him with a dull thud_dull ache/pain'},
    {word:'yonder', type:"adverb",meaning: ' "used to indicate a location that is at a distance from both the speaker and the listener; over there',examples: 'whose gaze was fixed away off yonder on one of those patches od blue sky*Whose is that farm over yonder?*Let\'s meet by the big oak tree yonder'},
    {word:'glance', type:"noun/verb",meaning: 'quick view or a glimpse of something',examples: 'it was not a glance of reflection, but rather indicated a suspension of intelligent thought*I glanced up quickly to see who had come in*She glanced through the report*He glanced briefly down the list of names*I only had time to glance at my emails'},
    {word:'elusive', type:"adjective",meaning: 'difficult to find, define or achieve',examples: 'she did not know; it was too subtle and elusive to name*the elusive concept of \'literature\'*A solution to the problem of toxic waste is proving elusive'},
    {word:'strive', type:"intransitive verb",meaning: 'to try very hard to achieve something;struggle',examples: 'she was striving to beat it back with her will*We encourage all members to strive for the highest standards*They were always striving towards perfection*striving against corruption'},
    {word:'slender', type:"adjective",meaning: 'thin, slim',examples: 'two white slender hands'},
    {word:'keen', type:"adjective",meaning: 'enthusiastic about an activity or idea, etc',examples: 'they(her eyes) stayed keen and bright*His father was keen for him to go to university* I wasn\'t too keen on going to the party'},
    {word:'save', type:"conjunction",meaning: 'exceto',examples: 'the face that had never looked save with love upon her'},
    {word:'bend', type:"verb",meaning: 'dobrar, inclinar, curvar',examples: 'there would be no powerful will bending hers in that blind persistance*He bent his head and kissed her*The road bends to the left'},
    {word:'private will', type:"noun",meaning: 'vontade pessoal',examples: 'which men and women believe they have a right to impose a private will upon a fellow-creature'},
    {word:'fellow-creature', type:"noun",meaning: 'parceiro',examples: 'which men and women believe they have a right to impose a private will upon a fellow-creature'},
    {word:'self-assertion', type:"noun",meaning: 'the quality of being very confident(self-assured) and not afraid to express your opinions',examples: 'what could love, the unsolved mistery, count for in the face of this possession of self-assertion'},
    {word:'fancy', type:"adjective/noun",meaning: 'imagination, fantasy_describes something that is decorative, stylish, or appealing, often implying a sense of elegance or sophistication',examples: 'her fancy was running riot along those days ahead of her_very fancy clothes'},
    {word:'shudder', type:"noun/intransitive verb",meaning: 'to shake because you are cold or frightened, or because of a strong feeling',examples: 'iti was only yesterday she had thought with a shudder that life might be long*Alone in the car, she shuddered with fear'},
    {word:'at length', type:"idiom",meaning: 'after a long time;finally',examples: 'she arose at length and opened the door to her sister\'s importunities'},
    {word:'grip-sack', type:"noun",meaning: 'duffel bag; ​a bag made out of cloth that is like a tube in shape and is closed by a string around the top. It is usually carried over the shoulder',examples: 'carrying his grip-sack and umbrella'},
    {word:'screen', type:"transitive verb",meaning: 'hide',examples: 'screen him from the view of his wife'},
    {word:'piercing', type:"adjective",meaning: 'high-pitched, agudo',examples: 'he stood amazed at Josephine piercing cry'},
{word: 'no dice',type: 'phrase', 
meaning: 'sem chance', 
examples: 'You think you have enough money to buy that house? No dice'},
{word: 'put up with someone',type: 'phrase', 
meaning: 'to be able to tolerate, endure someone', 
examples: 'I don\'t know how she puts up with him'},
{word: 'in a nutshell',type: 'phrase', 
meaning: 'in the fewest possible words', 
examples: 'in a nutshell, everything\'s gone completely wrong'},
{word: 'long story short',type: 'phrase', 
meaning: 'The abbreviation of to cut long story short, which means to say something in few words, without giving any details', 
examples: 'Long story short, he ended up '},
{word: 'retrieve',type: 'noun/verb', 
meaning: 'get or bring or the action of getting (something) back, regain possession of', 
examples: 'watch the dog make the long retrieves*The men were trying to retrieve weapons left when the army abandoned the island'},
{word: 'pry',type: 'verb intransitive', 
meaning: 'to try to find out information about other people’s private lives(such as affairs) in a way that is annoying or rude', 
examples: 'Sorry, I didn\'t mean to pry into your personal life'},
{word: 'grant',type: 'verb', 
meaning: 'agree to give or allow (something requested) to_agree or admit to (someone) that (something) is true', 
examples: 'I was granted permission to visit the place*The bank finally granted me a £500 loan*My request was granted_he hasn\'t made much progress, I\'ll grant you that'},
{word: 'endure',type: 'verb', 
meaning: '[Transitive] Deal with something that is painful or unpleasant without giving up_[Intransitive] To continue to exist for a long time', 
examples: 'He seems to endure the pain quite well*She can\'t endure being defeated_The torn flag has endured as a symbol of freedom'},
{word: 'pluck ',type: 'verb transitive', 
meaning: 'pick, take hold of (something) and quickly remove it from its place by pulling it_to remove somebody from a place or situation, especially one that is unpleasant or dangerous_to play a musical instrument, especially a guitar, by pulling the strings with your fingers', 
examples: 'She plucked out a grey hair*He plucked the wallet from the man\'s grasp*I plucked an orange from the tree_Police plucked a drowning girl from the river yesterday*he baby was plucked from a grim foster home*She was plucked from obscurity to instant stardom_He took the guitar and plucked at the strings'},
{word: 'thus',type: 'adverb', 
meaning: 'in this way, like this_hence, therefore', 
examples: 'Many scholars have argued thus*The universities have expanded, thus allowing many more people the chance of higher education*She rarely gave interviews and thus avoided being asked questions she would rather not answer_He is the eldest son and thus heir to the title*We do not own the building. Thus, it would be impossible for us to make any major changes to it'},
{word: 'hence',type: 'adverb', 
meaning: 'for this reason, as a consequence_in the future (used after a period of time)', 
examples: 'We suspect they are trying to hide something, hence the need for an independent inquiry*a stiff breeze and hence a high windchill_two years hence they might say something quite different'},
{word: 'booth', type:"noun",meaning: 'cabine; ​a small place with walls or sides where you can do something privately, for example make a phone call or vote',examples: 'the great round clock over the information booth in Gand Central Station*a ticket booth; a phone booth'},
{word: 'narrow', type:"noun/verb",meaning: 'estreito; measuring a short distance from one side to the other, especially in relation to length',examples: 'his eyes narrowed to note the exact time*There was only a narrow gap between the bed and the wall'},
{word: 'pound', type:"verb",meaning: 'to hit or beat repeatedly with a lot of force, or to crush something by hitting it repeatedly',examples: 'his heart was pounding with a beat that shocked him because he could not control it*Nearly 50 people are still missing after the storm pounded the coast*The city was pounded to rubble during the war*He pounded on the door demanding to be let in'},
{word: 'yet', type:"conjunction/adverb",meaning: 'used to contrast or introduce an unexpected or conflicting idea after a positive statement_used in negative sentences and questions to talk about something that has not happened but that you expect to happen',examples: 'the woman he had never seen, yet whose written words had been with him and sustained him unfailingly_Are we there yet?*We don\'t yet know what really happened'},
{word: 'unfailingly', type:"adverb",meaning: 'infalivelmente; in a way that you can rely on to always be there and always be the same',examples: 'whose written words had been with him and sustained him unfailingly'},
{word: 'besiege', type:"transitive verb",meaning: 'surround; siege',examples: 'beyond the ring of people besieging the clerks*Paris was besieged for four months and forced to surrender*Fans besieged the box office to try and get tickets for the concert'},
{word: 'clerk', type:"noun",meaning: 'attendant; a person whose job is to serve customers',examples: 'beyond the ring of people besieging the clerks'},
{word: 'midst', type:"noun",meaning: 'the middle part of something',examples: 'his plane had been caught in the midst of a pack of Zeros'},
{word: 'grinning', type:"adjective/verb",meaning: 'A "grin" is a broad and often slightly mischievous or pleased smile, where the corners of the mouth are turned upward',examples: 'he had seen the grinning face of one of the enemy pilots*Stop grinning and tell me what happened!'},
{word: 'sharp', type:"adjective",meaning: 'quick to notice or understand things or to react; focused; alert_sudden, rapid and large',examples: 'his face grew sharp*It was very sharp of you to see that!*a sharp rise in crime_sharp increase in unemployment'},
{word: 'weave', type:"verb",meaning: 'tecer; to make cloth, a carpet, a basket, etc. by crossing threads(fios) or narrow pieces of material across, over and under each other',examples: 'threads of color being woven into a gray web'},
{word: 'bondage', type:"noun",meaning: 'escravidão; the state of being a slave or prisoner; used metaphorically to describe a state of being emotionally or psychologically trapped, restricted, or controlled',examples: 'the book "Of Human Bondage"*women’s liberation from the bondage of domestic life'},
{word: 'writing-in-habit', type:"noun",meaning: 'habit of writing on books',examples: 'he had always hated that writing-in-habit but these remarks(notes) were different'},
{word: 'understanding', type:"adjective/noun",meaning: 'compreensivo; quality of person who understands why people behave in a particular way and forgives them when they do something wrong',examples: 'he had never believed that a woman could see into a man\'s heart so tenderly, so understandingly*We must tackle(deal with) the problem with sympathy and understanding'},
{word: 'ship out', type:"phrasal verb",meaning: 'to leave or depart from a place, often referring to military personnel or individuals on a voyage_to send or transport goods or products from one place to another, especially from a seller to a customer',examples: 'next day he had been shipped out_The company will ship out the orders to customers by the end of the week'},
{word: 'faithfully', type:"adverb",meaning: 'fielmente; in a way that shows true commitment; in a way that you can rely on',examples: 'she had faithfully replied'},
{word: 'plea', type:"noun",meaning: 'beg; a serious emotional request, especially for something needing action now',examples: 'but she had refused all his pleas to send him her phothograph'},
{word: 'haunt', type:"verb",meaning: 'assombrar; pursue, follow, or appear repeatedly and persistently',examples: 'I\'d be always haunted by the feeling that you had been taking chance on just that'},
{word: 'take chance', type:"idiom",meaning: 'to take a risk or engage in something that has an uncertain outcome; refers to the willingness to try something despite the possibility of failure or negative consequences',examples: 'I\'d be always haunted by the feeling that you had been taking chance on just that*He decided to take a chance and invest his savings in the new startup'},
{word: 'plain', type:"adjective",meaning: 'lacking beauty or ugliness',examples: 'suppose I\'m plain (and you must admit that this is more likely)'},
{word: 'go on', type:'intransitive phrasal verb',meaning: 'to continue_to take place(happen)',examples: 'both of us are free to stop or go on after that_what is going on here?'},
{word: 'pale', type:"adjective",meaning: 'pálido',examples: 'in her pale green suit she was like springtime come alive'},
{word: 'entirely', type:"adverb",meaning: 'completely',examples: 'entire forgetting to notice that she was wearing no rose'},
{word: 'tuck', type:"verb",meaning: 'acomodar; to push or fit something tightly or snugly into a space',examples: 'her graying hair tucked under a worn hat_tuck in your shirt'},
{word: 'worn', type:"adjective",meaning: 'desgastado',examples: 'her graying hair tucked under a worn hat'},
{word: 'plump', type:"adjective",meaning: 'euphemism for saying someone is fat',examples: 'she was more than plump'},
{word: 'thrust', type:"adjective/verb",meaning: 'enfiado, enfiar; to cause to enter or pierce something by or as if by pushing; to push suddenly and strongly',examples: 'her thick-ankled feet were thrust into low-heeled shoes*thrust a dagger into his heart*She thrust the papers at me*Her portrayal of a teenager thrust into the mantle of worldly responsibility, who learns the symbiotic beauty and horror of the outside world and slowly warps in its presence, is enthralling'},
{word: 'rumpled', type:"adjective",meaning: 'amassado; creased (= not smooth) and messy',examples: 'but wore a red rose in the rumpled lapel of her brown coat'},
{word: 'keen', type:"adjective",meaning: 'enthusiastic about an activity or idea, etc',examples: 'so keen was his desire to follow the girl'},
{word: 'long', type:"intransitive verb",meaning: 'to feel a strong desire or craving especially for something not likely to be attained',examples: 'yet so deep was his longing for the woman'},
{word: 'uphold', type:"transitive verb",meaning: 'to give support to; to lift up',examples: 'whose spirit had truly upheld his own'},
{word: 'sensible', type:"adjective",meaning: 'rational, reasonable',examples: 'her pale, plump face was gentle and sensible'},
{word: 'twinkle', type:"noun",meaning: 'cintilar, brilho',examples: 'her gray eyes had a warm, kindly twinkle'},
{word: 'broad', type:"adjective",meaning: 'wide, large',examples: 'he squared his broad shoulders'},
{word: 'wield',type: 'verb transitive', 
meaning: 'to make use of a tool or weapon especially effectively_have a lot of power/influence/authority over other people', 
examples: 'She was confronted by a man wielding a knife_Under the new city charter, the mayor wields most of the power*He still wields enormous influence in politics*'},
{word: 'yield',type: 'noun/verb', 
meaning: 'to produce or provide/profit or amount of crop produced_stop resisting, surrender, hand over, resign_give way, allow passage or priority_bend or break under pressure', 
examples: 'The apple tree yielded a bountiful harvest this year*This research has yielded a great number of positive results*Over the past 50 years, crop yields have risen steadily in the US_Will she yield to growing pressure for her to retire?*I yielded to an impulse*The Director is now under pressure to yield power to the shareholders_Pedestrians have the right of way, and drivers must yield to them at crosswalks_the bridge was designed to yield to strong winds, preventing structural damage*Flexible materials can yield without breaking, making them suitable for certain applications'},
{word: 'diminish',type: 'verb', 
meaning: 'to reduce or be reduced in size or importance', 
examples: 'I don\'t want to diminish her achievements, but she did have a lot of help*hese memories will not be diminished by time'},
{word: 'glee',type: 'noun', 
meaning: 'happiness, excitement, or pleasure', 
examples: 'She opened her presents with glee*The students celebrated their success with glee, knowing that their hard work had paid off*The festive decorations filled the room with color and glee, creating a joyful atmosphere for the party'},
{word: 'nefarious',type: 'adjective', 
meaning: 'wicked, criminal, immoral', 
examples: 'Why make a whole village prisoner if it was not to some nefarious purpose?'},
{word: 'kin',type: 'noun/adjective', 
meaning: 'a group of persons of common ancestry; family or related_[Informal] Friend', 
examples: '"He considered his neighbors as kin, and they supported each other like a family*In many indigenous cultures, kinship plays a central role in shaping social structures*In the tight-knit community, everyone was considered kin, regardless of blood relations.'},
{word: 'tight-knit',type: 'adjective', 
meaning: '(Of a group of people) United or bound together by strong relationships and common interests', 
examples: 'a tight-knit family'},
{word: 'pay off',type: 'phrasal verb', 
meaning: 'to be worth the effort, investment or time', 
examples: 'Investing in quality education may take time and money, but it often pays off in the long run with better career opportunities*The risk they took in starting their own business paid off when it became a successful venture*All the hard work and late nights finally paid off when she received a promotion'},
{word: 'sheer',type: 'adjective', 
meaning: 'pure, not mixed with anything else or completely_extremely steep or completely vertical_(Of material) Very thin, light, and delicate', 
examples: 'she giggled with sheer delight*The sheer beauty of the sunset over the ocean left everyone speechless*she went sheer forward when the door was open_The sheer cliffs of the canyon made it a challenging but breathtaking hiking destination_She wore a dress made of sheer fabric, giving it an elegant and delicate appearance'},
{word: 'halt',type: '', 
meaning: '', 
examples: ''},
{word: 'relent',type: 'verb intransitive', 
meaning: 'to act in a less severe way towards someone and allow something that you had refused to allow before_if bad weather relents, it improves', 
examples: 'Her parents eventually relented and let her go to the party*Finally his mother relented and gave permission for her youngest son to marry_If the weather relents, the game will be finished today'},
{word: 'relentless',type: 'adjective', 
meaning: 'continuing in a severe or extreme way, without any interruption', 
examples: 'Despite facing numerous setbacks, he remained relentless in pursuing his goals*The storm was relentless, with rain and wind persisting for days on end'},
{word: 'ravel',type: 'verb', 
meaning: 'to become or make something become tangled or twisted together; confused_to make someone confused_to separate a knot, mass of threads, etc. into a single thread or threads; unravel', 
examples: 'Mark\'s interference merely ravelled things further*in the strong wind, the flags began to ravel, creating a colorful but tangled display_The magician\'s performance seemed to ravel the minds of the audience, leaving them in awe*The mystery novel had a plot that continued to ravel and unwind, keeping readers engaged until the last page_The detective worked tirelessly to ravel the clues together, eventually solving the perplexing case*The complex issues discussed during the seminar began to ravel as the speaker broke them down into simpler concepts'},
{word: 'death toll', type:"noun",meaning: 'taxa de mortes, refers to the number of people who have died as a result of a particular event or circumstance, such as a natural disaster, war, or disease outbreak',examples: 'Erdogan, then the prime minitster, blamed poor construction for the high death toll'},
{word: 'strict', type:"adjective",meaning: 'severe, rigorous, rigid',examples: 'In the aftermath, authorities promised stricter building regulations'},
{word: 'preparedness', type:"noun",meaning: 'preparação',examples: 'introduced an “earthquake tax” aimed at improving preparedness in a country that sits on two major geological faultlines'},
{word: 'faultline', type:"noun",meaning: 'a break in the earth\'s surface',examples: 'a country that sits on two major geological faultlines'},
{word: 'overwhelming', type:"adjective",meaning: 'extremely powerful, intense, or forceful; difficult to fight against',examples: 'the newly formed party won elections in 2002 by an overwhelming majority (= maioria esmagadora)'},
{word: 'stock market', type:"noun",meaning: 'mercado de ações',examples: 'promising transparency and to rebuild the economy, ruined by a stock market crash'},
{word: 'aftershock', type:"noun",meaning: 'a smaller earthquake that occurs after a larger earthquake, in the same general area and along the same fault zone',examples: ' after Monday’s even deadlier earthquake and aftershocks'},
{word: 'amount', type:"intransitive noun/verb",meaning: ' used to describe the total or final result of something or to express the magnitude or significance of a situation_the total number or quantity',examples: 'constructors and supervisors should now see that their negligence amounts to murder*"His hard work and dedication amount to success in his career_Payments are limited to a certain amount.'},
{word: 'lax', type:"adjective",meaning: 'without much care, attention, or control; lacking in rigor or strictness:',examples: 'endemic corruption and lax enforcement of building codes have exacerbated the crisis'},
{word: 'building code', type:"noun",meaning: 'set of regulations and standards that specify the requirements for the design, construction, and maintenance of buildings and other structures',examples: 'lax enforcement of building codes*building codes had not been properly followed'},
{word: 'reliance', type:"noun",meaning: 'dependence, confidence; the state of depending on something or someone for support, help, or protection',examples: 'reliance on cheap foreign credit funded new motorways'},
{word: 'prone', type:"adjective",meaning: 'propenso, sujeito a; susceptible, predisposed, inclined, likely',examples: 'earthquake-prone regions*After a long day at work, he lay prone on the sofa, trying to relax'},
{word: 'load-bearing', type:"adjective",meaning: 'used to describe a structural element or component of a structure that is designed to support and carry the weight of other parts of the construction',examples: 'load-bearing walls and pillars must be distributed in such a way to avoid “pancaking”'},
{word: 'rubble', type:"noun",meaning: 'destroços; debris, wreckage, ruins, detritus',examples: ' many modern structures across the country constituted “rubble in waiting” because building codes had not been properly followed'},
{word: 'cut corners', type:"expressing",meaning: 'to take shortcuts(atalhos) or to do something in a way that is quicker or cheaper, but that may result in lower quality or safety standards than what is expected or required',examples: 'to deter construction companies and investors from cutting corners'},
{word: 'address', type:"verb", meaning: 'to give attention to or deal with a matter or problem_to speak or write to someone; dirigir a alguém',examples: 'because addressing it would be expensive and unpopular_He likes to be addressed as "Sir"*The president will address the nation by television'},
{word: 'due to', type:"preposition",meaning: 'owing to, because of',examples: 'due to an influx of millions of refugees from neighbouring Syria fleeing civil war'},
{word: 'budget', type:"noun",meaning: 'orçamento',examples: 'It is unclear from government budgets how the earthquake tax has been spent'},
{word: 'cash-strapped', type:"adjective",meaning: 'that has a shortage of money or is experiencing financial difficulties',examples: 'the cash-strapped Turkish parliament'},
{word: 'withstand', type:"transitive verb",meaning: 'to be proof against; resist the effect of'
,examples: 'buildings that are designed to withstand earthquakes are less likely to collapse'},
{word: 'slipshod', type:"adjective",meaning: 'describes something that is done in a careless, hasty(hurried), or sloppy manner',examples: 'people across the country suspected of slipshod or negligent construction'},
{word: 'upmarket', type:"adjective",meaning: 'very high quality and intended to be bought by people who are quite rich',examples: 'The developer of an upmarket 12-storey apartment complex'},
{word: 'prosecutor', type:"noun",meaning: 'a legal official who accuses someone of committing a crime, especially in a law court',examples: 'He told prosecutors that his company had followed all the relevant procedures and legislation*prosecutors have begun gathering samples of buildings for evidence on materials used in construction'},
{word: 'assuage', type:"transitive verb",meaning: 'alleviate; to lessen the intensity of something',examples: 'but blaming building contractors is unlikely to assuage a rising tide of public anger at government policy'},
{word: 'unforeseen', type:"adjective",meaning: 'unexpected, unpredicted',examples: ' It is true that we were not expecting an earthquake of this scale, in this area, so it was unforeseen in that respect'},
{word: 'pledge', type:"verb",meaning: 'to make a solemn promise or commitment to do something or to follow through with a specific action_to dedicate oneself to a particular cause, belief, or mission_to make a formal or solemn statement of belief, allegiance, or intention; affirm, vow',examples: 'Erdogan has pledged that reconstruction will be completed in one year_She pledged her loyalty to the organization and its principles_As citizens, we pledge allegiance to our country\'s flag'},
{word: 'poised', type:"adjective",meaning: 'ready, prepared, or positioned in a way that it is balanced and ready to move forward or take action',examples: 'national elections scheduled for May that were already poised to be a crucial test'},
{word: 'in a row', type:"idiom",meaning: 'means that something occurs consecutively or successively without interruption',examples: ' It was the second day in a row in which the US military shot down an unidentified airborne object'},
        {word: 'shoot down', type:"transitive phrasal verb",meaning: 'to cause to fall by shooting',examples: 'shot down the object over Yukon, Canada'},
        {word: 'decline', type:"verb",meaning: 'to refuse',examples: 'The Canadian defence minister, Anita Anand, declined to speculate about the origin of the object,'},
        {word: 'aircraft', type:"noun",meaning: 'a vehicle (such as an airplane or balloon) for traveling through the air',examples: 'no object was found by fighter aircraft dispatched to investigate'},
        {word: 'dispatch', type:"verb",meaning: 'to send off or away with promptness or speed',examples: 'no object was found by fighter aircraft dispatched to investigate*dispatch a messenger'},
        {word: 'downing', type:"noun",meaning: 'derrubada',examples: 'The downing of the latest object over Canada'},
        {word: 'briefing', type:"noun",meaning: 'process of giving information, instructions, or a summary of important details',examples: 'At a White House press briefing on Friday afternoon, the national security council spokesperson John Kirby described the object as being the size of a small car'},
        {word: 'spokesperson', type:"noun",meaning: 'porta-voz; a person who speaks as the representative of another or others often in a professional capacity',examples: 'At a White House press briefing on Friday afternoon, the national security council spokesperson John Kirby described the object as being the size of a small car'},
        {word: 'recovery', type:"noun",meaning: 'process of regaining or restoring something that has been lost, damaged or impaired',examples: 'conducting search and recovery activities of the object*and personnel will adjust recovery operations to maintain safety'},
        {word: 'fleet', type:"noun",meaning: 'group of aircraft owned or operated by an airline or an air force',examples: 'US officials say the balloon was part of a fleet that has been used to collect intelligence'},
        {word: 'intelligence', type:"noun",meaning: 'information, news',examples: 'US officials say the balloon was part of a fleet that has been used to collect intelligence'},
        {word: 'rift', type:"noun/verb",meaning: 'A serious and deep disagreement or conflict between individuals, groups, or nations_crack, fissure, break',examples: 'The appearance of the Chinese balloon over US airspace has caused a rift in the strained and delicate relationship between the Chinese and US governments_The tectonic activity caused a significant rift in the earth\'s crust'},
        {word: 'strained', type:"adjective",meaning: 'describes a situation, relationship, or condition that is tense, stressed, or under pressure due to difficulties, conflicts, or excessive demands',examples: 'The appearance of the Chinese balloon over US airspace has caused a rift in the strained and delicate relationship between the Chinese and US governments'},
        {word: 'postpone', type:"transitive verb",meaning: 'delay, put off, defer',examples: 'The US secretary of state, Antony Blinken, postponed an trip to Beijing'},
        {word: 'sovereignty', type:"noun",meaning: 'supreme and independent authority and power of a state or a governing body to govern itself',examples: 'an irresponsible act and a clear violation of US sovereignty and international law that undermined the purpose of this trip'},
        {word: 'undermine', type:"transitive verb",meaning: 'weaken, subvert; used to describe actions or influences that have a harmful or negative impact on something, potentially leading to its destabilization or weakening',examples: 'an irresponsible act and a clear violation of US sovereignty and international law that undermined the purpose of this trip*The president has accused two cabinet members of working secretly to undermine his position/him'},
        {word: 'namely', type:"adverb",meaning: 'Specifically, that is to say, in particular, explicitly; used to introduce specific examples or to provide more precise information about something that has been mentioned',examples: 'There are a few shows that succeeded in this task, namely Netflix’s “Arcane” and “Castlevania”*The company focuses on three core values, namely innovation, sustainability, and customer satisfaction*The team consists of four members, namely Alex, Sarah, Mark, and Emily'},
        {word: 'concede', type:"verb",meaning: 'confess, admit, accept, recognize; to admit, often unwillingly, that something is true_[Transitive] To give something to someone, or allow them to have it, especially when you are unwilling to do so',examples: 'I’ll also concede that the “Resident Evil” and “Silent Hill” movies are kitschy fun in retrospect_ Local government has been forced to concede some of its authority to larger, regionally based, units'},
        {word: 'kitschy', type:"adjective",meaning: 'tacky; describes something that appeals to popular or lowbrow  (unsophisticated, simple) taste and is often of poor quality',examples: 'I’ll also concede that the “Resident Evil” and “Silent Hill” movies are kitschy fun in retrospect'},
        {word: 'prior', type:"adjective",meaning: 'earlier in time or order_more important',examples: 'Still, many prior video game adaptations to the screen have suffered from uninteresting characters and stories_Mothers with young children have a prior claim on funds'},
        {word: 'seamless', type:"adjective",meaning: 'to be a unified whole, with no clear distinctions or separations between its parts; smooth, continuous, and without any visible or noticeable interruptions',examples: 'instant mass appeal to how seamlessly it translates the language of video games to film*The transition between scenes in the movie was seamless, creating a cohesive and immersive viewing experience'},
        {word: 'trope', type:"noun",meaning: 'something such as an idea, phrase, or image that is often used in a particular artist\'s work, in a particular type of art, in the media, etc',examples: 'horror fiction trope'},
        {word: 'iteration', type:"noun",meaning: 'new version, adaptation, or implementation; the process of doing something again and again, usually to improve it, or one of the times you do it',examples: 'The Last of Us” delivers a fresh iteration on this formula*The graphic designer went through several iterations of the logo before settling on the final design'},
        {word: 'outbreak', type:"noun",meaning: 'a sudden rise in the incidence of; a time when something suddenly begins, especially a disease or something else dangerous or unpleasant',examples: 'This sci-fi pseudo-realist explanation is mainly a vehicle for a zombie outbreak*the outbreak of war'},
        {word: 'hive mind', type:"noun",meaning: 'refers to a concept in which a group of individuals think and act as a single collective entity, similar to the behavior of a bee colony or ant colony',examples: 'the zombies share a fungal hive mind'},
        {word: 'protrude', type:"intransitive verb",meaning: 'to extend or stick out from a surface or an enclosed space',examples: 'spores protrude from their mouths and eyes*A rotting branch protruded from the swamp like a ghostly arm'},
        {word: 'pileus caps', type:"noun",meaning: 'refer to the caps (= hat-like or umbrella-shaped part of the fungus that is located on its upper part) of mushrooms that belong to the Pileus genus or are generally used to describe the caps of various mushroom species',examples: 'spores protrude from their mouths and eyes, and pileus caps from the heads of more severely infected victims'},
        {word: 'resemblance', type:"noun",meaning: 'the fact that two people or things look like each other or are similar in some other way',examples: 'uncanny resemblance to humans'},
        {word: 'convey', type:"transitive verb",meaning: 'transmit; to communicate or express a message, information, or feeling in a way that others can understand or comprehend',examples: 'Survival necessitates a brutal military state, conveyed through scenes of helmeted soldiers killing and brutalizing innocent civilians*The difficulty is not because video games have poor stories, but because video games convey them through interactivity'},
        {word: 'loot', type:"noun/verb",meaning: 'to steal or rob; stolen or confiscated goods',examples: 'those who resist authoritarian rule descend into looting and gang warfare*The burglars escaped with a bag full of loot from the jewelry store'},
        {word: 'warfare', type:"noun",meaning: 'conflict, confrontation, fighting; use of armed forces and military strategies in a conflict or war between two or more parties',examples: 'those who resist authoritarian rule descend into looting and gang warfare'},
        {word: 'calloused', type:"adjective",meaning: 'person who has become emotionally hardened or insensitive due to difficult or challenging experiences; skin that has become toughened and thickened due to repeated friction, pressure, or irritation',examples: 'Pascal does a solid job as the stoic, calloused antihero*After months of hard work in the construction site, his hands became calloused and rough'},
        {word: 'portrayal', type:"noun",meaning: 'act of depicting or representing someone or something in a particular way, often through words, images, or actions',examples: 'The artist\'s powerful portrayal of despair in the painting resonated deeply with viewers*Her portrayal of a complex and conflicted character in the film showcased her versatility as an actress'},
        {word: 'warp', type:"verb",meaning: '[Intransitive] To go through a change or transformation in personality, behavior or mindset_[Transitive] To bend or twist so that the surface is no longer flat or straight; to alter the truth or reality',examples: 'Her portrayal of a teenager thrust into the mantle of worldly responsibility, who learns the symbiotic beauty and horror of the outside world and slowly warps in its presence, is enthralling*Years of negative experiences had warped his perception of trust, making it difficult for him to rely on others_ Water poured in, ruining carpets, warping walls, destroying wiring*The biased news coverage seemed to warp the facts to fit a specific political narrative*The intense heat caused the metal to warp, distorting the shape of the once perfectly straight beams'},
        {word: 'enthralling', type:"adjective",meaning: 'keeping someone\'s interest and attention completely',examples: 'The novel\'s enthralling plot captivated readers from the very first page*The documentary offered an enthralling glimpse into the lives of rare and exotic animals'},
        {word: 'reverse', type:"noun/verb",meaning: 'To change to an opposite state or direction, to undo or go back to a previous state, to overturn or invalidate',examples: 'Interestingly, the viewer’s alignment with Ellie is reversed from the 2013 video game, as the player piloted Joel and inhabited his perspective throughout*He reversed the car to get out of the tight parking spot*The reverse side of the coin features a different design than the front'},
        {word: 'pacing', type:"noun",meaning: 'rhythm, speed, and timing at which events unfold in a narrative, performance, or any other form of storytelling or presentation',examples: '“The Last of Us” arguably finds its greatest strength in its slow pacing*The author masterfully controlled the pacing of the novel, creating a sense of suspense that compelled readers to keep turning the pages'},
        {word: 'prelude', type:"noun",meaning: 'something that comes before a more important event or action that introduces or prepares for it',examples: 'which serves as a prelude to flashes of horror*The peaceful sunrise served as a prelude to a day filled with adventure and exploration*The brief meeting was just a prelude to the more in-depth discussions scheduled for later in the week'},
        {word: 'dreadful', type:"adjective",meaning: 'causing fear, shock, or suffering',examples: 'the most profound beats of the show are wordless and quietly dreadful'},
        {word: 'hubris', type:"noun",meaning: 'excessive pride, arrogance, or self-confidence, especially when accompanied by a lack of humility',examples: 'the hubris of celebrating the history of a society erased*His career suffered a setback due to his hubris, as he refused to seek advice or collaborate with colleagues*The athlete\'s hubris led to overestimating his abilities, resulting in a disappointing performance'},
        {word: 'formerly', type:"adverb",meaning: 'indicates that something was true or existed in the past, but it is no longer the case at present',examples: 'A formerly bustling Boston is liminal and absent*The company, formerly a small startup, has grown into a major player in the tech industry*This building was formerly a warehouse but has been converted into trendy loft apartments'},
        {word: 'bustling', type:"adjective",meaning: 'lively, vibrant, dynamic; describes a place or situation that is full of energetic and busy activity ',examples: 'A formerly bustling Boston is liminal and absent'},
        {word: 'liminal', type:"adjective",meaning: 'transitional, intermediate, in-between; describes something that is in the middle of changing or transitioning from one state to another',examples: 'A formerly bustling Boston is liminal and absent'},
        {word: 'absent', type:"adjective",meaning: 'not present, missing',examples: 'A formerly bustling Boston is liminal and absent'},
        {word: 'reclaim', type:"transitive verb",meaning: 'to take back something that was yours',examples: 'reclaimed by foliage in a grand display of eco-brutalism*She wants to reclaim her stolen bike'},
        {word: 'lug', type:"transitive verb",meaning: 'to carry or pull something with effort or difficulty because it is heavy',examples: 'Joel and other weary(tired) wage laborers lug infected corpses, dispatched en masse by the government, into a raging fire pit*I\'m exhausted after lugging these suitcases all the way across the city*I don\'t want to lug these shopping bags around with me all day'},
        {word: 'dispatch', type:"verb",meaning: 'to send off or away with promptness or speed',examples: 'Joel and other weary(tired) wage laborers lug infected corpses, dispatched en masse by the government, into a raging fire pit'},
        {word: 'humdrum', type:"adjective",meaning: 'ordinary; used to describe something that is dull, monotonous, lacking in excitement, or repetitive in nature',examples: 'In these moments, the viewer considers how humdrum this bizarre reality seems to its inhabitants*The humdrum routine of daily chores and responsibilities made him long for a change and some excitement in his life'},
        {word: 'fanfare', type:"noun",meaning: 'celebration',examples: 'There’s been much fanfare, according to The Independent, that “The Last of Us” is a critically and commercially successful video game adaptation*The grand opening of the new shopping mall was celebrated with fireworks and fanfare*The arrival of the celebrity at the event was accompanied by a fanfare of flashing cameras and enthusiastic cheers'},
        {word: 'employ', type:"transitive verb",meaning: 'make use of something for a specific function or objective_to have someone work or do a job for you and pay them for it',examples: 'Video games can employ mechanical difficulty to build a tone of desperation and isolation*The company decided to employ a new strategy to increase its market share*The teacher will employ interactive methods to keep the students engaged during the lesson_The manager plans to employ additional staff to meet the growing demands of the project'},
        {word: 'ease', type:"noun/verb",meaning: 'state of comfort, relaxation, or freedom from difficulty, stress, or pain; alleviate, to make something more comfortable or less difficult',examples: 'mechanical ease to empower the player in the narrative*He adjusted the chair\'s position to ease the back pain*The tension eased after they resolved their differences'},
        {word: 'inherent', type:"adjective",meaning: 'used to describe a characteristic or quality that is intrinsic, natural, or essential to someone or something',examples: 'The difficulty with adapting video games is that film and television are inherently noninteractive'},
        {word: 'feature', type:"transitive noun/verb",meaning: 'showcase or highlight someone or something in a prominent or special way_characteristic or attribute; prominent part of aspect',examples: 'Important to note is the show’s third episode, “Long, Long Time,” which features striking guest performances_One of the notable features of the new car model is its fuel efficiency*The main feature of the museum is its extensive collection of ancient artifacts'},
        {word: 'amid', type:"preposition",meaning: 'in the middle of or surrounded by',examples: 'secluded life amid the apocalypse'},
        {word: 'thus far', type:"idiom",meaning: 'so far, until now',examples: 'In a show thus far oscillating between thrill and longing*“The Last of Us” has thus far defied the odds and will only continue to do so'},
        {word: 'thrill', type:"noun/verb",meaning: 'refers to a feeling of excitement, pleasure, or exhilaration, often caused by something that is intense, suspenseful, or extraordinary',examples: ' In a show thus far oscillating between thrill and longing*Winning the championship was a thrill that the team had worked hard for all season'},
        {word: 'longing', type:"noun",meaning: 'expectation; strong, persistent desire or yearning for something or to do something',examples: 'In a show thus far oscillating between thrill and longing'},
        {word: 'stoke', type:"transitive verb",meaning: 'To stimulate or intensify emotions or feelings in someone; to increase the activity, intensity, or amount of',examples: 'an emotional rollercoaster that stokes melancholy in its viewers*limiting the number of cars available will help stoke demand for the car'},
        {word: 'revel', type:"intransitive verb",meaning: 'to take great pleasure, delight, or enjoyment in something',examples: 'It revels in weepy sentimentalism*The children revel in the freedom of summer vacation*Standing atop the mountain, he reveled in the breathtaking view of the sunrise'},
        {word: 'cloister', type:"verb",meaning: 'keep apart, seclude(isolar)',examples: 'a beautiful love story narratively cloistered from the rest of the characters and plot*a scientist who cloisters herself in a laboratory'},
        {word: 'oeuvre', type:"noun",meaning: 'the complete works of a writer, painter, or other artist',examples: 'his episode will only grow more profound as the show’s oeuvre expands*Critics and art historians often analyze the evolution of an artist\'s oeuvre to understand their creative journey'},
        {word: 'amidst', type:"preposition",meaning: 'in the middle of or surrounded by',examples: 'love can flourish amidst an unremittingly barren world'},
        {word: 'unremitting', type:"adjective",meaning: 'incessant, unceasing, perpetual; never stopping, becoming weaker, or failing',examples: 'love can flourish amidst an unremittingly barren world'},
        {word: 'barren', type:"adjective",meaning: 'unproductive, infertile',examples: 'love can flourish amidst an unremittingly barren world'},
        {word: 'raise the bar', type:"idiom",meaning: 'set a higher standard, expectation, or level of performance',examples: 'It challenges the popular beliefs of what is possible with adaptation and continues to raise the bar for artistic expression in the streaming age'},
        {word: 'bated breath', type:"idiom",meaning: 'in an anxious (= worried and nervous) or excited way',examples: 'I will continue to follow Joel and Ellie’s story with bated breath over the next six weeks'},
        {word: 'soup up', type:"transitive phrasal verb",meaning: 'INFORMAL: To increase the power, efficiency, or performance of something, especially when it is old',examples: 'Essentially a souped-up chatbot*He decided to soup up his car by adding a turbocharger and custom exhaust system*The team decided to soup up their website, adding new features and a more user-friendly interface'},
        {word: 'churn out', type:"transitive phrasal verb",meaning: 'to produce large amounts of something quickly, usually something of low quality',examples: 'the AI program can churn out answers to the biggest and smallest questions in life*The factory is designed to churn out thousands of units per day to meet the high demand*Despite the tight deadline, the team managed to churn out a high-quality presentation for the important client.'},
        {word: 'draw up', type:"phrasal verb",meaning: 'to create or compose a written document, such as a contract, agreement, plan, or proposal_to pull something upward_to design or formulate',examples: 'draw up college essays, fictional stories, haikus, and even job application letters_She drew up the bucket from the well_The chef will draw up a menu featuring a variety of dishes for the restaurant'},
        {word: 'draw on', type:"phrasal verb",meaning: 'utilize or access something as a resource or reference_to rely or depend on_to approach or come nearer in time',examples: 'It does this by drawing on what it has gleaned from a staggering amount of text on the internet_The team drew on their collective strengths to win the championship_As the evening drew on, the temperature began to drop'},
        {word: 'glean', type:"intransitive verb",meaning: 'to collect information in small amounts and often with difficulty',examples: 'It does this by drawing on what it has gleaned from a staggering amount of text on the internet'},
        {word: 'staggering', type:"adjective",meaning: 'very shocking and surprising, astonishing, overwhelming',examples: 'It does this by drawing on what it has gleaned from a staggering amount of text on the internet'},
        {word: 'emerge', type:"verb",meaning: 'come into view, to become apparent, or to come out from a hidden or concealed state',examples: 'the program is the latest to emerge from OpenAI*As the fog lifted, a breathtaking view of the mountains began to emerge*The truth began to emerge as more witnesses came forward with their accounts of the incident'},
        {word: 'scale up', type:"verb",meaning: 'increase the size, scope, or capacity of something, typically a business, operation, project, or process',examples: 'it is a bit like predictive text on a mobile phone, but scaled up massively*The company decided to scale up its production to meet the growing demand for its products'},
        {word: 'fine-tune', type:"verb",meaning: 'to make small adjustments or refinements to something in order to improve its performance, accuracy, or effectiveness',examples: 'the initial language model was fine-tuned by feeding it a vast number of questions and answers*The mechanic had to fine-tune the engine to improve fuel efficiency'},
        {word: 'work out', type:"transitive phrasal verb",meaning: 'to solve a problem, figure out an answer, or find a solution to a challenging situation',examples: 'ChatGPT is often highly impressive at working out what information a question is really after*I couldn\'t figure out the math problem at first, but after some time, I finally worked it out*Mary and John had a disagreement, but they managed to work it out through open communication and compromise*The engineers are trying to work out the technical issues before the product launch'},
        {word: 'frame', type:"transitive verb",meaning: 'to formulate or express_to set up or arrange_to put into perspective or context',examples: 'framing a response in a natural manner_They framed the stage for the theater performance_The issue should be framed in terms of its long-term impact'},
        {word: 'attest', type:"verb",meaning: 'confirm, affirm; to show, say, or prove that something exists or is true',examples: 'college students who see it as a saviour for late assignments will attest*Thousands of people came out onto the streets to attest their support for the democratic opposition party'},
        {word: 'handle', type:"noun",meaning: '',examples: ''},
        {word: 'nonsensical', type:"adjective",meaning: 'preposterous, unreasonable, senseless; lacking sense, logic, or meaning',examples: 'ChatGPT will sometimes write plausible-sounding but incorrect or nonsensical answers*The detective solved the case with a nonsensical theory involving time-traveling rubber chickens*The comedian told a series of nonsensical jokes that left the audience in stitches'},
        {word: 'biased', type:"adjective",meaning: 'have a tendency to favor one side or have a preconceived opinion that influences their judgment or behavior, often without being objective or fair',examples: 'will sometimes respond to harmful instructions or exhibit biased behaviour'},
        {word: 'long-winded', type:"adjective",meaning: 'excessively wordy, verbose, or lengthy',examples: 'it can also give long-winded replies, a problem its developers put down to trainers preferring longe answers that loook more comprehensive*The professor\'s explanation was so winded that some students lost interest'},
        {word: 'put down', type:"phrasal verb",meaning: 'attribute something as the cause of something else_disapprove or criticize_Cease an activity_Write or record information_Euthanize an animal',examples: 'it can also give long-winded replies, a problem its developers put down to trainers preferring longe answers that loook more comprehensive*The increase in crime can be put down to socioeconomic factors_She felt hurt when her peers put her down for her ideas*It\'s not right to put down others just to make yourself feel better_The rebellion was forcefully put down by the authorities_I need to put down these thoughts in my journal before I forget_Unfortunately, we had to put down our old dog because of its health issues'},
{word: 'stitch',type: 'noun', 
meaning: 'a piece of thread sewn in cloth, or the single movement of a needle and thread into and out of the cloth_to sew two things together, or to repair something by sewing_can refer to a sharp pain caused by not breathing enough when running or laughing', 
examples: 'Secure the two pieces together with a couple of stitches_I had to carefully stitch the torn pages of the book back together*This button needs to be stitched back onto my shirt_As I was running, I suddenly felt a sharp stitch in my side*I got a stitch after running for the bus'},
{word: 'subdue',type: 'verb transitive', 
meaning: 'to bring under control, conquer, suppress', 
examples: 'The security forces were called in to subdue the riot and prevent further violence*The army worked hard to subdue the rebellion and restore order*the police officer had to subdue the aggressive suspect to make an arrest*she took deep breaths to subdue her rising anxiety before the presentation*The fire burned for eight hours before the fire crews could subdue it*He criticized the school for trying to subdue individual expression'},
{word: 'poke',type: 'noun/verb', 
meaning: 'to push a finger or other pointed object quickly into someone or something_to (cause something to) appear or stretch out from behind or through something else_to take a quick look at something', 
examples: 'She decided to poke the balloon with a pin, causing it to burst*The chef carefully poked the chicken with a thermometer to check its internal temperature*She gave me a poke in the stomach_Cathy poked her head round the door to say hello*Josie poked her head around the corner to see what made the noise_She took a poke at the newspaper headlines before heading to work'},
{word: 'unleash',type: '', 
meaning: '', 
examples: ''},
{word: 'bestow',type:'verb', 
meaning: 'to offer or present someone with something as a honour or gift', 
examples: 'She wished to bestow a special gift upon her best friend for their birthday*the country’s highest medal was bestowed upon him for heroism*The boss decided to bestow a promotion on the employee'},
{word: 'whim',type: 'noun', 
meaning: 'sudden and unpredictable notion or desire, often a passing or impulsive thought', 
examples: 'sudden and unpredictable notion or desire, often a passing or impulsive thought*He bought that antique vase on a whim, captivated by its unique design*The decision to change her hair color was purely on a whim, inspired by a passing trend'},
{word: 'wit',type: 'noun', 
meaning: 'mental sharpness/inteligence, natural aptitude for using words and ideas in a quick and inventive way to create humor, or a person who has these traits', 
examples: 'She is known for her quick wit and ability to make clever and amusing remarks*His wit and intelligence made him a formidable debater*Her wit was evident as she quickly solved the complex puzzle'},
{word: 'restrain',type: 'verb transitive', 
meaning: 'to limit the growth or force of something or to control someone\'s actions or behaviour, especially by stopping them from doing something,', 
examples: 'The dog owner used a leash to restrain his energetic puppy during their walk in the park*The company decided to restrain its budget in order to weather the economic downturn*She had to restrain herself from responding angrily to the provocation*I could hardly restrain my laughter'},
{word: 'embody',type: 'verb transitive', 
meaning: 'to represent or exemplify a particular quality, idea, or characteristic', 
examples: 'she embodies grace and elegance in her every movement*The statue perfectly embodies the spirit of freedom'},
{word: 'demeanor',type: 'noun', 
meaning: 'person\'s outward behavior, conduct, or overall way of presenting themselves', 
examples: 'Despite the chaos, she maintained a calm demeanor throughout the meeting*His friendly demeanor made it easy for newcomers to feel welcome*His authoritative demeanor made it clear that he was in charge'},
{word: 'wrangle',type: 'noun/verb', 
meaning: 'to engage in a dispute or argument or an argument, especially one that continues for a long time_to take care of or deal with someone or something, usually when this is difficult_to succeed in getting something by persuading someone or by being clever in some way, to obtain or secure something through effort_to move a person or thing somewhere, usually with difficulty or using force_to round up or herd livestock', 
examples: 'he two colleagues continued to wrangle over the budget proposal*I had a wrangle with a web designer who had ignored pretty much everything I told him*The joint venture ended in a legal wrangle between the two companies_She had to wrangle the chaotic group of children at the playground*She has to wrangle classes of over 30 students*He was wrangling with the issue of whether to sign the contract or not_After much negotiation, he managed to wrangle a better deal*She managed to wrangle an invitation to the White House concert_She wrangled the children into their seats in the back of the car*they were arrested and wrangled into the police car_The cowboy had to wrangle the cattle back into the pen'},
{word: 'snag',type: 'noun countable', 
meaning: 'INFORMAL: unexpected or hidden obstacle/drawback/problem/difficulty/disadvantage', 
examples: 'The drug is very effective - the only snag is that it cannot be produced in large quantities'},
{word: 'thresh',type: 'verb', 
meaning: 'to remove the seeds of crop plants by hitting them, using either a machine or a hand tool', 
examples: 'The farmers spent the day threshing wheat in the fields*The sound of threshing machines echoed across the countryside during harvest season'},
{word: 'writhe',type: 'verb intransitive', 
meaning: 'contorcer, make twisting movements with the body', 
examples: 'The pain was so unbearable that he was writhing in agony'},
{word: 'pinch',type: 'verb', 
meaning: 'To squeeze or press tightly, to compress between the thumb and fingers_To steal or take without permission_To be in a situation of scarcity or shortage_An awkward situation or difficulty', 
examples: 'She pinched her cheeks to add some color*He pinched his son\'s shoulder affectionately*Her shoes pinched her toes_Someone pinched my wallet while I wasn\'t looking_We\'re in a pinch for time; we need to hurry_He found himself in a pinch when his car broke down'},
{word: 'smithereens',type: 'noun', 
meaning: 'tiny fragments', 
examples: 'so many movies involve everyone and everything being blown to smithereens*The demolition crew used explosives to blow the old building to smithereens*The car crashed into the wall and smashed into smithereens*The tornado tore the wooden fence to smithereens*The mirror fell from the wall and shattered into smithereens'},
{word: 'reap',type: 'verb', 
meaning: 'to cut and collect a grain crop_to achieve something, usually something good', 
examples: 'He cleared away the forest and, with his own hands, planted, sowed, and reaped_She studied every evening and reaped the benefit at exam time'},
{word: 'encounter',type: 'noun/verb', 
meaning: 'a meeting, especially one that happens by chance', 
examples: 'This meeting will be the first encounter between the party leaders since the election* I had an alarming encounter with a wild pig*On their way home they encountered a woman selling flowers*'},
{word: 'entice',type: 'verb', 
meaning: 'attract or tempt by offering pleasure or advantage', 
examples: 'We are the entry for entities to entice and entertain (from Imagine Dragons)*The ads entice the customer into buying things they don\'t really want'},
{word: 'defiance',type: 'uncountable noun', 
meaning: 'bold disobedience, resistance', 
examples: 'They are continuing to publish their newspaper, in defiance of government attempts to close it down*The demonstration is a pointless act/gesture of defiance against the government'},
{word: 'commendable',type: 'adjective', 
meaning: 'Praiseworthy, admirable', 
examples: 'While adopting a vegan or vegetarian diet is commandable, it may not be possible for everyone'},
{word: 'thorough',type: 'adjective', 
meaning: 'Comprehensive, complete, detailed, careful', 
examples: 'a thorough revision of the manuscript*They did a thorough search of the area but found nothing*She is a very thorough person'},
{word: 'havoc',type: 'noun uncountable', 
meaning: 'confusion and lack of order, especially causing damage or trouble', 
examples: 'The storm wreaked (= caused) havoc in the garden, uprooting trees and blowing a fence down*The storm created complete havoc in the park'},
{word: 'demise',type: 'noun uncountable', 
meaning: 'Death_the end of something that was previously considered to be powerful, such as a business, industry, or system', 
examples: 'His demise will not be in vain_The demise of the company was sudden and unexpected'},
{word: 'born with a silver spoon',type: 'idiom', 
meaning: 'When someone is born with a silver spoon in their mouth, it means they come from a rich background', 
examples: 'She was born with a silver spoon in her mouth, therefore, she doesn\'t know a thing about being in such condition'},
{word: 'widespread',type: '', 
meaning: 'difundido, existing or happening in many places and/or among many people', 
examples: 'The campaign has received widespread support*It is a widespread '},
{word: 'wary',type: 'adjective', 
meaning: 'cautions, suspicious, or alert to potencial dangers or problems', 
examples: 'She was wary of strangers offering her a ride home'},
{word: 'bogus',type: 'adjective', 
meaning: 'fake', 
examples: 'She produced some bogus documents to support her application*the company was caught selling bogus products that claimed to cure diseases'},
{word: 'phony',type: 'adjective informal', 
meaning: 'fake, not real, not sincere', 
examples: 'She quickly saw through his phony smile and knew he was hiding something*His phony excuse for being late to work didn\'t fool anyone'},
{word: 'hoax',type: 'noun countable', 
meaning: 'a plan to deceive someone, a trick', 
examples: 'The bomb threat turned out to be a hoax* He\'d made a hoax call claiming to be the president'},
{word: 'ingenious',type: 'adjective', 
meaning: 'criative, intelligent', 
examples: 'His ingenious solution saved the company a lot of money'},
{word: 'call at',type: 'idiom', 
meaning: 'to make a quick stop', 
examples: 'I\'ll call at your house*The ship called at the port'},
{word: 'deed',type: 'noun countable', 
meaning: 'action', 
examples: 'the noble deed of rescuing the stranded hikers earned him the title of a hero*Actions speak louder than words; let your deeds reflect your intentions*The community came together to celebrate the good deeds of its members'},
{word: 'dupe',type: 'verb transitive', 
meaning: 'to deceive someone, usually by making that person do something that they did not intend to do', 
examples: 'The girls were duped by drug smugglers into carrying heroin for them',
},
{word: 'uptight',type: 'adjective', 
meaning: 'tense, anxious, or nervous, especially in social situations or under pressure', 
examples: 'She\'s always so uptight about meeting new people; she worries too much about making a good impression*Don\'t be so uptight about the rules; sometimes it\'s okay to bend them a little*Even though it was just a casual get-together, she seemed uptight and uncomfortable the whole time'},
{word: 'compel',type: 'verb transitive', 
meaning: 'to force someone to do something', 
examples: 'I feel compelled to help those in need whenever I can*The urgent situation compelled us to take immediate action*the heartbreaking plea from the orphan compelled many to donate to the charity'},
{word: 'loathe',type: 'verb transitive', 
meaning: 'hate, dislike greatly and often with disgust or intolerance', 
examples: 'this is one of the best songs that ever was written about suicidal thoughts and self loathing*She always loathed doing housework'},
{word: 'clutch',type: 'verb', 
meaning: 'to take or try to take hold of something or someone tightly, usually in fear, worry, or pain', 
examples: 'Clutching my cure, I tightly lock the door (from Linkin Park)*Silent and pale, she clutched onto her mother\'s hand*He collapsed, clutching his stomach'},
{word: 'vent',type: 'verb', 
meaning: 'desabafar', 
examples: 'I appreciate you letting me vent about my problems*It feels good to have someone to vent to when things get tough*I\'m sorry I vented on you earlier. I was really stressed out and didn\'t mean to take it out on you'},
{word: 'outgoing',type: 'adjective', 
meaning: 'friendly and socially confident, sociável', 
examples: 'Being outgoing can help you network and build connections*She has an outgoing personality, always eager to meet new people*He\'s the outgoing type, always organizing social events'},
{word: 'beam',type: 'noun/verb', 
meaning: 'a line of light that shines from a bright object', 
examples: 'The rabbit stopped, mesmerized by the beam of the car\'s headlights*a laser beam*the sun beamed (= shone brightly) down on the boat as it drifted along'},
{word: 'on pins and needles',type: 'idiom', 
meaning: 'used to describe a state of nervousness or anxious anticipation', 
examples: 'I\'ve been on pins and needles waiting for the test results'},
{word: 'assemble',type: '', 
meaning: '', 
examples: ''},
{word: 'swift',type: '', 
meaning: '', 
examples: ''},
{word: 'demoted',type: '', 
meaning: '', 
examples: ''},
{word: 'pruny',type: '', 
meaning: '', 
examples: ''},
{word: 'vile',type: '', 
meaning: '', 
examples: ''},
{word: 'worthwhile',type: '', 
meaning: '', 
examples: ''},
{word: 'understated',type: '', 
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
examples: ''},{word: '',type: '', 
meaning: '', 
examples: ''},{word: '',type: '', 
meaning: '', 
examples: ''},{word: '',type: '', 
meaning: '', 
examples: ''},{word: '',type: '', 
meaning: '', 
examples: ''},
]

songs = sortWords(songs,'word')

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
       splitexamples = wordSearched.examples.split('_')
       dosplit = true
       }else{ 
        dosplit = false
       }
       splitmeanings = wordSearched.meaning.split('_')
    
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
       lit.innerText = splitmore[a].replace(splitmore[a].charAt(0), splitmore[a].charAt(0).toUpperCase())
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


function sortWords(palavrasPrimitivas,s) {

    alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
palavrasNumericas = []
posicaoPalavras = []


for (palavra in palavrasPrimitivas) {
    word = palavrasPrimitivas[palavra][s]
    wordToNumber = ''
    for (letra = 0; letra < word.length; letra++) {
        if (letra != word.length - 1) {
            wordToNumber += `${alfabeto.indexOf(word[letra])}.`
        } else {
            wordToNumber += `${alfabeto.indexOf(word[letra])}`
        }}
    palavrasNumericas.push(wordToNumber)
    posicaoPalavras.push(palavra)
}

for (pNumber in palavrasNumericas) {
    stop = false
    for (n = 0; stop == false && n < pNumber; n++) {
        if (n != pNumber) {
            palavraAnalisar = []
            numint = ''
            for (num = 0; num < palavrasNumericas[n].length; num++) {
                   if (palavrasNumericas[n][num] == '.') {
                    palavraAnalisar.push(numint)
                    numint = ''
                   }else if(num == palavrasNumericas[n].length - 1){
                        numint += `${palavrasNumericas[n][num]}`
                        palavraAnalisar.push(numint)
                   }else{
                    numint += `${palavrasNumericas[n][num]}`
                   }}
            palavraOrigin = []

            numint = ''
            for (num = 0; num < palavrasNumericas[pNumber].length; num++) {
                   //⬜
                   if (palavrasNumericas[pNumber][num] == '.') {
                    //⬜
                    palavraOrigin.push(numint)
                    numint = ''
                   }else if(num == palavrasNumericas[pNumber].length - 1){
                        numint += `${palavrasNumericas[pNumber][num]}`
                        palavraOrigin.push(numint)
                   }else{
                    numint += `${palavrasNumericas[pNumber][num]}`
                   } }
        
           if (palavraOrigin.length > palavraAnalisar.length) {
             pare = false
             for (numb = 0; numb < palavraAnalisar.length && pare == false; numb++) {
              if (Number(palavraAnalisar[numb]) < Number(palavraOrigin[numb])) {
                pare = true
              }else if (Number(palavraAnalisar[numb]) > Number(palavraOrigin[numb])) {
                pare = true
                stop = true
                palavraSubir = palavrasNumericas[pNumber]
                wordposition = posicaoPalavras[pNumber]
                for (posicao = pNumber; posicao > n; posicao--) {
                  palavrasNumericas[posicao] = palavrasNumericas[posicao - 1]
                  posicaoPalavras[posicao] = posicaoPalavras[posicao - 1]
                }
                palavrasNumericas[n] = palavraSubir
                posicaoPalavras[n] = wordposition
              }else{
                  pare = false
              }}
           }else{
            pare = false
            for (numb = 0; numb < palavraOrigin.length && pare == false; numb++) {
                if (Number(palavraAnalisar[numb]) < Number(palavraOrigin[numb])) {
                    pare = true
                  }else if (Number(palavraAnalisar[numb]) > Number(palavraOrigin[numb])) {
                    pare = true
                    stop = true
                    palavraSubir = palavrasNumericas[pNumber]
                    wordposition = posicaoPalavras[pNumber]
                    for (posicao = pNumber; posicao > n; posicao--) {
                      //⬜
                      palavrasNumericas[posicao] = palavrasNumericas[posicao - 1]
                      posicaoPalavras[posicao] = posicaoPalavras[posicao - 1]
                    }
                    palavrasNumericas[n] = palavraSubir
                    posicaoPalavras[n] = wordposition
                  }else{
                      pare = false
                  }}}}}}
newlista = []
for (p in palavrasNumericas) {
newlista.push(palavrasPrimitivas[posicaoPalavras[p]])
}
return newlista
}