
function initializePartitioner() {
    // pegar os valores dos inputs
    width = document.getElementById('width').value;
    height = document.getElementById('height').value;
    cols = document.getElementById('columns').value;
    rows = document.getElementById('rows').value;
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

    fractionlist = []
    indexfraction = 0
    for (row = 0; row < rows; row++) {
    for (col = 0; col < cols; col++) {
    // Criando os dividers por coluna para cada linha
    fraction = document.createElement('div');
    fraction.classList.add('fraction');

    // width = 100% / cols
    fraction.style.width = String(100 / cols) + '%';

    // height = 100% / rows
    fraction.style.height = String(100 / rows) + '%';

    fraction.style.left = String(100 / cols * col) + '%';
    fraction.style.top = String(100 / rows * row) + '%';

    // adicionando os spans de largura e altura dentro do fraction
    widthspan = document.createElement('span');
    widthspan.innerText = width + '/' + cols;
    widthspan.classList.add('widthspan');

    heightspan = document.createElement('span');
    heightspan.innerText = height + '/' + rows;
    heightspan.classList.add('heightspan');

    heightspan.style.zIndex = '10'

    if (col == cols - 1) {
        fraction.style.borderRight = '2px solid black'; // adicionando borda direita ao último divider
    }

    if (row == rows - 1) {
        fraction.style.borderBottom = '2px solid black'; // adicionando borda inferior ao último divider
    }

    colorinput = document.createElement('input');
    colorinput.setAttribute('type','color')
    colorinput.classList.add('colorinput')
    
    divider.appendChild(fraction);
    fraction.appendChild(colorinput);
    fraction.appendChild(widthspan);
    fraction.appendChild(heightspan);
    fractionlist.push(new Input(indexfraction))
    fractionlist[indexfraction].changeColor()
    fractionlist[indexfraction].fractionClicked()

    indexfraction++
    }
    }
}

function Input(index) {
    this.index = index
    this.fraction = dividers[0].getElementsByClassName('fraction')[index]
    this.colorinput = this.fraction.getElementsByClassName('colorinput')[0]
    this.changeColor = function () {
       this.colorinput.addEventListener("change", () => {
            console.log(index)
            this.fraction.style.backgroundColor = this.colorinput.value
        })
    }
    this.fractionClicked = function () {
        this.fraction.addEventListener('mouseenter', () => {
             this.colorinput.classList.toggle('visible')
        })
    }
}