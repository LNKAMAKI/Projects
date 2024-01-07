
initialcontent = ''
function get1(thist) {
    return document.getElementById(thist)
}

function get2(thist) {
    return document.getElementsByClassName(thist)
}

// Materiais Array
contents = [
    {title:'The Story Of An Hour', url:'html-logo.svg',subs:[
        {title: 'break to', type:"transitive phrasal verb",meaning: 'tell',examples: 'great care was taken to break to her as gently as possible'},
        {title: 'conceal', type:"verb",meaning: 'conceal means to hide, cover, or keep something out of sight or from the knowledge of others intentionally. It involves keeping something secret or not making it visible or apparent',examples: 'veiled hints that revealed in half concealing@She concealed the gift behind her back, hoping to surprise her friend later@He couldn\'t conceal his excitement when he heard the news of his promotion'},
        {title: 'intelligence', type:"noun",meaning: 'information, news',examples: 'he had been in the newspaper office when intelligence of the railroad disaster was received@the government had intelligence from several different sources'},
        {title: 'hasten', type:"verb",meaning: '[Intransitive] To say or do something without delay; hurry_[Transitive] To make something happen sooner or more quickly',examples: 'and had hastened to forestall any less careful, less tender friend in bearing the sad message_The treatment she received may, in fact, have hastened her death'},
        {title: 'forestall', type:"transitive verb",meaning: 'to prevent something from happening or somebody from doing something by doing something first',examples: 'and had hastened to forestall any less careful, less tender friend in bearing the sad message@Try to anticipate what your child will do and forestall problems'},
        {title: 'tender', type:"adjective",meaning: 'kind, gentle and loving_easy to bite through and cut (food)_painful when you touch it (part of the body)_easily hurt or damaged; delicate',examples: 'and had hastened to forestall any less careful, less tender friend in bearing the sad message_This meat is extremely tender_My leg is still very tender where I banged it'},
        {title: 'bear', type:"verb",meaning: '[Transitive] To show something; to carry something so that it can be seen_[Transitive] To be able to accept and deal with something unpleasant; stand, to support the weight of somebody or something_[Transitive] To take responsibility for something_[Intransitive] turn',examples: 'and had hastened to forestall any less careful, less tender friend in bearing the sad message@He was badly wounded in the war and still bears the scars@She bears little resemblance to (= is not much like) her mother_She couldn\'t bear the thought of losing him@The ice is too thin to bear your weight_In the end it\'s consumers who bear the burden of higher prices_When you get to the fork in the road, bear right'},
        {title: 'weep', type:"verb",meaning: 'to cry, usually because you are sad',examples: 'she wept at once, with sudden, wild abandonment, in her sister\'s arms_She wept bitter tears of disappointment'},
        {title: 'grief', type:"noun",meaning: 'a very sad feeling, especially when somebody dies_[Uncountable] (Informal) problems and worry',examples: 'when the storm of grief had spent itself she went away to her room alone@They were able to share their common joys and griefs_He caused his parents a lot of grief'},
        {title: 'haunt', type:"verb",meaning: 'assombrar; pursue, follow, or appear repeatedly and persistently',examples: 'pressed down by a physical exhaustion that haunted her body and seemed to reach into her soul'},
        {title: 'aquiver', type:"adjective",meaning: 'trembling, shaking',examples: 'trees that were all aquiver with the new spring life'},
        {title: 'peddler', type:"noun",meaning: 'a person who goes from place to place selling small items',examples: 'in the street below a peddler was crying his wares'},
        {title: 'cry', type:"verb",meaning: 'to say something loudly',examples: 'in the street below a peddler was crying his wares'},
        {title: 'ware', type:"noun",meaning: 'objects made of the material or in the way or place mentioned; objects used for the purpose or in the room mentioned',examples: 'ceramic ware@silverware@a colletion of local ware@homeware@kitchenware'},
        {title: 'sparrow', type:"noun",meaning: 'pardal',examples: 'countless sparrows were twittering in the eaves'},
        {title: 'twitter', type:"verb",meaning: 'sound produced by birds',examples: 'countless sparrows were twittering in the eaves'},
        {title: 'eave', type:"noun",meaning: 'the part of a roof that meets or overhangs the walls of a building',examples: 'countless sparrows were twittering in the eaves'},
        {title: 'roomy', type:"adjective",meaning: 'spacious',examples: 'there stood, facing the open window, a comfortable, roomy armchair'},
        {title: 'patch', type:"noun",meaning: 'a small area of something, especially one which is different from the area around it_a small piece of material that is used to cover a hole in something or to make a weak area stronger, or as decoration; a piece of material that you sew onto clothes as part of a uniform',examples: 'there were patches of blue sky showing here and there_I sewed patches on the knees of my jeans@He wears a patch from his employer, Verizon'},
        {title: 'sob', type:"verb",meaning: '[Intransitive] To cry noisily, taking sudden, sharp breaths_to say something while crying',examples: 'as a child who has cried itself to sleep continues to sob in its dreams_He sobbed out his troubles'},
        {title: 'fair', type:"adjective",meaning: 'pale',examples: 'with a fair, calm face'},
        {title: 'bespeak', type:"transitive verb",meaning: 'to show or suggest something',examples: 'whose lines bespoke repression and even a certain strength'},
        {title: 'dull', type:"adjective",meaning: 'not interesting or exciting; dreary_not bright or shiny; not clear or loud_not very severe, but continuous',examples: 'there was a dull stare in her eyes_dull knives@The fire died down to a dull glow@The gates shut behind him with a dull thud_dull ache/pain'},
        {title: 'yonder', type:"adverb",meaning: ' "used to indicate a location that is at a distance from both the speaker and the listener; over there',examples: 'whose gaze was fixed away off yonder on one of those patches od blue sky@Whose is that farm over yonder?@Let\'s meet by the big oak tree yonder'},
        {title: 'glance', type:"noun/verb",meaning: 'quick view or a glimpse of something',examples: 'it was not a glance of reflection, but rather indicated a suspension of intelligent thought@I glanced up quickly to see who had come in@She glanced through the report@He glanced briefly down the list of names@I only had time to glance at my emails'},
        {title: 'elusive', type:"adjective",meaning: 'difficult to find, define or achieve',examples: 'she did not know; it was too subtle and elusive to name@the elusive concept of \'literature\'@A solution to the problem of toxic waste is proving elusive'},
        {title: 'strive', type:"intransitive verb",meaning: 'to try very hard to achieve something;struggle',examples: 'she was striving to beat it back with her will@We encourage all members to strive for the highest standards@They were always striving towards perfection@striving against corruption'},
        {title: 'slender', type:"adjective",meaning: 'thin, slim',examples: 'two white slender hands'},
        {title: 'keen', type:"adjective",meaning: 'enthusiastic about an activity or idea, etc',examples: 'they(her eyes) stayed keen and bright@His father was keen for him to go to university@ I wasn\'t too keen on going to the party'},
        {title: 'save', type:"conjunction",meaning: 'exceto',examples: 'the face that had never looked save with love upon her'},
        {title: 'bend', type:"verb",meaning: 'dobrar, inclinar',examples: 'there would be no powerful will bending hers in that blind persistance@He bent his head and kissed her@The road bends to the left'},
        {title: 'private will', type:"noun",meaning: 'vontade pessoal',examples: 'which men and women believe they have a right to impose a private will upon a fellow-creature'},
        {title: 'fellow-creature', type:"noun",meaning: 'parceiro',examples: 'which men and women believe they have a right to impose a private will upon a fellow-creature'},
        {title: 'self-assertion', type:"noun",meaning: 'the quality of being very confident(self-assured) and not afraid to express your opinions',examples: 'what could love, the unsolved mistery, count for in the face of this possession of self-assertion'},
        {title: 'fancy', type:"adjective/noun",meaning: 'imagination_describes something that is decorative, stylish, or appealing, often implying a sense of elegance or sophistication',examples: 'her fancy was running riot along those days ahead of her_very fancy clothes'},
        {title: 'shudder', type:"noun/intransitive verb",meaning: 'to shake because you are cold or frightened, or because of a strong feeling',examples: 'iti was only yesterday she had thought with a shudder that life might be long@Alone in the car, she shuddered with fear'},
        {title: 'at length', type:"idiom",meaning: 'after a long time;finally',examples: 'she arose at length and opened the door to her sister\'s importunities'},
        {title: 'grip-sack', type:"noun",meaning: 'duffel bag; ​a bag made out of cloth that is like a tube in shape and is closed by a string around the top. It is usually carried over the shoulder',examples: 'carrying his grip-sack and umbrella'},
        {title: 'screen', type:"transitive verb",meaning: 'hide',examples: 'screen him from the view of his wife'},
        {title: 'piercing', type:"adjective",meaning: 'high-pitched, agudo',examples: 'he stood amazed at Josephine piercing cry'}
    ]}, 
 
    {title:'Appointment With Love', url:'html-logo.svg',subs:[
        {title: 'booth', type:"noun",meaning: 'cabine; ​a small place with walls or sides where you can do something privately, for example make a phone call or vote',examples: 'the great round clock over the information booth in Gand Central Station@a ticket booth; a phone booth'},
        {title: 'narrow', type:"noun/verb",meaning: 'estreito; measuring a short distance from one side to the other, especially in relation to length',examples: 'his eyes narrowed to note the exact time@There was only a narrow gap between the bed and the wall'},
        {title: 'pound', type:"verb",meaning: 'bater, beat, strike',examples: 'his heart was pounding with a beat that shocked him because he could not control it'},
        {title: 'yet', type:"conjunction/adverb",meaning: 'used to contrast or introduce an unexpected or conflicting idea after a positive statement_used in negative sentences and questions to talk about something that has not happened but that you expect to happen',examples: 'the woman he had never seen, yet whose written words had been with him and sustained him unfailingly_Are we there yet?@We don\'t yet know what really happened'},
        {title: 'unfailingly', type:"adverb",meaning: 'infalivelmente; in a way that you can rely on to always be there and always be the same',examples: 'whose written words had been with him and sustained him unfailingly'},
        {title: 'besiege', type:"transitive verb",meaning: 'surround; siege',examples: 'beyond the ring of people besieging the clerks@Paris was besieged for four months and forced to surrender@Fans besieged the box office to try and get tickets for the concert'},
        {title: 'clerk', type:"noun",meaning: 'attendant; a person whose job is to serve customers',examples: 'beyond the ring of people besieging the clerks'},
        {title: 'midst', type:"noun",meaning: 'the middle part of something',examples: 'his plane had been caught in the midst of a pack of Zeros'},
        {title: 'grinning', type:"adjective/verb",meaning: 'A "grin" is a broad and often slightly mischievous or pleased smile, where the corners of the mouth are turned upward',examples: 'he had seen the grinning face of one of the enemy pilots@Stop grinning and tell me what happened!'},
        {title: 'sharp', type:"adjective",meaning: 'quick to notice or understand things or to react; focused; alert_sudden, rapid and large',examples: 'his face grew sharp@It was very sharp of you to see that!_a sharp rise in crime@sharp increase in unemployment'},
        {title: 'weave', type:"verb",meaning: 'tecer; to make cloth, a carpet, a basket, etc. by crossing threads(fios) or narrow pieces of material across, over and under each other',examples: 'threads of color being woven into a gray web'},
        {title: 'bondage', type:"noun",meaning: 'escravidão; the state of being a slave or prisoner; used metaphorically to describe a state of being emotionally or psychologically trapped, restricted, or controlled',examples: 'the book "Of Human Bondage"@women’s liberation from the bondage of domestic life'},
        {title: 'writing-in-habit', type:"noun",meaning: 'habit of writing on books',examples: 'he had always hated that writing-in-habit but these remarks(notes) were different'},
        {title: 'understanding', type:"adjective/noun",meaning: 'compreensivo; quality of person who understands why people behave in a particular way and forgives them when they do something wrong',examples: 'he had never believed that a woman could see into a man\'s heart so tenderly, so understandingly@We must tackle(deal with) the problem with sympathy and understanding'},
        {title: 'ship out', type:"phrasal verb",meaning: 'to leave or depart from a place, often referring to military personnel or individuals on a voyage_to send or transport goods or products from one place to another, especially from a seller to a customer',examples: 'next day he had been shipped out_The company will ship out the orders to customers by the end of the week'},
        {title: 'faithfully', type:"adverb",meaning: 'fielmente; in a way that shows true commitment; in a way that you can rely on',examples: 'she had faithfully replied'},
        {title: 'plea', type:"noun",meaning: 'beg; a serious emotional request, especially for something needing action now',examples: 'but she had refused all his pleas to send him her phothograph'},
        {title: 'haunt', type:"verb",meaning: 'assombrar; pursue, follow, or appear repeatedly and persistently',examples: 'I\'d be always haunted by the feeling that you had been taking chance on just that'},
        {title: 'take chance', type:"idiom",meaning: 'to take a risk or engage in something that has an uncertain outcome; refers to the willingness to try something despite the possibility of failure or negative consequences',examples: 'I\'d be always haunted by the feeling that you had been taking chance on just that@"He decided to take a chance and invest his savings in the new startup'},
        {title: 'plain', type:"adjective",meaning: 'lacking beauty or ugliness',examples: 'suppose I\'m plain (and you must admit that this is more likely)'},
        {title: 'go on', type:'intransitive phrasal verb',meaning: 'to continue_to take place(happen)',examples: 'both of us are free to stop or go on after that_what is going on here?'},
        {title: 'pale', type:"adjective",meaning: 'pálido',examples: 'in her pale green suit she was like springtime come alive'},
        {title: 'entirely', type:"adverb",meaning: 'completely',examples: 'entire forgetting to notice that she was wearing no rose'},
        {title: 'tuck', type:"verb",meaning: 'enfiar, acomodar; to push or fit something tightly or snugly into a space',examples: 'her graying hair tucked under a worn hat@tuck in your shirt'},
        {title: 'worn', type:"adjective",meaning: 'desgastado',examples: 'her graying hair tucked under a worn hat'},
        {title: 'plump', type:"adjective",meaning: 'euphemism for saying someone is fat',examples: 'she was more than plump'},
        {title: 'thrust', type:"adjective/verb",meaning: 'enfiado, enfiar; to cause to enter or pierce something by or as if by pushing; to push suddenly and strongly',examples: 'her thick-ankled feet were thrust into low-heeled shoes@thrust a dagger into his heart@She thrust the papers at me'},
        {title: 'rumpled', type:"adjective",meaning: 'amassado; creased (= not smooth) and messy',examples: 'but wore a red rose in the rumpled lapel of her brown coat'},
        {title: 'keen', type:"adjective",meaning: 'enthusiastic about an activity or idea, etc',examples: 'so keen was his desire to follow the girl'},
        {title: 'long', type:"intransitive verb",meaning: 'to feel a strong desire or craving especially for something not likely to be attained',examples: 'yet so deep was his longing for the woman'},
        {title: 'uphold', type:"transitive verb",meaning: 'to give support to; to lift up',examples: 'whose spirit had truly upheld his own'},
        {title: 'sensible', type:"adjective",meaning: 'rational, reasonable',examples: 'her pale, plump face was gentle and sensible'},
        {title: 'twinkle', type:"noun",meaning: 'cintilar, brilho',examples: 'her gray eyes had a warm, kindly twinkle'},
        {title: 'broad', type:"adjective",meaning: 'wide, large',examples: 'he squared his broad shoulders'}
    ]}, 

    {title:'text-1-train-1', url:'html-logo.svg',subs:[
        {title: 'death toll', type:"noun",meaning: 'taxa de mortes, refers to the number of people who have died as a result of a particular event or circumstance, such as a natural disaster, war, or disease outbreak',examples: 'Erdogan, then the prime minitster, blamed poor construction for the high death toll'},
        {title: 'aftermath', type:"noun",meaning: 'desdobramento, consequências(geralmente negativas); refers to the consequences or effects of a significant event or situation, especially a negative or disastrous one; outcome, fallout ',examples: 'In the aftermath, authorities promised stricter building regulations'},
        {title: 'strict', type:"adjective",meaning: 'severe, rigorous, rigid',examples: 'In the aftermath, authorities promised stricter building regulations'},
        {title: 'preparedness', type:"noun",meaning: 'preparação',examples: 'introduced an “earthquake tax” aimed at improving preparedness in a country that sits on two major geological faultlines'},
        {title: 'faultline', type:"noun",meaning: 'a break in the earth\'s surface',examples: 'a country that sits on two major geological faultlines'},
        {title: 'overwhelming', type:"adjective",meaning: 'extremely powerful, intense, or forceful; difficult to fight against',examples: 'the newly formed party won elections in 2002 by an overwhelming majority (= maioria esmagadora)'},
        {title: 'stock market', type:"noun",meaning: 'mercado de ações',examples: 'promising transparency and to rebuild the economy, ruined by a stock market crash'},
        {title: 'aftershock', type:"noun",meaning: 'a smaller earthquake that occurs after a larger earthquake, in the same general area and along the same fault zone',examples: ' after Monday’s even deadlier earthquake and aftershocks'},
        {title: 'amount', type:"intransitive verb/noun",meaning: ' used to describe the total or final result of something or to express the magnitude or significance of a situation_the total number or quantity',examples: 'constructors and supervisors should now see that their negligence amounts to murder@"His hard work and dedication amount to success in his career_Payments are limited to a certain amount.'},
        {title: 'lax', type:"adjective",meaning: 'without much care, attention, or control; lacking in rigor or strictness:',examples: 'endemic corruption and lax enforcement of building codes have exacerbated the crisis'},
        {title: 'building code', type:"noun",meaning: 'set of regulations and standards that specify the requirements for the design, construction, and maintenance of buildings and other structures',examples: 'lax enforcement of building codes@building codes had not been properly followed'},
        {title: 'reliance', type:"noun",meaning: 'dependence, confidence; the state of depending on something or someone for support, help, or protection',examples: 'reliance on cheap foreign credit funded new motorways'},
        {title: 'prone', type:"adjective",meaning: 'propenso, sujeito a; susceptible, predisposed, inclined, likely',examples: 'earthquake-prone regions@After a long day at work, he lay prone on the sofa, trying to relax'},
        {title: 'load-bearing', type:"adjective",meaning: 'used to describe a structural element or component of a structure that is designed to support and carry the weight of other parts of the construction',examples: 'load-bearing walls and pillars must be distributed in such a way to avoid “pancaking”'},
        {title: 'rubble', type:"noun",meaning: 'destroços; debris, wreckage, ruins, detritus',examples: ' many modern structures across the country constituted “rubble in waiting” because building codes had not been properly followed'},
        {title: 'cut corners', type:"expressing",meaning: 'to take shortcuts(atalhos) or to do something in a way that is quicker or cheaper, but that may result in lower quality or safety standards than what is expected or required',examples: 'to deter construction companies and investors from cutting corners'},
        {title: 'address', type:"verb", meaning: 'to give attention to or deal with a matter or problem_to speak or write to someone; dirigir a alguém',examples: 'because addressing it would be expensive and unpopular_He likes to be addressed as "Sir"@The president will address the nation by television'},
        {title: 'due to', type:"preposition",meaning: 'owing to, because of',examples: 'due to an influx of millions of refugees from neighbouring Syria fleeing civil war'},
        {title: 'budget', type:"noun",meaning: 'orçamento',examples: 'It is unclear from government budgets how the earthquake tax has been spent'},
        {title: 'cash-strapped', type:"adjective",meaning: 'that has a shortage of money or is experiencing financial difficulties',examples: 'the cash-strapped Turkish parliament'},
        {title: 'withstand', type:"transitive verb",meaning: 'to be proof against; resist the effect of'
        ,examples: 'buildings that are designed to withstand earthquakes are less likely to collapse'},
        {title: 'slipshod', type:"adjective",meaning: 'describes something that is done in a careless, hasty(hurried), or sloppy manner',examples: 'people across the country suspected of slipshod or negligent construction'},
        {title: 'upmarket', type:"adjective",meaning: 'very high quality and intended to be bought by people who are quite rich',examples: 'The developer of an upmarket 12-storey apartment complex'},
        {title: 'prosecutor', type:"noun",meaning: 'a legal official who accuses someone of committing a crime, especially in a law court',examples: 'He told prosecutors that his company had followed all the relevant procedures and legislation@prosecutors have begun gathering samples of buildings for evidence on materials used in construction'},
        {title: 'assuage', type:"transitive verb",meaning: 'alleviate; to lessen the intensity of something',examples: 'but blaming building contractors is unlikely to assuage a rising tide of public anger at government policy'},
        {title: 'unforeseen', type:"adjective",meaning: 'unexpected, unpredicted',examples: ' It is true that we were not expecting an earthquake of this scale, in this area, so it was unforeseen in that respect'},
        {title: 'pledge', type:"verb",meaning: 'to make a solemn promise or commitment to do something or to follow through with a specific action_to dedicate oneself to a particular cause, belief, or mission_to make a formal or solemn statement of belief, allegiance, or intention; affirm, vow',examples: 'Erdogan has pledged that reconstruction will be completed in one year_She pledged her loyalty to the organization and its principles_As citizens, we pledge allegiance to our country\'s flag'},
        {title: 'poised', type:"adjective",meaning: 'ready, prepared, or positioned in a way that it is balanced and ready to move forward or take action',examples: 'national elections scheduled for May that were already poised to be a crucial test'},
    ]},
    
    {title:'text-2-train-1', url:'html-logo.svg',subs:[
        {title: 'in a row', type:"idiom",meaning: 'means that something occurs consecutively or successively without interruption',examples: ' It was the second day in a row in which the US military shot down an unidentified airborne object'},
        {title: 'shoot down', type:"transitive phrasal verb",meaning: 'to cause to fall by shooting',examples: 'shot down the object over Yukon, Canada'},
        {title: 'decline', type:"verb",meaning: 'to refuse',examples: 'The Canadian defence minister, Anita Anand, declined to speculate about the origin of the object,'},
        {title: 'aircraft', type:"noun",meaning: 'a vehicle (such as an airplane or balloon) for traveling through the air',examples: 'no object was found by fighter aircraft dispatched to investigate'},
        {title: 'dispatch', type:"verb",meaning: 'to send off or away with promptness or speed',examples: 'no object was found by fighter aircraft dispatched to investigate@dispatch a messenger'},
        {title: 'downing', type:"noun",meaning: 'derrubada',examples: 'The downing of the latest object over Canada'},
        {title: 'briefing', type:"noun",meaning: 'process of giving information, instructions, or a summary of important details',examples: 'At a White House press briefing on Friday afternoon, the national security council spokesperson John Kirby described the object as being the size of a small car'},
        {title: 'spokesperson', type:"noun",meaning: 'porta-voz; a person who speaks as the representative of another or others often in a professional capacity',examples: 'At a White House press briefing on Friday afternoon, the national security council spokesperson John Kirby described the object as being the size of a small car'},
        {title: 'recovery', type:"noun",meaning: 'process of regaining or restoring something that has been lost, damaged or impaired',examples: 'conducting search and recovery activities of the object@and personnel will adjust recovery operations to maintain safety'},
        {title: 'fleet', type:"noun",meaning: 'group of aircraft owned or operated by an airline or an air force',examples: 'US officials say the balloon was part of a fleet that has been used to collect intelligence'},
        {title: 'intelligence', type:"noun",meaning: 'information, news',examples: 'US officials say the balloon was part of a fleet that has been used to collect intelligence'},
        {title: 'rift', type:"noun/verb",meaning: 'A serious and deep disagreement or conflict between individuals, groups, or nations_crack, fissure, break',examples: 'The appearance of the Chinese balloon over US airspace has caused a rift in the strained and delicate relationship between the Chinese and US governments_The tectonic activity caused a significant rift in the earth\'s crust'},
        {title: 'strained', type:"adjective",meaning: 'describes a situation, relationship, or condition that is tense, stressed, or under pressure due to difficulties, conflicts, or excessive demands',examples: 'The appearance of the Chinese balloon over US airspace has caused a rift in the strained and delicate relationship between the Chinese and US governments'},
        {title: 'postpone', type:"transitive verb",meaning: 'delay, put off, defer',examples: 'The US secretary of state, Antony Blinken, postponed an trip to Beijing'},
        {title: 'sovereignty', type:"noun",meaning: 'supreme and independent authority and power of a state or a governing body to govern itself',examples: 'an irresponsible act and a clear violation of US sovereignty and international law that undermined the purpose of this trip'},
        {title: 'undermine', type:"transitive verb",meaning: 'weaken, subvert; used to describe actions or influences that have a harmful or negative impact on something, potentially leading to its destabilization or weakening',examples: 'an irresponsible act and a clear violation of US sovereignty and international law that undermined the purpose of this trip'},
    ]},

    {title:'text-3-train-1', url:'html-logo.svg',subs:[
        {title: 'namely', type:"adverb",meaning: 'Specifically, that is to say, in particular, explicitly; used to introduce specific examples or to provide more precise information about something that has been mentioned',examples: 'There are a few shows that succeeded in this task, namely Netflix’s “Arcane” and “Castlevania”'},
        {title: 'concede', type:"verb",meaning: 'confess, admit, accept, recognize; to admit, often unwillingly, that something is true_[Transitive] To give something to someone, or allow them to have it, especially when you are unwilling to do so',examples: 'I’ll also concede that the “Resident Evil” and “Silent Hill” movies are kitschy fun in retrospect_ Local government has been forced to concede some of its authority to larger, regionally based, units'},
        {title: 'kitschy', type:"adjective",meaning: 'tacky; describes something that appeals to popular or lowbrow  (unsophisticated, simple) taste and is often of poor quality',examples: '(I’ll also concede that the “Resident Evil” and “Silent Hill” movies are kitschy fun in retrospect'},
        {title: 'prior', type:"adjective",meaning: 'earlier in time or order_more important',examples: 'Still, many prior video game adaptations to the screen have suffered from uninteresting characters and stories_Mothers with young children have a prior claim on funds'},
        {title: 'appeal', type:"noun/intransitive verb",meaning: 'To be attractive or interesting_apelar, apelo; to make a request or plea',examples: 'instant mass appeal to how seamlessly it translates the language of video games to film@The novel\'s unique storyline appeals to a wide range of readers_He appealed to the public for assistance in finding his missing dog'},
        {title: 'seamless', type:"adjective",meaning: 'to be a unified whole, with no clear distinctions or separations between its parts; smooth, continuous, and without any visible or noticeable interruptions',examples: 'instant mass appeal to how seamlessly it translates the language of video games to film@The transition between scenes in the movie was seamless, creating a cohesive and immersive viewing experience'},
        {title: 'trope', type:"noun",meaning: 'something such as an idea, phrase, or image that is often used in a particular artist\'s work, in a particular type of art, in the media, etc',examples: 'horror fiction trope'},
        {title: 'iteration', type:"noun",meaning: 'new version, adaptation, or implementation; the process of doing something again and again, usually to improve it, or one of the times you do it',examples: 'The Last of Us” delivers a fresh iteration on this formula@The graphic designer went through several iterations of the logo before settling on the final design'},
        {title: 'outbreak', type:"noun",meaning: 'a sudden rise in the incidence of; a time when something suddenly begins, especially a disease or something else dangerous or unpleasant',examples: 'This sci-fi pseudo-realist explanation is mainly a vehicle for a zombie outbreak@the outbreak of war'},
        {title: 'hive mind', type:"noun",meaning: 'refers to a concept in which a group of individuals think and act as a single collective entity, similar to the behavior of a bee colony or ant colony',examples: 'the zombies share a fungal hive mind'},
        {title: 'protrude', type:"intransitive verb",meaning: 'to extend or stick out from a surface or an enclosed space',examples: 'spores protrude from their mouths and eyes@A rotting branch protruded from the swamp like a ghostly arm'},
        {title: 'pileus caps', type:"noun",meaning: 'refer to the caps (= hat-like or umbrella-shaped part of the fungus that is located on its upper part) of mushrooms that belong to the Pileus genus or are generally used to describe the caps of various mushroom species',examples: 'spores protrude from their mouths and eyes, and pileus caps from the heads of more severely infected victims'},
        {title: 'uncanny', type:"adjective",meaning: 'strange, mysterious, or unsettling in a way that seems beyond the ordinary or natural',examples: 'uncanny resemblance to humans'},
        {title: 'resemblance', type:"noun",meaning: 'the fact that two people or things look like each other or are similar in some other way',examples: 'uncanny resemblance to humans'},
        {title: 'convey', type:"transitive verb",meaning: 'transmit; to communicate or express a message, information, or feeling in a way that others can understand or comprehend',examples: 'Survival necessitates a brutal military state, conveyed through scenes of helmeted soldiers killing and brutalizing innocent civilians@The difficulty is not because video games have poor stories, but because video games convey them through interactivity'},
        {title: 'loot', type:"verb/noun",meaning: 'to steal or rob; stolen or confiscated goods',examples: 'those who resist authoritarian rule descend into looting and gang warfare@The burglars escaped with a bag full of loot from the jewelry store'},
        {title: 'warfare', type:"noun",meaning: 'conflict, confrontation, fighting; use of armed forces and military strategies in a conflict or war between two or more parties',examples: 'those who resist authoritarian rule descend into looting and gang warfare'},
        {title: 'calloused', type:"adjective",meaning: 'person who has become emotionally hardened or insensitive due to difficult or challenging experiences; skin that has become toughened and thickened due to repeated friction, pressure, or irritation',examples: 'Pascal does a solid job as the stoic, calloused antihero@After months of hard work in the construction site, his hands became calloused and rough'},
        {title: 'portrayal', type:"noun",meaning: 'act of depicting or representing someone or something in a particular way, often through words, images, or actions',examples: 'Her portrayal of a teenager thrust into the mantle of worldly responsibility, who learns the symbiotic beauty and horror of the outside world and slowly warps in its presence, is enthralling'},
        {title: 'thrust', type:"adjective/verb",meaning: 'enfiado, enfiar; to cause to enter or pierce something by or as if by pushing; to push suddenly and strongly; to force or place someone suddenly and unexpectedly into a specific situation or role',examples: 'Her portrayal of a teenager thrust into the mantle of worldly responsibility, who learns the symbiotic beauty and horror of the outside world and slowly warps in its presence, is enthralling'},
        {title: 'warp', type:"verb",meaning: '[Intransitive] To go through a change or transformation in personality, behavior or mindset_[Transitive] To bend or twist so that the surface is no longer flat or straight; to alter the truth or reality',examples: 'Her portrayal of a teenager thrust into the mantle of worldly responsibility, who learns the symbiotic beauty and horror of the outside world and slowly warps in its presence, is enthralling_ Water poured in, ruining carpets, warping walls, destroying wiring@The biased news coverage seemed to warp the facts to fit a specific political narrative'},
        {title: 'enthralling', type:"adjective",meaning: 'keeping someone\'s interest and attention completely',examples: 'Her portrayal of a teenager thrust into the mantle of worldly responsibility, who learns the symbiotic beauty and horror of the outside world and slowly warps in its presence, is enthralling'},
        {title: 'reverse', type:"verb/noun",meaning: 'To change to an opposite state or direction, to undo or go back to a previous state, to overturn or invalidate',examples: 'Interestingly, the viewer’s alignment with Ellie is reversed from the 2013 video game, as the player piloted Joel and inhabited his perspective throughout@He reversed the car to get out of the tight parking spot@The reverse side of the coin features a different design than the front'},
        {title: 'pacing', type:"noun",meaning: 'rhythm, speed, and timing at which events unfold in a narrative, performance, or any other form of storytelling or presentation',examples: '“The Last of Us” arguably finds its greatest strength in its slow pacing'},
        {title: 'prelude', type:"noun",meaning: 'something that comes before a more important event or action that introduces or prepares for it',examples: 'which serves as a prelude to flashes of horror'},
        {title: 'dreadful', type:"adjective",meaning: 'causing fear, shock, or suffering',examples: 'the most profound beats of the show are wordless and quietly dreadful'},
        {title: 'hubris', type:"noun",meaning: 'excessive pride, arrogance, or self-confidence, especially when accompanied by a lack of humility',examples: 'the hubris of celebrating the history of a society erased'},
        {title: 'formerly', type:"adverb",meaning: 'indicates that something was true or existed in the past, but it is no longer the case at present',examples: 'A formerly bustling Boston is liminal and absent'},
        {title: 'bustling', type:"adjective",meaning: 'lively, vibrant, dynamic; describes a place or situation that is full of energetic and busy activity ',examples: 'A formerly bustling Boston is liminal and absent'},
        {title: 'liminal', type:"adjective",meaning: 'transitional, intermediate, in-between; describes something that is in the middle of changing or transitioning from one state to another',examples: 'A formerly bustling Boston is liminal and absent'},
        {title: 'absent', type:"adjective",meaning: 'not present, missing',examples: 'A formerly bustling Boston is liminal and absent'},
        {title: 'reclaim', type:"transitive verb",meaning: 'to take back something that was yours',examples: 'reclaimed by foliage in a grand display of eco-brutalism@She wants to reclaim her stolen bike'},
        {title: 'lug', type:"transitive verb",meaning: 'to carry or pull something with effort or difficulty because it is heavy',examples: 'Joel and other weary(tired) wage laborers lug infected corpses, dispatched en masse by the government, into a raging fire pit'},
        {title: 'dispatch', type:"verb",meaning: 'to send off or away with promptness or speed',examples: 'Joel and other weary(tired) wage laborers lug infected corpses, dispatched en masse by the government, into a raging fire pit'},
        {title: 'humdrum', type:"adjective",meaning: 'ordinary; used to describe something that is dull, monotonous, lacking in excitement, or repetitive in nature',examples: 'In these moments, the viewer considers how humdrum this bizarre reality seems to its inhabitants'},
        {title: 'fanfare', type:"noun",meaning: 'celebration',examples: 'There’s been much fanfare, according to The Independent, that “The Last of Us” is a critically and commercially successful video game adaptation'},
        {title: 'employ', type:"transitive verb",meaning: 'make use of something for a specific function or objective',examples: 'Video games can employ mechanical difficulty to build a tone of desperation and isolation'},
        {title: 'ease', type:"noun/verb",meaning: 'state of comfort, relaxation, or freedom from difficulty, stress, or pain; alleviate, to make something more comfortable or less difficult',examples: 'mechanical ease to empower the player in the narrative@He adjusted the chair\'s position to ease the back pain@The tension eased after they resolved their differences'},
        {title: 'inherent', type:"adjective",meaning: 'used to describe a characteristic or quality that is intrinsic, natural, or essential to someone or something',examples: 'The difficulty with adapting video games is that film and television are inherently noninteractive'},
        {title: 'feature', type:"transitive verb/noun",meaning: 'showcase or highlight someone or something in a prominent or special way_characteristic or attribute; prominent part of aspect',examples: 'Important to note is the show’s third episode, “Long, Long Time,” which features striking guest performances_One of the notable features of the new car model is its fuel efficiency@The main feature of the museum is its extensive collection of ancient artifacts'},
        {title: 'amid', type:"preposition",meaning: 'in the middle of or surrounded by',examples: 'secluded life amid the apocalypse'},
        {title: 'thus far', type:"idiom",meaning: 'so far, until now',examples: 'In a show thus far oscillating between thrill and longing@“The Last of Us” has thus far defied the odds and will only continue to'},
        {title: 'thrill', type:"noun/verb",meaning: 'refers to a feeling of excitement, pleasure, or exhilaration, often caused by something that is intense, suspenseful, or extraordinary',examples: ' In a show thus far oscillating between thrill and longing'},
        {title: 'longing', type:"noun",meaning: 'expectation; strong, persistent desire or yearning for something or to do something',examples: 'In a show thus far oscillating between thrill and longing'},
        {title: 'stoke', type:"transitive verb",meaning: 'To stimulate or intensify emotions or feelings in someone; to increase the activity, intensity, or amount of',examples: 'an emotional rollercoaster that stokes melancholy in its viewers@limiting the number of cars available will help stoke demand for the car'},
        {title: 'revel', type:"intransitive verb",meaning: 'to take great pleasure, delight, or enjoyment in something',examples: 'It revels in weepy sentimentalism@The children revel in the freedom of summer vacation'},
        {title: 'cloister', type:"verb",meaning: 'keep apart, seclude(isolar)',examples: 'a beautiful love story narratively cloistered from the rest of the characters and plot@a scientist who cloisters herself in a laboratory'},
        {title: 'oeuvre', type:"noun",meaning: 'the complete works of a writer, painter, or other artist',examples: 'his episode will only grow more profound as the show’s oeuvre expands'},
        {title: 'amidst', type:"preposition",meaning: 'in the middle of or surrounded by',examples: 'love can flourish amidst an unremittingly barren world'},
        {title: 'unremitting', type:"adjective",meaning: 'incessant, unceasing, perpetual; never stopping, becoming weaker, or failing',examples: 'love can flourish amidst an unremittingly barren world'},
        {title: 'barren', type:"adjective",meaning: 'unproductive, infertile',examples: 'love can flourish amidst an unremittingly barren world'},
        {title: 'raise the bar', type:"idiom",meaning: 'set a higher standard, expectation, or level of performance',examples: 'It challenges the popular beliefs of what is possible with adaptation and continues to raise the bar for artistic expression in the streaming age'},
        {title: 'bated breath', type:"idiom",meaning: 'in an anxious (= worried and nervous) or excited way',examples: 'I will continue to follow Joel and Ellie’s story with bated breath over the next six weeks'},
    ]},

    {title:'text-4-train-1', url:'html-logo.svg',subs: [
        {title: 'soup up', type:"transitive phrasal verb",meaning: 'to increase the power, efficiency, or performance of something, especially when it is old',examples: 'Essentially a souped-up chatbot'},
        {title: 'churn out', type:"transitive phrasal verb",meaning: 'to produce large amounts of something quickly, usually something of low quality',examples: 'the AI program can churn out answers to the biggest and smallest questions in life'},
        {title: 'draw up', type:"phrasal verb",meaning: 'to create or compose a written document, such as a contract, agreement, plan, or proposal_to pull something upward_to design or formulate',examples: 'draw up college essays, fictional stories, haikus, and even job application letters_She drew up the bucket from the well_The chef will draw up a menu featuring a variety of dishes for the restaurant'},
        {title: 'draw on', type:"phrasal verb",meaning: 'utilize or access something as a resource or reference_to rely or depend on_to approach or come nearer in time',examples: 'It does this by drawing on what it has gleaned from a staggering amount of text on the internet_The team drew on their collective strengths to win the championship_As the evening drew on, the temperature began to drop'},
        {title: 'glean', type:"intransitive verb",meaning: 'to collect information in small amounts and often with difficulty',examples: 'It does this by drawing on what it has gleaned from a staggering amount of text on the internet'},
        {title: 'staggering', type:"adjective",meaning: 'very shocking and surprising, astonishing, overwhelming',examples: 'It does this by drawing on what it has gleaned from a staggering amount of text on the internet'},
        {title: 'emerge', type:"verb",meaning: 'come into view, to become apparent, or to come out from a hidden or concealed state',examples: 'the program is the latest to emerge from OpenAI'},
        {title: 'scale up', type:"verb",meaning: 'increase the size, scope, or capacity of something, typically a business, operation, project, or process',examples: 'it is a bit like predictive text on a mobile phone, but scaled up massively@The company decided to scale up its production to meet the growing demand for its products'},
        {title: 'fine-tune', type:"verb",meaning: 'to make small adjustments or refinements to something in order to improve its performance, accuracy, or effectiveness',examples: 'the initial language model was fine-tuned by feeding it a vast number of questions and answers'},
        {title: 'work out', type:"transitive phrasal verb",meaning: 'to solve a problem, figure out an answer, or find a solution to a challenging situation',examples: 'ChatGPT is often highly impressive at working out what information a question is really after'},
        {title: 'frame', type:"transitive verb",meaning: 'to formulate or express_to set up or arrange_to put into perspective or context',examples: 'framing a response in a natural manner_They framed the stage for the theater performance_The issue should be framed in terms of its long-term impact'},
        {title: 'attest', type:"verb",meaning: 'confirm, affirm; to show, say, or prove that something exists or is true',examples: 'college students who see it as a saviour for late assignments will attest@Thousands of people came out onto the streets to attest their support for the democratic opposition party'},
        {title: 'handle', type:"noun",meaning: '',examples: ''},
        {title: 'nonsensical', type:"adjective",meaning: 'preposterous, unreasonable, senseless; lacking sense, logic, or meaning',examples: 'ChatGPT will sometimes write plausible-sounding but incorrect or nonsensical answers'},
        {title: 'biased', type:"adjective",meaning: 'have a tendency to favor one side or have a preconceived opinion that influences their judgment or behavior, often without being objective or fair',examples: 'will sometimes respond to harmful instructions or exhibit biased behaviour'},
        {title: 'long-winded', type:"adjective",meaning: 'excessively wordy, verbose, or lengthy',examples: 'it can also give long-winded replies, a problem its developers put down to trainers preferring longe answers that loook more comprehensive'},
        {title: 'put down', type:"phrasal verb",meaning: 'attribute something as the cause of something else_disapprove or criticize_',examples: 'it can also give long-winded replies, a problem its developers put down to trainers preferring longe answers that loook more comprehensive_She felt hurt when her peers put her down for her ideas'},
        {title: 'nonetheless', type:"adverb",meaning: 'even so, nevertheless, however, still; used to introduce a contrasting or concessive statement',examples: 'it is very much a work in progress, but a transformative one, nonetheless'},
        {title: '', type:"noun",meaning: '',examples: ''},
        {title: '', type:"noun",meaning: '',examples: ''},
        {title: '', type:"noun",meaning: '',examples: ''},
        {title: '', type:"noun",meaning: '',examples: ''},
        {title: '', type:"noun",meaning: '',examples: ''}
    ]},
    /*{title:'CSS', url:'css-logo.svg',subs:[]},
    {title:'JAVASCRIPT', url:'js-logo.svg',subs:[{title:'Iframas',url:'../materiais/iframe.html'}]},*/
]

elements = []
bigarray = []

var subjects = [] //variávlel para quando a pesquisa é global(de todos os materiais)
document.addEventListener("DOMContentLoaded", function() {

    get1('vocab').style.backgroundColor = 'var(--lightpink)'
    bodycontent = document.getElementById('vocabmng')
    divlist = document.createElement('div')
    divlist.id = 'list'
    bodycontent.appendChild(divlist)
    vocabh = document.createElement('h1')
    vocabh.setAttribute('class','vocabh')
    vocabh.innerText = 'Vocabulary List'
    divlist.appendChild(vocabh)
    // Código para saber qual material está sendo acessado
    specfunc = String(document.getElementById('searcher').onclick)
    cango = true
    material = ''
    for (x = 33; cango == true && x < specfunc.length; x++) {
        if (specfunc[x] == '\'')
            cango = false
        else
           material+= specfunc[x]
        }

    // Código para que somente o vocabulário do material acessado seja utilizado
    newContent = []
    if (material != '') {
        for (trust in contents) {
            console.log(contents[trust])
            if (contents[trust].title == material) {
                console.log('this one!')
                newContent.push(contents[trust])
            }
        }
        contents = [...newContent]
    }

    posind = 0
    wordlist = []
    for (dead in contents) {
        //console.log('DEAD',contents[dead].subs)
        for (fate in contents[dead].subs) {
            
            /*
            console.log(contents[dead].subs[fate])
            pchoice = document.createElement('p')
            pchoice.setAttribute('class', 'choice')
            pchoice.innerHTML = `<img src="images/pencil.svg" alt="" style="width: 20px;margin-right: 5px">${contents[dead].subs[fate].title}`
            pchoice.setAttribute('onclick',`search('none',${posind})`)
            divlist.appendChild(pchoice)
            */
    
            wordInfo = contents[dead].subs[fate]
            htmltext = `<h1>${wordInfo.title}<span class="tipo">(${wordInfo.type})</span></h1>`
            // htmltext = conteúdo(singificados + exemplos palavras) gerado automaticamente
            exindex = 0
            text1 = ''
            textindex1 = 0
            for (char in wordInfo.meaning) {
                mngc = wordInfo.meaning[char]
             if (mngc != '_') {
             text1+= mngc
             }
            
             if (mngc == '_' || char == wordInfo.meaning.length - 1) {
                textindex1++
                pEl = document.createElement('p')
                newtext1 = ''
                for (vai in text1) {
                    if (vai != 0) 
                    newtext1+= text1[vai]
                }
                text1 = text1[0].toUpperCase() + newtext1
                //console.log('DIAL TONES', newtext1)
                /*pEl.innerHTML = `<img src="images/pencil.svg" alt=""> <span class="inline">${text1}</span>`*/
                htmltext+= `<p class="pel1"><span class="inline"><span style="color: var(--mainpink);font-weight: 800;">${textindex1}. </span>${text1}</span></p>`
            
                text1 = ''
            
                keepgoing = true
                text2 = ''
                textindex2 = 0
               for (beg = exindex; keepgoing == true && beg < wordInfo.examples.length; beg++) {
                exc = wordInfo.examples[beg]
                if (exc != '_' && exc != '@') {
                    text2+= exc
                }
                if (exc == '_' || beg == wordInfo.examples.length - 1 || exc == '@') {
                    textindex2++
                    if (exc != '@') 
                    keepgoing = false
                    //console.log('STOP 2!!', text2)
                    newtext2 = ''
                    for (vai in text2) {
                        if (vai != 0) 
                        newtext2+= text2[vai]
                    }
                    if (text2 != '') {
                    text2 = text2[0].toUpperCase() + newtext2
                    htmltext+= `<p class="pel2"><span style="font-weight: 500;">Ex ${textindex2}</span>:&nbsp; ${text2}</p>`
                    }
                    if (exc == '@') 
                    text2 = ''
                }
                exindex++
               }
             }
            }
            
            wordlist.push(contents[dead].subs[fate])
            posind++

            elements.push({title: `${contents[dead].subs[fate].title}`, content: `${htmltext}`, objects: [/*{title: `${contents[dead].subs[fate].title}`, content: `${htmltext}`, objects: []}*/]})
            //adicionar objeto do elemento (cont) à elements
        }
    }

    //---------------
    // cria os conts(div class= "cont", que contém palavra - center title + conteúdo)
    for (ciyu in elements) {
        elements[ciyu].id = `${ciyu}`
        //console.log(elements[ciyu])
        cont = document.createElement('div')
        cont.setAttribute('class','cont')
        cont.id = `${ciyu}`
        cont.innerHTML = `
        <div class="center">
           <div class="exptype">
               <p class="choice">
                   <img src="images/pencil.svg" class="ar" style="margin-right: 4px;">${elements[ciyu].title}
               </p>
           </div>
       </div>` + elements[ciyu].content
       bigarray.push({title: `${elements[ciyu].title}`, content: `${elements[ciyu].content}`, objects: [], id: `${ciyu}`})
       
       divlist.appendChild(cont)
       }
       //loop(elements) repetir o mesmo processo caso heja conts dentro de conts
       

       //criar função para cada cont
       console.log('ONLOAD')
    conts = get2('cont')
    cents = get2('center')
    ars = get2('ar')
    mecams = [] 
    late = -1   
    sai = 0
    for (bob = 0; bob < cents.length; bob++) {
    c = new CreateFunc(bob,'close')
    //console.log(bob, conts[bob], conts[bob].id)
    bigarray.find(function (bigarray) {
        return bigarray.id == conts[bob].id
    }).pos = bob
        c.SetDefault()
        c.AddEvent()
    }
    
    idlist = [] //usado para identificar a posição de um elmento pelo seu id
    for (bob = 0; bob < conts.length; bob++) {
        //console.log('cont',conts[bob],bob,conts[bob].id)
        idlist.push({id: conts[bob].id, pos: bob})
        }

//---------------------------
        for (i in contents) {
    console.log(contents[i])
    for (e in contents[i].subs) {
        subjects.push({title1:i, title2: contents[i].subs[e].title.toLowerCase(),index:e})
    }}

// Ordena as palavras alfabeticamente
function sortWords(palavrasPrimitivas,s) {
    alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
palavrasNumericas = []
posicaoPalavras = []

for (palavra in palavrasPrimitivas) {
    word = palavrasPrimitivas[palavra][s].toLowerCase()
    neword = ''
    for (car in word) {
        if (word[car] != ' ') {
            neword+= word[car]
        }
    }
    word = neword
    wordToNumber = ''
    for (letra = 0; letra < word.length; letra++) {
        if (letra != word.length - 1) {
            wordToNumber += `${alfabeto.indexOf(word[letra])}.`
        } else {
            wordToNumber += `${alfabeto.indexOf(word[letra])}`
        }  }
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
                   if (palavrasNumericas[pNumber][num] == '.') {
                    palavraOrigin.push(numint)
                    numint = ''
                   }else if(num == palavrasNumericas[pNumber].length - 1){
                        numint += `${palavrasNumericas[pNumber][num]}`
                        palavraOrigin.push(numint)
                   }else{
                    numint += `${palavrasNumericas[pNumber][num]}`
                   }}
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

pselected = -1
podeir = true
subjects = sortWords(subjects,'title2')

var songsSearched = []

window.addEventListener('keyup', function(event) {
    console.log(event.key)
    console.log('pselected:', pselected,'ps:',ps.length)
    if (document.getElementById('searcher') == document.activeElement && event.key == 'Enter' && pselected == -1) { // Se a barra de pesquisa estiver em foco e a tecla Enter for pressionada

        if (pselected == -1) {
        quantasopções = document.getElementById('main').getElementsByClassName('psearcher').length
        if (quantasopções == 1) {
           dothesearch(Number(document.getElementById('main').getElementsByClassName('psearcher')[0].id.replace('a','')))
        }}
    }else if(document.getElementById('searcher') == document.activeElement && event.key == 'Enter'){ // Se uma sugestão estiver selecionada e a tecla Enter for pressionada
        console.log('UEPA!')
        dothesearch(Number(document.getElementById('main').getElementsByClassName('psearcher')[pselected].id.replace('a','')))
    }
    
    // Selecionando a sugestão com as setas
    ps = document.getElementById('main').getElementsByClassName('psearcher')
    if (document.getElementById('searcher') == document.activeElement && event.key == 'ArrowDown') { 
        console.log('VAI',ps.length, pselected)
        if (pselected < ps.length - 1 && podeir == true) {
            if (pselected != -1)
            ps[pselected].style.backgroundColor = 'var(--verylightgray)'
            pselected++
            //this.document.getElementById('searcher').value = pselected
            ps[pselected].style.backgroundColor = 'var(--lightgray)'
        }
    }else if(document.getElementById('searcher') == document.activeElement && event.key == 'ArrowUp') {
        if (pselected >= 1 && podeir == true) {
            if (pselected != -1)
            ps[pselected].style.backgroundColor = 'var(--verylightgray)'
            pselected--
            //this.document.getElementById('searcher').value = pselected
           ps[pselected].style.backgroundColor = 'var(--lightgray)'
        } }})

// Quando uma tecla é pressionada
document.getElementById('searcher').addEventListener('keyup',function(event) {
    if (event.key != 'ArrowDown' && event.key != 'ArrowUp' && event.key != 'Enter') {
        search2()
    }})

// Cada vez que o usuário digita um caractere na barra de pesquisa
function search2() {    
    pselected = -1
    pnumber = -1
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
   opspath = []
    for (n in subjects) {
         pesquise = pesquisa.toLowerCase()
         if (subjects[n].title2.search(new RegExp(`(?<=^)${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
            opspath.push(subjects[n])
             pnumber++
             psearcher = document.createElement('p')
             psearcher.style.position = 'sticky'
             psearcher.innerText = subjects[n].title2
             psearcher.setAttribute('class', 'psearcher')
             psearcher.id = 'a' + opnumbers
             psearcher.style.fontWeight = 'bold'
             psearcher.setAttribute('onclick', `dothesearch(${psearcher.id.replace('a', '')})`)
             //psearcher.setAttribute('onmouseenter', `entrou(${pnumber})`)
             psearcher.setAttribute('onmouseout', `saiu(${pnumber})`)
             d = document.createElement('span')
             //d.innerText = 'o'
             d.setAttribute('onmouseenter', `entrou(${pnumber})`)
             d.setAttribute('class','phelp')

             psearcher.innerHTML = psearcher.innerHTML.replace(new RegExp(`(?<=^|\\W)${pesquise}`,"gi"), `<span style="font-weight:normal">${pesquise}</span>`)
             if (pnumber < 7) {
             document.getElementById('main').appendChild(psearcher)
             document.getElementById('main').getElementsByClassName('psearcher')[pnumber].appendChild(d)
             }
             opnumbers++
             document.getElementById('main').style.display = 'block'
         } }
    if (pesquise.length != 0 && opnumbers == 0) {
        for (n in subjects) {
             pesquise = pesquisa.toLowerCase()
             if (subjects[n].title2.search(new RegExp(`(?<![a-z])${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
                opspath.push(subjects[n])
                pnumber++
                psearcher = document.createElement('p')
                 psearcher.style.position = 'sticky'
                 psearcher.innerText = subjects[n].title2
                 psearcher.setAttribute('class', 'psearcher')
                 psearcher.id = 'a' + opnumbers
                 psearcher.style.fontWeight = 'bold'
                 psearcher.setAttribute('onclick', `dothesearch(${psearcher.id.replace('a', '')})`)
                 //psearcher.setAttribute('onmouseenter', `entrou(${pnumber})`)
                 psearcher.setAttribute('onmouseout', `saiu(${pnumber})`)
                 d = document.createElement('span')
                 d.setAttribute('onmouseenter', `entrou(${pnumber})`)
                 //d.innerText = 'o'
                 d.setAttribute('class','phelp')

                 psearcher.innerHTML = psearcher.innerHTML.replace(new RegExp(`(?<=\\W)${pesquise}`,"gi"), `<span style="font-weight:normal">${pesquise}</span>`)
                 if (pnumber < 7) {
                    document.getElementById('main').appendChild(psearcher)
                    document.getElementById('main').getElementsByClassName('psearcher')[pnumber].appendChild(d)
                    }
                 opnumbers++
                 document.getElementById('main').style.display = 'block'
             }}}
 if (pesquise.length != 0 && opnumbers == 0){
    for (n in subjects) {
         pesquise = pesquisa.toLowerCase()
         if (subjects[n].title2.search(new RegExp(`${pesquise}`,"gi")) != -1 && pesquise.length != 0) {
            opspath.push(subjects[n])
            pnumber++
             psearcher = document.createElement('p')
             psearcher.style.position = 'sticky'
             psearcher.innerText = subjects[n].title2
             psearcher.setAttribute('class', 'psearcher')
             psearcher.id = 'a' + opnumbers 
             psearcher.style.fontWeight = 'bold'
             psearcher.setAttribute('onclick', `dothesearch(${psearcher.id.replace('a', '')})`)
             //psearcher.setAttribute('onmouseenter', `entrou(${pnumber})`)
             psearcher.setAttribute('onmouseout', `saiu(${pnumber})`)
             d = document.createElement('span')
             d.setAttribute('onmouseenter', `entrou(${pnumber})`)
             //d.innerText = 'o'
             d.setAttribute('class','phelp')

             psearcher.innerHTML = psearcher.innerHTML.replace(new RegExp(`${pesquise}`,"gi"), `<span style="font-weight:normal">${pesquise}</span>`)
             if (pnumber < 7) {
                document.getElementById('main').appendChild(psearcher)
                document.getElementById('main').getElementsByClassName('psearcher')[pnumber].appendChild(d)
                }
             opnumbers++
             document.getElementById('main').style.display = 'block'
         }}}
 if (opnumbers == 0) {
     document.getElementById('main').style.display = 'none'
 }}

ps = document.getElementById('main').getElementsByClassName('psearcher')

});

  // Quando a pesquisa é realizada (uma opção é clicada)
function dothesearch(whichid) {

    console.log('YOU WERE JUST LIKE ME.......')
  document.getElementById('searcher').value = opspath[whichid].title2
  allps = document.getElementsByClassName('psearcher')
  podeir = true

 for (n = allps.length - 1; n >= 0; n--) {
     //if (allps[n].id != 'a' + whichid) {
 document.getElementById('main').removeChild(allps[n])
    // }
  }

  search(whichid)
  
  console.log('HERE', document.getElementById('main').style.display)
  document.getElementById('main').style.display = 'none'
  console.log('HERE', document.getElementById('main').style.display)
  pselected = -1

  // Cria o conteúdo(quando é feita a pesquisa)
function search(path, done) {

    console.log('TAMTAMTAMTAM')
    pesquisa = document.getElementById('searcher').value
    bodycontent = document.getElementById('vocabmng')
    console.log('VOCABOPENNNNN', vocabopen, vocabopen == 'none', vocabopen == true)
    
    if (vocabopen == 'none' || vocabopen == true) {
        console.log('MUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR')
        repl = fixit()
        if (stack == true && vocabopen == true) {
            bodycontent.innerHTML = innerbody
        }

        if (vocabopen == 'none') {
            bodycontent.innerHTML = ''
        }

        innerbody = repl
        vocabopen = false
        get1('vocab').style.backgroundColor = 'var(--verylightpink)'
        get1('words').style.backgroundColor = 'var(--lightpink)'
    }
    
    if (stack == false) {
        bodycontent.innerHTML = ''
        }
    
    hd = document.createElement('h1')
    if (path != 'none') {
    console.log('PATH!!!!',path)
    console.log(opspath[path])
    wordInfo = contents[opspath[path].title1].subs[opspath[path].index]
    }else{
        console.log(done)
        wordInfo = wordlist[done]
    }
    hd.innerText = wordInfo.title
    span = document.createElement('span')
    span.setAttribute('class','tipo')
    span.innerText = '(' + wordInfo.type + ')'
    hd.appendChild(span)
    bodycontent.appendChild(hd)
    
    htmltext = `<h1>${wordInfo.title}<span class="tipo">(${wordInfo.type})</span></h1>`
    // htmltext = conteúdo(singificados + exemplos palavras) gerado automaticamente
    exindex = 0
    text1 = ''
    textindex1 = 0
    for (char in wordInfo.meaning) {
        mngc = wordInfo.meaning[char]
     //console.log(mngc)
     if (mngc != '_') {
     text1+= mngc
     }
    
     if (mngc == '_' || char == wordInfo.meaning.length - 1) {
        //Console.log('STOP!', text1)
        textindex1++
        pEl = document.createElement('p')
        newtext1 = ''
        for (vai in text1) {
            if (vai != 0) 
            newtext1+= text1[vai]
        }
        text1 = text1[0].toUpperCase() + newtext1
        console.log('DIAL TONES', newtext1)
        /*pEl.innerHTML = `<img src="images/pencil.svg" alt=""> <span class="inline">${text1}</span>`*/
        htmltext+= `<p class="pel1"><span class="inline"><span style="color: var(--mainpink);font-weight: 800;">${textindex1}. </span>${text1}</span></p>`
    
        pEl.innerHTML = `<span class="inline"><span style="color: var(--mainpink);font-weight: 800;">${textindex1}. </span>${text1}</span>`
        pEl.setAttribute('class','pel1')
        bodycontent.appendChild(pEl)
        text1 = ''
    
        keepgoing = true
        text2 = ''
        textindex2 = 0
       for (beg = exindex; keepgoing == true && beg < wordInfo.examples.length; beg++) {
        exc = wordInfo.examples[beg]
        //console.log('EX',exc)
        if (exc != '_' && exc != '@') {
            text2+= exc
        }
        //console.log(exc) 
        if (exc == '_' || beg == wordInfo.examples.length - 1 || exc == '@') {
            textindex2++
            if (exc != '@') 
            keepgoing = false
            console.log('STOP 2!!', text2)
            newtext2 = ''
            for (vai in text2) {
                if (vai != 0) 
                newtext2+= text2[vai]
            }
            if (text2 != '') {
            text2 = text2[0].toUpperCase() + newtext2
            pEl = document.createElement('p')
            htmltext+= `<p class="pel2"><span style="font-weight: 500;">Ex ${textindex2}</span>:&nbsp; ${text2}</p>`
            pEl.innerHTML = `<span style="font-weight: 500;">Ex ${textindex2}</span>:&nbsp ` + text2
            pEl.setAttribute('class','pel2')
            bodycontent.appendChild(pEl)
            }
    
            if (exc == '@') 
            text2 = ''
        }
        exindex++
       }
     }
    }
    }
}

 // Quando a barra de pesquisa é clicada quando vazia
 function fclic() {
    pesquisa = document.getElementById('searcher').value
    if (pesquisa.length == 0) {
     document.getElementById('main').style.display = 'none'
    }}

    // Quando o mouse entra em uma opção(psearcher)
  function entrou(thing) {
    if (document.getElementById('searcher') == document.activeElement) {
    ps = document.getElementById('main').getElementsByClassName('psearcher')

    podeir = false 
    //document.getElementById('searcher').value = 'entrou' + thing + podeir
    
    if (pselected != -1 && pselected != thing) {
        ps[pselected].style.backgroundColor = 'var(--verylightgray)'
        pselected = -1
    }
    //document.getElementById('searcher').value += 'thing' + thing

    ps[thing].style.backgroundColor = 'var(--lightgray)'
}}

// Quando o mouse sai de uma opção(psearcher)
function saiu(thing) {
    if (document.getElementById('searcher') == document.activeElement) {
    podeir = true
    //document.getElementById('searcher').value = 'saiu' + thing + podeir
    pselected = -1
    ps = document.getElementById('main').getElementsByClassName('psearcher')
    ps[thing].style.backgroundColor = 'var(--verylightgray)'
    }}

    vocabopen = 'none'
    innerbody = ''
 


//stack button
stack = false
animationOn = false
function move() {
    console.log('COME ON, LET US MOVE IT')
    clickelement = document.getElementsByClassName('stack')[0]
    stackelement = document.getElementsByClassName('yes-no')[0]
    if (animationOn == false) {
    animationOn = true
    if (stack == false) {
        clickelement.style.backgroundColor = 'var(--lightpink)'
        stackelement.style.backgroundColor = 'white'
        stackelement.style.animation = 'swap-forward 0.2s forwards'
        stack = true
    }else{
        stackelement.style.backgroundColor = 'var(--lightpink)'
        clickelement.style.backgroundColor = 'white'
        stackelement.style.animation = 'swap-backward 0.2s forwards'
        stack = false
    }
    stackelement.addEventListener("animationend", animationEnded)
    function animationEnded() {
        console.log('it ended')
        animationOn = false
    }
}
}

// go to vocabulary list
function gotovocab() {
    if (vocabopen == false) {
        get1('vocab').style.backgroundColor = 'var(--lightpink)'
        get1('words').style.backgroundColor = 'var(--verylightpink)'
        repl = get1('vocabmng').innerHTML
        //get1('vocabmng').innerHTML = innerbody
        get1('vocabmng').innerHTML = '<div id="list"><h1 class="vocabh">Vocabulary List</h1></div>'
        innerbody = repl
        vocabopen = true

        for (mcr in bigarray) {
            console.log(bigarray[mcr])
            console.log(defsets.find(function(defsets) {
                return defsets.jin == `j${bigarray[mcr].pos}`
             }))
             mind = defsets.find(function(defsets) {
                return defsets.jin == `j${bigarray[mcr].pos}`
             })
            elid = bigarray[mcr].id
                elidtxt = ''
                for (trees = elid.length - 1; elid[trees] != '.' && trees > 0; trees--) {
                    elidtxt+= elid[trees]
                }
                //console.log(trees, elidtxt)
                elidtxt = ''
                for (omo = 0; omo < trees; omo++) {
                    elidtxt+= elid[omo]
                }
            console.log('NEED',elidtxt)
                contel = document.createElement('div')
                contel.setAttribute('class','cont')
                if (elidtxt == '') {
                get1('list').appendChild(contel)
                }else{
                   get1(`${elidtxt}`).appendChild(contel)
                }
                contel.id = elid
                contel.innerHTML = `<div class="center" style="height: 30px">
             <div class="exptype">
                 <p class="choice">
                <img src="images/pencil.svg" class="ar" style="margin-right: 4px;" 
                onclick="cli(${mind.state}, ${mind.index}, '${mind.jin}', ${mind.n}, ${mind.jor})">${bigarray[mcr].title}
                 </p>
             </div>
         </div>` + bigarray[mcr].content

         climec = mecams.find(function (mecams) {
            return mecams.created == `j${bigarray[mcr].pos}`
         })
         console.log('VE SE TEM TÁ',climec)
         if (climec != undefined) {
            console.log('OK, Pode ajeitar isso aqui e pra já!', climec.cl)
            if (climec.cl == true) {
                console.log('PODE IR')
                contel.style.height = 'fit-content'
            }
            climec.anistate = false
         }
        }
    }
}

// go to dictionary
function gotowords() {
    if (vocabopen == true) {
        console.log('THIS ISNT WHAT I WANTED TO BE, THIS ISNT WHAT WANTED TO BE')
        get1('vocab').style.backgroundColor = 'var(--verylightpink)'
        get1('words').style.backgroundColor = 'var(--lightpink)'
        repl = fixit()
        get1('vocabmng').innerHTML = innerbody
        innerbody = repl
        vocabopen = false
    }
}

/*
function loop(arraylist, d) {
    repeat = false
    newlist = []
    //console.log(arraylist)
    for (dial in arraylist) {
        //console.log('')
        //console.log(arraylist[dial])
        //console.log('--------')
        for (tones in arraylist[dial].objects) {
            //console.log(arraylist[dial].id + `.${tones}`)
            arraylist[dial].objects[tones].id = arraylist[dial].id + `.${tones}`
            //console.log(arraylist[dial].objects[tones])
            newlist.push(arraylist[dial].objects[tones])

            cont = document.createElement('div')
            cont.setAttribute('class','cont')
            cont.id = arraylist[dial].id + `.${tones}`
            bigarray.push({title: `${arraylist[dial].objects[tones].title}`, content: `${arraylist[dial].objects[tones].content}}`, objects: [], id: `${cont.id}`})
            //cont.innerHTML = ` <div class="center">
             //<p class="exptype"><img src="librius-materials/images/rar.png" alt="" class="ar">${arraylist[dial].objects[tones].title}</p></div>` + arraylist[dial].objects[tones].content
             cont.innerHTML = `<div class="center">
             <div class="exptype">
                 <p class="choice">
                     <img src="images/pencil.svg" class="ar" style="margin-right: 4px;">${arraylist[dial].objects[tones].title}
                 </p>
             </div>
         </div>` + arraylist[dial].objects[tones].content
             document.getElementById(`${arraylist[dial].id}`).appendChild(cont)
        }
        if (arraylist[dial].objects.length > 0) {
            repeat = true
        }
        //console.log('--------')
    }
   // console.log('repeat', newlist)
    if (repeat == true)
        loop(newlist)
}
*/


defsets = []
function CreateFunc(ind,action,number){
    this.ind = ind
    ////console.log('THISSSSSSSSS',ind)
    this.par1 = document.getElementsByClassName('ar')[this.ind]
    this.par2 = get2('cont')[this.ind]
    this.par3 = get2('center')[this.ind]

    this.l = late
    ////console.log('ACTION', action)
    if (action != "open") {
    this.clicked = false
    this.par1.style.transform = 'rotate(0deg)'
    }else{
        ////console.log('TRUEEEEEEEEEE')
    this.clicked = true
    this.par1.style.transform = 'rotate(49deg)'
    }

    late++
    this.a = `j${late}`
    this.number = number
    h1 = 0
    h2 = 100
    heightInPx = String(this.par3.offsetHeight) + 'px'
   
    this.SetDefault= function () {
        //par2.style.height = par3.offsetHeight
        heightInPx = String(this.par3.offsetHeight) + 'px'
       if (this.par3.innerText != 'Relações' && this.par3.innerText != 'Repetições' && this.par3.innerText != 'Combinações' && this.par3.innerText != 'Agrupamentos' ) {
        this.par2.style.height = heightInPx
        this.clicked = false
       }else{
            this.par2.style.height = '28px'
            this.clicked = false
       } }
    this.par1.setAttribute
    this.AddEvent = function() {
        ////console.log(this.a)
       this.par1.setAttribute('onclick',`cli(${this.clicked},${this.ind},'${this.a}',${this.number},${this.par3.offsetHeight})`)
       defsets.push({state: this.clicked, index: this.ind, jin: this.a, n: this.number, jor: this.par3.offsetHeight})
    }}

function cli(state,index,jin,n,jor) {      
    console.log('CAN YOU SEE IT DUMMY?')      
    me = document.getElementsByClassName('ar')
    this.jin = jin
    this.par1 = me[index]
    this.par2 = conts[index]
    this.par3 = cents[index]
    this.n = n

    search = mecams.find(function(mecams){
        return mecams.created == this.jin
       })

       //console.log(search)
       if (search != undefined) {
        //console.log(this.jin,search.anistate)
       }
        /*
       modify = false
       if (search != undefined) {
       if (search.cl == false) {
           modify = true
       }
       }else{
        modify = true
       }
       */
       //if (modify == true) {
        trueindex = Number(jin.replace('j',''))
        //console.log('was clicked!', trueindex)
        //console.log(document.getElementsByClassName('cont')[trueindex].id)
        elid = document.getElementsByClassName('cont')[trueindex].id
        elidtxt = ''
        for (trees = elid.length - 1; elid[trees] != '.' && trees > 0; trees--) {
            elidtxt+= elid[trees]
        }
        //console.log(trees, elidtxt)
        elidtxt = ''
        for (omo = 0; omo < trees; omo++) {
            elidtxt+= elid[omo]
        }
        //console.log('oficial text:', elidtxt)
        if (elidtxt != '') {
         element = document.getElementById(elidtxt)
         console.log(element.id)
         console.log(idlist)
         omori = idlist.find(function(idlist){
             return idlist.id == element.id
            })
            posid =  mecams.find(function(mecams){
             return mecams.created == 'j' + String(omori.pos)
            })
            console.log(omori.pos, posid)
            console.log(posid.anistate)
        }
     //}

       if (search == undefined || search.anistate == false) {
        if (elidtxt == '' || posid.anistate == false) {

        beg = this.par2.offsetHeight

        this.par3.style.height = jor + 'px'

        this.par2.style.height = 'fit-content'
        sul = this.par2.offsetHeight

    if (search != undefined) {
        search.comp++
        search.st = jor
        search.end = sul
       }else{
           if (state == true) {
            mecams.push({created:this.jin,comp:1,st:jor,end:sul,cl:state, anistate: false})
           }else{
            mecams.push({created:this.jin,comp:1,st:beg,end:sul,cl:state, anistate: false})
           } }
       search = mecams.find(function(mecams){
        return mecams.created == this.jin
       })

       if (search.cl == false) {
        search.anistate = true
        txt = String(this.par3.innerText)
           busca = txt.search(new RegExp('((Agrupamentos)|(Relações)|(Combinações)|(Repetições))','g'))

        if (this.par3.innerText == 'Resolução') {
            ih = search.st - 10
            eh = sul - 10
           }else{
            ih = search.st
            eh = sul
           }

    css = `@keyframes ${jin}-${search.comp} {
         0% {
            height: ${ih}px;
        }
        100% {
            height: ${eh}px;
        }}`
        this.par2.addEventListener("animationend", animationEnded)
        this.par2.style.animation = `${jin}-${search.comp} 1s`
        this.par2.style.height = 'fit-content'

        function delayedFunction () {
            this.par2.style.removeProperty("animation")
        }
        //setTimeout(delayedFunction, 1000)
       
       style = document.createElement('style')
       document.head.appendChild(style)
       style.appendChild(document.createTextNode(css))
       this.par1.style.transform = 'rotate(41.2deg)'
       search.cl = true
}else{
    search.anistate = true
        ih = search.st
        eh = sul

    css = `@keyframes ${jin}-${search.comp} {
        0% {
           height: ${eh}px;
       }
       100% {
           height: ${ih}px;
       }}`
    this.par2.addEventListener("animationend", animationEnded)
    this.par2.style.animation = `${jin}-${search.comp} 1s`
    this.par2.style.height = `${ih}px`

    function delayedFunction () {
        this.par2.style.removeProperty("animation")
    }
    //setTimeout(delayedFunction, 1000)

   style = document.createElement('style')
   document.head.appendChild(style)
   style.appendChild(document.createTextNode(css))
   this.par1.style.transform = 'rotate(0deg)'
   search.cl = false
    }

   function animationEnded(event) {
        //console.log('ANIMATION ENDED')
        //console.log(event.animationName)
        console.log('ANIMATION ENDED')
        king = event.animationName
        proceed = true
        trig = ''
        for (set = 0; set < king.length && proceed == true; set++) {
            if (king[set] == '-') {
                proceed = false
            }else{
                trig+= king[set]
            }
        }
        //console.log(trig)

        love = mecams.find(function (mecams) {
            return mecams.created == trig
        })
        //onsole.log(love)
        love.anistate = false
    }
}
}
}

function fixit() {
    
}

/*
htext = '<h1 class="vocabh">Vocabulary List</h1>'
    innerhtml = '<h1 class="vocabh">Vocabulary List</h1>'
    for (meteora in elements) {
        console.log(elements[meteora])
        search2 = mecams.find(function(mecams){
            return mecams.created == 'j' + meteora
           })
           console.log(search2)
           if (search2 == undefined) {
            innerhtml+= `<div class="cont">
            <div class="center">
            <div class="exptype">
                <p class="choice">
                    <img src="images/pencil.svg" class="ar" style="margin-right: 4px;">${elements[meteora].title}
                </p>
            </div>
          </div>` + elements[meteora].content + '</div>'
           }
    }
    return innerhtml
    */