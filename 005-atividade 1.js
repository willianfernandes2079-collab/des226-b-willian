const prompt = require("prompt-sync")();

console.log("================================");
console.log("       CARTÃO DE VISITAS");
console.log("================================");

const nome = prompt("Digite seu nome completo: ");
const profissao = prompt("Digite sua profissão ou cargo atual: ");
const anoNascimento = prompt("Digite o ano em que você nasceu: ");

console.log("================================");
console.log(`Nome: ${nome}`);
console.log(`Profissão: ${profissao}`);
console.log(`Ano de nascimento: ${anoNascimento}`);
console.log("================================");

console.log("Tipo da variável nome:", typeof nome);
