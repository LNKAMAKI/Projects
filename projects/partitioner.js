
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

    elements = new CreateFractions(divider)
}

function Input(index,appender) {
    this.index = index
    this.fraction = appender.getElementsByClassName('fraction')[index]
    this.colorinput = this.fraction.getElementsByClassName('colorinput')[0]
    this.colorinput_selected = false
    this.changeColor = function () {
       this.colorinput.addEventListener("change", () => {
            this.fraction.style.backgroundColor = this.colorinput.value
            this.colorinput.classList.remove('visible')
            this.colorinput.classList.remove('visible2')
        })

         this.colorinput.addEventListener("click", () => {
            this.colorinput.classList.toggle('visible2')
            if (this.colorinput_selected == false) {
                this.colorinput_selected = true
            }
        })

         document.body.addEventListener("click", () => {
             if (this.colorinput_selected == true && this.fractionhovered == false) {
                this.colorinput_selected = false
                this.colorinput.classList.remove('visible2')
            }
        })

    }

    this.fractionhovered = false
    this.fractionClicked = function () {
        this.fraction.addEventListener('mouseenter', () => {
             this.colorinput.classList.add('visible')
             this.fractionhovered = true
        })

         this.fraction.addEventListener('mouseleave', () => {
             this.colorinput.classList.remove('visible')
             this.fractionhovered = false
        })
    }
}

function CreateFractions(appender) {
    this.fractionlist = []
    this.indexfraction = 0
    for (row = 0; row < rows; row++) {
    for (col = 0; col < cols; col++) {
    // Criando os dividers por coluna para cada linha
    fraction = document.createElement('div');
    fraction.classList.add('fraction');

    // width = 100% / cols
    fraction.style.width = String(100 / cols) + '%';

    // height = 100% / rows
    fraction.style.height = String(100 / rows) + '%';

    // posicionando no divider
    fraction.style.left = String(100 / cols * col) + '%';
    fraction.style.top = String(100 / rows * row) + '%';

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
    heightspan.classList.add('show')    

    if (row == rows - 1)
    widthspan.classList.add('show')

    widthspan.style.zIndex = '10'

    if (col == 0) 
        fraction.style.borderLeft = 'none'; // adicionando borda direita ao último divider
    

    if (row == 0) 
        fraction.style.borderTop= 'none'; // adicionando borda inferior ao último divider
    

    colorinput = document.createElement('input');
    colorinput.setAttribute('type','color')
    colorinput.value = color
    colorinput.classList.add('colorinput')
    
    // adicionando os elementos ao documento
    appender.appendChild(fraction);
    fraction.appendChild(colorinput);
    fraction.appendChild(widthspan);
    fraction.appendChild(heightspan);

    this.fractionlist.push(new Input(this.indexfraction,appender))
    this.fractionlist[this.indexfraction].changeColor()
    this.fractionlist[this.indexfraction].fractionClicked()

    this.indexfraction++
    }
    }
    return this.fractionlist
}