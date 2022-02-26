:root {
    --fonte1: Verdana, Gemeva, Tahoma, sans-serif;
    --fonte2: 'Passion One', cursive;
    --fonte3: 'Sriracha', cursive;
}
* {
    margin: 0px;
    padding: 0px;
    font-size: 1em;
}
html, body {
    min-height: 100vh;
    background-color: darkgray;
    font-family: var(--fonte1);
}
header {
    background-color: black;
    color: white;
    text-align: center;
}
header > h1 {
    padding-top: 50px;
    font-variant: small-caps;
    font-family: var(--fonte2);
    font-size: 10vw;
}
header > p {
    padding-bottom: 50px;
}
header a, footer a {
color: white;
text-decoration: none;
font-weight: bold;
}
header a:hover, footer a:hover{
    text-decoration: underline;
}
section {
 padding-top: 10vh;
 padding-bottom: 10vh;
 line-height: 2em;
 padding-left: 30px;
 font-family: var(--fonte3);
 font-size: 3.5vw;
}
section > p {
    padding-bottom: 2em;
}
section.normal {
    background-color: white ;
    color: black;
}

section.imagem {
    background-color: rgb(51, 51, 51);
    color: white;
    box-shadow: inset 6px 6px 13px 0px rgba(0, 0, 0, 0.514);
    background-size: cover;
    background-attachment: fixed;
}
section.imagem > p {
    background-color: rgb(0, 0, 0, 0.253);
    padding: 5px;
    display: inline-block;
    text-shadow: 2px 2px 0px black;
}
section#img01 {
background-image: url('../imagens/background001.jpg');
background-position: right center;
}
section#img02 {
    background-image: url('../imagens/background002.jpg');
}
footer {
    background-color: black;
    color: white;
    text-align: center;
    padding: 10px;
}