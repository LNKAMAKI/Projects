function sortWordsByNumber(palavrasPrimitivas,s) {
for (palavra in palavrasPrimitivas) {
    word = palavrasPrimitivas[palavra][s].toLowerCase()
    console.log('word',word)
    break_word = ''
    words_number = 0
    for (car in word) {
        console.log('caractere',word[car])
        if (word[car] != ' ') {
             if (break_word == '') {
                console.warn('new word')
                words_number += 1
            }
            break_word += word[car]
        }else{
            break_word = ''
        }
        }
        console.warn('words number:',words_number)
        palavrasPrimitivas[palavra].words_number = words_number
}
}