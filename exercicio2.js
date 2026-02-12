const prompt = require('prompt-sync')()
function Usuario() {
    let id = Number(prompt(" sua idade "));

    if (id >= 18) {
        console.log(" pegar livros e tem idade suficiente");
    } else if (id >= 16) {
        console.log("pode pegar os livros e é menor de idade");
    } else {
        console.log("não pode pegar livros");
    }
}

Usuario();
