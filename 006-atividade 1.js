const entrada = require("prompt-sync")();

let numero = Number(entrada("Digite um número inicial: "));

for (let n = numero; n >= 0; n--) {
    console.log(n);
}

console.log("Decolagem autorizada!");
entrada("Pressione ENTER para encerrar o programa!");
