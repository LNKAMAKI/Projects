
let colorize_desktop_state = 'off'
let divide_state = 'off'
let delete_state = 'off'
let elementsList = []
let elements_inOrganizedList = []
function load() {
      colorize_desktop_button = document.getElementsByClassName('colorize-desktop')[0]
      divide_button = document.getElementsByClassName('divide')[0]
      delete_button = document.getElementsByClassName('deletar')[0]
}
function colorize_desktop () {
    // botões de estado
    colorize_desktop_button = document.getElementsByClassName('colorize-desktop')[0]
    colorize_desktop_button.classList.toggle('active')
    if (colorize_desktop_state == 'off') {
        colorize_desktop_state = 'on'
        divide_state = 'off'
        divide_button.classList.remove('active')
        delete_state = 'off'
        delete_button.classList.remove('active')
        document.getElementsByClassName('divide-tab')[0].classList.remove('show2')
    }else{
        colorize_desktop_state = 'off'
    }
}

function divide () {
    // botões de estado
    divide_button = document.getElementsByClassName('divide')[0]
    divide_button.classList.toggle('active')
    if (divide_state == 'off') {
        divide_state = 'on'
        document.getElementsByClassName('divide-tab')[0].classList.add('show2')
        colorize_desktop_state = 'off'
        colorize_desktop_button.classList.remove('active')
        delete_state = 'off'
        delete_button.classList.remove('active')
    }else{
        divide_state = 'off'
        document.getElementsByClassName('divide-tab')[0].classList.remove('show2')
    }
}

function deletar () {
    // botões de estado
    delete_button = document.getElementsByClassName('deletar')[0]
    delete_button.classList.toggle('active')
    if (delete_state == 'off') {
        delete_state = 'on'
        colorize_desktop_state = 'off'
        colorize_desktop_button.classList.remove('active')
        divide_state = 'off'
        divide_button.classList.remove('active')
        document.getElementsByClassName('divide-tab')[0].classList.remove('show2')
    }else{
        delete_state = 'off'
    }
}

function initializePartitioner() {
    // pegar os valores dos inputs
    elementsList = []
    elements_inOrganizedList = []
    width = document.getElementById('width').value;
    height = document.getElementById('height').value;
    color = document.getElementById('color').value;

    maincontainer = document.getElementsByTagName('main')[0];

    dividers = document.getElementsByClassName('divider')
    if (dividers.length > 0) {
        console.log('removendo dividers existentes');
        maincontainer.removeChild(dividers[0]);
    }
    // criando o retângulo com as dimensões especificadas
    divider = document.createElement('div');
    ratio = Number(width) / Number(height); // razão entre largura e altura (aspect ratio)
    if (ratio >= 1.9) {
          divider.style.width = '80%'; // offset width for the divider
    }else{
        divider.style.height = '80%'; // offset height for the divider
    }
    divider.style.aspectRatio = String(ratio); // definindo a razão de aspecto do retângulo
    divider.style.backgroundColor = color; // definindo a cor do retângulo

    divider.classList.add('divider'); // adicionando classe divider para o retângulo
    maincontainer.appendChild(divider); // adicionando o retângulo ao maincontainer

    elements = new CreateFractions(divider,elementsList,elements_inOrganizedList)
}

function Input(index,appender,elementinlist,elementsorganized,row,col) {
    this.index = index
    this.elementinlist = elementinlist
    this.elementsorganized = elementsorganized
    this.row = row
    this.col = col
    this.fraction = appender.getElementsByClassName('fraction')[this.index]
    this.colorinput = this.fraction.getElementsByClassName('colorinput')[0]
    this.colorinput_selected = false
    this.can_delete = true
    this.changeColor = function () {
       this.colorinput.addEventListener("change", () => {
        if (colorize_desktop_state == 'on') {
            this.fraction.style.backgroundColor = this.colorinput.value
            this.colorinput.classList.remove('visible')
            this.colorinput.classList.remove('visible2')
        }
        })

         this.colorinput.addEventListener("click", () => {
             if (colorize_desktop_state == 'on') {
            this.colorinput.classList.toggle('visible2')
            if (this.colorinput_selected == false) {
                this.colorinput_selected = true
            }
        }
        })

         document.body.addEventListener("click", () => {
             if (colorize_desktop_state == 'on') {
             if (this.colorinput_selected == true && this.fractionhovered == false) {
                this.colorinput_selected = false
                this.colorinput.classList.remove('visible2')
            }
        }
        })

    }

    this.fractionhovered = false
    this.fractionClicked = function () {
        this.fraction.addEventListener('mouseenter', () => {
             if (colorize_desktop_state == 'on') {
             this.colorinput.classList.add('visible')
             }
             this.fractionhovered = true
        })

         this.fraction.addEventListener('mouseleave', () => {
             if (colorize_desktop_state == 'on') {
             this.colorinput.classList.remove('visible')
             }
             this.fractionhovered = false
        })

        // código para dividir as frações em mais frações
        this.fraction.addEventListener('click',() => {
            if (this.fractionhovered == true && divide_state == 'on') {
            console.log('keypressed')
            console.log('essa fracao foi pressionada',this.fraction)
            console.log('elementinlist',Array.isArray(elementinlist[0]))
            if (Array.isArray(elementinlist[0]) == true) {
               console.log('ela contém filhos?',elementinlist[this.index].length)
            }else{
                console.log('ela contém filhos?',elementinlist[this.index + 1].length)
            }
            console.log('elementinlist',this.index,elementinlist[this.index])
            console.log('')

                if (Array.isArray(this.elementinlist[0]) == true) { // se for um array ([Input])
                    if (this.elementinlist[this.index].length == 1) { // se não tiver filhos
                    CreateFractions(this.fraction,this.elementinlist[this.index],this.elementsorganized[this.row][this.col])
                    }
                }else{ // se for um objeto ({Input})
                    if (this.elementinlist[this.index + 1].length == 1) { // se não tiver filhos
                    CreateFractions(this.fraction,this.elementinlist[this.index + 1],this.elementsorganized[this.row][this.col])
                    }
                }
            }else if (delete_state == 'on') {
                //this.fraction.style.backgroundColor = 'yellow'
                console.log('remover',this.index, this.fraction)
                if (this.can_delete == true) {
                if (Array.isArray(elementinlist[0]) == true) { 
                    console.log(elementinlist)
                    if (elementinlist[this.index].length == 1) {
                        console.log('REMOVE')
                    console.log('removido')
                    this.fraction.remove()
                    console.log(elementinlist)
                    for (a = elementinlist.length - 1; a > this.index; a--) {
                        console.log(a,elementinlist[a],elementinlist[a][0].fraction)
                        this.elementinlist[a][0].index = this.elementinlist[a][0].index - 1
                    }
                    elementsList.splice(this.index,1)
                    console.log('HEEEEY',this.elementsorganized[this.row][this.col])
                    this.elementsorganized[this.row][this.col].push('a')
                    borderize(this.elementinlist,this.elementsorganized)
                    }
                }else{
                    if (this.elementinlist[this.index + 1].length == 1) {
                    console.log('removido outro')
                    this.fraction.remove()

                    //console.log(this.elementinlist[2][0].fraction)
                     for (a = this.elementinlist.length - 1; a > this.index + 1; a--) {
                        console.log(a,this.elementinlist[a][0].fraction)
                        this.elementinlist[a][0].index = this.elementinlist[a][0].index - 1
                    }
                    elementinlist.splice(this.index + 1,1)
                    console.log('HEEEEY',this.elementsorganized[this.row][this.col])
                    this.elementsorganized[this.row][this.col].push('a')
                    borderize(this.elementinlist,this.elementsorganized)
                    console.log('can delete = false!!')
                    elementinlist[0].can_delete = false
                    }
                }
            }else{
                console.log('não deletar!!')
                if (Array.isArray(elementinlist[0]) == false) {
                    elementinlist[0].can_delete = false
                }
                this.can_delete = true
            }
        }})
    }
}

function CreateFractions(appender,elementinlist,elementsorganized) {
    //this.fractionlist = []
    this.indexfraction = 0

    if (elementinlist != elementsList) { // se o elemento mãe NÃO for o divider
        cols = document.getElementById('columnsdiv').value;
        rows = document.getElementById('rowsdiv').value;
    }else{
        cols = document.getElementById('columns').value;
        rows = document.getElementById('rows').value;
    }

    for (row = 0; row < rows; row++) {
        elementsorganized.push([])
    for (col = 0; col < cols; col++) {
    // Criando os dividers por coluna para cada linha
    elementsorganized[row].push([])
    fraction = document.createElement('div');
    fraction.classList.add('fraction');

    // width = 100% / cols
    fraction.style.width = `calc(${String(100 / cols)}% - 5px)`;

    // height = 100% / rows
    fraction.style.height = `calc(${String(100 / rows)}% - 5px)`;

    // posicionando no divider
     //fraction.style.left = String(100 / cols * col) + '%';
   //fraction.style.top = String(100 / rows * row) + '%';

    
    if (col != 0) {
        fraction.style.left = `calc(${String(100 / cols * col)}% - 5px)`;
    }else{
        fraction.style.left = '0px'
    }

    if (row != 0) {
        fraction.style.top = `calc(${String(100 / rows * row)}% - 5px)`;
    }else{
        fraction.style.top = '0px'
    }
    

    // setting background color
    fraction.style.backgroundColor = color

    // adicionando os spans de largura e altura dentro do fraction
    widthspan = document.createElement('span');
    widthspan.innerText = width + '/' + cols;
    widthspan.classList.add('widthspan');

    heightspan = document.createElement('span');
    heightspan.innerText = height + '/' + rows;
    heightspan.classList.add('heightspan');

    if (col == 0) 
    //heightspan.classList.add('show')    

    if (row == rows - 1) {
    //widthspan.classList.add('show')
    }

    widthspan.style.zIndex = '120'

    if (col == 0) 
        fraction.style.borderLeft = 'none'; // adicionando borda direita ao último divider
    

    if (row == 0) 
        fraction.style.borderTop= 'none'; // adicionando borda inferior ao último divider
    

    colorinput = document.createElement('input');
    colorinput.setAttribute('type','color')

    
    if (elementinlist != elementsList) { // se o elemento mãe NÃO for o divider
        colorinput.value = elementinlist[0].colorinput.value
        fraction.style.backgroundColor = colorinput.value
       // console.log(elementinlist[0].fraction,elementinlist[0].colorinput.value,'HEY')
    }else{
        colorinput.value = fraction.style.backgroundColor
    }
    
    colorinput.classList.add('colorinput')
    
    // adicionando os elementos ao documento
    appender.appendChild(fraction);
    fraction.appendChild(colorinput);
    fraction.appendChild(widthspan);
    fraction.appendChild(heightspan);

    element = new Input(this.indexfraction,appender,elementinlist,elementsorganized,row,col)
    elementinlist.push([element])
    element.changeColor()
    element.fractionClicked()

    this.indexfraction++
    }
    }
    //return this.fractionlist
}

function borderize(elementsingrid,arraysgrid) {
    console.log('Elements in the Grid',elementsingrid)
    console.log('GRID',arraysgrid)
    if (Array.isArray(elementsingrid[0]) == false) {
        for (element = 1; element < elementsingrid.length; element++) {
            console.log(element,elementsingrid[element][0].fraction)
            row = elementsingrid[element][0].row
            col = elementsingrid[element][0].col

            if (row != arraysgrid.length - 1) { // se o elemento não estiver na última linha
                console.log('pode ver embaixo')
                console.log('tem elemento embaixo?')
                console.log(arraysgrid[row + 1][col])
                if (arraysgrid[row + 1][col].length == 0) {
                    console.log('sim')
                }else{
                    console.log('não')
                    elementsingrid[element][0].fraction.style.borderBottom = '10px solid black'
                }
            }
            if (col != arraysgrid[row].length - 1) { // se o elemento não estiver na última coluna
                 console.log('pode ver a direita')
                 console.log('tem elemento na direita?')
                 console.log(arraysgrid[row][col + 1])
                 if (arraysgrid[row][col + 1].length == 0) {
                    console.log('sim')
                }else{
                    console.log('não')
                    elementsingrid[element][0].fraction.style.borderRight = '10px solid black'
                }
            }
        }
        if (elementsingrid.length == 1) {
            console.log('está vazio, precisa apagar')
            arraysgrid.splice(0,arraysgrid.length)
        }
    }
}