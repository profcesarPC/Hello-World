function corAleatoria() {
    // Função para gerar uma cor aleatória
    const letras = "0123456789ABCDEF";
    let cor = "#";
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

function inserirNome() {
    let nomeUsuario = prompt("Qual o seu nome?");
    let elemento = document.querySelector("#nome-usuário");
    elemento.textContent = nomeUsuario;
    elemento.style.color = corAleatoria(); // Define a cor inicial ao exibir o nome
    elemento.onclick = function() {
        elemento.style.color = corAleatoria(); // Muda a cor toda vez que o nome for clicado
    };
}

inserirNome();

let linguagens = ["JavaScript", "Python", "C++"];

console.log(linguagens[0]) // “JavaScript”
console.log(linguagens[1]) // “Python”
console.log(linguagens[2]) // “C”

const item = document.querySelector("#lista");
item.textContent = linguagens[0];

