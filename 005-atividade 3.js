const prompt = require("prompt-sync")();

const produto = {
    nome: "Teclado Gamer",
    preco: 199.90,
    disponibilidade: true,
    tags: ["eletronicos", "perfiféricos", "gamer"]
};

console.log(produto);
console.log(typeof produto)
console.log(typeof produto.tags)
