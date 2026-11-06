const entrada = require("prompt-sync")();

let soma = 0;
let quantidade = 0;
let numero;

console.log("--- SOMA CONTÍNUA (Digite 0 para parar) ---");

do {
    numero = Number(entrada("Digite um número: "));

    if (numero !== 0) {
        soma = soma + numero;
        quantidade++;
    }
} while (numero !== 0);

console.log("Total somado: " + soma);
console.log("Quantidade de valores somados: " + quantidade);
entrada("Pressione ENTER para encerrar o programa!");
