console.log('EYES ON THE HIGHWAY')
elements = [
    {html: 'a', objects: [
        {html: 'a', objects: []}
    ]},
    {html: 'a', objects: [
        {html: 'a', objects: [
            {html: 'a', objects: []},
            {html: 'a', objects: []}
        ]}
    ]},
    {html: 'a', objects: [
        {html: 'a', objects: []}
    ]}
]
console.log('el',elements)

for (ciyu in elements) {
 elements[ciyu].id = `${ciyu}`
 console.log(elements[ciyu])
}
loop(elements)
lists = []
function loop(arraylist, d) {
    repeat = false
    newlist = []
    console.log(arraylist)
    for (dial in arraylist) {
        console.log('')
        console.log(arraylist[dial])
        console.log('--------')
        for (tones in arraylist[dial].objects) {
            console.log(arraylist[dial].id + `.${tones}`)
            arraylist[dial].objects[tones].id = arraylist[dial].id + `.${tones}`
            console.log(dial,arraylist[dial].objects[tones], tones)
            newlist.push(arraylist[dial].objects[tones])
        }
        if (arraylist[dial].objects.length > 0) {
            repeat = true
        }
        console.log('--------')
    }
    console.log('repeat', newlist)
    if (repeat == true)
        loop(newlist)
}