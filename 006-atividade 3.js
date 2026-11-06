const entrada = require("prompt-sync")();

let inicio = Number(entrada("Digite o número inicial: "));
let fim = Number(entrada("Digite o número final: "));

for (let numero = inicio; numero <= fim; numero++) {
    console.log("\n--- TABUADA DO " + numero + " ---");

    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        console.log(numero + " X " + multiplicador + " = " + numero * multiplicador);
    }
}

entrada("Pressione ENTER para encerrar o programa!");
