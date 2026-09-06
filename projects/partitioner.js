
function initializePartitioner() {
    // pegar os valores dos inputs
    width = document.getElementById('width').value;
    height = document.getElementById('height').value;
    numfractions = document.getElementById('numfractions').value;

    maincontainer = document.getElementsByTagName('main')[0];

    console.log(document.getElementsByClassName('divider'));
    // criando o retângulo com as dimensões especificadas
    divider = document.createElement('div');
    ratio1 = Number(width) / Number(height); // razão entre largura e altura (aspect ratio)
    ratio2 = Number(height) / Number(width); // razão entre altura e largura (1/aspect ratio)
    divider.style.width = '100%'; // offset width for the divider
    //divider.style.height = '100%'; // offset height for the divider
    divider.style.aspectRatio = String(ratio1);

    divider.classList.add('divider');
    maincontainer.appendChild(divider);
}