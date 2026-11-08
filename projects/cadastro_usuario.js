let nome = "Ellen";
let idade = 8;

function verificarIdade() {
    if (idade >= 18) {
            console.log("Usuário maior de idade");
    } else {
            console.log("Usuário menor de idade");
    }
}

for (let i = 0; i < 3; i++) {
           verificarIdade();
}