const prompt = require("prompt-sync")();

// 1. Guarda os dois valores em variaveis
let num1 = prompt("Digite o primeiro numero: ");
let num2 = prompt("Digite o segundo numero: ");

// 2. Junta os textos digitados, pois prompt retorna uma string
let soma = num1 + num2;

console.log("Resultado:", soma);

// 3. Exibe o tipo de num1 e de soma
console.log("Tipo de num1:", typeof num1);
console.log("Tipo de soma:", typeof soma);